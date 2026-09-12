import {figures,byId,tags,imagePath} from '../data/catalog.js';
import {RULES} from '../game/deck.js';
import {
  deckPlayable,buildCpuDeck,createMatch,nextRound,exchangePlayer,movePlayerCard,activatePieceBoost,
  fighterRows,teamStats,tagEffects,pickTarget,hitDamage,powerHitChance,critChance,aliveHp
} from '../game/battle.js';
import {BATTLE_TIMING} from '../data/battle.js';

const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const pct=(v,max)=>Math.max(0,Math.min(100,max?Math.round(v/max*100):0));
const stat=(f,k)=>Number(f?.mobPiece?.[k]??f?.mobPieceV115?.[k]??0);
const reduced=()=>document.documentElement.classList.contains('reduce-motion')||matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait=ms=>sleep(reduced()?Math.min(45,ms):ms);
const tagsMap=new Map(tags.map(t=>[String(t.id),t]));
const assetPath=path=>`${import.meta.env?.BASE_URL??'./'}${path}`;
const PIECE_SKILL_FX=[
  ['skill/01.png','skill/02.png','skill/03.png','skill/04.png'],
  ['skill/17.png','skill/18.png','skill/19.png','skill/17.png'],
  ['skill/29.png','skill/30.png','skill/31.png','skill/30.png'],
  ['skill/39.png','skill/40.png','skill/41.png','skill/42.png'],
  ['skill/49.png','skill/50.png','skill/51.png','skill/52.png'],
  ['skill/54.png','skill/55.png','skill/57.png','skill/58.png'],
  ['skill/65.png','skill/66.png','skill/67.png','skill/68.png']
];

function art(id,cls=''){
  const f=byId.get(id);if(!f)return '<span class="battle-art-missing">?</span>';
  return `<img class="${cls}" src="${imagePath(f)}" alt="${esc(f.name)}"><span class="battle-art-missing" hidden>${esc(f.displayNo)}</span>`;
}
function bindImageFallback(root){root.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.hidden=true;const n=img.nextElementSibling;if(n?.classList.contains('battle-art-missing'))n.hidden=false;},{once:true}));}
async function preloadBattleArt(ids,timeout=1800){
  const srcs=[...new Set((ids||[]).map(id=>byId.get(id)).filter(Boolean).map(imagePath))];
  if(!srcs.length)return;
  const jobs=srcs.map(src=>new Promise(resolve=>{const img=new Image();img.onload=img.onerror=()=>resolve();img.src=src;}));
  await Promise.race([Promise.all(jobs),sleep(timeout)]);
}
function score(match){return `<div class="mpb-match-score"><span>YOU <b>${match.pWins}</b></span><em>BATTLE ${match.round}<small>2 WINS</small></em><span>CPU <b>${match.cWins}</b></span></div>`;}
function lifeBar(label,value,max,side){return `<div class="mpb-team-life ${side}"><span>${label}</span><div><i style="width:${pct(value,max)}%"></i></div><b>${Math.max(0,Math.round(value))} / ${Math.max(1,Math.round(max))}</b></div>`;}
function activeTags(hand){const t=tagEffects(hand,byId,tagsMap);return `<div class="mpb-active-tags">${t.lines.length?t.lines.map(x=>`<span>${esc(x)}</span>`).join(''):'<span>タグ共鳴なし</span>'}</div>`;}
function totalStats(label,st,side,prev=null){
  const row=(key,title)=>`<span>${title} <strong data-total-stat="${key}" class="${prev&&Number(prev[key])!==Number(st[key])?'changed':''}">${st[key]}</strong></span>`;
  return `<div class="mpb-total-stats ${side}"><b>${label}</b>${row('hp','HP')}${row('attack','ATK')}${row('defense','DEF')}${row('speed','SPD')}</div>`;
}

function createOverlay(){
  const shell=document.querySelector('.game-shell')||document.body;let ov=shell.querySelector('.mpb-battle-overlay');
  if(!ov){ov=document.createElement('div');ov.className='mpb-battle-overlay';shell.appendChild(ov);}
  ov.hidden=false;ov.innerHTML='';ov.onclick=e=>e.stopPropagation();return ov;
}
function closeOverlay(ov){ov?.remove();}

