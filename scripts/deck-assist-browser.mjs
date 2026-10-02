import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const browser=await chromium.launch({headless:true,channel:'msedge'});
try{
 const page=await browser.newPage({viewport:{width:390,height:844}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto((process.env.TEST_URL||'http://127.0.0.1:5173')+'/#deck');await page.locator('[data-deck-plan="seeds"]').waitFor();
 await page.evaluate(async()=>{const {soulFigures}=await import('/src/game/soul-battle.js');const key='mob-piece-battle:profile:v1',p=JSON.parse(localStorage.getItem(key));p.owned=Object.fromEntries(soulFigures.map(f=>[f.id,25]));p.testMode=true;p.soulDecks=[['170'],[],[],[],[]];p.soulDeckSlot=0;p.soulDeckFilter='mob';localStorage.setItem(key,JSON.stringify(p));});await page.reload();
 while(await page.locator('[data-comp="dismiss-notice"]').count())await page.locator('[data-comp="dismiss-notice"]').click();
 const saved=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('mob-piece-battle:profile:v1')).soulDecks[0]);
 await page.locator('.soul-selected [data-soul-recommend="170"]').click();await page.locator('.assist-route').first().waitFor();assert.ok(await page.locator('.assist-route').first().locator('.assist-flow').count()>=3);
 assert.deepEqual(await saved(),['170']);await page.screenshot({path:'docs/deck-recommendations.png'});
 await page.locator('[data-assist-route="0"]').click();await page.locator('[data-assist-apply]').waitFor();assert.deepEqual(await saved(),['170']);await page.locator('[data-assist-close]').last().click();assert.deepEqual(await saved(),['170']);
 await page.locator('[data-deck-plan="routes"]').click();await page.locator('[data-assist-apply]').waitFor();await page.locator('[data-assist-apply]').click();const after=await saved();assert.ok(after.length>=33&&after.includes('170'));
 await page.locator('[data-deck-undo]').click();assert.deepEqual(await saved(),['170']);
 await page.locator('[data-deck-plan="fill"]').click();await page.locator('[data-assist-apply]').waitFor();await page.locator('[data-assist-apply]').click();assert.equal((await saved()).length,45);assert.equal((await saved())[0],'170');
 await page.locator('[data-deck-plan="seeds"]').click();await page.locator('[data-assist-apply]').waitFor();await page.locator('[data-assist-apply]').click();assert.equal((await saved()).length,45);
 for(const width of [320,390,768]){await page.setViewportSize({width,height:844});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
 await page.setViewportSize({width:390,height:844});await page.locator('.deck-assist').scrollIntoViewIfNeeded();await page.waitForTimeout(200);await page.locator('[data-screen-loader]').waitFor({state:'hidden'});await page.screenshot({path:'docs/deck-assist.png'});
 const final=await saved();await page.reload();assert.deepEqual(await saved(),final);assert.deepEqual(errors,[]);
 console.log('PASS: reserve tap recommendations, concrete MOB path, cancel without mutation, preview/apply, undo, three modes, persistence and responsive widths');
}finally{await browser.close();}
