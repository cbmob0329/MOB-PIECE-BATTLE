import catalog from '../data/soul-catalog.js';
export const soulFigures=catalog.figures;
export const soulById=new Map(soulFigures.map(f=>[f.id,f]));
export const classNames={seed:'シードソウル',middle:'ミドルソウル',mob:'MOBソウル'};
export const quotas={seed:30,middle:10,mob:5};
export const recipes=catalog.recipes;
export function validateSoulDeck(ids,owned=null){
 const errors=[],counts={seed:0,middle:0,mob:0},used={};
 for(const id of ids){const f=soulById.get(id);if(!f){errors.push('未対応のフィギュアです');continue;}counts[f.soulClass]++;used[id]=(used[id]||0)+1;if(owned&&used[id]>(owned[id]||0))errors.push(f.name+'の所持数が不足しています');}
 for(const k of Object.keys(quotas))if(counts[k]>quotas[k])errors.push(classNames[k]+'は'+quotas[k]+'体までです');
 return {counts,count:ids.length,errors:[...new Set(errors)],valid:errors.length===0&&Object.keys(quotas).every(k=>counts[k]===quotas[k])};
}
export function ensureSoulDecks(profile){if(!Array.isArray(profile.soulDecks))profile.soulDecks=Array.from({length:5},()=>[]);profile.soulDeckSlot=Math.max(0,Math.min(4,profile.soulDeckSlot||0));return profile.soulDecks[profile.soulDeckSlot];}
export function setSoulDeck(profile,deck){ensureSoulDecks(profile);profile.soulDecks[profile.soulDeckSlot]=[...deck];}
export function autoSoulDeck(owned){
 const result=[];
 for(const [k,count]of Object.entries(quotas)){
  const candidates=soulFigures.filter(f=>f.soulClass===k).sort((a,b)=>(b.atk+b.def)-(a.atk+a.def)||a.id.localeCompare(b.id));
  // Round-robin copies gives usable variety without imposing a new duplicate cap.
  let total=0;for(let copy=0;total<count;copy++){let added=false;for(const f of candidates){if((owned[f.id]||0)>copy&&total<count){result.push(f.id);total++;added=true;}}if(!added)throw Error(classNames[k]+'が'+(count-total)+'体不足しています');}
 }
 // Put a playable fusion pair first; no shuffle or hidden draw randomness.
 const seeds=result.filter(id=>soulById.get(id).soulClass==='seed');
 const reserves=result.filter(id=>soulById.get(id).soulClass!=='seed');
 const ordered=[];
 for(let round=0;round<2;round++){
  let pair=null;
  for(const r of recipes.filter(r=>r.fromClass==='seed'&&reserves.includes(r.target))){
   for(let i=0;i<seeds.length&&!pair;i++)for(let j=i+1;j<seeds.length;j++)if((matches(soulById.get(seeds[i]),r.materials[0])&&matches(soulById.get(seeds[j]),r.materials[1]))||(matches(soulById.get(seeds[j]),r.materials[0])&&matches(soulById.get(seeds[i]),r.materials[1]))){pair=[i,j];break;}
   if(pair)break;
  }
  if(!pair)break;const [i,j]=pair;ordered.push(seeds[i],seeds[j]);seeds.splice(j,1);seeds.splice(i,1);
 }
 return [...ordered,...seeds,...reserves];
}
const fail=message=>{throw Error(message);};
function log(s,text){s.log.push(text);s.log=s.log.slice(-100);}
function main(s,side){if(s.winner!==null)fail('対戦は終了しています');if(s.phase!=='main')fail('メインフェイズでのみ行えます');if(s.active!==side)fail('自分のターンではありません');}
function piece(s,side,uid){const p=s.players[side].field.find(p=>p?.uid===uid);if(!p)fail('フィールドのフィギュアを選んでください');return p;}
const instance=(s,id)=>({uid:++s.serial,id,attacks:0,skillTurn:-1,atkMod:0,defMod:0,extra:0,evade:0,counter:0,revive:0,sweep:0});
export const stats=p=>({atk:Math.max(0,soulById.get(p.id).atk+p.atkMod),def:Math.max(0,soulById.get(p.id).def+p.defMod)});
export function startTurn(s){
 s.phase='draw';s.turn++;
 for(const p of s.players){p.skillUsed=false;for(const f of p.field.filter(Boolean)){Object.assign(f,{atkMod:0,defMod:0,extra:0,evade:0,counter:0,revive:0,sweep:0,attacks:0});}}
 const p=s.players[s.active];while(p.hand.length<5){if(!p.deck.length){s.winner=1-s.active;s.reason='山札切れ';s.phase='finished';log(s,p.name+'：手札補充時に山札切れ');return;}p.hand.push(p.deck.shift());}
 s.phase='main';log(s,`TURN ${s.turn} · ${p.name}のメインフェイズ`);
}
export function createSoulBattle(decks,names=['PLAYER','CPU']){
 for(const d of decks)if(!validateSoulDeck(d).valid)fail('45体（30 / 10 / 5）のデッキが必要です');
 const s={version:1,active:0,turn:0,phase:'draw',winner:null,reason:'',serial:0,log:[],players:decks.map((d,i)=>({name:names[i],life:400,original:[...d],deck:d.filter(id=>soulById.get(id).soulClass==='seed'),reserve:d.filter(id=>soulById.get(id).soulClass!=='seed'),hand:[],used:[],field:[null,null,null],grave:[],skillUsed:false}))};startTurn(s);return s;
}
export function summon(s,side,handIndex,slot){main(s,side);const p=s.players[side],id=p.hand[handIndex];if(!id||soulById.get(id).soulClass!=='seed')fail('シードソウルを選んでください');if(!Number.isInteger(slot)||slot<0||slot>2||p.field[slot])fail('空き枠が必要です');p.hand.splice(handIndex,1);p.used.push(id);p.field[slot]=instance(s,id);log(s,soulById.get(id).name+'を召喚');}
const matches=(f,m)=>m.id?f.id===m.id:m.tag?f.tags.includes(m.tag):f.attribute===m.attribute;
export function fusionOptions(s,side,uids){
 if(s.winner!==null||s.phase!=='main'||s.active!==side||uids.length!==2||uids[0]===uids[1])return [];
 const pair=uids.map(id=>s.players[side].field.find(p=>p?.uid===id));if(pair.some(p=>!p||p.skillTurn===s.turn))return [];
 const f=pair.map(p=>soulById.get(p.id));
 return recipes.filter(r=>s.players[side].reserve.includes(r.target)&&f.every(g=>g.soulClass===r.fromClass)&&((matches(f[0],r.materials[0])&&matches(f[1],r.materials[1]))||(matches(f[1],r.materials[0])&&matches(f[0],r.materials[1]))));
}
export function fuse(s,side,uids,recipeId){main(s,side);const r=fusionOptions(s,side,uids).find(r=>r.id===recipeId);if(!r)fail('この素材ではフュージョンできません（使用済みスキル・レシピ・専用領域を確認）');const p=s.players[side],slots=uids.map(uid=>p.field.findIndex(x=>x?.uid===uid));for(const slot of slots){p.grave.push(p.field[slot].id);p.field[slot]=null;}p.reserve.splice(p.reserve.indexOf(r.target),1);p.used.push(r.target);p.field[slots[0]]=instance(s,r.target);log(s,'SOUL FUSION · '+soulById.get(r.target).name);}
export function canSkill(s,side,uid){const p=s.players[side],f=p.field.find(f=>f?.uid===uid);return s.winner===null&&s.phase==='main'&&!p.skillUsed&&!!f&&(s.active===side||soulById.get(f.id).soulSkill.timing==='either-main');}
export function useSkill(s,side,uid,targetUid=null){
 if(!canSkill(s,side,uid))fail('スキルは各プレイヤー1ターン合計1回、対応するメインフェイズのみです');
 const p=s.players[side],caster=piece(s,side,uid),spec=soulById.get(caster.id).soulSkill,enemy=s.players[1-side];
 let target=null;if(spec.effects.some(e=>e.target==='enemy')){target=enemy.field.find(f=>f?.uid===targetUid);if(!target)fail('相手フィギュアを1体選んでください');}
 if(spec.effects.some(e=>e.target==='enemies')&&!enemy.field.some(Boolean))fail('相手フィギュアがいません');
 p.skillUsed=true;caster.skillTurn=s.turn;
 for(const e of spec.effects){
  const targets=e.target==='self'?[caster]:e.target==='allies'?p.field.filter(Boolean):e.target==='enemy'?[target]:e.target==='enemies'?enemy.field.filter(Boolean):[];
  if(e.type==='heal')p.life=Math.min(400,p.life+e.value);
  for(const t of targets){if(e.type==='boost')t.atkMod+=e.value;if(e.type==='guard')t.defMod+=e.value;if(e.type==='weaken')t.atkMod-=e.value;if(e.type==='break')t.defMod-=e.value;if(e.type==='cleanse'){t.atkMod=Math.max(0,t.atkMod);t.defMod=Math.max(0,t.defMod);}if(e.type==='extraAttack')t.extra+=e.value;if(['evade','counter','revive','sweep'].includes(e.type))t[e.type]=e.value;}
 }
 log(s,soulById.get(caster.id).name+'：'+spec.name);
}
export function beginBattle(s,side){main(s,side);s.phase='battle';log(s,s.players[side].name+'のバトルフェイズ');}
function combat(s,side,a,d,bonus=0,isCounter=false){
 const enemy=s.players[1-side],counter=d.counter;d.counter=0;
 if(d.evade){d.evade--;log(s,soulById.get(d.id).name+'が回避');}
 else{const damage=Math.max(0,stats(a).atk+bonus-stats(d).def);if(damage>0){enemy.life=Math.max(0,enemy.life-damage);if(d.revive){d.revive=0;log(s,soulById.get(d.id).name+'が復帰');}else{enemy.field[enemy.field.findIndex(f=>f?.uid===d.uid)]=null;enemy.grave.push(d.id);}log(s,`${soulById.get(a.id).name} → ${soulById.get(d.id).name} · 差分 ${damage} ダメージ`);}else log(s,soulById.get(d.id).name+'が防御 · ダメージ0');}
 if(enemy.life===0){s.winner=side;s.reason='ライフ0';s.phase='finished';return;}
 if(counter&&!isCounter&&enemy.field.some(f=>f?.uid===d.uid))combat(s,1-side,d,a,counter,true);
}
export function attack(s,side,uid,targetUid){
 if(s.winner!==null||s.phase!=='battle'||s.active!==side)fail('自分のバトルフェイズでのみ攻撃できます');
 const a=piece(s,side,uid),d=piece(s,1-side,targetUid);if(a.attacks>=1+a.extra)fail('このフィギュアは攻撃済みです');
 a.attacks++;const targets=a.sweep?s.players[1-side].field.filter(Boolean):[d];a.sweep=0;
 for(const t of targets){if(s.winner!==null||!s.players[side].field.some(f=>f?.uid===a.uid))break;combat(s,side,a,t);}
}
export function endTurn(s,side){if(s.winner!==null||s.active!==side||s.phase!=='battle')fail('バトルフェイズ終了時のみターンを終了できます');s.phase='end';s.active=1-side;startTurn(s);}
export function cpuMain(s){
 main(s,1);const p=s.players[1];let actions=0;
 while(actions++<20){while(p.hand.length&&p.field.includes(null))summon(s,1,0,p.field.indexOf(null));let best=null;
  for(const a of p.field.filter(Boolean))for(const b of p.field.filter(Boolean)){if(a.uid>=b.uid)continue;for(const r of fusionOptions(s,1,[a.uid,b.uid])){const f=soulById.get(r.target),score=f.atk+f.def;if(!best||score>best.score)best={r,uids:[a.uid,b.uid],score};}}
  if(!best)break;fuse(s,1,best.uids,best.r.id);
 }
 const available=p.field.filter(f=>f&&canSkill(s,1,f.uid)).sort((a,b)=>stats(b).atk-stats(a).atk);
 for(const f of available){try{useSkill(s,1,f.uid,s.players[0].field.filter(Boolean).sort((a,b)=>stats(b).atk-stats(a).atk)[0]?.uid);break;}catch{/* No legal target. */}}
}
export function cpuAttack(s){const p=s.players[1],a=p.field.filter(f=>f&&f.attacks<1+f.extra).sort((a,b)=>stats(b).atk-stats(a).atk)[0],d=s.players[0].field.filter(Boolean).sort((a,b)=>stats(a).def-stats(b).def)[0];if(!a||!d){endTurn(s,1);return;}attack(s,1,a.uid,d.uid);}
