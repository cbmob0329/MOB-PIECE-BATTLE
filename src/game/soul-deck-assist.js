import {matchesMaterial,recipeMaterialClass} from './fusion-rules.js';
import {soulFigures,soulById,recipes,quotas,validateSoulDeck} from './soul-battle.js';
export const countIds=ids=>ids.reduce((out,id)=>(out[id]=(out[id]||0)+1,out),{});
const matches=matchesMaterial;
const sum=(a,b)=>{const out={...a};for(const [id,n]of Object.entries(b))out[id]=(out[id]||0)+n;return out;};
const expand=counts=>Object.entries(counts).flatMap(([id,n])=>Array(n).fill(id));
const valid=(needs,owned)=>!validateSoulDeck(expand(needs),owned).errors.length;

// Concrete trees account for two distinct copies, including both branches of MOB fusion.
// Keep a bounded set of candidate routes so opening a card remains responsive.
export function fusionRecommendations(target,owned,deck=[]){
 const inDeck=countIds(deck),cache=new Map(),limits={...owned,[target]:Math.max(1,owned[target]||0)};
 const score=needs=>Object.entries(needs).reduce((n,[id,qty])=>n+Math.max(0,qty-(inDeck[id]||0))*20+qty,0);
 function visit(id,path=[]){
  if(path.includes(id)||path.length>3||!soulById.has(id))return [];
  if(cache.has(id))return cache.get(id);
  const f=soulById.get(id);if(f.soulClass==='seed')return (limits[id]||0)>0?[{needs:{[id]:1},steps:[]}]:[];
  const found=[];
  for(const recipe of recipes.filter(r=>r.target===id)){
   const candidates=recipe.materials.map(m=>soulFigures.filter(f=>(limits[f.id]||0)>0&&f.soulClass===recipeMaterialClass(recipe,soulById)&&matches(f,m)).sort((a,b)=>(inDeck[b.id]||0)-(inDeck[a.id]||0)||a.id.localeCompare(b.id)).slice(0,8));
   pairs: for(const a of candidates[0])for(const b of candidates[1]){
    if(a.id===b.id&&(limits[a.id]||0)<2)continue;
    for(const left of visit(a.id,[...path,id]))for(const right of visit(b.id,[...path,id])){
     const needs=sum(sum(left.needs,right.needs),{[id]:1});if(!valid(needs,limits))continue;
     found.push({needs,steps:[...left.steps,...right.steps,{target:id,materials:[a.id,b.id],label:recipe.label,special:recipe.special}]});
     if(found.length>=12)break pairs;
     if(found.length>64){found.sort((a,b)=>score(a.needs)-score(b.needs));const keys=new Set();const keep=found.filter(r=>{const key=JSON.stringify(Object.entries(r.needs).sort());if(keys.has(key))return false;keys.add(key);return true;}).slice(0,16);found.splice(0,found.length,...keep);}
    }
   }
  }
  // Conditional successors consume a reserve slot and real drawn seed costs too.
  const predecessors=soulFigures.filter(source=>source.passive?.evolve?.target===id||source.passive?.deathReserve===id||source.soulSkill.program===172&&f.soulClass==='middle'&&f.tags.includes('24'));
  for(const source of predecessors){if(!(limits[source.id]>0))continue;for(const prior of visit(source.id,[...path,id])){const needs=sum(prior.needs,{[id]:1}),costs=[],e=source.passive?.evolve;let possible=true;for(let n=0;n<(e?.cost||0);n++){const seed=soulFigures.filter(x=>x.soulClass==='seed'&&(!e.tag||x.tags.includes(e.tag))&&(needs[x.id]||0)<Math.min(3,limits[x.id]||0)).sort((a,b)=>(inDeck[b.id]||0)-(inDeck[a.id]||0)||a.id.localeCompare(b.id)).find(x=>valid({...needs,[x.id]:(needs[x.id]||0)+1},limits));if(!seed){possible=false;break;}needs[seed.id]=(needs[seed.id]||0)+1;costs.push(seed.id);}if(possible&&valid(needs,limits))found.push({needs,steps:[...prior.steps,{target:id,materials:[source.id,...costs],kind:'evolution',label:source.soulSkill.program===172?'自身を破壊して召喚':'撃破後の条件召喚',special:false}]});}}
  const seen=new Set(),best=found.sort((a,b)=>score(a.needs)-score(b.needs)).filter(r=>{const key=JSON.stringify(Object.entries(r.needs).sort());if(seen.has(key))return false;seen.add(key);return true;}).slice(0,8);
  cache.set(id,best);return best;
 }
 return visit(target).map(r=>({...r,seeds:Object.fromEntries(Object.entries(r.needs).filter(([id])=>soulById.get(id).soulClass==='seed'))}));
}

