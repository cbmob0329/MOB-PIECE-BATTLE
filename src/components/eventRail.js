(function (MPB) {
  'use strict';
  MPB.components.eventRail = function eventRail() {
    const icon = MPB.components.icon;
    return '<section class="event-rail" aria-label="イベントバナー">' +
      MPB.data.events.map(function (event, index) {
        return '<button class="event-card ' + (index === 0 ? 'is-featured' : '') + '" data-route="event"><span class="event-copy"><small>' + event.eyebrow + '</small><strong>' + event.title + '</strong><span>' + event.description + '</span></span><span class="event-badge">' + event.badge + '</span>' + icon('arrow','event-arrow') + '</button>';
      }).join('') + '</section>';
  };
})(window.MPB);
