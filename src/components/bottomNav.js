(function (MPB) {
  'use strict';
  MPB.components.bottomNav = function bottomNav(active) {
    const icon = MPB.components.icon;
    return '<nav class="bottom-nav" aria-label="メインナビゲーション">' +
      MPB.data.bottomMenu.map(function (item) {
        return '<button class="nav-item ' + (item.id === (active || 'home') ? 'is-active ' : '') + (item.emphasis ? 'is-emphasis' : '') + '" data-route="' + item.screen + '">' +
          '<span class="nav-icon">' + icon(item.icon) + '</span><span>' + item.label + '</span></button>';
      }).join('') + '</nav>';
  };
})(window.MPB);
