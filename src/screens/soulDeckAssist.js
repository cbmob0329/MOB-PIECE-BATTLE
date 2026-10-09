import {matchesMaterial,recipeMaterialClass} from '../game/fusion-rules.js';
import {openDeckReplace} from './deckReplace.js';
import {soulDeckAddStatus} from '../game/soul-battle.js';
import {soulPerformance} from '../components/soul-performance.js';
import {mountAcePicker} from './acePicker.js';
import {commitProfile} from '../game/profile.js?v=7.3.0';
import {availableDeckOwned} from '../game/deck-legality.js';
import {buildAceDeck} from '../game/ace-deck.js';
import {soulFigures,prepareSoulDeck} from '../game/soul-battle.js';
import {sound} from '../audio/audio.js';
import {soulById,classNames,ensureSoulDecks,setSoulDeck,validateSoulDeck} from '../game/soul-battle.js';
import {fusionRecommendations,planSoulDeck,addRoute,countIds} from '../game/soul-deck-assist.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const modes={aces:['エース5体から編成','選んだ5体と融合素材を軸に45枚を作成します。'],seeds:['選んだ融合先に合うシード','ミドル・MOBを残して、シード30体を選び直します。'],routes:['中間ミドルも揃える','選んだMOBへの融合ルートを補完し、シードも選び直します。'],fill:['空き枠だけ補充','編成中のフィギュアと順番を残して、不足する枠を所持分から補充します。']};
const undo=new Map();
export function deckAssistMarkup(){return `<section class="deck-assist"><h2>融合先から、デッキをつくる</h2><p>まずミドル・MOBの「＋ 編成」で使いたい仲間を選択。カードをタップすると、おすすめシードと融合ルートが見られます。</p><div>${Object.entries(modes).map(([id,[title,body]])=>`<button data-deck-plan="${id}"><b>${title}</b><small>${body}</small></button>`).join('')}</div><button data-deck-undo>直前のアシスト編成に戻す</button><small>所持分だけで作成し、変更内容を確認してから反映します。</small></section>`;}

