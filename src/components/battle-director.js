import {sound,battleSound} from '../audio/audio.js';
import {soulById} from '../game/soul-battle.js';
import {cubeMarkup} from './battle-art.js';
import {esc} from '../screens/soulLibrary.js';
const image=id=>{const f=soulById.get(id);return f?`<img src="${esc(f.image)}" alt="${esc(f.name)}">`:'';};
export function groupPresentationEvents(events){const out=[];for(const e of events){const last=out.at(-1);if(e.type==='draw'&&last?.type==='draw'&&last.side===e.side){last.count++;last.ids.push(e.id);last.presentationState=e.presentationState;}else out.push({...e,...(e.type==='draw'?{count:1,ids:[e.id]}:{})});}return out;}
export function createBattleDirector(root,{profile,style}){
 let stopped=0,animation=null;const soundScope=sound.beginScope('battle');
 const reduced=()=>profile.reducedMotion||matchMedia('(prefers-reduced-motion: reduce)').matches;
 const particles=()=>`<div class="fx-particles" aria-hidden="true">${Array.from({length:18},(_,i)=>`<i style="--i:${i};--angle:${i*20}deg"></i>`).join('')}</div>`;
 const forming=(id,special=false)=>`<div class="fx-form ${special?'special':''}"><i class="fx-platform"></i><i class="fx-ring"></i><i class="fx-ring second"></i><div class="fx-hologram" style="--figure:url('${new URL(soulById.get(id)?.image||'',document.baseURI).href}')"></div><div class="fx-body">${image(id)}</div><i class="fx-scan"></i>${particles()}</div>`;

 function presentation(e){
  const f=soulById.get(e.id),name=f?.name||'';
  if(e.type==='start')return {time:1100,kind:'start',title:'BATTLE START',sub:'小さなフィギュア、大きなバトル。',body:`<div class="fx-vs"><div>${image(e.playerId)}<b>PLAYER</b><small>LIFE 400</small></div><strong>VS</strong><div>${image(e.enemyId)}<b>${esc(e.enemyName)}</b><small>LIFE 400</small></div></div>`};
  if(e.type==='turn')return {time:380,kind:'phase',title:e.side===0?'YOUR TURN':'ENEMY TURN',sub:'TURN '+e.turn,body:''};
  if(e.type==='draw')return {time:550,kind:'draw',title:'ドロー！',sub:(e.side===0?'手札に':'相手が')+e.count+'体',body:`<div class="fx-draw">${cubeMarkup(e.side===0?style.cube.id:'shadow')}<div class="fx-draw-cards">${e.ids.slice(0,5).map((id,i)=>`<span style="--i:${i}">${e.side===0?image(id):'✦'}</span>`).join('')}</div></div>`};
  if(e.type==='summon')return {time:850,kind:'summon',title:'召喚！',sub:name,body:forming(e.id)+`<div class="fx-stats">ATK <b>${e.atk}</b><span>DEF <b>${e.def}</b></span></div>`};
  if(e.type==='fusion')return {time:e.special?3200:1450,kind:'fusion'+(e.special?' mob':''),title:e.special?'MOB SOUL FUSION':e.resonance?'SOUL RESONANCE':'SOUL FUSION',sub:name,body:`${e.special?'<div class="fx-mob-charge"><i></i><i></i><b>SOUL CHARGE</b></div>':''}<div class="fx-materials">${e.materialIds.map((id,i)=>`<div style="--i:${i}">${image(id)}</div>`).join('')}</div>${forming(e.id,e.special)}<div class="fx-stats">ATK <b>${e.atk}</b><span>DEF <b>${e.def}</b></span></div>${e.special?'<div class="fx-bonus">SPECIAL PAIR · ATK +20 / DEF +20</div>':e.resonance?'<div class="fx-bonus">共鳴 · ATK +25 / DEF +25（上限）</div>':''}`};
  if(e.type==='skill')return {time:1800,kind:'skill',title:esc(e.name),sub:e.fromHand?'HAND SKILL → 墓地':'SOUL SKILL',body:`<div class="fx-skill-portrait">${image(e.id)}${particles()}</div><p class="fx-skill-effect">${esc(e.effect||'')}</p>`};
  if(e.type==='attack')return {time:650,kind:'attack '+(e.attackType==='魔法'?'magic':'physical'),title:`ATK ${e.atk} <small>VS</small> DEF ${e.def}`,sub:'アタック！',body:`<div class="fx-combat"><div class="fx-attacker">${image(e.id)}</div><i class="fx-projectile"></i><i class="fx-impact"></i><div class="fx-defender">${image(e.targetId)}</div></div>`};
  if(e.type==='hit')return {time:460,kind:'hit',title:e.damage?'HIT!':'DAMAGE ZERO',sub:e.damage?'相手LIFEへ！':'ライフダメージなし',body:`<div class="fx-damage">${e.damage?'−'+e.damage:'0'}</div><i class="fx-energy" style="--direction:${e.side===0?'120px':'-120px'}"></i>${particles()}`};
  if(e.type==='defeat')return {time:480,kind:'defeat',title:'撃破！',sub:name,body:`<div class="fx-break">${image(e.id)}${particles()}</div>`};
  if(e.type==='guard')return {time:420,kind:'guard',title:esc(e.label||'ガード！'),sub:'DEFENSE',body:`<div class="fx-shield">${image(e.id)}<i></i></div>`};
  if(e.type==='battle')return {time:380,kind:'phase',title:'BATTLE PHASE',sub:e.side===0?'攻撃するフィギュアを選ぼう！':'相手のバトルフェイズ',body:''};
  if(e.type==='end')return {time:300,kind:'phase',title:'TURN END',sub:'次のソウルへ、バトンを。',body:''};
  if(e.type==='result')return {time:1100,kind:'result '+(e.side===0?'win':'lose'),title:e.side===0?'VICTORY!':'DEFEAT',sub:esc(e.reason),body:`<div class="fx-result-emblem">${e.side===0?'♛':'◆'}</div>${particles()}`};
  return null;
 }
 const skip=()=>{sound.stopScope(soundScope);stopped++;animation?.finish();root.querySelector('.duel-fx')?.replaceChildren();};
 const onLeave=()=>{skip();sound.endScope(soundScope);};window.addEventListener('hashchange',onLeave);
 async function run(events,{onEvent=()=>{}}={}){const token=++stopped;let host=root.querySelector('.duel-fx');if(!host)return;root.classList.add('fx-running');
  try{for(const event of groupPresentationEvents(events)){if(token!==stopped)break;if(event.type!=='fusion')onEvent(event);host=root.querySelector('.duel-fx');if(!host)break;const p=presentation(event);if(!p)continue;
   const duration=event.type==='skill'?Math.max(1200,Math.round(p.time*(style.fast?.7:1))):reduced()?220:Math.round(p.time*1.3*(style.fast?.5:1)*(event.side===1?.85:1));
   host.innerHTML=`<div class="battle-cue cue-${p.kind}" data-cue="${event.type}" style="--cue-time:${duration}ms"><div class="fx-rays"></div>${p.body}<div class="fx-title"><strong>${p.title}</strong><span>${esc(p.sub)}</span></div></div><button class="fx-skip" data-fx-skip>演出をスキップ ›</button>`;
   host.classList.toggle('motion-reduced',!!reduced());if(event.type==='result')sound.stopMusic();const audio=battleSound(event,soulById.get(event.id));if(audio)sound.play(audio.cue,{...audio.options,scope:soundScope,presentationDuration:duration/1000,durationLimit:duration/1000});const el=host.querySelector('.battle-cue');
   animation=el.animate([{opacity:0},{opacity:1,offset:.12},{opacity:1,offset:.88},{opacity:0}],{duration,fill:'both'});
   await animation.finished.catch(()=>{});if(event.type==='fusion'&&token===stopped)onEvent(event);
  }}finally{host.replaceChildren();animation=null;root.classList.remove('fx-running');}
 }
 return {run,skip,destroy(){skip();sound.endScope(soundScope);window.removeEventListener('hashchange',onLeave);}};
}
