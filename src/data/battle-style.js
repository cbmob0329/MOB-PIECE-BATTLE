import {publicAsset} from './public-assets.js';
import additionalFields from './field-additions.json' with {type:'json'};
export const deckCubes=[
 {id:'hero',name:'炎のヒーロー',color:'#ffad32',dark:'#762713',edge:'#ffe49b',symbol:'crown',description:'燃える魂を、キューブに。'},
 {id:'guardian',name:'氷晶のガーディアン',color:'#50ceff',dark:'#143b80',edge:'#d8f6ff',symbol:'crystal',description:'氷の輝きと、揺るがない意志。'},
 {id:'shadow',name:'闇のソウル',color:'#b776ff',dark:'#341452',edge:'#ecc4ff',symbol:'skull',description:'深い影にひそむ、無限の力。'}
];
export const fieldMats=[
 ...additionalFields.map(f=>({...f,image:publicAsset(f.image)})),
 {id:'inferno',name:'煉獄の大地',image:publicAsset('battle-art/inferno.png'),color:'#ff8a44',description:'溶岩が照らす、黒曜石の舞台。'},
 {id:'ice',name:'氷晶の城塞',image:publicAsset('battle-art/ice.png'),color:'#6edaff',description:'氷の城に響く、ソウルの鼓動。'},
 {id:'verdant',name:'緑風の遺跡',image:publicAsset('battle-art/verdant.png'),color:'#9ee47f',description:'風と緑が息づく、天空の遺跡。'}
];
export function battleStyle(profile){const raw=profile.battleStyle||{};return {cube:deckCubes.find(x=>x.id===raw.cube)||deckCubes[0],mat:fieldMats.find(x=>x.id===raw.mat)||fieldMats[0],fast:raw.fast===true,sound:raw.sound===true};}
export function setBattleStyle(profile,key,id){
 if(key==='cube'&&!deckCubes.some(x=>x.id===id)||key==='mat'&&!fieldMats.some(x=>x.id===id)||!['cube','mat','fast','sound'].includes(key))throw Error('デザインを選んでください');
 const current=battleStyle(profile);profile.battleStyle={cube:current.cube.id,mat:current.mat.id,fast:current.fast,sound:current.sound,[key]:['fast','sound'].includes(key)?id===true:id};
}
