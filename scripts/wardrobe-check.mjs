import assert from 'node:assert/strict';
import fs from 'node:fs';
import {wardrobeThemes,wardrobeSlots,wardrobeState,defaultOutfit,ownsPart,prepareWardrobe,wardrobeLayers} from '../src/game/wardrobe.js';
assert.equal(wardrobeThemes.length,24);
for(const testMode of [false,true]){const p={testMode},state=wardrobeState(p);assert.deepEqual(state.selected,defaultOutfit());assert.equal(Object.keys(wardrobeSlots).reduce((n,k)=>n+wardrobeThemes.filter(t=>ownsPart(p,k,t.id)).length,0),testMode?120:5);}
const mixed={outfit:'grass',scarf:'sea',eyewear:'neon',shoes:'none',floating:'shadow'};
assert.throws(()=>prepareWardrobe({},mixed));
const saved=prepareWardrobe({testMode:true},mixed);assert.deepEqual(wardrobeState(JSON.parse(JSON.stringify(saved))).selected,mixed);assert.deepEqual(saved.wardrobe.owned,[]);
saved.testMode=false;assert.deepEqual(wardrobeState(saved).selected,{...defaultOutfit(),shoes:'none'});
assert.deepEqual(wardrobeLayers(mixed).slice(0,3),['base/head.png','base/bare_feet.png','layers/grass/outfit.png']);
assert.deepEqual(wardrobeLayers(Object.fromEntries(Object.keys(wardrobeSlots).map(k=>[k,'none']))),['base/full.png']);
assert.deepEqual(wardrobeState({wardrobe:{owned:['outfit:grass','outfit:grass','bad:sea','outfit:../../bad'],selected:{outfit:'grass'}}}).owned,['outfit:grass']);
for(const theme of wardrobeThemes){for(const slot of Object.keys(wardrobeSlots))assert(fs.existsSync(`public/assets/wardrobe/layers/${theme.id}/${slot}.png`));assert(fs.existsSync(`public/assets/wardrobe/presets/${theme.id}.png`));}
console.log('PASS 120 assets, 24 presets, default ownership, test-only unlock, mixed save/reload, locked validation, sanitization and layer order.');
