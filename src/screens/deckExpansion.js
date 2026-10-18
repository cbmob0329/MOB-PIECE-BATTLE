import {deckSlotCount,MAX_DECK_SLOTS,DECK_SLOT_PRICE,prepareDeckExpansion} from '../game/deck-slots.js';
export function openDeckExpansion({profile,commitProfile,onPurchased}){
 if(document.querySelector('.deck-expand-dialog'))return;
 const count=deckSlotCount(profile),dialog=document.createElement('dialog');dialog.className='deck-expand-dialog';dialog.setAttribute('aria-labelledby','deck-expand-title');
 dialog.innerHTML=`<h2 id="deck-expand-title">新しいデッキの保存枠</h2><p>保存枠を <b>${count} → ${Math.min(count+1,MAX_DECK_SLOTS)}</b> に増やします。</p><p>1デッキは45体のまま、別の編成を保存できます。</p><strong class="expansion-price">${DECK_SLOT_PRICE.toLocaleString('ja-JP')} COIN</strong><p>所持：${Number(profile.coins||0).toLocaleString('ja-JP')} COIN</p><p role="alert"></p><footer><button data-cancel>戻る</button><button data-buy ${profile.coins<DECK_SLOT_PRICE||count>=MAX_DECK_SLOTS?'disabled':''}>コインで拡張</button></footer>`;
 const close=()=>dialog.close();dialog.addEventListener('close',()=>{window.removeEventListener('hashchange',close);dialog.remove();},{once:true});window.addEventListener('hashchange',close);
 dialog.querySelector('[data-cancel]').onclick=close;dialog.querySelector('[data-buy]').onclick=()=>{try{const next=prepareDeckExpansion(profile,count);if(!commitProfile(next))throw Error('保存できませんでした。コインは消費していません。');close();onPurchased?.();}catch(e){dialog.querySelector('[role=alert]').textContent=e.message;}};
 document.body.append(dialog);dialog.showModal();dialog.querySelector('[data-cancel]').focus();
}
