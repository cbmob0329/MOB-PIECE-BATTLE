import {publicAsset} from './public-assets.js';
// CPU presentation only: figure IDs, decks, progression and the player avatar stay authoritative.
export const towerCpuRegions=['grass','shadow','cartoon','sweets','undersea','castle','desert','magma','neon','tribal','country'];
export const towerCpuRoster=towerCpuRegions.flatMap(region=>Array.from({length:4},(_,i)=>{
 const number=String(i+1).padStart(2,'0'),id=region+'-'+number,base='assets/tower-masters/'+region+'/'+number+'/';
 return {id,region,number,full:publicAsset(base+'full.png'),bust:publicAsset(base+'bust.png')};
}));
const regions={grass:'grass',grass2:'grass',shadow:'shadow',cartoon:'cartoon',sweets:'sweets',sea:'undersea',castle:'castle',desert:'desert',desert2:'desert',magma:'magma',magma2:'magma',neon:'neon',neon2:'neon',tribe:'tribal',town:'country',town2:'country'};
const masterNames={grass:'モブ草原の守護者',grass2:'モブ大草原の覇者',shadow:'モブ影の支配者',cartoon:'モブカートゥーンの奇術王',sweets:'モブスイーツの菓子王',sea:'モブ海底の守護王',castle:'モブ魔王城の城主',desert:'モブ砂漠の砂塵王',desert2:'モブ大砂漠の覇王',magma:'モブマグマの炎王',magma2:'モブ灼熱の覇王',neon:'モブネオン街の電光王',neon2:'モブネオン街の極光王',tribe:'モブ部族村の大族長',town:'モブ田舎町の守り手',town2:'モブ田舎町の大守護者'};
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
