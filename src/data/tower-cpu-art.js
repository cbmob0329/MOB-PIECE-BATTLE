import {publicAsset} from './public-assets.js';
// CPU presentation only: figure IDs, decks, progression and the player avatar stay authoritative.
export const towerCpuRegions=['grass','shadow','cartoon','sweets','undersea','castle','desert','magma','neon','tribal','country'];
export const towerCpuRoster=towerCpuRegions.flatMap(region=>Array.from({length:4},(_,i)=>{
 const number=String(i+1).padStart(2,'0'),id=region+'-'+number,base='assets/tower-masters/'+region+'/'+number+'/';
 return {id,region,number,full:publicAsset(base+'full.png'),bust:publicAsset(base+'bust.png')};
}));
const regions={grass:'grass',grass2:'grass',shadow:'shadow',cartoon:'cartoon',sweets:'sweets',sea:'undersea',castle:'castle',desert:'desert',desert2:'desert',magma:'magma',magma2:'magma',neon:'neon',neon2:'neon',tribe:'tribal',town:'country',town2:'country'};
// 01–03 are the three regular CPU slots; 04 is the summit master. II areas share their regional cast.
export function towerCpuArt(tower,floor,slot=0){
 const region=regions[typeof tower==='string'?tower:tower?.id];
 if(!region||!Number.isInteger(floor)||floor<1||floor>5||!Number.isInteger(slot)||slot<0||slot>2)return null;
 const number=String(floor===5?4:slot+1).padStart(2,'0');
 return towerCpuRoster.find(cpu=>cpu.region===region&&cpu.number===number)||null;
}
