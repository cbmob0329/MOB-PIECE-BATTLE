import assert from 'node:assert/strict';
import {normalizeCompetition,recordQualifierResult,advanceWeek,chooseRankUpTournament,recordRankUpResult,syncCompetition,isPlayerMaster} from '../src/game/competition.js';
import {QUALIFIER_POINTS,QUALIFIER_REWARDS,MASTER_BONUS} from '../src/data/competition.js';

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
chooseRankUpTournament(cup,true);recordRankUpResult(cup,true);recordRankUpResult(cup,true);recordRankUpResult(cup,true);assert.equal(cup.rank,'E');assert.equal(cup.coins,10000);assert.equal(cup.diamonds,30);

const master=normalizeCompetition({coins:0,diamonds:0,rank:'SS',competition:{date:{year:2,month:5,week:1},masterHolder:'PLAYER'}});syncCompetition(master);assert.ok(isPlayerMaster(master));assert.equal(master.coins,MASTER_BONUS.coins);assert.equal(master.diamonds,MASTER_BONUS.diamonds);syncCompetition(master);assert.equal(master.coins,MASTER_BONUS.coins,'bonus must not duplicate');
console.log('competition rules ok');
