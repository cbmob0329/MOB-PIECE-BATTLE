export const skillUseLimits=Object.freeze({seed:1,middle:2,mob:3});
export const usedSkills=f=>Number.isInteger(f?.skillUsesUsed)?Math.max(0,f.skillUsesUsed):(f?.skillTurn>=0?1:0);
export const usageRecord=f=>({skillUsesUsed:usedSkills(f),skillTurn:f?.skillTurn??-1,...(f?.phoenixRevived?{phoenixRevived:true}:{}),...((f?.strengthened||f?.resonanceAtk>0||f?.resonanceDef>0)?{strengthened:true,resonanceAtk:f.resonanceAtk||0,resonanceDef:f.resonanceDef||0,fusionStyle:f.fusionStyle||'legacy',fusionPartnerIds:[...(f.fusionPartnerIds||[])]}:{})});
export function storedUsage(p,zone,index){return (zone==='hand'?p.handBonuses:p.skillUsage?.[zone])?.find(r=>r.index===index&&r.id===p[zone][index]);}
export function rememberUsage(p,zone,index,source){
 if(!source)return;const list=zone==='hand'?(p.handBonuses??=[]):((p.skillUsage??={})[zone]??=[]);
 let record=list.find(r=>r.index===index);if(!record){record={id:p[zone][index],index};list.push(record);}Object.assign(record,usageRecord(source));
}
export function takeStoredCard(p,zone,index){const usage=storedUsage(p,zone,index),id=p[zone].splice(index,1)[0];const records=zone==='hand'?p.handBonuses:p.skillUsage?.[zone];if(records){const remaining=records.filter(r=>r.index!==index);for(const r of remaining)if(r.index>index)r.index--;if(zone==='hand')p.handBonuses=remaining;else p.skillUsage[zone]=remaining;}return {id,usage};}
export function putStoredCard(p,zone,id,usage){const index=p[zone].length;p[zone].push(id);rememberUsage(p,zone,index,usage);return index;}
export function moveStoredCard(p,from,index,to){const {id,usage}=takeStoredCard(p,from,index);putStoredCard(p,to,id,usage);return id;}
export function topStoredCard(p,index){const {id,usage}=takeStoredCard(p,'deck',index);for(const r of p.skillUsage?.deck||[])r.index++;p.deck.unshift(id);rememberUsage(p,'deck',0,usage);}
