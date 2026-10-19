import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {pathToFileURL} from 'node:url';
import catalog from '../src/data/soul-catalog.js';
import {skillPlan} from '../src/game/soul-engine.js';
const root=path.resolve(import.meta.dirname,'..'),editor=path.join(root,'編集アプリ/MOB-PIECE-Editor');
const d=JSON.parse(fs.readFileSync(path.join(editor,'editor-current-snapshot.json'),'utf8')).data;
const report=JSON.parse(fs.readFileSync(path.join(root,'artifacts/editor-20261019/sync-report.json'),'utf8'));
const old=JSON.parse(fs.readFileSync(path.join(report.backup,'editor-current-snapshot.json'),'utf8')).data;
for(const f of catalog.figures){const r=d.records.find(r=>r.id===f.id);assert(r,f.id);assert.equal(r.atk,f.atk);assert.equal(r.def,f.def);assert.deepEqual(r.tags,f.tags);assert.deepEqual(r.skill.plan,skillPlan({id:f.id})||{});assert.deepEqual(r.summon.recipes,catalog.recipes.filter(r=>r.target===f.id));assert(fs.existsSync(path.join(editor,d.images[f.id])));}
assert.deepEqual(d.workshop,old.workshop);
const require=createRequire(import.meta.url),{chromium}=require(path.join(process.env.MPB_RUNTIME_MODULES,'playwright'));
const browser=await chromium.launch({channel:'msedge',headless:true});
try{
 const page=await browser.newPage({viewport:{width:1280,height:900}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(pathToFileURL(path.join(editor,'index.html')).href);await page.waitForFunction(()=>!document.querySelector('main').inert);
 assert.equal(await page.evaluate(()=>Workshop.getRecords().length),catalog.figures.length);
 for(const [series,count] of [['海底の秘宝どら焼き',16],['砂漠を癒すどら焼き',23],['海底に伝わる沈没船',19]]){
  await page.locator('#series').selectOption(series);assert.equal(await page.locator('[data-edit]').count(),count);
  await page.locator('.card img').evaluateAll(imgs=>Promise.all(imgs.map(i=>{i.loading='eager';return i.decode();})));
 }
 await page.locator('#series').selectOption('海底の秘宝どら焼き');await page.screenshot({path:'artifacts/editor-20261019/sea-figures.png',fullPage:true});
 await page.evaluate(()=>Workshop.openEditor('DORA_040'));assert.equal(await page.locator('[data-path="atk"]').inputValue(),'210');await page.locator('#done').click();
 // Exercise the actual startup migration using an old draft in isolated browser storage.
 await page.evaluate(old=>{const records=structuredClone(old.records);records[0].name='引き継ぎ確認用';const payload=MPB_CORE.envelope(records,old,[]);payload.workshopBase=old.workshop;payload.workshop=old.workshop;localStorage.setItem('mpb-figure-workshop:v1',JSON.stringify(payload));},old);
 await page.reload();await page.waitForFunction(()=>!document.querySelector('main').inert);
 assert.equal(await page.evaluate(()=>Workshop.getRecords()[0].name),'引き継ぎ確認用');
 assert.equal(await page.evaluate(()=>Workshop.getRecords().filter(r=>r.id.startsWith('DORA_')).length),39);
 assert.doesNotMatch(await page.locator('#saveState').innerText(),/復元できません|復元を確認できません/);
 assert.deepEqual(errors,[]);console.log('PASS latest figures/images/stats/tags/skills/recipes; unchanged tower and gacha settings; 3 series filters; edit screen; saved draft migration.');
}finally{await browser.close();}
