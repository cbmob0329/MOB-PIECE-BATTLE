import assert from 'node:assert/strict';
import figures from '../src/data/figures_master_v170.json' with {type:'json'};
import tags from '../src/data/tags_master_v170.json' with {type:'json'};
import {RULES,validateDeck} from '../src/game/deck.js';
import {buildCpuDeck,fighterRows,tagEffects,normalizeBattleProgress,createMatch,nextRound,exchangePlayer,movePlayerCard,activatePieceBoost,randomMatchStatus,recordRandomMatch} from '../src/game/battle.js';
import {RANKS} from '../src/data/battle.js';

const byId=new Map(figures.map(f=>[f.sourceId,f]));
const tagMap=new Map(tags.map(t=>[String(t.id),t]));
for(const rank of RANKS){const cpu=buildCpuDeck(figures,'rank',rank);assert.equal(cpu.deck.length,25,`CPU ${rank} must have 25`);const v=validateDeck(cpu.deck,byId);assert.ok(v.valid,`CPU ${rank} invalid: ${v.errors.join(',')}`);assert.ok(v.cost<=80);}
for(const diff of ['easy','hard','inferno']){const cpu=buildCpuDeck(figures,'free',diff);assert.equal(cpu.deck.length,25);assert.ok(validateDeck(cpu.deck,byId).valid);}

const sample=figures.filter(f=>!f.pending).slice(0,5).map(f=>f.sourceId);const enemy=figures.filter(f=>!f.pending).slice(5,10).map(f=>f.sourceId);const rows=fighterRows(sample,enemy,'player',2,byId,tagMap);assert.equal(rows.length,5);assert.ok(rows[2].maxHp>=Math.round((byId.get(sample[2]).mobPiece.hp)*1.25),'center hp should receive +25% before tag effects');
const te=tagEffects([sample[0],sample[0]],byId,tagMap);assert.equal(te.lines.length,0,'exact duplicate IDs must count once for tags');

const m=createMatch({playerDeck:buildCpuDeck(figures,'free','easy').deck,cpuDeck:buildCpuDeck(figures,'free','easy').deck,cpuAi:1});nextRound(m,byId,tagMap);assert.equal(m.pHand.length,5);assert.equal(m.cHand.length,5);const old=m.pHand[0];assert.ok(exchangePlayer(m,0));assert.notEqual(m.pHand[0],undefined);assert.equal(m.exchanged,true);assert.equal(exchangePlayer(m,1),false,'only one exchange per battle');const centerBefore=m.pHand[2];const moveFrom=m.pHand.findIndex((id,i)=>i!==2&&id!==centerBefore);assert.ok(moveFrom>=0,'need a different piece to verify center reorder');const movingId=m.pHand[moveFrom];movePlayerCard(m,moveFrom,2);assert.equal(m.pHand[2],movingId,'reordering must move the selected piece into center slot');assert.notEqual(m.pHand[2],centerBefore,'reordering must change center occupant when a different piece is moved to slot 3');

const boostMatch=createMatch({playerDeck:buildCpuDeck(figures,'free','easy').deck,cpuDeck:buildCpuDeck(figures,'free','easy').deck,cpuAi:0});nextRound(boostMatch,byId,tagMap);const baseRows=fighterRows(boostMatch.pHand,boostMatch.cHand,'player',2,byId,tagMap);assert.ok(activatePieceBoost(boostMatch,1),'first PIECE BOOST should activate');assert.equal(activatePieceBoost(boostMatch,2),false,'PIECE BOOST is once per match');const boostedRows=fighterRows(boostMatch.pHand,boostMatch.cHand,'player',2,byId,tagMap,boostMatch.boostIndex);assert.ok(boostedRows[1].maxHp>baseRows[1].maxHp,'boosted piece HP should increase');assert.ok(boostedRows[1].atk>baseRows[1].atk,'boosted piece ATK should increase');assert.equal(exchangePlayer(boostMatch,1),false,'boosted piece cannot be exchanged');movePlayerCard(boostMatch,1,3);assert.equal(boostMatch.boostIndex,3,'PIECE BOOST must follow the piece when positions are swapped');nextRound(boostMatch,byId,tagMap);assert.equal(boostMatch.boostIndex,-1,'boost applies to one Battle only');assert.equal(boostMatch.pieceBoostUsed,true,'PIECE BOOST remains consumed for the match');

const p=normalizeBattleProgress({rank:'F',highestRank:'F',coins:0,diamonds:0,competition:{date:{year:1,month:1,week:1}},randomMatch:{key:'',played:0,wins:0}});
let randomState=randomMatchStatus(p);assert.equal(randomState.played,0);assert.equal(randomState.remaining,3);
let randomResult=recordRandomMatch(p,true);assert.equal(randomResult.played,1);assert.deepEqual(randomResult.reward,{coins:3000,diamonds:10});assert.equal(p.coins,3000);assert.equal(p.diamonds,10);
recordRandomMatch(p,false);recordRandomMatch(p,false);randomState=randomMatchStatus(p);assert.equal(randomState.remaining,0);assert.throws(()=>recordRandomMatch(p,true),/3回/);
p.competition.date.week=2;randomState=randomMatchStatus(p);assert.equal(randomState.played,0,'random match must reset on a new week');
console.log('battle rules ok');
