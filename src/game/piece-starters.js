import {familyIds} from './family-collection.js';
import {elementIds} from './element-collection.js';
import initialRelease from '../data/initial-release.json' with {type:'json'};
import {soulFigures,soulById,validateSoulDeck,setSoulDeck,autoSoulDeck} from './soul-battle.js';
import materialStarters from '../data/materials-starters.json' with {type:'json'};
export const pieceStarters=[{id:'piece-soldier',name:'モブ兵士スターター'},{id:'piece-boxer',name:'モブボクサースターター'},...materialStarters.map(({id,name})=>({id,name}))];
const repeat=(id,n)=>Array(n).fill(id);
const p=(n,count)=>repeat('piece:'+n,count);
export function pieceStarterDeck(id){
 const material=materialStarters.find(s=>s.id===id);if(material)return [...material.deck];
 const soldier=id==='piece-soldier';if(!soldier&&id!=='piece-boxer')throw Error('スターターを選んでください');
 const seeds=soldier?['031','032','033','035','037','041','010','012','023','024','026','028']:['042','043','044','045','018','019','010','012','023','024','027','029'];
 const mids=soldier?['034','036','038','040','022']:['020','021','046','048','022'];
 const deck=[...seeds.flatMap(n=>p(n,2)),...repeat('01',2),...repeat('09',2),...repeat('32',2),...mids.flatMap(n=>p(n,2)),...p(soldier?'039':'049',3),...p('025',2)];
 const owned={};for(const fid of deck)owned[fid]=(owned[fid]||0)+1;
 const ordered=autoSoulDeck(owned);if(!validateSoulDeck(ordered,owned).valid)throw Error('スターターの構成が不正です');return ordered;
}
export function grantMainCollection(profile,{newProfile=false}={}){
 if(profile.pieceCollectionVersion>=2)return false;
 profile.owned??={};
 const required=Object.fromEntries(soulFigures.filter(f=>f.collection==='main'&&!f.id.startsWith('BFX')&&!elementIds.has(f.id)&&!familyIds.has(f.id)).map(f=>[f.id,1]));
 for(const starter of pieceStarters){const counts={};for(const id of pieceStarterDeck(starter.id))counts[id]=(counts[id]||0)+1;for(const [id,n]of Object.entries(counts))required[id]=Math.max(required[id]||0,n);}
 for(const [id,n]of Object.entries(required))profile.owned[id]=Math.max(profile.owned[id]||0,n);
 if(newProfile){profile.soulDecks=Array.from({length:5},()=>[]);profile.soulDeckSlot=0;setSoulDeck(profile,pieceStarterDeck('piece-soldier'));}
 profile.pieceCollectionVersion=2;return true;
}
export function applyPieceStarter(profile,id){
 const deck=pieceStarterDeck(id);if(!validateSoulDeck(deck,profile.owned).valid)throw Error('スターターの所持数が不足しています');
 setSoulDeck(profile,deck);return deck;
}

export function selectCpuStarter(difficulty='normal',random=Math.random){
 const pool=initialRelease.starters;
 const index=Math.max(0,Math.min(pool.length-1,Math.floor(random()*pool.length))),starter=pool[index];
 return {id:starter.id,name:starter.name,deck:[...starter.deck]};
}
