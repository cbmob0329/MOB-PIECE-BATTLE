import {MISSIONS} from '../data/missions.js';
import {validateDeck} from './deck.js';

export function normalizeMissions(profile){
  if(!profile.missions||typeof profile.missions!=='object')profile.missions={};
  if(!Array.isArray(profile.missions.claimed))profile.missions.claimed=[];
  return profile.missions;
}
const history=p=>Array.isArray(p.battleHistory)?p.battleHistory:[];
const countMode=(p,prefix)=>history(p).filter(x=>String(x.mode||'').startsWith(prefix)).length;
const countModeWins=(p,prefix)=>history(p).filter(x=>String(x.mode||'').startsWith(prefix)&&x.won).length;

export function metricValue(profile,metric,{figures=[],byId=null}={}){
  const h=history(profile);
  switch(metric){
    case 'deckReady': return byId&&validateDeck(profile.deck||[],byId,profile.owned||{}).valid?1:0;
    case 'battles': return Number(profile.battleStats?.battles??h.length);
    case 'wins': return Number(profile.battleStats?.wins??h.filter(x=>x.won).length);
    case 'uniqueOwned': return figures.filter(f=>!f.pending&&(profile.owned?.[f.sourceId]||0)>0).length;
    case 'collectionComplete': {const released=figures.filter(f=>!f.pending);return released.length&&released.every(f=>(profile.owned?.[f.sourceId]||0)>0)?1:0;}
    case 'gachaDraws': return Number(profile.gachaStats?.draws||0);
    case 'conversions': return Number(profile.gachaStats?.converted||0);
    case 'qualifierBattles': return Number(profile.battleStats?.qualifierBattles??countMode(profile,'qualifier'));
    case 'leagueBattles': return Number(profile.battleStats?.leagueBattles??countMode(profile,'mob-league'));
    case 'rankUpWins': return Number(profile.battleStats?.rankUpWins??countModeWins(profile,'rankup-tournament'));
    case 'masterWins': return Number(profile.battleStats?.masterWins??countModeWins(profile,'mob-master'));
    default:return 0;
  }
}
export function missionState(profile,mission,ctx){normalizeMissions(profile);const progress=metricValue(profile,mission.metric,ctx),claimed=profile.missions.claimed.includes(mission.id);return {...mission,progress,complete:progress>=mission.target,claimed};}
export function allMissionStates(profile,ctx){return MISSIONS.map(m=>missionState(profile,m,ctx));}
export function claimMission(profile,id,ctx){normalizeMissions(profile);const mission=MISSIONS.find(m=>m.id===id);if(!mission)throw new Error('ミッションが見つかりません。');const state=missionState(profile,mission,ctx);if(state.claimed)throw new Error('受け取り済みです。');if(!state.complete)throw new Error('まだ達成していません。');profile.coins=(Number(profile.coins)||0)+mission.reward.coins;profile.diamonds=(Number(profile.diamonds)||0)+mission.reward.diamonds;profile.missions.claimed.push(id);return mission.reward;}
