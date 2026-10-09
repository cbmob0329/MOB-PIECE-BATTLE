import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const e='C:/Users/CB-Me/Downloads/MOB-PIECE-Editor-641-compact/MOB-PIECE-Editor';
const context=vm.createContext({});for(const f of ['core.js','sync-core.js'])vm.runInContext(fs.readFileSync(e+'/'+f,'utf8'),context);
const C=context.MPB_CORE,d=C.parseSource(fs.readFileSync(e+'/editor-current-snapshot.json','utf8'));
assert.equal(d.records.length,653);for(const r of d.records)assert(fs.existsSync(e+'/'+d.images[r.id]),r.id);
const report=JSON.parse(fs.readFileSync('artifacts/hero-belle-concepts-20261009/editor-update-report.json','utf8'));
const old=C.parseSource(fs.readFileSync(report.backup+'/editor-current-snapshot.json','utf8'));const records=C.clone(old.records);records[0].name='保持する編集名';records[0].atk=777;
const merged=C.mergeImport(C.parseImport(JSON.stringify(C.envelope(records,old)),d),d.records);
assert.equal(merged.records.find(r=>r.id===records[0].id).name,'保持する編集名');
const conflictRecords=C.clone(old.records);conflictRecords[0].attribute='独自属性';const conflict=C.mergeImport(C.parseImport(JSON.stringify(C.envelope(conflictRecords,old)),d),d.records);assert(conflict.conflicts.some(x=>x.id===records[0].id&&x.path.includes('attribute')));assert.equal(conflict.records[0].attribute,'風');
console.log('PASS all 653 images, latest source parse, old draft three-way migration, conflicts retained.');

