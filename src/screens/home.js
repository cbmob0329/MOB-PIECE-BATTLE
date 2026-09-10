import { figures } from '../data/figures.js';
import { quickActions } from '../data/menu.js';
import { topBar } from '../components/topBar.js';
import { bottomNav } from '../components/bottomNav.js';
import { figureStage } from '../components/figureStage.js';
import { eventRail } from '../components/eventRail.js';
import { icon } from '../components/icons.js';

export function homeScreen() {
  const figure = figures[0];
  return `
    <div class="screen home-screen">
      ${topBar()}
      <main class="home-main">
        ${figureStage(figure)}

        <button class="primary-battle" data-route="battleSelect">
          <span class="battle-mark">${icon('battle')}</span>
          <span class="battle-copy"><small>READY?</small><strong>BATTLE</strong><em>バトルモードを選ぶ</em></span>
          ${icon('arrow', 'battle-arrow')}
        </button>

        <div class="quick-actions">
          ${quickActions.map(action => `
            <button class="quick-action quick-${action.id}" data-route="${action.screen}">
              <span class="quick-icon">${icon(action.icon)}</span>
              <span><strong>${action.label}</strong><small>${action.sub}</small></span>
            </button>
          `).join('')}
        </div>

        ${eventRail()}
      </main>
      ${bottomNav('home')}
    </div>
  `;
}
