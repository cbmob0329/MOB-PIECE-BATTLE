import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as g from '../src/game/soul-battle.js';
import {bindBattle} from '../src/game/oct06-passives.js';
import {dorayakiDecks} from '../src/data/dorayaki-test-decks.js';
const figures=g.soulFigures.filter(f=>f.id.startsWith('DORA_'));
assert.equal(new Set(figures.map(f=>f.name)).size,39);assert(figures.every(f=>f.name.startsWith('モブ')));
const fresh=()=>{const s=g.createSoulBattle(dorayakiDecks.map(d=>d.deck));s.turn=5;s.active=0;s.phase='main';s.pending=null;for(const p of s.players){p.field=[null,null,null];p.hand=[];p.handBonuses=[];p.life=400;p.deck=Array(40).fill('01');}return s;};
const put=(s,side,id,slot)=>s.players[side].field[slot]={id,uid:++s.serial,summonTurn:1,attacks:0,skillTurn:-1,skillUsesUsed:0,effects:[],attackedTargets:[],lastTarget:null,extra:0,permanentAtk:0,permanentDef:0};
for(const side of [0,1])for(const [id,allyId,key,bonus]of [['024','DORA_005','atk',10],['025','DORA_005','def',15],['031','DORA_001','atk',10],['031','DORA_001','def',10]]){
 const s=fresh(),source=put(s,side,'DORA_'+id,0),ally=put(s,side,allyId,1),foe=put(s,1-side,allyId,0);bindBattle(s,g.soulById);
 assert.equal(g.stats(ally)[key],g.soulById.get(allyId)[key]+bonus);assert.equal(g.stats(source)[key],g.soulById.get(source.id)[key]);assert.equal(g.stats(foe)[key],g.soulById.get(allyId)[key]);
 source.passiveLost=true;assert.equal(g.stats(ally)[key],g.soulById.get(allyId)[key]);source.passiveLost=false;s.players[side].field[0]=null;assert.equal(g.stats(ally)[key],g.soulById.get(allyId)[key]);
}
for(const side of [0,1]){
 const s=fresh();s.active=side;const caster=put(s,side,'DORA_026',0);put(s,1-side,'DORA_018',0);bindBattle(s,g.soulById);g.useSkill(s,side,caster.uid,g.cpuOptions(s,side,caster.uid));while(s.pending)g.passReaction(s,1-s.pending.side);assert.equal(caster.permanentAtk,10);
 const a=fresh();a.active=side;a.phase='battle';const attacker=put(a,side,'DORA_027',0),target=put(a,1-side,'DORA_018',0);bindBattle(a,g.soulById);g.attack(a,side,attacker.uid,target.uid);while(a.pending)g.passReaction(a,1-a.pending.side);assert.equal(attacker.permanentAtk,10);assert.equal(attacker.permanentDef,5);
}
const editor='編集アプリ/MOB-PIECE-Editor/',snap=JSON.parse(fs.readFileSync(editor+'editor-current-snapshot.json')).data,ctx={window:{}};vm.runInNewContext(fs.readFileSync(editor+'data.js','utf8'),ctx);assert.equal(JSON.stringify(ctx.window.MPB_DATA),JSON.stringify(snap));
for(const f of figures){const r=snap.records.find(x=>x.id===f.id);for(const k of ['name','atk','def'])assert.equal(r[k],f[k]);assert.deepEqual(r.summon.passive,f.passive);assert.equal(r.skill.description,f.soulSkill.description);assert(fs.existsSync(editor+snap.images[f.id]));}
const manifest=JSON.parse(fs.readFileSync('artifacts/dorayaki-final-20261025/manifest.json'));assert.equal(manifest.assets.length,24);for(const a of manifest.assets){const expected=fs.readFileSync(a.path);for(const folder of ['新フィギュア/どら焼き/','public/assets/figures/dorayaki/'])assert(expected.equals(fs.readFileSync(folder+a.id+'.png')));}
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
fs.writeFileSync('artifacts/dorayaki-final-20261025/一覧.html',`<!doctype html><html lang="ja"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>どら焼きシリーズ 最新一覧</title><style>body{background:#131b2b;color:#f6f0df;font:16px/1.7 sans-serif;margin:24px}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}article{background:#202d43;padding:18px;border-radius:16px}img{width:100%;height:300px;object-fit:contain}h2{font-size:21px;margin:8px 0}small{color:#b6c9df}p{white-space:pre-line}strong{color:#ffda89}</style><h1>どら焼きシリーズ・全39体</h1><p>砂漠23体／海底16体。ATK・DEFは素の数値です。MOBソウルフュージョン強化は別途加算されます。</p><main>${figures.map(f=>`<article><small>${f.number} · ${esc(f.series)}</small><img src="../../public/${f.image}" alt="${esc(f.name)}"><h2>${esc(f.name)}</h2><strong>${f.rarity}／${f.soulClass}／${f.attribute}　ATK ${f.atk}・DEF ${f.def}</strong><p><b>${esc(f.soulSkill.name)}</b><br>${esc(f.soulSkill.description)}</p></article>`).join('')}</main></html>`);
console.log('PASS 5 MOB passives on both sides, aura exclusion/removal/suppression, actual skill/attack growth, all 39 game-editor records and 24 installed images.');
