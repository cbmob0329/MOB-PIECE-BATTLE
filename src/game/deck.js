export const RULES = Object.freeze({deckSize:25,maxCost:80,handSize:5,exchangesPerBattle:1,winsToMatch:2,centerIndex:2,duplicateCaps:Object.freeze({R:3,SR:3,SSR:2,UR:2,MOB:1}),versions:Object.freeze({stats:115,modes:132,presentation:133,tempo:136})});
// A draft validator. Ownership must additionally be supplied before a playable deck is accepted.
export function validateDeck(ids, byId, owned = null) {
 const errors=[]; const counts={}; let cost=0;
 for(const id of ids){const f=byId.get(id);if(!f){errors.push('不明なフィギュア');continue;} if(f.pending) errors.push('未公開フィギュアは編成できません'); cost+=f.mobPiece.cost;counts[id]=(counts[id]||0)+1;if(counts[id]>(RULES.duplicateCaps[f.rarity]||1))errors.push(`${f.name}の重複上限です`);if(owned && counts[id]>(owned[id]||0))errors.push(`${f.name}の所持数が不足しています`);}
 if(ids.length>25)errors.push('編成は25体までです'); if(cost>80)errors.push('TOTAL COSTは80までです');
 return {cost,count:ids.length,errors:[...new Set(errors)],valid:ids.length===25&&errors.length===0};
}


// 所持フィギュアだけから、COST80・重複上限・所持数を守って25体を自動編成する。
// 高レア固定ではなく、MOB PIECEの総合力とCOST効率を合わせて評価する。
export function autoBuildDeck(figures, owned = {}) {
 const candidates=[];
 for(const f of figures||[]){
  if(!f||f.pending||!f.mobPiece)continue;
  const own=Math.max(0,Math.trunc(Number(owned[f.sourceId]||0)));
  const cap=Math.min(own,RULES.duplicateCaps[f.rarity]||1);
  if(cap<=0)continue;
  const s=f.mobPiece;
  const power=Number(s.attack||0)+Number(s.defense||0)*.78+Number(s.hp||0)*.22+Number(s.speed||0)*.42;
  const cost=Math.max(1,Number(s.cost||1));
  // 強さを主軸にしつつ、COST効率も少し加点。
  const score=power+(power/cost)*.20;
  for(let i=0;i<cap;i++)candidates.push({id:f.sourceId,cost,score,rarity:f.rarity});
 }
 if(candidates.length<RULES.deckSize)return {deck:[],error:`所持フィギュアが${RULES.deckSize}体分必要です`};
 candidates.sort((a,b)=>b.score-a.score||a.cost-b.cost);
 const chosen=[];let cost=0;
 while(chosen.length<RULES.deckSize){
  const remain=RULES.deckSize-chosen.length-1;
  // 残り枠を最低COSTで埋められる余地を残しながら最強候補を選ぶ。
  const remainingCosts=candidates.map(x=>x.cost).sort((a,b)=>a-b);
  const minReserve=remainingCosts.slice(0,remain).reduce((n,v)=>n+v,0);
  const idx=candidates.findIndex(x=>cost+x.cost+minReserve<=RULES.maxCost);
  if(idx<0)return {deck:[],error:'所持フィギュアではCOST80以内に25体を自動編成できません'};
  const [pick]=candidates.splice(idx,1);chosen.push(pick.id);cost+=pick.cost;
 }
 return {deck:chosen,cost,error:null};
}
