import {soulFigures,soulById,ensureSoulDecks,prepareSoulDeck,validateSoulDeck} from '../game/soul-battle.js';
import {createDeckDraft,draftProfile,draftStatus,updateDraft,addDraftRoute,prepareDraftSave} from '../game/deck-draft.js';
import {fusionRecommendations,countIds} from '../game/soul-deck-assist.js';
import {availableDeckOwned} from '../game/deck-legality.js';
import {commitProfile} from '../game/profile.js?v=7.3.0';
import {stageBadge,soulPerformance} from '../components/soul-performance.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>String(s).normalize('NFKC').toLowerCase();
function modal(className,title){const focus=document.activeElement,dialog=document.createElement('dialog');dialog.className=className;dialog.setAttribute('aria-label',title);document.body.append(dialog);const close=()=>{dialog.close();dialog.remove();window.removeEventListener('hashchange',close);if(focus?.isConnected)focus.focus({preventScroll:true});};dialog.addEventListener('cancel',e=>{e.preventDefault();close();});window.addEventListener('hashchange',close);return {dialog,close};}
export function openDeckClear(c,{render,toast}){
 if(document.querySelector('.deck-clear-dialog'))return;
 const slot=c.profile.soulDeckSlot||0,old=[...ensureSoulDecks(c.profile)],{dialog,close}=modal('deck-clear-dialog',`DECK ${slot+1}を空にする`);
 dialog.innerHTML=`<section><h2>DECK ${slot+1}を空にしますか？</h2><p>このスロットの${old.length}体を編成から外します。所持フィギュアと他のデッキは変わりません。</p><p role="alert" data-clear-error></p><footer><button data-clear-cancel>キャンセル</button><button data-confirm-deck-clear>DECK ${slot+1}を空にする</button></footer></section>`;
 dialog.querySelector('[data-clear-cancel]').onclick=close;
 dialog.querySelector('[data-confirm-deck-clear]').onclick=()=>{try{if((c.profile.soulDeckSlot||0)!==slot||JSON.stringify(ensureSoulDecks(c.profile))!==JSON.stringify(old))throw Error('編成が変更されています。開き直してください。');if(!commitProfile(prepareSoulDeck(c.profile,[])))throw Error('保存できませんでした。編成は変更していません。');close();render();toast(`DECK ${slot+1}を空にしました`);}catch(e){dialog.querySelector('[data-clear-error]').textContent=e.message;}};
 dialog.showModal();dialog.querySelector('[data-clear-cancel]').focus();
}
export function openDeckBuilder(c,{render,toast}){
 if(document.querySelector('.deck-builder-dialog'))return;
 const profile=c.profile,draft=createDeckDraft(profile),{dialog,close}=modal('deck-builder-dialog','1からデッキ編成');
 let step='targets',query='',rarity='ALL',stage='ALL',target='',routes=[],composing=false,saved=false;const routeCache=new Map();
 const art=f=>`<img src="${esc(f.image)}" alt="" loading="lazy">`;
 const status=message=>{dialog.querySelector('[data-draft-message]').textContent=message;};
 function card(f){const n=draft.ids.filter(id=>id===f.id).length,s=draftStatus(profile,draft,f.id);return `<article class="draft-card" data-draft-card="${esc(f.id)}">${stageBadge(f)}<small>レア度 ${esc(f.rarity)}</small>${art(f)}<b>${esc(f.name)}</b><small>編成 ${n} / 所持 ${profile.owned[f.id]||0}</small><div class="draft-quantity"><button data-draft-remove="${esc(f.id)}" ${n?'':'disabled'} aria-label="${esc(f.name)}を1体外す">−</button><strong>${n}</strong><button data-draft-add="${esc(f.id)}" ${s.allowed?'':'disabled'} aria-label="${esc(f.name)}を1体追加">＋</button></div><small class="draft-reason">${esc(s.reasons.length?'追加不可：'+s.reasons.join(' / '):'')}</small><details><summary>性能を見る</summary>${soulPerformance(f)}</details></article>`;}
 function list(){const counts=countIds(draft.ids);let rows=soulFigures.filter(f=>profile.owned[f.id]>0&&(step==='targets'?f.soulClass!=='seed':step==='seeds'?f.soulClass==='seed':counts[f.id]>0));rows=rows.filter(f=>(rarity==='ALL'||f.rarity===rarity)&&(stage==='ALL'||f.soulClass===stage)&&norm(f.name+' '+f.id).includes(norm(query)));dialog.querySelector('.draft-grid').innerHTML=rows.map(card).join('')||'<p>条件に合う所持フィギュアがありません。</p>';}
 function materialBody(){const targets=[...new Set(draft.ids.filter(id=>soulById.get(id)?.soulClass!=='seed'))].sort((a,b)=>(soulById.get(a).soulClass==='mob'?-1:1)-(soulById.get(b).soulClass==='mob'?-1:1));if(!targets.includes(target))target=targets[0]||'';
  if(!target){routes=[];return '<p>MOB・ミドルが未選択です。戻って選ぶか、所持シード一覧から編成できます。</p>';}
  if(!routeCache.has(target))routeCache.set(target,fusionRecommendations(target,availableDeckOwned(profile,draft.slot),draft.ids));routes=routeCache.get(target);
  const counts=countIds(draft.ids),f=soulById.get(target);
  return `<label>素材を確認する仲間<select id="draft-target">${targets.map(id=>`<option value="${id}" ${id===target?'selected':''}>${esc(soulById.get(id).name)}</option>`).join('')}</select></label><details class="draft-performance"><summary>${esc(f.name)}の性能・融合条件</summary>${soulPerformance(f)}<p>${(f.fusionMaterials||[]).map(r=>esc(r.label)).join('<br>')}</p></details><p>実際の融合条件から、必要な中間ミドルとシードを表示します。追加は必要枚数まで補います。</p>${routes.slice(0,4).map((r,i)=>{let reason='',added=0;try{const trial={...draft,ids:[...draft.ids]};addDraftRoute(profile,trial,r.needs);added=trial.ids.length-draft.ids.length;if(!added)reason='この素材はすべて編成済みです';}catch(e){reason=e.message;}return `<article class="draft-route"><h3>素材ルート ${i+1}</h3>${r.steps.map(s=>`<p>${s.materials.map(id=>esc(soulById.get(id).name)).join(' ＋ ')}<br>↓ ${s.kind==='evolution'?esc(s.label):'融合'}<br><b>${esc(soulById.get(s.target).name)}</b></p>`).join('')}<div class="draft-materials">${Object.entries(r.needs).filter(([id])=>id!==target).map(([id,n])=>{const f=soulById.get(id);return `<span>${art(f)}${stageBadge(f)}<b>${esc(f.name)} ×${n}</b><small>編成 ${counts[id]||0} / 所持 ${profile.owned[id]||0}</small></span>`;}).join('')}</div><button data-draft-route="${i}" ${reason?'disabled':''}>${f.soulClass==='middle'?'このシードを追加':'中間ミドルとシードを追加'}${added?'（＋'+added+'体）':''}</button><p class="draft-reason">${esc(reason)}</p></article>`;}).join('')||`<p class="draft-reason">所持素材・DECK 1/2の排他条件を満たすルート候補がありません。</p><p>${(f.fusionMaterials||[]).map(r=>esc(r.label)).join('<br>')}</p>`}`;
 }
 function draw(message=''){
  const check=validateSoulDeck(draft.ids,profile.owned,{profile,slot:draft.slot}),labels={targets:'1 MOB・ミドルを選ぶ',materials:'2 対応する素材を選ぶ',seeds:'3 所持シードから追加',review:'4 編成を確認して保存'};
  dialog.innerHTML=`<header><div><small>DECK ${draft.slot+1} · 保存前の編成案</small><h2>1からデッキ編成</h2></div><button data-draft-cancel aria-label="キャンセルして閉じる">×</button></header><p class="draft-saved-note">元のデッキは最後の「45体で保存」まで変わりません。</p><h3 class="draft-step">${labels[step]}</h3><section class="draft-scroll">${step==='materials'?materialBody():`<div class="draft-filters"><label>名前・ID<input id="draft-search" type="search" value="${esc(query)}" autocomplete="off"></label><div><label>レア度<select id="draft-rarity">${['ALL','R','SR','SSR','UR','MOB'].map(r=>`<option value="${r}" ${rarity===r?'selected':''}>${r==='ALL'?'すべて':r}</option>`).join('')}</select></label><label>段階<select id="draft-stage">${[['ALL','すべて'],...(step==='targets'?[['middle','② ミドル'],['mob','③ MOB']]:step==='seeds'?[['seed','① シード']]:[['seed','① シード'],['middle','② ミドル'],['mob','③ MOB']])].map(([v,t])=>`<option value="${v}" ${stage===v?'selected':''}>${t}</option>`).join('')}</select></label></div></div><div class="draft-grid"></div>`}</section><footer><div class="draft-meter"><b>${draft.ids.length} / 45体</b><span>シード ${check.counts.seed} · ミドル ${check.counts.middle} · MOB ${check.counts.mob}</span></div><p data-draft-message role="status">${esc(message||check.errors[0]||'編集中の変更はまだ保存されていません')}</p><div class="draft-actions"><button data-draft-back>${step==='targets'?'キャンセル':'戻る'}</button><button ${step==='review'?'data-draft-save':'data-draft-next'} ${step==='review'&&!check.valid?'disabled':''}>${step==='review'?'45体で保存':step==='materials'?'一覧以外のシードを見る':step==='seeds'?'編成を確認':draft.ids.length?'素材を選ぶ':'シードから選ぶ'}</button></div></footer>`;
  if(step!=='materials')list();
 }
 function move(next){step=next;query='';rarity='ALL';stage='ALL';draw();}
 dialog.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||b.disabled)return;try{
  if(b.hasAttribute('data-draft-cancel')){close();return;}
  if(b.hasAttribute('data-draft-back')){if(step==='targets')close();else move(({materials:'targets',seeds:'materials',review:'seeds'})[step]);return;}
  if(b.hasAttribute('data-draft-next')){move(({targets:draft.ids.length?'materials':'seeds',materials:'seeds',seeds:'review'})[step]);return;}
  if(b.hasAttribute('data-draft-save')){if(saved)return;if(!commitProfile(prepareDraftSave(profile,draft)))throw Error('保存できませんでした。編成案はこの画面に残っています。');saved=true;close();render();toast(`DECK ${draft.slot+1}に45体を保存しました`);return;}
  const scroll=dialog.querySelector('.draft-scroll').scrollTop;
  if(b.dataset.draftAdd){updateDraft(profile,draft,[...draft.ids,b.dataset.draftAdd]);draw(soulById.get(b.dataset.draftAdd).name+'を追加しました');}
  else if(b.dataset.draftRemove){const ids=[...draft.ids],i=ids.indexOf(b.dataset.draftRemove);if(i>=0)ids.splice(i,1);updateDraft(profile,draft,ids);draw('1体外しました');}
  else if(b.hasAttribute('data-draft-route')){const before=draft.ids.length;addDraftRoute(profile,draft,routes[Number(b.dataset.draftRoute)].needs);draw(`${draft.ids.length-before}体を追加しました（保存前）`);}
  dialog.querySelector('.draft-scroll').scrollTop=scroll;
 }catch(error){status(error.message);}});
 dialog.addEventListener('compositionstart',e=>{if(e.target.id==='draft-search')composing=true;});
 dialog.addEventListener('compositionend',e=>{if(e.target.id==='draft-search'){composing=false;query=e.target.value;list();}});
 const search=e=>{if(e.target.id==='draft-search'&&!composing&&!e.isComposing){query=e.target.value;list();}};dialog.addEventListener('input',search);dialog.addEventListener('search',search);
 dialog.addEventListener('change',e=>{if(e.target.id==='draft-target'){target=e.target.value;draw();}else if(e.target.id==='draft-rarity'){rarity=e.target.value;list();}else if(e.target.id==='draft-stage'){stage=e.target.value;list();}});
 draw();dialog.showModal();dialog.querySelector('[data-draft-cancel]').focus();
}
