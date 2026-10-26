import data from './mb-adventure.json' with {type:'json'};
const id=n=>'MB'+String(n).padStart(3,'0');
export const mbTestDecks=data.groups.map(g=>({id:'mb-test-'+g.key,name:g.name+'（全3弾テスト）',deck:[...g.seeds.map(id),...g.seeds.slice(0,10).map(id),...g.middles.flatMap(n=>[id(n),id(n)]),...g.mobs.map(id)]}));
export const mbTestEnemies=mbTestDecks.map(d=>({...d,name:'TEST · '+d.name,rank:'C',difficulty:'normal'}));
