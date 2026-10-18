import assert from 'node:assert/strict';
import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),{chromium}=require(path.join(process.env.MPB_RUNTIME_MODULES,'playwright'));
const browser=await chromium.launch({channel:'msedge',headless:true});
try{
 const page=await browser.newPage({viewport:{width:390,height:844}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.env.MPB_TEST_URL||'http://127.0.0.1:5210');await page.locator('.rule-guide[open]').waitFor();
 for(const width of [320,390,1024]){
  await page.setViewportSize({width,height:844});
  for(let i=0;i<8;i++){
   await page.locator(`[data-guide-page="${i}"]`).click();await page.locator('.guide-illustration').evaluate(img=>img.decode());
   const layout=await page.locator('.rule-guide').evaluate(d=>({overflow:d.scrollWidth>d.clientWidth+1,font:parseFloat(getComputedStyle(d.querySelector('.guide-copy p')).fontSize),weight:Number(getComputedStyle(d.querySelector('.guide-copy p')).fontWeight),square:d.querySelector('img').naturalWidth===d.querySelector('img').naturalHeight,scroll:d.scrollTop}));
   assert(!layout.overflow,`width ${width}, page ${i}`);assert(layout.font>=17);assert(layout.weight>=700);assert(layout.square);assert(layout.scroll<2);
  }
  await page.locator('[data-guide-page="3"]').click();await page.locator('.guide-illustration').evaluate(img=>img.decode());await page.locator('.rule-guide').screenshot({path:`artifacts/cartoon-guide-${width}.png`});
  await page.locator('.guide-copy').scrollIntoViewIfNeeded();await page.locator('.rule-guide').screenshot({path:`artifacts/cartoon-guide-copy-${width}.png`});
  await page.locator('[data-guide-next]').click();assert.equal(await page.locator('.rule-guide').evaluate(d=>d.scrollTop),0);
 }
 await page.keyboard.press('Escape');await page.locator('.rule-guide').waitFor({state:'detached'});await page.locator('[data-open-guide]').click();await page.locator('.rule-guide[open]').waitFor();assert.deepEqual(errors,[]);
 console.log('PASS 8 pages × 320/390/1024px: bold readable copy, square images, no horizontal overflow, page scroll reset, reopen.');
}finally{await browser.close();}
