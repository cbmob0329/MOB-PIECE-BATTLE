const battles=new WeakMap();
export function bindUnit(s,f){battles.set(f,s);return f;}
const tags=(f,by)=>[...new Set([...by.get(f.id).tags,...f.effects.filter(e=>e.key==='addTag').map(e=>e.value)])].filter(t=>!f.effects.some(e=>e.key==='removeTag'&&e.value===t));
const attr=(f,by)=>f.effects.filter(e=>e.key==='attribute').at(-1)?.value||by.get(f.id).attribute;
const matches=(f,q,by)=>q.attribute?attr(f,by).split('/').includes(q.attribute):tags(f,by).includes(q.tag);
function calculate(s,f,by){
 const side=s.players.findIndex(p=>p.field.includes(f));if(side<0)return {atk:0,def:0,attacks:0};
 const own=s.players[side].field.filter(Boolean),all=s.players.flatMap(p=>p.field.filter(Boolean)),out={atk:0,def:0,attacks:0};
 for(const source of all){if(!own.includes(source)&&!by.get(source.id).passive?.aura?.side)continue;const q=source.passiveLost?{}:by.get(source.id).passive||{},a=source.activatedAura||q.aura;if(a&&(!a.excludeSelf||source!==f)&&(!a.attributes||a.attributes.some(x=>attr(f,by).split('/').includes(x)))&&(!a.tags||a.tags.some(t=>tags(f,by).includes(t)))){out.atk+=a.atk||0;out.def+=a.def||0;}if(q.guardAura&&tags(f,by).includes(q.guardAura.tag))out.battleGuard=true;if(q.attackAura&&tags(f,by).includes(q.attackAura.tag))out.attacks=Math.max(out.attacks,q.attackAura.limit);}
 const q=f.passiveLost?{}:by.get(f.id).passive||{};for(const source of all.filter(x=>!own.includes(x))){const aura=source.passiveLost?null:by.get(source.id).passive?.enemyAura;if(aura&&!q.lowerImmune){out.atk+=aura.atk||0;out.def+=aura.def||0;}}
 if(q.graveScale){const n=s.players.reduce((n,p)=>n+p.grave.length,0);out.atk+=n*(q.graveScale.atk||0);out.def+=n*(q.graveScale.def||0);}
 if(q.handScale){const rule=q.handScale,n=s.players[side].hand.filter(id=>!rule.tag||by.get(id).tags.includes(rule.tag)).length;out.atk+=n*(rule.atk||0);out.def+=n*(rule.def||0);}
 for(const key of ['fieldScale','fieldGraveScale'])if(q[key]){const rule=q[key];let n=(rule.scope==='own'?own:all).filter(x=>matches(x,rule,by)).length;if(key==='fieldGraveScale')n+=s.players.flatMap(p=>p.grave).filter(id=>{const c=by.get(id);return c&&(rule.attribute?c.attribute.split('/').includes(rule.attribute):c.tags.includes(rule.tag));}).length;out.atk+=n*(rule.atk||0);out.def+=n*(rule.def||0);}
 return out;
}
export function bindBattle(s,by,snapshot=false){for(const f of s.players.flatMap(p=>p.field.filter(Boolean))){bindUnit(s,f);if(snapshot){const x=calculate(s,f,by);f.auraAtk=x.atk;f.auraDef=x.def;f.auraAttacks=x.attacks;}}}
export function passiveBonus(f,by){const s=battles.get(f);return s?calculate(s,f,by):{atk:f.auraAtk||0,def:f.auraDef||0,attacks:f.auraAttacks||0};}
export function combatBonus(f,target,by){const q=by.get(f.id).passive||{};return q.combatUnlessAttribute&&!attr(target,by).split('/').includes(q.combatUnlessAttribute)||q.combatUnlessTag&&!tags(target,by).includes(q.combatUnlessTag)?q.combatAtk||0:0;}
export function isStatRaisingPlan(q,element){return q.atk>0||q.def>0||q.fusionBonus||q.combatDef>0||q.graveTagBuff||!!element?.ops.some(op=>op.kind==='buff'&&(op.atk>0||op.def>0));}
export function reverseStatIncreases(s,run){const bonuses=s.players.map(p=>p.fusionBonus?{...p.fusionBonus}:null);const snapshots=new Map(s.players.flatMap(p=>p.field.filter(Boolean)).map(f=>[f,{atk:f.permanentAtk,def:f.permanentDef,effects:new Map(f.effects.map(e=>[e,e.value]))}]));run();s.players.forEach((p,i)=>{if(p.fusionBonus)for(const key of ['atk','def']){const delta=(p.fusionBonus[key]||0)-(bonuses[i]?.[key]||0);if(delta>0)p.fusionBonus[key]-=2*delta;}});for(const [f,before]of snapshots){for(const key of ['atk','def']){const prop=key==='atk'?'permanentAtk':'permanentDef',delta=f[prop]-before[key];if(delta>0)f[prop]-=2*delta;}for(const e of f.effects)if(['atk','def','defUntilAttack'].includes(e.key)){const delta=e.value-(before.effects.get(e)||0);if(delta>0)e.value-=2*delta;}}}
