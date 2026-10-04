const clamp=n=>Math.max(0,Math.min(1,n));
const canvas=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
// Derive every visible figure layer from this draw's real alpha, including holes between parts.
export function makeSummonLayers(sprite){
 const scale=Math.min(1,768/Math.max(sprite.naturalWidth,sprite.naturalHeight)),w=Math.max(1,Math.round(sprite.naturalWidth*scale)),h=Math.max(1,Math.round(sprite.naturalHeight*scale));
 const source=canvas(w,h),sc=source.getContext('2d',{willReadFrequently:true});sc.drawImage(sprite,0,0,w,h);
 const pixels=sc.getImageData(0,0,w,h).data;let left=w,top=h,right=-1,bottom=-1,clear=0;
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){if(pixels[(y*w+x)*4+3]>8){left=Math.min(left,x);top=Math.min(top,y);right=Math.max(right,x);bottom=Math.max(bottom,y);}else clear++;}
 if(right<0||clear===0)throw Error('ALPHA_SHAPE_UNAVAILABLE');
 const pad=8,cw=right-left+1+pad*2,ch=bottom-top+1+pad*2,color=canvas(cw,ch),mask=canvas(cw,ch),clay=canvas(cw,ch),edge=canvas(cw,ch),sweep=canvas(cw,ch);
 color.getContext('2d').drawImage(source,left,top,right-left+1,bottom-top+1,pad,pad,cw-pad*2,ch-pad*2);
 const m=mask.getContext('2d');m.drawImage(color,0,0);m.globalCompositeOperation='source-in';m.fillStyle='#030609';m.fillRect(0,0,cw,ch);
 const c=clay.getContext('2d');c.filter='grayscale(1) brightness(1.55) contrast(.72)';c.drawImage(color,0,0);c.filter='none';
 const e=edge.getContext('2d');for(let i=0;i<16;i++){const a=i*Math.PI/8;e.drawImage(mask,Math.cos(a)*2.3,Math.sin(a)*2.3);}e.globalCompositeOperation='destination-out';e.drawImage(mask,0,0);e.globalCompositeOperation='source-in';e.fillStyle='#ffffff';e.fillRect(0,0,cw,ch);
 return {color,mask,clay,edge,sweep,width:cw,height:ch,crop:{left,top,right,bottom,sourceWidth:w,sourceHeight:h},transparentPixels:clear};
}
export function drawSummonFigure(ctx,layers,{phase,progress,x,y,width,height,accent='#a0eaff',intensity=1,reduced=false}){
 const {mask,edge,clay,color}=layers,p=clamp(progress),draw=c=>ctx.drawImage(c,x,y,width,height);
 function glow(alpha=1){ctx.save();ctx.globalAlpha=alpha;ctx.shadowColor=accent;ctx.shadowBlur=12+intensity*9;draw(edge);draw(edge);ctx.shadowBlur=0;draw(mask);ctx.restore();}
 if(['gather','cue','outline'].includes(phase)){glow(1);ctx.save();ctx.globalAlpha=.85;ctx.shadowColor=accent;ctx.shadowBlur=12+intensity*8;draw(edge);ctx.restore();return;}
 if(phase==='assemble'){
  glow(.14);ctx.save();ctx.globalAlpha=.4;draw(edge);ctx.restore();
  const cols=6,rows=8;
  for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const index=j*cols+i,delay=((rows-1-j)*cols+i)/(cols*rows)*.48,t=clamp((p-delay)/.5),q=1-Math.pow(1-t,3);if(!q)continue;
   const tw=width/cols,th=height/rows,angle=index*2.399,offset=reduced?0:(1-q)*Math.min(width,height)*.42;
   ctx.save();ctx.translate(x+(i+.5)*tw+Math.cos(angle)*offset,y+(j+.5)*th+Math.sin(angle)*offset);if(!reduced)ctx.rotate((1-q)*(index%2?.18:-.18));ctx.globalAlpha=reduced?Math.min(1,t*2):Math.min(1,q*2);ctx.drawImage(clay,i*layers.width/cols,j*layers.height/rows,layers.width/cols,layers.height/rows,-tw/2,-th/2,tw+.25,th+.25);ctx.restore();
  }
  return;
 }
 if(phase==='ink'){
  draw(clay);if(p<=0)return;if(p>=1){draw(color);return;}const level=reduced?Math.floor(p*5)/5:p,front=y+height*(1-level);
  ctx.save();ctx.beginPath();ctx.moveTo(x-2,front);ctx.quadraticCurveTo(x+width*.25,front-height*.035,x+width*.5,front);ctx.quadraticCurveTo(x+width*.75,front+height*.035,x+width+2,front);ctx.lineTo(x+width+2,y+height+2);ctx.lineTo(x-2,y+height+2);ctx.closePath();ctx.clip();draw(color);ctx.restore();
  if(level>0&&level<1){const sweep=layers.sweep,s=sweep.getContext('2d');s.clearRect(0,0,sweep.width,sweep.height);s.globalCompositeOperation='source-over';const fy=layers.height*(1-level),band=s.createLinearGradient(0,fy-8,0,fy+8);band.addColorStop(0,'#ffffff00');band.addColorStop(.5,'#ffffffa0');band.addColorStop(1,'#ffffff00');s.fillStyle=band;s.fillRect(0,fy-8,layers.width,16);s.globalCompositeOperation='destination-in';s.drawImage(mask,0,0);s.globalCompositeOperation='source-over';draw(sweep);}
 }
}
