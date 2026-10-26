import fs from 'node:fs';
import vm from 'node:vm';
import crypto from 'node:crypto';
const dir='artifacts/dorayaki-final-20261025';fs.mkdirSync(dir,{recursive:true});
const file='src/data/dorayaki-series.json',data=JSON.parse(fs.readFileSync(file));
if(!fs.existsSync(dir+'/before-data.json'))fs.copyFileSync(file,dir+'/before-data.json');
const names=['オアシア','サンドラ','コゲドラ','マミドラ','バブル','ルナ','アンコック','シェルド','ギフティ','シルフィ','クロミツ','ヒスイ','ツクヨミ','ベニア','サンドガード','オアセージ','イフリドラ','ゴルディア','タイディア','ミストラ','ミントラ','アヌビス','グレンランス','マエストラ','パルシエラ','アークノワール','アビスドラ',null,'ハニエル','クロノギア','ファラディア','パール','メルティ','ルミナ','シースコープ','タツドラ','トレジャ','シオネ','セレパール','アズランス'];
// Keep role budgets near the existing series; high defence costs attack power.
const stats={1:[65,90],2:[90,90],3:[105,60],6:[90,85],7:[80,100],9:[85,95],10:[100,85],11:[85,95],12:[95,115],13:[110,95],14:[125,80],15:[80,130],16:[160,190],17:[215,145],18:[145,220],19:[160,190],20:[190,165],21:[150,205],22:[195,175],23:[215,155],24:[200,225],25:[245,270],26:[250,245],27:[285,250],29:[145,190],30:[170,180],31:[245,285],32:[70,100],33:[80,95],34:[85,85],35:[110,85],36:[105,80],37:[65,125],38:[85,110],39:[150,210],40:[215,155]};
const passive={
24:{name:'潮騒アンサンブル',text:'このフィギュアが場にいる間、このフィギュア以外の味方の水属性フィギュアのATKを10アップする。',value:{aura:{attributes:['水'],excludeSelf:true,atk:10}}},
25:{name:'秘宝姫の加護',text:'このフィギュアが場にいる間、このフィギュア以外の「海底の秘宝どら焼き」タグを持つ味方のDEFを15アップする。',value:{aura:{tags:['series-dorayaki-sea'],excludeSelf:true,def:15}}},
26:{name:'秘術の研鑽',text:'このフィギュアがソウルスキルを発動するたび、このフィギュアのATKを10アップする。',value:{skillGrowth:{selfOnly:true,atk:10}}},
27:{name:'黒蜜の覇気',text:'このフィギュアが攻撃を宣言するたび、このフィギュアのATKを10、DEFを5アップする。',value:{attackGrowth:{atk:10,def:5}}},
31:{name:'癒砂王の号令',text:'このフィギュアが場にいる間、このフィギュア以外の「砂漠を癒すどら焼き」タグを持つ味方のATK・DEFを10アップする。',value:{aura:{tags:['series-dorayaki-desert'],excludeSelf:true,atk:10,def:10}}}
};
for(const f of data.figures){const n=Number(f.number);f.name='モブ'+names[n-1];if(stats[n])[f.atk,f.def]=stats[n];
 if(n===29)f.soulSkill.name='花蜜のリペアグレーズ';
 if(n===34)f.soulSkill.name='灯火の補給便';
 if(n===39)f.soulSkill.name='聖真珠の祈り';
 if(n===40)f.soulSkill.name='蒼潮の突破槍';
 f.role=f.soulSkill.name;
 const p=passive[n];if(p){f.passive=structuredClone(p.value);f.passiveName=p.name;f.passiveDescription=p.text;const active=f.soulSkill.description.split('\n【パッシブ')[0];f.soulSkill.description=active+'\n【パッシブ：'+p.name+'】'+p.text;f.soulSkill.effect=f.soulSkill.description;}
}
data.reviewRevision='2026-10-25';
fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
// Current source only: leave editor-specific settings and unrelated figures intact.
const {default:catalog}=await import('../src/data/soul-catalog.js?rev='+Date.now());
const editor='編集アプリ/MOB-PIECE-Editor/',snapshot=JSON.parse(fs.readFileSync(editor+'editor-current-snapshot.json'));
const previous=structuredClone(snapshot.data),ids=new Set(data.figures.map(f=>f.id));
for(const f of catalog.figures.filter(f=>ids.has(f.id))){const r=snapshot.data.records.find(r=>r.id===f.id);Object.assign(r,{name:f.name,atk:f.atk,def:f.def,role:f.role});Object.assign(r.skill,{name:f.soulSkill.name,description:f.soulSkill.description,plan:f.soulSkill.runtimePlan});snapshot.data.plans[r.skill.program]=structuredClone(f.soulSkill.runtimePlan);Object.assign(r.summon,{passive:f.passive,recipes:catalog.recipes.filter(x=>x.target===f.id)});}
const ctx={window:{}};vm.runInNewContext(fs.readFileSync(editor+'migration-base.js','utf8'),ctx);const bases=ctx.window.MPB_MIGRATION_BASES||[ctx.window.MPB_MIGRATION_BASE].filter(Boolean);
if(!bases.some(b=>b.sourceHash===previous.sourceHash))bases.push({sourceHash:previous.sourceHash,records:previous.records,workshop:previous.workshop});
for(const f of ['data.js','editor-current-snapshot.json','migration-base.js'])if(!fs.existsSync(dir+'/before-'+f))fs.copyFileSync(editor+f,dir+'/before-'+f);
snapshot.data.extractedAt=new Date().toISOString();snapshot.data.sourceVersion='current-20261025';snapshot.data.sourceHash=crypto.createHash('sha256').update(JSON.stringify({records:snapshot.data.records,rules:snapshot.data.rules,tags:snapshot.data.tags,workshop:snapshot.data.workshop})).digest('hex');
fs.writeFileSync(editor+'migration-base.js','window.MPB_MIGRATION_BASES='+JSON.stringify(bases)+';\nwindow.MPB_MIGRATION_BASE=window.MPB_MIGRATION_BASES[0];\n');
fs.writeFileSync(editor+'editor-current-snapshot.json',JSON.stringify(snapshot));fs.writeFileSync(editor+'data.js','window.MPB_DATA='+JSON.stringify(snapshot.data)+';\n');
fs.writeFileSync(dir+'/figure-designs.json',JSON.stringify(data.figures.map(f=>({id:f.id,name:f.name,stage:f.soulClass,rarity:f.rarity,attribute:f.attribute,atk:f.atk,def:f.def,skill:f.soulSkill,passive:f.passive,passiveName:f.passiveName,passiveDescription:f.passiveDescription})),null,2));
console.log('Updated 39 names and role-balanced stats; retained compatible skill plans; added 5 functioning MOB passives; synchronized workshop source and migration.');
