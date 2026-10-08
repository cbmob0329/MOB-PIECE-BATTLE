import {versusStage} from '../components/versus-stage.js';
import {towerScene} from '../components/tower-scene.js';
import {campaignTowers} from '../data/tower-campaign.js';
import {practicePanel,handlePractice} from './practice.js';
import {campaignOpponent,campaignOpponentCount} from '../data/tower-campaign.js';
import {sound} from '../audio/audio.js';
import {campaignView as towerState,currentCampaignTower,prepareCampaignStart as prepareTowerStart,prepareCampaignResult as prepareTowerResult,campaignMatchRequest as towerMatchRequest,prepareCampaignAbandon as prepareTowerAbandon} from '../game/tower-campaign.js';
import {towerDeckOptions,prepareTowerThirdDeck} from '../game/tower.js';
import {launchBattle} from './soulDuelRuntime.js';
import {commitProfile,saveProfile} from '../game/profile.js?v=7.3.0';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let mapFloor=1,mapTower='',renderLatest=null,sheetHistory=false;
window.addEventListener('popstate',()=>{if(sheetHistory){floor=null;abandon=false;sheetHistory=false;renderLatest?.();}});
let opponentSlot=0;const seenUnlocks=new Set();
let floor=null,keys=[],order=[0,1,2,0,1],abandon=false,locked=false;
window.addEventListener('hashchange',()=>{floor=null;abandon=false;sheetHistory=false;});
const score=a=>{const w=a.results.filter(Boolean).length;return `${w}勝 / ${a.results.length-w}敗`;};
const floorOpen=(profile,n)=>Number.isInteger(n)&&n>=1&&n<=5&&(n===1||towerState(profile).cleared.includes(n-1));
const lockedFloor=n=>`<section class="tower-locked"><span aria-hidden="true">♙</span><div><h3>${n}階は未解放</h3><p>${n-1}階をクリアすると挑戦できます。<br>まずは挑戦できる階を進めましょう。</p></div></section>`;
const representative=(ctx,deck=[])=>deck.includes(ctx.profile.centerId)?ctx.profile.centerId:deck.find(id=>ctx.byId.has(id))||ctx.profile.centerId;
const options=(ctx,key)=>towerDeckOptions(ctx.profile).map(o=>`<option value="${o.key}" ${o.key===key?'selected':''} ${o.check.valid?'':'disabled'}>${esc(o.name)}${o.check.valid?' · 45枚':' · 要編集'}</option>`).join('');
export function towerScreen(ctx){
 const grassTower=towerDefinition(ctx),t=towerState(ctx.profile),a=t.active,last=t.last;
 const top=`<header class="tower-heading"><button data-go="home" aria-label="ホームに戻る">‹</button><div><h1>${grassTower.title}</h1></div><button data-go="shop" aria-label="ショップ">ショップ</button></header>`;
 let content='';
 if(a){const deck=a.decks[a.assignment[a.results.length]]?.ids||a.decks[0]?.ids||[],enemyId=a.enemy?.strategy?.focusIds?.[0]||a.enemy?.deck?.[0]||campaignOpponent(grassTower,a.floor,a.slot||0);content=`<section class="tower-series"><small>${a.floor}階 · 第${a.results.length+1}戦</small>${versusStage({playerId:representative(ctx,deck),enemyId,enemyLabel:'対戦相手',caption:a.opponent})}<div class="tower-series-status"><strong>${score(a)}</strong><span>${a.need}勝でクリア</span></div><div class="tower-match-track">${a.assignment.map((d,i)=>`<div class="${i<a.results.length?(a.results[i]?'won':'lost'):i===a.results.length?'current':''}"><small>第${i+1}戦</small><b>${a.floor===5?'ABC'[d]:'◆'}</b><span>${i<a.results.length?(a.results[i]?'勝利':'敗北'):i===a.results.length?'次の対戦':'待機'}</span></div>`).join('')}</div><div class="tower-dock"><button class="tower-primary" data-tower-play>第${a.results.length+1}戦をはじめる</button><button data-tower-abandon>この連戦をやり直す</button></div></section>`;}
 else content=campaignMap(ctx,t,grassTower);
 const setup=floor?setupMarkup(ctx):'';
 return `<section class="tower-page">${top}${content}${practicePanel(ctx.profile)}${setup}${abandon?`<div class="tower-modal" role="dialog" aria-modal="true" aria-label="連戦のやり直し"><div class="tower-sheet"><h2>この連戦をやり直す？</h2><p>現在の連戦スコアをリセットします。所持品とクリア済みの階は変わりません。</p><button data-tower-abandon-confirm>はい、やり直す</button><button data-tower-cancel>戻る</button></div></div>`:''}</section>`;
}
function setupMarkup(ctx){
 if(!floorOpen(ctx.profile,floor))return lockedFloor(floor);
 const tower=towerDefinition(ctx),f=tower.floors.find(f=>f.id===floor),boss=floor===5,deck=towerDeckOptions(ctx.profile).find(o=>o.key===keys[0])?.deck||[],enemyId=campaignOpponent(tower,floor,opponentSlot),count=i=>order.filter(x=>x===i).length;
 const legal=keys.length===(boss?3:1)&&new Set(keys).size===keys.length&&keys.every(k=>towerDeckOptions(ctx.profile).some(o=>o.key===k&&o.check.valid))&&(!boss||[0,1,2].every(i=>count(i)<=2));
 return `<div class="tower-modal" role="dialog" aria-modal="true" aria-label="${floor}階への挑戦"><section class="tower-sheet tower-duel-sheet ${boss?'boss':''}"><header><div><small>${tower.name} · ${floor}階</small><h2>${boss?'タワーマスターに挑戦':'この相手と対戦'}</h2></div><button data-tower-cancel aria-label="閉じる">×</button></header>${versusStage({playerId:representative(ctx,deck),enemyId,enemyLabel:boss?'タワーマスター':'対戦相手'})}<p class="tower-opponent-line">「${esc(boss?f.dialogue:tower.greeting)}」</p><p class="tower-battle-rule">${boss?'3つのデッキで、先に3勝。':tower.id==='mob'?'この相手に勝つと次の階へ。':'3人全員に勝つと次の階へ。'}</p><div class="tower-deck-choices">${keys.map((k,i)=>`<label><b>${boss?'デッキ'+'ABC'[i]:'使用デッキ'}</b><select data-tower-deck="${i}" aria-label="デッキ${boss?'ABC'[i]:'選択'}">${options(ctx,k)}</select></label>`).join('')}</div>${boss?`<p class="tower-limit">各デッキは2回まで <b>${[0,1,2].map(i=>'ABC'[i]+' '+count(i)+'/2').join('　')}</b></p><div class="tower-assignment">${order.map((d,i)=>`<div><strong>第${i+1}戦</strong><div>${[0,1,2].map(n=>`<button data-tower-assign="${i}:${n}" aria-label="第${i+1}戦 デッキ${'ABC'[n]}" aria-pressed="${d===n}" ${d!==n&&count(n)>=2?'disabled':''}>${'ABC'[n]}</button>`).join('')}</div></div>`).join('')}</div><p class="tower-note">先に3勝した時点で終了。開始後は編成を変更できません。</p>`:''}<footer class="tower-confirm"><button data-tower-cancel>戻る</button><button class="tower-primary" data-tower-start ${legal?'':'disabled'}>対戦をはじめる</button></footer></section></div>`;
}
function commit(next){if(!commitProfile(next))throw Error('保存できませんでした。操作は確定していません。');}
export function handleTowerChange(el,ctx,{render}){if(!el.hasAttribute('data-tower-deck'))return false;keys[Number(el.dataset.towerDeck)]=el.value;render();return true;}
export async function handleTower(button,ctx,{render,toast}){
 if(await handlePractice(button,ctx,{render,toast}))return true;
 renderLatest=render;
 if(![...button.attributes].some(a=>a.name.startsWith('data-tower-')))return false;if(locked)return true;
 try{
 if(button.dataset.towerLevel){mapFloor=Number(button.dataset.towerLevel);render();}
 else if(button.dataset.towerFloor){const requested=Number(button.dataset.towerFloor);if(!floorOpen(ctx.profile,requested)){floor=null;mapFloor=Math.min(5,Math.max(1,requested||1));render();return true;}if(!sheetHistory){history.pushState({...(history.state||{}),towerSheet:true},'');sheetHistory=true;}floor=Number(button.dataset.towerFloor);sound.play(floor===5?'start':'select',{sampleId:floor===5?99:100,durationLimit:floor===5?1.4:.5});opponentSlot=Number(button.dataset.towerSlot||0);const valid=towerDeckOptions(ctx.profile).filter(o=>o.check.valid);keys=floor===5?[valid[0]?.key,valid.find(o=>o.key!==valid[0]?.key&&JSON.stringify(o.deck)!==JSON.stringify(valid[0]?.deck))?.key,'starter:mix']:[(valid.find(o=>o.key==='slot:'+ctx.profile.soulDeckSlot)||valid[0])?.key];order=[0,1,2,0,1];render();}
 else if(button.hasAttribute('data-tower-cancel')){floor=null;abandon=false;if(sheetHistory){sheetHistory=false;history.back();}render();}
 else if(button.dataset.towerAssign){const [i,n]=button.dataset.towerAssign.split(':').map(Number);order[i]=n;render();}
 else if(button.hasAttribute('data-tower-third')){commit(prepareTowerThirdDeck(ctx.profile));location.hash='deck';toast('支給カードを組み替えました。自由に編集できます。');}
 else if(button.hasAttribute('data-tower-abandon')){abandon=true;render();}
 else if(button.hasAttribute('data-tower-abandon-confirm')){commit(prepareTowerAbandon(ctx.profile));abandon=false;render();}
 else if(button.hasAttribute('data-tower-start')){locked=true;commit(prepareTowerStart(ctx.profile,floor,keys,order,opponentSlot));floor=null;if(sheetHistory){sheetHistory=false;history.back();}await playCurrent(ctx,render);}
 else if(button.hasAttribute('data-tower-play')){
 locked=true;await playCurrent(ctx,render);
 }
 }catch(e){toast(e.message,'error');}finally{locked=false;}return true;
}

