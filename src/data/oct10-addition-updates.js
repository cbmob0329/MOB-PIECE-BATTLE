import data from './oct10-addition-updates.json' with {type:'json'};
import {matchesMaterial,recipeMaterialClass,recipeStageMatches} from '../game/fusion-rules.js';
export function applyOct10Additions(catalog){
 const figures=catalog.figures.map(f=>({...f,tags:[...f.tags]})),by=new Map(figures.map(f=>[f.id,f]));let recipes=[...catalog.recipes];
 for(const patch of data.records){const {id,skill,plan,materials,timing,...fields}=patch,f=by.get(id);if(!f)throw Error('追加番号がありません: '+id);Object.assign(f,fields);
  if(['piece:022','piece:023','piece:024','piece:025','piece:026','piece:027','piece:028','piece:029'].includes(id))f.tags=[...new Set([...f.tags,'10'])];
  if(skill)f.soulSkill={...f.soulSkill,...skill,effect:skill.description,sourceText:skill.description,timing,timingLabel:timing==='passive'?'自動発動':timing==='attack-response'?'相手攻撃宣言時':timing==='skill-response'?'相手スキル発動時':'自分メイン',runtimePlan:plan};
  if(materials){recipes=recipes.filter(r=>r.target!==id);recipes.push({id:'oct10-'+id,target:id,fromClass:'seed',materials,special:false,label:materials.map(m=>m.attribute?m.attribute+'属性':catalog.tags.find(t=>t.id===m.tag)?.name).join(' × '),basis:data.source});}
 }
 by.get('01').attribute='風';by.get('11').attribute='地';
 const green=by.get('01');green.soulSkill={...green.soulSkill,sourceText:'タグ:ぷにモブを持つ味方フィギュアのATKとDEFを20アップする。',name:'ぷにモブカーニバル',timing:'own-main',timingLabel:'自分メイン',description:'タグ:ぷにモブを持つ味方フィギュアのATKとDEFを20アップする。',effect:'タグ:ぷにモブを持つ味方フィギュアのATKとDEFを20アップする。',runtimePlan:{revision:'oct07',target:'allies',filterTag:'01',atk:20,def:20,duration:'persistent'}};
 recipes=recipes.filter(r=>{const stage=recipeMaterialClass(r,by);return stage&&(!r.materials.every(m=>m.id)||recipeStageMatches(r,r.materials.map(m=>by.get(m.id)),by));}).map(r=>({...r,fromClass:recipeMaterialClass(r,by),targetClass:by.get(r.target).soulClass,targetTags:by.get(r.target).tags,targetAttribute:by.get(r.target).attribute}));
 for(const f of figures){f.fusionMaterials=recipes.filter(r=>r.target===f.id);f.fusionTargets=[...new Set(recipes.filter(r=>f.soulClass===r.fromClass&&r.materials.some(m=>matchesMaterial(f,m))).map(r=>r.target))];}
 return {...catalog,version:catalog.version+'+oct10-additions',figures,recipes,meta:{...catalog.meta,countsByRarity:Object.fromEntries(['R','SR','SSR','UR','MOB'].map(k=>[k,figures.filter(f=>f.rarity===k).length])),countsBySoulClass:Object.fromEntries([['seed','シードソウル'],['middle','ミドルソウル'],['mob','MOBソウル']].map(([k,n])=>[n,figures.filter(f=>f.soulClass===k).length]))}};
}
