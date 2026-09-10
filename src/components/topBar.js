import { icon } from './icons.js';

export function topBar() {
  return `
    <header class="top-bar">
      <button class="profile-chip" data-route="profile" aria-label="プロフィール">
        <span class="avatar">M</span>
        <span class="profile-copy">
          <strong>PLAYER</strong>
          <small>RANK 01</small>
        </span>
      </button>
      <div class="wallet">
        <div class="currency">${icon('coin')}<strong>0</strong></div>
        <div class="currency">${icon('gem')}<strong>0</strong></div>
        <button class="icon-btn" data-route="settings" aria-label="設定">${icon('settings')}</button>
      </div>
    </header>
  `;
}
