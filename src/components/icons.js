(function (MPB) {
  'use strict';
  const icons = {
    home: '<path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5H15v-6H9v6H4.5A1.5 1.5 0 0 1 3 19.5z"/>',
    figure: '<path d="M8 3h8l1 4-2 3v7l3 2v2H6v-2l3-2v-7L7 7z"/><path d="M9 7h6"/>',
    deck: '<rect x="5" y="4" width="12" height="15" rx="2"/><path d="M8 1h11a2 2 0 0 1 2 2v14"/><path d="M8 9h6M8 13h6"/>',
    battle: '<path d="m5 4 14 16M19 4 5 20"/><path d="m3 3 5 1-4 5M21 3l-5 1 4 5"/>',
    gacha: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18"/><path d="M7 7c3 2 7 2 10 0M7 17c3-2 7-2 10 0"/>',
    mission: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="m8 12 2.5 2.5L16 9"/>',
    shop: '<path d="M4 9h16l-1 11H5z"/><path d="M7 9a5 5 0 0 1 10 0"/>',
    event: '<path d="M4 5h16v14H4z"/><path d="M8 3v4M16 3v4M4 9h16"/>',
    rank: '<path d="M5 20h14M7 20v-8h4v8M13 20V6h4v14"/>',
    tournament: '<path d="M8 4H4v4c0 3 2 5 5 5M16 4h4v4c0 3-2 5-5 5"/><path d="M8 3h8v5a4 4 0 0 1-8 0zM12 12v5M8 21h8M9 17h6"/>',
    special: '<path d="m12 2 2.2 5.3L20 8l-4 4 1.2 5.8L12 15l-5.2 2.8L8 12 4 8l5.8-.7z"/>',
    boss: '<path d="M5 8 8 4l4 3 4-3 3 4v10l-7 4-7-4z"/><path d="M8 12h2M14 12h2M10 16h4"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 15 6l-.3-2.6h-4L10.5 6A8 8 0 0 0 9 7.1l-2.4-1-2 3.4L6.5 11a8 8 0 0 0 0 2L4.6 14.5l2 3.4 2.4-1A8 8 0 0 0 10.5 18l.3 2.6h4L15 18a8 8 0 0 0 1.5-1.1l2.4 1 2-3.4L18.9 13c.1-.3.1-.7.1-1z"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 9h5a2 2 0 1 1 0 4H10a2 2 0 1 0 0 4h5"/>',
    gem: '<path d="m12 3 8 7-8 11L4 10z"/><path d="m4 10 8 3 8-3M8 6l4 7 4-7"/>',
    arrow: '<path d="m9 5 7 7-7 7"/>',
    back: '<path d="m15 5-7 7 7 7"/>'
  };

  MPB.components.icon = function icon(name, className) {
    const body = icons[name] || icons.special;
    return '<svg class="icon ' + (className || '') + '" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + body + '</svg>';
  };
})(window.MPB);
