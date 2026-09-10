(function (MPB) {
  'use strict';
  const meta = {
    figure:['FIGURE','COLLECTION','図鑑・所持フィギュア画面をここへ追加できます。'],
    deck:['DECK','BUILD','25体デッキ編成画面をここへ追加できます。'],
    gacha:['GACHA','DRAW','ガチャ画面をここへ追加できます。'],
    mission:['MISSION','REWARD','ミッション画面をここへ追加できます。'],
    shop:['SHOP','STORE','ショップ画面をここへ追加できます。'],
    event:['EVENT','LIMITED','期間限定コンテンツ画面をここへ追加できます。'],
    settings:['SETTINGS','SYSTEM','設定項目をここへ追加できます。'],
    profile:['PROFILE','PLAYER','プレイヤー情報をここへ追加できます。']
  };
  MPB.screens.generic = function genericScreen(key) {
    const icon = MPB.components.icon;
    const values = meta[key] || ['SCREEN','READY','将来機能用の画面です。'];
    const title = values[0], eyebrow = values[1], description = values[2];
    const active = ['figure','deck','gacha'].indexOf(key) >= 0 ? key : 'home';
    const iconKey = key === 'profile' ? 'figure' : (key === 'settings' ? 'settings' : key);
    return '<div class="screen sub-screen generic-screen"><header class="sub-header"><button class="back-btn" data-route="home">' + icon('back') + '</button><div><small>' + eyebrow + '</small><h1>' + title + '</h1></div><span class="header-spacer"></span></header><main class="sub-main generic-main"><div class="construction-stage"><div class="construction-icon">' + icon(iconKey) + '</div><small>EXPANSION SLOT</small><h2>' + title + '</h2><p>' + description + '</p><button data-route="home">HOMEへ戻る</button></div></main>' + MPB.components.bottomNav(active) + '</div>';
  };
})(window.MPB);
