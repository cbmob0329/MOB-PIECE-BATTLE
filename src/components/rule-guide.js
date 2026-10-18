import {publicAsset} from '../data/public-assets.js';
export const RULE_GUIDE_VERSION=1;
export const rulePages=[
 ['01-welcome','ようこそ、MOB PIECE BATTLE！','集めたフィギュアでデッキを組み、タワーのライバルへ挑戦！ 場に出せる味方は3体まで。初期LIFEは400。相手のLIFEを0にすると勝利です。','遊び方はいつでも「？ ヘルプ」から見返せます。'],
 ['02-deck','45体のデッキをつくろう','シード・ミドル・MOBを合計45体編成します。同じIDはシードとミドルが各3体、MOBは1体まで。ミドルやMOBの「おすすめの融合素材を見る」から必要なシードを探せます。','5エースから編成・おまかせ編成も使えます。DECK 1と2は同じIDを共有できません。保存枠はコインで拡張できます。'],
 ['03-turn','手札から召喚、準備したらバトル','ターン開始時に手札が5体になるまで自動ドロー。手札のシードを選び、場の空き台座をタップして召喚します。移動は場の味方を選んで「移動」から。','準備が終わったら「バトルへ進む」。バトル中は通常の召喚・融合・スキルを使えません。先攻1ターン目はバトルせずにターン終了できます。山札から引けなくなると敗北です。'],
 ['04-fusion','素材を合わせてフュージョン！','決まったシード2体でミドル、ミドル2体でMOBへ。素材は「場と場」または「場と手札」。手札同士では融合できません。場の味方を選び「移動」から相方を選びます。','召喚したターンのミドルはMOBへ融合できません。フュージョン召喚されたターンのMOBは攻撃できません。融合できる味方の紫オーラが目印です。'],
 ['05-strength','同じ仲間・タグ・属性で強化','同じ段階の仲間を素材にします。同じフィギュアならATK・DEF＋30、タグ一致は＋20、属性一致は＋15。タグと属性の両方が一致すると＋25。強化は1体につき1回です。','属性強化済みなら属性エネルギー、タグ強化済みならタグエネルギーが頭上に表示されます。両方なら2つ表示。'],
 ['06-battle','ATKとDEFを比べよう','バトルでは自分のフィギュアをタップし、攻撃する相手を選んで確認します。ATKが相手のDEFを超えると相手を破壊し、差の分だけ相手LIFEへダメージ！','DEFが上回った場合、守ったフィギュアは破壊されず、DEFが10下がります。この低下は蓄積し、ターンが変わっても回復しません。直接攻撃はありません。フィギュアの詳細はダブルタップで確認できます。'],
 ['07-skills','スキルは対象とタイミングが大切','フィギュアの詳細でスキルを確認。「味方1体」など対象が必要なスキルは、対象を選んでから確定します。割り込みできるタイミングでは対応スキルの選択画面が開きます。','各個体は1ターンに1回。戦闘中の使用回数はシード1回・ミドル2回・MOB3回が基本です。期限のないATK・DEFの変化は場にいる間継続し、重ねて加算されます。「このターン中」など期限がある場合は説明どおりに解除。手札・墓地へ移るとスキル補正は解除されます。'],
 ['08-adventure','タワー・ガチャ・ミッションへ！','最初にスターターを1つ受け取れます。タワーで倒した相手はフリーバトルで選択可能。相手ごとのフリー初回対戦はダイヤ10・コイン1,000！ ミッションも達成して報酬を受け取ろう。','同じフィギュアは9体まで。以後は古い個体から＋99まで順番に強化し、9体すべて＋99ならルビーに変換。＋10・30・50・99でATKとDEFが各＋5。ガチャのルビー交換から好きな仲間を選べます。']
];
let current=null;
export function openRuleGuide({profile,saveProfile,start=0}={}){
 if(current?.isConnected){current.focus();return;}
 const previous=document.activeElement,dialog=document.createElement('dialog');current=dialog;dialog.className='rule-guide';dialog.setAttribute('aria-label','イラストでわかる遊び方');document.body.append(dialog);
 let page=Math.max(0,Math.min(rulePages.length-1,start));
 const close=()=>dialog.close();
 const render=()=>{const [image,title,body,note]=rulePages[page];dialog.innerHTML=`<header><span>MOB GUIDE <b>${String(page+1).padStart(2,'0')} / ${rulePages.length}</b></span><button data-guide-close aria-label="遊び方を閉じる">×</button></header><div class="guide-content"><a class="guide-image-link" href="${publicAsset('assets/rules/v1/'+image+'.png?v=cartoon2')}" target="_blank" rel="noopener" aria-label="${title}の画像を大きく開く"><img class="guide-illustration" src="${publicAsset('assets/rules/v1/'+image+'.png?v=cartoon2')}" alt="${title}を案内するメガネと赤いスカーフの先生"><small>画像を大きく見る ↗</small></a><div class="guide-copy" aria-live="polite"><h2>${title}</h2><p>${body}</p><aside>${note}</aside></div></div><div class="guide-pages" aria-label="説明ページ">${rulePages.map((row,i)=>`<button data-guide-page="${i}" aria-label="${row[1]}" aria-current="${i===page?'step':'false'}">${i+1}</button>`).join('')}</div><footer><button data-guide-prev ${page===0?'disabled':''}>← 戻る</button><button data-guide-next>${page===rulePages.length-1?'さあ、遊ぼう！':'次へ →'}</button></footer>`;dialog.scrollTop=0;dialog.querySelector('[data-guide-next]').focus({preventScroll:true});};
 dialog.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-guide-close'))close();else if(b.hasAttribute('data-guide-page')){page=Number(b.dataset.guidePage);render();}else if(b.hasAttribute('data-guide-prev')){page=Math.max(0,page-1);render();}else if(b.hasAttribute('data-guide-next')){if(page===rulePages.length-1)close();else{page++;render();}}});
 dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();page=Math.max(0,Math.min(rulePages.length-1,page+(e.key==='ArrowRight'?1:-1)));render();}});
 dialog.addEventListener('close',()=>{window.removeEventListener('hashchange',close);dialog.remove();current=null;if(profile&&profile.ruleGuideVersion!==RULE_GUIDE_VERSION){profile.ruleGuideVersion=RULE_GUIDE_VERSION;saveProfile?.();}if(previous?.isConnected)previous.focus({preventScroll:true});},{once:true});
 window.addEventListener('hashchange',close);dialog.showModal();render();
}
