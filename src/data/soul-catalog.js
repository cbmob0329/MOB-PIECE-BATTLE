// Generated fixed design data; no runtime rolls. See scripts/build-soul-catalog.mjs.
export default {
  "figures": [
    {
      "id": "01",
      "name": "ぷにモブグリーン",
      "image": "fig/01.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 65,
      "def": 85,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにケア",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 15
          }
        ],
        "description": "自分のライフを15回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを50回復する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/01.png",
        "rarity": "R",
        "statsText": "HP +5",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにケア",
          "text": "味方全体のHPを50回復する"
        },
        "tags": [
          "01",
          "02",
          "27",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "02",
      "name": "ぷにモブレッド",
      "image": "fig/02.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 90,
      "def": 65,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにパンチ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 15
          }
        ],
        "description": "自身のATKを15上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理小ダメージを与え、自分のATKを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/02.png",
        "rarity": "R",
        "statsText": "ATK +1",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにパンチ",
          "text": "敵単体に無属性の物理小ダメージを与え、自分のATKを2ターンの間10%アップする"
        },
        "tags": [
          "01",
          "03",
          "27",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "03",
      "name": "ぷにモブオレンジ",
      "image": "fig/03.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 90,
      "def": 65,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにマジック",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 15
          }
        ],
        "description": "自身のATKを15上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の魔法小ダメージを与え、自分のMAGを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/03.png",
        "rarity": "R",
        "statsText": "MAG +1",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにマジック",
          "text": "敵単体に無属性の魔法小ダメージを与え、自分のMAGを2ターンの間10%アップする"
        },
        "tags": [
          "01",
          "07",
          "27",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "04",
      "name": "ぷにモブイエロー",
      "image": "fig/04.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 60,
      "def": 80,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにダッシュ",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDを2ターンの間25%アップし、回避率を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/04.png",
        "rarity": "R",
        "statsText": "SPD +1",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにダッシュ",
          "text": "自分のSPDを2ターンの間25%アップし、回避率を5%アップする"
        },
        "tags": [
          "01",
          "04",
          "27",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "05",
      "name": "ぷにモブパープル",
      "image": "fig/05.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 80,
      "def": 80,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにミスト",
        "timing": "own-main",
        "effects": [
          {
            "type": "break",
            "target": "enemy",
            "value": 15
          }
        ],
        "description": "選んだ相手1体のDEFを15下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体のATKとMNDを2ターンの間10%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/05.png",
        "rarity": "R",
        "statsText": "MND +1",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにミスト",
          "text": "敵単体のATKとMNDを2ターンの間10%ダウンさせる"
        },
        "tags": [
          "01",
          "05",
          "27",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "06",
      "name": "ぷにモブ:ピンク",
      "image": "fig/06.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 65,
      "def": 85,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにチャージ",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 15
          }
        ],
        "description": "味方全体のDEFを15上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のMPを20回復し、MNDを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/06.png",
        "rarity": "R",
        "statsText": "HP & MP +2",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにチャージ",
          "text": "味方全体のMPを20回復し、MNDを2ターンの間10%アップする"
        },
        "tags": [
          "01",
          "06",
          "27",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "07",
      "name": "ぷにモブディープレッド",
      "image": "fig/07.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 85,
      "def": 60,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにラッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理小ダメージを3回与える",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/07.png",
        "rarity": "R",
        "statsText": "ATK +1",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにラッシュ",
          "text": "敵単体に無属性の物理小ダメージを3回与える"
        },
        "tags": [
          "01",
          "03",
          "27",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "08",
      "name": "ぷにモブイタリアンレッド",
      "image": "fig/08.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 90,
      "def": 65,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにスピン",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 15
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "自身のATKを15上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理小ダメージを与え、自分のATKとSPDを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/08.png",
        "rarity": "R",
        "statsText": "ATK +1",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにスピン",
          "text": "敵単体に無属性の物理小ダメージを与え、自分のATKとSPDを2ターンの間10%アップする"
        },
        "tags": [
          "01",
          "03",
          "27",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "09",
      "name": "ぷにモブブルー",
      "image": "fig/09.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 65,
      "def": 85,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにガード",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 15
          }
        ],
        "description": "味方全体のDEFを15上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/09.png",
        "rarity": "R",
        "statsText": "DEF +1",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにガード",
          "text": "味方全体のDEFを2ターンの間15%アップする"
        },
        "tags": [
          "01",
          "31",
          "27",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "10",
      "name": "ぷにモブミントグリーン",
      "image": "fig/10.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 65,
      "def": 85,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにミント",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 15
          },
          {
            "type": "cleanse",
            "target": "allies",
            "value": 0
          }
        ],
        "description": "自分のライフを15回復（上限400）。味方全体のATK・DEF低下を解除する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを40回復し、状態異常を1つ解除する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/10.png",
        "rarity": "R",
        "statsText": "HP +5",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにミント",
          "text": "味方全体のHPを40回復し、状態異常を1つ解除する"
        },
        "tags": [
          "01",
          "02",
          "27",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "11",
      "name": "ぷにモブブロンズ",
      "image": "fig/11.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "無",
      "tags": [
        "01",
        "10",
        "27",
        "64",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにメタル",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 20
          }
        ],
        "description": "味方全体のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のMPを25回復し、DEFを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/11.png",
        "rarity": "SR",
        "statsText": "HP +3 & DEF +1",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにメタル",
          "text": "味方全体のMPを25回復し、DEFを2ターンの間10%アップする"
        },
        "tags": [
          "01",
          "08",
          "10",
          "27",
          "64",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "12",
      "name": "ぷにモブピンクゴールド",
      "image": "fig/12.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "64",
        "69",
        "06"
      ],
      "soulSkill": {
        "name": "ぷにキラリ",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 20
          }
        ],
        "description": "味方全体のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のMPを25回復し、MNDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/12.png",
        "rarity": "SR",
        "statsText": "HP +3 & MP +2",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにキラリ",
          "text": "味方全体のMPを25回復し、MNDを2ターンの間15%アップする"
        },
        "tags": [
          "01",
          "06",
          "08",
          "27",
          "64",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "13",
      "name": "ぷにモブゴールド",
      "image": "fig/13.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 130,
      "def": 105,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "64",
        "69",
        "08"
      ],
      "soulSkill": {
        "name": "ぷにゴールド",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 20
          }
        ],
        "description": "味方全体のATKを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のATKを2ターンの間15%アップし、この戦闘の獲得コインを5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/13.png",
        "rarity": "SR",
        "statsText": "HP +4 & ATK +1",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにゴールド",
          "text": "味方全体のATKを2ターンの間15%アップし、この戦闘の獲得コインを5%アップする"
        },
        "tags": [
          "01",
          "08",
          "27",
          "64",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "14",
      "name": "ぷにモブシルバーホワイト",
      "image": "fig/14.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "無",
      "tags": [
        "01",
        "27",
        "64",
        "69",
        "08"
      ],
      "soulSkill": {
        "name": "ぷにシルバー",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 20
          }
        ],
        "description": "味方全体のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体の全属性耐性を2ターンの間10%アップし、MPを15回復する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/14.png",
        "rarity": "SR",
        "statsText": "HP +8",
        "traitText": "会心率+2%",
        "soul": {
          "cost": 4,
          "name": "ぷにシルバー",
          "text": "味方全体の全属性耐性を2ターンの間10%アップし、MPを15回復する"
        },
        "tags": [
          "01",
          "08",
          "28",
          "27",
          "64",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "15",
      "name": "ぷにモブハロウィン",
      "image": "fig/15.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 130,
      "attribute": "無",
      "tags": [
        "01",
        "09",
        "27",
        "69",
        "07"
      ],
      "soulSkill": {
        "name": "ぷにトリック",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 20
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを20上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のマヒを解除し、SPDを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/15.png",
        "rarity": "SR",
        "statsText": "MND +4",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "ぷにトリック",
          "text": "味方全体のマヒを解除し、SPDを2ターンの間10%アップする"
        },
        "tags": [
          "01",
          "07",
          "09",
          "27",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "16",
      "name": "みかんちゃん",
      "image": "fig/16.png",
      "rarity": "MOB",
      "soulClass": "seed",
      "atk": 185,
      "def": 205,
      "attribute": "無",
      "tags": [
        "10",
        "13",
        "23",
        "27",
        "30",
        "33",
        "40",
        "55",
        "67",
        "68",
        "78",
        "81"
      ],
      "soulSkill": {
        "name": "おるすばん",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 35
          }
        ],
        "description": "味方全体のDEFを35上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFを2ターンの間40%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/16.png",
        "rarity": "MOB",
        "statsText": "HP.MP +15 & DEF +10",
        "traitText": "必殺技CT-1ターン & ダメージ軽減+5%",
        "soul": {
          "cost": 6,
          "name": "おるすばん",
          "text": "味方全体のDEFを2ターンの間40%アップする"
        },
        "tags": [
          "08",
          "10",
          "13",
          "23",
          "27",
          "28",
          "30",
          "33",
          "40",
          "55",
          "67",
          "68",
          "78",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "MOBは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/06",
        "mq:eventfig/08",
        "mq:eventfig/16",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/30",
        "mq:eventfig/36",
        "mq:eventfig/37",
        "mq:eventfig/39",
        "mq:eventfig/40",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "17",
      "name": "モブクラシックブルー",
      "image": "fig/17.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "水",
      "tags": [
        "09",
        "10",
        "17",
        "02"
      ],
      "soulSkill": {
        "name": "ブルーノート",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 20
          }
        ],
        "description": "味方全体のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のMNDとDEFを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/17.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "水属性耐性 +2%",
        "soul": {
          "cost": 4,
          "name": "ブルーノート",
          "text": "味方全体のMNDとDEFを2ターンの間10%アップする"
        },
        "tags": [
          "02",
          "09",
          "10",
          "17"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "148",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:spbossfig/38",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/22",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "18",
      "name": "モブクラシックグリーン",
      "image": "fig/18.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "無",
      "tags": [
        "10",
        "33",
        "02"
      ],
      "soulSkill": {
        "name": "グリーンノート",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 20
          }
        ],
        "description": "自分のライフを20回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを10%回復し、SPDを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/18.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "毒耐性 +1%",
        "soul": {
          "cost": 4,
          "name": "グリーンノート",
          "text": "味方全体のHPを10%回復し、SPDを2ターンの間10%アップする"
        },
        "tags": [
          "02",
          "10",
          "33"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "19",
      "name": "モブクラシックピンク",
      "image": "fig/19.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 130,
      "attribute": "無",
      "tags": [
        "10",
        "33",
        "81",
        "06"
      ],
      "soulSkill": {
        "name": "ピンクノート",
        "timing": "own-main",
        "effects": [
          {
            "type": "break",
            "target": "enemies",
            "value": 20
          }
        ],
        "description": "相手全体のDEFを20下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDを2ターンの間10%アップし、敵全体のDEFを5%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/19.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "ダメージ軽減 +1%",
        "soul": {
          "cost": 4,
          "name": "ピンクノート",
          "text": "味方全体のSPDを2ターンの間10%アップし、敵全体のDEFを5%ダウンさせる"
        },
        "tags": [
          "06",
          "10",
          "33",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "20",
      "name": "モブクラシックオレンジ",
      "image": "fig/20.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 130,
      "attribute": "無",
      "tags": [
        "10",
        "33",
        "81",
        "07"
      ],
      "soulSkill": {
        "name": "オレンジノート",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 20
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを20上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/20.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "マヒ耐性 +1%",
        "soul": {
          "cost": 4,
          "name": "オレンジノート",
          "text": "味方全体のSPDを2ターンの間15%アップする"
        },
        "tags": [
          "07",
          "10",
          "33",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "21",
      "name": "モブクラシックレッド",
      "image": "fig/21.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 130,
      "attribute": "無",
      "tags": [
        "10",
        "33",
        "81",
        "03"
      ],
      "soulSkill": {
        "name": "レッドノート",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 20
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを20上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のATKとSPDを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/21.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "やけど耐性 +1%",
        "soul": {
          "cost": 4,
          "name": "レッドノート",
          "text": "味方全体のATKとSPDを2ターンの間10%アップする"
        },
        "tags": [
          "03",
          "10",
          "33",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "22",
      "name": "モブメシ どら焼き",
      "image": "fig/22.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "atk": 255,
      "def": 280,
      "attribute": "無",
      "tags": [
        "10",
        "18",
        "30",
        "40",
        "65",
        "67",
        "81"
      ],
      "soulSkill": {
        "name": "あんこタイム",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 25
          }
        ],
        "description": "自分のライフを25回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを20%回復する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/22.png",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "眠り耐性 +5%",
        "soul": {
          "cost": 5,
          "name": "あんこタイム",
          "text": "味方全体のHPを20%回復する"
        },
        "tags": [
          "10",
          "18",
          "29",
          "30",
          "40",
          "65",
          "67",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "22:family",
          "target": "22",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "65"
            },
            {
              "tag": "65"
            }
          ],
          "label": "スイーツ × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "22:element",
          "target": "22",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "23",
      "name": "モブメシ ピザ",
      "image": "fig/23.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "無",
      "tags": [
        "10",
        "18",
        "40",
        "66",
        "67",
        "70",
        "07"
      ],
      "soulSkill": {
        "name": "チーズラッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 25
          }
        ],
        "description": "自分のライフを25回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを10%回復し、ATKを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/23.png",
        "rarity": "SSR",
        "statsText": "ATK +4",
        "traitText": "やけど耐性 +5%",
        "soul": {
          "cost": 5,
          "name": "チーズラッシュ",
          "text": "味方全体のHPを10%回復し、ATKを2ターンの間20%アップする"
        },
        "tags": [
          "07",
          "10",
          "18",
          "29",
          "40",
          "66",
          "67",
          "70"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/16",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "24",
      "name": "モブメシ 肉まん",
      "image": "fig/24.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "無",
      "tags": [
        "10",
        "18",
        "40",
        "66",
        "67",
        "74",
        "28"
      ],
      "soulSkill": {
        "name": "ほかほかガード",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 25
          }
        ],
        "description": "自分のライフを25回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを15%回復し、DEFを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/24.png",
        "rarity": "SSR",
        "statsText": "HP +10",
        "traitText": "マヒ耐性 +5%",
        "soul": {
          "cost": 5,
          "name": "ほかほかガード",
          "text": "味方全体のHPを15%回復し、DEFを2ターンの間20%アップする"
        },
        "tags": [
          "10",
          "18",
          "28",
          "29",
          "40",
          "66",
          "67",
          "74"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/16",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "25",
      "name": "モブメシ パンケーキ",
      "image": "fig/25.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "無",
      "tags": [
        "10",
        "18",
        "33",
        "40",
        "65",
        "67",
        "04"
      ],
      "soulSkill": {
        "name": "ふわふわタイム",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 25
          }
        ],
        "description": "自分のライフを25回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを15%回復し、MNDとMAGを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/25.png",
        "rarity": "SSR",
        "statsText": "ATK +2 & DEF +3",
        "traitText": "眠り耐性 +5%",
        "soul": {
          "cost": 5,
          "name": "ふわふわタイム",
          "text": "味方全体のHPを15%回復し、MNDとMAGを2ターンの間15%アップする"
        },
        "tags": [
          "04",
          "10",
          "18",
          "33",
          "40",
          "65",
          "67"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/16",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "26",
      "name": "モブKART VR",
      "image": "fig/26.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 125,
      "def": 145,
      "attribute": "無",
      "tags": [
        "10",
        "22",
        "36",
        "81",
        "82",
        "08"
      ],
      "soulSkill": {
        "name": "VRドリフト",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDを2ターンの間20%アップし、回避率を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/26.png",
        "rarity": "SSR",
        "statsText": "SPD +3 & MND +2",
        "traitText": "ネオン街の戦闘で全ステータス+5%",
        "soul": {
          "cost": 5,
          "name": "VRドリフト",
          "text": "自分のSPDを2ターンの間20%アップし、回避率を10%アップする"
        },
        "tags": [
          "08",
          "10",
          "22",
          "36",
          "81",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "30",
        "31",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "27",
      "name": "モブKART ゴールド",
      "image": "fig/27.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 145,
      "def": 145,
      "attribute": "無",
      "tags": [
        "10",
        "22",
        "39",
        "81",
        "82",
        "08"
      ],
      "soulSkill": {
        "name": "ゴールドラップ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "自身のATKを25上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDを2ターンの間15%アップし、この戦闘の獲得コインを10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/27.png",
        "rarity": "SSR",
        "statsText": "SPD +3 & MND +2",
        "traitText": "戦闘獲得コイン +5%",
        "soul": {
          "cost": 5,
          "name": "ゴールドラップ",
          "text": "自分のSPDを2ターンの間15%アップし、この戦闘の獲得コインを10%アップする"
        },
        "tags": [
          "08",
          "10",
          "22",
          "39",
          "81",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "30",
        "31",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "28",
      "name": "モブKART ブラック",
      "image": "fig/28.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 125,
      "def": 145,
      "attribute": "無",
      "tags": [
        "09",
        "22",
        "26",
        "36",
        "37",
        "81",
        "82"
      ],
      "soulSkill": {
        "name": "ブラックドリフト",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDとATKを2ターンの間20%アップし、回避率を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/28.png",
        "rarity": "SSR",
        "statsText": "SPD +3 & MND +2",
        "traitText": "HP30以下でDEF +10",
        "soul": {
          "cost": 5,
          "name": "ブラックドリフト",
          "text": "自分のSPDとATKを2ターンの間20%アップし、回避率を5%アップする"
        },
        "tags": [
          "09",
          "22",
          "26",
          "36",
          "37",
          "81",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "30",
        "31",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "29",
      "name": "モブKART 中華店主",
      "image": "fig/29.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "無",
      "tags": [
        "18",
        "22",
        "32",
        "81",
        "82",
        "03"
      ],
      "soulSkill": {
        "name": "チャーハンブースト",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDとDEFを2ターンの間15%アップし、やけど耐性を30%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/29.png",
        "rarity": "SSR",
        "statsText": "SPD +3 & MND +2",
        "traitText": "やけど耐性 +10%",
        "soul": {
          "cost": 5,
          "name": "チャーハンブースト",
          "text": "自分のSPDとDEFを2ターンの間15%アップし、やけど耐性を30%アップする"
        },
        "tags": [
          "03",
          "18",
          "22",
          "32",
          "81",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "29:family",
          "target": "29",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "22"
            },
            {
              "tag": "22"
            }
          ],
          "label": "MOB KART × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "29:element",
          "target": "29",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "30",
      "name": "モブKART ヴィラン",
      "image": "fig/30.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 180,
      "def": 180,
      "attribute": "光",
      "tags": [
        "09",
        "22",
        "25",
        "26",
        "32",
        "37",
        "50"
      ],
      "soulSkill": {
        "name": "ダークドリフト",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemies",
            "value": 25
          }
        ],
        "description": "相手全体のATKを25下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のSPDを2ターンの間15%ダウンさせ、自分のSPDを15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/30.png",
        "rarity": "SSR",
        "statsText": "SPD +3 & MND +2",
        "traitText": "光属性耐性 +10%",
        "soul": {
          "cost": 5,
          "name": "ダークドリフト",
          "text": "敵全体のSPDを2ターンの間15%ダウンさせ、自分のSPDを15%アップする"
        },
        "tags": [
          "09",
          "22",
          "25",
          "26",
          "32",
          "37",
          "50",
          "58",
          "60",
          "81",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "30:family",
          "target": "30",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "22"
            },
            {
              "tag": "22"
            }
          ],
          "label": "MOB KART × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "30:element",
          "target": "30",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "190",
        "195",
        "170",
        "176",
        "215",
        "216",
        "spboss013"
      ]
    },
    {
      "id": "31",
      "name": "モブKART ファイヤー",
      "image": "fig/31.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 180,
      "def": 180,
      "attribute": "火",
      "tags": [
        "22",
        "26",
        "32",
        "56",
        "57",
        "60",
        "03"
      ],
      "soulSkill": {
        "name": "ファイヤーブースト",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "自身のATKを25上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中ダメージを与え、自分のSPDを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/31.png",
        "rarity": "SSR",
        "statsText": "SPD +3 & MND +2",
        "traitText": "火属性耐性 +10%",
        "soul": {
          "cost": 5,
          "name": "ファイヤーブースト",
          "text": "敵単体に火属性の物理中ダメージを与え、自分のSPDを2ターンの間20%アップする"
        },
        "tags": [
          "03",
          "22",
          "26",
          "32",
          "56",
          "57",
          "60"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "31:family",
          "target": "31",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "22"
            },
            {
              "tag": "22"
            }
          ],
          "label": "MOB KART × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "31:element",
          "target": "31",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "32",
      "name": "PB2 オンラインロゴ",
      "image": "fig/32.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 130,
      "def": 105,
      "attribute": "無",
      "tags": [
        "11",
        "12",
        "19",
        "40",
        "66"
      ],
      "soulSkill": {
        "name": "オンラインサイファー",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 20
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "自身のATKを20上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDと会心率を2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/32.png",
        "rarity": "SR",
        "statsText": "HP +10 & MAG +2",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "オンラインサイファー",
          "text": "自分のSPDと会心率を2ターンの間10%アップする"
        },
        "tags": [
          "11",
          "12",
          "19",
          "40",
          "66",
          "72",
          "78",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "33",
      "name": "PB2 PB2 Vol.60ロゴ",
      "image": "fig/33.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 130,
      "def": 105,
      "attribute": "無",
      "tags": [
        "11",
        "12",
        "19",
        "40",
        "72"
      ],
      "soulSkill": {
        "name": "60サイファー",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のATKを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のATKと会心率を2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/33.png",
        "rarity": "SR",
        "statsText": "MP +10 & MAG +2",
        "traitText": "無し",
        "soul": {
          "cost": 4,
          "name": "60サイファー",
          "text": "自分のATKと会心率を2ターンの間10%アップする"
        },
        "tags": [
          "11",
          "12",
          "19",
          "40",
          "72",
          "78",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "34",
      "name": "PB2 Vol.62 マスコット",
      "image": "fig/34.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "無",
      "tags": [
        "11",
        "27",
        "40",
        "72",
        "78",
        "82",
        "04"
      ],
      "soulSkill": {
        "name": "ロボサイファー",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のDEFと会心率を2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/34.png",
        "rarity": "SSR",
        "statsText": "ATK +2 & MAG +2",
        "traitText": "会心率+2%",
        "soul": {
          "cost": 4,
          "name": "ロボサイファー",
          "text": "自分のDEFと会心率を2ターンの間10%アップする"
        },
        "tags": [
          "04",
          "11",
          "27",
          "31",
          "40",
          "72",
          "78",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "35",
      "name": "PB2 Vol.63 マスコット",
      "image": "fig/35.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "無",
      "tags": [
        "11",
        "12",
        "27",
        "40",
        "72",
        "73",
        "78"
      ],
      "soulSkill": {
        "name": "63サイファー",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDとMNDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/35.png",
        "rarity": "SSR",
        "statsText": "SPD +2 & MND +2",
        "traitText": "会心率+2%",
        "soul": {
          "cost": 4,
          "name": "63サイファー",
          "text": "自分のSPDとMNDを2ターンの間15%アップする"
        },
        "tags": [
          "07",
          "11",
          "12",
          "27",
          "40",
          "72",
          "73",
          "78",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "36",
      "name": "PB2 Vol.63 マスコットⅡ",
      "image": "fig/36.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 150,
      "def": 130,
      "attribute": "無",
      "tags": [
        "11",
        "12",
        "27",
        "40",
        "72",
        "73",
        "78"
      ],
      "soulSkill": {
        "name": "ツインサイファー",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "自身のATKを25上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のMAGとSPDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/36.png",
        "rarity": "SSR",
        "statsText": "SPD +2 & MAG +2",
        "traitText": "会心率+2%",
        "soul": {
          "cost": 4,
          "name": "ツインサイファー",
          "text": "自分のMAGとSPDを2ターンの間15%アップする"
        },
        "tags": [
          "07",
          "11",
          "12",
          "27",
          "40",
          "72",
          "73",
          "78",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "37",
      "name": "PB2 Vol.63 マスコットⅢ",
      "image": "fig/37.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "無",
      "tags": [
        "11",
        "12",
        "19",
        "40",
        "72",
        "73",
        "78"
      ],
      "soulSkill": {
        "name": "トリプルサイファー",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のDEFとMNDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/37.png",
        "rarity": "SSR",
        "statsText": "DEF +2 & MND +2",
        "traitText": "会心率+2%",
        "soul": {
          "cost": 4,
          "name": "トリプルサイファー",
          "text": "自分のDEFとMNDを2ターンの間15%アップする"
        },
        "tags": [
          "07",
          "11",
          "12",
          "19",
          "40",
          "72",
          "73",
          "78",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "38",
      "name": "PB2 クッションモブ",
      "image": "fig/38.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "無",
      "tags": [
        "10",
        "11",
        "19",
        "40",
        "70",
        "72",
        "78"
      ],
      "soulSkill": {
        "name": "クッションビート",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 25
          }
        ],
        "description": "自分のライフを25回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを15%回復し、ダメージ軽減を2ターンの間3%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/38.png",
        "rarity": "SSR",
        "statsText": "HP +10 & MAG +1",
        "traitText": "ダメージ軽減+2%",
        "soul": {
          "cost": 4,
          "name": "クッションビート",
          "text": "味方全体のHPを15%回復し、ダメージ軽減を2ターンの間3%アップする"
        },
        "tags": [
          "06",
          "10",
          "11",
          "19",
          "40",
          "70",
          "72",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "39",
      "name": "PB2 CB 20th ロゴ",
      "image": "fig/39.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 310,
      "attribute": "無",
      "tags": [
        "11",
        "12",
        "19",
        "30",
        "33",
        "40",
        "64",
        "66",
        "74"
      ],
      "soulSkill": {
        "name": "20thビート",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のATK・DEF・SPDを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/39.png",
        "rarity": "UR",
        "statsText": "HP+10 & ATK +2 & MAG +2 & MND +2",
        "traitText": "獲得経験値+10%",
        "soul": {
          "cost": 4,
          "name": "20thビート",
          "text": "味方全体のATK・DEF・SPDを2ターンの間10%アップする"
        },
        "tags": [
          "04",
          "11",
          "12",
          "19",
          "30",
          "33",
          "40",
          "64",
          "66",
          "74",
          "78",
          "81",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "39:element",
          "target": "39",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "40",
      "name": "MOB SHOT PET モブコドラ",
      "image": "fig/40.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 150,
      "def": 130,
      "attribute": "火",
      "tags": [
        "10",
        "14",
        "38",
        "56",
        "60",
        "68",
        "69"
      ],
      "soulSkill": {
        "name": "コドラファイヤ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火の魔法ダメージ小～中を与える",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/40.png",
        "rarity": "SSR",
        "statsText": "ATK +2 & MP +10",
        "traitText": "火属性魔法与ダメージ+7%",
        "soul": {
          "cost": 5,
          "name": "コドラファイヤ",
          "text": "敵単体に火の魔法ダメージ小～中を与える"
        },
        "tags": [
          "03",
          "10",
          "14",
          "38",
          "56",
          "60",
          "68",
          "69"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "31",
        "49",
        "50",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/08",
        "mq:eventfig/10",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/30",
        "mq:eventfig/36",
        "mq:eventfig/39",
        "mq:eventfig/40",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "41",
      "name": "MOB SHOT PET イルカエル",
      "image": "fig/41.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 145,
      "def": 145,
      "attribute": "水",
      "tags": [
        "10",
        "14",
        "27",
        "60",
        "67",
        "68",
        "80"
      ],
      "soulSkill": {
        "name": "イルカブラスト",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水の魔法ダメージ小～中を与える",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/41.png",
        "rarity": "SSR",
        "statsText": "SPD +2 & MP +10",
        "traitText": "水属性魔法与ダメージ+7%",
        "soul": {
          "cost": 5,
          "name": "イルカブラスト",
          "text": "敵単体に水の魔法ダメージ小～中を与える"
        },
        "tags": [
          "10",
          "14",
          "27",
          "31",
          "60",
          "67",
          "68",
          "80"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "49",
        "50",
        "51",
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/06",
        "mq:eventfig/07",
        "mq:eventfig/08",
        "mq:eventfig/11",
        "mq:eventfig/16",
        "mq:eventfig/30",
        "mq:eventfig/36",
        "mq:eventfig/39",
        "mq:eventfig/40",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "42",
      "name": "MOB SHOT PET モブネロ",
      "image": "fig/42.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 150,
      "def": 130,
      "attribute": "闇",
      "tags": [
        "14",
        "34",
        "36",
        "55",
        "59",
        "60",
        "29"
      ],
      "soulSkill": {
        "name": "ネロスナイパー",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇の物理ダメージ小～中を与える",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/42.png",
        "rarity": "SSR",
        "statsText": "SPD +5",
        "traitText": "命中率+10% & 会心率+1%",
        "soul": {
          "cost": 5,
          "name": "ネロスナイパー",
          "text": "敵単体に闇の物理ダメージ小～中を与える"
        },
        "tags": [
          "14",
          "29",
          "34",
          "36",
          "55",
          "59",
          "60"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "49",
        "50",
        "51",
        "99",
        "104",
        "136",
        "157",
        "161",
        "166",
        "spboss006",
        "spboss007",
        "spboss012",
        "spboss017",
        "spboss034",
        "mq:eventfig/09",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "43",
      "name": "MOB SHOT PET モブトン",
      "image": "fig/43.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 150,
      "def": 130,
      "attribute": "水",
      "tags": [
        "09",
        "14",
        "34",
        "36",
        "45",
        "59",
        "60"
      ],
      "soulSkill": {
        "name": "トントライデント",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水の物理ダメージ小～中を与える",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/43.png",
        "rarity": "SSR",
        "statsText": "ATK +3",
        "traitText": "水属性ダメージ軽減+5%",
        "soul": {
          "cost": 5,
          "name": "トントライデント",
          "text": "敵単体に水の物理ダメージ小～中を与える"
        },
        "tags": [
          "09",
          "14",
          "31",
          "34",
          "36",
          "45",
          "59",
          "60",
          "80"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "49",
        "50",
        "51",
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "44",
      "name": "MOB SHOT PET モブデンデン",
      "image": "fig/44.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 145,
      "def": 135,
      "attribute": "雷",
      "tags": [
        "13",
        "14",
        "24",
        "27",
        "34",
        "40",
        "43",
        "51",
        "67"
      ],
      "soulSkill": {
        "name": "デンデントリック",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に雷の魔法ダメージ小を与える",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/44.png",
        "rarity": "UR",
        "statsText": "ATK +2 & SPD +2 & MND +2",
        "traitText": "雷耐性+10% & 雷属性魔法与ダメージ+5%",
        "soul": {
          "cost": 5,
          "name": "デンデントリック",
          "text": "敵全体に雷の魔法ダメージ小を与える"
        },
        "tags": [
          "04",
          "13",
          "14",
          "24",
          "27",
          "34",
          "40",
          "43",
          "51",
          "67",
          "68",
          "79"
        ],
        "actor": {
          "id": "denden",
          "name": "モブデンデン",
          "category": "party",
          "attribute": "雷",
          "role": "連撃",
          "atk": 421,
          "mag": 294,
          "def": 273,
          "res": 273,
          "spd": 266,
          "passive": "デンデン・ムキムキ・カナリツヨイ",
          "passiveDescription": "通常攻撃が10%の確率で会心の一撃になる\n※会心の一撃の元々の確率とは別で抽選する",
          "statusResist": {
            "poison": 0.25,
            "paralyze": 0.6,
            "burn": 0.3,
            "sleep": 0.3,
            "confuse": 0.25,
            "stun": 0.4
          },
          "elementResist": {
            "無": 0,
            "火": -0.05,
            "水": 0.08,
            "雷": 0.2,
            "地": -0.08,
            "風": 0.08,
            "光": 0,
            "闇": 0
          },
          "ults": [
            {
              "name": "マシンガングミ",
              "image": "ult/25.png",
              "cost": 0,
              "kind": "multiAttack",
              "power": 0.658,
              "type": "physical",
              "hits": [
                1,
                3
              ],
              "desc": "ランダムで1～3回雷属性小～中ダメージ",
              "effectFrames": [
                "skill2/74.png",
                "skill2/75.png",
                "skill2/76.png",
                "skill2/77.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "雷",
              "baseCt": 6,
              "learnLevel": 1
            },
            {
              "name": "イカシタイカヅチ",
              "image": "ult/26.png",
              "cost": 0,
              "kind": "teamRecovery",
              "power": 0.1504,
              "desc": "味方全体のHPとMP小回復、味方全体のディフェンス小バフ",
              "attackElement": "雷",
              "baseCt": 7,
              "learnLevel": 15
            },
            {
              "name": "トリック・ザ・デンデン",
              "image": "ult/27.png",
              "cost": 0,
              "kind": "aoeStun",
              "power": 1.974,
              "type": "physical",
              "chance": 0.1,
              "desc": "敵全体雷属性大ダメージ＋10%確率でひるみ",
              "effectFrames": [
                "skill2/82.png",
                "skill2/83.png",
                "skill2/84.png",
                "skill2/85.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "雷",
              "baseCt": 8,
              "learnLevel": 30
            },
            {
              "name": "デンデンサンダーボルト",
              "image": "ult/28.png",
              "cost": 0,
              "kind": "aoeDamage",
              "power": 2.5192,
              "type": "magic",
              "desc": "敵全体極大ダメージ",
              "attackElement": "雷",
              "baseCt": 9,
              "learnLevel": 50
            }
          ],
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "50",
        "51",
        "92",
        "182",
        "mq:eventfig/04",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "45",
      "name": "MOB SHOT SOUL モブスライム",
      "image": "fig/45.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 60,
      "def": 80,
      "attribute": "水",
      "tags": [
        "09",
        "14",
        "23"
      ],
      "soulSkill": {
        "name": "スラスライダー",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDを2ターンの間25%アップし、回避率を10%・ダメージ軽減を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/45.png",
        "rarity": "R",
        "statsText": "DEF +3 & MND +2 & MAG +1",
        "traitText": "水属性耐性+8%",
        "soul": {
          "cost": 3,
          "name": "スラスライダー",
          "text": "自分のSPDを2ターンの間25%アップし、回避率を10%・ダメージ軽減を5%アップする"
        },
        "tags": [
          "02",
          "09",
          "14",
          "23",
          "41",
          "60",
          "67"
        ],
        "actor": {
          "id": "g-slime",
          "name": "モブスライム",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "水",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "50",
        "51",
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "46",
      "name": "MOB SHOT SOUL モブロック",
      "image": "fig/46.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 65,
      "def": 90,
      "attribute": "地",
      "tags": [
        "09",
        "14",
        "23"
      ],
      "soulSkill": {
        "name": "ロックパンチ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 15
          }
        ],
        "description": "自身のATKを15上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に地属性物理小ダメージを与える",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/46.png",
        "rarity": "R",
        "statsText": "DEF +3 & MND +2",
        "traitText": "地属性耐性+10%",
        "soul": {
          "cost": 3,
          "name": "ロックパンチ",
          "text": "敵単体に地属性物理小ダメージを与える"
        },
        "tags": [
          "09",
          "14",
          "23",
          "29",
          "41",
          "60",
          "77"
        ],
        "actor": {
          "id": "g-rock",
          "name": "モブロック",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 184,
          "res": 156,
          "spd": 206,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "50",
        "51",
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "47",
      "name": "MOB SHOT SOUL モブテツ",
      "image": "fig/47.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 165,
      "def": 125,
      "attribute": "地",
      "tags": [
        "14",
        "23",
        "24",
        "27",
        "36",
        "40",
        "49",
        "55",
        "60"
      ],
      "soulSkill": {
        "name": "茄子落とし",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のATKを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に会心率12%の地属性物理小～中ダメージを与える",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/47.png",
        "rarity": "UR",
        "statsText": "ATK +5 & SPD +5",
        "traitText": "会心率+5% & マヒ耐性+10%",
        "soul": {
          "cost": 5,
          "name": "茄子落とし",
          "text": "敵単体に会心率12%の地属性物理小～中ダメージを与える"
        },
        "tags": [
          "14",
          "23",
          "24",
          "27",
          "28",
          "29",
          "36",
          "40",
          "49",
          "55",
          "60",
          "69"
        ],
        "actor": {
          "id": "tetsu",
          "name": "モブテツ",
          "category": "party",
          "attribute": "地",
          "role": "剣豪",
          "atk": 457,
          "mag": 191,
          "def": 408,
          "res": 312,
          "spd": 178,
          "passive": "テツの意志",
          "passiveDescription": "30%の確立で通常攻撃が2回攻撃になる",
          "statusResist": {
            "poison": 0.4,
            "paralyze": 0.3,
            "burn": 0.45,
            "sleep": 0.3,
            "confuse": 0.5,
            "stun": 0.6
          },
          "elementResist": {
            "無": 0.05,
            "火": 0.1,
            "水": -0.08,
            "雷": 0,
            "地": 0.2,
            "風": -0.12,
            "光": 0,
            "闇": 0
          },
          "ults": [
            {
              "name": "モブテツ一閃",
              "image": "ult/37.png",
              "cost": 0,
              "kind": "tetsuSweepV221",
              "power": 1.645,
              "type": "physical",
              "chance": 0.1,
              "desc": "全体地属性中ダメージ＋自身の回避率を2ターン20%アップする",
              "effectFrames": [
                "skill2/01.png",
                "skill2/02.png",
                "skill2/03.png",
                "skill2/04.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "地",
              "baseCt": 6,
              "learnLevel": 1
            },
            {
              "name": "モブテツ流茄子落とし",
              "image": "ult/38.png",
              "cost": 0,
              "kind": "damage",
              "power": 2.068,
              "type": "physical",
              "crit": 0.2,
              "priority": true,
              "desc": "必ず一番手で攻撃※相手も同じ能力を持つ技を使ったらスピード勝負\n単体地属性大ダメージ(20%の確率で会心)",
              "effectFrames": [
                "skill2/173.png",
                "skill2/174.png",
                "skill2/175.png",
                "skill2/176.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "地",
              "baseCt": 7,
              "learnLevel": 15
            },
            {
              "name": "モブテツ一文字",
              "image": "ult/39.png",
              "cost": 0,
              "kind": "aoeStun",
              "power": 2.115,
              "type": "physical",
              "chance": 0.5,
              "desc": "全体地属性大攻撃＋50%の確率でひるみ",
              "effectFrames": [
                "skill2/05.png",
                "skill2/06.png",
                "skill2/07.png",
                "skill2/08.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "地",
              "baseCt": 8,
              "learnLevel": 30
            },
            {
              "name": "鉄の極意",
              "image": "ult/40.png",
              "cost": 0,
              "kind": "tetsuFinal",
              "power": 2.5568,
              "type": "physical",
              "desc": "自身の回避率を2ターン40%アップ＋地属性極大ダメージ",
              "effectFrames": [
                "skill2/214.png",
                "skill2/215.png",
                "skill2/216.png",
                "skill2/217.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "地",
              "baseCt": 9,
              "learnLevel": 50
            }
          ],
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "50",
        "51",
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "48",
      "name": "MOB SHOT SOUL モブガーディアン",
      "image": "fig/48.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "atk": 260,
      "def": 280,
      "attribute": "地",
      "tags": [
        "09",
        "14",
        "23",
        "25",
        "39",
        "43",
        "60"
      ],
      "soulSkill": {
        "name": "ガードウォール",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFを2ターンの間50％アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/48.png",
        "rarity": "SSR",
        "statsText": "DEF +5 & MND +1",
        "traitText": "ダメージ軽減+2%",
        "soul": {
          "cost": 5,
          "name": "ガードウォール",
          "text": "味方全体のDEFを2ターンの間50％アップする"
        },
        "tags": [
          "09",
          "14",
          "23",
          "25",
          "29",
          "39",
          "43",
          "60",
          "66",
          "73",
          "77"
        ],
        "actor": {
          "id": "boss-guardian",
          "name": "モブガーディアン",
          "category": "boss",
          "attribute": "地",
          "role": "physical",
          "atk": 362,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.99,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": -0.05,
            "水": 0,
            "雷": 0,
            "地": 0.28,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "48:family",
          "target": "48",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "14"
            },
            {
              "tag": "14"
            }
          ],
          "label": "MOB SHOT × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "48:element",
          "target": "48",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "49",
      "name": "MOB SHOT SOUL ミラモブ",
      "image": "fig/49.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 200,
      "def": 225,
      "attribute": "闇",
      "tags": [
        "09",
        "14",
        "23",
        "25",
        "32",
        "37",
        "42",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "ミラポイズン",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemy",
            "value": 30
          }
        ],
        "description": "選んだ相手1体のATKを30下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇魔法大ダメージを与え、30%で毒にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/49.png",
        "rarity": "UR",
        "statsText": "DEF+3 & MP +15 & MND +2",
        "traitText": "闇属性耐性+10 & 回避率+3%",
        "soul": {
          "cost": 7,
          "name": "ミラポイズン",
          "text": "敵単体に闇魔法大ダメージを与え、30%で毒にする"
        },
        "tags": [
          "05",
          "09",
          "14",
          "23",
          "25",
          "32",
          "37",
          "42",
          "50",
          "60",
          "66",
          "71"
        ],
        "actor": {
          "id": "boss-mira",
          "name": "ミラモブ",
          "category": "boss",
          "attribute": "闇",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.8300000000000001,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.05,
            "風": 0,
            "光": 0,
            "闇": 0.28
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "49:family",
          "target": "49",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "14"
            },
            {
              "tag": "14"
            }
          ],
          "label": "MOB SHOT × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "49:element",
          "target": "49",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "162",
        "207",
        "217",
        "218",
        "spboss001"
      ]
    },
    {
      "id": "50",
      "name": "MOB SHOT SOUL モブホーク",
      "image": "fig/50.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 175,
      "def": 170,
      "attribute": "風",
      "tags": [
        "09",
        "14",
        "23",
        "25",
        "41",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "ホークショット",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に風属性の物理中ダメージを与え、2ターンの間SPDを15%ダウンさせる。さらに自分の回避率を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/50.png",
        "rarity": "SSR",
        "statsText": "ATK +2 & SPD +2 & MND +2",
        "traitText": "風属性耐性+10%",
        "soul": {
          "cost": 5,
          "name": "ホークショット",
          "text": "敵全体に風属性の物理中ダメージを与え、2ターンの間SPDを15%ダウンさせる。さらに自分の回避率を10%アップする"
        },
        "tags": [
          "04",
          "09",
          "14",
          "23",
          "25",
          "41",
          "50",
          "60",
          "71"
        ],
        "actor": {
          "id": "boss-hawk",
          "name": "モブホーク",
          "category": "boss",
          "attribute": "風",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0.28,
            "光": -0.05,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "50:family",
          "target": "50",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "14"
            },
            {
              "tag": "14"
            }
          ],
          "label": "MOB SHOT × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "50:element",
          "target": "50",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "199",
        "160",
        "mq:eventfig/31",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "51",
      "name": "MOB SHOT SOUL モブドラゴン",
      "image": "fig/51.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 210,
      "def": 205,
      "attribute": "火",
      "tags": [
        "09",
        "14",
        "23",
        "25",
        "35",
        "38",
        "47",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "ドラゴンバースト",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に火属性の物理中～大ダメージを与え、40%でやけどにする。自分の会心率を2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/51.png",
        "rarity": "UR",
        "statsText": "ATK +3 & DEF +3 & MND +2",
        "traitText": "火属性耐性+10% & 会心率+3%",
        "soul": {
          "cost": 6,
          "name": "ドラゴンバースト",
          "text": "敵全体に火属性の物理中～大ダメージを与え、40%でやけどにする。自分の会心率を2ターンの間10%アップする"
        },
        "tags": [
          "03",
          "09",
          "14",
          "23",
          "25",
          "35",
          "38",
          "47",
          "50",
          "60",
          "68"
        ],
        "actor": {
          "id": "boss-dragon",
          "name": "モブドラゴン",
          "category": "boss",
          "attribute": "火",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.9199999999999999,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0.28,
            "水": -0.05,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0.05,
          "latestEncounterOverride": {
            "world": "magma",
            "area": 3,
            "damageReduction": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "51:family",
          "target": "51",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "14"
            },
            {
              "tag": "14"
            }
          ],
          "label": "MOB SHOT × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "51:element",
          "target": "51",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "52",
      "name": "スケボーネコクー",
      "image": "fig/52.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 125,
      "def": 145,
      "attribute": "水",
      "tags": [
        "10",
        "16",
        "27",
        "33",
        "67",
        "68",
        "72"
      ],
      "soulSkill": {
        "name": "ネコスケート",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に物理中ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/52.png",
        "rarity": "SSR",
        "statsText": "ATK +2 & SPD +3",
        "traitText": "通常攻撃の与ダメージ+5%",
        "soul": {
          "cost": 5,
          "name": "ネコスケート",
          "text": "敵単体に物理中ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする"
        },
        "tags": [
          "10",
          "16",
          "27",
          "31",
          "33",
          "67",
          "68",
          "72",
          "80"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/06",
        "mq:eventfig/07",
        "mq:eventfig/08",
        "mq:eventfig/11",
        "mq:eventfig/16",
        "mq:eventfig/30",
        "mq:eventfig/36",
        "mq:eventfig/39",
        "mq:eventfig/40",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "53",
      "name": "レコードネコクー",
      "image": "fig/53.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 145,
      "def": 125,
      "attribute": "無",
      "tags": [
        "10",
        "12",
        "16",
        "27",
        "33",
        "67",
        "68"
      ],
      "soulSkill": {
        "name": "ネコスクラッチ",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に無属性の魔法小～中ダメージを与え、味方全体のMAGとMNDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/53.png",
        "rarity": "SSR",
        "statsText": "MAG +3 & MND +2",
        "traitText": "魔法攻撃の与ダメージ+5%",
        "soul": {
          "cost": 5,
          "name": "ネコスクラッチ",
          "text": "敵全体に無属性の魔法小～中ダメージを与え、味方全体のMAGとMNDを2ターンの間15%アップする"
        },
        "tags": [
          "10",
          "12",
          "16",
          "27",
          "31",
          "33",
          "67",
          "68",
          "72",
          "80"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "29",
        "67",
        "196",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/06",
        "mq:eventfig/08",
        "mq:eventfig/16",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/30",
        "mq:eventfig/36",
        "mq:eventfig/37",
        "mq:eventfig/39",
        "mq:eventfig/40",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "54",
      "name": "おやすみネコクー",
      "image": "fig/54.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "水",
      "tags": [
        "10",
        "16",
        "27",
        "33",
        "67",
        "68",
        "72"
      ],
      "soulSkill": {
        "name": "ネコスリープ",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 25
          },
          {
            "type": "cleanse",
            "target": "allies",
            "value": 0
          }
        ],
        "description": "自分のライフを25回復（上限400）。味方全体のATK・DEF低下を解除する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを20%回復し、眠りを解除する。さらに2ターンの間ダメージ軽減を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/54.png",
        "rarity": "SSR",
        "statsText": "HP+15",
        "traitText": "回復量+10%",
        "soul": {
          "cost": 5,
          "name": "ネコスリープ",
          "text": "味方全体のHPを20%回復し、眠りを解除する。さらに2ターンの間ダメージ軽減を5%アップする"
        },
        "tags": [
          "10",
          "16",
          "27",
          "31",
          "33",
          "67",
          "68",
          "72",
          "80"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/06",
        "mq:eventfig/07",
        "mq:eventfig/08",
        "mq:eventfig/11",
        "mq:eventfig/16",
        "mq:eventfig/30",
        "mq:eventfig/36",
        "mq:eventfig/39",
        "mq:eventfig/40",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "55",
      "name": "どら焼きネコクー",
      "image": "fig/55.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 120,
      "def": 155,
      "attribute": "水",
      "tags": [
        "10",
        "16",
        "18",
        "27",
        "33",
        "65",
        "67",
        "68",
        "72"
      ],
      "soulSkill": {
        "name": "どらネコタイム",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 30
          }
        ],
        "description": "自分のライフを30回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを30%回復し、MNDを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/55.png",
        "rarity": "UR",
        "statsText": "DEF +5 & MND +5",
        "traitText": "回復量+10% & 水属性耐性+10%",
        "soul": {
          "cost": 6,
          "name": "どらネコタイム",
          "text": "味方全体のHPを30%回復し、MNDを2ターンの間20%アップする"
        },
        "tags": [
          "10",
          "16",
          "18",
          "27",
          "31",
          "33",
          "65",
          "67",
          "68",
          "72",
          "80"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/06",
        "mq:eventfig/07",
        "mq:eventfig/08",
        "mq:eventfig/11",
        "mq:eventfig/16",
        "mq:eventfig/30",
        "mq:eventfig/36",
        "mq:eventfig/39",
        "mq:eventfig/40",
        "mq:eventfig/43",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "56",
      "name": "モブKART 実況モブ",
      "image": "fig/56.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 145,
      "def": 145,
      "attribute": "雷",
      "tags": [
        "22",
        "33",
        "34",
        "40",
        "59",
        "66",
        "74"
      ],
      "soulSkill": {
        "name": "ラストラップ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 25
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを25上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDを2ターンの間25%アップし、会心率を5%アップする。HP30%以下の味方にはSPD上昇量が35%になる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/56.png",
        "rarity": "SSR",
        "statsText": "SPD +4 & MND +1",
        "traitText": "雷属性耐性 +4%",
        "soul": {
          "cost": 5,
          "name": "ラストラップ",
          "text": "味方全体のSPDを2ターンの間25%アップし、会心率を5%アップする。HP30%以下の味方にはSPD上昇量が35%になる"
        },
        "tags": [
          "22",
          "33",
          "34",
          "40",
          "59",
          "66",
          "74",
          "79",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "29",
        "30",
        "31",
        "92",
        "182",
        "mq:eventfig/04"
      ]
    },
    {
      "id": "57",
      "name": "モブソフトクリーム",
      "image": "fig/57.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "無",
      "tags": [
        "18",
        "27",
        "33",
        "65",
        "66",
        "28"
      ],
      "soulSkill": {
        "name": "ひんやりソフト",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のMPを20回復し、全属性耐性を2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/57.png",
        "rarity": "SSR",
        "statsText": "MP +20",
        "traitText": "全属性耐性 +2%",
        "soul": {
          "cost": 5,
          "name": "ひんやりソフト",
          "text": "味方全体のMPを20回復し、全属性耐性を2ターンの間10%アップする"
        },
        "tags": [
          "18",
          "27",
          "28",
          "33",
          "65",
          "66"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "58",
      "name": "CBロゴ",
      "image": "fig/58.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "atk": 330,
      "def": 370,
      "attribute": "無",
      "tags": [
        "10",
        "11",
        "12",
        "19",
        "23",
        "30",
        "40",
        "58",
        "70",
        "72",
        "73",
        "74"
      ],
      "soulSkill": {
        "name": "メモリアルビート",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 35
          }
        ],
        "description": "自分のライフを35回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のATK・DEF・MAG・MND・SPDを2ターンの間12%アップし、HPとMPを10%回復する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/58.png",
        "rarity": "MOB",
        "statsText": "SPD +5 & MND +5",
        "traitText": "全属性耐性 +3% & 会心率 +3%",
        "soul": {
          "cost": 7,
          "name": "メモリアルビート",
          "text": "味方全体のATK・DEF・MAG・MND・SPDを2ターンの間12%アップし、HPとMPを10%回復する"
        },
        "tags": [
          "10",
          "11",
          "12",
          "19",
          "23",
          "29",
          "30",
          "40",
          "58",
          "70",
          "72",
          "73",
          "74",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "MOBは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "58:element",
          "target": "58",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "59",
      "name": "モブDJ 選曲",
      "image": "fig/59.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "無",
      "tags": [
        "10",
        "12",
        "27",
        "64",
        "67",
        "70",
        "72"
      ],
      "soulSkill": {
        "name": "セレクトビート",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDとMAGを2ターンの間15%アップし、MP消費を2ターンの間10%軽減する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/59.png",
        "rarity": "SSR",
        "statsText": "ATK.DEF.SPD +2",
        "traitText": "MP消費 -2%",
        "soul": {
          "cost": 5,
          "name": "セレクトビート",
          "text": "味方全体のSPDとMAGを2ターンの間15%アップし、MP消費を2ターンの間10%軽減する"
        },
        "tags": [
          "05",
          "10",
          "12",
          "27",
          "64",
          "67",
          "70",
          "72",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/16",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "60",
      "name": "モブDJ ハンズアップ",
      "image": "fig/60.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "無",
      "tags": [
        "10",
        "12",
        "27",
        "64",
        "67",
        "70",
        "72"
      ],
      "soulSkill": {
        "name": "ハンズアップ",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のMAGとMNDを2ターンの間20%アップし、次の魔法攻撃の与ダメージを10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/60.png",
        "rarity": "SSR",
        "statsText": "MND.MAG +2",
        "traitText": "魔法与ダメージ+3%",
        "soul": {
          "cost": 5,
          "name": "ハンズアップ",
          "text": "味方全体のMAGとMNDを2ターンの間20%アップし、次の魔法攻撃の与ダメージを10%アップする"
        },
        "tags": [
          "05",
          "10",
          "12",
          "27",
          "64",
          "67",
          "70",
          "72",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/16",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "61",
      "name": "MOB BR プレイヤー",
      "image": "fig/61.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 125,
      "def": 145,
      "attribute": "無",
      "tags": [
        "10",
        "20",
        "36",
        "55",
        "66",
        "70",
        "72"
      ],
      "soulSkill": {
        "name": "サバイバルステップ",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDと命中率を2ターンの間25%アップし、回避率を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/61.png",
        "rarity": "SSR",
        "statsText": "SPD.MND +2 & HP +10",
        "traitText": "命中率+3%",
        "soul": {
          "cost": 5,
          "name": "サバイバルステップ",
          "text": "自分のSPDと命中率を2ターンの間25%アップし、回避率を10%アップする"
        },
        "tags": [
          "05",
          "10",
          "20",
          "36",
          "55",
          "66",
          "70",
          "72"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "62",
      "name": "モブゴースト",
      "image": "fig/62.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 100,
      "def": 120,
      "attribute": "無",
      "tags": [
        "09",
        "23",
        "37",
        "54",
        "57"
      ],
      "soulSkill": {
        "name": "ゴーストスルー",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分の回避率を2ターンの間25%アップし、敵単体の命中率を15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/62.png",
        "rarity": "SR",
        "statsText": "SPD.MND +2",
        "traitText": "命中率+3%",
        "soul": {
          "cost": 4,
          "name": "ゴーストスルー",
          "text": "自分の回避率を2ターンの間25%アップし、敵単体の命中率を15%ダウンさせる"
        },
        "tags": [
          "09",
          "23",
          "28",
          "37",
          "54",
          "57",
          "58",
          "72"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "63",
      "name": "メニュー 冒険日記",
      "image": "fig/63.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 65,
      "def": 85,
      "attribute": "無",
      "tags": [
        "10",
        "20",
        "66"
      ],
      "soulSkill": {
        "name": "アドベンノート",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 15
          }
        ],
        "description": "味方全体のDEFを15上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDとMNDを2ターンの間10%アップし、この戦闘中の探索レアアイテム率を2%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/63.png",
        "rarity": "R",
        "statsText": "SPD.MND +2",
        "traitText": "探索レアアイテム率 +0.5%",
        "soul": {
          "cost": 3,
          "name": "アドベンノート",
          "text": "味方全体のSPDとMNDを2ターンの間10%アップし、この戦闘中の探索レアアイテム率を2%アップする"
        },
        "tags": [
          "05",
          "10",
          "20",
          "66",
          "72"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "64",
      "name": "メニュー バトルプログラム",
      "image": "fig/64.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 80,
      "def": 80,
      "attribute": "無",
      "tags": [
        "15",
        "36",
        "66"
      ],
      "soulSkill": {
        "name": "バトルセット",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemies",
            "value": 15
          }
        ],
        "description": "相手全体のATKを15下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のATKとDEFを2ターンの間15%アップし、敵全体のSPDを10%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/64.png",
        "rarity": "R",
        "statsText": "ATK.DEF +2",
        "traitText": "回避率+0.5%",
        "soul": {
          "cost": 3,
          "name": "バトルセット",
          "text": "味方全体のATKとDEFを2ターンの間15%アップし、敵全体のSPDを10%ダウンさせる"
        },
        "tags": [
          "06",
          "15",
          "36",
          "66",
          "72"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "65",
      "name": "メニュー ゴールドレコード",
      "image": "fig/65.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 65,
      "def": 85,
      "attribute": "無",
      "tags": [
        "15",
        "66",
        "72"
      ],
      "soulSkill": {
        "name": "ゴールドプレイ",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 15
          }
        ],
        "description": "自分のライフを15回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを15%回復し、この戦闘での獲得コインを10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/65.png",
        "rarity": "R",
        "statsText": "HP +10",
        "traitText": "コイン獲得量 +0.5%",
        "soul": {
          "cost": 3,
          "name": "ゴールドプレイ",
          "text": "味方全体のHPを15%回復し、この戦闘での獲得コインを10%アップする"
        },
        "tags": [
          "06",
          "08",
          "15",
          "66",
          "72"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "66",
      "name": "メニュー 経験値レコード",
      "image": "fig/66.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 80,
      "def": 80,
      "attribute": "無",
      "tags": [
        "15",
        "36",
        "66"
      ],
      "soulSkill": {
        "name": "レベルプレイ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 15
          }
        ],
        "description": "味方全体のATKを15上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のMPを15回復し、この戦闘での獲得経験値を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/66.png",
        "rarity": "R",
        "statsText": "MP +10",
        "traitText": "経験値獲得量 +0.5%",
        "soul": {
          "cost": 3,
          "name": "レベルプレイ",
          "text": "味方全体のMPを15回復し、この戦闘での獲得経験値を10%アップする"
        },
        "tags": [
          "06",
          "15",
          "36",
          "66",
          "72"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "67",
      "name": "メニュー ボスレコード",
      "image": "fig/67.png",
      "rarity": "R",
      "soulClass": "middle",
      "atk": 130,
      "def": 130,
      "attribute": "無",
      "tags": [
        "15",
        "25",
        "66"
      ],
      "soulSkill": {
        "name": "ボスリプレイ",
        "timing": "own-main",
        "effects": [
          {
            "type": "break",
            "target": "enemy",
            "value": 15
          }
        ],
        "description": "選んだ相手1体のDEFを15下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体のDEFとMNDを2ターンの間15%ダウンさせ、味方全体のボスへの与ダメージを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/67.png",
        "rarity": "R",
        "statsText": "MAG.MND +2",
        "traitText": "状態異常全耐性 +0.3%",
        "soul": {
          "cost": 3,
          "name": "ボスリプレイ",
          "text": "敵単体のDEFとMNDを2ターンの間15%ダウンさせ、味方全体のボスへの与ダメージを2ターンの間10%アップする"
        },
        "tags": [
          "06",
          "15",
          "25",
          "66",
          "72"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "Rは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "67:element",
          "target": "67",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "68",
      "name": "メニュー ドリンクセット",
      "image": "fig/68.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 65,
      "def": 85,
      "attribute": "無",
      "tags": [
        "15",
        "18",
        "66"
      ],
      "soulSkill": {
        "name": "ドリンクタイム",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 15
          },
          {
            "type": "cleanse",
            "target": "allies",
            "value": 0
          }
        ],
        "description": "自分のライフを15回復（上限400）。味方全体のATK・DEF低下を解除する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを20%回復し、状態異常を1つ解除する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/68.png",
        "rarity": "R",
        "statsText": "HP +10",
        "traitText": "回復量 +0.5%",
        "soul": {
          "cost": 3,
          "name": "ドリンクタイム",
          "text": "味方全体のHPを20%回復し、状態異常を1つ解除する"
        },
        "tags": [
          "06",
          "15",
          "18",
          "66",
          "72"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "69",
      "name": "メニュー 椅子で休む",
      "image": "fig/69.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 65,
      "def": 85,
      "attribute": "無",
      "tags": [
        "15",
        "33",
        "66"
      ],
      "soulSkill": {
        "name": "チェアタイム",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 15
          }
        ],
        "description": "味方全体のDEFを15上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のMPを20回復し、2ターンの間MNDを15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/69.png",
        "rarity": "R",
        "statsText": "MP +10",
        "traitText": "回復量 +0.5%",
        "soul": {
          "cost": 3,
          "name": "チェアタイム",
          "text": "味方全体のMPを20回復し、2ターンの間MNDを15%アップする"
        },
        "tags": [
          "06",
          "15",
          "33",
          "66",
          "72"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "70",
      "name": "酒場の看板娘 モブイルカエル",
      "image": "fig/70.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 120,
      "def": 155,
      "attribute": "水",
      "tags": [
        "13",
        "15",
        "18",
        "27",
        "33",
        "40",
        "60",
        "67",
        "72"
      ],
      "soulSkill": {
        "name": "アクアカンパイ",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 30
          }
        ],
        "description": "自分のライフを30回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを20%回復し、水属性耐性とSPDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/70.png",
        "rarity": "UR",
        "statsText": "SPD +3 & DEF +3 & MND +2",
        "traitText": "水属性耐性+10% & 会心率+2%",
        "soul": {
          "cost": 6,
          "name": "アクアカンパイ",
          "text": "味方全体のHPを20%回復し、水属性耐性とSPDを2ターンの間15%アップする"
        },
        "tags": [
          "06",
          "13",
          "15",
          "18",
          "27",
          "33",
          "40",
          "60",
          "67",
          "72",
          "80"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/16",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "71",
      "name": "鍛冶屋の職人 モブゴンゾー",
      "image": "fig/71.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 120,
      "def": 155,
      "attribute": "地",
      "tags": [
        "13",
        "15",
        "35",
        "36",
        "39",
        "40",
        "59",
        "66",
        "70"
      ],
      "soulSkill": {
        "name": "ハンマーヒット",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のATKとDEFを2ターンの間20%アップし、会心率を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/71.png",
        "rarity": "UR",
        "statsText": "ATK +5 & DEF +3",
        "traitText": "地属性耐性+10% & 会心率+2%",
        "soul": {
          "cost": 6,
          "name": "ハンマーヒット",
          "text": "味方全体のATKとDEFを2ターンの間20%アップし、会心率を5%アップする"
        },
        "tags": [
          "03",
          "13",
          "15",
          "35",
          "36",
          "39",
          "40",
          "59",
          "66",
          "70"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "72",
      "name": "優しき熱血コーチ モブコーチ",
      "image": "fig/72.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 120,
      "def": 155,
      "attribute": "雷",
      "tags": [
        "13",
        "15",
        "40",
        "57",
        "66",
        "74",
        "08",
        "28",
        "29"
      ],
      "soulSkill": {
        "name": "もう一本",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 30
          }
        ],
        "description": "自分のライフを30回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "HPが最も低い味方を30%回復し、味方全体のDEFとSPDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/72.png",
        "rarity": "UR",
        "statsText": "HP +20 & DEF +3 & MND +2",
        "traitText": "雷属性耐性+10% & 会心率+2%",
        "soul": {
          "cost": 6,
          "name": "もう一本",
          "text": "HPが最も低い味方を30%回復し、味方全体のDEFとSPDを2ターンの間15%アップする"
        },
        "tags": [
          "08",
          "13",
          "15",
          "28",
          "29",
          "31",
          "40",
          "57",
          "66",
          "74"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "92",
        "182",
        "mq:eventfig/04"
      ]
    },
    {
      "id": "73",
      "name": "宿舎の癒し モブミータ",
      "image": "fig/73.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 120,
      "def": 155,
      "attribute": "無",
      "tags": [
        "13",
        "15",
        "27",
        "33",
        "40",
        "58",
        "59",
        "67",
        "72"
      ],
      "soulSkill": {
        "name": "おやすみベル",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 30
          },
          {
            "type": "cleanse",
            "target": "allies",
            "value": 0
          }
        ],
        "description": "自分のライフを30回復（上限400）。味方全体のATK・DEF低下を解除する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを25%・MPを15回復し、状態異常を1つ解除する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/73.png",
        "rarity": "UR",
        "statsText": "MP +20 & DEF +3 & MND +2",
        "traitText": "無属性耐性+10% & 会心率+2%",
        "soul": {
          "cost": 6,
          "name": "おやすみベル",
          "text": "味方全体のHPを25%・MPを15回復し、状態異常を1つ解除する"
        },
        "tags": [
          "08",
          "13",
          "15",
          "27",
          "29",
          "33",
          "40",
          "58",
          "59",
          "67",
          "72"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/16",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "74",
      "name": "頼りになる店主 モブマテリア",
      "image": "fig/74.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 120,
      "def": 155,
      "attribute": "闇",
      "tags": [
        "13",
        "15",
        "23",
        "36",
        "37",
        "40",
        "66",
        "70",
        "79"
      ],
      "soulSkill": {
        "name": "おたすけストック",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 30
          }
        ],
        "description": "自分のライフを30回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のATK・DEF・MAG・MND・SPDを2ターンの間10%アップし、HPを10%回復する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/74.png",
        "rarity": "UR",
        "statsText": "MAG +3 & DEF +3 & SPD +2",
        "traitText": "光.闇属性耐性+8% & 会心率+2%",
        "soul": {
          "cost": 6,
          "name": "おたすけストック",
          "text": "味方全体のATK・DEF・MAG・MND・SPDを2ターンの間10%アップし、HPを10%回復する"
        },
        "tags": [
          "05",
          "13",
          "15",
          "23",
          "36",
          "37",
          "40",
          "66",
          "70",
          "79"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "49",
        "99",
        "104",
        "136",
        "157",
        "161",
        "166",
        "spboss006",
        "spboss007",
        "spboss012",
        "spboss017",
        "spboss034",
        "mq:eventfig/09",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "75",
      "name": "メニュー 王の間",
      "image": "fig/75.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 65,
      "def": 85,
      "attribute": "無",
      "tags": [
        "09",
        "15",
        "78"
      ],
      "soulSkill": {
        "name": "キングオーダー",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 15
          }
        ],
        "description": "味方全体のDEFを15上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFとMNDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/75.png",
        "rarity": "R",
        "statsText": "DEF.MND +2",
        "traitText": "状態異常全耐性 +0.3%",
        "soul": {
          "cost": 3,
          "name": "キングオーダー",
          "text": "味方全体のDEFとMNDを2ターンの間15%アップする"
        },
        "tags": [
          "02",
          "09",
          "15",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "76",
      "name": "メニュー MOB SHOP",
      "image": "fig/76.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 65,
      "def": 85,
      "attribute": "無",
      "tags": [
        "09",
        "15",
        "78"
      ],
      "soulSkill": {
        "name": "ショップチャンス",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 15
          }
        ],
        "description": "味方全体のDEFを15上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のMAGとMNDを2ターンの間10%アップし、状態異常耐性を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/76.png",
        "rarity": "R",
        "statsText": "MAG.MND +2",
        "traitText": "マヒ耐性 +5%",
        "soul": {
          "cost": 3,
          "name": "ショップチャンス",
          "text": "味方全体のMAGとMNDを2ターンの間10%アップし、状態異常耐性を10%アップする"
        },
        "tags": [
          "02",
          "09",
          "15",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "77",
      "name": "メニュー 宿舎",
      "image": "fig/77.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 65,
      "def": 85,
      "attribute": "無",
      "tags": [
        "09",
        "15",
        "78"
      ],
      "soulSkill": {
        "name": "グッドナイト",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 15
          },
          {
            "type": "cleanse",
            "target": "allies",
            "value": 0
          }
        ],
        "description": "自分のライフを15回復（上限400）。味方全体のATK・DEF低下を解除する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを15%回復し、眠り・混乱を解除する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/77.png",
        "rarity": "R",
        "statsText": "HP+10.MND +2",
        "traitText": "眠り耐性 +5%",
        "soul": {
          "cost": 3,
          "name": "グッドナイト",
          "text": "味方全体のHPを15%回復し、眠り・混乱を解除する"
        },
        "tags": [
          "02",
          "09",
          "15",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "78",
      "name": "メニュー レコードの間",
      "image": "fig/78.png",
      "rarity": "R",
      "soulClass": "seed",
      "atk": 80,
      "def": 80,
      "attribute": "無",
      "tags": [
        "09",
        "15",
        "78"
      ],
      "soulSkill": {
        "name": "レコードプレイ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 15
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを15上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のMPを15回復し、SPDを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/78.png",
        "rarity": "R",
        "statsText": "MP+10.MND +2",
        "traitText": "回避率 +0.1%",
        "soul": {
          "cost": 3,
          "name": "レコードプレイ",
          "text": "味方全体のMPを15回復し、SPDを2ターンの間10%アップする"
        },
        "tags": [
          "02",
          "09",
          "15",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "Rは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "79",
      "name": "モブキングダムの王様 モブスライムキング",
      "image": "fig/79.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "atk": 255,
      "def": 280,
      "attribute": "無",
      "tags": [
        "09",
        "13",
        "17",
        "30",
        "40",
        "58",
        "66"
      ],
      "soulSkill": {
        "name": "キングプレス",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFとMNDを2ターンの間25%アップし、ダメージ軽減を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/79.png",
        "rarity": "SSR",
        "statsText": "DEF +5 & MND +1",
        "traitText": "ダメージ軽減+2%",
        "soul": {
          "cost": 5,
          "name": "キングプレス",
          "text": "味方全体のDEFとMNDを2ターンの間25%アップし、ダメージ軽減を5%アップする"
        },
        "tags": [
          "02",
          "09",
          "13",
          "17",
          "30",
          "40",
          "58",
          "66",
          "74"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "79:family",
          "target": "79",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "17"
            },
            {
              "tag": "17"
            }
          ],
          "label": "スライム × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "79:element",
          "target": "79",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "80",
      "name": "王様の右腕 モブライトアーム",
      "image": "fig/80.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 150,
      "def": 130,
      "attribute": "光",
      "tags": [
        "09",
        "13",
        "17",
        "40",
        "49",
        "59",
        "66"
      ],
      "soulSkill": {
        "name": "ロイヤルブレード",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に光属性の物理中ダメージを与え、味方全体のATKを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/80.png",
        "rarity": "SSR",
        "statsText": "ATK +5 & MND +1",
        "traitText": "通常攻撃与ダメージ+4%",
        "soul": {
          "cost": 5,
          "name": "ロイヤルブレード",
          "text": "敵単体に光属性の物理中ダメージを与え、味方全体のATKを2ターンの間15%アップする"
        },
        "tags": [
          "02",
          "09",
          "13",
          "17",
          "40",
          "49",
          "59",
          "66"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "30",
        "148",
        "165",
        "184",
        "205",
        "spboss010",
        "spboss033",
        "mq:spbossfig/38",
        "mq:spbossfig/41",
        "mq:spbossfig/42",
        "mq:eventfig/22",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "81",
      "name": "MOB PARTY マスコット",
      "image": "fig/81.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "無",
      "tags": [
        "10",
        "12",
        "20",
        "40",
        "70"
      ],
      "soulSkill": {
        "name": "パーティータイム",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 20
          }
        ],
        "description": "自分のライフを20回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを15%回復し、ATK・DEF・SPDを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/81.png",
        "rarity": "SR",
        "statsText": "SPD.MND +2 & HP +10",
        "traitText": "命中率+3%",
        "soul": {
          "cost": 4,
          "name": "パーティータイム",
          "text": "味方全体のHPを15%回復し、ATK・DEF・SPDを2ターンの間10%アップする"
        },
        "tags": [
          "05",
          "10",
          "12",
          "20",
          "40",
          "70",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "82",
      "name": "読みかけの本を読もう",
      "image": "fig/82.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "無",
      "tags": [
        "10",
        "20",
        "33",
        "40",
        "70"
      ],
      "soulSkill": {
        "name": "ブックオープン",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 20
          }
        ],
        "description": "自分のライフを20回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHP・MPを15%回復し、必殺技CTを1ターン短縮する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/82.png",
        "rarity": "SR",
        "statsText": "SPD.MND +2 & HP +10",
        "traitText": "命中率+3%",
        "soul": {
          "cost": 4,
          "name": "ブックオープン",
          "text": "味方全体のHP・MPを15%回復し、必殺技CTを1ターン短縮する"
        },
        "tags": [
          "05",
          "10",
          "20",
          "33",
          "40",
          "70",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "83",
      "name": "モブ三味線",
      "image": "fig/83.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 115,
      "def": 115,
      "attribute": "無",
      "tags": [
        "10",
        "12",
        "20",
        "40",
        "70"
      ],
      "soulSkill": {
        "name": "シャミビート",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に無属性の魔法小～中ダメージを与え、味方全体のSPDとMNDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/83.png",
        "rarity": "SR",
        "statsText": "SPD.MND +2 & HP +10",
        "traitText": "命中率+3%",
        "soul": {
          "cost": 4,
          "name": "シャミビート",
          "text": "敵全体に無属性の魔法小～中ダメージを与え、味方全体のSPDとMNDを2ターンの間15%アップする"
        },
        "tags": [
          "05",
          "10",
          "12",
          "20",
          "40",
          "70",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "84",
      "name": "MOB SHOT リリス四姉妹ソウル 赤",
      "image": "fig/84.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 140,
      "def": 140,
      "attribute": "火",
      "tags": [
        "09",
        "23",
        "27",
        "37",
        "50",
        "56",
        "57",
        "60",
        "78"
      ],
      "soulSkill": {
        "name": "ヘルフレア",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に火属性の魔法中ダメージを与え、40%でやけどにする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/84.png",
        "rarity": "UR",
        "statsText": "MAG.MND +5 & MP +10",
        "traitText": "火属性耐性+10% & 魔法ダメージ軽減+2%",
        "soul": {
          "cost": 6,
          "name": "ヘルフレア",
          "text": "敵全体に火属性の魔法中ダメージを与え、40%でやけどにする"
        },
        "tags": [
          "03",
          "09",
          "23",
          "27",
          "37",
          "50",
          "56",
          "57",
          "60",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/39",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "85",
      "name": "MOB SHOT リリス四姉妹ソウル 黄",
      "image": "fig/85.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 140,
      "def": 140,
      "attribute": "雷",
      "tags": [
        "09",
        "23",
        "27",
        "37",
        "50",
        "51",
        "57",
        "60",
        "78"
      ],
      "soulSkill": {
        "name": "キリンボルト",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に雷属性の魔法中ダメージを与え、40%でマヒにする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/85.png",
        "rarity": "UR",
        "statsText": "MAG.ATK +5 & MP +10",
        "traitText": "雷属性耐性+10% & 魔法ダメージ軽減+2%",
        "soul": {
          "cost": 6,
          "name": "キリンボルト",
          "text": "敵全体に雷属性の魔法中ダメージを与え、40%でマヒにする"
        },
        "tags": [
          "04",
          "09",
          "23",
          "27",
          "37",
          "50",
          "51",
          "57",
          "60",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "92",
        "182",
        "mq:eventfig/04"
      ]
    },
    {
      "id": "86",
      "name": "MOB SHOT リリス四姉妹ソウル 青",
      "image": "fig/86.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 140,
      "def": 140,
      "attribute": "水",
      "tags": [
        "09",
        "23",
        "27",
        "37",
        "50",
        "57",
        "60",
        "78",
        "31"
      ],
      "soulSkill": {
        "name": "リヴァウェイブ",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に水属性の魔法中ダメージを与え、SPDを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/86.png",
        "rarity": "UR",
        "statsText": "MAG.DEF +5 & MP +10",
        "traitText": "水属性耐性+10% & 魔法ダメージ軽減+2%",
        "soul": {
          "cost": 6,
          "name": "リヴァウェイブ",
          "text": "敵全体に水属性の魔法中ダメージを与え、SPDを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "09",
          "23",
          "27",
          "31",
          "37",
          "50",
          "57",
          "60",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "87",
      "name": "MOB SHOT リリス四姉妹ソウル 白",
      "image": "fig/87.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 155,
      "def": 115,
      "attribute": "光",
      "tags": [
        "09",
        "23",
        "27",
        "37",
        "50",
        "57",
        "60",
        "78",
        "28"
      ],
      "soulSkill": {
        "name": "クフライト",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に光属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/87.png",
        "rarity": "UR",
        "statsText": "MAG +8 & MP +10",
        "traitText": "光属性耐性+10% & 魔法ダメージ軽減+2%",
        "soul": {
          "cost": 6,
          "name": "クフライト",
          "text": "敵全体に光属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間15%アップする"
        },
        "tags": [
          "09",
          "23",
          "27",
          "28",
          "37",
          "50",
          "57",
          "60",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "30",
        "165",
        "184",
        "205",
        "spboss010",
        "spboss033",
        "mq:spbossfig/41",
        "mq:spbossfig/42"
      ]
    },
    {
      "id": "185",
      "name": "新入りフィギュア売り モブメープル",
      "image": "fig/88.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 120,
      "def": 155,
      "attribute": "光",
      "tags": [
        "13",
        "27",
        "37",
        "40",
        "50",
        "57",
        "70",
        "73",
        "78"
      ],
      "soulSkill": {
        "name": "ルーキーコール",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 30
          }
        ],
        "description": "自分のライフを30回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを15%回復し、獲得経験値を10%アップする。さらに会心率を2ターンの間5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/88.png",
        "rarity": "UR",
        "statsText": "HP +20 & DEF +3 & MAG +2",
        "traitText": "獲得経験値+10% & 会心率+2%",
        "soul": {
          "cost": 6,
          "name": "ルーキーコール",
          "text": "味方全体のHPを15%回復し、獲得経験値を10%アップする。さらに会心率を2ターンの間5%アップする"
        },
        "tags": [
          "06",
          "08",
          "13",
          "27",
          "29",
          "37",
          "40",
          "50",
          "57",
          "70",
          "73",
          "78",
          "79"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionTargets": [
        "30",
        "165",
        "184",
        "205",
        "spboss010",
        "spboss033",
        "mq:spbossfig/41",
        "mq:spbossfig/42"
      ]
    },
    {
      "id": "186",
      "name": "PB2 15th ロゴレコード",
      "image": "fig/89.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "atk": 255,
      "def": 280,
      "attribute": "無",
      "tags": [
        "11",
        "12",
        "19",
        "30",
        "33",
        "40",
        "64"
      ],
      "soulSkill": {
        "name": "15thビート",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 25
          }
        ],
        "description": "自分のライフを25回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のATK・DEF・SPDを2ターンの間12%アップし、HPを10%回復する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/89.png",
        "rarity": "SSR",
        "statsText": "HP+10 & ATK +1 & MAG +1 & MND +1",
        "traitText": "獲得経験値+5%",
        "soul": {
          "cost": 5,
          "name": "15thビート",
          "text": "味方全体のATK・DEF・SPDを2ターンの間12%アップし、HPを10%回復する"
        },
        "tags": [
          "11",
          "12",
          "19",
          "30",
          "33",
          "40",
          "64",
          "70",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "186:element",
          "target": "186",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "187",
      "name": "PB2 Vol.40 ロゴレコード",
      "image": "fig/90.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "atk": 255,
      "def": 280,
      "attribute": "無",
      "tags": [
        "11",
        "12",
        "19",
        "30",
        "33",
        "40",
        "64"
      ],
      "soulSkill": {
        "name": "40thビート",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のMAG・MND・SPDを2ターンの間12%アップし、MPを10回復する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/90.png",
        "rarity": "SSR",
        "statsText": "HP+10 & ATK +1 & MAG +1 & MND +1",
        "traitText": "獲得経験値+5%",
        "soul": {
          "cost": 5,
          "name": "40thビート",
          "text": "味方全体のMAG・MND・SPDを2ターンの間12%アップし、MPを10回復する"
        },
        "tags": [
          "11",
          "12",
          "19",
          "30",
          "33",
          "40",
          "64",
          "70",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "187:element",
          "target": "187",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "188",
      "name": "MOB ARTIST イエローレコード",
      "image": "fig/91.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "atk": 290,
      "def": 260,
      "attribute": "雷",
      "tags": [
        "11",
        "12",
        "19",
        "30",
        "33",
        "40",
        "64"
      ],
      "soulSkill": {
        "name": "イエロービート",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 25
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを25上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDを2ターンの間20%アップし、雷属性与ダメージを10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/91.png",
        "rarity": "SSR",
        "statsText": "HP+10 & ATK +1 & MAG +1 & MND +1",
        "traitText": "獲得経験値+5%",
        "soul": {
          "cost": 5,
          "name": "イエロービート",
          "text": "味方全体のSPDを2ターンの間20%アップし、雷属性与ダメージを10%アップする"
        },
        "tags": [
          "04",
          "11",
          "12",
          "19",
          "30",
          "33",
          "40",
          "64",
          "70",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "188:element",
          "target": "188",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "189",
      "name": "MOB ARTIST ミントレコード",
      "image": "fig/92.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "水",
      "tags": [
        "11",
        "12",
        "19",
        "33",
        "40",
        "64",
        "70"
      ],
      "soulSkill": {
        "name": "ミントビート",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFとMNDを2ターンの間15%アップし、水属性耐性を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "fig/92.png",
        "rarity": "SSR",
        "statsText": "HP+10 & ATK +1 & MAG +1 & MND +1",
        "traitText": "獲得経験値+5%",
        "soul": {
          "cost": 5,
          "name": "ミントビート",
          "text": "味方全体のDEFとMNDを2ターンの間15%アップし、水属性耐性を10%アップする"
        },
        "tags": [
          "11",
          "12",
          "19",
          "31",
          "33",
          "40",
          "64",
          "70",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "190",
      "name": "モブ勇者",
      "image": "figplay/001.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "atk": 330,
      "def": 370,
      "attribute": "光",
      "tags": [
        "23",
        "24",
        "30",
        "34",
        "40",
        "49",
        "51",
        "52",
        "59",
        "66",
        "74",
        "81"
      ],
      "soulSkill": {
        "name": "ブックブレイブ",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 35
          }
        ],
        "description": "味方全体のDEFを35上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に光属性の物理大ダメージを与え、味方全体のATK・DEFを2ターンの間20%アップする。読みかけの本エリアではさらに与ダメージ+10%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "figplay/001.png",
        "rarity": "MOB",
        "statsText": "MND+15 & HP +30",
        "traitText": "状態異常耐性+20 & 闇属性ダメージ軽減 +20%",
        "soul": {
          "cost": 7,
          "name": "ブックブレイブ",
          "text": "敵単体に光属性の物理大ダメージを与え、味方全体のATK・DEFを2ターンの間20%アップする。読みかけの本エリアではさらに与ダメージ+10%"
        },
        "tags": [
          "08",
          "23",
          "24",
          "30",
          "34",
          "40",
          "49",
          "51",
          "52",
          "59",
          "66",
          "74",
          "81"
        ],
        "actor": {
          "id": "yusha",
          "name": "モブ勇者",
          "category": "party",
          "attribute": "光",
          "role": "勇者",
          "atk": 396,
          "mag": 375,
          "def": 336,
          "res": 328,
          "spd": 213,
          "passive": "勇者の使命",
          "passiveDescription": "味方がダウンするたび、自身のHP30%回復 & 全ステータス20%アップ",
          "statusResist": {
            "poison": 0.3,
            "paralyze": 0.25,
            "burn": 0.25,
            "sleep": 0.3,
            "confuse": 0.35,
            "stun": 0.4
          },
          "elementResist": {
            "無": 0,
            "火": 0.08,
            "水": -0.05,
            "雷": 0,
            "地": -0.05,
            "風": 0.08,
            "光": 0.15,
            "闇": -0.1
          },
          "ults": [
            {
              "name": "星降りの一振り",
              "image": "ult/01.png",
              "cost": 0,
              "kind": "damage",
              "power": 1.7061,
              "type": "physical",
              "crit": 0.1,
              "desc": "敵単体光属性中ダメージ(10%の確率で会心の一撃)",
              "effectFrames": [
                "skill2/47.png",
                "skill2/48.png",
                "skill2/49.png",
                "skill2/50.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "光",
              "baseCt": 6,
              "learnLevel": 1
            },
            {
              "name": "特別だと信じる力",
              "image": "ult/02.png",
              "cost": 0,
              "kind": "selfAllBuff",
              "power": 0,
              "desc": "自身の全てのステータスを20%アップし、受けるダメージを10%軽減\n継続は3～5ターン",
              "baseCt": 7,
              "learnLevel": 15
            },
            {
              "name": "エピソード・ジューマンジ",
              "image": "ult/03.png",
              "cost": 0,
              "kind": "jumanji",
              "power": 2.1197,
              "type": "magic",
              "desc": "敵単体雷大ダメージ+ランダムで自身に小バフ、ランダムで敵全体に小デバフ",
              "effectFrames": [
                "skill2/51.png",
                "skill2/52.png",
                "skill2/53.png",
                "skill2/54.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "雷",
              "baseCt": 8,
              "learnLevel": 30
            },
            {
              "name": "ネバー・エンディング・フレイム",
              "image": "ult/04.png",
              "cost": 0,
              "kind": "lowHpBurstAoe",
              "power": 2.6367,
              "type": "magic",
              "desc": "敵全体火属性極大ダメージ\n(パーティーの残りHPが少ないほど威力が上がる)",
              "effectFrames": [
                "skill2/55.png",
                "skill2/56.png",
                "skill2/57.png",
                "skill2/58.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "火",
              "baseCt": 9,
              "learnLevel": 50
            },
            {
              "name": "読みかけの本",
              "image": "play/13.png",
              "cost": 0,
              "kind": "heroTransform",
              "power": 0,
              "desc": "自身のHPが50%回復し、この戦闘中あのヒーローに変身する play/13.png\n全てのステータスが30%アップし、ダメージ軽減+10%、自身の全ての必殺技のCT-3\n※エリア、読みかけの本のイベントで入手",
              "baseCt": 3,
              "learnLevel": null
            }
          ],
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "MOBは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "190:family",
          "target": "190",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "24"
            },
            {
              "tag": "24"
            }
          ],
          "label": "主人公パーティー × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "190:element",
          "target": "190",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "191",
      "name": "モブピンク",
      "image": "figplay/002.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 105,
      "def": 150,
      "attribute": "無",
      "tags": [
        "13",
        "24",
        "27",
        "33",
        "34",
        "39",
        "40",
        "59",
        "69"
      ],
      "soulSkill": {
        "name": "ピンクガード",
        "timing": "either-main",
        "effects": [
          {
            "type": "revive",
            "target": "allies",
            "value": 1
          }
        ],
        "description": "味方全体の次に撃破された時、同じ枠に1回だけ戻る（差分ライフダメージは受ける）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFを2ターンの間30%アップし、ダメージ軽減を7%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "figplay/002.png",
        "rarity": "UR",
        "statsText": "DEF+5 & HP +20",
        "traitText": "ひるみ耐性+40% & ダメージ軽減 +5%",
        "soul": {
          "cost": 6,
          "name": "ピンクガード",
          "text": "味方全体のDEFを2ターンの間30%アップし、ダメージ軽減を7%アップする"
        },
        "tags": [
          "06",
          "13",
          "24",
          "27",
          "33",
          "34",
          "39",
          "40",
          "59",
          "69",
          "70",
          "72",
          "78"
        ],
        "actor": {
          "id": "pink",
          "name": "モブピンク",
          "category": "party",
          "attribute": "無",
          "role": "サポート",
          "atk": 271,
          "mag": 255,
          "def": 391,
          "res": 383,
          "spd": 147,
          "passive": "支える力",
          "passiveDescription": "味方がダウンした時、自身のHPを半分にしてその味方を復活する\n※同時ダウンの場合は復活する味方を選択する。このパッシブは1度の戦闘で1度のみ発動する。",
          "statusResist": {
            "poison": 0.35,
            "paralyze": 0.35,
            "burn": 0.3,
            "sleep": 0.4,
            "confuse": 0.45,
            "stun": 0.5
          },
          "elementResist": {
            "無": 0.12,
            "火": 0,
            "水": 0,
            "雷": -0.05,
            "地": 0.1,
            "風": -0.05,
            "光": 0.08,
            "闇": 0
          },
          "ults": [
            {
              "name": "シールドアタック",
              "image": "ult/05.png",
              "cost": 0,
              "kind": "shieldAttack",
              "power": 1.504,
              "type": "physical",
              "desc": "敵単体無属性中ダメージ\nこの必殺技を使用したターン、自分のダメージを20%軽減する",
              "effectFrames": [
                "skill2/44.png",
                "skill2/45.png",
                "skill2/46.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "無",
              "baseCt": 6,
              "learnLevel": 1
            },
            {
              "name": "癒しのピンクボンボン",
              "image": "ult/06.png",
              "cost": 0,
              "kind": "healCleanse",
              "power": 0.1692,
              "desc": "味方全体のHP小回復+50%の確率で状態異常を解除する",
              "baseCt": 7,
              "learnLevel": 15
            },
            {
              "name": "勇者のパートナー",
              "image": "ult/07.png",
              "cost": 0,
              "kind": "yushaGuardAoe",
              "power": 1.457,
              "type": "magic",
              "desc": "敵全体無属性中ダメージ＋このターン勇者のダメージ軽減50％",
              "effectFrames": [
                "skill/131.png",
                "skill/132.png",
                "skill/133.png",
                "skill/134.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "無",
              "baseCt": 8,
              "learnLevel": 30
            },
            {
              "name": "キングダムソルジャー",
              "image": "ult/08.png",
              "cost": 0,
              "kind": "teamGuardAoe",
              "power": 1.739,
              "type": "physical",
              "desc": "敵全体光属性大ダメージ+2ターン味方全員のダメージ30%軽減",
              "effectFrames": [
                "skill2/21.png",
                "skill2/22.png",
                "skill2/23.png",
                "skill2/24.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "光",
              "baseCt": 9,
              "learnLevel": 50
            }
          ],
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "192",
      "name": "モブデザート",
      "image": "figplay/003.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 165,
      "def": 120,
      "attribute": "地",
      "tags": [
        "13",
        "24",
        "34",
        "40",
        "42",
        "49",
        "54",
        "57",
        "59"
      ],
      "soulSkill": {
        "name": "サンドブレイク",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のATKを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に地属性の物理中～大ダメージを与え、DEFを2ターンの間20%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "figplay/003.png",
        "rarity": "UR",
        "statsText": "ATK+7 & HP +15",
        "traitText": "毒耐性+40 & 地属性与ダメージ +10%",
        "soul": {
          "cost": 6,
          "name": "サンドブレイク",
          "text": "敵単体に地属性の物理中～大ダメージを与え、DEFを2ターンの間20%ダウンさせる"
        },
        "tags": [
          "13",
          "24",
          "34",
          "40",
          "42",
          "49",
          "54",
          "57",
          "59",
          "73",
          "75",
          "77"
        ],
        "actor": {
          "id": "desert",
          "name": "モブデザート",
          "category": "party",
          "attribute": "地",
          "role": "物理",
          "atk": 421,
          "mag": 269,
          "def": 335,
          "res": 296,
          "spd": 221,
          "passive": "サバクノマモリビト",
          "passiveDescription": "味方が攻撃を受ける時、10%の確率でそのダメージを20%軽減する",
          "statusResist": {
            "poison": 0.35,
            "paralyze": 0.25,
            "burn": 0.4,
            "sleep": 0.3,
            "confuse": 0.45,
            "stun": 0.5
          },
          "elementResist": {
            "無": 0,
            "火": 0.02,
            "水": 0.08,
            "雷": -0.05,
            "地": 0.18,
            "風": -0.1,
            "光": -0.05,
            "闇": 0.08
          },
          "ults": [
            {
              "name": "デザートブラウニー",
              "image": "ult/09.png",
              "cost": 0,
              "kind": "selfHealAttack",
              "power": 1.551,
              "type": "physical",
              "desc": "自分小回復＋敵単体地属性中ダメージ",
              "effectFrames": [
                "skill2/66.png",
                "skill2/67.png",
                "skill2/68.png",
                "skill2/69.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "地",
              "baseCt": 6,
              "learnLevel": 1
            },
            {
              "name": "ゴールドフィッシュ",
              "image": "ult/10.png",
              "cost": 0,
              "kind": "goldAttack",
              "power": 1.88,
              "type": "physical",
              "desc": "敵単体地属性大ダメージ＋ゴールドを少し奪う※初期は10～50くらいで、強化により最大1500",
              "effectFrames": [
                "skill2/59.png",
                "skill2/60.png",
                "skill2/61.png",
                "skill2/62.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "地",
              "baseCt": 7,
              "learnLevel": 15
            },
            {
              "name": "サンドドラグーン",
              "image": "ult/11.png",
              "cost": 0,
              "kind": "aoeSpeedDebuff",
              "power": 1.927,
              "type": "magic",
              "desc": "敵全体地属性大ダメージ、スピード小ダウン",
              "effectFrames": [
                "skill2/106.png",
                "skill2/107.png",
                "skill2/108.png",
                "skill2/109.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "地",
              "baseCt": 8,
              "learnLevel": 30
            },
            {
              "name": "スナノサバキ",
              "image": "ult/12.png",
              "cost": 0,
              "kind": "aoeDamage",
              "power": 2.491,
              "type": "physical",
              "desc": "敵全体地属性極大ダメージ",
              "effectFrames": [
                "skill2/70.png",
                "skill2/71.png",
                "skill2/72.png",
                "skill2/73.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "地",
              "baseCt": 9,
              "learnLevel": 50
            }
          ],
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "193",
      "name": "モブデンデン",
      "image": "figplay/004.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 160,
      "def": 110,
      "attribute": "雷",
      "tags": [
        "13",
        "24",
        "27",
        "33",
        "34",
        "39",
        "40",
        "51",
        "59"
      ],
      "soulSkill": {
        "name": "デンデンサンダー",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に雷属性の物理中ダメージを与え、40%でマヒにする。自分のSPDを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "figplay/004.png",
        "rarity": "UR",
        "statsText": "SPD+7 & HP +15",
        "traitText": "マヒ耐性+40 & 雷属性与ダメージ +10%",
        "soul": {
          "cost": 6,
          "name": "デンデンサンダー",
          "text": "敵全体に雷属性の物理中ダメージを与え、40%でマヒにする。自分のSPDを2ターンの間20%アップする"
        },
        "tags": [
          "04",
          "13",
          "24",
          "27",
          "33",
          "34",
          "39",
          "40",
          "51",
          "59",
          "60",
          "78",
          "79"
        ],
        "actor": {
          "id": "denden",
          "name": "モブデンデン",
          "category": "party",
          "attribute": "雷",
          "role": "連撃",
          "atk": 421,
          "mag": 294,
          "def": 273,
          "res": 273,
          "spd": 266,
          "passive": "デンデン・ムキムキ・カナリツヨイ",
          "passiveDescription": "通常攻撃が10%の確率で会心の一撃になる\n※会心の一撃の元々の確率とは別で抽選する",
          "statusResist": {
            "poison": 0.25,
            "paralyze": 0.6,
            "burn": 0.3,
            "sleep": 0.3,
            "confuse": 0.25,
            "stun": 0.4
          },
          "elementResist": {
            "無": 0,
            "火": -0.05,
            "水": 0.08,
            "雷": 0.2,
            "地": -0.08,
            "風": 0.08,
            "光": 0,
            "闇": 0
          },
          "ults": [
            {
              "name": "マシンガングミ",
              "image": "ult/25.png",
              "cost": 0,
              "kind": "multiAttack",
              "power": 0.658,
              "type": "physical",
              "hits": [
                1,
                3
              ],
              "desc": "ランダムで1～3回雷属性小～中ダメージ",
              "effectFrames": [
                "skill2/74.png",
                "skill2/75.png",
                "skill2/76.png",
                "skill2/77.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "雷",
              "baseCt": 6,
              "learnLevel": 1
            },
            {
              "name": "イカシタイカヅチ",
              "image": "ult/26.png",
              "cost": 0,
              "kind": "teamRecovery",
              "power": 0.1504,
              "desc": "味方全体のHPとMP小回復、味方全体のディフェンス小バフ",
              "attackElement": "雷",
              "baseCt": 7,
              "learnLevel": 15
            },
            {
              "name": "トリック・ザ・デンデン",
              "image": "ult/27.png",
              "cost": 0,
              "kind": "aoeStun",
              "power": 1.974,
              "type": "physical",
              "chance": 0.1,
              "desc": "敵全体雷属性大ダメージ＋10%確率でひるみ",
              "effectFrames": [
                "skill2/82.png",
                "skill2/83.png",
                "skill2/84.png",
                "skill2/85.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "雷",
              "baseCt": 8,
              "learnLevel": 30
            },
            {
              "name": "デンデンサンダーボルト",
              "image": "ult/28.png",
              "cost": 0,
              "kind": "aoeDamage",
              "power": 2.5192,
              "type": "magic",
              "desc": "敵全体極大ダメージ",
              "attackElement": "雷",
              "baseCt": 9,
              "learnLevel": 50
            }
          ],
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "92",
        "182",
        "mq:eventfig/04"
      ]
    },
    {
      "id": "194",
      "name": "モブニョロ",
      "image": "figplay/005.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 120,
      "def": 155,
      "attribute": "火",
      "tags": [
        "13",
        "24",
        "27",
        "40",
        "43",
        "58",
        "60",
        "68",
        "69"
      ],
      "soulSkill": {
        "name": "ニョロファイヤ",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に火属性の魔法中ダメージを与え、40%でやけどにする。味方全体のMNDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "figplay/005.png",
        "rarity": "UR",
        "statsText": "MND+7 & HP +15",
        "traitText": "やけど耐性+40 & 火属性与ダメージ +10%",
        "soul": {
          "cost": 6,
          "name": "ニョロファイヤ",
          "text": "敵全体に火属性の魔法中ダメージを与え、40%でやけどにする。味方全体のMNDを2ターンの間15%アップする"
        },
        "tags": [
          "03",
          "13",
          "24",
          "27",
          "40",
          "43",
          "58",
          "60",
          "68",
          "69",
          "72",
          "81"
        ],
        "actor": {
          "id": "nyoro",
          "name": "モブニョロ",
          "category": "party",
          "attribute": "火",
          "role": "攻撃",
          "atk": 362,
          "mag": 377,
          "def": 273,
          "res": 297,
          "spd": 221,
          "passive": "マグマスイミング",
          "passiveDescription": "通常攻撃が70％の確率で全体攻撃になる",
          "statusResist": {
            "poison": 0.25,
            "paralyze": 0.25,
            "burn": 0.6,
            "sleep": 0.35,
            "confuse": 0.25,
            "stun": 0.3
          },
          "elementResist": {
            "無": 0,
            "火": 0.18,
            "水": 0.06,
            "雷": 0,
            "地": -0.05,
            "風": 0.08,
            "光": 0,
            "闇": 0
          },
          "ults": [
            {
              "name": "マグマケロ",
              "image": "ult/13.png",
              "cost": 0,
              "kind": "aoeBurn",
              "power": 1.504,
              "type": "physical",
              "chance": 0.1,
              "desc": "敵全体火属性中ダメージ＋10%の確率でやけど",
              "effectFrames": [
                "skill2/98.png",
                "skill2/99.png",
                "skill2/100.png",
                "skill2/101.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "火",
              "baseCt": 6,
              "learnLevel": 1
            },
            {
              "name": "ヒノフルカヨウ",
              "image": "ult/14.png",
              "cost": 0,
              "kind": "aoeDamage",
              "power": 1.927,
              "type": "physical",
              "desc": "敵全体火属性大ダメージ",
              "effectFrames": [
                "skill2/102.png",
                "skill2/103.png",
                "skill2/104.png",
                "skill2/105.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "火",
              "baseCt": 7,
              "learnLevel": 15
            },
            {
              "name": "ジューシーファイア",
              "image": "ult/15.png",
              "cost": 0,
              "kind": "burnAttack",
              "power": 2.021,
              "type": "magic",
              "chance": 0.3,
              "desc": "敵単体火属性大ダメージ＋30%確率でやけど",
              "effectFrames": [
                "skill2/231.png",
                "skill2/232.png",
                "skill2/233.png",
                "skill2/234.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "火",
              "baseCt": 8,
              "learnLevel": 30
            },
            {
              "name": "マグケロキングダム",
              "image": "ult/16.png",
              "cost": 0,
              "kind": "teamDefAoe",
              "power": 2.068,
              "type": "physical",
              "desc": "味方全体ディフェンス小アップ＋敵全体火属性大～極大ダメージ",
              "effectFrames": [
                "skill2/235.png",
                "skill2/236.png",
                "skill2/237.png",
                "skill2/238.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "火",
              "baseCt": 9,
              "learnLevel": 50
            }
          ],
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/08",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/30",
        "mq:eventfig/36",
        "mq:eventfig/39",
        "mq:eventfig/40",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "195",
      "name": "モブマニー",
      "image": "figplay/006.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 315,
      "def": 290,
      "attribute": "光",
      "tags": [
        "13",
        "24",
        "27",
        "30",
        "36",
        "37",
        "39",
        "40",
        "44"
      ],
      "soulSkill": {
        "name": "マニーマジック",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のATKを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に光属性の魔法中～大ダメージを与え、味方全体のMPを15回復する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "figplay/006.png",
        "rarity": "UR",
        "statsText": "MAG+7 & HP +15 & MP +15",
        "traitText": "混乱耐性+40 & 光属性与ダメージ +10%",
        "soul": {
          "cost": 6,
          "name": "マニーマジック",
          "text": "敵単体に光属性の魔法中～大ダメージを与え、味方全体のMPを15回復する"
        },
        "tags": [
          "02",
          "13",
          "24",
          "27",
          "30",
          "36",
          "37",
          "39",
          "40",
          "44",
          "58",
          "60",
          "79",
          "81"
        ],
        "actor": {
          "id": "money",
          "name": "モブマニー",
          "category": "party",
          "attribute": "光",
          "role": "回復",
          "atk": 235,
          "mag": 437,
          "def": 258,
          "res": 362,
          "spd": 217,
          "passive": "マニーは海を渡る",
          "passiveDescription": "ターン開始時、30%の確率でMPを小回復する",
          "statusResist": {
            "poison": 0.4,
            "paralyze": 0.35,
            "burn": 0.35,
            "sleep": 0.45,
            "confuse": 0.2,
            "stun": 0.3
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0.08,
            "地": 0,
            "風": 0,
            "光": 0.15,
            "闇": 0.12
          },
          "ults": [
            {
              "name": "バブルネオン",
              "image": "ult/29.png",
              "cost": 0,
              "kind": "selfRecoveryAttack",
              "power": 1.598,
              "type": "magic",
              "desc": "敵単体に光属性中ダメージ、自身のHPとMP小回復",
              "effectFrames": [
                "skill2/33.png",
                "skill2/34.png",
                "skill2/35.png",
                "skill2/36.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "光",
              "baseCt": 6,
              "learnLevel": 1
            },
            {
              "name": "レッドブルーボム",
              "image": "ult/30.png",
              "cost": 0,
              "kind": "damage",
              "power": 2.068,
              "type": "magic",
              "desc": "敵単体に火・水・光属性を持つ大ダメージ",
              "effectFrames": [
                "skill2/90.png",
                "skill2/91.png",
                "skill2/92.png",
                "skill2/93.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "火・水・光",
              "baseCt": 7,
              "learnLevel": 15
            },
            {
              "name": "マニーズハウス",
              "image": "ult/31.png",
              "cost": 0,
              "kind": "teamHealGuard",
              "power": 0.2632,
              "desc": "味方全体のHPを中回復し、ダメージを10%軽減",
              "baseCt": 8,
              "learnLevel": 30
            },
            {
              "name": "レトロミラージュマニー",
              "image": "ult/32.png",
              "cost": 0,
              "kind": "fullHealBarrier",
              "power": 0,
              "desc": "自身のHPを全回復し、味方全体に敵の攻撃を1度だけ無効化するバリアを張る",
              "baseCt": 9,
              "learnLevel": 50
            },
            {
              "name": "マニーフレンズ",
              "image": "boss/57.png",
              "cost": 0,
              "kind": "moneyFriends",
              "power": 0,
              "desc": "ヤミモブマニー boss/57.png に変身し、全てのステータス20%アップ\nさらに状態異常耐性を20%アップ、魔法会心率を10%アップする\n戦闘終了後、解除される(パッシブによる強化も解除)",
              "baseCt": 9,
              "learnLevel": null
            }
          ],
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "195:family",
          "target": "195",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "24"
            },
            {
              "tag": "24"
            }
          ],
          "label": "主人公パーティー × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "195:element",
          "target": "195",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "196",
      "name": "モブネコクー",
      "image": "figplay/007.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 220,
      "def": 190,
      "attribute": "水",
      "tags": [
        "13",
        "16",
        "24",
        "27",
        "32",
        "33",
        "34",
        "39",
        "40"
      ],
      "soulSkill": {
        "name": "ネコスラッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理中～大ダメージを2回与え、味方全体のHPを10%回復する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "figplay/007.png",
        "rarity": "UR",
        "statsText": "ATK+5 & DEF +3 & HP +15",
        "traitText": "眠り耐性+40 & 水属性与ダメージ +10%",
        "soul": {
          "cost": 6,
          "name": "ネコスラッシュ",
          "text": "敵単体に水属性の物理中～大ダメージを2回与え、味方全体のHPを10%回復する"
        },
        "tags": [
          "13",
          "16",
          "24",
          "27",
          "31",
          "32",
          "33",
          "34",
          "39",
          "40",
          "45",
          "49",
          "59",
          "74",
          "80"
        ],
        "actor": {
          "id": "nekoku",
          "name": "モブネコクー",
          "category": "party",
          "attribute": "水",
          "role": "戦士",
          "atk": 304,
          "mag": 381,
          "def": 313,
          "res": 337,
          "spd": 195,
          "passive": "癒しのプニプニ",
          "passiveDescription": "ターン開始時、20%の確率で1番HPの少ない味方のHPを15%回復する",
          "statusResist": {
            "poison": 0.4,
            "paralyze": 0.3,
            "burn": 0.25,
            "sleep": 0.5,
            "confuse": 0.4,
            "stun": 0.3
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0.18,
            "雷": -0.05,
            "地": 0,
            "風": 0.08,
            "光": 0.08,
            "闇": -0.05
          },
          "ults": [
            {
              "name": "ネコクージェット",
              "image": "ult/17.png",
              "cost": 0,
              "kind": "damage",
              "power": 1.551,
              "type": "physical",
              "sure": true,
              "desc": "敵単体水属性中ダメージ必中",
              "effectFrames": [
                "skill2/153.png",
                "skill2/154.png",
                "skill2/155.png",
                "skill2/156.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "水",
              "baseCt": 6,
              "learnLevel": 1
            },
            {
              "name": "ネコトクジラ",
              "image": "ult/18.png",
              "cost": 0,
              "kind": "selfCleanseAttack",
              "power": 1.88,
              "type": "physical",
              "desc": "自分の状態異常全て解除＋敵単体水属性大ダメージ",
              "effectFrames": [
                "skill2/239.png",
                "skill2/240.png",
                "skill2/241.png",
                "skill2/242.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "水",
              "baseCt": 7,
              "learnLevel": 15
            },
            {
              "name": "ネムレナイヨル",
              "image": "ult/19.png",
              "cost": 0,
              "kind": "sleepAttack",
              "power": 1.974,
              "type": "magic",
              "chance": 0.5,
              "desc": "敵単体水属性大ダメージ＋50%の確率で眠り",
              "effectFrames": [
                "skill2/197.png",
                "skill2/198.png",
                "skill2/199.png",
                "skill2/200.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "水",
              "baseCt": 8,
              "learnLevel": 30
            },
            {
              "name": "ウォーターキル・ザ・ビート",
              "image": "ult/20.png",
              "cost": 0,
              "kind": "sleepAttack",
              "power": 2.444,
              "type": "magic",
              "chance": 0.1,
              "desc": "敵単体水属性極大ダメージ＋10%の確率で眠り",
              "effectFrames": [
                "skill2/149.png",
                "skill2/150.png",
                "skill2/151.png",
                "skill2/152.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "水",
              "baseCt": 9,
              "learnLevel": 50
            }
          ],
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "196:family",
          "target": "196",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "16"
            },
            {
              "tag": "16"
            }
          ],
          "label": "ネコクー × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "196:element",
          "target": "196",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "190",
        "195",
        "199",
        "200",
        "217",
        "219",
        "spboss001",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "197",
      "name": "モブジェシー",
      "image": "figplay/008.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 120,
      "def": 155,
      "attribute": "雷",
      "tags": [
        "13",
        "24",
        "36",
        "40",
        "44",
        "46",
        "51",
        "55",
        "60"
      ],
      "soulSkill": {
        "name": "クイックショット",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理中ダメージを2回与え、自分のSPD・命中率・回避率を2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "figplay/008.png",
        "rarity": "UR",
        "statsText": "SPD+5 & DEF +3 & HP +15",
        "traitText": "回避率+6 & 通常攻撃与ダメージ +10%",
        "soul": {
          "cost": 6,
          "name": "クイックショット",
          "text": "敵単体に無属性の物理中ダメージを2回与え、自分のSPD・命中率・回避率を2ターンの間15%アップする"
        },
        "tags": [
          "04",
          "13",
          "24",
          "36",
          "40",
          "44",
          "46",
          "51",
          "55",
          "60",
          "66",
          "74",
          "79"
        ],
        "actor": {
          "id": "jessie",
          "name": "モブジェシー",
          "category": "party",
          "attribute": "雷",
          "role": "雷撃",
          "atk": 377,
          "mag": 370,
          "def": 273,
          "res": 297,
          "spd": 254,
          "passive": "ダブルサンダー",
          "passiveDescription": "雷属性の魔法を使う時、80%の確率で2回連続で発動する※MPは1回分",
          "statusResist": {
            "poison": 0.25,
            "paralyze": 0.5,
            "burn": 0.3,
            "sleep": 0.35,
            "confuse": 0.45,
            "stun": 0.35
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": -0.05,
            "雷": 0.18,
            "地": 0.08,
            "風": -0.05,
            "光": 0.08,
            "闇": -0.05
          },
          "ults": [
            {
              "name": "サンダーロープ",
              "image": "ult/21.png",
              "cost": 0,
              "kind": "paralyzeAttack",
              "power": 1.5228,
              "type": "physical",
              "chance": 0.1,
              "desc": "敵単体雷中ダメージ＋10%の確率でマヒ",
              "effectFrames": [
                "skill2/137.png",
                "skill2/138.png",
                "skill2/139.png",
                "skill2/140.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "雷",
              "baseCt": 6,
              "learnLevel": 1
            },
            {
              "name": "ジャスティス+・スクリューブロー",
              "image": "ult/22.png",
              "cost": 0,
              "kind": "aoeSelfSpd",
              "power": 1.88,
              "type": "physical",
              "desc": "敵全体雷大ダメージ＋自分のスピードバフ",
              "effectFrames": [
                "skill2/177.png",
                "skill2/178.png",
                "skill2/179.png",
                "skill2/180.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "雷",
              "baseCt": 7,
              "learnLevel": 15
            },
            {
              "name": "プティハードライトニング",
              "image": "ult/23.png",
              "cost": 0,
              "kind": "playerSinglePlusAoe",
              "power": 2.068,
              "aoePower": 0.72,
              "type": "magic",
              "desc": "敵単体雷大ダメージ＋敵全体小ダメージ",
              "effectFrames": [
                "skill2/145.png",
                "skill2/146.png",
                "skill2/147.png",
                "skill2/148.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "雷",
              "baseCt": 8,
              "learnLevel": 30
            },
            {
              "name": "クライマックスチェイス",
              "image": "ult/24.png",
              "cost": 0,
              "kind": "playerSinglePlusAoeParalyze",
              "power": 1.974,
              "aoePower": 1.45,
              "type": "physical",
              "chance": 0.1,
              "desc": "敵単体雷大ダメージ＋敵全体中ダメージ＋10%の確率でマヒ",
              "effectFrames": [
                "skill2/189.png",
                "skill2/190.png",
                "skill2/191.png",
                "skill2/192.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "雷",
              "baseCt": 9,
              "learnLevel": 50
            }
          ],
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "92",
        "182",
        "mq:eventfig/04"
      ]
    },
    {
      "id": "198",
      "name": "モブテツ",
      "image": "figplay/009.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 150,
      "def": 145,
      "attribute": "地",
      "tags": [
        "13",
        "24",
        "27",
        "34",
        "35",
        "40",
        "41",
        "49",
        "55"
      ],
      "soulSkill": {
        "name": "茄子落とし",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のATKを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に地属性の物理大ダメージを与える。会心率20%。会心時は対象のDEFを2ターンの間20%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "figplay/009.png",
        "rarity": "UR",
        "statsText": "ATK +8 & MND +8",
        "traitText": "ひるみ耐性+40 & 会心率 +6%",
        "soul": {
          "cost": 6,
          "name": "茄子落とし",
          "text": "敵単体に地属性の物理大ダメージを与える。会心率20%。会心時は対象のDEFを2ターンの間20%ダウンさせる"
        },
        "tags": [
          "13",
          "24",
          "27",
          "28",
          "29",
          "34",
          "35",
          "40",
          "41",
          "49",
          "55",
          "59",
          "70",
          "75"
        ],
        "actor": {
          "id": "tetsu",
          "name": "モブテツ",
          "category": "party",
          "attribute": "地",
          "role": "剣豪",
          "atk": 457,
          "mag": 191,
          "def": 408,
          "res": 312,
          "spd": 178,
          "passive": "テツの意志",
          "passiveDescription": "30%の確立で通常攻撃が2回攻撃になる",
          "statusResist": {
            "poison": 0.4,
            "paralyze": 0.3,
            "burn": 0.45,
            "sleep": 0.3,
            "confuse": 0.5,
            "stun": 0.6
          },
          "elementResist": {
            "無": 0.05,
            "火": 0.1,
            "水": -0.08,
            "雷": 0,
            "地": 0.2,
            "風": -0.12,
            "光": 0,
            "闇": 0
          },
          "ults": [
            {
              "name": "モブテツ一閃",
              "image": "ult/37.png",
              "cost": 0,
              "kind": "tetsuSweepV221",
              "power": 1.645,
              "type": "physical",
              "chance": 0.1,
              "desc": "全体地属性中ダメージ＋自身の回避率を2ターン20%アップする",
              "effectFrames": [
                "skill2/01.png",
                "skill2/02.png",
                "skill2/03.png",
                "skill2/04.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "地",
              "baseCt": 6,
              "learnLevel": 1
            },
            {
              "name": "モブテツ流茄子落とし",
              "image": "ult/38.png",
              "cost": 0,
              "kind": "damage",
              "power": 2.068,
              "type": "physical",
              "crit": 0.2,
              "priority": true,
              "desc": "必ず一番手で攻撃※相手も同じ能力を持つ技を使ったらスピード勝負\n単体地属性大ダメージ(20%の確率で会心)",
              "effectFrames": [
                "skill2/173.png",
                "skill2/174.png",
                "skill2/175.png",
                "skill2/176.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "地",
              "baseCt": 7,
              "learnLevel": 15
            },
            {
              "name": "モブテツ一文字",
              "image": "ult/39.png",
              "cost": 0,
              "kind": "aoeStun",
              "power": 2.115,
              "type": "physical",
              "chance": 0.5,
              "desc": "全体地属性大攻撃＋50%の確率でひるみ",
              "effectFrames": [
                "skill2/05.png",
                "skill2/06.png",
                "skill2/07.png",
                "skill2/08.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "地",
              "baseCt": 8,
              "learnLevel": 30
            },
            {
              "name": "鉄の極意",
              "image": "ult/40.png",
              "cost": 0,
              "kind": "tetsuFinal",
              "power": 2.5568,
              "type": "physical",
              "desc": "自身の回避率を2ターン40%アップ＋地属性極大ダメージ",
              "effectFrames": [
                "skill2/214.png",
                "skill2/215.png",
                "skill2/216.png",
                "skill2/217.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "地",
              "baseCt": 9,
              "learnLevel": 50
            }
          ],
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "199",
      "name": "モブリーロ",
      "image": "figplay/010.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 305,
      "attribute": "風",
      "tags": [
        "13",
        "23",
        "24",
        "30",
        "36",
        "37",
        "40",
        "42",
        "49"
      ],
      "soulSkill": {
        "name": "ウィンドブレード",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に風属性の物理中ダメージを与え、味方全体のSPDを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "figplay/010.png",
        "rarity": "UR",
        "statsText": "MND+8 & HP +30",
        "traitText": "物理会心率+6% & 風属性与ダメージ +10%",
        "soul": {
          "cost": 6,
          "name": "ウィンドブレード",
          "text": "敵全体に風属性の物理中ダメージを与え、味方全体のSPDを2ターンの間20%アップする"
        },
        "tags": [
          "13",
          "23",
          "24",
          "28",
          "29",
          "30",
          "36",
          "37",
          "40",
          "42",
          "49",
          "57",
          "58",
          "75",
          "77"
        ],
        "actor": {
          "id": "riro",
          "name": "モブリーロ",
          "category": "party",
          "attribute": "風",
          "role": "万能",
          "atk": 354,
          "mag": 378,
          "def": 305,
          "res": 354,
          "spd": 229,
          "passive": "アーティスト・マインド",
          "passiveDescription": "味方が状態異常になった時、50%の確率で解除する",
          "statusResist": {
            "poison": 0.45,
            "paralyze": 0.35,
            "burn": 0.3,
            "sleep": 0.45,
            "confuse": 0.5,
            "stun": 0.35
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": -0.05,
            "地": -0.1,
            "風": 0.18,
            "光": 0.08,
            "闇": 0.08
          },
          "ults": [
            {
              "name": "トゥエルラッシュ",
              "image": "ult/33.png",
              "cost": 0,
              "kind": "damage",
              "power": 1.551,
              "type": "physical",
              "desc": "単体風属性中ダメージ",
              "effectFrames": [
                "skill2/206.png",
                "skill2/207.png",
                "skill2/208.png",
                "skill2/209.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "風",
              "baseCt": 6,
              "learnLevel": 1
            },
            {
              "name": "タロ・アンド・リーロ",
              "image": "ult/34.png",
              "cost": 0,
              "kind": "healCleanse",
              "power": 0.2444,
              "desc": "味方全体のHPを中回復し、状態異常を解除する",
              "attackElement": "風",
              "baseCt": 7,
              "learnLevel": 15
            },
            {
              "name": "ディスコスパイラル",
              "image": "ult/35.png",
              "cost": 0,
              "kind": "teamAtkAttack",
              "power": 1.974,
              "type": "physical",
              "desc": "味方全体アタック小バフ＋敵単体風属性大ダメージ",
              "effectFrames": [
                "skill2/157.png",
                "skill2/158.png",
                "skill2/159.png",
                "skill2/160.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "風",
              "baseCt": 8,
              "learnLevel": 30
            },
            {
              "name": "リーロ・トゥ・ステイシー",
              "image": "ult/36.png",
              "cost": 0,
              "kind": "riroFinalV221",
              "power": 2.444,
              "type": "physical",
              "heal": 0.24,
              "desc": "敵単体風属性極大ダメージ & ダメージ軽減率を10%ダウンさせる",
              "effectFrames": [
                "skill2/181.png",
                "skill2/182.png",
                "skill2/183.png",
                "skill2/184.png"
              ],
              "effectMode": "ultimateV79",
              "attackElement": "風",
              "baseCt": 9,
              "learnLevel": 50
            }
          ],
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "199:family",
          "target": "199",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "24"
            },
            {
              "tag": "24"
            }
          ],
          "label": "主人公パーティー × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "199:element",
          "target": "199",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "200",
      "name": "モブあのヒーロー",
      "image": "figplay/011.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "atk": 320,
      "def": 370,
      "attribute": "無",
      "tags": [
        "24",
        "30",
        "34",
        "35",
        "36",
        "39",
        "40",
        "50",
        "51",
        "52",
        "55",
        "56"
      ],
      "soulSkill": {
        "name": "ワールドチェンジ",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に無属性の物理大ダメージを与え、味方全体のATK・DEF・SPDを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "image": "figplay/011.png",
        "rarity": "MOB",
        "statsText": "ATK +5 & DEF +5 & SPD +10 & MND+10 & HP +30",
        "traitText": "全属性与ダメージ +10% & 全属性耐性 +10",
        "soul": {
          "cost": 7,
          "name": "ワールドチェンジ",
          "text": "敵全体に無属性の物理大ダメージを与え、味方全体のATK・DEF・SPDを2ターンの間20%アップする"
        },
        "tags": [
          "05",
          "08",
          "24",
          "30",
          "34",
          "35",
          "36",
          "39",
          "40",
          "50",
          "51",
          "52",
          "55",
          "56",
          "60",
          "73",
          "74",
          "77",
          "78",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "MOBは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "200:family",
          "target": "200",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "24"
            },
            {
              "tag": "24"
            }
          ],
          "label": "主人公パーティー × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "200:element",
          "target": "200",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "88",
      "name": "スライム",
      "image": "figene/01.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 125,
      "def": 140,
      "attribute": "水",
      "tags": [
        "09",
        "10",
        "17",
        "41",
        "67",
        "78",
        "02"
      ],
      "soulSkill": {
        "name": "スラスライダー",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理小～中ダメージを与え、SPDを2ターンの間15%ダウンさせる。自分の回避率を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/01.png",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "水属性耐性 +5%",
        "soul": {
          "cost": 5,
          "name": "スラスライダー",
          "text": "敵単体に水属性の物理小～中ダメージを与え、SPDを2ターンの間15%ダウンさせる。自分の回避率を10%アップする"
        },
        "tags": [
          "02",
          "09",
          "10",
          "17",
          "41",
          "67",
          "78"
        ],
        "actor": {
          "id": "g-slime",
          "name": "モブスライム",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "水",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "148",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:spbossfig/38",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/16",
        "mq:eventfig/22",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "89",
      "name": "モブロック",
      "image": "figene/02.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 130,
      "attribute": "地",
      "tags": [
        "09",
        "39",
        "41",
        "70",
        "77"
      ],
      "soulSkill": {
        "name": "ロックパンチ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のATKを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に地属性の物理小～中ダメージを与え、DEFを2ターンの間10%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/02.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "地属性耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "ロックパンチ",
          "text": "敵単体に地属性の物理小～中ダメージを与え、DEFを2ターンの間10%ダウンさせる"
        },
        "tags": [
          "09",
          "39",
          "41",
          "70",
          "77",
          "78"
        ],
        "actor": {
          "id": "g-rock",
          "name": "モブロック",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 184,
          "res": 156,
          "spd": 206,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "90",
      "name": "モブテンデビ",
      "image": "figene/03.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 100,
      "def": 120,
      "attribute": "水",
      "tags": [
        "09",
        "27",
        "39",
        "41",
        "50"
      ],
      "soulSkill": {
        "name": "テンウォーター",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDを2ターンの間25%アップし、回避率を10%アップする。さらに水属性ダメージ軽減を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/03.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "テンウォーター",
          "text": "自分のSPDを2ターンの間25%アップし、回避率を10%アップする。さらに水属性ダメージ軽減を5%アップする"
        },
        "tags": [
          "09",
          "27",
          "39",
          "41",
          "50",
          "67",
          "78"
        ],
        "actor": {
          "id": "g-tendevi",
          "name": "モブテンデビ",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプ",
              "kind": "single",
              "power": 0.9,
              "skillElement": "水",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "91",
      "name": "モブジョーロ",
      "image": "figene/04.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 130,
      "def": 105,
      "attribute": "水",
      "tags": [
        "09",
        "34",
        "39",
        "41",
        "80"
      ],
      "soulSkill": {
        "name": "ジョーロシャワー",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のATKを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理小～中ダメージを与え、ATKを2ターンの間10%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/04.png",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "ジョーロシャワー",
          "text": "敵単体に水属性の物理小～中ダメージを与え、ATKを2ターンの間10%ダウンさせる"
        },
        "tags": [
          "09",
          "34",
          "39",
          "41",
          "80",
          "78"
        ],
        "actor": {
          "id": "g-jouro",
          "name": "モブジョーロ",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "キャンディ",
              "kind": "enemyHeal",
              "power": 0.09,
              "skillElement": "無",
              "skillType": "magic",
              "v134Formal": true
            },
            {
              "special": "ネプソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "水",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "92",
      "name": "モブイワキリ",
      "image": "figene/05.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 160,
      "def": 185,
      "attribute": "雷",
      "tags": [
        "09",
        "32",
        "35",
        "41",
        "51",
        "58",
        "60"
      ],
      "soulSkill": {
        "name": "イワサンダー",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に雷属性の物理中ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする。この攻撃はダメージ軽減を20%無視する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/05.png",
        "rarity": "SSR",
        "statsText": "DEF +3",
        "traitText": "雷属性耐性 +5%",
        "soul": {
          "cost": 5,
          "name": "イワサンダー",
          "text": "敵単体に雷属性の物理中ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする。この攻撃はダメージ軽減を20%無視する"
        },
        "tags": [
          "09",
          "32",
          "35",
          "41",
          "51",
          "58",
          "60",
          "77",
          "79"
        ],
        "actor": {
          "id": "g-iwakiri",
          "name": "モブイワキリ",
          "category": "elite",
          "attribute": "雷",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.58,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0.22,
            "地": 0,
            "風": -0.08,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "92:element",
          "target": "92",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "188",
        "175",
        "spboss014",
        "mq:eventfig/29",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "93",
      "name": "モブサバンナ",
      "image": "figene/06.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 120,
      "def": 120,
      "attribute": "地",
      "tags": [
        "09",
        "36",
        "41",
        "55",
        "75"
      ],
      "soulSkill": {
        "name": "サバンダッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 20
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを20上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDを2ターンの間10%アップし、会心率を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/06.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "地属性与ダメージ +3%",
        "soul": {
          "cost": 4,
          "name": "サバンダッシュ",
          "text": "味方全体のSPDを2ターンの間10%アップし、会心率を5%アップする"
        },
        "tags": [
          "04",
          "09",
          "36",
          "41",
          "55",
          "75"
        ],
        "actor": {
          "id": "g-savanna",
          "name": "モブサバンナ",
          "category": "elite",
          "attribute": "地",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.5800000000000001,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": -0.08,
            "水": 0,
            "雷": 0,
            "地": 0.22,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "94",
      "name": "モブメラケロ",
      "image": "figene/07.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 180,
      "def": 180,
      "attribute": "火",
      "tags": [
        "32",
        "34",
        "40",
        "41",
        "56",
        "70",
        "74"
      ],
      "soulSkill": {
        "name": "メラケロップ",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemy",
            "value": 25
          }
        ],
        "description": "選んだ相手1体のATKを25下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中ダメージを与え、35%でやけどにする。自分のATKを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/07.png",
        "rarity": "SSR",
        "statsText": "ATK+3 & DEF +3",
        "traitText": "火属性与ダメージ +5%",
        "soul": {
          "cost": 5,
          "name": "メラケロップ",
          "text": "敵単体に火属性の物理中ダメージを与え、35%でやけどにする。自分のATKを2ターンの間15%アップする"
        },
        "tags": [
          "03",
          "32",
          "34",
          "40",
          "41",
          "56",
          "70",
          "74",
          "78"
        ],
        "actor": {
          "id": "g2-merakero",
          "name": "モブメラケロ",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 224,
          "mag": 242,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "94:element",
          "target": "94",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "95",
      "name": "モブケロキング",
      "image": "figene/08.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "水",
      "tags": [
        "09",
        "32",
        "34",
        "41",
        "49",
        "76",
        "77"
      ],
      "soulSkill": {
        "name": "ケロプレス",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理中ダメージを与え、味方全体のDEFを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/08.png",
        "rarity": "SSR",
        "statsText": "DEF +3 & MND +3",
        "traitText": "水属性与ダメージ +5%",
        "soul": {
          "cost": 5,
          "name": "ケロプレス",
          "text": "敵単体に水属性の物理中ダメージを与え、味方全体のDEFを2ターンの間15%アップする"
        },
        "tags": [
          "02",
          "09",
          "32",
          "34",
          "41",
          "49",
          "76",
          "77",
          "78"
        ],
        "actor": {
          "id": "g2-keroking",
          "name": "モブケロキング",
          "category": "elite",
          "attribute": "水",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "95:element",
          "target": "95",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "96",
      "name": "モブツルガンナー",
      "image": "figene/09.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "風",
      "tags": [
        "09",
        "32",
        "36",
        "41",
        "60",
        "79",
        "02"
      ],
      "soulSkill": {
        "name": "ツルショット",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に光属性の物理中ダメージを与え、自分のATKを2ターンの間15%アップする。この攻撃はダメージ軽減を20%無視する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/09.png",
        "rarity": "SSR",
        "statsText": "SPD +5",
        "traitText": "命中率 +8%",
        "soul": {
          "cost": 5,
          "name": "ツルショット",
          "text": "敵単体に光属性の物理中ダメージを与え、自分のATKを2ターンの間15%アップする。この攻撃はダメージ軽減を20%無視する"
        },
        "tags": [
          "02",
          "09",
          "32",
          "36",
          "41",
          "60",
          "79"
        ],
        "actor": {
          "id": "g2-tsuru",
          "name": "モブツルガンナー",
          "category": "elite",
          "attribute": "風",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 337,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0.22,
            "光": -0.08,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "96:element",
          "target": "96",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "199",
        "160",
        "mq:eventfig/31",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "97",
      "name": "モブミイラ",
      "image": "figene/10.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 130,
      "attribute": "地",
      "tags": [
        "09",
        "42",
        "54",
        "71",
        "77"
      ],
      "soulSkill": {
        "name": "グルグルラップ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のATKを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理小～中ダメージを与え、自分のATKを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/10.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "混乱耐性 +5%",
        "soul": {
          "cost": 4,
          "name": "グルグルラップ",
          "text": "敵単体に無属性の物理小～中ダメージを与え、自分のATKを2ターンの間10%アップする"
        },
        "tags": [
          "09",
          "28",
          "42",
          "54",
          "71",
          "77"
        ],
        "actor": {
          "id": "d-mummy",
          "name": "モブミイラ",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "98",
      "name": "モブネコミイラ",
      "image": "figene/11.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 100,
      "def": 120,
      "attribute": "地",
      "tags": [
        "09",
        "27",
        "42",
        "54",
        "71"
      ],
      "soulSkill": {
        "name": "ミイラニャン",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDと回避率を2ターンの間20%アップし、混乱耐性を30%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/11.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "回避率 +2%",
        "soul": {
          "cost": 4,
          "name": "ミイラニャン",
          "text": "自分のSPDと回避率を2ターンの間20%アップし、混乱耐性を30%アップする"
        },
        "tags": [
          "09",
          "27",
          "28",
          "42",
          "54",
          "71",
          "77"
        ],
        "actor": {
          "id": "d-nekomummy",
          "name": "モブネコミイラ",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 168,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "99",
      "name": "モブデスヘッド",
      "image": "figene/12.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 175,
      "def": 175,
      "attribute": "闇",
      "tags": [
        "09",
        "32",
        "37",
        "42",
        "49",
        "50",
        "54"
      ],
      "soulSkill": {
        "name": "デスバイト",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/12.png",
        "rarity": "SSR",
        "statsText": "DEF +3 & MAG +3%",
        "traitText": "闇属性耐性 +5%",
        "soul": {
          "cost": 5,
          "name": "デスバイト",
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする"
        },
        "tags": [
          "09",
          "29",
          "32",
          "37",
          "42",
          "49",
          "50",
          "54",
          "57",
          "60"
        ],
        "actor": {
          "id": "d-deathhead",
          "name": "モブデスヘッド",
          "category": "elite",
          "attribute": "闇",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.52,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.08,
            "風": 0,
            "光": 0,
            "闇": 0.22
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "99:element",
          "target": "99",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001"
      ]
    },
    {
      "id": "100",
      "name": "モブポイズン",
      "image": "figene/13.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 130,
      "attribute": "闇",
      "tags": [
        "09",
        "42",
        "54",
        "57",
        "71"
      ],
      "soulSkill": {
        "name": "ポイズンミスト",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemy",
            "value": 20
          }
        ],
        "description": "選んだ相手1体のATKを20下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇属性の魔法小～中ダメージを与え、50%で毒にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/13.png",
        "rarity": "SR",
        "statsText": "MND +3",
        "traitText": "毒耐性 +8%",
        "soul": {
          "cost": 4,
          "name": "ポイズンミスト",
          "text": "敵単体に闇属性の魔法小～中ダメージを与え、50%で毒にする"
        },
        "tags": [
          "09",
          "29",
          "42",
          "54",
          "57",
          "71",
          "72"
        ],
        "actor": {
          "id": "d-poison",
          "name": "モブポイズン",
          "category": "elite",
          "attribute": "闇",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.52,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.08,
            "風": 0,
            "光": 0,
            "闇": 0.22
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "99",
        "104",
        "136",
        "157",
        "161",
        "166",
        "spboss006",
        "spboss007",
        "spboss012",
        "spboss017",
        "spboss034",
        "mq:eventfig/09",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "101",
      "name": "モブアドベンチャー",
      "image": "figene/14.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "火",
      "tags": [
        "09",
        "27",
        "42",
        "54",
        "67"
      ],
      "soulSkill": {
        "name": "アドベンダッシュ",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理小～中ダメージを与え、自分のDEFとSPDを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/14.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "ひるみ耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "アドベンダッシュ",
          "text": "敵単体に火属性の物理小～中ダメージを与え、自分のDEFとSPDを2ターンの間10%アップする"
        },
        "tags": [
          "03",
          "09",
          "27",
          "42",
          "54",
          "67"
        ],
        "actor": {
          "id": "d-adventure",
          "name": "モブアドベンチャー",
          "category": "normal",
          "attribute": "火",
          "role": "physical",
          "atk": 199,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.37,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0.15,
            "水": -0.1,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "マグソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "火",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/15",
        "mq:eventfig/16",
        "mq:eventfig/22",
        "mq:eventfig/39",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "102",
      "name": "モブスナトカゲ",
      "image": "figene/15.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 120,
      "def": 120,
      "attribute": "地",
      "tags": [
        "09",
        "36",
        "42",
        "49",
        "55"
      ],
      "soulSkill": {
        "name": "スナダッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemies",
            "value": 20
          }
        ],
        "description": "相手全体のATKを20下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のSPDを2ターンの間10%ダウンさせ、自分のSPDを10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/15.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "地属性耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "スナダッシュ",
          "text": "敵全体のSPDを2ターンの間10%ダウンさせ、自分のSPDを10%アップする"
        },
        "tags": [
          "09",
          "36",
          "42",
          "49",
          "55"
        ],
        "actor": {
          "id": "d-lizard",
          "name": "モブスナトカゲ",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 281,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "103",
      "name": "モブツインソウル",
      "image": "figene/16.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 145,
      "def": 145,
      "attribute": "雷",
      "tags": [
        "09",
        "23",
        "37",
        "20",
        "42",
        "50",
        "51"
      ],
      "soulSkill": {
        "name": "ツインスパーク",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に雷属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる。発動後、自分の必殺技CTを1ターン短縮する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/16.png",
        "rarity": "SSR",
        "statsText": "MP +15",
        "traitText": "風属性耐性 +3% & 雷属性耐性 +3%",
        "soul": {
          "cost": 5,
          "name": "ツインスパーク",
          "text": "敵単体に雷属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "tags": [
          "08",
          "09",
          "23",
          "37",
          "20",
          "42",
          "50",
          "51",
          "54",
          "58",
          "75"
        ],
        "actor": {
          "id": "d2-twinsoul",
          "name": "モブツインソウル",
          "category": "elite",
          "attribute": "雷",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.58,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0.22,
            "地": 0,
            "風": -0.08,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "92",
        "182",
        "mq:eventfig/04"
      ]
    },
    {
      "id": "104",
      "name": "モブミラバスター",
      "image": "figene/17.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 160,
      "def": 185,
      "attribute": "闇",
      "tags": [
        "09",
        "23",
        "26",
        "32",
        "36",
        "42",
        "54"
      ],
      "soulSkill": {
        "name": "ミラキャノン",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする。発動後、自分の必殺技CTを1ターン短縮する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/17.png",
        "rarity": "SSR",
        "statsText": "DEF +3 & MND +3",
        "traitText": "砂漠での与ダメージ +7%",
        "soul": {
          "cost": 5,
          "name": "ミラキャノン",
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "tags": [
          "09",
          "23",
          "26",
          "32",
          "36",
          "42",
          "54",
          "57",
          "58"
        ],
        "actor": {
          "id": "d2-mirabuster",
          "name": "モブミラバスター",
          "category": "elite",
          "attribute": "闇",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.52,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.08,
            "風": 0,
            "光": 0,
            "闇": 0.22
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "104:element",
          "target": "104",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001"
      ]
    },
    {
      "id": "105",
      "name": "モブヒトデヤリ",
      "image": "figene/18.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 130,
      "def": 105,
      "attribute": "水",
      "tags": [
        "09",
        "36",
        "43",
        "70",
        "80"
      ],
      "soulSkill": {
        "name": "ヒトデスピア",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のATKを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理小～中ダメージを与え、DEFを2ターンの間10%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/18.png",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "ヒトデスピア",
          "text": "敵単体に水属性の物理小～中ダメージを与え、DEFを2ターンの間10%ダウンさせる"
        },
        "tags": [
          "09",
          "36",
          "43",
          "70",
          "80"
        ],
        "actor": {
          "id": "r-hitode",
          "name": "モブヒトデヤリ",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 199,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "水",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "106",
      "name": "モブナイフ",
      "image": "figene/19.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 130,
      "def": 105,
      "attribute": "地",
      "tags": [
        "09",
        "26",
        "43",
        "49",
        "76"
      ],
      "soulSkill": {
        "name": "ナイフエッジ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のATKを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理小～中ダメージを与え、自分の会心率を2ターンの間8%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/19.png",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "混乱耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "ナイフエッジ",
          "text": "敵単体に無属性の物理小～中ダメージを与え、自分の会心率を2ターンの間8%アップする"
        },
        "tags": [
          "09",
          "26",
          "43",
          "49",
          "76"
        ],
        "actor": {
          "id": "r-knife",
          "name": "モブナイフ",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 202,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 271,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "107",
      "name": "モブダンサー",
      "image": "figene/20.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 120,
      "def": 120,
      "attribute": "火",
      "tags": [
        "09",
        "12",
        "43",
        "55",
        "57"
      ],
      "soulSkill": {
        "name": "ダンスビート",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 20
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを20上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDを2ターンの間10%アップし、会心率を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/20.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "混乱耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "ダンスビート",
          "text": "味方全体のSPDを2ターンの間10%アップし、会心率を5%アップする"
        },
        "tags": [
          "09",
          "12",
          "43",
          "55",
          "57",
          "59"
        ],
        "actor": {
          "id": "r-dancer",
          "name": "モブダンサー",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 331,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "マグソード",
              "kind": "single",
              "power": 1.1,
              "skillElement": "火",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/39",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "108",
      "name": "モブヌルブルー",
      "image": "figene/21.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 115,
      "def": 110,
      "attribute": "水",
      "tags": [
        "09",
        "43",
        "31"
      ],
      "soulSkill": {
        "name": "ヌルスライド",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理小～中ダメージを2回に分けて与え、自分の会心率を2ターンの間5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/21.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "地属性耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "ヌルスライド",
          "text": "敵単体に水属性の物理小～中ダメージを2回に分けて与え、自分の会心率を2ターンの間5%アップする"
        },
        "tags": [
          "09",
          "31",
          "43"
        ],
        "actor": {
          "id": "r-nullblue",
          "name": "モブヌルブルー",
          "category": "normal",
          "attribute": "水",
          "role": "magic",
          "atk": 184,
          "mag": 199,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプ",
              "kind": "single",
              "power": 0.9,
              "skillElement": "水",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "109",
      "name": "モブバイオリン",
      "image": "figene/22.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 145,
      "attribute": "闇",
      "tags": [
        "09",
        "26",
        "33",
        "36",
        "37",
        "43",
        "57"
      ],
      "soulSkill": {
        "name": "バイオメロディ",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のATK・DEF・SPDを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/22.png",
        "rarity": "SSR",
        "statsText": "MND +3 & DEF +3",
        "traitText": "眠り耐性 +5%",
        "soul": {
          "cost": 5,
          "name": "バイオメロディ",
          "text": "味方全体のATK・DEF・SPDを2ターンの間10%アップする"
        },
        "tags": [
          "09",
          "26",
          "29",
          "33",
          "36",
          "37",
          "43",
          "57",
          "58",
          "60"
        ],
        "actor": {
          "id": "r2-violin",
          "name": "モブバイオリン",
          "category": "elite",
          "attribute": "闇",
          "role": "physical",
          "atk": 224,
          "mag": 247,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.52,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.08,
            "風": 0,
            "光": 0,
            "闇": 0.22
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "99",
        "104",
        "136",
        "157",
        "161",
        "166",
        "spboss006",
        "spboss007",
        "spboss012",
        "spboss017",
        "spboss034",
        "mq:eventfig/09",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "110",
      "name": "モブラプチー",
      "image": "figene/23.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 160,
      "def": 185,
      "attribute": "水",
      "tags": [
        "09",
        "32",
        "40",
        "43",
        "59",
        "60",
        "31"
      ],
      "soulSkill": {
        "name": "ラプハント",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に水属性の物理小～中ダメージを与え、30%でひるませる。この攻撃はダメージ軽減を20%無視する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/23.png",
        "rarity": "SSR",
        "statsText": "SPD +3 & DEF +3",
        "traitText": "魔法ダメージ軽減 +3%",
        "soul": {
          "cost": 5,
          "name": "ラプハント",
          "text": "敵全体に水属性の物理小～中ダメージを与え、30%でひるませる。この攻撃はダメージ軽減を20%無視する"
        },
        "tags": [
          "09",
          "31",
          "32",
          "40",
          "43",
          "59",
          "60"
        ],
        "actor": {
          "id": "r2-rapty",
          "name": "モブラプチー",
          "category": "elite",
          "attribute": "水",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 325,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "110:element",
          "target": "110",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "111",
      "name": "モブティラ",
      "image": "figene/24.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 175,
      "def": 175,
      "attribute": "火",
      "tags": [
        "09",
        "32",
        "40",
        "43",
        "59",
        "60",
        "03"
      ],
      "soulSkill": {
        "name": "ティラバイト",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理中ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする。この攻撃はダメージ軽減を20%無視する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/24.png",
        "rarity": "SSR",
        "statsText": "ATK +3 & MND +3",
        "traitText": "物理ダメージ軽減 +3%",
        "soul": {
          "cost": 5,
          "name": "ティラバイト",
          "text": "敵単体に無属性の物理中ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする。この攻撃はダメージ軽減を20%無視する"
        },
        "tags": [
          "03",
          "09",
          "32",
          "40",
          "43",
          "59",
          "60"
        ],
        "actor": {
          "id": "r2-tira",
          "name": "モブティラ",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 247,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "111:element",
          "target": "111",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "112",
      "name": "モブクウカイ",
      "image": "figene/25.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 140,
      "def": 140,
      "attribute": "闇",
      "tags": [
        "09",
        "23",
        "26",
        "37",
        "43",
        "57",
        "05"
      ],
      "soulSkill": {
        "name": "クウウェーブ",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/25.png",
        "rarity": "SSR",
        "statsText": "MAG +3 & MND +3",
        "traitText": "全属性耐性 +3%",
        "soul": {
          "cost": 5,
          "name": "クウウェーブ",
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする"
        },
        "tags": [
          "05",
          "09",
          "23",
          "26",
          "37",
          "43",
          "57"
        ],
        "actor": {
          "id": "r2-kuukai",
          "name": "モブクウカイ",
          "category": "elite",
          "attribute": "闇",
          "role": "physical",
          "atk": 224,
          "mag": 242,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.52,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.08,
            "風": 0,
            "光": 0,
            "闇": 0.22
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "99",
        "104",
        "136",
        "157",
        "161",
        "166",
        "spboss006",
        "spboss007",
        "spboss012",
        "spboss017",
        "spboss034",
        "mq:eventfig/09",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "113",
      "name": "モブアクイ",
      "image": "figene/26.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 145,
      "attribute": "闇",
      "tags": [
        "09",
        "23",
        "26",
        "43",
        "50",
        "57",
        "05"
      ],
      "soulSkill": {
        "name": "アクイニードル",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/26.png",
        "rarity": "SSR",
        "statsText": "DEF +3 & MP+10",
        "traitText": "闇属性耐性 +5%",
        "soul": {
          "cost": 5,
          "name": "アクイニードル",
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする"
        },
        "tags": [
          "05",
          "09",
          "23",
          "26",
          "43",
          "50",
          "57"
        ],
        "actor": {
          "id": "r2-akui",
          "name": "モブアクイ",
          "category": "elite",
          "attribute": "闇",
          "role": "magic",
          "atk": 224,
          "mag": 242,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.52,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.08,
            "風": 0,
            "光": 0,
            "闇": 0.22
          },
          "skills": [
            {
              "special": "リピートイントロ",
              "kind": "poisonSingle",
              "power": 0.78,
              "chance": 0.25,
              "skillElement": "闇",
              "skillType": "magic",
              "v134Formal": true
            },
            {
              "special": "ミラマゾーン",
              "kind": "single",
              "power": 1.06,
              "skillElement": "闇",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "99",
        "104",
        "136",
        "157",
        "161",
        "166",
        "spboss006",
        "spboss007",
        "spboss012",
        "spboss017",
        "spboss034",
        "mq:eventfig/09",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "114",
      "name": "モブシツイ",
      "image": "figene/27.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 125,
      "def": 150,
      "attribute": "闇",
      "tags": [
        "09",
        "23",
        "26",
        "43",
        "50",
        "57",
        "05"
      ],
      "soulSkill": {
        "name": "シツイレイン",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/27.png",
        "rarity": "SSR",
        "statsText": "DEF +3 & MP+10",
        "traitText": "闇属性与ダメージ +3%",
        "soul": {
          "cost": 5,
          "name": "シツイレイン",
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする"
        },
        "tags": [
          "05",
          "09",
          "23",
          "26",
          "43",
          "50",
          "57"
        ],
        "actor": {
          "id": "r2-shitsui",
          "name": "モブシツイ",
          "category": "elite",
          "attribute": "闇",
          "role": "magic",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 234,
          "spd": 301,
          "statusResist": {
            "poison": 0.52,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.08,
            "風": 0,
            "光": 0,
            "闇": 0.22
          },
          "skills": [
            {
              "special": "リピートイントロ",
              "kind": "poisonSingle",
              "power": 0.78,
              "chance": 0.25,
              "skillElement": "闇",
              "skillType": "magic",
              "v134Formal": true
            },
            {
              "special": "ミラマゾーン",
              "kind": "single",
              "power": 1.06,
              "skillElement": "闇",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "99",
        "104",
        "136",
        "157",
        "161",
        "166",
        "spboss006",
        "spboss007",
        "spboss012",
        "spboss017",
        "spboss034",
        "mq:eventfig/09",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "115",
      "name": "モブヤマイ",
      "image": "figene/28.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 125,
      "def": 150,
      "attribute": "闇",
      "tags": [
        "09",
        "23",
        "26",
        "43",
        "50",
        "57",
        "05"
      ],
      "soulSkill": {
        "name": "ヤマイミスト",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/28.png",
        "rarity": "SSR",
        "statsText": "DEF +3 & MP+10",
        "traitText": "闇属性魔法消費MP -10%",
        "soul": {
          "cost": 5,
          "name": "ヤマイミスト",
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする"
        },
        "tags": [
          "05",
          "09",
          "23",
          "26",
          "43",
          "50",
          "57"
        ],
        "actor": {
          "id": "r2-yamai",
          "name": "モブヤマイ",
          "category": "elite",
          "attribute": "闇",
          "role": "magic",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.52,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.08,
            "風": 0,
            "光": 0,
            "闇": 0.22
          },
          "skills": [
            {
              "special": "リピートイントロ",
              "kind": "poisonSingle",
              "power": 0.78,
              "chance": 0.25,
              "skillElement": "闇",
              "skillType": "magic",
              "v134Formal": true
            },
            {
              "special": "ミラマゾーン",
              "kind": "single",
              "power": 1.06,
              "skillElement": "闇",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "99",
        "104",
        "136",
        "157",
        "161",
        "166",
        "spboss006",
        "spboss007",
        "spboss012",
        "spboss017",
        "spboss034",
        "mq:eventfig/09",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "116",
      "name": "モブネオントカゲ",
      "image": "figene/29.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 100,
      "def": 120,
      "attribute": "光",
      "tags": [
        "09",
        "36",
        "44",
        "49",
        "08"
      ],
      "soulSkill": {
        "name": "ネオンドリフト",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理小～中ダメージを与え、自分のSPDと回避率を2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/29.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "会心率 +1%",
        "soul": {
          "cost": 4,
          "name": "ネオンドリフト",
          "text": "敵単体に無属性の物理小～中ダメージを与え、自分のSPDと回避率を2ターンの間10%アップする"
        },
        "tags": [
          "08",
          "09",
          "36",
          "44",
          "49"
        ],
        "actor": {
          "id": "n-lizard",
          "name": "モブネオントカゲ",
          "category": "normal",
          "attribute": "光",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 281,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.25
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.15,
            "闇": -0.1
          },
          "skills": [
            {
              "special": "ネオマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "光",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "30",
        "165",
        "184",
        "205",
        "spboss010",
        "spboss033",
        "mq:spbossfig/41",
        "mq:spbossfig/42"
      ]
    },
    {
      "id": "117",
      "name": "モブカイロ",
      "image": "figene/30.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 130,
      "attribute": "地",
      "tags": [
        "09",
        "34",
        "44",
        "05"
      ],
      "soulSkill": {
        "name": "カイロトリック",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のATKを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理小～中ダメージを与え、ATKを2ターンの間10%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/30.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "会心率 +1%",
        "soul": {
          "cost": 4,
          "name": "カイロトリック",
          "text": "敵単体に無属性の物理小～中ダメージを与え、ATKを2ターンの間10%ダウンさせる"
        },
        "tags": [
          "05",
          "09",
          "34",
          "44"
        ],
        "actor": {
          "id": "n-kairo",
          "name": "モブカイロ",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 171,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "118",
      "name": "モブバンケン",
      "image": "figene/31.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "地",
      "tags": [
        "09",
        "27",
        "33",
        "44"
      ],
      "soulSkill": {
        "name": "バンケンガード",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 20
          },
          {
            "type": "cleanse",
            "target": "allies",
            "value": 0
          }
        ],
        "description": "自分のライフを20回復（上限400）。味方全体のATK・DEF低下を解除する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを15%回復し、状態異常を1つ解除する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/31.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "光属性耐性 +5%",
        "soul": {
          "cost": 4,
          "name": "バンケンガード",
          "text": "味方全体のHPを15%回復し、状態異常を1つ解除する"
        },
        "tags": [
          "09",
          "27",
          "33",
          "44"
        ],
        "actor": {
          "id": "r-banken",
          "name": "モブバンケン",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 168,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "119",
      "name": "モブスラトレーナー",
      "image": "figene/32.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 150,
      "def": 130,
      "attribute": "水",
      "tags": [
        "09",
        "17",
        "35",
        "44",
        "02"
      ],
      "soulSkill": {
        "name": "スラトレーニング",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理中ダメージを与え、自分のATKを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/32.png",
        "rarity": "SSR",
        "statsText": "ATK +3 & MP+10",
        "traitText": "会心率 +2%",
        "soul": {
          "cost": 5,
          "name": "スラトレーニング",
          "text": "敵単体に無属性の物理中ダメージを与え、自分のATKを2ターンの間15%アップする"
        },
        "tags": [
          "02",
          "09",
          "17",
          "35",
          "44"
        ],
        "actor": {
          "id": "n-trainer",
          "name": "モブスラトレーナー",
          "category": "elite",
          "attribute": "水",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "148",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:spbossfig/38",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/22",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "120",
      "name": "モブエネチェイサー",
      "image": "figene/33.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 190,
      "attribute": "地",
      "tags": [
        "09",
        "32",
        "35",
        "44",
        "29"
      ],
      "soulSkill": {
        "name": "エネチェイス",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/33.png",
        "rarity": "SSR",
        "statsText": "DEF +3 & HP+10",
        "traitText": "命中率 +3%",
        "soul": {
          "cost": 5,
          "name": "エネチェイス",
          "text": "敵単体に闇属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "09",
          "29",
          "32",
          "35",
          "44"
        ],
        "actor": {
          "id": "n-chaser",
          "name": "モブエネチェイサー",
          "category": "elite",
          "attribute": "地",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.5800000000000001,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": -0.08,
            "水": 0,
            "雷": 0,
            "地": 0.22,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "120:element",
          "target": "120",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "121",
      "name": "モブパレットレオン",
      "image": "figene/34.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 145,
      "def": 145,
      "attribute": "光",
      "tags": [
        "09",
        "36",
        "44",
        "49",
        "55",
        "59",
        "08"
      ],
      "soulSkill": {
        "name": "パレットカモ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 25
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを25上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDを2ターンの間15%アップし、命中率を12%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/34.png",
        "rarity": "SSR",
        "statsText": "SPD +3 & MP+10",
        "traitText": "毒耐性 +10%",
        "soul": {
          "cost": 5,
          "name": "パレットカモ",
          "text": "味方全体のSPDを2ターンの間15%アップし、命中率を12%アップする"
        },
        "tags": [
          "08",
          "09",
          "29",
          "36",
          "44",
          "49",
          "55",
          "59"
        ],
        "actor": {
          "id": "n2-palette",
          "name": "モブパレットレオン",
          "category": "elite",
          "attribute": "光",
          "role": "magic",
          "atk": 224,
          "mag": 278,
          "def": 217,
          "res": 256,
          "spd": 319,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.22,
            "闇": -0.08
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "30",
        "165",
        "184",
        "205",
        "spboss010",
        "spboss033",
        "mq:spbossfig/41",
        "mq:spbossfig/42"
      ]
    },
    {
      "id": "122",
      "name": "モブコドラ",
      "image": "figene/35.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 155,
      "attribute": "火",
      "tags": [
        "09",
        "27",
        "38",
        "40",
        "44"
      ],
      "soulSkill": {
        "name": "コドラファイヤ",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemy",
            "value": 25
          }
        ],
        "description": "選んだ相手1体のATKを25下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の魔法中ダメージを与え、35%でやけどにする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/35.png",
        "rarity": "SSR",
        "statsText": "DEF +3 & HP+10",
        "traitText": "火属性耐性 +5%",
        "soul": {
          "cost": 5,
          "name": "コドラファイヤ",
          "text": "敵単体に火属性の魔法中ダメージを与え、35%でやけどにする"
        },
        "tags": [
          "09",
          "27",
          "38",
          "40",
          "44"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/10",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/39",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "123",
      "name": "モブネオクマ",
      "image": "figene/36.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 150,
      "def": 130,
      "attribute": "無",
      "tags": [
        "09",
        "27",
        "36",
        "40",
        "44"
      ],
      "soulSkill": {
        "name": "クマプレス",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/36.png",
        "rarity": "SSR",
        "statsText": "ATK +3 & MP+10",
        "traitText": "火属性耐性 +3%",
        "soul": {
          "cost": 5,
          "name": "クマプレス",
          "text": "敵単体に無属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "09",
          "27",
          "36",
          "40",
          "44"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "124",
      "name": "モブジンベエ",
      "image": "figene/37.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 130,
      "def": 105,
      "attribute": "水",
      "tags": [
        "09",
        "36",
        "40",
        "45",
        "49"
      ],
      "soulSkill": {
        "name": "ジンベエラッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のATKを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理小～中ダメージを与え、自分の会心率を2ターンの間8%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/37.png",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "ジンベエラッシュ",
          "text": "敵単体に水属性の物理小～中ダメージを与え、自分の会心率を2ターンの間8%アップする"
        },
        "tags": [
          "09",
          "31",
          "36",
          "40",
          "45",
          "49"
        ],
        "actor": {
          "id": "s-jinbei",
          "name": "モブジンベエ",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 231,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "水",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "125",
      "name": "モブネッシー",
      "image": "figene/38.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 100,
      "def": 125,
      "attribute": "水",
      "tags": [
        "09",
        "39",
        "40",
        "45",
        "51"
      ],
      "soulSkill": {
        "name": "ネッシーダイブ",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に水属性の物理小～中ダメージを与え、自分の回避率を2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/38.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "ネッシーダイブ",
          "text": "敵全体に水属性の物理小～中ダメージを与え、自分の回避率を2ターンの間10%アップする"
        },
        "tags": [
          "09",
          "31",
          "39",
          "40",
          "45",
          "51"
        ],
        "actor": {
          "id": "s-nessie",
          "name": "モブネッシー",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "水",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "126",
      "name": "モブバブルドクター",
      "image": "figene/39.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "水",
      "tags": [
        "09",
        "36",
        "40",
        "45",
        "31"
      ],
      "soulSkill": {
        "name": "バブルケア",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 20
          },
          {
            "type": "cleanse",
            "target": "allies",
            "value": 0
          }
        ],
        "description": "自分のライフを20回復（上限400）。味方全体のATK・DEF低下を解除する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを15%回復し、状態異常を1つ解除する。さらにDEFを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/39.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "バブルケア",
          "text": "味方全体のHPを15%回復し、状態異常を1つ解除する。さらにDEFを2ターンの間10%アップする"
        },
        "tags": [
          "09",
          "31",
          "36",
          "40",
          "45"
        ],
        "actor": {
          "id": "s-doctor",
          "name": "モブバブルドクター",
          "category": "normal",
          "attribute": "水",
          "role": "magic",
          "atk": 184,
          "mag": 202,
          "def": 156,
          "res": 171,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "キャンディネオン",
              "kind": "enemyHeal",
              "power": 0.12,
              "skillElement": "無",
              "skillType": "magic",
              "v134Formal": true
            },
            {
              "special": "ネプマ",
              "kind": "single",
              "power": 0.9,
              "skillElement": "水",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "127",
      "name": "モブシーガード",
      "image": "figene/40.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "水",
      "tags": [
        "09",
        "40",
        "45",
        "28",
        "31"
      ],
      "soulSkill": {
        "name": "シーウォール",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のDEFを2ターンの間45%アップし、物理ダメージ軽減を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/40.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "cost": 4,
          "name": "シーウォール",
          "text": "自分のDEFを2ターンの間45%アップし、物理ダメージ軽減を10%アップする"
        },
        "tags": [
          "09",
          "28",
          "31",
          "40",
          "45"
        ],
        "actor": {
          "id": "s-guard",
          "name": "モブシーガード",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 171,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "水",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "128",
      "name": "モブアビスナイト",
      "image": "figene/41.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 145,
      "def": 145,
      "attribute": "水",
      "tags": [
        "09",
        "36",
        "40",
        "45",
        "49",
        "31"
      ],
      "soulSkill": {
        "name": "アビスランス",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/41.png",
        "rarity": "SSR",
        "statsText": "ATK +3 DEF +3",
        "traitText": "水属性与ダメージ +5%",
        "soul": {
          "cost": 5,
          "name": "アビスランス",
          "text": "敵単体に水属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする"
        },
        "tags": [
          "09",
          "31",
          "36",
          "40",
          "45",
          "49"
        ],
        "actor": {
          "id": "s-abyssknight",
          "name": "モブアビスナイト",
          "category": "elite",
          "attribute": "水",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "129",
      "name": "モブジョーンズ",
      "image": "figene/42.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 230,
      "def": 200,
      "attribute": "水",
      "tags": [
        "09",
        "32",
        "35",
        "40",
        "45",
        "49",
        "55",
        "31"
      ],
      "soulSkill": {
        "name": "ジョーズハント",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 30
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを30上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDを2ターンの間20%アップし、会心率を8%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/42.png",
        "rarity": "UR",
        "statsText": "ATK +5 DEF +3",
        "traitText": "水属性与ダメージ +5%",
        "soul": {
          "cost": 6,
          "name": "ジョーズハント",
          "text": "味方全体のSPDを2ターンの間20%アップし、会心率を8%アップする"
        },
        "tags": [
          "09",
          "31",
          "32",
          "35",
          "40",
          "45",
          "49",
          "55"
        ],
        "actor": {
          "id": "s-jones",
          "name": "モブジョーンズ",
          "category": "elite",
          "attribute": "水",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "129:element",
          "target": "129",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "130",
      "name": "モブウェイブ",
      "image": "figene/43.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 150,
      "def": 150,
      "attribute": "水",
      "tags": [
        "09",
        "36",
        "37",
        "40",
        "45",
        "59",
        "60",
        "31"
      ],
      "soulSkill": {
        "name": "ウェイブクラッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 30
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "自身のATKを30上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の魔法中～大ダメージを与える。SPDを2ターンの間20%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/43.png",
        "rarity": "UR",
        "statsText": "MAG +5 MND +5",
        "traitText": "水属性魔法与ダメージ +10%",
        "soul": {
          "cost": 6,
          "name": "ウェイブクラッシュ",
          "text": "敵単体に水属性の魔法中～大ダメージを与える。SPDを2ターンの間20%ダウンさせる"
        },
        "tags": [
          "09",
          "31",
          "36",
          "37",
          "40",
          "45",
          "59",
          "60"
        ],
        "actor": {
          "id": "s-wave",
          "name": "モブウェイブ",
          "category": "elite",
          "attribute": "水",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "132",
      "name": "モブウォリアー",
      "image": "figene/45.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 160,
      "def": 130,
      "attribute": "地",
      "tags": [
        "09",
        "26",
        "32",
        "37",
        "46"
      ],
      "soulSkill": {
        "name": "アースブレイク",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に地属性の魔法小ダメージを与える。30%でひるみにする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/45.png",
        "rarity": "SR",
        "statsText": "MAG +3",
        "traitText": "地属性魔法与ダメージ +3%",
        "soul": {
          "cost": 4,
          "name": "アースブレイク",
          "text": "敵全体に地属性の魔法小ダメージを与える。30%でひるみにする"
        },
        "tags": [
          "09",
          "26",
          "32",
          "37",
          "46",
          "49",
          "57"
        ],
        "actor": {
          "id": "t-warrior",
          "name": "モブウォリアー",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 199,
          "mag": 184,
          "def": 184,
          "res": 156,
          "spd": 236,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "132:element",
          "target": "132",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "133",
      "name": "モブキバ",
      "image": "figene/46.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 150,
      "def": 145,
      "attribute": "地",
      "tags": [
        "09",
        "26",
        "32",
        "36",
        "46"
      ],
      "soulSkill": {
        "name": "キバラッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に地属性の物理小～中ダメージを2回に分けて与え、自分の会心率を2ターンの間5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/46.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "地属性物理与ダメージ +3%",
        "soul": {
          "cost": 4,
          "name": "キバラッシュ",
          "text": "敵単体に地属性の物理小～中ダメージを2回に分けて与え、自分の会心率を2ターンの間5%アップする"
        },
        "tags": [
          "07",
          "09",
          "26",
          "32",
          "36",
          "46",
          "57"
        ],
        "actor": {
          "id": "t-kiba",
          "name": "モブキバ",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 206,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 296,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "133:element",
          "target": "133",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "134",
      "name": "モブククリ",
      "image": "figene/47.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 180,
      "def": 180,
      "attribute": "風",
      "tags": [
        "09",
        "26",
        "32",
        "36",
        "46",
        "57",
        "59"
      ],
      "soulSkill": {
        "name": "ククリスピン",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇属性の物理中ダメージを与え、自分のATKを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/47.png",
        "rarity": "SSR",
        "statsText": "SPD +3",
        "traitText": "毒耐性 +10%",
        "soul": {
          "cost": 5,
          "name": "ククリスピン",
          "text": "敵単体に闇属性の物理中ダメージを与え、自分のATKを2ターンの間15%アップする"
        },
        "tags": [
          "02",
          "09",
          "26",
          "32",
          "36",
          "46",
          "57",
          "59"
        ],
        "actor": {
          "id": "t-kukuri",
          "name": "モブククリ",
          "category": "elite",
          "attribute": "風",
          "role": "physical",
          "atk": 251,
          "mag": 224,
          "def": 208,
          "res": 217,
          "spd": 367,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0.22,
            "光": -0.08,
            "闇": 0
          },
          "evasion": 0.1,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "134:element",
          "target": "134",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "199",
        "160",
        "mq:eventfig/31",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "135",
      "name": "モブタフネス",
      "image": "figene/48.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 195,
      "def": 225,
      "attribute": "地",
      "tags": [
        "09",
        "26",
        "32",
        "35",
        "39",
        "46",
        "57"
      ],
      "soulSkill": {
        "name": "タフガード",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFとMNDを2ターンの間20%アップし、状態異常耐性を30%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/48.png",
        "rarity": "UR",
        "statsText": "HP +15",
        "traitText": "物理ダメージ軽減 +3%",
        "soul": {
          "cost": 6,
          "name": "タフガード",
          "text": "味方全体のDEFとMNDを2ターンの間20%アップし、状態異常耐性を30%アップする"
        },
        "tags": [
          "09",
          "26",
          "32",
          "35",
          "39",
          "46",
          "57"
        ],
        "actor": {
          "id": "t-tough",
          "name": "モブタフネス",
          "category": "elite",
          "attribute": "地",
          "role": "physical",
          "atk": 242,
          "mag": 224,
          "def": 273,
          "res": 217,
          "spd": 241,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.5800000000000001,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": -0.08,
            "水": 0,
            "雷": 0,
            "地": 0.22,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "135:element",
          "target": "135",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "136",
      "name": "モブヒスイ",
      "image": "figene/49.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "闇",
      "tags": [
        "09",
        "26",
        "32",
        "37",
        "46",
        "57",
        "05"
      ],
      "soulSkill": {
        "name": "ヒスイバリア",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFとMNDを2ターンの間20%アップし、魔法ダメージ軽減を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/49.png",
        "rarity": "SSR",
        "statsText": "MP +10",
        "traitText": "魔法ダメージ軽減 +3%",
        "soul": {
          "cost": 5,
          "name": "ヒスイバリア",
          "text": "味方全体のDEFとMNDを2ターンの間20%アップし、魔法ダメージ軽減を5%アップする"
        },
        "tags": [
          "05",
          "09",
          "26",
          "32",
          "37",
          "46",
          "57"
        ],
        "actor": {
          "id": "t-hisui",
          "name": "モブヒスイ",
          "category": "elite",
          "attribute": "闇",
          "role": "magic",
          "atk": 224,
          "mag": 278,
          "def": 217,
          "res": 265,
          "spd": 319,
          "statusResist": {
            "poison": 0.52,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.08,
            "風": 0,
            "光": 0,
            "闇": 0.22
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "136:element",
          "target": "136",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001"
      ]
    },
    {
      "id": "137",
      "name": "モブリュウゴウ",
      "image": "figene/50.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 190,
      "def": 165,
      "attribute": "火",
      "tags": [
        "09",
        "26",
        "32",
        "35",
        "38",
        "46",
        "49"
      ],
      "soulSkill": {
        "name": "リュウパンチ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/50.png",
        "rarity": "SSR",
        "statsText": "ATK +5",
        "traitText": "火属性与ダメージ +5%",
        "soul": {
          "cost": 5,
          "name": "リュウパンチ",
          "text": "敵単体に火属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする"
        },
        "tags": [
          "09",
          "26",
          "32",
          "35",
          "38",
          "46",
          "49",
          "57"
        ],
        "actor": {
          "id": "t-ryugo",
          "name": "モブリュウゴウ",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 278,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 337,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "137:family",
          "target": "137",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "38"
            },
            {
              "tag": "38"
            }
          ],
          "label": "ドラゴン × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "137:element",
          "target": "137",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "138",
      "name": "モブマグトカゲ",
      "image": "figene/51.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 130,
      "def": 105,
      "attribute": "火",
      "tags": [
        "09",
        "38",
        "47",
        "49",
        "59"
      ],
      "soulSkill": {
        "name": "マグテイル",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のATKを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理小～中ダメージを与え、自分の会心率を2ターンの間8%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/51.png",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "火属性与ダメージ +3%",
        "soul": {
          "cost": 4,
          "name": "マグテイル",
          "text": "敵単体に火属性の物理小～中ダメージを与え、自分の会心率を2ターンの間8%アップする"
        },
        "tags": [
          "03",
          "09",
          "38",
          "47",
          "49",
          "59"
        ],
        "actor": {
          "id": "m-lizard",
          "name": "モブマグトカゲ",
          "category": "normal",
          "attribute": "火",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 281,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.37,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0.15,
            "水": -0.1,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "マグマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "火",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/10",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/39",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "139",
      "name": "モブヒートロック",
      "image": "figene/52.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "火",
      "tags": [
        "09",
        "39",
        "47",
        "03"
      ],
      "soulSkill": {
        "name": "ヒートパンチ",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理小～中ダメージを与え、自分のDEFを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/52.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "火属性ダメージ軽減 +3%",
        "soul": {
          "cost": 4,
          "name": "ヒートパンチ",
          "text": "敵単体に火属性の物理小～中ダメージを与え、自分のDEFを2ターンの間15%アップする"
        },
        "tags": [
          "03",
          "09",
          "39",
          "47"
        ],
        "actor": {
          "id": "m-heatrock",
          "name": "モブヒートロック",
          "category": "normal",
          "attribute": "火",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 180,
          "res": 156,
          "spd": 211,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.37,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0.15,
            "水": -0.1,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "マグマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "火",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/39",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "140",
      "name": "モブヒノデビ",
      "image": "figene/53.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 100,
      "def": 115,
      "attribute": "火",
      "tags": [
        "09",
        "27",
        "47",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "ヒノステップ",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDと回避率を2ターンの間20%アップし、火属性与ダメージを10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/53.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "回避率 +1%",
        "soul": {
          "cost": 4,
          "name": "ヒノステップ",
          "text": "自分のSPDと回避率を2ターンの間20%アップし、火属性与ダメージを10%アップする"
        },
        "tags": [
          "03",
          "09",
          "27",
          "47",
          "50",
          "60"
        ],
        "actor": {
          "id": "m-hinodevi",
          "name": "モブヒノデビ",
          "category": "normal",
          "attribute": "火",
          "role": "magic",
          "atk": 184,
          "mag": 199,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.37,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0.15,
            "水": -0.1,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ホノマ",
              "kind": "single",
              "power": 0.9,
              "skillElement": "火",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/39",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "141",
      "name": "モブボムスロー",
      "image": "figene/54.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "火",
      "tags": [
        "09",
        "35",
        "47",
        "60",
        "03"
      ],
      "soulSkill": {
        "name": "ボムアーチ",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理小～中ダメージを与え、DEFを2ターンの間10%ダウンさせる。この攻撃はダメージ軽減を20%無視する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/54.png",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "火属性与ダメージ +3%",
        "soul": {
          "cost": 4,
          "name": "ボムアーチ",
          "text": "敵単体に火属性の物理小～中ダメージを与え、DEFを2ターンの間10%ダウンさせる。この攻撃はダメージ軽減を20%無視する"
        },
        "tags": [
          "03",
          "09",
          "35",
          "47",
          "60"
        ],
        "actor": {
          "id": "m-bombthrow",
          "name": "モブボムスロー",
          "category": "normal",
          "attribute": "火",
          "role": "magic",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.37,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0.15,
            "水": -0.1,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "クラッシュボム",
              "kind": "aoe",
              "power": 0.62,
              "skillElement": "無",
              "skillType": "magic",
              "v134Formal": true
            },
            {
              "special": "ホノマ",
              "kind": "single",
              "power": 0.9,
              "skillElement": "火",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/39",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "142",
      "name": "モブホノテイル",
      "image": "figene/55.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 150,
      "def": 130,
      "attribute": "火",
      "tags": [
        "09",
        "27",
        "37",
        "47",
        "03"
      ],
      "soulSkill": {
        "name": "ホノスピン",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/55.png",
        "rarity": "SSR",
        "statsText": "ATK +5",
        "traitText": "火属性与ダメージ +5%",
        "soul": {
          "cost": 5,
          "name": "ホノスピン",
          "text": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "03",
          "09",
          "27",
          "37",
          "47"
        ],
        "actor": {
          "id": "m-honotail",
          "name": "モブホノテイル",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 325,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "マグマソード",
              "kind": "single",
              "power": 1.1,
              "skillElement": "火",
              "skillType": "physical",
              "v134Formal": true
            },
            {
              "special": "ファストビート",
              "kind": "burnSingle",
              "power": 0.78,
              "chance": 0.25,
              "skillElement": "火",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/39",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "143",
      "name": "モブヒノタビ",
      "image": "figene/56.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 190,
      "def": 165,
      "attribute": "火",
      "tags": [
        "09",
        "32",
        "37",
        "47",
        "60",
        "03"
      ],
      "soulSkill": {
        "name": "ヒノリング",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/56.png",
        "rarity": "SSR",
        "statsText": "MAG +5",
        "traitText": "火属性魔法与ダメージ +10%",
        "soul": {
          "cost": 5,
          "name": "ヒノリング",
          "text": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "03",
          "09",
          "32",
          "37",
          "47",
          "60"
        ],
        "actor": {
          "id": "m-hinotabi",
          "name": "モブヒノタビ",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "143:element",
          "target": "143",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "144",
      "name": "モブブリザード",
      "image": "figene/57.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "水",
      "tags": [
        "09",
        "32",
        "36",
        "40",
        "47",
        "57",
        "31"
      ],
      "soulSkill": {
        "name": "ブリザガード",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFとMNDを2ターンの間20%アップし、火属性ダメージ軽減を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/57.png",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "水属性ダメージ軽減 +5%",
        "soul": {
          "cost": 5,
          "name": "ブリザガード",
          "text": "味方全体のDEFとMNDを2ターンの間20%アップし、火属性ダメージ軽減を10%アップする"
        },
        "tags": [
          "09",
          "31",
          "32",
          "36",
          "40",
          "47",
          "57"
        ],
        "actor": {
          "id": "m-blizzard",
          "name": "モブブリザード",
          "category": "elite",
          "attribute": "水",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "144:element",
          "target": "144",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "145",
      "name": "モブフレイム",
      "image": "figene/58.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 190,
      "def": 165,
      "attribute": "火",
      "tags": [
        "09",
        "32",
        "36",
        "40",
        "47",
        "56",
        "03"
      ],
      "soulSkill": {
        "name": "フレイムダッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/58.png",
        "rarity": "SSR",
        "statsText": "ATK +5",
        "traitText": "火属性与ダメージ +5%",
        "soul": {
          "cost": 5,
          "name": "フレイムダッシュ",
          "text": "敵単体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "03",
          "09",
          "32",
          "36",
          "40",
          "47",
          "56"
        ],
        "actor": {
          "id": "m-flame",
          "name": "モブフレイム",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "145:element",
          "target": "145",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "146",
      "name": "モブフレザード",
      "image": "figene/59.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 210,
      "def": 210,
      "attribute": "水",
      "tags": [
        "09",
        "27",
        "32",
        "35",
        "47",
        "56",
        "03",
        "31"
      ],
      "soulSkill": {
        "name": "フレアイス",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に火属性と水属性の魔法中ダメージを与え、ATKとSPDを2ターンの間10%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/59.png",
        "rarity": "UR",
        "statsText": "ATK +3 & DEF +3%",
        "traitText": "火属性と水属性の与ダメージ +3%",
        "soul": {
          "cost": 6,
          "name": "フレアイス",
          "text": "敵全体に火属性と水属性の魔法中ダメージを与え、ATKとSPDを2ターンの間10%ダウンさせる"
        },
        "tags": [
          "03",
          "09",
          "27",
          "31",
          "32",
          "35",
          "47",
          "56"
        ],
        "actor": {
          "id": "m-frezard",
          "name": "モブフレザード",
          "category": "elite",
          "attribute": "水・火",
          "role": "physical",
          "atk": 242,
          "mag": 247,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0.1,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "146:element",
          "target": "146",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "147",
      "name": "モブマグバスター",
      "image": "figene/60.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 185,
      "def": 160,
      "attribute": "火",
      "tags": [
        "09",
        "26",
        "32",
        "35",
        "39",
        "47",
        "59"
      ],
      "soulSkill": {
        "name": "マグキャノン",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          },
          {
            "type": "break",
            "target": "enemy",
            "value": 10
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。選んだ相手1体のDEFを10下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/60.png",
        "rarity": "SSR",
        "statsText": "ATK +5",
        "traitText": "火属性与ダメージ +3% & 会心率1%",
        "soul": {
          "cost": 5,
          "name": "マグキャノン",
          "text": "敵全体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "03",
          "09",
          "26",
          "32",
          "35",
          "39",
          "47",
          "59"
        ],
        "actor": {
          "id": "m2-buster",
          "name": "モブマグバスター",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 292,
          "mag": 224,
          "def": 243,
          "res": 226,
          "spd": 307,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "147:element",
          "target": "147",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "148",
      "name": "モブヨーガンスライム",
      "image": "figene/61.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 160,
      "def": 185,
      "attribute": "火",
      "tags": [
        "09",
        "17",
        "32",
        "39",
        "47",
        "50",
        "56"
      ],
      "soulSkill": {
        "name": "ヨーガンプレス",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に火属性の物理小～中ダメージを与え、自分のDEFを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/61.png",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "物理ダメージ軽減 +3% & 会心率1%",
        "soul": {
          "cost": 5,
          "name": "ヨーガンプレス",
          "text": "敵全体に火属性の物理小～中ダメージを与え、自分のDEFを2ターンの間20%アップする"
        },
        "tags": [
          "03",
          "09",
          "17",
          "32",
          "39",
          "47",
          "50",
          "56",
          "60"
        ],
        "actor": {
          "id": "m2-yogan",
          "name": "モブヨーガンスライム",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 224,
          "mag": 265,
          "def": 217,
          "res": 239,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "148:family",
          "target": "148",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "17"
            },
            {
              "tag": "17"
            }
          ],
          "label": "スライム × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "148:element",
          "target": "148",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "79",
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "149",
      "name": "モブピコダーク",
      "image": "figene/62.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 130,
      "attribute": "闇",
      "tags": [
        "09",
        "27",
        "37",
        "48",
        "60"
      ],
      "soulSkill": {
        "name": "ピコシャドウ",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemy",
            "value": 20
          }
        ],
        "description": "選んだ相手1体のATKを20下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇属性の魔法小～中ダメージを与える。40%で毒にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/62.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "闇属性耐性 +3% & 回避率1%",
        "soul": {
          "cost": 4,
          "name": "ピコシャドウ",
          "text": "敵単体に闇属性の魔法小～中ダメージを与える。40%で毒にする"
        },
        "tags": [
          "05",
          "09",
          "27",
          "37",
          "48",
          "60"
        ],
        "actor": {
          "id": "c-picodark",
          "name": "モブピコダーク",
          "category": "normal",
          "attribute": "闇",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.32999999999999996,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.25
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.1,
            "風": 0,
            "光": 0,
            "闇": 0.15
          },
          "skills": [
            {
              "special": "ミラマソード",
              "kind": "single",
              "power": 1.06,
              "skillElement": "闇",
              "skillType": "physical",
              "v134Formal": true
            },
            {
              "special": "リピートイントロ",
              "kind": "poisonSingle",
              "power": 0.66,
              "chance": 0.18,
              "skillElement": "闇",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "99",
        "104",
        "136",
        "157",
        "161",
        "166",
        "spboss006",
        "spboss007",
        "spboss012",
        "spboss017",
        "spboss034",
        "mq:eventfig/09",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "150",
      "name": "モブデビルスライム",
      "image": "figene/63.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 100,
      "def": 125,
      "attribute": "水",
      "tags": [
        "09",
        "17",
        "27",
        "37",
        "48"
      ],
      "soulSkill": {
        "name": "デビスライド",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法小ダメージを与える。30%で毒にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/63.png",
        "rarity": "SR",
        "statsText": "MND +3",
        "traitText": "闇属性与えダメージ +3% & 回避率1%",
        "soul": {
          "cost": 4,
          "name": "デビスライド",
          "text": "敵全体に闇属性の魔法小ダメージを与える。30%で毒にする"
        },
        "tags": [
          "02",
          "09",
          "17",
          "27",
          "37",
          "48",
          "50",
          "60"
        ],
        "actor": {
          "id": "c-devilslime",
          "name": "モブデビルスライム",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプマチューン",
              "kind": "single",
              "power": 1.02,
              "skillElement": "水",
              "skillType": "magic",
              "v134Formal": true
            },
            {
              "special": "チルローファイ",
              "kind": "sleepSingle",
              "power": 0.66,
              "chance": 0.18,
              "skillElement": "水",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "148",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:spbossfig/38",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/22",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "151",
      "name": "モブプニライダー",
      "image": "figene/64.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 130,
      "def": 105,
      "attribute": "水",
      "tags": [
        "09",
        "17",
        "27",
        "40",
        "48"
      ],
      "soulSkill": {
        "name": "プニライド",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemies",
            "value": 20
          }
        ],
        "description": "相手全体のATKを20下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のSPDを2ターンの間10%ダウンさせ、自分のSPDを10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/64.png",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "会心率 +1% & 回避率 +1%",
        "soul": {
          "cost": 4,
          "name": "プニライド",
          "text": "敵全体のSPDを2ターンの間10%ダウンさせ、自分のSPDを10%アップする"
        },
        "tags": [
          "02",
          "09",
          "17",
          "27",
          "40",
          "48",
          "50",
          "55"
        ],
        "actor": {
          "id": "c-punirider",
          "name": "モブプニライダー",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 271,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプマソード",
              "kind": "single",
              "power": 1.06,
              "skillElement": "水",
              "skillType": "physical",
              "v134Formal": true
            },
            {
              "special": "チルローファイ",
              "kind": "sleepSingle",
              "power": 0.66,
              "chance": 0.18,
              "skillElement": "水",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "148",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:spbossfig/38",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/22",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "152",
      "name": "モブミニブック",
      "image": "figene/65.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 135,
      "def": 145,
      "attribute": "光",
      "tags": [
        "09",
        "27",
        "33",
        "37",
        "48",
        "58",
        "08"
      ],
      "soulSkill": {
        "name": "ブックトラップ",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間10%アップする。発動後、自分の必殺技CTを1ターン短縮する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/65.png",
        "rarity": "SSR",
        "statsText": "MND +5",
        "traitText": "魔法会心率 +3%",
        "soul": {
          "cost": 5,
          "name": "ブックトラップ",
          "text": "敵単体に闇属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間10%アップする。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "tags": [
          "08",
          "09",
          "27",
          "33",
          "37",
          "48",
          "58"
        ],
        "actor": {
          "id": "c-minibook",
          "name": "モブミニブック",
          "category": "normal",
          "attribute": "光",
          "role": "magic",
          "atk": 184,
          "mag": 202,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.25
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.15,
            "闇": -0.1
          },
          "skills": [
            {
              "special": "ネオマニプール",
              "kind": "single",
              "power": 1.02,
              "skillElement": "光",
              "skillType": "magic",
              "v134Formal": true
            },
            {
              "special": "ノイズスクラッチ",
              "kind": "confuseSingle",
              "power": 0.66,
              "chance": 0.18,
              "skillElement": "光",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "30",
        "165",
        "184",
        "205",
        "spboss010",
        "spboss033",
        "mq:spbossfig/41",
        "mq:spbossfig/42"
      ]
    },
    {
      "id": "153",
      "name": "モブコクピット",
      "image": "figene/66.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "闇",
      "tags": [
        "09",
        "36",
        "39",
        "48",
        "50",
        "05"
      ],
      "soulSkill": {
        "name": "エマージェンシー",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFとMNDを2ターンの間15%アップし、状態異常耐性を25%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/66.png",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "物理ダメージ軽減 +3%",
        "soul": {
          "cost": 5,
          "name": "エマージェンシー",
          "text": "味方全体のDEFとMNDを2ターンの間15%アップし、状態異常耐性を25%アップする"
        },
        "tags": [
          "05",
          "09",
          "36",
          "39",
          "48",
          "50"
        ],
        "actor": {
          "id": "c-cockpit",
          "name": "モブコクピット",
          "category": "normal",
          "attribute": "闇",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 171,
          "res": 171,
          "spd": 251,
          "statusResist": {
            "poison": 0.32999999999999996,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.25
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.1,
            "風": 0,
            "光": 0,
            "闇": 0.15
          },
          "skills": [
            {
              "special": "ミラマソード",
              "kind": "single",
              "power": 1.06,
              "skillElement": "闇",
              "skillType": "physical",
              "v134Formal": true
            },
            {
              "special": "リピートイントロ",
              "kind": "poisonSingle",
              "power": 0.66,
              "chance": 0.18,
              "skillElement": "闇",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "99",
        "104",
        "136",
        "157",
        "161",
        "166",
        "spboss006",
        "spboss007",
        "spboss012",
        "spboss017",
        "spboss034",
        "mq:eventfig/09",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "154",
      "name": "モブアサシン",
      "image": "figene/67.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 125,
      "def": 140,
      "attribute": "闇",
      "tags": [
        "09",
        "26",
        "34",
        "35",
        "48",
        "57",
        "02"
      ],
      "soulSkill": {
        "name": "アサシンステップ",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇属性の物理中～大ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/67.png",
        "rarity": "SSR",
        "statsText": "SPD +5",
        "traitText": "魔法会心率 +3%",
        "soul": {
          "cost": 5,
          "name": "アサシンステップ",
          "text": "敵単体に闇属性の物理中～大ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする"
        },
        "tags": [
          "02",
          "09",
          "26",
          "34",
          "35",
          "48",
          "57"
        ],
        "actor": {
          "id": "c-assassin",
          "name": "モブアサシン",
          "category": "normal",
          "attribute": "闇",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 291,
          "statusResist": {
            "poison": 0.32999999999999996,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.25
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.1,
            "風": 0,
            "光": 0,
            "闇": 0.15
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "99",
        "104",
        "136",
        "157",
        "161",
        "166",
        "spboss006",
        "spboss007",
        "spboss012",
        "spboss017",
        "spboss034",
        "mq:eventfig/09",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "155",
      "name": "モブヘルシャドウ",
      "image": "figene/68.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 155,
      "def": 130,
      "attribute": "火",
      "tags": [
        "09",
        "23",
        "26",
        "36",
        "48",
        "57",
        "03"
      ],
      "soulSkill": {
        "name": "ヘルスニーク",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/68.png",
        "rarity": "SSR",
        "statsText": "ATK +5",
        "traitText": "火属性ダメージ軽減 +10%",
        "soul": {
          "cost": 5,
          "name": "ヘルスニーク",
          "text": "敵単体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "03",
          "09",
          "23",
          "26",
          "36",
          "48",
          "57"
        ],
        "actor": {
          "id": "c-hellshadow",
          "name": "モブヘルシャドウ",
          "category": "normal",
          "attribute": "火",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 276,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.37,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0.15,
            "水": -0.1,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "マグマソード",
              "kind": "single",
              "power": 1.06,
              "skillElement": "火",
              "skillType": "physical",
              "v134Formal": true
            },
            {
              "special": "ファストビート",
              "kind": "burnSingle",
              "power": 0.66,
              "chance": 0.18,
              "skillElement": "火",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/39",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "156",
      "name": "モブミラヘルド",
      "image": "figene/69.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 190,
      "def": 165,
      "attribute": "火",
      "tags": [
        "09",
        "23",
        "26",
        "32",
        "36",
        "48",
        "49"
      ],
      "soulSkill": {
        "name": "ヘルドライブ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/69.png",
        "rarity": "SSR",
        "statsText": "ATK +5 % SPD +3",
        "traitText": "火属性会心率 +7%",
        "soul": {
          "cost": 5,
          "name": "ヘルドライブ",
          "text": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "03",
          "09",
          "23",
          "26",
          "32",
          "36",
          "48",
          "49",
          "54",
          "56"
        ],
        "actor": {
          "id": "c-miraheld",
          "name": "モブミラヘルド",
          "category": "normal",
          "attribute": "火",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.37,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0.15,
            "水": -0.1,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0.1,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "156:element",
          "target": "156",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "157",
      "name": "モブキラウィッチ",
      "image": "figene/70.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 190,
      "attribute": "闇",
      "tags": [
        "09",
        "27",
        "32",
        "37",
        "48",
        "50",
        "58"
      ],
      "soulSkill": {
        "name": "キラスペル",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemy",
            "value": 25
          }
        ],
        "description": "選んだ相手1体のATKを25下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇属性の魔法中ダメージを与える。40%で毒にする。発動後、自分の必殺技CTを1ターン短縮する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/70.png",
        "rarity": "SSR",
        "statsText": "MND +5 & MP+7",
        "traitText": "魔法会心率 +3%",
        "soul": {
          "cost": 5,
          "name": "キラスペル",
          "text": "敵単体に闇属性の魔法中ダメージを与える。40%で毒にする。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "tags": [
          "05",
          "09",
          "27",
          "32",
          "37",
          "48",
          "50",
          "58"
        ],
        "actor": {
          "id": "c-killwitch",
          "name": "モブキラウィッチ",
          "category": "elite",
          "attribute": "闇",
          "role": "magic",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.52,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.08,
            "風": 0,
            "光": 0,
            "闇": 0.22
          },
          "evasion": 0,
          "damageReduction": 0.1,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "157:element",
          "target": "157",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001"
      ]
    },
    {
      "id": "158",
      "name": "モブララウィッチ",
      "image": "figene/71.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 190,
      "attribute": "火",
      "tags": [
        "09",
        "27",
        "32",
        "37",
        "40",
        "48",
        "50"
      ],
      "soulSkill": {
        "name": "ララスペル",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemy",
            "value": 25
          }
        ],
        "description": "選んだ相手1体のATKを25下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇属性の魔法中ダメージを与える。40%で毒にする。発動後、自分の必殺技CTを1ターン短縮する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/71.png",
        "rarity": "SSR",
        "statsText": "MND +5 & MP +7",
        "traitText": "魔法会心率 +3%",
        "soul": {
          "cost": 5,
          "name": "ララスペル",
          "text": "敵単体に闇属性の魔法中ダメージを与える。40%で毒にする。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "tags": [
          "03",
          "09",
          "27",
          "32",
          "37",
          "40",
          "48",
          "50",
          "58"
        ],
        "actor": {
          "id": "c-succubus",
          "name": "モブララウィッチ",
          "category": "elite",
          "attribute": "火",
          "role": "magic",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0.1,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "158:element",
          "target": "158",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "202",
      "name": "グラディモブ",
      "image": "figene/72.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 200,
      "def": 225,
      "attribute": "火",
      "tags": [
        "09",
        "32",
        "34",
        "36",
        "48",
        "50",
        "55",
        "59",
        "03"
      ],
      "soulSkill": {
        "name": "クイックドロー",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 30
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを30上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDを2ターンの間20%アップし、会心率を8%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figene/72.png",
        "rarity": "UR",
        "statsText": "MND +5 & SPD +7",
        "traitText": "銃装備時、会心率 +5% & 命中率+80%",
        "soul": {
          "cost": 6,
          "name": "クイックドロー",
          "text": "味方全体のSPDを2ターンの間20%アップし、会心率を8%アップする"
        },
        "tags": [
          "03",
          "09",
          "29",
          "32",
          "34",
          "36",
          "48",
          "50",
          "55",
          "59"
        ],
        "actor": {
          "id": "boss-gladi",
          "name": "グラディモブ",
          "category": "boss",
          "attribute": "火",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.9199999999999999,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0.28,
            "水": -0.05,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0.1,
          "damageReduction": 0.12,
          "actions": 3,
          "latestEncounterOverride": {
            "world": "demonCastle",
            "area": 1,
            "actions": 3
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "202:element",
          "target": "202",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "159",
      "name": "モブホーク",
      "image": "figboss/01.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 160,
      "def": 175,
      "attribute": "風",
      "tags": [
        "09",
        "25",
        "32",
        "34",
        "41",
        "50",
        "55"
      ],
      "soulSkill": {
        "name": "ホークストーム",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に風属性の物理中ダメージを与え、自分のSPDと回避率を2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/01.png",
        "rarity": "SSR",
        "statsText": "ATK +2 & SPD +2 & MND +2",
        "traitText": "風属性耐性+10%",
        "soul": {
          "cost": 5,
          "name": "ホークストーム",
          "text": "敵単体に風属性の物理中ダメージを与え、自分のSPDと回避率を2ターンの間10%アップする"
        },
        "tags": [
          "04",
          "09",
          "25",
          "32",
          "34",
          "41",
          "50",
          "55"
        ],
        "actor": {
          "id": "boss-hawk",
          "name": "モブホーク",
          "category": "boss",
          "attribute": "風",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0.28,
            "光": -0.05,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "159:element",
          "target": "159",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "199",
        "160",
        "mq:eventfig/31",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "160",
      "name": "モブホークⅡ",
      "image": "figboss/02.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 300,
      "attribute": "風",
      "tags": [
        "09",
        "25",
        "26",
        "32",
        "34",
        "41",
        "50",
        "55",
        "04"
      ],
      "soulSkill": {
        "name": "ホークテンペスト",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に風属性の物理中～大ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/02.png",
        "rarity": "UR",
        "statsText": "ATK +5 & SPD +10 & MND +2",
        "traitText": "風属性耐性+15%",
        "soul": {
          "cost": 6,
          "name": "ホークテンペスト",
          "text": "敵単体に風属性の物理中～大ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする"
        },
        "tags": [
          "04",
          "09",
          "25",
          "26",
          "32",
          "34",
          "41",
          "50",
          "55"
        ],
        "actor": {
          "id": "boss-hawk2",
          "name": "モブホークⅡ",
          "category": "boss",
          "attribute": "風",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0.28,
            "光": -0.05,
            "闇": 0
          },
          "evasion": 0.1,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "160:evolution",
          "target": "160",
          "fromClass": "middle",
          "materials": [
            {
              "id": "159"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "モブホーク ＋ 風属性",
          "basis": "原典のⅡ形態・変身系列を優先"
        },
        {
          "id": "160:element",
          "target": "160",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "161",
      "name": "ミラモブ",
      "image": "figboss/03.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 190,
      "def": 165,
      "attribute": "闇",
      "tags": [
        "09",
        "23",
        "25",
        "37",
        "42",
        "50",
        "54"
      ],
      "soulSkill": {
        "name": "ミラポイズン",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/03.png",
        "rarity": "SSR",
        "statsText": "MAG+3 & MP +15",
        "traitText": "闇属性耐性+10 & 回避率+3%",
        "soul": {
          "cost": 5,
          "name": "ミラポイズン",
          "text": "敵単体に闇属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "05",
          "09",
          "23",
          "25",
          "37",
          "42",
          "50",
          "54"
        ],
        "actor": {
          "id": "boss-mira",
          "name": "ミラモブ",
          "category": "boss",
          "attribute": "闇",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.8300000000000001,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.05,
            "風": 0,
            "光": 0,
            "闇": 0.28
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "161:element",
          "target": "161",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001"
      ]
    },
    {
      "id": "162",
      "name": "ミラモブⅡ",
      "image": "figboss/04.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 300,
      "def": 300,
      "attribute": "闇",
      "tags": [
        "09",
        "23",
        "25",
        "36",
        "37",
        "42",
        "50",
        "54",
        "57"
      ],
      "soulSkill": {
        "name": "ミラナイトメア",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法中ダメージを与え、30%で毒または混乱にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/04.png",
        "rarity": "UR",
        "statsText": "MAG+3 & MP +15 & MND +3",
        "traitText": "毒耐性+20 & 回避率+3%",
        "soul": {
          "cost": 6,
          "name": "ミラナイトメア",
          "text": "敵全体に闇属性の魔法中ダメージを与え、30%で毒または混乱にする"
        },
        "tags": [
          "05",
          "09",
          "23",
          "25",
          "36",
          "37",
          "42",
          "50",
          "54",
          "57"
        ],
        "actor": {
          "id": "boss-mira2-d2",
          "name": "ミラモブⅡ",
          "category": "boss",
          "attribute": "闇",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.8300000000000001,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.05,
            "風": 0,
            "光": 0,
            "闇": 0.28
          },
          "evasion": 0.05,
          "damageReduction": 0.05,
          "actions": 2,
          "latestEncounterOverride": {
            "world": "desert2",
            "area": 0,
            "actions": 2,
            "damageReduction": 0.05,
            "evasion": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "162:evolution",
          "target": "162",
          "fromClass": "middle",
          "materials": [
            {
              "id": "161"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "ミラモブ ＋ 闇属性",
          "basis": "原典のⅡ形態・変身系列を優先"
        },
        {
          "id": "162:element",
          "target": "162",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "163",
      "name": "モブガーディアン",
      "image": "figboss/05.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "地",
      "tags": [
        "09",
        "25",
        "32",
        "35",
        "39",
        "40",
        "43"
      ],
      "soulSkill": {
        "name": "ガードウォール",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のダメージ軽減を2ターンの間8%アップし、ひるみ耐性を35%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/05.png",
        "rarity": "SSR",
        "statsText": "DEF +5 & MND +1",
        "traitText": "ダメージ軽減+2%",
        "soul": {
          "cost": 5,
          "name": "ガードウォール",
          "text": "味方全体のダメージ軽減を2ターンの間8%アップし、ひるみ耐性を35%アップする"
        },
        "tags": [
          "09",
          "25",
          "32",
          "35",
          "39",
          "40",
          "43"
        ],
        "actor": {
          "id": "boss-guardian",
          "name": "モブガーディアン",
          "category": "boss",
          "attribute": "地",
          "role": "physical",
          "atk": 362,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.99,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": -0.05,
            "水": 0,
            "雷": 0,
            "地": 0.28,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "163:element",
          "target": "163",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "164",
      "name": "モブガーディアンⅡ",
      "image": "figboss/06.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 310,
      "attribute": "無",
      "tags": [
        "09",
        "25",
        "26",
        "32",
        "35",
        "39",
        "40",
        "43",
        "59"
      ],
      "soulSkill": {
        "name": "ガードフォート",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のDEFを2ターンの間55%アップし、物理ダメージ軽減を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/06.png",
        "rarity": "UR",
        "statsText": "DEF +5 & HP +20",
        "traitText": "ダメージ軽減+3%",
        "soul": {
          "cost": 6,
          "name": "ガードフォート",
          "text": "自分のDEFを2ターンの間55%アップし、物理ダメージ軽減を10%アップする"
        },
        "tags": [
          "09",
          "25",
          "26",
          "29",
          "32",
          "35",
          "39",
          "40",
          "43",
          "59"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "164:evolution",
          "target": "164",
          "fromClass": "middle",
          "materials": [
            {
              "id": "163"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "モブガーディアン ＋ 地属性",
          "basis": "原典のⅡ形態・変身系列を優先"
        },
        {
          "id": "164:element",
          "target": "164",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "165",
      "name": "モブネオンバルス",
      "image": "figboss/07.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 230,
      "def": 195,
      "attribute": "光",
      "tags": [
        "09",
        "25",
        "32",
        "36",
        "44",
        "50",
        "58",
        "08",
        "31"
      ],
      "soulSkill": {
        "name": "ネオンバースト",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemies",
            "value": 30
          }
        ],
        "description": "相手全体のATKを30下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のSPDを2ターンの間20%ダウンさせ、自分のSPDを20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/07.png",
        "rarity": "UR",
        "statsText": "MAG +5 & HP +20",
        "traitText": "光属性耐性 +10% & 会心率 +1%",
        "soul": {
          "cost": 6,
          "name": "ネオンバースト",
          "text": "敵全体のSPDを2ターンの間20%ダウンさせ、自分のSPDを20%アップする"
        },
        "tags": [
          "08",
          "09",
          "25",
          "31",
          "32",
          "36",
          "44",
          "50",
          "58"
        ],
        "actor": {
          "id": "boss-neon",
          "name": "モブネオンバルス",
          "category": "boss",
          "attribute": "光",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.28,
            "闇": -0.05
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "165:element",
          "target": "165",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "190",
        "195",
        "170",
        "176",
        "215",
        "216",
        "spboss013"
      ]
    },
    {
      "id": "166",
      "name": "モブエース",
      "image": "figboss/08.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 230,
      "def": 195,
      "attribute": "闇",
      "tags": [
        "09",
        "25",
        "32",
        "34",
        "36",
        "44",
        "51",
        "59",
        "05"
      ],
      "soulSkill": {
        "name": "エースブレイド",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 30
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "自身のATKを30上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に光属性の物理中～大ダメージを与え、自分のSPDを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/08.png",
        "rarity": "UR",
        "statsText": "MAG +5 & HP +20",
        "traitText": "光属性与ダメージ +5% & 回避率 +1%",
        "soul": {
          "cost": 6,
          "name": "エースブレイド",
          "text": "敵単体に光属性の物理中～大ダメージを与え、自分のSPDを2ターンの間20%アップする"
        },
        "tags": [
          "05",
          "08",
          "09",
          "25",
          "32",
          "34",
          "36",
          "44",
          "51",
          "59"
        ],
        "actor": {
          "id": "boss-ace",
          "name": "モブエース",
          "category": "boss",
          "attribute": "闇",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.8300000000000001,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.05,
            "風": 0,
            "光": 0,
            "闇": 0.28
          },
          "skills": [
            {
              "special": "ミラマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "闇",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "166:element",
          "target": "166",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001"
      ]
    },
    {
      "id": "167",
      "name": "モブドラゴン",
      "image": "figboss/09.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 180,
      "def": 180,
      "attribute": "火",
      "tags": [
        "09",
        "25",
        "32",
        "35",
        "38",
        "47",
        "50"
      ],
      "soulSkill": {
        "name": "ドラゴンブレス",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/09.png",
        "rarity": "SSR",
        "statsText": "ATK +3 & DEF +3 & MND +2",
        "traitText": "火属性耐性+10% & 会心率+3%",
        "soul": {
          "cost": 5,
          "name": "ドラゴンブレス",
          "text": "敵単体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "03",
          "09",
          "25",
          "32",
          "35",
          "38",
          "47",
          "50",
          "56"
        ],
        "actor": {
          "id": "boss-dragon",
          "name": "モブドラゴン",
          "category": "boss",
          "attribute": "火",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.9199999999999999,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0.28,
            "水": -0.05,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0.05,
          "latestEncounterOverride": {
            "world": "magma",
            "area": 3,
            "damageReduction": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "167:family",
          "target": "167",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "38"
            },
            {
              "tag": "38"
            }
          ],
          "label": "ドラゴン × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "167:element",
          "target": "167",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "168",
      "name": "モブドラゴンⅡ",
      "image": "figboss/10.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 210,
      "def": 205,
      "attribute": "火",
      "tags": [
        "09",
        "25",
        "32",
        "34",
        "35",
        "38",
        "47",
        "50",
        "56"
      ],
      "soulSkill": {
        "name": "ドラゴンレイジ",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中～大ダメージを2回に分けて与え、自分の会心率を2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/10.png",
        "rarity": "UR",
        "statsText": "ATK +3 & DEF +3 & MND +2",
        "traitText": "火属性耐性+10% & 会心率+3%",
        "soul": {
          "cost": 6,
          "name": "ドラゴンレイジ",
          "text": "敵単体に火属性の物理中～大ダメージを2回に分けて与え、自分の会心率を2ターンの間15%アップする"
        },
        "tags": [
          "03",
          "09",
          "25",
          "32",
          "34",
          "35",
          "38",
          "47",
          "50",
          "56"
        ],
        "actor": {
          "id": "boss-dragon2",
          "name": "モブドラゴンⅡ",
          "category": "boss",
          "attribute": "火",
          "role": "physical",
          "atk": 382,
          "mag": 394,
          "def": 277,
          "res": 282,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.9199999999999999,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0.28,
            "水": -0.05,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0.05,
          "latestEncounterOverride": {
            "world": "magma2",
            "area": 3,
            "damageReduction": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "168:family",
          "target": "168",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "38"
            },
            {
              "tag": "38"
            }
          ],
          "label": "ドラゴン × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "168:element",
          "target": "168",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "169",
      "name": "モブギドラ",
      "image": "figboss/11.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "atk": 355,
      "def": 345,
      "attribute": "火",
      "tags": [
        "09",
        "25",
        "30",
        "32",
        "34",
        "35",
        "36",
        "38",
        "47",
        "50",
        "56",
        "03"
      ],
      "soulSkill": {
        "name": "トリプルブレス",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          },
          {
            "type": "break",
            "target": "enemy",
            "value": 10
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。選んだ相手1体のDEFを10下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に火属性の魔法大ダメージを与え、DEFを2ターンの間25%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/11.png",
        "rarity": "MOB",
        "statsText": "ATK +3 & DEF +3 & MND +2",
        "traitText": "火属性耐性+10% & 会心率+3%",
        "soul": {
          "cost": 7,
          "name": "トリプルブレス",
          "text": "敵全体に火属性の魔法大ダメージを与え、DEFを2ターンの間25%ダウンさせる"
        },
        "tags": [
          "03",
          "09",
          "25",
          "30",
          "32",
          "34",
          "35",
          "36",
          "38",
          "47",
          "50",
          "56"
        ],
        "actor": {
          "id": "boss-gidora",
          "name": "モブギドラ",
          "category": "boss",
          "attribute": "火",
          "role": "physical",
          "atk": 394,
          "mag": 421,
          "def": 287,
          "res": 292,
          "spd": 391,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.9199999999999999,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0.28,
            "水": -0.05,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0.11,
          "actions": 3,
          "latestEncounterOverride": {
            "world": "magma2",
            "area": 3,
            "fixedHp": 23333,
            "damageReduction": 0.11
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "MOBは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "169:family",
          "target": "169",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "38"
            },
            {
              "tag": "38"
            }
          ],
          "label": "ドラゴン × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "169:element",
          "target": "169",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "170",
      "name": "ミラモブファラオ",
      "image": "figboss/12.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "atk": 370,
      "def": 315,
      "attribute": "光",
      "tags": [
        "09",
        "23",
        "25",
        "30",
        "32",
        "36",
        "37",
        "42",
        "49",
        "50",
        "55",
        "57"
      ],
      "soulSkill": {
        "name": "ファラオカース",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法大ダメージを与え、30%で毒または混乱にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/12.png",
        "rarity": "MOB",
        "statsText": "MAG+5 & MP +15 & MND +3",
        "traitText": "全属性耐性+8 & 回避率+3%",
        "soul": {
          "cost": 7,
          "name": "ファラオカース",
          "text": "敵全体に闇属性の魔法大ダメージを与え、30%で毒または混乱にする"
        },
        "tags": [
          "08",
          "09",
          "23",
          "25",
          "30",
          "32",
          "36",
          "37",
          "42",
          "49",
          "50",
          "55",
          "57"
        ],
        "actor": {
          "id": "boss-dorafara",
          "name": "ミラモブファラオ",
          "category": "boss",
          "attribute": "光・闇",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.8300000000000001,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.95
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.05,
            "風": 0,
            "光": 0.28,
            "闇": 0.28
          },
          "evasion": 0,
          "damageReduction": 0.11,
          "actions": 3,
          "latestEncounterOverride": {
            "world": "desert2",
            "area": 3,
            "actions": 3,
            "damageReduction": 0.11
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "MOBは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "170:element",
          "target": "170",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "171",
      "name": "モブデーバフ",
      "image": "figboss/13.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 185,
      "def": 160,
      "attribute": "地",
      "tags": [
        "09",
        "23",
        "25",
        "37",
        "46",
        "57",
        "05"
      ],
      "soulSkill": {
        "name": "デバフミスト",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/13.png",
        "rarity": "SSR",
        "statsText": "MAG+3 & MP +15",
        "traitText": "状態異常耐性+3 & 闇属性耐性 +3%",
        "soul": {
          "cost": 5,
          "name": "デバフミスト",
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする"
        },
        "tags": [
          "05",
          "09",
          "23",
          "25",
          "29",
          "37",
          "46",
          "57"
        ],
        "actor": {
          "id": "boss-debuff",
          "name": "モブデーバフ",
          "category": "boss",
          "attribute": "地",
          "role": "physical",
          "atk": 330,
          "mag": 324,
          "def": 323,
          "res": 302,
          "spd": 346,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.99,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": -0.05,
            "水": 0,
            "雷": 0,
            "地": 0.28,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "171:element",
          "target": "171",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "172",
      "name": "モブデーバフ第二形態",
      "image": "figboss/14.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 305,
      "def": 285,
      "attribute": "地",
      "tags": [
        "09",
        "23",
        "25",
        "30",
        "32",
        "37",
        "46",
        "57",
        "05"
      ],
      "soulSkill": {
        "name": "デバフオーバー",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法中ダメージを与え、30%で毒または混乱にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/14.png",
        "rarity": "UR",
        "statsText": "MAG+5 & MP +20",
        "traitText": "状態異常耐性+5 & 闇属性耐性 +5%",
        "soul": {
          "cost": 6,
          "name": "デバフオーバー",
          "text": "敵全体に闇属性の魔法中ダメージを与え、30%で毒または混乱にする"
        },
        "tags": [
          "05",
          "09",
          "23",
          "25",
          "29",
          "30",
          "32",
          "37",
          "46",
          "57"
        ],
        "actor": {
          "id": "boss-debuff2",
          "name": "モブデーバフ第二形態",
          "category": "boss",
          "attribute": "地",
          "role": "physical",
          "atk": 350,
          "mag": 324,
          "def": 338,
          "res": 323,
          "spd": 354,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.99,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": -0.05,
            "水": 0,
            "雷": 0,
            "地": 0.28,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0.05,
          "damageReduction": 0.05,
          "actions": 2,
          "latestEncounterOverride": {
            "world": "tribe",
            "area": 3,
            "damageReduction": 0.05,
            "evasion": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "172:element",
          "target": "172",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "173",
      "name": "モブバーサク",
      "image": "figboss/15.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 195,
      "def": 160,
      "attribute": "地",
      "tags": [
        "09",
        "23",
        "25",
        "35",
        "46",
        "49",
        "57"
      ],
      "soulSkill": {
        "name": "バーサクラッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/15.png",
        "rarity": "SSR",
        "statsText": "ATK+3 & HP +15",
        "traitText": "物理属性ダメージ軽減 +3% & 闇属性耐性 +3%",
        "soul": {
          "cost": 5,
          "name": "バーサクラッシュ",
          "text": "敵単体に闇属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする"
        },
        "tags": [
          "05",
          "09",
          "23",
          "25",
          "29",
          "35",
          "46",
          "49",
          "57"
        ],
        "actor": {
          "id": "boss-berserk",
          "name": "モブバーサク",
          "category": "boss",
          "attribute": "地",
          "role": "physical",
          "atk": 421,
          "mag": 324,
          "def": 237,
          "res": 237,
          "spd": 435,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.99,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": -0.05,
            "水": 0,
            "雷": 0,
            "地": 0.28,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "173:element",
          "target": "173",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "174",
      "name": "モブバーサク第二形態",
      "image": "figboss/16.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 230,
      "def": 195,
      "attribute": "地",
      "tags": [
        "09",
        "23",
        "25",
        "32",
        "36",
        "46",
        "49",
        "57",
        "05"
      ],
      "soulSkill": {
        "name": "バーサクオーバー",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のATKを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇属性の物理中～大ダメージを与え、自分の会心率を2ターンの間17%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/16.png",
        "rarity": "UR",
        "statsText": "ATK+5 & HP +25",
        "traitText": "物理属性ダメージ軽減 +3% & 闇属性耐性 +3%",
        "soul": {
          "cost": 6,
          "name": "バーサクオーバー",
          "text": "敵単体に闇属性の物理中～大ダメージを与え、自分の会心率を2ターンの間17%アップする"
        },
        "tags": [
          "05",
          "09",
          "23",
          "25",
          "29",
          "32",
          "36",
          "46",
          "49",
          "57"
        ],
        "actor": {
          "id": "boss-berserk2",
          "name": "モブバーサク第二形態",
          "category": "boss",
          "attribute": "地",
          "role": "physical",
          "atk": 446,
          "mag": 324,
          "def": 247,
          "res": 242,
          "spd": 442,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.99,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": -0.05,
            "水": 0,
            "雷": 0,
            "地": 0.28,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0.05,
          "damageReduction": 0.05,
          "actions": 2,
          "latestEncounterOverride": {
            "world": "tribe",
            "area": 3,
            "damageReduction": 0.05,
            "evasion": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "174:element",
          "target": "174",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "175",
      "name": "モブウミデンデン",
      "image": "figboss/17.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 300,
      "attribute": "雷",
      "tags": [
        "09",
        "23",
        "25",
        "30",
        "35",
        "43",
        "51",
        "55",
        "59"
      ],
      "soulSkill": {
        "name": "ウミサンダー",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に雷属性の物理中～大ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/17.png",
        "rarity": "UR",
        "statsText": "ATK+5 & SPD +8 & MND +5",
        "traitText": "雷属性与ダメージ +5& & 雷属性耐性 +10%",
        "soul": {
          "cost": 6,
          "name": "ウミサンダー",
          "text": "敵単体に雷属性の物理中～大ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする"
        },
        "tags": [
          "08",
          "09",
          "23",
          "25",
          "29",
          "30",
          "35",
          "43",
          "51",
          "55",
          "59"
        ],
        "actor": {
          "id": "boss-umidenden",
          "name": "モブウミデンデン",
          "category": "boss",
          "attribute": "雷",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0.28,
            "地": 0,
            "風": -0.05,
            "光": 0,
            "闇": 0
          },
          "evasion": 0.1,
          "damageReduction": 0.1,
          "actions": 3,
          "latestEncounterOverride": {
            "world": "rural2",
            "area": 3,
            "actions": 3
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "175:element",
          "target": "175",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "176",
      "name": "モブネオマスター",
      "image": "figboss/18.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 295,
      "def": 305,
      "attribute": "光",
      "tags": [
        "09",
        "25",
        "30",
        "36",
        "37",
        "40",
        "44",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "ネオコントロール",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に光属性の魔法中～大ダメージを与え、味方全体のMNDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/18.png",
        "rarity": "UR",
        "statsText": "DEF +5 & HP +20",
        "traitText": "光属性与ダメージ +5% & 会心率 +1%",
        "soul": {
          "cost": 6,
          "name": "ネオコントロール",
          "text": "敵単体に光属性の魔法中～大ダメージを与え、味方全体のMNDを2ターンの間15%アップする"
        },
        "tags": [
          "05",
          "08",
          "09",
          "25",
          "30",
          "36",
          "37",
          "40",
          "44",
          "50",
          "60"
        ],
        "actor": {
          "id": "boss-neomaster",
          "name": "モブネオンマスター",
          "category": "boss",
          "attribute": "光",
          "role": "magic",
          "atk": 317,
          "mag": 434,
          "def": 282,
          "res": 323,
          "spd": 391,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.28,
            "闇": -0.05
          },
          "evasion": 0.05,
          "damageReduction": 0.1,
          "actions": 3,
          "latestEncounterOverride": {
            "world": "neon2",
            "area": 3,
            "actions": 3,
            "evasion": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "176:element",
          "target": "176",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "177",
      "name": "モブヘルリリス",
      "image": "figboss/19.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 150,
      "def": 130,
      "attribute": "火",
      "tags": [
        "23",
        "26",
        "27",
        "37",
        "48",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "ヘルフレア",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/19.png",
        "rarity": "SSR",
        "statsText": "MAG +3 & MP +15",
        "traitText": "火属性耐性 +10% & 魔法会心率 +1%",
        "soul": {
          "cost": 5,
          "name": "ヘルフレア",
          "text": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "03",
          "23",
          "26",
          "27",
          "37",
          "48",
          "50",
          "60"
        ],
        "actor": {
          "id": "c-lilith-hell",
          "name": "モブヘルリリス",
          "category": "elite",
          "attribute": "火",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0.1,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/39",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "178",
      "name": "モブキリンリリス",
      "image": "figboss/20.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "雷",
      "tags": [
        "23",
        "26",
        "27",
        "37",
        "48",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "キリンボルト",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に雷属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/20.png",
        "rarity": "SSR",
        "statsText": "MAG +3 & MP +15",
        "traitText": "雷属性耐性 +10% & 魔法会心率 +1%",
        "soul": {
          "cost": 5,
          "name": "キリンボルト",
          "text": "敵単体に雷属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間10%アップする"
        },
        "tags": [
          "04",
          "23",
          "26",
          "27",
          "37",
          "48",
          "50",
          "60"
        ],
        "actor": {
          "id": "c-lilith-kirin",
          "name": "モブキリンリリス",
          "category": "elite",
          "attribute": "雷",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.58,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0.22,
            "地": 0,
            "風": -0.08,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "92",
        "182",
        "mq:eventfig/04"
      ]
    },
    {
      "id": "179",
      "name": "モブリヴァリリス",
      "image": "figboss/21.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 145,
      "def": 125,
      "attribute": "水",
      "tags": [
        "23",
        "26",
        "27",
        "37",
        "48",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "リヴァウェイブ",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に水属性の魔法小～中ダメージを与える",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/21.png",
        "rarity": "SSR",
        "statsText": "MAG +3 & MP +15",
        "traitText": "水属性耐性 +10% & 魔法会心率 +1%",
        "soul": {
          "cost": 5,
          "name": "リヴァウェイブ",
          "text": "敵全体に水属性の魔法小～中ダメージを与える"
        },
        "tags": [
          "23",
          "26",
          "27",
          "31",
          "37",
          "48",
          "50",
          "60"
        ],
        "actor": {
          "id": "c-lilith-riva",
          "name": "モブリヴァリリス",
          "category": "elite",
          "attribute": "水",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "180",
      "name": "モブクフリリス",
      "image": "figboss/22.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 145,
      "def": 125,
      "attribute": "光",
      "tags": [
        "23",
        "26",
        "27",
        "37",
        "48",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "クフライト",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に光属性の魔法小～中ダメージを与え、味方全体のMAGを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/22.png",
        "rarity": "SSR",
        "statsText": "MAG +3 & MP +15",
        "traitText": "光属性耐性 +10% & 魔法会心率 +1%",
        "soul": {
          "cost": 5,
          "name": "クフライト",
          "text": "敵全体に光属性の魔法小～中ダメージを与え、味方全体のMAGを2ターンの間15%アップする"
        },
        "tags": [
          "23",
          "26",
          "27",
          "28",
          "37",
          "48",
          "50",
          "60"
        ],
        "actor": {
          "id": "c-lilith-kufu",
          "name": "モブクフリリス",
          "category": "elite",
          "attribute": "光",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.22,
            "闇": -0.08
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "30",
        "165",
        "184",
        "205",
        "spboss010",
        "spboss033",
        "mq:spbossfig/41",
        "mq:spbossfig/42"
      ]
    },
    {
      "id": "181",
      "name": "覚醒モブヘルリリス",
      "image": "figboss/23.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 190,
      "def": 165,
      "attribute": "火",
      "tags": [
        "23",
        "26",
        "27",
        "32",
        "37",
        "48",
        "50"
      ],
      "soulSkill": {
        "name": "ヘルバースト",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemy",
            "value": 25
          }
        ],
        "description": "選んだ相手1体のATKを25下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の魔法中ダメージを与える。40%でやけどにする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/23.png",
        "rarity": "SSR",
        "statsText": "MAG +5 & MP +20",
        "traitText": "火属性耐性 +15% & 魔法会心率 +3%",
        "soul": {
          "cost": 5,
          "name": "ヘルバースト",
          "text": "敵単体に火属性の魔法中ダメージを与える。40%でやけどにする"
        },
        "tags": [
          "03",
          "23",
          "26",
          "27",
          "32",
          "37",
          "48",
          "50",
          "60"
        ],
        "actor": {
          "id": "dc2-hell",
          "name": "覚醒モブヘルリリス",
          "category": "elite",
          "attribute": "火",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "火": 0.5
          },
          "evasion": 0.07,
          "damageReduction": 0.08,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "181:element",
          "target": "181",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "182",
      "name": "覚醒モブキリンリリス",
      "image": "figboss/24.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "雷",
      "tags": [
        "23",
        "26",
        "27",
        "32",
        "37",
        "48",
        "50"
      ],
      "soulSkill": {
        "name": "キリンブレイク",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に雷属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/24.png",
        "rarity": "SSR",
        "statsText": "MAG +5 & MP +20",
        "traitText": "雷属性耐性 +15% & 魔法会心率 +3%",
        "soul": {
          "cost": 5,
          "name": "キリンブレイク",
          "text": "敵単体に雷属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間10%アップする"
        },
        "tags": [
          "04",
          "23",
          "26",
          "27",
          "32",
          "37",
          "48",
          "50",
          "51",
          "60"
        ],
        "actor": {
          "id": "dc2-kirin",
          "name": "覚醒モブキリンリリス",
          "category": "elite",
          "attribute": "雷",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.58,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "雷": 0.5
          },
          "evasion": 0.07,
          "damageReduction": 0.08,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "182:element",
          "target": "182",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "188",
        "175",
        "spboss014",
        "mq:eventfig/29",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "183",
      "name": "覚醒モブリヴァリリス",
      "image": "figboss/25.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 185,
      "def": 160,
      "attribute": "水",
      "tags": [
        "23",
        "26",
        "27",
        "32",
        "37",
        "48",
        "50"
      ],
      "soulSkill": {
        "name": "リヴァタイド",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に水属性の魔法小～中ダメージを与える",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/25.png",
        "rarity": "SSR",
        "statsText": "MAG +5 & MP +20",
        "traitText": "水属性耐性 +15% & 魔法会心率 +3%",
        "soul": {
          "cost": 5,
          "name": "リヴァタイド",
          "text": "敵全体に水属性の魔法小～中ダメージを与える"
        },
        "tags": [
          "23",
          "26",
          "27",
          "31",
          "32",
          "37",
          "48",
          "50",
          "60"
        ],
        "actor": {
          "id": "dc2-riva",
          "name": "覚醒モブリヴァリリス",
          "category": "elite",
          "attribute": "水",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "水": 0.5
          },
          "evasion": 0.07,
          "damageReduction": 0.08,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "183:element",
          "target": "183",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "184",
      "name": "覚醒モブクフリリス",
      "image": "figboss/26.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 190,
      "def": 165,
      "attribute": "光",
      "tags": [
        "23",
        "26",
        "27",
        "32",
        "37",
        "48",
        "50"
      ],
      "soulSkill": {
        "name": "クフレイ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に光属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/26.png",
        "rarity": "SSR",
        "statsText": "MAG +5 & MP +20",
        "traitText": "光属性耐性 +15% & 魔法会心率 +3%",
        "soul": {
          "cost": 5,
          "name": "クフレイ",
          "text": "敵単体に光属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "23",
          "26",
          "27",
          "28",
          "32",
          "37",
          "48",
          "50",
          "60"
        ],
        "actor": {
          "id": "dc2-kufu",
          "name": "覚醒モブクフリリス",
          "category": "elite",
          "attribute": "光",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "光": 0.5
          },
          "evasion": 0.07,
          "damageReduction": 0.08,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "184:element",
          "target": "184",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "190",
        "195",
        "170",
        "176",
        "215",
        "216",
        "spboss013"
      ]
    },
    {
      "id": "203",
      "name": "モブミラナイト",
      "image": "figboss/27.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 160,
      "def": 185,
      "attribute": "水",
      "tags": [
        "09",
        "23",
        "26",
        "32",
        "42",
        "49",
        "54"
      ],
      "soulSkill": {
        "name": "ミラランス",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に水属性の魔法小～中ダメージを与え、味方全体のMAGを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/27.png",
        "rarity": "SSR",
        "statsText": "DEF +3 & MND +3",
        "traitText": "砂漠での与ダメージ +7%",
        "soul": {
          "cost": 5,
          "name": "ミラランス",
          "text": "敵全体に水属性の魔法小～中ダメージを与え、味方全体のMAGを2ターンの間15%アップする"
        },
        "tags": [
          "09",
          "23",
          "26",
          "31",
          "32",
          "42",
          "49",
          "54",
          "55",
          "57"
        ],
        "actor": {
          "id": "d2-miranight",
          "name": "モブミラナイト",
          "category": "elite",
          "attribute": "水",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "203:element",
          "target": "203",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "204",
      "name": "モブミラアース",
      "image": "figboss/28.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 175,
      "def": 175,
      "attribute": "地",
      "tags": [
        "09",
        "23",
        "26",
        "32",
        "35",
        "42",
        "54"
      ],
      "soulSkill": {
        "name": "ミラアース",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          },
          {
            "type": "break",
            "target": "enemy",
            "value": 10
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。選んだ相手1体のDEFを10下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に地属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/28.png",
        "rarity": "SSR",
        "statsText": "DEF +3 & ATK +3",
        "traitText": "砂漠での会心率 +7%",
        "soul": {
          "cost": 5,
          "name": "ミラアース",
          "text": "敵全体に地属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "02",
          "09",
          "23",
          "26",
          "32",
          "35",
          "42",
          "54",
          "57"
        ],
        "actor": {
          "id": "d2-miraearth",
          "name": "モブミラアース",
          "category": "elite",
          "attribute": "地",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.5800000000000001,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": -0.08,
            "水": 0,
            "雷": 0,
            "地": 0.22,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "204:element",
          "target": "204",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "205",
      "name": "モブミラタイム",
      "image": "figboss/29.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 175,
      "def": 175,
      "attribute": "光",
      "tags": [
        "09",
        "23",
        "26",
        "32",
        "37",
        "42",
        "54"
      ],
      "soulSkill": {
        "name": "ミラタイム",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする。発動後、自分の必殺技CTを1ターン短縮する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/29.png",
        "rarity": "SSR",
        "statsText": "DEF +3 & MAG +3",
        "traitText": "砂漠での魔法与ダメージ +10%",
        "soul": {
          "cost": 5,
          "name": "ミラタイム",
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "tags": [
          "04",
          "09",
          "23",
          "26",
          "32",
          "37",
          "42",
          "54",
          "57",
          "58"
        ],
        "actor": {
          "id": "d2-miratime",
          "name": "モブミラタイム",
          "category": "elite",
          "attribute": "光",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.22,
            "闇": -0.08
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "205:element",
          "target": "205",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "190",
        "195",
        "170",
        "176",
        "215",
        "216",
        "spboss013"
      ]
    },
    {
      "id": "206",
      "name": "モブミラカラミ",
      "image": "figboss/30.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 190,
      "attribute": "火",
      "tags": [
        "09",
        "23",
        "26",
        "32",
        "37",
        "42",
        "54"
      ],
      "soulSkill": {
        "name": "ミラバインド",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemies",
            "value": 25
          }
        ],
        "description": "相手全体のATKを25下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のATKとSPDを2ターンの間15%ダウンさせ、30%で混乱にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/30.png",
        "rarity": "SSR",
        "statsText": "DEF +3",
        "traitText": "砂漠でのダメージ軽減 +10%",
        "soul": {
          "cost": 5,
          "name": "ミラバインド",
          "text": "敵全体のATKとSPDを2ターンの間15%ダウンさせ、30%で混乱にする"
        },
        "tags": [
          "03",
          "09",
          "23",
          "26",
          "32",
          "37",
          "42",
          "54",
          "56",
          "57"
        ],
        "actor": {
          "id": "d2-mirakarami",
          "name": "モブミラカラミ",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "206:element",
          "target": "206",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "207",
      "name": "モブリリス",
      "image": "figboss/31.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 300,
      "def": 300,
      "attribute": "闇",
      "tags": [
        "23",
        "25",
        "26",
        "27",
        "30",
        "34",
        "36",
        "37",
        "48"
      ],
      "soulSkill": {
        "name": "ブラックローズ",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法中～大ダメージを与え、味方全体のMAGを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/31.png",
        "rarity": "UR",
        "statsText": "MAG +5 & MND +5 MP +25",
        "traitText": "魔法会心率 +5% & 全体攻撃の威力+10%",
        "soul": {
          "cost": 6,
          "name": "ブラックローズ",
          "text": "敵全体に闇属性の魔法中～大ダメージを与え、味方全体のMAGを2ターンの間20%アップする"
        },
        "tags": [
          "05",
          "23",
          "25",
          "26",
          "27",
          "30",
          "34",
          "36",
          "37",
          "48",
          "50",
          "58",
          "60"
        ],
        "actor": {
          "id": "boss-lilith-castle",
          "name": "モブリリス",
          "category": "boss",
          "attribute": "闇",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.8300000000000001,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.05,
            "風": 0,
            "光": 0,
            "闇": 0.28
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "207:element",
          "target": "207",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "208",
      "name": "モブ閻魔",
      "image": "figboss/32.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 305,
      "def": 305,
      "attribute": "火",
      "tags": [
        "25",
        "30",
        "32",
        "34",
        "36",
        "48",
        "49",
        "56",
        "57"
      ],
      "soulSkill": {
        "name": "エンマフレア",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemy",
            "value": 30
          }
        ],
        "description": "選んだ相手1体のATKを30下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中～大ダメージを与え、40%でやけどにする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/32.png",
        "rarity": "UR",
        "statsText": "ATK +5 & DEF +5 HP +25",
        "traitText": "火属性与ダメージ+10% & 状態異常耐性+5%",
        "soul": {
          "cost": 6,
          "name": "エンマフレア",
          "text": "敵単体に火属性の物理中～大ダメージを与え、40%でやけどにする"
        },
        "tags": [
          "03",
          "25",
          "30",
          "32",
          "34",
          "36",
          "48",
          "49",
          "56",
          "57"
        ],
        "actor": {
          "id": "dc2-enma",
          "name": "モブ閻魔",
          "category": "boss",
          "attribute": "火",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.9199999999999999,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "火": 1
          },
          "evasion": 0.06,
          "damageReduction": 0.12,
          "actions": 1,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "208:element",
          "target": "208",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "209",
      "name": "モブ閻魔第二形態",
      "image": "figboss/33.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 310,
      "def": 285,
      "attribute": "火",
      "tags": [
        "23",
        "25",
        "30",
        "32",
        "34",
        "36",
        "48",
        "49",
        "56"
      ],
      "soulSkill": {
        "name": "エンマバースト",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に火属性の物理中ダメージを与え、自分のATKとSPDを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/33.png",
        "rarity": "UR",
        "statsText": "ATK +5 & SPD +5 HP +25",
        "traitText": "火属性ダメージ軽減+15% & 状態異常耐性+5%",
        "soul": {
          "cost": 6,
          "name": "エンマバースト",
          "text": "敵全体に火属性の物理中ダメージを与え、自分のATKとSPDを2ターンの間20%アップする"
        },
        "tags": [
          "03",
          "23",
          "25",
          "30",
          "32",
          "34",
          "36",
          "48",
          "49",
          "56",
          "57"
        ],
        "actor": {
          "id": "dc2-enma2",
          "name": "モブ閻魔 第二形態",
          "category": "boss",
          "attribute": "火",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.9199999999999999,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "火": 1
          },
          "evasion": 0.06,
          "damageReduction": 0.13,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "209:element",
          "target": "209",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "210",
      "name": "モブ閻魔第最終形態",
      "image": "figboss/34.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 305,
      "def": 285,
      "attribute": "火",
      "tags": [
        "23",
        "25",
        "30",
        "32",
        "34",
        "36",
        "48",
        "49",
        "56"
      ],
      "soulSkill": {
        "name": "エンマジャッジ",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          },
          {
            "type": "break",
            "target": "enemy",
            "value": 10
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。選んだ相手1体のDEFを10下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に火属性の物理大ダメージを与え、敵全体のATKとDEFを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/34.png",
        "rarity": "UR",
        "statsText": "ATK +10 & HP +25",
        "traitText": "会心率+5% & 状態異常耐性+5%",
        "soul": {
          "cost": 6,
          "name": "エンマジャッジ",
          "text": "敵全体に火属性の物理大ダメージを与え、敵全体のATKとDEFを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "03",
          "23",
          "25",
          "30",
          "32",
          "34",
          "36",
          "48",
          "49",
          "56",
          "57"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "210:element",
          "target": "210",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "211",
      "name": "モブ怪人幹部青",
      "image": "figboss/35.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 180,
      "def": 180,
      "attribute": "水",
      "tags": [
        "26",
        "32",
        "34",
        "42",
        "49",
        "29",
        "31"
      ],
      "soulSkill": {
        "name": "ブルークロス",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/35.png",
        "rarity": "SSR",
        "statsText": "ATK +3 & DEF +3",
        "traitText": "水属性会心率+4%",
        "soul": {
          "cost": 5,
          "name": "ブルークロス",
          "text": "敵単体に水属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする"
        },
        "tags": [
          "26",
          "29",
          "31",
          "32",
          "34",
          "42",
          "49"
        ],
        "actor": {
          "id": "book-exec-blue",
          "name": "モブ怪人幹部青",
          "category": "elite",
          "attribute": "水",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "211:element",
          "target": "211",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "212",
      "name": "モブ怪人幹部赤",
      "image": "figboss/36.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 180,
      "def": 180,
      "attribute": "火",
      "tags": [
        "26",
        "32",
        "34",
        "42",
        "49",
        "02",
        "29"
      ],
      "soulSkill": {
        "name": "レッドクロス",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/36.png",
        "rarity": "SSR",
        "statsText": "ATK +3 & DEF +3",
        "traitText": "火属性会心率+4%",
        "soul": {
          "cost": 5,
          "name": "レッドクロス",
          "text": "敵単体に火属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする"
        },
        "tags": [
          "02",
          "26",
          "29",
          "32",
          "34",
          "42",
          "49"
        ],
        "actor": {
          "id": "book-exec-red",
          "name": "モブ怪人幹部赤",
          "category": "elite",
          "attribute": "火",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "212:element",
          "target": "212",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "213",
      "name": "モブ怪人幹部青変身",
      "image": "figboss/37.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 185,
      "def": 160,
      "attribute": "水",
      "tags": [
        "26",
        "32",
        "34",
        "35",
        "42",
        "49",
        "59"
      ],
      "soulSkill": {
        "name": "ブルークロスX",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理中～大ダメージを2回与え、自分の会心率を2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/37.png",
        "rarity": "SSR",
        "statsText": "ATK +4 & DEF +3",
        "traitText": "水属性会心率+7%",
        "soul": {
          "cost": 5,
          "name": "ブルークロスX",
          "text": "敵単体に水属性の物理中～大ダメージを2回与え、自分の会心率を2ターンの間15%アップする"
        },
        "tags": [
          "26",
          "29",
          "31",
          "32",
          "34",
          "35",
          "42",
          "49",
          "59"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "213:element",
          "target": "213",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "214",
      "name": "モブ怪人幹部赤変身",
      "image": "figboss/38.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 175,
      "def": 175,
      "attribute": "火",
      "tags": [
        "26",
        "32",
        "34",
        "35",
        "42",
        "49",
        "59"
      ],
      "soulSkill": {
        "name": "レッドクロスX",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中～大ダメージを2回与え、自分の会心率を2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/38.png",
        "rarity": "SSR",
        "statsText": "ATK +3 & DEF +4",
        "traitText": "火属性会心率+7%",
        "soul": {
          "cost": 5,
          "name": "レッドクロスX",
          "text": "敵単体に火属性の物理中～大ダメージを2回与え、自分の会心率を2ターンの間15%アップする"
        },
        "tags": [
          "02",
          "26",
          "29",
          "32",
          "34",
          "35",
          "42",
          "49",
          "59"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "214:element",
          "target": "214",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "215",
      "name": "モブナビ",
      "image": "figboss/39.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 305,
      "def": 305,
      "attribute": "光",
      "tags": [
        "25",
        "30",
        "32",
        "33",
        "36",
        "37",
        "52",
        "57",
        "58"
      ],
      "soulSkill": {
        "name": "ナビジャック",
        "timing": "own-main",
        "effects": [
          {
            "type": "break",
            "target": "enemies",
            "value": 30
          }
        ],
        "description": "相手全体のDEFを30下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のATK・DEF・SPDを2ターンの間10%ダウンさせ、味方全体のMAGとMNDを15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/39.png",
        "rarity": "UR",
        "statsText": "MAG +5 & MND +5 & HP +30",
        "traitText": "物理ダメージ軽減 +7%",
        "soul": {
          "cost": 6,
          "name": "ナビジャック",
          "text": "敵全体のATK・DEF・SPDを2ターンの間10%ダウンさせ、味方全体のMAGとMNDを15%アップする"
        },
        "tags": [
          "08",
          "25",
          "28",
          "30",
          "32",
          "33",
          "36",
          "37",
          "52",
          "57",
          "58"
        ],
        "actor": {
          "id": "book-navi",
          "name": "モブナビ",
          "category": "boss",
          "attribute": "光",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.28,
            "闇": -0.05
          },
          "evasion": 0,
          "damageReduction": 0.8,
          "actions": 3,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "215:element",
          "target": "215",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "216",
      "name": "モブナビマスター",
      "image": "figboss/40.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "atk": 365,
      "def": 355,
      "attribute": "光",
      "tags": [
        "25",
        "30",
        "32",
        "33",
        "36",
        "37",
        "39",
        "52",
        "57",
        "58",
        "08",
        "28"
      ],
      "soulSkill": {
        "name": "ナビオーバー",
        "timing": "own-main",
        "effects": [
          {
            "type": "break",
            "target": "enemies",
            "value": 35
          }
        ],
        "description": "相手全体のDEFを35下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のATK・DEF・SPDを2ターンの間15%ダウンさせ、味方全体のMAG・MND・SPDを20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/40.png",
        "rarity": "MOB",
        "statsText": "MAG +5 & MND +5 & HP +30 & MP +30",
        "traitText": "魔法与ダメージ +7%",
        "soul": {
          "cost": 7,
          "name": "ナビオーバー",
          "text": "敵全体のATK・DEF・SPDを2ターンの間15%ダウンさせ、味方全体のMAG・MND・SPDを20%アップする"
        },
        "tags": [
          "08",
          "25",
          "28",
          "30",
          "32",
          "33",
          "36",
          "37",
          "39",
          "52",
          "57",
          "58"
        ],
        "actor": {
          "id": "book-navi-master",
          "name": "モブナビマスター",
          "category": "boss",
          "attribute": "光",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.28,
            "闇": -0.05
          },
          "evasion": 0,
          "damageReduction": 0.8,
          "actions": 3,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "MOBは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "216:element",
          "target": "216",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "217",
      "name": "モブ怪人のボス",
      "image": "figboss/41.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "atk": 350,
      "def": 345,
      "attribute": "闇",
      "tags": [
        "10",
        "13",
        "24",
        "25",
        "26",
        "30",
        "32",
        "34",
        "35",
        "39",
        "40",
        "51"
      ],
      "soulSkill": {
        "name": "クロスブレイカー",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          },
          {
            "type": "break",
            "target": "enemy",
            "value": 10
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。選んだ相手1体のDEFを10下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に無属性の物理大ダメージを与え、敵全体のDEFを2ターンの間20%ダウンさせる。さらに自分の特技会心率を15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/41.png",
        "rarity": "MOB",
        "statsText": "ATK +5 & DEF +5 & HP +30",
        "traitText": "特技会心率 +10%",
        "soul": {
          "cost": 7,
          "name": "クロスブレイカー",
          "text": "敵全体に無属性の物理大ダメージを与え、敵全体のDEFを2ターンの間20%ダウンさせる。さらに自分の特技会心率を15%アップする"
        },
        "tags": [
          "10",
          "13",
          "24",
          "25",
          "26",
          "29",
          "30",
          "32",
          "34",
          "35",
          "39",
          "40",
          "51",
          "52"
        ],
        "actor": {
          "id": "book-kaijin-boss",
          "name": "モブ怪人のボス",
          "category": "boss",
          "attribute": "闇・無",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.8300000000000001,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0.28,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.05,
            "風": 0,
            "光": 0,
            "闇": 0.28
          },
          "evasion": 0,
          "damageReduction": 0.2,
          "actions": 3,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "MOBは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "217:family",
          "target": "217",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "24"
            },
            {
              "tag": "24"
            }
          ],
          "label": "主人公パーティー × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "217:element",
          "target": "217",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "218",
      "name": "ウルモブリリス",
      "image": "figboss/42.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "atk": 320,
      "def": 365,
      "attribute": "闇",
      "tags": [
        "09",
        "23",
        "25",
        "26",
        "30",
        "32",
        "34",
        "35",
        "37",
        "39",
        "48",
        "51"
      ],
      "soulSkill": {
        "name": "ウルローズ",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に闇属性の魔法大ダメージを与え、40%で毒と混乱のどちらかを付与する。自分の魔法会心率を15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/42.png",
        "rarity": "MOB",
        "statsText": "MAG +10 & DEF +5 & MND +10",
        "traitText": "闇魔法会心率 +20%",
        "soul": {
          "cost": 7,
          "name": "ウルローズ",
          "text": "敵全体に闇属性の魔法大ダメージを与え、40%で毒と混乱のどちらかを付与する。自分の魔法会心率を15%アップする"
        },
        "tags": [
          "09",
          "23",
          "25",
          "26",
          "29",
          "30",
          "32",
          "34",
          "35",
          "37",
          "39",
          "48",
          "51",
          "57",
          "58"
        ],
        "actor": {
          "id": "dc2-ulrilis",
          "name": "ウルモブリリス",
          "category": "boss",
          "attribute": "闇",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.8300000000000001,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.05,
            "風": 0,
            "光": 0,
            "闇": 0.28
          },
          "evasion": 0.06,
          "damageReduction": 0.15,
          "actions": 3,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "MOBは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "218:element",
          "target": "218",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "219",
      "name": "モブネプチューン",
      "image": "figboss/43.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 310,
      "def": 285,
      "attribute": "水",
      "tags": [
        "09",
        "25",
        "30",
        "32",
        "34",
        "36",
        "40",
        "45",
        "55"
      ],
      "soulSkill": {
        "name": "ネプチューンアタック",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理ダメージを5回に分けて与える。合計で中～大ダメージ。自分のATKを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "image": "figboss/43.png",
        "rarity": "UR",
        "statsText": "ATK +5 & HP +20",
        "traitText": "水属性耐性 +10% & 会心率 3%",
        "soul": {
          "cost": 6,
          "name": "ネプチューンアタック",
          "text": "敵単体に水属性の物理ダメージを5回に分けて与える。合計で中～大ダメージ。自分のATKを2ターンの間20%アップする"
        },
        "tags": [
          "04",
          "09",
          "25",
          "30",
          "31",
          "32",
          "34",
          "36",
          "40",
          "45",
          "55"
        ],
        "actor": {
          "id": "boss-nepu",
          "name": "モブネプチューン",
          "category": "boss",
          "attribute": "水",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.9,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.28,
            "雷": -0.05,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0.05,
          "actions": 3,
          "latestEncounterOverride": {
            "world": "sea",
            "area": 3,
            "actions": 3,
            "damageReduction": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "219:element",
          "target": "219",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "spboss001",
      "name": "モブ怪人のボス 超合金",
      "image": "spbossfig/001.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "atk": 330,
      "def": 365,
      "attribute": "闇",
      "tags": [
        "10",
        "13",
        "24",
        "25",
        "26",
        "30",
        "32",
        "34",
        "35",
        "39",
        "40",
        "51"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 35
          }
        ],
        "description": "自身のDEFを35上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "特技会心率 +7%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/001.png",
        "rarity": "MOB",
        "statsText": "ATK +5 & DEF +5 & HP +30",
        "traitText": "特技会心率 +7%",
        "soul": null,
        "tags": [
          "08",
          "10",
          "13",
          "24",
          "25",
          "26",
          "30",
          "32",
          "34",
          "35",
          "39",
          "40",
          "51",
          "52",
          "61",
          "62"
        ],
        "actor": {
          "id": "book-kaijin-boss",
          "name": "モブ怪人のボス",
          "category": "boss",
          "attribute": "闇・無",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.8300000000000001,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0.28,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.05,
            "風": 0,
            "光": 0,
            "闇": 0.28
          },
          "evasion": 0,
          "damageReduction": 0.2,
          "actions": 3,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "MOBは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss001:family",
          "target": "spboss001",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "24"
            },
            {
              "tag": "24"
            }
          ],
          "label": "主人公パーティー × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss001:element",
          "target": "spboss001",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "spboss002",
      "name": "モブドラゴン 超合金",
      "image": "spbossfig/002.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "火",
      "tags": [
        "09",
        "25",
        "32",
        "35",
        "38",
        "47",
        "50"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "火属性耐性+7% & 会心率+2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/002.png",
        "rarity": "SSR",
        "statsText": "ATK +3 & DEF +3 & MND +2",
        "traitText": "火属性耐性+7% & 会心率+2%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "25",
          "32",
          "35",
          "38",
          "47",
          "50",
          "56",
          "61",
          "62"
        ],
        "actor": {
          "id": "boss-dragon",
          "name": "モブドラゴン",
          "category": "boss",
          "attribute": "火",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.9199999999999999,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0.28,
            "水": -0.05,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0.05,
          "latestEncounterOverride": {
            "world": "magma",
            "area": 3,
            "damageReduction": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss002:family",
          "target": "spboss002",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "38"
            },
            {
              "tag": "38"
            }
          ],
          "label": "ドラゴン × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss002:element",
          "target": "spboss002",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "spboss003",
      "name": "モブドラゴンⅡ超合金",
      "image": "spbossfig/003.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 200,
      "def": 220,
      "attribute": "火",
      "tags": [
        "09",
        "25",
        "32",
        "34",
        "35",
        "38",
        "47",
        "50",
        "56"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "火属性耐性+7% & 会心率+2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/003.png",
        "rarity": "UR",
        "statsText": "ATK +3 & DEF +3 & MND +2",
        "traitText": "火属性耐性+7% & 会心率+2%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "25",
          "32",
          "34",
          "35",
          "38",
          "47",
          "50",
          "56",
          "61",
          "62"
        ],
        "actor": {
          "id": "boss-dragon2",
          "name": "モブドラゴンⅡ",
          "category": "boss",
          "attribute": "火",
          "role": "physical",
          "atk": 382,
          "mag": 394,
          "def": 277,
          "res": 282,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.9199999999999999,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0.28,
            "水": -0.05,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0.05,
          "latestEncounterOverride": {
            "world": "magma2",
            "area": 3,
            "damageReduction": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss003:family",
          "target": "spboss003",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "38"
            },
            {
              "tag": "38"
            }
          ],
          "label": "ドラゴン × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss003:element",
          "target": "spboss003",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "spboss004",
      "name": "モブガーディアン 超合金",
      "image": "spbossfig/004.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "地",
      "tags": [
        "09",
        "25",
        "32",
        "35",
        "39",
        "40",
        "43"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "ダメージ軽減+2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/004.png",
        "rarity": "SSR",
        "statsText": "DEF +5 & MND +1",
        "traitText": "ダメージ軽減+2%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "25",
          "32",
          "35",
          "39",
          "40",
          "43",
          "61",
          "62"
        ],
        "actor": {
          "id": "boss-guardian",
          "name": "モブガーディアン",
          "category": "boss",
          "attribute": "地",
          "role": "physical",
          "atk": 362,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.99,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": -0.05,
            "水": 0,
            "雷": 0,
            "地": 0.28,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss004:family",
          "target": "spboss004",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss004:element",
          "target": "spboss004",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "spboss005",
      "name": "モブガーディアンⅡ超合金",
      "image": "spbossfig/005.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 195,
      "def": 220,
      "attribute": "無",
      "tags": [
        "09",
        "25",
        "26",
        "32",
        "35",
        "39",
        "40",
        "43",
        "61"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "ダメージ軽減+3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/005.png",
        "rarity": "UR",
        "statsText": "DEF +5 & HP +20",
        "traitText": "ダメージ軽減+3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "25",
          "26",
          "32",
          "35",
          "39",
          "40",
          "43",
          "61",
          "62"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "spboss005:family",
          "target": "spboss005",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss005:element",
          "target": "spboss005",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "spboss011",
        "spboss013",
        "spboss014",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "spboss006",
      "name": "ミラモブ 超合金",
      "image": "spbossfig/006.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 160,
      "def": 175,
      "attribute": "闇",
      "tags": [
        "09",
        "23",
        "25",
        "37",
        "42",
        "50",
        "54"
      ],
      "soulSkill": {
        "name": "すり抜け",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "闇属性耐性+7 & 回避率+3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/006.png",
        "rarity": "SSR",
        "statsText": "MAG+3 & MP +15",
        "traitText": "闇属性耐性+7 & 回避率+3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "23",
          "25",
          "37",
          "42",
          "50",
          "54",
          "57",
          "61",
          "62"
        ],
        "actor": {
          "id": "boss-mira",
          "name": "ミラモブ",
          "category": "boss",
          "attribute": "闇",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.8300000000000001,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.05,
            "風": 0,
            "光": 0,
            "闇": 0.28
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss006:family",
          "target": "spboss006",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss006:element",
          "target": "spboss006",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001"
      ]
    },
    {
      "id": "spboss007",
      "name": "ミラモブⅡ超合金",
      "image": "spbossfig/007.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 190,
      "def": 215,
      "attribute": "闇",
      "tags": [
        "09",
        "23",
        "25",
        "36",
        "37",
        "42",
        "50",
        "54",
        "57"
      ],
      "soulSkill": {
        "name": "すり抜け",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "毒耐性+15 & 回避率+2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/007.png",
        "rarity": "UR",
        "statsText": "MAG+3 & MP +15 & MND +3",
        "traitText": "毒耐性+15 & 回避率+2%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "23",
          "25",
          "36",
          "37",
          "42",
          "50",
          "54",
          "57",
          "61",
          "62"
        ],
        "actor": {
          "id": "boss-mira2-d2",
          "name": "ミラモブⅡ",
          "category": "boss",
          "attribute": "闇",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.8300000000000001,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.05,
            "風": 0,
            "光": 0,
            "闇": 0.28
          },
          "evasion": 0.05,
          "damageReduction": 0.05,
          "actions": 2,
          "latestEncounterOverride": {
            "world": "desert2",
            "area": 0,
            "actions": 2,
            "damageReduction": 0.05,
            "evasion": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss007:family",
          "target": "spboss007",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss007:element",
          "target": "spboss007",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001"
      ]
    },
    {
      "id": "spboss008",
      "name": "モブホーク超合金",
      "image": "spbossfig/008.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "風",
      "tags": [
        "09",
        "25",
        "32",
        "34",
        "41",
        "50",
        "55"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "風属性耐性+7%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/008.png",
        "rarity": "SSR",
        "statsText": "ATK +2 & SPD +2 & MND +2",
        "traitText": "風属性耐性+7%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "25",
          "32",
          "34",
          "41",
          "50",
          "55",
          "61",
          "62"
        ],
        "actor": {
          "id": "boss-hawk",
          "name": "モブホーク",
          "category": "boss",
          "attribute": "風",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0.28,
            "光": -0.05,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss008:family",
          "target": "spboss008",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss008:element",
          "target": "spboss008",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "199",
        "160",
        "mq:eventfig/31",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "spboss009",
      "name": "モブホークⅡ超合金",
      "image": "spbossfig/009.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 200,
      "def": 220,
      "attribute": "風",
      "tags": [
        "09",
        "25",
        "26",
        "32",
        "34",
        "41",
        "50",
        "61",
        "62"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "風属性耐性+7%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/009.png",
        "rarity": "UR",
        "statsText": "ATK +5 & SPD +10 & MND +2",
        "traitText": "風属性耐性+7%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "25",
          "26",
          "32",
          "34",
          "41",
          "50",
          "61",
          "62"
        ],
        "actor": {
          "id": "boss-hawk2",
          "name": "モブホークⅡ",
          "category": "boss",
          "attribute": "風",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0.28,
            "光": -0.05,
            "闇": 0
          },
          "evasion": 0.1,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss009:family",
          "target": "spboss009",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss009:element",
          "target": "spboss009",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "199",
        "160",
        "spboss011",
        "spboss013",
        "spboss014",
        "mq:eventfig/31",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "spboss010",
      "name": "モブネオンバルス超合金",
      "image": "spbossfig/010.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 200,
      "def": 220,
      "attribute": "光",
      "tags": [
        "09",
        "25",
        "32",
        "36",
        "44",
        "50",
        "58",
        "61",
        "62"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "光属性耐性 +8% & 会心率 +1%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/010.png",
        "rarity": "UR",
        "statsText": "MAG +5 & HP +20",
        "traitText": "光属性耐性 +8% & 会心率 +1%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "25",
          "32",
          "36",
          "44",
          "50",
          "58",
          "61",
          "62"
        ],
        "actor": {
          "id": "boss-neon",
          "name": "モブネオンバルス",
          "category": "boss",
          "attribute": "光",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.28,
            "闇": -0.05
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss010:family",
          "target": "spboss010",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss010:element",
          "target": "spboss010",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "190",
        "195",
        "170",
        "176",
        "215",
        "216",
        "spboss011",
        "spboss013",
        "spboss014"
      ]
    },
    {
      "id": "spboss011",
      "name": "モブネプチューン 超合金",
      "image": "spbossfig/011.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 295,
      "def": 305,
      "attribute": "水",
      "tags": [
        "09",
        "25",
        "30",
        "32",
        "34",
        "36",
        "40",
        "45",
        "55"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "水属性耐性 +8% & 会心率 2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/011.png",
        "rarity": "UR",
        "statsText": "ATK +5 & HP +20",
        "traitText": "水属性耐性 +8% & 会心率 2%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "25",
          "30",
          "32",
          "34",
          "36",
          "40",
          "45",
          "55",
          "61",
          "62"
        ],
        "actor": {
          "id": "boss-nepu",
          "name": "モブネプチューン",
          "category": "boss",
          "attribute": "水",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.9,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.28,
            "雷": -0.05,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0.05,
          "actions": 3,
          "latestEncounterOverride": {
            "world": "sea",
            "area": 3,
            "actions": 3,
            "damageReduction": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss011:family",
          "target": "spboss011",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss011:element",
          "target": "spboss011",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "spboss012",
      "name": "モブエース 超合金",
      "image": "spbossfig/012.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 190,
      "def": 215,
      "attribute": "闇",
      "tags": [
        "09",
        "25",
        "32",
        "34",
        "36",
        "44",
        "51",
        "59",
        "61"
      ],
      "soulSkill": {
        "name": "すり抜け",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "光属性与ダメージ +3% & 回避率 +2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/012.png",
        "rarity": "UR",
        "statsText": "MAG +5 & HP +20",
        "traitText": "光属性与ダメージ +3% & 回避率 +2%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "25",
          "32",
          "34",
          "36",
          "44",
          "51",
          "59",
          "61",
          "62"
        ],
        "actor": {
          "id": "boss-ace",
          "name": "モブエース",
          "category": "boss",
          "attribute": "闇",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.8300000000000001,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.05,
            "風": 0,
            "光": 0,
            "闇": 0.28
          },
          "skills": [
            {
              "special": "ミラマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "闇",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss012:family",
          "target": "spboss012",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss012:element",
          "target": "spboss012",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001",
        "spboss011",
        "spboss013",
        "spboss014"
      ]
    },
    {
      "id": "spboss013",
      "name": "モブネオマスター 超合金",
      "image": "spbossfig/013.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 295,
      "def": 305,
      "attribute": "光",
      "tags": [
        "09",
        "25",
        "30",
        "36",
        "37",
        "40",
        "44",
        "50",
        "58"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "光属性与ダメージ +5% & 会心率 +1%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/013.png",
        "rarity": "UR",
        "statsText": "DEF +5 & HP +20",
        "traitText": "光属性与ダメージ +5% & 会心率 +1%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "25",
          "30",
          "36",
          "37",
          "40",
          "44",
          "50",
          "58",
          "61",
          "62"
        ],
        "actor": {
          "id": "boss-neomaster",
          "name": "モブネオンマスター",
          "category": "boss",
          "attribute": "光",
          "role": "magic",
          "atk": 317,
          "mag": 434,
          "def": 282,
          "res": 323,
          "spd": 391,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.85
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.28,
            "闇": -0.05
          },
          "evasion": 0.05,
          "damageReduction": 0.1,
          "actions": 3,
          "latestEncounterOverride": {
            "world": "neon2",
            "area": 3,
            "actions": 3,
            "evasion": 0.05
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss013:family",
          "target": "spboss013",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss013:element",
          "target": "spboss013",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "spboss014",
      "name": "モブウミデンデン 超合金",
      "image": "spbossfig/014.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 295,
      "def": 305,
      "attribute": "雷",
      "tags": [
        "09",
        "23",
        "25",
        "30",
        "35",
        "43",
        "51",
        "55",
        "61"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "雷属性与ダメージ +3% & 雷属性耐性 +8%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/014.png",
        "rarity": "UR",
        "statsText": "ATK+5 & SPD +8 & MND +5",
        "traitText": "雷属性与ダメージ +3% & 雷属性耐性 +8%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "23",
          "25",
          "29",
          "30",
          "35",
          "43",
          "51",
          "55",
          "61",
          "62"
        ],
        "actor": {
          "id": "boss-umidenden",
          "name": "モブウミデンデン",
          "category": "boss",
          "attribute": "雷",
          "role": "physical",
          "atk": 324,
          "mag": 324,
          "def": 252,
          "res": 252,
          "spd": 368,
          "statusResist": {
            "poison": 0.65,
            "burn": 0.7,
            "paralyze": 1,
            "sleep": 0.8,
            "stun": 0.85,
            "confuse": 0.75
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0.28,
            "地": 0,
            "風": -0.05,
            "光": 0,
            "闇": 0
          },
          "evasion": 0.1,
          "damageReduction": 0.1,
          "actions": 3,
          "latestEncounterOverride": {
            "world": "rural2",
            "area": 3,
            "actions": 3
          }
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss014:family",
          "target": "spboss014",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss014:element",
          "target": "spboss014",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "spboss015",
      "name": "モブタフネス 超合金",
      "image": "spbossfig/015.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "地",
      "tags": [
        "09",
        "26",
        "32",
        "35",
        "39",
        "46",
        "57"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "物理ダメージ軽減 +2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/015.png",
        "rarity": "SSR",
        "statsText": "HP +15",
        "traitText": "物理ダメージ軽減 +2%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "26",
          "32",
          "35",
          "39",
          "46",
          "57",
          "61"
        ],
        "actor": {
          "id": "t-tough",
          "name": "モブタフネス",
          "category": "elite",
          "attribute": "地",
          "role": "physical",
          "atk": 242,
          "mag": 224,
          "def": 273,
          "res": 217,
          "spd": 241,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.5800000000000001,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": -0.08,
            "水": 0,
            "雷": 0,
            "地": 0.22,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss015:family",
          "target": "spboss015",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss015:element",
          "target": "spboss015",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "spboss016",
      "name": "モブククリ 超合金",
      "image": "spbossfig/016.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "風",
      "tags": [
        "09",
        "26",
        "32",
        "36",
        "46",
        "59",
        "61"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "毒耐性 +8%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/016.png",
        "rarity": "SSR",
        "statsText": "SPD +3",
        "traitText": "毒耐性 +8%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "26",
          "32",
          "36",
          "46",
          "59",
          "61"
        ],
        "actor": {
          "id": "t-kukuri",
          "name": "モブククリ",
          "category": "elite",
          "attribute": "風",
          "role": "physical",
          "atk": 251,
          "mag": 224,
          "def": 208,
          "res": 217,
          "spd": 367,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0.22,
            "光": -0.08,
            "闇": 0
          },
          "evasion": 0.1,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss016:family",
          "target": "spboss016",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss016:element",
          "target": "spboss016",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "199",
        "160",
        "spboss011",
        "spboss013",
        "spboss014",
        "mq:eventfig/31",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "spboss017",
      "name": "モブヒスイ 超合金",
      "image": "spbossfig/017.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "闇",
      "tags": [
        "09",
        "26",
        "32",
        "37",
        "46",
        "60",
        "61"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "魔法ダメージ軽減 +2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/017.png",
        "rarity": "SSR",
        "statsText": "MP +10",
        "traitText": "魔法ダメージ軽減 +2%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "26",
          "32",
          "37",
          "46",
          "60",
          "61"
        ],
        "actor": {
          "id": "t-hisui",
          "name": "モブヒスイ",
          "category": "elite",
          "attribute": "闇",
          "role": "magic",
          "atk": 224,
          "mag": 278,
          "def": 217,
          "res": 265,
          "spd": 319,
          "statusResist": {
            "poison": 0.52,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.44000000000000006
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.08,
            "風": 0,
            "光": 0,
            "闇": 0.22
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss017:family",
          "target": "spboss017",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss017:element",
          "target": "spboss017",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001",
        "spboss011",
        "spboss013",
        "spboss014"
      ]
    },
    {
      "id": "spboss018",
      "name": "モブリュウゴウ 超合金",
      "image": "spbossfig/018.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 190,
      "def": 165,
      "attribute": "火",
      "tags": [
        "09",
        "26",
        "32",
        "35",
        "38",
        "46",
        "49"
      ],
      "soulSkill": {
        "name": "集中",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "火属性与ダメージ +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/018.png",
        "rarity": "SSR",
        "statsText": "ATK +5",
        "traitText": "火属性与ダメージ +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "26",
          "32",
          "35",
          "38",
          "46",
          "49",
          "61"
        ],
        "actor": {
          "id": "t-ryugo",
          "name": "モブリュウゴウ",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 278,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 337,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss018:family",
          "target": "spboss018",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "38"
            },
            {
              "tag": "38"
            }
          ],
          "label": "ドラゴン × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss018:element",
          "target": "spboss018",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "spboss019",
      "name": "酒場の看板娘 モブイルカエル 超合金",
      "image": "spbossfig/019.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "水",
      "tags": [
        "13",
        "15",
        "18",
        "27",
        "33",
        "40",
        "55"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "水属性耐性+8% & 会心率+2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/019.png",
        "rarity": "SSR",
        "statsText": "SPD +3 & DEF +3 & MND +2",
        "traitText": "水属性耐性+8% & 会心率+2%",
        "soul": null,
        "tags": [
          "08",
          "13",
          "15",
          "18",
          "27",
          "33",
          "40",
          "55",
          "60",
          "61"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "spboss020",
      "name": "鍛冶屋の職人 モブゴンゾー 超合金",
      "image": "spbossfig/020.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "地",
      "tags": [
        "13",
        "15",
        "35",
        "36",
        "39",
        "40",
        "60"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "地属性耐性+8% & 会心率+2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/020.png",
        "rarity": "SSR",
        "statsText": "ATK +5 & DEF +3",
        "traitText": "地属性耐性+8% & 会心率+2%",
        "soul": null,
        "tags": [
          "08",
          "13",
          "15",
          "35",
          "36",
          "39",
          "40",
          "60",
          "61"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "spboss021",
      "name": "新入りフィギュア売り モブメープル 超合金",
      "image": "spbossfig/021.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "無",
      "tags": [
        "13",
        "27",
        "37",
        "40",
        "60",
        "61",
        "08"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "獲得経験値+8% & 会心率+2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/021.png",
        "rarity": "SSR",
        "statsText": "HP +20 & DEF +3 & MAG +2",
        "traitText": "獲得経験値+8% & 会心率+2%",
        "soul": null,
        "tags": [
          "08",
          "13",
          "27",
          "37",
          "40",
          "60",
          "61"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss004",
        "spboss005",
        "spboss006",
        "spboss007",
        "spboss008",
        "spboss009",
        "spboss010",
        "spboss012",
        "spboss015",
        "spboss016",
        "spboss017",
        "spboss025",
        "spboss033",
        "spboss034",
        "mq:spbossfig/35",
        "mq:spbossfig/37",
        "mq:spbossfig/39",
        "mq:spbossfig/40",
        "mq:spbossfig/41",
        "mq:spbossfig/42",
        "mq:spbossfig/43",
        "mq:spbossfig/44",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "spboss022",
      "name": "優しき熱血コーチ モブコーチ 超合金",
      "image": "spbossfig/022.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "雷",
      "tags": [
        "13",
        "15",
        "40",
        "60",
        "61",
        "08",
        "31"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "雷属性耐性+8% & 会心率+2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/022.png",
        "rarity": "SSR",
        "statsText": "HP +20 & DEF +3 & MND +2",
        "traitText": "雷属性耐性+8% & 会心率+2%",
        "soul": null,
        "tags": [
          "08",
          "13",
          "15",
          "31",
          "40",
          "60",
          "61"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "92",
        "182",
        "spboss004",
        "spboss005",
        "spboss006",
        "spboss007",
        "spboss008",
        "spboss009",
        "spboss010",
        "spboss012",
        "spboss015",
        "spboss016",
        "spboss017",
        "spboss025",
        "spboss033",
        "spboss034",
        "mq:spbossfig/35",
        "mq:spbossfig/37",
        "mq:spbossfig/39",
        "mq:spbossfig/40",
        "mq:spbossfig/41",
        "mq:spbossfig/42",
        "mq:spbossfig/43",
        "mq:spbossfig/44",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/04"
      ]
    },
    {
      "id": "spboss023",
      "name": "モブアビスナイト 超合金",
      "image": "spbossfig/023.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "水",
      "tags": [
        "09",
        "36",
        "40",
        "45",
        "61",
        "08"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "水属性与ダメージ +5%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/023.png",
        "rarity": "SSR",
        "statsText": "ATK +3 DEF +3",
        "traitText": "水属性与ダメージ +5%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "36",
          "40",
          "45",
          "61"
        ],
        "actor": {
          "id": "s-abyssknight",
          "name": "モブアビスナイト",
          "category": "elite",
          "attribute": "水",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss004",
        "spboss005",
        "spboss006",
        "spboss007",
        "spboss008",
        "spboss009",
        "spboss010",
        "spboss012",
        "spboss015",
        "spboss016",
        "spboss017",
        "spboss025",
        "spboss033",
        "spboss034",
        "mq:spbossfig/35",
        "mq:spbossfig/37",
        "mq:spbossfig/39",
        "mq:spbossfig/40",
        "mq:spbossfig/41",
        "mq:spbossfig/42",
        "mq:spbossfig/43",
        "mq:spbossfig/44",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "spboss024",
      "name": "モブネッシー 超合金",
      "image": "spbossfig/024.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "水",
      "tags": [
        "09",
        "39",
        "40",
        "45",
        "51"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "水属性耐性 +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/024.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "水属性耐性 +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "39",
          "40",
          "45",
          "51",
          "61"
        ],
        "actor": {
          "id": "s-nessie",
          "name": "モブネッシー",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "水",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "spboss025",
      "name": "モブジョーンズ 超合金",
      "image": "spbossfig/025.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "水",
      "tags": [
        "09",
        "32",
        "35",
        "40",
        "45",
        "49",
        "55"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "水属性与ダメージ +5%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/025.png",
        "rarity": "SSR",
        "statsText": "ATK +5 DEF +3",
        "traitText": "水属性与ダメージ +5%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "32",
          "35",
          "40",
          "45",
          "49",
          "55",
          "61"
        ],
        "actor": {
          "id": "s-jones",
          "name": "モブジョーンズ",
          "category": "elite",
          "attribute": "水",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.34,
            "paralyze": 0.36,
            "sleep": 0.45999999999999996,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.22,
            "雷": -0.08,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss025:family",
          "target": "spboss025",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss025:element",
          "target": "spboss025",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "spboss026",
      "name": "モブジンベエ 超合金",
      "image": "spbossfig/026.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "水",
      "tags": [
        "09",
        "36",
        "40",
        "45",
        "49"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "水属性耐性 +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/026.png",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "水属性耐性 +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "36",
          "40",
          "45",
          "49",
          "55",
          "61"
        ],
        "actor": {
          "id": "s-jinbei",
          "name": "モブジンベエ",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 231,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "水",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "spboss027",
      "name": "スライム 超合金",
      "image": "spbossfig/027.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 145,
      "attribute": "水",
      "tags": [
        "09",
        "10",
        "17",
        "41",
        "61",
        "08"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "水属性耐性 +5%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/027.png",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "水属性耐性 +5%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "10",
          "17",
          "41",
          "61"
        ],
        "actor": {
          "id": "g-slime",
          "name": "モブスライム",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "水",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "148",
        "183",
        "203",
        "211",
        "213",
        "spboss004",
        "spboss005",
        "spboss006",
        "spboss007",
        "spboss008",
        "spboss009",
        "spboss010",
        "spboss012",
        "spboss015",
        "spboss016",
        "spboss017",
        "spboss025",
        "spboss033",
        "spboss034",
        "mq:spbossfig/35",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/40",
        "mq:spbossfig/41",
        "mq:spbossfig/42",
        "mq:spbossfig/43",
        "mq:spbossfig/44",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/22",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "spboss028",
      "name": "モブテンデビ 超合金",
      "image": "spbossfig/028.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "水",
      "tags": [
        "09",
        "27",
        "39",
        "41",
        "50"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "水属性耐性 +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/028.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "水属性耐性 +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "27",
          "39",
          "41",
          "50",
          "61"
        ],
        "actor": {
          "id": "g-tendevi",
          "name": "モブテンデビ",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプ",
              "kind": "single",
              "power": 0.9,
              "skillElement": "水",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "spboss029",
      "name": "モブジョーロ 超合金",
      "image": "spbossfig/029.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "水",
      "tags": [
        "09",
        "34",
        "39",
        "41",
        "61"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "水属性耐性 +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/029.png",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "水属性耐性 +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "34",
          "39",
          "41",
          "61"
        ],
        "actor": {
          "id": "g-jouro",
          "name": "モブジョーロ",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "キャンディ",
              "kind": "enemyHeal",
              "power": 0.09,
              "skillElement": "無",
              "skillType": "magic",
              "v134Formal": true
            },
            {
              "special": "ネプソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "水",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "183",
        "203",
        "211",
        "213",
        "spboss004",
        "spboss005",
        "spboss006",
        "spboss007",
        "spboss008",
        "spboss009",
        "spboss010",
        "spboss012",
        "spboss015",
        "spboss016",
        "spboss017",
        "spboss025",
        "spboss033",
        "spboss034",
        "mq:spbossfig/35",
        "mq:spbossfig/37",
        "mq:spbossfig/39",
        "mq:spbossfig/40",
        "mq:spbossfig/41",
        "mq:spbossfig/42",
        "mq:spbossfig/43",
        "mq:spbossfig/44",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "spboss030",
      "name": "モブロック 超合金",
      "image": "spbossfig/030.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 105,
      "def": 125,
      "attribute": "地",
      "tags": [
        "09",
        "39",
        "41",
        "61",
        "08"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "地属性耐性 +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/030.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "地属性耐性 +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "39",
          "41",
          "61"
        ],
        "actor": {
          "id": "g-rock",
          "name": "モブロック",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 184,
          "res": 156,
          "spd": 206,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss005",
        "spboss006",
        "spboss007",
        "spboss008",
        "spboss009",
        "spboss010",
        "spboss012",
        "spboss015",
        "spboss016",
        "spboss017",
        "spboss025",
        "spboss033",
        "spboss034",
        "mq:spbossfig/35",
        "mq:spbossfig/37",
        "mq:spbossfig/39",
        "mq:spbossfig/40",
        "mq:spbossfig/41",
        "mq:spbossfig/42",
        "mq:spbossfig/43",
        "mq:spbossfig/44",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/50"
      ]
    },
    {
      "id": "spboss031",
      "name": "モブピコダーク 超合金",
      "image": "spbossfig/031.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 100,
      "def": 120,
      "attribute": "闇",
      "tags": [
        "09",
        "27",
        "37",
        "48",
        "61"
      ],
      "soulSkill": {
        "name": "すり抜け",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "闇属性耐性 +3% & 回避率1%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/031.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "闇属性耐性 +3% & 回避率1%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "27",
          "37",
          "48",
          "61"
        ],
        "actor": {
          "id": "c-picodark",
          "name": "モブピコダーク",
          "category": "normal",
          "attribute": "闇",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.32999999999999996,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.25
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.1,
            "風": 0,
            "光": 0,
            "闇": 0.15
          },
          "skills": [
            {
              "special": "ミラマソード",
              "kind": "single",
              "power": 1.06,
              "skillElement": "闇",
              "skillType": "physical",
              "v134Formal": true
            },
            {
              "special": "リピートイントロ",
              "kind": "poisonSingle",
              "power": 0.66,
              "chance": 0.18,
              "skillElement": "闇",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "49",
        "99",
        "104",
        "136",
        "157",
        "161",
        "166",
        "spboss004",
        "spboss005",
        "spboss006",
        "spboss007",
        "spboss008",
        "spboss009",
        "spboss010",
        "spboss012",
        "spboss015",
        "spboss016",
        "spboss017",
        "spboss025",
        "spboss033",
        "spboss034",
        "mq:spbossfig/35",
        "mq:spbossfig/37",
        "mq:spbossfig/39",
        "mq:spbossfig/40",
        "mq:spbossfig/41",
        "mq:spbossfig/42",
        "mq:spbossfig/43",
        "mq:spbossfig/44",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/09",
        "mq:eventfig/16"
      ]
    },
    {
      "id": "spboss032",
      "name": "モブデビルスライム 超合金",
      "image": "spbossfig/032.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 100,
      "def": 120,
      "attribute": "水",
      "tags": [
        "09",
        "17",
        "27",
        "37",
        "48"
      ],
      "soulSkill": {
        "name": "すり抜け",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "闇属性与えダメージ +3% & 回避率1%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/032.png",
        "rarity": "SR",
        "statsText": "MND +3",
        "traitText": "闇属性与えダメージ +3% & 回避率1%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "17",
          "27",
          "37",
          "48",
          "50",
          "61"
        ],
        "actor": {
          "id": "c-devilslime",
          "name": "モブデビルスライム",
          "category": "normal",
          "attribute": "水",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.25,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0.15,
            "雷": -0.1,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ネプマチューン",
              "kind": "single",
              "power": 1.02,
              "skillElement": "水",
              "skillType": "magic",
              "v134Formal": true
            },
            {
              "special": "チルローファイ",
              "kind": "sleepSingle",
              "power": 0.66,
              "chance": 0.18,
              "skillElement": "水",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionTargets": [
        "196",
        "95",
        "110",
        "129",
        "144",
        "146",
        "148",
        "183",
        "203",
        "211",
        "213",
        "spboss025",
        "mq:spbossfig/38",
        "mq:eventfig/07",
        "mq:eventfig/11",
        "mq:eventfig/22",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "spboss033",
      "name": "モブミニブック 超合金",
      "image": "spbossfig/033.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 190,
      "attribute": "光",
      "tags": [
        "09",
        "27",
        "33",
        "37",
        "48",
        "53",
        "58"
      ],
      "soulSkill": {
        "name": "集中",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "魔法会心率 +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/033.png",
        "rarity": "SSR",
        "statsText": "MND +5",
        "traitText": "魔法会心率 +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "27",
          "33",
          "37",
          "48",
          "53",
          "58",
          "61"
        ],
        "actor": {
          "id": "c-minibook",
          "name": "モブミニブック",
          "category": "normal",
          "attribute": "光",
          "role": "magic",
          "atk": 184,
          "mag": 202,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.25
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.15,
            "闇": -0.1
          },
          "skills": [
            {
              "special": "ネオマニプール",
              "kind": "single",
              "power": 1.02,
              "skillElement": "光",
              "skillType": "magic",
              "v134Formal": true
            },
            {
              "special": "ノイズスクラッチ",
              "kind": "confuseSingle",
              "power": 0.66,
              "chance": 0.18,
              "skillElement": "光",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss033:family",
          "target": "spboss033",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss033:element",
          "target": "spboss033",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "190",
        "195",
        "170",
        "176",
        "215",
        "216",
        "spboss013"
      ]
    },
    {
      "id": "spboss034",
      "name": "モブアサシン 超合金",
      "image": "spbossfig/034.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 190,
      "def": 165,
      "attribute": "闇",
      "tags": [
        "09",
        "26",
        "34",
        "35",
        "48",
        "53",
        "55"
      ],
      "soulSkill": {
        "name": "集中",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "魔法会心率 +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/034.png",
        "rarity": "SSR",
        "statsText": "SPD +5",
        "traitText": "魔法会心率 +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "26",
          "34",
          "35",
          "48",
          "53",
          "55",
          "61"
        ],
        "actor": {
          "id": "c-assassin",
          "name": "モブアサシン",
          "category": "normal",
          "attribute": "闇",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 291,
          "statusResist": {
            "poison": 0.32999999999999996,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.25
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": -0.1,
            "風": 0,
            "光": 0,
            "闇": 0.15
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "spboss034:family",
          "target": "spboss034",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "spboss034:element",
          "target": "spboss034",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001"
      ]
    },
    {
      "id": "mq:spbossfig/35",
      "name": "モブヒノデビ 超合金",
      "image": "spbossfig/35.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 130,
      "def": 155,
      "attribute": "火",
      "tags": [
        "09",
        "27",
        "47",
        "50",
        "53"
      ],
      "soulSkill": {
        "name": "すり抜け",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "回避率 +1%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/35.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "回避率 +1%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "27",
          "47",
          "50",
          "53",
          "60",
          "61"
        ],
        "actor": {
          "id": "m-hinodevi",
          "name": "モブヒノデビ",
          "category": "normal",
          "attribute": "火",
          "role": "magic",
          "atk": 184,
          "mag": 199,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.37,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0.15,
            "水": -0.1,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ホノマ",
              "kind": "single",
              "power": 0.9,
              "skillElement": "火",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:spbossfig/35:family",
          "target": "mq:spbossfig/35",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:spbossfig/35:element",
          "target": "mq:spbossfig/35",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:spbossfig/36",
      "name": "モブマグトカゲ 超合金",
      "image": "spbossfig/36.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 170,
      "def": 135,
      "attribute": "火",
      "tags": [
        "09",
        "38",
        "47",
        "49",
        "53"
      ],
      "soulSkill": {
        "name": "集中",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のATKを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "火属性与ダメージ +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/36.png",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "火属性与ダメージ +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "38",
          "47",
          "49",
          "53",
          "59",
          "61"
        ],
        "actor": {
          "id": "m-lizard",
          "name": "モブマグトカゲ",
          "category": "normal",
          "attribute": "火",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 281,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.37,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0.15,
            "水": -0.1,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "マグマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "火",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:spbossfig/36:family",
          "target": "mq:spbossfig/36",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "38"
            },
            {
              "tag": "38"
            }
          ],
          "label": "ドラゴン × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:spbossfig/36:element",
          "target": "mq:spbossfig/36",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:spbossfig/37",
      "name": "モブマグゴーレム 超合金",
      "image": "spbossfig/37.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 135,
      "def": 165,
      "attribute": "火",
      "tags": [
        "09",
        "35",
        "39",
        "47",
        "53"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "火属性ダメージ軽減 +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/37.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "火属性ダメージ軽減 +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "35",
          "39",
          "47",
          "53",
          "61"
        ],
        "actor": {
          "id": "m-golem",
          "name": "モブマグゴーレム",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 247,
          "res": 217,
          "spd": 247,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:spbossfig/37:family",
          "target": "mq:spbossfig/37",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:spbossfig/37:element",
          "target": "mq:spbossfig/37",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:spbossfig/38",
      "name": "モブヨーガンスライム 超合金",
      "image": "spbossfig/38.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 185,
      "attribute": "火",
      "tags": [
        "09",
        "17",
        "32",
        "39",
        "47",
        "50",
        "53"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "物理ダメージ軽減 +3% & 会心率1%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/38.png",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "物理ダメージ軽減 +3% & 会心率1%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "17",
          "32",
          "39",
          "47",
          "50",
          "53",
          "56",
          "60",
          "61"
        ],
        "actor": {
          "id": "m2-yogan",
          "name": "モブヨーガンスライム",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 224,
          "mag": 265,
          "def": 217,
          "res": 239,
          "spd": 301,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "evasion": 0,
          "damageReduction": 0,
          "actions": 2,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:spbossfig/38:family",
          "target": "mq:spbossfig/38",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "17"
            },
            {
              "tag": "17"
            }
          ],
          "label": "スライム × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:spbossfig/38:element",
          "target": "mq:spbossfig/38",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "79",
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:spbossfig/39",
      "name": "モブダンサー 超合金",
      "image": "spbossfig/39.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 135,
      "def": 160,
      "attribute": "火",
      "tags": [
        "09",
        "12",
        "43",
        "53",
        "55"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "混乱耐性 +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/39.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "混乱耐性 +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "12",
          "43",
          "53",
          "55",
          "61"
        ],
        "actor": {
          "id": "r-dancer",
          "name": "モブダンサー",
          "category": "elite",
          "attribute": "火",
          "role": "physical",
          "atk": 224,
          "mag": 224,
          "def": 217,
          "res": 217,
          "spd": 331,
          "statusResist": {
            "poison": 0.34,
            "burn": 0.56,
            "paralyze": 0.36,
            "sleep": 0.36,
            "stun": 0.4,
            "confuse": 0.34
          },
          "elementResist": {
            "無": 0,
            "火": 0.22,
            "水": -0.08,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "マグソード",
              "kind": "single",
              "power": 1.1,
              "skillElement": "火",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:spbossfig/39:family",
          "target": "mq:spbossfig/39",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:spbossfig/39:element",
          "target": "mq:spbossfig/39",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:spbossfig/40",
      "name": "モブナイフ 超合金",
      "image": "spbossfig/40.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 140,
      "def": 160,
      "attribute": "地",
      "tags": [
        "09",
        "26",
        "43",
        "49",
        "53"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "混乱耐性 +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/40.png",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "混乱耐性 +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "26",
          "43",
          "49",
          "53",
          "60",
          "61"
        ],
        "actor": {
          "id": "r-knife",
          "name": "モブナイフ",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 202,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 271,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:spbossfig/40:family",
          "target": "mq:spbossfig/40",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:spbossfig/40:element",
          "target": "mq:spbossfig/40",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "mq:spbossfig/41",
      "name": "モブナーガ 超合金",
      "image": "spbossfig/41.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 130,
      "def": 155,
      "attribute": "光",
      "tags": [
        "09",
        "36",
        "44",
        "53",
        "60"
      ],
      "soulSkill": {
        "name": "すり抜け",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "回避率 +1%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/41.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "回避率 +1%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "36",
          "44",
          "53",
          "60",
          "61"
        ],
        "actor": {
          "id": "n-naga",
          "name": "モブナーガ",
          "category": "normal",
          "attribute": "光",
          "role": "magic",
          "atk": 184,
          "mag": 199,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.25
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.15,
            "闇": -0.1
          },
          "skills": [
            {
              "special": "ネオマ",
              "kind": "single",
              "power": 0.9,
              "skillElement": "光",
              "skillType": "magic",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:spbossfig/41:family",
          "target": "mq:spbossfig/41",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:spbossfig/41:element",
          "target": "mq:spbossfig/41",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "190",
        "195",
        "170",
        "176",
        "215",
        "216",
        "spboss013"
      ]
    },
    {
      "id": "mq:spbossfig/42",
      "name": "モブネオントカゲ 超合金",
      "image": "spbossfig/42.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 155,
      "def": 155,
      "attribute": "光",
      "tags": [
        "09",
        "36",
        "49",
        "53",
        "61"
      ],
      "soulSkill": {
        "name": "集中",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のATKを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "会心率 +1%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/42.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "会心率 +1%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "36",
          "49",
          "53",
          "61"
        ],
        "actor": {
          "id": "n-lizard",
          "name": "モブネオントカゲ",
          "category": "normal",
          "attribute": "光",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 281,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.25
          },
          "elementResist": {
            "無": 0,
            "火": 0,
            "水": 0,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0.15,
            "闇": -0.1
          },
          "skills": [
            {
              "special": "ネオマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "光",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:spbossfig/42:family",
          "target": "mq:spbossfig/42",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:spbossfig/42:element",
          "target": "mq:spbossfig/42",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "190",
        "195",
        "170",
        "176",
        "215",
        "216",
        "spboss011",
        "spboss013",
        "spboss014"
      ]
    },
    {
      "id": "mq:spbossfig/43",
      "name": "モブミイラ 超合金",
      "image": "spbossfig/43.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 140,
      "def": 160,
      "attribute": "地",
      "tags": [
        "09",
        "42",
        "53",
        "54",
        "61"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "混乱耐性 +5%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/43.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "混乱耐性 +5%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "42",
          "53",
          "54",
          "61"
        ],
        "actor": {
          "id": "d-mummy",
          "name": "モブミイラ",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:spbossfig/43:family",
          "target": "mq:spbossfig/43",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:spbossfig/43:element",
          "target": "mq:spbossfig/43",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "spboss011",
        "spboss013",
        "spboss014",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "mq:spbossfig/44",
      "name": "モブアドベンチャー 超合金",
      "image": "spbossfig/44.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 140,
      "def": 160,
      "attribute": "火",
      "tags": [
        "09",
        "27",
        "42",
        "53",
        "61"
      ],
      "soulSkill": {
        "name": "守りの構え",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 20
          }
        ],
        "description": "自身のDEFを20上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "ひるみ耐性 +3%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/44.png",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "ひるみ耐性 +3%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "27",
          "42",
          "53",
          "61"
        ],
        "actor": {
          "id": "d-adventure",
          "name": "モブアドベンチャー",
          "category": "normal",
          "attribute": "火",
          "role": "physical",
          "atk": 199,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.37,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0.15,
            "水": -0.1,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "マグソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "火",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:spbossfig/44:family",
          "target": "mq:spbossfig/44",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:spbossfig/44:element",
          "target": "mq:spbossfig/44",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "spboss011",
        "spboss013",
        "spboss014",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:spbossfig/45",
      "name": "モブギミック 超合金",
      "image": "spbossfig/45.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 130,
      "def": 155,
      "attribute": "地",
      "tags": [
        "09",
        "39",
        "42",
        "53",
        "61"
      ],
      "soulSkill": {
        "name": "すり抜け",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "回避率 +2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/45.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "回避率 +2%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "39",
          "42",
          "53",
          "61"
        ],
        "actor": {
          "id": "d-gimmick",
          "name": "モブギミック",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 156,
          "spd": 291,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:spbossfig/45:family",
          "target": "mq:spbossfig/45",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:spbossfig/45:element",
          "target": "mq:spbossfig/45",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "spboss011",
        "spboss013",
        "spboss014",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "mq:spbossfig/46",
      "name": "モブネコミイラ 超合金",
      "image": "spbossfig/46.png",
      "rarity": "SR",
      "soulClass": "middle",
      "atk": 130,
      "def": 155,
      "attribute": "地",
      "tags": [
        "09",
        "27",
        "42",
        "53",
        "54"
      ],
      "soulSkill": {
        "name": "すり抜け",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "回避率 +2%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "image": "spbossfig/46.png",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "回避率 +2%",
        "soul": null,
        "tags": [
          "08",
          "09",
          "27",
          "42",
          "53",
          "54",
          "55",
          "61"
        ],
        "actor": {
          "id": "d-nekomummy",
          "name": "モブネコミイラ",
          "category": "normal",
          "attribute": "地",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 156,
          "res": 168,
          "spd": 251,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.15,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.32999999999999996,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": -0.1,
            "水": 0,
            "雷": 0,
            "地": 0.15,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "ゴレソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "地",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:spbossfig/46:family",
          "target": "mq:spbossfig/46",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "61"
            },
            {
              "tag": "61"
            }
          ],
          "label": "超合金 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:spbossfig/46:element",
          "target": "mq:spbossfig/46",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "mq:eventfig/01",
      "name": "モブビリオン",
      "image": "eventfig/01.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 210,
      "def": 210,
      "attribute": "無",
      "tags": [
        "09",
        "25",
        "32",
        "34",
        "41",
        "51",
        "53",
        "55",
        "71"
      ],
      "soulSkill": {
        "name": "ビリオンラッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理中～大ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/01.png",
        "rarity": "UR",
        "statsText": "ATK + 5 & DEF +5 & HP+10",
        "traitText": "物理会心率 +2% & マヒ耐性+30%",
        "soul": {
          "cost": 6,
          "name": "ビリオンラッシュ",
          "text": "敵単体に無属性の物理中～大ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする"
        },
        "tags": [
          "04",
          "09",
          "25",
          "32",
          "34",
          "41",
          "51",
          "53",
          "55",
          "71",
          "75"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/01:element",
          "target": "mq:eventfig/01",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/02",
      "name": "モブカネドール",
      "image": "eventfig/02.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 310,
      "attribute": "無",
      "tags": [
        "09",
        "25",
        "33",
        "37",
        "42",
        "53",
        "58",
        "73",
        "08"
      ],
      "soulSkill": {
        "name": "カネノオト",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "この戦闘でフィギュアスキルを発動した場合、戦闘終了時の獲得コインと獲得経験値を20%アップする。味方全体のMNDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/02.png",
        "rarity": "UR",
        "statsText": "MND + 5 & DEF +5 & HP+10",
        "traitText": "コイン獲得量 +10% & 経験値獲得量+10%",
        "soul": {
          "cost": 6,
          "name": "カネノオト",
          "text": "この戦闘でフィギュアスキルを発動した場合、戦闘終了時の獲得コインと獲得経験値を20%アップする。味方全体のMNDを2ターンの間15%アップする"
        },
        "tags": [
          "08",
          "09",
          "25",
          "28",
          "33",
          "37",
          "42",
          "53",
          "58",
          "73"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/02:element",
          "target": "mq:eventfig/02",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/03",
      "name": "モブカネドールⅡ",
      "image": "eventfig/03.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 310,
      "attribute": "無",
      "tags": [
        "09",
        "25",
        "32",
        "37",
        "42",
        "53",
        "58",
        "73",
        "81"
      ],
      "soulSkill": {
        "name": "カネノオトDX",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "この戦闘でフィギュアスキルを発動した場合、戦闘終了時の獲得コインと獲得経験値を25%アップする。味方全体のATKとDEFを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/03.png",
        "rarity": "UR",
        "statsText": "ATK + 5 & DEF +5 & HP+10",
        "traitText": "コイン獲得量 +10% & 経験値獲得量+10%",
        "soul": {
          "cost": 6,
          "name": "カネノオトDX",
          "text": "この戦闘でフィギュアスキルを発動した場合、戦闘終了時の獲得コインと獲得経験値を25%アップする。味方全体のATKとDEFを2ターンの間15%アップする"
        },
        "tags": [
          "08",
          "09",
          "25",
          "28",
          "32",
          "37",
          "42",
          "53",
          "58",
          "73",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/03:element",
          "target": "mq:eventfig/03",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/04",
      "name": "モブゼノン",
      "image": "eventfig/04.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 230,
      "def": 200,
      "attribute": "雷",
      "tags": [
        "09",
        "25",
        "32",
        "37",
        "43",
        "51",
        "53",
        "58",
        "79"
      ],
      "soulSkill": {
        "name": "ゼノボルト",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemy",
            "value": 30
          }
        ],
        "description": "選んだ相手1体のATKを30下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に雷属性の魔法中～大ダメージを与え、40%でマヒにする。発動後、自分の必殺技CTを1ターン短縮する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/04.png",
        "rarity": "UR",
        "statsText": "ATK + 5 & SPD +5 & MP+20",
        "traitText": "雷属性ダメージ軽減 +5% & マヒ耐性+30%",
        "soul": {
          "cost": 6,
          "name": "ゼノボルト",
          "text": "敵単体に雷属性の魔法中～大ダメージを与え、40%でマヒにする。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "tags": [
          "03",
          "09",
          "25",
          "32",
          "37",
          "43",
          "51",
          "53",
          "58",
          "79"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/04:element",
          "target": "mq:eventfig/04",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "188",
        "175",
        "spboss014",
        "mq:eventfig/29",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "mq:eventfig/05",
      "name": "モブサイキック",
      "image": "eventfig/05.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 220,
      "def": 190,
      "attribute": "無",
      "tags": [
        "09",
        "25",
        "32",
        "36",
        "44",
        "51",
        "53",
        "55",
        "79"
      ],
      "soulSkill": {
        "name": "サイコリバース",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          },
          {
            "type": "break",
            "target": "enemy",
            "value": 10
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。選んだ相手1体のDEFを10下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に無属性の魔法中ダメージを与え、SPDとDEFを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/05.png",
        "rarity": "UR",
        "statsText": "ATK + 5 & SPD +5 & HP+10",
        "traitText": "回避率 +5% & マヒ耐性+30%",
        "soul": {
          "cost": 6,
          "name": "サイコリバース",
          "text": "敵全体に無属性の魔法中ダメージを与え、SPDとDEFを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "09",
          "25",
          "31",
          "32",
          "36",
          "44",
          "51",
          "53",
          "55",
          "79"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/05:element",
          "target": "mq:eventfig/05",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/06",
      "name": "モブマグロック",
      "image": "eventfig/06.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 195,
      "def": 220,
      "attribute": "火",
      "tags": [
        "09",
        "25",
        "36",
        "39",
        "47",
        "53",
        "68",
        "03"
      ],
      "soulSkill": {
        "name": "マグロックガード",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFとMNDを2ターンの間20%アップし、状態異常耐性を30%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/06.png",
        "rarity": "UR",
        "statsText": "ATK + 3 & DEF +10",
        "traitText": "火属性ダメージ軽減 +5% & やけど耐性+30%",
        "soul": {
          "cost": 6,
          "name": "マグロックガード",
          "text": "味方全体のDEFとMNDを2ターンの間20%アップし、状態異常耐性を30%アップする"
        },
        "tags": [
          "03",
          "09",
          "25",
          "36",
          "39",
          "47",
          "53",
          "68"
        ],
        "actor": {
          "id": "m-magrock",
          "name": "モブマグロック",
          "category": "normal",
          "attribute": "火",
          "role": "physical",
          "atk": 184,
          "mag": 184,
          "def": 184,
          "res": 156,
          "spd": 206,
          "statusResist": {
            "poison": 0.15,
            "burn": 0.37,
            "paralyze": 0.15,
            "sleep": 0.15,
            "stun": 0.15,
            "confuse": 0.15
          },
          "elementResist": {
            "無": 0,
            "火": 0.15,
            "水": -0.1,
            "雷": 0,
            "地": 0,
            "風": 0,
            "光": 0,
            "闇": 0
          },
          "skills": [
            {
              "special": "マグマソード",
              "kind": "single",
              "power": 0.94,
              "skillElement": "火",
              "skillType": "physical",
              "v134Formal": true
            }
          ],
          "evasion": 0,
          "damageReduction": 0,
          "latestEncounterOverride": null
        },
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原キャラクター。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/06:family",
          "target": "mq:eventfig/06",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "68"
            },
            {
              "tag": "68"
            }
          ],
          "label": "怪獣 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/06:element",
          "target": "mq:eventfig/06",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/31",
        "mq:eventfig/32",
        "mq:eventfig/52",
        "mq:eventfig/53",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "mq:eventfig/07",
      "name": "モブマリンソルジャー",
      "image": "eventfig/07.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 195,
      "def": 220,
      "attribute": "水",
      "tags": [
        "09",
        "25",
        "32",
        "45",
        "49",
        "53",
        "55",
        "56",
        "31"
      ],
      "soulSkill": {
        "name": "マリンランス",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理中～大ダメージを与え、自分のATKとDEFを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/07.png",
        "rarity": "UR",
        "statsText": "ATK + 7 & DEF +6",
        "traitText": "水属性ダメージ軽減 +5% & ひるみ耐性+30%",
        "soul": {
          "cost": 6,
          "name": "マリンランス",
          "text": "敵単体に水属性の物理中～大ダメージを与え、自分のATKとDEFを2ターンの間20%アップする"
        },
        "tags": [
          "09",
          "25",
          "31",
          "32",
          "45",
          "49",
          "53",
          "55",
          "56"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/07:element",
          "target": "mq:eventfig/07",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "mq:eventfig/08",
      "name": "モブリーフガード",
      "image": "eventfig/08.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 195,
      "def": 220,
      "attribute": "地",
      "tags": [
        "09",
        "25",
        "32",
        "35",
        "39",
        "43",
        "53",
        "66",
        "68"
      ],
      "soulSkill": {
        "name": "リーフウォール",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFを2ターンの間30%アップし、ダメージ軽減を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/08.png",
        "rarity": "UR",
        "statsText": "ATK + 5 & DEF +10",
        "traitText": "地属性ダメージ軽減 +5% & 混乱耐性+30%",
        "soul": {
          "cost": 6,
          "name": "リーフウォール",
          "text": "味方全体のDEFを2ターンの間30%アップし、ダメージ軽減を5%アップする"
        },
        "tags": [
          "09",
          "25",
          "32",
          "35",
          "39",
          "43",
          "53",
          "66",
          "68",
          "77"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/08:family",
          "target": "mq:eventfig/08",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "68"
            },
            {
              "tag": "68"
            }
          ],
          "label": "怪獣 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/08:element",
          "target": "mq:eventfig/08",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/23",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/31",
        "mq:eventfig/32",
        "mq:eventfig/52",
        "mq:eventfig/53",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "mq:eventfig/09",
      "name": "モブスカルソード",
      "image": "eventfig/09.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 230,
      "def": 200,
      "attribute": "闇",
      "tags": [
        "09",
        "25",
        "32",
        "43",
        "49",
        "53",
        "57",
        "28",
        "29"
      ],
      "soulSkill": {
        "name": "スカルクロス",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemy",
            "value": 30
          }
        ],
        "description": "選んだ相手1体のATKを30下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に闇属性の物理中～大ダメージを与え、30%で毒にする。自分の会心率を2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/09.png",
        "rarity": "UR",
        "statsText": "MAG + 7 & ATK +7",
        "traitText": "毒耐性 +30% & ひるみ耐性+20%",
        "soul": {
          "cost": 6,
          "name": "スカルクロス",
          "text": "敵単体に闇属性の物理中～大ダメージを与え、30%で毒にする。自分の会心率を2ターンの間10%アップする"
        },
        "tags": [
          "09",
          "25",
          "28",
          "29",
          "32",
          "43",
          "49",
          "53",
          "57"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/09:element",
          "target": "mq:eventfig/09",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001"
      ]
    },
    {
      "id": "mq:eventfig/10",
      "name": "モブポーション",
      "image": "eventfig/10.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 195,
      "def": 220,
      "attribute": "風",
      "tags": [
        "09",
        "25",
        "37",
        "38",
        "43",
        "53",
        "57",
        "58",
        "60"
      ],
      "soulSkill": {
        "name": "ポーションシャワー",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 30
          },
          {
            "type": "cleanse",
            "target": "allies",
            "value": 0
          }
        ],
        "description": "自分のライフを30回復（上限400）。味方全体のATK・DEF低下を解除する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを30%回復し、状態異常を1つ解除する。さらにMNDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/10.png",
        "rarity": "UR",
        "statsText": "MND + 7 & DEF +6",
        "traitText": "魔法会心率 +5% & 眠り耐性+40%",
        "soul": {
          "cost": 6,
          "name": "ポーションシャワー",
          "text": "味方全体のHPを30%回復し、状態異常を1つ解除する。さらにMNDを2ターンの間15%アップする"
        },
        "tags": [
          "09",
          "25",
          "29",
          "37",
          "38",
          "43",
          "53",
          "57",
          "58",
          "60",
          "75"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/10:family",
          "target": "mq:eventfig/10",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "38"
            },
            {
              "tag": "38"
            }
          ],
          "label": "ドラゴン × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/10:element",
          "target": "mq:eventfig/10",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "199",
        "160",
        "169",
        "mq:eventfig/31",
        "mq:eventfig/44",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/11",
      "name": "モブバブルボール",
      "image": "eventfig/11.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 215,
      "def": 215,
      "attribute": "水",
      "tags": [
        "09",
        "25",
        "32",
        "36",
        "37",
        "44",
        "53",
        "57",
        "60"
      ],
      "soulSkill": {
        "name": "バブルリフレクト",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemies",
            "value": 30
          }
        ],
        "description": "相手全体のATKを30下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のATKを2ターンの間20%ダウンさせ、味方全体のDEFを15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/11.png",
        "rarity": "UR",
        "statsText": "ATK + 5 & DEF +5 & MP+20",
        "traitText": "消費MP -10% & 混乱耐性+30%",
        "soul": {
          "cost": 6,
          "name": "バブルリフレクト",
          "text": "敵全体のATKを2ターンの間20%ダウンさせ、味方全体のDEFを15%アップする"
        },
        "tags": [
          "09",
          "25",
          "31",
          "32",
          "36",
          "37",
          "44",
          "53",
          "57",
          "60",
          "76"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/11:element",
          "target": "mq:eventfig/11",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/32"
      ]
    },
    {
      "id": "mq:eventfig/12",
      "name": "モブレッドバード",
      "image": "eventfig/12.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 310,
      "def": 290,
      "attribute": "火",
      "tags": [
        "09",
        "25",
        "34",
        "47",
        "50",
        "53",
        "55",
        "73",
        "75"
      ],
      "soulSkill": {
        "name": "レッドウイング",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemy",
            "value": 30
          }
        ],
        "description": "選んだ相手1体のATKを30下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中～大ダメージを与え、自分のSPDを2ターンの間25%アップする。35%でやけどにする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/12.png",
        "rarity": "UR",
        "statsText": "ATK + 7 & SPD +7",
        "traitText": "火属性耐性 +15% & やけど耐性+30%",
        "soul": {
          "cost": 6,
          "name": "レッドウイング",
          "text": "敵単体に火属性の物理中～大ダメージを与え、自分のSPDを2ターンの間25%アップする。35%でやけどにする"
        },
        "tags": [
          "03",
          "09",
          "25",
          "34",
          "47",
          "50",
          "53",
          "55",
          "73",
          "75"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/12:element",
          "target": "mq:eventfig/12",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/13",
      "name": "モブブルーバード",
      "image": "eventfig/13.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 310,
      "attribute": "水",
      "tags": [
        "09",
        "25",
        "34",
        "47",
        "50",
        "53",
        "73",
        "75",
        "31"
      ],
      "soulSkill": {
        "name": "ブルーウイング",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に水属性の物理中～大ダメージを与え、自分のSPDとDEFを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/13.png",
        "rarity": "UR",
        "statsText": "DEF + 7 & SPD +7",
        "traitText": "火属与ダメージ +10% & やけど耐性+30%",
        "soul": {
          "cost": 6,
          "name": "ブルーウイング",
          "text": "敵単体に水属性の物理中～大ダメージを与え、自分のSPDとDEFを2ターンの間20%アップする"
        },
        "tags": [
          "09",
          "25",
          "31",
          "34",
          "47",
          "50",
          "53",
          "73",
          "75"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/13:element",
          "target": "mq:eventfig/13",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/14",
      "name": "モブミラスイーツ",
      "image": "eventfig/14.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 310,
      "attribute": "無",
      "tags": [
        "09",
        "18",
        "23",
        "25",
        "30",
        "37",
        "42",
        "53",
        "54"
      ],
      "soulSkill": {
        "name": "ミラパフェ",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 30
          }
        ],
        "description": "自分のライフを30回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを30%回復し、MNDを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/14.png",
        "rarity": "UR",
        "statsText": "HP +60",
        "traitText": "状態異常耐性 +5% & 混乱耐性+30%",
        "soul": {
          "cost": 6,
          "name": "ミラパフェ",
          "text": "味方全体のHPを30%回復し、MNDを2ターンの間20%アップする"
        },
        "tags": [
          "08",
          "09",
          "18",
          "23",
          "25",
          "30",
          "37",
          "42",
          "53",
          "54",
          "57",
          "65",
          "73",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/14:family",
          "target": "mq:eventfig/14",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "65"
            },
            {
              "tag": "65"
            }
          ],
          "label": "スイーツ × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/14:element",
          "target": "mq:eventfig/14",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/15",
      "name": "モブデーモン",
      "image": "eventfig/15.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 215,
      "def": 215,
      "attribute": "火",
      "tags": [
        "09",
        "25",
        "26",
        "32",
        "34",
        "36",
        "48",
        "53",
        "55"
      ],
      "soulSkill": {
        "name": "デモンクロー",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のATKを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中～大ダメージを与え、ATKとDEFを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/15.png",
        "rarity": "UR",
        "statsText": "",
        "traitText": "ダメージ軽減 +5%",
        "soul": {
          "cost": 6,
          "name": "デモンクロー",
          "text": "敵単体に火属性の物理中～大ダメージを与え、ATKとDEFを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "03",
          "09",
          "25",
          "26",
          "32",
          "34",
          "36",
          "48",
          "53",
          "55",
          "57",
          "66",
          "74"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/15:element",
          "target": "mq:eventfig/15",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/16",
      "name": "モブ魔王スライム",
      "image": "eventfig/16.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 195,
      "def": 220,
      "attribute": "闇",
      "tags": [
        "09",
        "25",
        "26",
        "32",
        "35",
        "39",
        "48",
        "53",
        "57"
      ],
      "soulSkill": {
        "name": "マオウスライド",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のDEFを2ターンの間55%アップし、物理ダメージ軽減を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/16.png",
        "rarity": "UR",
        "statsText": "",
        "traitText": "闇属性耐性 +15% & 毒耐性+30%",
        "soul": {
          "cost": 6,
          "name": "マオウスライド",
          "text": "自分のDEFを2ターンの間55%アップし、物理ダメージ軽減を10%アップする"
        },
        "tags": [
          "05",
          "09",
          "25",
          "26",
          "32",
          "35",
          "39",
          "48",
          "53",
          "57",
          "67",
          "74"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/16:family",
          "target": "mq:eventfig/16",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "67"
            },
            {
              "tag": "67"
            }
          ],
          "label": "もちもち × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/16:element",
          "target": "mq:eventfig/16",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "162",
        "207",
        "217",
        "218",
        "spboss001"
      ]
    },
    {
      "id": "mq:eventfig/17",
      "name": "モブミズサバンナ",
      "image": "eventfig/17.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 100,
      "def": 120,
      "attribute": "無",
      "tags": [
        "09",
        "41",
        "55",
        "71",
        "78"
      ],
      "soulSkill": {
        "name": "ミズダッシュ",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDを2ターンの間30%アップし、回避率を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/17.png",
        "rarity": "SR",
        "statsText": "SPD + 3",
        "traitText": "回避率+1%",
        "soul": {
          "cost": 4,
          "name": "ミズダッシュ",
          "text": "自分のSPDを2ターンの間30%アップし、回避率を10%アップする"
        },
        "tags": [
          "09",
          "31",
          "41",
          "55",
          "71",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "mq:eventfig/18",
      "name": "モブカゼサバンナ",
      "image": "eventfig/18.png",
      "rarity": "SR",
      "soulClass": "seed",
      "atk": 120,
      "def": 120,
      "attribute": "無",
      "tags": [
        "09",
        "41",
        "55",
        "71",
        "78"
      ],
      "soulSkill": {
        "name": "カゼダッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemies",
            "value": 20
          }
        ],
        "description": "相手全体のATKを20下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のSPDを2ターンの間10%ダウンさせ、自分のSPDを10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/18.png",
        "rarity": "SR",
        "statsText": "SPD + 3",
        "traitText": "回避率+1%",
        "soul": {
          "cost": 4,
          "name": "カゼダッシュ",
          "text": "敵全体のSPDを2ターンの間10%ダウンさせ、自分のSPDを10%アップする"
        },
        "tags": [
          "02",
          "09",
          "41",
          "55",
          "71",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "mq:eventfig/19",
      "name": "モブナギサバンナ",
      "image": "eventfig/19.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 180,
      "def": 180,
      "attribute": "無",
      "tags": [
        "09",
        "32",
        "41",
        "53",
        "55",
        "71",
        "78"
      ],
      "soulSkill": {
        "name": "ナギダッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemies",
            "value": 25
          }
        ],
        "description": "相手全体のATKを25下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のSPDを2ターンの間15%ダウンさせ、自分のSPDを15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/19.png",
        "rarity": "SSR",
        "statsText": "SPD + 3",
        "traitText": "回避率+3%",
        "soul": {
          "cost": 5,
          "name": "ナギダッシュ",
          "text": "敵全体のSPDを2ターンの間15%ダウンさせ、自分のSPDを15%アップする"
        },
        "tags": [
          "02",
          "09",
          "31",
          "32",
          "41",
          "53",
          "55",
          "71",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/19:element",
          "target": "mq:eventfig/19",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/20",
      "name": "モブメタルサバンナ",
      "image": "eventfig/20.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 200,
      "def": 230,
      "attribute": "無",
      "tags": [
        "09",
        "32",
        "39",
        "41",
        "53",
        "55",
        "57",
        "71",
        "78"
      ],
      "soulSkill": {
        "name": "メタルダッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 30
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを30上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDを2ターンの間20%アップし、命中率を15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/20.png",
        "rarity": "UR",
        "statsText": "SPD + 3 & DEF +5",
        "traitText": "ダメージ軽減+3%",
        "soul": {
          "cost": 6,
          "name": "メタルダッシュ",
          "text": "味方全体のSPDを2ターンの間20%アップし、命中率を15%アップする"
        },
        "tags": [
          "08",
          "09",
          "32",
          "39",
          "41",
          "53",
          "55",
          "57",
          "71",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/20:element",
          "target": "mq:eventfig/20",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/21",
      "name": "モブファイト",
      "image": "eventfig/21.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 155,
      "attribute": "火",
      "tags": [
        "09",
        "17",
        "23",
        "34",
        "40",
        "41",
        "56"
      ],
      "soulSkill": {
        "name": "ファイトラッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          }
        ],
        "description": "自身のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性の物理中ダメージを与え、ATKを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/21.png",
        "rarity": "SSR",
        "statsText": "DEF + 3",
        "traitText": "全属性耐性+3%",
        "soul": {
          "cost": 5,
          "name": "ファイトラッシュ",
          "text": "敵単体に火属性の物理中ダメージを与え、ATKを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "03",
          "04",
          "09",
          "17",
          "23",
          "34",
          "40",
          "41",
          "56",
          "67",
          "70",
          "72",
          "73"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "31",
        "51",
        "94",
        "111",
        "137",
        "143",
        "145",
        "147",
        "148",
        "156",
        "158",
        "202",
        "167",
        "168",
        "181",
        "206",
        "212",
        "214",
        "spboss002",
        "spboss003",
        "spboss018",
        "mq:spbossfig/35",
        "mq:spbossfig/36",
        "mq:spbossfig/37",
        "mq:spbossfig/38",
        "mq:spbossfig/39",
        "mq:spbossfig/44",
        "mq:eventfig/06",
        "mq:eventfig/15",
        "mq:eventfig/22",
        "mq:eventfig/39",
        "mq:eventfig/43",
        "mq:eventfig/49"
      ]
    },
    {
      "id": "mq:eventfig/22",
      "name": "モブパッション",
      "image": "eventfig/22.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 200,
      "def": 230,
      "attribute": "火",
      "tags": [
        "09",
        "17",
        "23",
        "32",
        "34",
        "40",
        "41",
        "47",
        "56"
      ],
      "soulSkill": {
        "name": "パッションガード",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemies",
            "value": 30
          }
        ],
        "description": "相手全体のATKを30下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のATKを2ターンの間20%ダウンさせ、味方全体のDEFを15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/22.png",
        "rarity": "UR",
        "statsText": "DEF +8",
        "traitText": "物理ダメージ軽減+8%",
        "soul": {
          "cost": 6,
          "name": "パッションガード",
          "text": "敵全体のATKを2ターンの間20%ダウンさせ、味方全体のDEFを15%アップする"
        },
        "tags": [
          "03",
          "04",
          "09",
          "17",
          "23",
          "32",
          "34",
          "40",
          "41",
          "47",
          "56",
          "58",
          "67",
          "70",
          "72",
          "73"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/22:family",
          "target": "mq:eventfig/22",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "17"
            },
            {
              "tag": "17"
            }
          ],
          "label": "スライム × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/22:element",
          "target": "mq:eventfig/22",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "79",
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/23",
      "name": "モブフェニックス",
      "image": "eventfig/23.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 310,
      "attribute": "火",
      "tags": [
        "09",
        "25",
        "30",
        "32",
        "36",
        "39",
        "47",
        "50",
        "53"
      ],
      "soulSkill": {
        "name": "フェニックスリバース",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 30
          },
          {
            "type": "cleanse",
            "target": "allies",
            "value": 0
          }
        ],
        "description": "自分のライフを30回復（上限400）。味方全体のATK・DEF低下を解除する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを35%回復し、やけどを解除する。HP30%以下の味方は追加で15%回復する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/23.png",
        "rarity": "UR",
        "statsText": "DEF +10 & HP +100",
        "traitText": "回復量 +20% & やけど耐性+50%",
        "soul": {
          "cost": 6,
          "name": "フェニックスリバース",
          "text": "味方全体のHPを35%回復し、やけどを解除する。HP30%以下の味方は追加で15%回復する"
        },
        "tags": [
          "03",
          "08",
          "09",
          "25",
          "30",
          "32",
          "36",
          "39",
          "47",
          "50",
          "53",
          "56",
          "58",
          "60",
          "66",
          "68",
          "71",
          "74",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/23:family",
          "target": "mq:eventfig/23",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "68"
            },
            {
              "tag": "68"
            }
          ],
          "label": "怪獣 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/23:element",
          "target": "mq:eventfig/23",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/24",
      "name": "モブカスタード",
      "image": "eventfig/24.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "atk": 255,
      "def": 280,
      "attribute": "地",
      "tags": [
        "27",
        "33",
        "36",
        "37",
        "53",
        "59",
        "65"
      ],
      "soulSkill": {
        "name": "カスタードガード",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 25
          }
        ],
        "description": "自分のライフを25回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを25%回復し、魔法ダメージ軽減を2ターンの間8%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/24.png",
        "rarity": "SSR",
        "statsText": "DEF +5 & MND +5",
        "traitText": "魔法ダメージ軽減+5%",
        "soul": {
          "cost": 5,
          "name": "カスタードガード",
          "text": "味方全体のHPを25%回復し、魔法ダメージ軽減を2ターンの間8%アップする"
        },
        "tags": [
          "04",
          "27",
          "29",
          "33",
          "36",
          "37",
          "53",
          "59",
          "65",
          "73",
          "77",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/24:family",
          "target": "mq:eventfig/24",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "65"
            },
            {
              "tag": "65"
            }
          ],
          "label": "スイーツ × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/24:element",
          "target": "mq:eventfig/24",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/25",
      "name": "モブリスカスタード",
      "image": "eventfig/25.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 310,
      "attribute": "地",
      "tags": [
        "09",
        "27",
        "33",
        "36",
        "37",
        "53",
        "59",
        "65",
        "73"
      ],
      "soulSkill": {
        "name": "カスタードMAX",
        "timing": "own-main",
        "effects": [
          {
            "type": "heal",
            "target": "life",
            "value": 30
          }
        ],
        "description": "自分のライフを30回復（上限400）。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のHPを30%回復し、MNDを2ターンの間20%・魔法ダメージ軽減を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/25.png",
        "rarity": "UR",
        "statsText": "DEF +8 & MND +10",
        "traitText": "魔法ダメージ軽減+10%",
        "soul": {
          "cost": 6,
          "name": "カスタードMAX",
          "text": "味方全体のHPを30%回復し、MNDを2ターンの間20%・魔法ダメージ軽減を10%アップする"
        },
        "tags": [
          "04",
          "08",
          "09",
          "27",
          "29",
          "33",
          "36",
          "37",
          "53",
          "59",
          "65",
          "73",
          "77",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/25:family",
          "target": "mq:eventfig/25",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "65"
            },
            {
              "tag": "65"
            }
          ],
          "label": "スイーツ × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/25:element",
          "target": "mq:eventfig/25",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/26",
      "name": "モブマグネットM",
      "image": "eventfig/26.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 155,
      "attribute": "雷",
      "tags": [
        "09",
        "39",
        "44",
        "49",
        "51",
        "58",
        "64"
      ],
      "soulSkill": {
        "name": "マグプル",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemies",
            "value": 25
          }
        ],
        "description": "相手全体のATKを25下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のSPDを2ターンの間15%ダウンさせ、味方全体のMNDを15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/26.png",
        "rarity": "SSR",
        "statsText": "SPD +5 & MND +5",
        "traitText": "マヒ耐性+35%",
        "soul": {
          "cost": 5,
          "name": "マグプル",
          "text": "敵全体のSPDを2ターンの間15%ダウンさせ、味方全体のMNDを15%アップする"
        },
        "tags": [
          "04",
          "08",
          "09",
          "39",
          "44",
          "49",
          "51",
          "58",
          "64",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionTargets": [
        "92",
        "182",
        "mq:eventfig/04"
      ]
    },
    {
      "id": "mq:eventfig/27",
      "name": "モブマグネットO",
      "image": "eventfig/27.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 145,
      "def": 145,
      "attribute": "雷",
      "tags": [
        "09",
        "39",
        "44",
        "49",
        "51",
        "58",
        "64"
      ],
      "soulSkill": {
        "name": "マグサークル",
        "timing": "own-main",
        "effects": [
          {
            "type": "break",
            "target": "enemies",
            "value": 25
          }
        ],
        "description": "相手全体のDEFを25下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のDEFを2ターンの間15%ダウンさせ、味方全体のMAGを15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/27.png",
        "rarity": "SSR",
        "statsText": "MAG +5 & MND +5",
        "traitText": "雷属性会心率+5%",
        "soul": {
          "cost": 5,
          "name": "マグサークル",
          "text": "敵全体のDEFを2ターンの間15%ダウンさせ、味方全体のMAGを15%アップする"
        },
        "tags": [
          "02",
          "08",
          "09",
          "39",
          "44",
          "49",
          "51",
          "58",
          "64",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "92",
        "182",
        "mq:eventfig/04"
      ]
    },
    {
      "id": "mq:eventfig/28",
      "name": "モブマグネットB",
      "image": "eventfig/28.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 150,
      "def": 130,
      "attribute": "雷",
      "tags": [
        "09",
        "39",
        "44",
        "49",
        "51",
        "58",
        "64"
      ],
      "soulSkill": {
        "name": "マグブースト",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 25
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "味方全体のATKを25上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のATKとSPDを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/28.png",
        "rarity": "SSR",
        "statsText": "ATK +5 & SPD +5",
        "traitText": "雷属性物理与ダメージ+8%",
        "soul": {
          "cost": 5,
          "name": "マグブースト",
          "text": "味方全体のATKとSPDを2ターンの間20%アップする"
        },
        "tags": [
          "03",
          "08",
          "09",
          "39",
          "44",
          "49",
          "51",
          "58",
          "64",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionTargets": [
        "92",
        "182",
        "mq:eventfig/04"
      ]
    },
    {
      "id": "mq:eventfig/29",
      "name": "モブマグネットMOB",
      "image": "eventfig/29.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 315,
      "attribute": "雷",
      "tags": [
        "09",
        "39",
        "44",
        "51",
        "53",
        "59",
        "58",
        "64",
        "70"
      ],
      "soulSkill": {
        "name": "マグフル",
        "timing": "own-main",
        "effects": [
          {
            "type": "break",
            "target": "enemies",
            "value": 30
          }
        ],
        "description": "相手全体のDEFを30下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のATK・DEF・SPDを2ターンの間10%ダウンさせ、味方全体のDEF・SPDを15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/29.png",
        "rarity": "UR",
        "statsText": "DEF +8 & SPD +8",
        "traitText": "雷属性与ダメージ+10%",
        "soul": {
          "cost": 6,
          "name": "マグフル",
          "text": "敵全体のATK・DEF・SPDを2ターンの間10%ダウンさせ、味方全体のDEF・SPDを15%アップする"
        },
        "tags": [
          "03",
          "08",
          "09",
          "39",
          "44",
          "51",
          "53",
          "59",
          "58",
          "64",
          "70",
          "73",
          "81",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/29:element",
          "target": "mq:eventfig/29",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/30",
      "name": "モブトイティラ",
      "image": "eventfig/30.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 165,
      "def": 190,
      "attribute": "風",
      "tags": [
        "09",
        "27",
        "36",
        "53",
        "64",
        "68",
        "71"
      ],
      "soulSkill": {
        "name": "トイラッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 25
          },
          {
            "type": "guard",
            "target": "self",
            "value": 10
          }
        ],
        "description": "自身のATKを25上げる。自身のDEFを10上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に風属性の物理中ダメージを与え、自分のSPDを2ターンの間15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/30.png",
        "rarity": "SSR",
        "statsText": "DEF +5 & SPD +5",
        "traitText": "風属性与ダメージ+8%",
        "soul": {
          "cost": 5,
          "name": "トイラッシュ",
          "text": "敵単体に風属性の物理中ダメージを与え、自分のSPDを2ターンの間15%アップする"
        },
        "tags": [
          "02",
          "09",
          "27",
          "36",
          "53",
          "64",
          "68",
          "71",
          "78",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/30:family",
          "target": "mq:eventfig/30",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "68"
            },
            {
              "tag": "68"
            }
          ],
          "label": "怪獣 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/30:element",
          "target": "mq:eventfig/30",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "199",
        "160",
        "mq:eventfig/23",
        "mq:eventfig/31",
        "mq:eventfig/32",
        "mq:eventfig/52",
        "mq:eventfig/53",
        "mq:eventfig/55",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/31",
      "name": "モブトイティラ・ムシャ",
      "image": "eventfig/31.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "atk": 250,
      "def": 280,
      "attribute": "風",
      "tags": [
        "09",
        "27",
        "36",
        "53",
        "64",
        "68",
        "71"
      ],
      "soulSkill": {
        "name": "ムシャトイ",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に風属性の物理中ダメージを2回与え、自分の会心率を2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/31.png",
        "rarity": "SSR",
        "statsText": "DEF +5 & HP +15",
        "traitText": "風属性与ダメージ+8%",
        "soul": {
          "cost": 5,
          "name": "ムシャトイ",
          "text": "敵単体に風属性の物理中ダメージを2回与え、自分の会心率を2ターンの間10%アップする"
        },
        "tags": [
          "02",
          "09",
          "27",
          "36",
          "53",
          "64",
          "68",
          "71",
          "73",
          "78",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/31:family",
          "target": "mq:eventfig/31",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "68"
            },
            {
              "tag": "68"
            }
          ],
          "label": "怪獣 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/31:element",
          "target": "mq:eventfig/31",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/32",
      "name": "モブトイティラ・ビーム",
      "image": "eventfig/32.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "atk": 250,
      "def": 280,
      "attribute": "水",
      "tags": [
        "09",
        "27",
        "36",
        "53",
        "60",
        "64",
        "68"
      ],
      "soulSkill": {
        "name": "トイビーム",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          },
          {
            "type": "break",
            "target": "enemy",
            "value": 10
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。選んだ相手1体のDEFを10下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に水属性の魔法中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/32.png",
        "rarity": "SSR",
        "statsText": "DEF +5 & HP +15",
        "traitText": "風属性与ダメージ+6%",
        "soul": {
          "cost": 5,
          "name": "トイビーム",
          "text": "敵全体に水属性の魔法中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "tags": [
          "09",
          "27",
          "31",
          "36",
          "53",
          "60",
          "64",
          "68",
          "71",
          "73",
          "78",
          "80",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/32:family",
          "target": "mq:eventfig/32",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "68"
            },
            {
              "tag": "68"
            }
          ],
          "label": "怪獣 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/32:element",
          "target": "mq:eventfig/32",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/33",
      "name": "モブトイティラ・モチ",
      "image": "eventfig/33.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 285,
      "def": 310,
      "attribute": "無",
      "tags": [
        "09",
        "18",
        "27",
        "36",
        "53",
        "64",
        "65",
        "67",
        "68"
      ],
      "soulSkill": {
        "name": "モチトイ",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に無属性の物理小～中ダメージを与え、味方全体のDEFとHPを15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/33.png",
        "rarity": "UR",
        "statsText": "DEF +10 & HP +25",
        "traitText": "風属性与会心率+8%",
        "soul": {
          "cost": 6,
          "name": "モチトイ",
          "text": "敵全体に無属性の物理小～中ダメージを与え、味方全体のDEFとHPを15%アップする"
        },
        "tags": [
          "02",
          "09",
          "18",
          "27",
          "36",
          "53",
          "64",
          "65",
          "67",
          "68",
          "70",
          "71",
          "73",
          "77",
          "78",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/33:family",
          "target": "mq:eventfig/33",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "65"
            },
            {
              "tag": "65"
            }
          ],
          "label": "スイーツ × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/33:element",
          "target": "mq:eventfig/33",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/34",
      "name": "モブスラモチ",
      "image": "eventfig/34.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 150,
      "attribute": "風",
      "tags": [
        "09",
        "17",
        "18",
        "27",
        "60",
        "65",
        "67"
      ],
      "soulSkill": {
        "name": "モチスライド",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のDEFを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFを2ターンの間20%アップし、物理ダメージ軽減を8%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/34.png",
        "rarity": "SSR",
        "statsText": "DEF +7",
        "traitText": "物理ダメージ軽減+3%",
        "soul": {
          "cost": 5,
          "name": "モチスライド",
          "text": "味方全体のDEFを2ターンの間20%アップし、物理ダメージ軽減を8%アップする"
        },
        "tags": [
          "09",
          "17",
          "18",
          "27",
          "28",
          "60",
          "65",
          "67",
          "69",
          "75",
          "77",
          "78",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionTargets": [
        "50",
        "96",
        "134",
        "148",
        "159",
        "spboss008",
        "spboss009",
        "spboss016",
        "mq:spbossfig/38",
        "mq:eventfig/10",
        "mq:eventfig/16",
        "mq:eventfig/22",
        "mq:eventfig/30",
        "mq:eventfig/40",
        "mq:eventfig/43",
        "mq:eventfig/59",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "mq:eventfig/35",
      "name": "モブバリオン",
      "image": "eventfig/35.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 285,
      "def": 310,
      "attribute": "無",
      "tags": [
        "09",
        "25",
        "32",
        "34",
        "41",
        "53",
        "55",
        "71",
        "73"
      ],
      "soulSkill": {
        "name": "バリオンラッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に無属性の物理中～大ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/35.png",
        "rarity": "UR",
        "statsText": "SPD + 5 & DEF +5 & HP+10",
        "traitText": "物理会心率 +2% & ひるみ耐性+30%",
        "soul": {
          "cost": 8,
          "name": "バリオンラッシュ",
          "text": "敵単体に無属性の物理中～大ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする"
        },
        "tags": [
          "09",
          "25",
          "29",
          "32",
          "34",
          "41",
          "53",
          "55",
          "71",
          "73",
          "75"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/35:element",
          "target": "mq:eventfig/35",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/36",
      "name": "モブコブチー",
      "image": "eventfig/36.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 200,
      "def": 230,
      "attribute": "地",
      "tags": [
        "09",
        "27",
        "33",
        "34",
        "42",
        "53",
        "54",
        "55",
        "68"
      ],
      "soulSkill": {
        "name": "コブチーキック",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のATKを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に地属性の物理中～大ダメージを与える",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/36.png",
        "rarity": "UR",
        "statsText": "MND + 5 & DEF +5 & HP+10",
        "traitText": "毒耐性+40%",
        "soul": {
          "cost": 4,
          "name": "コブチーキック",
          "text": "敵単体に地属性の物理中～大ダメージを与える"
        },
        "tags": [
          "09",
          "27",
          "33",
          "34",
          "42",
          "53",
          "54",
          "55",
          "68",
          "75"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/36:family",
          "target": "mq:eventfig/36",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "68"
            },
            {
              "tag": "68"
            }
          ],
          "label": "怪獣 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/36:element",
          "target": "mq:eventfig/36",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/23",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/31",
        "mq:eventfig/32",
        "mq:eventfig/52",
        "mq:eventfig/53",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "mq:eventfig/37",
      "name": "モブクルトン",
      "image": "eventfig/37.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 190,
      "def": 215,
      "attribute": "無",
      "tags": [
        "09",
        "10",
        "18",
        "25",
        "27",
        "42",
        "50",
        "53",
        "04"
      ],
      "soulSkill": {
        "name": "コインフロート",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDを2ターンの間20%アップし、回避率を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/37.png",
        "rarity": "UR",
        "statsText": "SPD +7 & MND +5 & HP +15",
        "traitText": "戦闘獲得コイン +10% & 回避率 +3%",
        "soul": {
          "cost": 5,
          "name": "コインフロート",
          "text": "味方全体のSPDを2ターンの間20%アップし、回避率を5%アップする"
        },
        "tags": [
          "04",
          "09",
          "10",
          "18",
          "25",
          "27",
          "42",
          "50",
          "53"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/37:element",
          "target": "mq:eventfig/37",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/38",
      "name": "モブカッチン",
      "image": "eventfig/38.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 230,
      "def": 200,
      "attribute": "地",
      "tags": [
        "09",
        "25",
        "32",
        "35",
        "39",
        "43",
        "53",
        "59",
        "77"
      ],
      "soulSkill": {
        "name": "カチナックル",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のATKを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に地属性物理大ダメージを与え、DEFを2ターンの間20%ダウンさせる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/38.png",
        "rarity": "UR",
        "statsText": "ATK +10 & DEF +8",
        "traitText": "物理与ダメージ +8% & 会心率 +3%",
        "soul": {
          "cost": 7,
          "name": "カチナックル",
          "text": "敵単体に地属性物理大ダメージを与え、DEFを2ターンの間20%ダウンさせる"
        },
        "tags": [
          "06",
          "09",
          "25",
          "32",
          "35",
          "39",
          "43",
          "53",
          "59",
          "77"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/38:element",
          "target": "mq:eventfig/38",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "mq:eventfig/39",
      "name": "モブフレザトカゲ",
      "image": "eventfig/39.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 220,
      "def": 190,
      "attribute": "火",
      "tags": [
        "09",
        "25",
        "32",
        "47",
        "49",
        "53",
        "56",
        "68",
        "71"
      ],
      "soulSkill": {
        "name": "フレザスラッシュ",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に火属性と水属性の2連続物理中ダメージを与え、20%の確率でやけど状態にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/39.png",
        "rarity": "UR",
        "statsText": "ATK +8 & SPD +8",
        "traitText": "火属性与ダメージ +8% & 通常攻撃会心率 +5%",
        "soul": {
          "cost": 6,
          "name": "フレザスラッシュ",
          "text": "敵単体に火属性と水属性の2連続物理中ダメージを与え、20%の確率でやけど状態にする"
        },
        "tags": [
          "03",
          "09",
          "25",
          "31",
          "32",
          "47",
          "49",
          "53",
          "56",
          "68",
          "71"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/39:family",
          "target": "mq:eventfig/39",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "68"
            },
            {
              "tag": "68"
            }
          ],
          "label": "怪獣 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/39:element",
          "target": "mq:eventfig/39",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/31",
        "mq:eventfig/32",
        "mq:eventfig/52",
        "mq:eventfig/53",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "mq:eventfig/40",
      "name": "モブシロサバンナ",
      "image": "eventfig/40.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 190,
      "def": 215,
      "attribute": "風",
      "tags": [
        "09",
        "25",
        "41",
        "53",
        "55",
        "68",
        "75",
        "28",
        "31"
      ],
      "soulSkill": {
        "name": "シロハヤテ",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のSPDを2ターンの間50%アップし、回避率を15%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/40.png",
        "rarity": "UR",
        "statsText": "SPD +12 & ATK +5",
        "traitText": "回避率 +7% & 全体攻撃回避率 +5%",
        "soul": {
          "cost": 5,
          "name": "シロハヤテ",
          "text": "自分のSPDを2ターンの間50%アップし、回避率を15%アップする"
        },
        "tags": [
          "09",
          "25",
          "28",
          "31",
          "41",
          "53",
          "55",
          "68",
          "75"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/40:family",
          "target": "mq:eventfig/40",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "68"
            },
            {
              "tag": "68"
            }
          ],
          "label": "怪獣 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/40:element",
          "target": "mq:eventfig/40",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "199",
        "160",
        "mq:eventfig/23",
        "mq:eventfig/31",
        "mq:eventfig/32",
        "mq:eventfig/52",
        "mq:eventfig/53",
        "mq:eventfig/55",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/41",
      "name": "モブローブ",
      "image": "eventfig/41.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 195,
      "def": 220,
      "attribute": "無",
      "tags": [
        "09",
        "25",
        "33",
        "36",
        "37",
        "43",
        "53",
        "57",
        "58"
      ],
      "soulSkill": {
        "name": "ナゾノチエ",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のMNDを2ターンの間30%アップし、魔法ダメージ軽減を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/41.png",
        "rarity": "UR",
        "statsText": "MAG +8 & MND +10 & MP +20",
        "traitText": "魔法ダメージ軽減 +5% & 消費MP -10%",
        "soul": {
          "cost": 6,
          "name": "ナゾノチエ",
          "text": "味方全体のMNDを2ターンの間30%アップし、魔法ダメージ軽減を10%アップする"
        },
        "tags": [
          "05",
          "09",
          "25",
          "33",
          "36",
          "37",
          "43",
          "53",
          "57",
          "58"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/41:element",
          "target": "mq:eventfig/41",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/42",
      "name": "モブマッシュ",
      "image": "eventfig/42.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 220,
      "def": 190,
      "attribute": "無",
      "tags": [
        "09",
        "18",
        "25",
        "27",
        "37",
        "43",
        "53",
        "04"
      ],
      "soulSkill": {
        "name": "キノコマジック",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に無属性魔法小〜中ダメージを与え、30%の確率で混乱状態にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/42.png",
        "rarity": "UR",
        "statsText": "MAG +10 & MND +7 & MP +15",
        "traitText": "魔法与ダメージ +8% & 混乱耐性 +30%",
        "soul": {
          "cost": 6,
          "name": "キノコマジック",
          "text": "敵全体に無属性魔法小〜中ダメージを与え、30%の確率で混乱状態にする"
        },
        "tags": [
          "04",
          "09",
          "18",
          "25",
          "27",
          "37",
          "43",
          "53"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/42:element",
          "target": "mq:eventfig/42",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/43",
      "name": "モブスラゼリー",
      "image": "eventfig/43.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 195,
      "def": 220,
      "attribute": "水",
      "tags": [
        "09",
        "17",
        "18",
        "25",
        "39",
        "45",
        "53",
        "65",
        "80"
      ],
      "soulSkill": {
        "name": "アクアゼリー",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFを2ターンの間40%アップし、水属性耐性を20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/43.png",
        "rarity": "UR",
        "statsText": "DEF +10 & MND +8 & HP +25",
        "traitText": "水属性ダメージ軽減 +10% & 物理ダメージ軽減 +5%",
        "soul": {
          "cost": 7,
          "name": "アクアゼリー",
          "text": "味方全体のDEFを2ターンの間40%アップし、水属性耐性を20%アップする"
        },
        "tags": [
          "03",
          "09",
          "17",
          "18",
          "25",
          "31",
          "39",
          "45",
          "53",
          "65",
          "80"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/43:family",
          "target": "mq:eventfig/43",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "17"
            },
            {
              "tag": "17"
            }
          ],
          "label": "スライム × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/43:element",
          "target": "mq:eventfig/43",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "79",
        "219",
        "spboss011",
        "mq:eventfig/13",
        "mq:eventfig/14",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/32",
        "mq:eventfig/33",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/44",
      "name": "モブリュウノツカイ",
      "image": "eventfig/44.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 300,
      "def": 300,
      "attribute": "無",
      "tags": [
        "09",
        "25",
        "30",
        "37",
        "38",
        "41",
        "53",
        "58",
        "74"
      ],
      "soulSkill": {
        "name": "リュウハドウ",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に無属性魔法中ダメージを与え、味方全体のMAGを2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/44.png",
        "rarity": "UR",
        "statsText": "MAG +10 & MND +10 & MP +20",
        "traitText": "魔法与ダメージ +10% & 状態異常耐性 +10%",
        "soul": {
          "cost": 7,
          "name": "リュウハドウ",
          "text": "敵全体に無属性魔法中ダメージを与え、味方全体のMAGを2ターンの間20%アップする"
        },
        "tags": [
          "02",
          "09",
          "25",
          "30",
          "37",
          "38",
          "41",
          "53",
          "58",
          "74"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/44:family",
          "target": "mq:eventfig/44",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "38"
            },
            {
              "tag": "38"
            }
          ],
          "label": "ドラゴン × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/44:element",
          "target": "mq:eventfig/44",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/45",
      "name": "モブスカルマジック",
      "image": "eventfig/45.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 230,
      "def": 200,
      "attribute": "無",
      "tags": [
        "09",
        "25",
        "32",
        "37",
        "46",
        "53",
        "57",
        "58"
      ],
      "soulSkill": {
        "name": "スカルミスト",
        "timing": "own-main",
        "effects": [
          {
            "type": "weaken",
            "target": "enemies",
            "value": 30
          }
        ],
        "description": "相手全体のATKを30下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体のMNDを2ターンの間25%ダウンさせ、30%の確率で混乱状態にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/45.png",
        "rarity": "UR",
        "statsText": "MAG +10 & MND +8 & MP +20",
        "traitText": "状態異常付与率 +15% & 魔法会心率 +5%",
        "soul": {
          "cost": 6,
          "name": "スカルミスト",
          "text": "敵全体のMNDを2ターンの間25%ダウンさせ、30%の確率で混乱状態にする"
        },
        "tags": [
          "09",
          "25",
          "32",
          "37",
          "46",
          "53",
          "57",
          "58"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/45:element",
          "target": "mq:eventfig/45",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/46",
      "name": "モブカセット",
      "image": "eventfig/46.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 195,
      "def": 220,
      "attribute": "無",
      "tags": [
        "09",
        "13",
        "25",
        "36",
        "39",
        "43",
        "53",
        "64",
        "82"
      ],
      "soulSkill": {
        "name": "テープシールド",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のDEFを2ターンの間35%アップし、物理ダメージ軽減を10%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/46.png",
        "rarity": "UR",
        "statsText": "DEF +10 & MND +5 & HP +25",
        "traitText": "物理ダメージ軽減 +8% & デバフ軽減 +20%",
        "soul": {
          "cost": 6,
          "name": "テープシールド",
          "text": "味方全体のDEFを2ターンの間35%アップし、物理ダメージ軽減を10%アップする"
        },
        "tags": [
          "09",
          "13",
          "25",
          "29",
          "36",
          "39",
          "43",
          "53",
          "64",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/46:element",
          "target": "mq:eventfig/46",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/47",
      "name": "モブカセットⅡ",
      "image": "eventfig/47.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 310,
      "attribute": "無",
      "tags": [
        "09",
        "13",
        "25",
        "30",
        "32",
        "36",
        "39",
        "43",
        "53"
      ],
      "soulSkill": {
        "name": "リワインド",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のデバフを1つ解除し、DEFを2ターンの間40%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/47.png",
        "rarity": "UR",
        "statsText": "DEF +12 & ATK +6 & HP +25",
        "traitText": "ダメージ軽減 +5% & 会心ダメージ軽減 +10%",
        "soul": {
          "cost": 7,
          "name": "リワインド",
          "text": "味方全体のデバフを1つ解除し、DEFを2ターンの間40%アップする"
        },
        "tags": [
          "09",
          "13",
          "25",
          "29",
          "30",
          "32",
          "36",
          "39",
          "43",
          "53",
          "59",
          "64",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/47:element",
          "target": "mq:eventfig/47",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/48",
      "name": "モブマグネットMⅡ",
      "image": "eventfig/48.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 310,
      "attribute": "雷",
      "tags": [
        "09",
        "25",
        "34",
        "39",
        "44",
        "49",
        "51",
        "53",
        "73"
      ],
      "soulSkill": {
        "name": "マグチェンジ",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "自分のATK・DEF・SPDを2ターンの間30%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/48.png",
        "rarity": "UR",
        "statsText": "ATK +8 & DEF +8 & SPD +8",
        "traitText": "マヒ耐性 +40% & 会心率 +5%",
        "soul": {
          "cost": 6,
          "name": "マグチェンジ",
          "text": "自分のATK・DEF・SPDを2ターンの間30%アップする"
        },
        "tags": [
          "09",
          "25",
          "31",
          "34",
          "39",
          "44",
          "49",
          "51",
          "53",
          "73",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/48:element",
          "target": "mq:eventfig/48",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/49",
      "name": "モブサモン",
      "image": "eventfig/49.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 220,
      "def": 190,
      "attribute": "火",
      "tags": [
        "09",
        "25",
        "37",
        "38",
        "47",
        "53",
        "56",
        "57",
        "58"
      ],
      "soulSkill": {
        "name": "ドラゴンコール",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に火属性魔法大ダメージを与える。30%の確率でやけど状態にする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/49.png",
        "rarity": "UR",
        "statsText": "MAG +12 & MND +5 & MP +30",
        "traitText": "火属性魔法与ダメージ +12% & 魔法会心率 +5%",
        "soul": {
          "cost": 7,
          "name": "ドラゴンコール",
          "text": "敵全体に火属性魔法大ダメージを与える。30%の確率でやけど状態にする"
        },
        "tags": [
          "03",
          "09",
          "25",
          "37",
          "38",
          "47",
          "53",
          "56",
          "57",
          "58",
          "60"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/49:family",
          "target": "mq:eventfig/49",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "38"
            },
            {
              "tag": "38"
            }
          ],
          "label": "ドラゴン × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/49:element",
          "target": "mq:eventfig/49",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "169",
        "208",
        "209",
        "210",
        "mq:eventfig/12",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/50",
      "name": "モブガマン",
      "image": "eventfig/50.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 195,
      "def": 220,
      "attribute": "地",
      "tags": [
        "09",
        "25",
        "27",
        "34",
        "35",
        "39",
        "47",
        "53",
        "57"
      ],
      "soulSkill": {
        "name": "ヨイショロック",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 30
          }
        ],
        "description": "自身のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に地属性物理大ダメージを与え、自分のDEFを2ターンの間30%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/50.png",
        "rarity": "UR",
        "statsText": "ATK +10 & DEF +10 & HP +30",
        "traitText": "ひるみ耐性 +50% & ダメージ軽減 +5%",
        "soul": {
          "cost": 6,
          "name": "ヨイショロック",
          "text": "敵単体に地属性物理大ダメージを与え、自分のDEFを2ターンの間30%アップする"
        },
        "tags": [
          "03",
          "09",
          "25",
          "27",
          "34",
          "35",
          "39",
          "47",
          "53",
          "57",
          "59",
          "69",
          "77"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/50:element",
          "target": "mq:eventfig/50",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "48",
        "164",
        "172",
        "mq:eventfig/24",
        "mq:eventfig/25",
        "mq:eventfig/52"
      ]
    },
    {
      "id": "mq:eventfig/51",
      "name": "モブキャロル",
      "image": "eventfig/51.png",
      "rarity": "UR",
      "soulClass": "seed",
      "atk": 115,
      "def": 145,
      "attribute": "地",
      "tags": [
        "09",
        "17",
        "18",
        "27",
        "60",
        "65",
        "67",
        "69",
        "77"
      ],
      "soulSkill": {
        "name": "キャロットステップ",
        "timing": "either-main",
        "effects": [
          {
            "type": "evade",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次に受ける攻撃を1回回避する。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体のSPDを2ターンの間20%アップし、回避率を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/51.png",
        "rarity": "UR",
        "statsText": "SPD +15",
        "traitText": "通常攻撃回避率+5%",
        "soul": {
          "cost": 6,
          "name": "キャロットステップ",
          "text": "味方全体のSPDを2ターンの間20%アップし、回避率を5%アップする"
        },
        "tags": [
          "09",
          "17",
          "18",
          "27",
          "28",
          "60",
          "65",
          "67",
          "69",
          "77",
          "78",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionTargets": [
        "120",
        "132",
        "133",
        "135",
        "148",
        "163",
        "171",
        "173",
        "174",
        "204",
        "spboss004",
        "spboss015",
        "mq:spbossfig/38",
        "mq:spbossfig/40",
        "mq:spbossfig/43",
        "mq:spbossfig/45",
        "mq:spbossfig/46",
        "mq:eventfig/08",
        "mq:eventfig/16",
        "mq:eventfig/22",
        "mq:eventfig/36",
        "mq:eventfig/38",
        "mq:eventfig/43",
        "mq:eventfig/50",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "mq:eventfig/52",
      "name": "モブムゥクラブ",
      "image": "eventfig/52.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 290,
      "def": 310,
      "attribute": "地",
      "tags": [
        "09",
        "25",
        "30",
        "35",
        "39",
        "42",
        "53",
        "66",
        "68"
      ],
      "soulSkill": {
        "name": "ムゥムーダッシュ",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のDEFを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に地属性と闇属性の物理中ダメージを与え、2ターンの間味方全体のDEFとダメージ軽減を5%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/52.png",
        "rarity": "UR",
        "statsText": "DEF +10 & HP +25",
        "traitText": "物理与ダメージ+4%",
        "soul": {
          "cost": 6,
          "name": "ムゥムーダッシュ",
          "text": "敵単体に地属性と闇属性の物理中ダメージを与え、2ターンの間味方全体のDEFとダメージ軽減を5%アップする"
        },
        "tags": [
          "05",
          "09",
          "25",
          "30",
          "35",
          "39",
          "42",
          "53",
          "66",
          "68",
          "71",
          "77"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/52:family",
          "target": "mq:eventfig/52",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "68"
            },
            {
              "tag": "68"
            }
          ],
          "label": "怪獣 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/52:element",
          "target": "mq:eventfig/52",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/53",
      "name": "モブジーン",
      "image": "eventfig/53.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 305,
      "def": 285,
      "attribute": "火",
      "tags": [
        "09",
        "25",
        "30",
        "32",
        "37",
        "47",
        "50",
        "56",
        "58"
      ],
      "soulSkill": {
        "name": "ランプフレア",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に火属性魔法大ダメージを与え、30%の確率でやけど状態にする。さらに自分のMAGを2ターンの間20%アップする。",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/53.png",
        "rarity": "UR",
        "statsText": "MAG +12 & MND +8 & MP +30",
        "traitText": "火属性魔法与ダメージ +12% & 魔法会心率 +5%",
        "soul": {
          "cost": 7,
          "name": "ランプフレア",
          "text": "敵全体に火属性魔法大ダメージを与え、30%の確率でやけど状態にする。さらに自分のMAGを2ターンの間20%アップする。"
        },
        "tags": [
          "03",
          "09",
          "25",
          "30",
          "32",
          "37",
          "47",
          "50",
          "56",
          "58",
          "60",
          "68"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/53:family",
          "target": "mq:eventfig/53",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "68"
            },
            {
              "tag": "68"
            }
          ],
          "label": "怪獣 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/53:element",
          "target": "mq:eventfig/53",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/54",
      "name": "モブマグナム",
      "image": "eventfig/54.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 305,
      "def": 285,
      "attribute": "無",
      "tags": [
        "09",
        "25",
        "26",
        "30",
        "34",
        "36",
        "48",
        "55",
        "59"
      ],
      "soulSkill": {
        "name": "クイックバレット",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に3連続の無属性物理小～大ダメージを与える。攻撃後、自分のSPDを2ターンの間40%アップする。",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/54.png",
        "rarity": "UR",
        "statsText": "ATK +10 & SPD +12 & HP +15",
        "traitText": "命中率 +20% & 通常攻撃会心率 +6%",
        "soul": {
          "cost": 6,
          "name": "クイックバレット",
          "text": "敵単体に3連続の無属性物理小～大ダメージを与える。攻撃後、自分のSPDを2ターンの間40%アップする。"
        },
        "tags": [
          "02",
          "09",
          "25",
          "26",
          "30",
          "34",
          "36",
          "48",
          "55",
          "59",
          "60",
          "75"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/54:element",
          "target": "mq:eventfig/54",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/55",
      "name": "モブアノコ",
      "image": "eventfig/55.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "atk": 320,
      "def": 370,
      "attribute": "無",
      "tags": [
        "09",
        "25",
        "30",
        "32",
        "35",
        "39",
        "57",
        "58",
        "68",
        "69",
        "77",
        "04"
      ],
      "soulSkill": {
        "name": "シャドウプレス",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          },
          {
            "type": "break",
            "target": "enemy",
            "value": 10
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。選んだ相手1体のDEFを10下げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵全体に無属性物理大ダメージを与える。30%の確率でひるませ、敵全体のDEFを2ターンの間15%ダウンさせる。",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/55.png",
        "rarity": "MOB",
        "statsText": "ATK +10 & DEF +20 & HP +40",
        "traitText": "ダメージ軽減 +8% & 物理与ダメージ +10%",
        "soul": {
          "cost": 8,
          "name": "シャドウプレス",
          "text": "敵全体に無属性物理大ダメージを与える。30%の確率でひるませ、敵全体のDEFを2ターンの間15%ダウンさせる。"
        },
        "tags": [
          "04",
          "09",
          "25",
          "29",
          "30",
          "32",
          "35",
          "39",
          "57",
          "58",
          "68",
          "69",
          "77"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "MOBは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/55:family",
          "target": "mq:eventfig/55",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "68"
            },
            {
              "tag": "68"
            }
          ],
          "label": "怪獣 × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/55:element",
          "target": "mq:eventfig/55",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/56",
      "name": "モブハリネット",
      "image": "eventfig/56.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 130,
      "def": 155,
      "attribute": "無",
      "tags": [
        "09",
        "10",
        "12",
        "23",
        "27",
        "33",
        "40"
      ],
      "soulSkill": {
        "name": "ハリーミュージック",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 25
          }
        ],
        "description": "味方全体のATKを25上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "味方全体の会心率を2ターンの間20%アップする",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/56.png",
        "rarity": "SSR",
        "statsText": "SPD + 5 & DEF +7",
        "traitText": "物理ダメージ軽減率 +2%",
        "soul": {
          "cost": 6,
          "name": "ハリーミュージック",
          "text": "味方全体の会心率を2ターンの間20%アップする"
        },
        "tags": [
          "09",
          "10",
          "12",
          "23",
          "27",
          "33",
          "40",
          "42",
          "60",
          "67",
          "69",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "mq:eventfig/57",
      "name": "モブエリマッキン",
      "image": "eventfig/57.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 140,
      "def": 140,
      "attribute": "無",
      "tags": [
        "09",
        "10",
        "12",
        "23",
        "27",
        "33",
        "40"
      ],
      "soulSkill": {
        "name": "マッキンポッキン",
        "timing": "own-main",
        "effects": [
          {
            "type": "sweep",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身の次の攻撃を相手フィールド全体にする。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "このターン、味方全体の通常攻撃が全体攻撃になる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/57.png",
        "rarity": "SSR",
        "statsText": "MAG + 5 & MND +7",
        "traitText": "魔法ダメージ軽減率 +2%",
        "soul": {
          "cost": 6,
          "name": "マッキンポッキン",
          "text": "このターン、味方全体の通常攻撃が全体攻撃になる"
        },
        "tags": [
          "09",
          "10",
          "12",
          "23",
          "27",
          "33",
          "40",
          "42",
          "60",
          "70",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "mq:eventfig/58",
      "name": "モブホラプエ",
      "image": "eventfig/58.png",
      "rarity": "UR",
      "soulClass": "middle",
      "atk": 230,
      "def": 200,
      "attribute": "無",
      "tags": [
        "09",
        "12",
        "23",
        "27",
        "32",
        "36",
        "40",
        "42",
        "55"
      ],
      "soulSkill": {
        "name": "ホラプエロック",
        "timing": "own-main",
        "effects": [
          {
            "type": "boost",
            "target": "allies",
            "value": 30
          }
        ],
        "description": "味方全体のATKを30上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "このターン、味方全体の会心率+30%",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/58.png",
        "rarity": "UR",
        "statsText": "MAG + 5 & MND +7 & SPD +7",
        "traitText": "連撃発生率(通常攻撃で追撃) +4%",
        "soul": {
          "cost": 7,
          "name": "ホラプエロック",
          "text": "このターン、味方全体の会心率+30%"
        },
        "tags": [
          "06",
          "09",
          "12",
          "23",
          "27",
          "32",
          "36",
          "40",
          "42",
          "55",
          "60",
          "70",
          "72",
          "78",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/58:element",
          "target": "mq:eventfig/58",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/60",
      "name": "モブオンブ",
      "image": "eventfig/60.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "atk": 125,
      "def": 150,
      "attribute": "無",
      "tags": [
        "09",
        "12",
        "23",
        "27",
        "40",
        "42",
        "59"
      ],
      "soulSkill": {
        "name": "オンブ・ザ・オンプ",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "このターン、自身(パーティーではなく使用者)の攻撃時、通常攻撃の120%で必ず追撃する",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/60.png",
        "rarity": "SSR",
        "statsText": "DEF + 10",
        "traitText": "連撃発生率(通常攻撃で追撃) +2%",
        "soul": {
          "cost": 6,
          "name": "オンブ・ザ・オンプ",
          "text": "このターン、自身(パーティーではなく使用者)の攻撃時、通常攻撃の120%で必ず追撃する"
        },
        "tags": [
          "02",
          "09",
          "12",
          "23",
          "27",
          "28",
          "40",
          "42",
          "59",
          "70",
          "78"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "defender",
        "decision": "SSRは原典のレア度を維持。seedはボス・伝説・変身・強敵タグと原典の役割で分類。defender型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionTargets": [
        "29",
        "67",
        "spboss005",
        "mq:eventfig/01",
        "mq:eventfig/05",
        "mq:eventfig/19",
        "mq:eventfig/20",
        "mq:eventfig/37",
        "mq:eventfig/41",
        "mq:eventfig/42",
        "mq:eventfig/45",
        "mq:eventfig/46",
        "mq:eventfig/58",
        "mq:eventfig/61",
        "mq:eventfig/63"
      ]
    },
    {
      "id": "mq:eventfig/59",
      "name": "モブホラクイーン",
      "image": "eventfig/59.png",
      "rarity": "MOB",
      "soulClass": "middle",
      "atk": 235,
      "def": 260,
      "attribute": "風",
      "tags": [
        "09",
        "12",
        "23",
        "27",
        "32",
        "36",
        "40",
        "42",
        "58",
        "60",
        "66",
        "70"
      ],
      "soulSkill": {
        "name": "ホラプエロック",
        "timing": "either-main",
        "effects": [
          {
            "type": "guard",
            "target": "self",
            "value": 35
          }
        ],
        "description": "自身のDEFを35上げる。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "敵単体に風属性物理大ダメージを与え、2ターンの間ダメージ軽減率を8%下げる",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/59.png",
        "rarity": "MOB",
        "statsText": "ATK + 7 & MND +7 & SPD +10",
        "traitText": "バフ効果5%アップ",
        "soul": {
          "cost": 7,
          "name": "ホラプエロック",
          "text": "敵単体に風属性物理大ダメージを与え、2ターンの間ダメージ軽減率を8%下げる"
        },
        "tags": [
          "06",
          "08",
          "09",
          "12",
          "23",
          "27",
          "32",
          "36",
          "40",
          "42",
          "58",
          "60",
          "66",
          "70",
          "72",
          "74",
          "78",
          "81"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "support",
        "decision": "MOBは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。support型として固定ATK/DEFを設定。属性根拠：原典の能力文。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/59:element",
          "target": "mq:eventfig/59",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "199",
        "160",
        "mq:eventfig/31",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/61",
      "name": "モブミント",
      "image": "eventfig/61.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 175,
      "def": 175,
      "attribute": "無",
      "tags": [
        "18",
        "27",
        "33",
        "36",
        "37",
        "46",
        "53"
      ],
      "soulSkill": {
        "name": "ミントマジック",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "このターン、使用者が魔法を発動する時確定で魔法追撃を行う。",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/61.png",
        "rarity": "SSR",
        "statsText": "MAG +5 & MND +5",
        "traitText": "魔法追撃率+2%",
        "soul": {
          "cost": 7,
          "name": "ミントマジック",
          "text": "このターン、使用者が魔法を発動する時確定で魔法追撃を行う。"
        },
        "tags": [
          "18",
          "27",
          "31",
          "33",
          "36",
          "37",
          "46",
          "53",
          "58",
          "60",
          "65",
          "73"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/61:family",
          "target": "mq:eventfig/61",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "65"
            },
            {
              "tag": "65"
            }
          ],
          "label": "スイーツ × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/61:element",
          "target": "mq:eventfig/61",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/62",
      "name": "モブリスミント",
      "image": "eventfig/62.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 300,
      "def": 300,
      "attribute": "無",
      "tags": [
        "18",
        "27",
        "33",
        "36",
        "37",
        "46",
        "53",
        "58",
        "59"
      ],
      "soulSkill": {
        "name": "ミントマジック",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "このターン、自分含む味方が魔法を発動する時確定で魔法追撃を行う。",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/62.png",
        "rarity": "UR",
        "statsText": "MAG +8 & MND +10",
        "traitText": "魔法追撃率+4%",
        "soul": {
          "cost": 8,
          "name": "ミントマジック",
          "text": "このターン、自分含む味方が魔法を発動する時確定で魔法追撃を行う。"
        },
        "tags": [
          "08",
          "18",
          "27",
          "31",
          "33",
          "36",
          "37",
          "46",
          "53",
          "58",
          "59",
          "60",
          "64",
          "65",
          "73",
          "82"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "balanced",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。balanced型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/62:evolution",
          "target": "mq:eventfig/62",
          "fromClass": "middle",
          "materials": [
            {
              "id": "mq:eventfig/61"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "モブミント ＋ 無属性",
          "basis": "原典のⅡ形態・変身系列を優先"
        },
        {
          "id": "mq:eventfig/62:family",
          "target": "mq:eventfig/62",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "65"
            },
            {
              "tag": "65"
            }
          ],
          "label": "スイーツ × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/62:element",
          "target": "mq:eventfig/62",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/63",
      "name": "モブマカロン",
      "image": "eventfig/63.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "atk": 185,
      "def": 160,
      "attribute": "無",
      "tags": [
        "18",
        "27",
        "33",
        "34",
        "47",
        "49",
        "55"
      ],
      "soulSkill": {
        "name": "マカロンブースト",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "このターン、使用者が特技を発動する時確定で同じ特技を連続で放つ※MPは消費しない。",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/63.png",
        "rarity": "SSR",
        "statsText": "ATK +7",
        "traitText": "特技使用時、連撃発動率+2%(通常攻撃の110%で追撃)",
        "soul": {
          "cost": 9,
          "name": "マカロンブースト",
          "text": "このターン、使用者が特技を発動する時確定で同じ特技を連続で放つ※MPは消費しない。"
        },
        "tags": [
          "08",
          "18",
          "27",
          "28",
          "33",
          "34",
          "47",
          "49",
          "55",
          "65",
          "73"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "SSRは原典のレア度を維持。middleはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：属性指定なし（無）。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/63:family",
          "target": "mq:eventfig/63",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "65"
            },
            {
              "tag": "65"
            }
          ],
          "label": "スイーツ × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/63:element",
          "target": "mq:eventfig/63",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "無属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": [
        "22",
        "39",
        "58",
        "79",
        "186",
        "187",
        "200",
        "164",
        "mq:eventfig/02",
        "mq:eventfig/03",
        "mq:eventfig/14",
        "mq:eventfig/33",
        "mq:eventfig/35",
        "mq:eventfig/44",
        "mq:eventfig/47",
        "mq:eventfig/54",
        "mq:eventfig/55",
        "mq:eventfig/62",
        "mq:eventfig/64"
      ]
    },
    {
      "id": "mq:eventfig/64",
      "name": "モブネコマカロン",
      "image": "eventfig/64.png",
      "rarity": "UR",
      "soulClass": "mob",
      "atk": 305,
      "def": 285,
      "attribute": "風",
      "tags": [
        "18",
        "27",
        "33",
        "34",
        "47",
        "49",
        "55",
        "59",
        "65"
      ],
      "soulSkill": {
        "name": "マカロンブーストⅡ",
        "timing": "own-main",
        "effects": [
          {
            "type": "extraAttack",
            "target": "self",
            "value": 1
          }
        ],
        "description": "自身のこのターンの攻撃回数を1回増やす。強化・妨害・待機効果は使用ターン終了まで。",
        "sourceText": "このターン、自分含む味方が特技を発動する時確定で同じ特技を連続で放つ※MPは消費しない。",
        "designNote": "原典の主効果を固定量・確定効果へ変換。SPD/会心/MP支援はATKまたはDEF支援へ翻訳。追加効果の全てを移植するものではない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "image": "eventfig/64.png",
        "rarity": "UR",
        "statsText": "ATK +12",
        "traitText": "特技使用時、連撃発動率+4%(通常攻撃の110%で追撃)",
        "soul": {
          "cost": 10,
          "name": "マカロンブーストⅡ",
          "text": "このターン、自分含む味方が特技を発動する時確定で同じ特技を連続で放つ※MPは消費しない。"
        },
        "tags": [
          "08",
          "18",
          "27",
          "28",
          "33",
          "34",
          "47",
          "49",
          "55",
          "59",
          "65",
          "67",
          "70",
          "71",
          "73",
          "75"
        ],
        "actor": null,
        "reference": "MOB STORY / MOB-QUEST v250（フィギュア原典＋v248実行データ、v249 HP・v250ボス差分確認）",
        "role": "attacker",
        "decision": "URは原典のレア度を維持。mobはボス・伝説・変身・強敵タグと原典の役割で分類。attacker型として固定ATK/DEFを設定。属性根拠：原典の属性タグ。"
      },
      "fusionMaterials": [
        {
          "id": "mq:eventfig/64:evolution",
          "target": "mq:eventfig/64",
          "fromClass": "middle",
          "materials": [
            {
              "id": "mq:eventfig/63"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "モブマカロン ＋ 無属性",
          "basis": "原典のⅡ形態・変身系列を優先"
        },
        {
          "id": "mq:eventfig/64:family",
          "target": "mq:eventfig/64",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "65"
            },
            {
              "tag": "65"
            }
          ],
          "label": "スイーツ × 2",
          "basis": "原典の同種族・同シリーズタグ"
        },
        {
          "id": "mq:eventfig/64:element",
          "target": "mq:eventfig/64",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 2",
          "basis": "原典属性から新作向けに設定"
        }
      ],
      "fusionTargets": []
    }
  ],
  "recipes": [
    {
      "id": "22:family",
      "target": "22",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "65"
        },
        {
          "tag": "65"
        }
      ],
      "label": "スイーツ × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "22:element",
      "target": "22",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "29:family",
      "target": "29",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "22"
        },
        {
          "tag": "22"
        }
      ],
      "label": "MOB KART × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "29:element",
      "target": "29",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "30:family",
      "target": "30",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "22"
        },
        {
          "tag": "22"
        }
      ],
      "label": "MOB KART × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "30:element",
      "target": "30",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "31:family",
      "target": "31",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "22"
        },
        {
          "tag": "22"
        }
      ],
      "label": "MOB KART × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "31:element",
      "target": "31",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "39:element",
      "target": "39",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "48:family",
      "target": "48",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "14"
        },
        {
          "tag": "14"
        }
      ],
      "label": "MOB SHOT × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "48:element",
      "target": "48",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "49:family",
      "target": "49",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "14"
        },
        {
          "tag": "14"
        }
      ],
      "label": "MOB SHOT × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "49:element",
      "target": "49",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "50:family",
      "target": "50",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "14"
        },
        {
          "tag": "14"
        }
      ],
      "label": "MOB SHOT × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "50:element",
      "target": "50",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "51:family",
      "target": "51",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "14"
        },
        {
          "tag": "14"
        }
      ],
      "label": "MOB SHOT × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "51:element",
      "target": "51",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "58:element",
      "target": "58",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "67:element",
      "target": "67",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "79:family",
      "target": "79",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "17"
        },
        {
          "tag": "17"
        }
      ],
      "label": "スライム × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "79:element",
      "target": "79",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "186:element",
      "target": "186",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "187:element",
      "target": "187",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "188:element",
      "target": "188",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "190:family",
      "target": "190",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "24"
        },
        {
          "tag": "24"
        }
      ],
      "label": "主人公パーティー × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "190:element",
      "target": "190",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "195:family",
      "target": "195",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "24"
        },
        {
          "tag": "24"
        }
      ],
      "label": "主人公パーティー × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "195:element",
      "target": "195",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "196:family",
      "target": "196",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "16"
        },
        {
          "tag": "16"
        }
      ],
      "label": "ネコクー × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "196:element",
      "target": "196",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "199:family",
      "target": "199",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "24"
        },
        {
          "tag": "24"
        }
      ],
      "label": "主人公パーティー × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "199:element",
      "target": "199",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "200:family",
      "target": "200",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "24"
        },
        {
          "tag": "24"
        }
      ],
      "label": "主人公パーティー × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "200:element",
      "target": "200",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "92:element",
      "target": "92",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "94:element",
      "target": "94",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "95:element",
      "target": "95",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "96:element",
      "target": "96",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "99:element",
      "target": "99",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "104:element",
      "target": "104",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "110:element",
      "target": "110",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "111:element",
      "target": "111",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "120:element",
      "target": "120",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "129:element",
      "target": "129",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "132:element",
      "target": "132",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "133:element",
      "target": "133",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "134:element",
      "target": "134",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "135:element",
      "target": "135",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "136:element",
      "target": "136",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "137:family",
      "target": "137",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "38"
        },
        {
          "tag": "38"
        }
      ],
      "label": "ドラゴン × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "137:element",
      "target": "137",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "143:element",
      "target": "143",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "144:element",
      "target": "144",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "145:element",
      "target": "145",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "146:element",
      "target": "146",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "147:element",
      "target": "147",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "148:family",
      "target": "148",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "17"
        },
        {
          "tag": "17"
        }
      ],
      "label": "スライム × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "148:element",
      "target": "148",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "156:element",
      "target": "156",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "157:element",
      "target": "157",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "158:element",
      "target": "158",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "202:element",
      "target": "202",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "159:element",
      "target": "159",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "160:evolution",
      "target": "160",
      "fromClass": "middle",
      "materials": [
        {
          "id": "159"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "モブホーク ＋ 風属性",
      "basis": "原典のⅡ形態・変身系列を優先"
    },
    {
      "id": "160:element",
      "target": "160",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "161:element",
      "target": "161",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "162:evolution",
      "target": "162",
      "fromClass": "middle",
      "materials": [
        {
          "id": "161"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "ミラモブ ＋ 闇属性",
      "basis": "原典のⅡ形態・変身系列を優先"
    },
    {
      "id": "162:element",
      "target": "162",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "163:element",
      "target": "163",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "164:evolution",
      "target": "164",
      "fromClass": "middle",
      "materials": [
        {
          "id": "163"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "モブガーディアン ＋ 地属性",
      "basis": "原典のⅡ形態・変身系列を優先"
    },
    {
      "id": "164:element",
      "target": "164",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "165:element",
      "target": "165",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "166:element",
      "target": "166",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "167:family",
      "target": "167",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "38"
        },
        {
          "tag": "38"
        }
      ],
      "label": "ドラゴン × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "167:element",
      "target": "167",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "168:family",
      "target": "168",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "38"
        },
        {
          "tag": "38"
        }
      ],
      "label": "ドラゴン × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "168:element",
      "target": "168",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "169:family",
      "target": "169",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "38"
        },
        {
          "tag": "38"
        }
      ],
      "label": "ドラゴン × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "169:element",
      "target": "169",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "170:element",
      "target": "170",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "171:element",
      "target": "171",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "172:element",
      "target": "172",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "173:element",
      "target": "173",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "174:element",
      "target": "174",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "175:element",
      "target": "175",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "176:element",
      "target": "176",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "181:element",
      "target": "181",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "182:element",
      "target": "182",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "183:element",
      "target": "183",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "184:element",
      "target": "184",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "203:element",
      "target": "203",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "204:element",
      "target": "204",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "205:element",
      "target": "205",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "206:element",
      "target": "206",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "207:element",
      "target": "207",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "208:element",
      "target": "208",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "209:element",
      "target": "209",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "210:element",
      "target": "210",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "211:element",
      "target": "211",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "212:element",
      "target": "212",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "213:element",
      "target": "213",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "214:element",
      "target": "214",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "215:element",
      "target": "215",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "216:element",
      "target": "216",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "217:family",
      "target": "217",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "24"
        },
        {
          "tag": "24"
        }
      ],
      "label": "主人公パーティー × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "217:element",
      "target": "217",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "218:element",
      "target": "218",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "219:element",
      "target": "219",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss001:family",
      "target": "spboss001",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "24"
        },
        {
          "tag": "24"
        }
      ],
      "label": "主人公パーティー × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss001:element",
      "target": "spboss001",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss002:family",
      "target": "spboss002",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "38"
        },
        {
          "tag": "38"
        }
      ],
      "label": "ドラゴン × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss002:element",
      "target": "spboss002",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss003:family",
      "target": "spboss003",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "38"
        },
        {
          "tag": "38"
        }
      ],
      "label": "ドラゴン × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss003:element",
      "target": "spboss003",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss004:family",
      "target": "spboss004",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss004:element",
      "target": "spboss004",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss005:family",
      "target": "spboss005",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss005:element",
      "target": "spboss005",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss006:family",
      "target": "spboss006",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss006:element",
      "target": "spboss006",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss007:family",
      "target": "spboss007",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss007:element",
      "target": "spboss007",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss008:family",
      "target": "spboss008",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss008:element",
      "target": "spboss008",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss009:family",
      "target": "spboss009",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss009:element",
      "target": "spboss009",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss010:family",
      "target": "spboss010",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss010:element",
      "target": "spboss010",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss011:family",
      "target": "spboss011",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss011:element",
      "target": "spboss011",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss012:family",
      "target": "spboss012",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss012:element",
      "target": "spboss012",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss013:family",
      "target": "spboss013",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss013:element",
      "target": "spboss013",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss014:family",
      "target": "spboss014",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss014:element",
      "target": "spboss014",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss015:family",
      "target": "spboss015",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss015:element",
      "target": "spboss015",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss016:family",
      "target": "spboss016",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss016:element",
      "target": "spboss016",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss017:family",
      "target": "spboss017",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss017:element",
      "target": "spboss017",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss018:family",
      "target": "spboss018",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "38"
        },
        {
          "tag": "38"
        }
      ],
      "label": "ドラゴン × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss018:element",
      "target": "spboss018",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss025:family",
      "target": "spboss025",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss025:element",
      "target": "spboss025",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss033:family",
      "target": "spboss033",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss033:element",
      "target": "spboss033",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "spboss034:family",
      "target": "spboss034",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "spboss034:element",
      "target": "spboss034",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:spbossfig/35:family",
      "target": "mq:spbossfig/35",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:spbossfig/35:element",
      "target": "mq:spbossfig/35",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:spbossfig/36:family",
      "target": "mq:spbossfig/36",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "38"
        },
        {
          "tag": "38"
        }
      ],
      "label": "ドラゴン × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:spbossfig/36:element",
      "target": "mq:spbossfig/36",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:spbossfig/37:family",
      "target": "mq:spbossfig/37",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:spbossfig/37:element",
      "target": "mq:spbossfig/37",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:spbossfig/38:family",
      "target": "mq:spbossfig/38",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "17"
        },
        {
          "tag": "17"
        }
      ],
      "label": "スライム × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:spbossfig/38:element",
      "target": "mq:spbossfig/38",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:spbossfig/39:family",
      "target": "mq:spbossfig/39",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:spbossfig/39:element",
      "target": "mq:spbossfig/39",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:spbossfig/40:family",
      "target": "mq:spbossfig/40",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:spbossfig/40:element",
      "target": "mq:spbossfig/40",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:spbossfig/41:family",
      "target": "mq:spbossfig/41",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:spbossfig/41:element",
      "target": "mq:spbossfig/41",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:spbossfig/42:family",
      "target": "mq:spbossfig/42",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:spbossfig/42:element",
      "target": "mq:spbossfig/42",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:spbossfig/43:family",
      "target": "mq:spbossfig/43",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:spbossfig/43:element",
      "target": "mq:spbossfig/43",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:spbossfig/44:family",
      "target": "mq:spbossfig/44",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:spbossfig/44:element",
      "target": "mq:spbossfig/44",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:spbossfig/45:family",
      "target": "mq:spbossfig/45",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:spbossfig/45:element",
      "target": "mq:spbossfig/45",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:spbossfig/46:family",
      "target": "mq:spbossfig/46",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "61"
        },
        {
          "tag": "61"
        }
      ],
      "label": "超合金 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:spbossfig/46:element",
      "target": "mq:spbossfig/46",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/01:element",
      "target": "mq:eventfig/01",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/02:element",
      "target": "mq:eventfig/02",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/03:element",
      "target": "mq:eventfig/03",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/04:element",
      "target": "mq:eventfig/04",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/05:element",
      "target": "mq:eventfig/05",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/06:family",
      "target": "mq:eventfig/06",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "68"
        },
        {
          "tag": "68"
        }
      ],
      "label": "怪獣 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/06:element",
      "target": "mq:eventfig/06",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/07:element",
      "target": "mq:eventfig/07",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/08:family",
      "target": "mq:eventfig/08",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "68"
        },
        {
          "tag": "68"
        }
      ],
      "label": "怪獣 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/08:element",
      "target": "mq:eventfig/08",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/09:element",
      "target": "mq:eventfig/09",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/10:family",
      "target": "mq:eventfig/10",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "38"
        },
        {
          "tag": "38"
        }
      ],
      "label": "ドラゴン × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/10:element",
      "target": "mq:eventfig/10",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/11:element",
      "target": "mq:eventfig/11",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/12:element",
      "target": "mq:eventfig/12",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/13:element",
      "target": "mq:eventfig/13",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/14:family",
      "target": "mq:eventfig/14",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "65"
        },
        {
          "tag": "65"
        }
      ],
      "label": "スイーツ × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/14:element",
      "target": "mq:eventfig/14",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/15:element",
      "target": "mq:eventfig/15",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/16:family",
      "target": "mq:eventfig/16",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "67"
        },
        {
          "tag": "67"
        }
      ],
      "label": "もちもち × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/16:element",
      "target": "mq:eventfig/16",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/19:element",
      "target": "mq:eventfig/19",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/20:element",
      "target": "mq:eventfig/20",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/22:family",
      "target": "mq:eventfig/22",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "17"
        },
        {
          "tag": "17"
        }
      ],
      "label": "スライム × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/22:element",
      "target": "mq:eventfig/22",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/23:family",
      "target": "mq:eventfig/23",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "68"
        },
        {
          "tag": "68"
        }
      ],
      "label": "怪獣 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/23:element",
      "target": "mq:eventfig/23",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/24:family",
      "target": "mq:eventfig/24",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "65"
        },
        {
          "tag": "65"
        }
      ],
      "label": "スイーツ × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/24:element",
      "target": "mq:eventfig/24",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/25:family",
      "target": "mq:eventfig/25",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "65"
        },
        {
          "tag": "65"
        }
      ],
      "label": "スイーツ × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/25:element",
      "target": "mq:eventfig/25",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/29:element",
      "target": "mq:eventfig/29",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/30:family",
      "target": "mq:eventfig/30",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "68"
        },
        {
          "tag": "68"
        }
      ],
      "label": "怪獣 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/30:element",
      "target": "mq:eventfig/30",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/31:family",
      "target": "mq:eventfig/31",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "68"
        },
        {
          "tag": "68"
        }
      ],
      "label": "怪獣 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/31:element",
      "target": "mq:eventfig/31",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/32:family",
      "target": "mq:eventfig/32",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "68"
        },
        {
          "tag": "68"
        }
      ],
      "label": "怪獣 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/32:element",
      "target": "mq:eventfig/32",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/33:family",
      "target": "mq:eventfig/33",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "65"
        },
        {
          "tag": "65"
        }
      ],
      "label": "スイーツ × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/33:element",
      "target": "mq:eventfig/33",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/35:element",
      "target": "mq:eventfig/35",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/36:family",
      "target": "mq:eventfig/36",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "68"
        },
        {
          "tag": "68"
        }
      ],
      "label": "怪獣 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/36:element",
      "target": "mq:eventfig/36",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/37:element",
      "target": "mq:eventfig/37",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/38:element",
      "target": "mq:eventfig/38",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/39:family",
      "target": "mq:eventfig/39",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "68"
        },
        {
          "tag": "68"
        }
      ],
      "label": "怪獣 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/39:element",
      "target": "mq:eventfig/39",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/40:family",
      "target": "mq:eventfig/40",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "68"
        },
        {
          "tag": "68"
        }
      ],
      "label": "怪獣 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/40:element",
      "target": "mq:eventfig/40",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/41:element",
      "target": "mq:eventfig/41",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/42:element",
      "target": "mq:eventfig/42",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/43:family",
      "target": "mq:eventfig/43",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "17"
        },
        {
          "tag": "17"
        }
      ],
      "label": "スライム × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/43:element",
      "target": "mq:eventfig/43",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/44:family",
      "target": "mq:eventfig/44",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "38"
        },
        {
          "tag": "38"
        }
      ],
      "label": "ドラゴン × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/44:element",
      "target": "mq:eventfig/44",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/45:element",
      "target": "mq:eventfig/45",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/46:element",
      "target": "mq:eventfig/46",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/47:element",
      "target": "mq:eventfig/47",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/48:element",
      "target": "mq:eventfig/48",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/49:family",
      "target": "mq:eventfig/49",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "38"
        },
        {
          "tag": "38"
        }
      ],
      "label": "ドラゴン × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/49:element",
      "target": "mq:eventfig/49",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/50:element",
      "target": "mq:eventfig/50",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/52:family",
      "target": "mq:eventfig/52",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "68"
        },
        {
          "tag": "68"
        }
      ],
      "label": "怪獣 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/52:element",
      "target": "mq:eventfig/52",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/53:family",
      "target": "mq:eventfig/53",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "68"
        },
        {
          "tag": "68"
        }
      ],
      "label": "怪獣 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/53:element",
      "target": "mq:eventfig/53",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/54:element",
      "target": "mq:eventfig/54",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/55:family",
      "target": "mq:eventfig/55",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "68"
        },
        {
          "tag": "68"
        }
      ],
      "label": "怪獣 × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/55:element",
      "target": "mq:eventfig/55",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/58:element",
      "target": "mq:eventfig/58",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/59:element",
      "target": "mq:eventfig/59",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/61:family",
      "target": "mq:eventfig/61",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "65"
        },
        {
          "tag": "65"
        }
      ],
      "label": "スイーツ × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/61:element",
      "target": "mq:eventfig/61",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/62:evolution",
      "target": "mq:eventfig/62",
      "fromClass": "middle",
      "materials": [
        {
          "id": "mq:eventfig/61"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "モブミント ＋ 無属性",
      "basis": "原典のⅡ形態・変身系列を優先"
    },
    {
      "id": "mq:eventfig/62:family",
      "target": "mq:eventfig/62",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "65"
        },
        {
          "tag": "65"
        }
      ],
      "label": "スイーツ × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/62:element",
      "target": "mq:eventfig/62",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/63:family",
      "target": "mq:eventfig/63",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "65"
        },
        {
          "tag": "65"
        }
      ],
      "label": "スイーツ × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/63:element",
      "target": "mq:eventfig/63",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "無属性 × 2",
      "basis": "原典属性から新作向けに設定"
    },
    {
      "id": "mq:eventfig/64:evolution",
      "target": "mq:eventfig/64",
      "fromClass": "middle",
      "materials": [
        {
          "id": "mq:eventfig/63"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "モブマカロン ＋ 無属性",
      "basis": "原典のⅡ形態・変身系列を優先"
    },
    {
      "id": "mq:eventfig/64:family",
      "target": "mq:eventfig/64",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "65"
        },
        {
          "tag": "65"
        }
      ],
      "label": "スイーツ × 2",
      "basis": "原典の同種族・同シリーズタグ"
    },
    {
      "id": "mq:eventfig/64:element",
      "target": "mq:eventfig/64",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 2",
      "basis": "原典属性から新作向けに設定"
    }
  ],
  "tags": [
    {
      "id": "01",
      "name": "ぷにモブ"
    },
    {
      "id": "02",
      "name": "グリーンカラー"
    },
    {
      "id": "03",
      "name": "レッドカラー"
    },
    {
      "id": "04",
      "name": "イエローカラー"
    },
    {
      "id": "05",
      "name": "パープルカラー"
    },
    {
      "id": "06",
      "name": "ピンクカラー"
    },
    {
      "id": "07",
      "name": "オレンジカラー"
    },
    {
      "id": "08",
      "name": "輝き"
    },
    {
      "id": "09",
      "name": "モンスター"
    },
    {
      "id": "10",
      "name": "マスコット"
    },
    {
      "id": "11",
      "name": "PB2"
    },
    {
      "id": "12",
      "name": "MUSIC"
    },
    {
      "id": "13",
      "name": "頼もしい仲間"
    },
    {
      "id": "14",
      "name": "MOB SHOT"
    },
    {
      "id": "15",
      "name": "メニュー"
    },
    {
      "id": "16",
      "name": "ネコクー"
    },
    {
      "id": "17",
      "name": "スライム"
    },
    {
      "id": "18",
      "name": "美味しい食べ物"
    },
    {
      "id": "19",
      "name": "ロゴ"
    },
    {
      "id": "20",
      "name": "MOB BR"
    },
    {
      "id": "21",
      "name": "MOB PG"
    },
    {
      "id": "22",
      "name": "MOB KART"
    },
    {
      "id": "23",
      "name": "ソウル"
    },
    {
      "id": "24",
      "name": "主人公パーティー"
    },
    {
      "id": "25",
      "name": "ボス"
    },
    {
      "id": "26",
      "name": "ヴィラン"
    },
    {
      "id": "27",
      "name": "キュート"
    },
    {
      "id": "28",
      "name": "ホワイトカラー"
    },
    {
      "id": "29",
      "name": "ブラックカラー"
    },
    {
      "id": "30",
      "name": "伝説"
    },
    {
      "id": "31",
      "name": "ブルーカラー"
    },
    {
      "id": "32",
      "name": "立ちはだかる強敵"
    },
    {
      "id": "33",
      "name": "チルタイム"
    },
    {
      "id": "34",
      "name": "勇猛果敢"
    },
    {
      "id": "35",
      "name": "破壊力"
    },
    {
      "id": "36",
      "name": "技術力"
    },
    {
      "id": "37",
      "name": "魔法使い"
    },
    {
      "id": "38",
      "name": "ドラゴン"
    },
    {
      "id": "39",
      "name": "鉄壁"
    },
    {
      "id": "40",
      "name": "絆"
    },
    {
      "id": "41",
      "name": "草原"
    },
    {
      "id": "42",
      "name": "砂漠"
    },
    {
      "id": "43",
      "name": "田舎町"
    },
    {
      "id": "44",
      "name": "ネオン街"
    },
    {
      "id": "45",
      "name": "海底"
    },
    {
      "id": "46",
      "name": "部族村"
    },
    {
      "id": "47",
      "name": "マグマ"
    },
    {
      "id": "48",
      "name": "魔王城"
    },
    {
      "id": "49",
      "name": "斬撃"
    },
    {
      "id": "50",
      "name": "浮遊"
    },
    {
      "id": "51",
      "name": "雷撃"
    },
    {
      "id": "52",
      "name": "読みかけの本"
    },
    {
      "id": "53",
      "name": "イベントボス"
    },
    {
      "id": "54",
      "name": "ピラミッド"
    },
    {
      "id": "55",
      "name": "スピードスター"
    },
    {
      "id": "56",
      "name": "火炎"
    },
    {
      "id": "57",
      "name": "不気味なオーラ"
    },
    {
      "id": "58",
      "name": "特殊能力"
    },
    {
      "id": "59",
      "name": "影の実力者"
    },
    {
      "id": "60",
      "name": "遠距離攻撃"
    },
    {
      "id": "61",
      "name": "超合金"
    },
    {
      "id": "62",
      "name": "超合金ボス"
    },
    {
      "id": "63",
      "name": "超合金ヒーロー"
    },
    {
      "id": "64",
      "name": "メタリック"
    },
    {
      "id": "65",
      "name": "スイーツ"
    },
    {
      "id": "66",
      "name": "伝統"
    },
    {
      "id": "67",
      "name": "もちもち"
    },
    {
      "id": "68",
      "name": "怪獣"
    },
    {
      "id": "69",
      "name": "ミニマム"
    },
    {
      "id": "70",
      "name": "職人"
    },
    {
      "id": "71",
      "name": "強力な爪"
    },
    {
      "id": "72",
      "name": "リスペクト"
    },
    {
      "id": "73",
      "name": "変身"
    },
    {
      "id": "74",
      "name": "リーダー気質"
    },
    {
      "id": "75",
      "name": "風の如く"
    },
    {
      "id": "76",
      "name": "波の如く"
    },
    {
      "id": "77",
      "name": "大地の力"
    },
    {
      "id": "78",
      "name": "団結力"
    },
    {
      "id": "79",
      "name": "閃光"
    },
    {
      "id": "80",
      "name": "水の極意"
    },
    {
      "id": "81",
      "name": "ロマン"
    },
    {
      "id": "82",
      "name": "機械の力"
    }
  ],
  "bounds": {
    "seed": {
      "R": [
        50,
        100
      ],
      "SR": [
        90,
        140
      ],
      "SSR": [
        120,
        160
      ],
      "UR": [
        100,
        180
      ],
      "MOB": [
        170,
        220
      ]
    },
    "middle": {
      "R": [
        80,
        160
      ],
      "SR": [
        120,
        180
      ],
      "SSR": [
        150,
        200
      ],
      "UR": [
        180,
        240
      ],
      "MOB": [
        220,
        280
      ]
    },
    "mob": {
      "R": [
        160,
        220
      ],
      "SR": [
        180,
        250
      ],
      "SSR": [
        240,
        300
      ],
      "UR": [
        280,
        320
      ],
      "MOB": [
        300,
        400
      ]
    }
  }
};
