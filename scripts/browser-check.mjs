import {createRequire} from 'node:module';
import path from 'node:path';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
let chromium;try{({chromium}=require('playwright'));}catch{({chromium}=createRequire(path.resolve(path.dirname(process.execPath),'../node_modules/package.json'))('playwright'));}

const browser=await chromium.launch({headless:true,channel:"msedge"});const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});
const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(process.env.MPB_TEST_URL||'http://127.0.0.1:5173');await page.locator('.hero-art').evaluate(img=>img.decode());await page.screenshot({path:'docs/home-390.png'});
for(const width of [320,375,390,430]){await page.setViewportSize({width,height:844});await page.screenshot({path:`docs/home-${width}.png`});console.log('viewport',width,await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,battle:document.querySelector('.battle-cta').getBoundingClientRect().bottom,nav:document.querySelector('nav').getBoundingClientRect().top,broken:[...document.images].filter(i=>i.complete&&!i.naturalWidth).length})));}
await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'FIGURE',exact:true}).click();await page.locator('#figure-search').fill('No.002');await page.getByRole('button',{name:'センターに設定',exact:true}).click();await page.getByRole('button',{name:'HOME',exact:true}).click();await page.reload();assert.equal(await page.locator('.hero-label h2').textContent(),'ぷにモブレッド');console.log('saved center OK');await page.getByRole('button',{name:'DECK',exact:true}).click();for(let i=0;i<4;i++)await page.locator('[data-add="01"]').click();console.log('duplicate cap',await page.locator('.deck-meter').innerText(),await page.locator('.toast').innerText());
for(const id of ['02','03','14','53','56','11','04','05','06','07','08','09','10','12','13','15','16','17','18','19','20','21','22','23','24','25','26','27','28']){if(await page.locator('[data-add="'+id+'"]').count())await page.locator('[data-add="'+id+'"]').click();}
assert.match(await page.locator('.deck-meter').innerText(),/25\/25/);console.log('deck',await page.locator('.deck-meter').innerText());await page.screenshot({path:'docs/deck-390.png'});await page.getByRole('button',{name:'BATTLE',exact:true}).click();await page.locator('[data-mode="free"]').click();console.log('mode',await page.locator('.toast').innerText());await page.screenshot({path:'docs/battle-390.png'});assert.deepEqual(errors,[]);console.log('errors',errors);await browser.close();