export function addRoute(deck,needs,owned){const result=[...deck],have=countIds(deck);for(const [id,n]of Object.entries(needs))for(let i=have[id]||0;i<n;i++)result.push(id);const check=validateSoulDeck(result,owned);if(check.errors.length)throw Error(check.errors[0]);return result;}

export function planSoulDeck(deck,owned,mode){
 if(!['seeds','routes','fill'].includes(mode))throw Error('編成方法を選んでください');
 const check=validateSoulDeck(deck,owned);if(check.errors.length)throw Error(check.errors[0]);
 const targets=[...new Set(deck.filter(id=>soulById.get(id).soulClass!=='seed'))];
 if(mode!=='fill'&&!targets.length)throw Error('先に使いたいミドル・MOBをデッキへ追加してください');
 let result=mode==='fill'?[...deck]:deck.filter(id=>soulById.get(id).soulClass!=='seed');
 const warnings=[],weights={};
 for(const id of targets){
  const routes=fusionRecommendations(id,owned,result);let chosen;
  for(const route of routes){try{
   const required=mode==='routes'?route.needs:route.seeds;
   if(mode!=='routes'&&Object.entries(route.needs).some(([fid,n])=>soulById.get(fid).soulClass!=='seed'&&(countIds(result)[fid]||0)<n))continue;
   result=addRoute(result,required,owned);chosen=route;break;
  }catch{/* Try another recipe that fits the remaining slots. */}}
  if(!chosen){warnings.push(soulById.get(id).name+'：所持素材・中間ミドル・空き枠に合う融合ルート候補が見つかりません');continue;}
  for(const [fid,n]of Object.entries(chosen.seeds))weights[fid]=(weights[fid]||0)+n;
 }
 const fillClass=kind=>{
  const counts=countIds(result);let left=quotas[kind]-result.filter(id=>soulById.get(id).soulClass===kind).length;
  const candidates=soulFigures.filter(f=>f.soulClass===kind&&(owned[f.id]||0)>(counts[f.id]||0)).sort((a,b)=>(weights[b.id]||0)-(weights[a.id]||0)||(b.atk+b.def)-(a.atk+a.def)||a.id.localeCompare(b.id));
  while(left>0){let added=false;for(const f of candidates)if((counts[f.id]||0)<(owned[f.id]||0)&&left>0&&!validateSoulDeck([...result,f.id],owned).errors.length){result.push(f.id);counts[f.id]=(counts[f.id]||0)+1;left--;added=true;}if(!added)break;}
  if(left)warnings.push(({seed:'シード',middle:'ミドル',mob:'MOB'})[kind]+'の所持数が'+left+'体不足しています');
 };
 fillClass('seed');if(mode==='fill'){fillClass('middle');fillClass('mob');}
 // Put a recommended pair first only when replacing seeds. Fill mode preserves draw order.
 if(mode!=='fill')result=[...result.filter(id=>soulById.get(id).soulClass==='seed'),...result.filter(id=>soulById.get(id).soulClass!=='seed')];
 return {deck:result,warnings,counts:validateSoulDeck(result,owned).counts};
}
