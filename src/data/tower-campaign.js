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
export function campaignEnemy(tower,floor,slot=0){const id=campaignOpponent(tower,floor,slot),leader=soulById.get(id),rank=floor===5?tower.bossRank:tower.rank;if(!campaignAllowed(leader)||leader.soulClass!=='seed')throw Error('この対戦相手の編成は確認待ちです');
 const rankIndex=['F','E','D','C','B'].indexOf(rank),ceiling=[180,220,260,300,340][rankIndex];
 const safe=soulFigures.filter(f=>campaignAllowed(f)&&f.soulClass==='seed'&&!f.passive&&(f.atk+f.def<=ceiling)&&(Number(f.id)<=31||f.id.startsWith('MB')));
 const themed=tower.portraits.map(id=>soulById.get(id)).filter(f=>safe.includes(f));
 const chosen=[leader,...themed,...safe.sort((a,b)=>Math.abs(a.atk+a.def-(120+rankIndex*40+floor*7))-Math.abs(b.atk+b.def-(120+rankIndex*40+floor*7)))];const ids=[...new Set(chosen.map(f=>f.id))].slice(0,15),deck=ids.flatMap(id=>[id,id,id]);if(!validateSoulDeck(deck).valid)throw Error('タワー編成を確認してください');
 return {id:'campaign-'+tower.id+'-'+floor+'-'+slot,name:leader.name,rank,deck,strategy:{atk:1,def:1,skill:'support',...rankSettings[rank],...(rank==='F'?{skillLimit:0,fusionLimit:0}:{})},themeTagIds:[]};
}
