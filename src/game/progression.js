import {towerVictoryKeys} from './tower-rewards.js';
import {soulById} from './soul-battle.js';
import {campaignTowers} from '../data/tower-campaign.js';
import {applyBattleFigureRecords,enrichedHistoryRow} from './records.js';
export const PROGRESS_RANKS=['F','E','D','C','B','A','S','SS'];
export function normalizeProgression(p){
 p.progression??={};if(p.progression.version===2)return p;const history=Array.isArray(p.battleHistory)?p.battleHistory:[],stats=p.battleStats??={};
 for(const [key,rows] of [['battles',history],['wins',history.filter(r=>r.won)],['freeBattles',history.filter(r=>String(r.mode).startsWith('free'))],['freeWins',history.filter(r=>String(r.mode).startsWith('free')&&r.won)]])stats[key]=Math.max(Number(stats[key])||0,rows.length);
 p.progression.tagWins??={};p.progression.attributeWins??={};for(const row of history.filter(r=>r.won)){const deck=(row.playerDeck||[]).map(id=>soulById.get(id)).filter(Boolean);for(const tag of new Set(deck.flatMap(f=>f.tags)))p.progression.tagWins[tag]=(p.progression.tagWins[tag]||0)+1;for(const attr of new Set(deck.flatMap(f=>f.attribute.split('/'))))p.progression.attributeWins[attr]=(p.progression.attributeWins[attr]||0)+1;}
 let highest=Math.max(0,PROGRESS_RANKS.indexOf(p.highestRank),PROGRESS_RANKS.indexOf(p.rank));for(const key of towerVictoryKeys(p).keys){const [id,floor]=key.split(':'),tower=campaignTowers.find(t=>t.id===id);highest=Math.max(highest,PROGRESS_RANKS.indexOf(floor==='5'?tower.bossRank:tower.rank));}p.highestRank=PROGRESS_RANKS[highest];p.rank=p.highestRank;p.progression.version=2;return p;
}
export function recordProgressBattle(p,result,request){
 if(result?.cancelled||!result?.match)return {recorded:false,reward:null};
 normalizeProgression(p);const progress=p.progression;progress.results??=[];
 const token=request.towerToken||request.resultToken;if(!token)throw Error('対戦結果の識別情報がありません');if(progress.results.includes(token))return {recorded:false,reward:null};
 const stats=p.battleStats??={};for(const k of ['battles','wins','freeBattles','freeWins'])stats[k]=Math.max(0,Number(stats[k])||0);stats.battles++;if(result.won)stats.wins++;
 const free=request.mode==='free';let reward=null;
 if(free){stats.freeBattles++;if(result.won)stats.freeWins++;progress.firstFreeBattles??=[];if(request.rematchKey&&!progress.firstFreeBattles.includes(request.rematchKey)){progress.firstFreeBattles.push(request.rematchKey);reward={diamonds:5,coins:1000};p.diamonds=(p.diamonds||0)+5;p.coins=(p.coins||0)+1000;}}
 if(result.won){progress.tagWins??={};progress.attributeWins??={};const deck=(result.match.playerDeckOriginal||request.playerDeck||[]).map(id=>soulById.get(id)).filter(Boolean);for(const tag of new Set(deck.flatMap(f=>f.tags)))progress.tagWins[tag]=(progress.tagWins[tag]||0)+1;for(const a of new Set(deck.flatMap(f=>f.attribute.split('/'))))progress.attributeWins[a]=(progress.attributeWins[a]||0)+1;
 if(request.mode==='tower'){const tower=campaignTowers.find(t=>t.id===request.towerId),rank=request.floor===5?tower?.bossRank:tower?.rank;const index=Math.max(PROGRESS_RANKS.indexOf(p.highestRank),PROGRESS_RANKS.indexOf(rank),0);p.highestRank=PROGRESS_RANKS[index];p.rank=p.highestRank;}}
 applyBattleFigureRecords(p,result);p.battleHistory??=[];p.battleHistory.push(enrichedHistoryRow(result,request,{mode:free?'free-rematch':'tower',rank:p.rank,at:Date.now()}));p.battleHistory=p.battleHistory.slice(-200);progress.results.push(token);return {recorded:true,reward};
}
