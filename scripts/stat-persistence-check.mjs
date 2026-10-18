import assert from 'node:assert/strict';
import * as g from '../src/game/soul-battle.js';
import {pieceStarterDeck} from '../src/game/piece-starters.js';
import {putStoredCard} from '../src/game/skill-budget.js';
import {statEffectUntil} from '../src/game/stat-duration.js';
import {applyElement} from '../src/game/element-skill-runtime.js';
const deck=pieceStarterDeck('materials-balloon');
const fresh=()=>{const s=g.createSoulBattle([deck,deck]);s.turn=5;s.active=0;s.phase='main';for(const p of s.players){p.field=[null,null,null];p.hand=['01','01','01','01','01'];p.handBonuses=[];p.deck=Array(30).fill('01');p.skillUsage={};}return s;};
const put=(s,side,id,slot=0)=>s.players[side].field[slot]={id,uid:++s.serial,summonTurn:1,attacks:0,skillTurn:-1,skillUsesUsed:0,effects:[],attackedTargets:[],lastTarget:null,extra:0,permanentAtk:0,permanentDef:0};
const settle=s=>{while(s.pending)g.passReaction(s,1-s.pending.side);};
const cast=(s,f,options={})=>{for(const q of g.skillChoices(s,0,f.uid,options))options[q.key]??=q.choices[0]?.value;g.useSkill(s,0,f.uid,options);settle(s);};
const next=s=>{s.phase='battle';g.endTurn(s,s.active);};
let cases=0;
// Untimed stats survive their separately timed secondary restrictions.
for(const id of ['15','21','31','32','48','49','54','62','75','83','95','NS2_027']){
 const s=fresh(),f=put(s,0,id),ally=put(s,0,'01',1),foe=put(s,1,'01');
 cast(s,f,{targetUid:String(foe.uid)});
 const changes=[f,ally,foe].flatMap(t=>t.effects.filter(e=>['atk','def'].includes(e.key)).map(e=>({uid:t.uid,key:e.key,value:e.value})));
 assert(changes.length,id);assert([f,ally,foe].every(t=>t.effects.filter(e=>['atk','def'].includes(e.key)).every(e=>e.until===Infinity)),id);
 const saved=JSON.parse(JSON.stringify(s));for(let i=0;i<4;i++)next(saved);
 for(const c of changes){const t=saved.players.flatMap(p=>p.field).find(t=>t?.uid===c.uid);assert(t.effects.some(e=>e.key===c.key&&e.value===c.value),id);}
 assert(!saved.players.flatMap(p=>p.field.filter(Boolean)).some(t=>t.effects.some(e=>['skipBattle','skillLock','fusionLock','ignoreDefOnTarget','eachTarget'].includes(e.key))),id);
 cases++;
}
for(const [id,lifetime] of [['27',0],['46',0],['35',1],['170',1],['WRECK_M02',0]]){
 const s=fresh(),f=put(s,0,id),foe=put(s,1,'01');cast(s,f,{targetUid:String(foe.uid)});
 const t=(g.skillPlan(f).target==='enemy')?foe:f;
 assert(t.effects.some(e=>['atk','def'].includes(e.key)),id);
 next(s);assert.equal(t.effects.some(e=>['atk','def'].includes(e.key)),lifetime===1,id);
 if(lifetime){next(s);assert(!t.effects.some(e=>['atk','def'].includes(e.key)),id);}cases++;
}
// Two independent casts stack, and leaving the field clears ordinary skill
// modifiers while keeping collection plus and fusion strengthening.
{
 const s=fresh(),a=put(s,0,'01'),b=put(s,0,'01',1);cast(s,a);cast(s,b);
 assert.equal(a.effects.filter(e=>e.key==='def').reduce((n,e)=>n+e.value,0),40);
 a.collectionPlus=10;a.strengthened=true;a.resonanceAtk=20;a.resonanceDef=20;a.permanentAtk=20;a.permanentDef=0;
 const p=s.players[0];p.field[0]=null;p.hand=[];p.handBonuses=[];putStoredCard(p,'hand',a.id,a);
 const returned=g.summon(s,0,0,0);assert(!returned.effects.some(e=>e.key==='def'));assert.equal(returned.permanentDef,20);assert.equal(returned.collectionPlus,10);cases++;
}
// Guard attrition accumulates across turns, JSON restore and temporary DEF set.
for(const fixed of [false,true]){
 let s=fresh(),a=put(s,0,'01'),d=put(s,1,'01');d.permanentDef=200;
 if(fixed)d.effects.push({key:'defSet',value:150,until:6});
 const base=g.stats(d).def;s.phase='battle';g.attack(s,0,a.uid,d.uid);settle(s);assert.equal(g.stats(d).def,base-10);
 s=JSON.parse(JSON.stringify(s));next(s);next(s);d=s.players[1].field[0];a=s.players[0].field[0];
 assert.equal(d.permanentDef,190);assert.equal(g.stats(d).def,g.soulById.get('01').def+190);
 s.phase='battle';g.attack(s,0,a.uid,d.uid);settle(s);assert.equal(d.permanentDef,180);next(s);next(s);assert.equal(d.permanentDef,180);cases++;
}
assert.equal(statEffectUntil({description:'相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。'},'def',5),Infinity);
assert.equal(statEffectUntil({description:'味方1体のATK+25、DEF-10（このターン）。'},'def',5),5);
assert.equal(statEffectUntil({description:'相手1体のDEF-20。'},'fusionLock',6),6);
// Attack-triggered growth has its own lifetime, independent of attack count.
for(const [id,persistent] of [['92',true],['07',false]]){
 const s=fresh(),a=put(s,0,id),d=put(s,1,'01');d.permanentDef=1000;cast(s,a);
 s.phase='battle';g.attack(s,0,a.uid,d.uid);settle(s);
 assert(a.effects.some(e=>e.key==='atk'));next(s);
 assert.equal(a.effects.some(e=>e.key==='atk'),persistent,id);cases++;
}
// Element skills also add repeated casts rather than silently replacing them.
{
 const s=fresh(),f=put(s,0,'ECL_S01'),t=put(s,0,'02',1);
 const opts={el_a:String(t.uid)};
 assert(applyElement(s,0,f,g.soulById,opts));assert(applyElement(s,0,f,g.soulById,opts));
 assert.equal(t.effects.filter(e=>e.key==='atk').reduce((n,e)=>n+e.value,0),60);
 next(s);assert(!t.effects.some(e=>e.key==='atk'));cases++;
}
// The next-fusion bonus has no expiration on the summoned figure.
{
 const s=fresh(),f=put(s,0,'155');cast(s,f);
 const r=g.recipes.find(r=>g.soulById.get(r.target)?.soulClass==='middle'&&r.materials.every(m=>m.id&&g.soulById.get(m.id)?.soulClass==='seed'));
 const a=put(s,0,r.materials[0].id,1),b=put(s,0,r.materials[1].id,2);s.players[0].reserve=[r.target];
 g.fuse(s,0,[a.uid,b.uid],r.id);const t=s.players[0].field.find(t=>t?.id===r.target);next(s);next(s);
 assert(t.effects.some(e=>e.key==='atk'&&e.value===20));assert(t.effects.some(e=>e.key==='def'&&e.value===20));cases++;
}
// Reaction plans with an obsolete default duration also follow their wording.
for(const id of ['NS034','NS2_009']){
 const s=fresh(),f=put(s,0,id),enemy=put(s,1,'01');f.permanentDef=500;s.active=1;s.phase='battle';
 g.attack(s,1,enemy.uid,f.uid);assert(s.pending,id);g.useSkill(s,0,f.uid);settle(s);
 const target=id==='NS034'?f:enemy,key=id==='NS034'?'def':'atk';
 assert(target.effects.some(e=>e.key===key&&e.until===Infinity),id);next(s);next(s);
 assert(target.effects.some(e=>e.key===key),id);cases++;
}
console.log(`PASS ${cases} stat persistence scenarios: stacking, explicit expiry, independent locks, JSON, field exit, guard attrition and DEF-set expiry`);
