import {fusionOptions} from './soul-battle.js';

export const fusionRefKey=ref=>typeof ref==='number'?'field:'+ref:'hand:'+ref.handIndex;

// Keep availability in the battle engine. In particular, strengthening is not
// an evolution link, and two equal IDs still represent two different copies.
export function availableFusionLinks(state,side=0){
 const player=state.players[side],refs=[...player.field.filter(Boolean).map(f=>f.uid),...player.hand.map((_,handIndex)=>({handIndex}))],links=[];
 for(let i=0;i<refs.length;i++)for(let j=i+1;j<refs.length;j++){
  const pair=[refs[i],refs[j]],recipes=fusionOptions(state,side,pair).filter(r=>!r.resonance);
  if(!recipes.length)continue;
  links.push({key:pair.map(fusionRefKey).join('|'),refs:pair,kinds:[...(recipes.some(r=>!r.special)?['soul']:[]),...(recipes.some(r=>r.special)?['mob']:[])]});
 }
 return links;
}
