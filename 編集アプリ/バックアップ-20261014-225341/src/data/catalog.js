import {oct06RetiredIds} from './oct06-spec.js';
import {isStoryOnlyId} from './battle-corrections.js';
import sourceFigures from './figures_master_v170.js?v=7.3.0';
import soulCatalog from './soul-catalog.js';
const tags=soulCatalog.tags;
const masterNames=new Map(soulCatalog.figures.map(f=>[f.id,f.name]));const masterById=new Map(soulCatalog.figures.map(f=>[f.id,f]));
import {pieceInventoryFigures} from './piece-catalog.js';
const storedFigures=[...sourceFigures,...pieceInventoryFigures].map(f=>masterNames.has(f.sourceId)?{...f,name:masterNames.get(f.sourceId),rarity:masterById.get(f.sourceId).rarity,tags:masterById.get(f.sourceId).tags}:f);
const figures=storedFigures.filter(f=>!isStoryOnlyId(f.sourceId)&&!oct06RetiredIds.has(f.sourceId));
export { figures, tags };
export const byId = new Map(storedFigures.map(f => [f.sourceId, (isStoryOnlyId(f.sourceId)||oct06RetiredIds.has(f.sourceId))?{...f,retired:true}:f]));
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

