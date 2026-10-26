import {removedMbIds} from './mb-adventure.js';
import {oct06RetiredIds} from './oct06-spec.js';
import {isStoryOnlyId} from './battle-corrections.js';
import sourceFigures from './figures_master_v170.js?v=7.3.0';
import soulCatalog from './soul-catalog.js';
const tags=soulCatalog.tags;
const masterNames=new Map(soulCatalog.figures.map(f=>[f.id,f.name]));const masterById=new Map(soulCatalog.figures.map(f=>[f.id,f]));
import {pieceInventoryFigures} from './piece-catalog.js';
const originalFigures=[...sourceFigures.filter(f=>!removedMbIds.has(f.sourceId)),...pieceInventoryFigures].filter(f=>!removedMbIds.has(f.sourceId));
const oldById=new Map(originalFigures.map(f=>[f.sourceId,f]));
const activeFigures=soulCatalog.figures.map((f,i)=>({...oldById.get(f.id),id:oldById.get(f.id)?.id||f.id,sourceId:f.id,name:f.name,image:f.image,rarity:f.rarity,tags:f.tags,dexNo:oldById.get(f.id)?.dexNo||1000+i,displayNo:oldById.get(f.id)?.displayNo||'No.'+(1000+i),pending:!!f.pending,releaseWave:f.releaseWave,series:f.series,series2:f.series2,source:'soul',statsText:'ATK '+f.atk+' / DEF '+f.def,soul:{name:f.soulSkill.name,text:f.soulSkill.description},mobPiece:{cost:1,hp:f.def,attack:f.atk,defense:f.def,speed:20},mobPieceV115:{cost:1,hp:f.def,attack:f.atk,defense:f.def,speed:20},adjacencyTags:oldById.get(f.id)?.adjacencyTags||[],pieceSoul:oldById.get(f.id)?.pieceSoul||{}}));
const activeIds=new Set(activeFigures.map(f=>f.sourceId));
const figures=activeFigures.filter(f=>!isStoryOnlyId(f.sourceId)&&!oct06RetiredIds.has(f.sourceId));
export {figures,tags};
export const byId=new Map([...originalFigures.filter(f=>!activeIds.has(f.sourceId)).map(f=>({...f,retired:true})),...activeFigures].map(f=>[f.sourceId,(isStoryOnlyId(f.sourceId)||oct06RetiredIds.has(f.sourceId))?{...f,retired:true}:f]));
export const imagePath = f => {
  if(!f || !f.image) return '';
  try { return new URL(String(f.image).replace(/^\.\//,''), document.baseURI).href; }
  catch { return String(f.image); }
};
export const modes = [
 {id:'free',name:'FREE BATTLE',label:'フリーバトル',description:'気軽に挑戦。自分のチームを試そう。',icon:'battle',status:'PLAYABLE'},
 {id:'random',name:'RANDOM MATCH',label:'ランダムマッチ',description:'週3回まで挑戦。勝利報酬を獲得。',icon:'rank',status:'PLAYABLE'},
 {id:'tournament',name:'TOURNAMENT',label:'大会',description:'MOBリーグ / ランクアップトーナメント',icon:'tournament',status:'開催中'},
 {id:'special',name:'SPECIAL BATTLE',label:'スペシャルバトル',icon:'special',status:'今後追加予定'},
 {id:'boss',name:'BOSS RAID',label:'ボスレイド',icon:'boss',status:'今後追加予定'}
];

