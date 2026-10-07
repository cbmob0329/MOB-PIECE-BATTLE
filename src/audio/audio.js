import {sampleFiles,sampleNumber,battleMusic} from './user-samples.js';
import {CUES,cueSpec,cueKey,synthesizeCue} from './synthesis.js';
const KEY='mob-piece-battle:audio:v1';
export function createSoundSystem({host=globalThis,storage,now=()=>Date.now()}={}){
 let context=null,master=null,limiter=null,initialized=false,unlocked=false,saveFailed=false,scopeSerial=0,voiceSerial=0,hushUntil=0,lastUi=-Infinity;
 let settings={volume:.55,muted:false};const voices=new Map(),cache=new Map(),scopes=new Set(),recent=new Map(),seen=new Set(),history=[];
 const samples=new Map(),loading=new Map(),settledSamples=new Set(),failedSamples=new Set();let music=null,musicScope=null,musicSerial=0;
 const stats={samplePlayed:0,sampleErrors:0,played:0,suppressed:0,errors:0,maxVoices:0};
 const store=()=>storage===undefined?host.localStorage:storage;
 const init=(legacySound)=>{if(initialized)return;initialized=true;try{const raw=JSON.parse(store()?.getItem(KEY)||'null');if(raw&&raw.version===1){settings={volume:typeof raw.volume==='number'&&Number.isFinite(raw.volume)?Math.max(0,Math.min(1,raw.volume)):.55,muted:raw.muted===true};}else if(legacySound===false)settings.muted=true;}catch{saveFailed=true;}};
 function stopVoice(v){if(!v)return;voices.delete(v.id);try{v.source.onended=null;v.source.stop();}catch{}try{v.source.disconnect();}catch{}try{v.gain.disconnect();}catch{}}
 function stopMusic(){musicSerial++;try{music?.pause();}catch{}music=null;musicScope=null;}
 function stopAll(){stopMusic();for(const v of [...voices.values()])stopVoice(v);}
 function stopScope(scope){for(const v of [...voices.values()])if(v.scope===scope)stopVoice(v);}
 function endScope(scope){if(musicScope===scope)stopMusic();stopScope(scope);scopes.delete(scope);for(const key of seen)if(key.startsWith(scope+'|'))seen.delete(key);}
 function beginScope(label){const scope=label+':'+(++scopeSerial);scopes.add(scope);return scope;}
 function setSettings(patch){init();if(typeof patch.muted==='boolean')settings.muted=patch.muted;if(typeof patch.volume==='number'&&Number.isFinite(patch.volume))settings.volume=Math.max(0,Math.min(1,patch.volume));if(settings.muted||!settings.volume){for(const v of [...voices.values()])stopVoice(v);music?.pause();}if(music){music.volume=settings.muted?0:settings.volume*.22;if(!settings.muted&&settings.volume)void resumeMusic();}try{master?.gain.setTargetAtTime(settings.muted?0:settings.volume*.62,context.currentTime,.015);}catch{}try{store()?.setItem(KEY,JSON.stringify({version:1,...settings}));saveFailed=false;}catch{saveFailed=true;}return {...settings};}
 function loadingNotice(){if(host.dispatchEvent&&host.CustomEvent)host.dispatchEvent(new host.CustomEvent('mpb:audio-loading',{detail:{done:settledSamples.size,total:Object.keys(sampleFiles).length,failed:failedSamples.size}}));}
 async function preload({retry=false}={}){if(!context?.decodeAudioData||!host.fetch)return;if(retry)for(const id of failedSamples){loading.delete(id);settledSamples.delete(id);}if(retry)failedSamples.clear();loadingNotice();await Promise.all(Object.entries(sampleFiles).map(async([id,url])=>{if(samples.has(Number(id)))return;if(!loading.has(id))loading.set(id,(async()=>{try{const response=await host.fetch(new URL(url,host.document?.baseURI||host.location?.href),host.AbortSignal?.timeout?{signal:host.AbortSignal.timeout(15000)}:{});if(!response.ok)throw Error('sample fetch');const buffer=await context.decodeAudioData(await response.arrayBuffer());samples.set(Number(id),buffer);}catch{stats.sampleErrors++;failedSamples.add(id);}finally{settledSamples.add(id);loadingNotice();}})());await loading.get(id);}));}
 async function resumeMusic(){if(!music||settings.muted||!settings.volume||host.document?.hidden||context?.state!=='running')return false;const token=musicSerial,track=music;try{await track.play();if(token!==musicSerial)track.pause();return token===musicSerial;}catch{return false;}}
 function startMusic(scope){if(!scopes.has(scope)||!host.Audio)return false;if(music&&musicScope===scope)return true;stopMusic();musicScope=scope;music=new host.Audio(new URL(battleMusic,host.document?.baseURI||host.location?.href).href);music.loop=true;music.preload='auto';music.volume=settings.volume*.22;void resumeMusic();return true;}
 async function unlock(){init();if(host.document?.hidden||settings.muted)return false;try{if(!context||context.state==='closed'){const Context=host.AudioContext||host.webkitAudioContext;if(!Context)return false;context=new Context();master=context.createGain();master.gain.value=settings.volume*.62;limiter=context.createDynamicsCompressor();limiter.threshold.value=-12;limiter.knee.value=8;limiter.ratio.value=12;limiter.attack.value=.003;limiter.release.value=.12;master.connect(limiter);limiter.connect(context.destination);cache.clear();}if(context.state!=='running')await context.resume();unlocked=context.state==='running';if(unlocked){void preload();void resumeMusic();}return unlocked;}catch{stats.errors++;return false;}}
 function play(cue,options={}){let pendingVoice=null;
  init();try{
   if(!CUES[cue]||settings.muted||settings.volume===0||host.document?.hidden||!context||context.state!=='running')return false;
   const scope=options.scope||'ui';if(scope!=='ui'&&!scopes.has(scope))return false;
   const spec=cueSpec(cue,options),time=now(),dedup=options.eventId===undefined?null:scope+'|'+options.eventId,key=cueKey(cue,options),cooldownKey=scope+'|'+cue+'|'+spec.attribute;
   if(dedup&&seen.has(dedup)||time-(recent.get(cooldownKey)??-Infinity)<(spec.priority===0?75:35)||spec.priority===0&&(time<hushUntil||time-lastUi<65)){stats.suppressed++;return false;}
   if(spec.priority>=2){hushUntil=time+160;for(const v of [...voices.values()])if(v.priority===0)stopVoice(v);}else lastUi=time;
   if(voices.size>=6){const lowest=[...voices.values()].sort((a,b)=>a.priority-b.priority||a.id-b.id)[0];if(lowest.priority>spec.priority){stats.suppressed++;return false;}stopVoice(lowest);}
   const sampleId=sampleNumber(cue,options),sample=samples.get(sampleId);let buffer=sample||cache.get(key);if(!buffer){const pcm=synthesizeCue(cue,options);buffer=context.createBuffer(1,pcm.samples.length,pcm.sampleRate);buffer.copyToChannel(pcm.samples,0);cache.set(key,buffer);if(cache.size>40)cache.delete(cache.keys().next().value);}else{cache.delete(key);cache.set(key,buffer);}
   // Synthesis is synchronous; re-check current context time before scheduling.
   const source=context.createBufferSource(),gain=context.createGain(),id=++voiceSerial;source.buffer=buffer;gain.gain.value=sample?.45:1;source.connect(gain);gain.connect(master);
   const voice={id,source,gain,scope,priority:spec.priority};pendingVoice=voice;voices.set(id,voice);source.onended=()=>{voices.delete(id);try{source.disconnect();gain.disconnect();}catch{}};
   const start=context.currentTime+.002;source.start(start);if(sample){stats.samplePlayed++;const limit=Number.isFinite(options.durationLimit)?Math.max(.08,options.durationLimit):Math.min(buffer.duration,cue==='navigate'?1.2:3.2),end=start+Math.min(buffer.duration,limit);if(gain.gain.setValueAtTime&&gain.gain.linearRampToValueAtTime){gain.gain.setValueAtTime(.45,Math.max(start,end-.035));gain.gain.linearRampToValueAtTime(0,end);}source.stop(end);}const playedAt=now();recent.set(cooldownKey,playedAt);if(spec.priority>=2)hushUntil=playedAt+160;if(recent.size>160)recent.delete(recent.keys().next().value);if(dedup){seen.add(dedup);if(seen.size>512)seen.delete(seen.values().next().value);}
   stats.played++;stats.maxVoices=Math.max(stats.maxVoices,voices.size);history.push({cue,attribute:spec.attribute,strength:spec.strength,attackType:spec.attackType,scope,eventId:options.eventId,sample:sample?sampleId:null});if(history.length>100)history.shift();return true;
  }catch{if(pendingVoice)stopVoice(pendingVoice);stats.errors++;return false;}
 }
 function background(){for(const v of [...voices.values()])stopVoice(v);music?.pause();try{context?.suspend()?.catch(()=>{});}catch{}}
 function foreground(){if(unlocked&&!settings.muted)void unlock();}
 function dispose(){stopAll();scopes.clear();seen.clear();cache.clear();try{context?.close()?.catch(()=>{});}catch{}context=null;master=null;limiter=null;}
 return {init,unlock,preload,startMusic,stopMusic,play,stopAll,stopScope,beginScope,endScope,setSettings,background,foreground,dispose,getSettings:()=>{init();return {...settings};},debug:()=>({...stats,voices:voices.size,cache:cache.size,scopes:scopes.size,state:context?.state||'locked',saveFailed,supported:!!(host.AudioContext||host.webkitAudioContext),samples:samples.size,music:!!music,musicPlaying:!!music&&!music.paused,history:[...history]})};
}
export const sound=createSoundSystem();
export function battleSound(event,figure){
 const cue=event.type==='result'?(event.side===0?'win':'lose'):event.type;if(!CUES[cue])return null;
 return {cue,options:{attribute:event.attribute||figure?.attribute||'無',attackType:event.attackType||figure?.attackType,strength:event.special||figure?.soulClass==='mob'?'large':figure?.soulClass==='seed'?'small':'medium',special:event.special,healing:cue==='skill'&&figure?.soulSkill?.effect?.includes('回復'),eventId:event.seq}};
}
