import assert from 'node:assert/strict';
import {normalizeCompetition,recordQualifierResult,advanceWeek,chooseRankUpTournament,recordRankUpResult,syncCompetition,isPlayerMaster} from '../src/game/competition.js';
import {QUALIFIER_POINTS,QUALIFIER_REWARDS,RANK_UP_REWARDS,MASTER_BONUS} from '../src/data/competition.js';

const p=normalizeCompetition({coins:0,diamonds:0,rank:'F'});
assert.deepEqual(p.competition.date,{year:1,month:1,week:1});
let r=recordQualifierResult(p,true);
assert.equal(r.points,QUALIFIER_POINTS.F.win);assert.equal(p.coins,QUALIFIER_REWARDS.F.coins);assert.equal(p.diamonds,QUALIFIER_REWARDS.F.diamonds);
r=recordQualifierResult(p,false);assert.equal(r.points,QUALIFIER_POINTS.F.loss);assert.equal(p.competition.leaguePoints,0);
advanceWeek(p);assert.equal(p.competition.date.week,2);
advanceWeek(p);assert.equal(p.competition.date.week,3);
recordQualifierResult(p,true);recordQualifierResult(p,true);advanceWeek(p);assert.equal(p.competition.date.week,4);
advanceWeek(p);assert.deepEqual(p.competition.date,{year:1,month:2,week:1});

const cup=normalizeCompetition({coins:0,diamonds:0,rank:'F',competition:{date:{year:1,month:4,week:2}}});
const cupState=chooseRankUpTournament(cup,true);assert.equal(new Set(cupState.opponents).size,3,'rank-up tournament opponents must be unique');recordRankUpResult(cup,true);recordRankUpResult(cup,true);recordRankUpResult(cup,true);assert.equal(cup.rank,'E');assert.equal(cup.coins,10000);assert.equal(cup.diamonds,30);

const expectedRewards={
  F:[[5000,10],[10000,30]],E:[[8000,20],[15000,45]],D:[[12000,30],[22000,60]],C:[[18000,45],[32000,85]],
  B:[[25000,65],[45000,120]],A:[[33000,90],[62000,170]],S:[[42000,120],[80000,230]],SS:[[50000,150],[100000,300]]
};
for(const [rank,[[rc,rd],[wc,wd]]] of Object.entries(expectedRewards)){
  assert.deepEqual(RANK_UP_REWARDS[rank].runnerUp,{coins:rc,diamonds:rd},`${rank} runner-up reward`);
  assert.deepEqual(RANK_UP_REWARDS[rank].winner,{coins:wc,diamonds:wd},`${rank} winner reward`);
}
const ssCup=normalizeCompetition({coins:0,diamonds:0,rank:'SS',competition:{date:{year:1,month:4,week:2}}});chooseRankUpTournament(ssCup,true);recordRankUpResult(ssCup,true);recordRankUpResult(ssCup,true);recordRankUpResult(ssCup,true);assert.equal(ssCup.rank,'SS','SS tournament winner must not become MOB MASTER');assert.equal(ssCup.coins,100000);assert.equal(ssCup.diamonds,300);

const master=normalizeCompetition({coins:0,diamonds:0,rank:'SS',competition:{date:{year:2,month:5,week:1},masterHolder:'PLAYER'}});syncCompetition(master);assert.ok(isPlayerMaster(master));assert.equal(master.coins,MASTER_BONUS.coins);assert.equal(master.diamonds,MASTER_BONUS.diamonds);syncCompetition(master);assert.equal(master.coins,MASTER_BONUS.coins,'bonus must not duplicate');
console.log('competition rules ok');
