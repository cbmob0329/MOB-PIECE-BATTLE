import {masterDeckLocked,MASTER_DECK_LOCK_MESSAGE} from './master-deck-lock.js';
import {recipePairMatches} from './fusion-rules.js';
import {deckViolations,isRepairOnly,availableDeckOwned,soulCopyLimits,soulDeckSize} from './deck-legality.js';
import catalog from '../data/soul-catalog.js';
export const soulFigures=catalog.figures;
export const soulById=new Map([...soulFigures,...(catalog.archivedFigures||[])].map(f=>[f.id,f]));
export const classNames={seed:'シードソウル',middle:'ミドルソウル',mob:'MOBソウル'};
// Preferred automatic composition, not stage limits; legality requires 45 total.
export const quotas={seed:30,middle:10,mob:5};
export const recipes=catalog.recipes;
export function validateSoulDeck(ids,owned=null,context={}){return deckViolations(ids,owned,soulById,quotas,context);}
export function ensureSoulDecks(profile){
 if(!Array.isArray(profile.soulDecks))profile.soulDecks=[];
 for(let i=0;i<5;i++)if(!Array.isArray(profile.soulDecks[i]))profile.soulDecks[i]=[];
 profile.soulDeckSlot=Math.max(0,Math.min(4,Math.trunc(Number(profile.soulDeckSlot)||0)));
 return profile.soulDecks[profile.soulDeckSlot];
}
// Use the same validation for the add button and the save operation. A card's
// fusion recipe is not an ownership or deck-editing requirement.
export function soulDeckAddStatus(profile,id){
 const ids=ensureSoulDecks(profile),check=validateSoulDeck([...ids,id],profile.owned,{profile});
 const own=check.violations.filter(v=>v.id===id||v.type==='quota'&&v.key==='quota:'+soulById.get(id)?.soulClass);
 const reasons=(own.length?own:check.violations).map(v=>v.message);
 return {allowed:check.errors.length===0,reasons:[...new Set(reasons)]};
}
export function setSoulDeck(profile,deck){if(masterDeckLocked(profile))throw Error(MASTER_DECK_LOCK_MESSAGE);const old=ensureSoulDecks(profile),context={profile},check=validateSoulDeck(deck,profile.owned,context);if(check.errors.length&&!isRepairOnly(validateSoulDeck(old,profile.owned,context),check,old,deck))throw Error(check.errors[0]);profile.soulDecks[profile.soulDeckSlot]=[...deck];}
export function prepareSoulDeck(profile,deck){const next=structuredClone(profile);setSoulDeck(next,deck);return next;}
export function autoSoulDeck(owned,context={}){
 if(context.profile)owned=availableDeckOwned(context.profile,context.slot);
 const result=[];
 for(const [k,count]of Object.entries(quotas)){
  const candidates=soulFigures.filter(f=>!f.retired&&f.soulClass===k).sort((a,b)=>(b.atk+b.def)-(a.atk+a.def)||a.id.localeCompare(b.id));
  // Round-robin within the shared per-ID copy limits.
  let total=0;for(let copy=0;total<count;copy++){let added=false;for(const f of candidates){if(Math.min(owned[f.id]||0,soulCopyLimits[k])>copy&&total<count){result.push(f.id);total++;added=true;}}if(!added)break;}
 }
 // Stage counts are preferences. Fill unused slots from all legally owned cards.
 for(const kind of ['seed','middle','mob'])for(let copy=0;copy<soulCopyLimits[kind]&&result.length<soulDeckSize;copy++)for(const f of soulFigures.filter(f=>!f.retired&&f.soulClass===kind).sort((a,b)=>(b.atk+b.def)-(a.atk+a.def)||a.id.localeCompare(b.id))){
  if(result.length===soulDeckSize)break;
  if(result.filter(id=>id===f.id).length<Math.min(owned[f.id]||0,soulCopyLimits[kind]))result.push(f.id);
 }
 if(result.length<soulDeckSize)throw Error('合計45体まであと'+(soulDeckSize-result.length)+'体不足しています');
 // Put a playable fusion pair first; no shuffle or hidden draw randomness.
 const seeds=result.filter(id=>soulById.get(id).soulClass==='seed');
 const reserves=result.filter(id=>soulById.get(id).soulClass!=='seed');
 const ordered=[];
 for(let round=0;round<2;round++){
  let pair=null;
  for(const r of recipes.filter(r=>r.fromClass==='seed'&&reserves.includes(r.target))){
   for(let i=0;i<seeds.length&&!pair;i++)for(let j=i+1;j<seeds.length;j++)if(recipePairMatches(r,[soulById.get(seeds[i]),soulById.get(seeds[j])])){pair=[i,j];break;}
   if(pair)break;
  }
  if(!pair)break;const [i,j]=pair;ordered.push(seeds[i],seeds[j]);seeds.splice(j,1);seeds.splice(i,1);
 }
 return [...ordered,...seeds,...reserves];
}
export * from './soul-engine.js';
