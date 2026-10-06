import assert from 'node:assert/strict';
import * as g from '../src/game/soul-battle.js';
const owned=Object.fromEntries(g.soulFigures.map(f=>[f.id,25]));
const deck=g.autoSoulDeck(owned),before=[...deck];
const seeds=deck.filter(id=>g.soulById.get(id).soulClass==='seed');
const reserve=deck.filter(id=>g.soulById.get(id).soulClass!=='seed');
const random=seed=>()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
const first=g.createSoulBattle([deck,deck],undefined,{random:random(1)});
const second=g.createSoulBattle([deck,deck],undefined,{random:random(2)});
assert.notDeepEqual(first.players[0].hand,second.players[0].hand);
assert.deepEqual(first,g.createSoulBattle([deck,deck],undefined,{random:random(1)}));
assert.notDeepEqual([...first.players[0].hand,...first.players[0].deck],first.players[1].deck);
for(const p of first.players){
 assert.deepEqual([...p.hand,...p.deck].sort(),[...seeds].sort());
 assert.deepEqual(p.reserve,reserve);assert.deepEqual(p.original,before);
}
assert.deepEqual(deck,before);
assert.equal(first.players[0].hand.length,5);assert.equal(first.players[0].deck.length,25);
const next=first.players[0].deck[0];g.summon(first,0,0,0);
assert.equal(g.canBeginBattle(first,0),false);assert.throws(()=>g.beginBattle(first,0));g.endTurn(first,0);g.beginBattle(first,1);g.endTurn(first,1);
assert.equal(first.players[0].hand.at(-1),next);
// The normal gameplay call must also shuffle, not only the injected test path.
const originalRandom=Math.random;let calls=0;
try{const rng=random(3);Math.random=()=>{calls++;return rng();};g.createSoulBattle([deck,deck]);assert.equal(calls,58);}finally{Math.random=originalRandom;}
console.log('PASS: randomized opening hands, independent decks, exact copy counts, saved order, reserve and subsequent draws');
