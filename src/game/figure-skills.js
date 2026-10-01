import adjacencyData from '../data/quest-adjacency.js?v=7.3.0';
const statKeys={HP:'maxHp',LIFE:'maxHp',ATK:'atk',DEF:'def',SPD:'spd'};
const tagRows=tags=>tags instanceof Map?[...tags.values()]:tags;
// MOB QUEST v218 catalog import supersedes the older v174 adjacency definitions.
export function adjacencyPairs(hand,byId,tags){
 const all=tagRows(tags),out=[];
 for(let i=0;i<hand.length-1;i++){
  const a=byId.get(hand[i]),b=byId.get(hand[i+1]);
  for(const id of new Set(a?.adjacencyTags||[])){
   if(!b?.adjacencyTags?.includes(id))continue;
   const data=adjacencyData.find(x=>x.id===id);if(!data)continue;
   const stats={};for(const m of data.piece.matchAll(/(ATK|DEF|SPD|HP)\+(\d+)%/g))stats[statKeys[m[1]]]=+m[2]/100;
   const aura=data.piece.match(/このタグ発生時、(.+?)(?:の)?タグを持つすべてのフィギュアの全ステータスを(\d+)%/);
   out.push({...data,left:i,right:i+1,stats,auraTag:aura?all.find(t=>t.name===aura[1].replace(/の$/,''))?.id:null,aura:aura?+aura[2]/100:0});
  }
 }
 return out;
}
export function applyAdjacency(rows,hand,byId,tags){
 const pairs=adjacencyPairs(hand,byId,tags),bonuses=rows.map(()=>({maxHp:0,atk:0,def:0,spd:0}));
 for(const pair of pairs){
  for(const i of [pair.left,pair.right])for(const [key,value] of Object.entries(pair.stats))bonuses[i][key]+=value;
  for(let i=0;i<rows.length;i++)if(pair.auraTag&&rows[i].f?.tags?.includes(pair.auraTag))for(const key of Object.keys(bonuses[i]))bonuses[i][key]+=pair.aura;
 }
 rows.forEach((r,i)=>{for(const [key,value] of Object.entries(bonuses[i]))r[key]=Math.max(1,Math.round(r[key]*(1+value)));r.hp=r.maxHp;});
 return rows;
}
function soulTags(hand,byId,tags){
 const counts={};for(const id of hand)for(const tag of byId.get(id)?.tags||[])counts[tag]=(counts[tag]||0)+1;
 return tagRows(tags).filter(t=>counts[t.id]>=2).map(t=>({id:t.id,text:(counts[t.id]>=3?t.questPieceThree:t.questPieceTwo)||''}));
}
export function soulSpec(f,hand,byId,tags){
 const active=soulTags(hand,byId,tags);let count=new Set(f?.tags||[]).size,boost=0;
 for(const t of active){
  if(t.id!=='23'||f?.tags?.includes('23'))count+=+(t.text.match(/SOUL獲得量\+(\d+)/)?.[1]||0);
  boost+=+(t.text.match(/フィギュアスキルの数値効果\+(\d+)%/)?.[1]||0)/100;
 }
 count=Math.min(10,count);const tier=count>=10?10:count>=5?5:1,skill=f?.pieceSoul?.[tier];
 return {count,tier,boost,name:skill?.name||f?.soul?.name,text:skill?.text?.replace(/(\d+(?:\.\d+)?)%/g,(_,n)=>Number((+n*(1+boost)).toFixed(2))+'%')||''};
}
export function eligibleSouls(rows,used=[]){
 const seen=new Set(used);return rows.filter(r=>{if(r.hp<=0||seen.has(r.id)||!r.f?.soul||!r.f?.pieceSoul)return false;seen.add(r.id);return true;});
}
// v218 targets retain scope across clauses; v220 expands shared-stat suffixes.
export function soulClauses(text){
 const shared=/((?:HP|LIFE|ATK|DEF|SPD)(?:[と・](?:HP|LIFE|ATK|DEF|SPD))+)(を(?:\d+ターンの間)?\d+(?:\.\d+)?%(?:アップ|ダウン)(?:する|させる)?)/g;
 const parts=String(text).normalize('NFKC').replace(/全ステータス/g,'HPとATKとDEFとSPD').replace(shared,(_,names,suffix)=>names.split(/[と・]/).map(n=>n+suffix).join('、')).replace(/さらに|攻撃後、?/g,'').replace(/%・/g,'% & ').split(/[。、]|し、|させ、|&/).map(s=>s.trim()).filter(Boolean);
 return parts.map((x,i)=>{if(/\d+%$/.test(x)){const next=parts.slice(i+1).find(p=>/アップ|ダウン/.test(p));if(next)x+=next.includes('ダウン')?'ダウン':'アップ';}return x;});
}
export function applySoulText(actor,own,enemies,text,ownCenter=2,enemyCenter=2){
 let targets=own;const changes=[];
 for(const clause of soulClauses(text)){
  if(/自分/.test(clause))targets=[actor];
  else if(/HPが最も低い味方/.test(clause))targets=[...own].filter(r=>r.hp>0).sort((a,b)=>a.hp/a.maxHp-b.hp/b.maxHp).slice(0,1);
  else if(/味方全体/.test(clause))targets=own.filter(r=>r.hp>0);
  else if(/センター/.test(clause))targets=[/敵|相手/.test(clause)?enemies[enemyCenter]:own[ownCenter]].filter(Boolean);
  else if(/敵全体/.test(clause))targets=enemies.filter(r=>r.hp>0);
  else if(/敵単体|正面の敵|敵1体/.test(clause))targets=enemies.filter(r=>r.hp>0).slice(0,1);
  const down=/ダウン|低下|減少/.test(clause),up=/アップ|上昇|増加/.test(clause);
  const m=clause.match(/((?:(?:HP|LIFE|ATK|DEF|SPD)(?:と|・|、)?)+)(?:を|が|の)?(?:\d+ターンの間)?\s*(\d+(?:\.\d+)?)%/);
  if(!m||!up&&!down)continue;
  for(const code of m[1].match(/HP|LIFE|ATK|DEF|SPD/g)||[])for(const r of targets){
   const key=statKeys[code],value=+m[2]/100*(down?-1:1),before=r[key];
   if(key==='maxHp'&&down)r.hp=Math.max(0,r.hp-Math.round(r.maxHp*-value));
   else {r[key]=Math.max(1,Math.round(before*(1+value)));if(key==='maxHp')r.hp=Math.max(0,Math.round(r.hp/before*r.maxHp));}
   changes.push({id:r.id,key,before,after:r[key],hp:r.hp});
  }
 }
 return changes;
}
export function activateSouls(match,side,selected,own,enemies,hand,byId,tags){
 match.soulUsed??={player:[],cpu:[]};const allowed=eligibleSouls(own,match.soulUsed[side]),events=[];
 for(const actor of selected.filter(r=>allowed.includes(r)).slice(0,2)){
  if(match.soulUsed[side].includes(actor.id))continue;
  const spec=soulSpec(actor.f,hand,byId,tags);if(!spec.text)continue;
  match.soulUsed[side].push(actor.id);
  events.push({id:actor.id,side,...spec,changes:applySoulText(actor,own,enemies,spec.text,side==='player'?2:match.cCenter,side==='player'?match.cCenter:2)});
 }
 return events;
}
