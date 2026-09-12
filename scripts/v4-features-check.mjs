import assert from 'node:assert/strict';
import {figures,byId} from '../src/data/catalog.js';
import {OWN_CAP,OVERFLOW_RUBY} from '../src/data/gacha.js';
import {acquireFigure} from '../src/game/inventory.js';
import {switchDeckSlot,saveActiveDeck} from '../src/game/deck.js';
import {metricValue,claimMission} from '../src/game/missions.js';
import {archiveSeason,normalizeCompetition} from '../src/game/competition.js';
import {enrichedHistoryRow,applyBattleFigureRecords} from '../src/game/records.js';

assert.deepEqual(OWN_CAP,{R:15,SR:12,SSR:7,UR:4,MOB:2});
assert.deepEqual(OVERFLOW_RUBY,{R:1,SR:3,SSR:5,UR:12,MOB:30});
for(const rarity of ['R','SR','SSR','UR','MOB']){
  const f=figures.find(x=>x.rarity===rarity&&!x.pending);assert.ok(f,rarity);
  const p={owned:{[f.sourceId]:OWN_CAP[rarity]},rubies:0,gachaStats:{draws:0,converted:0,rubiesFromConversion:0}};
  const got=acquireFigure(p,f);assert.equal(got.converted,1);assert.equal(got.rubies,OVERFLOW_RUBY[rarity]);assert.equal(p.owned[f.sourceId],OWN_CAP[rarity]);
}

const decks={deck:['01'],deckPresets:[['01'],['02'],[],[],[]],activeDeckSlot:0};
switchDeckSlot(decks,1);assert.deepEqual(decks.deck,['02']);decks.deck=['03'];saveActiveDeck(decks);switchDeckSlot(decks,0);assert.deepEqual(decks.deck,['01']);switchDeckSlot(decks,1);assert.deepEqual(decks.deck,['03']);

const missionProfile={coins:0,diamonds:0,owned:{},deck:[],battleHistory:[],battleStats:{battles:500,wins:250,qualifierBattles:20,leagueBattles:7,rankUpWins:10,masterWins:1},gachaStats:{draws:100,converted:50},missions:{claimed:[]}};
assert.equal(metricValue(missionProfile,'battles',{figures,byId}),500);assert.equal(metricValue(missionProfile,'masterWins',{figures,byId}),1);
const rw=claimMission(missionProfile,'battle_500',{figures,byId});assert.deepEqual(rw,{coins:100000,diamonds:100});assert.equal(missionProfile.coins,100000);assert.equal(missionProfile.diamonds,100);

const recProfile={figureRecords:{}};const match={playerDeckOriginal:['01'],cpuDeckOriginal:['02'],history:[{round:1,won:true,pHand:['01','01','02','03','04'],cHand:['05'],boostId:'01'}],pieceBoostUsed:true};const result={won:true,battleFor:2,battleAgainst:0,match};applyBattleFigureRecords(recProfile,result);assert.equal(recProfile.figureRecords['01'].appearances,2);assert.equal(recProfile.figureRecords['01'].matchWins,1);const hr=enrichedHistoryRow(result,{title:'TEST',opponentName:'CPU'},{mode:'free-easy'});assert.equal(hr.opponentName,'CPU');assert.equal(hr.rounds.length,1);assert.equal(hr.pieceBoostUsed,true);

const comp={rank:'SS',coins:0,diamonds:0,competition:{date:{year:3,month:12,week:4},masterHolder:'PLAYER',masterSinceYear:2,leagueFinal:{year:3,key:'Y3',finalists:[{id:'PLAYER',name:'PLAYER',rank:'SS',qualifierPoints:100,isPlayer:true},{id:'CPU_01',name:'MOB RABBIT',rank:'SS',qualifierPoints:90,isPlayer:false}],playerResults:[{opponentId:'CPU_01',opponentName:'MOB RABBIT',won:true,battleFor:2,battleAgainst:1}],champion:{id:'PLAYER',name:'PLAYER',wins:1,losses:0},awarded:true},masterChallenge:null}};normalizeCompetition(comp);const season=archiveSeason(comp);assert.equal(season.year,3);assert.equal(season.masterHolder.name,'PLAYER');assert.equal(comp.competition.seasonHistory.length,1);

console.log('PASS: v4 inventory caps/conversion, five deck slots, missions, battle records, hall-of-fame season archive');
