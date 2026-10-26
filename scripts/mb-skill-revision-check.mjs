import assert from 'node:assert/strict';
import * as g from '../src/game/soul-battle.js';
import {bindBattle} from '../src/game/oct06-passives.js';
import {usageRecord,putStoredCard,storedUsage} from '../src/game/skill-budget.js';
import {mbTestDecks} from '../src/data/mb-test-decks.js';
import data from '../src/data/mb-adventure.json' with {type:'json'};
const put=(s,side,id,slot)=>s.players[side].field[slot]={id,uid:++s.serial,summonTurn:1,attacks:0,skillTurn:-1,skillUsesUsed:0,effects:[],attackedTargets:[],extra:0,permanentAtk:0,permanentDef:0};
function setup(id){const s=g.createSoulBattle(mbTestDecks.slice(0,2).map(d=>d.deck));s.turn=5;s.active=0;s.phase='main';s.pending=null;for(const p of s.players){p.field=[null,null,null];p.hand=[];p.handBonuses=[];p.deck=Array(30).fill('01');p.grave=[];p.skillUsage={};}const caster=put(s,0,id,0);const first=put(s,1,'MB004',0),second=put(s,1,'MB075',1);return {s,caster,first,second};}
function cast(s,f,options={}){g.useSkill(s,0,f.uid,options);while(s.pending)g.passReaction(s,1-s.pending.side);}
{
 const {s,caster,first,second}=setup('MB051');
 assert.throws(()=>cast(s,caster),/選んで/);assert(!first.skillLost&&!second.skillLost);assert.equal(caster.skillUsesUsed,0);
 cast(s,caster,{targetUid:second.uid});assert.equal(second.skillLost,true);assert(!first.skillLost);assert(!second.passiveLost);
 const restored=JSON.parse(JSON.stringify(s));restored.active=1;g.startTurn(restored);const target=restored.players[1].field[1];assert.equal(target.skillLost,true);assert(!g.canSkill(restored,1,target.uid));
 const p=restored.players[1],index=putStoredCard(p,'hand',target.id,usageRecord(target));assert(storedUsage(p,'hand',index).skillLost);assert(!g.canSkill(restored,1,{handIndex:index}));
}
for(const protection of ['skillImmune','shieldCharges']){
 const {s,caster,second}=setup('MB051');second.effects.push({key:protection,value:protection==='shieldCharges'?1:true,until:99});cast(s,caster,{targetUid:second.uid});assert(!second.skillLost,protection);
}
{
 const {s,caster,first,second}=setup('MB075');const matching=put(s,0,'MB028',1),outside=put(s,0,'MB004',2);
 bindBattle(s,g.soulById);for(const f of [caster,matching])assert.equal(g.stats(f).def,g.soulById.get(f.id).def+25);assert.equal(g.stats(outside).def,g.soulById.get(outside.id).def);
 const before=[g.stats(first).def,g.stats(second).def];cast(s,caster);assert.equal(g.stats(first).def,before[0]-30);assert.equal(g.stats(second).def,before[1]-30);
 s.active=1;g.startTurn(s);assert.equal(g.stats(first).def,before[0]-30);assert.equal(g.stats(second).def,before[1]-30);
 s.players[0].field[0]=null;bindBattle(s,g.soulById);assert.equal(g.stats(matching).def,g.soulById.get(matching.id).def);
}
for(const [id,key,n] of [['MB054','atk',20],['MB052','def',20]]){
 const {s,caster}=setup(id),ally=put(s,0,'MB004',1);bindBattle(s,g.soulById);const before=[g.stats(caster)[key],g.stats(ally)[key]];cast(s,caster,{targetUid:ally.uid});assert.equal(g.stats(caster)[key],before[0]+n);assert.equal(g.stats(ally)[key],before[1]+n);
}
assert(data.figures.every(f=>f.rarity!=='MOB'));
for(const group of data.groups)assert.equal(data.figures.filter(f=>f.series===group.name&&f.soulSkill.runtimePlan.fusionBonus).length,1,group.name+' fusion support count');
for(const f of data.figures){
 const q=f.soulSkill.runtimePlan,cap={R:15,SR:20,SSR:20,UR:30}[f.rarity];
 assert(!q.pierceGuard,f.id+' cover bypass');assert(!(q.attacks&&q.target==='allies'),f.id+' team multi attack');
 const check=v=>{for(const [k,x]of Object.entries(v)){if(x&&typeof x==='object')check(x);else if(['atk','def','teamAtk','teamDef'].includes(k)&&typeof x==='number')assert(Math.abs(x)<=cap,f.id+' '+k);}};
 check(q);check(f.passive);assert(!/ガードされない|かばうスキル/.test(f.soulSkill.description));
}
const snapshot=JSON.parse((await import('node:fs')).readFileSync('編集アプリ/MOB-PIECE-Editor/editor-current-snapshot.json','utf8')).data;
for(const f of data.figures){const r=snapshot.records.find(r=>r.id===f.id);assert.equal(r.rarity,f.rarity);assert.equal(r.skill.description,f.soulSkill.description);assert.deepEqual(r.skill.plan,f.soulSkill.runtimePlan);assert.deepEqual(r.summon.passive,f.passive);}
for(const id of ['MB086','MB099','MB075']){const f=g.soulById.get(id);assert.equal(f.rarity,'UR');assert.equal(f.soulClass,'mob');}
console.log('PASS explicit skill-loss selection/protection/save/hand persistence; Yumenova all-enemy persistent DEF -30, tagged ally/self aura +25 and removal; team buffs; UR rarity with MOB stage.');
