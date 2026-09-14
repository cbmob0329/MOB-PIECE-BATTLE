import assert from 'node:assert/strict';

const store=new Map();
globalThis.localStorage={
  getItem(key){return store.get(key)??null;},
  setItem(key,value){store.set(key,String(value));},
  removeItem(key){store.delete(key);}
};

const [{figures,tags,byId,modes},{profile},{homeScreen},{collectionScreen,battleScreen},{competitionScreen}]=await Promise.all([
  import('../src/data/catalog.js'),
  import('../src/game/profile.js'),
  import('../src/screens/showroom.js'),
  import('../src/screens/library.js'),
  import('../src/screens/competition.js')
]);
const fake=(k)=>`<i>${k}</i>`;const ctx={figures,tags,byId,modes,profile,icon:n=>fake(n),art:f=>`<span>${f?.displayNo||'?'}</span>`,menuArt:(k)=>fake('menu:'+k),iconArt:(k)=>fake('icon:'+k),rankArt:(k)=>fake('rank:'+k)};
const home=homeScreen(ctx);
assert.ok(home.includes('data-week-open'));assert.ok(home.includes('要確認'));assert.ok(home.includes('WEEKLY RANK BONUS'));
const dex=collectionScreen(ctx,'','ALL','ALL','DEX_ASC','ALL');
assert.ok(dex.includes('figure-sort'));assert.ok(dex.includes('figure-tag-filter'));assert.ok(dex.includes('名前順'));
const battle=battleScreen(ctx);
assert.ok(battle.includes('RANDOM MATCH'));assert.ok(battle.includes('3,000 COIN + 10 DIAMOND'));assert.ok(!battle.includes('RANK MATCH'));
const comp=competitionScreen(ctx);
assert.ok(comp.includes('TEST MODE'));assert.ok(comp.includes('WEEKLY RANK REWARD'));
console.log('v5 UI render ok');
