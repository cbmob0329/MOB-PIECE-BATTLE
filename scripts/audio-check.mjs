import assert from 'node:assert/strict';import crypto from 'node:crypto';
import {CUES,ATTRIBUTES,synthesizeCue,attributesOf} from '../src/audio/synthesis.js';
import {createSoundSystem,battleSound} from '../src/audio/audio.js';
import catalog from '../src/data/soul-catalog.js';
const digest=x=>crypto.createHash('sha256').update(new Uint8Array(x.buffer)).digest('hex');
const variants=new Set();let rendered=0;
for(const attribute of [...new Set(catalog.figures.map(f=>f.attribute))])for(const cue of ['attack','skill','fusion'])for(const strength of ['small','medium','large']){
 const pcm=synthesizeCue(cue,{attribute,strength,attackType:'物理'});assert.equal(pcm.sampleRate,48000);assert.ok(pcm.duration>0&&pcm.duration<=3.3);let peak=0,power=0;for(const n of pcm.samples){assert.ok(Number.isFinite(n));peak=Math.max(peak,Math.abs(n));power+=n*n;}assert.ok(peak>.05&&peak<.6);assert.ok(power/pcm.samples.length>1e-6);assert.ok(Math.abs(pcm.samples[0])<1e-6&&Math.abs(pcm.samples.at(-1))<.001);const h=digest(pcm.samples);assert.ok(!variants.has(h),attribute+' '+cue+' '+strength);variants.add(h);rendered++;
}
for(const cue of Object.keys(CUES)){const a=synthesizeCue(cue),b=synthesizeCue(cue);assert.equal(digest(a.samples),digest(b.samples));assert.ok(a.samples.some(n=>Math.abs(n)>.01));}
for(const a of ATTRIBUTES){assert.notEqual(digest(synthesizeCue('attack',{attribute:a,attackType:'物理'}).samples),digest(synthesizeCue('attack',{attribute:a,attackType:'魔法'}).samples));for(const cue of ['attack','skill','fusion'])assert.ok(synthesizeCue(cue,{attribute:a,strength:'large',durationLimit:.22}).duration<=.22);}
assert.deepEqual(attributesOf('地/闇'),['地','闇']);assert.deepEqual(attributesOf('new-attribute'),['無']);
let time=1000,failStart=false;const store=new Map();const storage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)};
class Param{value=0;setTargetAtTime(v){this.value=v;}}
class Node{gain=new Param();threshold=new Param();knee=new Param();ratio=new Param();attack=new Param();release=new Param();connect(){}disconnect(){}start(){if(failStart)throw Error('audio error');}stop(){this.stopped=true;}}
class Context{state='suspended';currentTime=0;destination=new Node();resume(){this.state='running';return Promise.resolve();}suspend(){this.state='suspended';return Promise.resolve();}close(){this.state='closed';return Promise.resolve();}createGain(){return new Node();}createDynamicsCompressor(){return new Node();}createBufferSource(){return new Node();}createBuffer(){return {copyToChannel(){}};}}
const host={AudioContext:Context,document:{hidden:false}},s=createSoundSystem({host,storage,now:()=>time});s.init();assert.equal(s.play('select'),false);await s.unlock();assert.equal(s.play('select'),true);assert.equal(s.play('select'),false);time+=100;
const scope=s.beginScope('battle');assert.equal(s.play('attack',{scope,eventId:1,attribute:'火'}),true);time+=100;assert.equal(s.play('attack',{scope,eventId:1,attribute:'火'}),false);assert.equal(s.play('select'),false,'low-priority UI should be ducked');
for(let i=0;i<14;i++){time+=100;s.play('attack',{scope,eventId:i+2,attribute:ATTRIBUTES[i%8]});}assert.ok(s.debug().voices<=6);assert.equal(s.debug().maxVoices,6);
s.stopScope(scope);assert.equal(s.debug().voices,0);time+=100;s.play('skill',{scope,eventId:50});s.endScope(scope);assert.equal(s.debug().voices,0);time+=100;assert.equal(s.play('skill',{scope,eventId:51}),false);
s.setSettings({volume:.27,muted:true});assert.equal(s.play('attack'),false);assert.equal(s.debug().voices,0);const reloaded=createSoundSystem({host,storage});assert.deepEqual(reloaded.getSettings(),{volume:.27,muted:true});
s.setSettings({muted:false});await s.unlock();time+=200;s.play('win');host.document.hidden=true;s.background();assert.equal(s.debug().voices,0);assert.equal(s.play('select'),false);host.document.hidden=false;await s.unlock();assert.equal(s.debug().voices,0);time+=200;assert.equal(s.play('confirm'),true);
s.setSettings({volume:0});assert.equal(s.debug().voices,0);assert.equal(s.play('select'),false);s.setSettings({volume:.55});time+=200;failStart=true;assert.equal(s.play('guard'),false);assert.equal(s.debug().voices,0);failStart=false;time+=200;assert.equal(s.play('guard'),true);
const broken=createSoundSystem({host:{},storage:{getItem(){throw Error('denied');},setItem(){throw Error('quota');}}});broken.init();assert.equal(await broken.unlock(),false);assert.equal(broken.play('attack'),false);broken.setSettings({volume:.2});assert.equal(broken.debug().saveFailed,true);
const webkit=createSoundSystem({host:{webkitAudioContext:Context},storage});webkit.setSettings({muted:false});assert.equal(await webkit.unlock(),true);
const legacy=createSoundSystem({host,storage:{getItem:()=>null,setItem(){}}});legacy.init(false);assert.equal(legacy.getSettings().muted,true);
assert.equal(battleSound({type:'attack',seq:9,attribute:'無'},{attribute:'火',soulClass:'seed'}).options.attribute,'無');assert.equal(battleSound({type:'result',side:0}).cue,'win');assert.equal(battleSound({type:'result',side:1}).cue,'lose');
s.dispose();assert.equal(s.debug().voices,0);assert.equal(s.debug().scopes,0);
console.log(`PASS audio: ${rendered} attribute/strength/action PCM variants + ${Object.keys(CUES).length} common cues; finite peaks/fades, physical/magic, timing, locked/unsupported/storage failure, duplicate suppression, six-voice limit, mute/reload, background/recovery, stopped scopes and metadata overrides`);
