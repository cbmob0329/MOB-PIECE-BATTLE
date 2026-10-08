import {publicAsset} from '../data/public-assets.js';
import {battleMusicTracks} from './battle-music.js';
// A single streaming element guarantees no overlapping music, including rapid route changes.
export function createMusicPlayer({host=globalThis,context,settings,notice=()=>{}}){
 let audio=null,node=null,gain=null,scope=null,id=null,serial=0,playing=false,switching=false,fadeTimer=null,switchTimer=null,fadeInterval=null,fade=null,playSerial=0,activePlay=null;
 const clearFade=()=>{clearTimeout(fadeTimer);clearInterval(fadeInterval);fadeTimer=fadeInterval=null;};
 const level=()=>{if(!fade)return gain?.gain.value??audio?.volume??0;const t=Math.min(1,Math.max(0,(Date.now()-fade.at)/(fade.seconds*1000||1)));return fade.from+(fade.to-fade.from)*t;};
 const allowed=()=>!!id&&!switching&&!host.document?.hidden&&!settings().muted&&settings().volume>0&&context()?.state==='running';
 const target=()=>settings().volume*(battleMusicTracks[id]?.gain||.22);
 function ramp(to,seconds=.18,done){const from=level();clearFade();fade={from,to,at:Date.now(),seconds};if(gain){const t=context().currentTime;gain.gain.cancelScheduledValues(t);gain.gain.setValueAtTime(from,t);gain.gain.linearRampToValueAtTime(to,t+seconds);}else if(audio){audio.volume=from;fadeInterval=setInterval(()=>{if(audio)audio.volume=Math.max(0,Math.min(1,level()));},16);}fadeTimer=setTimeout(()=>{clearFade();if(gain)gain.gain.value=to;else if(audio)audio.volume=to;fade=null;done?.();},seconds*1000);}
 function bridge(){const c=context();if(!audio||gain||!c?.createMediaElementSource)return;try{node=c.createMediaElementSource(audio);gain=c.createGain();gain.gain.value=0;node.connect(gain);gain.connect(c.destination);audio.volume=1;fade=null;}catch{/* Browser without a media bridge uses element volume. */}}
 function ensure(){if(audio)return true;if(!host.Audio)return false;audio=new host.Audio();audio.preload='auto';audio.loop=true;audio.volume=0;audio.onwaiting=()=>{if(id)notice(true,false);};audio.oncanplay=()=>{if(id)notice(false,false);};audio.onerror=()=>{if(id)notice(false,true);};return true;}
 async function resume(){if(!allowed()||!ensure())return false;bridge();if(playing&&!audio.paused)return true;if(activePlay)return activePlay;const ticket=++playSerial;activePlay=(async()=>{try{await audio.play();if(ticket!==playSerial||!allowed()){if(ticket===playSerial)audio.pause();return false;}playing=true;ramp(target(),.24);return true;}catch{return false;}finally{if(ticket===playSerial)activePlay=null;}})();return activePlay;}
 function pause(){playSerial++;activePlay=null;clearFade();fade=null;if(audio)audio.pause();if(gain){const t=context().currentTime;gain.gain.cancelScheduledValues(t);gain.gain.setValueAtTime(0,t);}else if(audio)audio.volume=0;playing=false;}
 function start(nextScope,nextId='normal'){
  if(!battleMusicTracks[nextId]||!ensure())return false;
  if(scope===nextScope&&id===nextId){void resume();return true;}
  clearTimeout(switchTimer);const token=++serial;scope=nextScope;id=nextId;switching=true;
  const replace=()=>{if(token!==serial)return;pause();audio.src=new URL(publicAsset(battleMusicTracks[nextId].file),host.document?.baseURI||host.location?.href).href;audio.loop=true;switching=false;notice(true,false);void resume();};
  if(playing&&!audio.paused&&!host.document?.hidden){ramp(0,.16);switchTimer=setTimeout(replace,160);}else replace();return true;
 }
 function stop({immediate=false}={}){serial++;clearTimeout(switchTimer);id=scope=null;switching=false;notice(false,false);if(immediate||!playing||host.document?.hidden)pause();else ramp(0,.16,pause);}
 function update(){if(!allowed()){pause();return;}if(playing&&!audio.paused)ramp(target(),.08);else void resume();}
 function retry(){if(!id||!audio)return false;pause();notice(true,false);audio.load();void resume();return true;}
 function dispose(){stop({immediate:true});try{node?.disconnect();gain?.disconnect();}catch{}if(audio){audio.onwaiting=audio.oncanplay=audio.onerror=null;audio.removeAttribute('src');audio.load();}audio=node=gain=null;}
 return {start,stop,pause,resume,update,retry,dispose,getScope:()=>scope,debug:()=>({music:!!id,musicPlaying:!!id&&playing&&!audio?.paused,musicTrack:id,musicScope:scope,musicTime:audio?.currentTime||0,musicDuration:audio?.duration||0,musicLoop:audio?.loop===true,musicGain:level(),musicBridge:!!gain,musicSwitching:switching})};
}
