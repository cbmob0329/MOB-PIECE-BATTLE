import { events } from '../data/events.js';
import { icon } from './icons.js';

export function eventRail() {
  return `
    <section class="event-rail" aria-label="イベントバナー">
      ${events.map((event, index) => `
        <button class="event-card ${index === 0 ? 'is-featured' : ''}" data-route="event">
          <span class="event-copy">
            <small>${event.eyebrow}</small>
            <strong>${event.title}</strong>
            <span>${event.description}</span>
          </span>
          <span class="event-badge">${event.badge}</span>
          ${icon('arrow', 'event-arrow')}
        </button>
      `).join('')}
    </section>
  `;
}
