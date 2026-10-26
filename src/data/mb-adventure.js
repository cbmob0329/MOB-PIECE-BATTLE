import data from './mb-adventure.json' with {type:'json'};
import {matchesMaterial,recipeMaterialClass} from '../game/fusion-rules.js';
export const mbAdventure=data;
export const removedMbIds=new Set(data.removedIds);
export function applyMbAdventure(catalog){
 const replacements=new Set(data.figures.map(f=>f.id));
 const figures=[...catalog.figures.filter(f=>!removedMbIds.has(f.id)&&!replacements.has(f.id)),...data.figures];
 const by=new Map(figures.map(f=>[f.id,f])),tags=[...catalog.tags,...data.tags];
 const recipes=[...catalog.recipes.filter(r=>!removedMbIds.has(r.target)&&!replacements.has(r.target)&&!r.materials.some(m=>removedMbIds.has(m.id))),...data.recipes].map(r=>({...r,label:r.materials.map(m=>m.id?by.get(m.id)?.name:m.attribute?m.attribute+'属性':tags.find(t=>t.id===m.tag)?.name).join(' × '),targetClass:by.get(r.target)?.soulClass,targetTags:by.get(r.target)?.tags,targetAttribute:by.get(r.target)?.attribute}));
 const linked=figures.map(f=>({...f,fusionMaterials:recipes.filter(r=>r.target===f.id),fusionTargets:[...new Set(recipes.filter(r=>(r.materialClasses?r.materialClasses.includes(f.soulClass):recipeMaterialClass(r,by)===f.soulClass)&&r.materials.some(m=>matchesMaterial(f,m))).map(r=>r.target))]}));
 return {...catalog,version:catalog.version+'+mb-adventure-1',archivedFigures:(catalog.archivedFigures||[]).filter(f=>!removedMbIds.has(f.id)),figures:linked,recipes,tags,meta:{...catalog.meta,totalFigures:linked.length,countsByRarity:Object.fromEntries(['R','SR','SSR','UR','MOB'].map(k=>[k,linked.filter(f=>f.rarity===k).length])),countsBySoulClass:Object.fromEntries([['seed','シードソウル'],['middle','ミドルソウル'],['mob','MOBソウル']].map(([k,n])=>[n,linked.filter(f=>f.soulClass===k).length]))}};
}