function playerCard(id,i,selected=false,boosted=false){const f=byId.get(id);return `<button class="mpb-ready-card ${i===2?'center':''} ${selected?'selected':''} ${boosted?'boosted':''}" data-ready-card="${i}" type="button"><span class="mpb-card-art">${art(id)}</span><em>${boosted?'BOOST':i===2?'CENTER':''}</em><small>${esc(f?.rarity||'')} · C${stat(f,'cost')}</small><b>${esc(f?.name||id)}</b><span>HP${stat(f,'hp')} · A${stat(f,'attack')} · D${stat(f,'defense')} · S${stat(f,'speed')}</span></button>`;}
function cpuCard(id,i,center){const f=byId.get(id);return `<article class="mpb-cpu-card ${i===center?'center':''}"><span>${art(id)}</span><em>${i===center?'CENTER':''}</em><small>${esc(f?.rarity||'')} · C${stat(f,'cost')}</small></article>`;}
function readyStats(match){
  const pRows=fighterRows(match.pHand,match.cHand,'player',2,byId,tagsMap,match.boostIndex),cRows=fighterRows(match.cHand,match.pHand,'cpu',match.cCenter,byId,tagsMap);
  return {p:teamStats(pRows,match.pHand,byId,tagsMap),c:teamStats(cRows,match.cHand,byId,tagsMap)};
}

async function drawIntro(ov,match,request){
  ov.innerHTML=`<section class="mpb-battle-panel draw-phase">${score(match)}<div class="mpb-opponent-label"><small>${esc(request.title||'MOB PIECE BATTLE')}</small><b>${esc(request.opponentName||'CPU')}</b></div><div class="mpb-draw-field cpu"><b>CPU FIELD</b><div data-draw-cpu></div></div><div class="mpb-draw-core"><span>MOB</span><strong>DRAW</strong><small>NEW 5 PIECES</small></div><div class="mpb-draw-field player"><b>PLAYER FIELD</b><div data-draw-player></div></div></section>`;
  bindImageFallback(ov);
  const p=ov.querySelector('[data-draw-player]'),c=ov.querySelector('[data-draw-cpu]');
  for(let i=0;i<5;i++){
    p.insertAdjacentHTML('beforeend',`<span class="mpb-draw-card" style="--i:${i}">${art(match.pHand[i])}<b>${i===2?'CENTER':''}</b></span>`);
    c.insertAdjacentHTML('beforeend',`<span class="mpb-draw-card cpu" style="--i:${i}">${art(match.cHand[i])}<b>${i===match.cCenter?'CENTER':''}</b></span>`);
    bindImageFallback(ov);await wait(BATTLE_TIMING.drawStep);
  }
  await wait(BATTLE_TIMING.drawHold);
}

function tagNames(f){return (f?.tags||[]).map(id=>tagsMap.get(String(id))?.name).filter(Boolean);}
function readyDetailMarkup(match,index){
  const f=byId.get(match.pHand[index]),rows=fighterRows(match.pHand,match.cHand,'player',2,byId,tagsMap,match.boostIndex),row=rows[index],names=tagNames(f),boosted=match.boostIndex===index;
  return `<div class="mpb-figure-detail-modal" data-ready-detail><div class="mpb-figure-detail-sheet"><button class="mpb-detail-close" data-detail-close aria-label="閉じる">×</button><div class="mpb-detail-hero">${art(f?.sourceId||match.pHand[index])}</div><small>${esc(f?.displayNo||'')} · ${esc(f?.rarity||'')} · COST ${stat(f,'cost')}</small><h3>${esc(f?.name||'')}</h3><div class="mpb-detail-stats"><span>HP <b>${row.maxHp}</b><small>BASE ${stat(f,'hp')}</small></span><span>ATK <b>${row.atk}</b><small>BASE ${stat(f,'attack')}</small></span><span>DEF <b>${row.def}</b><small>BASE ${stat(f,'defense')}</small></span><span>SPD <b>${row.spd}</b><small>BASE ${stat(f,'speed')}</small></span></div><div class="mpb-detail-tags"><b>TAG</b>${names.length?names.map(x=>`<span>${esc(x)}</span>`).join(''):'<span>タグなし</span>'}</div><p>${index===2?'CENTER：全能力+25%':''}${boosted?'　PIECE BOOST：全能力+15%':''}</p><div class="mpb-detail-actions"><button data-detail-boost="${index}" ${match.pieceBoostUsed?'disabled':''}>${boosted?'BOOST ACTIVE':match.pieceBoostUsed?'BOOST使用済み':'PIECE BOOST'}</button><button data-detail-exchange="${index}" ${match.exchanged||boosted?'disabled':''}>${match.exchanged?'交換済み':boosted?'BOOST中は交換不可':'この1体を交換'}</button></div></div></div>`;
}

