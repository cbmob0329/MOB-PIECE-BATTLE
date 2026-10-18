import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as g from '../src/game/soul-battle.js';
import {matchesMaterial,recipePairMatches} from '../src/game/fusion-rules.js';
import {dorayakiDecks,dorayakiTestEnemies} from '../src/data/dorayaki-test-decks.js';
import {practiceOpponents,createPracticeSession,practiceRequest} from '../src/game/battle-practice.js';
import {applyStarter} from '../src/game/soul-starters.js';
const added=g.soulFigures.filter(f=>f.id.startsWith('DORA_'));
assert.equal(added.length,39);assert(!g.soulById.has('DORA_028'));
assert.equal(added.filter(f=>f.series==='砂漠を癒すどら焼き').length,23);
assert.equal(added.filter(f=>f.series==='海底の秘宝どら焼き').length,16);
assert.deepEqual(['seed','middle','mob'].map(k=>added.filter(f=>f.soulClass===k).length),[22,12,5]);
const fresh=(side=0)=>{const s=g.createSoulBattle(dorayakiDecks.map(d=>d.deck));s.turn=5;s.active=side;s.phase='main';for(const p of s.players){p.field=[null,null,null];p.hand=[];p.handBonuses=[];p.grave=[];p.destroyed=[];p.skillUsage={};p.deck=Array(40).fill('01');p.life=200;}return s;};
const put=(s,side,id,slot=0)=>s.players[side].field[slot]={id,uid:++s.serial,summonTurn:1,attacks:0,skillTurn:-1,skillUsesUsed:0,effects:[],attackedTargets:[],lastTarget:null,extra:0,permanentAtk:0,permanentDef:0};
const settle=s=>{let n=0;while(s.pending){assert(n++<20);g.passReaction(s,1-s.pending.side);}};
const cast=(s,side,ref,opts=g.cpuOptions(s,side,ref))=>{assert(g.canSkill(s,side,ref),g.skillUnavailableReason(s,side,ref));g.useSkill(s,side,ref,opts);settle(s);};
let checks=0;
for(const f of added){
 assert(fs.existsSync('public/'+f.image));assert.equal(fs.readFileSync('public/'+f.image).compare(fs.readFileSync(`新フィギュア/どら焼き/${f.number}.png`)),0);
 assert(f.soulSkill.description&&f.soulSkill.runtimePlan);assert.equal(f.soulClass==='seed',(Number(f.number)<=15||(Number(f.number)>=32&&Number(f.number)<=38)));
 for(const side of [0,1])for(const fromHand of [false,true]){
  const s=fresh(side),caster=put(s,side,f.id),ally=put(s,side,'DORA_008',1),foe=put(s,1-side,'DORA_001');let ref=caster.uid;
  if(fromHand){s.players[side].field[0]=null;s.players[side].hand=[f.id];ref={handIndex:0};}
  if(f.soulSkill.timing==='attack-response'){s.active=1-side;s.phase='battle';g.attack(s,1-side,foe.uid,ally.uid);assert(s.pending);}
  cast(s,side,ref);assert.equal(s.pending,null);assert(Number.isFinite(g.stats(ally).def));
  if(f.id==='DORA_005')assert.equal(g.stats(ally).def,g.soulById.get('DORA_008').def+20-10,'bubble guard persists and absorbs permanent attrition');
  const restored=JSON.parse(JSON.stringify(s));restored.active=side;g.startTurn(restored);assert(restored.players.every(p=>p.field.filter(Boolean).every(f=>Object.values(g.stats(f)).every(Number.isFinite))));checks++;
 }
}
for(const d of dorayakiDecks){
 assert(g.validateSoulDeck(d.deck).valid);const available=new Set(d.deck.filter(id=>g.soulById.get(id).soulClass==='seed'));
 for(let pass=0;pass<3;pass++)for(const r of g.recipes.filter(r=>d.deck.includes(r.target))){const candidates=[...available].map(id=>g.soulById.get(id)).filter(f=>f.soulClass===r.fromClass);if(candidates.some(a=>candidates.some(b=>(a.id!==b.id||d.deck.filter(id=>id===a.id).length>=2)&&recipePairMatches(r,[a,b]))))available.add(r.target);}
 for(const id of new Set(d.deck))assert(available.has(id),`${d.name}: unreachable ${id}`);
 const profile={testMode:true,owned:{},soulDeckSlot:2,soulDecks:[[],[],[],[],[]]};applyStarter(profile,d.id);assert(g.validateSoulDeck(profile.soulDecks[2],profile.owned,{profile,slot:2}).valid);
}
for(const r of g.recipes.filter(r=>r.target.startsWith('DORA_'))){
 const deck=dorayakiDecks.find(d=>d.deck.includes(r.target)).deck;
 const ids=r.materials.map(m=>[...new Set(deck)].find(id=>g.soulById.get(id).soulClass===r.fromClass&&matchesMaterial(g.soulById.get(id),m)));
 assert(ids.every(Boolean),r.id);
 for(const side of [0,1])for(const hand of [false,true]){
  const s=fresh(side),p=s.players[side],a=put(s,side,ids[0]),b=put(s,side,ids[1],1);p.reserve=[r.target];let refs=[a.uid,b.uid];
  if(hand){p.field[1]=null;p.hand=[b.id];refs=[a.uid,{handIndex:0}];}
  assert(g.fusionOptions(s,side,refs).some(x=>x.id===r.id),r.id);g.fuse(s,side,refs,r.id);const made=p.field.find(f=>f?.id===r.target);assert(made,r.id);
  assert.deepEqual(g.stats(made),{atk:g.soulById.get(r.target).atk+(r.special?25:0),def:g.soulById.get(r.target).def+(r.special?25:0)});
  if(g.soulById.get(r.target).soulClass==='mob'){const enemy=put(s,1-side,'01');s.phase='battle';assert(!g.canAttack(s,side,made,enemy));}
  checks++;
 }
}
for(const f of added.filter(f=>f.soulClass==='mob')){assert(f.fusionMaterials.length<=2);if(f.id!=='DORA_024')assert(f.fusionMaterials.every(r=>r.special&&r.materials.every(m=>m.id)));else assert.equal(f.fusionMaterials.filter(r=>!r.special).length,1);}
// Cleanse removes only skill penalties, never the DEF lost by guarding.
{
 const s=fresh(),healer=put(s,0,'DORA_029'),ally=put(s,0,'DORA_004',1);ally.permanentDef=-20;ally.effects=[{key:'def',value:-15,until:Infinity}];cast(s,0,healer.uid,{targetUid:String(ally.uid)});assert.equal(g.stats(ally).def,90);assert.equal(s.players[0].life,240);
}
for(const enemy of dorayakiTestEnemies){assert(practiceOpponents().some(o=>o.key==='series:'+enemy.id));const p={testMode:true,owned:{},soulDecks:[]},s=createPracticeSession(p,'series:'+enemy.id,['borrow:'+enemy.id]),req=practiceRequest(s);assert(g.validateSoulDeck(req.playerDeck).valid);assert(g.validateSoulDeck(req.enemy.deck).valid);}
console.log(`PASS ${checks} skill/fusion cases: 39 figure images, both series, both sides, hand/field casting, stage restrictions, MOB +25, all deck evolutions reachable, cleanse preserves damage, 4 test opponents and deck grants.`);
