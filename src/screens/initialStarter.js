import {release} from '../game/initial-release.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function initialStarterScreen(c,selected=null){
 if(c.profile.initialChoice?.state==='claimed')return '<section class="library"><h1>スターター受け取り済み</h1><p>選んだデッキに必要な枚数を所持品へ追加しました。</p><button data-go="deck">デッキへ</button></section>';
 const s=release.starters.find(s=>s.id===selected);
 if(s)return `<section class="library initial-choice"><h1>${esc(s.name)}</h1><p>シード30・ミドル10・MOBソウル5。選べるのは1種類だけです。確定するまで所持品は変わりません。</p><p>既存の所持品・デッキは維持します。空きスロットへ保存し、空きがない場合は所持品への追加のみです。</p><div class="soul-grid">${[...new Set(s.deck)].map(id=>`<article class="soul-card">${c.art(c.byId.get(id))}<b>${esc(c.byId.get(id)?.name)}</b><small>×${s.deck.filter(x=>x===id).length}</small></article>`).join('')}</div><div class="initial-choice-actions"><button data-initial-confirm="${s.id}">このスターターを受け取る</button><button data-initial-back>選択に戻る</button></div></section>`;
 return `<section class="library initial-choice"><h1>最初のスターターを選ぼう</h1><p>3つから1つ。内容を見てから決められます。</p><div class="initial-starter-options">${release.starters.map(s=>`<article class="soul-card"><h2>${esc(s.name)}</h2><div class="initial-pair">${s.featuredIds.map(id=>c.art(c.byId.get(id))).join('')}</div><p>${esc(s.description)}</p><small>45枚 · シード30 / ミドル10 / MOB5</small><button data-initial-review="${s.id}">内容を確認する</button></article>`).join('')}</div><button data-go="home">あとで選ぶ</button></section>`;
}
