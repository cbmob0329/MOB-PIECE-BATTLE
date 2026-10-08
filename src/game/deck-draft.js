import {ensureSoulDecks,prepareSoulDeck,validateSoulDeck,soulDeckAddStatus} from './soul-battle.js';
import {addRoute} from './soul-deck-assist.js';
export function createDeckDraft(profile){const copy=structuredClone(profile);return {slot:copy.soulDeckSlot||0,original:[...ensureSoulDecks(copy)],ids:[]};}
export function draftProfile(profile,draft){return {...profile,soulDeckSlot:draft.slot,soulDecks:Array.from({length:5},(_,i)=>i===draft.slot?[...draft.ids]:[...(profile.soulDecks?.[i]||[])])};}
export function draftStatus(profile,draft,id){return soulDeckAddStatus(draftProfile(profile,draft),id);}
export function updateDraft(profile,draft,ids){const next=prepareSoulDeck(draftProfile(profile,draft),ids);draft.ids=[...next.soulDecks[draft.slot]];return draft.ids;}
export function addDraftRoute(profile,draft,needs){return updateDraft(profile,draft,addRoute(draft.ids,needs,profile.owned));}
export function prepareDraftSave(profile,draft){
 if((profile.soulDeckSlot||0)!==draft.slot||JSON.stringify(profile.soulDecks?.[draft.slot]||[])!==JSON.stringify(draft.original))throw Error('元のデッキが変更されています。キャンセルして開き直してください。');
 const check=validateSoulDeck(draft.ids,profile.owned,{profile,slot:draft.slot});
 if(!check.valid)throw Error(check.errors[0]||`45体まであと${45-draft.ids.length}体です`);
 return prepareSoulDeck(profile,draft.ids);
}
