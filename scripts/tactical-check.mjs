import assert from 'node:assert/strict';
import fs from 'node:fs';import crypto from 'node:crypto';
import * as g from '../src/game/soul-battle.js';
import plans from '../src/game/soul-skill-programs.js';
import selected from '../src/data/selected-additions.json' with {type:'json'};
import {banners,poolFor} from '../src/data/gacha.js';
import {grantMainCollection} from '../src/game/piece-starters.js';
const figures=g.soulFigures,by=g.soulById,find=n=>figures.find(f=>f.soulSkill.program===n),seed=figures.find(f=>f.soulClass==='seed');
const deck=g.autoSoulDeck(Object.fromEntries(figures.map(f=>[f.id,25])));
const fresh=()=>{const s=g.createSoulBattle([deck,deck]);s.players.forEach(p=>{p.hand=[];p.handBonuses=[];});return s;};
function put(s,side,id,slot=0){const f={id,uid:++s.serial,attacks:0,skillTurn:-1,effects:[],attackedTargets:[],lastTarget:null,extra:0,mobFusion:false,permanentAtk:0,permanentDef:0};s.players[side].field[slot]=f;return f;}
const resolve=s=>{for(let i=0;i<8&&s.pending;i++)g.passReaction(s,1-s.pending.side);assert.equal(s.pending,null);};
const cast=(s,side,ref)=>{g.useSkill(s,side,ref,g.cpuOptions(s,side,ref));resolve(s);};
let count=0;const test=(n,fn)=>{fn();count++;console.log('PASS '+n);};
test('Exactly selected 24 figures, final images, rarities/classes, source hashes and gated acquisition',()=>{
 const ids=[1,7,8,9,10,11,12,13,14,15,16,19,23,27,30,33,34,35,40,42,43,45,46,50].map(n=>'BFX'+String(n).padStart(3,'0'));
 assert.deepEqual(selected.figures.map(f=>f.id),ids);assert.equal(figures.length,611);assert.equal(new Set(figures.map(f=>f.id)).size,611);
 assert.deepEqual(['SR','SSR','UR','MOB'].map(r=>selected.figures.filter(f=>f.rarity===r).length),[12,6,4,2]);assert.deepEqual(['seed','middle','mob'].map(c=>selected.figures.filter(f=>f.soulClass===c).length),[15,7,2]);
 for(const f of selected.figures){assert.ok(fs.existsSync(f.image));assert.ok(!/pixel|ドット/.test(f.image));assert.ok(plans[f.soulSkill.program]);assert.ok(f.tags.length<=({R:3,SR:5,SSR:7,UR:9,MOB:12}[f.rarity]));}
 const audit=JSON.parse(fs.readFileSync('docs/selected-assets-audit.json'));assert.ok(audit);const raw=audit.figures;for(const row of raw){const h=crypto.createHash('sha256').update(fs.readFileSync('piecefig/'+row.id+'.png')).digest('hex');assert.equal(h,row.sha256||row.hash);}
 const banner=banners.find(b=>b.id==='BFX-day');assert.ok(banner);const pool=poolFor(banner);assert.equal(pool.length,75);assert.deepEqual(pool.filter(f=>f.id.startsWith('BFX')).map(f=>f.id).sort(),ids);assert.equal(banners.length,3);
 const p={owned:{'01':12},diamonds:123,soulDecks:[['01'],[],[],[],[]],soulDeckSlot:0};grantMainCollection(p);assert.equal(p.diamonds,123);assert.deepEqual(p.soulDecks[0],['01']);for(const id of ids)assert.ok(!p.owned[id]);
});
test('All ten new programs from hand and field, both sides; costs, grave and events',()=>{
 for(let n=102;n<=111;n++)for(const side of [0,1])for(const hand of [false,true]){
  const s=fresh(),f=find(n),p=s.players[side],enemy=1-side;s.active=side;p.hand=[f.id,seed.id];p.deck=[f.id,seed.id,seed.id,seed.id];p.grave=[seed.id];p.destroyed=[seed.id];
  const ally=put(s,side,f.id),target=put(s,enemy,seed.id);p.life=300;
  const ref=hand?{handIndex:0,id:f.id}:ally.uid;
  if(n===108){s.active=enemy;s.phase='battle';s.pending={kind:'attack',side:enemy,uid:target.uid,targetUid:ally.uid};}
  if(n===109){target.id=find(17).id;s.active=enemy;s.pending={kind:'skill',side:enemy,uid:target.uid,options:{}};}
  const beforeDeck=p.deck.length,beforeGrave=p.grave.length,beforeHand=p.hand.length;
  cast(s,side,ref);assert.ok(p.skillUsed);assert.ok(s.events.some(e=>e.type==='skill'&&e.id===f.id&&e.fromHand===hand&&e.effect));
  if(hand)assert.ok(p.grave.includes(f.id));else assert.ok(p.field[0]);
  if(n===102){assert.equal(p.deck.length,beforeDeck-2);assert.equal(p.hand.length,beforeHand-(hand?1:0)-1+2);assert.equal(p.grave.length,beforeGrave+(hand?1:0)+1);}
  if(n===103){assert.equal(p.life,280);assert.equal(p.deck.length,beforeDeck-1);}
  if(n===104){assert.equal(p.destroyed.length,0);assert.ok(p.hand.includes(seed.id));}
  if(n===105){assert.deepEqual(g.stats(ally),{atk:f.atk+20,def:f.def+20});}
  if(n===106){assert.equal(s.players[enemy].life,380);assert.equal(g.stats(target).atk,seed.atk-10);}
  if(n===107){assert.equal(s.players[enemy].field[0],null);assert.ok(s.players[enemy].hand.includes(seed.id));}
  if(n===108){assert.equal(s.players[enemy].life,380);assert.ok(p.field[0]);}
  if(n===109){assert.equal(p.life,270);assert.equal(g.stats(target).atk,find(17).atk);}
  if(n===110){assert.ok(target.effects.some(e=>e.key==='fusionLock'));assert.equal(p.deck.length,beforeDeck-1);}
  if(n===111){assert.equal(p.deck.length,beforeDeck-1);assert.deepEqual(p.deck,[seed.id,seed.id,seed.id]);}
 }
});
test('Invalid/cancelled hand declarations preserve complete state; stale references rejected',()=>{
 for(const n of [102,103,104,105,106,107,110,111]){const s=fresh(),f=find(n);s.players[0].hand=[f.id];s.players[0].deck=[];s.players[0].life=20;const ref={handIndex:0,id:f.id},before=JSON.stringify(s);g.skillChoices(s,0,ref);assert.equal(JSON.stringify(s),before);assert.throws(()=>g.useSkill(s,0,ref,{targetUid:9999,deckIndex:9999,recoverIndex:9999}));assert.equal(JSON.stringify(s),before);assert.throws(()=>g.useSkill(s,0,{handIndex:0,id:'stale'}));assert.equal(JSON.stringify(s),before);}
});
test('Hand counter negates hand activation, both declared cards stay grave; no effect duplication',()=>{
 const s=fresh(),a=find(106),b=find(109),target=put(s,1,seed.id);s.players[0].hand=[a.id];s.players[1].hand=[b.id];s.players[1].deck=[seed.id];g.useSkill(s,0,{handIndex:0},{targetUid:target.uid});assert.equal(s.pending.kind,'skill');g.useSkill(s,1,{handIndex:0},{});assert.equal(s.pending,null);assert.equal(s.players[1].life,370);assert.equal(g.stats(target).atk,seed.atk);assert.ok(s.players[0].grave.includes(a.id));assert.ok(s.players[1].grave.includes(b.id));
});
test('Old hand field-dependent skills adapt without ghost instances, return cards or duplicate grave',()=>{
 for(const n of [2,14,17,38,56,93]){const s=fresh(),f=find(n),p=s.players[0];p.hand=[f.id,seed.id];p.deck=[seed.id,seed.id];const ally=put(s,0,seed.id),enemy=put(s,1,find(6).id);if(n===14)s.pending={kind:'skill',side:1,uid:enemy.uid,options:{targetUid:ally.uid}};if(n===93)s.pending={kind:'defeat',side:1,uid:enemy.uid,targetUid:ally.uid,damage:20};cast(s,0,{handIndex:0});assert.ok(p.grave.includes(f.id));if(n===17)assert.equal(g.stats(ally).atk,seed.atk+20);if(n===93){assert.equal(p.field[0],null);assert.ok(p.handBonuses.some(b=>b.def===30));}}
});
test('No movement programs remain; revised 7/30/47/91 have active tactical plans',()=>{for(const p of plans){assert.ok(!p.move);assert.ok(!p.postMove);}for(const n of [7,30,47,91]){assert.ok(!/位置|入れ替え/.test(find(n).soulSkill.description));}});
test('Same-name/series resonance conserves cards and caps at +10; explicit recipes win',()=>{
 for(const hand of [false,true]){const s=fresh(),p=s.players[0];p.reserve=[];const a=put(s,0,'piece:026');const ref=hand?(p.hand=['piece:026'],{handIndex:0}):put(s,0,'piece:026',1).uid;const r=g.fusionOptions(s,0,[a.uid,ref])[0];assert.ok(r.resonance);g.fuse(s,0,[a.uid,ref],r.id);const f=p.field[0];assert.equal(f.id,'piece:026');assert.equal(p.grave.length,1);assert.equal(g.stats(f).atk,by.get(f.id).atk+10);p.hand=['piece:026'];assert.deepEqual(g.fusionOptions(s,0,[f.uid,{handIndex:0}]),[]);}
 for(let a=26;a<=29;a++)for(let b=a;b<=29;b++){const s=fresh(),p=s.players[0];const x=put(s,0,'piece:0'+a),y=put(s,0,'piece:0'+b,1);p.reserve=[];assert.ok(g.fusionOptions(s,0,[x.uid,y.uid])[0].resonance);const r=g.recipes.find(r=>r.id===`BALLOON-0${a}-0${b}`);assert.ok(r);p.reserve=[r.target];assert.ok(!g.fusionOptions(s,0,[x.uid,y.uid]).some(r=>r.resonance));g.fuse(s,0,[x.uid,y.uid],r.id);assert.equal(p.field[0].id,r.target);assert.equal(p.grave.length,2);}
 const r=g.recipes.find(r=>r.special&&r.materials.every(m=>m.id)),s=fresh();s.players[0].reserve=[r.target];const pair=r.materials.map((m,i)=>put(s,0,m.id,i).uid);assert.equal(g.fusionOptions(s,0,pair)[0].special,true);
});
test('CPU can use a hand skill and hand response',()=>{const s=fresh();s.active=1;s.players[1].field=[0,1,2].map(i=>put(s,1,seed.id,i));s.players[1].field.forEach(f=>f.effects.push({key:'skillLock',value:true,until:99},{key:'fusionLock',value:true,until:99}));s.players[1].hand=[find(111).id];s.players[1].reserve=[];g.cpuMain(s);resolve(s);assert.ok(s.players[1].grave.includes(find(111).id));const t=fresh(),a=put(t,0,seed.id),b=put(t,1,seed.id);t.players[1].hand=[find(108).id];t.pending={kind:'attack',side:0,uid:a.uid,targetUid:b.uid};g.cpuRespond(t);assert.ok(t.players[1].grave.includes(find(108).id));assert.equal(t.players[0].life,380);});
test('Every one of 112 programs resolves from hand with valid choices',()=>{for(let n=0;n<112;n++){const s=fresh(),f=find(n),p=s.players[0];assert.ok(f,'program '+n);p.hand=[f.id,seed.id];p.deck=[seed.id,...figures.filter(x=>x.soulClass==='seed').map(x=>x.id)];p.grave=[seed.id];p.destroyed=[seed.id];const ally=put(s,0,f.id),center=put(s,0,seed.id,1),enemy=put(s,1,find(6).id);if(f.soulSkill.timing!=='own-main'){s.active=1;s.pending={kind:f.soulSkill.timing==='attack-response'?'attack':f.soulSkill.timing==='defeat-response'?'defeat':'skill',side:1,uid:enemy.uid,targetUid:ally.uid,options:{targetUid:ally.uid},damage:10};}try{cast(s,0,{handIndex:0});}catch(e){throw Error('Hand program '+n+': '+e.message,{cause:e});}assert.ok(p.grave.includes(f.id),'consumed '+n);assert.ok(p.skillUsed);}});
console.log(`PASS ${count} tactical suites`);