async function playCurrent(ctx,render){const request=towerMatchRequest(ctx.profile);sound.stopAll();await launchBattle({profile:ctx.profile,request,saveProfile,onResolved:result=>{const out=prepareTowerResult(ctx.profile,request.towerToken,result.won);commit(out.next);return {message:out.message,reward:out.reward};}});render();}
function towerDefinition(ctx){const t=currentCampaignTower(ctx.profile);return {...t,floors:Array.from({length:5},(_,i)=>({id:i+1,rank:i===4?t.bossRank:t.rank,name:i===4?'タワーマスター':(i+1)+'F',opponent:ctx.byId.get(campaignOpponent(t,i+1))?.name,dialogue:t.dialogue}))};}
function campaignMap(ctx,t,tower){
 const last=t.last;if(mapTower!==tower.id){mapTower=tower.id;mapFloor=Math.min(5,t.cleared.length+1);}
 const key=last?.unlock?last.towerId+':'+last.unlock:null,animate=key&&!seenUnlocks.has(key);if(key){seenUnlocks.add(key);if(animate)mapFloor=last.unlock;}
 const selected=mapFloor,open=floorOpen(ctx.profile,selected),done=t.cleared.includes(selected),defeated=t.defeated?.[selected]||[],count=campaignOpponentCount(tower,selected);
 const opponents=!open?lockedFloor(selected):`<section class="tower-challengers ${animate?'just-unlocked':''}"><header class="challenger-heading"><div><small>${selected}階 · ${selected===5?'頂上決戦':'挑戦者'}</small><h3>${selected===5?'マスターに挑もう':'対戦相手を選ぼう'}</h3></div><div class="floor-progress" aria-label="${selected===5?Number(done):defeated.length}/${count} 勝利">${Array.from({length:count},(_,i)=>`<i class="${selected===5?done?'done':'':defeated.includes(i)?'done':''}"></i>`).join('')}</div></header><p>${selected===5?'3デッキで挑戦。先に3勝するとクリア。':tower.id==='mob'?'この相手に勝つと次の階へ。':'順番は自由。3人全員に勝つと次の階へ。'}</p><div class="challenger-cards ${count===1?'single':''}">${Array.from({length:count},(_,slot)=>{const f=ctx.byId.get(campaignOpponent(tower,selected,slot)),beaten=selected===5?done:defeated.includes(slot);return `<button class="challenger-card ${beaten?'beaten':''}" data-tower-floor="${selected}" data-tower-slot="${slot}" ${beaten&&selected<5?'disabled':''} aria-label="${esc(f.name)} · ${beaten?'勝利済み':'挑戦'}"><span class="challenger-pedestal"><img src="${esc(f.image)}" alt="" draggable="false"></span><strong>${esc(f.name)}</strong><small>${beaten?'勝利済み':'挑戦する'}</small></button>`;}).join('')}</div></section>`;
 return `${last?`<div class="tower-last ${last.won?'won':''}" role="status"><b>${last.nextTower?'新しいタワーへ！':last.floorClear?'この階をクリア！':last.won?'勝利！':'もう一度、挑戦しよう。'}</b>${last.reward?`<small>初回報酬　${last.reward.coins} COIN / ${last.reward.diamonds} MOB</small>`:''}${last.nextTower?`<span>${esc(last.nextTower)}</span>`:''}${last.unlockedBanners?'<button data-go="gacha">新しいガチャを見る →</button>':''}</div>`:''}<div class="expedition-title"><div><small>${campaignTowers.findIndex(x=>x.id===tower.id)+1} / 19 のタワー</small><h2>${esc(tower.name)}</h2><p>${t.cleared.length} / 5 階クリア</p></div><span class="tower-rank-pill">ランク ${tower.rank} → ${tower.bossRank}</span></div>${towerScene(tower,selected,t.cleared)}${opponents}<div class="tower-links campaign-links"><button data-go="deck">デッキ編成</button><button data-go="shop">タワーショップ</button></div><button data-tower-third>3つ目の編成を作る</button>`;
}
