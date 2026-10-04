import {makeSummonLayers,drawSummonFigure} from './summon-paint.js';
import {sound} from '../audio/audio.js';
import messages from '../data/summon_messages.js?v=7.3.0';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clamp=x=>Math.min(1,Math.max(0,x));
const ease=x=>1-Math.pow(1-clamp(x),3);
// Visuals never mutate the already-committed draw.
export function playSummon(dialog,{cue,hero,figures=[hero],art,reduced,preview,onFinish}){
 const audioScope=sound.beginScope('gacha');
 const copy=messages.cues[cue]||messages.cues.normal,t=Object.fromEntries(Object.entries(messages).map(([k,v])=>[k,typeof v==='string'?esc(v):v]));
 const palette=({normal:['#b8e66d','#244c3d'],ssr:['#c2abff','#553597'],pickup:['#ffaf81','#ab403d'],allSSR:['#ffe476','#705011']})[cue]||['#b8e66d','#244c3d'];
 dialog.classList.add('cinema-dialog');
 dialog.innerHTML='<section class="figure-lab lab-'+cue+'" data-phase="ready" style="--lab-accent:'+palette[0]+';--lab-ink:'+palette[1]+'">'+
 '<canvas class="lab-canvas" aria-hidden="true"></canvas><header><b>'+t.brand+'<small>'+(preview?t.previewHeader:t.header)+'</small></b><button data-skip>'+t.skip+'</button></header>'+
 '<div class="lab-heading"><small>'+t.eyebrow+'</small><h2>'+t.title+'</h2></div>'+
 '<div class="lab-core" aria-hidden="true"><div class="lab-core-ring"></div><img src="'+(import.meta.env?.BASE_URL??'./')+'icon/gacha.png" alt=""><b hidden>'+t.mob+'</b><span>＋</span><span>＋</span></div><div class="lab-platform" aria-hidden="true"></div>'+
 '<div class="lab-cue"><small>'+t.cutLabel+'</small><h2>'+esc(copy[0])+'</h2><p>'+esc(copy[1])+'</p></div>'+
 (cue==='pickup'?'<div class="lab-stamp"><b>'+t.seal+'</b><span>'+t.sealLabel+'</span></div>':'')+
 '<div class="lab-progress" aria-hidden="true"><i></i><i></i><i></i><span>01 → 02 → 03</span></div>'+
 '<div class="lab-reveal" hidden></div>'+
 '<div class="lab-parade" hidden></div>'+
 '<footer><p class="scene-caption" aria-live="polite">'+t.ready+'</p><button data-release>'+t.release+'<small>'+t.releaseEnglish+'</small></button><button data-finish hidden>'+(preview?t.closePreview:t.showResult)+' →</button><small>'+(reduced?t.reduced:t.hint)+'</small></footer></section>';
 const scene=dialog.querySelector('.figure-lab'),canvas=scene.querySelector('canvas'),ctx=canvas.getContext('2d');
 const core=scene.querySelector('.lab-core img');core.onerror=()=>{core.hidden=true;core.nextElementSibling.hidden=false;};
 const sprite=new Image();const sourceUrl=new URL(hero.image,document.baseURI).href;sprite.src=sourceUrl;let layers=null;const rank=({R:1,SR:2,SSR:3,UR:4,MOB:5})[hero.rarity]||1;const intensity=1+(rank-1)*.22;scene.dataset.figureId=hero.sourceId||hero.id;scene.dataset.rarity=hero.rarity;
 const durations=reduced?{assemble:1200,ink:1300}:{assemble:2700,ink:2800};
 let disposed=false,started=false,raf=0,phase='ready',born=performance.now();const timers=[];
 const cleanup=()=>{if(disposed)return;disposed=true;sound.endScope(audioScope);cancelAnimationFrame(raf);timers.forEach(clearTimeout);sprite.onload=sprite.onerror=null;window.removeEventListener('hashchange',cleanup);dialog.removeEventListener('close',cleanup);dialog.classList.remove('cinema-dialog');};
 const finish=()=>{if(disposed)return;cleanup();onFinish();};
 function setPhase(next,label){const cueName={gather:'gachaGather',cue:'gachaCue',assemble:'gachaAssemble',ink:'gachaInk',reveal:'gachaReveal'}[next];if(cueName)sound.play(cueName,{scope:audioScope,eventId:next,strength:rank>=5||cue==='allSSR'?'large':rank>=3?'medium':'small',durationLimit:next==='ink'?durations.ink/1000:next==='assemble'?durations.assemble/1000:1.2});phase=next;born=performance.now();scene.dataset.phase=next;scene.querySelector('.scene-caption').textContent=label;const stageCopy=next==='assemble'?['02 / FORMATION','パーツを形成中']:next==='ink'?['03 / COLORING','色を重ねて完成へ']:['01 / SILHOUETTE','黒い影が光りだす'];scene.querySelector('.lab-cue small').textContent=stageCopy[0];scene.querySelector('.lab-cue h2').textContent=stageCopy[1];
  if(next==='reveal'){const reveal=scene.querySelector('.lab-reveal');reveal.innerHTML='<span>'+esc(hero.rarity)+'</span><div>'+art(hero)+'</div><small>'+esc(hero.displayNo)+'</small><h2>'+esc(hero.name)+'</h2><p>'+(preview?t.previewResult:t.result)+'</p>';reveal.hidden=false;if(cue==='allSSR'){const parade=scene.querySelector('.lab-parade');parade.innerHTML=figures.map((f,i)=>'<span style="--i:'+i+'">'+art(f)+'<b>'+esc(f.rarity)+'</b></span>').join('');parade.hidden=false;}scene.querySelector('[data-finish]').hidden=false;scene.querySelector('[data-finish]').focus({preventScroll:true});}
 }
 function paint(now){
  if(disposed||!dialog.open)return;
  const {width:w,height:h}=canvas.getBoundingClientRect(),scale=Math.min(devicePixelRatio||1,2);
  if(canvas.width!==Math.round(w*scale)||canvas.height!==Math.round(h*scale)){canvas.width=Math.round(w*scale);canvas.height=Math.round(h*scale);}
  ctx.setTransform(scale,0,0,scale,0,0);ctx.clearRect(0,0,w,h);const elapsed=(now-born)/1000,cx=w/2,cy=h*.46;
  if(!reduced)for(let i=0;i<24;i++){
   const a=i*2.399+elapsed*(phase==='gather'?1.8:.15),r=(phase==='gather'?Math.max(20,180-elapsed*90):145)+i%4*10;
   ctx.save();ctx.translate(cx+Math.cos(a)*r,cy+Math.sin(a)*r*.8);ctx.rotate(a);ctx.fillStyle=i%3?palette[0]:palette[1];ctx.globalAlpha=phase==='reveal'?.16:.6;ctx.fillRect(-3,-3,6+i%4,6+i%4);ctx.restore();
  }
  if(layers&&['gather','cue','outline','assemble','ink'].includes(phase)){
   const size=Math.min(w*.8,h*.4,340),ratio=Math.min(size/layers.width,size/layers.height),dw=layers.width*ratio,dh=layers.height*ratio;
   const progress=clamp(elapsed*1000/(durations[phase]||1600));scene.dataset.progress=progress.toFixed(3);
   drawSummonFigure(ctx,layers,{phase,progress,x:cx-dw/2,y:cy-dh/2,width:dw,height:dh,accent:palette[0],intensity,reduced});
  }
  raf=requestAnimationFrame(paint);
 }
 async function start(){if(started)return;started=true;scene.querySelector('[data-release]').hidden=true;scene.querySelector('.scene-caption').textContent='フィギュアの素材を準備中…';
  try{if(!sprite.complete||!sprite.naturalWidth)sprite.src=sourceUrl;await sprite.decode();if(!disposed)layers=makeSummonLayers(sprite);}catch{if(!disposed){sound.play('error');started=false;scene.querySelector('[data-release]').hidden=false;scene.querySelector('.scene-caption').textContent='素材を読み込めませんでした。もう一度タップするか、スキップで結果を確認できます。';}return;}
  if(disposed)return;setPhase('gather','黒いシルエットが光をまとう…');
  const timeline=reduced?[[120,'cue',copy[1]],[250,'outline','光る黒シルエット'],[1100,'assemble','輪郭にパーツが集まり、形が整う…'],[2300,'ink','塗装前の形に、色を重ねる…'],[3600,'reveal',messages.reveal]]:[[350,'cue',copy[1]],[650,'outline','光る黒シルエット'],[2300,'assemble','輪郭にパーツが集まり、形が整う…'],[5000,'ink','塗装前の形に、色を重ねる…'],[7800,'reveal',messages.reveal]];
  for(const [ms,p,label] of timeline)timers.push(setTimeout(()=>{if(!disposed)setPhase(p,label);},ms));
 }
 window.addEventListener('hashchange',cleanup);dialog.addEventListener('close',cleanup);
 scene.querySelector('[data-release]').onclick=start;scene.querySelector('[data-finish]').onclick=finish;scene.querySelector('[data-skip]').onclick=finish;scene.querySelector('[data-release]').focus({preventScroll:true});raf=requestAnimationFrame(paint);return cleanup;
}
