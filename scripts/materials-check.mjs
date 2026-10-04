import {release} from '../src/game/initial-release.js';
import {revisedTexts} from '../src/data/tactical-skills.js';
import assert from 'node:assert/strict';import fs from 'node:fs';import crypto from 'node:crypto';
import data from '../src/data/materials-additions.json' with {type:'json'};
import sourceAudit from '../docs/materials-source-audit.json' with {type:'json'};
import catalog from '../src/data/soul-catalog.js';import texts from '../src/data/soul-skill-texts.js';
import {figures,byId,tags} from '../src/data/catalog.js';
import {pieceStarters,pieceStarterDeck,grantMainCollection,selectCpuStarter} from '../src/game/piece-starters.js';
import {OWN_CAP} from '../src/data/gacha.js';import * as g from '../src/game/soul-battle.js';
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
assert.equal(data.figures.length,135);assert.equal(catalog.figures.length,611);assert.equal(figures.length,625);assert.equal(new Set(figures.map(f=>f.sourceId)).size,625);assert.equal(catalog.figures.filter(f=>f.collection==='main').length,309);assert.equal(catalog.figures.filter(f=>f.collection==='collab').length,302);
assert.deepEqual(['seed','middle','mob'].map(k=>data.figures.filter(f=>f.soulClass===k).length),[117,12,6]);
for(const f of data.figures){assert.ok(byId.has(f.id));assert.ok(f.tags.every(t=>tags.some(x=>x.id===t)));assert.ok(f.tags.length<=catalog.rules.tagLimits[f.rarity]);assert.equal(texts[f.soulSkill.program],revisedTexts[f.soulSkill.program]||f.soulSkill.timingLabel+' | '+f.soulSkill.sourceText);const src=sourceAudit.images.find(r=>r.name===f.id+'.png'||f.id.startsWith('MB')&&r.name.startsWith('MOB_No.'+f.id.slice(2)+'_'));assert.equal(hash(f.image),src.hash);}
let supplied=0;for(const src of sourceAudit.sources.filter(r=>r.file.endsWith('runtime_additions.json'))){const original=JSON.parse(fs.readFileSync(src.file));for(const o of original.figures){const f=g.soulById.get(o.id);for(const k of ['id','uid','name','rarity','soulClass','attribute','attackType','role','atk','def','tags','soulSkill'])assert.deepEqual(k==='soulSkill'&&revisedTexts[f.soulSkill.program]?{...f[k],description:o[k].description,effect:o[k].effect,sourceText:o[k].sourceText}:f[k],o[k],o.id+' '+k);supplied++;}}
assert.equal(supplied,30);
for(const src of sourceAudit.sources){assert.equal(hash(src.file),src.sha256);if(src.file.endsWith('fusion_examples.json')){for(const e of JSON.parse(fs.readFileSync(src.file)).examples||[]){const r=catalog.recipes.find(r=>r.id===e.recipeId);assert.ok(r,e.recipeId);assert.equal(r.target,e.targetId);}}}
const freshProfile={owned:{}};grantMainCollection(freshProfile,{newProfile:true});assert.equal(freshProfile.pieceCollectionVersion,2);
const old={pieceCollectionVersion:1,owned:{'01':12,'16':2,'piece:049':4},soulDecks:[['16'],['piece:049'],[],[],[]],soulDeckSlot:1,diamonds:654,coins:123,rubies:88,centerId:'16',displayIds:['16'],deckPresets:[['16'],[],[],[],[]]};const original=structuredClone(old);assert.equal(grantMainCollection(old),true);for(const k of Object.keys(original).filter(k=>!['owned','pieceCollectionVersion'].includes(k)))assert.deepEqual(old[k],original[k]);for(const [id,n]of Object.entries(original.owned))assert.equal(old.owned[id],n);const migrated=structuredClone(old);assert.equal(grantMainCollection(old),false);assert.deepEqual(old,migrated);
const deck=pieceStarterDeck('piece-soldier'),fresh=()=>g.createSoulBattle([deck,deck],undefined,{random:()=>.999999});const seed=g.soulById.get('01');
function put(s,side,f,slot=0){const p={uid:++s.serial,id:f.id,attacks:0,skillTurn:-1,effects:[],attackedTargets:[],lastTarget:null,extra:0,mobFusion:false,permanentAtk:0,permanentDef:0};s.players[side].field[slot]=p;return p;}
const resolve=s=>{for(let i=0;i<10&&s.pending;i++)g.passReaction(s,1-s.pending.side);assert.equal(s.pending,null);};
for(const f of data.figures){const s=fresh(),a=put(s,0,f),b=put(s,0,seed,1),d=put(s,1,seed);s.players[0].hand=[seed.id];s.players[0].deck=[seed.id,seed.id];s.players[0].grave=[seed.id];s.players[0].destroyed=[seed.id];
 if(f.soulSkill.timing!=='own-main'){s.active=1;s.phase='battle';s.pending={kind:f.soulSkill.timing==='attack-response'?'attack':f.soulSkill.timing==='defeat-response'?'defeat':'skill',side:1,uid:d.uid,targetUid:a.uid,options:{targetUid:a.uid}};if(s.pending.kind==='skill')d.id=catalog.figures.find(x=>x.soulSkill.program===6).id;}
 assert.ok(g.canSkill(s,0,a.uid),f.id);g.useSkill(s,0,a.uid,g.cpuOptions(s,0,a.uid));resolve(s);assert.ok(s.players[0].skillUsed,f.id);
}
const matches=(f,m)=>m.id?f.id===m.id:m.tag?f.tags.includes(m.tag):f.attribute===m.attribute;
for(const src of sourceAudit.sources.filter(s=>s.file.endsWith('fusion_examples.json')))for(const e of JSON.parse(fs.readFileSync(src.file)).examples||[]){const s=fresh(),p=s.players[0],a=put(s,0,g.soulById.get(e.figureId)),b=put(s,0,g.soulById.get(e.partner.id),1);p.reserve=[e.targetId];assert.ok(g.fusionOptions(s,0,[a.uid,b.uid]).some(r=>r.id===e.recipeId),e.figureId+' source fusion '+e.recipeId);}
for(const r of data.recipes)for(const hand of [false,true]){const s=fresh(),p=s.players[0],pair=r.materials.map(m=>catalog.figures.find(f=>(r.special||f.soulClass===r.fromClass)&&matches(f,m)));assert.ok(pair.every(Boolean),r.id);const a=put(s,0,pair[0]);let refs;if(hand){p.hand=[pair[1].id];refs=[a.uid,{handIndex:0}];}else refs=[a.uid,put(s,0,pair[1],1).uid];p.reserve=[r.target];assert.ok(g.fusionOptions(s,0,refs).some(x=>x.id===r.id),r.id);g.fuse(s,0,refs,r.id);assert.equal(p.field[0].id,r.target);assert.equal(g.stats(p.field[0]).atk,g.soulById.get(r.target).atk+(r.special?20:0));}
assert.equal(data.recipes.filter(r=>r.id.startsWith('BALLOON-')).length,10);
assert.equal(pieceStarters.length,11);
for(const starter of pieceStarters){const ids=pieceStarterDeck(starter.id);assert.ok(g.validateSoulDeck(ids,freshProfile.owned).valid,starter.id);assert.ok(ids.every(id=>g.soulById.get(id).collection==='main'));for(const id of new Set(ids))assert.ok(ids.filter(x=>x===id).length<=OWN_CAP[g.soulById.get(id).rarity],starter.id+' '+id);
 const reachable=new Set(ids.filter(id=>g.soulById.get(id).soulClass==='seed'));
 for(const kind of ['middle','mob'])for(const id of new Set(ids.filter(id=>g.soulById.get(id).soulClass===kind))){assert.ok(catalog.recipes.some(r=>r.target===id&&!r.special&&r.materials.every(m=>[...reachable].some(fid=>g.soulById.get(fid).soulClass===r.fromClass&&matches(g.soulById.get(fid),m)))),starter.id+' unreachable '+id);reachable.add(id);}
 // Exercise an actual seed -> middle -> MOB chain using only copies from this deck.
 const chain=g.createSoulBattle([ids,ids],undefined,{random:()=>.999999}),cp=chain.players[0];cp.hand=ids.filter(id=>g.soulById.get(id).soulClass==='seed');cp.deck=[];cp.handBonuses=[];
 const mids=cp.reserve.filter(id=>g.soulById.get(id).soulClass==='middle');let finalRoute,pair;
 for(const r of catalog.recipes.filter(r=>!r.special&&r.fromClass==='middle'&&cp.reserve.includes(r.target))){for(let i=0;i<mids.length&&!pair;i++)for(let j=0;j<mids.length&&!pair;j++)if(i!==j&&matches(g.soulById.get(mids[i]),r.materials[0])&&matches(g.soulById.get(mids[j]),r.materials[1])){finalRoute=r;pair=[mids[i],mids[j]];}if(pair)break;}
 assert.ok(pair,starter.id+' final pair');
 for(const target of pair){let route,seedPair;for(const r of catalog.recipes.filter(r=>!r.special&&r.fromClass==='seed'&&r.target===target)){for(let i=0;i<cp.hand.length&&!seedPair;i++)for(let j=0;j<cp.hand.length&&!seedPair;j++)if(i!==j&&matches(g.soulById.get(cp.hand[i]),r.materials[0])&&matches(g.soulById.get(cp.hand[j]),r.materials[1])){route=r;seedPair=[cp.hand[i],cp.hand[j]];}if(seedPair)break;}assert.ok(seedPair,starter.id+' seed pair '+target);const a=g.summon(chain,0,cp.hand.indexOf(seedPair[0]),cp.field.indexOf(null)),b=g.summon(chain,0,cp.hand.indexOf(seedPair[1]),cp.field.indexOf(null));g.fuse(chain,0,[a.uid,b.uid],route.id);}
 g.fuse(chain,0,cp.field.filter(Boolean).map(p=>p.uid),finalRoute.id);assert.ok(cp.field.some(p=>p?.id===finalRoute.target));
 // Play actual engine turns with the CPU using this exact starter. Both sides use finite legal decks.
 const s=g.createSoulBattle([ids,ids],undefined,{random:()=>.4});
 for(let turn=0;turn<120&&s.winner===null;turn++){
  const side=s.active,p=s.players[side];if(side===1)g.cpuMain(s);else while(p.field.includes(null)&&p.hand.some((_,i)=>g.canSummonHand(s,0,i)))g.summon(s,0,p.hand.findIndex((_,i)=>g.canSummonHand(s,0,i)),p.field.indexOf(null));
  resolve(s);if(s.winner!==null)break;g.beginBattle(s,side);
  for(let step=0;step<30&&s.winner===null;step++){let pair=null;for(const a of p.field.filter(Boolean))for(const d of s.players[1-side].field.filter(Boolean))if(!pair&&g.canAttack(s,side,a,d))pair=[a,d];if(!pair)break;g.attack(s,side,pair[0].uid,pair[1].uid);resolve(s);}if(s.winner===null)g.endTurn(s,side);
 }assert.notEqual(s.winner,null,'CPU did not finish '+starter.id);
}
for(const difficulty of ['easy','normal','hard'])for(const value of [0,.2,.5,.999999]){const enemy=selectCpuStarter(difficulty,()=>value);assert.ok(release.starters.some(s=>s.id===enemy.id));assert.deepEqual(enemy.deck,release.starters.find(s=>s.id===enemy.id).deck);assert.ok(g.validateSoulDeck(enemy.deck).valid);}
console.log('PASS: 135 images/IDs/skill executions; exact 30 supplied performances; 67 recipes x field/hand; all 10 balloon pairs; 11 legal starters and completed CPU matches; version-1 save migration preserved/idempotent; 231 main/302 collab; original 207 free, BFX24 acquired separately');

