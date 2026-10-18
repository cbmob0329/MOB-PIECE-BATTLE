import decks from './dorayaki-decks.json' with {type:'json'};
export {decks as dorayakiDecks};
export const dorayakiTestEnemies=decks.flatMap(d=>[
 {id:d.id+'-normal',name:d.name+' · ノーマル',rank:'NORMAL',deck:[...d.deck],themeTags:[d.id==='dorayaki-desert'?'series-dorayaki-desert':'series-dorayaki-sea'],strategy:{atk:1,def:1,skill:'support',target:'weak',skillLimit:1,fusionLimit:1,skillEvery:1,fusionEvery:1}},
 {id:d.id+'-hard',name:d.name+' · ベリーハード',rank:'VERY HARD',deck:[...d.deck],themeTags:[d.id==='dorayaki-desert'?'series-dorayaki-desert':'series-dorayaki-sea'],strategy:{atk:1,def:1,skill:'support',target:'weak',skillLimit:3,fusionLimit:2,skillEvery:1,fusionEvery:1}}
]);
