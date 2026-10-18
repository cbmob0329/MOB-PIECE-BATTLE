import additions from './dorayaki-series.json' with {type:'json'};
import {publicAsset} from './public-assets.js';
import {matchesMaterial,recipeMaterialClass} from '../game/fusion-rules.js';
export function applyDorayakiSeries(catalog){
 const figures=[...catalog.figures,...additions.figures.map(f=>({...f,image:publicAsset(f.image)}))];
 const by=new Map(figures.map(f=>[f.id,f])),tags=[...catalog.tags,...additions.tags],tagNames=new Map(tags.map(t=>[t.id,t.name]));
 const label=m=>m.id?by.get(m.id).name:m.attribute?`${m.attribute}属性のフィギュア`:`${tagNames.get(m.tag)}タグのフィギュア`;
 const recipes=[...catalog.recipes,...additions.recipes.map(r=>({...r,label:r.materials.map(label).join(' × '),targetClass:by.get(r.target).soulClass,targetTags:by.get(r.target).tags,targetAttribute:by.get(r.target).attribute}))];
 const linked=figures.map(f=>({...f,fusionMaterials:recipes.filter(r=>r.target===f.id),fusionTargets:[...new Set([...(f.fusionTargets||[]),...recipes.filter(r=>(r.materialClasses?r.materialClasses.includes(f.soulClass):recipeMaterialClass(r,by)===f.soulClass)&&r.materials.some(m=>matchesMaterial(f,m))).map(r=>r.target)])]}));
 return {...catalog,version:catalog.version+'+dorayaki',figures:linked,recipes,tags,meta:{...catalog.meta,totalFigures:linked.length,countsByRarity:Object.fromEntries(['R','SR','SSR','UR','MOB'].map(k=>[k,linked.filter(f=>f.rarity===k).length])),countsBySoulClass:Object.fromEntries([['seed','シードソウル'],['middle','ミドルソウル'],['mob','MOBソウル']].map(([k,n])=>[n,linked.filter(f=>f.soulClass===k).length]))}};
}
