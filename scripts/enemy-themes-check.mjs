import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as g from '../src/game/soul-battle.js';
import {freeEnemies,freeEnemy} from '../src/game/free-enemies.js';
import {enemyFigureAllowed,enemySeedAnchors} from '../src/game/free-enemy-policy.js';
import {release} from '../src/game/initial-release.js';
const output=[];
const put=(s,side,id,slot=0)=>s.players[side].field[slot]={id,uid:++s.serial,summonTurn:0,attacks:0,skillTurn:-1,effects:[],attackedTargets:[],lastTarget:null,extra:0,mobFusion:false,permanentAtk:0,permanentDef:0};
for(const e of freeEnemies){
 assert.deepEqual(freeEnemy(e.id).deck,e.deck);const allowed=new Set(e.deck),have={};for(const id of e.deck)have[id]=(have[id]||0)+1;
 for(const id of e.deck)assert.ok(enemyFigureAllowed(e,g.soulById.get(id)),e.id+' '+id);
 for(const id of enemySeedAnchors[e.id]||[])assert.ok(allowed.has(id),e.id+' missing seed anchor '+id);
 if(e.id==='grass')for(const id of e.deck)assert.ok(!g.soulById.get(id).tags.includes('48'),'castle in grass '+id);
 const check=s=>{for(const id of [...s.players[1].deck,...s.players[1].hand,...s.players[1].reserve,...s.players[1].grave,...s.players[1].field.filter(Boolean).map(f=>f.id)])assert.ok(allowed.has(id),e.id+' runtime escaped: '+id);};
 const fresh=()=>{const s=g.createSoulBattle([release.starters[0].deck,e.deck],undefined,{random:()=>.41});s.turn=3;s.active=1;s.phase='main';s.cpuStrategy=e.strategy;s.cpuThemeTags=e.themeTagIds;s.players.forEach(p=>p.field=[null,null,null]);return s;};
 const resolve=(s,evolve=false)=>{for(let i=0;i<20&&s.pending;i++)g.passReaction(s,1-s.pending.side);for(let i=0;i<5&&g.evolutionOptions(s).event;i++){const o=g.evolutionOptions(s);g.resolveEvolution(s,o.event.side,evolve?o.costs.slice(0,o.event.cost).map(c=>c.value):null);}check(s);};
 let routeSteps=0,skills=0,passives=0;
 for(const r of e.routes){for(const[id,n]of Object.entries(r.needs))assert.ok(have[id]>=n,e.id+' missing route material '+id);for(const step of r.steps){
  const s=fresh(),p=s.players[1];p.reserve=e.deck.filter(id=>g.soulById.get(id).soulClass!=='seed');
  if(step.kind==='evolution'){
   const f=put(s,1,step.materials[0]);p.hand=step.materials.slice(1);
   if(g.skillPlan(f).specified==='promoteSelf'){g.useSkill(s,1,f.uid,{promoteId:step.target});resolve(s);}
   else {s.active=0;s.phase='battle';const a=put(s,0,release.starters[0].deck[0]);a.permanentAtk=50-g.soulById.get(a.id).atk;f.permanentDef=-g.soulById.get(f.id).def;g.attack(s,0,a.uid,f.uid);resolve(s,true);}
   assert.ok(p.field.some(f=>f?.id===step.target),e.id+' evolution '+step.target);
  }else{const refs=step.materials.map((id,i)=>put(s,1,id,i).uid);const recipe=g.fusionOptions(s,1,refs).find(r=>r.target===step.target&&r.special===step.special);assert.ok(recipe,e.id+' recipe '+step.target);g.fuse(s,1,refs,recipe.id);check(s);}
  routeSteps++;
 }}
 for(const id of allowed){
  const s=fresh(),p=s.players[1],f=put(s,1,id);p.hand=e.deck.filter(id=>g.soulById.get(id).soulClass==='seed').slice(0,5);p.grave=p.hand.slice(0,2);put(s,0,release.starters[0].deck[0]);
  if(g.canSkill(s,1,f.uid)){const choices=g.cpuOptions(s,1,f.uid);try{g.useSkill(s,1,f.uid,choices);resolve(s);skills++;}catch(err){if(!g.skillChoices(s,1,f.uid,choices).some(c=>!c.choices.length))throw err;}}
  if(g.soulById.get(id).passive){const t=fresh(),victim=put(t,1,id),a=put(t,0,release.starters[0].deck[0]);t.active=0;t.phase='battle';a.permanentAtk=50-g.soulById.get(a.id).atk;victim.permanentDef=-g.soulById.get(id).def;t.players[1].grave=t.players[1].original.filter(id=>g.soulById.get(id).soulClass==='seed').slice(0,2);g.attack(t,0,a.uid,victim.uid);resolve(t);passives++;}
 }
 const battles=[];
 for(let seed=1;seed<=10;seed++){
  let n=seed;const s=g.createSoulBattle([release.starters[0].deck,e.deck],undefined,{random:()=>((n=Math.imul(n,1664525)+1013904223>>>0)/2**32)});s.cpuStrategy=e.strategy;s.cpuThemeTags=e.themeTagIds;
  let steps=0;for(;steps<1000&&s.winner===null;steps++){resolve(s);if(s.winner!==null)break;if(s.active===1){if(s.phase==='main'){g.cpuMain(s);resolve(s);if(s.winner===null){if(g.canBeginBattle(s,1))g.beginBattle(s,1);else g.endTurn(s,1);};}else g.cpuAttack(s);}else if(s.phase==='main'){const p=s.players[0];while(p.field.includes(null)&&p.hand.some((_,i)=>g.canSummonHand(s,0,i)))g.summon(s,0,p.hand.findIndex((_,i)=>g.canSummonHand(s,0,i)),p.field.indexOf(null));if(g.canBeginBattle(s,0))g.beginBattle(s,0);else g.endTurn(s,0);}else{let pair;for(const a of s.players[0].field.filter(Boolean))for(const d of s.players[1].field.filter(Boolean))if(!pair&&g.canAttack(s,0,a,d))pair=[a,d];if(pair)g.attack(s,0,pair[0].uid,pair[1].uid);else g.endTurn(s,0);}check(s);}
  assert.notEqual(s.winner,null,e.id+' stalled');battles.push({seed,steps,winner:s.winner,reason:s.reason});
 }
 output.push({id:e.id,name:e.name,routeSteps,skills,passives,themeReserves:e.deck.filter(id=>g.soulById.get(id).soulClass!=='seed'&&g.soulById.get(id).tags.some(t=>e.themeTagIds.includes(t))).length,support:e.supportIds.map(id=>({id,name:g.soulById.get(id).name})),battles});
}
// A valid 45-card deck must still be rejected if its enemy theme is violated.
const grass=freeEnemies.find(e=>e.id==='grass'),original=grass.deck;
try{grass.deck=[...original];grass.deck[0]='149';assert.ok(g.validateSoulDeck(grass.deck).valid);assert.throws(()=>freeEnemy('grass'),/再検証/);}finally{grass.deck=original;}
fs.writeFileSync('docs/enemy-themes-validation.json',JSON.stringify(output,null,2));
console.log('PASS '+freeEnemies.length+' legal themed decks; every recorded fusion/evolution route; skill/passive zone containment; '+freeEnemies.length*10+' completed AI battles.');
