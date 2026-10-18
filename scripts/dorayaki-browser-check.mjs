import assert from 'node:assert/strict';
import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),{chromium}=require(path.join(process.env.MPB_RUNTIME_MODULES,'playwright'));
const browser=await chromium.launch({channel:'msedge',headless:true});
try{
 const page=await browser.newPage({viewport:{width:1024,height:900}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>localStorage.setItem('mob-piece-battle:profile:v1',JSON.stringify({version:6,testMode:true,ruleGuideVersion:1})));
 await page.goto((process.env.MPB_TEST_URL||'http://127.0.0.1:5210')+'/#tower');
 const catalog=await page.evaluate(async()=>{const {soulFigures}=await import('/src/game/soul-battle.js');return soulFigures.filter(f=>f.id.startsWith('DORA_'));});
 assert.equal(catalog.filter(f=>f.series==='海底の秘宝どら焼き').length,16);
 for(const f of catalog){assert(await page.evaluate(async src=>{const im=new Image();im.src=src;try{await im.decode();return im.naturalWidth>0;}catch{return false;}},f.image),f.image);}
 await page.locator('.tower-practice > summary').click();
 await page.locator('.dorayaki-test-starters > summary').click();
 assert.equal(await page.locator('[data-soul-starter^="dorayaki-"]').count(),2);
 await page.locator('[data-soul-starter="dorayaki-sea"]').click();
 const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('mob-piece-battle:profile:v1')));
 assert(Object.keys(saved.owned).filter(id=>id.startsWith('DORA_')).length>=16);
 await page.locator('.tower-practice').evaluate(e=>e.open=true);
 await page.locator('[data-practice-opponent]').selectOption('series:dorayaki-desert-normal');
 await page.locator('[data-practice-deck="0"]').selectOption('borrow:dorayaki-sea-normal');
 await page.locator('[data-practice-start]').click();await page.locator('[data-practice-play]').click();
 await page.locator('.duel-screen').waitFor();
 await page.locator('[data-hand]:not([disabled])').first().waitFor({timeout:60000});
 await page.waitForFunction(()=>{const d=document.querySelector('.duel-dialog');return d&&!d.classList.contains('fx-running');},null,{timeout:60000});
 await page.locator('[data-hand]').first().click();
 await page.locator('[data-summon]').click();
 await page.locator('.side-0 [data-piece]').waitFor({timeout:30000});
 await page.locator('.side-0 .duel-figure img').evaluateAll(imgs=>Promise.all(imgs.map(i=>i.decode())));
 await page.waitForFunction(()=>!document.querySelector('.duel-dialog').classList.contains('fx-running'),null,{timeout:60000});
 await page.screenshot({path:'artifacts/dorayaki/test-battle.png'});
 assert.deepEqual(errors,[]);console.log('PASS 39 browser images, sea 16, both test deck buttons, sea grant, borrowed sea versus desert battle, summon and field art.');
}finally{await browser.close();}
