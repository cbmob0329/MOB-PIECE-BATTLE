import {ensureSoulDecks,prepareSoulDeck,soulById} from './soul-battle.js';
export function prepareDeckReplacement(profile,index,id){
 const ids=[...ensureSoulDecks(structuredClone(profile))];
 if(!Number.isInteger(index)||index<0||index>=ids.length)throw Error('入れ替えるフィギュアを選んでください');
 if(ids[index]===id)throw Error('同じフィギュアです');
 ids[index]=id;return prepareSoulDeck(profile,ids);
}
export function replacementChoices(profile,id){
 const ids=ensureSoulDecks(structuredClone(profile));
 return [...new Set(ids)].map(oldId=>{const index=ids.indexOf(oldId);let reason='';try{prepareDeckReplacement(profile,index,id);}catch(e){reason=e.message;}return {id:oldId,index,name:soulById.get(oldId)?.name||oldId,reason};});
}
