import {deckViolations,isRepairOnly,availableDeckOwned,soulCopyLimits} from './deck-legality.js';
import catalog from '../data/soul-catalog.js';
export const soulFigures=catalog.figures;
export const soulById=new Map(soulFigures.map(f=>[f.id,f]));
export const classNames={seed:'シードソウル',middle:'ミドルソウル',mob:'MOBソウル'};
export const quotas={seed:30,middle:10,mob:5};
export const recipes=catalog.recipes;
export function validateSoulDeck(ids,owned=null,context={}){return deckViolations(ids,owned,soulById,quotas,context);}
export function ensureSoulDecks(profile){if(!Array.isArray(profile.soulDecks))profile.soulDecks=Array.from({length:5},()=>[]);profile.soulDeckSlot=Math.max(0,Math.min(4,profile.soulDeckSlot||0));return profile.soulDecks[profile.soulDeckSlot];}
export function setSoulDeck(profile,deck){const old=ensureSoulDecks(profile),context={profile},check=validateSoulDeck(deck,profile.owned,context);if(check.errors.length&&!isRepairOnly(validateSoulDeck(old,profile.owned,context),check,old,deck))throw Error(check.errors[0]);profile.soulDecks[profile.soulDeckSlot]=[...deck];}
export function prepareSoulDeck(profile,deck){const next=structuredClone(profile);setSoulDeck(next,deck);return next;}
export function autoSoulDeck(owned,context={}){
 if(context.profile)owned=availableDeckOwned(context.profile,context.slot);
 const result=[];
 for(const [k,count]of Object.entries(quotas)){
  const candidates=soulFigures.filter(f=>f.soulClass===k).sort((a,b)=>(b.atk+b.def)-(a.atk+a.def)||a.id.localeCompare(b.id));
  // Round-robin within the shared per-ID copy limits.
  let total=0;for(let copy=0;total<count;copy++){let added=false;for(const f of candidates){if(Math.min(owned[f.id]||0,soulCopyLimits[k])>copy&&total<count){result.push(f.id);total++;added=true;}}if(!added)throw Error(classNames[k]+'が'+(count-total)+'体不足しています');}
 }
 // Put a playable fusion pair first; no shuffle or hidden draw randomness.
 const seeds=result.filter(id=>soulById.get(id).soulClass==='seed');
 const reserves=result.filter(id=>soulById.get(id).soulClass!=='seed');
 const ordered=[];
 for(let round=0;round<2;round++){
  let pair=null;
  for(const r of recipes.filter(r=>r.fromClass==='seed'&&reserves.includes(r.target))){
   for(let i=0;i<seeds.length&&!pair;i++)for(let j=i+1;j<seeds.length;j++)if((matches(soulById.get(seeds[i]),r.materials[0])&&matches(soulById.get(seeds[j]),r.materials[1]))||(matches(soulById.get(seeds[j]),r.materials[0])&&matches(soulById.get(seeds[i]),r.materials[1]))){pair=[i,j];break;}
   if(pair)break;
  }
  if(!pair)break;const [i,j]=pair;ordered.push(seeds[i],seeds[j]);seeds.splice(j,1);seeds.splice(i,1);
 }
 return [...ordered,...seeds,...reserves];
}
const matches=(f,m)=>m.id?f.id===m.id:m.tag?f.tags.includes(m.tag):f.attribute===m.attribute;
export * from './soul-engine.js';
