import {wardrobeThemes,wardrobeSlots,wardrobeState,defaultOutfit,ownsPart,allWardrobeOwned,prepareWardrobe} from '../game/wardrobe.js';
import {wardrobeAvatar,wardrobeAsset} from '../components/wardrobe-avatar.js';
let draft=null,slot='outfit',view='parts';
export function resetWardrobeDraft(){draft=null;}
export function wardrobeScreen({profile}){
 draft??={...wardrobeState(profile).selected};
 const owned=Object.keys(wardrobeSlots).reduce((n,k)=>n+wardrobeThemes.filter(t=>ownsPart(profile,k,t.id)).length,0);
 const selectedTheme=wardrobeThemes.find(t=>Object.values(draft).every(v=>v===t.id));
 return `<section class="wardrobe-page"><header><div><small>MY LITTLE CLOSET</small><h1>着せ替え</h1><p>好きな衣装と小物で、あなただけのMOBに。</p></div><button data-go="home" aria-label="HOMEに戻る">×</button></header><div class="wardrobe-layout"><section class="wardrobe-stage" aria-label="試着プレビュー"><div class="wardrobe-model">${wardrobeAvatar(draft)}</div><div class="wardrobe-summary"><span class="wardrobe-badge">${allWardrobeOwned(profile)?'TEST · 全パーツ所持':`所持 ${owned} / 120`}</span><h2>${selectedTheme?.label||'マイコーデ'}</h2><div class="wardrobe-actions"><button data-wardrobe="save" class="wardrobe-save">コーデを保存</button><button data-wardrobe="reset">標準</button><button data-wardrobe="undo">元に戻す</button></div></div></section><section class="wardrobe-closet"><div class="wardrobe-view"><button data-wardrobe-view="parts" aria-pressed="${view==='parts'}">パーツを選ぶ</button><button data-wardrobe-view="sets" aria-pressed="${view==='sets'}">テーマで一括着替え</button></div>${view==='parts'?`<div class="wardrobe-tabs" aria-label="着せ替え部位">${Object.entries(wardrobeSlots).map(([k,label])=>`<button data-wardrobe-slot="${k}" aria-pressed="${slot===k}">${label}</button>`).join('')}</div>`:''}<h2>${view==='parts'?wardrobeSlots[slot]:'24のテーマ'}</h2><p class="wardrobe-tip">${view==='parts'?'テーマをまたいだ組み合わせも自由！':'衣装・スカーフ・眼鏡・靴・浮遊小物をまとめて変更。'}${allWardrobeOwned(profile)?'':' 標準のMOBセットは最初から使えます。'}</p><div class="wardrobe-grid">${(view==='parts'?[{id:'none',label:'なし'},...wardrobeThemes]:wardrobeThemes).map(t=>{const unlocked=view==='parts'?ownsPart(profile,slot,t.id):Object.keys(wardrobeSlots).every(k=>ownsPart(profile,k,t.id));const active=view==='parts'?draft[slot]===t.id:selectedTheme?.id===t.id;return `<button data-wardrobe-item="${t.id}" ${unlocked?'':'disabled'} aria-pressed="${active}" aria-label="${t.label}${unlocked?'':'・未所持'}"><span class="wardrobe-thumb">${t.id==='none'?'<span class="wardrobe-none">∅</span>':`<img src="${wardrobeAsset(view==='sets'||slot==='outfit'?`presets/${t.id}.png`:`layers/${t.id}/${slot}.png`)}" alt="" loading="lazy">`}</span><b>${t.label}</b><small>${unlocked?(active?'✓ 選択中':'所持済み'):'未所持'}</small></button>`;}).join('')}</div></section></div></section>`;
}
export function handleWardrobe(b,{profile,commitProfile,render,toast}){
 if(![...b.attributes].some(a=>a.name.startsWith('data-wardrobe')))return false;
 const scroll=b.closest('.wardrobe-page')?.querySelector('.wardrobe-grid')?.scrollTop||0;
 const focus=[...b.attributes].find(a=>a.name.startsWith('data-wardrobe'));
 const refresh=()=>{render({preserveScroll:true});const grid=document.querySelector('.wardrobe-grid');if(grid)grid.scrollTop=b.dataset.wardrobeSlot||b.dataset.wardrobeView?0:scroll;if(focus){const next=[...document.querySelectorAll(`[${focus.name}]`)].find(e=>e.getAttribute(focus.name)===focus.value);next?.focus({preventScroll:true});}};
 try{
  draft??={...wardrobeState(profile).selected};
  if(b.dataset.wardrobeSlot&&Object.hasOwn(wardrobeSlots,b.dataset.wardrobeSlot))slot=b.dataset.wardrobeSlot;
  if(['parts','sets'].includes(b.dataset.wardrobeView))view=b.dataset.wardrobeView;
  if(b.dataset.wardrobeItem){const id=b.dataset.wardrobeItem;for(const k of view==='sets'?Object.keys(wardrobeSlots):[slot])if(ownsPart(profile,k,id))draft[k]=id;}
  if(b.dataset.wardrobe==='reset')draft=defaultOutfit();
  if(b.dataset.wardrobe==='undo')draft={...wardrobeState(profile).selected};
  if(b.dataset.wardrobe==='save'){if(!commitProfile(prepareWardrobe(profile,draft)))throw Error('保存できませんでした。もう一度お試しください。');refresh();toast('コーデを保存しました');return true;}
  refresh();
 }catch(e){toast(e.message,'error');}return true;
}
