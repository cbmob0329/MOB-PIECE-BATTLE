import assert from 'node:assert/strict';
import {strengthEnergyMarkup} from '../src/components/strength-energy.js';
import * as g from '../src/game/soul-battle.js';
import {pieceStarterDeck} from '../src/game/piece-starters.js';
import {usageRecord} from '../src/game/skill-budget.js';
const deck=pieceStarterDeck('piece-soldier'),seeds=g.soulFigures.filter(f=>f.soulClass==='seed');
for(const kind of ['attribute','tag','mix']){
 let pair;
 for(const a of seeds){const b=seeds.find(b=>b.id!==a.id&&a.tags.some(t=>b.tags.includes(t))===(kind!=='attribute')&&a.attribute.split('/').some(t=>b.attribute.split('/').includes(t))===(kind!=='tag'));if(b){pair=[a,b];break;}}
 assert.ok(pair);const s=g.createSoulBattle([deck,deck]);s.turn=3;s.active=0;s.phase='main';s.players[0].field=[null,null,null];
 pair.forEach((f,i)=>s.players[0].field[i]={id:f.id,uid:++s.serial,attacks:0,skillTurn:-1,skillUsesUsed:0,effects:[],attackedTargets:[],extra:0,permanentAtk:0,permanentDef:0});
 const refs=s.players[0].field.filter(Boolean).map(p=>p.uid),recipe=g.fusionOptions(s,0,refs).find(r=>r.resonance&&r.fusionStyle===kind);assert.ok(recipe);g.fuse(s,0,refs,recipe.id);
 const figure=s.players[0].field.find(Boolean),markup=strengthEnergyMarkup(figure,g.attribute(figure));assert.equal(markup.includes('data-strength-energy="attribute"'),kind!=='tag');assert.equal(markup.includes('data-strength-energy="tag"'),kind!=='attribute');assert.equal(strengthEnergyMarkup(usageRecord(figure),g.attribute(figure)),markup);
}
for(const fusionStyle of [undefined,'same','soul','mob','legacy'])assert.equal(strengthEnergyMarkup({fusionStyle},'火'),'');
for(const attribute of ['火','水','雷','地','風','光','闇','無'])assert.ok(strengthEnergyMarkup({fusionStyle:'attribute'},attribute).includes(attribute+'属性強化済み'));
assert.equal((strengthEnergyMarkup({fusionStyle:'mix'},'火/水').match(/data-strength-energy=/g)||[]).length,3);
console.log('PASS: real attribute/tag/mixed strengthening, all eight elements, multiple elements, stored strengthening, unstrengthened/evolution exclusion');
