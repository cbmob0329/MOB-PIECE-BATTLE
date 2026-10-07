const flag=(f,key)=>f.effects?.findLast(e=>e.key===key)?.value;
export function targetableBySkill(f,sourceSide,ownerSide){const value=flag(f,'skillUntargetable');return !value||value==='hostile'&&sourceSide===ownerSide;}
export function affectedBySkill(f,sourceSide,ownerSide){const value=flag(f,'skillImmune');return !value||value==='hostile'&&sourceSide===ownerSide;}
