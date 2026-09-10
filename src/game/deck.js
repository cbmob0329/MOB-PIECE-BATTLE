export const RULES = Object.freeze({deckSize:25,maxCost:80,handSize:5,exchangesPerBattle:1,winsToMatch:2,centerIndex:2,duplicateCaps:Object.freeze({R:3,SR:3,SSR:2,UR:2,MOB:1}),versions:Object.freeze({stats:115,modes:132,presentation:133,tempo:136})});
// A draft validator. Ownership must additionally be supplied before a playable deck is accepted.
export function validateDeck(ids, byId, owned = null) {
 const errors=[]; const counts={}; let cost=0;
 for(const id of ids){const f=byId.get(id);if(!f){errors.push('不明なフィギュア');continue;} if(f.pending) errors.push('未公開フィギュアは編成できません'); cost+=f.mobPiece.cost;counts[id]=(counts[id]||0)+1;if(counts[id]>(RULES.duplicateCaps[f.rarity]||1))errors.push(`${f.name}の重複上限です`);if(owned && counts[id]>(owned[id]||0))errors.push(`${f.name}の所持数が不足しています`);}
 if(ids.length>25)errors.push('編成は25体までです'); if(cost>80)errors.push('TOTAL COSTは80までです');
 return {cost,count:ids.length,errors:[...new Set(errors)],valid:ids.length===25&&errors.length===0};
}
