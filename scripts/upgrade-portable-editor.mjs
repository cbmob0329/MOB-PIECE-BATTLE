import fs from 'node:fs';
const dir=new URL('../artifacts/editor-20261011/MOB-PIECE-Editor/',import.meta.url);
function edit(file,fn){const p=new URL(file,dir);fs.writeFileSync(p,fn(fs.readFileSync(p,'utf8')));}
edit('core.js',s=>s.replace('base:clone(by.get(r.id))','base:clone(by.get(r.id)??null)'));
edit('sync-core.js',s=>s.replace("!c?.base||!c.edited||c.id!==c.base.id", "!c||(!c.base&&!(c.base===null&&c.edited?.editorAdded))||!c.edited||(c.base&&c.id!==c.base.id)").replace('if(c.base.uid!==c.edited.uid)','if(c.base&&c.base.uid!==c.edited.uid)'));
edit('app.js',s=>s.replaceAll('D.images[r.id]','C.imageFor(r.id,D)').replaceAll('ch.base[k]','ch.base?.[k]').replaceAll('c.base[k]','c.base?.[k]')
 .replace('orphans:clone(orphans),source:D','orphans:clone(orphans),source:D,workshop:clone(window.MPB_WORKSHOP_STATE)')
 .replace('records=old.records;orphans=old.orphans;','records=old.records;orphans=old.orphans;C.installWorkspace(old.workshop);')
 .replace("$('resetOne').onclick=()=>{if(confirm", "$('resetOne').disabled=!base.has(selected);$('resetOne').onclick=()=>{if(!base.has(selected))return;if(confirm")
 .replace('records=merged.records;orphans=','records=merged.records;C.installWorkspace(merged.workshop);orphans=')
 .replace('records=C.importRecords(p,records);orphans=p.value.unresolvedImports||[];', 'const restored=C.mergeImport(p,records);records=restored.records;C.installWorkspace(restored.workshop);orphans=[...(p.value.unresolvedImports||[]),...restored.conflicts,...restored.unknown];')
 .replace('if(storedSource){refreshSource(C.parseSource(storedSource));records=clone(D.records);}', 'if(storedSource){const newer=C.parseSource(storedSource);if(newer.extractedAt>D.extractedAt){refreshSource(newer);C.installWorkspace(newer.workshop);records=clone(D.records);}}')
 .replace('画像・本体・既存ゲームセーブは変更しません。','本体・既存ゲームセーブは変更しません。追加画像も下書きに保存します。'));
edit('index.html',s=>s.replace('<script src="app.js"></script>','<script src="workshop-core.js"></script><script src="app.js"></script><script src="workshop.js"></script>').replace('全641体・変更前後・独自案','全フィギュア・追加画像・タワー・ガチャ・変更前後・独自案').replace('</head>','<link rel="stylesheet" href="workshop.css"></head>'));
console.log('Portable editor connections upgraded');
