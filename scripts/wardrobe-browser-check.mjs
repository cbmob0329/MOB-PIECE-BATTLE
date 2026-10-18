import assert from 'node:assert/strict';
import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),{chromium}=require(path.join(process.env.MPB_RUNTIME_MODULES,'playwright'));
const browser=await chromium.launch({channel:'msedge',headless:true});
try{
 const page=await browser.newPage({viewport:{width:390,height:844}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>{if(!localStorage.getItem('mob-piece-battle:profile:v1'))localStorage.setItem('mob-piece-battle:profile:v1',JSON.stringify({version:6,testMode:true,ruleGuideVersion:1}));});
 await page.goto((process.env.MPB_TEST_URL||'http://127.0.0.1:5210')+'/#home');
 await page.locator('.wardrobe-home').scrollIntoViewIfNeeded();assert(await page.locator('.wardrobe-home-icon').isVisible());await page.locator('.wardrobe-home img').evaluate(img=>img.decode());await page.locator('[data-go="wardrobe"].wardrobe-home').click();await page.locator('.wardrobe-page').waitFor();
 assert.equal(await page.locator('[data-wardrobe-item]').count(),25);assert.equal(await page.locator('[data-wardrobe-item]:disabled').count(),0);
 await page.locator('[data-wardrobe-view="sets"]').click();await page.locator('[data-wardrobe-item="grass"]').click();
 await page.locator('[data-wardrobe-view="parts"]').click();await page.locator('[data-wardrobe-slot="scarf"]').click();await page.locator('[data-wardrobe-item="sea"]').click();
 await page.locator('[data-wardrobe-slot="shoes"]').click();await page.locator('[data-wardrobe-item="none"]').click();
 assert(await page.locator('.wardrobe-model img[src$="base/bare_feet.png"]').count());
 await page.locator('[data-wardrobe="save"]').click();assert(await page.locator('.topbar .wardrobe-avatar').count());
 await page.reload();await page.locator('.wardrobe-page').waitFor();assert(await page.locator('.wardrobe-model img[src$="layers/sea/scarf.png"]').count());
 for(const width of [320,390,1024]){await page.setViewportSize({width,height:844});const overflow=await page.locator('.wardrobe-page').evaluate(e=>({width:e.clientWidth,scroll:e.scrollWidth,wide:[...e.querySelectorAll('*')].filter(x=>x.getBoundingClientRect().right>e.getBoundingClientRect().right+1).slice(0,12).map(x=>[x.className,x.getBoundingClientRect().width])}));if(overflow.scroll>overflow.width+1){console.log(width,overflow);await page.screenshot({path:'artifacts/wardrobe-overflow.png'});}assert(overflow.scroll<=overflow.width+1);await page.locator('.wardrobe-model img').evaluateAll(imgs=>Promise.all(imgs.map(img=>img.decode())));await page.locator('#main').screenshot({path:`artifacts/wardrobe-${width}.png`});}
 await page.locator('.wardrobe-closet').scrollIntoViewIfNeeded();await page.locator('#main').screenshot({path:'artifacts/wardrobe-parts.png'});
 // Failed writes must leave the saved outfit and the active avatar intact.
 await page.locator('[data-wardrobe-view="sets"]').click();await page.locator('[data-wardrobe-item="desert"]').click();
 await page.evaluate(()=>{window.savedStorageSet=Storage.prototype.setItem;Storage.prototype.setItem=function(){throw Error('test quota');};});
 await page.locator('[data-wardrobe="save"]').click();assert.match(await page.locator('.toast').innerText(),/保存できません/);
 assert(await page.locator('.topbar img[src$="layers/grass/outfit.png"]').count());
 await page.evaluate(()=>{Storage.prototype.setItem=window.savedStorageSet;});
 await page.locator('[data-wardrobe="undo"]').click();assert(await page.locator('.wardrobe-model img[src$="layers/grass/outfit.png"]').count());
 await page.evaluate(()=>{location.hash='settings';});await page.locator('[data-test-action="toggle-mode"]').click();
 await page.evaluate(()=>{location.hash='wardrobe';});await page.locator('.wardrobe-page').waitFor();await page.locator('[data-wardrobe-view="parts"]').click();
 assert.equal(await page.locator('[data-wardrobe-item]:disabled').count(),23);assert(await page.locator('.wardrobe-model img[src$="layers/mob/outfit.png"]').count());
 await page.evaluate(()=>{location.hash='home';});await page.locator('.wardrobe-home').waitFor();await page.locator('.wardrobe-home').scrollIntoViewIfNeeded();await page.locator('#main').screenshot({path:'artifacts/wardrobe-home.png'});
 assert.deepEqual(errors,[]);console.log('PASS HOME entry, 24 test sets, mixed parts, save/reload, failed-save rollback, normal locks, 320/390/1024 layouts.');
}finally{await browser.close();}
