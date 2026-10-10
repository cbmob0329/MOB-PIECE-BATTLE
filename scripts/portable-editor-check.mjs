import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import path from 'node:path';
import {createRequire} from 'node:module';
import {pathToFileURL} from 'node:url';
import catalog from '../src/data/soul-catalog.js';
const dir=path.resolve('artifacts/editor-20261011/MOB-PIECE-Editor'),ctx={window:{}};vm.createContext(ctx);
for(const f of ['data.js','core.js','sync-core.js','workshop-core.js'])vm.runInContext(fs.readFileSync(path.join(dir,f),'utf8'),ctx);
const w=ctx.window,C=w.MPB_CORE,D=w.MPB_DATA;
assert.equal(D.records.length,catalog.figures.length);assert.equal(Object.keys(D.workshop.towers).length,19);assert.equal(Object.keys(D.workshop.banners).length,5);
for(const r of D.records){const f=catalog.figures.find(f=>f.id===r.id);assert.equal(r.atk,f.atk);assert.equal(r.def,f.def);assert.ok(fs.existsSync(path.join(dir,D.images[r.id])));}
assert.equal(C.workshopWarnings(D.records,D).length,0);
C.parseImport(JSON.stringify(C.envelope(D.records,D,[])),D);
let edited=C.clone(D.records);const added={...C.clone(edited[0]),id:'custom-test',uid:'custom-test',editorAdded:true};edited.push(added);w.MPB_WORKSHOP_STATE.images[added.id]='data:image/png;base64,AAAA';w.MPB_WORKSHOP_STATE.towers.grass.floors[0].reward.coins=4321;
const json=JSON.stringify(C.envelope(edited,D,[]));C.installWorkspace(D.workshop);const merged=C.mergeImport(C.parseImport(json,D),D.records);assert.equal(merged.records.length,642);assert.equal(merged.workshop.towers.grass.floors[0].reward.coins,4321);assert.ok(merged.workshop.images[added.id]);assert.equal(merged.conflicts.length,0);
assert.equal(w.MPB_WORKSHOP_STATE.towers.grass.floors[0].reward.coins,2000,'preview must not mutate');
w.MPB_WORKSHOP_STATE.towers.grass.floors[0].reward.coins=999;assert.equal(C.mergeImport(C.parseImport(json,D),D.records).conflicts.length,1);
const invalid=JSON.parse(json);invalid.workshop.images[added.id]='javascript:alert(1)';assert.throws(()=>C.parseImport(JSON.stringify(invalid),D));
const future=C.clone(D.workshop);future.towers.desert.floors[0].reward.coins=5555;const migrated=C.mergeImport(C.parseImport(json,D),D.records,future);assert.equal(migrated.workshop.towers.desert.floors[0].reward.coins,5555);assert.equal(migrated.workshop.towers.grass.floors[0].reward.coins,4321);
const patch=JSON.parse(json);delete patch.records;assert.equal(C.mergeImport(C.parseImport(JSON.stringify(patch),D),D.records).records.length,642);
console.log('Core: latest figures, 239 valid decks, addition/image round trip, safe conflict merge passed');
const require=createRequire(import.meta.url),{chromium}=require(path.join(process.env.MPB_RUNTIME_MODULES,'playwright'));
const browser=await chromium.launch({channel:'msedge',headless:true});
try{
 const context=await browser.newContext({viewport:{width:1280,height:900}}),page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(pathToFileURL(path.join(dir,'index.html')).href);await page.waitForFunction(()=>!document.querySelector('main').inert);
 await page.click('#newFigure');await page.setInputFiles('#newImage',path.join(dir,D.images[D.records[0].id]));await page.waitForFunction(()=>document.querySelector('#createStatus').textContent.includes('準備'));
 await page.fill('#newName','画像追加テスト');await page.click('#submitFigure');await page.waitForSelector('#replaceImage');assert.equal(await page.evaluate(()=>Workshop.getRecords().length),642);
 await page.click('#closeEditor');await page.click('#editWorld');await page.fill('[data-reward="coins"]','8765');await page.locator('[data-reward="coins"]').blur();
 await page.locator('[data-deck-count]').first().fill('2');await page.locator('[data-deck-count]').first().blur();assert.match(await page.textContent('#deckStatus'),/合計/);
 await page.click('#worldUndo');await page.click('#bannerTab');await page.click('#addBanner');await page.fill('#bannerName','追加ガチャテスト');await page.locator('#bannerName').blur();await page.selectOption('#bannerUnlock','desert');await page.fill('#poolSearch','画像追加テスト');await page.click('#poolAdd');await page.check('[data-pickup]');await page.check('[data-featured]');
 const exported=await page.evaluate(()=>Workshop.snapshot());const exportedData=JSON.parse(exported);assert.equal(exportedData.records.length,642);assert.equal(exportedData.workshop.towers.grass.floors[0].reward.coins,8765);assert.equal(Object.keys(exportedData.workshop.banners).length,6);
 await page.screenshot({path:'artifacts/editor-20261011/editor-desktop.png'});await page.click('#closeWorld');await page.waitForFunction(()=>!Workshop.status().storageError);await page.waitForTimeout(500);await page.reload();await page.waitForFunction(()=>!document.querySelector('main').inert);assert.equal(await page.evaluate(()=>Workshop.getRecords().length),642);assert.equal(await page.evaluate(()=>Workshop.getWorkspace().towers.grass.floors[0].reward.coins),8765);
 const fresh=await browser.newContext({viewport:{width:390,height:844}}),mobile=await fresh.newPage();mobile.on('pageerror',e=>errors.push(e.message));await mobile.goto(pathToFileURL(path.join(dir,'index.html')).href);await mobile.waitForFunction(()=>!document.querySelector('main').inert);await mobile.evaluate(text=>{Workshop.stageImport(text);Workshop.applyImport();},exported);assert.equal(await mobile.evaluate(()=>Workshop.getRecords().length),642);assert.equal(await mobile.evaluate(()=>Object.keys(Workshop.getWorkspace().images).length),1);await mobile.click('#editWorld');await mobile.screenshot({path:'artifacts/editor-20261011/editor-mobile.png'});assert.equal(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);await mobile.click('#closeWorld');await mobile.evaluate(()=>Workshop.openEditor(Workshop.getRecords()[0].id));await mobile.setInputFiles('#replaceImage',path.join(dir,D.images[D.records[1].id]));await mobile.waitForFunction(()=>Object.keys(Workshop.getWorkspace().images).length===2);await mobile.click('#closeEditor');await mobile.click('#viewChanges');assert.match(await mobile.textContent('#changes'),/追加・差替画像 2件/);
 assert.deepEqual(errors,[]);console.log('Browser: image upload, add figure, rewards, deck edit/undo, banner + unlock + pool, reload, JSON import, mobile passed');
}finally{await browser.close();}
