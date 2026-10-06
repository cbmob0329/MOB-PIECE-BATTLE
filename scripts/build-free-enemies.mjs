import {buildRankedEnemies} from './build-ranked-free-enemies.mjs';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import data from '../src/data/free-enemies.json' with {type:'json'};
import {soulFigures,soulById,validateSoulDeck} from '../src/game/soul-battle.js';
import {buildAceDeck} from '../src/game/ace-deck.js';
import {enemyThemes,enemySeedAnchors,enemyFigureAllowed} from '../src/game/free-enemy-policy.js';
const results=[];
for(const original of data.filter(e=>!e.baseThemeId)){
 const spec=enemyThemes[original.id],e={...original,themeTagIds:spec.tags||original.themeTagIds};
 const pool=soulFigures.filter(f=>enemyFigureAllowed(e,f));
 const owned=Object.fromEntries(pool.map(f=>[f.id,f.soulClass==='seed'?3:1]));
 const built=buildAceDeck({owned,soulDecks:[[],[],[],[],[]],soulDeckSlot:0},spec.bosses);
 // Retain every concrete route, but fill spare seed slots from the theme first.
 const needs={};for(const r of built.routes)for(const[id,n]of Object.entries(r.needs))needs[id]=Math.max(needs[id]||0,n);
 for(const id of enemySeedAnchors[e.id])needs[id]=Math.max(needs[id]||0,1);
 const deck=built.deck.filter(id=>soulById.get(id).soulClass!=='seed');
 for(const[id,n]of Object.entries(needs))if(soulById.get(id).soulClass==='seed')deck.push(...Array(n).fill(id));
 const seeds=pool.filter(f=>f.soulClass==='seed').sort((a,b)=>Number(b.tags.some(t=>e.themeTagIds.includes(t)))-Number(a.tags.some(t=>e.themeTagIds.includes(t)))||a.id.localeCompare(b.id));
 for(const f of seeds)while(deck.length<45&&deck.filter(id=>id===f.id).length<3)deck.push(f.id);
 deck.sort((a,b)=>['seed','middle','mob'].indexOf(soulById.get(a).soulClass)-['seed','middle','mob'].indexOf(soulById.get(b).soulClass));
 assert.ok(validateSoulDeck(deck,owned).valid,e.id+' invalid after seed refill');
 const supportIds=[...new Set(deck)].filter(id=>!soulById.get(id).tags.some(t=>e.themeTagIds.includes(t)));
 const supportSummary={grass:'草原の進化先＋地・風の補助',desert:'砂漠・遺跡の進化先＋補助',sea:'海底の全5ミドルと2MOB＋深海・水の補助',music:'ネオン・MUSICの進化先＋音楽機材の補助',castle:'魔王城の5MOB＋融合素材の補助',susu:'スス系統・共通アメ進化＋補助',keke:'ケケ系統・共通アメ進化＋補助',ame:'アメ系統のミドル・MOB＋素材の補助',hero:'主人公パーティー＋光の戦士・補助',lilith:'覚醒四姉妹・モブリリス＋魔法系の補助'}[e.id];
 results.push({...e,deck,aces:built.aces,routes:built.routes,supportIds,supportSummary});
 console.log(e.id,deck.length,'support',supportIds.length);
}
results.push(...buildRankedEnemies(results));
fs.writeFileSync('src/data/free-enemies.json',JSON.stringify(results,null,2)+'\n');
