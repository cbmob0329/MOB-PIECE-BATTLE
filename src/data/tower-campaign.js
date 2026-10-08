import {publicAsset} from './public-assets.js';
import {fusionRecommendations} from '../game/soul-deck-assist.js';
import {soulFigures,soulById,validateSoulDeck} from '../game/soul-battle.js';
import {rankSettings} from '../game/ranked-free-enemies.js';
const series=(start,end)=>Array.from({length:end-start+1},(_,i)=>String(start+i).padStart(2,'0'));
export const campaignTowers=[
 ['grass','草原','F','E','45',series(1,15),'やってるべ～！','よろしくお願いしまーす！','#80b26b','草原タワーへの道'],
 ['desert','砂漠','E','D','97',series(1,15),'やってやるぞー！','よろしくお願いしまーす！','#c99a57','砂漠タワー'],
 ['town','田舎町','D','C','107',series(17,21),'さあ、始めましょう。','やるぞ！やるぞ！','#91ad70','田舎町タワー'],
 ['neon','ネオン街','D','C','117',series(17,21),'よろしくね～！','やるぞ！やるぞ！','#706bb8','ネオン街タワー'],
 ['magma','マグマ','C','B','138',["33","37","38","piece:024"],'レッツゴー！','レッツゴー！','#ba6647','マグマタワー'],
 ['sweets','スイーツ','C','B','mq:eventfig/51',series(22,25),'やってやるぜ！','いらっしゃ～い♪','#c7909a','スイーツタワー'],
 ['retro','レトロゲーム','C','B','RETRO09',Array.from({length:8},(_,i)=>'RETRO'+String(i+1).padStart(2,'0')),'バトル、カイシ。チカラ、ミセテ。','いっくよー！','#729dd0','レトロゲームタワー']
].map(([id,label,rank,bossRank,masterId,portraits,dialogue,greeting,color,art])=>({id,name:label+'タワー',rank,bossRank,masterId,portraits,dialogue,greeting,color,art,background:publicAsset('assets/towers/'+id+'.png'),title:'モブタワーマスターへの道'}));

