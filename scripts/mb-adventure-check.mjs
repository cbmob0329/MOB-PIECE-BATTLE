import assert from 'node:assert/strict';
import data from '../src/data/mb-adventure.json' with {type:'json'};
import catalog from '../src/data/soul-catalog.js';
import {figures,byId} from '../src/data/catalog.js';
import {banners,poolFor,drawFigureRate} from '../src/data/gacha.js';
import {prepareTowerStartup} from '../src/game/tower.js';
import {prepareInitialChoice} from '../src/game/initial-release.js';
import {validateSoulDeck,soulById,createSoulBattle} from '../src/game/soul-battle.js';
import {campaignTowers,campaignEnemy} from '../src/data/tower-campaign.js';
import {prepareCampaignStart,prepareCampaignResult,campaignMatchRequest} from '../src/game/tower-campaign.js';
import {grantTowerFigures} from '../src/game/tower-figure-rewards.js';
import {masterDialogue} from '../src/data/tower-master-dialogue.js';
import {prepareDraw} from '../src/game/gacha.js';
for(const id of data.removedIds){assert(!byId.has(id),id);assert(!soulById.has(id));assert(!catalog.recipes.some(r=>r.target===id||r.materials.some(m=>m.id===id)));}
for(const group of data.groups){const fs=data.figures.filter(f=>f.series===group.name);for(const [stage,count]of [['seed',20],['middle',6],['mob',3]])assert.equal(fs.filter(f=>f.soulClass===stage).length,count);assert.deepEqual(group.waves.map(w=>w.length),[13,8,8]);assert.equal(new Set(group.waves.flat()).size,29);for(const f of fs.filter(f=>f.soulClass!=='seed')){const rs=catalog.recipes.filter(r=>r.target===f.id);assert(rs.length>=1&&rs.length<=2);for(const r of rs)for(const m of r.materials)if(m.id)assert(soulById.get(m.id).releaseWave<=f.releaseWave,f.id+' future material');}}
for(const s of data.starters){let p=prepareTowerStartup({owned:{},diamonds:0,coins:0});assert.deepEqual(p.owned,{});p=prepareInitialChoice(p,s.id);assert(validateSoulDeck(s.deck,p.owned).valid);assert.equal(p.diamonds,50);assert.throws(()=>prepareInitialChoice(p,s.id));assert.equal(p.soulDecks[0].length,45);p.soulDecks[1]=[...s.deck];assert(validateSoulDeck(s.deck,p.owned,{profile:p,slot:1}).valid);createSoulBattle([s.deck,s.deck]);}
for(const b of banners){const pool=poolFor(b);assert(pool.every(f=>!f.pending));for(const [n,i]of [[1,0],[10,0],[10,9]])assert(Math.abs(pool.reduce((v,f)=>v+drawFigureRate(b,f,n,i),0)-1)<1e-9);if(b.category==='adventure')assert.equal(pool.filter(f=>!b.puniIds.includes(f.sourceId)).length,13);let x=42;const rng=()=>((x=(1664525*x+1013904223)>>>0)/2**32);let p={owned:{},diamonds:5000};for(let i=0;i<20;i++){p=prepareDraw(p,b,10,rng);assert(p.lastDraw.entries.every(e=>pool.some(f=>f.sourceId===e.id)));}}
let p=prepareInitialChoice(prepareTowerStartup({owned:{},diamonds:0,coins:0}),data.starters[0].id);p=prepareCampaignStart(p,1,['slot:0'],null,0);const req=campaignMatchRequest(p),out=prepareCampaignResult(p,req.towerToken,true);assert.equal(out.reward.figures.length,1);assert(req.enemy.deck.includes(out.reward.figures[0].id));assert.equal(soulById.get(out.reward.figures[0].id).soulClass,'seed');assert.throws(()=>prepareCampaignResult(out.next,req.towerToken,true));
for(const tower of campaignTowers){const e=campaignEnemy(tower,5);assert(validateSoulDeck(e.deck).valid,tower.id);const reward=grantTowerFigures({owned:{}},e,{master:true,rng:()=>0});assert.equal(reward.length,2,tower.id+' master rewards');assert(reward.every(f=>e.deck.includes(f.id)));assert(masterDialogue(tower.id)&&masterDialogue(tower.id,true)&&masterDialogue(tower.id,false));}
console.log('PASS MB 87 figures, three 13/8/8 releases, starter once, shared saved decks, gacha probabilities/draws, deleted IDs, reachable recipes, 19 master decks/rewards/dialogues, result token idempotence.');
