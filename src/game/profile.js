import {byId} from '../data/catalog.js';
import {validateDeck} from './deck.js';
import {OWN_CAP} from '../data/gacha.js';
const key='mob-piece-battle:profile:v1'; // Keep the key so v1 profiles migrate in place.
const defaults=()=>({version:2,centerId:'01',deck:[],displayIds:['02','03','04','05'],reducedMotion:false,diamonds:0,rubies:0,owned:{},welcomeClaimed:false,lastDraw:null,bannerId:'001'});
const integer=x=>Number.isSafeInteger(x)&&x>=0?x:0;
export let storageAvailable=true;
export function loadProfile(){try{const data=JSON.parse(localStorage.getItem(key));if(!data||![1,2].includes(data.version))return defaults();const deck=Array.isArray(data.deck)?data.deck.filter(id=>byId.has(id)):[];const owned={};for(const [id,n] of Object.entries(data.owned||{})){const f=byId.get(id);if(f)owned[id]=Math.min(integer(n),OWN_CAP[f.rarity]);}const last=data.lastDraw;const validLast=last&&['001','002','003','004','005'].includes(last.bannerId)&&['normal','chance','ultra','pickup'].includes(last.cue)&&[1,10].includes(last.entries?.length)&&last.entries.every(e=>byId.has(e.id)&&typeof e.converted==='boolean'&&typeof e.isNew==='boolean'&&Number.isSafeInteger(e.ruby)&&e.ruby>=0);return {...defaults(),centerId:byId.has(data.centerId)?data.centerId:'01',displayIds:['02','03','04','05'].map((fallback,i)=>{const id=data.displayIds?.[i];const f=byId.get(id);return f&&!f.pending&&!/^\/+$/u.test(f.name)?id:fallback;}),deck:validateDeck(deck,byId).errors.length?[]:deck,reducedMotion:data.reducedMotion===true,diamonds:integer(data.diamonds),rubies:integer(data.rubies),owned,welcomeClaimed:data.welcomeClaimed===true,lastDraw:validLast?last:null,bannerId:['001','002','003','004','005'].includes(data.bannerId)?data.bannerId:'001'};}catch{storageAvailable=false;return defaults();}}
export const profile=loadProfile();
export function commitProfile(next){try{localStorage.setItem(key,JSON.stringify(next));Object.assign(profile,next);storageAvailable=true;return true;}catch{storageAvailable=false;return false;}}
export function saveProfile(){return commitProfile(profile);}
