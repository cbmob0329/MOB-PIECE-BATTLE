// An additive profile field: never rewrite ownership or deck data when favoriting.
export function favoriteIds(profile){return [...new Set(Array.isArray(profile.favoriteFigureIds)?profile.favoriteFigureIds.filter(id=>typeof id==='string'&&id.length>0):[])];}
export function isFavorite(profile,id){return favoriteIds(profile).includes(id);}
export function prepareFavoriteToggle(profile,id){
 if(typeof id!=='string'||!id)throw Error('フィギュアIDを確認してください');
 const next=structuredClone(profile),ids=new Set(favoriteIds(profile));
 if(ids.has(id))ids.delete(id);else ids.add(id);next.favoriteFigureIds=[...ids];return next;
}
