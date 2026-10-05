import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {soulFigures} from '../src/game/soul-battle.js';
import {freeEnemies} from '../src/game/free-enemies.js';
import {release} from '../src/game/initial-release.js';
import {OWN_CAP} from '../src/data/gacha.js';
const require=createRequire(path.resolve(path.dirname(process.execPath),'../node_modules/package.json'));
const {chromium}=require('playwright');
const browser=await chromium.launch({channel:'msedge',headless:true});
const base=process.env.MPB_TEST_URL||'http://127.0.0.1:5207',key='mob-piece-battle:profile:v1';
const p=await browser.newPage({viewport:{width:375,height:740},isMobile:true,hasTouch:true});
const errors=[],checks=[],battles=[];p.on('pageerror',e=>errors.push(e.message));
const saved=()=>p.evaluate(k=>JSON.parse(localStorage.getItem(k)),key);
async function fixture(data){await p.evaluate(({key,data})=>localStorage.setItem(key,JSON.stringify(data)),{key,data});await p.goto(base+'/#deck');await p.reload();await p.locator('[data-deck-reset-filters]').click();}
async function find(id){await p.locator('#deck-search').fill(id);return p.locator(`[data-soul-add="${id}"]`);}
async function skip(){for(let i=0;i<100;i++){await p.locator('[data-fx-skip]').evaluateAll(bs=>bs.forEach(b=>b.click()));if(!await p.locator('.duel-dialog.fx-running').count())return;await p.waitForTimeout(40);}}
async function summonFirst(){for(let i=0;i<20;i++){await skip();const hand=p.locator('[data-hand]').first();if(await hand.isEnabled()){await hand.click();if(await p.locator('[data-summon]').count()){await p.locator('[data-summon]').click();await skip();return;}}await p.waitForTimeout(100);}throw Error('No player summon');}
try{
 await p.goto(base);await p.locator('[data-initial-review]').first().click();await p.locator('[data-initial-confirm]').click();while(await p.locator('[data-comp="dismiss-notice"]').count())await p.locator('[data-comp="dismiss-notice"]').click();
 const original=await saved(),owned=Object.fromEntries(soulFigures.map(f=>[f.id,Math.min(f.soulClass==='seed'?3:1,OWN_CAP[f.rarity])]));owned.spboss001=1;
 const blank={...original,owned,soulDecks:[[],[],[],[],[]],soulDeckSlot:0,reducedMotion:true};await fixture(blank);
 for(let i=0;i<3;i++)await(await find('NS2_033')).click();assert.ok(await(await find('NS2_033')).isDisabled());assert.match(await p.locator('[id="deck-reason-NS2_033"]').innerText(),/同名3体/);
 await p.locator('[data-soul-remove]').first().click();assert.ok(await(await find('NS2_033')).isEnabled());await p.reload();assert.equal((await saved()).soulDecks[0].filter(x=>x==='NS2_033').length,2);
 await p.locator('[data-soul-slot="1"]').click();await p.locator('[data-deck-reset-filters]').click();assert.ok(await(await find('NS2_033')).isDisabled());assert.match(await p.locator('[id="deck-reason-NS2_033"]').innerText(),/DECK 1/);
 await p.locator('[data-soul-slot="2"]').click();assert.ok(await(await find('NS2_033')).isEnabled());await(await find('NS2_033')).click();
 for(const id of ['NS2_045','NS2_054']){await(await find(id)).click();assert.ok(await(await find(id)).isDisabled());assert.match(await p.locator(`[id="deck-reason-${id}"]`).innerText(),/同名1体/);}
 assert.deepEqual((await saved()).owned,owned);checks.push('manual add/remove, save/reload, 3/1/1, slot 1/2 exclusion and slot 3 reuse');
 await p.locator('#deck-search').fill('no-such-owned-card');assert.match(await p.locator('#deck-inventory').innerText(),/絞り込み解除/);await p.locator('[data-deck-reset-filters]').click();assert.ok(await p.locator('[data-soul-add="NS2_054"]').count());
 await find('spboss001');assert.ok(await p.locator('[data-soul-add="spboss001"]').isDisabled());assert.match(await p.locator('[id="deck-reason-spboss001"]').innerText(),/BATTLE対象外/);
 await fixture({...blank,soulDecks:[freeEnemies[0].deck.slice(0,30),[],[],[],[]]});await find('NS2_033');assert.ok(await p.locator('[data-soul-add="NS2_033"]').isDisabled());assert.match(await p.locator('[id="deck-reason-NS2_033"]').innerText(),/30体/);checks.push('quota, retired reason and filtered empty state');
 const old=['NS2_001','NS2_001','NS2_001','NS2_001','spboss001','obsolete-id'];await fixture({...blank,soulDecks:[old],soulDeckSlot:'4'});assert.deepEqual((await saved()).soulDecks[0],old);await(await find('NS2_002')).click();assert.deepEqual((await saved()).soulDecks[4],['NS2_002']);await p.locator('[data-soul-slot="0"]').click();
 for(const index of [5,4,3])await p.locator(`[data-soul-remove="${index}"]`).click();await(await find('NS2_002')).click();assert.equal((await saved()).soulDecks[0].length,4);assert.deepEqual((await saved()).owned,owned);checks.push('partial old save opens missing slot; invalid old deck repaired only by explicit removals');
 await fixture({...blank,soulDecks:[[],['NS2_033'],[],[],[]]});await find('NS2_033');
 for(const width of [320,375,430]){await p.setViewportSize({width,height:740});await p.locator('[data-screen-loader]').waitFor({state:'hidden'});await p.locator('[id="deck-reason-NS2_033"]').scrollIntoViewIfNeeded();assert.ok(await p.locator('#deck-inventory').evaluate(el=>el.scrollWidth<=el.clientWidth+2));await p.screenshot({path:`docs/deck-availability-${width}.png`});}
 await p.setViewportSize({width:375,height:740});await fixture(blank);await find('NS2_033');const before=await saved();await p.evaluate(k=>{window.restoreSetItem=Storage.prototype.setItem;Storage.prototype.setItem=function(a,b){if(a===k)throw Error('test quota');return window.restoreSetItem.call(this,a,b);};},key);await p.locator('[data-soul-add="NS2_033"]').click();assert.deepEqual(await saved(),before);assert.equal(await p.locator('.soul-selected-piece').count(),0);await p.evaluate(()=>Storage.prototype.setItem=window.restoreSetItem);checks.push('failed save preserves live deck and persisted ownership');
 await p.locator('[data-deck-plan="aces"]').click();for(const id of release.starters[0].aceIds)await p.locator(`[data-ace-pick][value="${id}"]`).check();await p.locator('[data-aces-build]').click();await p.locator('[data-assist-apply]').waitFor({timeout:60000});await p.locator('[data-assist-apply]').click();assert.equal((await saved()).soulDecks[0].length,45);assert.deepEqual((await saved()).owned,owned);checks.push('five-ace preview and save without inventory changes');
 await p.goto(base+'/#battle');assert.equal(await p.locator('[data-battle-start^="free:normal:"]').count(),10);assert.match(await p.locator('[data-battle-start="free:normal:sea"]').innerText(),/海底の全5ミドル/);await p.screenshot({path:'docs/enemy-themes-mobile.png'});
 for(const e of freeEnemies){
  await p.goto(base+'/#battle');await p.reload();await p.locator(`[data-battle-start="free:normal:${e.id}"]`).click();await p.locator('.duel-topline').waitFor();await skip();assert.ok((await p.locator('.duel-player').allTextContents()).some(t=>t.includes(e.name)));
  for(let i=0;i<3;i++)await summonFirst();await p.locator('[data-step="battle"]').click();await skip();await p.locator('[data-step="end"]').click();
  for(let i=0;i<180;i++){await skip();if(await p.locator('[data-pass]').count())await p.locator('[data-pass]').click();if(await p.locator('[data-evolve-decline]').count())await p.locator('[data-evolve-decline]').click();if((await p.locator('.duel-topline').innerText()).includes('YOUR TURN')&&await p.locator('[data-piece][data-side="1"]').count())break;await p.waitForTimeout(60);}
  const enemies=await p.locator('[data-piece][data-side="1"] .duel-figure-name').allTextContents();assert.ok(enemies.length,e.id+' no CPU field');const allowedNames=new Set(e.deck.map(id=>soulFigures.find(f=>f.id===id).name));for(const name of enemies)assert.ok(allowedNames.has(name),e.id+' '+name);battles.push({id:e.id,visibleEnemies:enemies});
  if(['grass','sea','lilith'].includes(e.id))await p.screenshot({path:`docs/enemy-${e.id}-battle-mobile.png`});console.log('PASS mobile battle',e.id,enemies.join(' / '));
 }
 assert.deepEqual(errors,[]);checks.push('all ten theme labels and actual enemy turns in isolated mobile Edge');fs.writeFileSync('docs/enemy-deck-browser-results.json',JSON.stringify({checks,battles,errors,widths:[320,375,430],nativePhone:'not tested; isolated touch-enabled Edge contexts'},null,2));
 console.log('PASS mobile deck editing and ten enemy battles');
}catch(err){await p.screenshot({path:'docs/enemy-deck-browser-failure.png'});console.log(await p.locator('.duel-topline,.duel-message,.notice').allTextContents());throw err;}finally{await browser.close();}
