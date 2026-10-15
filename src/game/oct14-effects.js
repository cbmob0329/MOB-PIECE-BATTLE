import {takeStoredCard,putStoredCard,moveStoredCard} from './skill-budget.js';
export function applyOct14(s,side,f,q,o,c){
 const {live,info,effect,stats,remove,draw,loseLife,finish,emit}=c,p=s.players[side],enemy=s.players[1-side];
 const recycle=i=>{const id=p.grave[i],zone=info({id}).soulClass==='seed'?'deck':'reserve';moveStoredCard(p,'grave',i,zone);const k=p.destroyed.indexOf(id);if(k>=0)p.destroyed.splice(k,1);};
 switch(q.oct14){
 case 'lockAllAttackers':for(const t of live(s,1-side))effect(t,'skipBattle',true,s.turn);break;
 case 'handRefresh':while(p.hand.length)moveStoredCard(p,'hand',0,'deck');const cards=[];while(p.deck.length)cards.push(takeStoredCard(p,'deck',0));for(let i=cards.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[cards[i],cards[j]]=[cards[j],cards[i]];}for(const card of cards)putStoredCard(p,'deck',card.id,card.usage);s.drawBatch={side,ids:[],discard:false};for(let i=0;i<5&&s.winner===null;i++)draw(s,side);finishDrawBatch(s);break;
 case 'destroyLowDef':{let n=0;for(const t of [...live(s,1-side)])if(stats(t).def<=q.threshold&&c.affectedBySkill(t,side,1-side)){remove(s,1-side,t,true,'skill',{side,uid:f.uid});if(!live(s,1-side).some(x=>x.uid===t.uid))n++;}p.life=Math.min(400,p.life+n*q.healPer);break;}
 case 'swapSelectedStat':{const a=live(s,side).find(t=>t.uid===Number(o.allyUid)),b=live(s,1-side).find(t=>t.uid===Number(o.targetUid));if(a&&b&&c.affectedBySkill(a,side,side)&&c.affectedBySkill(b,side,1-side)){const av=stats(a)[q.stat],bv=stats(b)[q.stat];effect(a,q.stat+'Set',bv,s.turn);effect(b,q.stat+'Set',av,s.turn);}break;}
 case 'selfEnemySwapDef':{const a=f.handOrigin?live(s,side).find(t=>t.uid===Number(o.allyUid)):f,b=live(s,1-side).find(t=>t.uid===Number(o.targetUid));if(a&&b&&c.affectedBySkill(b,side,1-side)){const av=stats(a).def,bv=stats(b).def;effect(a,'defSet',bv,s.turn);effect(b,'defSet',av,s.turn);}break;}
 case 'pairedBuff':{const a=live(s,side).find(t=>t.uid===Number(o.allyUid)),b=live(s,1-side).find(t=>t.uid===Number(o.targetUid));if(a)effect(a,'atk',q.allyAtk,s.turn);if(b&&c.affectedBySkill(b,side,1-side))effect(b,'def',q.enemyDef,s.turn);break;}
 case 'recycleSeeds':{const indices=p.grave.map((id,i)=>i).filter(i=>info({id:p.grave[i]}).soulClass==='seed'&&String(o['recycle'+i])==='1').sort((a,b)=>b-a);for(const i of indices)recycle(i);const t=f.handOrigin?live(s,side).find(t=>t.uid===Number(o.allyUid)):f;if(t)effect(t,'atk',indices.length*q.atkPer,s.turn);break;}
 case 'bloodUntilEnd':effect(f,'atk',enemy.grave.length*10,s.turn);effect(f,'destroyAtEnd',true,s.turn);break;
 case 'randomDiscardBoth':{let n=0;for(const owner of [p,enemy])if(owner.hand.length){const card=takeStoredCard(owner,'hand',Math.floor(Math.random()*owner.hand.length));putStoredCard(owner,'grave',card.id,card.usage);n++;}const t=f.handOrigin?live(s,side).find(t=>t.uid===Number(o.allyUid)):f;if(t){effect(t,'atk',n*20,Infinity);effect(t,'def',n*20,Infinity);}break;}
 case 'temporaryDraw':s.drawBatch={side,ids:[],discard:false};for(let i=0;i<3&&s.winner===null;i++){const before=p.hand.length;draw(s,side);if(p.hand.length>before){const id=p.hand.at(-1);p.handBonuses??=[];const existing=p.handBonuses.find(b=>b.index===p.hand.length-1);if(existing)existing.expiresHandTurn=s.turn;else p.handBonuses.push({id,index:p.hand.length-1,expiresHandTurn:s.turn});}}finishDrawBatch(s);break;
 case 'lockOtherAttackers':for(const t of live(s,1-side))if(t.uid!==o.triggerUid)effect(t,'skipBattle',true,s.turn);break;
 case 'forceAttacks':enemy.teamEffects.push({key:'mustAttack',value:true,starts:s.turn+1,until:s.turn+1});break;
 case 'drawToFive':if(p.hand.length<=3){const count=5-p.hand.length;s.drawBatch={side,ids:[],discard:false};for(let i=0;i<count&&s.winner===null;i++)draw(s,side);finishDrawBatch(s);}break;
 case 'discardHeal':{let n=0;while(p.hand.length){const card=takeStoredCard(p,'hand',0);putStoredCard(p,'grave',card.id,card.usage);n++;}p.life=Math.min(400,p.life+n*q.healPer);break;}
 case 'randomRecycle':for(let i=0;i<q.count&&p.grave.length;i++)recycle(Math.floor(Math.random()*p.grave.length));break;
 case 'mutualDestroyReturn':{const target=live(s,1-side).find(t=>t.uid===o.triggerUid);if(target&&c.affectedBySkill(target,side,1-side))remove(s,1-side,target,true,'skill',{side,uid:f.uid});remove(s,side,f,true,'skill',{side,uid:f.uid});const i=p.grave.lastIndexOf(f.id);if(i>=0)recycle(i);break;}
 case 'swapAllStats':{const targets=s.players.flatMap((p,owner)=>p.field.filter(Boolean).filter(t=>c.affectedBySkill(t,side,owner))).map(t=>[t,stats(t)]);for(const [t,v]of targets){effect(t,'atkSet',v.def,s.turn);effect(t,'defSet',v.atk,s.turn);}break;}
 case 'destroyAll':{let n=0;for(let owner=0;owner<2;owner++)for(const t of [...live(s,owner)]){if(!c.affectedBySkill(t,side,owner))continue;remove(s,owner,t,true,'skill',{side,uid:f.uid});if(!live(s,owner).some(x=>x.uid===t.uid))n++;}loseLife(s,1-side,n*q.damagePer);emit(s,'hit',{side,id:f.id,damage:n*q.damagePer,life:enemy.life});if(enemy.life===0)finish(s,side,'スキルでライフ0');break;}
 }
}
export function oct14Death(s,side,f,c){const p=s.players[side],q=c.passive(f);
 if(q.deathEndBattle&&s.phase==='battle')s.endBattleAfterActions=true;
 if(q.deathRecycleSeeds){for(let i=p.grave.length-1;i>=0;i--){const id=p.grave[i];if(id!==f.id&&c.info({id}).soulClass!=='seed')continue;moveStoredCard(p,'grave',i,c.info({id}).soulClass==='seed'?'deck':'reserve');const n=p.destroyed.indexOf(id);if(n>=0)p.destroyed.splice(n,1);}}
 if(q.banishAfterRevive&&f.phoenixRevived){const i=p.grave.lastIndexOf(f.id);if(i>=0){const card=takeStoredCard(p,'grave',i);p.banished??=[];p.banished.push(card.id);const n=p.destroyed.lastIndexOf(card.id);if(n>=0)p.destroyed.splice(n,1);}}
}
export function oct14Event(s,e,by){for(let side=0;side<2;side++)for(const f of s.players[side].field.filter(Boolean)){const q=f.passiveLost?{}:by.get(f.id)?.passive||{};
 if(e.type==='draw'&&q.cappedDrawGrowth){const n=Math.min(q.cappedDrawGrowth.step,q.cappedDrawGrowth.cap-(f.cappedDrawGrowth||0));f.cappedDrawGrowth=(f.cappedDrawGrowth||0)+n;f.permanentAtk+=n;f.permanentDef+=n;}
 if(e.type==='attack'&&e.side!==side){f.permanentAtk+=q.enemyAttackGrowth||0;const growth=q.attackedGrowth||f.effects.find(e=>e.key==='attackedGrowthTurn')?.value;if(e.targetUid===f.uid&&growth){f.permanentAtk+=growth.atk||0;f.permanentDef+=growth.def||0;}}
 if(e.type==='attack'&&e.side===side&&e.uid===f.uid){const g=f.effects.find(e=>e.key==='attackTeamGrowth')?.value;if(g)for(const t of s.players[side].field.filter(Boolean))if(g.tags.some(tag=>by.get(t.id).tags.includes(tag)))t.permanentAtk+=g.atk;}
 if(e.type==='defeat'&&e.side===side&&q.allyDeathGrowth){f.permanentAtk+=q.allyDeathGrowth.atk||0;f.permanentDef+=q.allyDeathGrowth.def||0;}
 if(e.type==='draw'&&e.side!==side&&q.enemyDrawDiscardBatch){const p=s.players[e.side],batch=s.drawBatch;if(batch){batch.discard=true;batch.ids.push(e.id);}else{const index=p.hand.lastIndexOf(e.id);if(index>=0){const card=takeStoredCard(p,'hand',index);putStoredCard(p,'grave',card.id,card.usage);}}}
}const max=Math.min(99,...s.players.flatMap(p=>p.field.filter(Boolean)).filter(f=>!f.passiveLost).map(f=>by.get(f.id)?.passive?.handMax||99));if(max<99)for(const p of s.players)while(p.hand.length>max){const card=takeStoredCard(p,'hand',p.hand.length-1);putStoredCard(p,'grave',card.id,card.usage);}}
export function finishDrawBatch(s){const batch=s.drawBatch;delete s.drawBatch;if(!batch?.discard||!batch.ids.length)return;const p=s.players[batch.side],id=batch.ids[Math.floor(Math.random()*batch.ids.length)],i=p.hand.lastIndexOf(id);if(i>=0){const c=takeStoredCard(p,'hand',i);putStoredCard(p,'grave',c.id,c.usage);}}

