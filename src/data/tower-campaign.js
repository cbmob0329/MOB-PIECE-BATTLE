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
].map(([id,label,rank,bossRank,masterId,portraits,dialogue,greeting,color,art])=>({id,name:label+'タワー',rank,bossRank,masterId,portraits,dialogue,greeting,color,art,background:'assets/towers/'+id+'.png',title:'モブタワーマスターへの道'}));
export const campaignAllowed=f=>!!f&&!f.retired&&!f.tags.some(t=>['24','52'].includes(t))&&!/魔王|ミラモブファラオ|モブギドラ|モブネプチューン/.test(f.name);
export function campaignOpponent(tower,floor,slot=0){if(floor===5)return tower.masterId;const ids=tower.portraits.filter(id=>campaignAllowed(soulById.get(id))).sort((a,b)=>{const x=soulById.get(a),y=soulById.get(b);return x.atk+x.def-y.atk-y.def;});return ids[(Math.floor((floor-1)*(Math.max(0,ids.length-3))/3)+slot)%ids.length];}
const enemyCache=new Map();
export function campaignEnemy(tower,floor,slot=0){const key=tower.id+':'+floor+':'+slot;if(enemyCache.has(key))return structuredClone(enemyCache.get(key));const id=campaignOpponent(tower,floor,slot),leader=soulById.get(id),rank=floor===5?tower.bossRank:tower.rank;
 const allowed=f=>campaignAllowed(f,tower,floor),pool=soulFigures.filter(allowed),owned=Object.fromEntries(pool.map(f=>[f.id,f.soulClass==='seed'?3:1]));if(!owned[id])throw Error('対戦相手の所属を確認してください: '+id);
 const thematic=f=>tower.themeTags?.some(t=>f.tags.includes(t))||tower.portraits.includes(f.id),preferred=pool.filter(f=>f.soulClass==='seed').sort((a,b)=>Number(thematic(b))-Number(thematic(a))||Math.abs(a.atk+a.def-(160+['F','E','D','C','B','A','S','SS'].indexOf(rank)*35))-Math.abs(b.atk+b.def-(160+['F','E','D','C','B','A','S','SS'].indexOf(rank)*35))||a.id.localeCompare(b.id));
 let counts={};const merge=needs=>{const next={...counts};for(const [id,n]of Object.entries(needs))next[id]=Math.max(next[id]||0,n);if(Object.values(next).reduce((a,b)=>a+b,0)>45)return false;counts=next;return true;};
 const preferredIds=preferred.slice(0,18).flatMap(f=>[f.id,f.id,f.id]);const addRoute=target=>{const route=fusionRecommendations(target,owned,preferredIds)[0];return route&&merge(route.needs);};
 if(leader.soulClass==='seed')counts[id]=3;else if(!addRoute(id))throw Error('マスターの融合経路がありません: '+id);
 const reserveLimit=({F:0,E:1,D:3,C:5,B:7,A:9,S:12,SS:15})[rank],extras=pool.filter(f=>f.soulClass!=='seed'&&f.id!==id&&(rank!=='F')).sort((a,b)=>Number(thematic(b))-Number(thematic(a))||(rank==='S'||rank==='SS'?Number(b.soulClass==='mob')-Number(a.soulClass==='mob'):Number(a.soulClass==='mob')-Number(b.soulClass==='mob'))||b.atk+b.def-a.atk-a.def);
 for(const f of extras){if(Object.keys(counts).filter(id=>soulById.get(id).soulClass!=='seed').length>=reserveLimit)break;const previous=counts;const route=fusionRecommendations(f.id,owned,preferredIds)[0];if(route){merge(route.needs);if(Object.keys(counts).filter(id=>soulById.get(id).soulClass!=='seed').length>reserveLimit)counts=previous;}}
 let total=Object.values(counts).reduce((a,b)=>a+b,0);for(let round=0;round<3&&total<45;round++)for(const f of preferred){if(total>=45)break;if((counts[f.id]||0)>=3)continue;counts[f.id]=(counts[f.id]||0)+1;total++;}
 const deck=Object.entries(counts).flatMap(([id,n])=>Array(n).fill(id));if(!validateSoulDeck(deck).valid)throw Error('タワー編成を確認してください: '+key);
 const result={id:'campaign-'+tower.id+'-'+floor+'-'+slot,name:leader.name,rank,deck,strategy:{atk:1,def:1,skill:'support',focusIds:[id,...(tower.focusIds||[])],...rankSettings[rank],...(rank==='F'?{skillLimit:0,fusionLimit:0}:{})},themeTagIds:tower.themeTags||[]};enemyCache.set(key,result);return structuredClone(result);
}
