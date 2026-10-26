import {soulById} from './soul-battle.js';
import {acquireFigure} from './inventory.js';
// Use the snapshotted opponent deck, never a global rarity pool.
export function grantTowerFigures(profile,enemy,{master=false,rng=Math.random}={}){
 const entries=[];
 for(const stage of master?['seed','middle']:['seed']){
  const pool=[...new Set(enemy.deck)].map(id=>soulById.get(id)).filter(f=>f?.soulClass===stage&&!f.pending&&!f.retired);
  if(!pool.length)continue;
  const f=pool[Math.min(pool.length-1,Math.floor(rng()*pool.length))],got=acquireFigure(profile,f);
  entries.push({id:f.id,stage,...got});
 }
 return entries;
}
