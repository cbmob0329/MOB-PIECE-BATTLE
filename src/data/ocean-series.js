import additions from './ocean-series.json' with {type:'json'};
import {matchesMaterial} from '../game/fusion-rules.js';
export const shipSeries='海底に伝わる沈没船';
export const clearSeries='海底を救うクリアスイーツ';
export const shipTag='series-sunken-ship';
export const shipMembers=Object.freeze(['NS001','NS002','NS003','NS004','NS005','NS009','NS010','M4F_SIL_V01','M4F_SIL_V02','M4F_SIL_V03','M4F_SIL_M01','M4F_SIL_M02','M4F_SIL_B01']);
export const clearMembers=Object.freeze(['NS006','mq:eventfig/43','SWEET09','SWEET31','BFX040','BFX051']);
// Neutral temporary art; existing characters never borrow another character's design.
const pendingArt='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect x="48" y="48" width="416" height="416" rx="72" fill="#173e50"/><path d="M256 128v210m-60-142h120M142 282c0 100 228 100 228 0" fill="none" stroke="#91c7d0" stroke-width="18" stroke-linecap="round"/><text x="256" y="410" fill="#fff" text-anchor="middle" font-size="27">イラスト準備中</text></svg>');
export function applyOceanSeries(catalog){
 const figures=catalog.figures.map(f=>shipMembers.includes(f.id)?{...f,series:shipSeries,tags:[...new Set([...f.tags,shipTag])]}:clearMembers.includes(f.id)?{...f,series:clearSeries}:f);
 for(const f of additions.figures)figures.push({...f,series:shipSeries,plannedImage:f.image,image:f.artReady?f.image:pendingArt,tags:[...new Set([...f.tags,shipTag])]});
 const by=new Map(figures.map(f=>[f.id,f]));
 const recipes=[...catalog.recipes,...additions.recipes.map(r=>({...r,label:r.materials.map(m=>by.get(m.id).name).join(' × '),targetClass:by.get(r.target).soulClass,targetTags:by.get(r.target).tags,targetAttribute:by.get(r.target).attribute}))];
 const linked=figures.map(f=>({...f,fusionMaterials:recipes.filter(r=>r.target===f.id),fusionTargets:[...new Set(recipes.filter(r=>r.materials.some(m=>matchesMaterial(f,m))).map(r=>r.target))]}));
 return {...catalog,version:catalog.version+'+ocean-series',figures:linked,recipes,tags:[...catalog.tags,{id:shipTag,name:shipSeries}],meta:{...catalog.meta,totalFigures:linked.length,countsByRarity:Object.fromEntries(['R','SR','SSR','UR','MOB'].map(k=>[k,linked.filter(f=>f.rarity===k).length])),countsBySoulClass:Object.fromEntries([['seed','シードソウル'],['middle','ミドルソウル'],['mob','MOBソウル']].map(([k,n])=>[n,linked.filter(f=>f.soulClass===k).length]))}};
}
