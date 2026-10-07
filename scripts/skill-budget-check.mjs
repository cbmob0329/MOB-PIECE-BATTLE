import assert from 'node:assert/strict';
import * as g from '../src/game/soul-battle.js';
import {putStoredCard,storedUsage,moveStoredCard,topStoredCard} from '../src/game/skill-budget.js';
import {pieceStarterDeck} from '../src/game/piece-starters.js';
const deck=pieceStarterDeck('materials-balloon');
const fresh=()=>{const s=g.createSoulBattle([deck,deck]);s.turn=3;for(const p of s.players){p.hand=[];p.handBonuses=[];p.field=[null,null,null];p.reserve=[];p.grave=[];p.destroyed=[];}return s;};
const put=(s,side,id,slot=0)=>s.players[side].field[slot]={id,uid:++s.serial,summonTurn:0,skillUsesUsed:0,attacks:0,skillTurn:-1,effects:[],attackedTargets:[],extra:0,permanentAtk:0,permanentDef:0};
const resolve=s=>{for(let i=0;i<12&&s.pending;i++)g.passReaction(s,1-s.pending.side);};
const cast=(s,side,f)=>{g.useSkill(s,side,f.uid,g.cpuOptions(s,side,f.uid));resolve(s);};
let tests=0;const test=(name,fn)=>{fn();console.log('PASS '+name);tests++;};
test('Seed1/Middle2/MOB3 over the whole battle, each figure once per turn; JSON resume preserves exhaustion',()=>{
 for(const [id,limit] of [['01',1],['146',2],['219',3]]){let s=fresh();const f=put(s,0,id);assert.equal(g.skillBudget(s,0,f.uid).limit,limit);for(let i=0;i<limit;i++){cast(s,0,f);assert.equal(g.skillBudget(s,0,f.uid).remaining,limit-i-1);assert(!g.canSkill(s,0,f.uid));const saved=JSON.stringify(s);assert.throws(()=>cast(s,0,f));assert.equal(JSON.stringify(s),saved);s.turn++;}assert(!g.canSkill(s,0,f.uid));s=JSON.parse(JSON.stringify(s));assert.equal(g.skillBudget(s,0,f.uid).remaining,0);}
});
test('Different allied instances and different hand copies can each activate; CPU follows the same limits',()=>{
 for(const side of [0,1]){const s=fresh();s.active=side;const a=put(s,side,'01'),b=put(s,side,'06',1);if(side===0){cast(s,side,a);assert(g.canSkill(s,side,b.uid));cast(s,side,b);}else{assert(g.cpuSkill(s));assert(g.cpuSkill(s));assert(!g.cpuSkill(s));}assert.equal(a.skillUsesUsed,1);assert.equal(b.skillUsesUsed,1);}
 const s=fresh();s.players[0].hand=['01','01'];g.useSkill(s,0,{handIndex:0});resolve(s);g.useSkill(s,0,{handIndex:0});resolve(s);assert.equal(s.players[0].hand.length,0);assert.equal(s.players[0].grave.length,2);assert(s.players[0].skillUsage.grave.every(x=>x.skillUsesUsed===1));
});
test('Cancelled selections, invalid targets, absent target, invalid cost do not spend cards or usage',()=>{
 const s=fresh(),a=put(s,0,'01');const before=JSON.stringify(s);g.skillChoices(s,0,a.uid);g.skillBudget(s,0,a.uid);g.skillUnavailableReason(s,0,a.uid);assert.equal(JSON.stringify(s),before);
 s.players[0].hand=['BFX001'];const noCost=JSON.stringify(s);assert.throws(()=>g.useSkill(s,0,{handIndex:0},{}));assert.equal(JSON.stringify(s),noCost);
 const target=put(s,1,'01'),caster=put(s,0,'ECL_S01',1);const invalid=JSON.stringify(s);assert.throws(()=>g.useSkill(s,0,caster.uid,{el_a:target.uid}));assert.equal(JSON.stringify(s),invalid);
});
test('Normal fusion material lock remains; next-turn fusion and same-ID reinforcement create full new budgets',()=>{
 const s=fresh(),p=s.players[0],a=put(s,0,'ECL_S01');p.hand=['ECL_S02'];p.reserve=['ECL_M02'];a.skillUsesUsed=1;a.skillTurn=s.turn;assert.equal(g.fusionOptions(s,0,[a.uid,{handIndex:0}]).length,0);s.turn++;const r=g.fusionOptions(s,0,[a.uid,{handIndex:0}])[0];g.fuse(s,0,[a.uid,{handIndex:0}],r.id);assert.equal(g.skillBudget(s,0,p.field[0].uid).remaining,2);
 const q=fresh(),f=put(q,0,'01');q.players[0].hand=['01'];f.skillUsesUsed=1;f.skillTurn=q.turn-1;const r2=g.fusionOptions(q,0,[f.uid,{handIndex:0}])[0];assert(r2.resonance);g.fuse(q,0,[f.uid,{handIndex:0}],r2.id);assert.equal(g.skillBudget(q,0,q.players[0].field[0].uid).remaining,1);
});
test('Returning to hand preserves usage and turn lock through resummon',()=>{
 const s=fresh(),p=s.players[0],f=put(s,0,'13');assert(g.skillPlan(f).replaceSeed);cast(s,0,f);assert.equal(p.field[0],null);const i=p.hand.indexOf('13');assert.equal(g.skillBudget(s,0,{handIndex:i}).remaining,0);assert(!g.canSkill(s,0,{handIndex:i}));const next=g.summon(s,0,i,0);assert.equal(next.skillUsesUsed,1);assert.equal(next.skillTurn,s.turn);assert(!g.canSkill(s,0,next.uid));
});
test('Death revival restores full usage while keeping existing instance action defaults; passives spend nothing',()=>{
 const s=fresh(),p=s.players[1];s.phase='battle';const a=put(s,0,'02'),victim=put(s,1,'NS2_032');a.permanentAtk=1000;putStoredCard(p,'grave','01',{skillUsesUsed:1,skillTurn:s.turn});g.attack(s,0,a.uid,victim.uid);resolve(s);const revived=p.field.find(f=>f?.id==='01');assert(revived);assert.equal(g.skillBudget(s,1,revived.uid).remaining,1);assert.equal(revived.skillTurn,-1);assert.equal(revived.attacks,0);assert.equal(victim.skillUsesUsed,0);
 const passive=put(s,0,'NS2_036',1);assert(g.skillBudget(s,0,passive.uid).passive);assert(!g.canSkill(s,0,passive.uid));assert.equal(passive.skillUsesUsed,0);
});
test('Grave recovery is not revival: usage follows individual cards through hand/deck and JSON save',()=>{
 const s=fresh(),p=s.players[0],f=put(s,0,'NS2_016');putStoredCard(p,'grave','01',{skillUsesUsed:1,skillTurn:s.turn-1});cast(s,0,f);assert.equal(g.skillBudget(s,0,{handIndex:0}).remaining,0);moveStoredCard(p,'hand',0,'deck');const i=p.deck.length-1;topStoredCard(p,i);moveStoredCard(p,'deck',0,'hand');const saved=JSON.parse(JSON.stringify(s));assert.equal(g.skillBudget(saved,0,{handIndex:0}).remaining,0);assert.equal(storedUsage(saved.players[0],'hand',0).skillUsesUsed,1);
});
test('Old states remain readable without mandatory new catalog fields',()=>{
 const s=fresh(),a=put(s,0,'96');delete a.skillUsesUsed;a.skillTurn=s.turn-1;assert.equal(g.skillBudget(s,0,a.uid).remaining,1);cast(s,0,a);assert.equal(a.skillUsesUsed,2);assert.equal(g.skillBudget(s,0,a.uid).remaining,0);
});
console.log(`${tests} skill-budget checks passed`);