async function readyPhase(ov,match,request){
  return new Promise(resolve=>{
    const paint=(flashIndex=null,prevPlayerStats=null)=>{
      const {p,c}=readyStats(match);
      ov.innerHTML=`<section class="mpb-battle-panel ready-phase">${score(match)}<div class="mpb-opponent-label compact"><small>OPPONENT</small><b>${esc(request.opponentName||'CPU')} · RANK ${esc(request.cpuRank||'—')}</b></div>${lifeBar('CPU LIFE',c.hp,c.hp,'cpu')}<div class="mpb-cpu-hand">${match.cHand.map((id,i)=>cpuCard(id,i,match.cCenter)).join('')}</div>${totalStats('CPU',c,'cpu')}${activeTags(match.cHand)}<div class="mpb-center-rule"><span>CENTER BONUS</span><b>3番のフィギュア 全能力 +25%</b><small>ドラッグして5体の位置を入れ替え / タップで詳細</small></div>${totalStats('PLAYER',p,'player',prevPlayerStats)}${activeTags(match.pHand)}<div class="mpb-player-hand">${match.pHand.map((id,i)=>playerCard(id,i,false,match.boostIndex===i)).join('')}</div><div class="mpb-drag-guide">つかんで移動：配置入れ替え　／　タップ：ステータス・タグ</div><div class="mpb-ready-command"><button data-start-fight class="mpb-primary">BATTLE</button><button data-quit-fight>対戦をやめる</button></div></section>`;
      bindImageFallback(ov);
      if(flashIndex!=null){const el=ov.querySelector(`[data-ready-card="${flashIndex}"]`);el?.classList.add('just-drawn');setTimeout(()=>el?.classList.remove('just-drawn'),450);}
      const openDetail=i=>{
        ov.querySelector('.ready-phase')?.insertAdjacentHTML('beforeend',readyDetailMarkup(match,i));bindImageFallback(ov);
        const detail=ov.querySelector('[data-ready-detail]');
        detail?.querySelector('[data-detail-close]')?.addEventListener('click',()=>detail.remove());
        detail?.addEventListener('click',e=>{if(e.target===detail)detail.remove();});
        detail?.querySelector('[data-detail-exchange]')?.addEventListener('click',()=>{if(match.exchanged)return;const prev=readyStats(match).p;if(exchangePlayer(match,i))paint(i,prev);});
        detail?.querySelector('[data-detail-boost]')?.addEventListener('click',()=>{if(match.pieceBoostUsed)return;const prev=readyStats(match).p;if(!activatePieceBoost(match,i))return;paint(i,prev);const panel=ov.querySelector('.ready-phase'),fx=document.createElement('div');fx.className='mpb-boost-burst';fx.innerHTML='<small>MOB PIECE</small><strong>PIECE BOOST!</strong><span>ALL STATS +15%</span>';panel?.appendChild(fx);setTimeout(()=>fx.remove(),reduced()?120:850);});
      };
      ov.querySelectorAll('[data-ready-card]').forEach(card=>{
        let sx=0,sy=0,drag=false,pointerId=null;
        card.addEventListener('pointerdown',e=>{if(e.button!=null&&e.button!==0)return;pointerId=e.pointerId;sx=e.clientX;sy=e.clientY;drag=false;card.setPointerCapture?.(pointerId);card.classList.add('pressed');});
        card.addEventListener('pointermove',e=>{if(pointerId!==e.pointerId)return;const dx=e.clientX-sx,dy=e.clientY-sy;if(!drag&&Math.hypot(dx,dy)>9){drag=true;card.classList.add('dragging');}if(drag){card.style.setProperty('--drag-x',`${dx}px`);card.style.setProperty('--drag-y',`${dy}px`);}});
        const finish=e=>{if(pointerId!==e.pointerId)return;card.releasePointerCapture?.(pointerId);card.classList.remove('pressed');const from=Number(card.dataset.readyCard);if(drag){const target=document.elementsFromPoint(e.clientX,e.clientY).map(el=>el.closest?.('[data-ready-card]')).find(el=>el&&el!==card);const to=target?Number(target.dataset.readyCard):from;card.classList.remove('dragging');card.style.removeProperty('--drag-x');card.style.removeProperty('--drag-y');if(Number.isInteger(to)&&to!==from){const prev=readyStats(match).p;if(movePlayerCard(match,from,to))paint(null,prev);}else card.animate?.([{transform:'scale(1.05)'},{transform:'scale(1)'}],{duration:140});}else openDetail(from);pointerId=null;};
        card.addEventListener('pointerup',finish);card.addEventListener('pointercancel',e=>{if(pointerId===e.pointerId){card.classList.remove('pressed','dragging');card.style.removeProperty('--drag-x');card.style.removeProperty('--drag-y');pointerId=null;}});
        card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openDetail(Number(card.dataset.readyCard));}});
      });
      ov.querySelector('[data-start-fight]').onclick=()=>resolve({action:'fight'});
      ov.querySelector('[data-quit-fight]').onclick=()=>resolve({action:'quit'});
    };
    paint();
  });
}

