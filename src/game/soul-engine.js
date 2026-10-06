import {bindUnit,bindBattle,passiveBonus,combatBonus,isStatRaisingPlan,reverseStatIncreases} from './oct06-passives.js';
import {cpuActionAllowed,recordCpuAction} from './free-enemy-ai.js';
import {skillUseLimits,usedSkills,usageRecord,storedUsage,rememberUsage,takeStoredCard,putStoredCard,moveStoredCard} from './skill-budget.js';
import {capturePresentation} from './battle-presentation.js';
import {matchesMaterial,recipeStageMatches,recipePairMatches} from './fusion-rules.js';
import {soulFigures,soulById,recipes,validateSoulDeck} from './soul-battle.js';
import programs from './soul-skill-programs.js';
import {elementChoices,validateElement,applyElement,elementDefinition} from './element-skill-runtime.js';
import {handPlan,handSkillDescription} from './hand-skill-plan.js';
export {handSkillDescription};
import {soulOverrides} from '../data/soul-overrides.js';
const fail=m=>{throw Error(m);};
const log=(s,t)=>{s.log.push(t);s.log=s.log.slice(-100);};
// Presentation events observe the rules; they never decide a battle outcome.
const emit=(s,type,data={})=>{bindBattle(s,soulById,true);s.events??=[];s.eventSerial=(s.eventSerial||0)+1;const event={seq:s.eventSerial,type,...data};s.events.push(event);capturePresentation(s,event);s.events=s.events.slice(-180);};
const info=p=>soulById.get(p.id);
export const skillPlan=p=>{const plan=info(p).soulSkill.runtimePlan||soulOverrides[p.id]?.plan||programs[info(p).soulSkill.program];return p.handOrigin?handPlan(plan,info(p).soulSkill.timing):plan;};
const sharesAttribute=(a,b)=>a.split('/').some(x=>b.split('/').includes(x));
const live=(s,side)=>s.players[side].field.filter(Boolean).map(f=>bindUnit(s,f));
const piece=(s,side,uid)=>live(s,side).find(p=>p.uid===uid)||fail('フィールドのフィギュアを選んでください');
const effect=(p,key,value,until)=>p.effects.push({key,value,until});
const values=(p,key)=>p.effects.filter(e=>e.key===key).map(e=>e.value);
const value=(p,key)=>values(p,key).at(-1);
const has=(p,key)=>!!value(p,key);
const sum=(p,key)=>values(p,key).reduce((a,b)=>a+b,0);
const clear=(p,key)=>{p.effects=p.effects.filter(e=>e.key!==key);};
function instance(s,id){return bindUnit(s,{uid:++s.serial,id,summonTurn:s.turn,attacks:0,skillTurn:-1,skillUsesUsed:0,effects:[],attackedTargets:[],lastTarget:null,extra:0,mobFusion:false,permanentAtk:0,permanentDef:0});}
export const stats=p=>({atk:Math.max(0,info(p).atk+p.permanentAtk+sum(p,'atk')+passiveBonus(p,soulById).atk),def:Math.max(0,info(p).def+p.permanentDef+sum(p,'def')+sum(p,'defUntilAttack')+passiveBonus(p,soulById).def)});
export const currentTags=p=>[...new Set([...info(p).tags,...values(p,'addTag')])].filter(t=>!values(p,'removeTag').includes(t));
const attribute=p=>value(p,'attribute')||info(p).attribute;
const expiresNextOpponent=(s,side)=>s.turn+(s.active===side?1:0);
function main(s,side){if(s.winner!==null)fail('対戦は終了しています');if(s.evolutionQueue?.length)fail('条件進化を選んでください');if(s.pending)fail('対応スキルの確認を完了してください');if(s.phase!=='main'||s.active!==side)fail('自分のメインフェイズでのみ行えます');}
function finish(s,side,reason){if(s.winner!==null)return;if(s.evolutionQueue?.length){s.deferredResult??={side,reason};return;}delete s.deferredResult;s.winner=side;s.reason=reason;s.phase='finished';s.pending=null;log(s,reason);emit(s,'result',{side,reason});}
function draw(s,side){const p=s.players[side];if(!p.deck.length){finish(s,1-side,'山札切れ');return;}const id=moveStoredCard(p,'deck',0,'hand');emit(s,'draw',{side,id});}
export function startTurn(s){
 s.phase='draw';s.turn++;emit(s,'turn',{side:s.active,turn:s.turn});
 for(const p of s.players){p.skillUsed=false;p.teamEffects=p.teamEffects.filter(e=>e.until>=s.turn);for(const f of p.field.filter(Boolean)){f.effects=f.effects.filter(e=>e.until===null||e.until>=s.turn);for(const e of f.effects.filter(e=>e.key==='turnPoison')){f.permanentAtk-=e.value;f.permanentDef-=e.value;}f.attacks=0;f.attackedTargets=[];f.lastTarget=null;f.extra=0;f.chainOnly=false;}}
 for(const f of live(s,s.active))f.permanentAtk+=info(f).passive?.ownTurnGrowth||0;bindBattle(s,soulById);
 const p=s.players[s.active];while(p.hand.length<5&&s.winner===null)draw(s,s.active);
 if(s.winner===null){s.phase='main';log(s,`TURN ${s.turn} · ${p.name}のメインフェイズ`);}
}
function shuffled(ids,random){
 const deck=[...ids];
 for(let i=deck.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]];}
 return deck;
}
export function createSoulBattle(decks,names=['PLAYER','CPU'],{random=Math.random,startingSide=0}={}){
 for(const d of decks)if(!validateSoulDeck(d).valid)fail('合計45体のデッキが必要です');
 const s={version:2,active:startingSide===1?1:0,turn:0,phase:'draw',winner:null,reason:'',serial:0,log:[],pending:null,players:decks.map((d,i)=>({name:names[i],life:400,original:[...d],deck:shuffled(d.filter(id=>soulById.get(id).soulClass==='seed'),random),reserve:d.filter(id=>soulById.get(id).soulClass!=='seed'),hand:[],used:[],field:[null,null,null],grave:[],destroyed:[],skillUsed:false,teamEffects:[],handBonuses:[],fusionBonus:null,revealed:[]}))};startTurn(s);return s;
}
export const canSummonHand=(s,side,index)=>{const p=s.players[side],id=p.hand[index];return !!id&&(soulById.get(id).soulClass==='seed'||p.handBonuses.some(b=>b.index===index&&b.direct));};
function takeHand(p,index){const bonus=p.handBonuses.find(b=>b.index===index);p.handBonuses=p.handBonuses.filter(b=>b.index!==index);for(const b of p.handBonuses)if(b.index>index)b.index--;return {id:p.hand.splice(index,1)[0],bonus};}
function place(s,side,index,slot){
 const p=s.players[side],id=p.hand[index];if(!canSummonHand(s,side,index))fail('シード、または帰還スキルで直接召喚可能なフィギュアを選んでください');
 if(!Number.isInteger(slot)||slot<0||slot>2||p.field[slot])fail('空き枠が必要です');
 const {bonus}=takeHand(p,index);p.used.push(id);const f=instance(s,id);
 if(bonus){if(bonus.def)effect(f,'def',bonus.def,Infinity);Object.assign(f,usageRecord(bonus));}
 p.field[slot]=f;log(s,info(f).name+'を召喚');emit(s,'summon',{side,slot,id,attribute:attribute(f),attackType:info(f).attackType,uid:f.uid,...stats(f)});return f;
}
export function summon(s,side,index,slot){main(s,side);return place(s,side,index,slot);}
const matches=(p,m)=>matchesMaterial(info(p),m,{tags:currentTags(p),attribute:attribute(p),wildAttribute:has(p,'wildAttribute')});
export function missingFusionTargets(s,side,refs){const pair=refs.map(ref=>fusionMaterial(s,side,ref));if(pair.length!==2||pair.some(p=>!p))return [];return [...new Set(recipes.filter(r=>!s.players[side].reserve.includes(r.target)&&recipeStageMatches(r,pair.map(info),soulById)&&recipePairMatches(r,pair.map(info),pair.map(p=>({tags:currentTags(p),attribute:attribute(p),wildAttribute:has(p,'wildAttribute')})))).map(r=>r.target))];}
export function fusionOptions(s,side,uids){
 if(s.winner!==null||s.evolutionQueue?.length||s.pending||s.phase!=='main'||s.active!==side||uids.length!==2||uids[0]===uids[1])return [];
 if(uids.every(ref=>typeof ref==='object'))return [];
 const pair=uids.map(ref=>fusionMaterial(s,side,ref));
 if(pair.some(p=>!p||has(p,'fusionLock')||(has(p,'attackOrFuse')&&p.attacks>0)||(p.skillTurn===s.turn&&!has(p,'wildAttribute'))))return [];
 const explicit=recipes.filter(r=>s.players[side].reserve.includes(r.target)&&recipeStageMatches(r,pair.map(info),soulById)&&recipePairMatches(r,pair.map(info),pair.map(p=>({tags:currentTags(p),attribute:attribute(p),wildAttribute:has(p,'wildAttribute')}))));
 // Dedicated evolution and strengthening coexist; never hide a legal recipe.
 const same=pair[0].id===pair[1].id,sharedAttribute=sharesAttribute(attribute(pair[0]),attribute(pair[1])),sharedTag=currentTags(pair[0]).some(t=>currentTags(pair[1]).includes(t));
 const bonus=same||sharedAttribute&&sharedTag?30:sharedAttribute||sharedTag?15:0;
 const strength=bonus?pair.flatMap((base,index)=>base.graveIndex!==undefined?[]:[{id:'resonance:'+index+':'+(base.uid??'hand-'+base.handIndex),target:base.id,fromClass:info(base).soulClass,materials:pair.map(f=>({id:f.id})),special:false,resonance:true,sameId:same,baseIndex:index,baseUid:base.uid,bonusATK:bonus,bonusDEF:bonus,label:(same?'同一ID':sharedAttribute&&sharedTag?'属性＋タグ一致':sharedAttribute?'属性一致':'タグ一致')+' · '+(base.handIndex!==undefined?'手札'+(base.handIndex+1):'場'+(s.players[side].field.findIndex(f=>f?.uid===base.uid)+1))+'の'+info(base).name+'を残す · ATK/DEF +'+bonus+' · '+(same?'スキル回数リセット':'残スキル回数を引き継ぐ')}]):[];
 return [...explicit].sort((a,b)=>Number(b.special)-Number(a.special)).concat(strength);
}
// Existing numeric references identify field instances; hand references identify a copy by index.
export function fusionMaterial(s,side,ref){
 if(typeof ref==='number')return live(s,side).find(p=>p.uid===ref);
 const p=s.players[side];if(Number.isInteger(ref?.graveIndex)){const id=p.grave[ref.graveIndex];return soulById.get(id)?.passive?.graveFusion?{id,graveIndex:ref.graveIndex,effects:[],attacks:0,skillTurn:-1}:null;}const i=ref?.handIndex,id=p.hand[i];
 if(!Number.isInteger(i)||i<0||!id)return null;
 const bonus=p.handBonuses.find(b=>b.index===i)||{};return {id,handIndex:i,effects:[],attacks:0,...usageRecord(bonus),skillTurn:bonus.skillTurn??-1,permanentAtk:bonus.atk||0,permanentDef:bonus.def||0};
}
export function fusionPairs(s,side){const field=live(s,side).map(f=>f.uid),out=[];for(let i=0;i<field.length;i++){for(let j=i+1;j<field.length;j++)out.push([field[i],field[j]]);for(let j=0;j<s.players[side].hand.length;j++)out.push([field[i],{handIndex:j}]);for(let j=0;j<s.players[side].grave.length;j++)if(soulById.get(s.players[side].grave[j])?.passive?.graveFusion)out.push([field[i],{graveIndex:j}]);}return out;}
function remove(s,side,f,destroyed=false,cause='skill'){const p=s.players[side],i=p.field.findIndex(x=>x?.uid===f.uid);if(i<0)return;if(destroyed&&cause==='skill'&&info(f).passive?.skillDestructionImmune)return;if(destroyed&&info(f).passive?.summonGuard&&f.summonTurn===s.turn)return;p.field[i]=null;putStoredCard(p,'grave',f.id,f);if(destroyed){p.destroyed.push(f.id);emit(s,'defeat',{side,id:f.id,uid:f.uid,slot:i});deathPassive(s,side,f);}}
function deathPassive(s,side,f){const p=s.players[side],q=info(f).passive;if(!q)return;
 if(q.phoenixOnce&&!f.phoenixRevived&&p.field.includes(null)){const i=p.grave.length-1;takeStoredCard(p,'grave',i);const j=p.destroyed.lastIndexOf(f.id);if(j>=0)p.destroyed.splice(j,1);const unit=instance(s,f.id);unit.phoenixRevived=true;const slot=p.field.indexOf(null);p.field[slot]=unit;p.life=Math.min(400,p.life+(q.reviveHeal||0));emit(s,'summon',{side,id:f.id,uid:unit.uid,slot,...stats(unit)});return;}
 if(q.deathGraveAttribute&&p.field.includes(null)){const choices=p.grave.filter(id=>id!==f.id&&soulById.get(id).attribute.split('/').includes(q.deathGraveAttribute));if(choices.length){s.evolutionQueue??=[];s.evolutionQueue.push({kind:'revive',side,source:f.id,target:f.id,cost:1,attribute:q.deathGraveAttribute});}}
const summonId=(id,usage)=>{const slot=p.field.indexOf(null);if(slot<0)return false;const unit=instance(s,id);if(usage?.phoenixRevived)unit.phoenixRevived=true;p.field[slot]=unit;p.used.push(id);emit(s,'summon',{side,slot,id,uid:unit.uid,...stats(unit)});return true;};if(q.deathReserve&&p.field.includes(null)){const i=p.reserve.indexOf(q.deathReserve);if(i>=0){p.reserve.splice(i,1);summonId(q.deathReserve);}}if(q.evolve&&p.reserve.includes(q.evolve.target)){s.evolutionQueue??=[];s.evolutionQueue.push({side,source:f.id,...q.evolve});if(evolutionOptions(s).costs.length<q.evolve.cost)s.evolutionQueue.pop();}if(q.deathId&&p.field.includes(null)){const i=p.deck.indexOf(q.deathId);if(i>=0){takeStoredCard(p,'deck',i);summonId(q.deathId);}}if(q.deathRandomTag){const choices=p.deck.map((id,i)=>({id,i})).filter(x=>soulById.get(x.id).tags.includes(q.deathRandomTag));if(choices.length&&p.field.includes(null)){const selected=choices[Math.floor(Math.random()*choices.length)];takeStoredCard(p,'deck',selected.i);summonId(selected.id);}}if(q.deathRevive){for(let n=0;n<q.deathRevive&&p.field.includes(null);n++){const i=p.grave.findIndex(id=>soulById.get(id).soulClass==='seed');if(i<0)break;const {id,usage}=takeStoredCard(p,'grave',i),j=p.destroyed.indexOf(id);if(j>=0)p.destroyed.splice(j,1);summonId(id,usage);}}}
function bounce(s,side,f,def=0){const p=s.players[side];p.field[p.field.findIndex(x=>x?.uid===f.uid)]=null;p.handBonuses.push({id:f.id,index:p.hand.length,def,...usageRecord(f),direct:!!def});p.hand.push(f.id);}
export function fuse(s,side,uids,recipeId){
 main(s,side);const r=fusionOptions(s,side,uids).find(r=>r.id===recipeId);if(!r)fail('この素材ではフュージョンできません');
 const p=s.players[side],pair=uids.map(ref=>fusionMaterial(s,side,ref)),base=r.resonance?pair[r.baseIndex]:null;
 const fieldUid=base?.uid??uids.find(ref=>typeof ref==='number'),slot=p.field.findIndex(f=>f?.uid===fieldUid),materialIds=pair.map(f=>f.id);
 const original=base?{...base,effects:base.effects.map(e=>({...e})),attackedTargets:[...(base.attackedTargets||[])]}:null;
 for(let i=0;i<uids.length;i++){const ref=uids[i],keep=r.resonance&&i===r.baseIndex;
  if(typeof ref==='number'){if(!keep)remove(s,side,piece(s,side,ref));}
  else if(ref.graveIndex!==undefined){const {id,usage}=takeStoredCard(p,'grave',ref.graveIndex);const j=p.destroyed.indexOf(id);if(j>=0)p.destroyed.splice(j,1);putStoredCard(p,'grave',id,usage);p.used.push(id);}
  else{const {id,bonus}=takeHand(p,ref.handIndex);if(!keep)putStoredCard(p,'grave',id,bonus);p.used.push(id);}
 }
 if(!r.resonance)p.reserve.splice(p.reserve.indexOf(r.target),1);p.used.push(r.target);const f=instance(s,r.target);
 if(r.resonance){const freshUid=f.uid;Object.assign(f,original,{uid:freshUid,id:r.target});delete f.handIndex;delete f.graveIndex;f.summonTurn=original.summonTurn??s.turn;f.permanentAtk=(original.permanentAtk||0)+r.bonusATK;f.permanentDef=(original.permanentDef||0)+r.bonusDEF;f.resonanceAtk=(original.resonanceAtk||0)+r.bonusATK;f.resonanceDef=(original.resonanceDef||0)+r.bonusDEF;if(r.sameId){f.skillUsesUsed=0;f.skillTurn=-1;}}
 p.field[slot]=f;
 if(r.special){f.mobFusion=true;f.permanentAtk=r.bonusATK;f.permanentDef=r.bonusDEF;s.fusionBanner={serial:f.uid,name:info(f).name,special:true};}
 else s.fusionBanner={serial:f.uid,name:info(f).name,special:false};
 if(p.fusionBonus&&(p.fusionBonus.expires===null||p.fusionBonus.expires>=s.turn)){const until=p.fusionBonus.persistent?Infinity:s.turn;effect(f,'atk',p.fusionBonus.atk,until);effect(f,'def',p.fusionBonus.def,until);p.fusionBonus=null;}
 log(s,(r.resonance?'強化召喚 · ':r.special?'MOB SOUL FUSION · ':'SOUL FUSION · ')+info(f).name+(r.resonance?' · ATK/DEF +'+r.bonusATK:r.special?' · ATK +20 / DEF +20':''));
 emit(s,'fusion',{side,slot,uid:f.uid,id:f.id,attribute:attribute(f),attackType:info(f).attackType,materialIds,special:r.special,resonance:!!r.resonance,...stats(f)});
}
function reactionEligible(s,side,f){
 const p=s.pending;if(!p||p.side===side)return false;const timing=info(f).soulSkill.timing,q=skillPlan(f);
 if(p.kind==='skill')return timing==='skill-response'&&(!q.reverseBuffs||isStatRaisingPlan(skillPlan(p.caster||piece(s,p.side,p.uid)),elementDefinition(info(p.caster||piece(s,p.side,p.uid)))));
 if(p.kind==='defeat')return timing==='defeat-response'&&p.targetUid===f.uid;
 if(p.kind!=='attack'||timing!=='attack-response')return false;
 const a=piece(s,p.side,p.uid);if(has(a,'pierceGuard')&&(q.redirectSelf||q.redirectOther))return false;
 if(q.guardAlly)return !!live(s,side).find(x=>x.uid===p.targetUid);if(q.redirectSelf)return true;
 if(q.redirectOther)return live(s,side).some(x=>x.uid!==p.targetUid)||!!q.fallbackDef;
 if(q.returnSelf&&q.cancelAttack)return true;
 return p.targetUid===f.uid;
}
export function skillSource(s,side,ref){
 if(typeof ref==='number')return live(s,side).find(f=>f.uid===ref)||null;
 const i=ref?.handIndex,p=s.players[side],id=p.hand[i];if(!Number.isInteger(i)||i<0||!id||ref.id&&id!==ref.id)return null;
 return {id,uid:-(i+1),handIndex:i,handOrigin:true,effects:[],...usageRecord(storedUsage(p,'hand',i)),permanentAtk:0,permanentDef:0};
}
export const skillReference=f=>f.handOrigin?{handIndex:f.handIndex,id:f.id}:f.uid;
function resourcesAvailable(s,side,f){if(f.handOrigin&&['blood','promoteSelf'].includes(skillPlan(f).specified))return false;const q=skillPlan(f),p=s.players[side];if(q.summonLoneReserve&&(f.handOrigin||p.field.filter(Boolean).length!==1||!p.reserve.some(id=>soulById.get(id).soulClass===q.summonLoneReserve.class&&soulById.get(id).tags.includes(q.summonLoneReserve.tag))))return false;if(q.lifeCost&&p.life<=q.lifeCost)return false;if(q.discardCost&&p.hand.length-(f.handOrigin?1:0)<q.discardCost)return false;if(f.handOrigin&&q.draw&&p.deck.length<q.draw)return false;if((q.attributeSearch||q.scout)&&!p.deck.length)return false;if(q.recoverSeed&&!p.grave.some(id=>soulById.get(id).soulClass==='seed'))return false;return true;}
function skillTimingAllowed(s,side,f){
 if(s.pending){if(f.handOrigin){const pending=s.pending,t=info(f).soulSkill.timing;if(pending.side===side)return false;if(pending.kind==='skill')return t==='skill-response'&&(!skillPlan(f).reverseBuffs||isStatRaisingPlan(skillPlan(pending.caster||piece(s,pending.side,pending.uid)),elementDefinition(info(pending.caster||piece(s,pending.side,pending.uid)))));if(pending.kind==='defeat')return t==='defeat-response'&&!!live(s,side).find(x=>x.uid===pending.targetUid);if(pending.kind==='attack'&&skillPlan(f).redirectOther&&has(piece(s,pending.side,pending.uid),'pierceGuard'))return false;return pending.kind==='attack'&&t==='attack-response'&&!!live(s,side).find(x=>x.uid===pending.targetUid);}return reactionEligible(s,side,f);}
 return s.phase==='main'&&s.active===side&&info(f).soulSkill.timing==='own-main';
}
export function skillBudget(s,side,ref){bindBattle(s,soulById);const f=skillSource(s,side,ref);if(!f)return null;const passive=!!skillPlan(f).passive||info(f).soulSkill.timing==='passive',limit=skillUseLimits[info(f).soulClass]||1,used=usedSkills(f);return {passive,limit,used,remaining:Math.max(0,limit-used)};}
export function skillUnavailableReason(s,side,ref){const f=skillSource(s,side,ref);if(!f)return '発動元がありません';const budget=skillBudget(s,side,ref);if(budget.passive)return '自動発動（手動回数を消費しません）';if(s.winner!==null)return '対戦は終了しています';if(s.evolutionQueue?.length)return '条件進化を先に解決してください';if(f.skillTurn===s.turn)return 'この個体はこのターン使用済み';if(!budget.remaining)return 'この個体の残り回数は0です';if(f.effects.some(e=>e.key==='skillLock'&&(e.starts??0)<=s.turn))return 'スキル使用禁止中です';if(!resourcesAvailable(s,side,f))return '手札・ライフ等のコストまたは発動条件が不足しています';if(!skillTimingAllowed(s,side,f))return '今は発動タイミングではありません';if(skillChoices(s,side,ref).some(c=>!c.choices.length))return '条件を満たす対象がありません';return '';}
export const canSkill=(s,side,ref)=>!skillUnavailableReason(s,side,ref);
export const reactionOptions=(s,side)=>[...live(s,side),...s.players[side].hand.map((id,handIndex)=>skillSource(s,side,{handIndex,id}))].filter(f=>canSkill(s,side,skillReference(f)));
const option=(value,label)=>({value:String(value),label});
export function skillChoices(s,side,uid,selected={}){
 const f=skillSource(s,side,uid)||fail('発動するフィギュアがありません'),q=skillPlan(f),p=s.players[side],out=[];
 const add=(key,label,choices)=>out.push({key,label,choices});
 if(q.element)return elementChoices(s,side,f,soulById,selected);if(q.specified==='promoteSelf')add('promoteId','召喚する主人公パーティーのミドル',p.reserve.filter(id=>soulById.get(id).soulClass===q.class&&soulById.get(id).tags.includes(q.tag)).map(id=>option(id,soulById.get(id).name)));
 if(q.summonLoneReserve)add('reserveId','召喚する草原のミドル',p.reserve.filter(id=>soulById.get(id).soulClass===q.summonLoneReserve.class&&soulById.get(id).tags.includes(q.summonLoneReserve.tag)).map(id=>option(id,soulById.get(id).name)));
 if(q.target==='ally')add('targetUid','味方を選択',live(s,side).map(x=>option(x.uid,info(x).name)));
 if(q.target==='enemySeed')add('targetUid','相手のシードを選択',live(s,1-side).filter(x=>info(x).soulClass==='seed').map(x=>option(x.uid,info(x).name)));
 if(q.supportCaster)add('allyUid','追加強化を受ける味方',live(s,side).map(x=>option(x.uid,info(x).name)));
 if(q.target==='enemy')add('targetUid','相手を選択',live(s,1-side).map(x=>option(x.uid,info(x).name)));
 if(q.redirectOther){const xs=live(s,side).filter(x=>x.uid!==s.pending?.targetUid);if(xs.length)add('targetUid','攻撃を受ける味方',xs.map(x=>option(x.uid,info(x).name)));}
 if(q.discardCost)add('costHandIndex','追加コスト：墓地へ送る手札',p.hand.map((id,i)=>({id,i})).filter(x=>!f.handOrigin||x.i!==f.handIndex).map(x=>option(x.i,soulById.get(x.id).name)));
 if(q.recoverSeed)add('recoverIndex','墓地から戻すシード',p.grave.map((id,i)=>({id,i})).filter(x=>soulById.get(x.id).soulClass==='seed').map(x=>option(x.i,soulById.get(x.id).name)));
 if(q.attributeSearch)add('deckIndex','同じ属性のシードを探す',p.deck.map((id,i)=>({id,i})).filter(x=>sharesAttribute(soulById.get(x.id).attribute,info(f).attribute)).map(x=>option(x.i,soulById.get(x.id).name)));
 if(q.scout)add('deckIndex','上から3体の中から選択',p.deck.slice(0,3).map((id,i)=>option(i,soulById.get(id).name)));
 if(q.recycle){const candidates=p.destroyed.map((id,i)=>({id,i})).filter(x=>soulById.get(x.id).soulClass==='seed').map(x=>option(x.i,soulById.get(x.id).name));add('graveIndex','デッキに戻す撃破済みシード',candidates.length?candidates:[option(-1,'撃破済みのシードなし')]);}
 if(q.search){const seeds=p.hand.map((id,i)=>({id,i})).filter(x=>soulById.get(x.id).soulClass==='seed'&&(!f.handOrigin||x.i!==f.handIndex));add('handIndex','デッキ下へ戻すシード',seeds.map(x=>option(x.i,soulById.get(x.id).name)));const h=soulById.get(p.hand[Number(selected.handIndex??seeds[0]?.i)]);add('deckIndex','手札に加えるシード',p.deck.map((id,i)=>({f:soulById.get(id),i})).filter(({f})=>h&&(q.search==='attribute'?f.attribute===h.attribute:f.tags.some(t=>h.tags.includes(t)))).map(({f,i})=>option(i,f.name)));}
 if(q.replaceSeed)add('handIndex','代わりに召喚するシード',[option(-1,'召喚しない'),...p.hand.map((id,i)=>({id,i})).filter(x=>soulById.get(x.id).soulClass==='seed').map(x=>option(x.i,soulById.get(x.id).name))]);
 if(q.addTag)add('tag','追加するタグ',currentTags(f).map(t=>option(t,t)));
 if(q.removeTag){const target=live(s,1-side).find(x=>x.uid===Number(selected.targetUid))||live(s,1-side)[0];add('tag','無効にするタグ',target?currentTags(target).map(t=>option(t,t)):[]);}
 if(q.move)add('slot','移動先',p.field.map((x,i)=>option(i,(i+1)+'枠目'+(x?' · '+info(x).name:''))));
 return out;
}
function checkedOptions(s,side,uid,options){const out={...options};for(const c of skillChoices(s,side,uid,out)){if(out[c.key]===undefined&&c.choices.length===1)out[c.key]=c.choices[0].value;if(out[c.key]===undefined&&['graveIndex','handIndex'].includes(c.key)&&c.choices.some(x=>x.value==='-1'))out[c.key]=-1;if(!c.choices.some(x=>x.value===String(out[c.key])))fail(c.label+'を選んでください');}return out;}
function debit(s,side,f){s.players[side].skillUsed=true;f.skillUsesUsed=usedSkills(f)+1;f.skillTurn=s.turn;if(f.handOrigin)rememberUsage(s.players[side],'grave',f.spentGraveIndex,f);log(s,info(f).name+'：'+info(f).soulSkill.name+' — '+(f.handOrigin?handSkillDescription(info(f)):info(f).soulSkill.description));emit(s,'skill',{side,id:f.id,attribute:attribute(f),attackType:info(f).attackType,uid:f.uid,name:info(f).soulSkill.name,effect:f.handOrigin?handSkillDescription(info(f)):info(f).soulSkill.description,fromHand:!!f.handOrigin});}
export function useSkill(s,side,uid,options={}){
 const reason=skillUnavailableReason(s,side,uid);if(reason)fail(reason);
 if(typeof options!=='object'||options===null)options={targetUid:options};
 const f=skillSource(s,side,uid),opts=checkedOptions(s,side,uid,options),p=s.players[side],q=skillPlan(f);
 if(f.handOrigin&&q.target==='center'&&!p.field[1])fail('センターの味方が必要です');
 if(f.handOrigin&&q.target==='allies'&&!live(s,side).length)fail('場の味方が必要です');
 if(q.target==='attributeAllies'&&!q.heal&&!live(s,side).some(x=>sharesAttribute(attribute(x),info(f).attribute)))fail('同じ属性の味方が必要です');
 if(q.element){validateElement(s,side,f,soulById,opts);opts.el_graveSeeds=p.grave.filter(id=>soulById.get(id).soulClass==='seed').length;}
 // All validation precedes costs; no await or callback can interleave this commit.
 const removals=[...(f.handOrigin?[f.handIndex]:[]),...(q.discardCost?[Number(opts.costHandIndex)]:[])].sort((a,b)=>b-a);
 for(const index of removals){const card=takeHand(p,index);const gi=putStoredCard(p,'grave',card.id,card.bonus);if(f.handOrigin&&index===f.handIndex)f.spentGraveIndex=gi;p.used.push(card.id);}
 if(opts.handIndex!==undefined&&Number(opts.handIndex)>=0)opts.handIndex=Number(opts.handIndex)-removals.filter(i=>i<Number(opts.handIndex)).length;
 if(q.lifeCost)p.life-=q.lifeCost;
 if(f.handOrigin)f.uid=++s.serial;
 if(s.pending){debit(s,side,f);respond(s,side,f,opts);return;}
 debit(s,side,f);s.pending={kind:'skill',side,uid:f.uid,caster:f.handOrigin?f:null,options:opts};
 if(!reactionOptions(s,1-side).length)passReaction(s,1-side);
}
function applySkill(s,side,f,o){
 if(!info(f).soulSkill.runtimePlan&&applyElement(s,side,f,soulById,o)){bindBattle(s,soulById);return;}
 const specified=skillPlan(f);if(specified.specified){const p=s.players[side];if(specified.specified==='promoteSelf'){const slot=p.field.indexOf(f),i=p.reserve.indexOf(o.promoteId);if(slot<0||i<0)return;remove(s,side,f,true);p.reserve.splice(i,1);const next=instance(s,o.promoteId);p.field[slot]=next;p.used.push(next.id);emit(s,'summon',{side,id:next.id,slot,uid:next.uid,...stats(next)});return;}if(specified.specified==='blood'){effect(f,'atk',s.players[1-side].grave.length*10,s.turn);remove(s,side,f,true);return;}if(['tagBuff','rain'].includes(specified.specified)){if(specified.specified==='rain')p.life=Math.min(400,p.life+p.hand.length*10);for(const targetSide of specified.both?[0,1]:[side])for(const t of live(s,targetSide))if(currentTags(t).includes(specified.tag)){if(specified.atk)effect(t,'atk',specified.atk,s.turn);if(specified.def)effect(t,'def',specified.def,s.turn);}return;}}
 const q=skillPlan(f),p=s.players[side],enemy=s.players[1-side],until=q.duration==='persistent'?Infinity:q.duration==='next-opponent'?expiresNextOpponent(s,side):s.turn;
 let targets=q.target==='ally'?[piece(s,side,Number(o.targetUid))]:['enemy','enemySeed'].includes(q.target)?[piece(s,1-side,Number(o.targetUid))]:q.target==='attributeAllies'?live(s,side).filter(x=>sharesAttribute(attribute(x),info(f).attribute)):q.target==='allies'?live(s,side):q.target==='enemies'?live(s,1-side):q.target==='center'?[p.field[1]].filter(Boolean):[f];
 if(q.filterTag)targets=targets.filter(t=>currentTags(t).includes(q.filterTag));
 // A one-use team barrier cancels the hostile lowering skill as specified.
 if(q.atk<0||q.def<0){const i=enemy.teamEffects.findIndex(e=>e.key==='debuffShield'&&e.starts<=s.turn&&e.until>=s.turn&&(e.value==='both'||q.def<0));if(i>=0){enemy.teamEffects.splice(i,1);log(s,'低下スキルを無効化');return;}}
 if(q.heal)p.life=Math.min(400,p.life+q.heal);
 for(const t of targets){
  if(q.atk)effect(t,'atk',q.atk,until);if(q.def)effect(t,'def',q.def,until);
  if(q.turnPoison)effect(t,'turnPoison',q.turnPoison,Infinity);if(q.currentSkillLock)effect(t,'skillLock',true,s.turn);
  if(q.untilAttackDef)effect(t,'defUntilAttack',q.untilAttackDef,Infinity);
  if(q.cleanse)t.effects=t.effects.filter(e=>!(['atk','def','defUntilAttack'].includes(e.key)&&e.value<0));
  for(const k of ['pierceGuard','ignoreDef','ignoreDefOnTarget','equalKill','wildAttribute','eachTarget','laterAtk','ramp','killChain','firstKillChain','killBreak','killDraw','postMove','attribute'])if(q[k])effect(t,k,q[k],s.turn);
  if(q.attacks)effect(t,'maxAttacks',q.attacks,s.turn);
  if(q.damageBonus){effect(t,'damageBonus',q.damageBonus,s.turn);if(q.threshold)effect(t,'threshold',q.threshold,s.turn);}
  if(q.survive)effect(t,'survive',1,q.survivePersistent?Infinity:s.turn);
  for(const k of ['skillLock','fusionLock','attackOrFuse','skipBattle','lastAttack'])if(q[k]){effect(t,k,true,expiresNextOpponent(s,side));if(k==='skillLock'&&q.duration!=='next-opponent')t.effects.at(-1).starts=s.turn+1;}
  if(q.addTag)effect(t,'addTag',o.tag,s.turn);if(q.removeTag)effect(t,'removeTag',o.tag,s.turn);
  if(q.musicFreedom&&currentTags(t).some(t=>['12','78'].includes(t)))effect(t,'pierceGuard',true,s.turn);
  if(q.musicAtk&&currentTags(t).some(tag=>['12','78'].includes(tag)))effect(t,'atk',q.musicAtk,s.turn);
 }
 const support=q.supportCaster?piece(s,side,Number(o.allyUid)):f;
 if(q.casterEach)effect(support,'eachTarget',true,s.turn);if(q.casterDamage)effect(support,'damageBonus',q.casterDamage,s.turn);
 for(const key of ['debuffShield','damageShield','teamSurvive'])if(q[key])p.teamEffects.push({key,value:q[key],until:key==='teamSurvive'?s.turn:expiresNextOpponent(s,side),starts:key==='teamSurvive'||q.shieldNow?s.turn:s.turn+1});
 if(q.recycle&&Number(o.graveIndex)>=0){const id=p.destroyed.splice(Number(o.graveIndex),1)[0];moveStoredCard(p,'grave',p.grave.indexOf(id),'deck');}
 if(q.recoverSeed){const {id,usage}=takeStoredCard(p,'grave',Number(o.recoverIndex));const destroyed=p.destroyed.indexOf(id);if(destroyed>=0)p.destroyed.splice(destroyed,1);putStoredCard(p,'hand',id,usage);}
 if(q.attributeSearch||q.scout)moveStoredCard(p,'deck',Number(o.deckIndex),'hand');
 if(q.bounceEnemy)bounce(s,1-side,piece(s,1-side,Number(o.targetUid)));
 if(q.lifeDamage){enemy.life=Math.max(0,enemy.life-q.lifeDamage);emit(s,'hit',{side,id:f.id,damage:q.lifeDamage,life:enemy.life});if(enemy.life===0)finish(s,side,'スキルでライフ0');}
 for(let i=0;i<(q.draw||0)&&s.winner===null;i++)draw(s,side);
 if(q.drawIfLow&&p.hand.length<=4)draw(s,side);
 if(q.search){const {id,usage}=takeStoredCard(p,'deck',Number(o.deckIndex)),back=takeHand(p,Number(o.handIndex));putStoredCard(p,'deck',back.id,back.bonus);putStoredCard(p,'hand',id,usage);}
 if(q.returnSelf){const slot=p.field.indexOf(f);bounce(s,side,f);if(q.replaceSeed&&Number(o.handIndex)>=0)place(s,side,Number(o.handIndex),slot);}
 if(q.discardEnemyHand)while(enemy.hand.length){const card=takeHand(enemy,0);putStoredCard(enemy,'grave',card.id,card.bonus);enemy.destroyed.push(card.id);}
 if(q.taunt)for(const t of targets)effect(t,'taunt',true,s.turn);if(q.attackSkillLock)for(const t of targets)effect(t,'attackSkillLock',true,s.turn);if(q.evadeTurn)effect(f,'evadeAll',true,s.turn);
 if(q.graveTagBuff){const n=s.players.flatMap(p=>p.grave).filter(id=>soulById.get(id).tags.includes(q.graveTagBuff.tag)).length;const t=q.target==='ally'?targets[0]:f;effect(t,'atk',n*q.graveTagBuff.atk,s.turn);effect(t,'def',n*q.graveTagBuff.def,s.turn);}
 if(q.summonLoneReserve){const i=p.reserve.indexOf(o.reserveId),slot=p.field.indexOf(null);if(i>=0&&slot>=0&&live(s,side).length===1){p.reserve.splice(i,1);const unit=instance(s,o.reserveId);p.field[slot]=unit;p.used.push(unit.id);emit(s,'summon',{side,id:unit.id,uid:unit.uid,slot,...stats(unit)});}}
 if(q.fusionBonus)p.fusionBonus={...q.fusionBonus,expires:q.fusionBonus.turnOnly?s.turn:Infinity};
 if(q.revealFusion){const found=fusionPairs(s,side).flatMap(pair=>fusionOptions(s,side,pair));p.revealed=[...new Set(found.map(r=>r.target))];p.revealTurn=s.turn;}
}
export function passReaction(s,side){
 const pending=s.pending;if(!pending||side===pending.side)fail('対応の確認待ちではありません');s.pending=null;
 if(pending.kind==='skill')applySkill(s,pending.side,pending.caster||piece(s,pending.side,pending.uid),pending.options);
 else if(pending.kind==='attack')resolveCombat(s,pending);
 else if(pending.kind==='defeat'){const d=piece(s,side,pending.targetUid);remove(s,side,d,true,'battle');afterCombat(s,pending,true);}
}
function respond(s,side,f,o){
 const pending=s.pending,q=skillPlan(f);s.pending=null;
 if(pending.kind==='skill'&&q.reverseBuffs){const caster=pending.caster||piece(s,pending.side,pending.uid);reverseStatIncreases(s,()=>applySkill(s,pending.side,caster,pending.options));bindBattle(s,soulById);return;}
 if(pending.kind==='attack'&&(q.guardAlly||q.evadeTurn)){const target=piece(s,side,pending.targetUid);if(q.guardAlly)effect(target,'def',q.guardAlly,Infinity);if(q.evadeTurn)effect(target,'evadeAll',true,s.turn);resolveCombat(s,pending);return;}
 if(pending.kind==='skill'){
  if(q.cancelSkill){applySkill(s,side,f,o);log(s,'相手のソウルスキルを無効化');return;}
  const caster=pending.caster||piece(s,pending.side,pending.uid),original=skillPlan(caster);
  if(q.redirectSkill&&original.target==='enemy'){pending.options.targetUid=f.uid;applySkill(s,pending.side,caster,pending.options);}
  else log(s,'対象変更できないスキルを無効化');return;
 }
 if(pending.kind==='defeat'){bounce(s,side,f.handOrigin?piece(s,side,pending.targetUid):f,q.nextSummonDef||0);afterCombat(s,pending,true);return;}
 if(q.returnSelf)bounce(s,side,f);
 if(q.move){const p=s.players[side],i=p.field.indexOf(f),j=Number(o.slot);[p.field[i],p.field[j]]=[p.field[j],p.field[i]];}
 if(q.heal)s.players[side].life=Math.min(400,s.players[side].life+q.heal);
 if(q.lifeDamage){const enemy=s.players[1-side];enemy.life=Math.max(0,enemy.life-q.lifeDamage);emit(s,'hit',{side,id:f.id,damage:q.lifeDamage,life:enemy.life});if(!enemy.life){finish(s,side,'反撃でライフ0');return;}}
 if(q.cancelAttack){log(s,'攻撃を無効化');emit(s,'guard',{side,id:f.id,label:'攻撃を無効化！'});afterCombat(s,pending,false);return;}
 if(q.redirectSelf)pending.targetUid=f.uid;
 if(q.redirectOther&&o.targetUid!==undefined)pending.targetUid=Number(o.targetUid);
 if(q.specified==='counterAtk')effect(piece(s,pending.side,pending.uid),'atk',q.atk,s.turn);
 pending.combatDef=q.combatDef||(q.fallbackDef&&o.targetUid===undefined?q.fallbackDef:0)||0;
 pending.noDamage=!!q.noDamage;pending.survive=!!q.combatSurvive;resolveCombat(s,pending);
}
export const canBeginBattle=(s,side)=>s.turn>1&&s.winner===null&&!s.pending&&!s.evolutionQueue?.length&&s.phase==='main'&&s.active===side;
export function beginBattle(s,side){main(s,side);if(s.turn<=1)fail('先攻の最初のターンはバトルフェイズへ進めません');s.phase='battle';log(s,s.players[side].name+'のバトルフェイズ');emit(s,'battle',{side});}
export const attackLimit=p=>has(p,'eachTarget')?Math.max(1,3):Math.max(Number(value(p,'maxAttacks')||1),passiveBonus(p,soulById).attacks||1)+p.extra;
export function canAttack(s,side,a,d){bindBattle(s,soulById);
 if(s.turn<=1||s.winner!==null||s.pending||s.evolutionQueue?.length||s.phase!=='battle'||s.active!==side||!a||!d||has(a,'skipBattle'))return false;
 if(has(a,'eachTarget')?a.attackedTargets.includes(d.uid):a.attacks>=attackLimit(a))return false;
 if(live(s,1-side).some(t=>has(t,'taunt'))&&!has(d,'taunt'))return false;
 if(a.chainOnly&&a.lastTarget===d.uid)return false;
 if(has(a,'lastAttack')&&live(s,side).some(x=>x.uid!==a.uid&&!has(x,'skipBattle')&&!has(x,'lastAttack')&&live(s,1-side).some(t=>canAttack(s,side,x,t))))return false;
 return true;
}
export function attack(s,side,uid,targetUid){
 const a=piece(s,side,uid),d=piece(s,1-side,targetUid);if(!canAttack(s,side,a,d))fail('この攻撃はできません（攻撃回数・対象・行動制限を確認）');
 s.moveChoice=null;a.attacks++;a.attackedTargets.push(d.uid);a.lastTarget=d.uid;clear(a,'defUntilAttack');
 if(info(a).passive?.attackGrowth){a.permanentAtk+=info(a).passive.attackGrowth.atk;a.permanentDef+=info(a).passive.attackGrowth.def;}if(has(a,'attackSkillLock'))effect(d,'skillLock',true,s.turn);
 if(has(a,'ramp'))effect(a,'atk',value(a,'ramp'),s.turn);if(info(a).passive?.attackRamp)effect(a,'atk',info(a).passive.attackRamp,s.turn);
 s.pending={kind:'attack',side,uid,targetUid,combatDef:0,noDamage:false,survive:false};
 emit(s,'attack',{side,id:a.id,attribute:attribute(a),targetId:d.id,uid,targetUid,slot:s.players[side].field.indexOf(a),targetSlot:s.players[1-side].field.indexOf(d),atk:stats(a).atk+(a.attacks>=2?Number(value(a,'laterAtk')||0):0),def:stats(d).def,attackType:info(a).attackType});
 log(s,info(a).name+' → '+info(d).name+'へ攻撃宣言');if(!reactionOptions(s,1-side).length)passReaction(s,1-side);
}
function resolveCombat(s,event){
 const a=piece(s,event.side,event.uid),d=piece(s,1-event.side,event.targetUid),enemy=s.players[1-event.side];
 const atk=stats(a).atk+combatBonus(a,d,soulById)+(a.attacks>=2?Number(value(a,'laterAtk')||0):0);
 const ignore=has(a,'ignoreDef')||has(d,'ignoreDefOnTarget');
 const def=Math.max(0,info(d).def+d.permanentDef+(ignore?values(d,'def').filter(v=>v<0).reduce((a,b)=>a+b,0):sum(d,'def'))+sum(d,'defUntilAttack')+passiveBonus(d,soulById).def+(ignore?0:event.combatDef||0));
 if(has(d,'evadeAll')){log(s,info(d).name+'は攻撃を回避');afterCombat(s,event,false);return;}
 if(info(d).passive?.evadeOnce&&d.evadeTurn!==s.turn){d.evadeTurn=s.turn;log(s,info(d).name+'が攻撃を回避');afterCombat(s,event,false);return;}
 event.attackConnected=true;const firstGuard=info(d).passive?.firstAttackGuard&&d.receivedAttackTurn!==s.turn;d.receivedAttackTurn=s.turn;
 const destroyed=atk>def||(atk===def&&has(d,'equalKill'));
 if(!destroyed){const loss=def>atk?Math.min(10,stats(d).def):0;d.permanentDef-=loss;log(s,info(d).name+'が防御 · ダメージ0'+(loss?' / DEF −'+loss:''));emit(s,'guard',{side:1-event.side,id:d.id,label:loss?'ガード！ DEF −'+loss:'ガード！',atk,def,defLoss:loss,remainingDef:stats(d).def});afterCombat(s,event,false);return;}
 const difference=Math.max(0,atk-def);let damage=difference+(difference>=Number(value(a,'threshold')||0)?Number(value(a,'damageBonus')||0):0);
 const shield=enemy.teamEffects.findIndex(e=>e.key==='damageShield'&&e.starts<=s.turn&&e.until>=s.turn);
 if(event.noDamage||shield>=0){damage=0;if(!event.noDamage&&shield>=0)enemy.teamEffects.splice(shield,1);}
 const reduction=enemy.teamEffects.findIndex(e=>e.key==='damageReduce'&&e.starts<=s.turn&&e.until>=s.turn);if(damage>0&&reduction>=0){damage=Math.max(0,damage-enemy.teamEffects[reduction].value);enemy.teamEffects.splice(reduction,1);}
 enemy.life=Math.max(0,enemy.life-damage);log(s,`${info(a).name} → ${info(d).name} · 差分 ${difference} / LIFE −${damage}`);emit(s,'hit',{side:event.side,id:a.id,targetId:d.id,targetUid:d.uid,targetSlot:enemy.field.indexOf(d),damage,life:enemy.life,atk,def});
 const team=enemy.teamEffects.findIndex(e=>e.key==='teamSurvive'&&e.until>=s.turn);
 if(firstGuard||(info(d).passive?.summonGuard&&d.summonTurn===s.turn)||event.survive||has(d,'survive')||team>=0){if(!event.survive){if(has(d,'survive'))clear(d,'survive');else if(team>=0)enemy.teamEffects.splice(team,1);}log(s,info(d).name+'の撃破を無効化');afterCombat(s,event,false);return;}
 s.pending={...event,kind:'defeat',defeatHeal:d.effects.find(e=>e.key==='defeatHeal')||null};
 if(!reactionOptions(s,1-event.side).length)passReaction(s,1-event.side);
}
function afterCombat(s,event,destroyed){
 const defender=live(s,1-event.side).find(f=>f.uid===event.targetUid);if(event.attackConnected&&defender)defender.permanentAtk+=info(defender).passive?.hurtGrowth||0;bindBattle(s,soulById);
 const a=live(s,event.side).find(x=>x.uid===event.uid);if(a){
  if(destroyed){const heal=Number(info(a).passive?.killHeal||0)+Number(value(a,'nextAttackHeal')||0)+Number(value(a,'nextKillHeal')||0);if(heal)s.players[event.side].life=Math.min(400,s.players[event.side].life+heal);clear(a,'nextKillHeal');if(event.defeatHeal){const p=s.players[event.defeatHeal.sourceSide];p.life=Math.min(400,p.life+event.defeatHeal.value);}
   if(has(a,'killChain')||(has(a,'firstKillChain')&&a.attacks===1)){a.extra++;a.chainOnly=true;}
   if(has(a,'killBreak'))for(const t of live(s,1-event.side))effect(t,'def',-value(a,'killBreak'),s.turn);
   if(has(a,'killDraw')&&s.players[1-event.side].life>0)draw(s,event.side);
  }
  clear(a,'nextAttackHeal');
  if(has(a,'postMove')){s.moveChoice={side:event.side,uid:a.uid,mode:value(a,'postMove')};}
 }
 if(s.winner===null&&s.players[1-event.side].life<=0)finish(s,event.side,'ライフ0');
}
export function moveAfterAttack(s,side,uid,slot){
 const m=s.moveChoice;if(!m||m.side!==side||m.uid!==uid||s.pending)fail('攻撃後の移動タイミングではありません');
 const p=s.players[side],f=piece(s,side,uid),other=p.field[slot];if(slot<0||slot>2||!Number.isInteger(slot))fail('移動先を選択してください');
 if(m.mode==='unattacked'&&(!other||other.uid===uid||other.attacks>0))fail('まだ攻撃していない別の味方を選んでください');
 const i=p.field.indexOf(f);[p.field[i],p.field[slot]]=[p.field[slot],p.field[i]];s.moveChoice=null;log(s,info(f).name+'の位置を変更');
}
export function canEndTurn(s,side){return s.winner===null&&!s.pending&&!s.evolutionQueue?.length&&s.active===side&&(s.phase==='battle'||(s.turn===1&&s.phase==='main'));}
export function endTurn(s,side){if(!canEndTurn(s,side))fail('対応完了後、バトルフェイズから終了できます（先攻1ターン目はメインから終了可能）');emit(s,'end',{side});s.moveChoice=null;s.active=1-side;startTurn(s);}
export function fusionReadyMaterials(s,side){const field=new Set(),hand=new Set();for(const pair of fusionPairs(s,side))if(fusionOptions(s,side,pair).length)for(const ref of pair){if(typeof ref==='number')field.add(ref);else if(Number.isInteger(ref.handIndex))hand.add(ref.handIndex);}return {field,hand};}
export function fusionReadyUids(s,side){const ready=new Set(),field=live(s,side);for(let i=0;i<field.length;i++)for(let j=i+1;j<field.length;j++)if(fusionOptions(s,side,[field[i].uid,field[j].uid]).length){ready.add(field[i].uid);ready.add(field[j].uid);}return ready;}
export function cpuOptions(s,side,uid){const o={};for(const c of skillChoices(s,side,uid,o))o[c.key]=(c.choices.find(x=>x.value!=='-1')||c.choices[0])?.value;return o;}
export function cpuRespond(s){if(!s.pending||s.pending.side===1)return;if(!cpuActionAllowed(s,'reaction')){passReaction(s,1);return;}for(const f of reactionOptions(s,1)){try{useSkill(s,1,skillReference(f),cpuOptions(s,1,skillReference(f)));recordCpuAction(s,'reaction');return;}catch{}}passReaction(s,1);}
function cpuValue(s,f){const q=s.cpuStrategy||{atk:1,def:1};return f.atk*q.atk+f.def*q.def+f.tags.filter(t=>(s.cpuThemeTags||[]).includes(t)).length*25;}
function cpuSkillValue(s,f){const q=skillPlan(f),kind=s.cpuStrategy?.skill;return (kind==='heal'&&(q.heal||info(f).passive?.killHeal)?100:kind==='draw'&&(q.draw||q.scout||q.attributeSearch)?100:kind==='control'&&(q.fusionLock||q.skillLock||q.bounceEnemy||q.atk<0||q.def<0)?100:kind==='support'&&(q.target==='allies'||q.specified==='tagBuff'||q.specified==='rain')?100:kind==='attack'&&(q.atk>0||q.attacks||q.lifeDamage)?100:0)+cpuValue(s,info(f))/10;}
export function cpuMain(s){
 main(s,1);const p=s.players[1];let actions=0;
 while(actions++<20){while(p.hand.some((id,i)=>canSummonHand(s,1,i))&&p.field.includes(null))summon(s,1,p.hand.map((id,i)=>({id,i})).filter(x=>canSummonHand(s,1,x.i)).sort((a,b)=>cpuValue(s,soulById.get(b.id))-cpuValue(s,soulById.get(a.id)))[0].i,p.field.indexOf(null));let best=null;
  if(!cpuActionAllowed(s,'fusion'))break;for(const uids of fusionPairs(s,1))for(const r of fusionOptions(s,1,uids)){const f=soulById.get(r.target),score=cpuValue(s,f)+(r.resonance?r.bonusATK+r.bonusDEF:(r.special?240:180));if(!best||score>best.score)best={r,uids,score};}
  if(!best)break;fuse(s,1,best.uids,best.r.id);recordCpuAction(s,'fusion');
 }
 cpuSkill(s);
}
export function cpuSkill(s){if(!cpuActionAllowed(s,'skill'))return false;const p=s.players[1];if(s.winner!==null||s.pending||s.evolutionQueue?.length||s.active!==1||s.phase!=='main')return false;
 const casters=[...live(s,1),...p.hand.map((id,handIndex)=>skillSource(s,1,{handIndex,id}))].filter(f=>canSkill(s,1,skillReference(f)));
 for(const f of casters.sort((a,b)=>cpuSkillValue(s,b)-cpuSkillValue(s,a)||Number(a.handOrigin)-Number(b.handOrigin))){try{useSkill(s,1,skillReference(f),cpuOptions(s,1,skillReference(f)));recordCpuAction(s,'skill');return true;}catch{}}return false;
}
export function cpuAttack(s){
 if(s.pending)fail('対応スキルを確認してください');
 for(const a of live(s,1).sort((a,b)=>stats(b).atk-stats(a).atk))for(const d of live(s,0).sort((a,b)=>s.cpuStrategy?.target==='threat'?stats(b).atk-stats(a).atk:stats(a).def-stats(b).def))if(canAttack(s,1,a,d)){attack(s,1,a.uid,d.uid);return;}
 endTurn(s,1);
}

