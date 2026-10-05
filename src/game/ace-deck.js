import {soulFigures,soulById,quotas,validateSoulDeck} from './soul-battle.js';
import {fusionRecommendations,countIds} from './soul-deck-assist.js';
import {availableDeckOwned,soulCopyLimits} from './deck-legality.js';
const expand=counts=>Object.entries(counts).flatMap(([id,n])=>Array(n).fill(id));
const merge=(a,b)=>{const out={...a};for(const[id,n]of Object.entries(b))out[id]=Math.max(out[id]||0,n);return out;};
export function buildAceDeck(profile,aceIds,{slot=profile.soulDeckSlot||0}={}){
 if(aceIds.length!==5||new Set(aceIds).size!==5)throw Error('異なるフィギュアをエースとして5体選んでください');
 const owned=availableDeckOwned(profile,slot),aces=aceIds.map(id=>soulById.get(id));
 for(let i=0;i<5;i++)if(!aces[i]||aces[i].retired||!(owned[aceIds[i]]>0))throw Error((aces[i]?.name||aceIds[i])+'を所持していないか、別デッキに編成中です');
 const context={profile,slot},valid=needs=>!validateSoulDeck(expand(needs),owned,context).errors.length;
 for(const[k,n]of Object.entries(quotas)){const groups=new Map();for(const f of soulFigures.filter(f=>f.soulClass===k)){groups.set(f.id,owned[f.id]||0);}const capacity=[...groups.values()].reduce((a,n)=>a+Math.min(n,soulCopyLimits[k]),0);if(capacity<n)throw Error(({seed:'シード',middle:'ミドル',mob:'MOBソウル'})[k]+'が同名制限・別デッキ予約後に'+(n-capacity)+'体不足しています');}
 const score=f=>aces.reduce((n,a)=>n+f.tags.filter(t=>a.tags.includes(t)).length*5+(f.attribute.split('/').some(x=>a.attribute.split('/').includes(x))?4:0)+(f.role===a.role?0:1),0)+(f.atk+f.def)/1000;
 const routeCache=new Map();const routes=id=>{if(!routeCache.has(id))routeCache.set(id,fusionRecommendations(id,owned,aceIds).filter(r=>valid(r.needs)).slice(0,4));return routeCache.get(id);};
 let states=[{needs:Object.fromEntries(aceIds.map(id=>[id,1])),routes:[]}];if(!valid(states[0].needs))throw Error(validateSoulDeck(aceIds,owned,context).errors[0]);
 const stateScore=s=>Object.entries(s.needs).reduce((n,[id,qty])=>n+score(soulById.get(id))*qty,0)-expand(s.needs).length*.05;
 const prune=rows=>{const seen=new Set();return rows.sort((a,b)=>stateScore(b)-stateScore(a)).filter(s=>{const key=JSON.stringify(Object.entries(s.needs).sort());if(seen.has(key))return false;seen.add(key);return true;}).slice(0,8);};
 for(const ace of aces.filter(f=>f.soulClass!=='seed')){const candidates=routes(ace.id);if(!candidates.length)throw Error(ace.name+'の段階融合に必要な素材が、所持数・同名制限・別デッキ予約の範囲では見つかりません');states=prune(states.flatMap(s=>candidates.map(r=>({needs:merge(s.needs,r.needs),routes:[...s.routes,r]})).filter(x=>valid(x.needs))));if(!states.length)throw Error('5エースの素材ルートが45枚の階級枠に収まりません。エースの組み合わせを変えてください');}
 // Add reserves together with their full material paths, then fill remaining seeds.
 for(const kind of ['mob','middle']){const candidates=soulFigures.filter(f=>f.soulClass===kind&&owned[f.id]>0).sort((a,b)=>score(b)-score(a)||a.id.localeCompare(b.id));for(let round=0;round<quotas[kind];round++){const next=[];for(const state of states){const amount=expand(state.needs).filter(id=>soulById.get(id).soulClass===kind).length;if(amount===quotas[kind]){next.push(state);continue;}let tested=0;for(const f of candidates){if(state.needs[f.id])continue;for(const r of routes(f.id)){const needs=merge(state.needs,r.needs);if(valid(needs))next.push({needs,routes:[...state.routes,r]});}if(++tested>=48&&next.length)break;}}states=prune(next);if(!states.length)throw Error('所持素材から合法な'+({mob:'MOB',middle:'ミドル'})[kind]+'枠の候補を揃えられません。別のエースを選んでください');if(states.every(s=>expand(s.needs).filter(id=>soulById.get(id).soulClass===kind).length===quotas[kind]))break;}}
 const seeds=soulFigures.filter(f=>f.soulClass==='seed'&&owned[f.id]>0).sort((a,b)=>score(b)-score(a)||a.id.localeCompare(b.id));
 for(const state of states){const result=expand(state.needs);for(let copy=0;copy<3;copy++)for(const f of seeds){if(result.filter(id=>soulById.get(id).soulClass==='seed').length===30)break;const next=[...result,f.id];if(!validateSoulDeck(next,owned,context).errors.length)result.push(f.id);}
  const check=validateSoulDeck(result,profile.owned,context);if(check.valid){result.sort((a,b)=>['seed','middle','mob'].indexOf(soulById.get(a).soulClass)-['seed','middle','mob'].indexOf(soulById.get(b).soulClass));return {deck:result,aces:[...aceIds],routes:state.routes,warnings:['融合ルートは素材を共有する場合があります。場の状況に合わせて、どのエースを出すか選びます。'],counts:check.counts};}}
 throw Error('同名制限と融合素材を両立する45枚の候補を作れませんでした。エースを変更してください');
}
