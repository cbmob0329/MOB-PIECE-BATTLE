(function (MPB) {
  'use strict';
  MPB.components.figureStage = function figureStage(figure) {
    return '<section class="figure-stage" aria-label="センターフィギュア">' +
      '<div class="showroom-sign"><span>COLLECTION ROOM</span><strong>MOB PIECE</strong></div>' +
      '<div class="display-wall" aria-hidden="true"><div class="shelf shelf-left"><i></i><i></i><i></i></div><div class="battle-gate"><span>BATTLE</span></div><div class="shelf shelf-right"><i></i><i></i><i></i></div></div>' +
      '<button class="event-poster world-hotspot" data-route="event" aria-label="イベント"><small>EVENT</small><strong>NEW<br>PIECES</strong></button>' +
      '<button class="gacha-machine world-hotspot" data-route="gacha" aria-label="ガチャ"><span class="gacha-globe"><i></i></span><strong>GACHA</strong></button>' +
      '<div class="figure-focus"><div class="rarity-tag">' + figure.rarity + '</div>' +
      '<div class="figure-art-shell"><img class="figure-art" src="' + figure.image + '" alt="' + figure.name + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'grid\'" />' +
      '<div class="figure-placeholder"><div class="placeholder-head"></div><div class="placeholder-body">MOB</div><small>DROP PNG HERE</small></div></div>' +
      '<div class="pedestal"><span>MOB</span></div><div class="figure-meta"><div><small>CENTER FIGURE</small><strong>' + figure.name + '</strong></div><span class="dex-number">No.' + String(figure.dexNo).padStart(3, '0') + '</span></div></div></section>';
  };
})(window.MPB);
