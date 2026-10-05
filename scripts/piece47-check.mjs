import {familyIds} from '../src/game/family-collection.js';
import {elementIds} from '../src/game/element-collection.js';
import assert from 'node:assert/strict';
import fs from 'node:fs';import crypto from 'node:crypto';
import catalog from '../src/data/soul-catalog.js';
import {figures,byId,tags} from '../src/data/catalog.js';
import {availableAssets} from '../src/data/available-assets.js';
import {pieceFigures} from '../src/data/piece-catalog.js';
import {pieceStarters,pieceStarterDeck,grantMainCollection,applyPieceStarter} from '../src/game/piece-starters.js';
import {OWN_CAP,banners,archivedBanners,poolFor} from '../src/data/gacha.js';
import * as g from '../src/game/soul-battle.js';
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
assert.equal(pieceFigures.length,47);assert.equal(catalog.figures.length,673);assert.equal(figures.length,687);assert.equal(new Set(figures.map(f=>f.sourceId)).size,687);
assert.deepEqual(['seed','middle','mob'].map(k=>pieceFigures.filter(f=>f.soulClass===k).length),[32,11,4]);
assert.equal(catalog.figures.filter(f=>f.collection==='main').length,368);
assert.equal(catalog.figures.filter(f=>f.collection==='collab').length,305);
for(const f of pieceFigures){assert.ok(byId.has(f.id));assert.ok(availableAssets.has(f.image));assert.equal(hash(f.image),hash('追加用フィギュア/'+f.number+'.png'));assert.ok(f.tags.every(t=>tags.some(x=>x.id===t)));assert.ok(f.tags.length<=catalog.rules.tagLimits[f.rarity]);assert.ok(!/RETRO|SWEET/.test(f.id));}
const existing={owned:{'01':12,'16':2,'mq:spbossfig/35':1},diamonds:432,rubies:99,coins:456,centerId:'16',displayIds:['16'],welcomeClaimed:true,soulDecks:[['16'],['01'],[],[],[]],soulDeckSlot:1,deck:['16'],deckPresets:[['16'],[],[],[],[]],battleHistory:[{won:true}],custom:'keep'};
const before=structuredClone(existing);assert.equal(grantMainCollection(existing),true);
for(const [k,v]of Object.entries(before).filter(([k])=>k!=='owned'))assert.deepEqual(existing[k],v,k);
for(const [k,v]of Object.entries(before.owned))assert.equal(existing.owned[k],v);
const migrated=structuredClone(existing);assert.equal(grantMainCollection(existing),false);assert.deepEqual(existing,migrated);
for(const f of catalog.figures.filter(f=>f.collection==='main'&&!f.id.startsWith('BFX')&&!elementIds.has(f.id)&&!familyIds.has(f.id)&&!f.id.startsWith('NS2_')&&!['mq:figene/73','mq:figene/74','mq:figboss/44'].includes(f.id)))assert.ok(existing.owned[f.id]>=1);
const newcomer={owned:{},diamonds:0};grantMainCollection(newcomer,{newProfile:true});assert.ok(g.validateSoulDeck(newcomer.soulDecks[0],newcomer.owned).valid);assert.equal(newcomer.diamonds,0);
const deck=pieceStarterDeck(pieceStarters[0].id),fresh=()=>g.createSoulBattle([deck,deck],undefined,{random:()=>.999999});
function put(s,side,f,slot=0){const p={uid:++s.serial,id:f.id,attacks:0,skillTurn:-1,effects:[],attackedTargets:[],lastTarget:null,extra:0,mobFusion:false,permanentAtk:0,permanentDef:0};s.players[side].field[slot]=p;return p;}
const seed=g.soulById.get('01');const resolve=s=>{for(let i=0;i<8&&s.pending;i++)g.passReaction(s,1-s.pending.side);assert.equal(s.pending,null);};
for(const f of pieceFigures){const s=fresh(),a=put(s,0,f),ally=put(s,0,seed,1),d=put(s,1,seed);s.players[0].hand=[seed.id];s.players[0].deck=[seed.id,seed.id];s.players[0].grave=[seed.id];s.players[0].destroyed=[seed.id];
 if(f.soulSkill.timing!=='own-main'){s.active=1;s.phase='battle';s.pending={kind:f.soulSkill.timing==='attack-response'?'attack':'skill',side:1,uid:d.uid,targetUid:a.uid,options:{targetUid:a.uid}};if(s.pending.kind==='skill')d.id=catalog.figures.find(x=>x.soulSkill.program===6).id;}
 assert.ok(g.canSkill(s,0,a.uid),f.name);g.useSkill(s,0,a.uid,g.cpuOptions(s,0,a.uid));resolve(s);assert.ok(s.players[0].skillUsed,f.name);}
