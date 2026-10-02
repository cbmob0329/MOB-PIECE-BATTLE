import messages from '../data/summon_messages.js?v=7.3.0';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clamp=x=>Math.min(1,Math.max(0,x));
const ease=x=>1-Math.pow(1-clamp(x),3);
// Visuals never mutate the already-committed draw.
export function playSummon(dialog,{cue,hero,figures=[hero],art,reduced,preview,onFinish}){
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
 '<div class="lab-reveal"><span>'+esc(hero.rarity)+'</span><div>'+art(hero)+'</div><small>'+esc(hero.displayNo)+'</small><h2>'+esc(hero.name)+'</h2><p>'+(preview?t.previewResult:t.result)+'</p></div>'+
 (cue==='allSSR'?'<div class="lab-parade">'+figures.map((f,i)=>'<span style="--i:'+i+'">'+art(f)+'<b>'+esc(f.rarity)+'</b></span>').join('')+'</div>':'')+
 '<footer><p class="scene-caption" aria-live="polite">'+t.ready+'</p><button data-release>'+t.release+'<small>'+t.releaseEnglish+'</small></button><button data-finish hidden>'+(preview?t.closePreview:t.showResult)+' →</button><small>'+(reduced?t.reduced:t.hint)+'</small></footer></section>';
 const scene=dialog.querySelector('.figure-lab'),canvas=scene.querySelector('canvas'),ctx=canvas.getContext('2d');
 const core=scene.querySelector('.lab-core img');core.onerror=()=>{core.hidden=true;core.nextElementSibling.hidden=false;};
 const sprite=new Image();sprite.src=new URL(hero.image,document.baseURI).href;
 let disposed=false,started=false,raf=0,phase='ready',born=performance.now();const timers=[];
 const cleanup=()=>{if(disposed)return;disposed=true;cancelAnimationFrame(raf);timers.forEach(clearTimeout);sprite.onload=sprite.onerror=null;dialog.classList.remove('cinema-dialog');};
 const finish=()=>{if(disposed)return;cleanup();onFinish();};
 function setPhase(next,label){phase=next;born=performance.now();scene.dataset.phase=next;scene.querySelector('.scene-caption').textContent=label;
  if(next==='reveal'){scene.querySelector('[data-finish]').hidden=false;scene.querySelector('[data-finish]').focus({preventScroll:true});}
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
  if(['outline','assemble','ink'].includes(phase)&&sprite.complete&&sprite.naturalWidth){
   const size=Math.min(w*.77,h*.4,320),ratio=Math.min(size/sprite.naturalWidth,size/sprite.naturalHeight),dw=sprite.naturalWidth*ratio,dh=sprite.naturalHeight*ratio,x=cx-dw/2,y=cy-dh/2;
   if(phase==='outline'){
    ctx.save();ctx.filter='brightness(0)';ctx.drawImage(sprite,x,y,dw,dh);ctx.restore();
    ctx.strokeStyle=palette[1];ctx.lineWidth=2;ctx.setLineDash([5,7]);ctx.strokeRect(x-12,y-12,dw+24,dh+24);ctx.setLineDash([]);
   }else if(phase==='assemble'){
    const cols=8,rows=10;
    for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){
     const n=j*cols+i,delay=((rows-1-j)*cols+i)/80*.65,p=reduced?1:ease((elapsed/2.1-delay)/.35),a=n*2.399;
     if(p<=0)continue;const tw=dw/cols,th=dh/rows,tx=x+(i+.5)*tw,ty=y+(j+.5)*th;
     ctx.save();ctx.translate(tx+Math.cos(a)*(1-p)*w*.65,ty+Math.sin(a)*(1-p)*h*.5);ctx.rotate((1-p)*(n%2?2:-2));ctx.globalAlpha=.18*Math.min(1,p*2);ctx.filter='brightness(0)';ctx.drawImage(sprite,i*sprite.naturalWidth/cols,j*sprite.naturalHeight/rows,sprite.naturalWidth/cols,sprite.naturalHeight/rows,-tw/2,-th/2,tw,th);ctx.restore();
    }
   }else{
    const p=reduced?1:clamp(elapsed/1.6);ctx.save();ctx.filter='brightness(0)';ctx.globalAlpha=.18;ctx.drawImage(sprite,x,y,dw,dh);ctx.restore();
    ctx.save();ctx.beginPath();ctx.rect(x-8,y+dh*(1-p),dw+16,dh*p+8);ctx.clip();ctx.drawImage(sprite,x,y,dw,dh);ctx.restore();
    ctx.strokeStyle=palette[1];ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(x-10,y+dh*(1-p));ctx.lineTo(x+dw+10,y+dh*(1-p));ctx.stroke();
    if(cue==='ssr'||cue==='allSSR'){ctx.strokeStyle=palette[0];ctx.lineWidth=3;ctx.strokeRect(x-18,y-18,dw+36,dh+36);}
   }
  }
  raf=requestAnimationFrame(paint);
 }
 function start(){if(started)return;started=true;scene.querySelector('[data-release]').hidden=true;setPhase('gather',messages.gather);
  const timeline=reduced?[[200,'cue',copy[1]],[700,'outline',messages.flight],[1200,'assemble',messages.assembly],[1700,'ink',messages.ink],[2200,'reveal',messages.reveal]]:[[1050,'cue',copy[1]],[2500,'outline',messages.flight],[3400,'assemble',messages.assembly],[5700,'ink',messages.ink],[7600,'reveal',messages.reveal]];
  for(const [ms,p,label] of timeline)timers.push(setTimeout(()=>{if(!disposed)setPhase(p,label);},ms));
 }
 scene.querySelector('[data-release]').onclick=start;scene.querySelector('[data-finish]').onclick=finish;scene.querySelector('[data-skip]').onclick=finish;scene.querySelector('[data-release]').focus({preventScroll:true});raf=requestAnimationFrame(paint);return cleanup;
}
