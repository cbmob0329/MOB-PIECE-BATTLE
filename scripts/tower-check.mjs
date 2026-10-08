import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as t from '../src/game/tower.js';
import * as g from '../src/game/soul-battle.js';
import {towerStarters,towerEnemy,towerBanners,commonTowerIds,bannerUnlocked} from '../src/data/tower.js';
import {recipeMaterialClass,recipePairMatches} from '../src/game/fusion-rules.js';
import {prepareDraw,exchangeFigure} from '../src/game/gacha.js';
import {banners,poolFor,drawFigureRate} from '../src/data/gacha.js';
const fresh=()=>t.prepareTowerStartup({version:6,owned:{},diamonds:0,rubies:0,coins:0,soulDecks:[],soulDeckSlot:0});
let checks=0;function test(name,fn){fn();checks++;console.log('PASS '+name);}
test('three editable starters; one-time grant, immutable input and existing occupied slots/ownership',()=>{
 const p=fresh();assert.equal(p.diamonds,50);assert.deepEqual(t.prepareTowerStartup(p),p);assert.equal(Object.values(p.owned).reduce((a,b)=>a+b,0),135);
 for(let i=0;i<3;i++){const check=g.validateSoulDeck(p.soulDecks[i],p.owned,{profile:p,slot:i});assert.ok(check.valid);assert.deepEqual(check.counts,{seed:42,middle:3,mob:0});}
 const old={...fresh(),owned:{'01':12,'70':2},welcomeClaimed:true,diamonds:123,soulDecks:Array.from({length:5},()=>['01']),custom:{keep:1},towerProgress:undefined};const before=structuredClone(old);const n=t.prepareTowerStartup(old);assert.deepEqual(old,before);assert.equal(n.owned['01'],12);assert.equal(n.owned['70'],2);assert.equal(n.diamonds,123);assert.deepEqual(n.soulDecks,old.soulDecks);assert.deepEqual(n.custom,old.custom);
 const c=t.prepareTowerThirdDeck(p);assert.equal(c.soulDeckSlot,3);assert.ok(g.validateSoulDeck(c.soulDecks[3],c.owned,{profile:c,slot:3}).valid);assert.deepEqual(c.owned,p.owned);
});
test('three starter booster pools; later mixed pools retain legal material pairs and normalized rates',()=>{
 assert.equal(banners.length,5);assert.equal(towerBanners.filter(b=>bannerUnlocked(fresh(),b)).length,3);
 for(const b of towerBanners){const pool=poolFor(b),ids=new Set(pool.map(f=>f.sourceId));assert.equal(pool.length,b.figureIds.length);if(b.requiresClear)for(const id of commonTowerIds)assert.ok(ids.has(id));else assert.ok(pool.every(f=>!g.soulById.get(f.sourceId).retired));
 const figs=[...new Set([...ids,...Object.keys(fresh().owned)])].map(id=>g.soulById.get(id));for(const f of [...ids].map(id=>g.soulById.get(id)).filter(f=>f.soulClass!=='seed'))assert.ok(g.recipes.some(r=>r.target===f.id&&figs.some(a=>a.soulClass===recipeMaterialClass(r,g.soulById)&&figs.some(b=>b.soulClass===a.soulClass&&(a.id!==b.id||a.soulClass==='seed')&&recipePairMatches(r,[a,b])))),b.id+' unreachable '+f.id);
 for(const count of [1,10])for(let i=0;i<count;i++)assert.ok(Math.abs(pool.reduce((n,f)=>n+drawFigureRate(b,f,count,i),0)-1)<1e-9);
 }
});
test('locked draw and exchange rejected; no currency mutation; costs and guarantees unchanged',()=>{
 const p=fresh(),before=structuredClone(p);assert.ok(bannerUnlocked(p,banners[0]));assert.ok(bannerUnlocked(p,banners[1]));assert.ok(!bannerUnlocked(p,banners[3]));assert.throws(()=>prepareDraw(p,banners[3],1));assert.throws(()=>exchangeFigure({...p,rubies:999},banners[3],'01'));assert.deepEqual(p,before);
 p.towerProgress.cleared=[1,2,3,4,5];p.diamonds=100;for(const b of banners){const n=prepareDraw(p,b,10,()=>.5);assert.equal(n.diamonds,50);assert.notEqual(g.soulById.get(n.lastDraw.entries[9].id).rarity,'R');}
});
function match(p,won){const req=t.towerMatchRequest(p);const out=t.prepareTowerResult(p,req.towerToken,won);assert.throws(()=>t.prepareTowerResult(out.next,req.towerToken,won));return out.next;}
test('floor gates, first-to-two/three early stop, unique first clear reward, losses no penalty',()=>{
 let p=fresh();assert.throws(()=>t.prepareTowerStart(p,2,['slot:0']));p=t.prepareTowerStart(p,1,['slot:0']);p=match(p,true);assert.ok(p.towerProgress.active);p=match(p,true);assert.equal(p.towerProgress.active,null);assert.equal(p.coins,1000);assert.equal(p.diamonds,51);assert.throws(()=>t.towerMatchRequest(p));
 p=t.prepareTowerStart(p,1,['slot:0']);p=match(p,true);p=match(p,true);assert.equal(p.coins,1000);assert.equal(p.diamonds,51);
 p=t.prepareTowerStart(p,2,['slot:0']);p=match(p,false);p=match(p,false);assert.equal(p.coins,1000);assert.equal(p.diamonds,51);assert.deepEqual(p.towerProgress.cleared,[1]);
 p.towerProgress.cleared=[1,2,3,4];assert.throws(()=>t.prepareTowerStart(p,5,['slot:0','slot:1','starter:mix'],[0,0,0,1,2]));assert.throws(()=>t.prepareTowerStart(p,5,['slot:0','slot:0','starter:mix'],[0,1,2,0,1]));
 p=t.prepareTowerStart(p,5,['slot:0','slot:1','starter:mix'],[0,1,2,0,1]);p=match(p,true);p=match(p,true);p=match(p,true);assert.equal(p.towerProgress.last.wins,3);assert.equal(p.towerProgress.last.losses,0);assert.equal(p.towerProgress.active,null);assert.ok(bannerUnlocked(p,banners[1]));assert.ok(bannerUnlocked(p,banners[2]));
});
test('reload and edited saved decks do not alter locked series snapshots; stale token rejected',()=>{
 let p=fresh();p.towerProgress.cleared=[1,2,3,4];p=t.prepareTowerStart(p,5,['slot:0','slot:1','starter:mix'],[0,1,2,0,1]);const req=t.towerMatchRequest(p);p=JSON.parse(JSON.stringify(p));p.soulDecks[0]=[];assert.deepEqual(t.towerMatchRequest(p),req);p=match(p,true);assert.equal(t.towerMatchRequest(p).seriesLabel,'5F · MATCH 2 / 5 · 1 − 0');const n=t.prepareTowerAbandon(p);assert.equal(n.towerProgress.active,null);assert.deepEqual(n.owned,p.owned);
});
const battleReports=[];
test('all five grass enemies legal, no fig exceptions or passives, F strengthens rarely without evolving or using skills, 50 real battles finish',()=>{
 for(let floor=1;floor<=5;floor++){const e=towerEnemy(floor),allowed=new Set(e.deck);assert.ok(g.validateSoulDeck(e.deck).valid);for(const id of e.deck){assert.ok(id.startsWith('MB'));assert.equal(g.soulById.get(id).soulClass,'seed');assert.ok(!g.soulById.get(id).passive);}
 for(let seed=1;seed<=10;seed++){let n=seed;const s=g.createSoulBattle([towerStarters[seed%2].deck,e.deck],undefined,{random:()=>((n=Math.imul(n,1664525)+1013904223>>>0)/2**32)});s.cpuStrategy=e.strategy;s.cpuThemeTags=[];
 const resolve=()=>{for(let i=0;i<25&&s.pending;i++){if(s.pending.side===0)g.cpuRespond(s);else g.passReaction(s,0);}for(let i=0;i<5&&g.evolutionOptions(s).event;i++){const o=g.evolutionOptions(s);g.resolveEvolution(s,o.event.side,null);}};
 let steps=0;for(;steps<1000&&s.winner===null;steps++){resolve();if(s.winner!==null)break;if(s.active===1){if(s.phase==='main'){g.cpuMain(s);resolve();if(s.winner===null){if(g.canBeginBattle(s,1))g.beginBattle(s,1);else g.endTurn(s,1);}}else g.cpuAttack(s);}else if(s.phase==='main'){const p=s.players[0];while(p.field.includes(null)&&p.hand.some((_,i)=>g.canSummonHand(s,0,i)))g.summon(s,0,p.hand.findIndex((_,i)=>g.canSummonHand(s,0,i)),p.field.indexOf(null));if(g.canBeginBattle(s,0))g.beginBattle(s,0);else g.endTurn(s,0);}else{let pair;for(const a of s.players[0].field.filter(Boolean))for(const d of s.players[1].field.filter(Boolean))if(!pair&&g.canAttack(s,0,a,d))pair=[a,d];if(pair)g.attack(s,0,pair[0].uid,pair[1].uid);else g.endTurn(s,0);}
 const p=s.players[1];for(const id of [...p.deck,...p.hand,...p.reserve,...p.grave,...p.field.filter(Boolean).map(f=>f.id)])assert.ok(allowed.has(id),'theme leak '+id);if(floor<=2){assert.ok(!(s.cpuRankActions?.skill));assert.ok(s.events.filter(e=>e.side===1&&e.type==='fusion').every(e=>e.resonance&&g.soulById.get(e.id).soulClass==='seed'));}}
 assert.notEqual(s.winner,null,'stalled floor '+floor);battleReports.push({floor,seed,steps,winner:s.winner,reason:s.reason});}
 }
});
const storage=new Map();globalThis.localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)};const profileModule=await import('../src/game/profile.js?tower');
test('legacy save retains owned, growth, decks and archived draw; storage failure is atomic',()=>{const p={...fresh(),soulGrowth:{keep:7},lastDraw:{bannerId:'BFX-day',cue:'normal',entries:[{id:'BFX001',converted:false,isNew:false,ruby:0}],at:1}};storage.set('mob-piece-battle:profile:v1',JSON.stringify(p));const loaded=profileModule.loadProfile();for(const k of ['owned','soulGrowth','soulDecks','lastDraw','towerProgress'])assert.deepEqual(loaded[k],p[k]);const before=structuredClone(profileModule.profile);const saved=globalThis.localStorage.setItem;globalThis.localStorage.setItem=()=>{throw Error('quota');};assert.equal(profileModule.commitProfile(p),false);assert.deepEqual(profileModule.profile,before);globalThis.localStorage.setItem=saved;});
console.log('PASS '+checks+' tower suites; '+battleReports.length+' complete battles');
