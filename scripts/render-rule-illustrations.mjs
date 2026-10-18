// Render square, code-native rule diagrams using the game's ORIGINAL PNG assets.
// Figure art is embedded unchanged: no generated substitute characters.
import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import catalog from '../src/data/soul-catalog.js';
const require=createRequire(import.meta.url),{chromium}=require(path.join(process.env.MPB_RUNTIME_MODULES,'playwright'));
const byId=new Map(catalog.figures.map(f=>[f.id,f]));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const data=async file=>'data:image/png;base64,'+(await fs.readFile(file)).toString('base64');
const images=new Map();for(const id of ['01','02','03','04','05','07','18','piece:002','piece:006'])images.set(id,await data(byId.get(id).image));
const mascot=await data('public/assets/rules/v1/guide-mascot.png');
const icons={};for(const [key,file]of Object.entries({tower:'menu/016.png',gacha:'menu/003.png',mission:'menu/007.png',coin:'icon/001.png',diamond:'icon/002.png'}))icons[key]=await data(file);
const fig=(id,label='',cls='')=>`<div class="figure ${cls}"><img src="${images.get(id)}"><b>${esc(byId.get(id).name.replace('ぷにモブ','').replace('モブクラシック','クラシック'))}</b>${label?`<small>${label}</small>`:''}</div>`;
const arrow='<span class="arrow">→</span>',plus='<span class="plus">＋</span>';
const scenes=[
 ['01-welcome','ぷにモブたちと、バトル！','まずは、ぷにモブたちと始めよう。','場は3体まで。相手のLIFEを0にしよう！',`<div class="life"><span>RIVAL <b>♥ 400</b></span><span>PLAYER <b>♥ 400</b></span></div><div class="arena enemy">${['03','04','05'].map(id=>fig(id)).join('')}</div><div class="vs-line">BATTLE</div><div class="arena ally">${['01','02','18'].map(id=>fig(id)).join('')}</div>`],
 ['02-deck','45体でデッキをつくろう','シード・ミドル・MOBの配分は自由。','ミドルをタップ！<br>おすすめ素材がわかるよ。',`<div class="big-number">45 <span>体 / 1デッキ</span></div><div class="trio">${fig('01','同じID：3体まで')}${fig('02','同じID：3体まで')}${fig('piece:002','同じID：3体まで')}</div><div class="pill-row"><span>素材から編成</span><span>5エースから編成</span><span>おまかせ編成</span></div><div class="footline">同じID：MOBは1体まで</div>`],
 ['03-turn','手札を選んで、空き台座へ','ターン開始時、手札が5体になるまでドロー。','先攻1ターン目は<br>そのままターン終了でOK！',`<div class="zones"><div class="slot">空き</div><div class="slot picked">${fig('01')}</div><div class="slot">空き</div></div><div class="summon-arrow">↑ <b>手札 → 場</b></div><div class="hand">${['01','02','03','04','05'].map(id=>fig(id)).join('')}</div><div class="pill-row"><span>① 手札をタップ</span><span>② 空き台座をタップ</span></div>`],
 ['04-fusion','2体でフュージョン！','実際のレシピ：ぷにモブ × 風属性','召喚したターンのミドルは<br>MOBへ融合できないよ。',`<div class="fusion-flow">${fig('02','ぷにモブのタグ')}${plus}${fig('01','風属性')}${arrow}${fig('piece:002','ミドルへ進化！','result')}</div><div class="recipe-note"><strong>ぷにモブ × 風属性 → ミドル</strong></div><div class="pill-row"><span>場 ＋ 場　OK</span><span>場 ＋ 手札　OK</span><span class="no">手札 ＋ 手札　NG</span></div><div class="footline">召喚ターンのMOBは攻撃できない</div>`],
 ['05-strength','タグ・属性で強化しよう','同じ段階の仲間を素材にして強化。','強化は1体につき1回。<br>頭上のマークが目印！',`<div class="strength-flow">${fig('01','素材')}${plus}${fig('02','強化する仲間')}${arrow}<div class="boosted"><div class="tag-mark">◇ TAG</div>${fig('02','ATK100・DEF80','result')}</div></div><div class="recipe-note"><strong>タグ一致 → ATK・DEF ＋20</strong></div><div class="bonus-grid"><span>同じID<b>＋30</b></span><span>タグ一致<b>＋20</b></span><span>属性一致<b>＋15</b></span><span>両方一致<b>＋25</b></span></div>`],
 ['06-battle','ATKとDEF、どちらが上？','攻撃する味方 → 相手をタップして確認。','DEFが勝つと生き残る。<br>ただしDEFが10下がるよ！',`<div class="combat"><div class="combat-pair">${fig('02','ATK 80')}${arrow}${fig('03','DEF 60')}</div><div class="combat-result"><small>ATK ＞ DEF</small><b>相手を破壊</b><span>相手LIFE −20</span></div></div><div class="combat guard"><div class="combat-pair">${fig('04','ATK 75')}${arrow}${fig('01','DEF 80')}</div><div class="combat-result"><small>ATK ＜ DEF</small><b>破壊されない</b><span>DEF 80 → 70</span></div></div>`],
 ['07-skills','スキルの対象を選ぼう','「味方1体」なら、使いたい相手をタップ。','使う前に、条件と対象を<br>しっかり確認しよう！',`<div class="skill-callout">味方1体を選択</div><div class="trio target-row">${fig('03','未選択','muted')}<div class="target"><span class="chosen">✓ 選択中</span>${fig('01','この味方を選ぶ')}</div>${fig('05','未選択','muted')}</div><div class="pill-row"><span>① スキル</span><span>② 対象</span><span>③ 発動</span></div><div class="footline">割り込みのタイミングでは対応スキルの画面が開きます</div>`],
 ['08-adventure','タワーから、冒険を広げよう','倒した相手とは、フリーバトルで再戦！','ミッション報酬も忘れずに受け取ってね。',`<div class="adventure-menu">${['tower','gacha','mission'].map((key,i)=>`<div><img src="${icons[key]}"><b>${['タワー','ガチャ','ミッション'][i]}</b></div>`).join('')}</div><div class="reward"><b>相手ごとのフリー初回対戦</b><span><img src="${icons.diamond}">＋10 <img src="${icons.coin}">＋1,000</span></div><div class="adventure-friends">${['01','02','04','05'].map(id=>fig(id)).join('')}</div>`]
];
const backdrop=await data('public/assets/rules/v1/workshop-background.png');
const css=await fs.readFile('scripts/rule-poster-theme.css','utf8');
const browser=await chromium.launch({channel:'msedge',headless:true});
try{const page=await browser.newPage({viewport:{width:1200,height:1200},deviceScaleFactor:1});for(const [i,[name,title,sub,note,body]]of scenes.entries()){
 await page.setContent(`<style>${css}</style><article class="poster" data-poster="${name}" style="--workshop:url(${backdrop})"><header><div class="eyebrow">MOB PIECE BATTLE <b>LESSON ${String(i+1).padStart(2,'0')}</b></div><h1>${title}</h1><p>${sub}</p></header><section class="diagram">${body}</section><footer class="professor"><img src="${mascot}"><div class="speech"><small>モブ先生</small>${note}</div></footer></article>`);
 await page.evaluate(()=>Promise.all([...document.images].map(img=>img.decode())));await page.evaluate(()=>document.fonts.ready);const overflow=await page.evaluate(()=>{const d=document.querySelector('.diagram'),r=d.getBoundingClientRect();return [...d.querySelectorAll('b,small,.footline,.pill-row span')].filter(e=>getComputedStyle(e).display!=='none'&&e.getBoundingClientRect().bottom>r.bottom-8).map(e=>e.textContent);});if(overflow.length)throw Error(name+' text exceeds panel: '+overflow.join(', '));await page.screenshot({path:`public/assets/rules/v1/${name}.png`});
 }console.log('Rendered 8 square 1200px rule diagrams with original game figure PNGs.');
}finally{await browser.close();}