export function handleDeckAssist(button,c,{render,persist,toast}){
 const id=button.dataset.soulRecommend,mode=button.dataset.deckPlan,isUndo=button.hasAttribute('data-deck-undo');if(!id&&!mode&&!isUndo)return false;
 const profile=c.profile,slot=profile.soulDeckSlot||0,original=[...ensureSoulDecks(profile)],owned=availableDeckOwned(profile);
 const commit=deck=>{const errors=validateSoulDeck(deck,profile.owned,{profile,slot}).errors;if(errors.length)throw Error(errors[0]);const previous=[...ensureSoulDecks(profile)];if(!commitProfile(prepareSoulDeck(profile,deck)))throw Error('保存できませんでした。編成は変更していません。');undo.set(slot,{before:previous,after:[...deck]});sound.play('deckArrange');render({preserveScroll:true});};
 if(isUndo){const prior=undo.get(slot);if(!prior||JSON.stringify(prior.after)!==JSON.stringify(original)){toast('戻せるアシスト編成がありません。編成後に手動変更した場合は戻せません。');return true;}try{const errors=validateSoulDeck(prior.before,profile.owned,{profile,slot}).errors;if(errors.length)throw Error(errors[0]);if(!commitProfile(prepareSoulDeck(profile,prior.before)))throw Error('保存できませんでした');undo.delete(slot);sound.play('deckArrange');render({preserveScroll:true});toast('アシスト前の編成に戻しました');}catch(e){toast(e.message,'error');}return true;}
 const dialog=document.createElement('dialog');dialog.className='deck-assist-dialog';dialog.setAttribute('aria-label',id?'おすすめシードと融合ルート':'アシスト編成の確認');document.body.append(dialog);
 let picker=null,building=false,applied=false;
 const viewport=()=>{const v=window.visualViewport;dialog.style.setProperty('--assist-height',`${v?.height||window.innerHeight}px`);dialog.style.setProperty('--assist-top',`${v?.offsetTop||0}px`);};viewport();window.visualViewport?.addEventListener('resize',viewport);window.visualViewport?.addEventListener('scroll',viewport);
 const previousFocus=document.activeElement;const close=()=>{picker?.dispose();window.visualViewport?.removeEventListener('resize',viewport);window.visualViewport?.removeEventListener('scroll',viewport);dialog.close();dialog.remove();window.removeEventListener('hashchange',close);if(previousFocus?.isConnected)previousFocus.focus();};
 window.addEventListener('hashchange',close);dialog.oncancel=e=>{e.preventDefault();close();};
 const shell=(title,body)=>{picker?.dispose();picker=null;dialog.innerHTML=`<header><h2>${esc(title)}</h2><button data-assist-close aria-label="閉じる">×</button></header><section>${body}<p class="assist-error" role="alert"></p></section>`;const actions=dialog.querySelector('section>.assist-actions');const footer=document.createElement('footer');footer.className='assist-confirm-footer';footer.append(dialog.querySelector('.assist-error'));if(actions)footer.append(actions);dialog.append(footer);};
 const art=f=>`<img src="${esc(f.image)}" alt="${esc(f.name)}" loading="lazy">`;
 const cards=needs=>`<div class="assist-cards">${Object.entries(needs).map(([fid,n])=>{const f=soulById.get(fid);return `<div>${art(f)}<b>${esc(f.name)} ×${n}</b><small>${classNames[f.soulClass]} · 所持 ${profile.owned[fid]||0} / 編成 ${countIds(original)[fid]||0}</small></div>`;}).join('')}</div>`;
 let routes=[],pending=null;
 function preview(deck,warnings=[],title='この編成を反映しますか？',aces=[]){
  const before=countIds(original),after=countIds(deck),added={},removed={};for(const fid of new Set([...original,...deck])){const n=(after[fid]||0)-(before[fid]||0);if(n>0)added[fid]=n;if(n<0)removed[fid]=-n;}
  const check=validateSoulDeck(deck,profile.owned,{profile,slot});pending=[...deck];
  shell(title,`${aces.length?`<div class="assist-preview-aces"><strong>この5体を中心に編成</strong><div>${aces.map(id=>{const f=soulById.get(id);return `<figure>${art(f)}<figcaption>${esc(f.name)}</figcaption></figure>`;}).join('')}</div></div>`:''}<p>DECK ${slot+1} · シード ${check.counts.seed}体 · ミドル ${check.counts.middle}体 · MOB ${check.counts.mob}体</p><strong>${check.valid?'45体の編成が完成':'編成途中として保存します'}</strong>${warnings.map(w=>`<p class="assist-warning">${esc(w)}</p>`).join('')}<h3>追加</h3>${Object.keys(added).length?cards(added):'<p>追加なし</p>'}<h3>外れるフィギュア</h3>${Object.keys(removed).length?cards(removed):'<p>なし</p>'}<p>所持数は変わりません。山札は対戦開始時にシャッフルされます。</p><div class="assist-actions"><button data-assist-close>キャンセル</button><button data-assist-apply>この編成を反映</button></div>`);
 }
 function materialCandidates(f){
  return (f.fusionMaterials||[]).map(recipe=>{
   const stage=recipeMaterialClass(recipe,soulById),candidates=soulFigures.filter(x=>!x.retired&&x.soulClass===stage&&recipe.materials.some(m=>matchesMaterial(x,m))).sort((a,b)=>(owned[b.id]||0)-(owned[a.id]||0)||a.id.localeCompare(b.id));
   return `<details class="material-candidates"><summary>${esc(recipe.label)}の素材候補（${candidates.length}種類）</summary><p>各条件に合う候補です。実際に組める2体の組み合わせは下のおすすめルートで確認できます。</p><div class="assist-cards">${candidates.map(x=>{const status=soulDeckAddStatus(profile,x.id);return `<div>${art(x)}<b>${esc(x.name)}</b><small>所持 ${profile.owned[x.id]||0} · 編成 ${original.filter(v=>v===x.id).length}</small><button data-material-add="${x.id}" ${status.allowed?'':'disabled'}>1体追加</button>${owned[x.id]>0&&original.length?`<button data-material-replace="${x.id}">入れ替え</button>`:''}<small>${esc(status.reasons.join(' / '))}</small></div>`;}).join('')}</div></details>`;
  }).join('');
 }
 function recommend(){
  const f=soulById.get(id);if(!f)throw Error('フィギュアが見つかりません');routes=fusionRecommendations(id,owned,original);
  shell(f.name+'の性能と素材',`<p>DECK ${slot+1} · 現在 ${original.length}/45体</p>${soulPerformance(f)}<h3>融合条件</h3><p>${(f.fusionMaterials||[]).map(r=>esc(r.label)).join('<br>')||'条件付きの召喚で登場します'}</p>${materialCandidates(f)}<p>MOBは中間ミドルを経由して、シードまで逆算しています。同じ素材が2体必要な場合は必要数も表示します。各ルートはこの1体を作るための素材例です。ボタンは不足分だけを追加して保存します。</p>${routes.map((r,i)=>`<article class="assist-route"><h3>おすすめルート ${i+1}</h3>${r.steps.map(step=>`<p class="assist-flow">${step.materials.map(fid=>esc(soulById.get(fid).name)).join(' ＋ ')}<br>↓ ${step.kind==='evolution'?esc(step.label):step.special?'MOB SOUL FUSION':'融合'}<br><b>${esc(soulById.get(step.target).name)}</b></p>`).join('')}${cards(Object.fromEntries(Object.entries(r.needs).filter(([fid])=>fid!==id)))}<div class="assist-actions"><button data-assist-seeds="${i}">このシードを追加</button><button data-assist-route="${i}">融合ルート一式を追加</button></div></article>`).join('')||`<p class="assist-warning">現在の所持数では、おすすめルート候補が見つかりません。必要な属性・タグの素材を集めてください。</p><ul>${f.fusionMaterials.map(r=>`<li>${esc(r.label)}</li>`).join('')}</ul>`}`);
 }
 dialog.onclick=e=>{const b=e.target.closest('button');if(!b||!dialog.isConnected||applied)return;try{
  if(b.dataset.materialReplace){const target=b.dataset.materialReplace;close();openDeckReplace(c,target,{render,toast});return;}
  if(b.dataset.materialAdd){if((profile.soulDeckSlot||0)!==slot||JSON.stringify(ensureSoulDecks(profile))!==JSON.stringify(original))throw Error('元のデッキが変更されています。開き直してください。');commit([...original,b.dataset.materialAdd]);applied=true;close();toast('素材を1体追加して保存しました');return;}
  if(b.hasAttribute('data-aces-build')){if(building||!picker||picker.ids().length!==5)return;building=true;b.disabled=true;const selected=picker.ids();b.textContent='編成案を作成中…';setTimeout(()=>{if(!dialog.isConnected)return;try{const plan=buildAceDeck(profile,selected,{slot});preview(plan.deck,plan.warnings,'5エースの編成案',selected);}catch(error){dialog.querySelector('.assist-error').textContent=error.message;b.disabled=false;b.textContent='この5体で編成案をつくる';}finally{building=false;}},30);return;}
  if(b.hasAttribute('data-assist-close')){close();return;}
  if(b.hasAttribute('data-assist-apply')){if(!pending||applied)return;if((profile.soulDeckSlot||0)!==slot||JSON.stringify(ensureSoulDecks(profile))!==JSON.stringify(original))throw Error('元のデッキが変更されています。閉じて、もう一度お試しください。');commit(pending);applied=true;pending=null;close();toast('アシスト編成を反映しました');return;}
  const i=b.dataset.assistSeeds??b.dataset.assistRoute;if(i!==undefined){if((profile.soulDeckSlot||0)!==slot||JSON.stringify(ensureSoulDecks(profile))!==JSON.stringify(original))throw Error('元のデッキが変更されています。開き直してください。');const r=routes[Number(i)],deck=addRoute(original,b.hasAttribute('data-assist-seeds')?r.seeds:r.needs,owned),added=deck.length-original.length;if(!added)throw Error('必要な素材はすべて編成済みです。追加する不足分はありません。');commit(deck);applied=true;close();toast(added+'体を追加し、DECK '+(slot+1)+'に保存しました（'+deck.length+'/45体）');}
 }catch(error){dialog.querySelector('.assist-error').textContent=error.message;}};
 shell('素材を確認中…','<p>所持フィギュアと融合レシピを照合しています。</p>');dialog.showModal();
 // Paint the loading state before doing route search.
 setTimeout(()=>{if(!dialog.isConnected)return;try{if(mode==='aces'){shell('エースを5体選択','');picker=mountAcePicker(dialog,profile,owned,slot);}else if(id)recommend();else{const plan=planSoulDeck(original,owned,mode);preview(plan.deck,plan.warnings,modes[mode][0]);}}catch(error){shell('編成を確認してください',`<p>${esc(error.message)}</p><button data-assist-close>閉じる</button>`);}},30);
 return true;
}
