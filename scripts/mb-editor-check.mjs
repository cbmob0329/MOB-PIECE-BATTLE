import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import data from '../src/data/mb-adventure.json' with {type:'json'};
import {cleanRemovedMb} from '../src/game/mb-profile-migration.js';
const dir='編集アプリ/MOB-PIECE-Editor',context=vm.createContext({});
context.window=context;
for(const file of ['data.js','core.js','sync-core.js','workshop-core.js'])vm.runInContext(fs.readFileSync(dir+'/'+file,'utf8'),context);
const parsed=context.MPB_CORE.parseSource(fs.readFileSync(dir+'/editor-current-snapshot.json','utf8'));
for(const f of data.figures){const r=parsed.records.find(r=>r.id===f.id);assert(r,f.id);assert.equal(r.name,f.name);assert.equal(r.atk,f.atk);assert.equal(r.def,f.def);assert.equal(r.series2||'',f.series2||'');assert(fs.existsSync(f.image),f.image);assert(fs.existsSync(dir+'/'+parsed.images[f.id]),f.id+' editor image');}
for(const id of data.removedIds){assert(!parsed.records.some(r=>r.id===id));assert(!parsed.images[id]);assert(parsed.removedIds.includes(id));for(const t of Object.values(parsed.workshop.towers))for(const f of t.floors)assert(f.opponents.every(e=>!e.deck.includes(id)));}
for(const group of data.groups){const records=parsed.records.filter(r=>r.series===group.name);assert.equal(records.length,29,group.name);assert(parsed.groups.includes(group.name));assert(records.every(r=>!r.series2));}
assert(!parsed.records.some(r=>r.series==='モブくんの大冒険'));
assert.equal(Object.keys(parsed.workshop.banners).length,10);
const p={owned:{MB017:2,'01':3},figurePlus:{MB017:[1,0]},soulDecks:[['MB017','01']],towerCampaign:{active:{enemy:{deck:['MB017']},decks:[]},regions:{grass:{cleared:[1]}}}};
cleanRemovedMb(p);assert.deepEqual(p.owned,{'01':3});assert.deepEqual(p.soulDecks,[['01']]);assert.equal(p.towerCampaign.active,null);assert.deepEqual(p.towerCampaign.regions.grass.cleared,[1]);
console.log('PASS workshop source schema, 88 current figure records/images, deleted MB tombstones, ten live/planned banners, saved-deck/unfinished-battle deletion migration.');
