// A carousel's lazy images may not start until they enter its clipped viewport.
export function screenImageVisible(image){
 const target=image.hidden&&image.nextElementSibling?.classList.contains('missing')?image.nextElementSibling:image;
 let {left,right,top,bottom}=target.getBoundingClientRect();
 left=Math.max(0,left);right=Math.min(innerWidth,right);top=Math.max(0,top);bottom=Math.min(innerHeight,bottom);
 for(let parent=target.parentElement;parent;parent=parent.parentElement){
  const style=getComputedStyle(parent);if(style.display==='none'||style.visibility==='hidden')return false;
  const bounds=parent.getBoundingClientRect();
  if(/hidden|clip|auto|scroll/.test(style.overflowX)){left=Math.max(left,bounds.left);right=Math.min(right,bounds.right);}
  if(/hidden|clip|auto|scroll/.test(style.overflowY)){top=Math.max(top,bounds.top);bottom=Math.min(bottom,bounds.bottom);}
 }
 return right-left>1&&bottom-top>1;
}
export function watchScreenImages(root,loader){
 if(!loader)return ()=>{};
 const images=[...root.querySelectorAll('main img')].filter(screenImageVisible);
 let stopped=false,showTimer;const cleanups=[];
 const rows=images.map(image=>({image,state:image.complete?(image.naturalWidth?'loaded':'error'):'pending',slow:false,cleanup:()=>{}}));
 loader.hidden=true;
 if(rows.every(row=>row.state==='loaded'))return ()=>{};
 loader.innerHTML='<div><b>素材を読み込んでいます</b><progress aria-label="画像の読み込み"></progress><small role="status"></small><details data-load-details hidden><summary>読み込めなかった画像</summary><ul></ul></details><div class="loading-actions"><button data-load-retry hidden>再試行</button><button data-load-cancel>画面を見る</button><button data-load-back>戻る</button></div></div>';
 const progress=loader.querySelector('progress'),label=loader.querySelector('small'),title=loader.querySelector('b'),retry=loader.querySelector('[data-load-retry]'),details=loader.querySelector('[data-load-details]');
 const update=()=>{
  if(stopped)return;
  const failed=rows.filter(r=>r.state==='error'),pending=rows.filter(r=>r.state==='pending'),slow=pending.some(r=>r.slow),done=rows.length-pending.length;
  progress.max=rows.length;progress.value=done;
  label.textContent=done+' / '+rows.length+' 件確認'+(failed.length?' · '+failed.length+'件を読み込めませんでした':slow?' · 通信に時間がかかっています':'');
  title.textContent=failed.length?'一部の画像を読み込めませんでした':slow?'画像の到着を待っています':'素材を読み込んでいます';
  retry.hidden=!failed.length;details.hidden=!failed.length;details.querySelector('ul').replaceChildren(...failed.map(({image})=>{const li=document.createElement('li');li.textContent=(image.alt||'画像')+' — '+image.src;return li;}));
  if(!pending.length){clearTimeout(showTimer);loader.hidden=!failed.length;}
 };
 const watch=row=>{
  row.cleanup();row.state='pending';row.slow=false;
  const finish=state=>{if(stopped||row.state!=='pending')return;row.state=state;row.cleanup();
   if(state==='loaded'){row.image.hidden=false;const next=row.image.nextElementSibling;if(next?.classList.contains('missing'))next.hidden=true;}
   else{console.warn('[MPB image failed]',row.image.src);window.dispatchEvent(new CustomEvent('mpb:image-error',{detail:{url:row.image.src,alt:row.image.alt,reason:'image-error',route:location.hash}}));}
   update();
  };
  const loaded=()=>finish('loaded'),error=()=>finish('error');
  // Slow is not failed: retain listeners so a late successful decode can recover.
  const timer=setTimeout(()=>{row.slow=true;update();},15000);
  row.image.addEventListener('load',loaded);row.image.addEventListener('error',error);
  row.cleanup=()=>{clearTimeout(timer);row.image.removeEventListener('load',loaded);row.image.removeEventListener('error',error);};cleanups.push(()=>row.cleanup());
 };
 const cancel=()=>{stopped=true;clearTimeout(showTimer);cleanups.forEach(fn=>fn());loader.hidden=true;};
 loader.querySelector('[data-load-cancel]').onclick=cancel;
 loader.querySelector('[data-load-back]').onclick=()=>{cancel();location.hash='home';};
 retry.onclick=()=>{for(const row of rows.filter(r=>r.state==='error')){watch(row);row.image.hidden=false;const source=row.image.src;row.image.removeAttribute('src');row.image.src=source;}update();};
 for(const row of rows.filter(r=>r.state==='pending'))watch(row);
 showTimer=setTimeout(()=>{if(!stopped&&rows.some(r=>r.state==='pending'))loader.hidden=false;},140);update();return cancel;
}
