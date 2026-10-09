import {ensureSoulDecks,soulById} from '../game/soul-battle.js';
import {prepareDeckReplacement,replacementChoices} from '../game/deck-replace.js';
import {commitProfile} from '../game/profile.js?v=7.3.0';
import {stageBadge} from '../components/soul-performance.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function openDeckReplace(c,id,{render,toast}){
 if(document.querySelector('.deck-replace-dialog'))return;
 const f=soulById.get(id);if(!f)return;
 const profile=c.profile,slot=profile.soulDeckSlot||0,original=[...ensureSoulDecks(profile)],focus=document.activeElement,dlg=document.createElement('dialog');
 dlg.className='deck-assist-dialog deck-replace-dialog';dlg.setAttribute('aria-label','入れ替える仲間を選ぶ');
 dlg.innerHTML=`<header><h2>入れ替える仲間を選ぶ</h2><button data-replace-close aria-label="閉じる">×</button></header><section><p><b>${esc(f.name)}</b>を1体入れます。外す仲間を選んでください。</p><p>DECK ${slot+1} · ${original.length}体のまま入れ替えます。所持品は減りません。</p><div class="deck-replace-grid">${replacementChoices(profile,id).map(row=>{const old=soulById.get(row.id);return `<button data-replace-index="${row.index}" ${row.reason?'disabled':''}>${old?`<img src="${esc(old.image)}" alt="">${stageBadge(old)}`:''}<b>${esc(row.name)}</b><span>${row.reason?esc(row.reason):'この1体と入れ替え'}</span></button>`;}).join('')}</div></section><footer class="assist-confirm-footer"><p class="assist-error" role="alert"></p><button data-replace-close>キャンセル</button></footer>`;
 const viewport=()=>{const v=window.visualViewport;dlg.style.setProperty('--assist-height',`${v?.height||innerHeight}px`);dlg.style.setProperty('--assist-top',`${v?.offsetTop||0}px`);};
 const close=()=>{window.visualViewport?.removeEventListener('resize',viewport);window.visualViewport?.removeEventListener('scroll',viewport);window.removeEventListener('hashchange',close);dlg.close();dlg.remove();if(focus?.isConnected)focus.focus({preventScroll:true});};
 dlg.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-replace-close'))return close();if(!b.hasAttribute('data-replace-index'))return;try{if((profile.soulDeckSlot||0)!==slot||JSON.stringify(ensureSoulDecks(profile))!==JSON.stringify(original))throw Error('編成が変更されています。開き直してください');const next=prepareDeckReplacement(profile,Number(b.dataset.replaceIndex),id);if(!commitProfile(next))throw Error('保存できませんでした。編成は変更していません');close();render({preserveScroll:true});toast(f.name+'を入れ替えて保存しました');}catch(error){dlg.querySelector('.assist-error').textContent=error.message;}};
 dlg.oncancel=e=>{e.preventDefault();close();};window.addEventListener('hashchange',close);window.visualViewport?.addEventListener('resize',viewport);window.visualViewport?.addEventListener('scroll',viewport);document.body.append(dlg);viewport();dlg.showModal();
}
