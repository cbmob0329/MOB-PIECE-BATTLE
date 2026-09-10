import { homeScreen } from './screens/home.js';
import { battleSelectScreen } from './screens/battleSelect.js';
import { genericScreen } from './screens/generic.js';

const app = () => document.querySelector('#app');

export function renderRoute(route = 'home') {
  let html;
  if (route === 'home') html = homeScreen();
  else if (route === 'battleSelect') html = battleSelectScreen();
  else if (route.startsWith('mode:')) {
    const mode = route.split(':')[1].toUpperCase();
    html = genericScreen('battle');
    html = html.replace('SCREEN', mode).replace('READY', 'BATTLE MODE').replace('将来機能用の画面です。', `${mode} のゲーム本編をここへ接続できます。`);
  } else html = genericScreen(route);

  app().innerHTML = html;
  app().querySelectorAll('[data-route]').forEach(el => {
    el.addEventListener('click', () => renderRoute(el.dataset.route));
  });
  window.scrollTo(0,0);
}
