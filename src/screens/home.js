(function (MPB) {
  'use strict';
  MPB.screens.home = function homeScreen() {
    const figure = MPB.data.figures[0];
    const icon = MPB.components.icon;
    return '<div class="screen home-screen">' + MPB.components.topBar() + '<main class="home-main">' + MPB.components.figureStage(figure) +
      '<button class="primary-battle" data-route="battleSelect"><span class="battle-mark">' + icon('battle') + '</span><span class="battle-copy"><small>READY?</small><strong>BATTLE</strong><em>バトルモードを選ぶ</em></span>' + icon('arrow','battle-arrow') + '</button>' +
      '<div class="quick-actions">' + MPB.data.quickActions.map(function(action){ return '<button class="quick-action quick-' + action.id + '" data-route="' + action.screen + '"><span class="quick-icon">' + icon(action.icon) + '</span><span><strong>' + action.label + '</strong><small>' + action.sub + '</small></span></button>'; }).join('') + '</div>' +
      MPB.components.eventRail() + '</main>' + MPB.components.bottomNav('home') + '</div>';
  };
})(window.MPB);
