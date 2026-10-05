import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import {synthesizeCue,ATTRIBUTES} from '../src/audio/synthesis.js';
const ref=process.argv[2]||'HEAD';
const source=execFileSync('git',['show',ref+':src/audio/synthesis.js'],{encoding:'utf8'});
const old=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
const dir='artifacts/audio-texture';fs.mkdirSync(dir,{recursive:true});
const qa=[],rows=[];
function wav(p){const b=Buffer.alloc(44+p.samples.length*2);b.write('RIFF');b.writeUInt32LE(b.length-8,4);b.write('WAVEfmt ',8);b.writeUInt32LE(16,16);b.writeUInt16LE(1,20);b.writeUInt16LE(1,22);b.writeUInt32LE(p.sampleRate,24);b.writeUInt32LE(p.sampleRate*2,28);b.writeUInt16LE(2,32);b.writeUInt16LE(16,34);b.write('data',36);b.writeUInt32LE(b.length-44,40);p.samples.forEach((v,i)=>b.writeInt16LE(Math.round(v*32767),44+i*2));return b;}
const cases=[...ATTRIBUTES.map(attribute=>['attack',{attribute,strength:'medium',attackType:'魔法'}]),['skill',{attribute:'水'}],['fusion',{attribute:'地/雷'}],...['select','draw','summon','guard'].map(c=>[c,{}])];
for(const [cue,options]of cases){const players=[];for(const [label,fn]of [['変更前',old.synthesizeCue],['変更後',synthesizeCue]]){const p=fn(cue,options,24000);let peak=0,power=0;for(const v of p.samples){peak=Math.max(peak,Math.abs(v));power+=v*v;}qa.push({cue,options,label,duration:p.duration,peak,rms:Math.sqrt(power/p.samples.length)});players.push('<td>'+label+'<audio controls preload="none" src="data:audio/wav;base64,'+wav(p).toString('base64')+'"></audio></td>');}rows.push('<tr><th>'+cue+' '+(options.attribute||'共通')+'</th>'+players.join('')+'</tr>');}
fs.writeFileSync(dir+'/comparison.html','<!doctype html><meta charset="utf-8"><title>BATTLE 効果音比較</title><style>body{font:16px sans-serif;background:#132133;color:#eee;max-width:960px;margin:30px auto}td,th{padding:12px;border-bottom:1px solid #456}audio{display:block;width:300px}button{padding:12px}</style><h1>BATTLE 効果音比較</h1><p>各行は変更前→変更後。同じピーク制限の合成音です。実聴評価は未確認。小さい音量から比較してください。</p><button onclick="document.querySelectorAll(&quot;audio&quot;).forEach(a=>a.pause())">すべて停止</button><table>'+rows.join('')+'</table><script>document.addEventListener("play",e=>{document.querySelectorAll("audio").forEach(a=>{if(a!==e.target)a.pause()})},true)</script>');
fs.writeFileSync(dir+'/waveform-metrics.json',JSON.stringify({baseline:ref,qa},null,2));
console.log('Created '+dir+'/comparison.html (14 before/after pairs, embedded WAV)');
