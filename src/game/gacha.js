import {bannerUnlocked} from '../data/tower.js';
import {banners,poolFor,pickupsFor,mainPickupFor,ratesFor,RARITY_RANK,RUBY_COST,OWN_CAP} from '../data/gacha.js?v=7.3.0';
import {acquireFigure,ensureGachaStats} from './inventory.js?v=7.3.0';
export function randomUnit(){const a=new Uint32Array(1);globalThis.crypto.getRandomValues(a);return a[0]/4294967296;}
export function rollFigure(banner,guaranteed=false,rng=randomUnit){const pool=poolFor(banner);if(!pool.length)throw new Error('排出対象がありません');let n=rng();const rates=Object.entries(ratesFor(banner,guaranteed));let rarity=rates.at(-1)[0];for(const [r,p] of rates){n-=p;if(n<0){rarity=r;break;}}const same=pool.filter(f=>f.rarity===rarity);const picks=pickupsFor(banner).filter(f=>f.rarity===rarity);const bucket=picks.length&&rng()<.55?picks:same;return bucket[Math.min(bucket.length-1,Math.floor(rng()*bucket.length))];}
// One exclusive special-mode roll per paid action (single or ten).
export function drawMode(value){return value<.001?'allSSR':value<.021?'pickup':'normal';}
export function cueFor(rows){return rows.some(f=>RARITY_RANK[f.rarity]>=3)?'ssr':'normal';}
export function prepareDraw(current,banner,count,rng=randomUnit){
 if(!banners.some(b=>b.id===banner?.id))throw Error('このガチャは提供を終了しました');
 if(count!==1&&count!==10)throw new Error('回数が不正です');
 banner=banners.find(b=>b.id===banner.id);
 if(!bannerUnlocked(current,banner))throw Error('草原の塔をクリアすると開放されます');
 const cost=count*5;if(current.diamonds<cost)throw new Error('MOBが足りないよ！');
 const mode=drawMode(rng()),next=structuredClone(current);
 const rows=Array.from({length:count},(_,i)=>mode==='pickup'&&i===count-1?mainPickupFor(banner):rollFigure(banner,mode==='allSSR'?'SSR':count===10&&i===9,rng));
 next.diamonds-=cost;
 const stats=ensureGachaStats(next),entries=rows.map(f=>{const got=acquireFigure(next,f,1);return {id:f.sourceId,converted:got.converted>0,ruby:got.rubies,isNew:got.isNew};});
 stats.draws=(Number(stats.draws)||0)+count;
 next.lastDraw={bannerId:banner.id,entries,cue:mode==='normal'?cueFor(rows):mode,at:Date.now()};
 return next;
}
export function welcomeGift(current){if(current.welcomeClaimed)throw new Error('受け取り済みです');return {...structuredClone(current),diamonds:current.diamonds+50,welcomeClaimed:true};}
export function exchangeFigure(current,banner,id){
 if(!banners.some(b=>b.id===banner?.id))throw Error('このガチャは提供を終了しました');
 banner=banners.find(b=>b.id===banner.id);
 if(!bannerUnlocked(current,banner))throw Error('草原の塔をクリアすると開放されます');
 const f=poolFor(banner).find(f=>f.sourceId===id);if(!f)throw new Error('交換対象ではありません');
 if((current.owned?.[id]||0)>=OWN_CAP[f.rarity])throw new Error('所持上限です');
 const cost=RUBY_COST[f.rarity];if(!Number.isFinite(current.rubies)||current.rubies<cost)throw new Error('ルビーが足りません');
 const next=structuredClone(current);next.rubies-=cost;acquireFigure(next,f);return next;
}
