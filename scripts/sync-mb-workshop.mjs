import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import {createRequire} from 'node:module';
import catalog from '../src/data/soul-catalog.js';
import data from '../src/data/mb-adventure.json' with {type:'json'};
import {campaignTowers,campaignEnemy} from '../src/data/tower-campaign.js';
const dir='編集アプリ/MOB-PIECE-Editor',snapshot=JSON.parse(fs.readFileSync(dir+'/editor-current-snapshot.json','utf8')),previous=structuredClone(snapshot.data),d=snapshot.data;
const sharp=createRequire(import.meta.url)(path.join(process.env.MPB_RUNTIME_MODULES,'sharp'));
const backup='artifacts/mb-adventure/editor-before';fs.mkdirSync(backup,{recursive:true});
for(const name of ['data.js','editor-current-snapshot.json','migration-base.js'])if(!fs.existsSync(backup+'/'+name))fs.copyFileSync(dir+'/'+name,backup+'/'+name);
const changed=new Set(data.figures.map(f=>f.id)),removed=new Set(data.removedIds);
d.records=d.records.filter(f=>!removed.has(f.id)&&!changed.has(f.id));
d.removedIds=[...new Set([...(d.removedIds||[]),...removed])];
for(const id of removed){delete d.images[id];delete d.plans['current:'+id];}
for(const f of catalog.figures.filter(f=>changed.has(f.id))){
 const plan=f.soulSkill.runtimePlan||{},program='current:'+f.id;
 d.plans[program]=plan;
 d.records.push({id:f.id,uid:f.uid,name:f.name,series:f.series,series2:f.series2||'',soulClass:f.soulClass,rarity:f.rarity,attribute:f.attribute,attackType:f.attackType,role:f.role,atk:f.atk,def:f.def,tags:f.tags,gameImage:f.image,releaseWave:f.releaseWave,pending:!!f.pending,skill:{mode:'existing',name:f.soulSkill.name,description:f.soulSkill.description,timing:f.soulSkill.timing,program,plan,custom:{}},summon:{normal:f.soulClass==='seed',recipes:f.fusionMaterials,passive:f.passive||{},notes:f.releaseWave>1?'第'+f.releaseWave+'弾で公開予定':''}});
 const bytes=fs.readFileSync(f.image),hash=crypto.createHash('sha256').update(bytes).digest('hex').slice(0,12),asset='assets/mb-adventure-'+f.id+'-'+hash+'.webp';
 await sharp(bytes).resize({width:480,height:480,fit:'inside',withoutEnlargement:true}).webp({quality:88}).toFile(dir+'/'+asset);d.images[f.id]=asset;
}
for(const r of d.records)if(r.summon?.recipes)r.summon.recipes=r.summon.recipes.filter(x=>!removed.has(x.target)&&!x.materials.some(m=>removed.has(m.id)));
d.tags=structuredClone(catalog.tags);d.groups=[...new Set(d.records.flatMap(r=>[r.series,r.series2].filter(Boolean)))];d.sourceVersion='current-20261025-mb-adventure';d.extractedAt=new Date().toISOString();d.sourceHash=crypto.createHash('sha256').update(JSON.stringify(d.records)).digest('hex');
// Keep editable tower settings, update only release starter/banner configuration.
d.workshop??={};d.workshop.mbAdventure={starters:data.starters,banners:data.banners,releases:data.releases};
d.workshop.banners=Object.fromEntries([...data.banners,...data.plannedBanners].map(b=>[b.id,structuredClone({...b,pickupIds:b.pickupIds||b.featuredIds.slice(0,1)})]));
const clean=value=>Array.isArray(value)?value.filter(v=>!removed.has(typeof v==='string'?v:v?.id)).map(clean):value&&typeof value==='object'?Object.fromEntries(Object.entries(value).filter(([k])=>!removed.has(k)).map(([k,v])=>[k,clean(v)])):value;
const by=new Map(catalog.figures.map(f=>[f.id,f]));
for(const [key,t]of Object.entries(d.workshop.towers))for(const floor of t.floors)for(const [slot,e]of floor.opponents.entries()){
 if(!e.deck.some(id=>removed.has(id)||by.get(id)?.pending))continue;
 const spec=campaignTowers.find(t=>t.id===key);if(!spec)continue;
 const current=campaignEnemy(spec,floor.number,slot),lostLeader=e.strategy?.focusIds?.some(id=>removed.has(id)||by.get(id)?.pending);
 e.deck=e.deck.filter(id=>!removed.has(id)&&!by.get(id)?.pending);
 const candidates=[...new Set([...current.deck,...catalog.figures.filter(f=>f.soulClass==='seed'&&!f.pending).map(f=>f.id)])];
 while(e.deck.length<45){const pick=candidates.find(id=>by.has(id)&&e.deck.filter(x=>x===id).length<(by.get(id).soulClass==='mob'?1:3));if(!pick)throw Error('Cannot repair enemy '+e.id);e.deck.push(pick);}
 if(lostLeader){e.name=current.name;e.strategy={...e.strategy,focusIds:current.strategy?.focusIds||[current.deck[0]]};}
}
d.workshop.towers=clean(d.workshop.towers);
d.workshop.deletedFigures={...(d.workshop.deletedFigures||{}),...Object.fromEntries([...removed].map(id=>[id,previous.records.find(r=>r.id===id)||{id}]))};
for(const id of removed)delete d.workshop.images[id];
d.sourceHash=crypto.createHash('sha256').update(JSON.stringify({records:d.records,tags:d.tags,rules:d.rules,workshop:d.workshop})).digest('hex');
const ctx={window:{}};vm.runInNewContext(fs.readFileSync(dir+'/migration-base.js','utf8'),ctx);const bases=ctx.window.MPB_MIGRATION_BASES||[];if(!bases.some(b=>b.sourceHash===previous.sourceHash))bases.push({sourceHash:previous.sourceHash,records:previous.records,workshop:previous.workshop});
fs.writeFileSync(dir+'/migration-base.js','window.MPB_MIGRATION_BASES='+JSON.stringify(bases)+';\nwindow.MPB_MIGRATION_BASE=window.MPB_MIGRATION_BASES[0];\n');fs.writeFileSync(dir+'/data.js','window.MPB_DATA='+JSON.stringify(d)+';\n');fs.writeFileSync(dir+'/editor-current-snapshot.json',JSON.stringify(snapshot));
console.log('Synced '+changed.size+' figures; removed '+removed.size+' records.');
