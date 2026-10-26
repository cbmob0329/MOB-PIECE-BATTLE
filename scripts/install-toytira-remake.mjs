import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
const sharp=createRequire(import.meta.url)(process.env.MPB_RUNTIME_MODULES+'/sharp');
const root=path.resolve('新フィギュア/お餅一家トイティラ'),out='artifacts/toytira-remake';
const manifest=JSON.parse(fs.readFileSync(out+'/manifest.json','utf8'));
if(manifest.assets.length!==20)throw Error('Expected twenty selected remakes');
for(const a of manifest.assets){const dest=path.resolve(root,a.name);if(path.dirname(dest)!==root||!fs.existsSync(dest))throw Error('Unknown target '+a.name);const m=await sharp(a.path).metadata();if(m.width!==m.height||!m.hasAlpha)throw Error('Expected square alpha '+a.name);}
for(const a of manifest.assets){fs.copyFileSync(a.path,path.join(root,a.name));a.sha256=crypto.createHash('sha256').update(fs.readFileSync(a.path)).digest('hex');}
fs.writeFileSync(out+'/manifest.json',JSON.stringify(manifest,null,2)+'\n');
const files=fs.readdirSync(root).filter(f=>f.endsWith('.png'));
for(let offset=0;offset<files.length;offset+=12){const list=files.slice(offset,offset+12),parts=[];for(const [i,f]of list.entries()){const x=i%4*260,y=Math.floor(i/4)*280;parts.push({input:await sharp(path.join(root,f)).resize(250,245,{fit:'contain',background:'#ece8da'}).png().toBuffer(),left:x,top:y});parts.push({input:Buffer.from(`<svg width="260" height="35"><text x="5" y="20" font-size="13">${f}</text></svg>`),left:x,top:y+245});}await sharp({create:{width:1040,height:Math.ceil(list.length/4)*280,channels:4,background:'#ece8da'}}).composite(parts).png().toFile(out+'/after-'+offset+'.png');}
for(const name of files.filter(f=>f.startsWith('mochi_seed'))){if(!fs.readFileSync(path.join(root,name)).equals(fs.readFileSync(out+'/originals/'+name)))throw Error('Mochi changed: '+name);}
fs.writeFileSync(out+'/比較一覧.html',`<!doctype html><html lang="ja"><meta charset="utf-8"><title>お餅一家トイティラ リメイク比較</title><style>body{font:16px system-ui;background:#eae5d8;color:#282c30;margin:24px}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(380px,1fr));gap:20px}article{background:#fff9eb;border-radius:16px;padding:14px}section{display:flex}figure{width:50%;margin:0}img{width:100%;height:260px;object-fit:contain}figcaption{text-align:center}h2{font-size:16px}</style><h1>お餅一家トイティラ</h1><p>20体をリメイク。白いお餅4体は維持。元画像はバックアップ済みです。</p><main>${manifest.assets.map(a=>`<article><h2>${a.name}</h2><section><figure><img src="originals/${a.name}"><figcaption>変更前</figcaption></figure><figure><img src="../../新フィギュア/お餅一家トイティラ/${a.name}"><figcaption>リメイク</figcaption></figure></section></article>`).join('')}</main>`);
console.log('Installed 20 square transparent remakes, retained 4 mochi originals, created comparison gallery.');
