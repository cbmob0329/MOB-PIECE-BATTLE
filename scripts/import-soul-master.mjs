import fs from 'node:fs';
import crypto from 'node:crypto';
import legacy from '../src/data/figures_master_v170.js';
import skillTexts,{originalSkillTexts} from '../src/data/soul-skill-texts.js';
import {soulOverrides} from '../src/data/soul-overrides.js';
const path='handoff/soul-v1/MOB_SOUL_BATTLE_全327体マスターデータ_v1.json';
const bytes=fs.readFileSync(path),master=JSON.parse(bytes);
const classes={'シードソウル':'seed','ミドルソウル':'middle','MOBソウル':'mob'};
const timings={'自分メイン':'own-main','相手攻撃宣言時':'attack-response','相手スキル発動時':'skill-response','撃破時':'defeat-response'};
// The ZIP pads twelve alloy images (035.png); the released inventory uses 35.png.
// Never bind these to the old pending placeholders with a different save ID.
const imageKey=p=>p.replace(/^\.\//,'').replace(/^(spbossfig\/)0+(\d+\.png)$/,'$1$2');
const idByName=new Map(master.records.map(r=>[r.name,legacy.find(f=>!f.pending&&imageKey(f.image)===imageKey(r.imagePath))?.sourceId]));
const condition=c=>c.type==='attribute'?{attribute:c.value}:c.type==='tag'?{tag:Object.keys(master.tagMap).find(k=>master.tagMap[k]===c.value)}:{id:idByName.get(c.value)};
const label=c=>c.value+(c.type==='attribute'?'属性':c.type==='tag'?'タグ':'');
const figures=master.records.map(r=>{
 const id=idByName.get(r.name),program=originalSkillTexts.indexOf(r.soulSkill.timing+' | '+r.soulSkill.effect);
 if(!id||program<0||!classes[r.soulClass]||!timings[r.soulSkill.timing])throw Error('Unmapped master record '+r.uid);
 return {id,uid:r.uid,name:r.name,image:r.imagePath,rarity:r.rarity,soulClass:classes[r.soulClass],attribute:r.attribute,attackType:r.attackType,role:r.role,atk:r.ATK,def:r.DEF,tags:r.gameTagIds,
  soulSkill:{...r.soulSkill,timing:timings[r.soulSkill.timing],timingLabel:r.soulSkill.timing,description:r.soulSkill.effect+(program===55?' このスキル使用後も、このターンはフュージョン素材にできる。':program===93?' この効果で手札に戻ったこのフィギュアは、ミドルソウルでも手札から直接召喚できる。':''),program,sourceText:r.soulSkill.effect},
  source:{figureFile:r.sourceFile,rarity:r.rarity,statsText:r.sourceBasis.statusEffect,traitText:r.sourceBasis.trait,soul:{text:r.sourceBasis.accessorySkillEffect},decision:r.sourceBasis.classReason,basis:r.sourceBasis},
  master:r,fusionMaterials:[],fusionTargets:[]};
});
for(const f of figures){const override=soulOverrides[f.id];if(override)Object.assign(f.soulSkill,{effect:override.effect,description:override.effect});}
const recipes=[];
for(const f of figures){
 const r=f.master;
 for(const [i,p] of r.fusionRecipes.entries())recipes.push({id:r.uid+'-normal-'+i,target:f.id,fromClass:classes[p.materialClass],materials:[condition(p.conditionA),condition(p.conditionB)],label:label(p.conditionA)+' × '+label(p.conditionB),basis:p.name,special:false});
 if(r.mobSoulFusion){const p=r.mobSoulFusion;recipes.push({id:r.uid+'-mob',target:f.id,fromClass:null,materials:p.materials.map(n=>({id:idByName.get(n)})),label:p.materials.join(' × '),basis:p.name,special:true,bonusATK:p.bonusATK,bonusDEF:p.bonusDEF});}
}
const matches=(f,c)=>c.id?f.id===c.id:c.tag?f.tags.includes(c.tag):f.attribute===c.attribute;
for(const r of recipes){if(r.materials.some(m=>!Object.values(m)[0]))throw Error('Invalid recipe '+r.id);}
for(const f of figures){f.fusionMaterials=recipes.filter(r=>r.target===f.id);f.fusionTargets=[...new Set(recipes.filter(r=>(r.special||r.fromClass===f.soulClass)&&r.materials.some(m=>matches(f,m))).map(r=>r.target))];delete f.master;}
if(figures.length!==327||new Set(figures.map(f=>f.id)).size!==327)throw Error('Invalid figure identities');
const data={version:'master-v1',meta:master.meta,rules:master.rules,figures,recipes,tags:Object.entries(master.tagMap).map(([id,name])=>({id,name}))};
fs.writeFileSync('src/data/soul-catalog.js','// Imported from the v1 master with user-approved soul-overrides.js; edit the source/override, not generated data.\nimport {extendPieceCatalog} from \'./piece-catalog.js\';\nimport {applyOct05Spec} from \'./oct05-spec.js\';\nimport {applyBattleCorrections} from \'./battle-corrections.js\';\nconst base = '+JSON.stringify(data,null,2)+';\nexport default applyBattleCorrections(applyOct05Spec(extendPieceCatalog(base)));\n');
fs.writeFileSync('docs/soul-master-audit.json',JSON.stringify({source:path,sha256:crypto.createHash('sha256').update(bytes).digest('hex'),count:figures.length,classes:master.meta.countsBySoulClass,recipes:recipes.length,special:recipes.filter(r=>r.special).length,skillPrograms:skillTexts.length},null,2)+'\n');
console.log('Imported',figures.length,'figures;',recipes.length,'recipes;',skillTexts.length,'exact skill programs');
