import data from '../data/free-enemies.json' with {type:'json'};
import {validateSoulDeck} from './soul-battle.js';
import {soulById} from './soul-battle.js';
import {enemyFigureAllowed} from './free-enemy-policy.js';
export const freeEnemies=data;
export function freeEnemy(id){const e=data.find(x=>x.id===id);if(!e)throw Error('対戦相手が見つかりません');if(!validateSoulDeck(e.deck).valid||e.deck.some(id=>!enemyFigureAllowed(e,soulById.get(id))))throw Error('敵デッキの再検証が必要です：'+e.name);return {...e,deck:[...e.deck]};}
