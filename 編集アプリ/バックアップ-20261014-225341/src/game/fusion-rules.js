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

// One universal material may substitute one condition; the other condition must
// match naturally. Stage legality is always checked separately by the caller.
export function recipePairMatches(recipe,pair,options=[]){
 if(pair.length!==2)return false;
 const matches=(i,j)=>matchesMaterial(pair[i],recipe.materials[j],options[i]);
 const universal=i=>{const passive=pair[i].passive||{},rule=passive.universalFusionFor;return !!passive.universalFusion||!!rule&&pair[i].soulClass==='seed'&&recipe.targetClass==='middle'&&((rule.tags||[]).some(t=>recipe.targetTags?.includes(t))||(rule.attributes||[]).some(a=>recipe.targetAttribute?.split('/').includes(a)));};
 return (matches(0,0)&&matches(1,1))||(matches(1,0)&&matches(0,1))||
  (universal(0)&&(matches(1,0)||matches(1,1)))||
  (universal(1)&&(matches(0,0)||matches(0,1)));
}
