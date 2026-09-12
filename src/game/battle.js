import {RULES,validateDeck} from './deck.js';
import {
  RANKS,CPU_CONFIG,CPU_THEMES,TAG_EFFECT_CAPS,RARITY_POWER_HIT,RARITY_VALUE,
  FREE_BATTLE,RANK_MATCH_REWARDS
} from '../data/battle.js';

const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
const randomItem=a=>a[Math.floor(Math.random()*a.length)];
export const shuffle=(a)=>{const out=[...a];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;};
const rankIndex=r=>Math.max(0,RANKS.indexOf(r));

export function normalizeBattleProgress(profile){
  if(!RANKS.includes(profile.rank))profile.rank='F';
  profile.rankPoints=clamp(Number.isFinite(Number(profile.rankPoints))?Math.trunc(Number(profile.rankPoints)):0,0,5);
  if(!RANKS.includes(profile.highestRank)||rankIndex(profile.highestRank)<rankIndex(profile.rank))profile.highestRank=profile.rank;
  if(!profile.battleHistory||!Array.isArray(profile.battleHistory))profile.battleHistory=[];
  return profile;
}

export function updateRankMatch(profile,won){
  normalizeBattleProgress(profile);
  let i=rankIndex(profile.rank),pts=profile.rankPoints,promoted=false,demoted=false;
  if(won){
    pts++;
    if(pts>=5){if(i<RANKS.length-1){i++;pts=0;promoted=true;}else pts=5;}
  }else if(pts>0)pts--;
  else if(i>0){i--;pts=3;demoted=true;}
  profile.rank=RANKS[i];profile.rankPoints=pts;
  if(rankIndex(profile.rank)>rankIndex(profile.highestRank))profile.highestRank=profile.rank;
  return {tier:profile.rank,points:pts,promoted,demoted};
}

export function unlocks(profile){normalizeBattleProgress(profile);const h=rankIndex(profile.highestRank);return {hard:h>=rankIndex('C'),inferno:h>=rankIndex('A')};}

export function battleReward(profile,mode,key,won){
  if(!won)return {coins:0,diamonds:0};
  const spec=mode==='rank'?(RANK_MATCH_REWARDS[key]||RANK_MATCH_REWARDS.F):(FREE_BATTLE[key]||FREE_BATTLE.easy);
  const reward={coins:Number(spec.coins)||0,diamonds:Number(spec.diamonds)||0};
  profile.coins=(Number(profile.coins)||0)+reward.coins;profile.diamonds=(Number(profile.diamonds)||0)+reward.diamonds;
  return reward;
}

export function deckPlayable(ids,byId,owned,{ignoreOwnership=false}={}){
  return validateDeck(ids,byId,ignoreOwnership?null:owned);
}

export function tagEffects(hand,byId,tags){
  const tagMap=tags instanceof Map?tags:new Map((tags||[]).map(t=>[String(t.id),t]));
  const counts={};
  for(const id of new Set(hand||[]))for(const t of byId.get(id)?.tags||[])counts[String(t)]=(counts[String(t)]||0)+1;
  const effects={},lines=[];
  for(const [id,n] of Object.entries(counts)){
    if(n<2)continue;const tag=tagMap.get(id);const spec=n>=3?tag?.pieceThree:tag?.pieceTwo;if(!spec)continue;
    for(const [k,v] of Object.entries(spec.effects||{}))effects[k]=(effects[k]||0)+Number(v||0);
    lines.push(`${tag.name} ${n>=3?'3種類':'2種類'}：${spec.label}`);
  }
  for(const [k,cap] of Object.entries(TAG_EFFECT_CAPS)){
    if(!(k in effects))continue;const v=Number(effects[k]||0);effects[k]=cap<0?Math.max(cap,Math.min(0,v)):Math.min(cap,Math.max(0,v));
  }
  return {effects,lines};
}

function effect(e,...keys){for(const k of keys)if(e[k]!=null)return Number(e[k])||0;return 0;}

