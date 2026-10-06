import {applyOct06Draft} from './oct06-draft.js';
import data from './oct06-spec.json' with {type:'json'};
import {matchesMaterial,recipeMaterialClass} from '../game/fusion-rules.js';
export const oct06RetiredIds=new Set(data.retiredIds);
// User-requested additions preserve every existing tag; legacy rarity tag caps
// do not truncate explicitly approved additions. Unspecified stats/skills stay intact.
export function applyOct06Spec(catalog){
 const tags=catalog.tags.map(t=>({...t})),tagByName=new Map(tags.map(t=>[t.name,t.id]));
 const ensureTag=name=>{if(!tagByName.has(name)){const id=name==='眠る才能'?'oct06-latent-talent':'oct06-puni-series';if(tags.some(t=>t.id===id))throw Error('Duplicate Oct06 tag ID');tags.push({id,name});tagByName.set(name,id);}return tagByName.get(name);};
 const figures=catalog.figures.map(f=>({...f,tags:[...f.tags]})),by=new Map(figures.map(f=>[f.id,f]));
 for(const p of data.patches){const f=by.get(p.id);if(!f)throw Error('Unknown Oct06 figure '+p.id);f.tags=[...new Set([...f.tags,...p.addTags.map(ensureTag)])];if(p.soulClass)f.soulClass=p.soulClass;}
 const sourceRecipes=applyOct06Draft(figures,catalog.recipes);
 const replaced=new Set(data.recipes.map(r=>r.target));
 const active=figures.filter(f=>!oct06RetiredIds.has(f.id)),activeBy=new Map(active.map(f=>[f.id,f]));
 const retired=figures.filter(f=>oct06RetiredIds.has(f.id)).map(f=>({...f,retired:true}));
 const valid=r=>activeBy.has(r.target)&&activeBy.get(r.target).soulClass!=='seed'&&r.materials.every(m=>!m.id||activeBy.has(m.id));
 const recipes=[...sourceRecipes.filter(r=>!replaced.has(r.target)&&valid(r)).map(r=>({...r})),...data.recipes.map(r=>({...r,materials:r.materials.map(m=>m.tagName?{tag:ensureTag(m.tagName)}:m),basis:'2026-10-06 user specification'}))];
 for(const r of recipes){r.fromClass=recipeMaterialClass(r,activeBy);if(!r.label)r.label=r.materials.map(m=>m.id?activeBy.get(m.id).name:m.tag?tags.find(t=>t.id===m.tag).name:m.attribute+'属性').join(' × ');}
 for(const f of active){f.fusionMaterials=recipes.filter(r=>r.target===f.id);f.fusionTargets=[...new Set(recipes.filter(r=>f.soulClass===recipeMaterialClass(r,activeBy)&&r.materials.some(m=>matchesMaterial(f,m))).map(r=>r.target))];}
 return {...catalog,figures:active,recipes,tags,archivedFigures:[...(catalog.archivedFigures||[]),...retired],meta:{...catalog.meta,totalFigures:active.length,oct06Retired:retired.length,countsBySoulClass:Object.fromEntries([['seed','シードソウル'],['middle','ミドルソウル'],['mob','MOBソウル']].map(([k,n])=>[n,active.filter(f=>f.soulClass===k).length])),countsByRarity:Object.fromEntries(['R','SR','SSR','UR','MOB'].map(k=>[k,active.filter(f=>f.rarity===k).length]))}};
}
