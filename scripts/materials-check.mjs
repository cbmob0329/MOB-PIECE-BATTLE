import oct06Spec from '../src/data/oct06-spec.json' with {type:'json'};
import oct06Balance from '../src/data/oct06-balance.json' with {type:'json'};
import oct06Additions from '../src/data/oct06-additions.json' with {type:'json'};
import {oct06RetiredIds} from '../src/data/oct06-spec.js';
import {isStoryOnlyId} from '../src/data/battle-corrections.js';
import {fusionRecommendations,countIds} from '../src/game/soul-deck-assist.js';
import oct05Spec from '../src/data/oct05-spec.json' with {type:'json'};
import {release} from '../src/game/initial-release.js';
import {revisedTexts} from '../src/data/tactical-skills.js';
import assert from 'node:assert/strict';import fs from 'node:fs';import crypto from 'node:crypto';
import data from '../src/data/materials-additions.json' with {type:'json'};
import sourceAudit from '../docs/materials-source-audit.json' with {type:'json'};
import catalog from '../src/data/soul-catalog.js';import texts from '../src/data/soul-skill-texts.js';
import {figures,byId,tags} from '../src/data/catalog.js';
import {pieceStarters,pieceStarterDeck,grantMainCollection,selectCpuStarter} from '../src/game/piece-starters.js';
import {OWN_CAP} from '../src/data/gacha.js';import * as g from '../src/game/soul-battle.js';
// Exact historical copies avoid the unreadable handoff directory. Hash checks below are unchanged.
const digest=b=>crypto.createHash('sha256').update(b).digest('hex');
const legacyFixtures=JSON.parse(fs.readFileSync(new URL('./fixtures/materials-legacy/provenance.json',import.meta.url),'utf8'));
const sourceBytes=p=>{const fixture=legacyFixtures.find(r=>r.file===p);const bytes=fs.readFileSync(fixture?new URL('./fixtures/materials-legacy/'+fixture.fixture,import.meta.url):p.includes('/MOB_SWEETS_v3/')?new URL('./fixtures/materials-v3/'+p.split('/').at(-1),import.meta.url):p),audit=sourceAudit.sources.find(r=>r.file===p);if(!audit||digest(bytes)===audit.sha256)return bytes;const text=bytes.toString('utf8');for(const normalized of [text.replace(/\r\n/g,'\n'),text.replace(/\r?\n/g,'\r\n')]){const candidate=Buffer.from(normalized);if(digest(candidate)===audit.sha256)return candidate;}return bytes;};
const hash=p=>crypto.createHash('sha256').update(sourceBytes(p)).digest('hex');
// Reconcile every source ID, not merely the latest total: 673 historical - 46 STORY-only + 16 new - 2 retired = 641.
const baseText=fs.readFileSync(new URL('../src/data/soul-catalog.js',import.meta.url),'utf8');
const base=JSON.parse(baseText.slice(baseText.indexOf('const base = ')+13,baseText.lastIndexOf('};')+1));
const batches=['piece-figures.json','materials-additions.json','selected-additions.json','element-additions.json','family-additions.json','oct05-additions.json','oct06-additions.json'].map(name=>{const d=JSON.parse(fs.readFileSync(new URL('../src/data/'+name,import.meta.url),'utf8'));return d.figures||d.records;});
assert.deepEqual([base.figures.length,...batches.map(a=>a.length)],[327,47,135,24,54,24,62,16]);
const sourceRows=[...base.figures,...batches.flat()],sourceIds=sourceRows.map(f=>f.id);assert.equal(new Set(sourceIds).size,689,'source ID collision');
const excluded=sourceIds.filter(id=>isStoryOnlyId(id)||oct06RetiredIds.has(id));assert.equal(excluded.length,48);assert.deepEqual([...oct06RetiredIds].sort(),['MB045','MB049']);
const expected=sourceIds.filter(id=>!isStoryOnlyId(id)&&!oct06RetiredIds.has(id)).sort();assert.deepEqual(catalog.figures.map(f=>f.id).sort(),expected,'active ID missing or unexpectedly added');
assert.equal(data.figures.length,135);assert.equal(catalog.figures.length,641);assert.equal(figures.length,643);assert.equal(new Set(figures.map(f=>f.sourceId)).size,643);assert.equal(catalog.figures.filter(f=>f.collection==='main').length,382);assert.equal(catalog.figures.filter(f=>f.collection==='collab').length,259);
assert.deepEqual(figures.filter(f=>!expected.includes(f.sourceId)).map(f=>[f.sourceId,f.pending]),[['131',true],['201',true]]);
for(const f of oct06Additions.figures){assert.equal(catalog.figures.filter(x=>x.id===f.id).length,1);assert.equal(g.soulById.get(f.id).name,f.name);assert.ok(fs.existsSync(f.image),f.id+' image');}
for(const id of excluded){assert.ok(!catalog.figures.some(f=>f.id===id));assert.ok(byId.get(id)?.retired,id+' old inventory identity');}

