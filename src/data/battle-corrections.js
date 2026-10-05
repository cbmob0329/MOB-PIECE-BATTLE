import {matchesMaterial,recipeMaterialClass} from '../game/fusion-rules.js';
// Explicit BATTLE exclusions. Keep IDs recognizable solely for old-save recovery.
export const isStoryOnlyId=id=>/^spboss0(?:0[1-9]|[1-3]\d|4[0-6])$/.test(id)||/^mq:spbossfig\/(?:3[5-9]|4[0-6])$/.test(id);
export const storyOnlyTags=new Set(['61','62','63']);
// Exact IDs confirmed by the user; source/story tags and recipe conditions are not membership.
export const companionRestorations=['70','71','72','73','74','185','79','80'];
export function applyBattleCorrections(catalog){
 const archivedFigures=catalog.figures.filter(f=>isStoryOnlyId(f.id)).map(f=>({...f,retired:true}));
 const figures=catalog.figures.filter(f=>!isStoryOnlyId(f.id)).map(f=>({...f,tags:f.tags.filter(t=>!storyOnlyTags.has(t))}));
 for(const f of figures){
  if(!companionRestorations.includes(f.id))f.tags=f.tags.filter(t=>t!=='13');
  // User explicitly assigns 44 to the protagonist party; 191 retains its original remaining tags.
  if(f.id==='44')f.tags=[...new Set(['24',...f.tags])];
  if(companionRestorations.includes(f.id)&&!f.tags.includes('13')){f.tags=['13',...f.tags];const cap=catalog.rules.tagLimits[f.rarity];while(f.tags.length>cap){const cosmetic=f.tags.findIndex(t=>['02','03','04','05','06','07','28','29','31'].includes(t));if(cosmetic<0)throw Error('Review companion tag cap: '+f.id);f.tags.splice(cosmetic,1);}}
 }
 const by=new Map(figures.map(f=>[f.id,f])),recipes=catalog.recipes.filter(r=>by.has(r.target)&&r.materials.every(m=>!m.id||by.has(m.id)));
 for(const f of figures){f.fusionMaterials=recipes.filter(r=>r.target===f.id);f.fusionTargets=[...new Set(recipes.filter(r=>f.soulClass===recipeMaterialClass(r,by)&&r.materials.some(m=>matchesMaterial(f,m))).map(r=>r.target))];}
 return {...catalog,figures,archivedFigures,recipes,tags:catalog.tags.filter(t=>!storyOnlyTags.has(t.id)),meta:{...catalog.meta,totalFigures:figures.length,archivedStoryOnly:archivedFigures.length,countsBySoulClass:Object.fromEntries([['seed','シードソウル'],['middle','ミドルソウル'],['mob','MOBソウル']].map(([k,n])=>[n,figures.filter(f=>f.soulClass===k).length])),countsByRarity:Object.fromEntries(['R','SR','SSR','UR','MOB'].map(k=>[k,figures.filter(f=>f.rarity===k).length]))}};
}
