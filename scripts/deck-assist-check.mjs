import assert from 'node:assert/strict';
import {soulFigures,soulById,recipes,validateSoulDeck} from '../src/game/soul-battle.js';
import {starterDeck} from '../src/game/soul-starters.js';
import {countIds,fusionRecommendations,planSoulDeck,addRoute} from '../src/game/soul-deck-assist.js';
const owned=Object.fromEntries(soulFigures.map(f=>[f.id,5]));
const deck=starterDeck('desert'),reserves=deck.filter(id=>soulById.get(id).soulClass!=='seed');
const snapshot=structuredClone({deck,owned});
const seedPlan=planSoulDeck(reserves,owned,'seeds');assert.equal(seedPlan.counts.seed,30);assert.deepEqual(seedPlan.deck.filter(id=>soulById.get(id).soulClass!=='seed'),reserves);assert.ok(validateSoulDeck(seedPlan.deck,owned).valid);
const target='170',routes=fusionRecommendations(target,owned,deck);assert.ok(routes.length);assert.ok(routes.every(r=>Object.values(r.seeds).reduce((a,b)=>a+b,0)>=4));
for(const route of routes){
 assert.equal(route.steps.at(-1).target,target);assert.ok(route.steps.length>=3);
 const counts={...route.seeds};for(const step of route.steps){assert.ok(recipes.some(r=>r.target===step.target&&r.label===step.label));for(const id of step.materials){assert.ok(counts[id]>0,'missing distinct material '+id);counts[id]--;}counts[step.target]=(counts[step.target]||0)+1;}
 assert.equal(counts[target],1);assert.ok(!validateSoulDeck(Object.entries(route.needs).flatMap(([id,n])=>Array(n).fill(id)),owned).errors.length);
}
const routePlan=planSoulDeck([target],owned,'routes');assert.equal(routePlan.counts.seed,30);assert.ok(routePlan.counts.middle>=2);assert.equal(routePlan.counts.mob,1);assert.ok(routePlan.deck.includes(target));
const partial=deck.filter((_,i)=>i%3!==0),fill=planSoulDeck(partial,owned,'fill');assert.deepEqual(fill.deck.slice(0,partial.length),partial);assert.ok(validateSoulDeck(fill.deck,owned).valid);
const poor=countIds(reserves);const insufficient=planSoulDeck(reserves,poor,'seeds');assert.equal(insufficient.counts.seed,0);assert.ok(insufficient.warnings.length);assert.deepEqual(insufficient.deck,reserves);
assert.deepEqual({deck,owned},snapshot);assert.throws(()=>planSoulDeck([],owned,'seeds'),/先に/);assert.throws(()=>addRoute([],routes[0].needs,{}),/所持数/);
const exact=addRoute([],routes[0].needs,owned);assert.deepEqual(addRoute(exact,routes[0].needs,owned),exact);
const oneEach=Object.fromEntries(Object.keys(owned).map(id=>[id,1]));for(const route of fusionRecommendations(target,oneEach))assert.ok(Object.values(route.needs).every(n=>n<=1));
console.log('PASS: reverse MOB trees, distinct copies, preserved targets/draw order, quotas, ownership, partial shortages, non-mutation and idempotent route addition');
