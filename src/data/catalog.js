import figures from './figures_master_v170.json' with { type: 'json' };
import tags from './tags_master_v170.json' with { type: 'json' };
export { figures, tags };
export const byId = new Map(figures.map(f => [f.sourceId, f]));
export const imagePath = f => `${import.meta.env?.BASE_URL ?? './'}${f.image}`;
export const modes = [
 {id:'free',name:'FREE BATTLE',label:'フリーバトル',description:'気軽に挑戦。自分のチームを試そう。',icon:'battle',status:'戦闘移植準備中'},
 {id:'rank',name:'RANK MATCH',label:'ランクマッチ',description:'FからSSへ。コレクションの力を証明。',icon:'rank',status:'戦闘移植準備中'},
 {id:'tournament',name:'TOURNAMENT',label:'トーナメント',icon:'tournament',status:'今後追加予定'},
 {id:'special',name:'SPECIAL BATTLE',label:'スペシャルバトル',icon:'special',status:'今後追加予定'},
 {id:'boss',name:'BOSS RAID',label:'ボスレイド',icon:'boss',status:'今後追加予定'}
];

