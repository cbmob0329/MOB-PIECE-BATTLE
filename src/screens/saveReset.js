import {deleteBattleSave} from '../game/save-reset.js';
export function openSaveReset({onDeleted}){
 if(document.querySelector('.save-reset-dialog'))return;
 const previous=document.activeElement,dialog=document.createElement('dialog');dialog.className='save-reset-dialog';
 dialog.setAttribute('aria-labelledby','save-reset-title');
 dialog.innerHTML='<section><small>MOB PIECE BATTLE</small><h2 id="save-reset-title">セーブデータ削除</h2><p>このブラウザの <b>MOB PIECE BATTLE</b> を、はじめからの状態に戻します。</p><ul><li>所持ピース・お気に入り・5つのデッキ</li><li>通貨・購入済みアイテム・ガチャ履歴</li><li>タワー・大会の進行、戦績・報酬の記録</li><li>音量・表示などの設定</li></ul><p>削除後は元に戻せません。他のゲームや別のブラウザのデータは削除しません。</p><label class="save-reset-agree"><input type="checkbox" data-reset-agree><span>削除対象を確認しました</span></label><p data-reset-error role="alert"></p><footer><button data-reset-cancel autofocus>キャンセル</button><button data-reset-confirm disabled>PIECE BATTLEを初期化する</button></footer></section>';
 const close=()=>{dialog.close();dialog.remove();window.removeEventListener('hashchange',close);if(previous?.isConnected)previous.focus({preventScroll:true});};
 dialog.querySelector('[data-reset-cancel]').onclick=close;
 dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
 dialog.querySelector('[data-reset-agree]').onchange=event=>{dialog.querySelector('[data-reset-confirm]').disabled=!event.target.checked;};
 dialog.querySelector('[data-reset-confirm]').onclick=()=>{
  if(!dialog.querySelector('[data-reset-agree]').checked)return;
  try{deleteBattleSave(localStorage);}catch(error){dialog.querySelector('[data-reset-error]').textContent=error.message;return;}
  dialog.querySelector('[data-reset-confirm]').disabled=true;onDeleted();
 };
 window.addEventListener('hashchange',close);document.body.append(dialog);dialog.showModal();dialog.querySelector('[data-reset-cancel]').focus();
}
