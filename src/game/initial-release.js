import {validateSoulDeck} from './soul-battle.js';
import release from '../data/initial-release.json' with {type:'json'};
export {release};
export function initializeInitialRelease(profile,{newProfile=false}={}){
 if(profile.initialChoice?.version===release.version)return false;
 profile.initialChoice={version:release.version,state:newProfile?'pending':'available',starterId:null};
 if(!release.banners.some(b=>b.id===profile.bannerId))profile.bannerId=release.banners[0].id;
 return true;
}
export function prepareInitialChoice(profile,id){
 if(profile.initialChoice?.version!==release.version||!['pending','available'].includes(profile.initialChoice.state))throw Error('スターターは受け取り済みです');
 const starter=release.starters.find(s=>s.id===id);if(!starter)throw Error('スターターを選んでください');
 const next=structuredClone(profile),counts={};next.owned??={};for(const fid of starter.deck)counts[fid]=(counts[fid]||0)+1;
 for(const [fid,n]of Object.entries(counts))next.owned[fid]=Math.max(next.owned[fid]||0,n);
 const decks=Array.from({length:5},(_,i)=>Array.isArray(next.soulDecks?.[i])?[...next.soulDecks[i]]:[]),slot=decks.findIndex((d,i)=>d.length===0&&validateSoulDeck(starter.deck,next.owned,{profile:{...next,soulDecks:decks},slot:i}).valid);
 if(slot>=0){decks[slot]=[...starter.deck];next.soulDecks=decks;if(profile.initialChoice.state==='pending')next.soulDeckSlot=slot;}
 if(profile.initialChoice.state==='pending'){next.centerId=starter.featuredIds[0];next.avatarId=starter.featuredIds[0];next.displayIds=[...new Set(starter.deck)].slice(0,4);}
 next.initialChoice={version:release.version,state:'claimed',starterId:id,deckSlot:slot};
 return next;
}
