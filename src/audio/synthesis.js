// Original deterministic PCM synthesis. No downloads, network calls, or game state.
export const ATTRIBUTES=['火','水','雷','地','風','光','闇','無'];
export const CUES={select:'選択',confirm:'決定',back:'戻る',navigate:'画面移動',error:'エラー',deckAdd:'デッキ追加',deckRemove:'デッキ削除',deckArrange:'自動編成・整理',starter:'スターター',reward:'報酬・交換',start:'戦闘開始',draw:'ドロー',summon:'召喚',attack:'攻撃',hit:'被弾',guard:'防御・無効化',skill:'スキル',fusion:'ソウルフュージョン',defeat:'撃破',turn:'ターン開始',battle:'バトルフェイズ',end:'ターン終了',win:'勝利',lose:'敗北',move:'位置変更',gachaOpen:'ガチャ確認',gachaGather:'ガチャ集結',gachaCue:'ガチャ予兆',gachaAssemble:'ガチャ組立',gachaInk:'ガチャ彩色',gachaReveal:'ガチャ出現'};
const clamp=(n,a=0,b=1)=>Math.min(b,Math.max(a,n));
const E=(u,a,d)=>u<0?0:(1-Math.exp(-u/a))*Math.exp(-u/d);
const hash=s=>{let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;};
function random(seed){let s=seed||1;return ()=>{s^=s<<13;s^=s>>>17;s^=s<<5;return (s>>>0)/4294967296;};}
export const attributesOf=value=>{const parts=[...new Set(String(value||'無').split('/').filter(a=>ATTRIBUTES.includes(a)))];return parts.length?parts:['無'];};
const strengthOf=n=>['small','medium','large'].includes(n)?n:'medium';
export function cueSpec(cue,options={}){
 const strength=strengthOf(options.strength),level={small:0,medium:1,large:2}[strength],attribute=attributesOf(options.attribute).join('/');
 const ui=['select','confirm','back','navigate','error','deckAdd','deckRemove','deckArrange','move'].includes(cue);
 let duration=ui?({error:.23,deckArrange:.3}[cue]||.1):({draw:.22,summon:.65,hit:.26,guard:.32,defeat:.4,turn:.3,battle:.3,end:.2,start:.85,win:1.3,lose:1.05,starter:.8,reward:.65,gachaOpen:.22,gachaGather:.7,gachaCue:.6,gachaAssemble:.6,gachaInk:.55,gachaReveal:1.15}[cue]||.65);
 if(['attack','skill','fusion'].includes(cue))duration=attribute.includes('火')?[.82,1.6,3.2][level]:[.48,.78,1.25][level];
 if(cue==='fusion')duration=Math.max(duration,1.05+level*.25);
 if(Number.isFinite(options.presentationDuration))duration=clamp(options.presentationDuration,.08,3.2);
 if(Number.isFinite(options.durationLimit))duration=Math.min(duration,Math.max(.08,options.durationLimit));
 duration=Math.round(duration*1000)/1000;
 return {cue,strength,level,attribute,timeline:!!options.presentationDuration,attackType:options.attackType==='物理'?'物理':'魔法',special:!!options.special,healing:!!options.healing,duration,priority:ui?(cue==='error'?2:0):['start','win','lose','fusion','gachaReveal','starter'].includes(cue)?3:2};
}
export const cueKey=(cue,options)=>JSON.stringify(cueSpec(cue,options));
function tone(out,sr,start,duration,f0,f1,gain,type='sine',decay=.12){let phase=0;const first=Math.max(0,Math.floor(start*sr)),last=Math.min(out.length,Math.ceil((start+duration)*sr));for(let i=first;i<last;i++){const u=i/sr-start,progress=clamp(u/duration);phase+=2*Math.PI*(f0*Math.pow(Math.max(1,f1)/Math.max(1,f0),progress))/sr;let v=Math.sin(phase);if(type==='triangle')v=2/Math.PI*Math.asin(v);if(type==='bell')v+=.32*Math.sin(phase*2.76)+.12*Math.sin(phase*4.21);out[i]+=gain*E(u,.003,decay)*v;}}
function noise(out,sr,start,duration,low,high,gain,rng,attack=.004,decay=.15,flutter=0){let lp=0,hpLow=0;const a=1-Math.exp(-2*Math.PI*Math.min(high,sr*.42)/sr),b=1-Math.exp(-2*Math.PI*low/sr);for(let i=Math.max(0,Math.floor(start*sr));i<Math.min(out.length,(start+duration)*sr);i++){const u=i/sr-start;lp+=a*(rng()*2-1-lp);hpLow+=b*(lp-hpLow);out[i]+=(lp-hpLow)*gain*E(u,attack,decay)*(1+flutter*Math.sin(2*Math.PI*37*u));}}
function fire(out,sr,level,rng){
 // Timing/layering inspired by the supplied fire recipe. This is an original approximation,
 // not the inaccessible reference WAV or its sixth-order Butterworth reconstruction.
 const nominal=[.82,1.6,3.2][level],scale=out.length/sr/nominal;
 const S=(start,span,freq,gain,decay,attack)=>{
  const centers=[100,200,400,800,1600,3200,6400],states=centers.map(c=>({l:0,h:0,a:1-Math.exp(-2*Math.PI*Math.min(sr*.42,c*1.7)/sr),b:1-Math.exp(-2*Math.PI*c*.55/sr)}));
  start*=scale;span*=scale;decay*=scale;attack*=scale;
  for(let i=Math.floor(start*sr);i<out.length;i++){const u=i/sr-start,x=clamp(u/span),k=x<.4?0:1,v=k===0?x/.4:(x-.4)/.6,f=freq[k]*Math.pow(freq[k+1]/freq[k],v);let sum=0;for(let j=0;j<centers.length;j++){const q=states[j];q.l+=q.a*(rng()*2-1-q.l);q.h+=q.b*(q.l-q.h);sum+=(q.l-q.h)*.62*Math.exp(-.5*Math.pow(Math.log2(f/centers[j])/.78,2));}out[i]+=sum*gain*E(u,attack,decay)*(1+.38*Math.sin(u*2*Math.PI*38));}
 };
 const B=(start,gain,f0,f1,decay)=>{start*=scale;for(let i=Math.floor(start*sr);i<out.length;i++){const u=i/sr-start,p=2*Math.PI*(f1*u+(f0-f1)*.085*scale*(1-Math.exp(-u/(.085*scale))));out[i]+=gain*E(u,.004*scale,decay*scale)*(Math.sin(p)+.12*Math.sin(2.017*p));}};
 if(level===0){S(.006,.23,[3600,1250,420],.60,.115,.006);S(.055,.30,[1400,600,220],.30,.16,.008);B(.025,.39,210,79,.12);noise(out,sr,.045*scale,.6*scale,600,6500,.095,rng,.018*scale,.185*scale);}
 if(level===1){S(.004,.25,[550,1700,4000],.11,.12,.09);S(.178,.48,[4200,1500,250],.68,.30,.006);S(.235,.70,[1700,650,160],.40,.34,.013);B(.187,.54,147,46,.25);B(.277,.20,95,41,.24);noise(out,sr,.205*scale,1.2*scale,340,5000,.19,rng,.011*scale,.43*scale,.5);}
 if(level===2){S(0,.93,[200,750,4300],.16,.5,.13);tone(out,sr,0,.9*scale,90,280,.075,'bell',.7*scale);S(.908,.73,[5000,1200,160],.89,.46,.007);S(.971,.95,[2100,580,95],.61,.56,.015);B(.914,.73,118,34,.39);B(1.013,.30,85,31,.51);noise(out,sr,.95*scale,2.2*scale,65,520,.25,rng,.02*scale,.58*scale);noise(out,sr,.963*scale,2.2*scale,340,5800,.22,rng,.024*scale,.57*scale,.62);}
 const count=[7,15,28][level],first=[.085,.22,.99][level],last=[.47,1.18,2.61][level];for(let j=0;j<count;j++){const at=(first+(last-first)*j/count)*scale;noise(out,sr,at,.05*scale,1400+rng()*900,5000+rng()*5500,.19*(1-.8*j/count),rng,.0007,.00266+rng()*.00551);}
}
// Short, noise-excited resonances, never sustained pitched UI oscillators.
function body(out,sr,at,span,f,gain,rng){
 for(const ratio of [1,1.47,2.09]){
  const w=2*Math.PI*f*ratio/sr,r=Math.exp(-1/(sr*Math.min(.055,span*.24))),c=2*r*Math.cos(w);let y=0,z=0;
  for(let i=Math.max(0,Math.floor(at*sr));i<Math.min(out.length,(at+span)*sr);i++){
   const t=i/sr-at,x=(rng()*2-1)*Math.exp(-t/.004),v=c*y-r*r*z+x;z=y;y=v;
   out[i]+=v*Math.sin(w)*gain*.32;
  }
 }
}
function element(out,sr,attribute,s,rng){
 const d=out.length/sr,k=s.level,idx=ATTRIBUTES.indexOf(attribute);
 const fraction=s.cue==='fusion'?.60:s.cue==='skill'?.35:.50;
 const at=s.timeline?d*fraction:(s.cue==='fusion'?d*.42:d*.16),span=d-at;
 // Travel/charge remains separate from the impact, in one cancellable buffer.
 noise(out,sr,0,at,280,2300,.16,rng,Math.max(.006,at*.3),Math.max(.025,at*.7));
 if(idx===0){const burst=new Float32Array(Math.ceil(span*sr));fire(burst,sr,0,rng);for(let i=0;i<burst.length&&i+Math.floor(at*sr)<out.length;i++)out[i+Math.floor(at*sr)]+=burst[i];}
 if(idx===1){noise(out,sr,at,span,180,3300,1.25,rng,.004,span*.23);noise(out,sr,at+span*.08,span*.7,900,5700,.55,rng,.009,span*.18);for(let j=0;j<9+k*3;j++){const t=at+span*(.04+rng()*.62);noise(out,sr,t,.035,350+rng()*1500,3900,.32,rng,.001,.008);body(out,sr,t,.065,340+rng()*550,.09,rng);}}
 if(idx===2){noise(out,sr,at,span*.5,550,7600,1.35,rng,.0007,Math.min(.04,span*.12));for(let j=0;j<4+k;j++)noise(out,sr,at+j*.014,span*.25,1600,6800,.5,rng,.0005,.007);noise(out,sr,at+.012,span,65,620,.85,rng,.004,span*.26);}
 if(idx===3){noise(out,sr,at,span,65,950,1.4,rng,.003,span*.24);body(out,sr,at,span,125,.65,rng);for(let j=0;j<6+k*2;j++)noise(out,sr,at+rng()*span*.65,.055,550,2600,.55,rng,.001,.012);}
 if(idx===4){noise(out,sr,at,span,420,4100,1.05,rng,.012,span*.27,.15);noise(out,sr,at+span*.13,span*.65,200,1500,.5,rng,.015,span*.20);}
 if(idx===5){noise(out,sr,at,span,1100,5300,.68,rng,.004,span*.22);for(let j=0;j<5;j++)body(out,sr,at+j*span*.085,span*.38,780+j*187,.25,rng);}
 if(idx===6){noise(out,sr,at,span,70,1100,1.15,rng,.006,span*.29,.32);body(out,sr,at,span,155,.38,rng);noise(out,sr,at+span*.1,span*.65,500,2100,.25,rng,.02,span*.2);}
 if(idx===7){noise(out,sr,at,span,180,2600,1,rng,.002,span*.15);body(out,sr,at,span,190,.48,rng);}
 if(s.attackType==='物理'){body(out,sr,at,span,170,.42,rng);noise(out,sr,at,span*.3,250,2100,.45,rng,.001,.018);}
 if(s.cue==='fusion'){noise(out,sr,at,span,90,1800,.45,rng,.006,span*.3);body(out,sr,at,span,145,.3,rng);}
 if(s.special||s.healing)for(let j=0;j<3;j++)body(out,sr,at+span*(.16+j*.12),span*.35,600+j*210,.15,rng);
}
function common(out,sr,s,rng){
 const d=s.duration,c=s.cue,ui=s.priority===0||c==='error';
 if(ui){const back=['back','deckRemove','end'].includes(c),n=c==='deckArrange'?3:['confirm','deckAdd','error'].includes(c)?2:1;
  for(let j=0;j<n;j++){const at=j*d*.24;noise(out,sr,at,d-at,240,back?1600:2900,.65,rng,.001,.012);body(out,sr,at,d-at,(back?390:560)+(c==='error'?-230:j*85),.28,rng);}return;}
 const at=s.timeline&&c==='summon'?d*.78:s.timeline&&c==='draw'?d*.20:['summon','gachaReveal','starter'].includes(c)?d*.45:0;
 const span=d-at;
 if(at)noise(out,sr,0,at,300,2400,.28,rng,at*.2,at*.65);
 if(['hit','guard','defeat'].includes(c)){noise(out,sr,0,d,c==='guard'?800:110,c==='guard'?4200:2300,.95,rng,.001,d*.18);body(out,sr,0,d,c==='guard'?730:155,.55,rng);if(c==='defeat')for(let j=1;j<5;j++)noise(out,sr,j*d*.14,d*.25,450,2600,.4,rng,.001,.012);return;}
 const paper=['draw','move','gachaOpen','gachaInk'].includes(c),gather=['gachaGather','gachaCue'].includes(c);
 noise(out,sr,at,span,paper?750:180,paper?4200:2600,paper?.7:.65,rng,gather?.06:.003,span*(gather?.34:.2));
 body(out,sr,at,span,paper?490:c==='lose'?190:260,paper?.12:.45,rng);
 if(['win','lose','reward','starter','gachaReveal'].includes(c)){const notes=c==='lose'?[390,310,230]:[520,650,790];for(let j=0;j<notes.length;j++)body(out,sr,at+j*span*.16,span*.48,notes[j],.26,rng);}
 if(c==='gachaAssemble')for(let j=0;j<4;j++){noise(out,sr,j*d*.16,d*.2,600,3200,.5,rng,.001,.018);body(out,sr,j*d*.16,d*.25,430+j*90,.2,rng);}
}
export function synthesizeCue(cue,options={},sampleRate=48000){
 if(!CUES[cue])throw Error('Unknown sound cue: '+cue);
 const s=cueSpec(cue,options),out=new Float32Array(Math.ceil(s.duration*sampleRate)),rng=random(hash(cueKey(cue,options))),d=s.duration,sr=sampleRate;
 if(['attack','skill','fusion'].includes(cue)){const attrs=attributesOf(s.attribute);for(const a of attrs){const layer=new Float32Array(out.length);element(layer,sr,a,s,rng);for(let i=0;i<out.length;i++)out[i]+=layer[i]/Math.sqrt(attrs.length);}}
 else common(out,sr,s,rng);
 // DC removal, mild saturation, short edge fades and conservative per-cue peaks.
 let low=0,mean=0,soft=0;const hp=1-Math.exp(-2*Math.PI*27/sr);for(let i=0;i<out.length;i++){low+=hp*(out[i]-low);soft+=(1-Math.exp(-2*Math.PI*6500/sr))*(Math.tanh((out[i]-low)*1.15)-soft);out[i]=soft;mean+=out[i];}mean/=out.length;
 let peak=0;const tail=Math.min(d*.25,.18);for(let i=0;i<out.length;i++){const t=i/sr,fade=Math.sin(clamp(t/.003)*Math.PI/2)**2*Math.sin(clamp((d-t)/tail)*Math.PI/2)**2;out[i]=(out[i]-mean)*fade;peak=Math.max(peak,Math.abs(out[i]));}
 const target=s.priority===0?.13:cue==='error'?.2:10**(-[8,6.5,5.5][s.level]/20);if(peak)for(let i=0;i<out.length;i++)out[i]*=target/peak;
 return {samples:out,sampleRate,duration:d,spec:s};
}
