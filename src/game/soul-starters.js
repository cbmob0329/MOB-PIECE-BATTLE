import templates from '../data/test-starters.json' with {type:'json'};
import {soulFigures,soulById,recipes,quotas,autoSoulDeck,setSoulDeck} from './soul-battle.js';
import {OWN_CAP} from '../data/gacha.js';
export const soulStarters=[{id:'grassland',name:'草原デッキ',tag:'41',attributes:['風','水','地']},{id:'desert',name:'砂漠デッキ',tag:'42',attributes:['闇','地','光']}];
const matches=(f,m)=>m.id?f.id===m.id:m.tag?f.tags.includes(m.tag):f.attribute===m.attribute;
export function starterDeck(id){const enemy=templates.find(e=>e.id===id);if(!enemy)throw Error('スターターを選んでください');return [...enemy.deck];}
export function applyStarter(profile,id){const deck=starterDeck(id),next=structuredClone(profile);next.owned??={};for(const fid of new Set(deck))next.owned[fid]=Math.max(next.owned[fid]||0,deck.filter(x=>x===fid).length);setSoulDeck(next,deck);Object.assign(profile,next);return deck;}