assert.deepEqual(['seed','middle','mob'].map(k=>data.figures.filter(f=>f.soulClass===k).length),[117,12,6]);
for(const f of data.figures){assert.ok(byId.has(f.id));assert.ok(f.tags.every(t=>tags.some(x=>x.id===t)));assert.ok(f.tags.length<=catalog.rules.tagLimits[f.rarity]);assert.equal(texts[f.soulSkill.program],revisedTexts[f.soulSkill.program]||f.soulSkill.timingLabel+' | '+f.soulSkill.sourceText);const src=sourceAudit.images.find(r=>r.name===f.id+'.png'||f.id.startsWith('MB')&&r.name.startsWith('MOB_No.'+f.id.slice(2)+'_'));if(oct06RetiredIds.has(f.id)){assert.ok(g.soulById.get(f.id).retired);assert.ok(!catalog.figures.some(x=>x.id===f.id));}else assert.equal(hash(f.image),src.hash);}
let supplied=0;for(const src of sourceAudit.sources.filter(r=>r.file.endsWith('runtime_additions.json'))){const original=JSON.parse(sourceBytes(src.file).toString('utf8'));for(const o of original.figures){
 const raw=data.figures.find(f=>f.id===o.id),live=g.soulById.get(o.id),patch=oct06Spec.patches.find(p=>p.id===o.id),balance=oct06Balance.changes.find(p=>p.id===o.id)?.after;
 // Preserve the exact supplied baseline, then separately verify approved overlays.
 for(const k of ['id','uid','name','rarity','soulClass','attribute','attackType','role','atk','def','tags','soulSkill'])assert.deepEqual(raw[k],o[k],o.id+' original '+k);
 for(const k of ['id','uid','name','rarity','attribute','attackType','role'])assert.deepEqual(live[k],o[k],o.id+' live '+k);
 assert.equal(live.soulClass,patch?.soulClass||o.soulClass);for(const k of ['atk','def'])assert.equal(live[k],balance?.[k]??o[k]);
 const expectedTags=[...new Set([...o.tags,...(patch?.addTags||[]).map(name=>{const tag=tags.find(t=>t.name===name);assert.ok(tag);return tag.id;})])];assert.deepEqual(live.tags,expectedTags,o.id+' approved tags');
 if(balance?.runtimePlan){assert.deepEqual(live.soulSkill.runtimePlan,balance.runtimePlan);assert.equal(live.soulSkill.description,balance.description);}
 const skill={...live.soulSkill};delete skill.runtimePlan;if(revisedTexts[live.soulSkill.program]||balance?.runtimePlan)for(const k of ['description','effect','sourceText'])skill[k]=o.soulSkill[k];assert.deepEqual(skill,o.soulSkill,o.id+' original skill shape');supplied++;
 }}
 assert.equal(supplied,30);
