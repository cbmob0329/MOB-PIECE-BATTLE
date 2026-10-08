import assert from 'node:assert/strict';
import {soulFigures,soulById,validateSoulDeck} from '../src/game/soul-battle.js';
import {enemyFigureAllowed} from '../src/game/free-enemy-policy.js';
import {rankedEnemySpecs,rankSettings} from '../src/game/ranked-free-enemies.js';
import {fusionRecommendations} from '../src/game/soul-deck-assist.js';
export function buildRankedEnemies(baseEnemies){
 return rankedEnemySpecs.map(spec=>{
  const base=baseEnemies.find(e=>e.id===spec.baseThemeId);
  assert.ok(base,'missing base theme '+spec.baseThemeId);
  const enemy={...base,...spec,name:`${spec.rank}｜${spec.name}`,themeName:base.name,description:`ランク${spec.rank}・${base.name}。${spec.rank==='F'?'シードのみ。稀に属性・タグの強化融合を使う。':spec.rank==='E'?'シード中心、融合の練習中。':['S','SS'].includes(spec.rank)?'希少な切り札と連続融合を使う上級者。':'テーマの融合とスキルを使い分ける。'}`,strategy:{...base.strategy,...rankSettings[spec.rank]}};
  let deck=[...base.deck],routes=[...base.routes];
  if(spec.middleCount!==null){
   const owned=Object.fromEntries(soulFigures.filter(f=>enemyFigureAllowed(enemy,f)).map(f=>[f.id,f.soulClass==='seed'?3:1]));
   const choices=new Map([...new Set([...(spec.preferredMiddleId?[spec.preferredMiddleId]:[]),...base.deck.filter(id=>soulById.get(id).soulClass==='middle')])].map(id=>[id,fusionRecommendations(id,owned,base.deck).find(r=>Object.keys(r.needs).every(k=>k===id||soulById.get(k).soulClass==='seed'))]));
   const middle=[...choices.keys()].filter(id=>choices.get(id)).slice(0,spec.middleCount);
   assert.equal(middle.length,spec.middleCount,enemy.id+' needs seed-to-middle routes');
   routes=middle.map(id=>choices.get(id));
   const needs={};for(const r of routes)for(const[id,n]of Object.entries(r.needs))needs[id]=Math.max(needs[id]||0,n);
   deck=Object.entries(needs).flatMap(([id,n])=>Array(n).fill(id));
   const seeds=soulFigures.filter(f=>f.soulClass==='seed'&&enemyFigureAllowed(enemy,f)).sort((a,b)=>Number(b.tags.some(t=>enemy.themeTagIds.includes(t)))-Number(a.tags.some(t=>enemy.themeTagIds.includes(t)))||(a.atk+a.def)-(b.atk+b.def)||a.id.localeCompare(b.id));
   for(const f of seeds)while(deck.length<45&&deck.filter(id=>id===f.id).length<3)deck.push(f.id);
   deck.sort((a,b)=>Number(soulById.get(a).soulClass!=='seed')-Number(soulById.get(b).soulClass!=='seed'));
  }
  assert.ok(validateSoulDeck(deck).valid,enemy.id+' invalid deck');
  assert.ok(deck.every(id=>enemyFigureAllowed(enemy,soulById.get(id))),enemy.id+' off-theme');
  return {...enemy,deck,routes,aces:base.aces.filter(id=>deck.includes(id)),supportIds:[...new Set(deck)].filter(id=>!soulById.get(id).tags.some(t=>enemy.themeTagIds.includes(t)))};
 });
}
