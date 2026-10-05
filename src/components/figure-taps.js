// Keyed by figure UID, not DOM node: field rendering can replace a button between taps.
export function createFigureTaps({delay=350,now=()=>performance.now(),schedule=setTimeout,cancel=clearTimeout}={}){
 let last=null;
 const reset=()=>{if(last?.timer!==undefined)cancel(last.timer);last=null;};
 return {reset,tap(key,{single,double,immediate=false}){const time=now();if(last?.key===key&&time-last.at<=delay){reset();double();return 'double';}reset();last={key,at:time};if(immediate)single();else{const current=last;last.timer=schedule(()=>{if(last!==current)return;single();},delay);}return 'single';}};
}
