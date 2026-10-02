import assert from 'node:assert/strict';
import fs from 'node:fs';
import c from '../src/data/soul-catalog.js';
import {soulFigures as figures,soulById as byId,validateSoulDeck,autoSoulDeck,createSoulBattle,summon,fusionOptions,fuse,canSkill,useSkill,beginBattle,attack,endTurn,cpuMain,cpuAttack,stats} from '../src/game/soul-battle.js';
let passed=0;const test=(name,fn)=>{fn();passed++;console.log('PASS '+name);};
const owned=Object.fromEntries(figures.map(f=>[f.id,25])),auto=autoSoulDeck(owned);
const seed=figures.find(f=>f.soulClass==='seed'&&f.attribute==='無'&&f.soulSkill.effects[0].type==='boost'),middle=figures.find(f=>f.soulClass==='middle'&&f.attribute==='無'),mob=figures.find(f=>f.soulClass==='mob'&&f.attribute==='無');
const deck=(s=seed,m=middle,b=mob)=>[...Array(30).fill(s.id),...Array(10).fill(m.id),...Array(5).fill(b.id)];
const fresh=()=>createSoulBattle([deck(),deck()]);
const two=s=>{summon(s,0,0,0);summon(s,0,0,1);return s.players[0].field.filter(Boolean).map(f=>f.uid);};
test('全327体：原典レア度、固定範囲、タグ上限、画像、スキル根拠',()=>{assert.equal(figures.length,327);assert.equal(new Set(figures.map(f=>f.id)).size,327);for(const f of figures){assert.equal(f.rarity,f.source.rarity);const [lo,hi]=c.bounds[f.soulClass][f.rarity];for(const n of [f.atk,f.def])assert.ok(Number.isInteger(n)&&n>=lo&&n<=hi);assert.ok(f.tags.length<=({R:3,SR:5,SSR:7,UR:9,MOB:12}[f.rarity]));assert.ok(fs.existsSync(f.image));assert.ok(f.soulSkill.sourceText);assert.ok(f.source.statsText||f.source.traitText||f.source.soul);}});
test('レア度と階級を分離：URシード、MOBレアのシードも存在',()=>{assert.ok(figures.some(f=>f.rarity==='UR'&&f.soulClass==='seed'));assert.ok(figures.some(f=>f.rarity==='MOB'&&f.soulClass==='seed'));});
test('45体・階級別枚数・所持数を検証',()=>{assert.equal(validateSoulDeck(auto,owned).valid,true);assert.equal(validateSoulDeck(auto.slice(1)).valid,false);assert.equal(validateSoulDeck(deck(),{}).valid,false);assert.equal(validateSoulDeck(Array(45).fill(seed.id)).valid,false);});
test('通常山札はシードだけ。初回手札5、ライフ400、専用領域15',()=>{const s=fresh();assert.equal(s.players[0].hand.length,5);assert.equal(s.players[0].deck.length,25);assert.equal(s.players[0].reserve.length,15);assert.deepEqual(s.players.map(p=>p.life),[400,400]);assert.ok(s.players[0].deck.every(id=>byId.get(id).soulClass==='seed'));});
test('召喚は3枠まで。融合で空けた枠には同一ターンに再召喚可能',()=>{const s=fresh(),uids=two(s);summon(s,0,0,2);assert.throws(()=>summon(s,0,0,2));const r=fusionOptions(s,0,uids)[0];assert.ok(r);fuse(s,0,uids,r.id);assert.equal(s.players[0].field.filter(Boolean).length,2);summon(s,0,0,s.players[0].field.indexOf(null));assert.equal(s.players[0].field.filter(Boolean).length,3);});
test('スキル使用者の融合禁止・1ターン合計1回',()=>{const s=fresh(),uids=two(s);useSkill(s,0,uids[0]);assert.equal(fusionOptions(s,0,uids).length,0);assert.throws(()=>useSkill(s,0,uids[1]));assert.equal(s.players[0].field[0].skillTurn,s.turn);});
test('2段階フュージョン・素材墓地・専用領域消費',()=>{const s=fresh();let uids=two(s);fuse(s,0,uids,fusionOptions(s,0,uids)[0].id);summon(s,0,0,1);summon(s,0,0,2);uids=[s.players[0].field[1].uid,s.players[0].field[2].uid];fuse(s,0,uids,fusionOptions(s,0,uids)[0].id);uids=s.players[0].field.filter(Boolean).map(f=>f.uid);const r=fusionOptions(s,0,uids)[0];assert.ok(r);fuse(s,0,uids,r.id);assert.equal(byId.get(s.players[0].field.find(Boolean).id).soulClass,'mob');assert.equal(s.players[0].grave.length,6);assert.equal(s.players[0].reserve.length,12);});
test('バトル移行後の召喚・スキル・融合・メイン戻り禁止',()=>{const s=fresh(),uids=two(s),r=fusionOptions(s,0,uids)[0];beginBattle(s,0);assert.throws(()=>summon(s,0,0,2));assert.throws(()=>useSkill(s,0,uids[0]));assert.throws(()=>fuse(s,0,uids,r.id));assert.throws(()=>beginBattle(s,0));assert.throws(()=>attack(s,0,uids[0],null));assert.equal(s.players[1].life,400);});
function readyCombat(a=seed,d=seed){const s=createSoulBattle([deck(a),deck(d)]);summon(s,0,0,0);beginBattle(s,0);endTurn(s,0);summon(s,1,0,0);beginBattle(s,1);endTurn(s,1);return s;}
test('ATK>DEFのみ撃破と差分ダメージ。攻撃は1体1回',()=>{const a=figures.find(f=>f.soulClass==='seed'&&f.atk>=180),d=figures.find(f=>f.soulClass==='seed'&&f.def<=80),s=readyCombat(a,d);beginBattle(s,0);attack(s,0,s.players[0].field[0].uid,s.players[1].field[0].uid);assert.equal(s.players[1].life,400-a.atk+d.def);assert.equal(s.players[1].field[0],null);assert.equal(s.players[0].field[0].attacks,1);assert.throws(()=>attack(s,0,s.players[0].field[0].uid,null));});
test('ATK=DEF以下は両者残存、ライフダメージなし',()=>{const a=figures.find(f=>f.soulClass==='seed'&&f.atk<=70),d=figures.find(f=>f.soulClass==='seed'&&f.def>=150),s=readyCombat(a,d);beginBattle(s,0);attack(s,0,s.players[0].field[0].uid,s.players[1].field[0].uid);assert.equal(s.players[1].life,400);assert.ok(s.players[1].field[0]);assert.throws(()=>attack(s,0,s.players[0].field[0].uid,s.players[1].field[0].uid));});
test('相手メインで防御スキル使用、両者独立の権利、次ターンリセット',()=>{const f=figures.find(f=>f.soulClass==='seed'&&f.soulSkill.timing==='either-main'),s=readyCombat(seed,f),uid=s.players[1].field[0].uid;assert.ok(canSkill(s,1,uid));useSkill(s,1,uid);assert.ok(!canSkill(s,1,uid));assert.ok(canSkill(s,0,s.players[0].field[0].uid));beginBattle(s,0);assert.ok(!canSkill(s,0,s.players[0].field[0].uid));endTurn(s,0);assert.ok(!s.players[1].skillUsed);});
test('手札補充枚数と山札切れ敗北（不要な補充なし）',()=>{const s=fresh();s.players[0].deck=[];beginBattle(s,0);endTurn(s,0);beginBattle(s,1);endTurn(s,1);assert.equal(s.winner,null);summon(s,0,0,0);beginBattle(s,0);endTurn(s,0);beginBattle(s,1);endTurn(s,1);assert.equal(s.winner,1);assert.equal(s.reason,'山札切れ');});
test('すべての非シードに実行可能な素材レシピがある',()=>{for(const f of figures.filter(f=>f.soulClass!=='seed')){const rs=c.recipes.filter(r=>r.target===f.id);assert.ok(rs.length);assert.ok(rs.some(r=>r.materials.every(m=>figures.some(g=>g.soulClass===r.fromClass&&(m.id?g.id===m.id:m.tag?g.tags.includes(m.tag):g.attribute===m.attribute)))));}});
test('同じデッキ・操作は同じ結果。CPUも手動と同じルールを通る',()=>{const run=()=>{const s=createSoulBattle([auto,auto]);for(let t=0;t<8&&s.winner===null;t++){if(s.active===0){while(s.players[0].hand.length&&s.players[0].field.includes(null))summon(s,0,0,s.players[0].field.indexOf(null));beginBattle(s,0);for(const a of s.players[0].field.filter(Boolean)){const d=s.players[1].field.find(Boolean);if(d&&s.winner===null)attack(s,0,a.uid,d.uid);}if(s.winner===null)endTurn(s,0);}else{cpuMain(s);beginBattle(s,1);for(let i=0;i<10&&s.active===1&&s.winner===null;i++)cpuAttack(s);}}return s;};assert.deepEqual(run(),run());});
test('CPUは融合後の空き枠が残ってもスキル判断できる',()=>{const s=fresh();beginBattle(s,0);endTurn(s,0);s.players[1].hand=s.players[1].hand.slice(0,2);assert.doesNotThrow(()=>cpuMain(s));assert.ok(s.players[1].field.includes(null));});
test('連続攻撃・全体攻撃・回避・復帰は確定効果、ライフ上限400',()=>{
 for(const type of ['extraAttack','sweep','evade','revive','heal']){
  const f=figures.find(f=>f.soulClass==='seed'&&f.soulSkill.effects[0].type===type);assert.ok(f,type);
  const s=readyCombat(f,seed),caster=s.players[0].field[0];s.players[0].life=390;useSkill(s,0,caster.uid);
  if(type==='heal')assert.equal(s.players[0].life,400);
  else assert.equal(caster[type==='extraAttack'?'extra':type],1);
 }
});
test('ライフ400から実際に最後まで対戦、勝敗確定後は操作不可',()=>{
 const f=figures.find(f=>f.soulClass==='seed'&&f.atk>f.def+20),s=createSoulBattle([deck(f),deck(f)]);
 for(let turn=0;turn<60&&s.winner===null;turn++){
  const side=s.active,p=s.players[side];while(p.hand.length&&p.field.includes(null))summon(s,side,0,p.field.indexOf(null));beginBattle(s,side);
  for(const a of p.field.filter(Boolean)){const d=s.players[1-side].field.find(Boolean);if(d&&s.winner===null)attack(s,side,a.uid,d.uid);}
  if(s.winner===null)endTurn(s,side);
 }
 assert.notEqual(s.winner,null);assert.equal(s.phase,'finished');assert.throws(()=>beginBattle(s,s.active));assert.throws(()=>summon(s,s.active,0,0));
});
test('原典翻訳：MP25回復を25回攻撃と誤認せず、攻撃支援を保持',()=>{for(const image of ['fig/11.png','fig/12.png','fig/14.png'])assert.notEqual(figures.find(f=>f.image===image).soulSkill.effects[0].type,'extraAttack');assert.equal(figures.find(f=>f.image==='fig/21.png').soulSkill.effects[0].type,'boost');for(const f of figures.filter(f=>f.image.startsWith('figplay/')&&f.source.actor))assert.equal(f.source.actor.category,'party');});
console.log(passed+' soul checks passed');
