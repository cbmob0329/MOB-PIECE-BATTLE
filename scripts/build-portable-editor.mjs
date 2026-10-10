import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import catalog from '../src/data/soul-catalog.js';
import {skillPlan} from '../src/game/soul-engine.js';
import {soulCopyLimits,soulDeckSize} from '../src/game/deck-legality.js';
import {campaignTowers,campaignEnemy,campaignOpponentCount} from '../src/data/tower-campaign.js';
import {towerBanners} from '../src/data/tower.js';
import {TOWER_MASTER_DIAMONDS,TOWER_OPPONENT_REWARD} from '../src/game/tower-rewards.js';
const root=path.resolve(import.meta.dirname,'..'),editor=path.join(root,'artifacts/editor-20261011/MOB-PIECE-Editor');
const require=createRequire(import.meta.url),sharp=require(process.env.MPB_RUNTIME_MODULES?path.join(process.env.MPB_RUNTIME_MODULES,'sharp'):'sharp');
const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(editor,'data.js'),'utf8'),context);
const previous=context.window.MPB_DATA,old=new Map(previous.records.map(r=>[r.id,r]));
const d={...previous,records:[],images:{},plans:{},tags:catalog.tags,archived:catalog.archivedFigures||[],rules:{...catalog.rules,deckSize:soulDeckSize,stageComposition:'free',copyLimits:soulCopyLimits},workshop:{schema:'mpb-workshop/2',towers:{},banners:{},images:{}}};
for(const f of catalog.figures){
 const plan=structuredClone(skillPlan({id:f.id})||{}),program='current:'+f.id;d.plans[program]=plan;
 d.records.push({id:f.id,uid:f.uid||old.get(f.id)?.uid||f.id,name:f.name,series:old.get(f.id)?.series||f.collection||'その他',soulClass:f.soulClass,rarity:f.rarity,attribute:f.attribute,attackType:f.attackType||'',role:f.role||'',atk:f.atk,def:f.def,tags:f.tags,gameImage:f.image,skill:{mode:'existing',name:f.soulSkill.name,description:f.soulSkill.description||f.soulSkill.effect||'',timing:f.soulSkill.timing,program,plan,custom:{target:'',timing:'',condition:'',cost:'',uses:'',example:''}},summon:{normal:f.soulClass==='seed',recipes:catalog.recipes.filter(r=>r.target===f.id),passive:f.passive||{},notes:old.get(f.id)?.summon?.notes||''}});
 let src=path.join(root,f.image);if(!fs.existsSync(src))src=path.join(root,'public',f.image);if(!fs.existsSync(src))throw Error('Missing figure image: '+f.image);
 const asset='assets/current-'+crypto.createHash('sha256').update(f.id).digest('hex').slice(0,16)+'.webp';
 await sharp(src).resize({width:480,height:480,fit:'inside',withoutEnlargement:true}).webp({quality:85}).toFile(path.join(editor,asset));d.images[f.id]=asset;
}
d.groups=[...new Set(d.records.map(r=>r.series))];
for(const tower of campaignTowers){
 const floors=[];for(let floor=1;floor<=5;floor++){
  const opponents=[];for(let slot=0;slot<campaignOpponentCount(tower,floor);slot++)opponents.push(campaignEnemy(tower,floor,slot));
  floors.push({number:floor,reward:{...TOWER_OPPONENT_REWARD,diamonds:floor===5?TOWER_MASTER_DIAMONDS:TOWER_OPPONENT_REWARD.diamonds,rubies:0,figures:{}},opponents});
 }
 d.workshop.towers[tower.id]={...tower,floors};console.log('Snapshot tower:',tower.id);
}
for(const banner of towerBanners)d.workshop.banners[banner.id]=structuredClone(banner);
d.extractedAt=new Date().toISOString();d.sourceVersion='current-20261011';d.sourceHash=crypto.createHash('sha256').update(JSON.stringify({records:d.records,rules:d.rules,tags:d.tags,workshop:d.workshop})).digest('hex');
fs.writeFileSync(path.join(editor,'data.js'),'window.MPB_DATA='+JSON.stringify(d)+';\n');
fs.writeFileSync(path.join(editor,'editor-current-snapshot.json'),JSON.stringify({schema:'mpb-editor-source/1',kind:'mpb-editor-source',data:d}));
fs.writeFileSync(path.join(editor,'editor-schema.json'),JSON.stringify({schema:'mpb-editor/1',workshopSchema:'mpb-workshop/2',records:'既存のrecord形式。追加はeditorAdded:true、固定ID/UID、gameImageを保持。',workshop:{images:'figureId → data:image/png|jpeg|webp;base64,...。追加・差し替え画像をJSON内に同梱。',towers:'towerId → floors[1..5]。各階のrewardは対戦相手1人/マスター連戦1回の初回勝利報酬。',banners:'bannerId → figureIds、pickupIds、featuredIds、requiresClear（空は常設）'},integration:'編集ファイルを保存して本体への反映作業に使用。ゲーム本体やセーブは自動更新しない。'},null,2));
console.log(JSON.stringify({figures:d.records.length,towers:campaignTowers.length,enemies:Object.values(d.workshop.towers).reduce((n,t)=>n+Object.values(t.floors).reduce((a,f)=>a+f.opponents.length,0),0),banners:towerBanners.length,sourceHash:d.sourceHash}));
