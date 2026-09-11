import './namespace.js';
import {displayScreen} from './screens/display.js';
import {usableFigure} from './data/gacha.js';
import {availableAssets} from './data/available-assets.js';
import {gachaScreen,initGacha,bindGacha,handleGacha} from './screens/gacha.js';
import './components/icons.js';
import {figures, tags, byId, imagePath, modes} from './data/catalog.js';
import {profile,saveProfile,storageAvailable} from './game/profile.js';
import {validateDeck} from './game/deck.js';
import {homeScreen} from './screens/showroom.js';
import {collectionScreen,deckScreen,battleScreen,infoScreen} from './screens/library.js';
import {competitionScreen} from './screens/competition.js';
import {
  syncCompetition,recordQualifierResult,chooseRankUpTournament,recordRankUpResult,
  recordLeagueFinalResult,recordMasterChallengeResult,advanceWeek,dismissCompetitionNotice,
  getCompetitionNotice,isPlayerMaster
} from './game/competition.js';
import {labelDate} from './data/competition.js';

export const icon=window.MPB.components.icon;
export const art=(f,cls='')=>!availableAssets.has(f.image)?`<span class="missing">画像準備中<br>${f.displayNo}</span>`:`<img class="${cls}" src="${imagePath(f)}" alt="${f.name}" loading="lazy"><span class="missing" hidden>画像準備中<br>${f.displayNo}</span>`;
export const ctx={figures,tags,byId,profile,icon,art,modes};
let query='';let rarity='ALL';let displaySlot=0;let displayQuery='';
const app=document.querySelector('#app');
const nav=[['home','home','HOME'],['figure','figure','FIGURE'],['deck','deck','DECK'],['battle','battle','BATTLE'],['gacha','gacha','GACHA']];
const compact=n=>{const v=Number(n||0);if(v>=1000000)return `${(v/1000000).toFixed(v>=10000000?0:1)}M`;if(v>=10000)return `${Math.floor(v/1000)}K`;return v.toLocaleString('ja-JP');};

if(syncCompetition(profile))saveProfile();