const tagged=(tags,seed=false)=>soulFigures.filter(f=>tags.some(t=>f.tags.includes(t))&&(!seed||f.soulClass==='seed')).map(f=>f.id);
const additions=[
 ['music','ミュージック','C','B','mq:eventfig/58',Array.from({length:8},(_,i)=>'BFX'+String(i+1).padStart(3,'0')),'さあやろうか！最高のロックを！','いっくよー！','#bd82b5','ミュージックタワー',[]],
 ['cartoon','カートゥーン','C','B','M4F_MIM_V02',tagged(['mat-mouth'],true),'やりましょう！','レッツゴーだ！','#dbad61','カートゥーンタワー',[]],
 ['grass2','草原Ⅱ','B','A','159',tagged(['41']),'さあ、勝負だ！','よろしくお願いしまーす！','#78b169','草原Ⅱタワー',['41']],
 ['town2','田舎町Ⅱ','B','A','163',tagged(['43']),'ガオオ！！','バトルだ！','#b49162','田舎町Ⅱタワー',['43']],
 ['tribe','部族村','B','A','173',tagged(['46']),'・・・','・・・','#8a8350','田舎町Ⅱタワー',['46']],
 ['sea','海底','B','A','129',tagged(['45']),'勝負だ！！','力を示せ！','#489bb0','ネオン街タワー',['45']],
 ['neon2','ネオン街Ⅱ','A','S','176',tagged(['44']),'さあ始めましょう','バトルだー！！','#9c6bbb','ネオン街Ⅱタワー',['44']],
 ['desert2','砂漠Ⅱ','A','S','162',tagged(['42']),'ククッ・・始めるぞ！','バトル開始！！','#d2a05e','砂漠Ⅱタワー',['42']],
 ['magma2','マグマⅡ','A','S','168',tagged(['47']),'力を見せて見ろ！','バトル！！','#c75949','マグマタワーⅡ',['47']],
 ['shadow','シャドー','S','SS','NS2_052',tagged(['ns2-susu','ns2-keke']),'スケケ・・バトルだ！','スケケ・・','#735978','シャドータワー',['ns2-susu','ns2-keke']],
 ['castle','魔王城','S','SS','207',tagged(['48']),'来たね？やろうか','バトル！！！','#7d4f85','魔王城タワー',['48']],
 ['mob','MOB','SS','SS','NS2_055',['mq:eventfig/61','mq:eventfig/24','mq:eventfig/63','185'],'全力で、いこう！','さあ、勝負！','#c9a758','MOBタワー',[]]
];
for(const [id,label,rank,bossRank,masterId,portraits,dialogue,greeting,color,art,themeTags]of additions)campaignTowers.push({id,name:label+'タワー',rank,bossRank,masterId,portraits,dialogue,greeting,color,art,themeTags,background:publicAsset('assets/towers/'+id+'.png'),title:'モブタワーマスターへの道',...(id==='tribe'?{focusIds:['173','171']}:{})});
export const campaignOpponentCount=(tower,floor)=>floor===5||tower.id==='mob'?1:3;
const floorTags=(tower,floor)=>tower.id==='mob'?[['46'],['44'],['47'],['24'],['specified-sweets']][floor-1]:tower.themeTags||[];
export const campaignAllowed=(f,tower,floor)=>!!f&&!f.retired&&((tower?.id==='mob'&&floor===4&&f.tags.includes('24'))||(floor===5&&f.id===tower?.masterId&&['M4F_MIM_V02','NS2_052','NS2_055'].includes(f.id))||(!f.tags.some(t=>['24','52'].includes(t))&&!/魔王|ミラモブファラオ|モブギドラ|モブネプチューン/.test(f.name)));
const portraitCache=new Map();
export function campaignOpponent(tower,floor,slot=0){if(floor===5)return tower.masterId;if(tower.id==='mob')return tower.portraits[floor-1];let portraits=portraitCache.get(tower.id);if(!portraits){const owned=Object.fromEntries(soulFigures.filter(f=>campaignAllowed(f,tower,floor)).map(f=>[f.id,f.soulClass==='seed'?3:1]));portraits=tower.portraits.filter(id=>owned[id]&&(soulById.get(id).soulClass==='seed'||fusionRecommendations(id,owned,[]).length));portraitCache.set(tower.id,portraits);}const ids=[...portraits].sort((a,b)=>{const x=soulById.get(a),y=soulById.get(b);return x.atk+x.def-y.atk-y.def;});if(!ids.length)throw Error('対戦相手が未定義です: '+tower.id);return ids[(Math.floor((floor-1)*(Math.max(0,ids.length-3))/3)+slot)%ids.length];}
const enemyCache=new Map(),routeCache=new Map();
export function campaignEnemy(tower,floor,slot=0){const key=tower.id+':'+floor+':'+slot;if(enemyCache.has(key))return structuredClone(enemyCache.get(key));const id=campaignOpponent(tower,floor,slot),leader=soulById.get(id),rank=floor===5?tower.bossRank:tower.rank;
 const allowed=f=>campaignAllowed(f,tower,floor),pool=soulFigures.filter(allowed),owned=Object.fromEntries(pool.map(f=>[f.id,f.soulClass==='seed'?3:1]));if(!owned[id])throw Error('対戦相手の所属を確認してください: '+id);
 const themeTags=floorTags(tower,floor),thematic=f=>themeTags.some(t=>f.tags.includes(t))||(!themeTags.length&&tower.portraits.includes(f.id)),preferred=pool.filter(f=>f.soulClass==='seed').sort((a,b)=>Number(thematic(b))-Number(thematic(a))||Math.abs(a.atk+a.def-(160+['F','E','D','C','B','A','S','SS'].indexOf(rank)*35))-Math.abs(b.atk+b.def-(160+['F','E','D','C','B','A','S','SS'].indexOf(rank)*35))||a.id.localeCompare(b.id));
 let counts={};const merge=needs=>{const next={...counts};for(const [id,n]of Object.entries(needs))next[id]=Math.max(next[id]||0,n);if(Object.values(next).reduce((a,b)=>a+b,0)>45)return false;counts=next;return true;};
 const preferredIds=preferred.slice(0,18).flatMap(f=>[f.id,f.id,f.id]);const routeFor=target=>{const key=tower.id+':'+(tower.id==='mob'?floor:rank)+':'+target;if(!routeCache.has(key))routeCache.set(key,fusionRecommendations(target,owned,preferredIds)[0]||null);return routeCache.get(key);};const addRoute=target=>{const route=routeFor(target);return route&&merge(route.needs);};
 if(leader.soulClass==='seed')counts[id]=3;else if(!addRoute(id))throw Error('マスターの融合経路がありません: '+id);
 if(['E','D'].includes(rank)&&['grass','desert','town','neon'].includes(tower.id))addRoute(({grass:'piece:002',desert:'piece:003',town:'piece:005',neon:'piece:006'})[tower.id]);
 for(const focus of tower.focusIds||[])if(owned[focus])addRoute(focus);
 const reserveLimit=({F:0,E:1,D:3,C:5,B:7,A:9,S:12,SS:15})[rank],extras=pool.filter(f=>f.soulClass!=='seed'&&f.id!==id&&(rank!=='F')).sort((a,b)=>Number(thematic(b))-Number(thematic(a))||(rank==='S'||rank==='SS'?Number(b.soulClass==='mob')-Number(a.soulClass==='mob'):Number(a.soulClass==='mob')-Number(b.soulClass==='mob'))||b.atk+b.def-a.atk-a.def);
 for(const f of extras){if(Object.keys(counts).filter(id=>soulById.get(id).soulClass!=='seed').length>=reserveLimit)break;const previous=counts;const route=routeFor(f.id);if(route){merge(route.needs);if(Object.keys(counts).filter(id=>soulById.get(id).soulClass!=='seed').length>reserveLimit)counts=previous;}}
 let total=Object.values(counts).reduce((a,b)=>a+b,0);for(let round=0;round<3&&total<45;round++)for(const f of preferred){if(total>=45)break;if((counts[f.id]||0)>=3)continue;counts[f.id]=(counts[f.id]||0)+1;total++;}
 const deck=Object.entries(counts).flatMap(([id,n])=>Array(n).fill(id));if(!validateSoulDeck(deck).valid)throw Error('タワー編成を確認してください: '+key);
 const result={id:'campaign-'+tower.id+'-'+floor+'-'+slot,name:leader.name,rank,deck,strategy:{campaign:true,atk:1,def:1,skill:'support',focusIds:[id,...(tower.focusIds||[])],...rankSettings[rank],...(rank==='F'?{skillLimit:0}:{})},themeTagIds:themeTags};enemyCache.set(key,result);return structuredClone(result);
}
