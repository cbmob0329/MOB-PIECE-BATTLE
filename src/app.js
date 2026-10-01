import {figureSkillInfo} from './components/figure-skill-info.js?v=7.3.0';
import './namespace.js?v=7.3.0';
import {displayScreen} from './screens/display.js?v=7.3.0';
import {calendarScreen} from './screens/calendar.js?v=7.3.0';
import {menuArt,iconArt,rankArt,criticalUiUrls,preloadUrls} from './components/uiAssets.js?v=7.3.0';
import {usableFigure,OWN_CAP} from './data/gacha.js?v=7.3.0';
import {gachaScreen,initGacha,bindGacha,handleGacha} from './screens/gacha.js?v=7.3.0';
import './components/icons.js?v=7.3.0';
import {figures, tags, byId, imagePath, modes} from './data/catalog.js?v=7.3.0';
import {profile,saveProfile,storageAvailable} from './game/profile.js?v=7.3.0';
import {validateDeck,autoBuildDeck,switchDeckSlot} from './game/deck.js?v=7.3.0';
import {homeScreen} from './screens/showroom.js?v=7.3.0';
import {collectionScreen,deckScreen,battleScreen,infoScreen} from './screens/library.js?v=7.3.0';
import {competitionScreen} from './screens/competition.js?v=7.3.0';
import {missionScreen} from './screens/mission.js?v=7.3.0';
import {historyScreen,hallOfFameScreen} from './screens/records.js?v=7.3.0';
import {
  syncCompetition,recordQualifierResult,chooseRankUpTournament,recordRankUpResult,
  recordLeagueFinalResult,recordMasterChallengeResult,advanceWeek,dismissCompetitionNotice,
  getCompetitionNotice,isPlayerMaster,ensureQualifier,currentRankUp,currentLeagueMatches,getMasterChallenge,getLeagueFinal,
  testEnterRankUpTournament,testEnterLeague,testEnterMasterMatch,restoreCompetitionFromTest
} from './game/competition.js?v=7.3.0';
import {labelDate,MASTER_PRIZE,CPU_NAMES,RANKS} from './data/competition.js?v=7.3.0';
import {launchBattle} from './screens/battleRuntime.js?v=7.3.0';
import {battleReward,normalizeBattleProgress,randomMatchStatus,recordRandomMatch} from './game/battle.js?v=7.3.0';
import {testSettings} from './data/test-settings.js?v=7.3.0';
import {claimMission,claimAllMissions} from './game/missions.js?v=7.3.0';
import {applyBattleFigureRecords,enrichedHistoryRow,figureRecord} from './game/records.js?v=7.3.0';

export const icon=window.MPB.components.icon;
export const art=(f,cls='')=>{if(!f)return `<span class="missing ${cls}">画像準備中</span>`;return `<img class="${cls}" src="${imagePath(f)}" alt="${String(f.name||'FIGURE').replace(/"/g,'&quot;')}" loading="lazy"><span class="missing" hidden>画像準備中<br>${f.displayNo||''}</span>`;};
export const ctx={figures,tags,byId,profile,icon,art,modes,menuArt,iconArt,rankArt};
let query='';let rarity='ALL';let collectionStatus='ALL';let collectionSort='DEX_ASC';let collectionTag='ALL';let displaySlot=0;let displayQuery='';let historyFilter='ALL';let calendarView='year';let calendarMonth=null;
const app=document.querySelector('#app');
if(!app)throw new Error('APP_ROOT_NOT_FOUND');
const nav=[['home','home','HOME','home'],['figure','figure','FIGURE','figure'],['deck','deck','DECK','deck'],['battle','battle','BATTLE','battle'],['gacha','gacha','GACHA','gacha']];
const compact=n=>{const v=Number(n||0);if(v>=1000000)return `${(v/1000000).toFixed(v>=10000000?0:1)}M`;if(v>=10000)return `${Math.floor(v/1000)}K`;return v.toLocaleString('ja-JP');};

try{normalizeBattleProgress(profile);if(syncCompetition(profile))saveProfile();}catch(err){console.error('[MPB] profile bootstrap failed',err);}

