const ownEffects=['atk','def','attacks','ramp','killChain','firstKillChain','killDraw','eachTarget','laterAtk','killBreak','pierceGuard','ignoreDef','damageBonus','wildAttribute','survive','taunt','attackSkillLock','graveTagBuff'];
export function handPlan(plan,timing){const q={...plan};
 if(q.returnSelf){delete q.returnSelf;if(timing==='defeat-response')q.rescueTarget=true;if(q.replaceSeed){delete q.replaceSeed;q.draw=1;}}
 if(q.redirectSelf)delete q.redirectSelf;
 if(q.redirectSkill){delete q.redirectSkill;q.cancelSkill=true;}
 if(!q.target&&ownEffects.some(k=>q[k]))q.target='ally';
 if(q.casterEach||q.casterDamage)q.supportCaster=true;
 return q;
}
export function handSkillDescription(f){if(f.soulSkill.runtimePlan)return f.soulSkill.description+"（手札から発動すると、そのカードを墓地へ送る。パッシブは場でのみ有効。）";const t=f.soulSkill.timing,p=f.soulSkill.program;
 if(p>=112)return f.soulSkill.description+'（手札・場から同じ対象と条件で発動。成立した手札は墓地へ。）';
 if(t==='defeat-response')return '撃破される味方を手札へ戻します。'+(p===93?'その味方は次に召喚した時DEF+30。':'')+'差分ライフダメージは通常どおりです。';
 if(p===2)return 'シードデッキから1体ドローします。';
 if(p===14)return '相手のソウルスキルを無効にします。';
 if(p===103||p===105)return f.soulSkill.description.replaceAll('このフィギュアと','発動元の手札と');
 let text=f.soulSkill.description.replaceAll('このフィギュアを手札へ戻し、','').replaceAll('攻撃対象をこのフィギュアへ変更し、','攻撃される味方を守り、').replaceAll('このフィギュアを対象にした攻撃','味方を対象にした攻撃').replaceAll('このフィギュアが攻撃対象になった時、','味方が攻撃対象になった時、').replaceAll('このフィギュア','選んだ味方');
 if(t==='attack-response')return text;
 return text+'（自身に付く強化は、場の味方1体を選んで付与します。）';
}
