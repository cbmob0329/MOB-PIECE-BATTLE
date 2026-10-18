export const BASE_DECK_SLOTS=5;
export const MAX_DECK_SLOTS=20;
export const DECK_SLOT_PRICE=10000;
export function deckSlotCount(profile){return Math.max(BASE_DECK_SLOTS,Math.min(MAX_DECK_SLOTS,Math.trunc(Number(profile.deckSlotCount)||BASE_DECK_SLOTS)));}
export function prepareDeckExpansion(profile,expectedCount=deckSlotCount(profile)){
 const count=deckSlotCount(profile);
 if(count!==expectedCount)throw Error('デッキ枠が更新されています。画面を開き直してください。');
 if(count>=MAX_DECK_SLOTS)throw Error('デッキ枠は最大20枠です。');
 if(!Number.isSafeInteger(profile.coins)||profile.coins<DECK_SLOT_PRICE)throw Error('10,000コインが必要です。');
 const next=structuredClone(profile);next.coins-=DECK_SLOT_PRICE;next.deckSlotCount=count+1;
 next.soulDecks=Array.from({length:count+1},(_,i)=>[...(next.soulDecks?.[i]||[])]);
 return next;
}
