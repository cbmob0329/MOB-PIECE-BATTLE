import {publicAsset} from './public-assets.js';
// CPU presentation only: figure IDs, decks, progression and the player avatar stay authoritative.
export const towerCpuRegions=['grass','shadow','cartoon','sweets','undersea','castle','desert','magma','neon','tribal','country'];
export const towerCpuRoster=towerCpuRegions.flatMap(region=>Array.from({length:4},(_,i)=>{
 const number=String(i+1).padStart(2,'0'),id=region+'-'+number,base='assets/tower-masters/'+region+'/'+number+'/';
 return {id,region,number,full:publicAsset(base+'full.png'),bust:publicAsset(base+'bust.png')};
}));
const regions={grass:'grass',grass2:'grass',shadow:'shadow',cartoon:'cartoon',sweets:'sweets',sea:'undersea',castle:'castle',desert:'desert',desert2:'desert',magma:'magma',magma2:'magma',neon:'neon',neon2:'neon',tribe:'tribal',town:'country',town2:'country'};
const masterNames={grass:'草原の守護者',grass2:'大草原の覇者',shadow:'影の支配者',cartoon:'カートゥーンの奇術王',sweets:'スイーツの菓子王',sea:'海底の守護王',castle:'魔王城の城主',desert:'砂漠の砂塵王',desert2:'大砂漠の覇王',magma:'マグマの炎王',magma2:'灼熱の覇王',neon:'ネオン街の電光王',neon2:'ネオン街の極光王',tribe:'部族村の大族長',town:'田舎町の守り手',town2:'田舎町の大守護者'};
// New portraits belong exclusively to summit masters; unused variants remain available.
export function towerCpuArt(tower,floor,slot=0){
 const region=regions[typeof tower==='string'?tower:tower?.id];
 if(!region||!Number.isInteger(floor)||floor<1||floor>5||!Number.isInteger(slot)||slot<0||slot>2)return null;
 if(floor!==5)return null;
 const towerId=typeof tower==='string'?tower:tower.id;
 const number=towerId.endsWith('2')?'02':'01';
 const cpu=towerCpuRoster.find(cpu=>cpu.region===region&&cpu.number===number);
 return cpu?{...cpu,name:masterNames[towerId]}:null;
}
