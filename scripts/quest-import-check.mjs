import assert from 'node:assert/strict';
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import {figures,byId,tags} from '../src/data/catalog.js';
import {banners,poolFor,RUBY_COST,OWN_CAP} from '../src/data/gacha.js';
import {exchangeFigure} from '../src/game/gacha.js';
const old=JSON.parse(execFileSync('git',['show','HEAD:src/data/figures_master_v170.json'],{encoding:'utf8'}));
for(const f of old){const next=byId.get(f.sourceId);assert.equal(next.image,f.image);assert.equal(next.dexNo,f.dexNo);assert.deepEqual(next.mobPiece,f.mobPiece);}
assert.equal(figures.length,643);assert.equal(banners.length,5);
assert.equal(new Set(figures.map(f=>f.image)).size,figures.length);
for(const f of figures.filter(f=>!f.pending)){assert.ok(fs.existsSync(f.image),f.image);assert.ok(f.tags.every(id=>tags.some(t=>t.id===id)));}
for(const b of banners){if(b.image)assert.ok(fs.existsSync(b.image),b.image);else assert.ok(b.featuredIds.every(id=>fs.existsSync(byId.get(id).image)));assert.ok(poolFor(b).length>=25,b.id);for(const image of b.pickup||[])assert.ok(poolFor(b).some(f=>f.image===image),`${b.id}: ${image}`);}
const b=banners[0],f=poolFor(b)[0],profile={rubies:500,diamonds:100,owned:{},deck:['01']};
const next=exchangeFigure(profile,b,f.sourceId);assert.equal(next.rubies,500-RUBY_COST[f.rarity]);assert.equal(next.owned[f.sourceId],1);assert.equal(next.diamonds,100);assert.deepEqual(next.deck,profile.deck);assert.deepEqual(profile.owned,{});assert.equal(profile.rubies,500);
assert.throws(()=>exchangeFigure({...profile,rubies:0},b,f.sourceId),/足りません/);
assert.throws(()=>exchangeFigure({...profile,owned:{[f.sourceId]:OWN_CAP[f.rarity]}},b,f.sourceId),/所持上限/);
assert.throws(()=>exchangeFigure(profile,b,'not-in-pool'),/対象/);
console.log('PASS: saved IDs/stats preserved, 625 inventory entries, 4 active banners, assets/pickups, atomic ruby exchange and boundaries');
