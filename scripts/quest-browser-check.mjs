import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const browser=await chromium.launch({headless:true,channel:process.env.BROWSER_CHANNEL||'msedge'});
try{
 const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173/#gacha');
 await page.evaluate(()=>{const key='mob-piece-battle:profile:v1';const p=JSON.parse(localStorage.getItem(key)||'{}');Object.assign(p,{rubies:500,diamonds:100,owned:{},reducedMotion:true});localStorage.setItem(key,JSON.stringify(p));});
 await page.reload();await page.locator('.gacha-carousel').waitFor();
 while(await page.locator('[data-comp="dismiss-notice"]').count())await page.locator('[data-comp="dismiss-notice"]').click();
 assert.equal(await page.locator('[data-banner]').count(),22);
 await page.locator('.gacha-selection [data-gacha="exchange"]').click();
 await page.locator('[data-exchange="01"]').click();
 await page.locator('[data-confirm-exchange="01"]').click();
 await page.waitForFunction(()=>JSON.parse(localStorage.getItem('mob-piece-battle:profile:v1')).owned['01']===1);
 const profile=await page.evaluate(()=>JSON.parse(localStorage.getItem('mob-piece-battle:profile:v1')));
 assert.equal(profile.rubies,490);assert.equal(profile.diamonds,100);
 await page.locator('[data-gacha="banner"]').click();await page.locator('.sheet-heading [data-gacha="close"]').click();
 await page.locator('[data-select-banner="022"]').click();
 await page.locator('.gacha-selection [data-gacha="lineup"]').click();
 assert.ok(await page.locator('.lineup-grid .result-tile').count()>25);
 await page.locator('.lineup-grid [data-detail]').first().click();await page.locator('[data-gacha="detail-close"]').click();
 await page.screenshot({path:'docs/quest-gacha-lineup.png'});
 await page.locator('.sheet-heading [data-gacha="close"]').click();
 await page.locator('.gacha-selection [data-draw="10"]').click();await page.locator('[data-confirm-draw="10"]').click();
 await page.locator('[data-skip]').click();assert.equal(await page.locator('.result-grid .result-tile').count(),10);
 await page.locator('.sheet-primary[data-gacha="close"]').click();
 for(const width of [320,390,768]){await page.setViewportSize({width,height:844});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow at ${width}`);}
 await page.screenshot({path:'docs/quest-gacha.png'});
 assert.deepEqual(errors,[]);console.log('PASS: 22 banners, ruby exchange/persistence, added lineup/detail, ten draw, 320/390/768px layout');
}finally{await browser.close();}
