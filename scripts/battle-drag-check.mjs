import assert from 'node:assert/strict';
import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),{chromium}=require(path.join(process.env.MPB_RUNTIME_MODULES,'playwright'));
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true}),errors=[];
page.on('pageerror',e=>errors.push(e.message));
const center=async locator=>{const b=await locator.boundingBox();assert.ok(b);return {x:b.x+b.width/2,y:b.y+b.height/2};};
async function ready(){for(let i=0;i<120;i++){await page.locator('[data-fx-skip]').evaluateAll(nodes=>nodes.forEach(n=>n.click()));if(await page.locator('[data-hand]:enabled').count()&&!await page.locator('.fx-running').count())return;await page.waitForTimeout(50);}throw Error('Battle not ready');}
try{
 await page.goto('http://127.0.0.1:5209');
 await page.evaluate(async()=>{const {launchBattle}=await import('/src/screens/soulDuelRuntime.js'),{pieceStarterDeck}=await import('/src/game/piece-starters.js');document.querySelectorAll('dialog').forEach(d=>d.remove());const deck=pieceStarterDeck('piece-soldier'),owned={};for(const id of deck)owned[id]=(owned[id]||0)+1;void launchBattle({profile:{owned,reducedMotion:true,battleStyle:{fast:true}},request:{playerDeck:deck,enemy:{name:'操作確認',deck}},onResolved:()=>({})});});
 await ready();for(let i=0;i<2;i++){await page.locator('[data-hand]').first().tap();await page.locator('[data-summon]').tap();await ready();}
 const first=page.locator('[data-piece][data-side="0"]').first(),second=page.locator('[data-piece][data-side="0"]').nth(1),a=await center(first),b=await center(second);
 assert.equal(await first.evaluate(el=>getComputedStyle(el).touchAction),'none');
 const cdp=await page.context().newCDPSession(page);
 const touch=(type,p)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:p?[{...p,id:1,radiusX:4,radiusY:4,force:1}]:[]});
 await page.evaluate(()=>{window.dragCancels=0;document.querySelector('.duel-dialog').addEventListener('pointercancel',()=>window.dragCancels++);});
 // A slightly shaky tap stays a tap rather than turning into a failed drag.
 await touch('touchStart',a);await touch('touchMove',{x:a.x+10,y:a.y+3});assert.equal(await page.locator('.duel-drag-ghost').count(),0);await touch('touchEnd');assert.equal(await page.locator('.duel-slot.selected').count(),1);
 await page.locator('[data-tap-move]').tap();await second.tap();await page.locator('.fusion-confirm-pair').waitFor();await page.locator('[data-sheet-close]').first().tap();
 // Real touch moves must retain capture instead of being cancelled by browser pan.
 await touch('touchStart',a);for(let i=1;i<=6;i++){await touch('touchMove',{x:a.x+(b.x-a.x)*i/6,y:a.y-25*Math.sin(Math.PI*i/6)});await page.waitForTimeout(20);}
 assert.equal(await page.locator('.duel-drag-ghost').count(),1);assert.equal(await page.evaluate(()=>window.dragCancels),0);assert.equal(await second.evaluate(el=>el.classList.contains('drag-over')),true);
 const position=await page.locator('.duel-drag-ghost').evaluate(el=>{const d=el.parentElement,r=d.getBoundingClientRect();return {x:parseFloat(el.style.left)+r.left+d.clientLeft-d.scrollLeft,y:parseFloat(el.style.top)+r.top+d.clientTop-d.scrollTop};});assert.ok(Math.abs(position.x-b.x)<1&&Math.abs(position.y-b.y)<1);
 await touch('touchEnd');await page.locator('.fusion-confirm-pair').waitFor();assert.equal(await page.locator('.duel-drag-ghost').count(),0);await page.locator('[data-sheet-close]').first().tap();
 // Cancellation cleans up and permits the next interaction.
 await touch('touchStart',a);await touch('touchMove',{x:a.x+25,y:a.y-30});await touch('touchCancel');assert.equal(await page.locator('.duel-drag-ghost').count(),0);assert.equal(await page.locator('.duel-dialog.dragging').count(),0);const selectedBefore=await page.locator('.duel-slot.selected').count();await first.tap();assert.notEqual(await page.locator('.duel-slot.selected').count(),selectedBefore);
 await page.waitForTimeout(400);await page.mouse.move(a.x,a.y);await page.mouse.down();await page.mouse.move(b.x,b.y,{steps:8});assert.equal(await page.locator('.duel-drag-ghost').count(),1);await page.mouse.up();await page.locator('.fusion-confirm-pair').waitFor();await page.screenshot({path:'artifacts/editor-20261011/battle-drag-touch.png'});
 assert.deepEqual(errors,[]);console.log('PASS: native touch drag without pan cancellation, small tap jitter, tap move/fusion, ghost alignment, pointercancel cleanup, immediate next tap, mouse drag, no page errors');
}catch(e){await page.screenshot({path:'artifacts/editor-20261011/battle-drag-failure.png'});throw e;}finally{await browser.close();}
