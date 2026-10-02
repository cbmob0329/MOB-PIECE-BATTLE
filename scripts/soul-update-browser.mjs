import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),{chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const browser=await chromium.launch({headless:true,channel:'msedge'});
try{
 const page=await browser.newPage({viewport:{width:390,height:844}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173/#deck');await page.locator('[data-soul-starter="grassland"]').waitFor();
 while(await page.locator('[data-comp="dismiss-notice"]').count())await page.locator('[data-comp="dismiss-notice"]').click();
 for(const id of ['grassland','desert']){await page.locator(`[data-soul-starter="${id}"]`).click();assert.match(await page.locator('.soul-deck-count').textContent(),/45 \/ 45/);}
 await page.evaluate(async()=>{
  const {playSummon}=await import('/src/components/summon.js'),{figures}=await import('/src/data/catalog.js');const hero=figures.find(f=>!f.pending);
  const dialog=document.createElement('dialog');document.body.append(dialog);dialog.showModal();window.labCleanup=playSummon(dialog,{cue:'allSSR',hero,figures:Array(10).fill(hero),art:f=>`<img src="/${f.image}" alt="${f.name}">`,reduced:false,preview:true,onFinish:()=>dialog.remove()});
 });
 assert.equal(await page.locator('.lab-reveal img,.lab-parade img').count(),0);await page.locator('[data-release]').click();
 for(const phase of ['outline','assemble','ink']){await page.locator(`.figure-lab[data-phase="${phase}"]`).waitFor();assert.equal(await page.locator('.lab-reveal img,.lab-parade img').count(),0);await page.screenshot({path:`docs/summon-${phase}-updated.png`});}
 await page.locator('.figure-lab[data-phase="reveal"]').waitFor();assert.equal(await page.locator('.lab-parade img').count(),10);await page.locator('[data-finish]').click();
 await page.evaluate(async()=>{const {launchBattle}=await import('/src/screens/soulDuelRuntime.js'),{applyStarter}=await import('/src/game/soul-starters.js');const profile={owned:{},reducedMotion:true};applyStarter(profile,'grassland');window.duelTest=launchBattle({profile,request:{difficulty:'easy'},onResolved:()=>({}),saveProfile:()=>{}});});
 await page.locator('.duel-dialog:not(.fx-running) [data-step="end"]:enabled').waitFor();
 for(let i=0;i<2;i++){await page.locator('[data-hand="0"]').click();await page.locator('[data-summon]').click();await page.locator('.duel-dialog:not(.fx-running)').waitFor();}
 assert.equal(await page.locator('.duel-slot.fusion-ready').count(),2);await page.screenshot({path:'docs/fusion-ready-updated.png'});
 await page.locator('[data-step="end"]').click();await page.waitForFunction(()=>document.querySelector('.duel-turn-emblem>b')?.textContent!=='1');
 assert.deepEqual(errors,[]);console.log('PASS: both starter buttons, no early figure disclosure, all three gacha stages, two fusion auras, direct first-turn end');
}finally{await browser.close();}
