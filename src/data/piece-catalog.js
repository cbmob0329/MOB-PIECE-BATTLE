import definitions from './piece-figures.json' with {type:'json'};
import texts from './soul-skill-texts.js';
export const mainBaseIds=new Set([...Array.from({length:15},(_,i)=>String(i+1).padStart(2,'0')),...Array.from({length:8},(_,i)=>String(i+32)),'186','187']);
export const collectionOf=f=>f.id?.startsWith('piece:')||mainBaseIds.has(f.id||f.sourceId)?'main':'collab';
const timings={'自分メイン':'own-main','相手攻撃宣言時':'attack-response','相手スキル発動時':'skill-response','撃破時':'defeat-response'};
export const pieceFigures=definitions.records.map(r=>{
 const [timingLabel,effect]=texts[r.program].split(' | ');
 return {...r,uid:'PIECE-'+r.number,image:'piecefig/'+r.number+'.png',attackType:['bell'].includes(r.series)?'魔法':'物理',role:r.series==='object'?'支援':r.soulClass==='mob'?'切り札':'連携',collection:'main',
  soulSkill:{name:r.skillName,timing:timings[timingLabel],timingLabel,effect,description:effect,sourceText:effect,program:r.program},
  source:{figureFile:definitions.source,rarity:r.rarity,statsText:`ATK ${r.atk} / DEF ${r.def}`,traitText:'追加47体・2026-10-03設計',soul:{text:effect},decision:'名称と明記されたレア度・階級はユーザー資料を採用。未指定性能は既存効果プログラムで設計。',basis:{number:r.number,series:r.series,program:r.program}},fusionMaterials:[],fusionTargets:[]};
});
const specialPairs={'013':['011','022'],'025':['022','040'],'039':['036','038'],'049':['046','048']};
export function extendPieceCatalog(base){
 const figures=[...base.figures.map(f=>({...f,collection:collectionOf(f),fusionMaterials:[...f.fusionMaterials],fusionTargets:[...f.fusionTargets]})),...pieceFigures.map(f=>({...f,fusionMaterials:[],fusionTargets:[]}))];
 const tags=[...base.tags,...definitions.tags],byTag=new Map(tags.map(t=>[t.id,t.name])),byId=new Map(figures.map(f=>[f.id,f]));
 const extra=[];
 for(const f of pieceFigures.filter(f=>f.soulClass!=='seed')){
  const materials=[{tag:f.tags[1]},{tag:'piece-main'}];
  extra.push({id:f.uid+'-normal',target:f.id,fromClass:f.soulClass==='middle'?'seed':'middle',materials,label:materials.map(m=>byTag.get(m.tag)).join(' × '),basis:'追加47体 通常融合',special:false});
  if(specialPairs[f.number]){const ids=specialPairs[f.number].map(n=>'piece:'+n);extra.push({id:f.uid+'-special',target:f.id,fromClass:null,materials:ids.map(id=>({id})),label:ids.map(id=>byId.get(id).name).join(' × '),basis:'追加47体 特殊融合',special:true,bonusATK:20,bonusDEF:20});}
 }
 for(const r of extra){byId.get(r.target).fusionMaterials.push(r);for(const f of figures)if((r.special||f.soulClass===r.fromClass)&&r.materials.some(m=>m.id?m.id===f.id:f.tags.includes(m.tag)))f.fusionTargets.push(r.target);}
 // New pieces may also satisfy the unchanged original recipes (for example PB2).
 for(const f of figures.filter(f=>f.id.startsWith('piece:')))for(const r of base.recipes)if((r.special||f.soulClass===r.fromClass)&&r.materials.some(m=>m.id?m.id===f.id:m.tag?f.tags.includes(m.tag):f.attribute===m.attribute))f.fusionTargets.push(r.target);
 for(const f of figures)f.fusionTargets=[...new Set(f.fusionTargets)];
 const countsBySoulClass=Object.fromEntries([['seed','シードソウル'],['middle','ミドルソウル'],['mob','MOBソウル']].map(([key,name])=>[name,figures.filter(f=>f.soulClass===key).length]));
 return {...base,version:base.version+'+piece47',meta:{...base.meta,totalFigures:figures.length,countsBySoulClass,countsBySource:{...base.meta.countsBySource,piece:47},countsByRarity:Object.fromEntries(['R','SR','SSR','UR','MOB'].map(k=>[k,figures.filter(f=>f.rarity===k).length]))},figures,recipes:[...base.recipes,...extra],tags};
}
// Inventory IDs and old numerical combat fields remain stable; new pieces use the Soul engine.
export const pieceInventoryFigures=pieceFigures.map((f,i)=>({id:f.id,sourceId:f.id,name:f.name,image:f.image,rarity:f.rarity,tags:f.tags,dexNo:342+i,displayNo:'No.'+String(342+i).padStart(3,'0'),pending:false,source:'piece47',statsText:f.source.statsText,traitText:f.source.traitText,soul:{name:f.soulSkill.name,text:f.soulSkill.effect},mobPiece:{cost:1,hp:f.def,attack:f.atk,defense:f.def,speed:20},mobPieceV115:{cost:1,hp:f.def,attack:f.atk,defense:f.def,speed:20},adjacencyTags:[],pieceSoul:{}}));