function noticeMarkup(){const n=getCompetitionNotice(profile);if(!n)return '';const kicker=n.type==='weekly-rank'?'WEEKLY RANK REWARD':n.type==='bonus'?'MOB MASTER BONUS':'ANNUAL COMPETITION';return `<div class="competition-notice" role="dialog" aria-modal="true"><div class="competition-notice-card"><small>${kicker}</small><h2>${n.title}</h2><p>${n.body}</p><strong>${Number(n.coins||0).toLocaleString('ja-JP')} COIN<br>+ ${Number(n.diamonds||0).toLocaleString('ja-JP')} DIAMOND</strong><button data-comp="dismiss-notice">受け取る</button></div></div>`;}
function settleScreenImages(){
  const loader=app.querySelector('[data-screen-loader]');if(!loader)return;
  const imgs=[...app.querySelectorAll('main img')].filter(img=>!img.complete);
  if(imgs.length<3){loader.hidden=true;return;}
  let finished=false;const hide=()=>{if(finished)return;finished=true;loader.hidden=true;};
  const timer=setTimeout(()=>{if(!finished)loader.hidden=false;},140);
  Promise.race([Promise.all(imgs.slice(0,18).map(img=>new Promise(resolve=>{if(img.complete)return resolve();img.addEventListener('load',resolve,{once:true});img.addEventListener('error',resolve,{once:true});}))),new Promise(resolve=>setTimeout(resolve,1800))]).then(()=>{clearTimeout(timer);hide();});
}
function render({preserveScroll=false}={}){
  const scroll=preserveScroll?(app.querySelector('#main')?.scrollTop||0):0;
  const focused=preserveScroll?document.activeElement?.getAttribute('data-add'):null;
  const route=location.hash.slice(1)||'home';
  document.documentElement.classList.toggle('reduce-motion',profile.reducedMotion);
  const page=route==='home'?homeScreen(ctx):route==='display'?displayScreen(ctx,displaySlot,displayQuery):route==='figure'?collectionScreen(ctx,query,rarity,collectionStatus,collectionSort,collectionTag):route==='deck'?deckScreen(ctx):route==='battle'?battleScreen(ctx):route==='tournament'?competitionScreen(ctx,'all'):route==='rankTournament'?competitionScreen(ctx,'rank'):route==='mobLeague'?competitionScreen(ctx,'league'):route==='calendar'?calendarScreen(ctx,calendarView,calendarMonth):route==='gacha'?gachaScreen(ctx):route==='mission'?missionScreen(ctx):route==='history'?historyScreen(ctx,historyFilter):route==='hall'?hallOfFameScreen(ctx):infoScreen(ctx,route);
  const battleRoute=['battle','tournament','rankTournament','mobLeague'].includes(route);
  const master=isPlayerMaster(profile);const rankKey=master?'MOB_MASTER':profile.rank;
  const avatarFigure=byId.get(profile.avatarId)||byId.get(profile.centerId)||figures.find(f=>!f.pending);
  const avatarMarkup=avatarFigure?`<span class="avatar avatar-figure">${art(avatarFigure,'top-avatar-art')}</span>`:`<span class="avatar">M<span>01</span></span>`;
  app.innerHTML=`<div class="game-shell"><header class="topbar"><button class="player" data-go="player">${avatarMarkup}<span class="player-copy"><b>PLAYER</b><small class="season-mini">${labelDate(profile.competition.date)}</small><small class="player-rank-line">${iconArt('rank','top-rank-symbol','RANK')}${rankArt(rankKey,'top-rank-art',rankKey)}<i>${master?'MOB MASTER':'CHALLENGER'}</i></small></span></button><div class="wallet wallet-v6"><span title="${Number(profile.coins||0).toLocaleString('ja-JP')} COIN">${iconArt('coin','wallet-art','COIN')}<b>${compact(profile.coins)}</b></span><span title="${Number(profile.diamonds||0).toLocaleString('ja-JP')} DIAMOND">${iconArt('diamond','wallet-art','DIAMOND')}<b>${profile.diamonds}</b></span><span title="${Number(profile.rubies||0).toLocaleString('ja-JP')} RUBY">${iconArt('ruby','wallet-art','RUBY')}<b>${profile.rubies}</b></span></div><button class="settings" data-go="settings" aria-label="設定">${menuArt('settings','top-settings-art','SETTINGS')}</button></header><main id="main">${page}</main><nav aria-label="メインナビゲーション">${nav.map(([id,ic,label,menuKey])=>{const active=route===id||(battleRoute&&id==='battle');const artMarkup=id==='deck'?iconArt('deck','bottom-menu-icon-art',label):(menuKey?menuArt(menuKey,'bottom-menu-art',label):icon(ic));return `<button data-go="${id}" class="${active?'active':''}" ${active?'aria-current="page"':''} aria-label="${label}"><span class="nav-art">${artMarkup}</span>${active?'<i></i>':''}</button>`;}).join('')}</nav><div class="screen-loader" data-screen-loader hidden><div><b>MOB PIECE BATTLE</b><span></span><small>IMAGE LOADING...</small></div></div><div class="toast" role="status"></div>${noticeMarkup()}</div>`;
  if(route==='gacha')bindGacha();
  app.querySelector('#main').scrollTop=scroll;
  if(focused)app.querySelector('[data-add="'+focused+'"]')?.focus({preventScroll:true});
  if(route==='figure')app.querySelector('#figure-search').value=query;
  if(route==='display')app.querySelector('#display-search').value=displayQuery;
  app.querySelectorAll('img').forEach(img=>{const fallback=()=>{img.hidden=true;if(img.nextElementSibling)img.nextElementSibling.hidden=false;};if(img.complete&&!img.naturalWidth)fallback();else img.addEventListener('error',fallback,{once:true});});
  settleScreenImages();
}
export function toast(msg){const el=app.querySelector('.toast');if(!el)return;el.textContent=msg;el.classList.add('visible');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('visible'),2400);}
function persist(){if(!saveProfile())toast('この環境では保存できません。現在の画面内で保持します。');}
function competitionAction(action){try{
  if(action==='dismiss-notice'){dismissCompetitionNotice(profile);persist();render();return true;}
  if(action==='cup-join'||action==='cup-skip'){chooseRankUpTournament(profile,action==='cup-join');persist();render();return true;}
}catch(err){toast(err.message);return true;}return false;}

