import {battleStyleHome} from './battleCustomize.js';
import {ensureSoulDecks} from '../game/soul-battle.js';
import {labelDate,nextDate,WEEKLY_RANK_REWARDS} from '../data/competition.js?v=7.3.0';
import {canAdvanceWeek,isPlayerMaster} from '../game/competition.js?v=7.3.0';

const menuTile=(art,label,sub,route,extra='')=>`<button class="home-menu-tile ${extra}" data-go="${route}" aria-label="${label}${sub?'・'+sub:''}">${art}</button>`;
const shelfRow=(items,extra='')=>`<div class="home-menu-shelf-row ${extra}"><i class="home-shelf-board" aria-hidden="true"></i>${items.join('')}</div>`;

export function homeScreen({figures,byId,profile,icon,art,menuArt,iconArt}){
 const f=byId.get(profile.centerId)||figures.find(x=>!x.pending)||figures[0];
 if(!f)return '<section class="library"><div class="page-heading"><h1>MOB PIECE BATTLE</h1><p>フィギュアデータを読み込めませんでした。</p></div></section>';
 if(profile.centerId!==f.sourceId)profile.centerId=f.sourceId;
 const gate=canAdvanceWeek(profile),next=nextDate(profile.competition.date),master=isPlayerMaster(profile),weekly=WEEKLY_RANK_REWARDS[profile.rank]||WEEKLY_RANK_REWARDS.F;
 const weekModal=gate.ok
  ? `<div class="week-advance-modal" data-week-modal hidden><div class="week-advance-card">${menuArt('nextWeek','week-modal-art','NEXT WEEK')}<small>SEASON CALENDAR</small><h2>本当に週を進めますか？</h2><div class="week-transition"><span>${labelDate(profile.competition.date)}</span><b>→</b><span>${labelDate(next)}</span></div><p>週は自動では進みません。進行すると今週へ戻ることはできません。</p><div><button data-week-close>いいえ</button><button data-week-confirm>はい・進める</button></div></div></div>`
  : `<div class="week-advance-modal danger" data-week-modal hidden><div class="week-advance-card">${menuArt('nextWeek','week-modal-art','NEXT WEEK')}<small>IMPORTANT EVENT</small><h2>まだ週を進められません</h2><p>${gate.reason}</p><strong>重要イベントを完了してから進めてください。</strong><div><button data-week-close>閉じる</button><button data-go="mobLeague">大会を確認</button></div></div></div>`;

 const mainShelves = [
  shelfRow([
    menuTile(menuArt('battle','home-menu-art','BATTLE'),'BATTLE','バトル','battle','highlight'),
    menuTile(menuArt('figure','home-menu-art','FIGURE'),'FIGURE','フィギュア一覧','figure'),
    menuTile(iconArt('deck','home-menu-art deck-menu-art','DECK'),'DECK','デッキ編成','deck'),
    menuTile(menuArt('gacha','home-menu-art','GACHA'),'GACHA','ガチャ','gacha')
  ]),
  shelfRow([
    menuTile(menuArt('mission','home-menu-art','MISSION'),'MISSION','報酬を受け取る','mission'),
    menuTile(menuArt('calendar','home-menu-art','CALENDAR'),'CALENDAR','年・月で予定を見る','calendar'),
    menuTile(menuArt('history','home-menu-art','HISTORY'),'HISTORY','全戦績を見る','history'),
    menuTile(menuArt('shop','home-menu-art','MOB SHOP'),'MOB SHOP','ショップ','shop')
  ]),
  shelfRow([
    menuTile(menuArt('player','home-menu-art','PLAYER'),'PLAYER','アバター変更・戦績','player'),
    menuTile(menuArt('settings','home-menu-art','SETTINGS'),'SETTINGS','テストモード・設定','settings'),
    menuTile(menuArt('collection','home-menu-art','COLLECTION'),'COLLECTION','後日実装予定','collection')
  ],'compact')
 ];
 const futureShelves = [
  shelfRow([
    menuTile(menuArt('partner','home-menu-art','PARTNER'),'PARTNER','後日','partner','future'),
    menuTile(menuArt('boss','home-menu-art','BOSS'),'BOSS','後日','boss','future'),
    menuTile(menuArt('quest','home-menu-art','QUEST'),'QUEST','スペシャルバトル','quest','future'),
    menuTile(menuArt('towerDefense','home-menu-art','TOWER DEFENSE'),'TOWER DEFENSE','ミニゲーム','tower','future')
  ]),
  shelfRow([
    menuTile(menuArt('original','home-menu-art','ORIGINAL'),'ORIGINAL','オリジナルフィギュア','original','future')
  ],'compact')
 ];

 return `<button class="tower-entry" data-go="tower"><div><small>STORY · 草原の塔</small>モブタワーマスターへの道</div><span>↗</span></button><section class="showroom"><div class="room-heading"><div><span class="eyebrow">YOUR OWN LITTLE UNIVERSE</span><h1>MOB PIECE<span>BATTLE</span></h1></div><button class="edition" data-go="display" aria-label="展示フィギュアを選ぶ">COLLECTION<br><b>ROOM 01</b><i>展示を変更 ↗</i></button></div><div class="room-lines" aria-hidden="true"></div><button class="shelf left-shelf" data-go="display" data-edit-shelf="0" aria-label="左の展示フィギュアを変更"><span>MY COLLECTION</span><div class="shelf-piece">${art(byId.get(profile.displayIds[0]))}</div><div class="shelf-piece">${art(byId.get(profile.displayIds[1]))}</div></button><button class="shelf right-shelf" data-go="display" data-edit-shelf="2" aria-label="右の展示フィギュアを変更"><span>THE MOB CLUB</span><div class="shelf-piece">${art(byId.get(profile.displayIds[2]))}</div><div class="shelf-piece">${art(byId.get(profile.displayIds[3]))}</div></button><div class="vertical-label">COLLECT. BUILD. BATTLE.</div><button class="room-action" data-go="figure">${menuArt('figure','room-menu-art','FIGURE')}<span>図鑑</span><b>↗</b></button><div class="spotlight" aria-hidden="true"></div><div class="hero-piece">${art(f,'hero-art')}</div><div class="plinth" aria-hidden="true"><span>MOB PIECE COLLECTION</span></div><span class="rarity-badge">${f.rarity}<small>FIGURE</small></span><button class="rotate-piece" data-action="center-next" aria-label="次のセンターフィギュア">↻</button><div class="hero-label"><span>${f.displayNo} <i>•</i> CENTER FIGURE</span><h2>${f.name}</h2><button data-go="figure">フィギュアを変更 ${icon('arrow')}</button></div></section><section class="home-controls"><div class="home-week-panel ${gate.ok?'':'blocked'}"><div class="home-week-date"><small>SEASON CALENDAR</small><strong>${profile.competition.date.year}年目</strong><b>${profile.competition.date.month}月 第${profile.competition.date.week}週</b></div><div class="home-week-reward"><small>${master?'MOB MASTER':'WEEKLY RANK BONUS'}</small><b>${master?'王者特典は設定済み':`RANK ${profile.rank}`}</b><span>${master?'第1・第3週にMASTER BONUS':`${weekly.coins.toLocaleString('ja-JP')} COIN + ${weekly.diamonds} DIAMOND`}</span></div><button data-week-open class="next-week-image-button">${menuArt('nextWeek','next-week-art','NEXT WEEK')}<span>${gate.ok?'週を進める':'要確認'}</span></button>${gate.ok?'':`<p>${gate.reason}</p>`}</div><div class="deck-status"><span><i></i> MY TEAM <b>デッキを組んで、アリーナへ。</b></span><button data-go="deck">${iconArt('deck','deck-status-art','DECK')}${ensureSoulDecks(profile).length}<small>/45</small> ${icon('arrow')}</button></div><button class="battle-cta battle-cta-image" data-go="battle"><span class="battle-image">${menuArt('battle','battle-home-art','BATTLE')}</span><span><small>TAKE YOUR PIECES TO THE ARENA</small><strong>BATTLE</strong><em>バトルモードを選ぶ</em></span><b>↗</b></button>${battleStyleHome(profile)}<h2 class="home-menu-heading">MOB MENU <span>棚に並んだ素材ボタンから各機能へ</span></h2><div class="home-shelf-display">${mainShelves.join('')}</div><h2 class="home-menu-heading future">FUTURE <span>後日追加予定</span></h2><div class="home-shelf-display future-display">${futureShelves.join('')}</div><div class="home-footnote">あなただけのコレクションから、バトルが始まる。</div></section>${weekModal}`;
}
