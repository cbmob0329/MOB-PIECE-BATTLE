import starterV2 from '../data/oct10-starter-v2.json' with {type:'json'};
import {towerVersion,towerStarters,towerMix,grassTower,towerEnemy} from '../data/tower.js';
import {validateSoulDeck} from './soul-battle.js';
import {FREE_BATTLE} from '../data/battle.js';
export function towerState(profile){const p=profile.towerProgress||{};return {...p,version:towerVersion,cleared:[...new Set((p.cleared||[]).filter(n=>Number.isInteger(n)&&n>=1&&n<=5))],starterGranted:p.starterGranted===true,starterVersion:p.starterVersion||0,active:p.active||null,last:p.last||null};}
export function prepareTowerStartup(profile){
 const next=structuredClone(profile),t=towerState(next);next.towerProgress=t;if(t.starterGranted&&t.starterVersion>=3)return next;const grants=towerStarters;
 next.owned??={};const decks=Array.from({length:5},(_,i)=>[...(next.soulDecks?.[i]||[])]);
 for(const s of grants){const counts={};for(const id of s.deck)counts[id]=(counts[id]||0)+1;for(const [id,n]of Object.entries(counts))next.owned[id]=Math.max(next.owned[id]||0,n);}
 const signature=d=>[...d].sort().join('|');const corrected=decks.map(d=>{const old=starterV2.find(s=>signature(s.deck)===signature(d));return old?[...towerStarters.find(s=>s.id===old.id).deck]:d;});for(let i=0;i<decks.length;i++)if(corrected[i]!==decks[i]&&validateSoulDeck(corrected[i],next.owned,{profile:{...next,soulDecks:corrected},slot:i}).valid)decks[i]=corrected[i];
 for(const s of (t.starterGranted?grants.filter(s=>s.id==='c'):grants)){if(decks.some(d=>signature(d)===signature(s.deck)))continue;const slot=decks.findIndex((d,i)=>(!profile.towerProgress?.starterGranted||i>=2)&&!d.length&&validateSoulDeck(s.deck,next.owned,{profile:{...next,soulDecks:decks},slot:i}).valid);if(slot>=0)decks[slot]=[...s.deck];}
 next.soulDecks=decks;t.starterGranted=true;t.starterVersion=3;
 // Replace the removed gift button with the same one-time welcome amount.
 if(!profile.towerProgress?.starterGranted&&!next.welcomeClaimed){next.diamonds=(next.diamonds||0)+50;next.welcomeClaimed=true;}
 return next;
}
export function towerDeckOptions(profile){
 const saved=Array.from({length:5},(_,i)=>({key:'slot:'+i,name:'DECK '+(i+1),deck:profile.soulDecks?.[i]||[],slot:i}));
 const templates=[...towerStarters,towerMix].map(s=>({key:'starter:'+s.id,name:s.name,deck:s.deck,slot:2}));
 return [...saved,...templates].map(o=>({...o,check:validateSoulDeck(o.deck,profile.owned,{profile,slot:o.slot})}));
}
export function prepareTowerThirdDeck(profile){const next=structuredClone(profile);const slot=[2,3,4].find(i=>!next.soulDecks?.[i]?.length);if(slot===undefined)throw Error('空き枠がありません。既存のデッキ、または組み替えCを選べます。');next.soulDecks??=[];const check=validateSoulDeck(towerMix.deck,next.owned,{profile:next,slot});if(!check.valid)throw Error(check.errors[0]||'カードが不足しています');next.soulDecks[slot]=[...towerMix.deck];next.soulDeckSlot=slot;return next;}
export function prepareTowerStart(profile,floor,keys,assignment){
 const next=structuredClone(profile),t=towerState(next);next.towerProgress=t;if(t.active)throw Error('進行中の対戦を再開してください');
 const spec=grassTower.floors.find(f=>f.id===floor);if(!spec||floor>1&&!t.cleared.includes(floor-1))throw Error('前の階をクリアしてください');
 const wanted=floor===5?3:1;if(keys.length!==wanted||new Set(keys).size!==wanted)throw Error('使用するデッキを選んでください');
 const options=towerDeckOptions(next),decks=keys.map(k=>{const o=options.find(o=>o.key===k);if(!o?.check.valid)throw Error('選んだデッキを45枚の合法な編成にしてください');return {key:k,name:o.name,ids:[...o.deck]};});
 const order=floor===5?assignment:[0,0,0];if(!Array.isArray(order)||order.length!==(floor===5?5:3)||order.some(n=>!Number.isInteger(n)||n<0||n>=wanted))throw Error('全試合にデッキを割り当ててください');
 if(floor===5&&[0,1,2].some(i=>order.filter(n=>n===i).length>2))throw Error('同じデッキは2回までです');
 t.active={id:globalThis.crypto.randomUUID(),floor,rank:spec.rank,opponent:spec.opponent,need:floor===5?3:2,decks,assignment:[...order],results:[],enemy:towerEnemy(floor)};t.last=null;return next;
}
export function towerMatchRequest(profile){const a=towerState(profile).active;if(!a)throw Error('進行中の対戦がありません');const index=a.results.length,wins=a.results.filter(Boolean).length,losses=index-wins;if(wins>=a.need||losses>=a.need)throw Error('この連戦は終了しています');return {mode:'tower',towerId:'grass',floor:a.floor,title:grassTower.name+' '+a.floor+'F · MATCH '+(index+1),opponentName:a.opponent,playerDeck:[...a.decks[a.assignment[index]].ids],enemy:structuredClone(a.enemy),towerToken:a.id+':'+index,seriesLabel:a.floor+'F · MATCH '+(index+1)+' / '+a.assignment.length+' · '+wins+' − '+losses,returnLabel:'塔のスコアへ →'};}
export function prepareTowerResult(profile,token,won){
 const next=structuredClone(profile),t=towerState(next);next.towerProgress=t;const a=t.active;if(!a||token!==a.id+':'+a.results.length)throw Error('この試合の結果は記録済みです');
 a.results.push(won===true);const wins=a.results.filter(Boolean).length,losses=a.results.length-wins,finished=wins>=a.need||losses>=a.need;let reward=null;
 if(finished){const cleared=wins>=a.need,first=cleared&&!t.cleared.includes(a.floor);if(first){t.cleared.push(a.floor);reward={coins:FREE_BATTLE.easy.coins,diamonds:FREE_BATTLE.easy.diamonds};next.coins=(next.coins||0)+reward.coins;next.diamonds=(next.diamonds||0)+reward.diamonds;}t.last={floor:a.floor,won:cleared,wins,losses,reward,unlockedBanners:first&&a.floor===5};t.active=null;}
 return {next,reward,finished,message:(finished?(wins>=a.need?'FLOOR CLEAR!':'また挑戦しよう。ペナルティはありません。'):'MATCH FINISHED')+' · '+wins+' − '+losses};
}
export function prepareTowerAbandon(profile){const next=structuredClone(profile);next.towerProgress=towerState(next);next.towerProgress.active=null;return next;}