let battleBusy=false;
function recordHistory(result,request,extra={}){profile.battleHistory=Array.isArray(profile.battleHistory)?profile.battleHistory:[];profile.battleStats=profile.battleStats||{battles:0,wins:0,qualifierBattles:0,leagueBattles:0,rankUpWins:0,masterWins:0};profile.battleStats.battles++;if(result.won)profile.battleStats.wins++;if(String(extra.mode||'').startsWith('qualifier'))profile.battleStats.qualifierBattles++;if(String(extra.mode||'').startsWith('mob-league'))profile.battleStats.leagueBattles++;if(String(extra.mode||'').startsWith('rankup-tournament')&&result.won)profile.battleStats.rankUpWins++;if(String(extra.mode||'').startsWith('mob-master')&&result.won)profile.battleStats.masterWins++;applyBattleFigureRecords(profile,result);profile.battleHistory.push({...enrichedHistoryRow(result,request,extra),at:Date.now()});if(profile.battleHistory.length>200)profile.battleHistory.splice(0,profile.battleHistory.length-200);}
function competitionBattleRequest(type){
  if(type==='qualifier'){
    const q=ensureQualifier(profile);if(!q||q.results.length>=2)throw new Error('今週のMOBリーグ予選は終了しています。');const o=q.opponents[q.results.length];persist();
    return {request:{mode:'competition',title:'MOB LEAGUE QUALIFIER',opponentName:o?.name||'CPU',cpuRank:q.rank,context:{type},forfeitCountsLoss:true},resolve:result=>{const r=recordQualifierResult(profile,result.won);recordHistory(result,{title:'MOB LEAGUE QUALIFIER',opponentName:o?.name||'CPU'},{mode:'qualifier',rank:q.rank});return {reward:r.reward,message:`予選 ${result.won?'WIN':'LOSE'} · ${r.points>0?'+':''}${r.points}PT`};}};
  }
  if(type==='cup'){
    const t=currentRankUp(profile);if(!t||t.status!=='active')throw new Error('現在プレイできるランクアップトーナメントはありません。');const name=t.opponents[t.round]||'CPU';
    return {request:{mode:'competition',title:'RANK UP TOURNAMENT',opponentName:name,cpuRank:t.rankAtEntry,context:{type},forfeitCountsLoss:true},resolve:result=>{const r=recordRankUpResult(profile,result.won);recordHistory(result,{title:'RANK UP TOURNAMENT',opponentName:name},{mode:'rankup-tournament',rank:t.rankAtEntry});return {reward:r.reward||null,message:r.finished?(r.winner?'TOURNAMENT WIN':'TOURNAMENT FINISH'):`${result.won?'NEXT ROUND':'TOURNAMENT LOSE'}`};}};
  }
  if(type==='league'){
    const lf=getLeagueFinal(profile),matches=currentLeagueMatches(profile);if(!lf||!matches.some(x=>!x.result))throw new Error('現在プレイできるMOBリーグの試合はありません。');const nextMatch=matches.find(x=>!x.result);
    return {request:{mode:'competition',title:'MOB LEAGUE',opponentName:nextMatch?.name||'CPU',cpuRank:profile.rank,context:{type},forfeitCountsLoss:true},resolve:result=>{const r=recordLeagueFinalResult(profile,result.won);recordHistory(result,{title:'MOB LEAGUE',opponentName:nextMatch?.name||'CPU'},{mode:'mob-league',rank:profile.rank});return {reward:r.reward||null,message:`MOB LEAGUE ${result.won?'WIN':'LOSE'}`};}};
  }
  if(type==='master'){
    const mc=getMasterChallenge(profile);if(!mc||mc.winner)throw new Error('現在プレイできるMOB MASTER決定戦はありません。');const opponentName=mc.defender==='PLAYER'?mc.challenger:mc.defender;
    return {request:{mode:'competition',title:'MOB MASTER MATCH',opponentName:opponentName||'CPU',cpuRank:'SS',context:{type},forfeitCountsLoss:true},resolve:result=>{const r=recordMasterChallengeResult(profile,result.won);recordHistory(result,{title:'MOB MASTER MATCH',opponentName:opponentName||'CPU'},{mode:'mob-master',rank:'SS'});return {reward:r.reward||null,message:r.winner?`${r.winner==='PLAYER'?'MOB MASTER!':'決定戦終了'}`:`MOB MASTER MATCH ${result.won?'WIN':'LOSE'}`};}};
  }
  throw new Error('UNKNOWN_COMPETITION_BATTLE');
}
async function startBattleFromUi(spec){
  if(battleBusy)return; battleBusy=true;
  try{
    let request,onResolved;
    if(spec.startsWith('free:')){
      const difficulty=(spec.split(':')[1]||'easy');request={mode:'free',difficulty,title:`FREE BATTLE · ${difficulty.toUpperCase()}`,opponentName:`CPU ${difficulty.toUpperCase()}`,cpuRank:profile.rank,forfeitCountsLoss:false};
      onResolved=result=>{const rw=battleReward(profile,'free',difficulty,result.won);recordHistory(result,request,{mode:`free-${difficulty}`,rank:profile.rank});persist();return {reward:result.won?rw:null,message:result.won?'FREE BATTLE CLEAR':'再挑戦しよう'};};
    }else if(spec==='random'){
      const state=randomMatchStatus(profile);if(state.remaining<=0)throw new Error('今週のランダムマッチ3回は終了しています。');
      const opponentName=CPU_NAMES[Math.floor(Math.random()*CPU_NAMES.length)]||'RANDOM CPU';request={mode:'random',title:'RANDOM MATCH',opponentName,cpuRank:profile.rank,forfeitCountsLoss:true};
      onResolved=result=>{const rr=recordRandomMatch(profile,result.won);recordHistory(result,request,{mode:'random',rank:profile.rank});persist();return {reward:result.won?rr.reward:null,message:`RANDOM MATCH ${result.won?'WIN':'LOSE'} · 今週 ${rr.played}/3`};};
    }else{const c=competitionBattleRequest(spec);request=c.request;onResolved=result=>{const meta=c.resolve(result);persist();return meta;};}
    const result=await launchBattle({profile,request,onResolved,saveProfile,testMode:testSettings.enabled&&profile.testMode});if(!result?.cancelled){syncCompetition(profile);persist();render();}
  }catch(err){render();toast(err?.message||'バトルを開始できませんでした。');}
  finally{battleBusy=false;}
}

