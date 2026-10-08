import {oct10LegacyOwnedCaps} from '../data/oct10-legacy-owned-caps.js';
import {favoriteIds} from './favorites.js';
import {testSettings} from '../data/test-settings.js?v=7.3.0';
import {byId} from '../data/catalog.js?v=7.3.0';
import {validateDeck} from './deck.js?v=7.3.0';
import {OWN_CAP,banners,archivedBanners} from '../data/gacha.js?v=7.3.0';
import {normalizeCompetition} from './competition.js?v=7.3.0';
import {normalizeBattleProgress} from './battle.js?v=7.3.0';
import {normalizeMissions} from './missions.js?v=7.3.0';
const key='mob-piece-battle:profile:v1'; // Keep the key so old profiles migrate in place.
const DECK_SLOTS=5;
const emptyDecks=()=>Array.from({length:DECK_SLOTS},()=>[]);
const defaults=()=>normalizeMissions(normalizeBattleProgress(normalizeCompetition({
  favoriteFigureIds:[],version:6,centerId:'01',avatarId:'01',deck:[],deckPresets:emptyDecks(),activeDeckSlot:0,displayIds:['02','03','04','05'],
  reducedMotion:false,testMode:false,coins:0,diamonds:0,rubies:0,rank:'F',highestRank:'F',battleHistory:[],owned:{},randomMatch:{key:'',played:0,wins:0},
  figureRecords:{},battleStats:{battles:0,wins:0,qualifierBattles:0,leagueBattles:0,rankUpWins:0,masterWins:0},gachaStats:{draws:0,converted:0,rubiesFromConversion:0},missions:{claimed:[]},welcomeClaimed:false,lastDraw:null,bannerId:banners[0].id
})));
const integer=x=>Number.isSafeInteger(x)&&x>=0?x:0;
export let storageAvailable=true;
export let isNewProfile=false;
function cleanDeck(deck){return Array.isArray(deck)?deck.filter(id=>byId.has(id)):[];}
function normalizeDeckStorage(obj,source=null){
  const active=Math.max(0,Math.min(DECK_SLOTS-1,Math.trunc(Number(obj.activeDeckSlot)||0)));
  const incoming=Array.isArray(source?.deckPresets)?source.deckPresets:null;
  const presets=emptyDecks();
  if(incoming){for(let i=0;i<DECK_SLOTS;i++)presets[i]=cleanDeck(incoming[i]);}
  else presets[0]=cleanDeck(source?.deck||obj.deck||[]);
  obj.activeDeckSlot=active;obj.deckPresets=presets;
  const current=cleanDeck(source?.deck||obj.deck||presets[active]);
  if(incoming)presets[active]=current;
  obj.deck=[...presets[active]];
  return obj;
}
function sanitizeFigureRecords(raw){const out={};for(const [id,row] of Object.entries(raw||{})){if(!byId.has(id))continue;out[id]={appearances:integer(row?.appearances),roundWins:integer(row?.roundWins),matchWins:integer(row?.matchWins)};}return out;}
export function loadProfile(){try{
  const data=JSON.parse(localStorage.getItem(key));if(!data||![1,2,3,4,5,6].includes(data.version)){isNewProfile=true;return defaults();}
  const base=defaults(),owned={};for(const [id,n] of Object.entries(data.owned||{})){const f=byId.get(id);if(f)owned[id]=Math.min(integer(n),testSettings.enabled&&data.testMode?25:Math.max(OWN_CAP[f.rarity],oct10LegacyOwnedCaps[id]||0));}
  const randomMatch={key:typeof data.randomMatch?.key==='string'?data.randomMatch.key:'',played:integer(data.randomMatch?.played),wins:integer(data.randomMatch?.wins)};
  const last=data.lastDraw;const validLast=last&&[...banners,...archivedBanners].some(b=>b.id===last.bannerId)&&['normal','chance','ultra','ssr','pickup','allSSR'].includes(last.cue)&&[1,10].includes(last.entries?.length)&&last.entries.every(e=>byId.has(e.id)&&typeof e.converted==='boolean'&&typeof e.isNew==='boolean'&&Number.isSafeInteger(e.ruby)&&e.ruby>=0);
  const hist=Array.isArray(data.battleHistory)?data.battleHistory:[];
  const derivedBattleStats={battles:hist.length,wins:hist.filter(x=>x.won).length,qualifierBattles:hist.filter(x=>String(x.mode||'').startsWith('qualifier')).length,leagueBattles:hist.filter(x=>String(x.mode||'').startsWith('mob-league')).length,rankUpWins:hist.filter(x=>String(x.mode||'').startsWith('rankup-tournament')&&x.won).length,masterWins:hist.filter(x=>String(x.mode||'').startsWith('mob-master')&&x.won).length};
  const next={...base,...data,favoriteFigureIds:favoriteIds(data),version:6,centerId:byId.has(data.centerId)&&!byId.get(data.centerId).retired?data.centerId:'01',avatarId:byId.has(data.avatarId)&&!byId.get(data.avatarId).retired?data.avatarId:(byId.has(data.centerId)?data.centerId:'01'),displayIds:['02','03','04','05'].map((fallback,i)=>{const id=data.displayIds?.[i];const f=byId.get(id);return f&&!f.retired&&!f.pending&&!/^\/+$/u.test(f.name)?id:fallback;}),reducedMotion:data.reducedMotion===true,testMode:data.testMode===true,coins:integer(data.coins),diamonds:integer(data.diamonds),rubies:integer(data.rubies),rank:typeof data.rank==='string'?data.rank:'F',owned,welcomeClaimed:data.welcomeClaimed===true,lastDraw:validLast?last:null,bannerId:banners.some(b=>b.id===data.bannerId)?data.bannerId:banners[0].id,randomMatch,battleHistory:hist.slice(-200),figureRecords:sanitizeFigureRecords(data.figureRecords),battleStats:{battles:integer(data.battleStats?.battles??derivedBattleStats.battles),wins:integer(data.battleStats?.wins??derivedBattleStats.wins),qualifierBattles:integer(data.battleStats?.qualifierBattles??derivedBattleStats.qualifierBattles),leagueBattles:integer(data.battleStats?.leagueBattles??derivedBattleStats.leagueBattles),rankUpWins:integer(data.battleStats?.rankUpWins??derivedBattleStats.rankUpWins),masterWins:integer(data.battleStats?.masterWins??derivedBattleStats.masterWins)},gachaStats:{draws:integer(data.gachaStats?.draws),converted:integer(data.gachaStats?.converted),rubiesFromConversion:integer(data.gachaStats?.rubiesFromConversion)},missions:{claimed:Array.isArray(data.missions?.claimed)?data.missions.claimed.filter(x=>typeof x==='string'):[]}};
  normalizeDeckStorage(next,data);
  if(validateDeck(next.deck,byId).errors.length){} // Keep incomplete/over-cost drafts; UI validates before battle.
  return normalizeMissions(normalizeBattleProgress(normalizeCompetition(next)));
}catch{storageAvailable=false;return defaults();}}
export const profile=loadProfile();
if(testSettings.enabled && profile.testMode){
  profile.coins=testSettings.maxCurrency;
  profile.diamonds=testSettings.maxCurrency;
  profile.rubies=testSettings.maxCurrency;
  saveProfile();
}
export function commitProfile(next){try{normalizeDeckStorage(next,next);normalizeMissions(next);localStorage.setItem(key,JSON.stringify(next));Object.assign(profile,next);storageAvailable=true;return true;}catch{storageAvailable=false;return false;}}
export function saveProfile(){return commitProfile(profile);}
