import assert from 'node:assert/strict';
import * as g from '../src/game/soul-battle.js';
import {starterDeck,applyStarter,soulStarters} from '../src/game/soul-starters.js';
import {OWN_CAP} from '../src/data/gacha.js';
for(const theme of soulStarters){
 const deck=starterDeck(theme.id),profile={owned:{'01':10},soulDecks:[[],['01'],[],[],[]],soulDeckSlot:0};
 applyStarter(profile,theme.id);assert.ok(g.validateSoulDeck(deck,profile.owned).valid);assert.equal(profile.owned['01'],10);assert.deepEqual(profile.soulDecks[1],['01']);
 const saved=structuredClone(profile);applyStarter(profile,theme.id);assert.deepEqual(profile,saved);
 for(const id of new Set(deck))assert.ok(deck.filter(x=>x===id).length<=OWN_CAP[g.soulById.get(id).rarity]);
 assert.ok(deck.filter(id=>g.soulById.get(id).tags.includes(theme.tag)).length>=40);
 const s=g.createSoulBattle([deck,deck]);assert.ok(g.canEndTurn(s,0));g.summon(s,0,0,0);g.summon(s,0,0,1);
 assert.equal(g.fusionReadyUids(s,0).size,2);const a=s.players[0].field[0];a.skillTurn=s.turn;assert.equal(g.fusionReadyUids(s,0).size,0);a.skillTurn=-1;
 g.endTurn(s,0);assert.equal(s.turn,2);assert.equal(s.active,1);assert.ok(!g.canEndTurn(s,1));assert.throws(()=>g.endTurn(s,1));assert.equal(g.fusionReadyUids(s,0).size,0);
}
const deck=starterDeck('grassland');
function fight(delta){const s=g.createSoulBattle([deck,deck]);const a=g.summon(s,0,0,0);g.endTurn(s,0);const d=g.summon(s,1,0,0);g.beginBattle(s,1);g.endTurn(s,1);a.permanentAtk=g.stats(d).def+delta-g.stats(a).atk;g.beginBattle(s,0);const before=g.stats(d).def;g.attack(s,0,a.uid,d.uid);while(s.pending)g.passReaction(s,1-s.pending.side);return {s,a,d,before};}
const guarded=fight(-1);assert.equal(guarded.s.players[1].field[0],guarded.d);assert.equal(guarded.s.players[1].life,400);assert.equal(g.stats(guarded.d).def,guarded.before-10);g.endTurn(guarded.s,0);assert.equal(g.stats(guarded.d).def,guarded.before-10);
const equal=fight(0);assert.equal(g.stats(equal.d).def,equal.before);assert.equal(equal.s.players[1].field[0],equal.d);
const hit=fight(1);assert.equal(hit.s.players[1].field[0],null);assert.equal(hit.s.players[1].life,399);
console.log('PASS: themed 45-piece starters/caps/idempotence, valid fusion aura states, first-turn end, guarded DEF loss/persistence and equality');
