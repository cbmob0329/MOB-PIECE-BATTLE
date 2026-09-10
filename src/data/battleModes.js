export const battleModes = [
  {
    id: 'free',
    name: 'FREE BATTLE',
    description: '好きな編成で気軽に対戦',
    icon: 'battle',
    enabled: true,
    badge: null,
    order: 1
  },
  {
    id: 'rank',
    name: 'RANK MATCH',
    description: 'ランクを上げて上位を目指す',
    icon: 'rank',
    enabled: false,
    badge: 'COMING SOON',
    order: 2
  },
  {
    id: 'tournament',
    name: 'TOURNAMENT',
    description: '勝ち抜き形式の大会に挑戦',
    icon: 'tournament',
    enabled: false,
    badge: 'COMING SOON',
    order: 3
  },
  {
    id: 'special',
    name: 'SPECIAL BATTLE',
    description: '特殊ルールで戦う限定バトル',
    icon: 'special',
    enabled: false,
    badge: 'COMING SOON',
    order: 4
  },
  {
    id: 'boss',
    name: 'BOSS RAID',
    description: '強大なボスフィギュアへ挑め',
    icon: 'boss',
    enabled: false,
    badge: 'COMING SOON',
    order: 5
  }
];