function openFigureInfo(id){
  const f=byId.get(id);if(!f)return;const owned=profile.owned?.[id]||0,rec=figureRecord(profile,id),known=owned>0;
  const names=(f.tags||[]).map(t=>tags.find(x=>String(x.id)===String(t))?.name).filter(Boolean);
  const dlg=document.createElement('dialog');dlg.className='figure-dex-dialog';
  dlg.innerHTML=`<section><button class="figure-dex-close" aria-label="閉じる">×</button><div class="figure-dex-hero ${known?'':'locked'}">${art(f)}</div><div class="figure-info-badges">${rankArt(f.rarity,'figure-info-rank',f.rarity)}${iconArt('status','figure-info-status','STATUS')}</div><small>${f.displayNo} · ${f.rarity} · COST ${f.mobPiece.cost}</small><h2>${known?f.name:'？？？'}</h2><p class="figure-dex-owned">所持 ${owned} / 出場 ${rec.appearances} / 対戦勝利 ${rec.matchWins}</p>${known?`<div class="figure-dex-stats"><span>HP<b>${f.mobPiece.hp}</b></span><span>ATK<b>${f.mobPiece.attack}</b></span><span>DEF<b>${f.mobPiece.defense}</b></span><span>SPD<b>${f.mobPiece.speed}</b></span></div><h3>${iconArt('tag','figure-info-tag','TAG')} TAG</h3><div class="figure-dex-tags">${names.length?names.map(x=>`<span>${x}</span>`).join(''):'<span>タグなし</span>'}</div>${figureSkillInfo(f)}<p class="figure-dex-note">ラウンド勝利 ${rec.roundWins} · このフィギュアを使った対戦勝利 ${rec.matchWins}</p>`:'<p class="notice">まだ所持していないフィギュアです。入手すると名前・能力・タグ・戦績が開放されます。</p>'}</section>`;
  document.body.appendChild(dlg);dlg.showModal();const close=()=>{dlg.close();dlg.remove();};dlg.querySelector('.figure-dex-close').onclick=close;dlg.addEventListener('click',e=>{if(e.target===dlg)close();});dlg.addEventListener('cancel',e=>{e.preventDefault();close();});
}

