import draft from './oct06-draft.json' with {type:'json'};
const plans={
 '01':{heal:20,target:'attributeAllies',atk:20,duration:'persistent'},
 '02':{heal:20,target:'attributeAllies',atk:20,duration:'persistent'},
 '03':{guardAlly:30},'16':{passive:true},
 '18':{heal:20,target:'attributeAllies',def:20,duration:'persistent'},
 '190':{target:'enemies',filterTag:'09',atk:-30,def:-30,duration:'persistent'},
 '200':{discardEnemyHand:true},'129':{target:'enemy',lastAttack:true},
 '146':{target:'enemies',def:-20,duration:'persistent'},
 '156':{fusionBonus:{atk:20,def:20}},'202':{attacks:4},
 '160':{summonLoneReserve:{class:'middle',tag:'41'}},
 '162':{target:'enemy',turnPoison:20},'164':{taunt:true},
 '169':{attacks:3,ramp:30},
 '170':{target:'enemy',def:-40,skillLock:true,fusionLock:true,duration:'next-opponent'},
 '218':{target:'enemies',def:-30,duration:'persistent',currentSkillLock:true},
 '219':{attackSkillLock:true},
 'mq:eventfig/23':{target:'allies',def:30,duration:'persistent'},
 'mq:eventfig/33':{graveTagBuff:{tag:'18',atk:20,def:20}},
 'mq:eventfig/40':{evadeTurn:true},'NS2_055':{reverseBuffs:true}
};
const passives={
 '16':{universalFusion:true},'190':{deathReserve:'200'},'200':{skillDestructionImmune:true},
 '129':{hurtGrowth:20},'146':{aura:{attributes:['火','水'],atk:20,def:20}},
 '156':{combatUnlessAttribute:'火',combatAtk:30},'202':{attackGrowth:{atk:10,def:10}},
 '160':{combatUnlessTag:'50',combatAtk:30},'162':{fieldScale:{tag:'42',atk:20,def:20}},
 '164':{firstAttackGuard:true},'169':{deathGraveAttribute:'火',excludeSelfRevive:true},
 '170':{attackAura:{tag:'54',limit:2}},'218':{aura:{attributes:['闇'],excludeSelf:true,atk:30}},
 '219':{fieldGraveScale:{attribute:'水',atk:20,def:20}},
 'mq:eventfig/23':{phoenixOnce:true,reviveHeal:50},'mq:eventfig/33':{fieldScale:{tag:'18',atk:20,def:20}},
 'mq:eventfig/40':{ownTurnGrowth:20},'NS2_055':{aura:{tags:['specified-sweets','18'],def:30}}
};
export function applyOct06Draft(figures,originalRecipes){
 const by=new Map(figures.map(f=>[f.id,f]));let recipes=[...originalRecipes];
 for(const change of draft.changes){const f=by.get(change.id);if(!f)throw Error('Unknown draft ID '+change.id);const e=change.edited;
  for(const key of change.fields)if(['soulClass','rarity','attribute','atk','def','name','attackType','role'].includes(key))f[key]=e[key];
  if(change.fields.includes('skill')){
   const timing=change.id==='16'?'passive':change.id==='03'||change.id==='mq:eventfig/40'?'attack-response':change.id==='NS2_055'?'skill-response':'own-main';
   const notes=change.id==='16'?'（片方のみ代用可。素材の段階と同キャラ強化の制限は守る。）':change.id==='mq:eventfig/23'?'（同じ個体につき1戦1回。別の蘇生でも自動復活権は戻らない。）':change.id==='mq:eventfig/40'?'（成長は自分ターン開始時。）':change.id==='169'?'（自分自身は蘇生対象外。）':'';
   f.soulSkill={...f.soulSkill,name:e.skill.name,description:e.skill.description+notes,effect:e.skill.description+notes,sourceText:e.skill.description,timing,timingLabel:timing==='passive'?'常時':timing==='attack-response'?'相手攻撃宣言時':timing==='skill-response'?'相手スキル発動時':'自分メイン',runtimePlan:plans[change.id]};
   f.passive={...(f.passive||{}),...(passives[change.id]||{})};if(change.id==='200')delete f.passive.summonGuard;
  }
  if(change.fields.includes('summon')){recipes=recipes.filter(r=>r.target!==f.id);recipes.push(...e.summon.recipes.map((r,i)=>({...r,id:'oct06-draft-'+f.id.replaceAll('/','-')+'-'+i,materials:r.materials.map(m=>({...m,...(m.attribute?{attribute:m.attribute.replace(/属性$/,'')}:{})})),basis:'2026-10-06 latest draft explicit change'})));}
 }
 return recipes;
}
