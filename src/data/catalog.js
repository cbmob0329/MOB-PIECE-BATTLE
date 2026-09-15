import figures from './figures_master_v170.js?v=7.3.0';
import tags from './tags_master_v170.js?v=7.3.0';
export { figures, tags };
export const byId = new Map(figures.map(f => [f.sourceId, f]));
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