function noticeMarkup(){const n=getCompetitionNotice(profile);if(!n)return '';return `<div class="competition-notice" role="dialog" aria-modal="true"><div class="competition-notice-card"><small>ANNUAL COMPETITION</small><h2>${n.title}</h2><p>${n.body}</p><strong>${Number(n.coins||0).toLocaleString('ja-JP')} COIN<br>+ ${Number(n.diamonds||0).toLocaleString('ja-JP')} DIAMOND</strong><button data-comp="dismiss-notice">受け取る</button></div></div>`;}
function render({preserveScroll=false}={}){const scroll=preserveScroll?(app.querySelector('#main')?.scrollTop||0):0;const focused=preserveScroll?document.activeElement?.getAttribute('data-add'):null;const route=location.hash.slice(1)||'home';document.documentElement.classList.toggle('reduce-motion',profile.reducedMotion);const page=route==='home'?homeScreen(ctx):route==='display'?displayScreen(ctx,displaySlot,displayQuery):route==='figure'?collectionScreen(ctx,query,rarity):route==='deck'?deckScreen(ctx):route==='battle'?battleScreen(ctx):route==='tournament'?competitionScreen(ctx):route==='gacha'?gachaScreen(ctx):infoScreen(ctx,route);app.innerHTML=`<div class="game-shell"><header class="topbar"><button class="player" data-go="profile"><span class="avatar">M<span>01</span></span><span><b>COLLECTOR</b><small>RANK <strong>${profile.rank}</strong> <i>${isPlayerMaster(profile)?'MOB MASTER':'CHALLENGER'}</i></small><small class="season-mini">${labelDate(profile.competition.date)}</small></span></button><div class="wallet"><span title="${Number(profile.coins||0).toLocaleString('ja-JP')} COIN">${icon('coin')}<b>${compact(profile.coins)}</b></span><span><span class="mob-currency" aria-label="DIAMOND">◆</span><b>${profile.diamonds}</b></span></div><button class="settings" data-go="settings" aria-label="設定">${icon('settings')}</button></header><main id="main">${page}</main><nav aria-label="メインナビゲーション">${nav.map(([id,ic,label])=>`<button data-go="${id}" class="${route===id||(route==='tournament'&&id==='battle')?'active':''}" ${route===id||(route==='tournament'&&id==='battle')?'aria-current="page"':''}>${icon(ic)}<span>${label}</span>${route===id||(route==='tournament'&&id==='battle')?'<i></i>':''}</button>`).join('')}</nav><div class="toast" role="status"></div>${noticeMarkup()}</div>`; if(route==='gacha')bindGacha();app.querySelector('#main').scrollTop=scroll;if(focused)app.querySelector('[data-add="'+focused+'"]')?.focus({preventScroll:true}); if(route==='figure')app.querySelector('#figure-search').value=query;if(route==='display')app.querySelector('#display-search').value=displayQuery; app.querySelectorAll('img').forEach(img=>{img.addEventListener('error',()=>{img.hidden=true;img.nextElementSibling.hidden=false;});});}
export function toast(msg){const el=app.querySelector('.toast');if(!el)return;el.textContent=msg;el.classList.add('visible');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('visible'),2400);}
function persist(){if(!saveProfile())toast('この環境では保存できません。現在の画面内で保持します。');}
function competitionAction(action){try{
  if(action==='dismiss-notice'){dismissCompetitionNotice(profile);persist();render();return true;}
  if(action==='next-week'){advanceWeek(profile);persist();render();return true;}
  if(action==='qualifier-win'||action==='qualifier-lose'){const r=recordQualifierResult(profile,action.endsWith('win'));persist();render();toast(`${r.won?'WIN':'LOSE'} ${r.points>=0?'+':''}${r.points}PT`);return true;}
  if(action==='cup-join'||action==='cup-skip'){chooseRankUpTournament(profile,action==='cup-join');persist();render();return true;}
  if(action==='cup-win'||action==='cup-lose'){recordRankUpResult(profile,action.endsWith('win'));persist();render();return true;}
  if(action==='league-win'||action==='league-lose'){recordLeagueFinalResult(profile,action.endsWith('win'));persist();render();return true;}
  if(action==='master-win'||action==='master-lose'){recordMasterChallengeResult(profile,action.endsWith('win'));persist();syncCompetition(profile);render();return true;}
}catch(err){toast(err.message);return true;}return false;}
app.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.comp&&competitionAction(b.dataset.comp))return;handleGacha(b);if(b.dataset.editShelf!==undefined)displaySlot=Number(b.dataset.editShelf);if(b.dataset.go){location.hash=b.dataset.go;return;}if(b.dataset.displaySlot!==undefined){displaySlot=Number(b.dataset.displaySlot);render({preserveScroll:true});}if(b.dataset.displayFigure){const f=byId.get(b.dataset.displayFigure);if(!usableFigure(f))return;profile.displayIds[displaySlot]=f.sourceId;persist();render({preserveScroll:true});toast('展示フィギュアを変更しました');}if(b.dataset.center){profile.centerId=b.dataset.center;persist();render();toast('センターフィギュアを変更しました');}if(b.dataset.filter){rarity=b.dataset.filter;render();}if(b.dataset.add){const next=[...profile.deck,b.dataset.add];const result=validateDeck(next,byId);if(result.errors.length){toast(result.errors[0]);return;}profile.deck=next;persist();render({preserveScroll:true});}if(b.dataset.remove!==undefined){profile.deck.splice(Number(b.dataset.remove),1);persist();render({preserveScroll:true});}if(b.dataset.action==='motion'){profile.reducedMotion=!profile.reducedMotion;persist();render();}if(b.dataset.action==='center-next'){const released=figures.filter(f=>!f.pending);profile.centerId=released[(released.findIndex(f=>f.sourceId===profile.centerId)+1)%released.length].sourceId;persist();render();}if(b.dataset.mode){const mode=modes.find(m=>m.id===b.dataset.mode);if(mode?.id==='tournament'){location.hash='tournament';return;}toast(`${mode.label}：${mode.status}`);}});
app.addEventListener('input',e=>{if(e.target.id==='display-search'){displayQuery=e.target.value;const start=e.target.selectionStart;render({preserveScroll:true});const input=document.querySelector('#display-search');input.focus({preventScroll:true});input.setSelectionRange(start,start);}if(e.target.id==='figure-search'){query=e.target.value;const start=e.target.selectionStart;render();const input=document.querySelector('#figure-search');input.focus();input.setSelectionRange(start,start);}});
initGacha(ctx,render,toast);window.addEventListener('hashchange',render);render();if(!storageAvailable)toast('ブラウザ保存を利用できません');
