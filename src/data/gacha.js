import {figures} from './catalog.js';
export const RARITY_RANK=Object.freeze({R:1,SR:2,SSR:3,UR:4,MOB:5});
export const RATES=Object.freeze({R:50,SR:30,SSR:15,UR:4.5,MOB:.5});
export const TEN_LAST_RATES=Object.freeze({SR:67,SSR:25,UR:7,MOB:1});
export const OWN_CAP=Object.freeze({R:15,SR:12,SSR:7,UR:4,MOB:2});
export const OVERFLOW_RUBY=Object.freeze({R:1,SR:3,SSR:5,UR:12,MOB:30});
const range=(dir,a,b)=>Array.from({length:b-a+1},(_,i)=>`${dir}/${String(a+i).padStart(2,'0')}.png`);
const common=range('fig',1,25);
// Initial, unconditionally available banners. Story unlocks remain hidden.
export const banners=[
 {id:'001',name:'みかんちゃんピックアップ',subtitle:'小さな主役、大きなきらめき。',extra:[],pickup:['fig/16.png'],color:'#e6b34b'},
 {id:'002',name:'MOB GAME コラボ',subtitle:'あの仲間たちが、ピースになって集結。',extra:[...range('fig',26,31),...range('fig',40,51),'fig/56.png','fig/61.png','fig/62.png',...range('fig',84,87)],color:'#91c9a8'},
 {id:'003',name:'PB2 & CB Memory コラボ',subtitle:'思い出と、新しい出会いを。',extra:[...range('fig',32,39),...range('fig',52,55),...range('fig',57,60),...range('fig',81,83),...range('fig',89,92)],color:'#b5a2e7'},
 {id:'004',name:'頼もしい仲間ピックアップ',subtitle:'まだ見ぬチームの可能性。',extra:[...range('fig',63,80),'fig/88.png'],color:'#8fbfda'},
 {id:'005',name:'草原＆砂漠ガチャ',subtitle:'広い世界から、小さな冒険者たち。',extra:[...range('figene',1,6),...range('figene',10,14)],color:'#c9d18d'}
];
export const usableFigure=f=>!!(f&&!f.pending&&f.name&&!/^\/+$/u.test(f.name)&&f.image);
export function poolFor(banner){const paths=new Set([...common,...banner.extra]);return figures.filter(f=>paths.has(f.image)&&usableFigure(f));}
export function pickupsFor(banner){const pool=poolFor(banner);const explicit=pool.filter(f=>banner.pickup?.includes(f.image));return explicit.length?explicit:[...pool].sort((a,b)=>RARITY_RANK[b.rarity]-RARITY_RANK[a.rarity]).slice(0,3);}
export const mainPickupFor=banner=>pickupsFor(banner)[0];
export function ratesFor(banner,guaranteed=false){const pool=poolFor(banner);const entries=Object.entries(guaranteed?TEN_LAST_RATES:RATES).filter(([r])=>pool.some(f=>f.rarity===r));const total=entries.reduce((n,[,w])=>n+w,0);return Object.fromEntries(entries.map(([r,w])=>[r,w/total]));}
export function figureRate(banner,f,guaranteed=false){const same=poolFor(banner).filter(x=>x.rarity===f.rarity);if(!same.some(x=>x.sourceId===f.sourceId))return 0;const picks=pickupsFor(banner).filter(x=>x.rarity===f.rarity);const r=ratesFor(banner,guaranteed)[f.rarity]||0;return r*(picks.length? .45/same.length+(picks.some(x=>x.sourceId===f.sourceId)?.55/picks.length:0):1/same.length);}