export function fighterRows(hand,enemyHand,side,centerIndex,byId,tags,boostIndex=-1){
  const own=tagEffects(hand,byId,tags).effects,opp=tagEffects(enemyHand,byId,tags).effects;
  return hand.map((id,i)=>{
    const f=byId.get(id),s=f?.mobPiece||f?.mobPieceV115||{hp:1,attack:1,defense:1,speed:1};
    const center=i===centerIndex?1.25:1,boost=i===boostIndex?1.15:1;
    let hp=s.hp*center*boost*(1+effect(own,'lifePct','hpPct'));
    let atk=s.attack*center*boost*(1+effect(own,'attackPct'));
    let def=s.defense*center*boost*(1+effect(own,'defensePct'));
    let spd=s.speed*center*boost*(1+effect(own,'speedPct'));
    if(i===centerIndex){
      hp*=1+effect(own,'centerLifePct','centerHpPct');atk*=1+effect(own,'centerAttackPct');
      def*=1+effect(own,'centerDefensePct');spd*=1+effect(own,'centerSpeedPct');
    }
    atk*=Math.max(.2,1+effect(opp,'enemyAttackPct'));def*=Math.max(.2,1+effect(opp,'enemyDefensePct'));spd*=Math.max(.2,1+effect(opp,'enemySpeedPct'));
    const maxHp=Math.max(25,Math.round(hp));
    return {key:`${side}-${i}`,side,index:i,id,f,maxHp,hp:maxHp,atk:Math.max(1,Math.round(atk)),def:Math.max(1,Math.round(def)),spd:Math.max(1,Math.round(spd)),boosted:i===boostIndex,nextAt:Math.random()*8};
  });
}

export function teamStats(rows,hand,byId,tags){
  const active=tagEffects(hand,byId,tags);
  return {hp:rows.reduce((n,x)=>n+x.maxHp,0),attack:rows.reduce((n,x)=>n+x.atk,0),defense:rows.reduce((n,x)=>n+x.def,0),speed:rows.reduce((n,x)=>n+x.spd,0),tag:active};
}

export function pieceStrength(f){const s=f?.mobPiece||f?.mobPieceV115||{hp:1,attack:1,defense:1,speed:1};return s.attack+s.defense*.78+s.hp*.22+s.speed*.42;}
const sharedTags=(a,b)=>{const bset=new Set(b?.tags||[]);return (a?.tags||[]).filter(t=>bset.has(t)).length;};

function pickTheme(cfg){if(!cfg.theme)return null;return randomItem(cfg.theme==='hard'?CPU_THEMES.slice(0,4):CPU_THEMES);}
function weightedPick(pool,theme,chosen,adherence,allById){
  if(!pool.length)return null;let list=pool;
  if(theme&&Math.random()<adherence){const themed=pool.filter(f=>(f.tags||[]).some(t=>theme.tags.includes(String(t))));if(themed.length)list=themed;}
  // すでに選ばれたフィギュアが別レアリティでも、タグ相性の評価対象に含める。
  const unique=[...new Set(chosen)].map(id=>allById.get(id)||null).filter(Boolean);
  return list.map(f=>{let s=pieceStrength(f)*.45+(RARITY_VALUE[f.rarity]||1)*14;for(const q of unique)s+=sharedTags(f,q)*7;if(theme)s+=(f.tags||[]).filter(t=>theme.tags.includes(String(t))).length*90;s-=(f.mobPiece?.cost||1)*3;return {f,s:s+Math.random()*24};}).sort((a,b)=>b.s-a.s)[Math.floor(Math.random()*Math.min(5,list.length))]?.f||list[0];
}

export function buildCpuDeck(figures,mode,key){
  const cfg=mode==='free'?CPU_CONFIG.free[key]:CPU_CONFIG.rank[key]||CPU_CONFIG.rank.F;if(!cfg)throw new Error('CPU設定がありません。');
  const theme=pickTheme(cfg),all=figures.filter(f=>!f.pending&&f.mobPiece),allById=new Map(all.map(f=>[f.sourceId,f])),wanted=[];
  if(cfg.weights){const rows=Object.entries(cfg.weights),total=rows.reduce((n,[,w])=>n+Number(w||0),0)||1;for(let i=0;i<25;i++){let r=Math.random()*total,pick=rows[0]?.[0]||'R';for(const [rarity,w] of rows){r-=Number(w||0);if(r<=0){pick=rarity;break;}}wanted.push(pick);}}
  else {for(const [rarity,n] of Object.entries(cfg.dist||{}))for(let i=0;i<n;i++)wanted.push(rarity);while(wanted.length<25)wanted.push(Object.keys(cfg.dist||{})[0]||'R');wanted.splice(0,wanted.length,...shuffle(wanted));}
  const out=[],used={};let cost=0;
  for(let slot=0;slot<25;slot++){
    const want=wanted[slot],remain=24-slot,cap=f=>RULES.duplicateCaps[f.rarity]||1;
    let pool=all.filter(f=>f.rarity===want&&(used[f.sourceId]||0)<cap(f)&&cost+(f.mobPiece?.cost||1)+remain<=80);
    if(!pool.length)pool=all.filter(f=>(used[f.sourceId]||0)<cap(f)&&cost+(f.mobPiece?.cost||1)+remain<=80);
    const f=weightedPick(pool,theme,out,cfg.adherence,allById);if(!f)break;out.push(f.sourceId);used[f.sourceId]=(used[f.sourceId]||0)+1;cost+=f.mobPiece.cost;
  }
  if(out.length<25){for(const f of [...all].sort((a,b)=>a.mobPiece.cost-b.mobPiece.cost)){const cap=RULES.duplicateCaps[f.rarity]||1;while(out.length<25&&(used[f.sourceId]||0)<cap&&cost+f.mobPiece.cost<=80){out.push(f.sourceId);used[f.sourceId]=(used[f.sourceId]||0)+1;cost+=f.mobPiece.cost;}}}
  return {deck:out.slice(0,25),theme,cfg};
}

