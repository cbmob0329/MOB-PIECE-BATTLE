import assert from 'node:assert/strict';
import {modes} from '../src/data/catalog.js';
import {RANDOM_MATCH} from '../src/data/battle.js';
import {WEEKLY_RANK_REWARDS,RANKS} from '../src/data/competition.js';
import fs from 'node:fs/promises';

assert.ok(!modes.some(x=>x.id==='rank'),'RANK MATCH must be removed');
assert.ok(modes.some(x=>x.id==='random'),'RANDOM MATCH must exist');
assert.equal(RANDOM_MATCH.weeklyLimit,3);
assert.deepEqual(RANDOM_MATCH.winReward,{coins:3000,diamonds:10});
assert.deepEqual(Object.keys(WEEKLY_RANK_REWARDS),RANKS);
assert.deepEqual(WEEKLY_RANK_REWARDS.F,{coins:3000,diamonds:10});
assert.deepEqual(WEEKLY_RANK_REWARDS.SS,{coins:20000,diamonds:40});

const library=await fs.readFile(new URL('../src/screens/library.js',import.meta.url),'utf8');
for(const token of ['figure-sort','figure-tag-filter','RANDOM MATCH','ランクアップは大会のみ'])assert.ok(library.includes(token),`missing ${token}`);
const showroom=await fs.readFile(new URL('../src/screens/showroom.js',import.meta.url),'utf8');
for(const token of ['data-week-open','本当に週を進めますか？','data-week-confirm'])assert.ok(showroom.includes(token),`missing ${token}`);
const competition=await fs.readFile(new URL('../src/screens/competition.js',import.meta.url),'utf8');
for(const token of ['cup:${r}','data-test-comp="league"','data-test-comp="master"'])assert.ok(competition.includes(token),`missing ${token}`);

console.log('v5 features ok');
