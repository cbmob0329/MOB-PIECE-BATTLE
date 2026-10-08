import {towerShopItems} from '../data/tower-shop.js';
import {towerBanners,towerStarters} from '../data/tower.js';
export function acquisitionText(id){const routes=[];if(towerShopItems.some(i=>i.figureId===id))routes.push('タワーショップ（固定販売）');const banners=towerBanners.filter(b=>b.figureIds.includes(id));if(banners.length)routes.push('ガチャ：'+banners.map(b=>b.name+(b.requiresClear?'（草原クリア）':'')).join(' / '));const starters=towerStarters.filter(s=>s.deck.includes(id));if(starters.length)routes.push('支給スターター：'+starters.map(s=>s.name).join(' / '));return routes.join(' ・ ')||'既存所持品を保持・今後の報酬';}
