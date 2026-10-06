import {selectCpuStarter} from '../game/piece-starters.js';
import * as game from '../game/soul-battle.js';
import catalog from '../data/soul-catalog.js';
import {esc} from './soulLibrary.js';
const {soulFigures,soulById,classNames,validateSoulDeck,ensureSoulDecks,autoSoulDeck,createSoulBattle,summon,fusionOptions,fuse,canSkill,useSkill,skillChoices,reactionOptions,passReaction,cpuRespond,beginBattle,attack,endTurn,cpuMain,cpuAttack,stats,attackLimit,moveAfterAttack}=game;
export async function launchBattle({profile,request,onResolved}){
 const deck=ensureSoulDecks(profile),check=validateSoulDeck(deck,profile.owned);if(!check.valid)throw Error(check.errors[0]||'合計45体のデッキを完成させてください');
 const enemy=selectCpuStarter(request.difficulty),state=createSoulBattle([deck,enemy.deck],['PLAYER',request.opponentName||enemy.name]);
 const dialog=document.createElement('dialog');dialog.className='soul-battle-dialog';document.body.append(dialog);dialog.showModal();
 let selected=null,materials=[],error='',settled=false,meta=null,skillUid=null,skillValues={},bannerSeen=0;
 const asset=f=>`<img src="${new URL(f.image,document.baseURI).href}" alt="${esc(f.name)}">`;
 const field=side=>`<div class="soul-field">${state.players[side].field.map((p,i)=>{if(!p)return `<div class="soul-empty">${i+1}<small>EMPTY</small></div>`;const f=soulById.get(p.id),n=stats(p);return `<button data-piece="${p.uid}" data-side="${side}" class="soul-piece ${p.mobFusion?'mob-fused':''} ${selected===p.uid||materials.includes(p.uid)?'selected':''}"><small>${f.rarity} · ${f.attribute}</small>${asset(f)}<b>${esc(f.name)}</b><span>ATK ${n.atk} / DEF ${n.def}</span><em>${p.mobFusion?'MOB SOUL FUSION':classNames[f.soulClass]}</em><em>${p.attacks?'攻撃 '+p.attacks+'/'+attackLimit(p):'未攻撃'}</em></button>`;}).join('')}</div>`;
 function skillForm(){
  if(skillUid===null)return '';
  const f=state.players[0].field.find(f=>f?.uid===skillUid);if(!f||!canSkill(state,0,skillUid)){skillUid=null;return '';}
  // Recompute dependent deck/tag selections after the first choice changes.
  for(let pass=0;pass<2;pass++)for(const c of skillChoices(state,0,skillUid,skillValues))if(!c.choices.some(o=>o.value===String(skillValues[c.key])))skillValues[c.key]=c.choices[0]?.value;
  const choices=skillChoices(state,0,skillUid,skillValues);
  return `<form class="soul-skill-form"><b>${esc(soulById.get(f.id).soulSkill.name)}</b><p>${esc(soulById.get(f.id).soulSkill.description)}</p>${choices.map(c=>`<label>${esc(c.label)}<select data-skill-choice="${c.key}">${c.choices.map(o=>`<option value="${esc(o.value)}" ${String(skillValues[c.key])===o.value?'selected':''}>${esc(c.key==='tag'?catalog.tags.find(t=>t.id===o.value)?.name||o.label:o.label)}</option>`).join('')}</select></label>`).join('')}<div class="soul-actions"><button type="button" data-skill-confirm ${choices.some(c=>!c.choices.length)?'disabled':''}>発動する</button><button type="button" data-skill-cancel>戻る</button></div></form>`;
 }
 function responsePanel(){
  if(!state.pending||state.pending.side===0)return '';
  const title={attack:'相手の攻撃宣言',skill:'相手のスキル発動',defeat:'撃破への対応'}[state.pending.kind];
  return `<section class="soul-response"><small>RESPONSE WINDOW</small><h3>${title}</h3><p>対応スキルを1つ選ぶか、そのまま進めてください。</p>${reactionOptions(state,0).map(f=>`<button data-response="${f.uid}">${esc(soulById.get(f.id).name)}<small>${esc(soulById.get(f.id).soulSkill.name)}</small></button>`).join('')}<button data-pass>使用せず進む →</button></section>`;
 }
 function render(){
  const p=state.players[0],cpu=state.players[1],own=state.active===0,main=state.phase==='main',chosen=p.field.find(f=>f?.uid===selected),pending=!!state.pending,opts=fusionOptions(state,0,materials);
  const banner=state.fusionBanner&&state.fusionBanner.serial!==bannerSeen?state.fusionBanner:null;if(banner)bannerSeen=banner.serial;
  const moving=state.moveChoice?.side===0?state.moveChoice:null;
  dialog.innerHTML=`<section class="soul-arena"><header><div><small>SOUL FUSION</small><b>${esc(request.title||'SOUL BATTLE')}</b></div><button data-quit>退出</button></header><div class="soul-turn"><b>TURN ${state.turn}</b><span>${own?'あなた':'相手'} · ${main?'メイン':state.phase==='finished'?'終了':'バトル'}</span></div>${banner?`<div class="soul-fusion-banner ${banner.special?'special':''}" role="status"><b>${banner.special?'MOB SOUL FUSION':'SOUL FUSION'}</b><span>${esc(banner.name)}</span>${banner.special?'<small>ATK +20 · DEF +20</small>':''}</div>`:''}<div class="soul-life enemy"><span>${esc(cpu.name)} <small>山札 ${cpu.deck.length} · 手札 ${cpu.hand.length}</small></span><b>${cpu.life}<small>/400</small></b><meter max="400" value="${cpu.life}"></meter></div>${field(1)}<div class="soul-versus">${state.winner!==null?(state.winner===0?'VICTORY':'DEFEAT'):pending?'RESPONSE':own?'YOUR MOVE':'OPPONENT TURN'}</div>${field(0)}<div class="soul-life"><span>PLAYER <small>山札 ${p.deck.length} · 墓地 ${p.grave.length}</small></span><b>${p.life}<small>/400</small></b><meter max="400" value="${p.life}"></meter></div><div class="soul-command"><p role="status">${esc(error||state.log.at(-1))}</p>${state.winner!==null?`<h2>${esc(state.reason)}</h2><p>${esc(meta?.message||'対戦終了')}</p><button data-close-result>戻る</button>`:`<p class="soul-skill-budget">あなたのスキル：${p.skillUsed?'使用済み':'残り1回'} / 相手：${cpu.skillUsed?'使用済み':'残り1回'}</p>${responsePanel()}${skillForm()}${chosen?`<div class="soul-active-info"><b>${esc(soulById.get(chosen.id).soulSkill.name)}</b><small>${esc(soulById.get(chosen.id).soulSkill.timingLabel)}</small><p>${esc(soulById.get(chosen.id).soulSkill.description)}</p></div>`:''}<div class="soul-actions"><button data-skill ${!chosen||!canSkill(state,0,chosen.uid)?'disabled':''}>ソウルスキル</button>${pending?'':own&&main?`<button data-material ${!chosen?'disabled':''}>${materials.includes(selected)?'素材から外す':'素材に選ぶ'}</button><button data-phase>バトルへ →</button>`:own?'<button data-end>ターン終了 →</button>':main?'<button data-cpu-phase>CPUバトルへ →</button>':'<button data-cpu-step>次のCPU攻撃 →</button>'}</div>${own&&!main&&!pending?'<p>自分の駒を選び、続けて攻撃対象を選択してください。</p>':''}${moving?`<div class="soul-actions">${p.field.map((f,i)=>`<button data-move="${i}">${i+1}枠目へ移動</button>`).join('')}<button data-move-skip>移動しない</button></div>`:''}${own&&main&&!pending?`<div class="soul-fusion-options">${materials.length===2?(opts.length?opts.map(r=>`<button data-fuse="${r.id}" class="${r.special?'special':''}">${r.special?'MOB融合':'融合'} → ${esc(soulById.get(r.target).name)}<small>${esc(r.label)}${r.special?' · ATK/DEF +20':''}</small></button>`).join(''):'<p>条件を満たす融合先がありません。階級・使用済みスキル・専用領域を確認してください。</p>'):'<p>融合する駒を2体、素材に選んでください。</p>'}</div>`:''}${p.revealTurn===state.turn?`<div class="soul-revealed"><b>このターンの融合候補</b><p>${p.revealed.map(id=>esc(soulById.get(id).name)).join(' / ')||'候補なし'}</p></div>`:''}<div class="soul-hand">${p.hand.map((id,i)=>{const f=soulById.get(id);return `<button data-summon="${i}" ${!own||!main||pending||!p.field.includes(null)||!game.canSummonHand(state,0,i)?'disabled':''}>${asset(f)}<b>${esc(f.name)}</b><span>${f.atk} / ${f.def}</span></button>`;}).join('')}</div><details><summary>専用領域 · ${p.reserve.length}体</summary><div class="soul-reserve">${p.reserve.map(id=>`<span>${esc(soulById.get(id).name)} / ${classNames[soulById.get(id).soulClass]}</span>`).join('')}</div></details>`}</div><details class="soul-log"><summary>対戦ログ</summary>${state.log.slice(-30).map(t=>`<p>${esc(t)}</p>`).join('')}</details></section>`;
 }
 const result=()=>({won:state.winner===0,battleFor:state.winner===0?1:0,battleAgainst:state.winner===1?1:0,match:{ruleset:'soul-master-v1',playerDeckOriginal:deck,cpuDeckOriginal:state.players[1].original,history:[{pHand:state.players[0].used,cHand:state.players[1].used,won:state.winner===0}],life:state.players.map(p=>p.life),reason:state.reason},soulState:state});
 async function settle(){if(state.winner!==null&&!settled){settled=true;meta=await onResolved?.(result());}}
 render();return new Promise(resolve=>{
  const close=value=>{dialog.close();dialog.remove();resolve(value);};
  function showQuit(){const box=document.createElement('div');box.className='soul-quit';box.innerHTML='<section><h2>対戦を終了しますか？</h2><p>この対戦は敗北として記録されます。</p><button data-stay>戻る</button><button data-forfeit>降参する</button></section>';dialog.append(box);box.querySelector('[data-stay]').onclick=()=>box.remove();box.querySelector('[data-forfeit]').onclick=async()=>{state.winner=1;state.reason='降参';state.phase='finished';await settle();render();};}
  dialog.addEventListener('cancel',e=>{e.preventDefault();showQuit();});
  dialog.onchange=e=>{if(e.target.dataset.skillChoice){const scroll=dialog.scrollTop;skillValues[e.target.dataset.skillChoice]=e.target.value;render();dialog.scrollTop=scroll;}};
  dialog.onclick=async e=>{const b=e.target.closest('button');if(!b)return;error='';const scroll=dialog.scrollTop;try{
   if(b.hasAttribute('data-quit')){if(settled)close(result());else showQuit();return;}
   if(b.hasAttribute('data-close-result')){close(result());return;}
   if(b.hasAttribute('data-summon'))summon(state,0,Number(b.dataset.summon),state.players[0].field.indexOf(null));
   if(b.hasAttribute('data-piece')){const uid=Number(b.dataset.piece),side=Number(b.dataset.side);if(side===0)selected=uid;else if(state.active===0&&state.phase==='battle'&&!state.pending&&selected)attack(state,0,selected,uid);}
   if(b.hasAttribute('data-material'))materials=materials.includes(selected)?materials.filter(x=>x!==selected):[...materials.slice(-1),selected];
   if(b.hasAttribute('data-fuse')){fuse(state,0,materials,b.dataset.fuse);materials=[];selected=null;}
   if(b.hasAttribute('data-skill')||b.hasAttribute('data-response')){skillUid=b.hasAttribute('data-response')?Number(b.dataset.response):selected;skillValues={};}
   if(b.hasAttribute('data-skill-confirm')){useSkill(state,0,skillUid,skillValues);skillUid=null;}
   if(b.hasAttribute('data-skill-cancel'))skillUid=null;
   if(b.hasAttribute('data-pass')){passReaction(state,0);skillUid=null;}
   if(b.hasAttribute('data-move'))moveAfterAttack(state,0,state.moveChoice.uid,Number(b.dataset.move));
   if(b.hasAttribute('data-move-skip'))state.moveChoice=null;
   if(b.hasAttribute('data-phase')){beginBattle(state,0);materials=[];skillUid=null;}
   if(b.hasAttribute('data-end')){endTurn(state,0);selected=null;skillUid=null;if(state.winner===null)cpuMain(state);}
   if(b.hasAttribute('data-cpu-phase'))beginBattle(state,1);
   if(b.hasAttribute('data-cpu-step')){cpuAttack(state);selected=null;}
   for(let i=0;i<4&&state.pending?.side===0;i++)cpuRespond(state);
   await settle();
  }catch(err){error=err.message;}
  render();dialog.scrollTop=scroll;
  if(b.hasAttribute('data-response')||b.hasAttribute('data-skill'))dialog.querySelector('.soul-skill-form')?.scrollIntoView({block:'nearest',behavior:'smooth'});
  else if(state.pending?.side===1)dialog.querySelector('.soul-response')?.scrollIntoView({block:'nearest',behavior:'smooth'});
  };
 });
}
