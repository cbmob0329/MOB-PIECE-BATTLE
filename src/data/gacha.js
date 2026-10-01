import {figures} from './catalog.js?v=7.3.0';
export const RARITY_RANK=Object.freeze({R:1,SR:2,SSR:3,UR:4,MOB:5});
export const RATES=Object.freeze({R:50,SR:30,SSR:15,UR:4.5,MOB:.5});
export const TEN_LAST_RATES=Object.freeze({SR:67,SSR:25,UR:7,MOB:1});
export const OWN_CAP=Object.freeze({R:15,SR:12,SSR:7,UR:4,MOB:2});
export const OVERFLOW_RUBY=Object.freeze({R:1,SR:3,SSR:5,UR:12,MOB:30});
import questBanners from './quest-banners.js';
const common=Array.from({length:25},(_,i)=>'fig/'+String(i+1).padStart(2,'0')+'.png');
// This standalone battle game has no Quest story progression: all banners are available.
export const banners=questBanners;
export const RUBY_COST=Object.freeze({R:10,SR:50,SSR:100,UR:300,MOB:500});
export const usableFigure=f=>!!(f&&!f.pending&&f.name&&!/^\/+$/u.test(f.name)&&f.image);
export function poolFor(banner){const paths=new Set([...common,...banner.extra]);return figures.filter(f=>paths.has(f.image)&&usableFigure(f));}
export function pickupsFor(banner){const pool=poolFor(banner);const explicit=pool.filter(f=>banner.pickup?.includes(f.image));return explicit.length?explicit:[...pool].sort((a,b)=>RARITY_RANK[b.rarity]-RARITY_RANK[a.rarity]).slice(0,3);}
export const mainPickupFor=banner=>pickupsFor(banner)[0];
export function ratesFor(banner,guaranteed=false){const pool=poolFor(banner);const entries=Object.entries(guaranteed?TEN_LAST_RATES:RATES).filter(([r])=>pool.some(f=>f.rarity===r));const total=entries.reduce((n,[,w])=>n+w,0);return Object.fromEntries(entries.map(([r,w])=>[r,w/total]));}
export function figureRate(banner,f,guaranteed=false){const same=poolFor(banner).filter(x=>x.rarity===f.rarity);if(!same.some(x=>x.sourceId===f.sourceId))return 0;const picks=pickupsFor(banner).filter(x=>x.rarity===f.rarity);const r=ratesFor(banner,guaranteed)[f.rarity]||0;return r*(picks.length? .45/same.length+(picks.some(x=>x.sourceId===f.sourceId)?.55/picks.length:0):1/same.length);}
