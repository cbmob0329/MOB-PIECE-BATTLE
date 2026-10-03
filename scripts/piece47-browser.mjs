import assert from 'node:assert/strict';import {createRequire} from 'node:module';import path from 'node:path';import fs from 'node:fs';
const require=createRequire(path.resolve(path.dirname(process.execPath),'../node_modules/package.json'));const {chromium}=require('playwright');
const browser=await chromium.launch({headless:true,channel:'msedge'});const errors=[];const base=process.env.MPB_TEST_URL||'http://127.0.0.1:5173';
try{const context=await browser.newContext({viewport:{width:390,height:844}}),page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/#figure');await page.locator('#figure-collection').waitFor();while(await page.locator('[data-comp="dismiss-notice"]').count())await page.locator('[data-comp="dismiss-notice"]').click();assert.equal(await page.locator('.soul-card').count(),72);
 const images=await page.evaluate(async()=>{const {pieceFigures}=await import('/src/data/piece-catalog.js');return Promise.all(pieceFigures.map(f=>new Promise(resolve=>{const im=new Image();im.onload=()=>resolve({id:f.id,w:im.naturalWidth,h:im.naturalHeight});im.onerror=()=>resolve({id:f.id,w:0});im.src=f.image;})));});assert.equal(images.length,47);assert.ok(images.every(x=>x.w>0));
 await page.selectOption('#figure-collection','collab');assert.equal(await page.locator('.soul-card').count(),302);await page.selectOption('#figure-collection','ALL');assert.equal(await page.locator('.soul-card').count(),374);
 await page.goto(base+'/#deck');await page.locator('[data-piece-starter="piece-boxer"]').click();assert.match(await page.locator('.soul-deck-count').textContent(),/45 \/ 45/);
 await page.reload();assert.match(await page.locator('.soul-deck-count').textContent(),/45 \/ 45/);
 await page.locator('[data-piece-starter="piece-soldier"]').click();await page.screenshot({path:'docs/piece47-deck-mobile.png',fullPage:false});
 await page.goto(base+'/#figure');await page.locator('#figure-search').fill('モブレッド');await page.waitForTimeout(300);await page.screenshot({path:'docs/piece47-figures-mobile.png',fullPage:false});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 await page.goto(base+'/#battle');await page.locator('[data-battle-start="free:easy"]').click();await page.waitForTimeout(700);assert.ok(await page.locator('body').textContent());await page.screenshot({path:'docs/piece47-battle-mobile.png',fullPage:false});
 const stored=await page.evaluate(()=>JSON.parse(localStorage.getItem('mob-piece-battle:profile:v1')));assert.equal(stored.pieceCollectionVersion,1);assert.ok(stored.owned['piece:049']>=3);
 // Existing save: reload applies grants once, preserving every deck and currency.
 const old={...stored,pieceCollectionVersion:0,testMode:false,owned:{'01':12,'16':2},diamonds:123,rubies:17,coins:100,centerId:'16',soulDecks:[['16'],['01'],[],[],[]],soulDeckSlot:0};
 await page.evaluate(v=>localStorage.setItem('mob-piece-battle:profile:v1',JSON.stringify(v)),old);await page.goto(base+'/#deck');await page.reload();
 const migrated=await page.evaluate(()=>JSON.parse(localStorage.getItem('mob-piece-battle:profile:v1')));assert.deepEqual(migrated.soulDecks,old.soulDecks);assert.equal(migrated.diamonds,123);assert.equal(migrated.rubies,17);assert.equal(migrated.coins,100);assert.equal(migrated.owned['16'],2);assert.equal(migrated.owned['01'],12);assert.equal(migrated.centerId,'16');
 await page.reload();const again=await page.evaluate(()=>JSON.parse(localStorage.getItem('mob-piece-battle:profile:v1')));assert.deepEqual(again.owned,migrated.owned);assert.deepEqual(again.soulDecks,migrated.soulDecks);
 await page.reload();
 await page.evaluate(async()=>{const {launchBattle}=await import('/src/screens/soulDuelRuntime.js'),{grantMainCollection}=await import('/src/game/piece-starters.js');const profile={owned:{},reducedMotion:true};grantMainCollection(profile,{newProfile:true});const random=Math.random;Math.random=()=>.999999;try{window.pieceBattle=launchBattle({profile,request:{difficulty:'easy'},onResolved:()=>({}),saveProfile:()=>{}});}finally{Math.random=random;}});
 await page.locator('.duel-dialog:not(.fx-running) [data-step="end"]:enabled').waitFor();
 for(let i=0;i<2;i++){await page.locator('[data-hand="0"]').click();await page.locator('[data-summon]').click();await page.locator('.duel-dialog:not(.fx-running)').waitFor();}
 for(let i=0;i<2;i++){await page.locator('.duel-field.side-0 [data-piece]').nth(i).click();await page.locator('[data-material]').click();}
 await page.locator('[data-recipe]').first().click();await page.locator('[data-fuse]').click();await page.locator('.duel-dialog:not(.fx-running)').waitFor();
 assert.equal(await page.locator('.duel-field.side-0 [data-piece]').count(),1);assert.match(await page.locator('.duel-field.side-0').textContent(),/モブパープルストーン/);
 await page.locator('.duel-field.side-0 [data-piece]').click();await page.locator('[data-skill]').click();await page.locator('[data-skill-confirm]').click();await page.locator('.duel-dialog:not(.fx-running)').waitFor();
 assert.match(await page.locator('.duel-budget').textContent(),/使用済み/);await page.screenshot({path:'docs/piece47-fusion-skill-mobile.png'});
 assert.deepEqual(errors,[]);console.log('PASS browser: 47 decoded images; 72/302/374 collection filters; free starters/reload; battle summon/fusion/skill buttons; 390px layout; real localStorage migration preserves decks/currency/ownership; no page errors');
}finally{await browser.close();}

