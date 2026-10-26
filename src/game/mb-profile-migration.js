import {removedMbIds} from '../data/mb-adventure.js';
// Deleted catalogue entries must not survive in saved decks or interrupted battles.
export function cleanRemovedMb(profile){
 for(const id of removedMbIds){delete profile.owned?.[id];delete profile.figurePlus?.[id];delete profile.figureRecords?.[id];}
 for(const key of ['soulDecks','deckPresets'])if(Array.isArray(profile[key]))profile[key]=profile[key].map(d=>Array.isArray(d)?d.filter(id=>!removedMbIds.has(id)):[]);
 for(const key of ['deck','displayIds','favoriteFigureIds'])if(Array.isArray(profile[key]))profile[key]=profile[key].filter(id=>!removedMbIds.has(id));
 for(const key of ['towerProgress','towerCampaign']){const a=profile[key]?.active;if(a&&[...(a.enemy?.deck||[]),...(a.decks||[]).flatMap(d=>d.ids||[])].some(id=>removedMbIds.has(id)))profile[key].active=null;}
 return profile;
}
