import assert from 'node:assert/strict';
import {figures,byId,tags} from '../src/data/catalog.js';
import {banners,poolFor,mainPickupFor,RARITY_RANK,drawFigureRate} from '../src/data/gacha.js';
import {drawMode,prepareDraw} from '../src/game/gacha.js';
import {adjacencyPairs,applyAdjacency,soulSpec,soulClauses,applySoulText,activateSouls,eligibleSouls} from '../src/game/figure-skills.js';
const current={towerProgress:{cleared:[1,2,3,4,5]},version:6,diamonds:100,rubies:0,owned:{},testMode:true};
const modes={normal:0,pickup:0,allSSR:0};
for(let i=0;i<100000;i++)modes[drawMode((i+.5)/100000)]++;
assert.deepEqual(modes,{normal:97900,pickup:2000,allSSR:100});
assert.equal(drawMode(.001),'pickup');assert.equal(drawMode(.021),'normal');
for(const b of banners)for(const count of [1,10]){
 for(const [roll,cue] of [[0,'allSSR'],[.001,'pickup'],[.020999,'pickup'],[.021,'normal']]){
  let first=true;const rng=()=>{if(first){first=false;return roll;}return .2;};
  const next=prepareDraw(current,b,count,rng),rows=next.lastDraw.entries.map(e=>byId.get(e.id));
  if(cue!=='normal')assert.equal(next.lastDraw.cue,cue);
  if(cue==='allSSR')assert.ok(rows.every(f=>RARITY_RANK[f.rarity]>=3));
  if(cue==='pickup')assert.equal(rows.at(-1).sourceId,mainPickupFor(b).sourceId);
  if(next.lastDraw.cue==='ssr')assert.ok(rows.some(f=>RARITY_RANK[f.rarity]>=3));
  assert.equal(next.diamonds,100-count*5);
 }
 for(let slot=0;slot<count;slot++)assert.ok(Math.abs(poolFor(b).reduce((n,f)=>n+drawFigureRate(b,f,count,slot),0)-1)<1e-10);
}
assert.deepEqual(current.owned,{});
const mk=(id,index=0)=>({id,index,f:byId.get(id),hp:100,maxHp:100,atk:100,def:100,spd:100});
const hand=['01','02','03','04','05'],pair=adjacencyPairs(hand,byId,tags);
assert.equal(pair.length,4);assert.equal(pair[0].auraTag,'01');
const linked=applyAdjacency(hand.map(mk),hand,byId,tags);
assert.equal(linked[0].atk,250);assert.equal(linked[1].atk,280);assert.equal(linked[0].maxHp,220);
const own=hand.map(mk),enemy=hand.map(mk);
applySoulText(own[0],own,enemy,'敵全体のDEFを20%ダウンさせ、味方全体のATKとSPDを10%アップする');
assert.equal(enemy[4].def,80);assert.equal(own[4].atk,110);assert.equal(own[4].spd,110);assert.equal(own[4].def,100);
applySoulText(own[0],own,enemy,'センターフィギュアの全ステータスを10%アップ');
assert.equal(own[2].maxHp,110);assert.equal(own[0].maxHp,100);
applySoulText(own[0],own,enemy,'センターの敵のHPを10%ダウン',2,4);
assert.equal(enemy[4].hp,90);assert.equal(enemy[4].maxHp,100);assert.equal(enemy[2].hp,100);
for(const f of figures.filter(f=>!f.pending))for(const spec of Object.values(f.pieceSoul||{})){
 const changes=applySoulText(mk(f.sourceId),hand.map(mk),hand.map(mk),spec.text);
 assert.ok(changes.length, f.name+': unhandled '+spec.text);
 for(const clause of soulClauses(spec.text))assert.match(clause,/(HP|LIFE|ATK|DEF|SPD).*[\d.]%.*(アップ|ダウン)/,f.name+': '+clause);
}
const testTags=[{id:'23',questPieceTwo:'SOUL獲得量+1',questPieceThree:'SOUL獲得量+2 & フィギュアスキルの数値効果+10%'}];
const testMap=new Map([['a',{tags:['23']}],['b',{tags:['23']}],['c',{tags:['23']}]]);
const spec=soulSpec({tags:['23','x','y'],pieceSoul:{5:{name:'test',text:'味方全体のATKを10%アップ'}}},['a','b','c'],testMap,testTags);
assert.equal(spec.count,5);assert.equal(spec.text,'味方全体のATKを11%アップ');
assert.equal(soulSpec({tags:['x']},['a','b','c'],testMap,testTags).count,1);
const match={cCenter:2},p=hand.map(mk),c=hand.map(mk);
assert.equal(activateSouls(match,'player',p,p,c,hand,byId,tags).length,2);
assert.equal(activateSouls(match,'player',p.slice(0,2),p,c,hand,byId,tags).length,0);
assert.equal(eligibleSouls([mk('01'),mk('01')]).length,1);
let saved=JSON.stringify({...current,owned:{'01':25},bannerId:banners.at(-1).id,lastDraw:{bannerId:banners.at(-1).id,cue:'allSSR',entries:[{id:'01',ruby:0,converted:false,isNew:false}]}});
globalThis.localStorage={getItem:()=>saved,setItem:(_,v)=>{saved=v;}};
const {loadProfile}=await import('../src/game/profile.js');
let profile=loadProfile();assert.equal(profile.owned['01'],25);assert.equal(profile.bannerId,banners.at(-1).id);assert.equal(profile.lastDraw.cue,'allSSR');
saved=JSON.stringify({...profile,testMode:false});assert.equal(loadProfile().owned['01'],15);
console.log('PASS: exact 2%/0.1% intervals, all-banner guarantees/odds, adjacency, all SOUL clauses, scope/tier/boost/once-per-match, test inventory persistence');