function fighterMarkup(row){return `<div class="mpb-fighter ${row.side} pos-${row.index} ${row.boosted?'boosted':''}" data-fighter="${row.key}"><div class="mpb-fighter-art">${art(row.id)}</div><div class="mpb-fighter-hp"><i style="width:100%"></i></div><small>${esc(row.f?.name||'')}</small></div>`;}
function updateFighter(arena,row){const el=arena.querySelector(`[data-fighter="${row.key}"]`);if(!el)return;const bar=el.querySelector('.mpb-fighter-hp i');if(bar)bar.style.width=`${pct(row.hp,row.maxHp)}%`;el.classList.toggle('ko',row.hp<=0);}
function setTeamLife(ov,side,value,max){const wrap=ov.querySelector(`.mpb-team-life.${side}`);if(!wrap)return;wrap.querySelector('i').style.width=`${pct(value,max)}%`;wrap.querySelector('b').textContent=`${Math.max(0,Math.round(value))} / ${Math.max(1,Math.round(max))}`;}
function playPieceSkillFx(arena,target,seed=0){
  if(!arena||!target)return;const host=arena.getBoundingClientRect(),r=target.getBoundingClientRect(),frames=PIECE_SKILL_FX[Math.abs(seed)%PIECE_SKILL_FX.length],fx=document.createElement('img');fx.className='mpb-skill-fx';fx.style.left=`${r.left-host.left+r.width/2}px`;fx.style.top=`${r.top-host.top+r.height/2}px`;let i=0;fx.onerror=()=>fx.remove();fx.src=assetPath(frames[0]);arena.appendChild(fx);const timer=setInterval(()=>{i++;if(i>=frames.length){clearInterval(timer);setTimeout(()=>fx.remove(),70);return;}fx.src=assetPath(frames[i]);},55);
}
function spawnImpact(arena,target,powerHit,crit,damage){
  const host=arena.getBoundingClientRect(),r=target.getBoundingClientRect(),fx=document.createElement('div');fx.className=`mpb-impact ${powerHit?'power':''} ${crit?'critical':''}`;fx.style.left=`${r.left-host.left+r.width/2}px`;fx.style.top=`${r.top-host.top+r.height/2}px`;fx.innerHTML=`<svg viewBox="0 0 180 130" aria-hidden="true"><path d="M23 83C1 67 10 42 34 43C26 19 55 7 69 27C80 3 112 8 114 34C139 17 158 39 148 59C177 58 183 89 158 101C157 125 124 130 109 110C89 132 59 123 58 105C35 122 10 105 23 83Z"/><path class="in" d="M54 73C46 55 66 43 79 56C88 39 112 49 109 68C130 67 134 91 115 96C101 110 82 100 80 88C64 98 49 89 54 73Z"/></svg>${Array.from({length:8},(_,i)=>`<i style="--a:${i*45}deg;--d:${46+(i%3)*12}px">${i%3?'☆':'★'}</i>`).join('')}<b>${damage}</b>${crit?'<strong>CRITICAL!</strong>':''}`;arena.appendChild(fx);setTimeout(()=>fx.remove(),reduced()?80:600);
}

