import {
  RANKS,QUALIFIER_POINTS,QUALIFIER_REWARDS,RANK_UP_REWARDS,MASTER_BONUS,MASTER_PRIZE,
  CPU_NAMES,TOP8,isQualifierWeek,isRankUpWeek,weekKey,nextRank
} from '../data/competition.js';

const hash=(s)=>{let h=2166136261;for(const ch of String(s)){h^=ch.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;};
const unit=(s)=>(hash(s)%100000)/100000;
const clone=x=>structuredClone(x);

function baseCompetition(){return {
  date:{year:1,month:1,week:1},
  leaguePoints:0,
  qualifierHistory:[],
  rankUpHistory:[],
  rankUpCurrent:null,
  leagueFinal:null,
  masterChallenge:null,
  masterHolder:null,
  masterSinceYear:null,
  autoMasterBonuses:[],
  seasonHistory:[],
  notices:[]
};}

export function normalizeCompetition(profile){
  profile.coins=Number.isSafeInteger(profile.coins)&&profile.coins>=0?profile.coins:0;
  profile.rank=RANKS.includes(profile.rank)?profile.rank:'F';
  profile.competition={...baseCompetition(),...(profile.competition||{})};
  profile.competition.date={...baseCompetition().date,...(profile.competition.date||{})};
  for(const k of ['qualifierHistory','rankUpHistory','autoMasterBonuses','seasonHistory','notices'])if(!Array.isArray(profile.competition[k]))profile.competition[k]=[];
  return profile;
}

export function isPlayerMaster(profile){return profile.competition.masterHolder==='PLAYER';}
export function qualifierKey(profile){return weekKey(profile.competition.date);}
export function currentQualifier(profile){const key=qualifierKey(profile);return profile.competition.qualifierHistory.find(x=>x.key===key)||null;}
export function currentRankUp(profile){const c=profile.competition.rankUpCurrent;return c&&c.key===qualifierKey(profile)?c:null;}

function cpuRank(index){return RANKS[Math.floor(index/4)%RANKS.length];}
function cpuId(index){return `CPU_${String(index+1).padStart(2,'0')}`;}
function cpuName(index){return CPU_NAMES[index%CPU_NAMES.length];}
function cpuRoster(profile){
  const master=profile.competition.masterHolder;
  return CPU_NAMES.map((_,i)=>({id:cpuId(i),name:cpuName(i),rank:cpuRank(i)})).filter(c=>c.id!==master);
}

function qualifierSlotsThrough(profile,full=false){
  const d=profile.competition.date;const rows=[];
  const endMonth=full?11:Math.min(11,d.month);
  for(let m=1;m<=endMonth;m++)for(const w of [1,3]){
    if(!full){if(m>d.month)continue;if(m===d.month&&w>d.week)continue;if(m===d.month&&w===d.week){const own=currentQualifier(profile);if(!own||own.results.length<2)continue;}}
    rows.push({year:d.year,month:m,week:w,key:`${d.year}-${String(m).padStart(2,'0')}-${w}`});
  }
  return rows;
}

function cpuLeaguePoints(cpu,profile,full=false){
  const p=QUALIFIER_POINTS[cpu.rank];let total=0;
  for(const slot of qualifierSlotsThrough(profile,full))for(let n=0;n<2;n++)total+=unit(`${slot.key}:${cpu.id}:${n}`)<.58?p.win:p.loss;
  return total;
}

export function leagueStandings(profile,{full=false}={}){
  const rows=cpuRoster(profile).map(c=>({...c,points:cpuLeaguePoints(c,profile,full),isPlayer:false}));
  if(!isPlayerMaster(profile))rows.push({id:'PLAYER',name:'PLAYER',rank:profile.rank,points:profile.competition.leaguePoints||0,isPlayer:true});
  rows.sort((a,b)=>b.points-a.points||a.name.localeCompare(b.name));
  return rows.map((x,i)=>({...x,position:i+1,qualified:i<TOP8}));
}

function sameRankOpponents(profile,key){
  let pool=cpuRoster(profile).filter(c=>c.rank===profile.rank);
  if(pool.length<2)pool=cpuRoster(profile);
  return [...pool].sort((a,b)=>unit(`${key}:${a.id}`)-unit(`${key}:${b.id}`)).slice(0,2);
}

export function ensureQualifier(profile){
  normalizeCompetition(profile);const d=profile.competition.date;
  if(!isQualifierWeek(d.month,d.week)||isPlayerMaster(profile))return null;
  const existing=currentQualifier(profile);if(existing)return existing;
  const key=weekKey(d);const entry={key,year:d.year,month:d.month,week:d.week,rank:profile.rank,opponents:sameRankOpponents(profile,key),results:[]};
  profile.competition.qualifierHistory.push(entry);return entry;
}

export function recordQualifierResult(profile,won){
  const entry=ensureQualifier(profile);if(!entry)throw new Error('現在はMOBリーグ予選ではありません。');
  if(entry.results.length>=2)throw new Error('今週の予選2試合は終了しています。');
  const rank=entry.rank;const points=won?QUALIFIER_POINTS[rank].win:QUALIFIER_POINTS[rank].loss;const reward=won?QUALIFIER_REWARDS[rank]:{coins:0,diamonds:0};
  const opponent=entry.opponents[entry.results.length];
  entry.results.push({won:Boolean(won),opponentId:opponent.id,opponentName:opponent.name,points,coins:reward.coins,diamonds:reward.diamonds});
  profile.competition.leaguePoints+=points;profile.coins+=reward.coins;profile.diamonds+=reward.diamonds;
  return entry.results.at(-1);
}

function tournamentEntrants(profile,key){
  const names=cpuRoster(profile).filter(x=>x.rank===profile.rank).map(x=>x.name);
  const ordered=[...names].sort((a,b)=>unit(`${key}:cup:${a}`)-unit(`${key}:cup:${b}`));
  return ['PLAYER',...ordered.slice(0,7)];
}

export function chooseRankUpTournament(profile,participate){
  normalizeCompetition(profile);const d=profile.competition.date;if(!isRankUpWeek(d.month,d.week)||isPlayerMaster(profile))throw new Error('現在はランクアップトーナメント開催週ではありません。');
  if(currentRankUp(profile))return currentRankUp(profile);
  const key=weekKey(d);const state={key,year:d.year,month:d.month,rankAtEntry:profile.rank,status:participate?'active':'skipped',round:0,entrants:tournamentEntrants(profile,key),opponents:[],results:[],reward:null,rankAfter:profile.rank};
  // 8人トーナメントなので、PLAYERが勝ち進んだ場合の3対戦相手は重複させない。
  // CPU側ブラケットの細部は裏で処理しつつ、プレイヤーには準々決勝→準決勝→決勝の異なる相手を提示する。
  state.opponents=state.entrants.slice(1).sort((a,b)=>unit(`${key}:opp-seq:${a}`)-unit(`${key}:opp-seq:${b}`)).slice(0,3);
  profile.competition.rankUpCurrent=state;
  if(!participate)profile.competition.rankUpHistory.push(clone(state));
  return state;
}

function award(profile,reward){if(!reward)return;profile.coins+=reward.coins;profile.diamonds+=reward.diamonds;}
export function recordRankUpResult(profile,won){
  const t=currentRankUp(profile);if(!t||t.status!=='active')throw new Error('参加中のランクアップトーナメントがありません。');
  const round=t.round;const opponent=t.opponents[round];t.results.push({round,won:Boolean(won),opponent});
  if(!won){t.status='finished';if(round===2){t.reward=RANK_UP_REWARDS[t.rankAtEntry]?.runnerUp||null;award(profile,t.reward);}t.rankAfter=profile.rank;profile.competition.rankUpHistory.push(clone(t));return t;}
  if(round<2){t.round++;return t;}
  t.status='finished';t.reward=RANK_UP_REWARDS[t.rankAtEntry]?.winner||null;award(profile,t.reward);
  if(t.rankAtEntry!=='SS')profile.rank=nextRank(t.rankAtEntry);
  t.rankAfter=profile.rank;profile.competition.rankUpHistory.push(clone(t));return t;
}

function finalKey(profile){return `Y${profile.competition.date.year}`;}
export function ensureLeagueFinal(profile){
  normalizeCompetition(profile);const d=profile.competition.date;if(d.month!==12)return null;
  if(profile.competition.leagueFinal?.year===d.year)return profile.competition.leagueFinal;
  const finalists=leagueStandings(profile,{full:true}).slice(0,8).map(x=>({id:x.id,name:x.name,rank:x.rank,qualifierPoints:x.points,isPlayer:x.isPlayer}));
  const lf={key:finalKey(profile),year:d.year,finalists,playerResults:[],champion:null,awarded:false};profile.competition.leagueFinal=lf;return lf;
}

function cpuSeries(a,b,seed){const aWins=unit(`${seed}:${a.id}:${b.id}`)<.5;return aWins?{winner:a.id,a:2,b:unit(`${seed}:score`)<.5?0:1}:{winner:b.id,a:unit(`${seed}:score`)<.5?0:1,b:2};}
function leagueTable(lf){
  const table=new Map(lf.finalists.map(f=>[f.id,{...f,wins:0,losses:0,battleDiff:0}]));
  for(let i=0;i<lf.finalists.length;i++)for(let j=i+1;j<lf.finalists.length;j++){
    const a=lf.finalists[i],b=lf.finalists[j];if(a.id==='PLAYER'||b.id==='PLAYER')continue;
    const r=cpuSeries(a,b,`${lf.key}:roundrobin`);const ra=table.get(a.id),rb=table.get(b.id);if(r.winner===a.id){ra.wins++;rb.losses++;}else{rb.wins++;ra.losses++;}ra.battleDiff+=r.a-r.b;rb.battleDiff+=r.b-r.a;
  }
  for(const r of lf.playerResults){const p=table.get('PLAYER'),o=table.get(r.opponentId);if(!p||!o)continue;if(r.won){p.wins++;o.losses++;}else{o.wins++;p.losses++;}const diff=r.battleFor-r.battleAgainst;p.battleDiff+=diff;o.battleDiff-=diff;}
  return [...table.values()].sort((a,b)=>b.wins-a.wins||b.battleDiff-a.battleDiff||b.qualifierPoints-a.qualifierPoints||a.name.localeCompare(b.name)).map((x,i)=>({...x,position:i+1}));
}
export function leagueFinalTable(profile){const lf=ensureLeagueFinal(profile);return lf?leagueTable(lf):[];}
export function playerLeagueOpponents(profile){const lf=ensureLeagueFinal(profile);if(!lf||!lf.finalists.some(x=>x.id==='PLAYER'))return [];
  return lf.finalists.filter(x=>x.id!=='PLAYER');
}
export function currentLeagueMatches(profile){
  const d=profile.competition.date,lf=ensureLeagueFinal(profile);if(!lf||d.month!==12||![1,2].includes(d.week)||!lf.finalists.some(x=>x.id==='PLAYER'))return [];
  const opp=playerLeagueOpponents(profile);const subset=d.week===1?opp.slice(0,4):opp.slice(4,7);return subset.map(o=>({...o,result:lf.playerResults.find(r=>r.opponentId===o.id)||null}));
}
export function recordLeagueFinalResult(profile,won,battleFor=2,battleAgainst=won?1:2){
  const lf=ensureLeagueFinal(profile),matches=currentLeagueMatches(profile);const next=matches.find(m=>!m.result);if(!lf||!next)throw new Error('現在プレイできるMOBリーグ本戦がありません。');
  lf.playerResults.push({opponentId:next.id,opponentName:next.name,won:Boolean(won),battleFor,battleAgainst});return lf.playerResults.at(-1);
}
function finalizeLeagueIfReady(profile){
  const lf=ensureLeagueFinal(profile);if(!lf||lf.champion)return false;const playerIn=lf.finalists.some(x=>x.id==='PLAYER');if(playerIn&&lf.playerResults.length<7)return false;
  const table=leagueTable(lf);lf.champion=table[0];
  if(lf.year===1){profile.competition.masterHolder=lf.champion.id;profile.competition.masterSinceYear=1;if(lf.champion.id==='PLAYER'){award(profile,MASTER_PRIZE);profile.competition.notices.push({type:'master',title:'MOB MASTER',body:'初代MOB MASTERに輝いた！',coins:MASTER_PRIZE.coins,diamonds:MASTER_PRIZE.diamonds});}lf.awarded=true;}
  return true;
}

function ensureMasterChallenge(profile){
  const d=profile.competition.date;if(d.year<2||d.month!==12||d.week<3)return null;const lf=ensureLeagueFinal(profile);finalizeLeagueIfReady(profile);if(!lf?.champion)return null;
  if(profile.competition.masterChallenge?.year===d.year)return profile.competition.masterChallenge;
  const defender=profile.competition.masterHolder;const challenger=lf.champion.id;if(!defender||defender===challenger)return null;
  profile.competition.masterChallenge={year:d.year,defender,challenger,playerResults:[],defenderWins:0,challengerWins:0,winner:null,awarded:false};return profile.competition.masterChallenge;
}
export function recordMasterChallengeResult(profile,playerWon,battleFor=2,battleAgainst=playerWon?1:2){
  const mc=ensureMasterChallenge(profile);if(!mc||mc.winner)throw new Error('現在プレイできるMOB MASTER決定戦がありません。');
  const playerSide=mc.defender==='PLAYER'?'defender':mc.challenger==='PLAYER'?'challenger':null;if(!playerSide)throw new Error('PLAYERはこのMOB MASTER決定戦に参加していません。');
  const won=Boolean(playerWon);const sideWon=won?playerSide:(playerSide==='defender'?'challenger':'defender');mc[`${sideWon}Wins`]++;mc.playerResults.push({won,battleFor,battleAgainst});if(mc.defenderWins>=3||mc.challengerWins>=3){mc.winner=mc.defenderWins>=3?mc.defender:mc.challenger;finishMasterChallenge(profile,mc);}return mc;
}
function finishMasterChallenge(profile,mc){
  profile.competition.masterHolder=mc.winner;profile.competition.masterSinceYear=mc.year;mc.awarded=true;
  if(mc.winner==='PLAYER'){award(profile,MASTER_PRIZE);profile.rank='SS';profile.competition.notices.push({type:'master',title:'MOB MASTER',body:'MOB MASTER決定戦を制した！',coins:MASTER_PRIZE.coins,diamonds:MASTER_PRIZE.diamonds});}
  else if(mc.defender==='PLAYER'||mc.challenger==='PLAYER')profile.rank='SS';
}
function autoResolveMasterChallenge(profile){const mc=ensureMasterChallenge(profile);if(!mc||mc.winner||mc.defender==='PLAYER'||mc.challenger==='PLAYER')return false;for(let i=0;i<5&&mc.defenderWins<3&&mc.challengerWins<3;i++){if(unit(`master:${mc.year}:${i}:${mc.defender}:${mc.challenger}`)<.5)mc.defenderWins++;else mc.challengerWins++;}mc.winner=mc.defenderWins>=3?mc.defender:mc.challenger;finishMasterChallenge(profile,mc);return true;}

export function syncCompetition(profile){
  normalizeCompetition(profile);let changed=false;const d=profile.competition.date;const key=weekKey(d);
  if(isPlayerMaster(profile)&&isQualifierWeek(d.month,d.week)&&!profile.competition.autoMasterBonuses.includes(key)){
    profile.competition.autoMasterBonuses.push(key);award(profile,MASTER_BONUS);profile.competition.notices.push({type:'bonus',title:'MOB MASTER BONUS',body:`${d.month}月 第${d.week}週 王者特典`,coins:MASTER_BONUS.coins,diamonds:MASTER_BONUS.diamonds});changed=true;
  }
  if(d.month===12){ensureLeagueFinal(profile);if(d.week>=2)changed=finalizeLeagueIfReady(profile)||changed;if(d.week>=3)changed=autoResolveMasterChallenge(profile)||changed;}
  return changed;
}

export function canAdvanceWeek(profile){
  normalizeCompetition(profile);const d=profile.competition.date;
  if(isQualifierWeek(d.month,d.week)&&!isPlayerMaster(profile)){const q=ensureQualifier(profile);if(q.results.length<2)return {ok:false,reason:`MOBリーグ予選があと${2-q.results.length}試合あります。`};}
  if(isRankUpWeek(d.month,d.week)&&!isPlayerMaster(profile)){const t=currentRankUp(profile);if(!t)return {ok:false,reason:'ランクアップトーナメントへの参加・不参加を選んでください。'};if(t.status==='active')return {ok:false,reason:'ランクアップトーナメントが進行中です。'};}
  if(d.month===12&&[1,2].includes(d.week)){const m=currentLeagueMatches(profile);if(m.some(x=>!x.result))return {ok:false,reason:`MOBリーグ本戦があと${m.filter(x=>!x.result).length}試合あります。`};}
  if(d.year>=2&&d.month===12&&d.week===3){const mc=ensureMasterChallenge(profile);if(mc&&!mc.winner&&(mc.defender==='PLAYER'||mc.challenger==='PLAYER'))return {ok:false,reason:'MOB MASTER決定戦が進行中です。'};}
  return {ok:true,reason:''};
}

export function advanceWeek(profile){
  const check=canAdvanceWeek(profile);if(!check.ok)throw new Error(check.reason);const d=profile.competition.date;
  if(d.month===12&&d.week===4){archiveSeason(profile);d.year++;d.month=1;d.week=1;profile.competition.leaguePoints=0;profile.competition.rankUpCurrent=null;profile.competition.leagueFinal=null;profile.competition.masterChallenge=null;}
  else if(d.week===4){d.month++;d.week=1;profile.competition.rankUpCurrent=null;}
  else d.week++;
  syncCompetition(profile);return d;
}


function competitorName(profile,id){
  if(!id)return '—';if(id==='PLAYER')return 'PLAYER';
  const lf=profile.competition.leagueFinal;const fromFinal=lf?.finalists?.find(x=>x.id===id);if(fromFinal)return fromFinal.name;
  const m=String(id).match(/^CPU_(\d+)$/);if(m)return cpuName(Math.max(0,Number(m[1])-1));return String(id);
}
export function archiveSeason(profile){
  normalizeCompetition(profile);const year=profile.competition.date.year;
  if(profile.competition.seasonHistory.some(x=>x.year===year))return profile.competition.seasonHistory.find(x=>x.year===year);
  const lf=profile.competition.leagueFinal;const table=lf?leagueTable(lf):[];const mc=profile.competition.masterChallenge;
  const row={year,leagueChampion:lf?.champion?{id:lf.champion.id,name:lf.champion.name,wins:lf.champion.wins,losses:lf.champion.losses}:null,leagueTable:table.map(x=>({id:x.id,name:x.name,rank:x.rank,wins:x.wins,losses:x.losses,battleDiff:x.battleDiff,position:x.position})),masterHolder:profile.competition.masterHolder?{id:profile.competition.masterHolder,name:competitorName(profile,profile.competition.masterHolder)}:null,masterChallenge:mc?{defender:mc.defender,defenderName:competitorName(profile,mc.defender),challenger:mc.challenger,challengerName:competitorName(profile,mc.challenger),defenderWins:mc.defenderWins,challengerWins:mc.challengerWins,winner:mc.winner,winnerName:competitorName(profile,mc.winner)}:null};
  profile.competition.seasonHistory.push(row);return row;
}

export function dismissCompetitionNotice(profile){return profile.competition.notices.shift()||null;}
export function getCompetitionNotice(profile){return profile.competition.notices[0]||null;}
export function getMasterChallenge(profile){return ensureMasterChallenge(profile);}
export function getLeagueFinal(profile){return ensureLeagueFinal(profile);}
