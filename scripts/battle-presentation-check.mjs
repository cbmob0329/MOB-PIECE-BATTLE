import assert from 'node:assert/strict';
import * as g from '../src/game/soul-battle.js';
import {observePresentation} from '../src/game/battle-presentation.js';
import {pieceStarterDeck} from '../src/game/piece-starters.js';
const deck=pieceStarterDeck('materials-balloon');
const fresh=()=>{const s=g.createSoulBattle([deck,deck]);for(const p of s.players){p.hand=[];p.handBonuses=[];p.field=[null,null,null];p.reserve=[];}return s;};
const put=(s,side,id,slot=0)=>s.players[side].field[slot]={id,uid:++s.serial,summonTurn:0,attacks:0,skillTurn:-1,effects:[],attackedTargets:[],extra:0,permanentAtk:0,permanentDef:0};
{
 const s=fresh();s.active=1;const p=s.players[1];p.hand=['ECL_S01','ECL_S02','ECL_S02','ECL_S03'];p.reserve=['ECL_M01','ECL_M02','ECL_B01'];const t=observePresentation(s),cursor=s.eventSerial;g.cpuMain(s);
 const frames=t.take(s.events.filter(e=>e.seq>cursor)),summons=frames.filter(e=>e.type==='summon'),fusions=frames.filter(e=>e.type==='fusion');assert(summons.length>=3);assert(fusions.length>=3);assert.equal(summons[0].presentationState.players[1].field.filter(Boolean).length,1);assert(summons[0].presentationState.players[1].field.filter(Boolean).every(f=>g.soulById.get(f.id).soulClass==='seed'));assert(fusions.some(e=>e.id==='ECL_B01'));assert(!summons[0].presentationState.players[1].field.some(f=>f?.id==='ECL_B01'));
 const target=put(s,0,'01');while(s.pending)g.passReaction(s,1-s.pending.side);g.beginBattle(s,1);g.cpuAttack(s);const attack=t.take(s.events.filter(e=>e.seq>frames.at(-1).seq)).find(e=>e.type==='attack');assert(attack);assert(attack.presentationState.players[0].field.some(f=>f?.uid===target.uid));t.destroy();
}
for(const side of [0,1])for(const decline of [false,true]){
 const s=fresh();s.active=side;s.phase='battle';const victim=1-side,a=put(s,side,'02'),d=put(s,victim,'208');a.permanentAtk=1000;s.players[victim].life=1;s.players[victim].hand=['01'];s.players[victim].reserve=['209'];const t=observePresentation(s),cursor=s.eventSerial;g.attack(s,side,a.uid,d.uid);assert.equal(s.winner,null);assert.equal(g.evolutionOptions(s).event.target,'209');assert(!s.events.some(e=>e.type==='result'));g.resolveEvolution(s,victim,decline?null:['hand:0']);assert.equal(s.winner,side);const frames=t.take(s.events.filter(e=>e.seq>cursor));assert.equal(frames.filter(e=>e.type==='result').length,1);assert.equal(frames.at(-1).type,'result');assert(frames.find(e=>e.type==='defeat').presentationState.winner===null);if(!decline)assert.equal(frames.at(-2).type,'summon');t.destroy();
}
{
 const s=fresh(),p=s.players[0],f=put(s,0,'ECL_S01');p.hand=['ECL_S02','ECL_S03','ECL_M01'];p.reserve=['ECL_M02'];assert.deepEqual([...g.fusionReadyMaterials(s,0).hand],[0]);assert(g.fusionReadyMaterials(s,0).field.has(f.uid));p.hand.shift();assert.equal(g.fusionReadyMaterials(s,0).hand.size,0);p.hand.unshift('ECL_S02');f.skillTurn=s.turn;assert.equal(g.fusionReadyMaterials(s,0).hand.size,0);f.skillTurn=-1;f.effects.push({key:'fusionLock',value:true,until:s.turn});assert.equal(g.fusionReadyMaterials(s,0).hand.size,0);f.effects=[];p.reserve=[];assert.equal(g.fusionReadyMaterials(s,0).hand.size,0);p.hand=['ECL_S01'];assert.deepEqual([...g.fusionReadyMaterials(s,0).hand],[0]);f.resonanceAtk=10;assert.equal(g.fusionReadyMaterials(s,0).hand.size,0);p.field=[null,null,null];p.hand=['ECL_S01','ECL_S02'];p.reserve=['ECL_M02'];assert.equal(g.fusionReadyMaterials(s,0).hand.size,0);
}
console.log('PASS: immutable CPU seed/middle/MOB frames and attack; lethal defeat → evolution/decline → one result on either side; legal hand+field highlights update with hand/field/reserve/stage/skill-lock/resonance changes; hand-only pairs remain illegal.');
