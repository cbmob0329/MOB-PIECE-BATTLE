import assert from 'node:assert/strict';import {deleteBattleSave,battleSaveKeys} from '../src/game/save-reset.js';
const saved=new Map([...battleSaveKeys.map(k=>[k,'original:'+k]),['mob-quest:profile:v1','STORY'],['mob-piece-battle:unrecognized','KEEP']]);
const store={getItem:k=>saved.get(k)??null,setItem:(k,v)=>saved.set(k,v),removeItem:k=>saved.delete(k)};
deleteBattleSave(store);assert.equal(saved.size,2);assert.equal(saved.get('mob-quest:profile:v1'),'STORY');assert.equal(saved.get('mob-piece-battle:unrecognized'),'KEEP');
for(const key of battleSaveKeys)saved.set(key,'original:'+key);
const before=new Map(saved);const blocked={...store,removeItem:k=>{if(k.includes('profile'))throw Error('denied');saved.delete(k);}};
assert.throws(()=>deleteBattleSave(blocked),/元に戻しました/);assert.deepEqual(saved,before);
assert.throws(()=>deleteBattleSave({...store,getItem:()=>{throw Error('read denied');}}));assert.deepEqual(saved,before);
console.log('PASS reset allowlist, other-game/unknown-key preservation, remove failure rollback, read failure preservation');
