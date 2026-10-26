import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
const sharp=createRequire(import.meta.url)(path.join(process.env.MPB_RUNTIME_MODULES,'sharp'));
const manifest=JSON.parse(fs.readFileSync('artifacts/mb-adventure/manifest.json','utf8'));
assert.equal(manifest.assets.length,33);
const installed=[];
for(const a of manifest.assets){const bytes=fs.readFileSync(a.path),m=await sharp(bytes).metadata();assert.equal(m.width,m.height,a.id+' square');assert(m.hasAlpha,a.id+' alpha');const stats=await sharp(bytes).stats();assert.equal(stats.channels[3].min,0,a.id+' transparency');fs.writeFileSync('piecefig/MB/'+a.id+'.png',bytes);installed.push({id:a.id,sha256:crypto.createHash('sha256').update(bytes).digest('hex'),width:m.width,height:m.height});}
fs.writeFileSync('artifacts/mb-adventure/installed.json',JSON.stringify(installed,null,2));
for(let i=0;i<manifest.assets.length;i+=12){const part=manifest.assets.slice(i,i+12),composite=[];for(const [j,a]of part.entries()){const left=j%4*260,top=Math.floor(j/4)*290;composite.push({input:await sharp(a.path).resize(250,250,{fit:'contain',background:'#dfdfcf'}).png().toBuffer(),left:left+5,top});const label=Buffer.from(`<svg width="260" height="40"><text x="130" y="27" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="21">${a.id}</text></svg>`);composite.push({input:label,left,top:top+250});}await sharp({create:{width:1040,height:Math.ceil(part.length/4)*290,channels:3,background:'#dfdfcf'}}).composite(composite).png().toFile('artifacts/mb-adventure/final-'+i+'.png');}
console.log('Installed 33 square transparent figures into piecefig/MB.');
