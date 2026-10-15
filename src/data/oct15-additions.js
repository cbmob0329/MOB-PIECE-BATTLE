import user from './oct15-user-edits.json' with {type:'json'};
import added from './oct15-new-figures.json' with {type:'json'};
import {matchesMaterial} from '../game/fusion-rules.js';
export function applyOct15(catalog){
 const old=new Map(catalog.figures.map(f=>[f.id,f]));
 const figures=user.records.map(r=>({...old.get(r.id),id:r.id,uid:r.uid,name:r.name,series:r.series,series2:r.series2||'',soulClass:r.soulClass,rarity:r.rarity,attribute:r.attribute,attackType:r.attackType,role:r.role,atk:r.atk,def:r.def,tags:r.tags,image:r.gameImage||old.get(r.id)?.image,passive:r.summon.passive,soulSkill:{...old.get(r.id)?.soulSkill,name:r.skill.name,description:r.skill.description,effect:r.skill.description,timing:r.skill.timing,runtimePlan:r.skill.plan}}));
 figures.push(...added.figures);const by=new Map(figures.map(f=>[f.id,f]));
 const recipes=[...user.records.flatMap(r=>r.summon.recipes),...added.recipes].map(r=>({...r,targetClass:by.get(r.target).soulClass,targetTags:by.get(r.target).tags}));
 for(const r of recipes)if(r.id.startsWith('oct15-24-')&&r.special)r.materialClasses=['middle','mob'];
 for(const f of figures){f.fusionMaterials=recipes.filter(r=>r.target===f.id);f.fusionTargets=[...new Set(recipes.filter(r=>r.materials.some(m=>matchesMaterial(f,m))).map(r=>r.target))];}
 return {...catalog,version:catalog.version+'+oct15',figures,recipes,meta:{...catalog.meta,totalFigures:figures.length,countsByRarity:Object.fromEntries(['R','SR','SSR','UR','MOB'].map(k=>[k,figures.filter(f=>f.rarity===k).length])),countsBySoulClass:Object.fromEntries([['seed','シードソウル'],['middle','ミドルソウル'],['mob','MOBソウル']].map(([k,n])=>[n,figures.filter(f=>f.soulClass===k).length]))}};
}
