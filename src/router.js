(function (MPB) {
  'use strict';
  MPB.renderRoute = function renderRoute(route) {
    const target = document.getElementById('app');
    route = route || 'home';
    let html;
    if (route === 'home') html = MPB.screens.home();
    else if (route === 'battleSelect') html = MPB.screens.battleSelect();
    else if (route.indexOf('mode:') === 0) {
      const mode = route.split(':')[1].toUpperCase();
      html = MPB.screens.generic('battle');
      html = html.replace('SCREEN', mode).replace('READY', 'BATTLE MODE').replace('将来機能用の画面です。', mode + ' のゲーム本編をここへ接続できます。');
    } else html = MPB.screens.generic(route);

    target.innerHTML = html;
    Array.prototype.forEach.call(target.querySelectorAll('[data-route]'), function (el) {
      el.addEventListener('click', function () { MPB.renderRoute(el.getAttribute('data-route')); });
    });
    window.scrollTo(0, 0);
  };
})(window.MPB);
