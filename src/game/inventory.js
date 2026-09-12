import {OWN_CAP,OVERFLOW_RUBY} from '../data/gacha.js';
export function ensureGachaStats(profile){if(!profile.gachaStats||typeof profile.gachaStats!=='object')profile.gachaStats={draws:0,converted:0,rubiesFromConversion:0};return profile.gachaStats;}
export function acquireFigure(profile,figure,qty=1){
  if(!profile.owned||typeof profile.owned!=='object')profile.owned={};if(!Number.isFinite(profile.rubies))profile.rubies=0;const stats=ensureGachaStats(profile);const cap=OWN_CAP[figure.rarity]??1,rubyEach=OVERFLOW_RUBY[figure.rarity]??0;let acquired=0,converted=0,rubies=0,isNew=(profile.owned[figure.sourceId]||0)===0;
  for(let i=0;i<qty;i++){const have=profile.owned[figure.sourceId]||0;if(have<cap){profile.owned[figure.sourceId]=have+1;acquired++;}else{converted++;rubies+=rubyEach;profile.rubies+=rubyEach;stats.converted++;stats.rubiesFromConversion+=rubyEach;}}
  return {acquired,converted,rubies,isNew,cap};
}
