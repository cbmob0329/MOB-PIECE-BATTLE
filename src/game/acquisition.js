import {release} from './initial-release.js';
import {familyIds} from './family-collection.js';
import {elementIds} from './element-collection.js';
export function acquisitionText(id){
 const routes=[];
 if(familyIds.has(id))routes.push('図鑑の4家族24種無料受け取り');
 if(elementIds.has(id))routes.push('図鑑の54種無料受け取り');
 const banners=release.banners.filter(b=>b.figureIds.includes(id));
 if(banners.length)routes.push('ガチャ：'+banners.map(b=>b.name).join(' / '));
 const starters=release.starters.filter(s=>s.deck.includes(id));
 if(starters.length)routes.push('選択スターター：'+starters.map(s=>s.name).join(' / '));
 return routes.join(' ・ ')||'既存コレクション・所持品を保持';
}
