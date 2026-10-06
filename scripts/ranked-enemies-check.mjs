import assert from 'node:assert/strict';
import {freeEnemies,freeEnemy} from '../src/game/free-enemies.js';
import {soulById,validateSoulDeck,createSoulBattle} from '../src/game/soul-battle.js';
import {enemyFigureAllowed} from '../src/game/free-enemy-policy.js';
import {cpuActionAllowed,recordCpuAction} from '../src/game/free-enemy-ai.js';
const ranked=freeEnemies.filter(e=>e.rank),base=freeEnemies.filter(e=>!e.rank);
assert.equal(base.length,10);assert.equal(ranked.length,12);
assert.equal(new Set(freeEnemies.map(e=>e.id)).size,22);
for(const band of [['F','E'],['D','C'],['B','A'],['S','SS']])assert.equal(ranked.filter(e=>band.includes(e.rank)).length,3);
for(const e of ranked){
 assert.ok(validateSoulDeck(e.deck).valid,e.id);
 assert.ok(e.deck.every(id=>enemyFigureAllowed(e,soulById.get(id))),e.id+' theme');
 assert.deepEqual(freeEnemy(e.id).deck,e.deck);
 assert.ok(!e.deck.includes('MB045')&&!e.deck.includes('MB049'));
 assert.ok(e.name.includes(e.rank)&&e.description.includes(e.themeName));
 if(['F','E'].includes(e.rank)){assert.ok(e.deck.filter(id=>soulById.get(id).soulClass==='seed').length>=42);assert.ok(!e.deck.some(id=>soulById.get(id).soulClass==='mob'));}
 if(['S','SS'].includes(e.rank)){assert.equal(e.aces.length,5);assert.ok(e.aces.every(id=>['SSR','UR','MOB'].includes(soulById.get(id).rarity)));}
 const s=createSoulBattle([e.deck,e.deck]);s.cpuStrategy=e.strategy;s.turn=2;
 assert.equal(cpuActionAllowed(s,'fusion'),!['F','E'].includes(e.rank));
 s.turn=e.strategy.fusionEvery*2;
 for(let i=0;i<e.strategy.fusionLimit;i++){assert.equal(cpuActionAllowed(s,'fusion'),true);recordCpuAction(s,'fusion');}
 assert.equal(cpuActionAllowed(s,'fusion'),false);
 s.turn+=2;assert.equal(cpuActionAllowed(s,'fusion'),Math.ceil(s.turn/2)%e.strategy.fusionEvery===0);
 s.turn=e.strategy.skillEvery*2;
 for(let i=0;i<e.strategy.skillLimit;i++){assert.equal(cpuActionAllowed(s,'skill'),true);recordCpuAction(s,'skill');}
 assert.equal(cpuActionAllowed(s,'reaction'),false,'reactions share skill action pacing');
}
console.log('PASS 12 ranked opponents + 10 themes; 4 bands; legal seed-heavy / high-rarity decks; rank pacing and per-turn limits');
