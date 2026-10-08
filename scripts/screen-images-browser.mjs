import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {createRequire} from 'node:module';import {pathToFileURL} from 'node:url';
const root=new URL('../',import.meta.url).pathname.replace(/^\/(\w:)/,'$1'),require=createRequire(path.resolve(path.dirname(process.execPath),'../node_modules/package.json')),{chromium}=require('playwright');
const {byId}=await import(pathToFileURL(root+'src/data/catalog.js')),base=process.env.MPB_TEST_URL||'http://127.0.0.1:5208',out=process.env.MPB_PROOF_DIR||'screen-images-proof';fs.mkdirSync(out,{recursive:true});
const b=await chromium.launch({channel:'msedge',headless:true}),errors=[],reports={};
const newPage=async()=>{const p=await b.newPage({viewport:{width:390,height:844}});p.on('pageerror',e=>errors.push(e.message));return p;};
const start=async p=>{await p.goto(base);await p.waitForSelector('.tower-world');while(await p.locator('[data-comp="dismiss-notice"]').count())await p.locator('[data-comp="dismiss-notice"]').click();};
const gacha=async p=>{await p.evaluate(()=>location.hash='gacha');await p.waitForSelector('.gacha-page');};
const url=id=>new URL(byId.get(id).image,base).href;
try{
 // Hidden lazy requests can remain pending indefinitely; they must not block this slide.
 const p=await newPage();let release;const held=new Promise(r=>release=r),hidden=['CRY_S01','SPI_M02','RUN_S02'].map(url);
 await p.route('**/*',async route=>{if(hidden.includes(route.request().url()))await held;await route.continue().catch(()=>{});});await start(p);await gacha(p);await p.waitForFunction(()=>[...document.querySelectorAll('.banner-slide:first-child img')].every(im=>im.complete&&im.naturalWidth));await p.clock.install();await p.clock.fastForward(16000);
 assert(await p.locator('[data-screen-loader]').isHidden());await p.screenshot({path:out+'/gacha-hidden-lazy-ok.png'});
 await p.clock.resume();await p.locator('[data-gacha="next"]').click();await p.waitForTimeout(1500);
 assert(await p.locator('.banner-slide:nth-child(2) img').evaluateAll(images=>images.every(im=>im.loading==='eager')));
 release();await p.waitForFunction(()=>[...document.querySelectorAll('.banner-slide:nth-child(2) img')].every(im=>im.complete&&im.naturalWidth));await p.waitForTimeout(100);assert(await p.locator('[data-screen-loader]').isHidden());reports.hiddenLazy='PASS: hidden 3 excluded, selected next slide eager and completes';await p.close();
 // A visible, slow image remains pending and a later load clears the overlay.
 const slow=await newPage();await slow.clock.install();let releaseSlow;const holdSlow=new Promise(r=>releaseSlow=r);await slow.route(url('NIN_S01'),async route=>{await holdSlow;await route.continue().catch(()=>{});});await start(slow);await gacha(slow);await slow.clock.fastForward(16000);
 const slowText=await slow.locator('[data-screen-loader]').textContent();console.log('slow status:',slowText);assert(slowText.includes('通信に時間がかかっています'));assert(!slowText.includes('件を読み込めませんでした'));await slow.screenshot({path:out+'/gacha-slow-pending.png'});releaseSlow();await slow.waitForFunction(()=>[...document.querySelectorAll('.banner-slide:first-child img')].every(im=>im.complete&&im.naturalWidth>0));assert(await slow.locator('[data-screen-loader]').isHidden());reports.slow={text:slowText,recovered:true};await slow.close();
 // Actual error identifies the requested URL and retry restores the figure and placeholder.
 const fail=await newPage();let broken=true;await fail.route(url('NIN_S01'),route=>broken?route.fulfill({status:404,body:'missing'}):route.continue());await start(fail);await gacha(fail);await fail.waitForFunction(()=>document.querySelector('[data-load-retry]')?.hidden===false);const failure=await fail.locator('[data-load-details]').textContent();assert(failure.includes('NIN_S01.png'));await fail.locator('[data-load-details]').evaluate(e=>e.open=true);await fail.screenshot({path:out+'/gacha-real-error-url.png'});broken=false;await fail.locator('[data-load-retry]').click();await fail.waitForFunction(()=>[...document.querySelectorAll('.banner-slide:first-child img')].every(im=>im.complete&&im.naturalWidth>0));await fail.waitForFunction(()=>document.querySelector('[data-screen-loader]').hidden);assert(await fail.locator('[data-screen-loader]').isHidden());assert(await fail.locator('.banner-slide img').first().isVisible());reports.actualFailure={url:url('NIN_S01'),retry:true};await fail.close();
 assert.deepEqual(errors,[]);console.log('PASS clipped lazy banners, slow image recovery, actual URL error and retry');
}finally{await b.close();}