export function createMatch({playerDeck,cpuDeck,cpuAi=0,context={}}){
  return {playerDeckOriginal:[...playerDeck],cpuDeckOriginal:[...cpuDeck],pDeck:shuffle(playerDeck),cDeck:shuffle(cpuDeck),pPos:0,cPos:0,pDiscard:[],cDiscard:[],pWins:0,cWins:0,round:0,center:2,cCenter:2,exchanged:false,cpuExchanged:false,pieceBoostUsed:false,boostIndex:-1,cpuAi,context,history:[]};
}
function draw(match,side){const deck=match[`${side}Deck`],posKey=`${side}Pos`,discard=match[`${side}Discard`];if(match[posKey]>=deck.length){if(!discard.length)return randomItem(deck);match[`${side}Deck`]=shuffle(discard.splice(0));match[posKey]=0;}return match[`${side}Deck`][match[posKey]++];}

function handValue(hand,center,byId,tags){const rows=fighterRows(hand,[], 'cpu-preview',center,byId,tags);const st=teamStats(rows,hand,byId,tags);return st.attack+st.defense*.62+st.hp*.14+st.speed*.34+Object.keys(st.tag.effects||{}).length*15;}
export function prepareCpu(match,byId,tags){
  match.cCenter=2;if(match.cpuAi<1)return;
  if(!match.cpuExchanged){let weakest=0,val=Infinity;for(let i=0;i<5;i++){const v=pieceStrength(byId.get(match.cHand[i]));if(v<val){val=v;weakest=i;}}const next=draw(match,'c');if(next){const old=match.cHand[weakest],before=handValue(match.cHand,2,byId,tags),trial=[...match.cHand];trial[weakest]=next;const after=Math.max(...[0,1,2,3,4].map(i=>handValue(trial,i,byId,tags)));if(after>before*1.025||match.cpuAi>=3){match.cDiscard.push(old);match.cHand[weakest]=next;match.cpuExchanged=true;}else match.cDiscard.push(next);}}
  let best=2,bestV=-Infinity;for(let i=0;i<5;i++){const v=handValue(match.cHand,i,byId,tags);if(v>bestV){bestV=v;best=i;}}match.cCenter=best;
}

export function nextRound(match,byId,tags){
  match.round++;match.center=2;match.cCenter=2;match.exchanged=false;match.cpuExchanged=false;match.boostIndex=-1;
  match.pHand=Array.from({length:5},()=>draw(match,'p'));match.cHand=Array.from({length:5},()=>draw(match,'c'));prepareCpu(match,byId,tags);return match;
}
export function exchangePlayer(match,index){if(match.exchanged||index<0||index>=5||match.boostIndex===index)return false;const old=match.pHand[index],next=draw(match,'p');if(!next)return false;match.pDiscard.push(old);match.pHand[index]=next;match.exchanged=true;return true;}
export function movePlayerCard(match,from,to){if(from===to||from<0||to<0||from>=5||to>=5)return false;[match.pHand[from],match.pHand[to]]=[match.pHand[to],match.pHand[from]];if(match.boostIndex===from)match.boostIndex=to;else if(match.boostIndex===to)match.boostIndex=from;return true;}
export function activatePieceBoost(match,index){if(match.pieceBoostUsed||index<0||index>=5)return false;match.pieceBoostUsed=true;match.boostIndex=index;return true;}

export function pickTarget(enemies){const alive=enemies.filter(x=>x.hp>0);if(!alive.length)return null;const low=alive.filter(x=>x.hp/x.maxHp<.38);return Math.random()<.22&&low.length?randomItem(low):randomItem(alive);}
export function hitDamage(a,d,powerHit=false,crit=false){let raw=a.atk*(powerHit?1.14:.90)+a.spd*.15-d.def*.43;raw*=.84+Math.random()*.30;if(powerHit)raw*=1.18;if(crit)raw*=1.55;const floor=Math.max(4,Math.round(d.maxHp*.07));return Math.max(floor,Math.round(raw));}
export function powerHitChance(rarity){return RARITY_POWER_HIT[rarity]??.16;}
export function critChance(spd){return clamp(.05+spd/2400,.05,.16);}
export function aliveHp(rows){return rows.reduce((n,x)=>n+(x.hp>0?x.hp:0),0);}
