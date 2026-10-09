import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {pathToFileURL} from 'node:url';import {createRequire} from 'node:module';import {prepareTowerRewards} from '../src/game/tower-rewards.js';import {towerBanners,bannerUnlocked} from '../src/data/tower.js';import {poolFor,drawFigureRate} from '../src/data/gacha.js';import {soulById} from '../src/game/soul-battle.js';
const cleared={coins:55,diamonds:20,towerProgress:{cleared:[5]},towerCampaign:{regions:{grass:{cleared:[5]},desert:{cleared:[5]}}},towerOpponentRewards:{version:1,claimed:['grass:5:0','desert:5:0']}};
const reward=prepareTowerRewards(cleared);assert.deepEqual(reward.reward,{coins:0,diamonds:80});assert.equal(reward.next.diamonds,100);assert.equal(prepareTowerRewards(reward.next).reward,null);assert.equal(cleared.diamonds,20);
for(const b of towerBanners.filter(b=>b.requiresClear)){assert(!bannerUnlocked({},b));assert(bannerUnlocked({towerCampaign:{regions:{grass:{cleared:[5]}}}},b));const pool=poolFor(b);assert(pool.length);assert(pool.every(f=>soulById.get(f.sourceId).soulClass!=='mob'));assert(Math.abs(pool.reduce((n,f)=>n+drawFigureRate(b,f),0)-1)<1e-9);}
const {chromium}=createRequire(path.resolve(path.dirname(process.execPath),'../node_modules/package.json'))('playwright');
const browser=await chromium.launch({channel:'msedge',headless:true});
// Ephemeral context: no userDataDir, no connection to any existing browser, no inherited storage.
const context=await browser.newContext({storageState:{cookies:[],origins:[]},viewport:{width:1280,height:900}});
const out=path.join(os.tmpdir(),'mob-grass-editor-proof');fs.mkdirSync(out,{recursive:true});const editor='C:/Users/CB-Me/Downloads/MOB-PIECE-Editor-641-compact/MOB-PIECE-Editor';const errors=[];
try{const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto(pathToFileURL(editor+'/index.html').href);await p.waitForFunction(()=>!document.querySelector('main').inert);
assert.equal(await p.evaluate(()=>localStorage.getItem('mpb-figure-workshop:v1')),null);
assert.equal(await p.evaluate(()=>Workshop.getRecords().length),653);
await p.locator('#series').selectOption('ヒーローベル（制作中）');assert.equal(await p.locator('[data-edit]').count(),12);await p.locator('.card img').evaluateAll(imgs=>Promise.all(imgs.map(i=>{i.loading='eager';return i.decode();})));await p.screenshot({path:out+'/editor-12.png'});
await p.evaluate(()=>Workshop.openEditor('draft:bell-rilac-ribbon'));await p.locator('[data-path="atk"]').fill('85');await p.locator('#done').click();await p.reload();await p.waitForFunction(()=>!document.querySelector('main').inert);assert.equal(await p.evaluate(()=>Workshop.getRecords().find(r=>r.id==='draft:bell-rilac-ribbon').atk),85);assert(JSON.parse(await p.evaluate(()=>Workshop.snapshot())).changes.some(r=>r.id==='draft:bell-rilac-ribbon'));
await p.close();
for(const width of [390,1280]){const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));await p.setViewportSize({width,height:900});
await p.goto('http://127.0.0.1:5208/');await p.waitForTimeout(1500);console.log('PAGE',errors,await p.title());
// Pure screen rendering only. No profile import, saveProfile or commitProfile.
for(const [id,name]of [['tower-crossroads','ring'],['tower-lanterns','soldiers']]){
await p.evaluate(async id=>{const {gachaScreen}=await import('/src/screens/gacha.js');const {figures,byId}=await import('/src/data/catalog.js?v=7.3.0');const profile={towerProgress:{cleared:[5]},bannerId:id,diamonds:100,owned:{},reducedMotion:true};const host=document.createElement('main');host.id='fixture';host.innerHTML=gachaScreen({profile,figures,byId,art:f=>'<img src="'+f.image+'" alt="'+f.name+'">'});document.body.replaceChildren(host);const rail=host.querySelector('.gacha-carousel');rail.scrollLeft=rail.clientWidth*(id==='tower-crossroads'?3:4);},id);
await p.locator('[data-banner="'+id+'"] img').evaluateAll(imgs=>Promise.all(imgs.map(i=>i.decode())));await p.screenshot({path:out+'/'+name+'-'+width+'.png'});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));}
await p.close();}
assert.deepEqual(errors,[]);console.log('PASS master backfill idempotence, no-MOB banners/rates, editor 653/12 and isolated draft restore, responsive renders.',out);
}finally{await context.close();await browser.close();}

