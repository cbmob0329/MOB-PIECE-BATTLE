import {campaignTowers,campaignOpponentCount} from '../data/tower-campaign.js';
export const TOWER_MASTER_DIAMONDS=50;
export const TOWER_OPPONENT_REWARD=Object.freeze({coins:2000,diamonds:10});
// Historical floor payouts are fixed; free-battle reward changes must not alter migration.
const OLD_FLOOR_REWARD={coins:1000,diamonds:1};
export function towerVictoryKeys(profile){
 const keys=new Set(),floors=new Set();
 for(const tower of campaignTowers){const region=profile.towerCampaign?.regions?.[tower.id];
  const cleared=new Set([...(Array.isArray(region?.cleared)?region.cleared:[]),...(tower.id==='grass'&&Array.isArray(profile.towerProgress?.cleared)?profile.towerProgress.cleared:[])].filter(n=>Number.isInteger(n)&&n>=1&&n<=5));
  for(let floor=1;floor<=5;floor++){const count=campaignOpponentCount(tower,floor);if(cleared.has(floor))floors.add(tower.id+':'+floor);const defeated=Array.isArray(region?.defeated?.[floor])?region.defeated[floor]:[];
   for(let slot=0;slot<count;slot++)if(cleared.has(floor)||(floor<5&&defeated.includes(slot)))keys.add(tower.id+':'+floor+':'+slot);
  }
 }
 return {keys:[...keys],floorCount:floors.size};
}
// Only call on a prepared clone; balances and receipt are committed together.
export function applyTowerOpponentRewards(next){
 const {keys,floorCount}=towerVictoryKeys(next),previous=next.towerOpponentRewards,initialized=previous?.version===1,claimed=new Set(initialized&&Array.isArray(previous.claimed)?previous.claimed:[]),missing=keys.filter(key=>!claimed.has(key));
 const coins=Math.max(0,missing.length*TOWER_OPPONENT_REWARD.coins-(initialized?0:floorCount*OLD_FLOOR_REWARD.coins));
 let diamonds=Math.max(0,missing.length*TOWER_OPPONENT_REWARD.diamonds-(initialized?0:floorCount*OLD_FLOOR_REWARD.diamonds));
 next.towerOpponentRewards={...previous,version:1,claimed:[...new Set([...claimed,...keys])]};
 if(!initialized)next.towerOpponentRewards.backfill={opponents:keys.length,coins,diamonds};
 // A master is one completed series per tower; legacy grass and campaign share one receipt.
 const masters=[...new Set(keys.filter(k=>k.split(':')[1]==='5').map(k=>k.split(':')[0]))];
 const receipt=next.towerMasterRewards,paid=new Set(receipt?.version===1&&Array.isArray(receipt.claimed)?receipt.claimed:[]);
 const unpaid=masters.filter(id=>!paid.has(id));
 diamonds+=unpaid.length*(TOWER_MASTER_DIAMONDS-TOWER_OPPONENT_REWARD.diamonds);
 next.towerMasterRewards={version:1,claimed:[...new Set([...paid,...masters])]};
 if(!coins&&!diamonds)return null;
 next.coins=(next.coins||0)+coins;next.diamonds=(next.diamonds||0)+diamonds;return {coins,diamonds};
}
export function prepareTowerRewards(profile){const next=structuredClone(profile),reward=applyTowerOpponentRewards(next);return {next,reward};}
