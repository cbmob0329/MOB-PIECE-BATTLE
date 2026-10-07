import {oct07Event} from './oct07-events.js';
import {targetableBySkill,affectedBySkill,consumeSkillShield} from './skill-protection.js';
import {storedUsage,takeStoredCard,putStoredCard,moveStoredCard,topStoredCard} from './skill-budget.js';
import {capturePresentation} from './battle-presentation.js';
// Choice construction and atomic resolution shared by player and CPU.
import {elementSkills} from '../data/element-skills.js';
const definitions=new Map(elementSkills.map(x=>[x.program,x]));
export const elementDefinition=f=>definitions.get(f.soulSkill.program);
export function elementContext(s,side,f,byId){
 const own=s.players[side],foe=s.players[1-side],info=x=>byId.get(x.id),live=p=>p.field.filter(Boolean),attr=x=>x.effects.filter(e=>e.key==='attribute').at(-1)?.value||info(x).attribute;
 const stat=(x,k)=>Math.max(0,info(x)[k]+(k==='atk'?x.permanentAtk:x.permanentDef)+x.effects.filter(e=>e.key===k||(k==='def'&&e.key==='defUntilAttack')).reduce((a,e)=>a+e.value,0));
 const effectMatches=(e,q)=>Number.isFinite(e.until)&&e.key===q.key&&Math.sign(e.value)===q.sign;
 const match=(x,q={})=>(!q.attribute||attr(x).split('/').includes(q.attribute))&&(!q.type||info(x).attackType===q.type)&&(!q.effect||x.effects.some(e=>effectMatches(e,q.effect)));
 const cardMatch=(id,q={})=>{const c=byId.get(id);return c&&(!q.class||c.soulClass===q.class)&&(!q.classes||q.classes.includes(c.soulClass))&&(!q.family||c.family===q.family)&&(!q.differentName||c.name!==info(f).name);};
 return {own,foe,info,live,attr,stat,effectMatches,match,cardMatch};
}
export function elementChoices(s,side,f,byId,selected={}){
 const d=elementDefinition(byId.get(f.id));if(!d)return [];const c=elementContext(s,side,f,byId),out=[];const chosen={...selected};
 for(const q of d.choices){let xs=[];
  if(q.zone==='ally'||q.zone==='enemy')xs=c.live(q.zone==='ally'?c.own:c.foe).filter(x=>targetableBySkill(x,side,q.zone==='ally'?side:1-side)&&c.match(x,q.filter)&&String(x.uid)!==String(chosen[q.distinct])).map(x=>({value:String(x.uid),label:c.info(x).name}));
  if(q.zone==='grave')xs=c.own.grave.map((id,i)=>({id,i})).filter(x=>c.cardMatch(x.id,q.filter)&&String(x.i)!==String(chosen[q.distinct])).map(x=>({value:String(x.i),label:byId.get(x.id).name}));
  if(q.zone==='top')xs=c.own.deck.slice(0,3).map((id,i)=>({value:String(i),label:byId.get(id).name}));
  if(q.zone==='mode')xs=q.values.map(value=>({value,label:({atk:'ATK',def:'DEF',guard:'構え',advance:'進撃'})[value]}));
  if(q.zone==='effect'){const t=[...c.live(c.own),...c.live(c.foe)].find(x=>String(x.uid)===String(chosen[q.target]));xs=(t?.effects||[]).map((e,i)=>({e,i})).filter(x=>c.effectMatches(x.e,q.filter)).map(x=>({value:String(x.i),label:`${x.e.key.toUpperCase()} ${x.e.value>0?'+':''}${x.e.value} / 終了ターン${x.e.until}`}));}
  if(q.optional)xs.push({value:'-1',label:'選択しない'});
  const key='el_'+q.key;out.push({key,label:({ally:'味方',enemy:'相手',grave:'墓地',top:'山札の上',effect:'解除する効果',mode:'効果'})[q.zone]+'を選択',choices:xs});
  chosen[q.key]=selected[key]??selected[q.key]??xs[0]?.value;
 }
 return out;
}
export function validateElement(s,side,f,byId,o){
 const d=elementDefinition(byId.get(f.id));if(!d)return;
 for(const q of elementChoices(s,side,f,byId,o))if(!q.choices.some(x=>x.value===String(o[q.key])))throw Error(q.label+'を選んでください');
 const c=elementContext(s,side,f,byId);
 if(d.ops.some(x=>x.to==='allies')&&!c.live(c.own).length)throw Error('場の味方が必要です');
 if(d.ops.some(x=>x.to==='magicAllies')&&!c.live(c.own).some(x=>c.info(x).attackType==='魔法'))throw Error('魔法タイプの味方が必要です');
 if(d.ops.some(x=>x.to==='enemies')&&!c.live(c.foe).length)throw Error('場の相手が必要です');
 if(d.ops.some(x=>x.kind==='draw'&&(!x.condition?.attributes||x.condition.attributes.every(a=>c.live(c.own).some(t=>c.attr(t).split('/').includes(a)))))&&!c.own.deck.length)throw Error('シードデッキが空です');
}
export function applyElement(s,side,f,byId,o){
 const d=elementDefinition(byId.get(f.id));if(!d)return false;
 // Validate against the current response-resolved state before touching any effects.
 try{validateElement(s,side,f,byId,o);}catch{s.log.push('対象が失われたためスキル効果は不発');return true;}
 const work=s,c=elementContext(work,side,f,byId),p=c.own,next=work.turn+(work.active===side?1:0),sel=k=>Number(o['el_'+k]);
 const rawTargets=k=>k==='allies'?c.live(p):k==='magicAllies'?c.live(p).filter(x=>c.info(x).attackType==='魔法'):k==='enemies'?c.live(c.foe):[...c.live(p),...c.live(c.foe)].filter(x=>x.uid===sel(k));
 const targets=k=>rawTargets(k).filter(t=>affectedBySkill(t,side,p.field.includes(t)?side:1-side));
 if(consumeSkillShield(s,side,d.ops.flatMap(op=>op.kind==='splitDef'?[...targets('e'),...targets('e2')]:targets(op.to))))return true;
 const condition=(q,t)=>!q||Object.entries(q).every(([k,v])=>({allyAttribute:()=>c.live(p).some(x=>c.attr(x).split('/').includes(v)),allyType:()=>c.live(p).some(x=>c.info(x).attackType===v),attributes:()=>v.every(a=>c.live(p).some(x=>c.attr(x).split('/').includes(a))),targetAttribute:()=>!!t&&c.attr(t).split('/').includes(v),targetFamily:()=>!!t&&c.info(t).family===v,targetClass:()=>!!t&&c.info(t).soulClass===v,behind:()=>p.life<c.foe.life,defAbove:()=>c.stat(t,'def')>c.stat(t,'atk'),atkAbove:()=>c.stat(t,'atk')>c.stat(t,'def'),positiveAtk:()=>t.effects.some(e=>c.effectMatches(e,{key:'atk',sign:1})),graveSeeds:()=>Number(o.el_graveSeeds??p.grave.filter(id=>byId.get(id).soulClass==='seed').length)>=v})[k]?.());
 const put=(t,key,value,until)=>{if(!value||value<0&&['atk','def'].includes(key)&&byId.get(t.id).passive?.lowerImmune)return;if((key==='atk'||key==='def')&&value<0)value=-Math.min(-value,c.stat(t,key));if(!value)return;
  // Repeated copies of the same skill do not stack the same stat/flag on one target.
  const old=t.effects.find(e=>e.source===d.id&&e.key===key);if(old){if(typeof value==='number'&&Math.sign(value)!==Math.sign(old.value)){old.value=value;old.until=until;}else{old.value=typeof value==='number'?Math.abs(value)>Math.abs(old.value)?value:old.value:value;old.until=Math.max(old.until,until);}}else t.effects.push({key,value,until,source:d.id,sourceSide:side});};
 const lower=d.ops.some(x=>x.kind==='splitDef'||x.kind==='buff'&&(x.atk<0||x.def<0)&&['e','e2','enemies'].includes(x.to));if(lower){const i=c.foe.teamEffects.findIndex(e=>e.key==='debuffShield'&&e.starts<=work.turn&&e.until>=work.turn&&(e.value==='both'||d.ops.some(x=>x.def<0||x.kind==='splitDef')));if(i>=0){c.foe.teamEffects.splice(i,1);work.log.push('低下スキルを無効化');Object.assign(s,work);return true;}}
 for(const op of d.ops){
  if(['heal','draw','barrier','recover','top','splitDef'].includes(op.kind)&&!condition(op.condition))continue;
  if(op.kind==='heal')p.life=Math.min(400,p.life+op.n);
  if(op.kind==='draw')for(let i=0;i<op.n&&p.deck.length;i++){const id=moveStoredCard(p,'deck',0,'hand');work.events??=[];work.eventSerial=(work.eventSerial||0)+1;const event={seq:work.eventSerial,type:'draw',side,id};oct07Event(work,event,byId);work.events.push(event);capturePresentation(work,event);}
  if(op.kind==='barrier')p.teamEffects.push({key:'damageReduce',value:op.n,starts:work.turn+1,until:next});
  if(op.kind==='top'){topStoredCard(p,sel(op.choice));}
  if(op.kind==='recover'){const indices=op.from.map(sel).filter(i=>i>=0),cards=indices.map(i=>({id:p.grave[i],usage:storedUsage(p,'grave',i)}));for(const i of [...indices].sort((a,b)=>b-a))takeStoredCard(p,'grave',i);for(const {id,usage} of cards){const i=p.destroyed.indexOf(id);if(i>=0)p.destroyed.splice(i,1);putStoredCard(p,op.destination,id,usage);}}
  if(op.kind==='splitDef'){for(const key of ['e','e2'])for(const t of targets(key))put(t,'def',sel('e2')>=0?-20:-35,work.turn);}
  for(const t of targets(op.to)){
   if(!condition(op.condition,t))continue;
   if(op.kind==='buff'){const b=condition(op.bonus?.condition,t)?op.bonus||{}:{};put(t,'atk',(op.atk||0)+(b.atk||0),op.next?next:work.turn);put(t,'def',(op.def||0)+(b.def||0),op.next?next:work.turn);for(const [k,v]of Object.entries(op.flags||{}))put(t,k,v,op.flagsCurrent?work.turn:op.next?next:work.turn);}
   if(op.kind==='cleanse')t.effects=t.effects.filter(e=>!(['atk','def','defUntilAttack'].includes(e.key)&&e.value<0));
   if(op.kind==='remove')t.effects.splice(sel(op.choice),1);
   if(op.kind==='balance'){const high=c.stat(t,'atk')>c.stat(t,'def');put(t,high?'def':'atk',20,high?next:work.turn);}
   if(op.kind==='statChoice'){const k=o.el_mode;put(t,k,20,work.turn);if(c.info(t).family==='RUN')put(t,k==='atk'?'def':'atk',5,work.turn);}
   if(op.kind==='stance'){const guard=o.el_mode==='guard';put(t,'atk',guard?-15:35,guard?next:work.turn);put(t,'def',guard?45:-15,guard?next:work.turn);}
  }
 }
 Object.assign(s,work);return true;
}
