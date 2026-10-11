import {campaignTowers} from '../data/tower-campaign.js';
import {towerVictoryKeys} from './tower-rewards.js';
import catalog from '../data/soul-catalog.js';
import {soulFigures} from './soul-battle.js';
import {MISSIONS,MISSION_RANKS,RANK_THRESHOLDS,STANDARD_REWARD} from '../data/missions.js?v=7.3.0';
import {validateSoulDeck,ensureSoulDecks} from './soul-battle.js';

export function normalizeMissions(profile){
  if(!profile.missions||typeof profile.missions!=='object')profile.missions={};
  if(!Array.isArray(profile.missions.claimed))profile.missions.claimed=[];
  return profile;
}
const history=p=>Array.isArray(p.battleHistory)?p.battleHistory:[];
const countMode=(p,prefix)=>history(p).filter(x=>String(x.mode||'').startsWith(prefix)).length;
const countModeWins=(p,prefix)=>history(p).filter(x=>String(x.mode||'').startsWith(prefix)&&x.won).length;

export function metricValue(profile,metric,{figures=[],byId=null}={}){
  if(metric.startsWith('tower:'))return towerVictoryKeys(profile).keys.some(k=>k.startsWith(metric.slice(6)+':5:'))?1:0;
  if(metric.startsWith('tag:'))return profile.progression?.tagWins?.[metric.slice(4)]||0;
  if(metric.startsWith('attribute:'))return profile.progression?.attributeWins?.[metric.slice(10)]||0;
  const h=history(profile);
  switch(metric){
    case 'fusions':return Number(profile.battleStats?.fusions||0);
    case 'flawlessWins':return Number(profile.battleStats?.flawlessWins||0);
    case 'deckReady': return validateSoulDeck(ensureSoulDecks(profile),profile.owned||{}).valid?1:0;
    case 'rankCompletion':return Math.min(metricValue(profile,'battles'),metricValue(profile,'wins'));
    case 'freeBattles':return Number(profile.battleStats?.freeBattles||0);
    case 'freeWins':return Number(profile.battleStats?.freeWins||0);
    case 'playerRank':return 1+Math.max(0,MISSION_RANKS.indexOf(profile.highestRank||profile.rank));
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
const sideMissions=[...catalog.tags.map(t=>({metric:'tag:'+t.id,label:'タグ「'+t.name+'」',category:'タグ編成'})),...[...new Set(soulFigures.flatMap(f=>f.attribute.split('/')))].map(a=>({metric:'attribute:'+a,label:a+'属性',category:'属性編成'}))].flatMap(spec=>[1,5,15,30,60,100,150,200].map((target,i)=>({id:'v2:'+spec.metric+':'+target,rank:MISSION_RANKS[i],category:spec.category,title:spec.label+' · '+target+'勝',description:spec.label+'を1体以上デッキに編成して勝利（1戦につき1回）',metric:spec.metric,target,reward:STANDARD_REWARD})));
const extraMissions=[...['fusions','flawlessWins'].flatMap(metric=>[1,5,15,30,60,100,150,200].map((target,i)=>({id:`v3:${metric}:${target}`,rank:MISSION_RANKS[i],category:metric==='fusions'?'フュージョン':'無傷で勝利',title:metric==='fusions'?`フュージョン ${target}回`:`無傷で ${target}勝`,description:metric==='fusions'?'自分の融合・強化を累計で実行（対戦完了時に記録）':'一度もライフを減らさず勝利。回復で満タンに戻した対戦は対象外。',metric,target,reward:STANDARD_REWARD}))),...campaignTowers.map(t=>({id:'v3:tower:'+t.id,rank:t.rank,category:'タワー制覇',title:t.name+' 制覇',description:'5階のタワーマスターを撃破。クリア済みのタワーも対象。',metric:'tower:'+t.id,target:1,reward:STANDARD_REWARD}))];
const missions=[...MISSIONS,...sideMissions,...extraMissions];
export function missionRank(profile){const wins=metricValue(profile,'rankCompletion');return MISSION_RANKS.find(rank=>wins<RANK_THRESHOLDS[rank].at(-1))||'SS';}
export function allMissionStates(profile,ctx){return missions.map(m=>missionState(profile,m,ctx));}
export function claimMission(profile,id,ctx){normalizeMissions(profile);const mission=missions.find(m=>m.id===id);if(!mission)throw new Error('ミッションが見つかりません。');const state=missionState(profile,mission,ctx);if(state.claimed)throw new Error('受け取り済みです。');if(!state.complete)throw new Error('まだ達成していません。');profile.coins=(Number(profile.coins)||0)+mission.reward.coins;profile.diamonds=(Number(profile.diamonds)||0)+mission.reward.diamonds;profile.missions.claimed.push(id);return mission.reward;}
export function claimAllMissions(profile,ctx){normalizeMissions(profile);const ready=allMissionStates(profile,ctx).filter(x=>x.complete&&!x.claimed);if(!ready.length)throw new Error('受け取れるミッション報酬はありません。');const total={coins:0,diamonds:0,count:ready.length};for(const m of ready){profile.coins=(Number(profile.coins)||0)+m.reward.coins;profile.diamonds=(Number(profile.diamonds)||0)+m.reward.diamonds;profile.missions.claimed.push(m.id);total.coins+=m.reward.coins;total.diamonds+=m.reward.diamonds;}return total;}
