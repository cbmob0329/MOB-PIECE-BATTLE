import data from '../data/family-additions.json' with {type:'json'};
export const familyIds=new Set(data.figures.map(f=>f.id));
export function prepareFamilyCollection(profile){if(profile.familyCollectionVersion===data.version)throw Error('受け取り済みです');const next=structuredClone(profile);next.owned??={};for(const f of data.figures)next.owned[f.id]=Math.max(next.owned[f.id]||0,f.soulClass==='mob'?1:2);next.familyCollectionVersion=data.version;return next;}
export function familyCollectionMarkup(p){return `<section class="initial-invite"><b>ミミックル・シルクラ・ネオル・ドクローネ</b><p>4家族24種。シード・ミドル各2体、MOBソウル各1体を無料で受け取れます。</p>${p.familyCollectionVersion===data.version?'<small>受け取り済み</small>':'<button data-family-claim>4家族24種を受け取る</button>'}</section>`;}
