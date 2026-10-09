import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
import catalog from '../src/data/soul-catalog.js';import {skillPlan} from '../src/game/soul-engine.js';import {soulCopyLimits,soulDeckSize} from '../src/game/deck-legality.js';
const editor='C:/Users/CB-Me/Downloads/MOB-PIECE-Editor-641-compact/MOB-PIECE-Editor',root=process.cwd(),art=path.join(root,'artifacts/hero-belle-concepts-20261009');
const read=p=>fs.readFileSync(p,'utf8').replace(/^\uFEFF/,'');const previous=JSON.parse(read(path.join(editor,'editor-current-snapshot.json'))).data;
const backup=path.join(editor,'backup-before-20261009-'+Date.now());fs.mkdirSync(backup);
for(const file of ['data.js','editor-current-snapshot.json','app.js','index.html','README.txt'])fs.copyFileSync(path.join(editor,file),path.join(backup,file));
const d=structuredClone(previous);const old=new Map(d.records.map(r=>[r.id,r]));d.tags=catalog.tags;d.plans={};d.records=catalog.figures.map(f=>{
const plan=structuredClone(skillPlan({id:f.id})||{}),program='current:'+f.id;d.plans[program]=plan;
return {id:f.id,uid:f.uid||old.get(f.id)?.uid||f.id,name:f.name,series:old.get(f.id)?.series||f.collection||'その他',soulClass:f.soulClass,rarity:f.rarity,attribute:f.attribute,attackType:f.attackType||'',role:f.role||'',atk:f.atk,def:f.def,tags:f.tags,skill:{mode:'existing',name:f.soulSkill.name,description:f.soulSkill.description||f.soulSkill.effect||'',timing:f.soulSkill.timing,program,plan,custom:{target:'',timing:'',condition:'',cost:'',uses:'',example:''}},summon:{normal:f.soulClass==='seed',recipes:catalog.recipes.filter(r=>r.target===f.id),passive:f.passive||{},notes:old.get(f.id)?.summon?.notes||''}};
});
const rows=[
['tonawolf','モブトナウルフ','1-mob-tonawolf.png','seed','R',100,80,'ソリ引きパワー','このターン、自分のATK＋20。'],
['tonaleon','モブトナレオン','2-mob-tonaleon.png','seed','R',80,100,'木登りフェイント','このターン、敵1体のDEF－10。'],
['fight-santa','モブファイトサンタ','3-mob-fight-santa.png','middle','SR',140,110,'プレゼントパンチ','このターン、自分のATK＋20。'],
['rilac-ribbon','モブリラクリボン','4-mob-rilac-ribbon-v2.png','seed','R',80,100,'のんびり応援','味方1体のDEF＋20。相手の次のターン終了まで。'],
['cacao-belle','モブカカオベル','5-mob-cacao-belle.png','seed','SR',90,90,'ケーキのおすそわけ','このターン、自分以外の味方1体のATK・DEF＋10。'],
['yukinoshiki','モブユキノシキ','6-mob-yukinoshiki.png','middle','SR',110,140,'雪のコーラス','自分以外の味方1体のDEF＋20。相手の次のターン終了まで。'],
['mummy-santa','モブミイラサンタ','mummy-santa.png','seed','R',80,100,'未設定','能力はここから自由に編集してください。'],
['santa-savanna','モブサンタサバンナ','santa-savanna.png','seed','SR',100,80,'未設定','能力はここから自由に編集してください。'],
['santa-guard','モブサンタガード','santa-guard.png','middle','SR',110,140,'未設定','能力・融合条件はここから自由に編集してください。'],
['santa-fight','モブサンタファイト','santa-fight.png','seed','R',100,80,'未設定','能力はここから自由に編集してください。'],
['toy-santa-tyra','モブトイサンタティラ','toy-santa-tyra.png','seed','SR',90,90,'未設定','能力はここから自由に編集してください。'],
['call-santa','モブコールサンタ','call-santa.png','middle','SR',110,140,'未設定','能力・融合条件はここから自由に編集してください。']
];
for(const [slug,name,file,soulClass,rarity,atk,def,skillName,desc] of rows){
const id='draft:bell-'+slug;d.images[id]='assets/bell-'+slug+'.png';fs.copyFileSync(path.join(art,file),path.join(editor,d.images[id]));
const ingredients=slug==='fight-santa'?['tonawolf','tonaleon']:slug==='yukinoshiki'?['rilac-ribbon','cacao-belle']:null;
d.records.push({id,uid:'DRAFT-BELL-'+slug,name,series:'ヒーローベル（制作中）',soulClass,rarity,attribute:'光',attackType:'物理',role:'制作中・仮設定',atk,def,tags:['piece-bell'],skill:{mode:'custom',name:skillName,description:desc,timing:'own-main',program:null,plan:{},custom:{target:'',timing:'自分メイン（仮）',condition:'',cost:'',uses:soulClass==='seed'?'1回（案）':'2回（案）',example:'制作中：本体未登録。数値・レア度・分類は編集用の仮設定です。'}},summon:{normal:soulClass==='seed',recipes:ingredients?[{id:'draft-fusion-'+slug,target:id,fromClass:'seed',materials:ingredients.map(x=>({id:'draft:bell-'+x})),label:'提案中の融合条件',special:false}]:[],passive:{},notes:'制作中の案。本体・ガチャへは未反映。'}});
}
d.groups=[...new Set([...d.groups,'ヒーローベル（制作中）'])];d.rules={...catalog.rules,deckSize:soulDeckSize,stageComposition:'free',copyLimits:soulCopyLimits,skillUseLimits:catalog.rules.skillUsesByStage};d.archived=catalog.archivedFigures||[];d.extractedAt=new Date().toISOString();d.sourceVersion='current-20261009-editor-653';d.sourceHash=crypto.createHash('sha256').update(JSON.stringify({records:d.records,rules:d.rules,tags:d.tags})).digest('hex');
fs.writeFileSync(path.join(editor,'data.js'),'window.MPB_DATA='+JSON.stringify(d)+';\n');
fs.writeFileSync(path.join(editor,'editor-current-snapshot.json'),JSON.stringify({schema:'mpb-editor-source/1',kind:'mpb-editor-source',data:d}));
let app=read(path.join(editor,'app.js'));
app=app.replace("if(storedSource){refreshSource(C.parseSource(storedSource));records=clone(D.records);}","if(storedSource){const saved=C.parseSource(storedSource);if(String(saved.extractedAt||'')>String(D.extractedAt||'')){refreshSource(saved);records=clone(D.records);}}");
app=app.replace("if(p.conflict){orphans.push({reason:'unapplied-source-conflict',payload:p.value});stageImport(text);saveMessage('別版の下書きがあります。「保存・出力」で競合を確認',true);}","if(p.conflict){const merged=C.mergeImport(p,records);records=merged.records;orphans=[...(p.value.unresolvedImports||[]),...merged.conflicts,...merged.unknown];render();saveMessage('最新版へ下書きを引き継ぎました。競合 '+merged.conflicts.length+'件は保存・出力で確認',merged.conflicts.length>0);}");
fs.writeFileSync(path.join(editor,'app.js'),app);
let html=read(path.join(editor,'index.html')).replace('<span>641</span>','<span>653</span>').replace('画像を見て、スキルを整える。','2026/10/09 更新 · 現行641体＋制作中12体。');
fs.writeFileSync(path.join(editor,'index.html'),html);
fs.writeFileSync(path.join(editor,'README.txt'),'MOB PIECE BATTLE フィギュア工房 / 2026-10-09更新\n\nindex.htmlをブラウザーで開いてください。現行641体の性能・実効スキル・常時能力・融合条件を更新しました。ミドル同名3体、MOB同名1体の現行ルールを収録。\n\n今回の12体はシリーズ「ヒーローベル（制作中）」で検索できます。リラクリボンは白い顔・強いチーク・口なしの修正版です。追加12体の分類・レア度・数値は仮設定、能力は提案または未設定です。自由に編集してください。\n\n入力で下書き保存。「保存・出力」から下書きJSONや差分JSONを保存して渡してください。本体反映やスキル実装は別作業です。旧下書きは変更項目だけ引き継ぎ、競合は未解決情報として保持します。更新前ファイルはbackup-before-20261009フォルダーに残しています。\n');
fs.writeFileSync(path.join(art,'editor-update-report.json'),JSON.stringify({editor,backup,count:d.records.length,current:641,drafts:12,sourceHash:d.sourceHash},null,2));
console.log(JSON.stringify({editor,backup,count:d.records.length,current:641,drafts:12}));

