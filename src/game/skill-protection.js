import {capturePresentation} from './battle-presentation.js';
const flag=(f,key)=>f.effects?.findLast(e=>e.key===key)?.value;
export function targetableBySkill(f,sourceSide,ownerSide){const value=flag(f,'skillUntargetable');return !value||value==='hostile'&&sourceSide===ownerSide;}
export function affectedBySkill(f,sourceSide,ownerSide){const value=flag(f,'skillImmune');return !value||value==='hostile'&&sourceSide===ownerSide;}

export function consumeSkillShield(s,side,targets){for(const f of targets){if(s.players[side].field.includes(f))continue;const charge=f.effects.find(e=>e.key==='shieldCharges'&&e.value>0);if(!charge)continue;charge.value--;s.log.push('スキルを無効化 · 残り '+charge.value+'回');s.events??=[];s.eventSerial=(s.eventSerial||0)+1;const event={seq:s.eventSerial,type:'guard',side:1-side,id:f.id,label:'スキル無効 · 残り '+charge.value+'回'};s.events.push(event);capturePresentation(s,event);return true;}return false;}
