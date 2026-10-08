import {towerShopItems} from '../data/tower-shop.js';
import {soulById} from './soul-battle.js';
import {OWN_CAP} from '../data/gacha.js';
export const shopPurchaseCount=(profile,id)=>Math.max(0,Math.trunc(Number(profile.towerShop?.purchases?.[id])||0));
export function shopUnavailable(profile,item){
 if(!item)return '商品が見つかりません';
 if(item.requiresTower&&!profile.towerCampaign?.regions?.[item.requiresTower]&&!profile.towerProgress?.cleared?.includes(5))return '砂漠タワー到達で解放';
 if(shopPurchaseCount(profile,item.id)>=item.limit)return '購入済み';
 if(item.kind==='cube'&&profile.ownedDeckCubes?.includes(item.cubeId))return '所持済み';
 if(item.kind==='figure'){const f=soulById.get(item.figureId);if(!f||f.retired)return '販売対象外';if((profile.owned?.[f.id]||0)>=Math.min(3,OWN_CAP[f.rarity]))return '必要枚数を所持済み';}
 const currency=item.currency||'coins';if(!Number.isSafeInteger(profile[currency])||profile[currency]<item.price)return currency==='diamonds'?'ダイヤ不足':'コイン不足';
 return '';
}
export function prepareShopPurchase(profile,id,expectedCount){
 const item=towerShopItems.find(x=>x.id===id),reason=shopUnavailable(profile,item);if(reason)throw Error(reason);
 if(expectedCount!==undefined&&expectedCount!==shopPurchaseCount(profile,id))throw Error('購入状態が変わりました。画面を確認してください');
 const next=structuredClone(profile);next[item.currency||'coins']-=item.price;next.towerShop??={};next.towerShop.purchases??={};next.towerShop.purchases[id]=shopPurchaseCount(profile,id)+1;
 if(item.kind==='figure'){next.owned??={};next.owned[item.figureId]=(next.owned[item.figureId]||0)+1;}
 else next.ownedDeckCubes=[...new Set([...(next.ownedDeckCubes||[]),item.cubeId])];
 return next;
}
