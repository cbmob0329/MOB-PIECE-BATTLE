import data from './oct14-new-figures.json' with {type:'json'};
import user from './oct14-user-edits.json' with {type:'json'};
import {matchesMaterial} from '../game/fusion-rules.js';
export function applyOct14(catalog){
 const old=new Map(catalog.figures.map(f=>[f.id,f]));
 const figures=user.records.map(r=>({...old.get(r.id),id:r.id,uid:r.uid,name:r.name,collection:old.get(r.id)?.collection||'collab',series:r.series,soulClass:r.soulClass,rarity:r.rarity,attribute:r.attribute,attackType:r.attackType,role:r.role,atk:r.atk,def:r.def,tags:r.tags,image:r.gameImage,passive:r.summon.passive,soulSkill:{name:r.skill.name,description:r.skill.description,effect:r.skill.description,timing:r.skill.timing,program:old.get(r.id)?.soulSkill.program,runtimePlan:r.skill.plan}}));
 figures.push(...data.figures.map(f=>({...f,tags:[...f.tags]})));
 const by=new Map(figures.map(f=>[f.id,f])),recipes=[...user.records.flatMap(r=>r.summon.recipes),...data.recipes.map(r=>{const fixed=r.materials.filter(m=>m.id).map(m=>by.get(m.id)?.soulClass);const fromClass=fixed.length&&fixed.every(c=>c===fixed[0])?fixed[0]:r.fromClass;return {...r,explicitFromClass:fromClass,fromClass};})];
 for(const f of figures){f.fusionMaterials=recipes.filter(r=>r.target===f.id);f.fusionTargets=[...new Set(recipes.filter(r=>r.fromClass===f.soulClass&&r.materials.some(m=>matchesMaterial(f,m))).map(r=>r.target))];}
 const tags=[...catalog.tags.filter(t=>!user.deletedTags.includes(t.id)).map(t=>({...t,name:user.tagNames[t.id]||t.name})),...data.tags];
 return {...catalog,version:catalog.version+'+oct14',figures,recipes,tags,archivedFigures:[...(catalog.archivedFigures||[]),...catalog.figures.filter(f=>user.deletedIds.includes(f.id))],meta:{...catalog.meta,totalFigures:figures.length,countsByRarity:Object.fromEntries(['R','SR','SSR','UR','MOB'].map(k=>[k,figures.filter(f=>f.rarity===k).length])),countsBySoulClass:Object.fromEntries([['seed','シードソウル'],['middle','ミドルソウル'],['mob','MOBソウル']].map(([k,n])=>[n,figures.filter(f=>f.soulClass===k).length]))}};
}
