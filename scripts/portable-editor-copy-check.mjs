import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {pathToFileURL} from 'node:url';
const dir=path.resolve('artifacts/editor-20261011/MOB-PIECE-Editor');
const require=createRequire(import.meta.url),{chromium}=require(path.join(process.env.MPB_RUNTIME_MODULES,'playwright'));
const browser=await chromium.launch({channel:'msedge',headless:true});
try{
 const context=await browser.newContext({viewport:{width:900,height:1000}}),page=await context.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));await page.goto(pathToFileURL(path.join(dir,'index.html')).href);await page.waitForFunction(()=>!document.querySelector('main').inert);
 const source=await page.evaluate(()=>Workshop.getRecords().find(r=>r.soulClass==='middle'&&r.summon.recipes.length&&r.tags.length));
 const imagePath=await page.evaluate(()=>Object.values(Workshop.getSource().images)[0]);
 await page.click('#newFigure');await page.fill('#newName','性能コピーの新フィギュア');await page.setInputFiles('#newImage',path.join(dir,imagePath));await page.waitForFunction(()=>document.querySelector('#createStatus').textContent.includes('準備'));
 assert.equal(await page.locator('[data-template-id]').count(),24);await page.click('#templateMore');assert.equal(await page.locator('[data-template-id]').count(),48);
 await page.selectOption('#templateTag',source.tags[0]);await page.selectOption('#templateClass',source.soulClass);await page.selectOption('#templateRarity',source.rarity);
 const shown=await page.locator('[data-template-id]').evaluateAll(nodes=>nodes.map(n=>n.dataset.templateId));assert.ok(shown.length);assert.equal(await page.evaluate(({shown,source})=>shown.every(id=>{const r=Workshop.getRecords().find(r=>r.id===id);return r.tags.includes(source.tags[0])&&r.soulClass===source.soulClass&&r.rarity===source.rarity;}),{shown,source}),true);
 await page.click('#templateClear');const tagName=await page.evaluate(id=>Workshop.getSource().tags.find(t=>t.id===id).name,source.tags[0]);await page.fill('#templateSearch',tagName);assert.ok(await page.locator('[data-template-id]').count());
 const preview=await page.getAttribute('#newPreview','src');await page.fill('#templateSearch',source.name);await page.locator('[data-template-id]').filter({has:page.locator('img[alt="'+source.name+'"]')}).first().click();await page.click('#applyTemplate');
 assert.equal(await page.inputValue('#newName'),'性能コピーの新フィギュア');assert.equal(await page.getAttribute('#newPreview','src'),preview);assert.equal(await page.inputValue('#newAtk'),String(source.atk));assert.equal(await page.inputValue('#newClass'),source.soulClass);
 await page.check('#templateSummon');await page.fill('#newAtk','777');await page.screenshot({path:'artifacts/editor-20261011/editor-copy.png'});await page.click('#submitFigure');await page.waitForSelector('#replaceImage');
 const added=await page.evaluate(()=>Workshop.getRecords().at(-1));assert.equal(added.atk,777);assert.equal(added.name,'性能コピーの新フィギュア');assert.deepEqual(added.tags,source.tags);assert.deepEqual(added.skill,source.skill);assert.equal(added.attackType,source.attackType);assert.equal(added.def,source.def);assert.notEqual(added.id,source.id);assert.equal(added.uid,added.id);assert.ok(added.summon.recipes.every(r=>r.target===added.id));assert.ok(added.summon.recipes.every(r=>!source.summon.recipes.some(s=>s.id===r.id)));assert.deepEqual(added.summon.passive,source.summon.passive);
 assert.deepEqual(await page.evaluate(id=>Workshop.getRecords().find(r=>r.id===id),source.id),source);
 const exported=await page.evaluate(()=>Workshop.snapshot());await page.click('#closeEditor');await page.setViewportSize({width:390,height:844});await page.click('#newFigure');assert.equal(await page.textContent('#templateStatus'),'');await page.locator('.copyPerformance').scrollIntoViewIfNeeded();await page.screenshot({path:'artifacts/editor-20261011/editor-copy-search-mobile.png'});assert.equal(await page.evaluate(()=>document.querySelector('#createFigure').scrollWidth<=document.querySelector('#createFigure').clientWidth),true);assert.equal(await page.locator('.templateCard img').first().evaluate(img=>img.complete&&img.naturalWidth>0),true);await page.fill('#templateSearch','存在しないコピー元___');assert.equal(await page.isDisabled('#applyTemplate'),true);assert.equal(await page.locator('[data-template-id]').count(),0);await page.click('#cancelCreate');
 const fresh=await browser.newContext(),restored=await fresh.newPage();await restored.goto(pathToFileURL(path.join(dir,'index.html')).href);await restored.waitForFunction(()=>!document.querySelector('main').inert);await restored.evaluate(json=>{Workshop.stageImport(json);Workshop.applyImport();},exported);assert.deepEqual(await restored.evaluate(()=>Workshop.getRecords().at(-1)),added);assert.deepEqual(errors,[]);
 console.log('PASS: performance/tags/skill copy, optional fusion remapping, name/image preservation, manual adjustment, source isolation, JSON restore, empty search and dialog reset');
}finally{await browser.close();}