async function animateStrike(arena,a,d,{powerHit,crit,ko,damage}){
  const ae=arena.querySelector(`[data-fighter="${a.key}"]`),de=arena.querySelector(`[data-fighter="${d.key}"]`);if(!ae||!de)return wait(50);
  const ra=ae.getBoundingClientRect(),rd=de.getBoundingClientRect(),dx=(rd.left+rd.width/2)-(ra.left+ra.width/2),dy=(rd.top+rd.height/2)-(ra.top+ra.height/2),dur=powerHit?BATTLE_TIMING.powerStrike:BATTLE_TIMING.normalStrike;
  if(!reduced())ae.animate([{transform:'translate(0,0) rotate(0) scale(1)'},{offset:.52,transform:`translate(${dx*.72}px,${dy*.72}px) rotate(${powerHit?18:7}deg) scale(${powerHit?1.24:1.12})`},{offset:.66,transform:`translate(${dx*.78}px,${dy*.78}px) rotate(${powerHit?-12:-5}deg) scale(1.06)`},{transform:'translate(0,0) rotate(0) scale(1)'}],{duration:dur,easing:'cubic-bezier(.18,.84,.25,1)'});
  await wait(Math.round(dur*.5));if(powerHit)playPieceSkillFx(arena,de,a.index+(a.side==='cpu'?3:0));spawnImpact(arena,de,powerHit,crit,damage);
  if(!reduced()){
    const fly=(d.side==='cpu'?1:-1)*(70+Math.random()*85),rot=(Math.random()>.5?1:-1)*(ko?720:300);
    de.animate([{transform:'translate(0,0) rotate(0) scale(1)'},{offset:.45,transform:`translate(${fly}px,${-28-Math.random()*65}px) rotate(${rot}deg) scale(${ko ? .65 : .88})`},{transform:ko?`translate(${fly*1.55}px,${-90-Math.random()*60}px) rotate(${rot*1.6}deg) scale(.35)`:'translate(0,0) rotate(0) scale(1)'}],{duration:ko?BATTLE_TIMING.ko:285,easing:'cubic-bezier(.12,.8,.25,1)',fill:ko?'forwards':'none'});
  }
  await wait(Math.round(dur*.5));
}

