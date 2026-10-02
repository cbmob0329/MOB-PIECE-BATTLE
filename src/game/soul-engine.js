import {soulFigures,soulById,recipes,validateSoulDeck} from './soul-battle.js';
import programs from './soul-skill-programs.js';
import {soulOverrides} from '../data/soul-overrides.js';
const fail=m=>{throw Error(m);};
const log=(s,t)=>{s.log.push(t);s.log=s.log.slice(-100);};
// Presentation events observe the rules; they never decide a battle outcome.
const emit=(s,type,data={})=>{s.events??=[];s.eventSerial=(s.eventSerial||0)+1;s.events.push({seq:s.eventSerial,type,...data});s.events=s.events.slice(-180);};
const info=p=>soulById.get(p.id);
export const skillPlan=p=>soulOverrides[p.id]?.plan||programs[info(p).soulSkill.program];
const live=(s,side)=>s.players[side].field.filter(Boolean);
const piece=(s,side,uid)=>live(s,side).find(p=>p.uid===uid)||fail('フィールドのフィギュアを選んでください');
const effect=(p,key,value,until)=>p.effects.push({key,value,until});
const values=(p,key)=>p.effects.filter(e=>e.key===key).map(e=>e.value);
const value=(p,key)=>values(p,key).at(-1);
const has=(p,key)=>!!value(p,key);
const sum=(p,key)=>values(p,key).reduce((a,b)=>a+b,0);
const clear=(p,key)=>{p.effects=p.effects.filter(e=>e.key!==key);};
function instance(s,id){return {uid:++s.serial,id,attacks:0,skillTurn:-1,effects:[],attackedTargets:[],lastTarget:null,extra:0,mobFusion:false,permanentAtk:0,permanentDef:0};}
export const stats=p=>({atk:Math.max(0,info(p).atk+p.permanentAtk+sum(p,'atk')),def:Math.max(0,info(p).def+p.permanentDef+sum(p,'def')+sum(p,'defUntilAttack'))});
export const currentTags=p=>[...new Set([...info(p).tags,...values(p,'addTag')])].filter(t=>!values(p,'removeTag').includes(t));
const attribute=p=>value(p,'attribute')||info(p).attribute;
const expiresNextOpponent=(s,side)=>s.turn+(s.active===side?1:0);
function main(s,side){if(s.winner!==null)fail('対戦は終了しています');if(s.pending)fail('対応スキルの確認を完了してください');if(s.phase!=='main'||s.active!==side)fail('自分のメインフェイズでのみ行えます');}
function finish(s,side,reason){s.winner=side;s.reason=reason;s.phase='finished';s.pending=null;log(s,reason);emit(s,'result',{side,reason});}
function draw(s,side){const p=s.players[side];if(!p.deck.length){finish(s,1-side,'山札切れ');return;}const id=p.deck.shift();p.hand.push(id);emit(s,'draw',{side,id});}
export function startTurn(s){
 s.phase='draw';s.turn++;emit(s,'turn',{side:s.active,turn:s.turn});
 for(const p of s.players){p.skillUsed=false;p.teamEffects=p.teamEffects.filter(e=>e.until>=s.turn);for(const f of p.field.filter(Boolean)){f.effects=f.effects.filter(e=>e.until>=s.turn);f.attacks=0;f.attackedTargets=[];f.lastTarget=null;f.extra=0;f.chainOnly=false;}}
 const p=s.players[s.active];while(p.hand.length<5&&s.winner===null)draw(s,s.active);
 if(s.winner===null){s.phase='main';log(s,`TURN ${s.turn} · ${p.name}のメインフェイズ`);}
}
export function createSoulBattle(decks,names=['PLAYER','CPU']){
 for(const d of decks)if(!validateSoulDeck(d).valid)fail('45体（30 / 10 / 5）のデッキが必要です');
 const s={version:2,active:0,turn:0,phase:'draw',winner:null,reason:'',serial:0,log:[],pending:null,players:decks.map((d,i)=>({name:names[i],life:400,original:[...d],deck:d.filter(id=>soulById.get(id).soulClass==='seed'),reserve:d.filter(id=>soulById.get(id).soulClass!=='seed'),hand:[],used:[],field:[null,null,null],grave:[],destroyed:[],skillUsed:false,teamEffects:[],handBonuses:[],fusionBonus:null,revealed:[]}))};startTurn(s);return s;
}
export const canSummonHand=(s,side,index)=>{const p=s.players[side],id=p.hand[index];return !!id&&(soulById.get(id).soulClass==='seed'||p.handBonuses.some(b=>b.index===index&&b.direct));};
function takeHand(p,index){const bonus=p.handBonuses.find(b=>b.index===index);p.handBonuses=p.handBonuses.filter(b=>b.index!==index);for(const b of p.handBonuses)if(b.index>index)b.index--;return {id:p.hand.splice(index,1)[0],bonus};}
function place(s,side,index,slot){
 const p=s.players[side],id=p.hand[index];if(!canSummonHand(s,side,index))fail('シード、または帰還スキルで直接召喚可能なフィギュアを選んでください');
 if(!Number.isInteger(slot)||slot<0||slot>2||p.field[slot])fail('空き枠が必要です');
 const {bonus}=takeHand(p,index);p.used.push(id);const f=instance(s,id);
 if(bonus){if(bonus.def)effect(f,'def',bonus.def,Infinity);f.skillTurn=bonus.skillTurn;}
 p.field[slot]=f;log(s,info(f).name+'を召喚');emit(s,'summon',{side,slot,id,uid:f.uid,...stats(f)});return f;
}
export function summon(s,side,index,slot){main(s,side);return place(s,side,index,slot);}
const matches=(p,m)=>m.id?p.id===m.id:m.tag?currentTags(p).includes(m.tag):has(p,'wildAttribute')||attribute(p)===m.attribute;
export function fusionOptions(s,side,uids){
 if(s.winner!==null||s.pending||s.phase!=='main'||s.active!==side||uids.length!==2||uids[0]===uids[1])return [];
 if(uids.every(ref=>typeof ref==='object'))return [];
 const pair=uids.map(ref=>fusionMaterial(s,side,ref));
 if(pair.some(p=>!p||has(p,'fusionLock')||(has(p,'attackOrFuse')&&p.attacks>0)||(p.skillTurn===s.turn&&!has(p,'wildAttribute'))))return [];
 return recipes.filter(r=>s.players[side].reserve.includes(r.target)&&(r.special||pair.every(p=>info(p).soulClass===r.fromClass))&&((matches(pair[0],r.materials[0])&&matches(pair[1],r.materials[1]))||(matches(pair[1],r.materials[0])&&matches(pair[0],r.materials[1]))));
}
// Existing numeric references identify field instances; hand references identify a copy by index.
export function fusionMaterial(s,side,ref){
 if(typeof ref==='number')return live(s,side).find(p=>p.uid===ref);
 const p=s.players[side],i=ref?.handIndex,id=p.hand[i];
 if(!Number.isInteger(i)||i<0||!id)return null;
 return {id,handIndex:i,effects:[],attacks:0,skillTurn:p.handBonuses.find(b=>b.index===i)?.skillTurn??-1};
}
export function fusionPairs(s,side){const field=live(s,side).map(f=>f.uid),out=[];for(let i=0;i<field.length;i++){for(let j=i+1;j<field.length;j++)out.push([field[i],field[j]]);for(let j=0;j<s.players[side].hand.length;j++)out.push([field[i],{handIndex:j}]);}return out;}
function remove(s,side,f,destroyed=false){const p=s.players[side],i=p.field.findIndex(x=>x?.uid===f.uid);if(i<0)return;p.field[i]=null;p.grave.push(f.id);if(destroyed){p.destroyed.push(f.id);emit(s,'defeat',{side,id:f.id,uid:f.uid,slot:i});}}
function bounce(s,side,f,def=0){const p=s.players[side];p.field[p.field.findIndex(x=>x?.uid===f.uid)]=null;p.handBonuses.push({id:f.id,index:p.hand.length,def,skillTurn:f.skillTurn,direct:!!def});p.hand.push(f.id);}
export function fuse(s,side,uids,recipeId){
 main(s,side);const r=fusionOptions(s,side,uids).find(r=>r.id===recipeId);if(!r)fail('この素材ではフュージョンできません');
 const p=s.players[side],fieldUid=uids.find(ref=>typeof ref==='number'),slot=p.field.findIndex(f=>f?.uid===fieldUid),materialIds=uids.map(ref=>fusionMaterial(s,side,ref).id);
 for(const ref of uids){if(typeof ref==='number')remove(s,side,piece(s,side,ref));else{const {id}=takeHand(p,ref.handIndex);p.grave.push(id);p.used.push(id);}}
 p.reserve.splice(p.reserve.indexOf(r.target),1);p.used.push(r.target);const f=instance(s,r.target);p.field[slot]=f;
 if(r.special){f.mobFusion=true;f.permanentAtk=r.bonusATK;f.permanentDef=r.bonusDEF;s.fusionBanner={serial:f.uid,name:info(f).name,special:true};}
 else s.fusionBanner={serial:f.uid,name:info(f).name,special:false};
 if(p.fusionBonus&&p.fusionBonus.expires>=s.turn){effect(f,'atk',p.fusionBonus.atk,s.turn);effect(f,'def',p.fusionBonus.def,s.turn);p.fusionBonus=null;}
 log(s,(r.special?'MOB SOUL FUSION · ':'SOUL FUSION · ')+info(f).name+(r.special?' · ATK +20 / DEF +20':''));
 emit(s,'fusion',{side,slot,uid:f.uid,id:f.id,materialIds,special:r.special,...stats(f)});
}
function reactionEligible(s,side,f){
 const p=s.pending;if(!p||p.side===side)return false;const timing=info(f).soulSkill.timing,q=skillPlan(f);
 if(p.kind==='skill')return timing==='skill-response';
 if(p.kind==='defeat')return timing==='defeat-response'&&p.targetUid===f.uid;
 if(p.kind!=='attack'||timing!=='attack-response')return false;
 const a=piece(s,p.side,p.uid);if(has(a,'pierceGuard')&&(q.redirectSelf||q.redirectOther))return false;
 if(q.redirectSelf)return true;
 if(q.redirectOther)return live(s,side).some(x=>x.uid!==p.targetUid)||!!q.fallbackDef;
 if(q.returnSelf&&q.cancelAttack)return true;
 return p.targetUid===f.uid;
}
export function canSkill(s,side,uid){const f=live(s,side).find(f=>f.uid===uid);if(!f||s.winner!==null||s.players[side].skillUsed||f.effects.some(e=>e.key==='skillLock'&&(e.starts??0)<=s.turn))return false;return s.pending?reactionEligible(s,side,f):s.phase==='main'&&s.active===side&&info(f).soulSkill.timing==='own-main';}
export const reactionOptions=(s,side)=>live(s,side).filter(f=>canSkill(s,side,f.uid));
const option=(value,label)=>({value:String(value),label});
export function skillChoices(s,side,uid,selected={}){
 const f=piece(s,side,uid),q=skillPlan(f),p=s.players[side],out=[];
 const add=(key,label,choices)=>out.push({key,label,choices});
 if(q.target==='ally')add('targetUid','味方を選択',live(s,side).map(x=>option(x.uid,info(x).name)));
 if(q.target==='enemy')add('targetUid','相手を選択',live(s,1-side).map(x=>option(x.uid,info(x).name)));
 if(q.redirectOther){const xs=live(s,side).filter(x=>x.uid!==s.pending?.targetUid);if(xs.length)add('targetUid','攻撃を受ける味方',xs.map(x=>option(x.uid,info(x).name)));}
 if(q.recycle){const candidates=p.destroyed.map((id,i)=>({id,i})).filter(x=>soulById.get(x.id).soulClass==='seed').map(x=>option(x.i,soulById.get(x.id).name));add('graveIndex','デッキに戻す撃破済みシード',candidates.length?candidates:[option(-1,'撃破済みのシードなし')]);}
 if(q.search){const seeds=p.hand.map((id,i)=>({id,i})).filter(x=>soulById.get(x.id).soulClass==='seed');add('handIndex','デッキ下へ戻すシード',seeds.map(x=>option(x.i,soulById.get(x.id).name)));const h=soulById.get(p.hand[Number(selected.handIndex??seeds[0]?.i)]);add('deckIndex','手札に加えるシード',p.deck.map((id,i)=>({f:soulById.get(id),i})).filter(({f})=>h&&(q.search==='attribute'?f.attribute===h.attribute:f.tags.some(t=>h.tags.includes(t)))).map(({f,i})=>option(i,f.name)));}
 if(q.replaceSeed)add('handIndex','代わりに召喚するシード',[option(-1,'召喚しない'),...p.hand.map((id,i)=>({id,i})).filter(x=>soulById.get(x.id).soulClass==='seed').map(x=>option(x.i,soulById.get(x.id).name))]);
 if(q.addTag)add('tag','追加するタグ',currentTags(f).map(t=>option(t,t)));
 if(q.removeTag){const target=live(s,1-side).find(x=>x.uid===Number(selected.targetUid))||live(s,1-side)[0];add('tag','無効にするタグ',target?currentTags(target).map(t=>option(t,t)):[]);}
 if(q.move)add('slot','移動先',p.field.map((x,i)=>option(i,(i+1)+'枠目'+(x?' · '+info(x).name:''))));
 return out;
}
function checkedOptions(s,side,uid,options){const out={...options};for(const c of skillChoices(s,side,uid,out)){if(out[c.key]===undefined&&c.choices.length===1)out[c.key]=c.choices[0].value;if(out[c.key]===undefined&&['graveIndex','handIndex'].includes(c.key)&&c.choices.some(x=>x.value==='-1'))out[c.key]=-1;if(!c.choices.some(x=>x.value===String(out[c.key])))fail(c.label+'を選んでください');}return out;}
function debit(s,side,f){s.players[side].skillUsed=true;f.skillTurn=s.turn;log(s,info(f).name+'：'+info(f).soulSkill.name);emit(s,'skill',{side,id:f.id,uid:f.uid,name:info(f).soulSkill.name});}
export function useSkill(s,side,uid,options={}){
 if(!canSkill(s,side,uid))fail('このタイミングでは発動できません（各プレイヤー1ターン合計1回）');
 if(typeof options!=='object'||options===null)options={targetUid:options};
 const f=piece(s,side,uid),opts=checkedOptions(s,side,uid,options);
 if(s.pending){debit(s,side,f);respond(s,side,f,opts);return;}
 debit(s,side,f);s.pending={kind:'skill',side,uid,options:opts};
 if(!reactionOptions(s,1-side).length)passReaction(s,1-side);
}
function applySkill(s,side,f,o){
 const q=skillPlan(f),p=s.players[side],enemy=s.players[1-side],until=q.duration==='next-opponent'?expiresNextOpponent(s,side):s.turn;
 const targets=q.target==='ally'?[piece(s,side,Number(o.targetUid))]:q.target==='enemy'?[piece(s,1-side,Number(o.targetUid))]:q.target==='allies'?live(s,side):q.target==='enemies'?live(s,1-side):q.target==='center'?[p.field[1]].filter(Boolean):[f];
 // A one-use team barrier cancels the hostile lowering skill as specified.
 if(q.atk<0||q.def<0){const i=enemy.teamEffects.findIndex(e=>e.key==='debuffShield'&&e.starts<=s.turn&&e.until>=s.turn&&(e.value==='both'||q.def<0));if(i>=0){enemy.teamEffects.splice(i,1);log(s,'低下スキルを無効化');return;}}
 if(q.heal)p.life=Math.min(400,p.life+q.heal);
 for(const t of targets){
  if(q.atk)effect(t,'atk',q.atk,until);if(q.def)effect(t,'def',q.def,until);
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
 if(q.casterEach)effect(f,'eachTarget',true,s.turn);if(q.casterDamage)effect(f,'damageBonus',q.casterDamage,s.turn);
 for(const key of ['debuffShield','damageShield','teamSurvive'])if(q[key])p.teamEffects.push({key,value:q[key],until:key==='teamSurvive'?s.turn:expiresNextOpponent(s,side),starts:key==='teamSurvive'||q.shieldNow?s.turn:s.turn+1});
 if(q.recycle&&Number(o.graveIndex)>=0){const id=p.destroyed.splice(Number(o.graveIndex),1)[0];p.grave.splice(p.grave.indexOf(id),1);p.deck.push(id);}
 if(q.drawIfLow&&p.hand.length<=4)draw(s,side);
 if(q.search){const id=p.deck.splice(Number(o.deckIndex),1)[0],back=takeHand(p,Number(o.handIndex)).id;p.deck.push(back);p.hand.push(id);}
 if(q.returnSelf){const slot=p.field.indexOf(f);bounce(s,side,f);if(q.replaceSeed&&Number(o.handIndex)>=0)place(s,side,Number(o.handIndex),slot);}
 if(q.fusionBonus)p.fusionBonus={...q.fusionBonus,expires:q.fusionBonus.turnOnly?s.turn:Infinity};
 if(q.revealFusion){const found=fusionPairs(s,side).flatMap(pair=>fusionOptions(s,side,pair));p.revealed=[...new Set(found.map(r=>r.target))];p.revealTurn=s.turn;}
}
export function passReaction(s,side){
 const pending=s.pending;if(!pending||side===pending.side)fail('対応の確認待ちではありません');s.pending=null;
 if(pending.kind==='skill')applySkill(s,pending.side,piece(s,pending.side,pending.uid),pending.options);
 else if(pending.kind==='attack')resolveCombat(s,pending);
 else if(pending.kind==='defeat'){const d=piece(s,side,pending.targetUid);remove(s,side,d,true);afterCombat(s,pending,true);}
}
function respond(s,side,f,o){
 const pending=s.pending,q=skillPlan(f);s.pending=null;
 if(pending.kind==='skill'){
  if(q.cancelSkill){applySkill(s,side,f,o);log(s,'相手のソウルスキルを無効化');return;}
  const caster=piece(s,pending.side,pending.uid),original=skillPlan(caster);
  if(q.redirectSkill&&original.target==='enemy'){pending.options.targetUid=f.uid;applySkill(s,pending.side,caster,pending.options);}
  else log(s,'対象変更できないスキルを無効化');return;
 }
 if(pending.kind==='defeat'){bounce(s,side,f,q.nextSummonDef||0);afterCombat(s,pending,true);return;}
 if(q.returnSelf)bounce(s,side,f);
 if(q.move){const p=s.players[side],i=p.field.indexOf(f),j=Number(o.slot);[p.field[i],p.field[j]]=[p.field[j],p.field[i]];}
 if(q.cancelAttack){log(s,'攻撃を無効化');emit(s,'guard',{side,id:f.id,label:'攻撃を無効化！'});afterCombat(s,pending,false);return;}
 if(q.redirectSelf)pending.targetUid=f.uid;
 if(q.redirectOther&&o.targetUid!==undefined)pending.targetUid=Number(o.targetUid);
 pending.combatDef=q.combatDef||(q.fallbackDef&&o.targetUid===undefined?q.fallbackDef:0)||0;
 pending.noDamage=!!q.noDamage;pending.survive=!!q.combatSurvive;resolveCombat(s,pending);
}
export function beginBattle(s,side){main(s,side);s.phase='battle';log(s,s.players[side].name+'のバトルフェイズ');emit(s,'battle',{side});}
export const attackLimit=p=>has(p,'eachTarget')?Math.max(1,3):Number(value(p,'maxAttacks')||1)+p.extra;
export function canAttack(s,side,a,d){
 if(s.winner!==null||s.pending||s.phase!=='battle'||s.active!==side||!a||!d||has(a,'skipBattle'))return false;
 if(has(a,'eachTarget')?a.attackedTargets.includes(d.uid):a.attacks>=attackLimit(a))return false;
 if(a.chainOnly&&a.lastTarget===d.uid)return false;
 if(has(a,'lastAttack')&&live(s,side).some(x=>x.uid!==a.uid&&!has(x,'skipBattle')&&!has(x,'lastAttack')&&live(s,1-side).some(t=>canAttack(s,side,x,t))))return false;
 return true;
}
export function attack(s,side,uid,targetUid){
 const a=piece(s,side,uid),d=piece(s,1-side,targetUid);if(!canAttack(s,side,a,d))fail('この攻撃はできません（攻撃回数・対象・行動制限を確認）');
 s.moveChoice=null;a.attacks++;a.attackedTargets.push(d.uid);a.lastTarget=d.uid;clear(a,'defUntilAttack');
 if(has(a,'ramp'))effect(a,'atk',value(a,'ramp'),s.turn);
 s.pending={kind:'attack',side,uid,targetUid,combatDef:0,noDamage:false,survive:false};
 emit(s,'attack',{side,id:a.id,targetId:d.id,uid,targetUid,slot:s.players[side].field.indexOf(a),targetSlot:s.players[1-side].field.indexOf(d),atk:stats(a).atk+(a.attacks>=2?Number(value(a,'laterAtk')||0):0),def:stats(d).def,attackType:info(a).attackType});
 log(s,info(a).name+' → '+info(d).name+'へ攻撃宣言');if(!reactionOptions(s,1-side).length)passReaction(s,1-side);
}
function resolveCombat(s,event){
 const a=piece(s,event.side,event.uid),d=piece(s,1-event.side,event.targetUid),enemy=s.players[1-event.side];
 const atk=stats(a).atk+(a.attacks>=2?Number(value(a,'laterAtk')||0):0);
 const ignore=has(a,'ignoreDef')||has(d,'ignoreDefOnTarget');
 const def=Math.max(0,info(d).def+d.permanentDef+(ignore?values(d,'def').filter(v=>v<0).reduce((a,b)=>a+b,0):sum(d,'def'))+sum(d,'defUntilAttack')+(ignore?0:event.combatDef||0));
 const destroyed=atk>def||(atk===def&&has(d,'equalKill'));
 if(!destroyed){const loss=def>atk?Math.min(10,stats(d).def):0;d.permanentDef-=loss;log(s,info(d).name+'が防御 · ダメージ0'+(loss?' / DEF −'+loss:''));emit(s,'guard',{side:1-event.side,id:d.id,label:loss?'ガード！ DEF −'+loss:'ガード！',atk,def,defLoss:loss,remainingDef:stats(d).def});afterCombat(s,event,false);return;}
 const difference=Math.max(0,atk-def);let damage=difference+(difference>=Number(value(a,'threshold')||0)?Number(value(a,'damageBonus')||0):0);
 const shield=enemy.teamEffects.findIndex(e=>e.key==='damageShield'&&e.starts<=s.turn&&e.until>=s.turn);
 if(event.noDamage||shield>=0){damage=0;if(!event.noDamage&&shield>=0)enemy.teamEffects.splice(shield,1);}
 enemy.life=Math.max(0,enemy.life-damage);log(s,`${info(a).name} → ${info(d).name} · 差分 ${difference} / LIFE −${damage}`);emit(s,'hit',{side:event.side,id:a.id,targetId:d.id,targetUid:d.uid,targetSlot:enemy.field.indexOf(d),damage,life:enemy.life,atk,def});
 const team=enemy.teamEffects.findIndex(e=>e.key==='teamSurvive'&&e.until>=s.turn);
 if(event.survive||has(d,'survive')||team>=0){if(!event.survive){if(has(d,'survive'))clear(d,'survive');else if(team>=0)enemy.teamEffects.splice(team,1);}log(s,info(d).name+'の撃破を無効化');afterCombat(s,event,false);return;}
 s.pending={...event,kind:'defeat'};
 if(!reactionOptions(s,1-event.side).length)passReaction(s,1-event.side);
}
function afterCombat(s,event,destroyed){
 const a=live(s,event.side).find(x=>x.uid===event.uid);if(a){
  if(destroyed){if(has(a,'killChain')||(has(a,'firstKillChain')&&a.attacks===1)){a.extra++;a.chainOnly=true;}
   if(has(a,'killBreak'))for(const t of live(s,1-event.side))effect(t,'def',-value(a,'killBreak'),s.turn);
   if(has(a,'killDraw')&&s.players[1-event.side].life>0)draw(s,event.side);
  }
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
export function canEndTurn(s,side){return s.winner===null&&!s.pending&&s.active===side&&(s.phase==='battle'||(s.turn===1&&side===0&&s.phase==='main'));}
export function endTurn(s,side){if(!canEndTurn(s,side))fail('対応完了後、バトルフェイズから終了できます（先攻1ターン目はメインから終了可能）');emit(s,'end',{side});s.moveChoice=null;s.active=1-side;startTurn(s);}
export function fusionReadyUids(s,side){const ready=new Set(),field=live(s,side);for(let i=0;i<field.length;i++)for(let j=i+1;j<field.length;j++)if(fusionOptions(s,side,[field[i].uid,field[j].uid]).length){ready.add(field[i].uid);ready.add(field[j].uid);}return ready;}
export function cpuOptions(s,side,uid){const o={};for(const c of skillChoices(s,side,uid,o))o[c.key]=(c.choices.find(x=>x.value!=='-1')||c.choices[0])?.value;return o;}
export function cpuRespond(s){if(!s.pending||s.pending.side===1)return;for(const f of reactionOptions(s,1)){try{useSkill(s,1,f.uid,cpuOptions(s,1,f.uid));return;}catch{}}passReaction(s,1);}
export function cpuMain(s){
 main(s,1);const p=s.players[1];let actions=0;
 while(actions++<20){while(p.hand.some((id,i)=>canSummonHand(s,1,i))&&p.field.includes(null))summon(s,1,p.hand.findIndex((id,i)=>canSummonHand(s,1,i)),p.field.indexOf(null));let best=null;
  for(const uids of fusionPairs(s,1))for(const r of fusionOptions(s,1,uids)){const f=soulById.get(r.target),score=f.atk+f.def+(r.special?40:0);if(!best||score>best.score)best={r,uids,score};}
  if(!best)break;fuse(s,1,best.uids,best.r.id);
 }
 for(const f of live(s,1).filter(f=>canSkill(s,1,f.uid)).sort((a,b)=>stats(b).atk-stats(a).atk)){try{useSkill(s,1,f.uid,cpuOptions(s,1,f.uid));break;}catch{}}
}
export function cpuAttack(s){
 if(s.pending)fail('対応スキルを確認してください');
 for(const a of live(s,1).sort((a,b)=>stats(b).atk-stats(a).atk))for(const d of live(s,0).sort((a,b)=>stats(a).def-stats(b).def))if(canAttack(s,1,a,d)){attack(s,1,a.uid,d.uid);return;}
 endTurn(s,1);
}