export function evolutionOptions(s){const e=s.evolutionQueue?.[0];if(!e||s.winner!==null)return {event:null,costs:[]};const p=s.players[e.side];if(e.kind==='revive')return {event:e,costs:p.grave.map((id,i)=>({id,value:'grave:'+i})).filter(x=>x.id!==e.source&&soulById.get(x.id).attribute.split('/').includes(e.attribute))};const valid=id=>!e.tag||soulById.get(id).tags.includes(e.tag);const costs=p.hand.map((id,i)=>({value:'hand:'+i,id})).filter(x=>valid(x.id));if(e.field)for(const f of p.field.filter(Boolean))if(valid(f.id))costs.push({value:'field:'+f.uid,id:f.id});return {event:e,costs};}
function finishDeferred(s){if(!s.evolutionQueue?.length&&s.deferredResult){const {side,reason}=s.deferredResult;finish(s,side,reason);}}
export function resolveEvolution(s,side,costs=null){const {event:e,costs:allowed}=evolutionOptions(s);if(!e||e.side!==side)fail('条件進化の選択待ちではありません');if(costs===null){s.evolutionQueue.shift();finishDeferred(s);return;}const p=s.players[side];if(e.kind==='revive'){if(!Array.isArray(costs)||costs.length!==1||!allowed.some(a=>a.value===costs[0])||!p.field.includes(null))fail('蘇生する火属性を1体選んでください');const {id,usage}=takeStoredCard(p,'grave',Number(costs[0].slice(6))),j=p.destroyed.indexOf(id);if(j>=0)p.destroyed.splice(j,1);const unit=instance(s,id);if(usage?.phoenixRevived)unit.phoenixRevived=true;const slot=p.field.indexOf(null);p.field[slot]=unit;p.used.push(id);s.evolutionQueue.shift();emit(s,'summon',{side,id,uid:unit.uid,slot,...stats(unit)});finishDeferred(s);return;}if(!Array.isArray(costs)||costs.length!==e.cost||new Set(costs).size!==costs.length||costs.some(x=>!allowed.some(a=>a.value===x))||!p.reserve.includes(e.target)||!p.field.includes(null))fail('条件進化のコストを選んでください');const hand=costs.filter(x=>x.startsWith('hand:')).map(x=>Number(x.slice(5))).sort((a,b)=>b-a);for(const i of hand){const {id,bonus}=takeHand(p,i);putStoredCard(p,'grave',id,bonus);p.used.push(id);}for(const x of costs.filter(x=>x.startsWith('field:')))remove(s,side,piece(s,side,Number(x.slice(6))));p.reserve.splice(p.reserve.indexOf(e.target),1);const slot=p.field.indexOf(null),f=instance(s,e.target);p.field[slot]=f;p.used.push(f.id);s.evolutionQueue.shift();log(s,info(f).name+'へ条件進化');emit(s,'summon',{side,id:f.id,uid:f.uid,slot,...stats(f)});finishDeferred(s);}