const matches=(f,m)=>m.id?f.id===m.id:m.tag?f.tags.includes(m.tag):f.attribute===m.attribute;
const additions=catalog.recipes.filter(r=>r.id.startsWith('PIECE-'));assert.equal(additions.length,19);assert.equal(additions.filter(r=>r.special).length,4);
for(const r of additions)for(const hand of [false,true]){const s=fresh(),p=s.players[0],pair=r.materials.map(m=>catalog.figures.find(f=>(r.special||f.soulClass===r.fromClass)&&matches(f,m)));assert.ok(pair.every(Boolean));const a=put(s,0,pair[0]);let refs;if(hand){p.hand=[pair[1].id];refs=[a.uid,{handIndex:0}];}else refs=[a.uid,put(s,0,pair[1],1).uid];p.reserve=[r.target];assert.ok(g.fusionOptions(s,0,refs).some(x=>x.id===r.id));g.fuse(s,0,refs,r.id);assert.equal(p.field[0].id,r.target);assert.equal(g.stats(p.field[0]).atk,g.soulById.get(r.target).atk+(r.special?20:0));}
for(const starter of pieceStarters.filter(s=>['piece-soldier','piece-boxer'].includes(s.id))){const ids=pieceStarterDeck(starter.id);assert.ok(g.validateSoulDeck(ids,existing.owned).valid);assert.ok(ids.every(id=>g.soulById.get(id).collection==='main'));for(const id of new Set(ids))assert.ok(ids.filter(x=>x===id).length<=OWN_CAP[g.soulById.get(id).rarity]);
 const reachable=new Set(ids.filter(id=>g.soulById.get(id).soulClass==='seed'));
 for(const kind of ['middle','mob'])for(const id of new Set(ids.filter(id=>g.soulById.get(id).soulClass===kind))){assert.ok(catalog.recipes.some(r=>r.target===id&&!r.special&&r.materials.every(m=>[...reachable].some(fid=>g.soulById.get(fid).soulClass===r.fromClass&&matches(g.soulById.get(fid),m)))),id);reachable.add(id);}
 // A legal seed -> middle -> MOB chain using only copies in this starter.
 const s=g.createSoulBattle([ids,ids],undefined,{random:()=>.999999});const p=s.players[0];p.hand=ids.filter(id=>g.soulById.get(id).soulClass==='seed');p.deck=[];p.handBonuses=[];
 const target=starter.id==='piece-soldier'?'piece:039':'piece:049';
 for(let n=0;n<2;n++){const r=catalog.recipes.find(r=>!r.special&&r.fromClass==='seed'&&p.reserve.includes(r.target)&&g.soulById.get(r.target).series===(starter.id==='piece-soldier'?'soldier':'boxer'));
  const indices=r.materials.map((m,j)=>p.hand.findIndex((id,i)=>matches(g.soulById.get(id),m)&&(j===0||i!==p.hand.findIndex(id=>matches(g.soulById.get(id),r.materials[0])))));
  const firstId=p.hand[indices[0]],secondId=p.hand[indices[1]];const a=g.summon(s,0,p.hand.indexOf(firstId),p.field.indexOf(null));const b=g.summon(s,0,p.hand.indexOf(secondId),p.field.indexOf(null));g.fuse(s,0,[a.uid,b.uid],r.id);
 }
 const refs=p.field.filter(Boolean).map(x=>x.uid);const r=g.fusionOptions(s,0,refs).find(r=>r.target===target);assert.ok(r);g.fuse(s,0,refs,r.id);assert.ok(p.field.some(x=>x?.id===target));
 const other=structuredClone(existing.soulDecks[0]);applyPieceStarter(existing,starter.id);assert.deepEqual(existing.soulDecks[0],other);
}
assert.equal(banners.length,3);assert.ok(archivedBanners.filter(b=>b.id!=='SELECTED-BFX').every(b=>poolFor(b).every(f=>!f.sourceId.startsWith('piece:'))));
console.log('PASS: 47 images/data/skills; 19 recipes (38 field/hand cases); 207 free main figures (including original 72); 2 legal starters and seed-middle-MOB chains; non-destructive/idempotent migration; unchanged gacha pools');