for(const src of sourceAudit.sources){assert.equal(hash(src.file),src.sha256,src.file);if(src.file.endsWith('fusion_examples.json')){for(const e of JSON.parse(sourceBytes(src.file).toString('utf8')).examples||[]){if(oct05Spec.patches.some(p=>p.id===e.targetId))continue;const r=catalog.recipes.find(r=>r.id===e.recipeId);assert.ok(r,e.recipeId);assert.equal(r.target,e.targetId);}}}
const freshProfile={owned:{}};grantMainCollection(freshProfile,{newProfile:true});assert.equal(freshProfile.pieceCollectionVersion,2);
const old={pieceCollectionVersion:1,owned:{'01':12,'16':2,'piece:049':4},soulDecks:[['16'],['piece:049'],[],[],[]],soulDeckSlot:1,diamonds:654,coins:123,rubies:88,centerId:'16',displayIds:['16'],deckPresets:[['16'],[],[],[],[]]};const original=structuredClone(old);assert.equal(grantMainCollection(old),true);for(const k of Object.keys(original).filter(k=>!['owned','pieceCollectionVersion'].includes(k)))assert.deepEqual(old[k],original[k]);for(const [id,n]of Object.entries(original.owned))assert.equal(old.owned[id],n);const migrated=structuredClone(old);assert.equal(grantMainCollection(old),false);assert.deepEqual(old,migrated);
const deck=pieceStarterDeck('piece-soldier'),fresh=()=>g.createSoulBattle([deck,deck],undefined,{random:()=>.999999});const seed=g.soulById.get('01');
function put(s,side,f,slot=0){const p={uid:++s.serial,id:f.id,attacks:0,skillTurn:-1,effects:[],attackedTargets:[],lastTarget:null,extra:0,mobFusion:false,permanentAtk:0,permanentDef:0};s.players[side].field[slot]=p;return p;}
const resolve=s=>{for(let i=0;i<10&&s.pending;i++)g.passReaction(s,1-s.pending.side);assert.equal(s.pending,null);};
for(const f of data.figures){if(oct06RetiredIds.has(f.id)){assert.ok(g.soulById.get(f.id).retired);continue;}const s=fresh(),a=put(s,0,f),b=put(s,0,seed,1),d=put(s,1,seed);s.players[0].hand=[seed.id];s.players[0].deck=[seed.id,seed.id];s.players[0].grave=[seed.id];s.players[0].destroyed=[seed.id];
 if(f.soulSkill.timing!=='own-main'){s.active=1;s.phase='battle';s.pending={kind:f.soulSkill.timing==='attack-response'?'attack':f.soulSkill.timing==='defeat-response'?'defeat':'skill',side:1,uid:d.uid,targetUid:a.uid,options:{targetUid:a.uid}};if(s.pending.kind==='skill')d.id=catalog.figures.find(x=>x.soulSkill.program===6).id;}
 assert.ok(g.canSkill(s,0,a.uid),f.id);g.useSkill(s,0,a.uid,g.cpuOptions(s,0,a.uid));resolve(s);assert.ok(s.players[0].skillUsed,f.id);
}
const matches=(f,m)=>m.id?f.id===m.id:m.tag?f.tags.includes(m.tag):f.attribute===m.attribute;
for(const src of sourceAudit.sources.filter(s=>s.file.endsWith('fusion_examples.json')))for(const e of JSON.parse(sourceBytes(src.file).toString('utf8')).examples||[]){if(oct05Spec.patches.some(p=>p.id===e.targetId))continue;const s=fresh(),p=s.players[0],a=put(s,0,g.soulById.get(e.figureId)),b=put(s,0,g.soulById.get(e.partner.id),1);p.reserve=[e.targetId];assert.ok(g.fusionOptions(s,0,[a.uid,b.uid]).some(r=>r.id===e.recipeId),e.figureId+' source fusion '+e.recipeId);}
const liveRecipes=data.recipes.map(r=>{const current=catalog.recipes.find(x=>x.id===r.id);if(!current)assert.ok(oct06RetiredIds.has(r.target)||g.soulById.get(r.target).soulClass==='seed','unexpected lost recipe '+r.id);return current;}).filter(Boolean);
for(const r of liveRecipes)for(const hand of [false,true]){const s=fresh(),p=s.players[0],pair=r.materials.map(m=>catalog.figures.find(f=>f.soulClass===r.fromClass&&matches(f,m)));assert.ok(pair.every(Boolean),r.id);const a=put(s,0,pair[0]);let refs;if(hand){p.hand=[pair[1].id];refs=[a.uid,{handIndex:0}];}else refs=[a.uid,put(s,0,pair[1],1).uid];p.reserve=[r.target];assert.ok(g.fusionOptions(s,0,refs).some(x=>x.id===r.id),r.id);g.fuse(s,0,refs,r.id);assert.equal(p.field[0].id,r.target);assert.equal(g.stats(p.field[0]).atk,g.soulById.get(r.target).atk+(r.special?20:0));}
assert.equal(data.recipes.filter(r=>r.id.startsWith('BALLOON-')).length,10);
assert.equal(pieceStarters.length,11);
for(const starter of pieceStarters){const ids=pieceStarterDeck(starter.id);assert.ok(g.validateSoulDeck(ids,freshProfile.owned).valid,starter.id);assert.ok(ids.every(id=>g.soulById.get(id).collection==='main'));for(const id of new Set(ids))assert.ok(ids.filter(x=>x===id).length<=OWN_CAP[g.soulById.get(id).rarity],starter.id+' '+id);
 const reachable=new Set(ids.filter(id=>g.soulById.get(id).soulClass==='seed'));
 for(const kind of ['middle','mob'])for(const id of new Set(ids.filter(id=>g.soulById.get(id).soulClass===kind))){assert.ok(catalog.recipes.some(r=>r.target===id&&!r.special&&r.materials.every(m=>[...reachable].some(fid=>g.soulById.get(fid).soulClass===r.fromClass&&matches(g.soulById.get(fid),m)))),starter.id+' unreachable '+id);reachable.add(id);}
 // Exercise the highest available stage with concrete copies; the mouth deck has only a Middle reserve.
 const chain=g.createSoulBattle([ids,ids],undefined,{random:()=>.999999}),cp=chain.players[0];cp.hand=ids.filter(id=>g.soulById.get(id).soulClass==='seed');cp.deck=[];cp.handBonuses=[];
 const own=countIds(ids),highest=cp.reserve.some(id=>g.soulById.get(id).soulClass==='mob')?'mob':'middle';assert.equal(highest,['materials-mouth','materials-retro'].includes(starter.id)?'middle':'mob');let plan;for(const id of cp.reserve.filter(id=>g.soulById.get(id).soulClass===highest)){plan=fusionRecommendations(id,own,ids)[0];if(plan)break;}assert.ok(plan,starter.id+' concrete route');
 for(const step of plan.steps){const used=new Set(),refs=step.materials.map(id=>{const existing=cp.field.find(f=>f?.id===id&&!used.has(f.uid));if(existing){used.add(existing.uid);return existing.uid;}const index=cp.hand.indexOf(id);assert.ok(index>=0,starter.id+' material '+id);const uid=g.summon(chain,0,index,cp.field.indexOf(null)).uid;used.add(uid);return uid;});const recipe=g.fusionOptions(chain,0,refs).find(r=>r.target===step.target&&!!r.special===!!step.special);assert.ok(recipe);g.fuse(chain,0,refs,recipe.id);}assert.ok(cp.field.some(f=>f?.id===plan.steps.at(-1).target));
 // Play actual engine turns with the CPU using this exact starter. Both sides use finite legal decks.
 const s=g.createSoulBattle([ids,ids],undefined,{random:()=>.4});
 for(let turn=0;turn<120&&s.winner===null;turn++){
  const side=s.active,p=s.players[side];if(side===1)g.cpuMain(s);else while(p.field.includes(null)&&p.hand.some((_,i)=>g.canSummonHand(s,0,i)))g.summon(s,0,p.hand.findIndex((_,i)=>g.canSummonHand(s,0,i)),p.field.indexOf(null));
  resolve(s);if(s.winner!==null)break;if(!g.canBeginBattle(s,side)){g.endTurn(s,side);continue;}g.beginBattle(s,side);
  for(let step=0;step<30&&s.winner===null;step++){let pair=null;for(const a of p.field.filter(Boolean))for(const d of s.players[1-side].field.filter(Boolean))if(!pair&&g.canAttack(s,side,a,d))pair=[a,d];if(!pair)break;g.attack(s,side,pair[0].uid,pair[1].uid);resolve(s);}if(s.winner===null)g.endTurn(s,side);
 }assert.notEqual(s.winner,null,'CPU did not finish '+starter.id);
}
for(const difficulty of ['easy','normal','hard'])for(const value of [0,.2,.5,.999999]){const enemy=selectCpuStarter(difficulty,()=>value);assert.ok(release.starters.some(s=>s.id===enemy.id));assert.deepEqual(enemy.deck,release.starters.find(s=>s.id===enemy.id).deck);assert.ok(g.validateSoulDeck(enemy.deck).valid);}
console.log('PASS: exact 641 active IDs / 643 inventory IDs; 133 active material images and skills; original 30 supplied performances plus approved overlays; '+liveRecipes.length+' live recipes x field/hand; 11 legal starters with concrete fusion routes and completed battles; source SHA-256 and save migration preserved');

