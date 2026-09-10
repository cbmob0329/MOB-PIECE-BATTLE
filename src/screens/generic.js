import { bottomNav } from '../components/bottomNav.js';
import { icon } from '../components/icons.js';

const meta = {
  figure: ['FIGURE', 'COLLECTION', '図鑑・所持フィギュア画面をここへ追加できます。'],
  deck: ['DECK', 'BUILD', '25体デッキ編成画面をここへ追加できます。'],
  gacha: ['GACHA', 'DRAW', 'ガチャ画面をここへ追加できます。'],
  mission: ['MISSION', 'REWARD', 'ミッション画面をここへ追加できます。'],
  shop: ['SHOP', 'STORE', 'ショップ画面をここへ追加できます。'],
  event: ['EVENT', 'LIMITED', '期間限定コンテンツ画面をここへ追加できます。'],
  settings: ['SETTINGS', 'SYSTEM', '設定項目をここへ追加できます。'],
  profile: ['PROFILE', 'PLAYER', 'プレイヤー情報をここへ追加できます。']
};

export function genericScreen(key) {
  const [title, eyebrow, description] = meta[key] || ['SCREEN','READY','将来機能用の画面です。'];
  const active = ['figure','deck','gacha'].includes(key) ? key : 'home';
  return `
    <div class="screen sub-screen generic-screen">
      <header class="sub-header">
        <button class="back-btn" data-route="home">${icon('back')}</button>
        <div><small>${eyebrow}</small><h1>${title}</h1></div>
        <span class="header-spacer"></span>
      </header>
      <main class="sub-main generic-main">
        <div class="construction-stage">
          <div class="construction-icon">${icon(key === 'profile' ? 'figure' : (key === 'settings' ? 'settings' : key))}</div>
          <small>EXPANSION SLOT</small>
          <h2>${title}</h2>
          <p>${description}</p>
          <button data-route="home">HOMEへ戻る</button>
        </div>
      </main>
      ${bottomNav(active)}
    </div>
  `;
}
