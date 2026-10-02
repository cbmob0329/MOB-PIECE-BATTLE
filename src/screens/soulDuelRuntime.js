import * as g from '../game/soul-battle.js';
import catalog from '../data/soul-catalog.js';
import {battleStyle,setBattleStyle} from '../data/battle-style.js';
import {battleIcon,cubeMarkup} from '../components/battle-art.js';
import {createBattleDirector} from '../components/battle-director.js';
import {esc} from './soulLibrary.js';
const {soulById:byId,soulFigures:figures}=g;
const art=f=>f?`<img src="${esc(f.image)}" alt="${esc(f.name)}" draggable="false">`:'';
const colors={'火':'#ff915b','水':'#64bcff','雷':'#ffe66e','地':'#dcac77','風':'#9ee895','光':'#ffe5a0','闇':'#c897ff','無':'#d2e2f7'};
export async function launchBattle({profile,request,onResolved,saveProfile}){
 const deck=[...g.ensureSoulDecks(profile)],check=g.validateSoulDeck(deck,profile.owned);if(!check.valid)throw Error(check.errors[0]||'45体（シード30・ミドル10・MOB5）のデッキを完成させてください');
 const strength=request.difficulty==='easy'?1:request.difficulty==='hard'?3:2;
 const cpuOwned=Object.fromEntries(figures.map(f=>[f.id,(f.soulClass==='mob'||(strength===1?['R','SR','SSR']:strength===2?['R','SR','SSR','UR']:['R','SR','SSR','UR','MOB']).includes(f.rarity))?5:0]));
 const cpuDeck=g.autoSoulDeck(cpuOwned),state=g.createSoulBattle([deck,cpuDeck],['PLAYER',request.opponentName||'CPU']),style=battleStyle(profile);
 const dialog=document.createElement('dialog');dialog.className='soul-battle-dialog duel-dialog';dialog.setAttribute('aria-label','MOB SOUL BATTLE');document.body.append(dialog);dialog.showModal();
 let selected=null,hand=null,materials=[],sheet=null,skillValues={},busy=false,settled=false,meta=null,eventCursor=0,cpuPrepared=0,closed=false,message='',suppressClick=false,drag=null,resolveDone;
 const done=new Promise(resolve=>{resolveDone=resolve;});
 const director=createBattleDirector(dialog,{profile,style});
 const own=()=>state.active===0,main=()=>own()&&state.phase==='main'&&!state.pending&&state.winner===null;
 const selectedPiece=()=>state.players[0].field.find(p=>p?.uid===selected);
 const result=()=>({won:state.winner===0,battleFor:state.winner===0?1:0,battleAgainst:state.winner===1?1:0,match:{ruleset:'soul-master-v1',playerDeckOriginal:deck,cpuDeckOriginal:cpuDeck,history:[{pHand:state.players[0].used,cHand:state.players[1].used,won:state.winner===0}],life:state.players.map(p=>p.life),reason:state.reason},soulState:state});
 const close=()=>{closed=true;director.destroy();dialog.close();dialog.remove();resolveDone(result());};
 const tagName=id=>catalog.tags.find(t=>t.id===id)?.name||id;
 function playerHud(side){const p=state.players[side],f=byId.get(side===0?profile.avatarId:cpuDeck[0])||byId.get(deck[0]);return `<div class="duel-player side-${side}"><div class="duel-avatar">${art(f)}</div><span><small>${esc(p.name)}</small><b data-life="${side}"><em>LIFE</em> ${p.life}</b><i class="duel-life-track"><i style="width:${p.life/4}%"></i></i></span></div>`;}
 function field(side){const ready=g.fusionReadyUids(state,side);return `<div class="duel-field side-${side}" aria-label="${side?'相手':'自分'}のフィールド">${state.players[side].field.map((p,slot)=>{if(!p)return `<button class="duel-slot empty ${hand!==null&&side===0&&main()?'drop-ready':''}" data-empty="${slot}" data-side="${side}" aria-label="${side?'相手':'自分'}の空き枠${slot+1}"><i class="duel-pedestal"></i><b>＋</b><small>${side?'ENEMY':'SUMMON'}</small></button>`;const f=byId.get(p.id),n=g.stats(p),canTarget=side===1&&selectedPiece()&&g.canAttack(state,0,selectedPiece(),p);return `<button class="duel-slot ${p.mobFusion?'mob-fused':''} ${ready.has(p.uid)?'fusion-ready':''} ${selected===p.uid?'selected':''} ${materials.includes(p.uid)?'material':''} ${canTarget?'targetable':''}" data-piece="${p.uid}" data-side="${side}" data-slot="${slot}" style="--attribute:${colors[f.attribute]||'#9fd6ff'}" aria-label="${esc(f.name)} ATK ${n.atk} DEF ${n.def}"><span class="duel-rarity">${f.rarity} <i>${f.attribute}</i></span><i class="duel-pedestal"></i><div class="duel-figure">${art(f)}</div><b class="duel-figure-name">${esc(f.name)}</b><span class="duel-stats"><span>ATK <b>${n.atk}</b></span><span>DEF <b>${n.def}</b></span></span><small class="duel-status">${ready.has(p.uid)?'融合可能':p.mobFusion?'+20 / +20 · MOB':p.skillTurn===state.turn?'SKILL USED':p.attacks?'攻撃 '+p.attacks+'/'+g.attackLimit(p):g.classNames[f.soulClass].replace('ソウル','')}</small></button>`;}).join('')}</div>`;}
 function hint(){if(message)return message;if(state.pending)return '対応スキルを選ぼう！';if(!own())return '相手のターン';if(hand!==null)return '空き台座へ召喚！';if(materials.length===2)return '融合先を選ぼう！';if(materials.length)return 'もう1体の素材を選ぼう！';if(state.phase==='battle')return selected?'攻撃する相手を選ぼう！':'アタックの時間！';return '召喚できます！';}
 function command(){const p=selectedPiece();if(state.winner!==null)return '';if(state.pending)return `<button class="duel-primary" data-open-response>${battleIcon('skill')} 対応スキルを確認 →</button>`;
  if(!own())return '<div class="duel-wait">相手が行動しています <i></i></div>';
  if(hand!==null&&main())return `<button class="duel-primary" data-summon ${state.players[0].field.includes(null)&&g.canSummonHand(state,0,hand)?'':'disabled'}>${battleIcon('summon')} 空き枠へ召喚</button><button class="duel-secondary" data-clear>戻る</button>`;
  if(p)return `<button class="duel-secondary" data-inspect="${p.id}">性能</button><button class="duel-secondary" data-skill ${g.canSkill(state,0,p.uid)?'':'disabled'}>${battleIcon('skill')} スキル</button>${main()?`<button class="duel-primary" data-material>${battleIcon('fusion')} ${materials.includes(p.uid)?'素材から外す':'融合素材にする'}</button>`:'<span class="duel-target-hint">光る相手をタップ</span>'}`;
  return `<button class="duel-primary" ${main()?'data-phase':'data-end'}>${battleIcon(main()?'battle':'end')} ${main()?'バトルへ進む':'ターン終了'}</button><button class="duel-secondary" data-help>遊び方</button>`;
 }
 function sheetMarkup(){
  let title='',body='';
  const pending=state.pending?.side===1;
  if(!sheet&&pending)sheet={type:'response'};
  if(!sheet)return '';
  if(sheet.type==='response'){title={attack:'相手の攻撃宣言！',skill:'相手のスキル発動！',defeat:'撃破への対応！'}[state.pending?.kind]||'対応スキル';body=`<p>スキルは各プレイヤー、このターンに合計1回。</p><div class="duel-response-list">${g.reactionOptions(state,0).map(p=>`<button data-response="${p.uid}">${art(byId.get(p.id))}<span><b>${esc(byId.get(p.id).name)}</b><small>${esc(byId.get(p.id).soulSkill.name)}</small></span>→</button>`).join('')}</div><button class="duel-primary wide" data-pass>使用せず進む →</button>`;}
  if(sheet.type==='skill'){
   const f=state.players[0].field.find(p=>p?.uid===sheet.uid);if(!f)return '';const spec=byId.get(f.id).soulSkill;
   for(let pass=0;pass<2;pass++)for(const c of g.skillChoices(state,0,f.uid,skillValues))if(!c.choices.some(o=>o.value===String(skillValues[c.key])))skillValues[c.key]=c.choices[0]?.value;
   const choices=g.skillChoices(state,0,f.uid,skillValues);title=spec.name;
   body=`<small class="duel-timing">${esc(spec.timingLabel)}</small><p>${esc(spec.description)}</p>${choices.map(c=>`<label>${esc(c.label)}<select data-skill-choice="${c.key}">${c.choices.map(o=>`<option value="${esc(o.value)}" ${String(skillValues[c.key])===o.value?'selected':''}>${esc(c.key==='tag'?tagName(o.value):o.label)}</option>`).join('')}</select></label>`).join('')}<button class="duel-primary wide" data-skill-confirm ${choices.some(c=>!c.choices.length)?'disabled':''}>ソウルスキル発動！</button>`;
  }
  if(sheet.type==='fusion'){
   const options=g.fusionOptions(state,0,materials);title='ソウルフュージョン';body=`<div class="fusion-confirm-pair">${materials.map(uid=>art(byId.get(state.players[0].field.find(p=>p?.uid===uid)?.id))).join('<b>＋</b>')}</div><p>この2体を融合させますか？ 融合先を選んでください。</p><div class="fusion-recipe-list">${options.map(r=>`<button data-recipe="${r.id}" class="${sheet.recipe===r.id?'chosen':''} ${r.special?'special':''}">${art(byId.get(r.target))}<span><b>${esc(byId.get(r.target).name)}</b><small>${r.special?'MOB SOUL FUSION · ATK/DEF +20':esc(r.label)}</small></span></button>`).join('')||'<p>この素材で呼び出せるフィギュアが専用領域にありません。使用済みスキルとレシピも確認してください。</p>'}</div><div class="duel-sheet-actions"><button class="duel-secondary" data-sheet-close>キャンセル</button><button class="duel-primary" data-fuse ${options.some(r=>r.id===sheet.recipe)?'':'disabled'}>融合する！</button></div>`;
  }
  if(sheet.type==='inspect'){
   const f=byId.get(sheet.id);title=f.name;body=`<div class="duel-detail-figure">${art(f)}<div><b>${f.rarity} · ${g.classNames[f.soulClass]}</b><p>ATK ${f.atk} / DEF ${f.def}</p><small>${f.attribute}属性 · ${f.attackType}</small></div></div><h3>${esc(f.soulSkill.name)}</h3><small>${esc(f.soulSkill.timingLabel)}</small><p>${esc(f.soulSkill.description)}</p><div class="duel-tags">${f.tags.map(t=>`<span>${esc(tagName(t))}</span>`).join('')}</div><p>${f.fusionMaterials.map(r=>`${r.special?'MOB融合：':''}${esc(r.label)}`).join('<br>')||'手札から召喚できます'}</p>`;
  }
  if(['deck','grave','reserve'].includes(sheet.type)){const p=state.players[sheet.side||0],ids=sheet.type==='deck'?p.deck:sheet.type==='grave'?p.grave:p.reserve;title={deck:'シードデッキ',grave:'ソウルの墓地',reserve:'フュージョン専用領域'}[sheet.type]+' · '+ids.length;body=`<div class="duel-zone-list">${ids.map(id=>`<button data-inspect="${id}">${art(byId.get(id))}<span>${esc(byId.get(id).name)}</span></button>`).join('')||'<p>まだフィギュアはありません。</p>'}</div>`;}
  if(sheet.type==='move'){title='攻撃後の位置変更';body=`<p>移動先を選んでください。攻撃回数は引き継ぎます。</p>${state.players[0].field.map((p,i)=>`<button class="duel-secondary wide" data-move="${i}">${i+1}枠目 · ${p?esc(byId.get(p.id).name):'空き枠'}</button>`).join('')}<button class="duel-primary wide" data-move-skip>移動せず続ける</button>`;}
  if(sheet.type==='quit'){title='対戦を終了しますか？';body='<p>降参すると、この対戦は敗北として記録されます。</p><div class="duel-sheet-actions"><button class="duel-secondary" data-sheet-close>続ける</button><button class="duel-primary" data-forfeit>降参する</button></div>';}
  if(sheet.type==='help'){title='ソウルを動かそう！';body='<p><b>召喚</b><br>手札を選び、空き台座をタップ。ドラッグでも召喚できます。</p><p><b>フュージョン</b><br>自分のフィギュアを、もう1体へドラッグ。素材選択ボタンでも操作できます。確認してから融合します。</p><p><b>バトル</b><br>自分のフィギュア→光る相手の順にタップ。ATKとDEFの差がLIFEダメージです。</p><p><b>対応スキル</b><br>割り込みのタイミングで選択画面が開きます。各プレイヤー1ターン1回。</p><p>ドローはターン開始時に手札5体まで自動で行います。召喚コストや直接攻撃はありません。</p>';}
  if(sheet.type==='log'){title='バトルの記録';body=state.log.slice(-30).map(t=>`<p class="duel-log-row">${esc(t)}</p>`).join('');}
  return `<div class="duel-sheet-backdrop"><section class="duel-sheet" role="dialog" aria-modal="true" aria-label="${esc(title)}"><header><h2>${esc(title)}</h2><button data-sheet-close aria-label="閉じる">×</button></header>${body}</section></div>`;
 }
 function results(){const won=state.winner===0;const representative=byId.get(state.players[won?0:1].field.find(Boolean)?.id)||byId.get(won?profile.centerId:cpuDeck[0]);return `<div class="duel-result ${won?'win':'lose'}"><small>BATTLE FINISHED</small><h1>${won?'VICTORY!':'DEFEAT'}</h1><div class="result-figure">${art(representative)}<i>✦</i><i>✧</i><i>✦</i></div><h2>${won?'勝利！':'次こそ、勝利を。'}</h2><p>${esc(state.reason)}</p><div class="result-life"><span>YOU <b>${state.players[0].life}</b></span><span>CPU <b>${state.players[1].life}</b></span></div><p>${esc(meta?.message||'')}</p>${meta?.reward?`<div class="duel-reward">獲得報酬 ${Object.entries(meta.reward).filter(([,v])=>typeof v==='number'&&v>0).map(([k,v])=>`<b>${v} ${esc(k==='coins'?'COIN':k==='diamonds'?'MOB':k)}</b>`).join('')}</div>`:''}<button class="duel-primary wide" data-close-result>バトルメニューへ →</button></div>`;}
 function render(){
  const p=state.players[0],cpu=state.players[1],selectedId=hand!==null?p.hand[hand]:null;
  if(selected&&!selectedPiece())selected=null;
  dialog.innerHTML=`<section class="duel-screen" style="--mat:url('${new URL(style.mat.image,document.baseURI).href}');--mat-color:${style.mat.color}"><header class="duel-hud">${playerHud(0)}<div class="duel-turn-emblem"><small>TURN</small><b>${state.turn}</b><i>♛</i></div>${playerHud(1)}</header><div class="duel-topline"><b>${own()?'YOUR TURN':'ENEMY TURN'} <span>· ${state.phase==='main'?'MAIN':state.phase==='finished'?'FINISH':'BATTLE'}</span></b><div><button data-speed aria-label="演出速度">${style.fast?'×2':'×1'}</button><button data-sound aria-label="効果音">音 ${style.sound?'ON':'OFF'}</button><button data-quit aria-label="バトルメニュー">☰</button></div></div><div class="duel-stage"><div class="duel-stage-sky"><span>${esc(style.mat.name)}</span><span>ENEMY <b>DECK ${cpu.deck.length}</b> / 墓地 ${cpu.grave.length}</span></div><div class="duel-lane enemy"><span class="duel-lane-label">ENEMY FIELD</span>${field(1)}</div><div class="duel-divider"><i></i><b>SOUL BATTLE</b><i></i></div><div class="duel-lane ally"><span class="duel-lane-label">PLAYER FIELD</span>${field(0)}</div><div class="duel-budget"><span>自分のスキル <b>${p.skillUsed?'使用済み':'あと1回'}</b></span><span>相手 <b>${cpu.skillUsed?'使用済み':'あと1回'}</b></span></div></div><div class="duel-message" role="status"><div>${art(byId.get(selectedId||selectedPiece()?.id||profile.centerId)||byId.get(deck[0]))}</div><span><b>${esc(hint())}</b><small>${state.pending?'攻撃・スキルへの対応を選んでください。':selectedId?esc(byId.get(selectedId).name):own()&&state.phase==='main'?'手札を選ぶ / 台座のフィギュアを重ねて融合':own()?'自分のフィギュアから、攻撃する相手へ。':'対応できるタイミングで操作できます。'}</small></span></div><div class="duel-phases" aria-label="フェイズ操作">${[['draw','ドロー'],['summon','召喚'],['fusion','融合'],['battle','バトル'],['end','エンド']].map(([id,label])=>`<button data-step="${id}" class="${own()&&(state.phase==='main'?id===(materials.length?'fusion':'summon'):id==='battle')?'active':''}" ${!own()||state.pending||id==='draw'||(state.phase==='battle'&&['summon','fusion','battle'].includes(id))||(id==='end'&&!g.canEndTurn(state,0))?'disabled':''}>${battleIcon(id)}<span>${label}</span></button>`).join('')}</div><div class="duel-commands">${command()}</div><div class="duel-hand-wrap"><div class="duel-hand-title"><span>YOUR HAND <b>${p.hand.length}</b></span><span><button data-hand-scroll="-1" aria-label="手札を左へ">‹</button><button data-hand-scroll="1" aria-label="手札を右へ">›</button></span></div><div class="duel-hand">${p.hand.map((id,i)=>{const f=byId.get(id);return `<button class="duel-hand-piece ${hand===i?'selected':''}" data-hand="${i}" style="--attribute:${colors[f.attribute]||'#c4e4ff'}" ${!main()?'disabled':''}><small>${f.rarity} <i>${f.attribute}</i></small>${art(f)}<b>${esc(f.name)}</b><span><i>A ${f.atk}</i><i>D ${f.def}</i></span></button>`;}).join('')||'<p>次のターンに、手札を補充します。</p>'}</div></div><footer class="duel-footer"><button data-zone="deck">${cubeMarkup(style.cube.id)}<span>DECK<b>${p.deck.length}</b></span></button><button data-zone="reserve">${battleIcon('fusion')}<span>FUSION<b>${p.reserve.length}</b></span></button><button data-zone="grave">${battleIcon('grave')}<span>墓地<b>${p.grave.length}</b></span></button><button data-log aria-label="対戦ログ">≡</button></footer>${state.winner!==null?results():sheetMarkup()}<div class="duel-fx" aria-live="off"></div></section>`;
 }
 async function flush(){render();const events=(state.events||[]).filter(e=>e.seq>eventCursor);eventCursor=state.eventSerial||0;await director.run(events);}
 async function settle(){if(state.winner!==null&&!settled){settled=true;try{meta=await onResolved?.(result());}catch(err){meta={message:'結果の保存に失敗しました：'+err.message};}sheet=null;}}
 async function cpu(){for(let i=0;i<60&&!closed&&state.winner===null;i++){
  if(state.pending){if(state.pending.side===1)break;g.cpuRespond(state);await flush();continue;}
  if(state.active===0)break;
  if(state.phase==='main'){if(cpuPrepared!==state.turn){cpuPrepared=state.turn;g.cpuMain(state);}else g.beginBattle(state,1);}
  else g.cpuAttack(state);
  await flush();
 }}
 async function action(fn){if(busy||closed)return;busy=true;message='';sheet=null;try{fn();await flush();await cpu();await settle();if(state.moveChoice?.side===0&&!state.pending&&state.winner===null)sheet={type:'move'};}catch(err){message=err.message;}finally{busy=false;render();}}
 function openFusion(uids){if(!main())return;materials=uids;const options=g.fusionOptions(state,0,materials);sheet={type:'fusion',recipe:options.find(r=>r.special)?.id||options[0]?.id};hand=null;render();}
 function chooseMaterial(){materials=materials.includes(selected)?materials.filter(x=>x!==selected):[...materials.slice(-1),selected];if(materials.length===2)openFusion(materials);else{message='もう1体の素材を選ぼう！';render();}}
 dialog.addEventListener('cancel',e=>{e.preventDefault();if(busy){director.skip();return;}if(sheet){sheet=null;render();}else{sheet={type:'quit'};render();}});
 dialog.onchange=e=>{if(e.target.dataset.skillChoice){skillValues[e.target.dataset.skillChoice]=e.target.value;render();}};
 dialog.onclick=async e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-fx-skip')){director.skip();return;}
  if(b.hasAttribute('data-speed')||b.hasAttribute('data-sound')){const key=b.hasAttribute('data-speed')?'fast':'sound';style[key]=!style[key];setBattleStyle(profile,key,style[key]);saveProfile?.();if(!busy)render();return;}
  if(busy||suppressClick){suppressClick=false;return;}
  if(b.hasAttribute('data-close-result')){close();return;}
  if(b.hasAttribute('data-quit')){if(settled)close();else{sheet={type:'quit'};render();}return;}
  if(b.hasAttribute('data-sheet-close')){sheet=null;render();return;}
  if(b.hasAttribute('data-forfeit')){await action(()=>{state.winner=1;state.reason='降参';state.phase='finished';state.pending=null;});return;}
  if(b.hasAttribute('data-hand-scroll')){dialog.querySelector('.duel-hand')?.scrollBy({left:Number(b.dataset.handScroll)*160,behavior:'smooth'});return;}
  if(b.hasAttribute('data-zone')){sheet={type:b.dataset.zone};render();return;}
  if(b.hasAttribute('data-inspect')){sheet={type:'inspect',id:b.dataset.inspect};render();return;}
  if(b.hasAttribute('data-help')||b.hasAttribute('data-log')){sheet={type:b.hasAttribute('data-help')?'help':'log'};render();return;}
  if(b.hasAttribute('data-hand')){hand=Number(b.dataset.hand);selected=null;materials=[];message='';render();return;}
  if(b.hasAttribute('data-clear')){selected=null;hand=null;materials=[];message='';render();return;}
  if(b.hasAttribute('data-summon')||b.hasAttribute('data-empty')){if(hand!==null&&main()&&(!b.hasAttribute('data-empty')||b.dataset.side==='0')){const i=hand,slot=b.hasAttribute('data-empty')?Number(b.dataset.empty):state.players[0].field.indexOf(null);await action(()=>{g.summon(state,0,i,slot);hand=null;});}return;}
  if(b.hasAttribute('data-piece')){const uid=Number(b.dataset.piece),side=Number(b.dataset.side);if(side===0){selected=uid;hand=null;message='';render();}else if(state.phase==='battle'&&own()&&selected&&!state.pending){await action(()=>g.attack(state,0,selected,uid));}else{sheet={type:'inspect',id:state.players[1].field.find(p=>p?.uid===uid).id};render();}return;}
  if(b.hasAttribute('data-material')){chooseMaterial();return;}
  if(b.hasAttribute('data-recipe')){sheet.recipe=b.dataset.recipe;render();return;}
  if(b.hasAttribute('data-fuse')){const recipe=sheet.recipe,uids=[...materials];await action(()=>{g.fuse(state,0,uids,recipe);materials=[];selected=null;});return;}
  if(b.hasAttribute('data-skill')||b.hasAttribute('data-response')){sheet={type:'skill',uid:b.hasAttribute('data-response')?Number(b.dataset.response):selected};skillValues={};render();return;}
  if(b.hasAttribute('data-skill-confirm')){const uid=sheet.uid,options={...skillValues};await action(()=>g.useSkill(state,0,uid,options));return;}
  if(b.hasAttribute('data-pass')){await action(()=>g.passReaction(state,0));return;}
  if(b.hasAttribute('data-open-response')){sheet={type:'response'};render();return;}
  if(b.hasAttribute('data-move')){await action(()=>g.moveAfterAttack(state,0,state.moveChoice.uid,Number(b.dataset.move)));return;}
  if(b.hasAttribute('data-move-skip')){state.moveChoice=null;sheet=null;render();return;}
  const step=b.dataset.step;
  if(b.hasAttribute('data-phase')||step==='battle'){await action(()=>{g.beginBattle(state,0);hand=null;materials=[];});return;}
  if(b.hasAttribute('data-end')||step==='end'){await action(()=>{g.endTurn(state,0);selected=null;hand=null;materials=[];});return;}
  if(step==='summon'){selected=null;message='手札を選び、空き台座へ！';render();}
  if(step==='fusion'){if(materials.length===2)openFusion(materials);else{message='2体を重ねるか、素材を順に選ぼう！';render();}}
 };
 // Pointer events support mouse, pen and touch. A drag never commits a fusion directly.
 dialog.onpointerdown=e=>{if(busy||sheet||!main()||e.button!==0)return;const b=e.target.closest('[data-hand],[data-piece][data-side="0"]');if(!b)return;drag={pointer:e.pointerId,x:e.clientX,y:e.clientY,source:b,hand:b.hasAttribute('data-hand')?Number(b.dataset.hand):null,uid:b.dataset.piece?Number(b.dataset.piece):null,active:false};};
 dialog.onpointermove=e=>{if(!drag||e.pointerId!==drag.pointer)return;if(!drag.active&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)<9)return;e.preventDefault();if(!drag.active){drag.active=true;dialog.setPointerCapture(e.pointerId);const img=drag.source.querySelector('img');drag.ghost=document.createElement('div');drag.ghost.className='duel-drag-ghost';drag.ghost.innerHTML=img?.outerHTML||'';dialog.append(drag.ghost);dialog.classList.add('dragging');}const r=dialog.getBoundingClientRect();drag.ghost.style.left=(e.clientX-r.left)+'px';drag.ghost.style.top=(e.clientY-r.top)+'px';dialog.querySelectorAll('.drag-over').forEach(el=>el.classList.remove('drag-over'));document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-empty][data-side="0"],[data-piece][data-side="0"]')?.classList.add('drag-over');};
 const stopDrag=()=>{drag?.ghost?.remove();dialog.classList.remove('dragging');dialog.querySelectorAll('.drag-over').forEach(el=>el.classList.remove('drag-over'));drag=null;};
 dialog.onpointercancel=stopDrag;
 dialog.onpointerup=async e=>{if(!drag||e.pointerId!==drag.pointer)return;const d=drag;if(dialog.hasPointerCapture(e.pointerId))dialog.releasePointerCapture(e.pointerId);const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-empty][data-side="0"],[data-piece][data-side="0"]');stopDrag();if(!d.active)return;suppressClick=true;setTimeout(()=>{suppressClick=false;},150);
  if(d.hand!==null&&target?.hasAttribute('data-empty'))await action(()=>{g.summon(state,0,d.hand,Number(target.dataset.empty));hand=null;});
  else if(d.uid&&target?.dataset.piece&&Number(target.dataset.piece)!==d.uid)openFusion([d.uid,Number(target.dataset.piece)]);
  else{message='召喚は空き台座へ、融合はもう1体の素材へ。';render();}
 };
 render();busy=true;
 await director.run([{type:'start',playerId:profile.centerId||deck[0],enemyId:cpuDeck[0],enemyName:state.players[1].name},...state.events]);eventCursor=state.eventSerial||0;busy=false;render();
 return done;
}
