import {publicAsset} from '../data/public-assets.js';
import {wardrobeLayers,wardrobeState} from '../game/wardrobe.js';
export const wardrobeAsset=file=>publicAsset('assets/wardrobe/'+file);
export function wardrobeAvatar(selected,cls=''){return `<span class="wardrobe-avatar ${cls}" role="img" aria-label="着せ替えアバター">${wardrobeLayers(selected).map(file=>`<img src="${wardrobeAsset(file)}" alt="" draggable="false">`).join('')}</span>`;}
export const playerWardrobe=p=>wardrobeAvatar(wardrobeState(p).selected,'wardrobe-mini');
export function wardrobeHomeButton(){return `<button class="home-menu-tile wardrobe-home" data-go="wardrobe" aria-label="着せ替え"><span class="wardrobe-home-icon"><img src="${wardrobeAsset('presets/mob.png')}" alt="" loading="lazy"><svg viewBox="0 0 80 64" aria-hidden="true"><path d="M33 18c0-14 20-14 20-2 0 7-13 8-13 16L8 51q-4 5 3 5h58q7-1 2-6L40 32" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg><b>着せ替え</b><small>DRESS UP</small></span></button>`;}
