import assert from 'node:assert/strict';
import {figures,byId,tags} from '../src/data/catalog.js';
import {RULES,validateDeck} from '../src/game/deck.js';
assert.equal(figures.length,265);assert.equal(tags.length,52);assert.equal(byId.size,265);
figures.forEach((f,i)=>{assert.equal(f.dexNo,i+1);assert.equal(f.displayNo,`No.${String(i+1).padStart(3,'0')}`);assert.deepEqual(f.mobPiece,f.mobPieceV115);});
for(const [rarity,cap] of Object.entries(RULES.duplicateCaps)){const f=figures.find(f=>f.rarity===rarity&&!f.pending);assert.equal(validateDeck(Array(cap).fill(f.sourceId),byId).errors.length,0);assert.ok(validateDeck(Array(cap+1).fill(f.sourceId),byId).errors.some(e=>e.includes('重複')));}
const costly=figures.filter(f=>!f.pending).sort((a,b)=>b.mobPiece.cost-a.mobPiece.cost).flatMap(f=>Array(RULES.duplicateCaps[f.rarity]).fill(f.sourceId)).slice(0,25);assert.ok(validateDeck(costly,byId).cost>80);assert.ok(validateDeck(costly,byId).errors.some(e=>e.includes('COST')));
const cheap=figures.filter(f=>!f.pending).sort((a,b)=>a.mobPiece.cost-b.mobPiece.cost).flatMap(f=>Array(RULES.duplicateCaps[f.rarity]).fill(f.sourceId)).slice(0,25);assert.equal(validateDeck(cheap,byId).valid,true);assert.equal(validateDeck(cheap,byId,{}).valid,false);assert.equal(validateDeck(cheap.slice(1),byId).valid,false);
console.log('PASS: catalog integrity, numbering, stats, rarity caps, cost 80, deck 25, ownership boundary');
