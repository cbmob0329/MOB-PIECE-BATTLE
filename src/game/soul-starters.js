import {soulFigures,soulById,recipes,quotas,autoSoulDeck,setSoulDeck} from './soul-battle.js';
import {OWN_CAP} from '../data/gacha.js';
export const soulStarters=[{id:'grassland',name:'草原デッキ',tag:'41',attributes:['風','水','地']},{id:'desert',name:'砂漠デッキ',tag:'42',attributes:['闇','地','光']}];
const matches=(f,m)=>m.id?f.id===m.id:m.tag?f.tags.includes(m.tag):f.attribute===m.attribute;
export function starterDeck(id){
 const theme=soulStarters.find(t=>t.id===id);if(!theme)throw Error('スターターデッキを選んでください');
 const selected=[];
 for(const [kind,count]of Object.entries(quotas)){
  const lower=selected.map(id=>soulById.get(id));
  const reachable=f=>kind==='seed'||recipes.some(r=>r.target===f.id&&lower.some((a,i)=>lower.some((b,j)=>i!==j&&(r.special||a.soulClass===r.fromClass&&b.soulClass===r.fromClass)&&matches(a,r.materials[0])&&matches(b,r.materials[1]))));
  const score=f=>Number(f.tags.includes(theme.tag))*100+Number(theme.attributes.includes(f.attribute))*10;
  const pool=soulFigures.filter(f=>f.soulClass===kind&&reachable(f)).sort((a,b)=>score(b)-score(a)||a.id.localeCompare(b.id,undefined,{numeric:true}));
  // Favor the theme, then include compatible support pieces to complete all 45 slots.
  const chosen=pool.slice(0,Math.ceil(count/2));let n=0;
  for(let copy=0;n<count;copy++){let added=false;for(const f of chosen){if(copy<OWN_CAP[f.rarity]&&n<count){selected.push(f.id);n++;added=true;}}if(!added)break;}
  if(n<count){for(const f of pool){const used=selected.filter(id=>id===f.id).length;for(let i=used;i<OWN_CAP[f.rarity]&&n<count;i++){selected.push(f.id);n++;}}}
  if(n!==count)throw Error('スターターデッキを構成できません');
 }
 const owned={};for(const id of selected)owned[id]=(owned[id]||0)+1;
 return autoSoulDeck(owned);
}
export function applyStarter(profile,id){const deck=starterDeck(id);profile.owned??={};for(const fid of new Set(deck))profile.owned[fid]=Math.max(profile.owned[fid]||0,deck.filter(x=>x===fid).length);setSoulDeck(profile,deck);return deck;}
