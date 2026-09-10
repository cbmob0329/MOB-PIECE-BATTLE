import { bottomMenu } from '../data/menu.js';
import { icon } from './icons.js';

export function bottomNav(active = 'home') {
  return `
    <nav class="bottom-nav" aria-label="メインナビゲーション">
      ${bottomMenu.map(item => `
        <button class="nav-item ${item.id === active ? 'is-active' : ''} ${item.emphasis ? 'is-emphasis' : ''}" data-route="${item.screen}">
          <span class="nav-icon">${icon(item.icon)}</span>
          <span>${item.label}</span>
        </button>
      `).join('')}
    </nav>
  `;
}
