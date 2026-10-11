// fusionStyle records the strengthening already applied, not fusion availability.
const elements={
 火:['#ff935d','<path d="M12 2c1 6 7 7 7 13a7 7 0 0 1-14 0c0-3 2-6 4-8 0 4 2 4 2 6 3-3 2-7 1-11Z"/>'],
 水:['#68ccff','<path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z"/>'],
 雷:['#ffe46c','<path d="m13 2-8 12h6l-1 8 9-13h-6l2-7Z"/>'],
 地:['#ddae77','<path d="m2 19 7-13 4 7 3-5 6 11Z"/>'],
 風:['#a9edc1','<path d="M3 8h12a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 17h6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>'],
 光:['#fff3ac','<path d="m12 1 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z"/>'],
 闇:['#c69aff','<path d="M17 3a9 9 0 1 0 4 14A9 9 0 0 1 17 3Z"/>'],
 無:['#e1eaf2','<circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="12" cy="12" r="2"/>']
};
const badge=(kind,label,color,shape)=>`<span class="strength-energy ${kind}" data-strength-energy="${kind}" role="img" aria-label="${label}" title="${label}" style="--energy-color:${color}"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">${shape}</svg></span>`;
export function strengthEnergyMarkup(piece,attribute){
 const kind=piece?.fusionStyle;if(!['attribute','tag','mix'].includes(kind))return '';
 const icons=[];
 if(kind!=='tag')for(const name of new Set(String(attribute||'無').split('/'))){const key=Object.hasOwn(elements,name)?name:'無',[color,shape]=elements[key];icons.push(badge('attribute',key+'属性強化済み',color,shape));}
 if(kind!=='attribute')icons.push(badge('tag','タグ強化済み','#ffe06b','<path d="m12 2 9 5v10l-9 5-9-5V7Zm0 5-4 5 4 5 4-5Z" fill-rule="evenodd"/>'));
 return `<span class="strength-energies">${icons.join('')}</span>`;
}
