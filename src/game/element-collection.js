import data from '../data/element-additions.json' with {type:'json'};
export const elementIds=new Set(data.figures.map(f=>f.id));
export function prepareElementCollection(profile){
 if(profile.elementCollectionVersion===data.version)throw Error('受け取り済みです');
 const next=structuredClone(profile);next.owned??={};
 for(const f of data.figures)next.owned[f.id]=Math.max(next.owned[f.id]||0,f.soulClass==='mob'?1:2);
 next.elementCollectionVersion=data.version;return next;
}
export function elementCollectionMarkup(profile){return `<section class="initial-invite"><b>属性の工房とレトロの仲間たち</b><p>新規54種。シード・ミドル各2体、MOBソウル各1体。無料で受け取れます。</p>${profile.elementCollectionVersion===data.version?'<small>受け取り済み · デッキへ自由に編成できます</small>':'<button data-element-claim>54種を受け取る</button>'}</section>`;}