function setRank(rank){
  if(!RANKS.includes(rank))throw new Error('不正なランクです。');
  profile.rank=rank;
  if(!profile.highestRank||RANKS.indexOf(rank)>RANKS.indexOf(profile.highestRank))profile.highestRank=rank;
}
function grantAllFigures(){
  profile.owned=profile.owned||{};
  figures.filter(f=>!f.pending).forEach(f=>{profile.owned[f.sourceId]=Math.max(profile.owned[f.sourceId]||0,OWN_CAP[f.rarity]||1);});
  if(!profile.centerId||!byId.has(profile.centerId))profile.centerId=figures.find(f=>!f.pending)?.sourceId||'01';
  if(!profile.avatarId||!byId.has(profile.avatarId))profile.avatarId=profile.centerId;
}

app.addEventListener('click',async e=>{const b=e.target.closest('button');if(!b)return;
if(b.hasAttribute('data-week-open')){const modal=app.querySelector('[data-week-modal]');if(modal)modal.hidden=false;return;}
if(b.hasAttribute('data-week-close')){const modal=app.querySelector('[data-week-modal]');if(modal)modal.hidden=true;return;}
if(b.hasAttribute('data-week-confirm')){try{advanceWeek(profile);persist();render();}catch(err){toast(err.message);}return;}
if(b.dataset.testComp){if(!profile.testMode){toast('TEST MODEをONにしてください。');return;}try{const v=b.dataset.testComp;if(v.startsWith('cup:'))testEnterRankUpTournament(profile,v.split(':')[1]);else if(v==='league')testEnterLeague(profile);else if(v==='master')testEnterMasterMatch(profile);else if(v==='restore'){if(!restoreCompetitionFromTest(profile))throw new Error('戻せるテスト前データがありません。');}persist();render();toast(v==='restore'?'通常の大会進行へ戻しました':'TEST MODEへ移動しました');}catch(err){toast(err.message);}return;}
if(b.hasAttribute('data-collection-reset')){query='';rarity='ALL';collectionStatus='ALL';collectionSort='DEX_ASC';collectionTag='ALL';render();return;}
if(b.dataset.historyFilter){historyFilter=b.dataset.historyFilter;render({preserveScroll:true});return;}
if(b.dataset.calendarView){calendarView=b.dataset.calendarView;render({preserveScroll:true});return;}
if(b.dataset.calendarMonth){calendarMonth=Number(b.dataset.calendarMonth);calendarView='month';render({preserveScroll:true});return;}
if(b.dataset.calendarOpenMonth){calendarMonth=Number(b.dataset.calendarOpenMonth);calendarView='month';render();return;}
if(b.dataset.openDeckPicker!==undefined){const picker=app.querySelector('[data-deck-picker]');if(picker)picker.hidden=false;return;}
if(b.dataset.closeDeckPicker!==undefined){const picker=app.querySelector('[data-deck-picker]');if(picker)picker.hidden=true;return;}
if(b.dataset.deckSlot!==undefined){switchDeckSlot(profile,Number(b.dataset.deckSlot));persist();render();toast(`DECK ${profile.activeDeckSlot+1} に切り替えました`);return;}
if(b.dataset.collectionStatus){collectionStatus=b.dataset.collectionStatus;render();return;}
if(b.dataset.figureInfo){openFigureInfo(b.dataset.figureInfo);return;}
if(b.dataset.playerAvatar){profile.avatarId=b.dataset.playerAvatar;persist();render({preserveScroll:true});toast('プレイヤーアバターを変更しました');return;}
if(b.hasAttribute('data-mission-claim-all')){try{const reward=claimAllMissions(profile,{figures,byId});persist();render();toast(`MISSION ALL CLEAR！ ${reward.coins.toLocaleString('ja-JP')} COIN + ${reward.diamonds} DIAMOND · ${reward.count}件`);}catch(err){toast(err.message);}return;}
if(b.dataset.missionClaim){try{const reward=claimMission(profile,b.dataset.missionClaim,{figures,byId});persist();render();toast(`MISSION CLEAR！ ${reward.coins.toLocaleString('ja-JP')} COIN + ${reward.diamonds} DIAMOND`);}catch(err){toast(err.message);}return;}
if(b.dataset.pickFigure){const next=[...profile.deck,b.dataset.pickFigure];const result=validateDeck(next,byId,profile.owned);if(result.errors.length){toast(result.errors[0]);return;}profile.deck=next;persist();render({preserveScroll:true});setTimeout(()=>{const picker=app.querySelector('[data-deck-picker]');if(picker)picker.hidden=false;},0);return;}
if(b.hasAttribute('data-auto-deck')){const built=autoBuildDeck(figures,profile.owned);if(built.error){toast(built.error);return;}profile.deck=built.deck;persist();render();toast(`おまかせ編成：25体 / COST ${built.cost}`);return;}
if(b.hasAttribute('data-clear-deck')){if(!profile.deck.length){toast('デッキは空です');return;}profile.deck=[];persist();render();toast('デッキを空にしました');return;}
if(b.dataset.testAction){
  try{
    const action=b.dataset.testAction;
    if(action==='toggle-mode'){profile.testMode=!profile.testMode;if(!profile.testMode)for(const [id,n] of Object.entries(profile.owned)){const f=byId.get(id);if(f)profile.owned[id]=Math.min(n,OWN_CAP[f.rarity]);}if(profile.testMode){profile.coins=testSettings.maxCurrency;profile.diamonds=testSettings.maxCurrency;profile.rubies=testSettings.maxCurrency;}persist();render();toast(`TEST MODE ${profile.testMode?'ON':'OFF'}`);return;}
    if(!profile.testMode)throw new Error('先にTEST MODEをONにしてください。');
    if(action==='coins-max')profile.coins=testSettings.maxCurrency;
    else if(action==='diamonds-max')profile.diamonds=testSettings.maxCurrency;
    else if(action==='rubies-max')profile.rubies=testSettings.maxCurrency;
    else if(action==='figures-max')grantAllFigures();
    else if(action==='figure-25'){const id=document.querySelector('#test-figure-select')?.value;const f=byId.get(id);if(!f||f.pending)throw new Error('フィギュアを選んでください。');profile.owned[id]=25;profile.testFigureId=id;}
    persist();render({preserveScroll:true});toast('テスト用データを適用しました');
  }catch(err){toast(err.message);}return;
}
if(b.dataset.testRank){try{if(!profile.testMode)throw new Error('先にTEST MODEをONにしてください。');setRank(b.dataset.testRank);persist();render({preserveScroll:true});toast(`テストランクを ${b.dataset.testRank} に変更しました`);}catch(err){toast(err.message);}return;}
if(b.dataset.comp&&competitionAction(b.dataset.comp))return;if(b.dataset.compBattle){await startBattleFromUi(b.dataset.compBattle);return;}if(b.dataset.battleStart){await startBattleFromUi(b.dataset.battleStart);return;}handleGacha(b);if(b.dataset.editShelf!==undefined)displaySlot=Number(b.dataset.editShelf);if(b.dataset.go){location.hash=b.dataset.go;return;}if(b.dataset.displaySlot!==undefined){displaySlot=Number(b.dataset.displaySlot);render({preserveScroll:true});}if(b.dataset.displayFigure){const f=byId.get(b.dataset.displayFigure);if(!usableFigure(f))return;profile.displayIds[displaySlot]=f.sourceId;persist();render({preserveScroll:true});toast('展示フィギュアを変更しました');}if(b.dataset.center){profile.centerId=b.dataset.center;persist();render();toast('センターフィギュアを変更しました');}if(b.dataset.filter){rarity=b.dataset.filter;render();}if(b.dataset.add){const next=[...profile.deck,b.dataset.add];const result=validateDeck(next,byId,profile.owned);if(result.errors.length){toast(result.errors[0]);return;}profile.deck=next;persist();render({preserveScroll:true});}if(b.dataset.remove!==undefined){profile.deck.splice(Number(b.dataset.remove),1);persist();render({preserveScroll:true});}if(b.dataset.action==='motion'){profile.reducedMotion=!profile.reducedMotion;persist();render();}if(b.dataset.action==='center-next'){const released=figures.filter(f=>!f.pending);profile.centerId=released[(released.findIndex(f=>f.sourceId===profile.centerId)+1)%released.length].sourceId;persist();render();}if(b.dataset.mode){const mode=modes.find(m=>m.id===b.dataset.mode);if(mode?.id==='tournament'){location.hash='tournament';return;}if(mode?.id==='random'){await startBattleFromUi('random');return;}if(mode?.id==='free'){await startBattleFromUi('free:easy');return;}toast(`${mode.label}：${mode.status}`);}});
app.addEventListener('input',e=>{if(e.target.id==='display-search'){displayQuery=e.target.value;const start=e.target.selectionStart;render({preserveScroll:true});const input=document.querySelector('#display-search');input.focus({preventScroll:true});input.setSelectionRange(start,start);}if(e.target.id==='figure-search'){query=e.target.value;const start=e.target.selectionStart;render();const input=document.querySelector('#figure-search');input.focus();input.setSelectionRange(start,start);}});
app.addEventListener('change',e=>{if(e.target.id==='figure-sort'){collectionSort=e.target.value;render({preserveScroll:true});}if(e.target.id==='figure-tag-filter'){collectionTag=e.target.value;render({preserveScroll:true});}});
async function boot(){try{initGacha(ctx,render,toast);const center=byId.get(profile.centerId)||figures.find(f=>!f.pending);const centerImage=center?imagePath(center):null;await preloadUrls(criticalUiUrls(profile,centerImage),(done,total)=>window.mpbBootProgress?.(done,total,'UI / FIGURE'));window.addEventListener('hashchange',()=>{try{render();}catch(err){showBootError(err);}});render();document.documentElement.dataset.mpbReady='1';window.dispatchEvent(new CustomEvent('mpb:ready'));if(!storageAvailable)toast('ブラウザ保存を利用できません');}catch(err){showBootError(err);}}
function showBootError(err){console.error('[MPB] boot error',err);document.documentElement.dataset.mpbReady='error';const msg=String(err?.message||err||'UNKNOWN_ERROR');app.innerHTML=`<div class="boot-error"><div><small>MOB PIECE BATTLE</small><h1>起動エラー</h1><p>ゲームの読み込みに失敗しました。</p><code>${msg.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}</code><button onclick="location.reload()">再読み込み</button></div></div>`;}
boot();
