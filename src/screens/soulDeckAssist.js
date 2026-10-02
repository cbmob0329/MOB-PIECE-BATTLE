import {soulById,classNames,ensureSoulDecks,setSoulDeck,validateSoulDeck} from '../game/soul-battle.js';
import {fusionRecommendations,planSoulDeck,addRoute,countIds} from '../game/soul-deck-assist.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const modes={seeds:['選んだ融合先に合うシード','ミドル・MOBを残して、シード30体を選び直します。'],routes:['中間ミドルも揃える','選んだMOBへの融合ルートを補完し、シードも選び直します。'],fill:['空き枠だけ補充','編成中のフィギュアと順番を残して、不足する枠を所持分から補充します。']};
const undo=new Map();
export function deckAssistMarkup(){return `<section class="deck-assist"><h2>融合先から、デッキをつくる</h2><p>まずミドル・MOBの「＋ 編成」で使いたい仲間を選択。カードをタップすると、おすすめシードと融合ルートが見られます。</p><div>${Object.entries(modes).map(([id,[title,body]])=>`<button data-deck-plan="${id}"><b>${title}</b><small>${body}</small></button>`).join('')}</div><button data-deck-undo>直前のアシスト編成に戻す</button><small>所持分だけで作成し、変更内容を確認してから反映します。</small></section>`;}