async function combatPhase(ov,match,request){
  const pRows=fighterRows(match.pHand,match.cHand,'player',2,byId,tagsMap,match.boostIndex),cRows=fighterRows(match.cHand,match.pHand,'cpu',match.cCenter,byId,tagsMap),rows=[...pRows,...cRows];
  const p=teamStats(pRows,match.pHand,byId,tagsMap),c=teamStats(cRows,match.cHand,byId,tagsMap);let pLife=p.hp,cLife=c.hp;
  ov.innerHTML=`<section class="mpb-battle-panel fight-phase">${score(match)}${lifeBar('CPU LIFE',cLife,c.hp,'cpu')}<div class="mpb-fight-summary top">${totalStats('CPU',c,'cpu')}${activeTags(match.cHand)}</div><div class="mpb-arena"><div class="mpb-arena-ring"></div>${cRows.map(fighterMarkup).join('')}${pRows.map(fighterMarkup).join('')}<strong class="mpb-start-call">集合中…</strong></div><div class="mpb-fight-summary bottom">${totalStats('PLAYER',p,'player')}${activeTags(match.pHand)}</div>${lifeBar('PLAYER LIFE',pLife,p.hp,'player')}</section>`;
  bindImageFallback(ov);const arena=ov.querySelector('.mpb-arena'),call=ov.querySelector('.mpb-start-call');arena.classList.add('gathering');await wait(BATTLE_TIMING.gather);call.textContent='START!';arena.classList.add('start-flash');await wait(BATTLE_TIMING.startFlash);call.remove();arena.classList.remove('gathering','start-flash');arena.classList.add('combat');
  let steps=0;
  while(pRows.some(x=>x.hp>0)&&cRows.some(x=>x.hp>0)&&steps<320){
    steps++;const actors=rows.filter(x=>x.hp>0),a=actors.reduce((best,x)=>!best||x.nextAt<best.nextAt?x:best,null);if(!a)break;const enemies=a.side==='player'?cRows:pRows,d=pickTarget(enemies);if(!d)break;
    a.nextAt+=1000/Math.max(18,a.spd);const powerHit=Math.random()<powerHitChance(a.f?.rarity),crit=Math.random()<critChance(a.spd),dmg=Math.min(d.hp,hitDamage(a,d,powerHit,crit)),ko=dmg>=d.hp;d.hp=Math.max(0,d.hp-dmg);
    await animateStrike(arena,a,d,{powerHit,crit,ko,damage:dmg});updateFighter(arena,d);pLife=aliveHp(pRows);cLife=aliveHp(cRows);setTeamLife(ov,'player',pLife,p.hp);setTeamLife(ov,'cpu',cLife,c.hp);
    if(!pRows.some(x=>x.hp>0)||!cRows.some(x=>x.hp>0))break;await wait(BATTLE_TIMING.betweenActionsMin+Math.random()*(BATTLE_TIMING.betweenActionsMax-BATTLE_TIMING.betweenActionsMin));
  }
  if(pRows.some(x=>x.hp>0)&&cRows.some(x=>x.hp>0)){
    const pp=aliveHp(pRows)/Math.max(1,p.hp),cc=aliveHp(cRows)/Math.max(1,c.hp),losers=pp>=cc?cRows:pRows;for(const x of losers){x.hp=0;updateFighter(arena,x);}pLife=aliveHp(pRows);cLife=aliveHp(cRows);setTeamLife(ov,'player',pLife,p.hp);setTeamLife(ov,'cpu',cLife,c.hp);
  }
  await wait(420);const won=cLife<=0;if(won)match.pWins++;else match.cWins++;match.history.push({round:match.round,won,pLife,cLife,pHand:[...match.pHand],cHand:[...match.cHand],boostId:match.boostIndex>=0?match.pHand[match.boostIndex]:null,centerId:match.pHand[2],cpuCenterId:match.cHand[match.cCenter]});match.pDiscard.push(...match.pHand);match.cDiscard.push(...match.cHand);return won;
}

async function roundResult(ov,match,won){
  const done=match.pWins>=RULES.winsToMatch||match.cWins>=RULES.winsToMatch;
  ov.innerHTML=`<section class="mpb-battle-panel mpb-round-result ${won?'win':'lose'}">${score(match)}<div class="mpb-result-emblem"><small>BATTLE ${match.round}</small><h2>${won?'YOU WIN!':'YOU LOSE'}</h2><strong>${match.pWins} - ${match.cWins}</strong></div><div class="mpb-result-next"><b>${done?'MATCH RESULT':`NEXT · BATTLE ${match.round+1}`}</b><span>${done?'勝敗決定！':'新しい5体をドローします'}</span></div></section>`;await wait(BATTLE_TIMING.roundResult);
  if(!done){ov.innerHTML=`<section class="mpb-battle-panel mpb-between"><small>MOB PIECE BATTLE</small><h2>BATTLE ${match.round+1}</h2><strong>DRAW START!</strong><p>前の5体を捨て、新しい5体をドローします。</p></section>`;await wait(BATTLE_TIMING.nextRound);}
  return done;
}

