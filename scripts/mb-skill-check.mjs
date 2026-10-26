import assert from 'node:assert/strict';
import * as g from '../src/game/soul-battle.js';
import data from '../src/data/mb-adventure.json' with {type:'json'};
import {mbTestDecks} from '../src/data/mb-test-decks.js';
import {fusionRecommendations} from '../src/game/soul-deck-assist.js';
const put=(s,side,id,slot=0)=>s.players[side].field[slot]={id,uid:++s.serial,summonTurn:1,attacks:0,skillTurn:-1,skillUsesUsed:0,effects:[],attackedTargets:[],lastTarget:null,extra:0,permanentAtk:0,permanentDef:0};
let checked=0;
for(const deck of mbTestDecks){assert(g.validateSoulDeck(deck.deck).valid);const owned=Object.fromEntries(deck.deck.map(id=>[id,deck.deck.filter(x=>x===id).length]));for(const id of new Set(deck.deck))if(g.soulById.get(id).soulClass!=='seed')assert(fusionRecommendations(id,owned,deck.deck).length,id+' route');}
for(const f of data.figures)for(const side of [0,1])for(const fromHand of [false,true]){
 const s=g.createSoulBattle(mbTestDecks.slice(0,2).map(d=>d.deck));s.turn=5;s.active=side;s.phase='main';s.pending=null;
 for(const p of s.players){p.field=[null,null,null];p.hand=[];p.handBonuses=[];p.life=200;p.deck=Array(30).fill('01');p.grave=['03','04'];p.skillUsage={};}
 const caster=put(s,side,f.id),ally=put(s,side,'01',1);put(s,1-side,'02');let ref=caster.uid;
 if(fromHand){s.players[side].field[0]=null;s.players[side].hand=[f.id];ref={handIndex:0};}
 assert(g.canSkill(s,side,ref),f.id+': '+g.skillUnavailableReason(s,side,ref));g.useSkill(s,side,ref,g.cpuOptions(s,side,ref));let n=0;while(s.pending){assert(n++<20);g.passReaction(s,1-s.pending.side);}
 const restored=JSON.parse(JSON.stringify(s));restored.active=side;g.startTurn(restored);assert(restored.players.every(p=>p.field.filter(Boolean).every(x=>Object.values(g.stats(x)).every(Number.isFinite))));checked++;
}
console.log('PASS '+checked+' actual skill activations, both sides / field and hand, and three complete evolution-capable MB test decks.');