export function handleDeckAssist(button,c,{render,persist,toast}){
 const id=button.dataset.soulRecommend,mode=button.dataset.deckPlan,isUndo=button.hasAttribute('data-deck-undo');if(!id&&!mode&&!isUndo)return false;
 const profile=c.profile,slot=profile.soulDeckSlot||0,original=[...ensureSoulDecks(profile)];
 const commit=deck=>{const errors=validateSoulDeck(deck,profile.owned).errors;if(errors.length)throw Error(errors[0]);undo.set(slot,{before:[...ensureSoulDecks(profile)],after:[...deck]});setSoulDeck(profile,deck);persist();render({preserveScroll:true});};
 if(isUndo){const prior=undo.get(slot);if(!prior||JSON.stringify(prior.after)!==JSON.stringify(original)){toast('戻せるアシスト編成がありません。編成後に手動変更した場合は戻せません。');return true;}try{const errors=validateSoulDeck(prior.before,profile.owned).errors;if(errors.length)throw Error(errors[0]);setSoulDeck(profile,prior.before);undo.delete(slot);persist();render({preserveScroll:true});toast('アシスト前の編成に戻しました');}catch(e){toast(e.message);}return true;}
 const dialog=document.createElement('dialog');dialog.className='deck-assist-dialog';dialog.setAttribute('aria-label',id?'おすすめシードと融合ルート':'アシスト編成の確認');document.body.append(dialog);
 const previousFocus=document.activeElement;const close=()=>{dialog.close();dialog.remove();window.removeEventListener('hashchange',close);if(previousFocus?.isConnected)previousFocus.focus();};
 window.addEventListener('hashchange',close);dialog.oncancel=e=>{e.preventDefault();close();};
 const shell=(title,body)=>{dialog.innerHTML=`<header><h2>${esc(title)}</h2><button data-assist-close aria-label="閉じる">×</button></header><section>${body}<p class="assist-error" role="alert"></p></section>`;};
 const art=f=>`<img src="${esc(f.image)}" alt="${esc(f.name)}" loading="lazy">`;
 const cards=needs=>`<div class="assist-cards">${Object.entries(needs).map(([fid,n])=>{const f=soulById.get(fid);return `<div>${art(f)}<b>${esc(f.name)} ×${n}</b><small>${classNames[f.soulClass]} · 所持 ${profile.owned[fid]||0} / 編成 ${countIds(original)[fid]||0}</small></div>`;}).join('')}</div>`;
 let routes=[],pending=null;
 function preview(deck,warnings=[],title='この編成を反映しますか？'){
  const before=countIds(original),after=countIds(deck),added={},removed={};for(const fid of new Set([...original,...deck])){const n=(after[fid]||0)-(before[fid]||0);if(n>0)added[fid]=n;if(n<0)removed[fid]=-n;}
  const check=validateSoulDeck(deck,profile.owned);pending=[...deck];
  shell(title,`<p>DECK ${slot+1} · シード ${check.counts.seed}/30 · ミドル ${check.counts.middle}/10 · MOB ${check.counts.mob}/5</p><strong>${check.valid?'45体の編成が完成':'編成途中として保存します'}</strong>${warnings.map(w=>`<p class="assist-warning">${esc(w)}</p>`).join('')}<h3>追加</h3>${Object.keys(added).length?cards(added):'<p>追加なし</p>'}<h3>外れるフィギュア</h3>${Object.keys(removed).length?cards(removed):'<p>なし</p>'}<p>所持数は変わりません。シードは表示順にドローされます。</p><div class="assist-actions"><button data-assist-close>キャンセル</button><button data-assist-apply>この編成を反映</button></div>`);
 }
 function recommend(){
  const f=soulById.get(id);if(!f)throw Error('フィギュアが見つかりません');routes=fusionRecommendations(id,profile.owned,original);
  shell(f.name+'のおすすめシード',`<p>${classNames[f.soulClass]} · ATK ${f.atk} / DEF ${f.def}</p><details><summary>ソウルスキル・性能</summary><h3>${esc(f.soulSkill.name)}</h3><p>${esc(f.soulSkill.description)}</p></details><p>MOBは中間ミドルを経由して、シードまで逆算しています。同じ素材が2体必要な場合は必要数も表示します。各ルートはこの1体を作るための素材例です。</p>${routes.map((r,i)=>`<article class="assist-route"><h3>おすすめルート ${i+1}</h3>${r.steps.map(step=>`<p class="assist-flow">${step.materials.map(fid=>esc(soulById.get(fid).name)).join(' ＋ ')}<br>↓ ${step.special?'MOB SOUL FUSION':'融合'}<br><b>${esc(soulById.get(step.target).name)}</b></p>`).join('')}${cards(r.seeds)}<div class="assist-actions"><button data-assist-seeds="${i}">このシードを追加</button><button data-assist-route="${i}">融合ルート一式を追加</button></div></article>`).join('')||`<p class="assist-warning">現在の所持数では、おすすめルート候補が見つかりません。必要な属性・タグの素材を集めてください。</p><ul>${f.fusionMaterials.map(r=>`<li>${esc(r.label)}</li>`).join('')}</ul>`}`);
 }
 dialog.onclick=e=>{const b=e.target.closest('button');if(!b)return;try{
  if(b.hasAttribute('data-assist-close')){close();return;}
  if(b.hasAttribute('data-assist-apply')){if(!pending)return;if((profile.soulDeckSlot||0)!==slot||JSON.stringify(ensureSoulDecks(profile))!==JSON.stringify(original))throw Error('元のデッキが変更されています。閉じて、もう一度お試しください。');commit(pending);close();toast('アシスト編成を反映しました');return;}
  const i=b.dataset.assistSeeds??b.dataset.assistRoute;if(i!==undefined){const r=routes[Number(i)];preview(addRoute(original,b.hasAttribute('data-assist-seeds')?r.seeds:r.needs,profile.owned));}
 }catch(error){dialog.querySelector('.assist-error').textContent=error.message;}};
 shell('素材を確認中…','<p>所持フィギュアと融合レシピを照合しています。</p>');dialog.showModal();
 // Paint the loading state before doing route search.
 setTimeout(()=>{if(!dialog.isConnected)return;try{if(id)recommend();else{const plan=planSoulDeck(original,profile.owned,mode);preview(plan.deck,plan.warnings,modes[mode][0]);}}catch(error){shell('編成を確認してください',`<p>${esc(error.message)}</p><button data-assist-close>閉じる</button>`);}},30);
 return true;
}