function metadataMarkup(meta){if(!meta)return '';const reward=meta.reward;return `${meta.rankResult?`<div class="mpb-final-rank"><small>RANK MATCH</small><b>RANK ${esc(meta.rankResult.tier)}</b><span>${meta.rankResult.points}/5 POINT</span>${meta.rankResult.promoted?'<strong>RANK UP!</strong>':meta.rankResult.demoted?'<strong>RANK DOWN</strong>':''}</div>`:''}${meta.message?`<p class="mpb-final-message">${esc(meta.message)}</p>`:''}${reward?`<div class="mpb-final-reward"><small>REWARD</small><b>${Number(reward.coins||0).toLocaleString('ja-JP')} COIN</b><b>${Number(reward.diamonds||0).toLocaleString('ja-JP')} DIAMOND</b></div>`:''}`;}
async function finalResult(ov,match,won,request,onResolved){
  const result={won,battleFor:match.pWins,battleAgainst:match.cWins,match,context:request.context||null};let meta=null;
  if(onResolved)meta=await onResolved(result);
  ov.innerHTML=`<section class="mpb-battle-panel mpb-match-result ${won?'win':'lose'}"><small>${esc(request.title||'MOB PIECE BATTLE')}</small><h2>${won?'VICTORY!':'DEFEAT'}</h2><div class="mpb-final-score"><b>${match.pWins}</b><span>−</span><b>${match.cWins}</b></div><p>${esc(request.opponentName||'CPU')}との対戦結果</p>${metadataMarkup(meta)}<button class="mpb-primary" data-close-battle>結果を確認</button></section>`;
  return new Promise(resolve=>{ov.querySelector('[data-close-battle]').onclick=()=>resolve({...result,meta});});
}

async function confirmQuit(ov,countsLoss){
  return new Promise(resolve=>{const d=document.createElement('div');d.className='mpb-confirm';d.innerHTML=`<div><small>MOB PIECE BATTLE</small><h3>対戦をやめますか？</h3><p>${countsLoss?'この対戦は敗北として記録されます。':'このフリーバトルは記録されません。'}</p><button data-no>戻る</button><button data-yes>やめる</button></div>`;ov.appendChild(d);d.querySelector('[data-no]').onclick=()=>{d.remove();resolve(false);};d.querySelector('[data-yes]').onclick=()=>{d.remove();resolve(true);};});
}

export async function launchBattle({profile,request,onResolved,saveProfile,testMode=false}){
  const check=deckPlayable(profile.deck,byId,profile.owned,{ignoreOwnership:testMode});if(!check.valid)throw new Error(check.errors[0]||'25体のデッキを完成させてください。');
  const cpuMode=request.mode==='free'?'free':'rank',cpuKey=cpuMode==='free'?(request.difficulty||'easy'):(request.cpuRank||profile.rank||'F'),cpu=buildCpuDeck(figures,cpuMode,cpuKey);if(cpu.deck.length!==25)throw new Error('CPUデッキを準備できませんでした。');
  const match=createMatch({playerDeck:profile.deck,cpuDeck:cpu.deck,cpuAi:cpu.cfg.ai,context:request.context||{}}),ov=createOverlay();document.documentElement.classList.add('battle-running');
  try{
    while(match.pWins<RULES.winsToMatch&&match.cWins<RULES.winsToMatch){
      nextRound(match,byId,tagsMap);
      await preloadBattleArt([...match.pHand,...match.cHand]);
      await drawIntro(ov,match,request);

      // READY画面で「対戦をやめる」→「戻る」を選んだ場合は、
      // 同じ5体・同じ配置のREADY画面へ戻す。次BATTLEのドローへ進めない。
      let startFight=false;
      let leaveMatch=false;
      while(!startFight&&!leaveMatch){
        const ready=await readyPhase(ov,match,request);
        if(ready.action==='fight'){
          startFight=true;
          break;
        }
        const quit=await confirmQuit(ov,request.forfeitCountsLoss!==false);
        if(!quit)continue;
        if(request.forfeitCountsLoss===false){
          closeOverlay(ov);
          return {cancelled:true};
        }
        match.cWins=RULES.winsToMatch;
        leaveMatch=true;
      }
      if(leaveMatch)break;

      const wonRound=await combatPhase(ov,match,request);
      const done=await roundResult(ov,match,wonRound);
      if(done)break;
    }
    const won=match.pWins>=RULES.winsToMatch;const result=await finalResult(ov,match,won,request,onResolved);saveProfile?.();closeOverlay(ov);return result;
  }finally{document.documentElement.classList.remove('battle-running');}
}
