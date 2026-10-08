import {availableFusionLinks,fusionRefKey} from '../game/fusion-links.js';

const n=value=>Math.round(value*10)/10;
const intersect=(a,b)=>({left:Math.max(a.left,b.left),top:Math.max(a.top,b.top),right:Math.min(a.right,b.right),bottom:Math.min(a.bottom,b.bottom)});

function visibleAnchor(card,hostRect){
 if(!card)return null;
 const image=card.querySelector('.duel-figure>img')||card.querySelector(':scope>img');
 if(!image)return null;
 const rect=image.getBoundingClientRect(),hand=card.closest('.duel-hand');
 let visible=intersect(rect,hostRect);
 if(hand)visible=intersect(visible,hand.getBoundingClientRect());
 const width=visible.right-visible.left,height=visible.bottom-visible.top;
 if(width<=0||height<=0||width*height<rect.width*rect.height*.35)return null;
 return {x:n((visible.left+visible.right)/2-hostRect.left),y:n((visible.top+visible.bottom)/2-hostRect.top),zone:hand?'hand':'field'};
}

// Small stable teeth with a travelling highlight, rather than a flashing bolt.
function energyPath(points,seed,offset=0){
 const out=[];
 for(let segment=0;segment<points.length-1;segment++){
  const a=points[segment],b=points[segment+1],dx=b.x-a.x,dy=b.y-a.y,length=Math.hypot(dx,dy),steps=Math.max(2,Math.ceil(length/14));
  for(let i=segment?1:0;i<=steps;i++){
   const t=i/steps,jitter=i===0||i===steps?0:Math.sin((i+seed+segment*3)*2.39)*2.2;
   out.push({x:n(a.x+dx*t+(length?-dy/length:0)*(jitter+offset)),y:n(a.y+dy*t+(length?dx/length:0)*(jitter+offset))});
  }
 }
 return out.map((p,i)=>(i?'L':'M')+p.x+' '+p.y).join(' ');
}

export function createFusionEnergyLinks(host,{side=0,reducedMotion=()=>false}={}){
 const win=host.ownerDocument.defaultView;
 let links=[],focus=null,frame=0,destroyed=false,svg=null,geometry='',observer;
 const schedule=()=>{if(!destroyed&&!frame)frame=win.requestAnimationFrame(draw);};
 function clear(){svg?.remove();svg=null;geometry='';}
 function draw(){
  frame=0;if(destroyed||!host.isConnected||!links.length){clear();return;}
  const bounds=host.getBoundingClientRect();
  const located=links.map(link=>({...link,anchors:link.refs.map(ref=>visibleAnchor(host.querySelector(typeof ref==='number'?`[data-piece="${ref}"][data-side="${side}"]`:`[data-hand="${ref.handIndex}"]`),bounds))})).filter(link=>link.anchors.every(Boolean));
  if(!located.length){clear();return;}
  const next=JSON.stringify([bounds.width,bounds.height,located,focus,reducedMotion()]);
  if(next===geometry&&svg?.isConnected)return;
  geometry=next;
  if(!svg?.isConnected){svg=host.ownerDocument.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('fusion-energy-layer');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');host.append(svg);}
  svg.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);svg.classList.toggle('motion-reduced',reducedMotion());
  const density=Math.max(.22,.7/Math.sqrt(located.length));
  svg.innerHTML=`<g>${located.map((link,index)=>{
   const [a,b]=link.anchors;
   const points=[a,b];
   const highlighted=focus&&link.refs.some(ref=>fusionRefKey(ref)===focus),opacity=focus?(highlighted?.85:.13):density;
   return `<g data-fusion-link="${link.key}" opacity="${opacity}">${link.kinds.map((kind,k)=>{const d=energyPath(points,index,link.kinds.length===2?(k?1.6:-1.6):0);return `<g class="fusion-energy ${kind}" data-fusion-kind="${kind}"><path class="energy-glow" d="${d}"/><path class="energy-thread" d="${d}"/><path class="energy-current" d="${d}"/>${[a,b].map(p=>`<circle cx="${p.x}" cy="${p.y}" r="2.1"/>`).join('')}</g>`;}).join('')}</g>`;
  }).join('')}</g>`;
 }
 function update(state,{enabled=true,selected=null}={}){
  links=enabled?availableFusionLinks(state,side):[];focus=selected===null?null:fusionRefKey(selected);geometry='';
  observer?.disconnect();if(links.length){observer?.observe(host);const hand=host.querySelector('.duel-hand');if(hand)observer?.observe(hand);for(const el of host.querySelectorAll('[data-piece],[data-hand]'))observer?.observe(el);}
  if(!links.length)clear();else schedule();
 }
 if(win.ResizeObserver)observer=new win.ResizeObserver(schedule);
 host.addEventListener('scroll',schedule,true);host.addEventListener('load',schedule,true);host.addEventListener('transitionend',schedule,true);win.addEventListener('resize',schedule);win.visualViewport?.addEventListener('resize',schedule);win.visualViewport?.addEventListener('scroll',schedule);
 return {update,refresh:schedule,destroy(){destroyed=true;observer?.disconnect();if(frame)win.cancelAnimationFrame(frame);frame=0;clear();host.removeEventListener('scroll',schedule,true);host.removeEventListener('load',schedule,true);host.removeEventListener('transitionend',schedule,true);win.removeEventListener('resize',schedule);win.visualViewport?.removeEventListener('resize',schedule);win.visualViewport?.removeEventListener('scroll',schedule);}};
}
