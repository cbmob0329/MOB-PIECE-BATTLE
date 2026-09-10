import './namespace.js';
import './components/icons.js';
import {figures, tags, byId, imagePath, modes} from './data/catalog.js';
import {profile,saveProfile,storageAvailable} from './game/profile.js';
import {validateDeck} from './game/deck.js';
import {homeScreen} from './screens/showroom.js';
import {collectionScreen,deckScreen,battleScreen,infoScreen} from './screens/library.js';
export const icon=window.MPB.components.icon;
export const art=(f,cls='')=>`<img class="${cls}" src="${imagePath(f)}" alt="${f.name}" loading="lazy"><span class="missing" hidden>画像準備中<br>${f.displayNo}</span>`;
export const ctx={figures,tags,byId,profile,icon,art,modes};
let query='';let rarity='ALL';
const app=document.querySelector('#app');
const nav=[['home','home','HOME'],['figure','figure','FIGURE'],['deck','deck','DECK'],['battle','battle','BATTLE'],['gacha','gacha','GACHA']];
function render(){const route=location.hash.slice(1)||'home';document.documentElement.classList.toggle('reduce-motion',profile.reducedMotion);app.innerHTML=`<div class="game-shell"><header class="topbar"><button class="player" data-go="profile"><span class="avatar">M<span>01</span></span><span><b>COLLECTOR</b><small>RANK <strong>F</strong> <i>ルーキー</i></small></span></button><div class="wallet"><span>${icon('coin')}<b>0</b></span><span>${icon('gem')}<b>0</b></span></div><button class="settings" data-go="settings" aria-label="設定">${icon('settings')}</button></header><main id="main">${route==='home'?homeScreen(ctx):route==='figure'?collectionScreen(ctx,query,rarity):route==='deck'?deckScreen(ctx):route==='battle'?battleScreen(ctx):infoScreen(ctx,route)}</main><nav aria-label="メインナビゲーション">${nav.map(([id,ic,label])=>`<button data-go="${id}" class="${route===id?'active':''}" ${route===id?'aria-current="page"':''}>${icon(ic)}<span>${label}</span>${route===id?'<i></i>':''}</button>`).join('')}</nav><div class="toast" role="status"></div></div>`; if(route==='figure')app.querySelector('#figure-search').value=query; app.querySelectorAll('img').forEach(img=>{img.addEventListener('error',()=>{img.hidden=true;img.nextElementSibling.hidden=false;});});}
export function toast(msg){const el=app.querySelector('.toast');el.textContent=msg;el.classList.add('visible');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('visible'),2400);}
function persist(){if(!saveProfile())toast('この環境では保存できません。現在の画面内で保持します。');}
app.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.go){location.hash=b.dataset.go;return;}if(b.dataset.center){profile.centerId=b.dataset.center;persist();render();toast('センターフィギュアを変更しました');}if(b.dataset.filter){rarity=b.dataset.filter;render();}if(b.dataset.add){const next=[...profile.deck,b.dataset.add];const result=validateDeck(next,byId);if(result.errors.length){toast(result.errors[0]);return;}profile.deck=next;persist();render();}if(b.dataset.remove!==undefined){profile.deck.splice(Number(b.dataset.remove),1);persist();render();}if(b.dataset.action==='motion'){profile.reducedMotion=!profile.reducedMotion;persist();render();}if(b.dataset.action==='center-next'){const released=figures.filter(f=>!f.pending);profile.centerId=released[(released.findIndex(f=>f.sourceId===profile.centerId)+1)%released.length].sourceId;persist();render();}if(b.dataset.mode){const mode=modes.find(m=>m.id===b.dataset.mode);toast(`${mode.label}：${mode.status}`);}});
app.addEventListener('input',e=>{if(e.target.id==='figure-search'){query=e.target.value;const start=e.target.selectionStart;render();const input=document.querySelector('#figure-search');input.focus();input.setSelectionRange(start,start);}});
window.addEventListener('hashchange',render);render();if(!storageAvailable)toast('ブラウザ保存を利用できません');

