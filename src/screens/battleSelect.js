import { battleModes } from '../data/battleModes.js';
import { bottomNav } from '../components/bottomNav.js';
import { icon } from '../components/icons.js';

export function battleSelectScreen() {
  const modes = [...battleModes].sort((a,b) => a.order-b.order);
  return `
    <div class="screen sub-screen battle-select-screen">
      <header class="sub-header">
        <button class="back-btn" data-route="home">${icon('back')}</button>
        <div><small>CHOOSE YOUR MODE</small><h1>BATTLE</h1></div>
        <span class="header-spacer"></span>
      </header>
      <main class="sub-main mode-list">
        ${modes.map((mode, index) => `
          <button class="mode-card mode-${index+1} ${mode.enabled ? '' : 'is-locked'}" ${mode.enabled ? `data-route="mode:${mode.id}"` : ''}>
            <span class="mode-icon">${icon(mode.icon)}</span>
            <span class="mode-copy">
              <small>MODE ${String(index+1).padStart(2,'0')}</small>
              <strong>${mode.name}</strong>
              <span>${mode.description}</span>
            </span>
            ${mode.badge ? `<em>${mode.badge}</em>` : icon('arrow', 'mode-arrow')}
          </button>
        `).join('')}
      </main>
      ${bottomNav('battle')}
    </div>
  `;
}
