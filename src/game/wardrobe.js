import {wardrobeThemes} from '../data/wardrobe-themes.js';
import {testSettings} from '../data/test-settings.js';
export {wardrobeThemes};
export const wardrobeSlots={outfit:'衣装',scarf:'スカーフ',eyewear:'眼鏡',shoes:'靴',floating:'浮遊小物'};
const ids=new Set(wardrobeThemes.map(t=>t.id));
export const defaultOutfit=()=>Object.fromEntries(Object.keys(wardrobeSlots).map(k=>[k,'mob']));
export const allWardrobeOwned=p=>testSettings.enabled&&p.testMode===true;
export function ownsPart(p,slot,id){return id==='none'||ids.has(id)&&(id==='mob'||allWardrobeOwned(p)||p.wardrobe?.owned?.includes(`${slot}:${id}`));}
export function wardrobeState(p){
 const raw=p.wardrobe||{},owned=Array.isArray(raw.owned)?[...new Set(raw.owned.filter(v=>typeof v==='string'&&Object.hasOwn(wardrobeSlots,v.split(':')[0])&&ids.has(v.split(':')[1])&&v.split(':').length===2))]:[];
 const selected=Object.fromEntries(Object.keys(wardrobeSlots).map(k=>[k,ownsPart({...p,wardrobe:{owned}},k,raw.selected?.[k])?raw.selected[k]:'mob']));
 return {enabled:raw.enabled===true,owned,selected};
}
export function prepareWardrobe(p,selected){
 for(const k of Object.keys(wardrobeSlots))if(!ownsPart(p,k,selected[k]))throw Error('未所持のパーツは装備できません。');
 const next=structuredClone(p);next.wardrobe={...wardrobeState(p),enabled:true,selected:Object.fromEntries(Object.keys(wardrobeSlots).map(k=>[k,selected[k]]))};return next;
}
export function wardrobeLayers(selected){
 const files=[selected.outfit==='none'?'base/full.png':'base/head.png'];
 if(selected.outfit!=='none'&&selected.shoes==='none')files.push('base/bare_feet.png');
 for(const k of ['outfit','shoes','scarf','eyewear','floating'])if(ids.has(selected[k]))files.push(`layers/${selected[k]}/${k}.png`);
 return files;
}
