export const soulStages=['seed','middle','mob'];
export function matchesMaterial(figure,material,{tags=figure.tags,attribute=figure.attribute,wildAttribute=false}={}){
 if(material.any)return material.any.some(m=>matchesMaterial(figure,m,{tags,attribute,wildAttribute}));
 if(material.id&&figure.id!==material.id)return false;
 if(material.tag&&!tags.includes(material.tag))return false;
 if(material.attribute&&!wildAttribute&&!attribute.split('/').includes(material.attribute))return false;
 if(material.rarity&&figure.rarity!==material.rarity)return false;
 if(material.class&&figure.soulClass!==material.class)return false;
 return !!(material.id||material.tag||material.attribute||material.rarity||material.class);
}
export function recipeMaterialClass(recipe,by){const target=by.get(recipe.target);if(!target)return null;return recipe.preserveStage?target.soulClass:soulStages[soulStages.indexOf(target.soulClass)-1]||null;}
export function recipeStageMatches(recipe,pair,by){const kind=recipeMaterialClass(recipe,by);return !!kind&&pair.length===2&&pair.every(f=>f.soulClass===kind);}
