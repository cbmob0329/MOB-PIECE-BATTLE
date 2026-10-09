// Shared policy for editing, saving, auto-building and battle entry.
export const soulDeckSize=45;
export const deckPolicy={copyKey:'id',exclusiveSlots:[0,1]};
export const soulCopyLimits={seed:3,middle:3,mob:1};
export const cardName=f=>String(f.name).normalize('NFKC').trim();
export function deckViolations(ids,owned,by,quotas,{profile=null,slot=profile?.soulDeckSlot||0,policy=deckPolicy}={}){
 const counts={seed:0,middle:0,mob:0},used={},names={},issues=[];
 for(const id of ids){const f=by.get(id);if(!f){issues.push({key:'unknown:'+id,type:'unknown',id,count:1,limit:0,message:'未対応のフィギュア：'+id});continue;}if(f.retired)issues.push({key:'retired:'+id,type:'retired',id,count:1,limit:0,message:f.name+'はBATTLE対象外です。編成から外してください'});counts[f.soulClass]++;used[id]=(used[id]||0)+1;const key=f.soulClass+':'+(policy.copyKey==='name'?cardName(f):id);names[key]??={f,count:0};names[key].count++;}
 for(const[id,n]of Object.entries(used))if(owned&&n>(owned[id]||0))issues.push({key:'owned:'+id,type:'owned',id,count:n,limit:owned[id]||0,message:by.get(id).name+'の所持数が不足しています'});
 for(const[key,{f,count}]of Object.entries(names)){const limit=soulCopyLimits[f.soulClass];if(count>limit)issues.push({key:'copies:'+key,type:'copies',id:f.id,count,limit,message:f.name+'は同名'+limit+'体までです'});}
 if(ids.length>soulDeckSize)issues.push({key:'size',type:'size',count:ids.length,limit:soulDeckSize,message:'デッキは合計45体までです'});
 const slots=policy.exclusiveSlots==='all'?Array.from({length:5},(_,i)=>i):policy.exclusiveSlots;
 if(profile&&slots.includes(slot))for(const other of slots.filter(i=>i!==slot)){const taken=new Set(profile.soulDecks?.[other]||[]);for(const id of Object.keys(used))if(taken.has(id))issues.push({key:'reserved:'+other+':'+id,type:'reserved',id,count:used[id],limit:0,slot:other,message:by.get(id).name+'はDECK '+(other+1)+'に編成中です'});}
 return {counts,count:ids.length,used,violations:issues,errors:[...new Set(issues.map(i=>i.message))],valid:!issues.length&&ids.length===soulDeckSize,missing:ids.length<soulDeckSize?[{kind:'total',count:soulDeckSize-ids.length}]:[]};
}
export function isRepairOnly(before,after,oldIds,nextIds){
 if(nextIds.length>=oldIds.length)return false;const oldCounts={};for(const id of oldIds)oldCounts[id]=(oldCounts[id]||0)+1;for(const id of nextIds)if(--oldCounts[id]<0||!Number.isFinite(oldCounts[id]))return false;
 const previous=new Map(before.violations.map(i=>[i.key,i.count-i.limit]));return after.violations.every(i=>(previous.get(i.key)||0)>=i.count-i.limit);
}
export function availableDeckOwned(profile,slot=profile.soulDeckSlot||0,policy=deckPolicy){
 const out={...profile.owned},slots=policy.exclusiveSlots==='all'?Array.from({length:5},(_,i)=>i):policy.exclusiveSlots;
 if(slots.includes(slot))for(const other of slots.filter(i=>i!==slot))for(const id of profile.soulDecks?.[other]||[])out[id]=0;return out;
}
