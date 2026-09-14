import assert from 'node:assert/strict';

const store=new Map();
globalThis.localStorage={
  getItem(key){return store.has(key)?store.get(key):null;},
  setItem(key,value){store.set(key,String(value));},
  removeItem(key){store.delete(key);}
};

const {profile}=await import('../src/game/profile.js');
const {byId}=await import('../src/data/catalog.js');
assert.equal(profile.version,5,'profile.version must survive normalization');
assert.equal(profile.rank,'F','default rank must survive normalization');
assert.ok(Array.isArray(profile.deck),'profile.deck must exist');
assert.equal(profile.deckPresets.length,5,'five deck slots must exist');
assert.ok(profile.missions && Array.isArray(profile.missions.claimed),'missions container must exist');
assert.ok(byId.get(profile.centerId),'center figure must resolve');
console.log('PASS: startup profile shape and HOME center figure');
