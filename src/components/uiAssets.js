const BASE = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : './';
const VERSION = '6.0.0';
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export const MENU_ASSETS = Object.freeze({
  home:'001', figure:'002', gacha:'003', battle:'004', shop:'005', calendar:'006', mission:'007',
  partner:'008', history:'009', boss:'010', freeBattle:'011', rankTournament:'012', mobLeague:'013',
  nextWeek:'014', quest:'015', towerDefense:'016', original:'017'
});

export const ICON_ASSETS = Object.freeze({
  coin:'001', diamond:'002', ruby:'003', rank:'004', win:'005', loss:'006', rarity:'007', tag:'008',
  field:'009', specialFigure:'010', originalFigure:'011', skillFigure:'012', status:'013', pickup:'014'
});

export const RANK_ASSETS = Object.freeze({
  R:'001', SR:'002', SSR:'003', UR:'004', MOB:'005',
  F:'006', E:'007', D:'008', C:'009', B:'010', A:'011', S:'012', SS:'013', MOB_MASTER:'014'
});

export const uiAssetUrl = (folder, id) => `${BASE}${folder}/${id}.png?v=${VERSION}`;

function assetMarkup(folder, id, alt, className='', fallback='') {
  if (!id) return fallback ? `<span class="ui-asset-fallback ${className}">${esc(fallback)}</span>` : '';
  return `<span class="ui-asset-frame ${className}"><img class="ui-asset" src="${uiAssetUrl(folder,id)}" alt="${esc(alt)}" loading="eager" decoding="async"><span class="ui-asset-fallback" hidden>${esc(fallback || alt)}</span></span>`;
}

export function menuArt(key, className='', fallback='') {
  return assetMarkup('menu', MENU_ASSETS[key], fallback || key, `menu-art ${className}`, fallback || key);
}
export function iconArt(key, className='', fallback='') {
  return assetMarkup('icon', ICON_ASSETS[key], fallback || key, `icon-art ${className}`, fallback || key);
}
export function rankArt(key, className='', fallback='') {
  const normalized = key === 'MASTER' ? 'MOB_MASTER' : key;
  return assetMarkup('rank', RANK_ASSETS[normalized], fallback || normalized, `rank-art ${className}`, fallback || normalized);
}

export function preloadUrls(urls, onProgress) {
  const unique = [...new Set((urls || []).filter(Boolean))];
  if (!unique.length) return Promise.resolve();
  let done = 0;
  return Promise.all(unique.map(src => new Promise(resolve => {
    const img = new Image();
    const finish = () => { done += 1; onProgress?.(done, unique.length); resolve(); };
    const timer = setTimeout(finish, 3500);
    img.onload = img.onerror = () => { clearTimeout(timer); finish(); };
    img.src = src;
  })));
}

export function criticalUiUrls(profile, centerImage) {
  const menuKeys = ['home','figure','gacha','battle','shop','calendar','mission','history','nextWeek'];
  const iconKeys = ['coin','diamond','ruby','rank'];
  const rankKey = profile?.competition?.masterHolder === 'PLAYER' ? 'MOB_MASTER' : profile?.rank;
  return [
    ...menuKeys.map(k => uiAssetUrl('menu', MENU_ASSETS[k])),
    ...iconKeys.map(k => uiAssetUrl('icon', ICON_ASSETS[k])),
    rankKey && uiAssetUrl('rank', RANK_ASSETS[rankKey]),
    centerImage
  ].filter(Boolean);
}
