const output=process.env.MPB_TEST_OUTPUT||'artifacts/tower';fs.mkdirSync(output,{recursive:true});
const base=process.env.MPB_TEST_URL||'http://127.0.0.1:5173';
import {createRequire} from 'node:module';import path from 'node:path';import fs from 'node:fs';import assert from 'node:assert/strict';
const require=createRequire(path.resolve(path.dirname(process.execPath),'../node_modules/package.json'));
const {chromium}=require('playwright');const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto(base+'/');await page.waitForSelector('.tower-page',{timeout:30000});
for(let i=0;i<5&&await page.locator('[data-comp="dismiss-notice"]').count();i++)await page.locator('[data-comp="dismiss-notice"]').click();
console.log('BOOT',await page.locator('.tower-page').innerText());
for(const width of [320,390,430]){await page.setViewportSize({width,height:844});await page.screenshot({path:path.join(output,`tower-map-${width}.png`)});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
await page.setViewportSize({width:390,height:844});await page.locator('[data-tower-floor="1"]').click();await page.screenshot({path:path.join(output,'tower-floor-confirm.png')});await page.locator('[data-tower-cancel]').first().click();
await page.evaluate(()=>{const k='mob-piece-battle:profile:v1',n=JSON.parse(localStorage.getItem(k));n.towerProgress.cleared=[1,2,3,4];localStorage.setItem(k,JSON.stringify(n));});await page.reload();await page.waitForSelector('[data-tower-floor="5"]:not([disabled])');await page.locator('[data-tower-floor="5"]').click();
for(const width of [320,390,430]){await page.setViewportSize({width,height:844});await page.screenshot({path:path.join(output,`tower-allocation-${width}.png`)});const b=await page.locator('[data-tower-start]').boundingBox();assert.ok(b.y>=0&&b.y+b.height<=844);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
await page.locator('[data-tower-start]').click();assert.equal(await page.locator('.tower-match-track>div').count(),5);await page.reload();await page.waitForSelector('.tower-series');await page.screenshot({path:path.join(output,'tower-series-resume.png')});
await page.locator('[data-tower-play]').click();await page.waitForSelector('.duel-screen');for(let i=0;i<140;i++){await page.locator('[data-fx-skip]').evaluateAll(bs=>bs.forEach(b=>b.click()));await page.waitForTimeout(80);if(await page.locator('[data-hand]:not([disabled])').count()&&!await page.locator('.duel-dialog.fx-running').count())break;}await page.screenshot({path:path.join(output,'tower-battle-mobile.png')});await page.locator('[data-quit]').click();await page.waitForSelector('[data-forfeit]');
await page.locator('[data-forfeit]').click();await page.waitForSelector('[data-close-result]',{timeout:20000});await page.screenshot({path:path.join(output,'tower-match-result.png')});await page.locator('[data-close-result]').click();assert.ok((await page.locator('.tower-score').innerText()).includes('1'));
await page.goto(base+'/#gacha');await page.waitForSelector('.gacha-carousel');assert.equal(await page.locator('[data-banner]').count(),1);await page.screenshot({path:path.join(output,'tower-gacha-locked.png')});
console.log('ERRORS',errors);assert.deepEqual(errors,[]);await browser.close();console.log('PASS tower mobile map/allocation/reload/battle loss/gacha lock');
