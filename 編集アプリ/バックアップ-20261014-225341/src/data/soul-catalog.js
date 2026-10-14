import {applyOct10Additions} from './oct10-addition-updates.js';
import {applyOct07Skills} from './oct07-skills.js';
import {applyOct07Safe} from './oct07-safe.js';
import {applyOct06Spec} from './oct06-spec.js';
import {applyBattleCorrections} from './battle-corrections.js';
import {applyOct05Spec} from './oct05-spec.js';
// Imported from the v1 master with user-approved soul-overrides.js; edit the source/override, not generated data.
import {extendPieceCatalog} from './piece-catalog.js';
const base = {
  "version": "master-v1",
  "meta": {
    "version": "1.0",
    "title": "MOB SOUL BATTLE 全フィギュアマスター",
    "totalFigures": 327,
    "countsBySource": {
      "main": 103,
      "monster_boss": 114,
      "event": 64,
      "chogokin": 46
    },
    "countsByRarity": {
      "R": 23,
      "SR": 65,
      "MOB": 12,
      "SSR": 127,
      "UR": 100
    },
    "countsBySoulClass": {
      "シードソウル": 231,
      "MOBソウル": 22,
      "ミドルソウル": 74
    }
  },
  "rules": {
    "playerLife": 400,
    "fieldMax": 3,
    "handRefill": 5,
    "directAttack": false,
    "skillPerTurn": 1,
    "skillPerTurnScope": "figure",
    "skillUsesByStage": {"seed":1,"middle":2,"mob":3},
    "fusionAndRevivalRefillSkills": true,
    "skillUsedFigureCannotFuseSameTurn": true,
    "attackPerFigurePerTurn": 1,
    "seedDeck": 30,
    "middleDeck": 10,
    "mobDeck": 5,
    "mobSoulFusionBonus": {
      "ATK": 20,
      "DEF": 20,
      "glow": true
    },
    "statStep": "基本10単位、必要な場合のみ5単位",
    "tagLimits": {
      "R": 3,
      "SR": 5,
      "SSR": 7,
      "UR": 9,
      "MOB": 12
    }
  },
  "figures": [
    {
      "id": "01",
      "uid": "MSB-001",
      "name": "ぷにモブグリーン",
      "image": "fig/01.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 60,
      "def": 80,
      "tags": [
        "01",
        "02",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにケア",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "program": 0,
        "sourceText": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "HP +5",
        "traitText": "無し",
        "soul": {
          "text": "味方全体のHPを50回復する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +5",
          "trait": "無し",
          "accessorySkillName": "ぷにケア",
          "accessorySkillEffect": "味方全体のHPを50回復する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにケア",
              "effect": "味方全体のHPを15%アップし、DEFを5%アップする"
            },
            "5": {
              "name": "ぷにケア",
              "effect": "味方全体のHPを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "02",
      "uid": "MSB-002",
      "name": "ぷにモブレッド",
      "image": "fig/02.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 80,
      "def": 60,
      "tags": [
        "01",
        "03",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにパンチ",
        "timing": "attack-response",
        "effect": "このフィギュアを手札へ戻し、その攻撃を終了する。",
        "timingLabel": "相手攻撃宣言時",
        "description": "このフィギュアを手札へ戻し、その攻撃を終了する。",
        "program": 1,
        "sourceText": "このフィギュアを手札へ戻し、その攻撃を終了する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "ATK +1",
        "traitText": "無し",
        "soul": {
          "text": "敵単体に無属性の物理小ダメージを与え、自分のATKを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +1",
          "trait": "無し",
          "accessorySkillName": "ぷにパンチ",
          "accessorySkillEffect": "敵単体に無属性の物理小ダメージを与え、自分のATKを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにパンチ",
              "effect": "味方全体のATKを15%アップする"
            },
            "5": {
              "name": "ぷにパンチ",
              "effect": "味方全体のATKを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "03",
      "uid": "MSB-003",
      "name": "ぷにモブオレンジ",
      "image": "fig/03.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "魔法",
      "role": "攻撃",
      "atk": 70,
      "def": 60,
      "tags": [
        "01",
        "07",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにマジック",
        "timing": "own-main",
        "effect": "このフィギュアを手札へ戻し、手札から別のシードソウル1体を召喚できる。",
        "timingLabel": "自分メイン",
        "description": "このフィギュアを手札へ戻し、手札から別のシードソウル1体を召喚できる。",
        "program": 2,
        "sourceText": "このフィギュアを手札へ戻し、手札から別のシードソウル1体を召喚できる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "MAG +1",
        "traitText": "無し",
        "soul": {
          "text": "敵単体に無属性の魔法小ダメージを与え、自分のMAGを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MAG +1",
          "trait": "無し",
          "accessorySkillName": "ぷにマジック",
          "accessorySkillEffect": "敵単体に無属性の魔法小ダメージを与え、自分のMAGを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにマジック",
              "effect": "敵全体のDEFを9%ダウンさせる"
            },
            "5": {
              "name": "ぷにマジック",
              "effect": "敵全体のDEFを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "04",
      "uid": "MSB-004",
      "name": "ぷにモブイエロー",
      "image": "fig/04.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 75,
      "def": 60,
      "tags": [
        "01",
        "04",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにダッシュ",
        "timing": "attack-response",
        "effect": "このフィギュアを手札へ戻し、その攻撃を終了する。",
        "timingLabel": "相手攻撃宣言時",
        "description": "このフィギュアを手札へ戻し、その攻撃を終了する。",
        "program": 1,
        "sourceText": "このフィギュアを手札へ戻し、その攻撃を終了する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "SPD +1",
        "traitText": "無し",
        "soul": {
          "text": "自分のSPDを2ターンの間25%アップし、回避率を5%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +1",
          "trait": "無し",
          "accessorySkillName": "ぷにダッシュ",
          "accessorySkillEffect": "自分のSPDを2ターンの間25%アップし、回避率を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにダッシュ",
              "effect": "味方全体のSPDを15%アップする"
            },
            "5": {
              "name": "ぷにダッシュ",
              "effect": "味方全体のSPDを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "103",
        "175",
        "178",
        "mq:eventfig/29",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "05",
      "uid": "MSB-005",
      "name": "ぷにモブパープル",
      "image": "fig/05.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "妨害",
      "atk": 70,
      "def": 60,
      "tags": [
        "01",
        "05",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにミスト",
        "timing": "attack-response",
        "effect": "このフィギュアを手札へ戻し、その攻撃を終了する。",
        "timingLabel": "相手攻撃宣言時",
        "description": "このフィギュアを手札へ戻し、その攻撃を終了する。",
        "program": 1,
        "sourceText": "このフィギュアを手札へ戻し、その攻撃を終了する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "MND +1",
        "traitText": "無し",
        "soul": {
          "text": "敵単体のATKとMNDを2ターンの間10%ダウンさせる"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MND +1",
          "trait": "無し",
          "accessorySkillName": "ぷにミスト",
          "accessorySkillEffect": "敵単体のATKとMNDを2ターンの間10%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにミスト",
              "effect": "敵全体のATKを9%ダウンさせる"
            },
            "5": {
              "name": "ぷにミスト",
              "effect": "敵全体のATKを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "136",
        "157",
        "161",
        "166",
        "207",
        "mq:eventfig/45"
      ]
    },
    {
      "id": "06",
      "uid": "MSB-006",
      "name": "ぷにモブ:ピンク",
      "image": "fig/06.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 60,
      "def": 70,
      "tags": [
        "01",
        "06",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにチャージ",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "program": 0,
        "sourceText": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "HP & MP +2",
        "traitText": "無し",
        "soul": {
          "text": "味方全体のMPを20回復し、MNDを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP & MP +2",
          "trait": "無し",
          "accessorySkillName": "ぷにチャージ",
          "accessorySkillEffect": "味方全体のMPを20回復し、MNDを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにチャージ",
              "effect": "味方全体のHPを15%アップし、SPDを5%アップする"
            },
            "5": {
              "name": "ぷにチャージ",
              "effect": "味方全体のHPを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "07",
      "uid": "MSB-007",
      "name": "ぷにモブディープレッド",
      "image": "fig/07.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "連続攻撃",
      "atk": 80,
      "def": 60,
      "tags": [
        "01",
        "03",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにラッシュ",
        "timing": "own-main",
        "effect": "このターン最大3回攻撃できる。攻撃するたび、このターン中ATK+15（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大3回攻撃できる。攻撃するたび、このターン中ATK+15（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 3,
        "sourceText": "このターン最大3回攻撃できる。攻撃するたび、このターン中ATK+15（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "ATK +1",
        "traitText": "無し",
        "soul": {
          "text": "敵単体に無属性の物理小ダメージを3回与える"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +1",
          "trait": "無し",
          "accessorySkillName": "ぷにラッシュ",
          "accessorySkillEffect": "敵単体に無属性の物理小ダメージを3回与える",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにラッシュ",
              "effect": "正面の敵のHPを9%ダウンさせる"
            },
            "5": {
              "name": "ぷにラッシュ",
              "effect": "正面の敵のHPを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "08",
      "uid": "MSB-008",
      "name": "ぷにモブイタリアンレッド",
      "image": "fig/08.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 80,
      "def": 60,
      "tags": [
        "01",
        "03",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにスピン",
        "timing": "attack-response",
        "effect": "このフィギュアを手札へ戻し、その攻撃を終了する。",
        "timingLabel": "相手攻撃宣言時",
        "description": "このフィギュアを手札へ戻し、その攻撃を終了する。",
        "program": 1,
        "sourceText": "このフィギュアを手札へ戻し、その攻撃を終了する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "ATK +1",
        "traitText": "無し",
        "soul": {
          "text": "敵単体に無属性の物理小ダメージを与え、自分のATKとSPDを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +1",
          "trait": "無し",
          "accessorySkillName": "ぷにスピン",
          "accessorySkillEffect": "敵単体に無属性の物理小ダメージを与え、自分のATKとSPDを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにスピン",
              "effect": "味方全体のATKとSPDを9%アップする"
            },
            "5": {
              "name": "ぷにスピン",
              "effect": "味方全体のATKとSPDを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "09",
      "uid": "MSB-009",
      "name": "ぷにモブブルー",
      "image": "fig/09.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 60,
      "def": 80,
      "tags": [
        "01",
        "31",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにガード",
        "timing": "attack-response",
        "effect": "このフィギュアを手札へ戻し、その攻撃を終了する。",
        "timingLabel": "相手攻撃宣言時",
        "description": "このフィギュアを手札へ戻し、その攻撃を終了する。",
        "program": 1,
        "sourceText": "このフィギュアを手札へ戻し、その攻撃を終了する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "DEF +1",
        "traitText": "無し",
        "soul": {
          "text": "味方全体のDEFを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +1",
          "trait": "無し",
          "accessorySkillName": "ぷにガード",
          "accessorySkillEffect": "味方全体のDEFを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにガード",
              "effect": "味方全体のDEFを15%アップする"
            },
            "5": {
              "name": "ぷにガード",
              "effect": "味方全体のDEFを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "10",
      "uid": "MSB-010",
      "name": "ぷにモブミントグリーン",
      "image": "fig/10.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 60,
      "def": 70,
      "tags": [
        "01",
        "02",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにミント",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体は次に撃破される時、1度だけ撃破されず場に残る。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体は次に撃破される時、1度だけ撃破されず場に残る。",
        "program": 4,
        "sourceText": "自分ライフを20回復する。味方1体は次に撃破される時、1度だけ撃破されず場に残る。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "HP +5",
        "traitText": "無し",
        "soul": {
          "text": "味方全体のHPを40回復し、状態異常を1つ解除する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +5",
          "trait": "無し",
          "accessorySkillName": "ぷにミント",
          "accessorySkillEffect": "味方全体のHPを40回復し、状態異常を1つ解除する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにミント",
              "effect": "味方全体のDEFを12%アップし、HPを5%アップする"
            },
            "5": {
              "name": "ぷにミント",
              "effect": "味方全体のDEFを8%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "11",
      "uid": "MSB-011",
      "name": "ぷにモブブロンズ",
      "image": "fig/11.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 100,
      "def": 120,
      "tags": [
        "01",
        "08",
        "27",
        "64",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにメタル",
        "timing": "own-main",
        "effect": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 5,
        "sourceText": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "HP +3 & DEF +1",
        "traitText": "無し",
        "soul": {
          "text": "味方全体のMPを25回復し、DEFを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +3 & DEF +1",
          "trait": "無し",
          "accessorySkillName": "ぷにメタル",
          "accessorySkillEffect": "味方全体のMPを25回復し、DEFを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにメタル",
              "effect": "味方全体のDEFを15%アップし、HPを5%アップする"
            },
            "5": {
              "name": "ぷにメタル",
              "effect": "味方全体のDEFを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "121",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "12",
      "uid": "MSB-012",
      "name": "ぷにモブピンクゴールド",
      "image": "fig/12.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 100,
      "def": 120,
      "tags": [
        "01",
        "06",
        "27",
        "64",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにキラリ",
        "timing": "own-main",
        "effect": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 5,
        "sourceText": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "HP +3 & MP +2",
        "traitText": "無し",
        "soul": {
          "text": "味方全体のMPを25回復し、MNDを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +3 & MP +2",
          "trait": "無し",
          "accessorySkillName": "ぷにキラリ",
          "accessorySkillEffect": "味方全体のMPを25回復し、MNDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにキラリ",
              "effect": "味方全体のHPとDEFを9%アップする"
            },
            "5": {
              "name": "ぷにキラリ",
              "effect": "味方全体のHPとDEFを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "121",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "13",
      "uid": "MSB-013",
      "name": "ぷにモブゴールド",
      "image": "fig/13.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 120,
      "def": 100,
      "tags": [
        "01",
        "08",
        "27",
        "64",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにゴールド",
        "timing": "own-main",
        "effect": "このフィギュアを手札へ戻し、手札から別のシードソウル1体を召喚できる。",
        "timingLabel": "自分メイン",
        "description": "このフィギュアを手札へ戻し、手札から別のシードソウル1体を召喚できる。",
        "program": 2,
        "sourceText": "このフィギュアを手札へ戻し、手札から別のシードソウル1体を召喚できる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "HP +4 & ATK +1",
        "traitText": "無し",
        "soul": {
          "text": "味方全体のATKを2ターンの間15%アップし、この戦闘の獲得コインを5%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +4 & ATK +1",
          "trait": "無し",
          "accessorySkillName": "ぷにゴールド",
          "accessorySkillEffect": "味方全体のATKを2ターンの間15%アップし、この戦闘の獲得コインを5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにゴールド",
              "effect": "味方全体のATKを15%アップし、SPDを5%アップする"
            },
            "5": {
              "name": "ぷにゴールド",
              "effect": "味方全体のATKを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "121",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "14",
      "uid": "MSB-014",
      "name": "ぷにモブシルバーホワイト",
      "image": "fig/14.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 115,
      "def": 110,
      "tags": [
        "01",
        "08",
        "28",
        "64",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにシルバー",
        "timing": "own-main",
        "effect": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 5,
        "sourceText": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "HP +8",
        "traitText": "会心率+2%",
        "soul": {
          "text": "味方全体の全属性耐性を2ターンの間10%アップし、MPを15回復する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +8",
          "trait": "会心率+2%",
          "accessorySkillName": "ぷにシルバー",
          "accessorySkillEffect": "味方全体の全属性耐性を2ターンの間10%アップし、MPを15回復する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにシルバー",
              "effect": "味方全体のDEFを15%アップし、HPを10%アップする"
            },
            "5": {
              "name": "ぷにシルバー",
              "effect": "味方全体のDEFを10%アップし、HPを5%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "121",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "15",
      "uid": "MSB-015",
      "name": "ぷにモブハロウィン",
      "image": "fig/15.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 100,
      "def": 120,
      "tags": [
        "01",
        "07",
        "09",
        "27",
        "69"
      ],
      "soulSkill": {
        "name": "ぷにトリック",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "program": 6,
        "sourceText": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "MND +4",
        "traitText": "無し",
        "soul": {
          "text": "味方全体のマヒを解除し、SPDを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MND +4",
          "trait": "無し",
          "accessorySkillName": "ぷにトリック",
          "accessorySkillEffect": "味方全体のマヒを解除し、SPDを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ぷにトリック",
              "effect": "敵全体のSPDを9%ダウンさせ、味方全体のSPDを5%アップする"
            },
            "5": {
              "name": "ぷにトリック",
              "effect": "敵全体のSPDを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "16",
      "uid": "MSB-016",
      "name": "みかんちゃん",
      "image": "fig/16.png",
      "rarity": "MOB",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 200,
      "def": 210,
      "tags": [
        "08",
        "13",
        "23",
        "27",
        "28",
        "30",
        "40",
        "55",
        "67",
        "68",
        "78",
        "81"
      ],
      "soulSkill": {
        "name": "おるすばん",
        "timing": "attack-response",
        "effect": "このフィギュアを対象にした攻撃を1回無効にし、自分フィールド内の位置を変更する。",
        "timingLabel": "相手攻撃宣言時",
        "description": "このフィギュアを対象にした攻撃を1回無効にし、自分フィールド内の位置を変更する。",
        "program": 7,
        "sourceText": "このフィギュアを対象にした攻撃を1回無効にし、自分フィールド内の位置を変更する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "MOB",
        "statsText": "HP.MP +15 & DEF +10",
        "traitText": "必殺技CT-1ターン & ダメージ軽減+5%",
        "soul": {
          "text": "味方全体のDEFを2ターンの間40%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP.MP +15 & DEF +10",
          "trait": "必殺技CT-1ターン & ダメージ軽減+5%",
          "accessorySkillName": "おるすばん",
          "accessorySkillEffect": "味方全体のDEFを2ターンの間40%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 おるすばん",
              "effect": "味方全体のDEFを60%アップし、HPを10%アップする"
            },
            "5": {
              "name": "おるすばん",
              "effect": "味方全体のDEFを55%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "121",
        "202",
        "159",
        "165",
        "176",
        "180",
        "205",
        "215",
        "219",
        "mq:eventfig/03",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "17",
      "uid": "MSB-017",
      "name": "モブクラシックブルー",
      "image": "fig/17.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 100,
      "def": 120,
      "tags": [
        "02",
        "09",
        "10",
        "17"
      ],
      "soulSkill": {
        "name": "ブルーノート",
        "timing": "attack-response",
        "effect": "この攻撃中DEF+30。このフィギュアが撃破されても、その戦闘の差分ライフダメージを0にする。",
        "timingLabel": "相手攻撃宣言時",
        "description": "この攻撃中DEF+30。このフィギュアが撃破されても、その戦闘の差分ライフダメージを0にする。",
        "program": 8,
        "sourceText": "この攻撃中DEF+30。このフィギュアが撃破されても、その戦闘の差分ライフダメージを0にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "水属性耐性 +2%",
        "soul": {
          "text": "味方全体のMNDとDEFを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "水属性耐性 +2%",
          "accessorySkillName": "ブルーノート",
          "accessorySkillEffect": "味方全体のMNDとDEFを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ブルーノート",
              "effect": "味方全体のDEFとSPDを9%アップする"
            },
            "5": {
              "name": "ブルーノート",
              "effect": "味方全体のDEFとSPDを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "119",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "18",
      "uid": "MSB-018",
      "name": "モブクラシックグリーン",
      "image": "fig/18.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 100,
      "def": 120,
      "tags": [
        "02",
        "10",
        "33"
      ],
      "soulSkill": {
        "name": "グリーンノート",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "program": 0,
        "sourceText": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "毒耐性 +1%",
        "soul": {
          "text": "味方全体のHPを10%回復し、SPDを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "毒耐性 +1%",
          "accessorySkillName": "グリーンノート",
          "accessorySkillEffect": "味方全体のHPを10%回復し、SPDを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 グリーンノート",
              "effect": "味方全体のHPを15%アップし、SPDを6%アップする"
            },
            "5": {
              "name": "グリーンノート",
              "effect": "味方全体のHPを10%アップし、SPDを3%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "19",
      "uid": "MSB-019",
      "name": "モブクラシックピンク",
      "image": "fig/19.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 100,
      "def": 120,
      "tags": [
        "06",
        "10",
        "33",
        "81"
      ],
      "soulSkill": {
        "name": "ピンクノート",
        "timing": "own-main",
        "effect": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "timingLabel": "自分メイン",
        "description": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "program": 9,
        "sourceText": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "ダメージ軽減 +1%",
        "soul": {
          "text": "味方全体のSPDを2ターンの間10%アップし、敵全体のDEFを5%ダウンさせる"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "ダメージ軽減 +1%",
          "accessorySkillName": "ピンクノート",
          "accessorySkillEffect": "味方全体のSPDを2ターンの間10%アップし、敵全体のDEFを5%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ピンクノート",
              "effect": "敵全体のDEFを9%ダウンさせる"
            },
            "5": {
              "name": "ピンクノート",
              "effect": "敵全体のDEFを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "20",
      "uid": "MSB-020",
      "name": "モブクラシックオレンジ",
      "image": "fig/20.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 100,
      "def": 120,
      "tags": [
        "07",
        "10",
        "33",
        "81"
      ],
      "soulSkill": {
        "name": "オレンジノート",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "program": 6,
        "sourceText": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "マヒ耐性 +1%",
        "soul": {
          "text": "味方全体のSPDを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "マヒ耐性 +1%",
          "accessorySkillName": "オレンジノート",
          "accessorySkillEffect": "味方全体のSPDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 オレンジノート",
              "effect": "敵全体のSPDを9%ダウンさせる"
            },
            "5": {
              "name": "オレンジノート",
              "effect": "敵全体のSPDを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "21",
      "uid": "MSB-021",
      "name": "モブクラシックレッド",
      "image": "fig/21.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 100,
      "def": 120,
      "tags": [
        "03",
        "10",
        "33",
        "81"
      ],
      "soulSkill": {
        "name": "レッドノート",
        "timing": "own-main",
        "effect": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。",
        "program": 10,
        "sourceText": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "やけど耐性 +1%",
        "soul": {
          "text": "味方全体のATKとSPDを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "やけど耐性 +1%",
          "accessorySkillName": "レッドノート",
          "accessorySkillEffect": "味方全体のATKとSPDを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 レッドノート",
              "effect": "味方全体のATKを15%アップする"
            },
            "5": {
              "name": "レッドノート",
              "effect": "味方全体のATKを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "22",
      "uid": "MSB-022",
      "name": "モブメシ どら焼き",
      "image": "fig/22.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 130,
      "def": 150,
      "tags": [
        "10",
        "29",
        "30",
        "40",
        "65",
        "67",
        "81"
      ],
      "soulSkill": {
        "name": "あんこタイム",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体は次に撃破される時、1度だけ撃破されず場に残る。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体は次に撃破される時、1度だけ撃破されず場に残る。",
        "program": 4,
        "sourceText": "自分ライフを20回復する。味方1体は次に撃破される時、1度だけ撃破されず場に残る。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "眠り耐性 +5%",
        "soul": {
          "text": "味方全体のHPを20%回復する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +5",
          "trait": "眠り耐性 +5%",
          "accessorySkillName": "あんこタイム",
          "accessorySkillEffect": "味方全体のHPを20%回復する",
          "mobPieceSkills": {
            "1": {
              "name": "0 あんこタイム",
              "effect": "味方全体のHPを20%アップし、DEFを5%アップする"
            },
            "5": {
              "name": "あんこタイム",
              "effect": "味方全体のHPを14%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "23",
      "uid": "MSB-023",
      "name": "モブメシ ピザ",
      "image": "fig/23.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 140,
      "def": 140,
      "tags": [
        "07",
        "10",
        "29",
        "40",
        "66",
        "67",
        "70"
      ],
      "soulSkill": {
        "name": "チーズラッシュ",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "program": 0,
        "sourceText": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "ATK +4",
        "traitText": "やけど耐性 +5%",
        "soul": {
          "text": "味方全体のHPを10%回復し、ATKを2ターンの間20%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +4",
          "trait": "やけど耐性 +5%",
          "accessorySkillName": "チーズラッシュ",
          "accessorySkillEffect": "味方全体のHPを10%回復し、ATKを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 チーズラッシュ",
              "effect": "味方全体のATKを18%アップし、SPDを8%アップする"
            },
            "5": {
              "name": "チーズラッシュ",
              "effect": "味方全体のATKを12%アップし、SPDを5%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "24",
      "uid": "MSB-024",
      "name": "モブメシ 肉まん",
      "image": "fig/24.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 130,
      "def": 140,
      "tags": [
        "10",
        "28",
        "29",
        "40",
        "66",
        "67",
        "74"
      ],
      "soulSkill": {
        "name": "ほかほかガード",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "program": 11,
        "sourceText": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "HP +10",
        "traitText": "マヒ耐性 +5%",
        "soul": {
          "text": "味方全体のHPを15%回復し、DEFを2ターンの間20%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +10",
          "trait": "マヒ耐性 +5%",
          "accessorySkillName": "ほかほかガード",
          "accessorySkillEffect": "味方全体のHPを15%回復し、DEFを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ほかほかガード",
              "effect": "味方全体のDEFを18%アップし、HPを10%アップする"
            },
            "5": {
              "name": "ほかほかガード",
              "effect": "味方全体のDEFを12%アップし、HPを5%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "121",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "25",
      "uid": "MSB-025",
      "name": "モブメシ パンケーキ",
      "image": "fig/25.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 140,
      "def": 140,
      "tags": [
        "04",
        "10",
        "18",
        "33",
        "40",
        "65",
        "67"
      ],
      "soulSkill": {
        "name": "ふわふわタイム",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体は次に撃破される時、1度だけ撃破されず場に残る。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体は次に撃破される時、1度だけ撃破されず場に残る。",
        "program": 4,
        "sourceText": "自分ライフを20回復する。味方1体は次に撃破される時、1度だけ撃破されず場に残る。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "ATK +2 & DEF +3",
        "traitText": "眠り耐性 +5%",
        "soul": {
          "text": "味方全体のHPを15%回復し、MNDとMAGを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +2 & DEF +3",
          "trait": "眠り耐性 +5%",
          "accessorySkillName": "ふわふわタイム",
          "accessorySkillEffect": "味方全体のHPを15%回復し、MNDとMAGを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ふわふわタイム",
              "effect": "味方全体のHPとSPDを10%アップする"
            },
            "5": {
              "name": "ふわふわタイム",
              "effect": "味方全体のHPとSPDを7%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "103",
        "175",
        "178",
        "mq:eventfig/29",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "26",
      "uid": "MSB-026",
      "name": "モブKART VR",
      "image": "fig/26.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 130,
      "def": 150,
      "tags": [
        "08",
        "10",
        "22",
        "36",
        "81",
        "82"
      ],
      "soulSkill": {
        "name": "VRドリフト",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "program": 12,
        "sourceText": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "SPD +3 & MND +2",
        "traitText": "ネオン街の戦闘で全ステータス+5%",
        "soul": {
          "text": "自分のSPDを2ターンの間20%アップし、回避率を10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +3 & MND +2",
          "trait": "ネオン街の戦闘で全ステータス+5%",
          "accessorySkillName": "VRドリフト",
          "accessorySkillEffect": "自分のSPDを2ターンの間20%アップし、回避率を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 VRドリフト",
              "effect": "味方全体のSPDを18%アップする"
            },
            "5": {
              "name": "VRドリフト",
              "effect": "味方全体のSPDを12%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "121",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "27",
      "uid": "MSB-027",
      "name": "モブKART ゴールド",
      "image": "fig/27.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 140,
      "def": 140,
      "tags": [
        "08",
        "10",
        "22",
        "39",
        "81",
        "82"
      ],
      "soulSkill": {
        "name": "ゴールドラップ",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "SPD +3 & MND +2",
        "traitText": "戦闘獲得コイン +5%",
        "soul": {
          "text": "自分のSPDを2ターンの間15%アップし、この戦闘の獲得コインを10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +3 & MND +2",
          "trait": "戦闘獲得コイン +5%",
          "accessorySkillName": "ゴールドラップ",
          "accessorySkillEffect": "自分のSPDを2ターンの間15%アップし、この戦闘の獲得コインを10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ゴールドラップ",
              "effect": "味方全体のSPDとHPを9%アップする"
            },
            "5": {
              "name": "ゴールドラップ",
              "effect": "味方全体のSPDとHPを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "121",
        "135",
        "139",
        "147",
        "163",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/20",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "28",
      "uid": "MSB-028",
      "name": "モブKART ブラック",
      "image": "fig/28.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 140,
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
        "timing": "skill-response",
        "effect": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "timingLabel": "相手スキル発動時",
        "description": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "program": 14,
        "sourceText": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "SPD +3 & MND +2",
        "traitText": "HP30以下でDEF +10",
        "soul": {
          "text": "自分のSPDとATKを2ターンの間20%アップし、回避率を5%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +3 & MND +2",
          "trait": "HP30以下でDEF +10",
          "accessorySkillName": "ブラックドリフト",
          "accessorySkillEffect": "自分のSPDとATKを2ターンの間20%アップし、回避率を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ブラックドリフト",
              "effect": "味方全体のATKとSPDを10%アップする"
            },
            "5": {
              "name": "ブラックドリフト",
              "effect": "味方全体のATKとSPDを7%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "103",
        "109",
        "112",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/45",
        "mq:eventfig/47",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "29",
      "uid": "MSB-029",
      "name": "モブKART 中華店主",
      "image": "fig/29.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "妨害",
      "atk": 130,
      "def": 140,
      "tags": [
        "03",
        "18",
        "22",
        "32",
        "81",
        "82"
      ],
      "soulSkill": {
        "name": "チャーハンブースト",
        "timing": "own-main",
        "effect": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。",
        "program": 10,
        "sourceText": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "SPD +3 & MND +2",
        "traitText": "やけど耐性 +10%",
        "soul": {
          "text": "自分のSPDとDEFを2ターンの間15%アップし、やけど耐性を30%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +3 & MND +2",
          "trait": "やけど耐性 +10%",
          "accessorySkillName": "チャーハンブースト",
          "accessorySkillEffect": "自分のSPDとDEFを2ターンの間15%アップし、やけど耐性を30%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 チャーハンブースト",
              "effect": "味方全体のDEFとSPDを10%アップする"
            },
            "5": {
              "name": "チャーハンブースト",
              "effect": "味方全体のDEFとSPDを7%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "120",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/47",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "30",
      "uid": "MSB-030",
      "name": "モブKART ヴィラン",
      "image": "fig/30.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 130,
      "def": 140,
      "tags": [
        "09",
        "25",
        "37",
        "50",
        "58",
        "60",
        "81"
      ],
      "soulSkill": {
        "name": "ダークドリフト",
        "timing": "own-main",
        "effect": "相手フィールド1体の属性をターン終了まで無属性として扱う。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド1体の属性をターン終了まで無属性として扱う。",
        "program": 15,
        "sourceText": "相手フィールド1体の属性をターン終了まで無属性として扱う。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "SPD +3 & MND +2",
        "traitText": "光属性耐性 +10%",
        "soul": {
          "text": "敵全体のSPDを2ターンの間15%ダウンさせ、自分のSPDを15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +3 & MND +2",
          "trait": "光属性耐性 +10%",
          "accessorySkillName": "ダークドリフト",
          "accessorySkillEffect": "敵全体のSPDを2ターンの間15%ダウンさせ、自分のSPDを15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ダークドリフト",
              "effect": "敵全体のSPDを15%ダウンさせる"
            },
            "5": {
              "name": "ダークドリフト",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "103",
        "104",
        "109",
        "110",
        "111",
        "112",
        "121",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "31",
      "uid": "MSB-031",
      "name": "モブKART ファイヤー",
      "image": "fig/31.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 140,
      "def": 145,
      "tags": [
        "03",
        "22",
        "26",
        "32",
        "56",
        "57",
        "60"
      ],
      "soulSkill": {
        "name": "ファイヤーブースト",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "program": 16,
        "sourceText": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "SPD +3 & MND +2",
        "traitText": "火属性耐性 +10%",
        "soul": {
          "text": "敵単体に火属性の物理中ダメージを与え、自分のSPDを2ターンの間20%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +3 & MND +2",
          "trait": "火属性耐性 +10%",
          "accessorySkillName": "ファイヤーブースト",
          "accessorySkillEffect": "敵単体に火属性の物理中ダメージを与え、自分のSPDを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ファイヤーブースト",
              "effect": "味方全体のATKとSPDを12%アップする"
            },
            "5": {
              "name": "ファイヤーブースト",
              "effect": "味方全体のATKとSPDを8%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "100",
        "107",
        "110",
        "111",
        "113",
        "114",
        "115",
        "120",
        "134",
        "137",
        "138",
        "139",
        "142",
        "143",
        "144",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "204",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "32",
      "uid": "MSB-032",
      "name": "PB2 オンラインロゴ",
      "image": "fig/32.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 110,
      "def": 105,
      "tags": [
        "40",
        "66",
        "72",
        "78",
        "82"
      ],
      "soulSkill": {
        "name": "オンラインサイファー",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "program": 12,
        "sourceText": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "HP +10 & MAG +2",
        "traitText": "無し",
        "soul": {
          "text": "自分のSPDと会心率を2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +10 & MAG +2",
          "trait": "無し",
          "accessorySkillName": "オンラインサイファー",
          "accessorySkillEffect": "自分のSPDと会心率を2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 オンラインサイファー",
              "effect": "味方全体のSPDを15%アップする"
            },
            "5": {
              "name": "オンラインサイファー",
              "effect": "味方全体のSPDを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "33",
      "uid": "MSB-033",
      "name": "PB2 PB2 Vol.60ロゴ",
      "image": "fig/33.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "魔法",
      "role": "魔法・支援",
      "atk": 120,
      "def": 100,
      "tags": [
        "11",
        "40",
        "72",
        "78",
        "82"
      ],
      "soulSkill": {
        "name": "60サイファー",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "program": 12,
        "sourceText": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "MP +10 & MAG +2",
        "traitText": "無し",
        "soul": {
          "text": "自分のATKと会心率を2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MP +10 & MAG +2",
          "trait": "無し",
          "accessorySkillName": "60サイファー",
          "accessorySkillEffect": "自分のATKと会心率を2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 60サイファー",
              "effect": "味方全体のATKを15%アップする"
            },
            "5": {
              "name": "60サイファー",
              "effect": "味方全体のATKを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "34",
      "uid": "MSB-034",
      "name": "PB2 Vol.62 マスコット",
      "image": "fig/34.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 145,
      "def": 130,
      "tags": [
        "04",
        "27",
        "31",
        "40",
        "72",
        "78",
        "82"
      ],
      "soulSkill": {
        "name": "ロボサイファー",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "program": 12,
        "sourceText": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "ATK +2 & MAG +2",
        "traitText": "会心率+2%",
        "soul": {
          "text": "自分のDEFと会心率を2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +2 & MAG +2",
          "trait": "会心率+2%",
          "accessorySkillName": "ロボサイファー",
          "accessorySkillEffect": "自分のDEFと会心率を2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ロボサイファー",
              "effect": "味方全体のDEFを15%アップする"
            },
            "5": {
              "name": "ロボサイファー",
              "effect": "味方全体のDEFを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "103",
        "175",
        "178",
        "mq:eventfig/29",
        "mq:eventfig/47",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "35",
      "uid": "MSB-035",
      "name": "PB2 Vol.63 マスコット",
      "image": "fig/35.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 140,
      "tags": [
        "07",
        "27",
        "40",
        "72",
        "73",
        "78",
        "82"
      ],
      "soulSkill": {
        "name": "63サイファー",
        "timing": "own-main",
        "effect": "このターンATK+20、DEF+20。次の相手ターン終了時までこの強化を維持する。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20、DEF+20。次の相手ターン終了時までこの強化を維持する。",
        "program": 17,
        "sourceText": "このターンATK+20、DEF+20。次の相手ターン終了時までこの強化を維持する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "SPD +2 & MND +2",
        "traitText": "会心率+2%",
        "soul": {
          "text": "自分のSPDとMNDを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +2 & MND +2",
          "trait": "会心率+2%",
          "accessorySkillName": "63サイファー",
          "accessorySkillEffect": "自分のSPDとMNDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 63サイファー",
              "effect": "味方全体のSPDを15%アップする"
            },
            "5": {
              "name": "63サイファー",
              "effect": "味方全体のSPDを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "36",
      "uid": "MSB-036",
      "name": "PB2 Vol.63 マスコットⅡ",
      "image": "fig/36.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 140,
      "def": 140,
      "tags": [
        "07",
        "27",
        "40",
        "72",
        "73",
        "78",
        "82"
      ],
      "soulSkill": {
        "name": "ツインサイファー",
        "timing": "own-main",
        "effect": "このターンATK+20、DEF+20。次の相手ターン終了時までこの強化を維持する。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20、DEF+20。次の相手ターン終了時までこの強化を維持する。",
        "program": 17,
        "sourceText": "このターンATK+20、DEF+20。次の相手ターン終了時までこの強化を維持する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "SPD +2 & MAG +2",
        "traitText": "会心率+2%",
        "soul": {
          "text": "自分のMAGとSPDを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +2 & MAG +2",
          "trait": "会心率+2%",
          "accessorySkillName": "ツインサイファー",
          "accessorySkillEffect": "自分のMAGとSPDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ツインサイファー",
              "effect": "敵全体のDEFを9%ダウンさせる"
            },
            "5": {
              "name": "ツインサイファー",
              "effect": "敵全体のDEFを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "37",
      "uid": "MSB-037",
      "name": "PB2 Vol.63 マスコットⅢ",
      "image": "fig/37.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "防御・支援",
      "atk": 140,
      "def": 140,
      "tags": [
        "07",
        "11",
        "40",
        "72",
        "73",
        "78",
        "82"
      ],
      "soulSkill": {
        "name": "トリプルサイファー",
        "timing": "own-main",
        "effect": "このターンATK+20、DEF+20。次の相手ターン終了時までこの強化を維持する。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20、DEF+20。次の相手ターン終了時までこの強化を維持する。",
        "program": 17,
        "sourceText": "このターンATK+20、DEF+20。次の相手ターン終了時までこの強化を維持する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "DEF +2 & MND +2",
        "traitText": "会心率+2%",
        "soul": {
          "text": "自分のDEFとMNDを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +2 & MND +2",
          "trait": "会心率+2%",
          "accessorySkillName": "トリプルサイファー",
          "accessorySkillEffect": "自分のDEFとMNDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 トリプルサイファー",
              "effect": "味方全体のDEFとHPを9%アップする"
            },
            "5": {
              "name": "トリプルサイファー",
              "effect": "味方全体のDEFとHPを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "38",
      "uid": "MSB-038",
      "name": "PB2 クッションモブ",
      "image": "fig/38.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "魔法",
      "role": "回復・支援",
      "atk": 140,
      "def": 145,
      "tags": [
        "06",
        "10",
        "11",
        "40",
        "70",
        "72",
        "78"
      ],
      "soulSkill": {
        "name": "クッションビート",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "program": 11,
        "sourceText": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "HP +10 & MAG +1",
        "traitText": "ダメージ軽減+2%",
        "soul": {
          "text": "味方全体のHPを15%回復し、ダメージ軽減を2ターンの間3%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +10 & MAG +1",
          "trait": "ダメージ軽減+2%",
          "accessorySkillName": "クッションビート",
          "accessorySkillEffect": "味方全体のHPを15%回復し、ダメージ軽減を2ターンの間3%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 クッションビート",
              "effect": "味方全体のHPを18%アップし、DEFを5%アップする"
            },
            "5": {
              "name": "クッションビート",
              "effect": "味方全体のHPを12%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "39",
      "uid": "MSB-039",
      "name": "PB2 CB 20th ロゴ",
      "image": "fig/39.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 140,
      "tags": [
        "04",
        "30",
        "40",
        "64",
        "66",
        "74",
        "78",
        "81",
        "82"
      ],
      "soulSkill": {
        "name": "20thビート",
        "timing": "own-main",
        "effect": "センターの味方1体のATK+30、DEF+20。",
        "timingLabel": "自分メイン",
        "description": "センターの味方1体のATK+30、DEF+20。",
        "program": 18,
        "sourceText": "センターの味方1体のATK+30、DEF+20。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "HP+10 & ATK +2 & MAG +2 & MND +2",
        "traitText": "獲得経験値+10%",
        "soul": {
          "text": "味方全体のATK・DEF・SPDを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP+10 & ATK +2 & MAG +2 & MND +2",
          "trait": "獲得経験値+10%",
          "accessorySkillName": "20thビート",
          "accessorySkillEffect": "味方全体のATK・DEF・SPDを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 20thビート",
              "effect": "味方全体の全ステータスを10%アップする"
            },
            "5": {
              "name": "20thビート",
              "effect": "味方全体の全ステータスを7%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "103",
        "175",
        "178",
        "mq:eventfig/29",
        "mq:eventfig/47",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "40",
      "uid": "MSB-040",
      "name": "MOB SHOT PET モブコドラ",
      "image": "fig/40.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "魔法",
      "role": "攻撃",
      "atk": 140,
      "def": 130,
      "tags": [
        "03",
        "10",
        "38",
        "56",
        "60",
        "68",
        "69"
      ],
      "soulSkill": {
        "name": "コドラファイヤ",
        "timing": "own-main",
        "effect": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "program": 19,
        "sourceText": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "ATK +2 & MP +10",
        "traitText": "火属性魔法与ダメージ+7%",
        "soul": {
          "text": "敵単体に火の魔法ダメージ小～中を与える"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +2 & MP +10",
          "trait": "火属性魔法与ダメージ+7%",
          "accessorySkillName": "コドラファイヤ",
          "accessorySkillEffect": "敵単体に火の魔法ダメージ小～中を与える",
          "mobPieceSkills": {
            "1": {
              "name": "0 コドラファイヤ",
              "effect": "センターの敵のHPを10%ダウンさせる"
            },
            "5": {
              "name": "コドラファイヤ",
              "effect": "センターの敵のHPを7%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "110",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "41",
      "uid": "MSB-041",
      "name": "MOB SHOT PET イルカエル",
      "image": "fig/41.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 150,
      "def": 140,
      "tags": [
        "10",
        "27",
        "31",
        "60",
        "67",
        "68",
        "80"
      ],
      "soulSkill": {
        "name": "イルカブラスト",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "program": 16,
        "sourceText": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "SPD +2 & MP +10",
        "traitText": "水属性魔法与ダメージ+7%",
        "soul": {
          "text": "敵単体に水の魔法ダメージ小～中を与える"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +2 & MP +10",
          "trait": "水属性魔法与ダメージ+7%",
          "accessorySkillName": "イルカブラスト",
          "accessorySkillEffect": "敵単体に水の魔法ダメージ小～中を与える",
          "mobPieceSkills": {
            "1": {
              "name": "0 イルカブラスト",
              "effect": "センターの敵のHPを10%ダウンさせる"
            },
            "5": {
              "name": "イルカブラスト",
              "effect": "センターの敵のHPを7%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "111",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "42",
      "uid": "MSB-042",
      "name": "MOB SHOT PET モブネロ",
      "image": "fig/42.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 140,
      "def": 140,
      "tags": [
        "14",
        "29",
        "34",
        "36",
        "55",
        "59",
        "60"
      ],
      "soulSkill": {
        "name": "ネロスナイパー",
        "timing": "attack-response",
        "effect": "このフィギュアを対象にした攻撃を1回無効にし、自分フィールド内の位置を変更する。",
        "timingLabel": "相手攻撃宣言時",
        "description": "このフィギュアを対象にした攻撃を1回無効にし、自分フィールド内の位置を変更する。",
        "program": 7,
        "sourceText": "このフィギュアを対象にした攻撃を1回無効にし、自分フィールド内の位置を変更する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "SPD +5",
        "traitText": "命中率+10% & 会心率+1%",
        "soul": {
          "text": "敵単体に闇の物理ダメージ小～中を与える"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +5",
          "trait": "命中率+10% & 会心率+1%",
          "accessorySkillName": "ネロスナイパー",
          "accessorySkillEffect": "敵単体に闇の物理ダメージ小～中を与える",
          "mobPieceSkills": {
            "1": {
              "name": "0 ネロスナイパー",
              "effect": "センターの敵のHPを10%ダウンさせる"
            },
            "5": {
              "name": "ネロスナイパー",
              "effect": "センターの敵のHPを7%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "110",
        "111",
        "202",
        "159",
        "219",
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "43",
      "uid": "MSB-043",
      "name": "MOB SHOT PET モブトン",
      "image": "fig/43.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 140,
      "def": 140,
      "tags": [
        "09",
        "31",
        "34",
        "45",
        "59",
        "60",
        "80"
      ],
      "soulSkill": {
        "name": "トントライデント",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "program": 16,
        "sourceText": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "ATK +3",
        "traitText": "水属性ダメージ軽減+5%",
        "soul": {
          "text": "敵単体に水の物理ダメージ小～中を与える"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +3",
          "trait": "水属性ダメージ軽減+5%",
          "accessorySkillName": "トントライデント",
          "accessorySkillEffect": "敵単体に水の物理ダメージ小～中を与える",
          "mobPieceSkills": {
            "1": {
              "name": "0 トントライデント",
              "effect": "センターの敵のHPを10%ダウンさせる"
            },
            "5": {
              "name": "トントライデント",
              "effect": "センターの敵のHPを7%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "111",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "44",
      "uid": "MSB-044",
      "name": "MOB SHOT PET モブデンデン",
      "image": "fig/44.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 160,
      "def": 140,
      "tags": [
        "04",
        "24",
        "34",
        "40",
        "43",
        "51",
        "67",
        "68",
        "79"
      ],
      "soulSkill": {
        "name": "デンデントリック",
        "timing": "own-main",
        "effect": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "timingLabel": "自分メイン",
        "description": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "program": 9,
        "sourceText": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "ATK +2 & SPD +2 & MND +2",
        "traitText": "雷耐性+10% & 雷属性魔法与ダメージ+5%",
        "soul": {
          "text": "敵全体に雷の魔法ダメージ小を与える"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +2 & SPD +2 & MND +2",
          "trait": "雷耐性+10% & 雷属性魔法与ダメージ+5%",
          "accessorySkillName": "デンデントリック",
          "accessorySkillEffect": "敵全体に雷の魔法ダメージ小を与える",
          "mobPieceSkills": {
            "1": {
              "name": "0 デンデントリック",
              "effect": "敵全体のHPを7%ダウンさせる"
            },
            "5": {
              "name": "デンデントリック",
              "effect": "敵全体のHPを6%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 7068,
            "ATK": 227,
            "MAG": 227,
            "DEF": 174,
            "MND": 174,
            "SPD": 254,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "雷",
            "通常攻撃区分": "物理",
            "画像": "boss/15.png",
            "条件・補足": null,
            "技一覧": [
              "マシンガングミ / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "96",
        "103",
        "166",
        "175",
        "178",
        "mq:eventfig/29",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "45",
      "uid": "MSB-045",
      "name": "MOB SHOT SOUL モブスライム",
      "image": "fig/45.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 60,
      "def": 80,
      "tags": [
        "02",
        "09",
        "41"
      ],
      "soulSkill": {
        "name": "スラスライダー",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+30。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+30。",
        "program": 20,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+30。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "DEF +3 & MND +2 & MAG +1",
        "traitText": "水属性耐性+8%",
        "soul": {
          "text": "自分のSPDを2ターンの間25%アップし、回避率を10%・ダメージ軽減を5%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +3 & MND +2 & MAG +1",
          "trait": "水属性耐性+8%",
          "accessorySkillName": "スラスライダー",
          "accessorySkillEffect": "自分のSPDを2ターンの間25%アップし、回避率を10%・ダメージ軽減を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 スラスライダー",
              "effect": "敵全体のSPDを12%ダウンさせ、味方全体のSPDを8%アップする"
            },
            "5": {
              "name": "スラスライダー",
              "effect": "敵全体のSPDを8%ダウンさせ、味方全体のSPDを5%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 113,
            "ATK": 18,
            "MAG": 18,
            "DEF": 15,
            "MND": 15,
            "SPD": 23,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/01.png",
            "条件・補足": null,
            "技一覧": [
              "ネプソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "46",
      "uid": "MSB-046",
      "name": "MOB SHOT SOUL モブロック",
      "image": "fig/46.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 60,
      "def": 80,
      "tags": [
        "09",
        "41",
        "60"
      ],
      "soulSkill": {
        "name": "ロックパンチ",
        "timing": "own-main",
        "effect": "このターンATK+20。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。",
        "program": 21,
        "sourceText": "このターンATK+20。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "DEF +3 & MND +2",
        "traitText": "地属性耐性+10%",
        "soul": {
          "text": "敵単体に地属性物理小ダメージを与える"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +3 & MND +2",
          "trait": "地属性耐性+10%",
          "accessorySkillName": "ロックパンチ",
          "accessorySkillEffect": "敵単体に地属性物理小ダメージを与える",
          "mobPieceSkills": {
            "1": {
              "name": "0 ロックパンチ",
              "effect": "正面の敵のHPを10%ダウンさせ、DEFを8%ダウンさせる"
            },
            "5": {
              "name": "ロックパンチ",
              "effect": "正面の敵のHPを8%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 149,
            "ATK": 20,
            "MAG": 20,
            "DEF": 20,
            "MND": 17,
            "SPD": 21,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/02.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "110",
        "111",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "47",
      "uid": "MSB-047",
      "name": "MOB SHOT SOUL モブテツ",
      "image": "fig/47.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 160,
      "def": 130,
      "tags": [
        "23",
        "24",
        "28",
        "36",
        "40",
        "49",
        "55",
        "60",
        "69"
      ],
      "soulSkill": {
        "name": "茄子落とし",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "program": 6,
        "sourceText": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "ATK +5 & SPD +5",
        "traitText": "会心率+5% & マヒ耐性+10%",
        "soul": {
          "text": "敵単体に会心率12%の地属性物理小～中ダメージを与える"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +5 & SPD +5",
          "trait": "会心率+5% & マヒ耐性+10%",
          "accessorySkillName": "茄子落とし",
          "accessorySkillEffect": "敵単体に会心率12%の地属性物理小～中ダメージを与える",
          "mobPieceSkills": {
            "1": {
              "name": "0 茄子落とし",
              "effect": "正面の敵のHPを15%ダウンさせる"
            },
            "5": {
              "name": "茄子落とし",
              "effect": "正面の敵のHPを12%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "110",
        "111",
        "121",
        "128",
        "129",
        "202",
        "159",
        "165",
        "173",
        "176",
        "180",
        "203",
        "205",
        "211",
        "212",
        "215",
        "219",
        "mq:eventfig/03",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "48",
      "uid": "MSB-048",
      "name": "MOB SHOT SOUL モブガーディアン",
      "image": "fig/48.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 140,
      "def": 150,
      "tags": [
        "09",
        "25",
        "39",
        "43",
        "60",
        "73",
        "77"
      ],
      "soulSkill": {
        "name": "ガードウォール",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "program": 22,
        "sourceText": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "DEF +5 & MND +1",
        "traitText": "ダメージ軽減+2%",
        "soul": {
          "text": "味方全体のDEFを2ターンの間50％アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +5 & MND +1",
          "trait": "ダメージ軽減+2%",
          "accessorySkillName": "ガードウォール",
          "accessorySkillEffect": "味方全体のDEFを2ターンの間50％アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ガードウォール",
              "effect": "味方全体のDEFを20%アップする"
            },
            "5": {
              "name": "ガードウォール",
              "effect": "味方全体のDEFを15%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 2662,
            "ATK": 126,
            "MAG": 113,
            "DEF": 85,
            "MND": 85,
            "SPD": 119,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "boss/05.png",
            "条件・補足": null,
            "技一覧": [
              "ガーディアンシールド / 攻撃区分:精神 / 対象:個別処理",
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "95",
        "110",
        "111",
        "120",
        "135",
        "139",
        "147",
        "163",
        "171",
        "173",
        "204",
        "mq:eventfig/20",
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "49",
      "uid": "MSB-049",
      "name": "MOB SHOT SOUL ミラモブ",
      "image": "fig/49.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 130,
      "def": 160,
      "tags": [
        "05",
        "09",
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
        "effect": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 23,
        "sourceText": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "DEF+3 & MP +15 & MND +2",
        "traitText": "闇属性耐性+10 & 回避率+3%",
        "soul": {
          "text": "敵単体に闇魔法大ダメージを与え、30%で毒にする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF+3 & MP +15 & MND +2",
          "trait": "闇属性耐性+10 & 回避率+3%",
          "accessorySkillName": "ミラポイズン",
          "accessorySkillEffect": "敵単体に闇魔法大ダメージを与え、30%で毒にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミラポイズン",
              "effect": "センターの敵のHPを15%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "ミラポイズン",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 2130,
            "ATK": 94,
            "MAG": 94,
            "DEF": 71,
            "MND": 71,
            "SPD": 96,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "boss/03.png",
            "条件・補足": null,
            "技一覧": [
              "ミラモブポイズン / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒",
              "ミラソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "103",
        "104",
        "109",
        "110",
        "111",
        "112",
        "113",
        "114",
        "115",
        "120",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "166",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/45",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "50",
      "uid": "MSB-050",
      "name": "MOB SHOT SOUL モブホーク",
      "image": "fig/50.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "風",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 140,
      "def": 140,
      "tags": [
        "04",
        "09",
        "23",
        "25",
        "41",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "ホークショット",
        "timing": "own-main",
        "effect": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "timingLabel": "自分メイン",
        "description": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "program": 9,
        "sourceText": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "ATK +2 & SPD +2 & MND +2",
        "traitText": "風属性耐性+10%",
        "soul": {
          "text": "敵全体に風属性の物理中ダメージを与え、2ターンの間SPDを15%ダウンさせる。さらに自分の回避率を10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +2 & SPD +2 & MND +2",
          "trait": "風属性耐性+10%",
          "accessorySkillName": "ホークショット",
          "accessorySkillEffect": "敵全体に風属性の物理中ダメージを与え、2ターンの間SPDを15%ダウンさせる。さらに自分の回避率を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ホークショット",
              "effect": "センターフィギュアのSPDを30%アップし、ATKを10%アップする"
            },
            "5": {
              "name": "ホークショット",
              "effect": "センターフィギュアのSPDを20%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 1482,
            "ATK": 68,
            "MAG": 68,
            "DEF": 51,
            "MND": 51,
            "SPD": 65,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": "物理",
            "画像": "boss/01.png",
            "条件・補足": null,
            "技一覧": [
              "ホークダイブ / 属性:風 / 攻撃区分:物理 / 対象:敵全体",
              "疾風斬り / 属性:風 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "96",
        "110",
        "111",
        "134",
        "159",
        "mq:eventfig/20",
        "mq:eventfig/44",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "51",
      "uid": "MSB-051",
      "name": "MOB SHOT SOUL モブドラゴン",
      "image": "fig/51.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "妨害",
      "atk": 150,
      "def": 140,
      "tags": [
        "03",
        "09",
        "23",
        "25",
        "38",
        "47",
        "50",
        "60",
        "68"
      ],
      "soulSkill": {
        "name": "ドラゴンバースト",
        "timing": "own-main",
        "effect": "このターン相手フィールド全員へ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "timingLabel": "自分メイン",
        "description": "このターン相手フィールド全員へ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "program": 24,
        "sourceText": "このターン相手フィールド全員へ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "ATK +3 & DEF +3 & MND +2",
        "traitText": "火属性耐性+10% & 会心率+3%",
        "soul": {
          "text": "敵全体に火属性の物理中～大ダメージを与え、40%でやけどにする。自分の会心率を2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +3 & DEF +3 & MND +2",
          "trait": "火属性耐性+10% & 会心率+3%",
          "accessorySkillName": "ドラゴンバースト",
          "accessorySkillEffect": "敵全体に火属性の物理中～大ダメージを与え、40%でやけどにする。自分の会心率を2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ドラゴンバースト",
              "effect": "正面の敵のATKを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "ドラゴンバースト",
              "effect": "正面の敵のATKを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 5368,
            "ATK": 187,
            "MAG": 187,
            "DEF": 144,
            "MND": 144,
            "SPD": 208,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "boss/09.png",
            "条件・補足": null,
            "技一覧": [
              "ドラゴンフレイム / 攻撃区分:魔法 / 対象:敵全体",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "110",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "52",
      "uid": "MSB-052",
      "name": "スケボーネコクー",
      "image": "fig/52.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 140,
      "tags": [
        "27",
        "31",
        "33",
        "67",
        "68",
        "72",
        "80"
      ],
      "soulSkill": {
        "name": "ネコスケート",
        "timing": "own-main",
        "effect": "このターンATK+30。撃破した場合、別の相手1体へ追加攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+30。撃破した場合、別の相手1体へ追加攻撃できる。",
        "program": 25,
        "sourceText": "このターンATK+30。撃破した場合、別の相手1体へ追加攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "ATK +2 & SPD +3",
        "traitText": "通常攻撃の与ダメージ+5%",
        "soul": {
          "text": "敵単体に物理中ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +2 & SPD +3",
          "trait": "通常攻撃の与ダメージ+5%",
          "accessorySkillName": "ネコスケート",
          "accessorySkillEffect": "敵単体に物理中ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ネコスケート",
              "effect": "味方全体のSPDを15%・ATKを6%アップする"
            },
            "5": {
              "name": "ネコスケート",
              "effect": "味方全体のSPDを10%・ATKを3%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "53",
      "uid": "MSB-053",
      "name": "レコードネコクー",
      "image": "fig/53.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "魔法",
      "role": "全体攻撃",
      "atk": 150,
      "def": 130,
      "tags": [
        "27",
        "31",
        "33",
        "67",
        "68",
        "72",
        "80"
      ],
      "soulSkill": {
        "name": "ネコスクラッチ",
        "timing": "own-main",
        "effect": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "timingLabel": "自分メイン",
        "description": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "program": 9,
        "sourceText": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "MAG +3 & MND +2",
        "traitText": "魔法攻撃の与ダメージ+5%",
        "soul": {
          "text": "敵全体に無属性の魔法小～中ダメージを与え、味方全体のMAGとMNDを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MAG +3 & MND +2",
          "trait": "魔法攻撃の与ダメージ+5%",
          "accessorySkillName": "ネコスクラッチ",
          "accessorySkillEffect": "敵全体に無属性の魔法小～中ダメージを与え、味方全体のMAGとMNDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ネコスクラッチ",
              "effect": "センターフィギュアの全ステータスを15%アップする"
            },
            "5": {
              "name": "ネコスクラッチ",
              "effect": "センターフィギュアの全ステータスを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "54",
      "uid": "MSB-054",
      "name": "おやすみネコクー",
      "image": "fig/54.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 130,
      "def": 150,
      "tags": [
        "27",
        "31",
        "33",
        "67",
        "68",
        "72",
        "80"
      ],
      "soulSkill": {
        "name": "ネコスリープ",
        "timing": "own-main",
        "effect": "自分ライフを20回復し、味方全体のDEF+20。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復し、味方全体のDEF+20。",
        "program": 26,
        "sourceText": "自分ライフを20回復し、味方全体のDEF+20。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "HP+15",
        "traitText": "回復量+10%",
        "soul": {
          "text": "味方全体のHPを20%回復し、眠りを解除する。さらに2ターンの間ダメージ軽減を5%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP+15",
          "trait": "回復量+10%",
          "accessorySkillName": "ネコスリープ",
          "accessorySkillEffect": "味方全体のHPを20%回復し、眠りを解除する。さらに2ターンの間ダメージ軽減を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ネコスリープ",
              "effect": "味方全体のDEFを15%アップし、HPを10%アップする"
            },
            "5": {
              "name": "ネコスリープ",
              "effect": "味方全体のDEFを10%アップし、HPを5%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "55",
      "uid": "MSB-055",
      "name": "どら焼きネコクー",
      "image": "fig/55.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 130,
      "def": 160,
      "tags": [
        "10",
        "27",
        "31",
        "33",
        "65",
        "67",
        "68",
        "72",
        "80"
      ],
      "soulSkill": {
        "name": "どらネコタイム",
        "timing": "own-main",
        "effect": "自分ライフを20回復し、味方全体のDEF+20。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復し、味方全体のDEF+20。",
        "program": 26,
        "sourceText": "自分ライフを20回復し、味方全体のDEF+20。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "DEF +5 & MND +5",
        "traitText": "回復量+10% & 水属性耐性+10%",
        "soul": {
          "text": "味方全体のHPを30%回復し、MNDを2ターンの間20%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +5 & MND +5",
          "trait": "回復量+10% & 水属性耐性+10%",
          "accessorySkillName": "どらネコタイム",
          "accessorySkillEffect": "味方全体のHPを30%回復し、MNDを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 どらネコタイム",
              "effect": "センターフィギュアのHPを30%アップし、DEFを10%アップする"
            },
            "5": {
              "name": "どらネコタイム",
              "effect": "センターフィギュアのHPを20%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "56",
      "uid": "MSB-056",
      "name": "モブKART 実況モブ",
      "image": "fig/56.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 140,
      "def": 140,
      "tags": [
        "34",
        "40",
        "59",
        "66",
        "74",
        "79",
        "81"
      ],
      "soulSkill": {
        "name": "ラストラップ",
        "timing": "own-main",
        "effect": "味方1体を選ぶ。その味方がこのターン撃破した場合、1体ドローする。",
        "timingLabel": "自分メイン",
        "description": "味方1体を選ぶ。その味方がこのターン撃破した場合、1体ドローする。",
        "program": 27,
        "sourceText": "味方1体を選ぶ。その味方がこのターン撃破した場合、1体ドローする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "SPD +4 & MND +1",
        "traitText": "雷属性耐性 +4%",
        "soul": {
          "text": "味方全体のSPDを2ターンの間25%アップし、会心率を5%アップする。HP30%以下の味方にはSPD上昇量が35%になる"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +4 & MND +1",
          "trait": "雷属性耐性 +4%",
          "accessorySkillName": "ラストラップ",
          "accessorySkillEffect": "味方全体のSPDを2ターンの間25%アップし、会心率を5%アップする。HP30%以下の味方にはSPD上昇量が35%になる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ラストラップ",
              "effect": "敵全体のATKとDEFを9%ダウンさせる"
            },
            "5": {
              "name": "ラストラップ",
              "effect": "敵全体のATKとDEFを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "96",
        "103",
        "175",
        "178",
        "mq:eventfig/29",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "57",
      "uid": "MSB-057",
      "name": "モブソフトクリーム",
      "image": "fig/57.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 140,
      "def": 150,
      "tags": [
        "18",
        "27",
        "28",
        "33",
        "65",
        "66"
      ],
      "soulSkill": {
        "name": "ひんやりソフト",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "program": 11,
        "sourceText": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "MP +20",
        "traitText": "全属性耐性 +2%",
        "soul": {
          "text": "味方全体のMPを20回復し、全属性耐性を2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MP +20",
          "trait": "全属性耐性 +2%",
          "accessorySkillName": "ひんやりソフト",
          "accessorySkillEffect": "味方全体のMPを20回復し、全属性耐性を2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ひんやりソフト",
              "effect": "味方全体のHPを15%・DEFを6%アップする"
            },
            "5": {
              "name": "ひんやりソフト",
              "effect": "味方全体のHPを10%・DEFを3%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "121",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "58",
      "uid": "MSB-058",
      "name": "CBロゴ",
      "image": "fig/58.png",
      "rarity": "MOB",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 200,
      "def": 200,
      "tags": [
        "10",
        "11",
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
      "soulSkill": {
        "name": "メモリアルビート",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "program": 11,
        "sourceText": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "MOB",
        "statsText": "SPD +5 & MND +5",
        "traitText": "全属性耐性 +3% & 会心率 +3%",
        "soul": {
          "text": "味方全体のATK・DEF・MAG・MND・SPDを2ターンの間12%アップし、HPとMPを10%回復する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +5 & MND +5",
          "trait": "全属性耐性 +3% & 会心率 +3%",
          "accessorySkillName": "メモリアルビート",
          "accessorySkillEffect": "味方全体のATK・DEF・MAG・MND・SPDを2ターンの間12%アップし、HPとMPを10%回復する",
          "mobPieceSkills": {
            "1": {
              "name": "0 メモリアルビート",
              "effect": "味方全体のSPDとDEFを9%アップする"
            },
            "5": {
              "name": "メモリアルビート",
              "effect": "味方全体のSPDとDEFを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "104",
        "165",
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "59",
      "uid": "MSB-059",
      "name": "モブDJ 選曲",
      "image": "fig/59.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 140,
      "def": 140,
      "tags": [
        "05",
        "27",
        "64",
        "67",
        "70",
        "72",
        "82"
      ],
      "soulSkill": {
        "name": "セレクトビート",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "program": 12,
        "sourceText": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "ATK.DEF.SPD +2",
        "traitText": "MP消費 -2%",
        "soul": {
          "text": "味方全体のSPDとMAGを2ターンの間15%アップし、MP消費を2ターンの間10%軽減する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK.DEF.SPD +2",
          "trait": "MP消費 -2%",
          "accessorySkillName": "セレクトビート",
          "accessorySkillEffect": "味方全体のSPDとMAGを2ターンの間15%アップし、MP消費を2ターンの間10%軽減する",
          "mobPieceSkills": {
            "1": {
              "name": "0 セレクトビート",
              "effect": "味方全体のATKとSPDを9%アップする"
            },
            "5": {
              "name": "セレクトビート",
              "effect": "味方全体のATKとSPDを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "136",
        "157",
        "161",
        "166",
        "207",
        "mq:eventfig/45",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "60",
      "uid": "MSB-060",
      "name": "モブDJ ハンズアップ",
      "image": "fig/60.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "攻撃",
      "atk": 140,
      "def": 130,
      "tags": [
        "05",
        "27",
        "64",
        "67",
        "70",
        "72",
        "82"
      ],
      "soulSkill": {
        "name": "ハンズアップ",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "program": 12,
        "sourceText": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "MND.MAG +2",
        "traitText": "魔法与ダメージ+3%",
        "soul": {
          "text": "味方全体のMAGとMNDを2ターンの間20%アップし、次の魔法攻撃の与ダメージを10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MND.MAG +2",
          "trait": "魔法与ダメージ+3%",
          "accessorySkillName": "ハンズアップ",
          "accessorySkillEffect": "味方全体のMAGとMNDを2ターンの間20%アップし、次の魔法攻撃の与ダメージを10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ハンズアップ",
              "effect": "敵全体のATKとDEFを9%ダウンさせる"
            },
            "5": {
              "name": "ハンズアップ",
              "effect": "敵全体のATKとDEFを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "136",
        "157",
        "161",
        "166",
        "207",
        "mq:eventfig/45",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "61",
      "uid": "MSB-061",
      "name": "MOB BR プレイヤー",
      "image": "fig/61.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 140,
      "tags": [
        "05",
        "10",
        "36",
        "55",
        "66",
        "70",
        "72"
      ],
      "soulSkill": {
        "name": "サバイバルステップ",
        "timing": "own-main",
        "effect": "相手1体を選ぶ。そのフィギュアは次のバトルフェイズで最後にしか攻撃できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体を選ぶ。そのフィギュアは次のバトルフェイズで最後にしか攻撃できない。",
        "program": 28,
        "sourceText": "相手1体を選ぶ。そのフィギュアは次のバトルフェイズで最後にしか攻撃できない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "SPD.MND +2 & HP +10",
        "traitText": "命中率+3%",
        "soul": {
          "text": "自分のSPDと命中率を2ターンの間25%アップし、回避率を10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD.MND +2 & HP +10",
          "trait": "命中率+3%",
          "accessorySkillName": "サバイバルステップ",
          "accessorySkillEffect": "自分のSPDと命中率を2ターンの間25%アップし、回避率を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 サバイバルステップ",
              "effect": "センターフィギュアのSPDを30%アップし、ATKを10%アップする"
            },
            "5": {
              "name": "サバイバルステップ",
              "effect": "センターフィギュアのSPDを20%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "99",
        "100",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "136",
        "157",
        "202",
        "159",
        "161",
        "166",
        "207",
        "219",
        "mq:eventfig/45",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "62",
      "uid": "MSB-062",
      "name": "モブゴースト",
      "image": "fig/62.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 120,
      "def": 100,
      "tags": [
        "09",
        "28",
        "37",
        "54",
        "57"
      ],
      "soulSkill": {
        "name": "ゴーストスルー",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 29,
        "sourceText": "相手1体のDEF-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "SPD.MND +2",
        "traitText": "命中率+3%",
        "soul": {
          "text": "自分の回避率を2ターンの間25%アップし、敵単体の命中率を15%ダウンさせる"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD.MND +2",
          "trait": "命中率+3%",
          "accessorySkillName": "ゴーストスルー",
          "accessorySkillEffect": "自分の回避率を2ターンの間25%アップし、敵単体の命中率を15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ゴーストスルー",
              "effect": "味方全体のSPDを15%アップし、ATKを5%アップする"
            },
            "5": {
              "name": "ゴーストスルー",
              "effect": "味方全体のSPDを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "103",
        "107",
        "109",
        "112",
        "113",
        "114",
        "115",
        "121",
        "130",
        "134",
        "136",
        "142",
        "143",
        "144",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "204",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "63",
      "uid": "MSB-063",
      "name": "メニュー 冒険日記",
      "image": "fig/63.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 60,
      "def": 75,
      "tags": [
        "05",
        "66",
        "72"
      ],
      "soulSkill": {
        "name": "アドベンノート",
        "timing": "own-main",
        "effect": "このターンATK+20。攻撃後、自分フィールド内の位置を自由に変更できる。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。攻撃後、自分フィールド内の位置を自由に変更できる。",
        "program": 30,
        "sourceText": "このターンATK+20。攻撃後、自分フィールド内の位置を自由に変更できる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "SPD.MND +2",
        "traitText": "探索レアアイテム率 +0.5%",
        "soul": {
          "text": "味方全体のSPDとMNDを2ターンの間10%アップし、この戦闘中の探索レアアイテム率を2%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD.MND +2",
          "trait": "探索レアアイテム率 +0.5%",
          "accessorySkillName": "アドベンノート",
          "accessorySkillEffect": "味方全体のSPDとMNDを2ターンの間10%アップし、この戦闘中の探索レアアイテム率を2%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 アドベンノート",
              "effect": "味方全体のATKとSPDを9%アップする"
            },
            "5": {
              "name": "アドベンノート",
              "effect": "味方全体のATKとSPDを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "136",
        "157",
        "161",
        "166",
        "207",
        "mq:eventfig/45"
      ]
    },
    {
      "id": "64",
      "uid": "MSB-064",
      "name": "メニュー バトルプログラム",
      "image": "fig/64.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 60,
      "def": 70,
      "tags": [
        "06",
        "36",
        "66"
      ],
      "soulSkill": {
        "name": "バトルセット",
        "timing": "attack-response",
        "effect": "このフィギュアが攻撃対象になった時、その攻撃による撃破を1回だけ無効にする。",
        "timingLabel": "相手攻撃宣言時",
        "description": "このフィギュアが攻撃対象になった時、その攻撃による撃破を1回だけ無効にする。",
        "program": 31,
        "sourceText": "このフィギュアが攻撃対象になった時、その攻撃による撃破を1回だけ無効にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "ATK.DEF +2",
        "traitText": "回避率+0.5%",
        "soul": {
          "text": "味方全体のATKとDEFを2ターンの間15%アップし、敵全体のSPDを10%ダウンさせる"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK.DEF +2",
          "trait": "回避率+0.5%",
          "accessorySkillName": "バトルセット",
          "accessorySkillEffect": "味方全体のATKとDEFを2ターンの間15%アップし、敵全体のSPDを10%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 バトルセット",
              "effect": "センターフィギュアの全ステータスを15%アップする"
            },
            "5": {
              "name": "バトルセット",
              "effect": "センターフィギュアの全ステータスを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "65",
      "uid": "MSB-065",
      "name": "メニュー ゴールドレコード",
      "image": "fig/65.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 60,
      "def": 75,
      "tags": [
        "06",
        "66",
        "72"
      ],
      "soulSkill": {
        "name": "ゴールドプレイ",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体は次に撃破される時、1度だけ撃破されず場に残る。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体は次に撃破される時、1度だけ撃破されず場に残る。",
        "program": 4,
        "sourceText": "自分ライフを20回復する。味方1体は次に撃破される時、1度だけ撃破されず場に残る。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "HP +10",
        "traitText": "コイン獲得量 +0.5%",
        "soul": {
          "text": "味方全体のHPを15%回復し、この戦闘での獲得コインを10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +10",
          "trait": "コイン獲得量 +0.5%",
          "accessorySkillName": "ゴールドプレイ",
          "accessorySkillEffect": "味方全体のHPを15%回復し、この戦闘での獲得コインを10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ゴールドプレイ",
              "effect": "敵全体のATKとDEFを9%ダウンさせる"
            },
            "5": {
              "name": "ゴールドプレイ",
              "effect": "敵全体のATKとDEFを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "121",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "66",
      "uid": "MSB-066",
      "name": "メニュー 経験値レコード",
      "image": "fig/66.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 60,
      "def": 80,
      "tags": [
        "06",
        "36",
        "66"
      ],
      "soulSkill": {
        "name": "レベルプレイ",
        "timing": "own-main",
        "effect": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 5,
        "sourceText": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "MP +10",
        "traitText": "経験値獲得量 +0.5%",
        "soul": {
          "text": "味方全体のMPを15回復し、この戦闘での獲得経験値を10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MP +10",
          "trait": "経験値獲得量 +0.5%",
          "accessorySkillName": "レベルプレイ",
          "accessorySkillEffect": "味方全体のMPを15回復し、この戦闘での獲得経験値を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 レベルプレイ",
              "effect": "味方全体のATKとDEFを9%アップする"
            },
            "5": {
              "name": "レベルプレイ",
              "effect": "味方全体のATKとDEFを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "67",
      "uid": "MSB-067",
      "name": "メニュー ボスレコード",
      "image": "fig/67.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "魔法",
      "role": "防御・守護",
      "atk": 60,
      "def": 80,
      "tags": [
        "06",
        "25",
        "66"
      ],
      "soulSkill": {
        "name": "ボスリプレイ",
        "timing": "attack-response",
        "effect": "この攻撃中DEF+30。このフィギュアが撃破されても、その戦闘の差分ライフダメージを0にする。",
        "timingLabel": "相手攻撃宣言時",
        "description": "この攻撃中DEF+30。このフィギュアが撃破されても、その戦闘の差分ライフダメージを0にする。",
        "program": 8,
        "sourceText": "この攻撃中DEF+30。このフィギュアが撃破されても、その戦闘の差分ライフダメージを0にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "MAG.MND +2",
        "traitText": "状態異常全耐性 +0.3%",
        "soul": {
          "text": "敵単体のDEFとMNDを2ターンの間15%ダウンさせ、味方全体のボスへの与ダメージを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MAG.MND +2",
          "trait": "状態異常全耐性 +0.3%",
          "accessorySkillName": "ボスリプレイ",
          "accessorySkillEffect": "敵単体のDEFとMNDを2ターンの間15%ダウンさせ、味方全体のボスへの与ダメージを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ボスリプレイ",
              "effect": "敵全体のATKとDEFを9%ダウンさせる"
            },
            "5": {
              "name": "ボスリプレイ",
              "effect": "敵全体のATKとDEFを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "68",
      "uid": "MSB-068",
      "name": "メニュー ドリンクセット",
      "image": "fig/68.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 60,
      "def": 70,
      "tags": [
        "06",
        "66",
        "72"
      ],
      "soulSkill": {
        "name": "ドリンクタイム",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。手札が4体以下ならシードデッキから1体ドローする。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。手札が4体以下ならシードデッキから1体ドローする。",
        "program": 32,
        "sourceText": "自分ライフを20回復する。手札が4体以下ならシードデッキから1体ドローする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "HP +10",
        "traitText": "回復量 +0.5%",
        "soul": {
          "text": "味方全体のHPを20%回復し、状態異常を1つ解除する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +10",
          "trait": "回復量 +0.5%",
          "accessorySkillName": "ドリンクタイム",
          "accessorySkillEffect": "味方全体のHPを20%回復し、状態異常を1つ解除する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ドリンクタイム",
              "effect": "敵全体のATKを9%ダウンさせ、味方全体のHPを10%アップする"
            },
            "5": {
              "name": "ドリンクタイム",
              "effect": "敵全体のATKを6%ダウンさせ、味方全体のHPを5%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "69",
      "uid": "MSB-069",
      "name": "メニュー 椅子で休む",
      "image": "fig/69.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 60,
      "def": 80,
      "tags": [
        "06",
        "66",
        "72"
      ],
      "soulSkill": {
        "name": "チェアタイム",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。手札が4体以下ならシードデッキから1体ドローする。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。手札が4体以下ならシードデッキから1体ドローする。",
        "program": 32,
        "sourceText": "自分ライフを20回復する。手札が4体以下ならシードデッキから1体ドローする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "MP +10",
        "traitText": "回復量 +0.5%",
        "soul": {
          "text": "味方全体のMPを20回復し、2ターンの間MNDを15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MP +10",
          "trait": "回復量 +0.5%",
          "accessorySkillName": "チェアタイム",
          "accessorySkillEffect": "味方全体のMPを20回復し、2ターンの間MNDを15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 チェアタイム",
              "effect": "敵全体のATKを9%ダウンさせ、味方全体のHPを10%アップする"
            },
            "5": {
              "name": "チェアタイム",
              "effect": "敵全体のATKを6%ダウンさせ、味方全体のHPを5%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "70",
      "uid": "MSB-070",
      "name": "酒場の看板娘 モブイルカエル",
      "image": "fig/70.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 135,
      "def": 160,
      "tags": [
        "06",
        "13",
        "27",
        "33",
        "40",
        "60",
        "67",
        "72",
        "80"
      ],
      "soulSkill": {
        "name": "アクアカンパイ",
        "timing": "own-main",
        "effect": "自分ライフを20回復し、味方全体のDEF+20。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復し、味方全体のDEF+20。",
        "program": 26,
        "sourceText": "自分ライフを20回復し、味方全体のDEF+20。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "SPD +3 & DEF +3 & MND +2",
        "traitText": "水属性耐性+10% & 会心率+2%",
        "soul": {
          "text": "味方全体のHPを20%回復し、水属性耐性とSPDを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD +3 & DEF +3 & MND +2",
          "trait": "水属性耐性+10% & 会心率+2%",
          "accessorySkillName": "アクアカンパイ",
          "accessorySkillEffect": "味方全体のHPを20%回復し、水属性耐性とSPDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 アクアカンパイ",
              "effect": "センターフィギュアのHPを30%アップし、DEFを10%アップする"
            },
            "5": {
              "name": "アクアカンパイ",
              "effect": "センターフィギュアのHPを20%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "111",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "71",
      "uid": "MSB-071",
      "name": "鍛冶屋の職人 モブゴンゾー",
      "image": "fig/71.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 150,
      "def": 145,
      "tags": [
        "03",
        "13",
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
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "ATK +5 & DEF +3",
        "traitText": "地属性耐性+10% & 会心率+2%",
        "soul": {
          "text": "味方全体のATKとDEFを2ターンの間20%アップし、会心率を5%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +5 & DEF +3",
          "trait": "地属性耐性+10% & 会心率+2%",
          "accessorySkillName": "ハンマーヒット",
          "accessorySkillEffect": "味方全体のATKとDEFを2ターンの間20%アップし、会心率を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ハンマーヒット",
              "effect": "味方全体のHPを15%アップし、DEFを10%アップする"
            },
            "5": {
              "name": "ハンマーヒット",
              "effect": "味方全体のHPを10%アップし、DEFを5%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "135",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "163",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/20",
        "mq:eventfig/23",
        "mq:eventfig/47",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "72",
      "uid": "MSB-072",
      "name": "優しき熱血コーチ モブコーチ",
      "image": "fig/72.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 130,
      "def": 160,
      "tags": [
        "08",
        "13",
        "28",
        "29",
        "31",
        "40",
        "57",
        "66",
        "74"
      ],
      "soulSkill": {
        "name": "もう一本",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "program": 11,
        "sourceText": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "HP +20 & DEF +3 & MND +2",
        "traitText": "雷属性耐性+10% & 会心率+2%",
        "soul": {
          "text": "HPが最も低い味方を30%回復し、味方全体のDEFとSPDを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +20 & DEF +3 & MND +2",
          "trait": "雷属性耐性+10% & 会心率+2%",
          "accessorySkillName": "もう一本",
          "accessorySkillEffect": "HPが最も低い味方を30%回復し、味方全体のDEFとSPDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 もう一本",
              "effect": "敵全体のATKとDEFを9%ダウンさせる"
            },
            "5": {
              "name": "もう一本",
              "effect": "敵全体のATKとDEFを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "100",
        "107",
        "113",
        "114",
        "115",
        "121",
        "134",
        "144",
        "165",
        "176",
        "180",
        "204",
        "205",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "73",
      "uid": "MSB-073",
      "name": "宿舎の癒し モブミータ",
      "image": "fig/73.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 140,
      "def": 160,
      "tags": [
        "08",
        "13",
        "27",
        "29",
        "40",
        "58",
        "59",
        "67",
        "72"
      ],
      "soulSkill": {
        "name": "おやすみベル",
        "timing": "own-main",
        "effect": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 5,
        "sourceText": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "MP +20 & DEF +3 & MND +2",
        "traitText": "無属性耐性+10% & 会心率+2%",
        "soul": {
          "text": "味方全体のHPを25%・MPを15回復し、状態異常を1つ解除する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MP +20 & DEF +3 & MND +2",
          "trait": "無属性耐性+10% & 会心率+2%",
          "accessorySkillName": "おやすみベル",
          "accessorySkillEffect": "味方全体のHPを25%・MPを15回復し、状態異常を1つ解除する",
          "mobPieceSkills": {
            "1": {
              "name": "0 おやすみベル",
              "effect": "味方全体のDEFを15%アップし、HPを10%アップする"
            },
            "5": {
              "name": "おやすみベル",
              "effect": "味方全体のDEFを10%アップし、HPを5%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "104",
        "121",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "74",
      "uid": "MSB-074",
      "name": "頼りになる店主 モブマテリア",
      "image": "fig/74.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "回復・支援",
      "atk": 140,
      "def": 150,
      "tags": [
        "05",
        "13",
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
        "effect": "自分ライフを20回復し、味方全体のDEF+20。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復し、味方全体のDEF+20。",
        "program": 26,
        "sourceText": "自分ライフを20回復し、味方全体のDEF+20。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "MAG +3 & DEF +3 & SPD +2",
        "traitText": "光.闇属性耐性+8% & 会心率+2%",
        "soul": {
          "text": "味方全体のATK・DEF・MAG・MND・SPDを2ターンの間10%アップし、HPを10%回復する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MAG +3 & DEF +3 & SPD +2",
          "trait": "光.闇属性耐性+8% & 会心率+2%",
          "accessorySkillName": "おたすけストック",
          "accessorySkillEffect": "味方全体のATK・DEF・MAG・MND・SPDを2ターンの間10%アップし、HPを10%回復する",
          "mobPieceSkills": {
            "1": {
              "name": "0 おたすけストック",
              "effect": "味方全体のSPDとDEFを9%アップする"
            },
            "5": {
              "name": "おたすけストック",
              "effect": "味方全体のSPDとDEFを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "96",
        "99",
        "100",
        "103",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "166",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "75",
      "uid": "MSB-075",
      "name": "メニュー 王の間",
      "image": "fig/75.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 60,
      "def": 75,
      "tags": [
        "02",
        "09",
        "78"
      ],
      "soulSkill": {
        "name": "キングオーダー",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン終了まで、相手のDEF低下系ソウルスキルを1回無効にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン終了まで、相手のDEF低下系ソウルスキルを1回無効にする。",
        "program": 33,
        "sourceText": "味方全体のDEF+20。次の相手ターン終了まで、相手のDEF低下系ソウルスキルを1回無効にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "DEF.MND +2",
        "traitText": "状態異常全耐性 +0.3%",
        "soul": {
          "text": "味方全体のDEFとMNDを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF.MND +2",
          "trait": "状態異常全耐性 +0.3%",
          "accessorySkillName": "キングオーダー",
          "accessorySkillEffect": "味方全体のDEFとMNDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 キングオーダー",
              "effect": "センターフィギュアの全ステータスを15%アップする"
            },
            "5": {
              "name": "キングオーダー",
              "effect": "センターフィギュアの全ステータスを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "76",
      "uid": "MSB-076",
      "name": "メニュー MOB SHOP",
      "image": "fig/76.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "魔法",
      "role": "防御・守護",
      "atk": 60,
      "def": 80,
      "tags": [
        "02",
        "09",
        "78"
      ],
      "soulSkill": {
        "name": "ショップチャンス",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "program": 6,
        "sourceText": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "MAG.MND +2",
        "traitText": "マヒ耐性 +5%",
        "soul": {
          "text": "味方全体のMAGとMNDを2ターンの間10%アップし、状態異常耐性を10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MAG.MND +2",
          "trait": "マヒ耐性 +5%",
          "accessorySkillName": "ショップチャンス",
          "accessorySkillEffect": "味方全体のMAGとMNDを2ターンの間10%アップし、状態異常耐性を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ショップチャンス",
              "effect": "味方全体のATKとDEFを9%アップする"
            },
            "5": {
              "name": "ショップチャンス",
              "effect": "味方全体のATKとDEFを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "77",
      "uid": "MSB-077",
      "name": "メニュー 宿舎",
      "image": "fig/77.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 60,
      "def": 70,
      "tags": [
        "02",
        "09",
        "78"
      ],
      "soulSkill": {
        "name": "グッドナイト",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "program": 0,
        "sourceText": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "HP+10.MND +2",
        "traitText": "眠り耐性 +5%",
        "soul": {
          "text": "味方全体のHPを15%回復し、眠り・混乱を解除する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP+10.MND +2",
          "trait": "眠り耐性 +5%",
          "accessorySkillName": "グッドナイト",
          "accessorySkillEffect": "味方全体のHPを15%回復し、眠り・混乱を解除する",
          "mobPieceSkills": {
            "1": {
              "name": "0 グッドナイト",
              "effect": "味方全体のATKとDEFを9%アップする"
            },
            "5": {
              "name": "グッドナイト",
              "effect": "味方全体のATKとDEFを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "78",
      "uid": "MSB-078",
      "name": "メニュー レコードの間",
      "image": "fig/78.png",
      "rarity": "R",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 60,
      "def": 75,
      "tags": [
        "02",
        "09",
        "78"
      ],
      "soulSkill": {
        "name": "レコードプレイ",
        "timing": "own-main",
        "effect": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 5,
        "sourceText": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+10（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "R",
        "statsText": "MP+10.MND +2",
        "traitText": "回避率 +0.1%",
        "soul": {
          "text": "味方全体のMPを15回復し、SPDを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MP+10.MND +2",
          "trait": "回避率 +0.1%",
          "accessorySkillName": "レコードプレイ",
          "accessorySkillEffect": "味方全体のMPを15回復し、SPDを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 レコードプレイ",
              "effect": "味方全体のATKとDEFを9%アップする"
            },
            "5": {
              "name": "レコードプレイ",
              "effect": "味方全体のATKとDEFを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "79",
      "uid": "MSB-079",
      "name": "モブキングダムの王様 モブスライムキング",
      "image": "fig/79.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 140,
      "def": 140,
      "tags": [
        "02",
        "09",
        "17",
        "30",
        "40",
        "58",
        "74"
      ],
      "soulSkill": {
        "name": "キングプレス",
        "timing": "own-main",
        "effect": "相手1体の通常タグ1つをターン終了まで無効化する。",
        "timingLabel": "自分メイン",
        "description": "相手1体の通常タグ1つをターン終了まで無効化する。",
        "program": 34,
        "sourceText": "相手1体の通常タグ1つをターン終了まで無効化する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "DEF +5 & MND +1",
        "traitText": "ダメージ軽減+2%",
        "soul": {
          "text": "味方全体のDEFとMNDを2ターンの間25%アップし、ダメージ軽減を5%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF +5 & MND +1",
          "trait": "ダメージ軽減+2%",
          "accessorySkillName": "キングプレス",
          "accessorySkillEffect": "味方全体のDEFとMNDを2ターンの間25%アップし、ダメージ軽減を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 キングプレス",
              "effect": "味方全体のATKとDEFを9%アップする"
            },
            "5": {
              "name": "キングプレス",
              "effect": "味方全体のATKとDEFを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "104",
        "119",
        "120",
        "135",
        "163",
        "165",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "80",
      "uid": "MSB-080",
      "name": "王様の右腕 モブライトアーム",
      "image": "fig/80.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 150,
      "def": 130,
      "tags": [
        "02",
        "09",
        "17",
        "40",
        "49",
        "59",
        "66"
      ],
      "soulSkill": {
        "name": "ロイヤルブレード",
        "timing": "own-main",
        "effect": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。",
        "program": 35,
        "sourceText": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "ATK +5 & MND +1",
        "traitText": "通常攻撃与ダメージ+4%",
        "soul": {
          "text": "敵単体に光属性の物理中ダメージを与え、味方全体のATKを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +5 & MND +1",
          "trait": "通常攻撃与ダメージ+4%",
          "accessorySkillName": "ロイヤルブレード",
          "accessorySkillEffect": "敵単体に光属性の物理中ダメージを与え、味方全体のATKを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ロイヤルブレード",
              "effect": "味方全体のATKとDEFを9%アップする"
            },
            "5": {
              "name": "ロイヤルブレード",
              "effect": "味方全体のATKとDEFを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "119",
        "120",
        "121",
        "128",
        "129",
        "135",
        "163",
        "171",
        "173",
        "203",
        "204",
        "211",
        "212"
      ]
    },
    {
      "id": "81",
      "uid": "MSB-081",
      "name": "MOB PARTY マスコット",
      "image": "fig/81.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 120,
      "def": 110,
      "tags": [
        "05",
        "10",
        "40",
        "70",
        "81"
      ],
      "soulSkill": {
        "name": "パーティータイム",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "program": 11,
        "sourceText": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "SPD.MND +2 & HP +10",
        "traitText": "命中率+3%",
        "soul": {
          "text": "味方全体のHPを15%回復し、ATK・DEF・SPDを2ターンの間10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD.MND +2 & HP +10",
          "trait": "命中率+3%",
          "accessorySkillName": "パーティータイム",
          "accessorySkillEffect": "味方全体のHPを15%回復し、ATK・DEF・SPDを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 パーティータイム",
              "effect": "敵全体のATKとDEFを9%ダウンさせる"
            },
            "5": {
              "name": "パーティータイム",
              "effect": "敵全体のATKとDEFを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "136",
        "157",
        "161",
        "166",
        "207",
        "mq:eventfig/45"
      ]
    },
    {
      "id": "82",
      "uid": "MSB-082",
      "name": "読みかけの本を読もう",
      "image": "fig/82.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 110,
      "def": 110,
      "tags": [
        "05",
        "33",
        "40",
        "70",
        "81"
      ],
      "soulSkill": {
        "name": "ブックオープン",
        "timing": "own-main",
        "effect": "自分ライフを20回復し、味方全体のDEF+20。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復し、味方全体のDEF+20。",
        "program": 26,
        "sourceText": "自分ライフを20回復し、味方全体のDEF+20。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "SPD.MND +2 & HP +10",
        "traitText": "命中率+3%",
        "soul": {
          "text": "味方全体のHP・MPを15%回復し、必殺技CTを1ターン短縮する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD.MND +2 & HP +10",
          "trait": "命中率+3%",
          "accessorySkillName": "ブックオープン",
          "accessorySkillEffect": "味方全体のHP・MPを15%回復し、必殺技CTを1ターン短縮する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ブックオープン",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "ブックオープン",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "136",
        "157",
        "161",
        "166",
        "207",
        "mq:eventfig/45"
      ]
    },
    {
      "id": "83",
      "uid": "MSB-083",
      "name": "モブ三味線",
      "image": "fig/83.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 120,
      "def": 100,
      "tags": [
        "05",
        "10",
        "40",
        "70",
        "81"
      ],
      "soulSkill": {
        "name": "シャミビート",
        "timing": "own-main",
        "effect": "相手フィールド全体のATKを-10。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のATKを-10。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 36,
        "sourceText": "相手フィールド全体のATKを-10。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SR",
        "statsText": "SPD.MND +2 & HP +10",
        "traitText": "命中率+3%",
        "soul": {
          "text": "敵全体に無属性の魔法小～中ダメージを与え、味方全体のSPDとMNDを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD.MND +2 & HP +10",
          "trait": "命中率+3%",
          "accessorySkillName": "シャミビート",
          "accessorySkillEffect": "敵全体に無属性の魔法小～中ダメージを与え、味方全体のSPDとMNDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 シャミビート",
              "effect": "味方全体のATKとSPDを9%アップする"
            },
            "5": {
              "name": "シャミビート",
              "effect": "味方全体のATKとSPDを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "136",
        "157",
        "161",
        "166",
        "207",
        "mq:eventfig/45"
      ]
    },
    {
      "id": "84",
      "uid": "MSB-084",
      "name": "MOB SHOT リリス四姉妹ソウル 赤",
      "image": "fig/84.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 130,
      "def": 160,
      "tags": [
        "03",
        "09",
        "23",
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
        "effect": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 37,
        "sourceText": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "MAG.MND +5 & MP +10",
        "traitText": "火属性耐性+10% & 魔法ダメージ軽減+2%",
        "soul": {
          "text": "敵全体に火属性の魔法中ダメージを与え、40%でやけどにする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MAG.MND +5 & MP +10",
          "trait": "火属性耐性+10% & 魔法ダメージ軽減+2%",
          "accessorySkillName": "ヘルフレア",
          "accessorySkillEffect": "敵全体に火属性の魔法中ダメージを与え、40%でやけどにする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヘルフレア",
              "effect": "敵全体のHPを6%ダウンさせ、ATKを8%ダウンさせる"
            },
            "5": {
              "name": "ヘルフレア",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "99",
        "100",
        "103",
        "107",
        "109",
        "110",
        "111",
        "112",
        "113",
        "114",
        "115",
        "130",
        "134",
        "136",
        "137",
        "138",
        "139",
        "142",
        "143",
        "144",
        "145",
        "146",
        "147",
        "148",
        "157",
        "158",
        "202",
        "161",
        "167",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "204",
        "205",
        "206",
        "207",
        "208",
        "212",
        "215",
        "mq:eventfig/23",
        "mq:eventfig/45",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "85",
      "uid": "MSB-085",
      "name": "MOB SHOT リリス四姉妹ソウル 黄",
      "image": "fig/85.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 155,
      "def": 140,
      "tags": [
        "04",
        "09",
        "23",
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
        "effect": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 37,
        "sourceText": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "MAG.ATK +5 & MP +10",
        "traitText": "雷属性耐性+10% & 魔法ダメージ軽減+2%",
        "soul": {
          "text": "敵全体に雷属性の魔法中ダメージを与え、40%でマヒにする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MAG.ATK +5 & MP +10",
          "trait": "雷属性耐性+10% & 魔法ダメージ軽減+2%",
          "accessorySkillName": "キリンボルト",
          "accessorySkillEffect": "敵全体に雷属性の魔法中ダメージを与え、40%でマヒにする",
          "mobPieceSkills": {
            "1": {
              "name": "0 キリンボルト",
              "effect": "味方全体のATKを12%アップし、敵全体のHPを5%ダウンさせる"
            },
            "5": {
              "name": "キリンボルト",
              "effect": "味方全体のATKを8%アップし、敵全体のHPを3%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "99",
        "100",
        "103",
        "107",
        "109",
        "110",
        "111",
        "112",
        "113",
        "114",
        "115",
        "130",
        "134",
        "136",
        "142",
        "143",
        "144",
        "157",
        "158",
        "161",
        "166",
        "171",
        "175",
        "176",
        "177",
        "178",
        "179",
        "180",
        "204",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/29",
        "mq:eventfig/45",
        "mq:eventfig/48",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "86",
      "uid": "MSB-086",
      "name": "MOB SHOT リリス四姉妹ソウル 青",
      "image": "fig/86.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 130,
      "def": 160,
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
      "soulSkill": {
        "name": "リヴァウェイブ",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 37,
        "sourceText": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "MAG.DEF +5 & MP +10",
        "traitText": "水属性耐性+10% & 魔法ダメージ軽減+2%",
        "soul": {
          "text": "敵全体に水属性の魔法中ダメージを与え、SPDを2ターンの間15%ダウンさせる"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MAG.DEF +5 & MP +10",
          "trait": "水属性耐性+10% & 魔法ダメージ軽減+2%",
          "accessorySkillName": "リヴァウェイブ",
          "accessorySkillEffect": "敵全体に水属性の魔法中ダメージを与え、SPDを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 リヴァウェイブ",
              "effect": "味方全体のATKを12%アップし、敵全体のHPを5%ダウンさせる"
            },
            "5": {
              "name": "リヴァウェイブ",
              "effect": "味方全体のATKを8%アップし、敵全体のHPを3%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "99",
        "100",
        "103",
        "107",
        "109",
        "110",
        "111",
        "112",
        "113",
        "114",
        "115",
        "119",
        "128",
        "129",
        "130",
        "134",
        "136",
        "142",
        "143",
        "144",
        "146",
        "157",
        "158",
        "161",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "203",
        "204",
        "205",
        "206",
        "207",
        "211",
        "215",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/45",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "87",
      "uid": "MSB-087",
      "name": "MOB SHOT リリス四姉妹ソウル 白",
      "image": "fig/87.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "魔法",
      "role": "防御・守護",
      "atk": 155,
      "def": 130,
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
      "soulSkill": {
        "name": "クフライト",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 37,
        "sourceText": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "MAG +8 & MP +10",
        "traitText": "光属性耐性+10% & 魔法ダメージ軽減+2%",
        "soul": {
          "text": "敵全体に光属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間15%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MAG +8 & MP +10",
          "trait": "光属性耐性+10% & 魔法ダメージ軽減+2%",
          "accessorySkillName": "クフライト",
          "accessorySkillEffect": "敵全体に光属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 クフライト",
              "effect": "敵全体のSPDを15%ダウンさせ、HPを5%ダウンさせる"
            },
            "5": {
              "name": "クフライト",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "103",
        "107",
        "109",
        "110",
        "111",
        "112",
        "113",
        "114",
        "115",
        "121",
        "130",
        "134",
        "136",
        "142",
        "143",
        "144",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "204",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "185",
      "uid": "MSB-088",
      "name": "新入りフィギュア売り モブメープル",
      "image": "fig/88.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "魔法",
      "role": "回復・支援",
      "atk": 150,
      "def": 150,
      "tags": [
        "06",
        "37",
        "40",
        "50",
        "57",
        "70",
        "73",
        "78",
        "79"
      ],
      "soulSkill": {
        "name": "ルーキーコール",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。手札が4体以下ならシードデッキから1体ドローする。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。手札が4体以下ならシードデッキから1体ドローする。",
        "program": 32,
        "sourceText": "自分ライフを20回復する。手札が4体以下ならシードデッキから1体ドローする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "HP +20 & DEF +3 & MAG +2",
        "traitText": "獲得経験値+10% & 会心率+2%",
        "soul": {
          "text": "味方全体のHPを15%回復し、獲得経験値を10%アップする。さらに会心率を2ターンの間5%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP +20 & DEF +3 & MAG +2",
          "trait": "獲得経験値+10% & 会心率+2%",
          "accessorySkillName": "ルーキーコール",
          "accessorySkillEffect": "味方全体のHPを15%回復し、獲得経験値を10%アップする。さらに会心率を2ターンの間5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ルーキーコール",
              "effect": "味方全体のATKとSPDを9%アップする"
            },
            "5": {
              "name": "ルーキーコール",
              "effect": "味方全体のATKとSPDを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "96",
        "99",
        "100",
        "103",
        "107",
        "109",
        "112",
        "113",
        "114",
        "115",
        "121",
        "130",
        "134",
        "136",
        "142",
        "143",
        "144",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "204",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "186",
      "uid": "MSB-089",
      "name": "PB2 15th ロゴレコード",
      "image": "fig/89.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 140,
      "def": 140,
      "tags": [
        "11",
        "30",
        "33",
        "40",
        "64",
        "70",
        "82"
      ],
      "soulSkill": {
        "name": "15thビート",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "program": 0,
        "sourceText": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "HP+10 & ATK +1 & MAG +1 & MND +1",
        "traitText": "獲得経験値+5%",
        "soul": {
          "text": "味方全体のATK・DEF・SPDを2ターンの間12%アップし、HPを10%回復する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP+10 & ATK +1 & MAG +1 & MND +1",
          "trait": "獲得経験値+5%",
          "accessorySkillName": "15thビート",
          "accessorySkillEffect": "味方全体のATK・DEF・SPDを2ターンの間12%アップし、HPを10%回復する",
          "mobPieceSkills": {
            "1": {
              "name": "0 15thビート",
              "effect": "味方全体のATKとSPDを9%アップする"
            },
            "5": {
              "name": "15thビート",
              "effect": "味方全体のATKとSPDを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "187",
      "uid": "MSB-090",
      "name": "PB2 Vol.40 ロゴレコード",
      "image": "fig/90.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 130,
      "def": 140,
      "tags": [
        "11",
        "30",
        "33",
        "40",
        "64",
        "70",
        "82"
      ],
      "soulSkill": {
        "name": "40thビート",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "program": 0,
        "sourceText": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "HP+10 & ATK +1 & MAG +1 & MND +1",
        "traitText": "獲得経験値+5%",
        "soul": {
          "text": "味方全体のMAG・MND・SPDを2ターンの間12%アップし、MPを10回復する"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP+10 & ATK +1 & MAG +1 & MND +1",
          "trait": "獲得経験値+5%",
          "accessorySkillName": "40thビート",
          "accessorySkillEffect": "味方全体のMAG・MND・SPDを2ターンの間12%アップし、MPを10回復する",
          "mobPieceSkills": {
            "1": {
              "name": "0 40thビート",
              "effect": "敵全体のATKとDEFを9%ダウンさせる"
            },
            "5": {
              "name": "40thビート",
              "effect": "敵全体のATKとDEFを6%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "188",
      "uid": "MSB-091",
      "name": "MOB ARTIST イエローレコード",
      "image": "fig/91.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 140,
      "tags": [
        "04",
        "30",
        "33",
        "40",
        "64",
        "70",
        "82"
      ],
      "soulSkill": {
        "name": "イエロービート",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "program": 12,
        "sourceText": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "HP+10 & ATK +1 & MAG +1 & MND +1",
        "traitText": "獲得経験値+5%",
        "soul": {
          "text": "味方全体のSPDを2ターンの間20%アップし、雷属性与ダメージを10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP+10 & ATK +1 & MAG +1 & MND +1",
          "trait": "獲得経験値+5%",
          "accessorySkillName": "イエロービート",
          "accessorySkillEffect": "味方全体のSPDを2ターンの間20%アップし、雷属性与ダメージを10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 イエロービート",
              "effect": "味方全体のATKとSPDを9%アップする"
            },
            "5": {
              "name": "イエロービート",
              "effect": "味方全体のATKとSPDを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "103",
        "175",
        "178",
        "mq:eventfig/29",
        "mq:eventfig/47",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "189",
      "uid": "MSB-092",
      "name": "MOB ARTIST ミントレコード",
      "image": "fig/92.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 140,
      "def": 140,
      "tags": [
        "11",
        "31",
        "33",
        "40",
        "64",
        "70",
        "82"
      ],
      "soulSkill": {
        "name": "ミントビート",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "program": 12,
        "sourceText": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "SSR",
        "statsText": "HP+10 & ATK +1 & MAG +1 & MND +1",
        "traitText": "獲得経験値+5%",
        "soul": {
          "text": "味方全体のDEFとMNDを2ターンの間15%アップし、水属性耐性を10%アップする"
        },
        "decision": "基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "HP+10 & ATK +1 & MAG +1 & MND +1",
          "trait": "獲得経験値+5%",
          "accessorySkillName": "ミントビート",
          "accessorySkillEffect": "味方全体のDEFとMNDを2ターンの間15%アップし、水属性耐性を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミントビート",
              "effect": "味方全体のATKとSPDを9%アップする"
            },
            "5": {
              "name": "ミントビート",
              "effect": "味方全体のATKとSPDを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "190",
      "uid": "MSB-093",
      "name": "モブ勇者",
      "image": "figplay/001.png",
      "rarity": "MOB",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 190,
      "def": 210,
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
        "74",
        "81"
      ],
      "soulSkill": {
        "name": "ブックブレイブ",
        "timing": "own-main",
        "effect": "手札1体をデッキ下へ戻し、同じ属性を持つシードソウル1体をデッキから手札へ加える。",
        "timingLabel": "自分メイン",
        "description": "手札1体をデッキ下へ戻し、同じ属性を持つシードソウル1体をデッキから手札へ加える。",
        "program": 38,
        "sourceText": "手札1体をデッキ下へ戻し、同じ属性を持つシードソウル1体をデッキから手札へ加える。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "MOB",
        "statsText": "MND+15 & HP +30",
        "traitText": "状態異常耐性+20 & 闇属性ダメージ軽減 +20%",
        "soul": {
          "text": "敵単体に光属性の物理大ダメージを与え、味方全体のATK・DEFを2ターンの間20%アップする。読みかけの本エリアではさらに与ダメージ+10%"
        },
        "decision": "プレイヤーキャラクターの基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MND+15 & HP +30",
          "trait": "状態異常耐性+20 & 闇属性ダメージ軽減 +20%",
          "accessorySkillName": "ブックブレイブ",
          "accessorySkillEffect": "敵単体に光属性の物理大ダメージを与え、味方全体のATK・DEFを2ターンの間20%アップする。読みかけの本エリアではさらに与ダメージ+10%",
          "mobPieceSkills": {
            "1": {
              "name": "0 ブックブレイブ",
              "effect": "味方全体のATKとDEFを9%アップする"
            },
            "5": {
              "name": "ブックブレイブ",
              "effect": "味方全体のATKとDEFを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "プレイヤーキャラクターの基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "121",
        "128",
        "129",
        "165",
        "166",
        "173",
        "175",
        "176",
        "180",
        "203",
        "205",
        "211",
        "212",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "191",
      "uid": "MSB-094",
      "name": "モブピンク",
      "image": "figplay/002.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 140,
      "def": 160,
      "tags": [
        "06",
        "24",
        "34",
        "39",
        "40",
        "59",
        "69",
        "70",
        "78"
      ],
      "soulSkill": {
        "name": "ピンクガード",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "program": 39,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "DEF+5 & HP +20",
        "traitText": "ひるみ耐性+40% & ダメージ軽減 +5%",
        "soul": {
          "text": "味方全体のDEFを2ターンの間30%アップし、ダメージ軽減を7%アップする"
        },
        "decision": "プレイヤーキャラクターの基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "DEF+5 & HP +20",
          "trait": "ひるみ耐性+40% & ダメージ軽減 +5%",
          "accessorySkillName": "ピンクガード",
          "accessorySkillEffect": "味方全体のDEFを2ターンの間30%アップし、ダメージ軽減を7%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ピンクガード",
              "effect": "味方全体のDEFを15%アップし、HPを5%アップする"
            },
            "5": {
              "name": "ピンクガード",
              "effect": "味方全体のDEFを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "プレイヤーキャラクターの基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "135",
        "139",
        "147",
        "163",
        "mq:eventfig/20",
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "192",
      "uid": "MSB-095",
      "name": "モブデザート",
      "image": "figplay/003.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "地/闇",
      "attackType": "物理",
      "role": "妨害",
      "atk": 160,
      "def": 140,
      "tags": [
        "24",
        "34",
        "42",
        "49",
        "54",
        "57",
        "59",
        "73",
        "77"
      ],
      "soulSkill": {
        "name": "サンドブレイク",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 23,
        "sourceText": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "ATK+7 & HP +15",
        "traitText": "毒耐性+40 & 地属性与ダメージ +10%",
        "soul": {
          "text": "敵単体に地属性の物理中～大ダメージを与え、DEFを2ターンの間20%ダウンさせる"
        },
        "decision": "プレイヤーキャラクターの基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK+7 & HP +15",
          "trait": "毒耐性+40 & 地属性与ダメージ +10%",
          "accessorySkillName": "サンドブレイク",
          "accessorySkillEffect": "敵単体に地属性の物理中～大ダメージを与え、DEFを2ターンの間20%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 サンドブレイク",
              "effect": "味方全体のSPDを15%・ATKを6%アップする"
            },
            "5": {
              "name": "サンドブレイク",
              "effect": "味方全体のSPDを10%・ATKを3%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 13055,
            "ATK": 336,
            "MAG": 336,
            "DEF": 262,
            "MND": 262,
            "SPD": 382,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地・闇",
            "通常攻撃区分": "物理",
            "画像": "play/03.png",
            "条件・補足": null,
            "技一覧": [
              "ゴールドフィッシュ / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "スナノサバキ / 属性:地 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "プレイヤーキャラクターの基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "100",
        "107",
        "113",
        "114",
        "115",
        "121",
        "128",
        "129",
        "134",
        "144",
        "173",
        "203",
        "204",
        "211",
        "212"
      ]
    },
    {
      "id": "193",
      "uid": "MSB-096",
      "name": "モブデンデン",
      "image": "figplay/004.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 160,
      "def": 150,
      "tags": [
        "04",
        "24",
        "34",
        "39",
        "51",
        "59",
        "60",
        "78",
        "79"
      ],
      "soulSkill": {
        "name": "デンデンサンダー",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "program": 40,
        "sourceText": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "SPD+7 & HP +15",
        "traitText": "マヒ耐性+40 & 雷属性与ダメージ +10%",
        "soul": {
          "text": "敵全体に雷属性の物理中ダメージを与え、40%でマヒにする。自分のSPDを2ターンの間20%アップする"
        },
        "decision": "プレイヤーキャラクターの基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD+7 & HP +15",
          "trait": "マヒ耐性+40 & 雷属性与ダメージ +10%",
          "accessorySkillName": "デンデンサンダー",
          "accessorySkillEffect": "敵全体に雷属性の物理中ダメージを与え、40%でマヒにする。自分のSPDを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 デンデンサンダー",
              "effect": "センターフィギュアのDEFを30%アップし、HPを15%アップする"
            },
            "5": {
              "name": "デンデンサンダー",
              "effect": "センターフィギュアのDEFを20%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 7068,
            "ATK": 227,
            "MAG": 227,
            "DEF": 174,
            "MND": 174,
            "SPD": 254,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "雷",
            "通常攻撃区分": "物理",
            "画像": "boss/15.png",
            "条件・補足": null,
            "技一覧": [
              "マシンガングミ / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "プレイヤーキャラクターの基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "96",
        "103",
        "110",
        "111",
        "135",
        "139",
        "147",
        "163",
        "166",
        "175",
        "178",
        "mq:eventfig/20",
        "mq:eventfig/29",
        "mq:eventfig/47",
        "mq:eventfig/48",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "194",
      "uid": "MSB-097",
      "name": "モブニョロ",
      "image": "figplay/005.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "魔法",
      "role": "防御・守護",
      "atk": 140,
      "def": 160,
      "tags": [
        "03",
        "24",
        "40",
        "43",
        "58",
        "60",
        "68",
        "69",
        "81"
      ],
      "soulSkill": {
        "name": "ニョロファイヤ",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "program": 40,
        "sourceText": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "MND+7 & HP +15",
        "traitText": "やけど耐性+40 & 火属性与ダメージ +10%",
        "soul": {
          "text": "敵全体に火属性の魔法中ダメージを与え、40%でやけどにする。味方全体のMNDを2ターンの間15%アップする"
        },
        "decision": "プレイヤーキャラクターの基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MND+7 & HP +15",
          "trait": "やけど耐性+40 & 火属性与ダメージ +10%",
          "accessorySkillName": "ニョロファイヤ",
          "accessorySkillEffect": "敵全体に火属性の魔法中ダメージを与え、40%でやけどにする。味方全体のMNDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ニョロファイヤ",
              "effect": "味方全体のHPを15%アップし、DEFを5%アップする"
            },
            "5": {
              "name": "ニョロファイヤ",
              "effect": "味方全体のHPを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "プレイヤーキャラクターの基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "104",
        "107",
        "110",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "165",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "195",
      "uid": "MSB-098",
      "name": "モブマニー",
      "image": "figplay/006.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "魔法",
      "role": "防御・守護",
      "atk": 150,
      "def": 140,
      "tags": [
        "02",
        "24",
        "37",
        "39",
        "44",
        "58",
        "60",
        "79",
        "81"
      ],
      "soulSkill": {
        "name": "マニーマジック",
        "timing": "own-main",
        "effect": "このターン最大5回攻撃できる。攻撃するたびATK+10（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "timingLabel": "自分メイン",
        "description": "このターン最大5回攻撃できる。攻撃するたびATK+10（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "program": 41,
        "sourceText": "このターン最大5回攻撃できる。攻撃するたびATK+10（累積）。攻撃対象変更・守護効果を無視して対象を選べる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "MAG+7 & HP +15 & MP +15",
        "traitText": "混乱耐性+40 & 光属性与ダメージ +10%",
        "soul": {
          "text": "敵単体に光属性の魔法中～大ダメージを与え、味方全体のMPを15回復する"
        },
        "decision": "プレイヤーキャラクターの基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MAG+7 & HP +15 & MP +15",
          "trait": "混乱耐性+40 & 光属性与ダメージ +10%",
          "accessorySkillName": "マニーマジック",
          "accessorySkillEffect": "敵単体に光属性の魔法中～大ダメージを与え、味方全体のMPを15回復する",
          "mobPieceSkills": {
            "1": {
              "name": "0 マニーマジック",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "マニーマジック",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 7068,
            "ATK": 227,
            "MAG": 227,
            "DEF": 174,
            "MND": 174,
            "SPD": 254,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": "物理",
            "画像": "boss/17.png",
            "条件・補足": null,
            "技一覧": [
              "バブルネオン / 攻撃区分:魔法 / 対象:個別処理"
            ]
          },
          "classReason": "プレイヤーキャラクターの基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "96",
        "99",
        "103",
        "104",
        "109",
        "110",
        "111",
        "112",
        "121",
        "130",
        "135",
        "136",
        "139",
        "142",
        "143",
        "147",
        "157",
        "158",
        "161",
        "163",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/20",
        "mq:eventfig/45",
        "mq:eventfig/47",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "196",
      "uid": "MSB-099",
      "name": "モブネコクー",
      "image": "figplay/007.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 150,
      "def": 150,
      "tags": [
        "24",
        "31",
        "32",
        "39",
        "45",
        "49",
        "59",
        "74",
        "80"
      ],
      "soulSkill": {
        "name": "ネコスラッシュ",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 42,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "ATK+5 & DEF +3 & HP +15",
        "traitText": "眠り耐性+40 & 水属性与ダメージ +10%",
        "soul": {
          "text": "敵単体に水属性の物理中～大ダメージを2回与え、味方全体のHPを10%回復する"
        },
        "decision": "プレイヤーキャラクターの基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK+5 & DEF +3 & HP +15",
          "trait": "眠り耐性+40 & 水属性与ダメージ +10%",
          "accessorySkillName": "ネコスラッシュ",
          "accessorySkillEffect": "敵単体に水属性の物理中～大ダメージを2回与え、味方全体のHPを10%回復する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ネコスラッシュ",
              "effect": "味方全体のDEFを12%・HPを9%アップする"
            },
            "5": {
              "name": "ネコスラッシュ",
              "effect": "味方全体のDEFを8%・HPを6%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "プレイヤーキャラクターの基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "120",
        "121",
        "128",
        "129",
        "130",
        "135",
        "139",
        "144",
        "146",
        "147",
        "163",
        "173",
        "179",
        "203",
        "211",
        "212",
        "219",
        "mq:eventfig/20",
        "mq:eventfig/43",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "197",
      "uid": "MSB-100",
      "name": "モブジェシー",
      "image": "figplay/008.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 150,
      "tags": [
        "04",
        "24",
        "44",
        "46",
        "51",
        "55",
        "60",
        "74",
        "79"
      ],
      "soulSkill": {
        "name": "クイックショット",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたびATK+20（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたびATK+20（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "program": 43,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたびATK+20（累積）。攻撃対象変更・守護効果を無視して対象を選べる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "SPD+5 & DEF +3 & HP +15",
        "traitText": "回避率+6 & 通常攻撃与ダメージ +10%",
        "soul": {
          "text": "敵単体に無属性の物理中ダメージを2回与え、自分のSPD・命中率・回避率を2ターンの間15%アップする"
        },
        "decision": "プレイヤーキャラクターの基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "SPD+5 & DEF +3 & HP +15",
          "trait": "回避率+6 & 通常攻撃与ダメージ +10%",
          "accessorySkillName": "クイックショット",
          "accessorySkillEffect": "敵単体に無属性の物理中ダメージを2回与え、自分のSPD・命中率・回避率を2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 クイックショット",
              "effect": "味方全体のSPDを15%アップし、ATKを5%アップする"
            },
            "5": {
              "name": "クイックショット",
              "effect": "味方全体のSPDを10%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "プレイヤーキャラクターの基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "93",
        "96",
        "103",
        "110",
        "111",
        "202",
        "159",
        "166",
        "175",
        "178",
        "219",
        "mq:eventfig/29",
        "mq:eventfig/48",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "198",
      "uid": "MSB-101",
      "name": "モブテツ",
      "image": "figplay/009.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "妨害",
      "atk": 150,
      "def": 140,
      "tags": [
        "24",
        "28",
        "34",
        "35",
        "40",
        "41",
        "49",
        "55",
        "59"
      ],
      "soulSkill": {
        "name": "茄子落とし",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "program": 39,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "ATK +8 & MND +8",
        "traitText": "ひるみ耐性+40 & 会心率 +6%",
        "soul": {
          "text": "敵単体に地属性の物理大ダメージを与える。会心率20%。会心時は対象のDEFを2ターンの間20%ダウンさせる"
        },
        "decision": "プレイヤーキャラクターの基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "ATK +8 & MND +8",
          "trait": "ひるみ耐性+40 & 会心率 +6%",
          "accessorySkillName": "茄子落とし",
          "accessorySkillEffect": "敵単体に地属性の物理大ダメージを与える。会心率20%。会心時は対象のDEFを2ターンの間20%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 茄子落とし",
              "effect": "センターフィギュアのSPDを30%アップし、ATKを10%アップする"
            },
            "5": {
              "name": "茄子落とし",
              "effect": "センターフィギュアのSPDを20%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "プレイヤーキャラクターの基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "121",
        "128",
        "129",
        "202",
        "159",
        "165",
        "173",
        "176",
        "180",
        "203",
        "205",
        "211",
        "212",
        "215",
        "219",
        "mq:eventfig/03",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "199",
      "uid": "MSB-102",
      "name": "モブリーロ",
      "image": "figplay/010.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 150,
      "tags": [
        "23",
        "24",
        "28",
        "37",
        "42",
        "49",
        "57",
        "58",
        "77"
      ],
      "soulSkill": {
        "name": "ウィンドブレード",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 37,
        "sourceText": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "UR",
        "statsText": "MND+8 & HP +30",
        "traitText": "物理会心率+6% & 風属性与ダメージ +10%",
        "soul": {
          "text": "敵全体に風属性の物理中ダメージを与え、味方全体のSPDを2ターンの間20%アップする"
        },
        "decision": "プレイヤーキャラクターの基本フィギュアとして直接召喚",
        "basis": {
          "statusEffect": "MND+8 & HP +30",
          "trait": "物理会心率+6% & 風属性与ダメージ +10%",
          "accessorySkillName": "ウィンドブレード",
          "accessorySkillEffect": "敵全体に風属性の物理中ダメージを与え、味方全体のSPDを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ウィンドブレード",
              "effect": "敵全体のHPを6%ダウンさせ、ATKを8%ダウンさせる"
            },
            "5": {
              "name": "ウィンドブレード",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "プレイヤーキャラクターの基本フィギュアとして直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "99",
        "100",
        "103",
        "104",
        "107",
        "109",
        "112",
        "113",
        "114",
        "115",
        "121",
        "128",
        "129",
        "130",
        "134",
        "136",
        "142",
        "143",
        "144",
        "157",
        "158",
        "161",
        "165",
        "171",
        "173",
        "176",
        "177",
        "178",
        "179",
        "180",
        "203",
        "204",
        "205",
        "206",
        "207",
        "211",
        "212",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "200",
      "uid": "MSB-103",
      "name": "モブあのヒーロー",
      "image": "figplay/011.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "attribute": "闇",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 370,
      "def": 380,
      "tags": [
        "05",
        "24",
        "39",
        "50",
        "51",
        "52",
        "55",
        "56",
        "60",
        "73",
        "74",
        "77"
      ],
      "soulSkill": {
        "name": "ワールドチェンジ",
        "timing": "own-main",
        "effect": "自分フィールド全体のATKとDEFを+30する。このターン、最初に味方が撃破される場合、その撃破を1回だけ無効にする。",
        "timingLabel": "自分メイン",
        "description": "自分フィールド全体のATKとDEFを+30する。このターン、最初に味方が撃破される場合、その撃破を1回だけ無効にする。",
        "program": 44,
        "sourceText": "自分フィールド全体のATKとDEFを+30する。このターン、最初に味方が撃破される場合、その撃破を1回だけ無効にする。"
      },
      "source": {
        "figureFile": "figure_list_main.txt",
        "rarity": "MOB",
        "statsText": "ATK +5 & DEF +5 & SPD +10 & MND+10 & HP +30",
        "traitText": "全属性与ダメージ +10% & 全属性耐性 +10",
        "soul": {
          "text": "敵全体に無属性の物理大ダメージを与え、味方全体のATK・DEF・SPDを2ターンの間20%アップする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "ATK +5 & DEF +5 & SPD +10 & MND+10 & HP +30",
          "trait": "全属性与ダメージ +10% & 全属性耐性 +10",
          "accessorySkillName": "ワールドチェンジ",
          "accessorySkillEffect": "敵全体に無属性の物理大ダメージを与え、味方全体のATK・DEF・SPDを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ワールドチェンジ",
              "effect": "味方全体のHPを15%アップし、DEFを10%アップする"
            },
            "5": {
              "name": "ワールドチェンジ",
              "effect": "味方全体のHPを10%アップし、DEFを5%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-103-normal-0",
          "target": "200",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-103-normal-1",
          "target": "200",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "56"
            }
          ],
          "label": "闇属性 × 火炎タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "88",
      "uid": "MSB-104",
      "name": "スライム",
      "image": "figene/01.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 120,
      "def": 130,
      "tags": [
        "02",
        "09",
        "10",
        "17",
        "41",
        "67",
        "78"
      ],
      "soulSkill": {
        "name": "スラスライダー",
        "timing": "defeat-response",
        "effect": "相手の攻撃で撃破される時、撃破の代わりに手札へ戻る。ATK-DEFの差分ライフダメージは通常通り受ける。",
        "timingLabel": "撃破時",
        "description": "相手の攻撃で撃破される時、撃破の代わりに手札へ戻る。ATK-DEFの差分ライフダメージは通常通り受ける。",
        "program": 45,
        "sourceText": "相手の攻撃で撃破される時、撃破の代わりに手札へ戻る。ATK-DEFの差分ライフダメージは通常通り受ける。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "水属性耐性 +5%",
        "soul": {
          "text": "敵単体に水属性の物理小～中ダメージを与え、SPDを2ターンの間15%ダウンさせる。自分の回避率を10%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +5",
          "trait": "水属性耐性 +5%",
          "accessorySkillName": "スラスライダー",
          "accessorySkillEffect": "敵単体に水属性の物理小～中ダメージを与え、SPDを2ターンの間15%ダウンさせる。自分の回避率を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 スラスライダー",
              "effect": "敵全体のSPDを15%ダウンさせ、味方全体のSPDを5%アップする"
            },
            "5": {
              "name": "スラスライダー",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 113,
            "ATK": 18,
            "MAG": 18,
            "DEF": 15,
            "MND": 15,
            "SPD": 23,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/01.png",
            "条件・補足": null,
            "技一覧": [
              "ネプソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "89",
      "uid": "MSB-105",
      "name": "モブロック",
      "image": "figene/02.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "妨害",
      "atk": 90,
      "def": 100,
      "tags": [
        "09",
        "39",
        "41",
        "77",
        "78"
      ],
      "soulSkill": {
        "name": "ロックパンチ",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "program": 22,
        "sourceText": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "地属性耐性 +3%",
        "soul": {
          "text": "敵単体に地属性の物理小～中ダメージを与え、DEFを2ターンの間10%ダウンさせる"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "地属性耐性 +3%",
          "accessorySkillName": "ロックパンチ",
          "accessorySkillEffect": "敵単体に地属性の物理小～中ダメージを与え、DEFを2ターンの間10%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ロックパンチ",
              "effect": "正面の敵1体のHPを10%ダウンさせ、DEFを10%ダウンさせる"
            },
            "5": {
              "name": "ロックパンチ",
              "effect": "正面の敵1体のHPを7%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 149,
            "ATK": 20,
            "MAG": 20,
            "DEF": 20,
            "MND": 17,
            "SPD": 21,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/02.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "95",
        "120",
        "135",
        "139",
        "147",
        "163",
        "171",
        "173",
        "204",
        "mq:eventfig/20",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "90",
      "uid": "MSB-106",
      "name": "モブテンデビ",
      "image": "figene/03.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 90,
      "def": 100,
      "tags": [
        "09",
        "39",
        "41",
        "50",
        "78"
      ],
      "soulSkill": {
        "name": "テンウォーター",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "text": "自分のSPDを2ターンの間25%アップし、回避率を10%アップする。さらに水属性ダメージ軽減を5%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "水属性耐性 +3%",
          "accessorySkillName": "テンウォーター",
          "accessorySkillEffect": "自分のSPDを2ターンの間25%アップし、回避率を10%アップする。さらに水属性ダメージ軽減を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 テンウォーター",
              "effect": "敵全体のSPDを15%ダウンさせ、味方全体のSPDを8%アップする"
            },
            "5": {
              "name": "テンウォーター",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 126,
            "ATK": 20,
            "MAG": 20,
            "DEF": 17,
            "MND": 17,
            "SPD": 26,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/04.png",
            "条件・補足": null,
            "技一覧": [
              "ネプ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "ネプマチューン / 属性:水 / 攻撃区分:魔法 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "135",
        "139",
        "144",
        "146",
        "147",
        "163",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/20",
        "mq:eventfig/43",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "91",
      "uid": "MSB-107",
      "name": "モブジョーロ",
      "image": "figene/04.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "妨害",
      "atk": 100,
      "def": 95,
      "tags": [
        "09",
        "39",
        "41",
        "80",
        "78"
      ],
      "soulSkill": {
        "name": "ジョーロシャワー",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "program": 22,
        "sourceText": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "text": "敵単体に水属性の物理小～中ダメージを与え、ATKを2ターンの間10%ダウンさせる"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +3",
          "trait": "水属性耐性 +3%",
          "accessorySkillName": "ジョーロシャワー",
          "accessorySkillEffect": "敵単体に水属性の物理小～中ダメージを与え、ATKを2ターンの間10%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ジョーロシャワー",
              "effect": "味方全体のATKを15%アップし、正面の敵のHPを7%ダウンさせる"
            },
            "5": {
              "name": "ジョーロシャワー",
              "effect": "味方全体のATKを10%アップし、正面の敵のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 140,
            "ATK": 22,
            "MAG": 22,
            "DEF": 18,
            "MND": 18,
            "SPD": 29,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/03.png",
            "条件・補足": null,
            "技一覧": [
              "キャンディ / 属性:無 / 攻撃区分:魔法 / 対象:個別処理",
              "ネプソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "キャンディネオン / 属性:無 / 攻撃区分:魔法 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "135",
        "139",
        "144",
        "146",
        "147",
        "163",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/20",
        "mq:eventfig/43",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "92",
      "uid": "MSB-108",
      "name": "モブイワキリ",
      "image": "figene/05.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "雷",
      "attackType": "物理",
      "role": "連続攻撃",
      "atk": 170,
      "def": 190,
      "tags": [
        "09",
        "41",
        "51",
        "58",
        "60",
        "77",
        "79"
      ],
      "soulSkill": {
        "name": "イワサンダー",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたびATK+25（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたびATK+25（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "program": 46,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたびATK+25（累積）。攻撃対象変更・守護効果を無視して対象を選べる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3",
        "traitText": "雷属性耐性 +5%",
        "soul": {
          "text": "敵単体に雷属性の物理中ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする。この攻撃はダメージ軽減を20%無視する"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "雷属性耐性 +5%",
          "accessorySkillName": "イワサンダー",
          "accessorySkillEffect": "敵単体に雷属性の物理中ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする。この攻撃はダメージ軽減を20%無視する",
          "mobPieceSkills": {
            "1": {
              "name": "0 イワサンダー",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "イワサンダー",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 888,
            "ATK": 115,
            "MAG": 115,
            "DEF": 97,
            "MND": 97,
            "SPD": 157,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "雷",
            "通常攻撃区分": "物理",
            "画像": "enemy/10.png",
            "条件・補足": null,
            "技一覧": [
              "イワキリサンダー / 属性:雷 / 攻撃区分:魔法 / 対象:敵全体",
              "トルソード / 属性:雷 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-108-normal-0",
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
          "label": "雷属性 × 雷属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-108-normal-1",
          "target": "92",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "tag": "51"
            }
          ],
          "label": "雷属性 × 雷撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "182",
        "217",
        "mq:eventfig/55",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "93",
      "uid": "MSB-109",
      "name": "モブサバンナ",
      "image": "figene/06.png",
      "rarity": "SR",
      "soulClass": "middle",
      "attribute": "地",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 165,
      "def": 140,
      "tags": [
        "04",
        "09",
        "36",
        "41",
        "55"
      ],
      "soulSkill": {
        "name": "サバンダッシュ",
        "timing": "own-main",
        "effect": "このターンATK+30。攻撃後、まだ攻撃していない味方1体と位置を入れ替えられる。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+30。攻撃後、まだ攻撃していない味方1体と位置を入れ替えられる。",
        "program": 47,
        "sourceText": "このターンATK+30。攻撃後、まだ攻撃していない味方1体と位置を入れ替えられる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "地属性与ダメージ +3%",
        "soul": {
          "text": "味方全体のSPDを2ターンの間10%アップし、会心率を5%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "地属性与ダメージ +3%",
          "accessorySkillName": "サバンダッシュ",
          "accessorySkillEffect": "味方全体のSPDを2ターンの間10%アップし、会心率を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 サバンダッシュ",
              "effect": "センターフィギュアのSPDを30%アップし、ATKを10%アップする"
            },
            "5": {
              "name": "サバンダッシュ",
              "effect": "センターフィギュアのSPDを20%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 888,
            "ATK": 121,
            "MAG": 115,
            "DEF": 97,
            "MND": 97,
            "SPD": 157,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/09.png",
            "条件・補足": null,
            "技一覧": [
              "サバンナダンス / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-109-normal-0",
          "target": "93",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 地属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-109-normal-1",
          "target": "93",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "tag": "55"
            }
          ],
          "label": "地属性 × スピードスタータグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "172",
        "174"
      ]
    },
    {
      "id": "94",
      "uid": "MSB-110",
      "name": "モブメラケロ",
      "image": "figene/07.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "妨害",
      "atk": 180,
      "def": 170,
      "tags": [
        "03",
        "32",
        "34",
        "41",
        "56",
        "74",
        "78"
      ],
      "soulSkill": {
        "name": "メラケロップ",
        "timing": "own-main",
        "effect": "相手1体のATK-30。そのフィギュアが次に攻撃するまでDEFも-20。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-30。そのフィギュアが次に攻撃するまでDEFも-20。",
        "program": 48,
        "sourceText": "相手1体のATK-30。そのフィギュアが次に攻撃するまでDEFも-20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK+3 & DEF +3",
        "traitText": "火属性与ダメージ +5%",
        "soul": {
          "text": "敵単体に火属性の物理中ダメージを与え、35%でやけどにする。自分のATKを2ターンの間15%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "ATK+3 & DEF +3",
          "trait": "火属性与ダメージ +5%",
          "accessorySkillName": "メラケロップ",
          "accessorySkillEffect": "敵単体に火属性の物理中ダメージを与え、35%でやけどにする。自分のATKを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 メラケロップ",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "メラケロップ",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 3472,
            "ATK": 161,
            "MAG": 174,
            "DEF": 155,
            "MND": 155,
            "SPD": 214,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/16.png",
            "条件・補足": null,
            "技一覧": [
              "ケロケロファイア / 属性:火 / 攻撃区分:魔法 / 対象:個別処理",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-110-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-110-normal-1",
          "target": "94",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "56"
            }
          ],
          "label": "火属性 × 火炎タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "168",
        "169",
        "181",
        "209",
        "210",
        "214"
      ]
    },
    {
      "id": "95",
      "uid": "MSB-111",
      "name": "モブケロキング",
      "image": "figene/08.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "水",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 170,
      "def": 180,
      "tags": [
        "02",
        "09",
        "32",
        "41",
        "49",
        "77",
        "78"
      ],
      "soulSkill": {
        "name": "ケロプレス",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。このターンATK=DEFでもその相手を撃破できる。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。このターンATK=DEFでもその相手を撃破できる。",
        "program": 49,
        "sourceText": "相手1体のDEF-30。このターンATK=DEFでもその相手を撃破できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3 & MND +3",
        "traitText": "水属性与ダメージ +5%",
        "soul": {
          "text": "敵単体に水属性の物理中ダメージを与え、味方全体のDEFを2ターンの間15%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "DEF +3 & MND +3",
          "trait": "水属性与ダメージ +5%",
          "accessorySkillName": "ケロプレス",
          "accessorySkillEffect": "敵単体に水属性の物理中ダメージを与え、味方全体のDEFを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ケロプレス",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "ケロプレス",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4111,
            "ATK": 169,
            "MAG": 169,
            "DEF": 163,
            "MND": 163,
            "SPD": 226,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/20.png",
            "条件・補足": null,
            "技一覧": [
              "シードスナイパー / 属性:風 / 攻撃区分:物理 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-111-normal-0",
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
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-111-normal-1",
          "target": "95",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "77"
            }
          ],
          "label": "水属性 × 大地の力タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "183",
        "213",
        "214",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "96",
      "uid": "MSB-112",
      "name": "モブツルガンナー",
      "image": "figene/09.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "風",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 180,
      "def": 170,
      "tags": [
        "02",
        "09",
        "32",
        "36",
        "41",
        "60",
        "79"
      ],
      "soulSkill": {
        "name": "ツルショット",
        "timing": "own-main",
        "effect": "このターンATK+30。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+30。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。",
        "program": 50,
        "sourceText": "このターンATK+30。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "SPD +5",
        "traitText": "命中率 +8%",
        "soul": {
          "text": "敵単体に光属性の物理中ダメージを与え、自分のATKを2ターンの間15%アップする。この攻撃はダメージ軽減を20%無視する"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "SPD +5",
          "trait": "命中率 +8%",
          "accessorySkillName": "ツルショット",
          "accessorySkillEffect": "敵単体に光属性の物理中ダメージを与え、自分のATKを2ターンの間15%アップする。この攻撃はダメージ軽減を20%無視する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ツルショット",
              "effect": "味方全体のATKを15%アップし、正面の敵のHPを7%ダウンさせる"
            },
            "5": {
              "name": "ツルショット",
              "effect": "味方全体のATKを10%アップし、正面の敵のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 3216,
            "ATK": 153,
            "MAG": 153,
            "DEF": 147,
            "MND": 147,
            "SPD": 228,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": "物理",
            "画像": "enemy/14.png",
            "条件・補足": null,
            "技一覧": [
              "シードスナイパー / 属性:風 / 攻撃区分:物理 / 対象:個別処理",
              "疾風斬り / 属性:風 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:風 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-112-normal-0",
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
          "label": "風属性 × 風属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-112-normal-1",
          "target": "96",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "tag": "79"
            }
          ],
          "label": "風属性 × 閃光タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "160",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "97",
      "uid": "MSB-113",
      "name": "モブミイラ",
      "image": "figene/10.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "妨害",
      "atk": 90,
      "def": 110,
      "tags": [
        "09",
        "28",
        "42",
        "54",
        "77"
      ],
      "soulSkill": {
        "name": "グルグルラップ",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 51,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "混乱耐性 +5%",
        "soul": {
          "text": "敵単体に無属性の物理小～中ダメージを与え、自分のATKを2ターンの間10%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "混乱耐性 +5%",
          "accessorySkillName": "グルグルラップ",
          "accessorySkillEffect": "敵単体に無属性の物理小～中ダメージを与え、自分のATKを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 グルグルラップ",
              "effect": "味方全体のATKを15%アップし、正面の敵のHPを7%ダウンさせる"
            },
            "5": {
              "name": "グルグルラップ",
              "effect": "味方全体のATKを10%アップし、正面の敵のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 196,
            "ATK": 29,
            "MAG": 29,
            "DEF": 24,
            "MND": 24,
            "SPD": 38,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/21.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ノイズスクラッチ / 属性:地 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱",
              "回復の魔法 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "95",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "98",
      "uid": "MSB-114",
      "name": "モブネコミイラ",
      "image": "figene/11.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 90,
      "def": 100,
      "tags": [
        "09",
        "28",
        "42",
        "54",
        "77"
      ],
      "soulSkill": {
        "name": "ミイラニャン",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 51,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "回避率 +2%",
        "soul": {
          "text": "自分のSPDと回避率を2ターンの間20%アップし、混乱耐性を30%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "回避率 +2%",
          "accessorySkillName": "ミイラニャン",
          "accessorySkillEffect": "自分のSPDと回避率を2ターンの間20%アップし、混乱耐性を30%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミイラニャン",
              "effect": "敵全体のDEFを9%ダウンさせ、味方全体のSPDを10%アップする"
            },
            "5": {
              "name": "ミイラニャン",
              "effect": "敵全体のDEFを6%ダウンさせ、味方全体のSPDを5%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 182,
            "ATK": 29,
            "MAG": 29,
            "DEF": 24,
            "MND": 26,
            "SPD": 38,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/27.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ノイズスクラッチ / 属性:地 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "95",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "99",
      "uid": "MSB-115",
      "name": "モブデスヘッド",
      "image": "figene/12.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 180,
      "def": 180,
      "tags": [
        "09",
        "37",
        "42",
        "49",
        "50",
        "54",
        "57"
      ],
      "soulSkill": {
        "name": "デスバイト",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 52,
        "sourceText": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3 & MAG +3%",
        "traitText": "闇属性耐性 +5%",
        "soul": {
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "DEF +3 & MAG +3%",
          "trait": "闇属性耐性 +5%",
          "accessorySkillName": "デスバイト",
          "accessorySkillEffect": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 デスバイト",
              "effect": "センターの敵のDEFを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "デスバイト",
              "effect": "センターの敵のDEFを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1527,
            "ATK": 175,
            "MAG": 175,
            "DEF": 148,
            "MND": 148,
            "SPD": 238,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "enemy/31.png",
            "条件・補足": null,
            "技一覧": [
              "デスカーテン / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "ミラソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-115-normal-0",
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
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-115-normal-1",
          "target": "99",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "37"
            }
          ],
          "label": "闇属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "170",
        "213",
        "214",
        "216",
        "217",
        "218",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "100",
      "uid": "MSB-116",
      "name": "モブポイズン",
      "image": "figene/13.png",
      "rarity": "SR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 140,
      "def": 160,
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
        "effect": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 53,
        "sourceText": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "MND +3",
        "traitText": "毒耐性 +8%",
        "soul": {
          "text": "敵単体に闇属性の魔法小～中ダメージを与え、50%で毒にする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "MND +3",
          "trait": "毒耐性 +8%",
          "accessorySkillName": "ポイズンミスト",
          "accessorySkillEffect": "敵単体に闇属性の魔法小～中ダメージを与え、50%で毒にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ポイズンミスト",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "ポイズンミスト",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1500,
            "ATK": 172,
            "MAG": 172,
            "DEF": 146,
            "MND": 146,
            "SPD": 235,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "enemy/30.png",
            "条件・補足": null,
            "技一覧": [
              "ポイズンクロー / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒",
              "ミラソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-116-normal-0",
          "target": "100",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-116-normal-1",
          "target": "100",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "57"
            }
          ],
          "label": "闇属性 × 不気味なオーラタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "170",
        "217",
        "218",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "101",
      "uid": "MSB-117",
      "name": "モブアドベンチャー",
      "image": "figene/14.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 90,
      "def": 110,
      "tags": [
        "03",
        "09",
        "42",
        "54",
        "67"
      ],
      "soulSkill": {
        "name": "アドベンダッシュ",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "program": 39,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "ひるみ耐性 +3%",
        "soul": {
          "text": "敵単体に火属性の物理小～中ダメージを与え、自分のDEFとSPDを2ターンの間10%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "ひるみ耐性 +3%",
          "accessorySkillName": "アドベンダッシュ",
          "accessorySkillEffect": "敵単体に火属性の物理小～中ダメージを与え、自分のDEFとSPDを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 アドベンダッシュ",
              "effect": "正面の敵のATKを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "アドベンダッシュ",
              "effect": "正面の敵のATKを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 196,
            "ATK": 34,
            "MAG": 31,
            "DEF": 26,
            "MND": 26,
            "SPD": 41,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/25.png",
            "条件・補足": null,
            "技一覧": [
              "マグソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビート / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "102",
      "uid": "MSB-118",
      "name": "モブスナトカゲ",
      "image": "figene/15.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 90,
      "def": 110,
      "tags": [
        "09",
        "36",
        "42",
        "49",
        "55"
      ],
      "soulSkill": {
        "name": "スナダッシュ",
        "timing": "attack-response",
        "effect": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "program": 54,
        "sourceText": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "地属性耐性 +3%",
        "soul": {
          "text": "敵全体のSPDを2ターンの間10%ダウンさせ、自分のSPDを10%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "地属性耐性 +3%",
          "accessorySkillName": "スナダッシュ",
          "accessorySkillEffect": "敵全体のSPDを2ターンの間10%ダウンさせ、自分のSPDを10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 スナダッシュ",
              "effect": "味方全体のSPDを15%・ATKを6%アップする"
            },
            "5": {
              "name": "スナダッシュ",
              "effect": "味方全体のSPDを10%・ATKを3%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 196,
            "ATK": 31,
            "MAG": 31,
            "DEF": 26,
            "MND": 26,
            "SPD": 46,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/26.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ノイズスクラッチ / 属性:地 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "121",
        "128",
        "129",
        "135",
        "202",
        "159",
        "163",
        "171",
        "173",
        "203",
        "204",
        "211",
        "212",
        "219",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "103",
      "uid": "MSB-119",
      "name": "モブツインソウル",
      "image": "figene/16.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "雷",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 170,
      "def": 185,
      "tags": [
        "08",
        "09",
        "37",
        "42",
        "50",
        "51",
        "54"
      ],
      "soulSkill": {
        "name": "ツインスパーク",
        "timing": "own-main",
        "effect": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。",
        "timingLabel": "自分メイン",
        "description": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。 このスキル使用後も、このターンはフュージョン素材にできる。",
        "program": 55,
        "sourceText": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MP +15",
        "traitText": "風属性耐性 +3% & 雷属性耐性 +3%",
        "soul": {
          "text": "敵単体に雷属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "MP +15",
          "trait": "風属性耐性 +3% & 雷属性耐性 +3%",
          "accessorySkillName": "ツインスパーク",
          "accessorySkillEffect": "敵単体に雷属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる。発動後、自分の必殺技CTを1ターン短縮する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ツインスパーク",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "ツインスパーク",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 5200,
            "ATK": 210,
            "MAG": 210,
            "DEF": 203,
            "MND": 203,
            "SPD": 282,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "雷",
            "通常攻撃区分": "物理",
            "画像": "enemy/35.png",
            "条件・補足": null,
            "技一覧": [
              "ハイタッチサンダー / 属性:雷 / 攻撃区分:魔法 / 対象:敵全体",
              "トルマソード / 属性:雷 / 攻撃区分:物理 / 対象:個別処理",
              "ロングスクラッチカット / 属性:雷 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:マヒ"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-119-normal-0",
          "target": "103",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 雷属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-119-normal-1",
          "target": "103",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "tag": "37"
            }
          ],
          "label": "雷属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "170",
        "182",
        "216",
        "217",
        "218"
      ]
    },
    {
      "id": "104",
      "uid": "MSB-120",
      "name": "モブミラバスター",
      "image": "figene/17.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 180,
      "def": 170,
      "tags": [
        "09",
        "23",
        "26",
        "42",
        "54",
        "57",
        "58"
      ],
      "soulSkill": {
        "name": "ミラキャノン",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 52,
        "sourceText": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3 & MND +3",
        "traitText": "砂漠での与ダメージ +7%",
        "soul": {
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "DEF +3 & MND +3",
          "trait": "砂漠での与ダメージ +7%",
          "accessorySkillName": "ミラキャノン",
          "accessorySkillEffect": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする。発動後、自分の必殺技CTを1ターン短縮する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミラキャノン",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "ミラキャノン",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 5412,
            "ATK": 216,
            "MAG": 216,
            "DEF": 209,
            "MND": 209,
            "SPD": 289,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "enemy/36.png",
            "条件・補足": null,
            "技一覧": [
              "バニッシュフレイム / 攻撃区分:魔法 / 対象:敵全体 / 状態異常:ひるみ",
              "ソウル・オーバー・ミラバスター / 属性:闇 / 攻撃区分:魔法 / 対象:敵全体",
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-120-normal-0",
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
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-120-normal-1",
          "target": "104",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "58"
            }
          ],
          "label": "闇属性 × 特殊能力タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "170",
        "217",
        "218",
        "mq:eventfig/55",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "105",
      "uid": "MSB-121",
      "name": "モブヒトデヤリ",
      "image": "figene/18.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "妨害",
      "atk": 90,
      "def": 100,
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
        "effect": "手札1体をデッキ下へ戻し、同じタグを1つ以上持つシード1体を手札へ加える。",
        "timingLabel": "自分メイン",
        "description": "手札1体をデッキ下へ戻し、同じタグを1つ以上持つシード1体を手札へ加える。",
        "program": 56,
        "sourceText": "手札1体をデッキ下へ戻し、同じタグを1つ以上持つシード1体を手札へ加える。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "text": "敵単体に水属性の物理小～中ダメージを与え、DEFを2ターンの間10%ダウンさせる"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +3",
          "trait": "水属性耐性 +3%",
          "accessorySkillName": "ヒトデスピア",
          "accessorySkillEffect": "敵単体に水属性の物理小～中ダメージを与え、DEFを2ターンの間10%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヒトデスピア",
              "effect": "正面の敵1体のHPを10%ダウンさせ、DEFを10%ダウンさせる"
            },
            "5": {
              "name": "ヒトデスピア",
              "effect": "正面の敵1体のHPを7%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 286,
            "ATK": 48,
            "MAG": 44,
            "DEF": 37,
            "MND": 37,
            "SPD": 59,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/41.png",
            "条件・補足": null,
            "技一覧": [
              "ネプソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "チルローファイ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "106",
      "uid": "MSB-122",
      "name": "モブナイフ",
      "image": "figene/19.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "妨害",
      "atk": 100,
      "def": 90,
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
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 51,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "混乱耐性 +3%",
        "soul": {
          "text": "敵単体に無属性の物理小～中ダメージを与え、自分の会心率を2ターンの間8%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +3",
          "trait": "混乱耐性 +3%",
          "accessorySkillName": "ナイフエッジ",
          "accessorySkillEffect": "敵単体に無属性の物理小～中ダメージを与え、自分の会心率を2ターンの間8%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ナイフエッジ",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "ナイフエッジ",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 286,
            "ATK": 49,
            "MAG": 44,
            "DEF": 37,
            "MND": 37,
            "SPD": 64,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/42.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ノイズスクラッチ / 属性:地 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "121",
        "128",
        "129",
        "135",
        "163",
        "171",
        "173",
        "203",
        "204",
        "211",
        "212"
      ]
    },
    {
      "id": "107",
      "uid": "MSB-123",
      "name": "モブダンサー",
      "image": "figene/20.png",
      "rarity": "SR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 140,
      "def": 165,
      "tags": [
        "09",
        "43",
        "55",
        "57",
        "59"
      ],
      "soulSkill": {
        "name": "ダンスビート",
        "timing": "own-main",
        "effect": "相手1体のATK-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 57,
        "sourceText": "相手1体のATK-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "混乱耐性 +3%",
        "soul": {
          "text": "味方全体のSPDを2ターンの間10%アップし、会心率を5%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "混乱耐性 +3%",
          "accessorySkillName": "ダンスビート",
          "accessorySkillEffect": "味方全体のSPDを2ターンの間10%アップし、会心率を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ダンスビート",
              "effect": "センターフィギュアのSPDを30%アップし、ATKを10%アップする"
            },
            "5": {
              "name": "ダンスビート",
              "effect": "センターフィギュアのSPDを20%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 938,
            "ATK": 63,
            "MAG": 63,
            "DEF": 59,
            "MND": 59,
            "SPD": 86,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/45.png",
            "条件・補足": null,
            "技一覧": [
              "マグソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-123-normal-0",
          "target": "107",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-123-normal-1",
          "target": "107",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "57"
            }
          ],
          "label": "火属性 × 不気味なオーラタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "168",
        "169",
        "181",
        "209",
        "210",
        "214"
      ]
    },
    {
      "id": "108",
      "uid": "MSB-124",
      "name": "モブヌルブルー",
      "image": "figene/21.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 90,
      "def": 100,
      "tags": [
        "09",
        "31",
        "43"
      ],
      "soulSkill": {
        "name": "ヌルスライド",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 42,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "地属性耐性 +3%",
        "soul": {
          "text": "敵単体に水属性の物理小～中ダメージを2回に分けて与え、自分の会心率を2ターンの間5%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "地属性耐性 +3%",
          "accessorySkillName": "ヌルスライド",
          "accessorySkillEffect": "敵単体に水属性の物理小～中ダメージを2回に分けて与え、自分の会心率を2ターンの間5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヌルスライド",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "ヌルスライド",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 302,
            "ATK": 46,
            "MAG": 50,
            "DEF": 38,
            "MND": 38,
            "SPD": 62,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "魔法",
            "画像": "enemy/44.png",
            "条件・補足": null,
            "技一覧": [
              "ネプ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "チルローファイ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "109",
      "uid": "MSB-125",
      "name": "モブバイオリン",
      "image": "figene/22.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 170,
      "def": 190,
      "tags": [
        "09",
        "26",
        "37",
        "43",
        "57",
        "58",
        "60"
      ],
      "soulSkill": {
        "name": "バイオメロディ",
        "timing": "skill-response",
        "effect": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "timingLabel": "相手スキル発動時",
        "description": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "program": 14,
        "sourceText": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MND +3 & DEF +3",
        "traitText": "眠り耐性 +5%",
        "soul": {
          "text": "味方全体のATK・DEF・SPDを2ターンの間10%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "MND +3 & DEF +3",
          "trait": "眠り耐性 +5%",
          "accessorySkillName": "バイオメロディ",
          "accessorySkillEffect": "味方全体のATK・DEF・SPDを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 バイオメロディ",
              "effect": "敵全体のATKとDEFを9%ダウンさせる"
            },
            "5": {
              "name": "バイオメロディ",
              "effect": "敵全体のATKとDEFを6%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4490,
            "ATK": 191,
            "MAG": 210,
            "DEF": 184,
            "MND": 184,
            "SPD": 256,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "enemy/55.png",
            "条件・補足": null,
            "技一覧": [
              "ココロノスキマ / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-125-normal-0",
          "target": "109",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-125-normal-1",
          "target": "109",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "37"
            }
          ],
          "label": "闇属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "170",
        "216",
        "217",
        "218",
        "mq:eventfig/55",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "110",
      "uid": "MSB-126",
      "name": "モブラプチー",
      "image": "figene/23.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "水",
      "attackType": "複合",
      "role": "速度・回避",
      "atk": 170,
      "def": 180,
      "tags": [
        "09",
        "31",
        "32",
        "40",
        "43",
        "59",
        "60"
      ],
      "soulSkill": {
        "name": "ラプハント",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "program": 58,
        "sourceText": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "SPD +3 & DEF +3",
        "traitText": "魔法ダメージ軽減 +3%",
        "soul": {
          "text": "敵全体に水属性の物理小～中ダメージを与え、30%でひるませる。この攻撃はダメージ軽減を20%無視する"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "SPD +3 & DEF +3",
          "trait": "魔法ダメージ軽減 +3%",
          "accessorySkillName": "ラプハント",
          "accessorySkillEffect": "敵全体に水属性の物理小～中ダメージを与え、30%でひるませる。この攻撃はダメージ軽減を20%無視する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ラプハント",
              "effect": "敵全体のHPを6%ダウンさせ、SPDを8%ダウンさせる"
            },
            "5": {
              "name": "ラプハント",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4588,
            "ATK": 194,
            "MAG": 194,
            "DEF": 187,
            "MND": 187,
            "SPD": 280,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/57.png",
            "条件・補足": null,
            "技一覧": [
              "ジュラシックヤベージャンズ / 属性:水・火 / 攻撃区分:物理 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-126-normal-0",
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
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-126-normal-1",
          "target": "110",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "60"
            }
          ],
          "label": "水属性 × 遠距離攻撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "183",
        "213"
      ]
    },
    {
      "id": "111",
      "uid": "MSB-127",
      "name": "モブティラ",
      "image": "figene/24.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "連続攻撃",
      "atk": 170,
      "def": 180,
      "tags": [
        "03",
        "09",
        "32",
        "40",
        "43",
        "59",
        "60"
      ],
      "soulSkill": {
        "name": "ティラバイト",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたびATK+25（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたびATK+25（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "program": 46,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたびATK+25（累積）。攻撃対象変更・守護効果を無視して対象を選べる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +3 & MND +3",
        "traitText": "物理ダメージ軽減 +3%",
        "soul": {
          "text": "敵単体に無属性の物理中ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする。この攻撃はダメージ軽減を20%無視する"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "ATK +3 & MND +3",
          "trait": "物理ダメージ軽減 +3%",
          "accessorySkillName": "ティラバイト",
          "accessorySkillEffect": "敵単体に無属性の物理中ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする。この攻撃はダメージ軽減を20%無視する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ティラバイト",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "ティラバイト",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4955,
            "ATK": 213,
            "MAG": 194,
            "DEF": 187,
            "MND": 187,
            "SPD": 259,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/58.png",
            "条件・補足": null,
            "技一覧": [
              "ジュラシックヤベージャンズ / 属性:火・水 / 攻撃区分:物理 / 対象:個別処理",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-127-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-127-normal-1",
          "target": "111",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "60"
            }
          ],
          "label": "火属性 × 遠距離攻撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "168",
        "169",
        "181",
        "209",
        "210",
        "214"
      ]
    },
    {
      "id": "112",
      "uid": "MSB-128",
      "name": "モブクウカイ",
      "image": "figene/25.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 180,
      "def": 180,
      "tags": [
        "05",
        "09",
        "23",
        "26",
        "37",
        "43",
        "57"
      ],
      "soulSkill": {
        "name": "クウウェーブ",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 52,
        "sourceText": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MAG +3 & MND +3",
        "traitText": "全属性耐性 +3%",
        "soul": {
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "MAG +3 & MND +3",
          "trait": "全属性耐性 +3%",
          "accessorySkillName": "クウウェーブ",
          "accessorySkillEffect": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 クウウェーブ",
              "effect": "味方全体のATKを12%アップし、敵全体のHPを5%ダウンさせる"
            },
            "5": {
              "name": "クウウェーブ",
              "effect": "味方全体のATKを8%アップし、敵全体のHPを3%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4688,
            "ATK": 197,
            "MAG": 212,
            "DEF": 190,
            "MND": 190,
            "SPD": 263,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "enemy/59.png",
            "条件・補足": null,
            "技一覧": [
              "ヤマノタマシイ / 属性:火 / 攻撃区分:魔法 / 対象:個別処理",
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒",
              "ウォーターフリーズ / 属性:水 / 攻撃区分:魔法 / 対象:敵全体 / 状態異常:眠り"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-128-normal-0",
          "target": "112",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-128-normal-1",
          "target": "112",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "37"
            }
          ],
          "label": "闇属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "170",
        "216",
        "217",
        "218",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "113",
      "uid": "MSB-129",
      "name": "モブアクイ",
      "image": "figene/26.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 170,
      "def": 190,
      "tags": [
        "05",
        "09",
        "23",
        "26",
        "43",
        "50",
        "57"
      ],
      "soulSkill": {
        "name": "アクイニードル",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 52,
        "sourceText": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3 & MP+10",
        "traitText": "闇属性耐性 +5%",
        "soul": {
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "DEF +3 & MP+10",
          "trait": "闇属性耐性 +5%",
          "accessorySkillName": "アクイニードル",
          "accessorySkillEffect": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 アクイニードル",
              "effect": "センターの敵のDEFを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "アクイニードル",
              "effect": "センターの敵のDEFを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4588,
            "ATK": 194,
            "MAG": 209,
            "DEF": 187,
            "MND": 187,
            "SPD": 259,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "魔法",
            "画像": "enemy/60.png",
            "条件・補足": null,
            "技一覧": [
              "リピートイントロ / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:毒",
              "ミラマゾーン / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-129-normal-0",
          "target": "113",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-129-normal-1",
          "target": "113",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "57"
            }
          ],
          "label": "闇属性 × 不気味なオーラタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "170",
        "217",
        "218",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "114",
      "uid": "MSB-130",
      "name": "モブシツイ",
      "image": "figene/27.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 185,
      "def": 170,
      "tags": [
        "05",
        "09",
        "23",
        "26",
        "43",
        "50",
        "57"
      ],
      "soulSkill": {
        "name": "シツイレイン",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 52,
        "sourceText": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3 & MP+10",
        "traitText": "闇属性与ダメージ +3%",
        "soul": {
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "DEF +3 & MP+10",
          "trait": "闇属性与ダメージ +3%",
          "accessorySkillName": "シツイレイン",
          "accessorySkillEffect": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 シツイレイン",
              "effect": "センターの敵のDEFを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "シツイレイン",
              "effect": "センターの敵のDEFを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4588,
            "ATK": 194,
            "MAG": 194,
            "DEF": 187,
            "MND": 202,
            "SPD": 259,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "魔法",
            "画像": "enemy/61.png",
            "条件・補足": null,
            "技一覧": [
              "リピートイントロ / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:毒",
              "ミラマゾーン / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-130-normal-0",
          "target": "114",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-130-normal-1",
          "target": "114",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "57"
            }
          ],
          "label": "闇属性 × 不気味なオーラタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "170",
        "217",
        "218",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "115",
      "uid": "MSB-131",
      "name": "モブヤマイ",
      "image": "figene/28.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 180,
      "def": 180,
      "tags": [
        "05",
        "09",
        "23",
        "26",
        "43",
        "50",
        "57"
      ],
      "soulSkill": {
        "name": "ヤマイミスト",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 52,
        "sourceText": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3 & MP+10",
        "traitText": "闇属性魔法消費MP -10%",
        "soul": {
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "DEF +3 & MP+10",
          "trait": "闇属性魔法消費MP -10%",
          "accessorySkillName": "ヤマイミスト",
          "accessorySkillEffect": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヤマイミスト",
              "effect": "敵全体のSPDを15%ダウンさせ、HPを5%ダウンさせる"
            },
            "5": {
              "name": "ヤマイミスト",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4955,
            "ATK": 194,
            "MAG": 194,
            "DEF": 187,
            "MND": 187,
            "SPD": 259,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "魔法",
            "画像": "enemy/62.png",
            "条件・補足": null,
            "技一覧": [
              "リピートイントロ / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:毒",
              "ミラマゾーン / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-131-normal-0",
          "target": "115",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-131-normal-1",
          "target": "115",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "57"
            }
          ],
          "label": "闇属性 × 不気味なオーラタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "170",
        "217",
        "218",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "116",
      "uid": "MSB-132",
      "name": "モブネオントカゲ",
      "image": "figene/29.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 100,
      "def": 90,
      "tags": [
        "08",
        "09",
        "36",
        "44",
        "49"
      ],
      "soulSkill": {
        "name": "ネオンドリフト",
        "timing": "own-main",
        "effect": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。",
        "program": 35,
        "sourceText": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "会心率 +1%",
        "soul": {
          "text": "敵単体に無属性の物理小～中ダメージを与え、自分のSPDと回避率を2ターンの間10%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "会心率 +1%",
          "accessorySkillName": "ネオンドリフト",
          "accessorySkillEffect": "敵単体に無属性の物理小～中ダメージを与え、自分のSPDと回避率を2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ネオンドリフト",
              "effect": "敵全体のDEFを9%ダウンさせ、味方全体のSPDを10%アップする"
            },
            "5": {
              "name": "ネオンドリフト",
              "effect": "敵全体のDEFを6%ダウンさせ、味方全体のSPDを5%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 434,
            "ATK": 64,
            "MAG": 64,
            "DEF": 53,
            "MND": 53,
            "SPD": 97,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": "物理",
            "画像": "enemy/66.png",
            "条件・補足": null,
            "技一覧": [
              "ネオマソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理",
              "ノイズスクラッチ / 属性:光 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "121",
        "128",
        "129",
        "165",
        "173",
        "176",
        "180",
        "203",
        "205",
        "211",
        "212",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "117",
      "uid": "MSB-133",
      "name": "モブカイロ",
      "image": "figene/30.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "妨害",
      "atk": 110,
      "def": 90,
      "tags": [
        "05",
        "09",
        "34",
        "44"
      ],
      "soulSkill": {
        "name": "カイロトリック",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 29,
        "sourceText": "相手1体のDEF-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "会心率 +1%",
        "soul": {
          "text": "敵単体に無属性の物理小～中ダメージを与え、ATKを2ターンの間10%ダウンさせる"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "会心率 +1%",
          "accessorySkillName": "カイロトリック",
          "accessorySkillEffect": "敵単体に無属性の物理小～中ダメージを与え、ATKを2ターンの間10%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 カイロトリック",
              "effect": "正面の敵のATKを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "カイロトリック",
              "effect": "正面の敵のATKを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 417,
            "ATK": 62,
            "MAG": 62,
            "DEF": 57,
            "MND": 51,
            "SPD": 83,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/67.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ノイズスクラッチ / 属性:地 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "118",
      "uid": "MSB-134",
      "name": "モブバンケン",
      "image": "figene/31.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 90,
      "def": 100,
      "tags": [
        "09",
        "27",
        "33",
        "44"
      ],
      "soulSkill": {
        "name": "バンケンガード",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "program": 0,
        "sourceText": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "光属性耐性 +5%",
        "soul": {
          "text": "味方全体のHPを15%回復し、状態異常を1つ解除する"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "光属性耐性 +5%",
          "accessorySkillName": "バンケンガード",
          "accessorySkillEffect": "味方全体のHPを15%回復し、状態異常を1つ解除する",
          "mobPieceSkills": {
            "1": {
              "name": "0 バンケンガード",
              "effect": "味方全体のHPを15%アップし、DEFを5%アップする"
            },
            "5": {
              "name": "バンケンガード",
              "effect": "味方全体のHPを10%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 338,
            "ATK": 46,
            "MAG": 46,
            "DEF": 42,
            "MND": 38,
            "SPD": 62,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/47.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ノイズスクラッチ / 属性:地 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "119",
      "uid": "MSB-135",
      "name": "モブスラトレーナー",
      "image": "figene/32.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "水",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 180,
      "def": 170,
      "tags": [
        "02",
        "09",
        "17",
        "35",
        "44"
      ],
      "soulSkill": {
        "name": "スラトレーニング",
        "timing": "own-main",
        "effect": "このターンATK+30。相手の守護・攻撃対象変更効果を無視して攻撃対象を選べる。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+30。相手の守護・攻撃対象変更効果を無視して攻撃対象を選べる。",
        "program": 59,
        "sourceText": "このターンATK+30。相手の守護・攻撃対象変更効果を無視して攻撃対象を選べる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +3 & MP+10",
        "traitText": "会心率 +2%",
        "soul": {
          "text": "敵単体に無属性の物理中ダメージを与え、自分のATKを2ターンの間15%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "ATK +3 & MP+10",
          "trait": "会心率 +2%",
          "accessorySkillName": "スラトレーニング",
          "accessorySkillEffect": "敵単体に無属性の物理中ダメージを与え、自分のATKを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 スラトレーニング",
              "effect": "味方全体のATKを15%アップし、正面の敵のHPを7%ダウンさせる"
            },
            "5": {
              "name": "スラトレーニング",
              "effect": "味方全体のATKを10%アップし、正面の敵のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1368,
            "ATK": 161,
            "MAG": 161,
            "DEF": 136,
            "MND": 136,
            "SPD": 219,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/80.png",
            "条件・補足": null,
            "技一覧": [
              "スライムハンマー / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-135-normal-0",
          "target": "119",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-135-normal-1",
          "target": "119",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "17"
            }
          ],
          "label": "水属性 × スライムタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "183",
        "213"
      ]
    },
    {
      "id": "120",
      "uid": "MSB-136",
      "name": "モブエネチェイサー",
      "image": "figene/33.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "地",
      "attackType": "物理",
      "role": "妨害",
      "atk": 180,
      "def": 180,
      "tags": [
        "09",
        "29",
        "32",
        "35",
        "44"
      ],
      "soulSkill": {
        "name": "エネチェイス",
        "timing": "own-main",
        "effect": "相手1体のATK-30。次の相手ターン終了まで、そのフィギュアはフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-30。次の相手ターン終了まで、そのフィギュアはフュージョン素材にできない。",
        "program": 60,
        "sourceText": "相手1体のATK-30。次の相手ターン終了まで、そのフィギュアはフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3 & HP+10",
        "traitText": "命中率 +3%",
        "soul": {
          "text": "敵単体に闇属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "DEF +3 & HP+10",
          "trait": "命中率 +3%",
          "accessorySkillName": "エネチェイス",
          "accessorySkillEffect": "敵単体に闇属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 エネチェイス",
              "effect": "正面の敵1体のHPを10%ダウンさせ、DEFを10%ダウンさせる"
            },
            "5": {
              "name": "エネチェイス",
              "effect": "正面の敵1体のHPを7%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1368,
            "ATK": 161,
            "MAG": 161,
            "DEF": 136,
            "MND": 136,
            "SPD": 219,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/77.png",
            "条件・補足": null,
            "技一覧": [
              "ケーブルチェイス / 攻撃区分:物理 / 対象:敵全体",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-136-normal-0",
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
          "label": "地属性 × 地属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-136-normal-1",
          "target": "120",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "tag": "32"
            }
          ],
          "label": "地属性 × 立ちはだかる強敵タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "172",
        "174"
      ]
    },
    {
      "id": "121",
      "uid": "MSB-137",
      "name": "モブパレットレオン",
      "image": "figene/34.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "光",
      "attackType": "魔法",
      "role": "防御・守護",
      "atk": 170,
      "def": 185,
      "tags": [
        "08",
        "09",
        "36",
        "44",
        "49",
        "55",
        "59"
      ],
      "soulSkill": {
        "name": "パレットカモ",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 53,
        "sourceText": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "SPD +3 & MP+10",
        "traitText": "毒耐性 +10%",
        "soul": {
          "text": "味方全体のSPDを2ターンの間15%アップし、命中率を12%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "SPD +3 & MP+10",
          "trait": "毒耐性 +10%",
          "accessorySkillName": "パレットカモ",
          "accessorySkillEffect": "味方全体のSPDを2ターンの間15%アップし、命中率を12%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 パレットカモ",
              "effect": "敵全体のSPDを15%ダウンさせ、味方全体のSPDを8%アップする"
            },
            "5": {
              "name": "パレットカモ",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 5292,
            "ATK": 205,
            "MAG": 254,
            "DEF": 198,
            "MND": 233,
            "SPD": 291,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": "魔法",
            "画像": "enemy/82.png",
            "条件・補足": null,
            "技一覧": [
              "レインボーロード / 属性:光 / 攻撃区分:魔法 / 対象:個別処理",
              "ネオマニプール / 属性:光 / 攻撃区分:魔法 / 対象:個別処理",
              "スクラッチソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱",
              "ゴールドルーティーン / 属性:無 / 対象:味方全体 / 効果説明:味方全体のATKを15%アップ / 3ターン"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-137-normal-0",
          "target": "121",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 光属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-137-normal-1",
          "target": "121",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "tag": "49"
            }
          ],
          "label": "光属性 × 斬撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "170",
        "184",
        "213",
        "214",
        "216"
      ]
    },
    {
      "id": "122",
      "uid": "MSB-138",
      "name": "モブコドラ",
      "image": "figene/35.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 120,
      "def": 140,
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
        "effect": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。",
        "program": 10,
        "sourceText": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3 & HP+10",
        "traitText": "火属性耐性 +5%",
        "soul": {
          "text": "敵単体に火属性の魔法中ダメージを与え、35%でやけどにする"
        },
        "decision": "MOB STORYでコレクション。基本個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +3 & HP+10",
          "trait": "火属性耐性 +5%",
          "accessorySkillName": "コドラファイヤ",
          "accessorySkillEffect": "敵単体に火属性の魔法中ダメージを与え、35%でやけどにする",
          "mobPieceSkills": {
            "1": {
              "name": "0 コドラファイヤ",
              "effect": "正面の敵のHPを10%ダウンさせ、ATKを8%ダウンさせる"
            },
            "5": {
              "name": "コドラファイヤ",
              "effect": "正面の敵のHPを7%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "MOB STORYでコレクション。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "123",
      "uid": "MSB-139",
      "name": "モブネオクマ",
      "image": "figene/36.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "妨害",
      "atk": 130,
      "def": 135,
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
        "effect": "相手1体のATK-20。次の相手ターン終了まで、そのフィギュアはフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン終了まで、そのフィギュアはフュージョン素材にできない。",
        "program": 61,
        "sourceText": "相手1体のATK-20。次の相手ターン終了まで、そのフィギュアはフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +3 & MP+10",
        "traitText": "火属性耐性 +3%",
        "soul": {
          "text": "敵単体に無属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "decision": "MOB STORYでコレクション。基本個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +3 & MP+10",
          "trait": "火属性耐性 +3%",
          "accessorySkillName": "クマプレス",
          "accessorySkillEffect": "敵単体に無属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 クマプレス",
              "effect": "正面の敵のHPを10%ダウンさせ、DEFを8%ダウンさせる"
            },
            "5": {
              "name": "クマプレス",
              "effect": "正面の敵のHPを7%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "MOB STORYでコレクション。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "124",
      "uid": "MSB-140",
      "name": "モブジンベエ",
      "image": "figene/37.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 100,
      "def": 90,
      "tags": [
        "09",
        "31",
        "36",
        "45",
        "49"
      ],
      "soulSkill": {
        "name": "ジンベエラッシュ",
        "timing": "own-main",
        "effect": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。",
        "program": 35,
        "sourceText": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "text": "敵単体に水属性の物理小～中ダメージを与え、自分の会心率を2ターンの間8%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +3",
          "trait": "水属性耐性 +3%",
          "accessorySkillName": "ジンベエラッシュ",
          "accessorySkillEffect": "敵単体に水属性の物理小～中ダメージを与え、自分の会心率を2ターンの間8%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ジンベエラッシュ",
              "effect": "味方全体のATKを15%アップし、正面の敵のHPを7%ダウンさせる"
            },
            "5": {
              "name": "ジンベエラッシュ",
              "effect": "味方全体のATKを10%アップし、正面の敵のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 833,
            "ATK": 97,
            "MAG": 97,
            "DEF": 81,
            "MND": 81,
            "SPD": 122,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/108.png",
            "条件・補足": null,
            "技一覧": [
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "121",
        "128",
        "129",
        "130",
        "144",
        "146",
        "173",
        "179",
        "203",
        "211",
        "212",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "125",
      "uid": "MSB-141",
      "name": "モブネッシー",
      "image": "figene/38.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 90,
      "def": 100,
      "tags": [
        "09",
        "31",
        "39",
        "45",
        "51"
      ],
      "soulSkill": {
        "name": "ネッシーダイブ",
        "timing": "own-main",
        "effect": "相手フィールド全体のATKを-10。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のATKを-10。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 36,
        "sourceText": "相手フィールド全体のATKを-10。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "text": "敵全体に水属性の物理小～中ダメージを与え、自分の回避率を2ターンの間10%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "水属性耐性 +3%",
          "accessorySkillName": "ネッシーダイブ",
          "accessorySkillEffect": "敵全体に水属性の物理小～中ダメージを与え、自分の回避率を2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ネッシーダイブ",
              "effect": "敵全体のSPDを12%ダウンさせ、味方全体のSPDを5%アップする"
            },
            "5": {
              "name": "ネッシーダイブ",
              "effect": "敵全体のSPDを8%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 804,
            "ATK": 97,
            "MAG": 97,
            "DEF": 81,
            "MND": 81,
            "SPD": 132,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/107.png",
            "条件・補足": null,
            "技一覧": [
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "135",
        "139",
        "144",
        "146",
        "147",
        "163",
        "166",
        "175",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/20",
        "mq:eventfig/43",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "126",
      "uid": "MSB-142",
      "name": "モブバブルドクター",
      "image": "figene/39.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "魔法",
      "role": "回復・支援",
      "atk": 90,
      "def": 100,
      "tags": [
        "09",
        "31",
        "36",
        "40",
        "45"
      ],
      "soulSkill": {
        "name": "バブルケア",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "program": 11,
        "sourceText": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "text": "味方全体のHPを15%回復し、状態異常を1つ解除する。さらにDEFを2ターンの間10%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "水属性耐性 +3%",
          "accessorySkillName": "バブルケア",
          "accessorySkillEffect": "味方全体のHPを15%回復し、状態異常を1つ解除する。さらにDEFを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 バブルケア",
              "effect": "敵全体のATKを9%ダウンさせ、味方全体のDEFを8%アップする"
            },
            "5": {
              "name": "バブルケア",
              "effect": "敵全体のATKを6%ダウンさせ、味方全体のDEFを4%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 718,
            "ATK": 97,
            "MAG": 107,
            "DEF": 81,
            "MND": 90,
            "SPD": 132,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "魔法",
            "画像": "enemy/109.png",
            "条件・補足": null,
            "技一覧": [
              "キャンディネオン / 属性:無 / 攻撃区分:魔法 / 対象:個別処理",
              "ネプマ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "スターマシュマロ / 属性:無 / 対象:味方全体 / 効果説明:味方全体を小回復"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "127",
      "uid": "MSB-143",
      "name": "モブシーガード",
      "image": "figene/40.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 90,
      "def": 100,
      "tags": [
        "09",
        "28",
        "31",
        "40",
        "45"
      ],
      "soulSkill": {
        "name": "シーウォール",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+30。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+30。",
        "program": 20,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+30。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "text": "自分のDEFを2ターンの間45%アップし、物理ダメージ軽減を10%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "水属性耐性 +3%",
          "accessorySkillName": "シーウォール",
          "accessorySkillEffect": "自分のDEFを2ターンの間45%アップし、物理ダメージ軽減を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 シーウォール",
              "effect": "敵全体のATKを15%ダウンさせ、味方全体のDEFを8%アップする"
            },
            "5": {
              "name": "シーウォール",
              "effect": "敵全体のATKを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 718,
            "ATK": 97,
            "MAG": 97,
            "DEF": 90,
            "MND": 81,
            "SPD": 132,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/104.png",
            "条件・補足": null,
            "技一覧": [
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "128",
      "uid": "MSB-144",
      "name": "モブアビスナイト",
      "image": "figene/41.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "水",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 180,
      "def": 170,
      "tags": [
        "09",
        "31",
        "36",
        "40",
        "45",
        "49"
      ],
      "soulSkill": {
        "name": "アビスランス",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。このターンATK=DEFでもその相手を撃破できる。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。このターンATK=DEFでもその相手を撃破できる。",
        "program": 49,
        "sourceText": "相手1体のDEF-30。このターンATK=DEFでもその相手を撃破できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +3 DEF +3",
        "traitText": "水属性与ダメージ +5%",
        "soul": {
          "text": "敵単体に水属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "ATK +3 DEF +3",
          "trait": "水属性与ダメージ +5%",
          "accessorySkillName": "アビスランス",
          "accessorySkillEffect": "敵単体に水属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 アビスランス",
              "effect": "正面の敵のATKを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "アビスランス",
              "effect": "正面の敵のATKを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 2576,
            "ATK": 131,
            "MAG": 131,
            "DEF": 126,
            "MND": 126,
            "SPD": 174,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/117.png",
            "条件・補足": null,
            "技一覧": [
              "アビススクリュー / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り",
              "ウォータースパイラル / 属性:水 / 攻撃区分:物理 / 対象:敵全体"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-144-normal-0",
          "target": "128",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-144-normal-1",
          "target": "128",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "49"
            }
          ],
          "label": "水属性 × 斬撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "183",
        "213",
        "214"
      ]
    },
    {
      "id": "129",
      "uid": "MSB-145",
      "name": "モブジョーンズ",
      "image": "figene/42.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "水",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 230,
      "def": 200,
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
      "soulSkill": {
        "name": "ジョーズハント",
        "timing": "own-main",
        "effect": "相手1体を選ぶ。そのフィギュアは次のバトルフェイズで最後にしか攻撃できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体を選ぶ。そのフィギュアは次のバトルフェイズで最後にしか攻撃できない。",
        "program": 28,
        "sourceText": "相手1体を選ぶ。そのフィギュアは次のバトルフェイズで最後にしか攻撃できない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "ATK +5 DEF +3",
        "traitText": "水属性与ダメージ +5%",
        "soul": {
          "text": "味方全体のSPDを2ターンの間20%アップし、会心率を8%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "ATK +5 DEF +3",
          "trait": "水属性与ダメージ +5%",
          "accessorySkillName": "ジョーズハント",
          "accessorySkillEffect": "味方全体のSPDを2ターンの間20%アップし、会心率を8%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ジョーズハント",
              "effect": "センターフィギュアのSPDを30%アップし、ATKを10%アップする"
            },
            "5": {
              "name": "ジョーズハント",
              "effect": "センターフィギュアのSPDを20%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 2730,
            "ATK": 137,
            "MAG": 137,
            "DEF": 131,
            "MND": 131,
            "SPD": 181,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/118.png",
            "条件・補足": null,
            "技一覧": [
              "ウェーブショック / 属性:水 / 攻撃区分:魔法 / 対象:敵全体",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り",
              "海の戦士 / 属性:水 / 攻撃区分:物理 / 対象:敵全体"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-145-normal-0",
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
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-145-normal-1",
          "target": "129",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "49"
            }
          ],
          "label": "水属性 × 斬撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "183",
        "213",
        "214"
      ]
    },
    {
      "id": "130",
      "uid": "MSB-146",
      "name": "モブウェイブ",
      "image": "figene/43.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "水",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 220,
      "def": 200,
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
      "soulSkill": {
        "name": "ウェイブクラッシュ",
        "timing": "own-main",
        "effect": "このターンに行う次のソウルフュージョンで召喚したフィギュアのDEF+30。",
        "timingLabel": "自分メイン",
        "description": "このターンに行う次のソウルフュージョンで召喚したフィギュアのDEF+30。",
        "program": 62,
        "sourceText": "このターンに行う次のソウルフュージョンで召喚したフィギュアのDEF+30。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "MAG +5 MND +5",
        "traitText": "水属性魔法与ダメージ +10%",
        "soul": {
          "text": "敵単体に水属性の魔法中～大ダメージを与える。SPDを2ターンの間20%ダウンさせる"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "MAG +5 MND +5",
          "trait": "水属性魔法与ダメージ +10%",
          "accessorySkillName": "ウェイブクラッシュ",
          "accessorySkillEffect": "敵単体に水属性の魔法中～大ダメージを与える。SPDを2ターンの間20%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ウェイブクラッシュ",
              "effect": "センターの敵のDEFを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "ウェイブクラッシュ",
              "effect": "センターの敵のDEFを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 2888,
            "ATK": 142,
            "MAG": 142,
            "DEF": 136,
            "MND": 136,
            "SPD": 188,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/120.png",
            "条件・補足": null,
            "技一覧": [
              "ウォーターグラビディ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り",
              "ウォーターフリーズ / 属性:水 / 攻撃区分:魔法 / 対象:敵全体 / 状態異常:眠り",
              "コンフューズウェイブ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-146-normal-0",
          "target": "130",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-146-normal-1",
          "target": "130",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "37"
            }
          ],
          "label": "水属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "170",
        "183",
        "213",
        "216",
        "218"
      ]
    },
    {
      "id": "132",
      "uid": "MSB-147",
      "name": "モブウォリアー",
      "image": "figene/45.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "魔法",
      "role": "全体攻撃",
      "atk": 105,
      "def": 90,
      "tags": [
        "09",
        "37",
        "46",
        "49",
        "57"
      ],
      "soulSkill": {
        "name": "アースブレイク",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 37,
        "sourceText": "相手フィールド全体のDEF-20。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "MAG +3",
        "traitText": "地属性魔法与ダメージ +3%",
        "soul": {
          "text": "敵全体に地属性の魔法小ダメージを与える。30%でひるみにする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "MAG +3",
          "trait": "地属性魔法与ダメージ +3%",
          "accessorySkillName": "アースブレイク",
          "accessorySkillEffect": "敵全体に地属性の魔法小ダメージを与える。30%でひるみにする",
          "mobPieceSkills": {
            "1": {
              "name": "0 アースブレイク",
              "effect": "敵全体のHPを6%ダウンさせ、ATKを8%ダウンさせる"
            },
            "5": {
              "name": "アースブレイク",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1363,
            "ATK": 149,
            "MAG": 138,
            "DEF": 137,
            "MND": 116,
            "SPD": 177,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/123.png",
            "条件・補足": null,
            "技一覧": [
              "カッチンドラム / 属性:地 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "99",
        "100",
        "103",
        "107",
        "109",
        "112",
        "113",
        "114",
        "115",
        "120",
        "121",
        "128",
        "129",
        "130",
        "134",
        "135",
        "136",
        "142",
        "143",
        "144",
        "157",
        "158",
        "161",
        "163",
        "171",
        "173",
        "176",
        "177",
        "178",
        "179",
        "180",
        "203",
        "204",
        "205",
        "206",
        "207",
        "211",
        "212",
        "215",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "133",
      "uid": "MSB-148",
      "name": "モブキバ",
      "image": "figene/46.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 100,
      "def": 90,
      "tags": [
        "07",
        "09",
        "26",
        "46",
        "57"
      ],
      "soulSkill": {
        "name": "キバラッシュ",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 42,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "地属性物理与ダメージ +3%",
        "soul": {
          "text": "敵単体に地属性の物理小～中ダメージを2回に分けて与え、自分の会心率を2ターンの間5%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "地属性物理与ダメージ +3%",
          "accessorySkillName": "キバラッシュ",
          "accessorySkillEffect": "敵単体に地属性の物理小～中ダメージを2回に分けて与え、自分の会心率を2ターンの間5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 キバラッシュ",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "キバラッシュ",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1207,
            "ATK": 154,
            "MAG": 138,
            "DEF": 116,
            "MND": 116,
            "SPD": 222,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/124.png",
            "条件・補足": null,
            "技一覧": [
              "ツインバイト / 属性:地 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "100",
        "107",
        "113",
        "114",
        "115",
        "120",
        "134",
        "135",
        "144",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "134",
      "uid": "MSB-149",
      "name": "モブククリ",
      "image": "figene/47.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "風",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 180,
      "def": 180,
      "tags": [
        "02",
        "09",
        "26",
        "32",
        "46",
        "57",
        "59"
      ],
      "soulSkill": {
        "name": "ククリスピン",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 53,
        "sourceText": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "SPD +3",
        "traitText": "毒耐性 +10%",
        "soul": {
          "text": "敵単体に闇属性の物理中ダメージを与え、自分のATKを2ターンの間15%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "毒耐性 +10%",
          "accessorySkillName": "ククリスピン",
          "accessorySkillEffect": "敵単体に闇属性の物理中ダメージを与え、自分のATKを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ククリスピン",
              "effect": "味方全体のATKを15%アップし、正面の敵のHPを7%ダウンさせる"
            },
            "5": {
              "name": "ククリスピン",
              "effect": "味方全体のATKを10%アップし、正面の敵のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 3920,
            "ATK": 195,
            "MAG": 175,
            "DEF": 161,
            "MND": 168,
            "SPD": 284,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0.1,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": "物理",
            "画像": "enemy/125.png",
            "条件・補足": null,
            "技一覧": [
              "モリカリブーメラン / 属性:風 / 攻撃区分:物理 / 対象:敵全体",
              "疾風斬り / 属性:風 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:風 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-149-normal-0",
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
          "label": "風属性 × 風属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-149-normal-1",
          "target": "134",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "tag": "57"
            }
          ],
          "label": "風属性 × 不気味なオーラタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "160",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "135",
      "uid": "MSB-150",
      "name": "モブタフネス",
      "image": "figene/48.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "地",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 200,
      "def": 220,
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
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+50。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+50。差分ライフダメージは0。",
        "program": 63,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+50。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "HP +15",
        "traitText": "物理ダメージ軽減 +3%",
        "soul": {
          "text": "味方全体のDEFとMNDを2ターンの間20%アップし、状態異常耐性を30%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "HP +15",
          "trait": "物理ダメージ軽減 +3%",
          "accessorySkillName": "タフガード",
          "accessorySkillEffect": "味方全体のDEFとMNDを2ターンの間20%アップし、状態異常耐性を30%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 タフガード",
              "effect": "センターフィギュアのDEFを30%アップし、HPを15%アップする"
            },
            "5": {
              "name": "タフガード",
              "effect": "センターフィギュアのDEFを20%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 5017,
            "ATK": 189,
            "MAG": 175,
            "DEF": 212,
            "MND": 168,
            "SPD": 186,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/126.png",
            "条件・補足": null,
            "技一覧": [
              "パワーコントロール / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-150-normal-0",
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
          "label": "地属性 × 地属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-150-normal-1",
          "target": "135",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "tag": "39"
            }
          ],
          "label": "地属性 × 鉄壁タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "172",
        "174"
      ]
    },
    {
      "id": "136",
      "uid": "MSB-151",
      "name": "モブヒスイ",
      "image": "figene/49.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "防御・守護",
      "atk": 170,
      "def": 180,
      "tags": [
        "05",
        "09",
        "26",
        "32",
        "37",
        "46",
        "57"
      ],
      "soulSkill": {
        "name": "ヒスイバリア",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 64,
        "sourceText": "相手1体のDEF-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MP +10",
        "traitText": "魔法ダメージ軽減 +3%",
        "soul": {
          "text": "味方全体のDEFとMNDを2ターンの間20%アップし、魔法ダメージ軽減を5%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "MP +10",
          "trait": "魔法ダメージ軽減 +3%",
          "accessorySkillName": "ヒスイバリア",
          "accessorySkillEffect": "味方全体のDEFとMNDを2ターンの間20%アップし、魔法ダメージ軽減を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヒスイバリア",
              "effect": "味方全体のDEFを15%アップし、HPを5%アップする"
            },
            "5": {
              "name": "ヒスイバリア",
              "effect": "味方全体のDEFを10%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4233,
            "ATK": 175,
            "MAG": 216,
            "DEF": 168,
            "MND": 205,
            "SPD": 247,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "魔法",
            "画像": "enemy/127.png",
            "条件・補足": null,
            "技一覧": [
              "マイナスオーラ / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "ミラマゾーン / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-151-normal-0",
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
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-151-normal-1",
          "target": "136",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "37"
            }
          ],
          "label": "闇属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "170",
        "216",
        "217",
        "218",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "137",
      "uid": "MSB-152",
      "name": "モブリュウゴウ",
      "image": "figene/50.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 190,
      "def": 170,
      "tags": [
        "09",
        "26",
        "32",
        "38",
        "46",
        "49",
        "57"
      ],
      "soulSkill": {
        "name": "リュウパンチ",
        "timing": "own-main",
        "effect": "このターンATK+30。相手のDEF上昇効果を無視し、撃破時の差分ライフダメージ+10。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+30。相手のDEF上昇効果を無視し、撃破時の差分ライフダメージ+10。",
        "program": 65,
        "sourceText": "このターンATK+30。相手のDEF上昇効果を無視し、撃破時の差分ライフダメージ+10。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +5",
        "traitText": "火属性与ダメージ +5%",
        "soul": {
          "text": "敵単体に火属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "ATK +5",
          "trait": "火属性与ダメージ +5%",
          "accessorySkillName": "リュウパンチ",
          "accessorySkillEffect": "敵単体に火属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 リュウパンチ",
              "effect": "正面の敵1体のHPを10%ダウンさせ、DEFを10%ダウンさせる"
            },
            "5": {
              "name": "リュウパンチ",
              "effect": "正面の敵1体のHPを7%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4311,
            "ATK": 216,
            "MAG": 175,
            "DEF": 168,
            "MND": 168,
            "SPD": 261,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/128.png",
            "条件・補足": null,
            "技一覧": [
              "リュウノボリ / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-152-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-152-normal-1",
          "target": "137",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "38"
            }
          ],
          "label": "火属性 × ドラゴンタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "168",
        "169",
        "181",
        "209",
        "210",
        "213",
        "214"
      ]
    },
    {
      "id": "138",
      "uid": "MSB-153",
      "name": "モブマグトカゲ",
      "image": "figene/51.png",
      "rarity": "SR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 165,
      "def": 140,
      "tags": [
        "03",
        "09",
        "38",
        "47",
        "49"
      ],
      "soulSkill": {
        "name": "マグテイル",
        "timing": "own-main",
        "effect": "このターンATK+30。相手のDEF上昇効果を無視し、撃破時の差分ライフダメージ+10。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+30。相手のDEF上昇効果を無視し、撃破時の差分ライフダメージ+10。",
        "program": 65,
        "sourceText": "このターンATK+30。相手のDEF上昇効果を無視し、撃破時の差分ライフダメージ+10。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "火属性与ダメージ +3%",
        "soul": {
          "text": "敵単体に火属性の物理小～中ダメージを与え、自分の会心率を2ターンの間8%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "ATK +3",
          "trait": "火属性与ダメージ +3%",
          "accessorySkillName": "マグテイル",
          "accessorySkillEffect": "敵単体に火属性の物理小～中ダメージを与え、自分の会心率を2ターンの間8%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 マグテイル",
              "effect": "正面の敵1体のHPを10%ダウンさせ、DEFを10%ダウンさせる"
            },
            "5": {
              "name": "マグテイル",
              "effect": "正面の敵1体のHPを7%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 638,
            "ATK": 88,
            "MAG": 88,
            "DEF": 74,
            "MND": 74,
            "SPD": 134,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/89.png",
            "条件・補足": null,
            "技一覧": [
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビート / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど",
              "マグソード / 属性:火 / 対象:個別処理 / 効果説明:火属性 / 小ダメージ",
              "ホノ / 属性:火 / 対象:敵単体 / 効果説明:敵単体に火属性小ダメージ",
              "ホノマ / 属性:火 / 対象:敵単体 / 効果説明:敵単体に火属性中ダメージ",
              "ホノマグマ / 属性:火 / 対象:敵単体 / 効果説明:敵単体に火属性大ダメージ"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-153-normal-0",
          "target": "138",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-153-normal-1",
          "target": "138",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "38"
            }
          ],
          "label": "火属性 × ドラゴンタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "168",
        "169",
        "181",
        "209",
        "210",
        "213",
        "214"
      ]
    },
    {
      "id": "139",
      "uid": "MSB-154",
      "name": "モブヒートロック",
      "image": "figene/52.png",
      "rarity": "SR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 140,
      "def": 170,
      "tags": [
        "03",
        "09",
        "39",
        "47"
      ],
      "soulSkill": {
        "name": "ヒートパンチ",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+50。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+50。差分ライフダメージは0。",
        "program": 63,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+50。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "火属性ダメージ軽減 +3%",
        "soul": {
          "text": "敵単体に火属性の物理小～中ダメージを与え、自分のDEFを2ターンの間15%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "火属性ダメージ軽減 +3%",
          "accessorySkillName": "ヒートパンチ",
          "accessorySkillEffect": "敵単体に火属性の物理小～中ダメージを与え、自分のDEFを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヒートパンチ",
              "effect": "正面の敵のHPを10%ダウンさせ、DEFを5%ダウンさせる"
            },
            "5": {
              "name": "ヒートパンチ",
              "effect": "正面の敵のHPを7%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 740,
            "ATK": 88,
            "MAG": 88,
            "DEF": 86,
            "MND": 74,
            "SPD": 101,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/90.png",
            "条件・補足": null,
            "技一覧": [
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビート / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-154-normal-0",
          "target": "139",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-154-normal-1",
          "target": "139",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "39"
            }
          ],
          "label": "火属性 × 鉄壁タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "168",
        "169",
        "181",
        "209",
        "210",
        "214"
      ]
    },
    {
      "id": "140",
      "uid": "MSB-155",
      "name": "モブヒノデビ",
      "image": "figene/53.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 90,
      "def": 100,
      "tags": [
        "03",
        "09",
        "47",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "ヒノステップ",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "program": 16,
        "sourceText": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "回避率 +1%",
        "soul": {
          "text": "自分のSPDと回避率を2ターンの間20%アップし、火属性与ダメージを10%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "回避率 +1%",
          "accessorySkillName": "ヒノステップ",
          "accessorySkillEffect": "自分のSPDと回避率を2ターンの間20%アップし、火属性与ダメージを10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヒノステップ",
              "effect": "味方全体のSPDを15%アップし、ATKを5%アップする"
            },
            "5": {
              "name": "ヒノステップ",
              "effect": "味方全体のSPDを10%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 580,
            "ATK": 82,
            "MAG": 88,
            "DEF": 68,
            "MND": 68,
            "SPD": 111,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "魔法",
            "画像": "enemy/88.png",
            "条件・補足": null,
            "技一覧": [
              "ホノマ / 属性:火 / 攻撃区分:魔法 / 対象:個別処理",
              "ホノマグマ / 属性:火 / 攻撃区分:魔法 / 対象:個別処理",
              "ファストビート / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "110",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "141",
      "uid": "MSB-156",
      "name": "モブボムスロー",
      "image": "figene/54.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "妨害",
      "atk": 100,
      "def": 90,
      "tags": [
        "03",
        "09",
        "35",
        "47",
        "60"
      ],
      "soulSkill": {
        "name": "ボムアーチ",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "program": 16,
        "sourceText": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "火属性与ダメージ +3%",
        "soul": {
          "text": "敵単体に火属性の物理小～中ダメージを与え、DEFを2ターンの間10%ダウンさせる。この攻撃はダメージ軽減を20%無視する"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +3",
          "trait": "火属性与ダメージ +3%",
          "accessorySkillName": "ボムアーチ",
          "accessorySkillEffect": "敵単体に火属性の物理小～中ダメージを与え、DEFを2ターンの間10%ダウンさせる。この攻撃はダメージ軽減を20%無視する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ボムアーチ",
              "effect": "敵全体のHPを6%ダウンさせ、SPDを8%ダウンさせる"
            },
            "5": {
              "name": "ボムアーチ",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 638,
            "ATK": 88,
            "MAG": 88,
            "DEF": 74,
            "MND": 74,
            "SPD": 120,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "魔法",
            "画像": "enemy/91.png",
            "条件・補足": null,
            "技一覧": [
              "クラッシュボム / 属性:無 / 攻撃区分:魔法 / 対象:敵全体",
              "ホノマ / 属性:火 / 攻撃区分:魔法 / 対象:個別処理",
              "ホノマグマ / 属性:火 / 攻撃区分:魔法 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "110",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "142",
      "uid": "MSB-157",
      "name": "モブホノテイル",
      "image": "figene/55.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 190,
      "def": 170,
      "tags": [
        "03",
        "09",
        "27",
        "37",
        "47"
      ],
      "soulSkill": {
        "name": "ホノスピン",
        "timing": "own-main",
        "effect": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。",
        "timingLabel": "自分メイン",
        "description": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。 このスキル使用後も、このターンはフュージョン素材にできる。",
        "program": 55,
        "sourceText": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +5",
        "traitText": "火属性与ダメージ +5%",
        "soul": {
          "text": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "ATK +5",
          "trait": "火属性与ダメージ +5%",
          "accessorySkillName": "ホノスピン",
          "accessorySkillEffect": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ホノスピン",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "ホノスピン",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1446,
            "ATK": 168,
            "MAG": 168,
            "DEF": 142,
            "MND": 142,
            "SPD": 247,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/100.png",
            "条件・補足": null,
            "技一覧": [
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビート / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-157-normal-0",
          "target": "142",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-157-normal-1",
          "target": "142",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "37"
            }
          ],
          "label": "火属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "168",
        "169",
        "170",
        "181",
        "209",
        "210",
        "214",
        "216",
        "218"
      ]
    },
    {
      "id": "143",
      "uid": "MSB-158",
      "name": "モブヒノタビ",
      "image": "figene/56.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 185,
      "def": 170,
      "tags": [
        "03",
        "09",
        "32",
        "37",
        "47",
        "60"
      ],
      "soulSkill": {
        "name": "ヒノリング",
        "timing": "own-main",
        "effect": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。",
        "timingLabel": "自分メイン",
        "description": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。 このスキル使用後も、このターンはフュージョン素材にできる。",
        "program": 55,
        "sourceText": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MAG +5",
        "traitText": "火属性魔法与ダメージ +10%",
        "soul": {
          "text": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "MAG +5",
          "trait": "火属性魔法与ダメージ +10%",
          "accessorySkillName": "ヒノリング",
          "accessorySkillEffect": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヒノリング",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "ヒノリング",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1446,
            "ATK": 168,
            "MAG": 168,
            "DEF": 142,
            "MND": 142,
            "SPD": 229,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/99.png",
            "条件・補足": null,
            "技一覧": [
              "フレイムマジック / 属性:火 / 攻撃区分:魔法 / 対象:敵全体",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど",
              "ショウガエントリー / 属性:無 / 対象:味方単体 / 効果説明:味方単体のATKを10%アップ / 3ターン"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-158-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-158-normal-1",
          "target": "143",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "37"
            }
          ],
          "label": "火属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "168",
        "169",
        "170",
        "181",
        "209",
        "210",
        "214",
        "216",
        "218"
      ]
    },
    {
      "id": "144",
      "uid": "MSB-159",
      "name": "モブブリザード",
      "image": "figene/57.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "水",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 170,
      "def": 180,
      "tags": [
        "09",
        "31",
        "32",
        "36",
        "40",
        "47",
        "57"
      ],
      "soulSkill": {
        "name": "ブリザガード",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-20。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-20。",
        "program": 66,
        "sourceText": "相手フィールド全体のDEF-20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "水属性ダメージ軽減 +5%",
        "soul": {
          "text": "味方全体のDEFとMNDを2ターンの間20%アップし、火属性ダメージ軽減を10%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "DEF +5",
          "trait": "水属性ダメージ軽減 +5%",
          "accessorySkillName": "ブリザガード",
          "accessorySkillEffect": "味方全体のDEFとMNDを2ターンの間20%アップし、火属性ダメージ軽減を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ブリザガード",
              "effect": "味方全体のDEFを15%アップし、HPを8%アップする"
            },
            "5": {
              "name": "ブリザガード",
              "effect": "味方全体のDEFを10%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1420,
            "ATK": 165,
            "MAG": 165,
            "DEF": 140,
            "MND": 140,
            "SPD": 225,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/101.png",
            "条件・補足": null,
            "技一覧": [
              "ブリザードフラッシュ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-159-normal-0",
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
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-159-normal-1",
          "target": "144",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "57"
            }
          ],
          "label": "水属性 × 不気味なオーラタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "183",
        "213"
      ]
    },
    {
      "id": "145",
      "uid": "MSB-160",
      "name": "モブフレイム",
      "image": "figene/58.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "妨害",
      "atk": 180,
      "def": 170,
      "tags": [
        "03",
        "09",
        "32",
        "36",
        "40",
        "47",
        "56"
      ],
      "soulSkill": {
        "name": "フレイムダッシュ",
        "timing": "own-main",
        "effect": "相手1体のATK-30。次にそのフィギュアが攻撃するまでDEFも-20。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-30。次にそのフィギュアが攻撃するまでDEFも-20。",
        "program": 67,
        "sourceText": "相手1体のATK-30。次にそのフィギュアが攻撃するまでDEFも-20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +5",
        "traitText": "火属性与ダメージ +5%",
        "soul": {
          "text": "敵単体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "ATK +5",
          "trait": "火属性与ダメージ +5%",
          "accessorySkillName": "フレイムダッシュ",
          "accessorySkillEffect": "敵単体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 フレイムダッシュ",
              "effect": "正面の敵1体のHPを10%ダウンさせ、DEFを10%ダウンさせる"
            },
            "5": {
              "name": "フレイムダッシュ",
              "effect": "正面の敵1体のHPを7%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1420,
            "ATK": 165,
            "MAG": 165,
            "DEF": 140,
            "MND": 140,
            "SPD": 225,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/102.png",
            "条件・補足": null,
            "技一覧": [
              "フレイムフラッシュ / 属性:火 / 攻撃区分:魔法 / 対象:敵全体",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-160-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-160-normal-1",
          "target": "145",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "56"
            }
          ],
          "label": "火属性 × 火炎タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "168",
        "169",
        "181",
        "209",
        "210",
        "214"
      ]
    },
    {
      "id": "146",
      "uid": "MSB-161",
      "name": "モブフレザード",
      "image": "figene/59.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "水/火",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 225,
      "def": 200,
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
      "soulSkill": {
        "name": "フレアイス",
        "timing": "own-main",
        "effect": "このターン相手フィールド全員へ1回ずつ攻撃できる。1体撃破するたび、残っている相手全体のDEF-10。",
        "timingLabel": "自分メイン",
        "description": "このターン相手フィールド全員へ1回ずつ攻撃できる。1体撃破するたび、残っている相手全体のDEF-10。",
        "program": 68,
        "sourceText": "このターン相手フィールド全員へ1回ずつ攻撃できる。1体撃破するたび、残っている相手全体のDEF-10。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "ATK +3 & DEF +3%",
        "traitText": "火属性と水属性の与ダメージ +3%",
        "soul": {
          "text": "敵全体に火属性と水属性の魔法中ダメージを与え、ATKとSPDを2ターンの間10%ダウンさせる"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "ATK +3 & DEF +3%",
          "trait": "火属性と水属性の与ダメージ +3%",
          "accessorySkillName": "フレアイス",
          "accessorySkillEffect": "敵全体に火属性と水属性の魔法中ダメージを与え、ATKとSPDを2ターンの間10%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 フレアイス",
              "effect": "敵全体のATKとSPDを9%ダウンさせる"
            },
            "5": {
              "name": "フレアイス",
              "effect": "敵全体のATKとSPDを6%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 2781,
            "ATK": 130,
            "MAG": 133,
            "DEF": 115,
            "MND": 115,
            "SPD": 159,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": null,
            "属性": "水・火",
            "通常攻撃区分": "物理",
            "画像": "enemy/103.png",
            "条件・補足": null,
            "技一覧": [
              "ブリザードフラッシュ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "フレイムフラッシュ / 属性:火 / 攻撃区分:魔法 / 対象:敵全体",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-161-normal-0",
          "target": "146",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "水属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-161-normal-1",
          "target": "146",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "56"
            }
          ],
          "label": "水属性 × 火炎タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "169"
      ]
    },
    {
      "id": "147",
      "uid": "MSB-162",
      "name": "モブマグバスター",
      "image": "figene/60.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "妨害",
      "atk": 180,
      "def": 170,
      "tags": [
        "03",
        "09",
        "26",
        "32",
        "39",
        "47",
        "59"
      ],
      "soulSkill": {
        "name": "マグキャノン",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "program": 58,
        "sourceText": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +5",
        "traitText": "火属性与ダメージ +3% & 会心率1%",
        "soul": {
          "text": "敵全体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "ATK +5",
          "trait": "火属性与ダメージ +3% & 会心率1%",
          "accessorySkillName": "マグキャノン",
          "accessorySkillEffect": "敵全体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 マグキャノン",
              "effect": "敵全体のDEFを12%ダウンさせ、味方全体のATKを5%アップする"
            },
            "5": {
              "name": "マグキャノン",
              "effect": "敵全体のDEFを8%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 6448,
            "ATK": 273,
            "MAG": 210,
            "DEF": 228,
            "MND": 211,
            "SPD": 288,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/98.png",
            "条件・補足": null,
            "技一覧": [
              "マグマバスター / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-162-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-162-normal-1",
          "target": "147",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "39"
            }
          ],
          "label": "火属性 × 鉄壁タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "168",
        "169",
        "181",
        "209",
        "210",
        "214"
      ]
    },
    {
      "id": "148",
      "uid": "MSB-163",
      "name": "モブヨーガンスライム",
      "image": "figene/61.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 170,
      "def": 190,
      "tags": [
        "03",
        "09",
        "17",
        "39",
        "47",
        "50",
        "56"
      ],
      "soulSkill": {
        "name": "ヨーガンプレス",
        "timing": "own-main",
        "effect": "このターン相手フィールド全員へ1回ずつ攻撃できる。1体撃破するたび、残っている相手全体のDEF-10。",
        "timingLabel": "自分メイン",
        "description": "このターン相手フィールド全員へ1回ずつ攻撃できる。1体撃破するたび、残っている相手全体のDEF-10。",
        "program": 68,
        "sourceText": "このターン相手フィールド全員へ1回ずつ攻撃できる。1体撃破するたび、残っている相手全体のDEF-10。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "物理ダメージ軽減 +3% & 会心率1%",
        "soul": {
          "text": "敵全体に火属性の物理小～中ダメージを与え、自分のDEFを2ターンの間20%アップする"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "DEF +5",
          "trait": "物理ダメージ軽減 +3% & 会心率1%",
          "accessorySkillName": "ヨーガンプレス",
          "accessorySkillEffect": "敵全体に火属性の物理小～中ダメージを与え、自分のDEFを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヨーガンプレス",
              "effect": "正面の敵のHPを10%ダウンさせ、味方全体のDEFを8%アップする"
            },
            "5": {
              "name": "ヨーガンプレス",
              "effect": "正面の敵のHPを7%ダウンさせ、味方全体のDEFを4%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 5616,
            "ATK": 210,
            "MAG": 248,
            "DEF": 203,
            "MND": 224,
            "SPD": 282,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/93.png",
            "条件・補足": null,
            "技一覧": [
              "マグポヨ～ / 属性:火 / 攻撃区分:魔法 / 対象:敵全体",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-163-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-163-normal-1",
          "target": "148",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "56"
            }
          ],
          "label": "火属性 × 火炎タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "164",
        "168",
        "169",
        "181",
        "209",
        "210",
        "214"
      ]
    },
    {
      "id": "149",
      "uid": "MSB-164",
      "name": "モブピコダーク",
      "image": "figene/62.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 90,
      "def": 100,
      "tags": [
        "05",
        "09",
        "37",
        "48",
        "60"
      ],
      "soulSkill": {
        "name": "ピコシャドウ",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 23,
        "sourceText": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "闇属性耐性 +3% & 回避率1%",
        "soul": {
          "text": "敵単体に闇属性の魔法小～中ダメージを与える。40%で毒にする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "闇属性耐性 +3% & 回避率1%",
          "accessorySkillName": "ピコシャドウ",
          "accessorySkillEffect": "敵単体に闇属性の魔法小～中ダメージを与える。40%で毒にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ピコシャドウ",
              "effect": "センターの敵のDEFを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "ピコシャドウ",
              "effect": "センターの敵のDEFを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1554,
            "ATK": 177,
            "MAG": 177,
            "DEF": 150,
            "MND": 150,
            "SPD": 241,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "enemy/131.png",
            "条件・補足": null,
            "技一覧": [
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "リピートイントロ / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "103",
        "104",
        "109",
        "110",
        "111",
        "112",
        "113",
        "114",
        "115",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "166",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/45",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "150",
      "uid": "MSB-165",
      "name": "モブデビルスライム",
      "image": "figene/63.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 90,
      "def": 105,
      "tags": [
        "02",
        "09",
        "17",
        "37",
        "48"
      ],
      "soulSkill": {
        "name": "デビスライド",
        "timing": "own-main",
        "effect": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "timingLabel": "自分メイン",
        "description": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "program": 9,
        "sourceText": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "MND +3",
        "traitText": "闇属性与えダメージ +3% & 回避率1%",
        "soul": {
          "text": "敵全体に闇属性の魔法小ダメージを与える。30%で毒にする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "MND +3",
          "trait": "闇属性与えダメージ +3% & 回避率1%",
          "accessorySkillName": "デビスライド",
          "accessorySkillEffect": "敵全体に闇属性の魔法小ダメージを与える。30%で毒にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 デビスライド",
              "effect": "敵全体のHPを6%ダウンさせ、ATKを8%ダウンさせる"
            },
            "5": {
              "name": "デビスライド",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1582,
            "ATK": 179,
            "MAG": 179,
            "DEF": 152,
            "MND": 152,
            "SPD": 244,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/132.png",
            "条件・補足": null,
            "技一覧": [
              "ネプマチューン / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "チルローファイ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "99",
        "103",
        "109",
        "110",
        "112",
        "119",
        "128",
        "129",
        "130",
        "136",
        "142",
        "143",
        "144",
        "146",
        "157",
        "158",
        "161",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "203",
        "205",
        "206",
        "207",
        "211",
        "215",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "151",
      "uid": "MSB-166",
      "name": "モブプニライダー",
      "image": "figene/64.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 100,
      "def": 90,
      "tags": [
        "02",
        "09",
        "17",
        "48",
        "50"
      ],
      "soulSkill": {
        "name": "プニライド",
        "timing": "attack-response",
        "effect": "相手の攻撃対象を自分フィールドの別のフィギュアへ変更する。別のフィギュアがいない場合、その攻撃中DEF+30。",
        "timingLabel": "相手攻撃宣言時",
        "description": "相手の攻撃対象を自分フィールドの別のフィギュアへ変更する。別のフィギュアがいない場合、その攻撃中DEF+30。",
        "program": 69,
        "sourceText": "相手の攻撃対象を自分フィールドの別のフィギュアへ変更する。別のフィギュアがいない場合、その攻撃中DEF+30。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "会心率 ＋1% & 回避率 +1%",
        "soul": {
          "text": "敵全体のSPDを2ターンの間10%ダウンさせ、自分のSPDを10%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +3",
          "trait": "会心率 ＋1% & 回避率 +1%",
          "accessorySkillName": "プニライド",
          "accessorySkillEffect": "敵全体のSPDを2ターンの間10%ダウンさせ、自分のSPDを10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 プニライド",
              "effect": "味方全体のSPDを15%・ATKを6%アップする"
            },
            "5": {
              "name": "プニライド",
              "effect": "味方全体のSPDを10%・ATKを3%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1582,
            "ATK": 179,
            "MAG": 179,
            "DEF": 152,
            "MND": 152,
            "SPD": 264,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/134.png",
            "条件・補足": null,
            "技一覧": [
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "チルローファイ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "152",
      "uid": "MSB-167",
      "name": "モブミニブック",
      "image": "figene/65.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "魔法",
      "role": "攻撃",
      "atk": 130,
      "def": 120,
      "tags": [
        "08",
        "09",
        "27",
        "33",
        "37",
        "48",
        "58"
      ],
      "soulSkill": {
        "name": "ブックトラップ",
        "timing": "own-main",
        "effect": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。",
        "timingLabel": "自分メイン",
        "description": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。 このスキル使用後も、このターンはフュージョン素材にできる。",
        "program": 55,
        "sourceText": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MND +5",
        "traitText": "魔法会心率 ＋3%",
        "soul": {
          "text": "敵単体に闇属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間10%アップする。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "MND +5",
          "trait": "魔法会心率 ＋3%",
          "accessorySkillName": "ブックトラップ",
          "accessorySkillEffect": "敵単体に闇属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間10%アップする。発動後、自分の必殺技CTを1ターン短縮する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ブックトラップ",
              "effect": "敵全体のSPDを15%ダウンさせ、HPを5%ダウンさせる"
            },
            "5": {
              "name": "ブックトラップ",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1582,
            "ATK": 179,
            "MAG": 197,
            "DEF": 152,
            "MND": 152,
            "SPD": 244,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": "魔法",
            "画像": "enemy/135.png",
            "条件・補足": null,
            "技一覧": [
              "ネオマニプール / 属性:光 / 攻撃区分:魔法 / 対象:個別処理",
              "ノイズスクラッチ / 属性:光 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱",
              "キャンディネオン / 属性:無 / 対象:味方単体 / 効果説明:味方単体を中回復"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "103",
        "104",
        "109",
        "112",
        "121",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "153",
      "uid": "MSB-168",
      "name": "モブコクピット",
      "image": "figene/66.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 120,
      "def": 140,
      "tags": [
        "05",
        "09",
        "36",
        "39",
        "48",
        "50"
      ],
      "soulSkill": {
        "name": "エマージェンシー",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "program": 22,
        "sourceText": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "物理ダメージ軽減 ＋3%",
        "soul": {
          "text": "味方全体のDEFとMNDを2ターンの間15%アップし、状態異常耐性を25%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +5",
          "trait": "物理ダメージ軽減 ＋3%",
          "accessorySkillName": "エマージェンシー",
          "accessorySkillEffect": "味方全体のDEFとMNDを2ターンの間15%アップし、状態異常耐性を25%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 エマージェンシー",
              "effect": "センターフィギュアのDEFを30%アップし、HPを15%アップする"
            },
            "5": {
              "name": "エマージェンシー",
              "effect": "センターフィギュアのDEFを20%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1582,
            "ATK": 179,
            "MAG": 179,
            "DEF": 167,
            "MND": 167,
            "SPD": 244,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "enemy/139.png",
            "条件・補足": null,
            "技一覧": [
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "リピートイントロ / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "135",
        "136",
        "139",
        "147",
        "157",
        "161",
        "163",
        "166",
        "207",
        "mq:eventfig/20",
        "mq:eventfig/45",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "154",
      "uid": "MSB-169",
      "name": "モブアサシン",
      "image": "figene/67.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "複合",
      "role": "攻撃",
      "atk": 135,
      "def": 120,
      "tags": [
        "02",
        "09",
        "26",
        "34",
        "35",
        "48",
        "57"
      ],
      "soulSkill": {
        "name": "アサシンステップ",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-10。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-10。",
        "program": 70,
        "sourceText": "相手フィールド全体のDEF-10。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "SPD +5",
        "traitText": "魔法会心率 ＋3%",
        "soul": {
          "text": "敵単体に闇属性の物理中～大ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +5",
          "trait": "魔法会心率 ＋3%",
          "accessorySkillName": "アサシンステップ",
          "accessorySkillEffect": "敵単体に闇属性の物理中～大ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 アサシンステップ",
              "effect": "正面の敵のHPを12%ダウンさせ、DEFを8%ダウンさせる"
            },
            "5": {
              "name": "アサシンステップ",
              "effect": "正面の敵のHPを8%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1666,
            "ATK": 186,
            "MAG": 186,
            "DEF": 158,
            "MND": 158,
            "SPD": 294,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "enemy/140.png",
            "条件・補足": null,
            "技一覧": [
              "ダークウィンドウ / 属性:闇 / 攻撃区分:物理 / 対象:敵全体"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "104",
        "107",
        "109",
        "112",
        "113",
        "114",
        "115",
        "134",
        "136",
        "144",
        "157",
        "161",
        "166",
        "204",
        "207",
        "mq:eventfig/45"
      ]
    },
    {
      "id": "155",
      "uid": "MSB-170",
      "name": "モブヘルシャドウ",
      "image": "figene/68.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "妨害",
      "atk": 120,
      "def": 120,
      "tags": [
        "03",
        "09",
        "23",
        "26",
        "36",
        "48",
        "57"
      ],
      "soulSkill": {
        "name": "ヘルスニーク",
        "timing": "own-main",
        "effect": "次のソウルフュージョンで召喚するフィギュアのATKとDEFを+20。",
        "timingLabel": "自分メイン",
        "description": "次のソウルフュージョンで召喚するフィギュアのATKとDEFを+20。",
        "program": 71,
        "sourceText": "次のソウルフュージョンで召喚するフィギュアのATKとDEFを+20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +5",
        "traitText": "火属性ダメージ軽減 +10%",
        "soul": {
          "text": "敵単体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +5",
          "trait": "火属性ダメージ軽減 +10%",
          "accessorySkillName": "ヘルスニーク",
          "accessorySkillEffect": "敵単体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヘルスニーク",
              "effect": "正面の敵1体のHPを10%ダウンさせ、DEFを10%ダウンさせる"
            },
            "5": {
              "name": "ヘルスニーク",
              "effect": "正面の敵1体のHPを7%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1554,
            "ATK": 177,
            "MAG": 177,
            "DEF": 150,
            "MND": 150,
            "SPD": 265,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/137.png",
            "条件・補足": null,
            "技一覧": [
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビート / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "100",
        "107",
        "111",
        "113",
        "114",
        "115",
        "134",
        "137",
        "138",
        "139",
        "142",
        "143",
        "144",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "204",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "156",
      "uid": "MSB-171",
      "name": "モブミラヘルド",
      "image": "figene/69.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 140,
      "def": 120,
      "tags": [
        "03",
        "09",
        "23",
        "48",
        "49",
        "54",
        "56"
      ],
      "soulSkill": {
        "name": "ヘルドライブ",
        "timing": "own-main",
        "effect": "次のソウルフュージョンで召喚するフィギュアのATKとDEFを+20。",
        "timingLabel": "自分メイン",
        "description": "次のソウルフュージョンで召喚するフィギュアのATKとDEFを+20。",
        "program": 71,
        "sourceText": "次のソウルフュージョンで召喚するフィギュアのATKとDEFを+20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +5 % SPD +3",
        "traitText": "火属性会心率 ＋7%",
        "soul": {
          "text": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる"
        },
        "decision": "MOB STORYで通常敵。基本個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +5 % SPD +3",
          "trait": "火属性会心率 ＋7%",
          "accessorySkillName": "ヘルドライブ",
          "accessorySkillEffect": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヘルドライブ",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "ヘルドライブ",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 1638,
            "ATK": 184,
            "MAG": 184,
            "DEF": 156,
            "MND": 156,
            "SPD": 251,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/143.png",
            "条件・補足": null,
            "技一覧": [
              "コーク・ハイ・フレイム / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:ひるみ",
              "フレイムマジック / 属性:火 / 攻撃区分:魔法 / 対象:敵全体",
              "ヒートリカバー / 属性:火 / 攻撃区分:魔法 / 対象:個別処理"
            ]
          },
          "classReason": "MOB STORYで通常敵。基本個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "121",
        "128",
        "129",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "173",
        "177",
        "203",
        "206",
        "208",
        "211",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "157",
      "uid": "MSB-172",
      "name": "モブキラウィッチ",
      "image": "figene/70.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 180,
      "def": 170,
      "tags": [
        "05",
        "09",
        "32",
        "37",
        "48",
        "50",
        "58"
      ],
      "soulSkill": {
        "name": "キラスペル",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 53,
        "sourceText": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MND +5 & MP+7",
        "traitText": "魔法会心率 ＋3%",
        "soul": {
          "text": "敵単体に闇属性の魔法中ダメージを与える。40%で毒にする。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "MND +5 & MP+7",
          "trait": "魔法会心率 ＋3%",
          "accessorySkillName": "キラスペル",
          "accessorySkillEffect": "敵単体に闇属性の魔法中ダメージを与える。40%で毒にする。発動後、自分の必殺技CTを1ターン短縮する",
          "mobPieceSkills": {
            "1": {
              "name": "0 キラスペル",
              "effect": "センターの敵のDEFを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "キラスペル",
              "effect": "センターの敵のDEFを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 6300,
            "ATK": 238,
            "MAG": 238,
            "DEF": 231,
            "MND": 231,
            "SPD": 320,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "魔法",
            "画像": "enemy/146.png",
            "条件・補足": null,
            "技一覧": [
              "ウィッチ・スウィート・ベリー / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:毒",
              "ミラマゾーン / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒",
              "スターマシュマロ / 属性:無 / 対象:味方全体 / 効果説明:味方全体を小回復"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-172-normal-0",
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
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-172-normal-1",
          "target": "157",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "37"
            }
          ],
          "label": "闇属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "170",
        "216",
        "217",
        "218",
        "mq:eventfig/55",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "158",
      "uid": "MSB-173",
      "name": "モブララウィッチ",
      "image": "figene/71.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 180,
      "def": 170,
      "tags": [
        "03",
        "09",
        "32",
        "37",
        "48",
        "50",
        "58"
      ],
      "soulSkill": {
        "name": "ララスペル",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 53,
        "sourceText": "相手1体のDEF-30。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MND +5 & MP +7",
        "traitText": "魔法会心率 ＋3%",
        "soul": {
          "text": "敵単体に闇属性の魔法中ダメージを与える。40%で毒にする。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "decision": "MOB STORYで中ボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "MND +5 & MP +7",
          "trait": "魔法会心率 ＋3%",
          "accessorySkillName": "ララスペル",
          "accessorySkillEffect": "敵単体に闇属性の魔法中ダメージを与える。40%で毒にする。発動後、自分の必殺技CTを1ターン短縮する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ララスペル",
              "effect": "センターの敵のDEFを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "ララスペル",
              "effect": "センターの敵のDEFを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 6300,
            "ATK": 238,
            "MAG": 238,
            "DEF": 231,
            "MND": 231,
            "SPD": 320,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "魔法",
            "画像": "enemy/147.png",
            "条件・補足": null,
            "技一覧": [
              "プティ・ヘルファイヤ / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど",
              "ホノマグマ / 属性:火 / 攻撃区分:魔法 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど",
              "カラメルハローバック / 属性:無 / 対象:味方単体 / 効果説明:味方単体のDEFを18%アップ / 3ターン"
            ]
          },
          "classReason": "MOB STORYで中ボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-173-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-173-normal-1",
          "target": "158",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "37"
            }
          ],
          "label": "火属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "168",
        "169",
        "170",
        "181",
        "209",
        "210",
        "214",
        "216",
        "218",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "202",
      "uid": "MSB-174",
      "name": "グラディモブ",
      "image": "figene/72.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 220,
      "def": 220,
      "tags": [
        "03",
        "09",
        "32",
        "34",
        "36",
        "48",
        "50",
        "55",
        "59"
      ],
      "soulSkill": {
        "name": "クイックドロー",
        "timing": "attack-response",
        "effect": "このフィギュアを対象にした攻撃を1回無効にし、自分フィールド内の位置を変更する。",
        "timingLabel": "相手攻撃宣言時",
        "description": "このフィギュアを対象にした攻撃を1回無効にし、自分フィールド内の位置を変更する。",
        "program": 7,
        "sourceText": "このフィギュアを対象にした攻撃を1回無効にし、自分フィールド内の位置を変更する。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "MND +5 & SPD +7",
        "traitText": "銃装備時、会心率 ＋5% & 命中率+80%",
        "soul": {
          "text": "味方全体のSPDを2ターンの間20%アップし、会心率を8%アップする"
        },
        "decision": "MOB STORYでボスまたは強力個体のためミドルソウル",
        "basis": {
          "statusEffect": "MND +5 & SPD +7",
          "trait": "銃装備時、会心率 ＋5% & 命中率+80%",
          "accessorySkillName": "クイックドロー",
          "accessorySkillEffect": "味方全体のSPDを2ターンの間20%アップし、会心率を8%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 クイックドロー",
              "effect": "センターフィギュアのSPDを30%アップし、ATKを10%アップする"
            },
            "5": {
              "name": "クイックドロー",
              "effect": "センターフィギュアのSPDを20%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 14058,
            "ATK": 352,
            "MAG": 352,
            "DEF": 274,
            "MND": 274,
            "SPD": 401,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.12,
            "回避率": 0.1,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "boss/39.png",
            "条件・補足": null,
            "技一覧": [
              "将軍進撃 / 攻撃区分:物理 / 対象:敵全体",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "MOB STORYでボスまたは強力個体のためミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-174-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-174-normal-1",
          "target": "202",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "55"
            }
          ],
          "label": "火属性 × スピードスタータグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "168",
        "169",
        "181",
        "209",
        "210",
        "214"
      ]
    },
    {
      "id": "159",
      "uid": "MSB-175",
      "name": "モブホーク",
      "image": "figboss/01.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "風",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 190,
      "def": 180,
      "tags": [
        "04",
        "09",
        "25",
        "32",
        "41",
        "50",
        "55"
      ],
      "soulSkill": {
        "name": "ホークストーム",
        "timing": "attack-response",
        "effect": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "program": 54,
        "sourceText": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +2 & SPD +2 & MND +2",
        "traitText": "風属性耐性+10%",
        "soul": {
          "text": "敵単体に風属性の物理中ダメージを与え、自分のSPDと回避率を2ターンの間10%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "ATK +2 & SPD +2 & MND +2",
          "trait": "風属性耐性+10%",
          "accessorySkillName": "ホークストーム",
          "accessorySkillEffect": "敵単体に風属性の物理中ダメージを与え、自分のSPDと回避率を2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ホークストーム",
              "effect": "敵全体のDEFを9%ダウンさせ、味方全体のSPDを10%アップする"
            },
            "5": {
              "name": "ホークストーム",
              "effect": "敵全体のDEFを6%ダウンさせ、味方全体のSPDを5%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 1482,
            "ATK": 68,
            "MAG": 68,
            "DEF": 51,
            "MND": 51,
            "SPD": 65,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": "物理",
            "画像": "boss/01.png",
            "条件・補足": null,
            "技一覧": [
              "ホークダイブ / 属性:風 / 攻撃区分:物理 / 対象:敵全体",
              "疾風斬り / 属性:風 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-175-normal-0",
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
          "label": "風属性 × 風属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-175-normal-1",
          "target": "159",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "tag": "55"
            }
          ],
          "label": "風属性 × スピードスタータグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "160",
        "164",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "160",
      "uid": "MSB-176",
      "name": "モブホークⅡ",
      "image": "figboss/02.png",
      "rarity": "UR",
      "soulClass": "mob",
      "attribute": "風",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 320,
      "def": 300,
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
      "soulSkill": {
        "name": "ホークテンペスト",
        "timing": "attack-response",
        "effect": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "program": 54,
        "sourceText": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "ATK +5 & SPD +10 & MND +2",
        "traitText": "風属性耐性+15%",
        "soul": {
          "text": "敵単体に風属性の物理中～大ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "ATK +5 & SPD +10 & MND +2",
          "trait": "風属性耐性+15%",
          "accessorySkillName": "ホークテンペスト",
          "accessorySkillEffect": "敵単体に風属性の物理中～大ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ホークテンペスト",
              "effect": "敵全体のDEFを9%ダウンさせ、味方全体のSPDを10%アップする"
            },
            "5": {
              "name": "ホークテンペスト",
              "effect": "敵全体のDEFを6%ダウンさせ、味方全体のSPDを5%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 8998,
            "ATK": 265,
            "MAG": 265,
            "DEF": 205,
            "MND": 205,
            "SPD": 299,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0.1,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": "物理",
            "画像": "boss/02.png",
            "条件・補足": null,
            "技一覧": [
              "スクリューホークダイブ / 攻撃区分:物理 / 対象:敵全体",
              "疾風斬り / 属性:風 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:風 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-176-normal-0",
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
          "label": "風属性 × 風属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-176-normal-1",
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
          "label": "モブホーク × 風属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "161",
      "uid": "MSB-177",
      "name": "ミラモブ",
      "image": "figboss/03.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 190,
      "def": 190,
      "tags": [
        "05",
        "09",
        "25",
        "37",
        "42",
        "50",
        "54"
      ],
      "soulSkill": {
        "name": "ミラポイズン",
        "timing": "own-main",
        "effect": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。",
        "timingLabel": "自分メイン",
        "description": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。 このスキル使用後も、このターンはフュージョン素材にできる。",
        "program": 55,
        "sourceText": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MAG+3 & MP +15",
        "traitText": "闇属性耐性+10 & 回避率+3%",
        "soul": {
          "text": "敵単体に闇属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "MAG+3 & MP +15",
          "trait": "闇属性耐性+10 & 回避率+3%",
          "accessorySkillName": "ミラポイズン",
          "accessorySkillEffect": "敵単体に闇属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミラポイズン",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "ミラポイズン",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 2130,
            "ATK": 94,
            "MAG": 94,
            "DEF": 71,
            "MND": 71,
            "SPD": 96,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "boss/03.png",
            "条件・補足": null,
            "技一覧": [
              "ミラモブポイズン / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒",
              "ミラソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-177-normal-0",
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
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-177-normal-1",
          "target": "161",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "37"
            }
          ],
          "label": "闇属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "164",
        "170",
        "216",
        "217",
        "218",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "162",
      "uid": "MSB-178",
      "name": "ミラモブⅡ",
      "image": "figboss/04.png",
      "rarity": "UR",
      "soulClass": "mob",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 300,
      "def": 310,
      "tags": [
        "05",
        "09",
        "23",
        "25",
        "37",
        "42",
        "50",
        "54",
        "57"
      ],
      "soulSkill": {
        "name": "ミラナイトメア",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-40。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-40。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 72,
        "sourceText": "相手フィールド全体のDEF-40。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "MAG+3 & MP +15 & MND +3",
        "traitText": "毒耐性+20 & 回避率+3%",
        "soul": {
          "text": "敵全体に闇属性の魔法中ダメージを与え、30%で毒または混乱にする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "MAG+3 & MP +15 & MND +3",
          "trait": "毒耐性+20 & 回避率+3%",
          "accessorySkillName": "ミラナイトメア",
          "accessorySkillEffect": "敵全体に闇属性の魔法中ダメージを与え、30%で毒または混乱にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミラナイトメア",
              "effect": "味方全体のATKを12%アップし、敵全体のHPを5%ダウンさせる"
            },
            "5": {
              "name": "ミラナイトメア",
              "effect": "味方全体のATKを8%アップし、敵全体のHPを3%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 11619,
            "ATK": 312,
            "MAG": 312,
            "DEF": 243,
            "MND": 243,
            "SPD": 355,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "boss/04.png",
            "条件・補足": null,
            "技一覧": [
              "ミラモブポイズン / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒",
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-178-normal-0",
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
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-178-normal-1",
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
          "label": "ミラモブ × 闇属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        },
        {
          "id": "MSB-178-mob",
          "target": "162",
          "fromClass": null,
          "materials": [
            {
              "id": "161"
            },
            {
              "id": "203"
            }
          ],
          "label": "ミラモブ × モブミラナイト",
          "basis": "MOBソウルフュージョン",
          "special": true,
          "bonusATK": 20,
          "bonusDEF": 20
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "163",
      "uid": "MSB-179",
      "name": "モブガーディアン",
      "image": "figboss/05.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "地",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 170,
      "def": 195,
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
        "timing": "own-main",
        "effect": "相手1体のATK-30。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-30。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "program": 73,
        "sourceText": "相手1体のATK-30。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +5 & MND +1",
        "traitText": "ダメージ軽減+2%",
        "soul": {
          "text": "味方全体のダメージ軽減を2ターンの間8%アップし、ひるみ耐性を35%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "DEF +5 & MND +1",
          "trait": "ダメージ軽減+2%",
          "accessorySkillName": "ガードウォール",
          "accessorySkillEffect": "味方全体のダメージ軽減を2ターンの間8%アップし、ひるみ耐性を35%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ガードウォール",
              "effect": "味方全体のHPを15%アップし、DEFを10%アップする"
            },
            "5": {
              "name": "ガードウォール",
              "effect": "味方全体のHPを10%アップし、DEFを5%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 2662,
            "ATK": 126,
            "MAG": 113,
            "DEF": 85,
            "MND": 85,
            "SPD": 119,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "boss/05.png",
            "条件・補足": null,
            "技一覧": [
              "ガーディアンシールド / 攻撃区分:精神 / 対象:個別処理",
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-179-normal-0",
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
          "label": "地属性 × 地属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-179-normal-1",
          "target": "163",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "tag": "39"
            }
          ],
          "label": "地属性 × 鉄壁タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "172",
        "174"
      ]
    },
    {
      "id": "164",
      "uid": "MSB-180",
      "name": "モブガーディアンⅡ",
      "image": "figboss/06.png",
      "rarity": "UR",
      "soulClass": "mob",
      "attribute": "無",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 300,
      "def": 320,
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
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+60。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+60。差分ライフダメージは0。",
        "program": 74,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+60。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "DEF +5 & HP +20",
        "traitText": "ダメージ軽減+3%",
        "soul": {
          "text": "自分のDEFを2ターンの間55%アップし、物理ダメージ軽減を10%アップする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "DEF +5 & HP +20",
          "trait": "ダメージ軽減+3%",
          "accessorySkillName": "ガードフォート",
          "accessorySkillEffect": "自分のDEFを2ターンの間55%アップし、物理ダメージ軽減を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ガードフォート",
              "effect": "敵全体のATKを15%ダウンさせ、味方全体のDEFを8%アップする"
            },
            "5": {
              "name": "ガードフォート",
              "effect": "敵全体のATKを10%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-180-normal-0",
          "target": "164",
          "fromClass": "middle",
          "materials": [
            {
              "tag": "39"
            },
            {
              "tag": "25"
            }
          ],
          "label": "鉄壁タグ × ボスタグ",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-180-normal-1",
          "target": "164",
          "fromClass": "middle",
          "materials": [
            {
              "id": "163"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "モブガーディアン × 無属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        },
        {
          "id": "MSB-180-mob",
          "target": "164",
          "fromClass": null,
          "materials": [
            {
              "id": "163"
            },
            {
              "id": "135"
            }
          ],
          "label": "モブガーディアン × モブタフネス",
          "basis": "MOBソウルフュージョン",
          "special": true,
          "bonusATK": 20,
          "bonusDEF": 20
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "165",
      "uid": "MSB-181",
      "name": "モブネオンバルス",
      "image": "figboss/07.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "光",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 220,
      "def": 220,
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
      "soulSkill": {
        "name": "ネオンバースト",
        "timing": "own-main",
        "effect": "味方1体に、このフィギュアが持つ通常タグ1つをターン終了まで追加する。",
        "timingLabel": "自分メイン",
        "description": "味方1体に、このフィギュアが持つ通常タグ1つをターン終了まで追加する。",
        "program": 75,
        "sourceText": "味方1体に、このフィギュアが持つ通常タグ1つをターン終了まで追加する。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "MAG +5 & HP +20",
        "traitText": "光属性耐性 +10% & 会心率 +1%",
        "soul": {
          "text": "敵全体のSPDを2ターンの間20%ダウンさせ、自分のSPDを20%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "MAG +5 & HP +20",
          "trait": "光属性耐性 +10% & 会心率 +1%",
          "accessorySkillName": "ネオンバースト",
          "accessorySkillEffect": "敵全体のSPDを2ターンの間20%ダウンさせ、自分のSPDを20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ネオンバースト",
              "effect": "味方全体のSPDを15%・ATKを6%アップする"
            },
            "5": {
              "name": "ネオンバースト",
              "effect": "味方全体のSPDを10%・ATKを3%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 3633,
            "ATK": 143,
            "MAG": 143,
            "DEF": 108,
            "MND": 108,
            "SPD": 154,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": "物理",
            "画像": "boss/07.png",
            "条件・補足": null,
            "技一覧": [
              "ネオンボム / 攻撃区分:魔法 / 対象:敵全体",
              "ネオマソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-181-normal-0",
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
          "label": "光属性 × 光属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-181-normal-1",
          "target": "165",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "tag": "58"
            }
          ],
          "label": "光属性 × 特殊能力タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "170",
        "184",
        "216",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "166",
      "uid": "MSB-182",
      "name": "モブエース",
      "image": "figboss/08.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 230,
      "def": 220,
      "tags": [
        "05",
        "09",
        "25",
        "32",
        "34",
        "36",
        "44",
        "51",
        "59"
      ],
      "soulSkill": {
        "name": "エースブレイド",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "program": 76,
        "sourceText": "相手1体のDEF-30。そのフィギュアは次のバトルフェイズで攻撃できない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "MAG +5 & HP +20",
        "traitText": "光属性与ダメージ +5% & 回避率 +1%",
        "soul": {
          "text": "敵単体に光属性の物理中～大ダメージを与え、自分のSPDを2ターンの間20%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "MAG +5 & HP +20",
          "trait": "光属性与ダメージ +5% & 回避率 +1%",
          "accessorySkillName": "エースブレイド",
          "accessorySkillEffect": "敵単体に光属性の物理中～大ダメージを与え、自分のSPDを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 エースブレイド",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "エースブレイド",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 5056,
            "ATK": 181,
            "MAG": 181,
            "DEF": 138,
            "MND": 138,
            "SPD": 199,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "boss/08.png",
            "条件・補足": null,
            "技一覧": [
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-182-normal-0",
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
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-182-normal-1",
          "target": "166",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "51"
            }
          ],
          "label": "闇属性 × 雷撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "164",
        "170",
        "217",
        "218",
        "mq:eventfig/55"
      ]
    },
    {
      "id": "167",
      "uid": "MSB-183",
      "name": "モブドラゴン",
      "image": "figboss/09.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "妨害",
      "atk": 190,
      "def": 190,
      "tags": [
        "03",
        "09",
        "25",
        "38",
        "47",
        "50",
        "56"
      ],
      "soulSkill": {
        "name": "ドラゴンブレス",
        "timing": "own-main",
        "effect": "このターン、攻撃するたびATK+30（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターン、攻撃するたびATK+30（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "program": 77,
        "sourceText": "このターン、攻撃するたびATK+30（累積）。撃破した場合は別の相手1体へ追加攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +3 & DEF +3 & MND +2",
        "traitText": "火属性耐性+10% & 会心率+3%",
        "soul": {
          "text": "敵単体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "ATK +3 & DEF +3 & MND +2",
          "trait": "火属性耐性+10% & 会心率+3%",
          "accessorySkillName": "ドラゴンブレス",
          "accessorySkillEffect": "敵単体に火属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ドラゴンブレス",
              "effect": "正面の敵1体のHPを10%ダウンさせ、DEFを10%ダウンさせる"
            },
            "5": {
              "name": "ドラゴンブレス",
              "effect": "正面の敵1体のHPを7%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 5368,
            "ATK": 187,
            "MAG": 187,
            "DEF": 144,
            "MND": 144,
            "SPD": 208,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "boss/09.png",
            "条件・補足": null,
            "技一覧": [
              "ドラゴンフレイム / 攻撃区分:魔法 / 対象:敵全体",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-183-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-183-normal-1",
          "target": "167",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "38"
            }
          ],
          "label": "火属性 × ドラゴンタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "164",
        "168",
        "169",
        "181",
        "209",
        "210",
        "214"
      ]
    },
    {
      "id": "168",
      "uid": "MSB-184",
      "name": "モブドラゴンⅡ",
      "image": "figboss/10.png",
      "rarity": "UR",
      "soulClass": "mob",
      "attribute": "火",
      "attackType": "物理",
      "role": "連続攻撃",
      "atk": 310,
      "def": 310,
      "tags": [
        "03",
        "09",
        "25",
        "32",
        "34",
        "38",
        "47",
        "50",
        "56"
      ],
      "soulSkill": {
        "name": "ドラゴンレイジ",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+30（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+30（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 78,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+30（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "ATK +3 & DEF +3 & MND +2",
        "traitText": "火属性耐性+10% & 会心率+3%",
        "soul": {
          "text": "敵単体に火属性の物理中～大ダメージを2回に分けて与え、自分の会心率を2ターンの間15%アップする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "ATK +3 & DEF +3 & MND +2",
          "trait": "火属性耐性+10% & 会心率+3%",
          "accessorySkillName": "ドラゴンレイジ",
          "accessorySkillEffect": "敵単体に火属性の物理中～大ダメージを2回に分けて与え、自分の会心率を2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ドラゴンレイジ",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "ドラゴンレイジ",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 13712,
            "ATK": 368,
            "MAG": 381,
            "DEF": 267,
            "MND": 272,
            "SPD": 355,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "boss/10.png",
            "条件・補足": null,
            "技一覧": [
              "ドラゴンフレイム / 攻撃区分:魔法 / 対象:敵全体",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-184-normal-0",
          "target": "168",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-184-normal-1",
          "target": "168",
          "fromClass": "middle",
          "materials": [
            {
              "id": "167"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "モブドラゴン × 火属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        },
        {
          "id": "MSB-184-mob",
          "target": "168",
          "fromClass": null,
          "materials": [
            {
              "id": "167"
            },
            {
              "id": "147"
            }
          ],
          "label": "モブドラゴン × モブマグバスター",
          "basis": "MOBソウルフュージョン",
          "special": true,
          "bonusATK": 20,
          "bonusDEF": 20
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "169",
      "uid": "MSB-185",
      "name": "モブギドラ",
      "image": "figboss/11.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "attribute": "火",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 370,
      "def": 370,
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
      "soulSkill": {
        "name": "ドラゴンラッシュ",
        "timing": "own-main",
        "effect": "このターン最大3回攻撃できる。攻撃するたび、このターン中ATK+30（累積）。攻撃対象は毎回自由で、同じ相手にも複数回攻撃できる。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大3回攻撃できる。攻撃するたび、このターン中ATK+30（累積）。攻撃対象は毎回自由で、同じ相手にも複数回攻撃できる。ダイレクトアタック不可。",
        "program": 79,
        "sourceText": "このターン最大3回攻撃できる。攻撃するたび、このターン中ATK+30（累積）。攻撃対象は毎回自由で、同じ相手にも複数回攻撃できる。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "MOB",
        "statsText": "ATK +3 & DEF +3 & MND +2",
        "traitText": "火属性耐性+10% & 会心率+3%",
        "soul": {
          "text": "敵全体に火属性の魔法大ダメージを与え、DEFを2ターンの間25%ダウンさせる"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "ATK +3 & DEF +3 & MND +2",
          "trait": "火属性耐性+10% & 会心率+3%",
          "accessorySkillName": "トリプルブレス",
          "accessorySkillEffect": "敵全体に火属性の魔法大ダメージを与え、DEFを2ターンの間25%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 トリプルブレス",
              "effect": "敵全体のHPを6%ダウンさせ、SPDを8%ダウンさせる"
            },
            "5": {
              "name": "トリプルブレス",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 16025,
            "ATK": 394,
            "MAG": 421,
            "DEF": 287,
            "MND": 292,
            "SPD": 391,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "boss/19.png",
            "条件・補足": null,
            "技一覧": [
              "フル・ドラゴンフレイム / 属性:火・闇 / 攻撃区分:魔法 / 対象:敵全体",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-185-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-185-normal-1",
          "target": "169",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "38"
            }
          ],
          "label": "火属性 × ドラゴンタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        },
        {
          "id": "MSB-185-mob",
          "target": "169",
          "fromClass": null,
          "materials": [
            {
              "id": "167"
            },
            {
              "id": "146"
            }
          ],
          "label": "モブドラゴン × モブフレザード",
          "basis": "MOBソウルフュージョン",
          "special": true,
          "bonusATK": 20,
          "bonusDEF": 20
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "170",
      "uid": "MSB-186",
      "name": "ミラモブファラオ",
      "image": "figboss/12.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "attribute": "光/闇",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 370,
      "def": 370,
      "tags": [
        "08",
        "09",
        "23",
        "25",
        "30",
        "32",
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
        "effect": "相手フィギュア1体を選ぶ。次の相手ターン終了までDEF-40、ソウルスキル使用不可、ソウルフュージョン素材にもできない。",
        "timingLabel": "自分メイン",
        "description": "相手フィギュア1体を選ぶ。次の相手ターン終了までDEF-40、ソウルスキル使用不可、ソウルフュージョン素材にもできない。",
        "program": 80,
        "sourceText": "相手フィギュア1体を選ぶ。次の相手ターン終了までDEF-40、ソウルスキル使用不可、ソウルフュージョン素材にもできない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "MOB",
        "statsText": "MAG+5 & MP +15 & MND +3",
        "traitText": "全属性耐性+8 & 回避率+3%",
        "soul": {
          "text": "敵全体に闇属性の魔法大ダメージを与え、30%で毒または混乱にする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "MAG+5 & MP +15 & MND +3",
          "trait": "全属性耐性+8 & 回避率+3%",
          "accessorySkillName": "ファラオカース",
          "accessorySkillEffect": "敵全体に闇属性の魔法大ダメージを与え、30%で毒または混乱にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ファラオカース",
              "effect": "センターの敵のDEFを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "ファラオカース",
              "effect": "センターの敵のDEFを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 13055,
            "ATK": 336,
            "MAG": 336,
            "DEF": 262,
            "MND": 262,
            "SPD": 382,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "光・闇",
            "通常攻撃区分": "物理",
            "画像": "boss/20.png",
            "条件・補足": null,
            "技一覧": [
              "ソウル・ダーク・ライト・ミラー / 属性:光・闇 / 攻撃区分:魔法 / 対象:敵全体",
              "ミラモブポイズン / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒",
              "ネオマソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-186-normal-0",
          "target": "170",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "光属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-186-normal-1",
          "target": "170",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "tag": "37"
            }
          ],
          "label": "光属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        },
        {
          "id": "MSB-186-mob",
          "target": "170",
          "fromClass": null,
          "materials": [
            {
              "id": "161"
            },
            {
              "id": "104"
            }
          ],
          "label": "ミラモブ × モブミラバスター",
          "basis": "MOBソウルフュージョン",
          "special": true,
          "bonusATK": 20,
          "bonusDEF": 20
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "171",
      "uid": "MSB-187",
      "name": "モブデーバフ",
      "image": "figboss/13.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "地",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 180,
      "def": 190,
      "tags": [
        "05",
        "09",
        "23",
        "25",
        "37",
        "46",
        "57"
      ],
      "soulSkill": {
        "name": "デバフミスト",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 52,
        "sourceText": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MAG+3 & MP +15",
        "traitText": "状態異常耐性+3 & 闇属性耐性 +3%",
        "soul": {
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "MAG+3 & MP +15",
          "trait": "状態異常耐性+3 & 闇属性耐性 +3%",
          "accessorySkillName": "デバフミスト",
          "accessorySkillEffect": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 デバフミスト",
              "effect": "敵全体のSPDを15%ダウンさせ、HPを5%ダウンさせる"
            },
            "5": {
              "name": "デバフミスト",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 10617,
            "ATK": 270,
            "MAG": 265,
            "DEF": 262,
            "MND": 246,
            "SPD": 281,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "boss/11.png",
            "条件・補足": null,
            "技一覧": [
              "デストロイボム / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-187-normal-0",
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
          "label": "地属性 × 地属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-187-normal-1",
          "target": "171",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "tag": "37"
            }
          ],
          "label": "地属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "170",
        "172",
        "174",
        "216",
        "218"
      ]
    },
    {
      "id": "172",
      "uid": "MSB-188",
      "name": "モブデーバフ第二形態",
      "image": "figboss/14.png",
      "rarity": "UR",
      "soulClass": "mob",
      "attribute": "地",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 310,
      "def": 300,
      "tags": [
        "05",
        "09",
        "23",
        "25",
        "30",
        "32",
        "37",
        "46",
        "57"
      ],
      "soulSkill": {
        "name": "デバフオーバー",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-40。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-40。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 72,
        "sourceText": "相手フィールド全体のDEF-40。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "MAG+5 & MP +20",
        "traitText": "状態異常耐性+5 & 闇属性耐性 +5%",
        "soul": {
          "text": "敵全体に闇属性の魔法中ダメージを与え、30%で毒または混乱にする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "MAG+5 & MP +20",
          "trait": "状態異常耐性+5 & 闇属性耐性 +5%",
          "accessorySkillName": "デバフオーバー",
          "accessorySkillEffect": "敵全体に闇属性の魔法中ダメージを与え、30%で毒または混乱にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 デバフオーバー",
              "effect": "味方全体のATKを12%アップし、敵全体のHPを5%ダウンさせる"
            },
            "5": {
              "name": "デバフオーバー",
              "effect": "味方全体のATKを8%アップし、敵全体のHPを3%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 12462,
            "ATK": 307,
            "MAG": 284,
            "DEF": 296,
            "MND": 282,
            "SPD": 309,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "boss/12.png",
            "条件・補足": null,
            "技一覧": [
              "デストロイボム / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-188-normal-0",
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
          "label": "地属性 × 地属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-188-normal-1",
          "target": "172",
          "fromClass": "middle",
          "materials": [
            {
              "id": "171"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "モブデーバフ × 地属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "173",
      "uid": "MSB-189",
      "name": "モブバーサク",
      "image": "figboss/15.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "地",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 190,
      "def": 185,
      "tags": [
        "05",
        "09",
        "23",
        "25",
        "46",
        "49",
        "57"
      ],
      "soulSkill": {
        "name": "バーサクラッシュ",
        "timing": "own-main",
        "effect": "次のソウルフュージョンで召喚するフィギュアのATKとDEFを+30。",
        "timingLabel": "自分メイン",
        "description": "次のソウルフュージョンで召喚するフィギュアのATKとDEFを+30。",
        "program": 81,
        "sourceText": "次のソウルフュージョンで召喚するフィギュアのATKとDEFを+30。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK+3 & HP +15",
        "traitText": "物理属性ダメージ軽減 +3% & 闇属性耐性 +3%",
        "soul": {
          "text": "敵単体に闇属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "ATK+3 & HP +15",
          "trait": "物理属性ダメージ軽減 +3% & 闇属性耐性 +3%",
          "accessorySkillName": "バーサクラッシュ",
          "accessorySkillEffect": "敵単体に闇属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 バーサクラッシュ",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "バーサクラッシュ",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 9898,
            "ATK": 344,
            "MAG": 265,
            "DEF": 193,
            "MND": 193,
            "SPD": 353,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "boss/13.png",
            "条件・補足": null,
            "技一覧": [
              "デストロイボム / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-189-normal-0",
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
          "label": "地属性 × 地属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-189-normal-1",
          "target": "173",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "tag": "49"
            }
          ],
          "label": "地属性 × 斬撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "172",
        "174",
        "213",
        "214"
      ]
    },
    {
      "id": "174",
      "uid": "MSB-190",
      "name": "モブバーサク第二形態",
      "image": "figboss/16.png",
      "rarity": "UR",
      "soulClass": "mob",
      "attribute": "地",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 310,
      "def": 310,
      "tags": [
        "05",
        "09",
        "23",
        "25",
        "32",
        "36",
        "46",
        "49",
        "57"
      ],
      "soulSkill": {
        "name": "バーサクオーバー",
        "timing": "own-main",
        "effect": "撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "timingLabel": "自分メイン",
        "description": "撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "program": 82,
        "sourceText": "撃破済みのシードソウル1体をシードデッキの一番下へ戻す。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "ATK+5 & HP +25",
        "traitText": "物理属性ダメージ軽減 +3% & 闇属性耐性 +3%",
        "soul": {
          "text": "敵単体に闇属性の物理中～大ダメージを与え、自分の会心率を2ターンの間17%アップする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "ATK+5 & HP +25",
          "trait": "物理属性ダメージ軽減 +3% & 闇属性耐性 +3%",
          "accessorySkillName": "バーサクオーバー",
          "accessorySkillEffect": "敵単体に闇属性の物理中～大ダメージを与え、自分の会心率を2ターンの間17%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 バーサクオーバー",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "バーサクオーバー",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 11658,
            "ATK": 392,
            "MAG": 284,
            "DEF": 216,
            "MND": 212,
            "SPD": 387,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "boss/14.png",
            "条件・補足": null,
            "技一覧": [
              "デストロイボム / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-190-normal-0",
          "target": "174",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "地属性 × 地属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-190-normal-1",
          "target": "174",
          "fromClass": "middle",
          "materials": [
            {
              "id": "173"
            },
            {
              "attribute": "地"
            }
          ],
          "label": "モブバーサク × 地属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "175",
      "uid": "MSB-191",
      "name": "モブウミデンデン",
      "image": "figboss/17.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "雷",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 230,
      "def": 220,
      "tags": [
        "08",
        "09",
        "23",
        "25",
        "30",
        "43",
        "51",
        "55",
        "59"
      ],
      "soulSkill": {
        "name": "ウミサンダー",
        "timing": "attack-response",
        "effect": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "program": 54,
        "sourceText": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "ATK+5 & SPD +8 & MND +5",
        "traitText": "雷属性与ダメージ +5& & 雷属性耐性 +10%",
        "soul": {
          "text": "敵単体に雷属性の物理中～大ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "ATK+5 & SPD +8 & MND +5",
          "trait": "雷属性与ダメージ +5& & 雷属性耐性 +10%",
          "accessorySkillName": "ウミサンダー",
          "accessorySkillEffect": "敵単体に雷属性の物理中～大ダメージを与え、自分のSPDと回避率を2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ウミサンダー",
              "effect": "敵全体のDEFを9%ダウンさせ、味方全体のSPDを10%アップする"
            },
            "5": {
              "name": "ウミサンダー",
              "effect": "敵全体のDEFを6%ダウンさせ、味方全体のSPDを5%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 10709,
            "ATK": 296,
            "MAG": 296,
            "DEF": 230,
            "MND": 230,
            "SPD": 336,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0.1,
            "会心率": null,
            "属性": "雷",
            "通常攻撃区分": "物理",
            "画像": "boss/16.png",
            "条件・補足": null,
            "技一覧": [
              "マシンガングミ / 属性:雷 / 攻撃区分:物理 / 対象:個別処理",
              "トルマソード / 属性:雷 / 攻撃区分:物理 / 対象:個別処理",
              "ロングスクラッチカット / 属性:雷 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:マヒ"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-191-normal-0",
          "target": "175",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 雷属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-191-normal-1",
          "target": "175",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "tag": "51"
            }
          ],
          "label": "雷属性 × 雷撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "182",
        "217"
      ]
    },
    {
      "id": "176",
      "uid": "MSB-192",
      "name": "モブネオマスター",
      "image": "figboss/18.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "光",
      "attackType": "魔法",
      "role": "攻撃",
      "atk": 220,
      "def": 220,
      "tags": [
        "05",
        "09",
        "25",
        "30",
        "36",
        "37",
        "44",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "ネオコントロール",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 64,
        "sourceText": "相手1体のDEF-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "DEF +5 & HP +20",
        "traitText": "光属性与ダメージ +5% & 会心率 +1%",
        "soul": {
          "text": "敵単体に光属性の魔法中～大ダメージを与え、味方全体のMNDを2ターンの間15%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "DEF +5 & HP +20",
          "trait": "光属性与ダメージ +5% & 会心率 +1%",
          "accessorySkillName": "ネオコントロール",
          "accessorySkillEffect": "敵単体に光属性の魔法中～大ダメージを与え、味方全体のMNDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ネオコントロール",
              "effect": "敵全体のSPDを15%ダウンさせ、HPを5%ダウンさせる"
            },
            "5": {
              "name": "ネオコントロール",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-192-normal-0",
          "target": "176",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 光属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-192-normal-1",
          "target": "176",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "tag": "37"
            }
          ],
          "label": "光属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "170",
        "184",
        "216",
        "218"
      ]
    },
    {
      "id": "177",
      "uid": "MSB-193",
      "name": "モブヘルリリス",
      "image": "figboss/19.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 190,
      "def": 180,
      "tags": [
        "03",
        "23",
        "26",
        "37",
        "48",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "ヘルフレア",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 64,
        "sourceText": "相手1体のDEF-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MAG +3 & MP +15",
        "traitText": "火属性耐性 +10% & 魔法会心率 +1%",
        "soul": {
          "text": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "MAG +3 & MP +15",
          "trait": "火属性耐性 +10% & 魔法会心率 +1%",
          "accessorySkillName": "ヘルフレア",
          "accessorySkillEffect": "敵単体に火属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヘルフレア",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "ヘルフレア",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 6300,
            "ATK": 238,
            "MAG": 238,
            "DEF": 231,
            "MND": 231,
            "SPD": 320,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": null,
            "画像": "boss/40.png",
            "条件・補足": null,
            "技一覧": [
              "ローズ・オブ・ファイヤー / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど",
              "ホノマグマ / 属性:火 / 攻撃区分:魔法 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-193-normal-0",
          "target": "177",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-193-normal-1",
          "target": "177",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "37"
            }
          ],
          "label": "火属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "168",
        "169",
        "170",
        "181",
        "209",
        "210",
        "214",
        "216",
        "218"
      ]
    },
    {
      "id": "178",
      "uid": "MSB-194",
      "name": "モブキリンリリス",
      "image": "figboss/20.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "雷",
      "attackType": "魔法",
      "role": "防御・守護",
      "atk": 190,
      "def": 180,
      "tags": [
        "04",
        "23",
        "26",
        "37",
        "48",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "キリンボルト",
        "timing": "skill-response",
        "effect": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "timingLabel": "相手スキル発動時",
        "description": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "program": 14,
        "sourceText": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MAG +3 & MP +15",
        "traitText": "雷属性耐性 +10% & 魔法会心率 +1%",
        "soul": {
          "text": "敵単体に雷属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間10%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "MAG +3 & MP +15",
          "trait": "雷属性耐性 +10% & 魔法会心率 +1%",
          "accessorySkillName": "キリンボルト",
          "accessorySkillEffect": "敵単体に雷属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 キリンボルト",
              "effect": "敵全体のSPDを15%ダウンさせ、HPを5%ダウンさせる"
            },
            "5": {
              "name": "キリンボルト",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 6300,
            "ATK": 238,
            "MAG": 238,
            "DEF": 231,
            "MND": 231,
            "SPD": 320,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "雷",
            "通常攻撃区分": null,
            "画像": "boss/41.png",
            "条件・補足": null,
            "技一覧": [
              "サンダーボルト / 属性:雷 / 攻撃区分:魔法 / 対象:敵全体 / 状態異常:マヒ",
              "トルマデン / 属性:雷 / 攻撃区分:魔法 / 対象:個別処理",
              "ロングスクラッチカット / 属性:雷 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:マヒ"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-194-normal-0",
          "target": "178",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 雷属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-194-normal-1",
          "target": "178",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "tag": "37"
            }
          ],
          "label": "雷属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "170",
        "182",
        "216",
        "218"
      ]
    },
    {
      "id": "179",
      "uid": "MSB-195",
      "name": "モブリヴァリリス",
      "image": "figboss/21.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "水",
      "attackType": "魔法",
      "role": "全体攻撃",
      "atk": 190,
      "def": 180,
      "tags": [
        "23",
        "26",
        "31",
        "37",
        "48",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "リヴァウェイブ",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "program": 58,
        "sourceText": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MAG +3 & MP +15",
        "traitText": "水属性耐性 +10% & 魔法会心率 +1%",
        "soul": {
          "text": "敵全体に水属性の魔法小～中ダメージを与える"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "MAG +3 & MP +15",
          "trait": "水属性耐性 +10% & 魔法会心率 +1%",
          "accessorySkillName": "リヴァウェイブ",
          "accessorySkillEffect": "敵全体に水属性の魔法小～中ダメージを与える",
          "mobPieceSkills": {
            "1": {
              "name": "0 リヴァウェイブ",
              "effect": "敵全体のHPを6%ダウンさせ、ATKを8%ダウンさせる"
            },
            "5": {
              "name": "リヴァウェイブ",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 6300,
            "ATK": 238,
            "MAG": 238,
            "DEF": 231,
            "MND": 231,
            "SPD": 320,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "boss/43.png",
            "条件・補足": null,
            "技一覧": [
              "ダイダルローズ / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ネプマチューン / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-195-normal-0",
          "target": "179",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-195-normal-1",
          "target": "179",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "37"
            }
          ],
          "label": "水属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "170",
        "183",
        "213",
        "216",
        "218"
      ]
    },
    {
      "id": "180",
      "uid": "MSB-196",
      "name": "モブクフリリス",
      "image": "figboss/22.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "光",
      "attackType": "魔法",
      "role": "防御・守護",
      "atk": 190,
      "def": 180,
      "tags": [
        "23",
        "26",
        "28",
        "37",
        "48",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "クフライト",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "program": 58,
        "sourceText": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MAG +3 & MP +15",
        "traitText": "光属性耐性 +10% & 魔法会心率 +1%",
        "soul": {
          "text": "敵全体に光属性の魔法小～中ダメージを与え、味方全体のMAGを2ターンの間15%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "MAG +3 & MP +15",
          "trait": "光属性耐性 +10% & 魔法会心率 +1%",
          "accessorySkillName": "クフライト",
          "accessorySkillEffect": "敵全体に光属性の魔法小～中ダメージを与え、味方全体のMAGを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 クフライト",
              "effect": "味方全体のATKを12%アップし、敵全体のHPを5%ダウンさせる"
            },
            "5": {
              "name": "クフライト",
              "effect": "味方全体のATKを8%アップし、敵全体のHPを3%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 6300,
            "ATK": 238,
            "MAG": 238,
            "DEF": 231,
            "MND": 231,
            "SPD": 320,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": null,
            "画像": "boss/42.png",
            "条件・補足": null,
            "技一覧": [
              "ライトニング・エナジーキューブ / 属性:光 / 攻撃区分:魔法 / 対象:敵全体 / 状態異常:眠り",
              "ネオマニプール / 属性:光 / 攻撃区分:魔法 / 対象:個別処理",
              "スクラッチソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-196-normal-0",
          "target": "180",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 光属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-196-normal-1",
          "target": "180",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "tag": "37"
            }
          ],
          "label": "光属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "170",
        "184",
        "216",
        "218"
      ]
    },
    {
      "id": "181",
      "uid": "MSB-197",
      "name": "覚醒モブヘルリリス",
      "image": "figboss/23.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "attribute": "火",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 290,
      "def": 280,
      "tags": [
        "03",
        "23",
        "26",
        "37",
        "48",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "ヘルバースト",
        "timing": "own-main",
        "effect": "相手1体のATK-40。そのフィギュアが次に攻撃するまでDEFも-20。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-40。そのフィギュアが次に攻撃するまでDEFも-20。",
        "program": 83,
        "sourceText": "相手1体のATK-40。そのフィギュアが次に攻撃するまでDEFも-20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MAG +5 & MP +20",
        "traitText": "火属性耐性 +15% & 魔法会心率 +3%",
        "soul": {
          "text": "敵単体に火属性の魔法中ダメージを与える。40%でやけどにする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "MAG +5 & MP +20",
          "trait": "火属性耐性 +15% & 魔法会心率 +3%",
          "accessorySkillName": "ヘルバースト",
          "accessorySkillEffect": "敵単体に火属性の魔法中ダメージを与える。40%でやけどにする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ヘルバースト",
              "effect": "センターの敵のDEFを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "ヘルバースト",
              "effect": "センターの敵のDEFを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 7252,
            "ATK": 261,
            "MAG": 261,
            "DEF": 253,
            "MND": 253,
            "SPD": 350,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.08,
            "回避率": 0.07,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": null,
            "画像": "boss/44.png",
            "条件・補足": null,
            "技一覧": [
              "ローズ・オブ・ファイヤー / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど",
              "ホノマグマ / 属性:火 / 攻撃区分:魔法 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-197-normal-0",
          "target": "181",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-197-normal-1",
          "target": "181",
          "fromClass": "middle",
          "materials": [
            {
              "id": "177"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "モブヘルリリス × 火属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        },
        {
          "id": "MSB-197-mob",
          "target": "181",
          "fromClass": null,
          "materials": [
            {
              "id": "177"
            },
            {
              "id": "145"
            }
          ],
          "label": "モブヘルリリス × モブフレイム",
          "basis": "MOBソウルフュージョン",
          "special": true,
          "bonusATK": 20,
          "bonusDEF": 20
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "182",
      "uid": "MSB-198",
      "name": "覚醒モブキリンリリス",
      "image": "figboss/24.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "attribute": "雷",
      "attackType": "魔法",
      "role": "防御・守護",
      "atk": 290,
      "def": 275,
      "tags": [
        "04",
        "23",
        "37",
        "48",
        "50",
        "51",
        "60"
      ],
      "soulSkill": {
        "name": "キリンブレイク",
        "timing": "own-main",
        "effect": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。",
        "timingLabel": "自分メイン",
        "description": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。 このスキル使用後も、このターンはフュージョン素材にできる。",
        "program": 55,
        "sourceText": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MAG +5 & MP +20",
        "traitText": "雷属性耐性 +15% & 魔法会心率 +3%",
        "soul": {
          "text": "敵単体に雷属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間10%アップする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "MAG +5 & MP +20",
          "trait": "雷属性耐性 +15% & 魔法会心率 +3%",
          "accessorySkillName": "キリンブレイク",
          "accessorySkillEffect": "敵単体に雷属性の魔法中ダメージを与え、味方全体のMNDを2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 キリンブレイク",
              "effect": "敵全体のSPDを15%ダウンさせ、HPを5%ダウンさせる"
            },
            "5": {
              "name": "キリンブレイク",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 7252,
            "ATK": 261,
            "MAG": 261,
            "DEF": 253,
            "MND": 253,
            "SPD": 350,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.08,
            "回避率": 0.07,
            "会心率": null,
            "属性": "雷",
            "通常攻撃区分": null,
            "画像": "boss/45.png",
            "条件・補足": null,
            "技一覧": [
              "サンダーボルト / 属性:雷 / 攻撃区分:魔法 / 対象:敵全体 / 状態異常:マヒ",
              "トルマデン / 属性:雷 / 攻撃区分:魔法 / 対象:個別処理",
              "ロングスクラッチカット / 属性:雷 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:マヒ"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-198-normal-0",
          "target": "182",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 雷属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-198-normal-1",
          "target": "182",
          "fromClass": "middle",
          "materials": [
            {
              "id": "178"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "モブキリンリリス × 雷属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        },
        {
          "id": "MSB-198-mob",
          "target": "182",
          "fromClass": null,
          "materials": [
            {
              "id": "178"
            },
            {
              "id": "92"
            }
          ],
          "label": "モブキリンリリス × モブイワキリ",
          "basis": "MOBソウルフュージョン",
          "special": true,
          "bonusATK": 20,
          "bonusDEF": 20
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "183",
      "uid": "MSB-199",
      "name": "覚醒モブリヴァリリス",
      "image": "figboss/25.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "attribute": "水",
      "attackType": "魔法",
      "role": "全体攻撃",
      "atk": 290,
      "def": 275,
      "tags": [
        "23",
        "26",
        "31",
        "37",
        "48",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "リヴァタイド",
        "timing": "own-main",
        "effect": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+30。",
        "timingLabel": "自分メイン",
        "description": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+30。",
        "program": 84,
        "sourceText": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+30。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MAG +5 & MP +20",
        "traitText": "水属性耐性 +15% & 魔法会心率 +3%",
        "soul": {
          "text": "敵全体に水属性の魔法小～中ダメージを与える"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "MAG +5 & MP +20",
          "trait": "水属性耐性 +15% & 魔法会心率 +3%",
          "accessorySkillName": "リヴァタイド",
          "accessorySkillEffect": "敵全体に水属性の魔法小～中ダメージを与える",
          "mobPieceSkills": {
            "1": {
              "name": "0 リヴァタイド",
              "effect": "敵全体のHPを6%ダウンさせ、ATKを8%ダウンさせる"
            },
            "5": {
              "name": "リヴァタイド",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 6888,
            "ATK": 252,
            "MAG": 252,
            "DEF": 245,
            "MND": 245,
            "SPD": 339,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.08,
            "回避率": 0.07,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "boss/46.png",
            "条件・補足": null,
            "技一覧": [
              "ダイダルローズ / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ネプマチューン / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-199-normal-0",
          "target": "183",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-199-normal-1",
          "target": "183",
          "fromClass": "middle",
          "materials": [
            {
              "id": "179"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "モブリヴァリリス × 水属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        },
        {
          "id": "MSB-199-mob",
          "target": "183",
          "fromClass": null,
          "materials": [
            {
              "id": "179"
            },
            {
              "id": "130"
            }
          ],
          "label": "モブリヴァリリス × モブウェイブ",
          "basis": "MOBソウルフュージョン",
          "special": true,
          "bonusATK": 20,
          "bonusDEF": 20
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "184",
      "uid": "MSB-200",
      "name": "覚醒モブクフリリス",
      "image": "figboss/26.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "attribute": "光",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 290,
      "def": 270,
      "tags": [
        "23",
        "26",
        "28",
        "37",
        "48",
        "50",
        "60"
      ],
      "soulSkill": {
        "name": "クフレイ",
        "timing": "own-main",
        "effect": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。",
        "timingLabel": "自分メイン",
        "description": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。 このスキル使用後も、このターンはフュージョン素材にできる。",
        "program": 55,
        "sourceText": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "MAG +5 & MP +20",
        "traitText": "光属性耐性 +15% & 魔法会心率 +3%",
        "soul": {
          "text": "敵単体に光属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "MAG +5 & MP +20",
          "trait": "光属性耐性 +15% & 魔法会心率 +3%",
          "accessorySkillName": "クフレイ",
          "accessorySkillEffect": "敵単体に光属性の魔法中ダメージを与え、MNDを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 クフレイ",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "クフレイ",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 6888,
            "ATK": 252,
            "MAG": 252,
            "DEF": 245,
            "MND": 245,
            "SPD": 339,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.08,
            "回避率": 0.07,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": null,
            "画像": "boss/47.png",
            "条件・補足": null,
            "技一覧": [
              "ライトニング・エナジーキューブ / 属性:光 / 攻撃区分:魔法 / 対象:敵全体 / 状態異常:眠り",
              "ネオマニプール / 属性:光 / 攻撃区分:魔法 / 対象:個別処理",
              "スクラッチソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-200-normal-0",
          "target": "184",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 光属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-200-normal-1",
          "target": "184",
          "fromClass": "middle",
          "materials": [
            {
              "id": "180"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "モブクフリリス × 光属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        },
        {
          "id": "MSB-200-mob",
          "target": "184",
          "fromClass": null,
          "materials": [
            {
              "id": "180"
            },
            {
              "id": "165"
            }
          ],
          "label": "モブクフリリス × モブネオンバルス",
          "basis": "MOBソウルフュージョン",
          "special": true,
          "bonusATK": 20,
          "bonusDEF": 20
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "203",
      "uid": "MSB-201",
      "name": "モブミラナイト",
      "image": "figboss/27.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "水",
      "attackType": "魔法",
      "role": "全体攻撃",
      "atk": 190,
      "def": 190,
      "tags": [
        "09",
        "31",
        "42",
        "49",
        "54",
        "55",
        "57"
      ],
      "soulSkill": {
        "name": "ミラランス",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 52,
        "sourceText": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3 & MND +3",
        "traitText": "砂漠での与ダメージ +7%",
        "soul": {
          "text": "敵全体に水属性の魔法小～中ダメージを与え、味方全体のMAGを2ターンの間15%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "DEF +3 & MND +3",
          "trait": "砂漠での与ダメージ +7%",
          "accessorySkillName": "ミラランス",
          "accessorySkillEffect": "敵全体に水属性の魔法小～中ダメージを与え、味方全体のMAGを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミラランス",
              "effect": "味方全体のATKを12%アップし、敵全体のHPを5%ダウンさせる"
            },
            "5": {
              "name": "ミラランス",
              "effect": "味方全体のATKを8%アップし、敵全体のHPを3%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 5412,
            "ATK": 216,
            "MAG": 216,
            "DEF": 209,
            "MND": 209,
            "SPD": 289,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/39.png",
            "条件・補足": null,
            "技一覧": [
              "シャドウ・オーラ・スパイラル / 属性:水 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:眠り",
              "ソウル・ダイダル・スパイラル / 属性:水 / 攻撃区分:魔法 / 対象:敵全体",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-201-normal-0",
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
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-201-normal-1",
          "target": "203",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "49"
            }
          ],
          "label": "水属性 × 斬撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "162",
        "183",
        "213",
        "214"
      ]
    },
    {
      "id": "204",
      "uid": "MSB-202",
      "name": "モブミラアース",
      "image": "figboss/28.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "地",
      "attackType": "物理",
      "role": "妨害",
      "atk": 190,
      "def": 180,
      "tags": [
        "02",
        "09",
        "23",
        "26",
        "42",
        "54",
        "57"
      ],
      "soulSkill": {
        "name": "ミラアース",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 52,
        "sourceText": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3 & ATK +3",
        "traitText": "砂漠での会心率 +7%",
        "soul": {
          "text": "敵全体に地属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "DEF +3 & ATK +3",
          "trait": "砂漠での会心率 +7%",
          "accessorySkillName": "ミラアース",
          "accessorySkillEffect": "敵全体に地属性の物理中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミラアース",
              "effect": "敵全体のSPDを15%ダウンさせ、HPを5%ダウンさせる"
            },
            "5": {
              "name": "ミラアース",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 5412,
            "ATK": 216,
            "MAG": 216,
            "DEF": 209,
            "MND": 209,
            "SPD": 289,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/37.png",
            "条件・補足": null,
            "技一覧": [
              "グラビディクラッシュ / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ソウル・アース・グラビディクラッシュ / 属性:地 / 攻撃区分:物理 / 対象:敵全体",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-202-normal-0",
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
          "label": "地属性 × 地属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-202-normal-1",
          "target": "204",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "地"
            },
            {
              "tag": "57"
            }
          ],
          "label": "地属性 × 不気味なオーラタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "172",
        "174"
      ]
    },
    {
      "id": "205",
      "uid": "MSB-203",
      "name": "モブミラタイム",
      "image": "figboss/29.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "光",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 190,
      "def": 175,
      "tags": [
        "04",
        "09",
        "37",
        "42",
        "54",
        "57",
        "58"
      ],
      "soulSkill": {
        "name": "ミラタイム",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 52,
        "sourceText": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3 & MAG +3",
        "traitText": "砂漠での魔法与ダメージ +10%",
        "soul": {
          "text": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "DEF +3 & MAG +3",
          "trait": "砂漠での魔法与ダメージ +10%",
          "accessorySkillName": "ミラタイム",
          "accessorySkillEffect": "敵全体に闇属性の魔法小～中ダメージを与え、30%で毒または混乱にする。発動後、自分の必殺技CTを1ターン短縮する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミラタイム",
              "effect": "味方全体のATKを12%アップし、敵全体のHPを5%ダウンさせる"
            },
            "5": {
              "name": "ミラタイム",
              "effect": "味方全体のATKを8%アップし、敵全体のHPを3%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 5412,
            "ATK": 216,
            "MAG": 216,
            "DEF": 209,
            "MND": 209,
            "SPD": 289,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": "物理",
            "画像": "enemy/40.png",
            "条件・補足": null,
            "技一覧": [
              "デザート・ストーム・タイム / 属性:光 / 攻撃区分:魔法 / 対象:敵全体 / 状態異常:マヒ",
              "ソウル・マジック・ゴーストタイム / 属性:光 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:ひるみ",
              "ネオマソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-203-normal-0",
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
          "label": "光属性 × 光属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-203-normal-1",
          "target": "205",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "tag": "37"
            }
          ],
          "label": "光属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "170",
        "184",
        "216",
        "218",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "206",
      "uid": "MSB-204",
      "name": "モブミラカラミ",
      "image": "figboss/30.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 170,
      "def": 195,
      "tags": [
        "03",
        "09",
        "37",
        "42",
        "54",
        "56",
        "57"
      ],
      "soulSkill": {
        "name": "ミラバインド",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 52,
        "sourceText": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "DEF +3",
        "traitText": "砂漠でのダメージ軽減 +10%",
        "soul": {
          "text": "敵全体のATKとSPDを2ターンの間15%ダウンさせ、30%で混乱にする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "砂漠でのダメージ軽減 +10%",
          "accessorySkillName": "ミラバインド",
          "accessorySkillEffect": "敵全体のATKとSPDを2ターンの間15%ダウンさせ、30%で混乱にする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミラバインド",
              "effect": "センターの敵のDEFを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "ミラバインド",
              "effect": "センターの敵のDEFを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 5412,
            "ATK": 216,
            "MAG": 216,
            "DEF": 209,
            "MND": 209,
            "SPD": 289,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/38.png",
            "条件・補足": null,
            "技一覧": [
              "ホワイトミイラフレイム / 属性:火 / 攻撃区分:魔法 / 対象:敵全体",
              "ソウル・ヘル・ミイラフレイム / 属性:火 / 攻撃区分:魔法 / 対象:個別処理",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-204-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-204-normal-1",
          "target": "206",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "37"
            }
          ],
          "label": "火属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "168",
        "169",
        "170",
        "181",
        "209",
        "210",
        "214",
        "216",
        "218"
      ]
    },
    {
      "id": "207",
      "uid": "MSB-205",
      "name": "モブリリス",
      "image": "figboss/31.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "全体攻撃",
      "atk": 230,
      "def": 210,
      "tags": [
        "05",
        "23",
        "25",
        "26",
        "37",
        "48",
        "50",
        "58",
        "60"
      ],
      "soulSkill": {
        "name": "ブラックローズ",
        "timing": "own-main",
        "effect": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+20。",
        "timingLabel": "自分メイン",
        "description": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+20。",
        "program": 85,
        "sourceText": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "MAG +5 & MND +5 MP +25",
        "traitText": "魔法会心率 +5% & 全体攻撃の威力+10%",
        "soul": {
          "text": "敵全体に闇属性の魔法中～大ダメージを与え、味方全体のMAGを2ターンの間20%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "MAG +5 & MND +5 MP +25",
          "trait": "魔法会心率 +5% & 全体攻撃の威力+10%",
          "accessorySkillName": "ブラックローズ",
          "accessorySkillEffect": "敵全体に闇属性の魔法中～大ダメージを与え、味方全体のMAGを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ブラックローズ",
              "effect": "敵全体のSPDを15%ダウンさせ、HPを5%ダウンさせる"
            },
            "5": {
              "name": "ブラックローズ",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 14835,
            "ATK": 363,
            "MAG": 363,
            "DEF": 284,
            "MND": 284,
            "SPD": 415,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "boss/21.png",
            "条件・補足": null,
            "技一覧": [
              "ブラックホール / 攻撃区分:魔法 / 対象:敵全体",
              "薔薇の鼓動 / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒",
              "ミラマゾーン / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-205-normal-0",
          "target": "207",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-205-normal-1",
          "target": "207",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "37"
            }
          ],
          "label": "闇属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "164",
        "170",
        "216",
        "217",
        "218",
        "mq:eventfig/55",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "208",
      "uid": "MSB-206",
      "name": "モブ閻魔",
      "image": "figboss/32.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "妨害",
      "atk": 220,
      "def": 220,
      "tags": [
        "03",
        "25",
        "30",
        "32",
        "34",
        "48",
        "49",
        "56",
        "57"
      ],
      "soulSkill": {
        "name": "エンマフレア",
        "timing": "own-main",
        "effect": "相手1体のATK-30。そのフィギュアが次に攻撃するまでDEFも-20。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-30。そのフィギュアが次に攻撃するまでDEFも-20。",
        "program": 48,
        "sourceText": "相手1体のATK-30。そのフィギュアが次に攻撃するまでDEFも-20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "ATK +5 & DEF +5 HP +25",
        "traitText": "火属性与ダメージ+10% & 状態異常耐性+5%",
        "soul": {
          "text": "敵単体に火属性の物理中～大ダメージを与え、40%でやけどにする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "ATK +5 & DEF +5 HP +25",
          "trait": "火属性与ダメージ+10% & 状態異常耐性+5%",
          "accessorySkillName": "エンマフレア",
          "accessorySkillEffect": "敵単体に火属性の物理中～大ダメージを与え、40%でやけどにする",
          "mobPieceSkills": {
            "1": {
              "name": "0 エンマフレア",
              "effect": "味方全体のATKを15%アップし、正面の敵のHPを7%ダウンさせる"
            },
            "5": {
              "name": "エンマフレア",
              "effect": "味方全体のATKを10%アップし、正面の敵のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 16728,
            "ATK": 392,
            "MAG": 392,
            "DEF": 307,
            "MND": 307,
            "SPD": 447,
            "行動回数下限": 1,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.12,
            "回避率": 0.06,
            "会心率": 0.1,
            "属性": "火",
            "通常攻撃区分": null,
            "画像": "boss/30.png",
            "条件・補足": "第1行動は通常攻撃、10%で通常攻撃の100%の連撃。火属性無効",
            "技一覧": [
              "ジャッジメントソード / 属性:火 / 攻撃区分:物理 / 対象:敵全体 / 状態異常:ひるみ",
              "ジャッジメントフレイム / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど",
              "ホノマグマ / 属性:火 / 攻撃区分:魔法 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-206-normal-0",
          "target": "208",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-206-normal-1",
          "target": "208",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "56"
            }
          ],
          "label": "火属性 × 火炎タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "164",
        "168",
        "169",
        "181",
        "209",
        "210",
        "213",
        "214"
      ]
    },
    {
      "id": "209",
      "uid": "MSB-207",
      "name": "モブ閻魔第二形態",
      "image": "figboss/33.png",
      "rarity": "UR",
      "soulClass": "mob",
      "attribute": "火",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 310,
      "def": 305,
      "tags": [
        "03",
        "23",
        "25",
        "30",
        "32",
        "48",
        "49",
        "56",
        "57"
      ],
      "soulSkill": {
        "name": "エンマバースト",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-40。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-40。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 72,
        "sourceText": "相手フィールド全体のDEF-40。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "ATK +5 & SPD +5 HP +25",
        "traitText": "火属性ダメージ軽減+15% & 状態異常耐性+5%",
        "soul": {
          "text": "敵全体に火属性の物理中ダメージを与え、自分のATKとSPDを2ターンの間20%アップする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "ATK +5 & SPD +5 HP +25",
          "trait": "火属性ダメージ軽減+15% & 状態異常耐性+5%",
          "accessorySkillName": "エンマバースト",
          "accessorySkillEffect": "敵全体に火属性の物理中ダメージを与え、自分のATKとSPDを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 エンマバースト",
              "effect": "味方全体のATKを15%アップし、正面の敵のHPを7%ダウンさせる"
            },
            "5": {
              "name": "エンマバースト",
              "effect": "味方全体のATKを10%アップし、正面の敵のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-207-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-207-normal-1",
          "target": "209",
          "fromClass": "middle",
          "materials": [
            {
              "id": "208"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "モブ閻魔 × 火属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "210",
      "uid": "MSB-208",
      "name": "モブ閻魔第最終形態",
      "image": "figboss/34.png",
      "rarity": "UR",
      "soulClass": "mob",
      "attribute": "火",
      "attackType": "物理",
      "role": "妨害",
      "atk": 310,
      "def": 305,
      "tags": [
        "03",
        "23",
        "25",
        "30",
        "32",
        "48",
        "49",
        "56",
        "57"
      ],
      "soulSkill": {
        "name": "エンマジャッジ",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-40。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-40。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 72,
        "sourceText": "相手フィールド全体のDEF-40。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "ATK +10 & HP +25",
        "traitText": "会心率+5% & 状態異常耐性+5%",
        "soul": {
          "text": "敵全体に火属性の物理大ダメージを与え、敵全体のATKとDEFを2ターンの間15%ダウンさせる"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "ATK +10 & HP +25",
          "trait": "会心率+5% & 状態異常耐性+5%",
          "accessorySkillName": "エンマジャッジ",
          "accessorySkillEffect": "敵全体に火属性の物理大ダメージを与え、敵全体のATKとDEFを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 エンマジャッジ",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "エンマジャッジ",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-208-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-208-normal-1",
          "target": "210",
          "fromClass": "middle",
          "materials": [
            {
              "id": "208"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "モブ閻魔 × 火属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "211",
      "uid": "MSB-209",
      "name": "モブ怪人幹部青",
      "image": "figboss/35.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "水",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 190,
      "def": 180,
      "tags": [
        "26",
        "29",
        "31",
        "32",
        "34",
        "42",
        "49"
      ],
      "soulSkill": {
        "name": "ブルークロス",
        "timing": "own-main",
        "effect": "このターンATK+30。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+30。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。",
        "program": 86,
        "sourceText": "このターンATK+30。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +3 & DEF +3",
        "traitText": "水属性会心率+4%",
        "soul": {
          "text": "敵単体に水属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "ATK +3 & DEF +3",
          "trait": "水属性会心率+4%",
          "accessorySkillName": "ブルークロス",
          "accessorySkillEffect": "敵単体に水属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ブルークロス",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "ブルークロス",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 6650,
            "ATK": 247,
            "MAG": 247,
            "DEF": 239,
            "MND": 239,
            "SPD": 331,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "enemy/150.png",
            "条件・補足": null,
            "技一覧": [
              "アクノウォールウェーブ / 属性:水 / 攻撃区分:魔法 / 対象:敵全体",
              "キーキー連撃 / 属性:無 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:ひるみ",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-209-normal-0",
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
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-209-normal-1",
          "target": "211",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "49"
            }
          ],
          "label": "水属性 × 斬撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "183",
        "213",
        "214",
        "217"
      ]
    },
    {
      "id": "212",
      "uid": "MSB-210",
      "name": "モブ怪人幹部赤",
      "image": "figboss/36.png",
      "rarity": "SSR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 200,
      "def": 170,
      "tags": [
        "02",
        "26",
        "29",
        "32",
        "34",
        "42",
        "49"
      ],
      "soulSkill": {
        "name": "レッドクロス",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。このターンATK=DEFでもその相手を撃破できる。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。このターンATK=DEFでもその相手を撃破できる。",
        "program": 49,
        "sourceText": "相手1体のDEF-30。このターンATK=DEFでもその相手を撃破できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +3 & DEF +3",
        "traitText": "火属性会心率+4%",
        "soul": {
          "text": "敵単体に火属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "ATK +3 & DEF +3",
          "trait": "火属性会心率+4%",
          "accessorySkillName": "レッドクロス",
          "accessorySkillEffect": "敵単体に火属性の物理中ダメージを与え、自分の会心率を2ターンの間12%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 レッドクロス",
              "effect": "敵全体のHPを6%ダウンさせ、SPDを8%ダウンさせる"
            },
            "5": {
              "name": "レッドクロス",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 6650,
            "ATK": 247,
            "MAG": 247,
            "DEF": 239,
            "MND": 239,
            "SPD": 331,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": null,
            "画像": "enemy/151.png",
            "条件・補足": null,
            "技一覧": [
              "アクノフレイムソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "キーキー連撃 / 属性:無 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-210-normal-0",
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
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-210-normal-1",
          "target": "212",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "49"
            }
          ],
          "label": "火属性 × 斬撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "168",
        "169",
        "181",
        "209",
        "210",
        "213",
        "214",
        "217"
      ]
    },
    {
      "id": "213",
      "uid": "MSB-211",
      "name": "モブ怪人幹部青変身",
      "image": "figboss/37.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "attribute": "水",
      "attackType": "物理",
      "role": "連続攻撃",
      "atk": 290,
      "def": 270,
      "tags": [
        "26",
        "31",
        "32",
        "34",
        "42",
        "49",
        "59"
      ],
      "soulSkill": {
        "name": "ブルークロスX",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+30（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+30（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 78,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+30（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +4 & DEF +3",
        "traitText": "水属性会心率+7%",
        "soul": {
          "text": "敵単体に水属性の物理中～大ダメージを2回与え、自分の会心率を2ターンの間15%アップする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "ATK +4 & DEF +3",
          "trait": "水属性会心率+7%",
          "accessorySkillName": "ブルークロスX",
          "accessorySkillEffect": "敵単体に水属性の物理中～大ダメージを2回与え、自分の会心率を2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ブルークロスX",
              "effect": "正面の敵のATKを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "ブルークロスX",
              "effect": "正面の敵のATKを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-211-normal-0",
          "target": "213",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-211-normal-1",
          "target": "213",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "49"
            }
          ],
          "label": "水属性 × 斬撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "214",
      "uid": "MSB-212",
      "name": "モブ怪人幹部赤変身",
      "image": "figboss/38.png",
      "rarity": "SSR",
      "soulClass": "mob",
      "attribute": "火",
      "attackType": "物理",
      "role": "連続攻撃",
      "atk": 290,
      "def": 280,
      "tags": [
        "02",
        "26",
        "32",
        "34",
        "42",
        "49",
        "59"
      ],
      "soulSkill": {
        "name": "レッドクロスX",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+30（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+30（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 78,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+30（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "SSR",
        "statsText": "ATK +3 & DEF +4",
        "traitText": "火属性会心率+7%",
        "soul": {
          "text": "敵単体に火属性の物理中～大ダメージを2回与え、自分の会心率を2ターンの間15%アップする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "ATK +3 & DEF +4",
          "trait": "火属性会心率+7%",
          "accessorySkillName": "レッドクロスX",
          "accessorySkillEffect": "敵単体に火属性の物理中～大ダメージを2回与え、自分の会心率を2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 レッドクロスX",
              "effect": "正面の敵1体のHPを10%ダウンさせ、DEFを10%ダウンさせる"
            },
            "5": {
              "name": "レッドクロスX",
              "effect": "正面の敵1体のHPを7%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-212-normal-0",
          "target": "214",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-212-normal-1",
          "target": "214",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "49"
            }
          ],
          "label": "火属性 × 斬撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "215",
      "uid": "MSB-213",
      "name": "モブナビ",
      "image": "figboss/39.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "光",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 215,
      "def": 230,
      "tags": [
        "08",
        "25",
        "30",
        "32",
        "36",
        "37",
        "52",
        "57",
        "58"
      ],
      "soulSkill": {
        "name": "ナビジャック",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 52,
        "sourceText": "相手フィールド全体のDEF-30。このターン、相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "MAG +5 & MND +5 & HP +30",
        "traitText": "物理ダメージ軽減 +7%",
        "soul": {
          "text": "敵全体のATK・DEF・SPDを2ターンの間10%ダウンさせ、味方全体のMAGとMNDを15%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "MAG +5 & MND +5 & HP +30",
          "trait": "物理ダメージ軽減 +7%",
          "accessorySkillName": "ナビジャック",
          "accessorySkillEffect": "敵全体のATK・DEF・SPDを2ターンの間10%ダウンさせ、味方全体のMAGとMNDを15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ナビジャック",
              "effect": "味方全体のSPDとDEFを9%アップする"
            },
            "5": {
              "name": "ナビジャック",
              "effect": "味方全体のSPDとDEFを6%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 16176,
            "ATK": 384,
            "MAG": 384,
            "DEF": 300,
            "MND": 300,
            "SPD": 438,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.8,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": null,
            "画像": "boss/52.png",
            "条件・補足": null,
            "技一覧": [
              "振り回した小さな手 / 属性:光 / 攻撃区分:物理 / 対象:敵全体",
              "石ころを靴に乗せたケンケンパ / 属性:光 / 攻撃区分:物理 / 対象:個別処理",
              "ネオマニプール / 属性:光 / 攻撃区分:魔法 / 対象:個別処理",
              "スクラッチソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-213-normal-0",
          "target": "215",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 光属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-213-normal-1",
          "target": "215",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "tag": "37"
            }
          ],
          "label": "光属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "170",
        "184",
        "216",
        "218",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "216",
      "uid": "MSB-214",
      "name": "モブナビマスター",
      "image": "figboss/40.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "attribute": "光",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 375,
      "def": 370,
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
      "soulSkill": {
        "name": "ナビオーバー",
        "timing": "skill-response",
        "effect": "相手のソウルスキルを無効にする。その後、自分フィールドのフィギュア1体のATKとDEFを+40する。",
        "timingLabel": "相手スキル発動時",
        "description": "相手のソウルスキルを無効にする。その後、自分フィールドのフィギュア1体のATKとDEFを+40する。",
        "program": 87,
        "sourceText": "相手のソウルスキルを無効にする。その後、自分フィールドのフィギュア1体のATKとDEFを+40する。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "MOB",
        "statsText": "MAG +5 & MND +5 & HP +30 & MP +30",
        "traitText": "魔法与ダメージ +7%",
        "soul": {
          "text": "敵全体のATK・DEF・SPDを2ターンの間15%ダウンさせ、味方全体のMAG・MND・SPDを20%アップする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "MAG +5 & MND +5 & HP +30 & MP +30",
          "trait": "魔法与ダメージ +7%",
          "accessorySkillName": "ナビオーバー",
          "accessorySkillEffect": "敵全体のATK・DEF・SPDを2ターンの間15%ダウンさせ、味方全体のMAG・MND・SPDを20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ナビオーバー",
              "effect": "味方全体のATKとSPDを9%アップする"
            },
            "5": {
              "name": "ナビオーバー",
              "effect": "味方全体のATKとSPDを6%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 16176,
            "ATK": 384,
            "MAG": 384,
            "DEF": 300,
            "MND": 300,
            "SPD": 438,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.8,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": null,
            "画像": "boss/53.png",
            "条件・補足": null,
            "技一覧": [
              "振り回した小さな手 / 属性:光 / 攻撃区分:物理 / 対象:敵全体",
              "石ころを靴に乗せたケンケンパ / 属性:光 / 攻撃区分:物理 / 対象:個別処理",
              "ネオマニプール / 属性:光 / 攻撃区分:魔法 / 対象:個別処理",
              "スクラッチソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-214-normal-0",
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
          "label": "光属性 × 光属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-214-normal-1",
          "target": "216",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "tag": "37"
            }
          ],
          "label": "光属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "217",
      "uid": "MSB-215",
      "name": "モブ怪人のボス",
      "image": "figboss/41.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "attribute": "闇/無",
      "attackType": "物理",
      "role": "妨害",
      "atk": 375,
      "def": 370,
      "tags": [
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
        "52"
      ],
      "soulSkill": {
        "name": "クロスブレイカー",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEFを-30する。このターン、このフィギュアの攻撃で撃破した時の差分ライフダメージを+20する。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEFを-30する。このターン、このフィギュアの攻撃で撃破した時の差分ライフダメージを+20する。",
        "program": 88,
        "sourceText": "相手フィールド全体のDEFを-30する。このターン、このフィギュアの攻撃で撃破した時の差分ライフダメージを+20する。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "MOB",
        "statsText": "ATK +5 & DEF +5 & HP +30",
        "traitText": "特技会心率 +10%",
        "soul": {
          "text": "敵全体に無属性の物理大ダメージを与え、敵全体のDEFを2ターンの間20%ダウンさせる。さらに自分の特技会心率を15%アップする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "ATK +5 & DEF +5 & HP +30",
          "trait": "特技会心率 +10%",
          "accessorySkillName": "クロスブレイカー",
          "accessorySkillEffect": "敵全体に無属性の物理大ダメージを与え、敵全体のDEFを2ターンの間20%ダウンさせる。さらに自分の特技会心率を15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 クロスブレイカー",
              "effect": "敵全体のATKを15%ダウンさせ、味方全体のDEFを8%アップする"
            },
            "5": {
              "name": "クロスブレイカー",
              "effect": "敵全体のATKを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 16176,
            "ATK": 384,
            "MAG": 384,
            "DEF": 300,
            "MND": 300,
            "SPD": 438,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.2,
            "回避率": 0,
            "会心率": null,
            "属性": "闇・無",
            "通常攻撃区分": null,
            "画像": "boss/37.png",
            "条件・補足": null,
            "技一覧": [
              "パーフェクトスマイル / 属性:闇 / 攻撃区分:物理 / 対象:敵全体 / 状態異常:眠り",
              "アクノソシキ / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:ひるみ",
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-215-normal-0",
          "target": "217",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "闇属性 × 無属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-215-normal-1",
          "target": "217",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "51"
            }
          ],
          "label": "闇属性 × 雷撃タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        },
        {
          "id": "MSB-215-mob",
          "target": "217",
          "fromClass": null,
          "materials": [
            {
              "id": "211"
            },
            {
              "id": "212"
            }
          ],
          "label": "モブ怪人幹部青 × モブ怪人幹部赤",
          "basis": "MOBソウルフュージョン",
          "special": true,
          "bonusATK": 20,
          "bonusDEF": 20
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "218",
      "uid": "MSB-216",
      "name": "ウルモブリリス",
      "image": "figboss/42.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 375,
      "def": 370,
      "tags": [
        "09",
        "23",
        "25",
        "26",
        "30",
        "32",
        "37",
        "39",
        "48",
        "51",
        "57",
        "58"
      ],
      "soulSkill": {
        "name": "ウルローズ",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員へ1回ずつ攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員へ1回ずつ攻撃できる。",
        "program": 89,
        "sourceText": "相手フィールド全体のDEFを-30する。このターン、このフィギュアは相手フィールド全員へ1回ずつ攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "MOB",
        "statsText": "MAG +10 & DEF +5 & MND +10",
        "traitText": "闇魔法会心率 +20%",
        "soul": {
          "text": "敵全体に闇属性の魔法大ダメージを与え、40%で毒と混乱のどちらかを付与する。自分の魔法会心率を15%アップする"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "MAG +10 & DEF +5 & MND +10",
          "trait": "闇魔法会心率 +20%",
          "accessorySkillName": "ウルローズ",
          "accessorySkillEffect": "敵全体に闇属性の魔法大ダメージを与え、40%で毒と混乱のどちらかを付与する。自分の魔法会心率を15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ウルローズ",
              "effect": "味方全体のATKを12%アップし、敵全体のHPを5%ダウンさせる"
            },
            "5": {
              "name": "ウルローズ",
              "effect": "味方全体のATKを8%アップし、敵全体のHPを3%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 18734,
            "ATK": 420,
            "MAG": 420,
            "DEF": 330,
            "MND": 330,
            "SPD": 480,
            "行動回数下限": 3,
            "行動回数上限": 4,
            "ダメージ軽減率": 0.15,
            "回避率": 0.06,
            "会心率": 0.1,
            "属性": "闇",
            "通常攻撃区分": null,
            "画像": "boss/36.png",
            "条件・補足": "第1行動は通常攻撃、12%で通常攻撃の120%の連撃。魔法を5%で吸収し最大HPの5%回復",
            "技一覧": [
              "ブラックホール / 属性:闇 / 攻撃区分:魔法 / 対象:敵全体",
              "薔薇の鼓動 / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒",
              "キング・ダーク・カノン / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "マスター・オブ・ピラミッド / 属性:闇 / 攻撃区分:魔法 / 対象:敵全体 / 状態異常:ひるみ",
              "ミラマゾーン / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-216-normal-0",
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
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-216-normal-1",
          "target": "218",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "37"
            }
          ],
          "label": "闇属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "219",
      "uid": "MSB-217",
      "name": "モブネプチューン",
      "image": "figboss/43.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "水",
      "attackType": "物理",
      "role": "連続攻撃",
      "atk": 230,
      "def": 210,
      "tags": [
        "04",
        "09",
        "25",
        "30",
        "32",
        "34",
        "36",
        "45",
        "55"
      ],
      "soulSkill": {
        "name": "ネプチューンアタック",
        "timing": "own-main",
        "effect": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+15（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+15（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 90,
        "sourceText": "このターン最大5回攻撃できる。攻撃するたび、このターン中ATK+15（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_list_monsters_bosses.txt",
        "rarity": "UR",
        "statsText": "ATK +5 & HP +20",
        "traitText": "水属性耐性 +10% & 会心率 3%",
        "soul": {
          "text": "敵単体に水属性の物理ダメージを5回に分けて与える。合計で中～大ダメージ。自分のATKを2ターンの間20%アップする"
        },
        "decision": "ボス級の主力駒としてミドルソウル",
        "basis": {
          "statusEffect": "ATK +5 & HP +20",
          "trait": "水属性耐性 +10% & 会心率 3%",
          "accessorySkillName": "ネプチューンアタック",
          "accessorySkillEffect": "敵単体に水属性の物理ダメージを5回に分けて与える。合計で中～大ダメージ。自分のATKを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ネプチューンアタック",
              "effect": "正面の敵のHPを14%ダウンさせ、DEFを8%ダウンさせる"
            },
            "5": {
              "name": "ネプチューンアタック",
              "effect": "正面の敵のHPを9%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 8004,
            "ATK": 245,
            "MAG": 245,
            "DEF": 190,
            "MND": 190,
            "SPD": 277,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "boss/008.png",
            "条件・補足": null,
            "技一覧": [
              "ネプチューン・トライデント / 属性:水 / 攻撃区分:物理 / 対象:敵全体",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "ボス級の主力駒としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-217-normal-0",
          "target": "219",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "attribute": "水"
            }
          ],
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-217-normal-1",
          "target": "219",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "55"
            }
          ],
          "label": "水属性 × スピードスタータグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "183",
        "213"
      ]
    },
    {
      "id": "mq:eventfig/01",
      "uid": "MSB-218",
      "name": "モブビリオン",
      "image": "eventfig/01.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "妨害",
      "atk": 140,
      "def": 140,
      "tags": [
        "04",
        "09",
        "25",
        "32",
        "34",
        "41",
        "51",
        "53",
        "55"
      ],
      "soulSkill": {
        "name": "ビリオンラッシュ",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 42,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK + 5 & DEF +5 & HP+10",
        "traitText": "物理会心率 ＋2% & マヒ耐性+30%",
        "soul": {
          "text": "敵単体に無属性の物理中～大ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK + 5 & DEF +5 & HP+10",
          "trait": "物理会心率 ＋2% & マヒ耐性+30%",
          "accessorySkillName": "ビリオンラッシュ",
          "accessorySkillEffect": "敵単体に無属性の物理中～大ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ビリオンラッシュ",
              "effect": "正面の敵のATKを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "ビリオンラッシュ",
              "effect": "正面の敵のATKを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 1656,
            "ATK": 76,
            "MAG": 76,
            "DEF": 56,
            "MND": 56,
            "SPD": 74,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "雷",
            "通常攻撃区分": null,
            "画像": "spenemy/020.png",
            "条件・補足": null,
            "技一覧": [
              "ビリオンサンダー / 属性:雷 / 攻撃区分:魔法 / 対象:敵全体",
              "ビリオンナックル / 属性:雷 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:ひるみ"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "93",
        "103",
        "120",
        "202",
        "159",
        "166",
        "175",
        "178",
        "219",
        "mq:eventfig/29",
        "mq:eventfig/48",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/02",
      "uid": "MSB-219",
      "name": "モブカネドール",
      "image": "eventfig/02.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "無",
      "attackType": "物理",
      "role": "防御・支援",
      "atk": 120,
      "def": 150,
      "tags": [
        "08",
        "09",
        "25",
        "28",
        "37",
        "42",
        "53",
        "58",
        "73"
      ],
      "soulSkill": {
        "name": "カネノオト",
        "timing": "own-main",
        "effect": "相手フィールド1体の属性をターン終了まで無属性として扱う。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド1体の属性をターン終了まで無属性として扱う。",
        "program": 15,
        "sourceText": "相手フィールド1体の属性をターン終了まで無属性として扱う。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "MND + 5 & DEF +5 & HP+10",
        "traitText": "コイン獲得量 ＋10% & 経験値獲得量+10%",
        "soul": {
          "text": "この戦闘でフィギュアスキルを発動した場合、戦闘終了時の獲得コインと獲得経験値を20%アップする。味方全体のMNDを2ターンの間15%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "MND + 5 & DEF +5 & HP+10",
          "trait": "コイン獲得量 ＋10% & 経験値獲得量+10%",
          "accessorySkillName": "カネノオト",
          "accessorySkillEffect": "この戦闘でフィギュアスキルを発動した場合、戦闘終了時の獲得コインと獲得経験値を20%アップする。味方全体のMNDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 カネノオト",
              "effect": "敵全体のATKとDEFを9%ダウンさせる"
            },
            "5": {
              "name": "カネノオト",
              "effect": "敵全体のATKとDEFを6%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 2130,
            "ATK": 94,
            "MAG": 94,
            "DEF": 71,
            "MND": 71,
            "SPD": 96,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0.1,
            "会心率": 0,
            "属性": "無",
            "通常攻撃区分": null,
            "画像": "spenemy/023.png",
            "条件・補足": null,
            "技一覧": [
              "コインラッシュ / 属性:無 / 攻撃区分:物理 / 対象:敵全体 / 状態異常:混乱",
              "コインガード / 属性:無 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "103",
        "104",
        "109",
        "112",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/47",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/03",
      "uid": "MSB-220",
      "name": "モブカネドールⅡ",
      "image": "eventfig/03.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "光",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 220,
      "def": 220,
      "tags": [
        "08",
        "09",
        "25",
        "37",
        "42",
        "53",
        "58",
        "73",
        "81"
      ],
      "soulSkill": {
        "name": "カネノオトDX",
        "timing": "skill-response",
        "effect": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "timingLabel": "相手スキル発動時",
        "description": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "program": 14,
        "sourceText": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK + 5 & DEF +5 & HP+10",
        "traitText": "コイン獲得量 ＋10% & 経験値獲得量+10%",
        "soul": {
          "text": "この戦闘でフィギュアスキルを発動した場合、戦闘終了時の獲得コインと獲得経験値を25%アップする。味方全体のATKとDEFを2ターンの間15%アップする"
        },
        "decision": "強化形態・上位個体・高性能個体としてミドルソウル",
        "basis": {
          "statusEffect": "ATK + 5 & DEF +5 & HP+10",
          "trait": "コイン獲得量 ＋10% & 経験値獲得量+10%",
          "accessorySkillName": "カネノオトDX",
          "accessorySkillEffect": "この戦闘でフィギュアスキルを発動した場合、戦闘終了時の獲得コインと獲得経験値を25%アップする。味方全体のATKとDEFを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 カネノオトDX",
              "effect": "味方全体のATKとDEFを10%アップする"
            },
            "5": {
              "name": "カネノオトDX",
              "effect": "味方全体のATKとDEFを7%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "強化形態・上位個体・高性能個体としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-220-normal-0",
          "target": "mq:eventfig/03",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "光"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "光属性 × 光属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-220-normal-1",
          "target": "mq:eventfig/03",
          "fromClass": "seed",
          "materials": [
            {
              "id": "mq:eventfig/02"
            },
            {
              "attribute": "光"
            }
          ],
          "label": "モブカネドール × 光属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "170",
        "184",
        "216",
        "218",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "mq:eventfig/04",
      "uid": "MSB-221",
      "name": "モブゼノン",
      "image": "eventfig/04.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 150,
      "def": 130,
      "tags": [
        "03",
        "09",
        "25",
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
        "effect": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "program": 6,
        "sourceText": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK + 5 & SPD +5 & MP+20",
        "traitText": "雷属性ダメージ軽減 ＋5% & マヒ耐性+30%",
        "soul": {
          "text": "敵単体に雷属性の魔法中～大ダメージを与え、40%でマヒにする。発動後、自分の必殺技CTを1ターン短縮する"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK + 5 & SPD +5 & MP+20",
          "trait": "雷属性ダメージ軽減 ＋5% & マヒ耐性+30%",
          "accessorySkillName": "ゼノボルト",
          "accessorySkillEffect": "敵単体に雷属性の魔法中～大ダメージを与え、40%でマヒにする。発動後、自分の必殺技CTを1ターン短縮する",
          "mobPieceSkills": {
            "1": {
              "name": "0 ゼノボルト",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "ゼノボルト",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 2662,
            "ATK": 113,
            "MAG": 113,
            "DEF": 85,
            "MND": 85,
            "SPD": 119,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0.05,
            "会心率": 0.1,
            "属性": "雷",
            "通常攻撃区分": null,
            "画像": "spenemy/021.png",
            "条件・補足": null,
            "技一覧": [
              "ゼノン・イカヅチ / 属性:雷 / 攻撃区分:魔法 / 対象:敵全体 / 状態異常:マヒ",
              "ゼノン・ブーメラン / 属性:雷 / 攻撃区分:物理 / 対象:敵全体 / 状態異常:ひるみ"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "96",
        "99",
        "103",
        "104",
        "109",
        "112",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "165",
        "166",
        "171",
        "175",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/29",
        "mq:eventfig/45",
        "mq:eventfig/48",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/05",
      "uid": "MSB-222",
      "name": "モブサイキック",
      "image": "eventfig/05.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 145,
      "def": 140,
      "tags": [
        "09",
        "25",
        "31",
        "32",
        "44",
        "51",
        "53",
        "55",
        "79"
      ],
      "soulSkill": {
        "name": "サイコリバース",
        "timing": "own-main",
        "effect": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "timingLabel": "自分メイン",
        "description": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "program": 9,
        "sourceText": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK + 5 & SPD +5 & HP+10",
        "traitText": "回避率 ＋5% & マヒ耐性+30%",
        "soul": {
          "text": "敵全体に無属性の魔法中ダメージを与え、SPDとDEFを2ターンの間15%ダウンさせる"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK + 5 & SPD +5 & HP+10",
          "trait": "回避率 ＋5% & マヒ耐性+30%",
          "accessorySkillName": "サイコリバース",
          "accessorySkillEffect": "敵全体に無属性の魔法中ダメージを与え、SPDとDEFを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 サイコリバース",
              "effect": "センターの敵のHPを12%ダウンさせ、ATKを10%ダウンさせる"
            },
            "5": {
              "name": "サイコリバース",
              "effect": "センターの敵のHPを8%ダウンさせ、ATKを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 3252,
            "ATK": 131,
            "MAG": 131,
            "DEF": 100,
            "MND": 100,
            "SPD": 141,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0.05,
            "会心率": 0.1,
            "属性": "雷",
            "通常攻撃区分": null,
            "画像": "spenemy/26.png",
            "条件・補足": null,
            "技一覧": [
              "サイキック・ハイキック / 属性:雷 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:マヒ",
              "サイキック・ローキック / 属性:雷 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:ひるみ"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "93",
        "96",
        "103",
        "120",
        "202",
        "159",
        "166",
        "175",
        "178",
        "219",
        "mq:eventfig/29",
        "mq:eventfig/48",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/06",
      "uid": "MSB-223",
      "name": "モブマグロック",
      "image": "eventfig/06.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 120,
      "def": 160,
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
      "soulSkill": {
        "name": "マグロックガード",
        "timing": "own-main",
        "effect": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。",
        "program": 10,
        "sourceText": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK + 3 & DEF +10",
        "traitText": "火属性ダメージ軽減 ＋5% & やけど耐性+30%",
        "soul": {
          "text": "味方全体のDEFとMNDを2ターンの間20%アップし、状態異常耐性を30%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK + 3 & DEF +10",
          "trait": "火属性ダメージ軽減 ＋5% & やけど耐性+30%",
          "accessorySkillName": "マグロックガード",
          "accessorySkillEffect": "味方全体のDEFとMNDを2ターンの間20%アップし、状態異常耐性を30%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 マグロックガード",
              "effect": "センターフィギュアのDEFを30%アップし、HPを15%アップする"
            },
            "5": {
              "name": "マグロックガード",
              "effect": "センターフィギュアのDEFを20%アップする"
            }
          },
          "v248": {
            "分類": "通常敵",
            "HP": 753,
            "ATK": 88,
            "MAG": 88,
            "DEF": 87,
            "MND": 74,
            "SPD": 98,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/86.png",
            "条件・補足": null,
            "技一覧": [
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビート / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど",
              "マグ・オーバーヒート / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど",
              "マグマ・ザ・ビッグ / 属性:火 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "135",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "163",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/20",
        "mq:eventfig/23",
        "mq:eventfig/47",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/07",
      "uid": "MSB-224",
      "name": "モブマリンソルジャー",
      "image": "eventfig/07.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 140,
      "def": 145,
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
      "soulSkill": {
        "name": "マリンランス",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "program": 39,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK + 7 & DEF +6",
        "traitText": "水属性ダメージ軽減 ＋5% & ひるみ耐性+30%",
        "soul": {
          "text": "敵単体に水属性の物理中～大ダメージを与え、自分のATKとDEFを2ターンの間20%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK + 7 & DEF +6",
          "trait": "水属性ダメージ軽減 ＋5% & ひるみ耐性+30%",
          "accessorySkillName": "マリンランス",
          "accessorySkillEffect": "敵単体に水属性の物理中～大ダメージを与え、自分のATKとDEFを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 マリンランス",
              "effect": "正面の敵1体のHPを10%ダウンさせ、DEFを10%ダウンさせる"
            },
            "5": {
              "name": "マリンランス",
              "effect": "正面の敵1体のHPを7%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 4605,
            "ATK": 169,
            "MAG": 169,
            "DEF": 129,
            "MND": 129,
            "SPD": 186,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0.1,
            "会心率": 0.1,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "spenemy/022.png",
            "条件・補足": null,
            "技一覧": [
              "ストロング・ウェイブ / 属性:水 / 攻撃区分:物理 / 対象:敵全体",
              "シーステルス / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "94",
        "95",
        "110",
        "119",
        "120",
        "121",
        "128",
        "129",
        "130",
        "144",
        "145",
        "146",
        "148",
        "202",
        "159",
        "173",
        "179",
        "203",
        "208",
        "211",
        "212",
        "219",
        "mq:eventfig/23",
        "mq:eventfig/43",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/08",
      "uid": "MSB-225",
      "name": "モブリーフガード",
      "image": "eventfig/08.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 130,
      "def": 150,
      "tags": [
        "09",
        "25",
        "32",
        "35",
        "39",
        "43",
        "53",
        "68",
        "77"
      ],
      "soulSkill": {
        "name": "リーフウォール",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 51,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK + 5 & DEF +10",
        "traitText": "地属性ダメージ軽減 ＋5% & 混乱耐性+30%",
        "soul": {
          "text": "味方全体のDEFを2ターンの間30%アップし、ダメージ軽減を5%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK + 5 & DEF +10",
          "trait": "地属性ダメージ軽減 ＋5% & 混乱耐性+30%",
          "accessorySkillName": "リーフウォール",
          "accessorySkillEffect": "味方全体のDEFを2ターンの間30%アップし、ダメージ軽減を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 リーフウォール",
              "effect": "味方全体のDEFを15%アップし、HPを5%アップする"
            },
            "5": {
              "name": "リーフウォール",
              "effect": "味方全体のDEFを10%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 5368,
            "ATK": 187,
            "MAG": 187,
            "DEF": 144,
            "MND": 144,
            "SPD": 208,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "地",
            "通常攻撃区分": null,
            "画像": "spenemy/027.png",
            "条件・補足": null,
            "技一覧": [
              "ガーディアン・オブ・ソーラークラッシュ / 属性:地 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "95",
        "120",
        "135",
        "139",
        "147",
        "163",
        "171",
        "173",
        "204",
        "mq:eventfig/20",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "mq:eventfig/09",
      "uid": "MSB-226",
      "name": "モブスカルソード",
      "image": "eventfig/09.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "妨害",
      "atk": 150,
      "def": 130,
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
      "soulSkill": {
        "name": "スカルクロス",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 23,
        "sourceText": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "MAG + 7 & ATK +7",
        "traitText": "毒耐性 ＋30% & ひるみ耐性+20%",
        "soul": {
          "text": "敵単体に闇属性の物理中～大ダメージを与え、30%で毒にする。自分の会心率を2ターンの間10%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "MAG + 7 & ATK +7",
          "trait": "毒耐性 ＋30% & ひるみ耐性+20%",
          "accessorySkillName": "スカルクロス",
          "accessorySkillEffect": "敵単体に闇属性の物理中～大ダメージを与え、30%で毒にする。自分の会心率を2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 スカルクロス",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "スカルクロス",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 8998,
            "ATK": 265,
            "MAG": 265,
            "DEF": 205,
            "MND": 205,
            "SPD": 299,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "闇",
            "通常攻撃区分": null,
            "画像": "spenemy/028.png",
            "条件・補足": null,
            "技一覧": [
              "スカルダンス / 属性:闇 / 攻撃区分:物理 / 対象:敵全体",
              "スカルリミットブレイク / 属性:闇 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "104",
        "107",
        "109",
        "112",
        "113",
        "114",
        "115",
        "120",
        "121",
        "128",
        "129",
        "134",
        "136",
        "144",
        "157",
        "161",
        "166",
        "173",
        "203",
        "204",
        "207",
        "211",
        "212",
        "mq:eventfig/45"
      ]
    },
    {
      "id": "mq:eventfig/10",
      "uid": "MSB-227",
      "name": "モブポーション",
      "image": "eventfig/10.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "魔法",
      "role": "回復・支援",
      "atk": 120,
      "def": 160,
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
        "effect": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "program": 0,
        "sourceText": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "MND + 7 & DEF +6",
        "traitText": "魔法会心率 ＋5% & 眠り耐性+40%",
        "soul": {
          "text": "味方全体のHPを30%回復し、状態異常を1つ解除する。さらにMNDを2ターンの間15%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "MND + 7 & DEF +6",
          "trait": "魔法会心率 ＋5% & 眠り耐性+40%",
          "accessorySkillName": "ポーションシャワー",
          "accessorySkillEffect": "味方全体のHPを30%回復し、状態異常を1つ解除する。さらにMNDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ポーションシャワー",
              "effect": "敵全体のATKを9%ダウンさせ、味方全体のHPを10%アップする"
            },
            "5": {
              "name": "ポーションシャワー",
              "effect": "敵全体のATKを6%ダウンさせ、味方全体のHPを5%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 10709,
            "ATK": 296,
            "MAG": 296,
            "DEF": 230,
            "MND": 230,
            "SPD": 336,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "spenemy/29.png",
            "条件・補足": null,
            "技一覧": [
              "ポーション・マジック / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "マナバーン / 属性:水 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:毒・混乱"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "99",
        "100",
        "103",
        "104",
        "107",
        "109",
        "110",
        "111",
        "112",
        "113",
        "114",
        "115",
        "119",
        "128",
        "129",
        "130",
        "134",
        "136",
        "137",
        "138",
        "142",
        "143",
        "144",
        "146",
        "157",
        "158",
        "161",
        "165",
        "167",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "203",
        "204",
        "205",
        "206",
        "207",
        "211",
        "215",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/44",
        "mq:eventfig/45",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/11",
      "uid": "MSB-228",
      "name": "モブバブルボール",
      "image": "eventfig/11.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 130,
      "def": 150,
      "tags": [
        "09",
        "25",
        "31",
        "32",
        "37",
        "44",
        "53",
        "57",
        "60"
      ],
      "soulSkill": {
        "name": "バブルリフレクト",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 51,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK + 5 & DEF +5 & MP+20",
        "traitText": "消費MP -10% & 混乱耐性+30%",
        "soul": {
          "text": "敵全体のATKを2ターンの間20%ダウンさせ、味方全体のDEFを15%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK + 5 & DEF +5 & MP+20",
          "trait": "消費MP -10% & 混乱耐性+30%",
          "accessorySkillName": "バブルリフレクト",
          "accessorySkillEffect": "敵全体のATKを2ターンの間20%ダウンさせ、味方全体のDEFを15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 バブルリフレクト",
              "effect": "味方全体のDEFを12%・HPを9%アップする"
            },
            "5": {
              "name": "バブルリフレクト",
              "effect": "味方全体のDEFを8%・HPを6%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 11160,
            "ATK": 304,
            "MAG": 304,
            "DEF": 236,
            "MND": 236,
            "SPD": 345,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "spenemy/30.png",
            "条件・補足": null,
            "技一覧": [
              "バブル・トライアングル / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "99",
        "100",
        "103",
        "107",
        "109",
        "110",
        "111",
        "112",
        "113",
        "114",
        "115",
        "119",
        "120",
        "128",
        "129",
        "130",
        "134",
        "136",
        "142",
        "143",
        "144",
        "146",
        "157",
        "158",
        "161",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "203",
        "204",
        "205",
        "206",
        "207",
        "211",
        "215",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/45",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/12",
      "uid": "MSB-229",
      "name": "モブレッドバード",
      "image": "eventfig/12.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "妨害",
      "atk": 150,
      "def": 125,
      "tags": [
        "03",
        "09",
        "25",
        "34",
        "47",
        "50",
        "53",
        "55",
        "73"
      ],
      "soulSkill": {
        "name": "レッドウイング",
        "timing": "own-main",
        "effect": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。",
        "program": 10,
        "sourceText": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK + 7 & SPD +7",
        "traitText": "火属性耐性 ＋15% & やけど耐性+30%",
        "soul": {
          "text": "敵単体に火属性の物理中～大ダメージを与え、自分のSPDを2ターンの間25%アップする。35%でやけどにする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK + 7 & SPD +7",
          "trait": "火属性耐性 ＋15% & やけど耐性+30%",
          "accessorySkillName": "レッドウイング",
          "accessorySkillEffect": "敵単体に火属性の物理中～大ダメージを与え、自分のSPDを2ターンの間25%アップする。35%でやけどにする",
          "mobPieceSkills": {
            "1": {
              "name": "0 レッドウイング",
              "effect": "センターフィギュアのSPDを30%アップし、ATKを10%アップする"
            },
            "5": {
              "name": "レッドウイング",
              "effect": "センターフィギュアのSPDを20%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 8998,
            "ATK": 265,
            "MAG": 265,
            "DEF": 205,
            "MND": 205,
            "SPD": 299,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "火",
            "通常攻撃区分": null,
            "画像": "spenemy/15.png",
            "条件・補足": null,
            "技一覧": [
              "バード・フレイムクラッチ / 属性:火 / 攻撃区分:物理 / 対象:敵全体 / 状態異常:ひるみ・やけど",
              "バード・オーラクラッチ / 属性:火 / 攻撃区分:物理 / 対象:敵全体 / 状態異常:眠り"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "159",
        "167",
        "177",
        "206",
        "208",
        "212",
        "219",
        "mq:eventfig/23",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/13",
      "uid": "MSB-230",
      "name": "モブブルーバード",
      "image": "eventfig/13.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "妨害",
      "atk": 130,
      "def": 140,
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
      "soulSkill": {
        "name": "ブルーウイング",
        "timing": "own-main",
        "effect": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。",
        "program": 10,
        "sourceText": "相手1体のATK-20。そのフィギュアが次に攻撃するまでDEFも-10。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "DEF + 7 & SPD +7",
        "traitText": "火属与ダメージ ＋10% & やけど耐性+30%",
        "soul": {
          "text": "敵単体に水属性の物理中～大ダメージを与え、自分のSPDとDEFを2ターンの間20%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF + 7 & SPD +7",
          "trait": "火属与ダメージ ＋10% & やけど耐性+30%",
          "accessorySkillName": "ブルーウイング",
          "accessorySkillEffect": "敵単体に水属性の物理中～大ダメージを与え、自分のSPDとDEFを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ブルーウイング",
              "effect": "味方全体のSPDを15%・ATKを6%アップする"
            },
            "5": {
              "name": "ブルーウイング",
              "effect": "味方全体のSPDを10%・ATKを3%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "mq:eventfig/14",
      "uid": "MSB-231",
      "name": "モブミラスイーツ",
      "image": "eventfig/14.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 120,
      "def": 150,
      "tags": [
        "08",
        "09",
        "25",
        "37",
        "42",
        "53",
        "54",
        "57",
        "73"
      ],
      "soulSkill": {
        "name": "ミラパフェ",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "program": 11,
        "sourceText": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "HP +60",
        "traitText": "状態異常耐性 ＋5% & 混乱耐性+30%",
        "soul": {
          "text": "味方全体のHPを30%回復し、MNDを2ターンの間20%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "HP +60",
          "trait": "状態異常耐性 ＋5% & 混乱耐性+30%",
          "accessorySkillName": "ミラパフェ",
          "accessorySkillEffect": "味方全体のHPを30%回復し、MNDを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミラパフェ",
              "effect": "味方全体のDEFを15%アップし、HPを10%アップする"
            },
            "5": {
              "name": "ミラパフェ",
              "effect": "味方全体のDEFを10%アップし、HPを5%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 13552,
            "ATK": 344,
            "MAG": 344,
            "DEF": 268,
            "MND": 268,
            "SPD": 392,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "光",
            "通常攻撃区分": null,
            "画像": "spenemy/31.png",
            "条件・補足": null,
            "技一覧": [
              "ミラスイーツタワー / 属性:光 / 攻撃区分:物理 / 対象:敵全体",
              "ミラビスケットコート / 属性:光 / 攻撃区分:物理 / 対象:個別処理",
              "ミラチョコバスケット / 属性:光 / 攻撃区分:魔法 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "103",
        "107",
        "109",
        "112",
        "113",
        "114",
        "115",
        "121",
        "130",
        "134",
        "136",
        "142",
        "143",
        "144",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "204",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/15",
      "uid": "MSB-232",
      "name": "モブデーモン",
      "image": "eventfig/15.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "妨害",
      "atk": 130,
      "def": 150,
      "tags": [
        "03",
        "09",
        "25",
        "26",
        "48",
        "53",
        "55",
        "57",
        "74"
      ],
      "soulSkill": {
        "name": "デモンクロー",
        "timing": "own-main",
        "effect": "このターンATK+20。攻撃後、まだ攻撃していない味方1体と位置を入れ替えられる。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。攻撃後、まだ攻撃していない味方1体と位置を入れ替えられる。",
        "program": 91,
        "sourceText": "このターンATK+20。攻撃後、まだ攻撃していない味方1体と位置を入れ替えられる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "",
        "traitText": "ダメージ軽減 ＋5%",
        "soul": {
          "text": "敵単体に火属性の物理中～大ダメージを与え、ATKとDEFを2ターンの間15%ダウンさせる"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "",
          "trait": "ダメージ軽減 ＋5%",
          "accessorySkillName": "デモンクロー",
          "accessorySkillEffect": "敵単体に火属性の物理中～大ダメージを与え、ATKとDEFを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 デモンクロー",
              "effect": "正面の敵1体のHPを10%ダウンさせ、DEFを10%ダウンさせる"
            },
            "5": {
              "name": "デモンクロー",
              "effect": "正面の敵1体のHPを7%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 13552,
            "ATK": 344,
            "MAG": 344,
            "DEF": 268,
            "MND": 268,
            "SPD": 392,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "闇",
            "通常攻撃区分": null,
            "画像": "spenemy/32.png",
            "条件・補足": null,
            "技一覧": [
              "デーモンクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "エリート・デーモン / 属性:闇 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "99",
        "100",
        "104",
        "107",
        "109",
        "112",
        "113",
        "114",
        "115",
        "134",
        "136",
        "144",
        "157",
        "202",
        "159",
        "161",
        "166",
        "204",
        "207",
        "219",
        "mq:eventfig/45",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/16",
      "uid": "MSB-233",
      "name": "モブ魔王スライム",
      "image": "eventfig/16.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 130,
      "def": 160,
      "tags": [
        "05",
        "09",
        "25",
        "26",
        "39",
        "48",
        "53",
        "57",
        "74"
      ],
      "soulSkill": {
        "name": "マオウスライド",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 23,
        "sourceText": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "",
        "traitText": "闇属性耐性 ＋15% & 毒耐性+30%",
        "soul": {
          "text": "自分のDEFを2ターンの間55%アップし、物理ダメージ軽減を10%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "",
          "trait": "闇属性耐性 ＋15% & 毒耐性+30%",
          "accessorySkillName": "マオウスライド",
          "accessorySkillEffect": "自分のDEFを2ターンの間55%アップし、物理ダメージ軽減を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 マオウスライド",
              "effect": "敵全体のATKを15%ダウンさせ、味方全体のDEFを8%アップする"
            },
            "5": {
              "name": "マオウスライド",
              "effect": "敵全体のATKを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 16176,
            "ATK": 384,
            "MAG": 384,
            "DEF": 300,
            "MND": 300,
            "SPD": 438,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "闇",
            "通常攻撃区分": null,
            "画像": "spenemy/34.png",
            "条件・補足": null,
            "技一覧": [
              "スライムクラッシュ / 属性:無 / 攻撃区分:物理 / 対象:個別処理",
              "スライムブレス / 属性:闇・火 / 攻撃区分:魔法 / 対象:敵全体",
              "スライムボディ・魔王バージョン / 属性:闇 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "104",
        "107",
        "109",
        "112",
        "113",
        "114",
        "115",
        "134",
        "135",
        "136",
        "139",
        "144",
        "147",
        "157",
        "161",
        "163",
        "166",
        "204",
        "207",
        "mq:eventfig/20",
        "mq:eventfig/45",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "mq:eventfig/17",
      "uid": "MSB-234",
      "name": "モブミズサバンナ",
      "image": "eventfig/17.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 100,
      "def": 130,
      "tags": [
        "09",
        "31",
        "41",
        "55",
        "78"
      ],
      "soulSkill": {
        "name": "ミズダッシュ",
        "timing": "own-main",
        "effect": "相手1体を選ぶ。そのフィギュアは次のバトルフェイズで最後にしか攻撃できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体を選ぶ。そのフィギュアは次のバトルフェイズで最後にしか攻撃できない。",
        "program": 28,
        "sourceText": "相手1体を選ぶ。そのフィギュアは次のバトルフェイズで最後にしか攻撃できない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SR",
        "statsText": "SPD + 3",
        "traitText": "回避率+1%",
        "soul": {
          "text": "自分のSPDを2ターンの間30%アップし、回避率を10%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "SPD + 3",
          "trait": "回避率+1%",
          "accessorySkillName": "ミズダッシュ",
          "accessorySkillEffect": "自分のSPDを2ターンの間30%アップし、回避率を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミズダッシュ",
              "effect": "味方全体のSPDを15%アップし、ATKを5%アップする"
            },
            "5": {
              "name": "ミズダッシュ",
              "effect": "味方全体のSPDを10%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 1256,
            "ATK": 78,
            "MAG": 78,
            "DEF": 74,
            "MND": 74,
            "SPD": 100,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.1,
            "回避率": 0.18,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "spenemy/35.png",
            "条件・補足": null,
            "技一覧": []
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "202",
        "159",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/18",
      "uid": "MSB-235",
      "name": "モブカゼサバンナ",
      "image": "eventfig/18.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "風",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 110,
      "def": 130,
      "tags": [
        "02",
        "09",
        "41",
        "55",
        "78"
      ],
      "soulSkill": {
        "name": "カゼダッシュ",
        "timing": "attack-response",
        "effect": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "program": 54,
        "sourceText": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SR",
        "statsText": "SPD + 3",
        "traitText": "回避率+1%",
        "soul": {
          "text": "敵全体のSPDを2ターンの間10%ダウンさせ、自分のSPDを10%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "SPD + 3",
          "trait": "回避率+1%",
          "accessorySkillName": "カゼダッシュ",
          "accessorySkillEffect": "敵全体のSPDを2ターンの間10%ダウンさせ、自分のSPDを10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 カゼダッシュ",
              "effect": "味方全体のSPDを15%・ATKを6%アップする"
            },
            "5": {
              "name": "カゼダッシュ",
              "effect": "味方全体のSPDを10%・ATKを3%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 1256,
            "ATK": 78,
            "MAG": 78,
            "DEF": 74,
            "MND": 74,
            "SPD": 100,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.08,
            "回避率": 0.22,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": null,
            "画像": "spenemy/37.png",
            "条件・補足": null,
            "技一覧": []
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "96",
        "134",
        "202",
        "159",
        "219",
        "mq:eventfig/20",
        "mq:eventfig/44",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/19",
      "uid": "MSB-236",
      "name": "モブナギサバンナ",
      "image": "eventfig/19.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "風",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 130,
      "def": 150,
      "tags": [
        "02",
        "09",
        "32",
        "41",
        "53",
        "55",
        "78"
      ],
      "soulSkill": {
        "name": "ナギダッシュ",
        "timing": "attack-response",
        "effect": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "program": 54,
        "sourceText": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "SPD + 3",
        "traitText": "回避率+3%",
        "soul": {
          "text": "敵全体のSPDを2ターンの間15%ダウンさせ、自分のSPDを15%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "SPD + 3",
          "trait": "回避率+3%",
          "accessorySkillName": "ナギダッシュ",
          "accessorySkillEffect": "敵全体のSPDを2ターンの間15%ダウンさせ、自分のSPDを15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ナギダッシュ",
              "effect": "味方全体のSPDを15%・ATKを6%アップする"
            },
            "5": {
              "name": "ナギダッシュ",
              "effect": "味方全体のSPDを10%・ATKを3%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 3009,
            "ATK": 124,
            "MAG": 124,
            "DEF": 94,
            "MND": 94,
            "SPD": 132,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0.23,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": null,
            "画像": "spenemy/38.png",
            "条件・補足": null,
            "技一覧": []
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "96",
        "120",
        "134",
        "202",
        "159",
        "219",
        "mq:eventfig/20",
        "mq:eventfig/44",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/20",
      "uid": "MSB-237",
      "name": "モブメタルサバンナ",
      "image": "eventfig/20.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "風",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 210,
      "def": 230,
      "tags": [
        "08",
        "09",
        "32",
        "39",
        "41",
        "53",
        "55",
        "57",
        "78"
      ],
      "soulSkill": {
        "name": "メタルダッシュ",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+50。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+50。差分ライフダメージは0。",
        "program": 63,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+50。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "SPD + 3 & DEF +5",
        "traitText": "ダメージ軽減+3%",
        "soul": {
          "text": "味方全体のSPDを2ターンの間20%アップし、命中率を15%アップする"
        },
        "decision": "強化形態・上位個体・高性能個体としてミドルソウル",
        "basis": {
          "statusEffect": "SPD + 3 & DEF +5",
          "trait": "ダメージ軽減+3%",
          "accessorySkillName": "メタルダッシュ",
          "accessorySkillEffect": "味方全体のSPDを2ターンの間20%アップし、命中率を15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 メタルダッシュ",
              "effect": "敵全体のSPDを15%ダウンさせ、味方全体のSPDを8%アップする"
            },
            "5": {
              "name": "メタルダッシュ",
              "effect": "敵全体のSPDを10%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 330,
            "ATK": 131,
            "MAG": 131,
            "DEF": 100,
            "MND": 100,
            "SPD": 141,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.9,
            "回避率": 0,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": null,
            "画像": "spenemy/36.png",
            "条件・補足": null,
            "技一覧": []
          },
          "classReason": "強化形態・上位個体・高性能個体としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-237-normal-0",
          "target": "mq:eventfig/20",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 風属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-237-normal-1",
          "target": "mq:eventfig/20",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "tag": "39"
            }
          ],
          "label": "風属性 × 鉄壁タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "160",
        "164",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "mq:eventfig/21",
      "uid": "MSB-238",
      "name": "モブファイト",
      "image": "eventfig/21.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "妨害",
      "atk": 130,
      "def": 140,
      "tags": [
        "03",
        "09",
        "17",
        "23",
        "41",
        "56",
        "73"
      ],
      "soulSkill": {
        "name": "ファイトラッシュ",
        "timing": "own-main",
        "effect": "ミドル/MOBソウル領域からフュージョン可能な候補をすべて表示し、そのターン中表示を固定する。",
        "timingLabel": "自分メイン",
        "description": "ミドル/MOBソウル領域からフュージョン可能な候補をすべて表示し、そのターン中表示を固定する。",
        "program": 92,
        "sourceText": "ミドル/MOBソウル領域からフュージョン可能な候補をすべて表示し、そのターン中表示を固定する。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "DEF + 3",
        "traitText": "全属性耐性+3%",
        "soul": {
          "text": "敵単体に火属性の物理中ダメージを与え、ATKを2ターンの間15%ダウンさせる"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF + 3",
          "trait": "全属性耐性+3%",
          "accessorySkillName": "ファイトラッシュ",
          "accessorySkillEffect": "敵単体に火属性の物理中ダメージを与え、ATKを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 ファイトラッシュ",
              "effect": "正面の敵のATKを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "ファイトラッシュ",
              "effect": "正面の敵のATKを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 1672,
            "ATK": 97,
            "MAG": 97,
            "DEF": 92,
            "MND": 92,
            "SPD": 126,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.12,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "spenemy/39.png",
            "条件・補足": null,
            "技一覧": []
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "145",
        "146",
        "148",
        "179",
        "203",
        "208",
        "211",
        "219",
        "mq:eventfig/23",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "mq:eventfig/22",
      "uid": "MSB-239",
      "name": "モブパッション",
      "image": "eventfig/22.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 120,
      "def": 150,
      "tags": [
        "03",
        "09",
        "17",
        "23",
        "41",
        "47",
        "56",
        "58",
        "73"
      ],
      "soulSkill": {
        "name": "パッションガード",
        "timing": "own-main",
        "effect": "このターン相手フィールド全員へ1回ずつ攻撃できる。1体撃破するたび、残っている相手全体のDEF-10。",
        "timingLabel": "自分メイン",
        "description": "このターン相手フィールド全員へ1回ずつ攻撃できる。1体撃破するたび、残っている相手全体のDEF-10。",
        "program": 68,
        "sourceText": "このターン相手フィールド全員へ1回ずつ攻撃できる。1体撃破するたび、残っている相手全体のDEF-10。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "DEF +8",
        "traitText": "物理ダメージ軽減+8%",
        "soul": {
          "text": "敵全体のATKを2ターンの間20%ダウンさせ、味方全体のDEFを15%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +8",
          "trait": "物理ダメージ軽減+8%",
          "accessorySkillName": "パッションガード",
          "accessorySkillEffect": "敵全体のATKを2ターンの間20%ダウンさせ、味方全体のDEFを15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 パッションガード",
              "effect": "味方全体のDEFを12%・HPを9%アップする"
            },
            "5": {
              "name": "パッションガード",
              "effect": "味方全体のDEFを8%・HPを6%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 4036,
            "ATK": 154,
            "MAG": 154,
            "DEF": 117,
            "MND": 117,
            "SPD": 168,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": null,
            "画像": "spenemy/40.png",
            "条件・補足": null,
            "技一覧": []
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "104",
        "107",
        "111",
        "119",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "165",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/23",
      "uid": "MSB-240",
      "name": "モブフェニックス",
      "image": "eventfig/23.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "物理",
      "role": "回復・支援",
      "atk": 210,
      "def": 230,
      "tags": [
        "03",
        "09",
        "25",
        "39",
        "47",
        "50",
        "53",
        "56",
        "58"
      ],
      "soulSkill": {
        "name": "フェニックスリバース",
        "timing": "defeat-response",
        "effect": "このフィギュアが撃破された時、手札へ戻す。次に召喚した時DEF+30。",
        "timingLabel": "撃破時",
        "description": "このフィギュアが撃破された時、手札へ戻す。次に召喚した時DEF+30。 この効果で手札に戻ったこのフィギュアは、ミドルソウルでも手札から直接召喚できる。",
        "program": 93,
        "sourceText": "このフィギュアが撃破された時、手札へ戻す。次に召喚した時DEF+30。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "DEF +10 & HP +100",
        "traitText": "回復量 ＋20% & やけど耐性+50%",
        "soul": {
          "text": "味方全体のHPを35%回復し、やけどを解除する。HP30%以下の味方は追加で15%回復する"
        },
        "decision": "強化形態・上位個体・高性能個体としてミドルソウル",
        "basis": {
          "statusEffect": "DEF +10 & HP +100",
          "trait": "回復量 ＋20% & やけど耐性+50%",
          "accessorySkillName": "フェニックスリバース",
          "accessorySkillEffect": "味方全体のHPを35%回復し、やけどを解除する。HP30%以下の味方は追加で15%回復する",
          "mobPieceSkills": {
            "1": {
              "name": "0 フェニックスリバース",
              "effect": "センターフィギュアのHPを30%アップし、DEFを10%アップする"
            },
            "5": {
              "name": "フェニックスリバース",
              "effect": "センターフィギュアのHPを20%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 12327,
            "ATK": 324,
            "MAG": 324,
            "DEF": 252,
            "MND": 252,
            "SPD": 368,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.12,
            "回避率": 0.05,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": null,
            "画像": "spenemy/41.png",
            "条件・補足": null,
            "技一覧": [
              "ゴッド・フェニックス / 属性:火 / 対象:個別処理 / 効果説明:単体1.35＋全体0.45。与ダメージ10%回復。第1行動時HP500回復"
            ]
          },
          "classReason": "強化形態・上位個体・高性能個体としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-240-normal-0",
          "target": "mq:eventfig/23",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-240-normal-1",
          "target": "mq:eventfig/23",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "56"
            }
          ],
          "label": "火属性 × 火炎タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "164",
        "168",
        "169",
        "181",
        "209",
        "210",
        "214",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "mq:eventfig/24",
      "uid": "MSB-241",
      "name": "モブカスタード",
      "image": "eventfig/24.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "魔法",
      "role": "回復・支援",
      "atk": 140,
      "def": 140,
      "tags": [
        "04",
        "37",
        "53",
        "59",
        "73",
        "77",
        "78"
      ],
      "soulSkill": {
        "name": "カスタードガード",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。",
        "program": 0,
        "sourceText": "自分ライフを20回復する。撃破済みのシードソウル1体をシードデッキの一番下へ戻す。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "DEF +5 & MND +5",
        "traitText": "魔法ダメージ軽減+5%",
        "soul": {
          "text": "味方全体のHPを25%回復し、魔法ダメージ軽減を2ターンの間8%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +5 & MND +5",
          "trait": "魔法ダメージ軽減+5%",
          "accessorySkillName": "カスタードガード",
          "accessorySkillEffect": "味方全体のHPを25%回復し、魔法ダメージ軽減を2ターンの間8%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 カスタードガード",
              "effect": "味方全体のHPを15%アップし、DEFを5%アップする"
            },
            "5": {
              "name": "カスタードガード",
              "effect": "味方全体のHPを10%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 5211,
            "ATK": 184,
            "MAG": 184,
            "DEF": 141,
            "MND": 141,
            "SPD": 204,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": null,
            "画像": "spenemy/42.png",
            "条件・補足": null,
            "技一覧": [
              "カスタード・コモク / 属性:光 / 対象:個別処理 / 効果説明:第1行動。対象DEF20%低下、2～3ターン"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "99",
        "103",
        "109",
        "112",
        "121",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/25",
      "uid": "MSB-242",
      "name": "モブリスカスタード",
      "image": "eventfig/25.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "魔法",
      "role": "回復・支援",
      "atk": 125,
      "def": 150,
      "tags": [
        "04",
        "09",
        "36",
        "37",
        "53",
        "59",
        "73",
        "77",
        "78"
      ],
      "soulSkill": {
        "name": "カスタードMAX",
        "timing": "own-main",
        "effect": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "timingLabel": "自分メイン",
        "description": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。",
        "program": 11,
        "sourceText": "自分ライフを20回復する。味方1体に付いているATK/DEF低下効果を解除する。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "DEF +8 & MND +10",
        "traitText": "魔法ダメージ軽減+10%",
        "soul": {
          "text": "味方全体のHPを30%回復し、MNDを2ターンの間20%・魔法ダメージ軽減を10%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +8 & MND +10",
          "trait": "魔法ダメージ軽減+10%",
          "accessorySkillName": "カスタードMAX",
          "accessorySkillEffect": "味方全体のHPを30%回復し、MNDを2ターンの間20%・魔法ダメージ軽減を10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 カスタードMAX",
              "effect": "味方全体のHPを15%アップし、DEFを5%アップする"
            },
            "5": {
              "name": "カスタードMAX",
              "effect": "味方全体のHPを10%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 6189,
            "ATK": 207,
            "MAG": 207,
            "DEF": 159,
            "MND": 159,
            "SPD": 231,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": null,
            "画像": "spenemy/43.png",
            "条件・補足": null,
            "技一覧": [
              "カスタード・コモク / 属性:光 / 対象:個別処理 / 効果説明:第1行動。対象DEF20%低下、2～3ターン",
              "スクイレル・シロップ / 対象:個別処理 / 効果説明:初回・以後3～5ターン間隔。HP800～1200回復、そのターン軽減80%"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "99",
        "103",
        "109",
        "112",
        "121",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/26",
      "uid": "MSB-243",
      "name": "モブマグネットM",
      "image": "eventfig/26.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 130,
      "def": 150,
      "tags": [
        "04",
        "09",
        "39",
        "44",
        "49",
        "51",
        "58"
      ],
      "soulSkill": {
        "name": "マグプル",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "program": 6,
        "sourceText": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "SPD +5 & MND +5",
        "traitText": "マヒ耐性+35%",
        "soul": {
          "text": "敵全体のSPDを2ターンの間15%ダウンさせ、味方全体のMNDを15%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +5 & MND +5",
          "trait": "マヒ耐性+35%",
          "accessorySkillName": "マグプル",
          "accessorySkillEffect": "敵全体のSPDを2ターンの間15%ダウンさせ、味方全体のMNDを15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 マグプル",
              "effect": "味方全体のSPDとDEFを9%アップする"
            },
            "5": {
              "name": "マグプル",
              "effect": "味方全体のSPDとDEFを6%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4688,
            "ATK": 227,
            "MAG": 227,
            "DEF": 190,
            "MND": 190,
            "SPD": 263,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.11,
            "回避率": 0.04,
            "会心率": null,
            "属性": "雷",
            "通常攻撃区分": null,
            "画像": "spenemy/44.png",
            "条件・補足": null,
            "技一覧": [
              "マグネットソードM / 属性:雷 / 対象:個別処理 / 効果説明:単体・60%ひるみ。MOB合体も選択"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "103",
        "104",
        "121",
        "128",
        "129",
        "135",
        "139",
        "147",
        "163",
        "165",
        "166",
        "173",
        "175",
        "178",
        "203",
        "211",
        "212",
        "mq:eventfig/20",
        "mq:eventfig/29",
        "mq:eventfig/47",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "mq:eventfig/27",
      "uid": "MSB-244",
      "name": "モブマグネットO",
      "image": "eventfig/27.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "魔法",
      "role": "防御・守護",
      "atk": 140,
      "def": 140,
      "tags": [
        "02",
        "09",
        "39",
        "44",
        "49",
        "51",
        "58"
      ],
      "soulSkill": {
        "name": "マグサークル",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "program": 22,
        "sourceText": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "MAG +5 & MND +5",
        "traitText": "雷属性会心率+5%",
        "soul": {
          "text": "敵全体のDEFを2ターンの間15%ダウンさせ、味方全体のMAGを15%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "MAG +5 & MND +5",
          "trait": "雷属性会心率+5%",
          "accessorySkillName": "マグサークル",
          "accessorySkillEffect": "敵全体のDEFを2ターンの間15%ダウンさせ、味方全体のMAGを15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 マグサークル",
              "effect": "味方全体のSPDとDEFを9%アップする"
            },
            "5": {
              "name": "マグサークル",
              "effect": "味方全体のSPDとDEFを6%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4688,
            "ATK": 227,
            "MAG": 227,
            "DEF": 190,
            "MND": 190,
            "SPD": 263,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.11,
            "回避率": 0.04,
            "会心率": null,
            "属性": "雷",
            "通常攻撃区分": null,
            "画像": "spenemy/45.png",
            "条件・補足": null,
            "技一覧": [
              "マグネットソードO / 属性:雷 / 対象:個別処理 / 効果説明:全体・15%眠り。MOB合体も選択"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "103",
        "104",
        "121",
        "128",
        "129",
        "135",
        "139",
        "147",
        "163",
        "165",
        "166",
        "173",
        "175",
        "178",
        "203",
        "211",
        "212",
        "mq:eventfig/20",
        "mq:eventfig/29",
        "mq:eventfig/47",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "mq:eventfig/28",
      "uid": "MSB-245",
      "name": "モブマグネットB",
      "image": "eventfig/28.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 130,
      "tags": [
        "03",
        "09",
        "39",
        "44",
        "49",
        "51",
        "58"
      ],
      "soulSkill": {
        "name": "マグブースト",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "ATK +5 & SPD +5",
        "traitText": "雷属性物理与ダメージ+8%",
        "soul": {
          "text": "味方全体のATKとSPDを2ターンの間20%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +5 & SPD +5",
          "trait": "雷属性物理与ダメージ+8%",
          "accessorySkillName": "マグブースト",
          "accessorySkillEffect": "味方全体のATKとSPDを2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 マグブースト",
              "effect": "センターフィギュアの全ステータスを15%アップする"
            },
            "5": {
              "name": "マグブースト",
              "effect": "センターフィギュアの全ステータスを10%アップする"
            }
          },
          "v248": {
            "分類": "中ボス",
            "HP": 4688,
            "ATK": 227,
            "MAG": 227,
            "DEF": 190,
            "MND": 190,
            "SPD": 263,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.11,
            "回避率": 0.04,
            "会心率": null,
            "属性": "雷",
            "通常攻撃区分": null,
            "画像": "spenemy/46.png",
            "条件・補足": null,
            "技一覧": [
              "マグネットソードB / 属性:雷 / 対象:個別処理 / 効果説明:単体・60%混乱。MOB合体も選択"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "103",
        "104",
        "121",
        "128",
        "129",
        "135",
        "139",
        "147",
        "163",
        "165",
        "166",
        "173",
        "175",
        "178",
        "203",
        "211",
        "212",
        "mq:eventfig/20",
        "mq:eventfig/29",
        "mq:eventfig/47",
        "mq:eventfig/48"
      ]
    },
    {
      "id": "mq:eventfig/29",
      "uid": "MSB-246",
      "name": "モブマグネットMOB",
      "image": "eventfig/29.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "雷",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 210,
      "def": 220,
      "tags": [
        "03",
        "09",
        "39",
        "44",
        "51",
        "53",
        "59",
        "58",
        "73"
      ],
      "soulSkill": {
        "name": "マグフル",
        "timing": "own-main",
        "effect": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+20。",
        "timingLabel": "自分メイン",
        "description": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+20。",
        "program": 85,
        "sourceText": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+20。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "DEF +8 & SPD +8",
        "traitText": "雷属性与ダメージ+10%",
        "soul": {
          "text": "敵全体のATK・DEF・SPDを2ターンの間10%ダウンさせ、味方全体のDEF・SPDを15%アップする"
        },
        "decision": "強化形態・上位個体・高性能個体としてミドルソウル",
        "basis": {
          "statusEffect": "DEF +8 & SPD +8",
          "trait": "雷属性与ダメージ+10%",
          "accessorySkillName": "マグフル",
          "accessorySkillEffect": "敵全体のATK・DEF・SPDを2ターンの間10%ダウンさせ、味方全体のDEF・SPDを15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 マグフル",
              "effect": "味方全体のSPDとDEFを9%アップする"
            },
            "5": {
              "name": "マグフル",
              "effect": "味方全体のSPDとDEFを6%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 11160,
            "ATK": 304,
            "MAG": 304,
            "DEF": 236,
            "MND": 236,
            "SPD": 345,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.15,
            "回避率": 0.04,
            "会心率": null,
            "属性": "雷",
            "通常攻撃区分": null,
            "画像": "spenemy/47.png",
            "条件・補足": null,
            "技一覧": []
          },
          "classReason": "強化形態・上位個体・高性能個体としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-246-normal-0",
          "target": "mq:eventfig/29",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 雷属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-246-normal-1",
          "target": "mq:eventfig/29",
          "fromClass": "seed",
          "materials": [
            {
              "id": "mq:eventfig/26"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "モブマグネットM × 雷属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "182",
        "217",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "mq:eventfig/30",
      "uid": "MSB-247",
      "name": "モブトイティラ",
      "image": "eventfig/30.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "風",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 140,
      "def": 140,
      "tags": [
        "02",
        "09",
        "36",
        "53",
        "68",
        "78",
        "82"
      ],
      "soulSkill": {
        "name": "トイラッシュ",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。",
        "program": 12,
        "sourceText": "味方全体のDEF+20。次の相手ターン、ATK/DEF低下効果を1回無効にする。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "DEF +5 & SPD +5",
        "traitText": "風属性与ダメージ+8%",
        "soul": {
          "text": "敵単体に風属性の物理中ダメージを与え、自分のSPDを2ターンの間15%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +5 & SPD +5",
          "trait": "風属性与ダメージ+8%",
          "accessorySkillName": "トイラッシュ",
          "accessorySkillEffect": "敵単体に風属性の物理中ダメージを与え、自分のSPDを2ターンの間15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 トイラッシュ",
              "effect": "センターの敵のHPを12%ダウンさせ、味方全体のATKを10%アップする"
            },
            "5": {
              "name": "トイラッシュ",
              "effect": "センターの敵のHPを8%ダウンさせ、味方全体のATKを5%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 3900,
            "ATK": 150,
            "MAG": 150,
            "DEF": 114,
            "MND": 114,
            "SPD": 163,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.11,
            "回避率": 0.06,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": null,
            "画像": "spenemy/48.png",
            "条件・補足": null,
            "技一覧": [
              "トイ・ヘッドバッド / 属性:風 / 対象:個別処理 / 効果説明:単体・対象の風耐性10%低下、2～3ターン"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "96",
        "134",
        "159",
        "mq:eventfig/20",
        "mq:eventfig/44",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "mq:eventfig/31",
      "uid": "MSB-248",
      "name": "モブトイティラ・ムシャ",
      "image": "eventfig/31.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "風",
      "attackType": "物理",
      "role": "連続攻撃",
      "atk": 140,
      "def": 140,
      "tags": [
        "02",
        "09",
        "53",
        "68",
        "73",
        "78",
        "82"
      ],
      "soulSkill": {
        "name": "ムシャトイ",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 42,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "DEF +5 & HP +15",
        "traitText": "風属性与ダメージ+8%",
        "soul": {
          "text": "敵単体に風属性の物理中ダメージを2回与え、自分の会心率を2ターンの間10%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +5 & HP +15",
          "trait": "風属性与ダメージ+8%",
          "accessorySkillName": "ムシャトイ",
          "accessorySkillEffect": "敵単体に風属性の物理中ダメージを2回与え、自分の会心率を2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ムシャトイ",
              "effect": "正面の敵1体のHPを10%ダウンさせ、DEFを10%ダウンさせる"
            },
            "5": {
              "name": "ムシャトイ",
              "effect": "正面の敵1体のHPを7%ダウンさせ、DEFを5%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 4175,
            "ATK": 158,
            "MAG": 158,
            "DEF": 120,
            "MND": 120,
            "SPD": 172,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.11,
            "回避率": 0.06,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": null,
            "画像": "spenemy/49.png",
            "条件・補足": null,
            "技一覧": [
              "トイ・ムシャムシャ / 属性:風 / 対象:個別処理 / 効果説明:3ターンごとの第1行動。HP25%回復・DEF20%上昇3ターン"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "96",
        "134",
        "159",
        "mq:eventfig/20",
        "mq:eventfig/44",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "mq:eventfig/32",
      "uid": "MSB-249",
      "name": "モブトイティラ・ビーム",
      "image": "eventfig/32.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 140,
      "def": 140,
      "tags": [
        "09",
        "31",
        "53",
        "60",
        "68",
        "73",
        "78"
      ],
      "soulSkill": {
        "name": "トイビーム",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "program": 40,
        "sourceText": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "DEF +5 & HP +15",
        "traitText": "風属性与ダメージ+6%",
        "soul": {
          "text": "敵全体に水属性の魔法中ダメージを与え、DEFを2ターンの間15%ダウンさせる"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +5 & HP +15",
          "trait": "風属性与ダメージ+6%",
          "accessorySkillName": "トイビーム",
          "accessorySkillEffect": "敵全体に水属性の魔法中ダメージを与え、DEFを2ターンの間15%ダウンさせる",
          "mobPieceSkills": {
            "1": {
              "name": "0 トイビーム",
              "effect": "敵全体のHPを6%ダウンさせ、ATKを8%ダウンさせる"
            },
            "5": {
              "name": "トイビーム",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 4315,
            "ATK": 161,
            "MAG": 161,
            "DEF": 123,
            "MND": 123,
            "SPD": 177,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.11,
            "回避率": 0.06,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "spenemy/50.png",
            "条件・補足": null,
            "技一覧": [
              "トイ・ビーム / 属性:水 / 対象:個別処理 / 効果説明:単体・80%眠り"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "111",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/33",
      "uid": "MSB-250",
      "name": "モブトイティラ・モチ",
      "image": "eventfig/33.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "風",
      "attackType": "物理",
      "role": "全体攻撃",
      "atk": 130,
      "def": 150,
      "tags": [
        "02",
        "09",
        "36",
        "53",
        "68",
        "73",
        "77",
        "78",
        "82"
      ],
      "soulSkill": {
        "name": "モチトイ",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "program": 40,
        "sourceText": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "DEF +10 & HP +25",
        "traitText": "風属性与会心率+8%",
        "soul": {
          "text": "敵全体に無属性の物理小～中ダメージを与え、味方全体のDEFとHPを15%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +10 & HP +25",
          "trait": "風属性与会心率+8%",
          "accessorySkillName": "モチトイ",
          "accessorySkillEffect": "敵全体に無属性の物理小～中ダメージを与え、味方全体のDEFとHPを15%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 モチトイ",
              "effect": "敵全体のHPを6%ダウンさせ、SPDを8%ダウンさせる"
            },
            "5": {
              "name": "モチトイ",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 4605,
            "ATK": 169,
            "MAG": 169,
            "DEF": 129,
            "MND": 129,
            "SPD": 186,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.14,
            "回避率": 0.06,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": null,
            "画像": "spenemy/51.png",
            "条件・補足": null,
            "技一覧": [
              "餅つきの達人 / 属性:風 / 対象:個別処理 / 効果説明:1,4,7…ターンに最大2体召喚。全体で最大5体"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "96",
        "134",
        "159",
        "mq:eventfig/20",
        "mq:eventfig/44",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "mq:eventfig/34",
      "uid": "MSB-251",
      "name": "モブスラモチ",
      "image": "eventfig/34.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 135,
      "def": 145,
      "tags": [
        "09",
        "17",
        "28",
        "60",
        "77",
        "78",
        "81"
      ],
      "soulSkill": {
        "name": "モチスライド",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "program": 16,
        "sourceText": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "DEF +7",
        "traitText": "物理ダメージ軽減+3%",
        "soul": {
          "text": "味方全体のDEFを2ターンの間20%アップし、物理ダメージ軽減を8%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +7",
          "trait": "物理ダメージ軽減+3%",
          "accessorySkillName": "モチスライド",
          "accessorySkillEffect": "味方全体のDEFを2ターンの間20%アップし、物理ダメージ軽減を8%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 モチスライド",
              "effect": "センターフィギュアのHPを30%アップし、DEFを10%アップする"
            },
            "5": {
              "name": "モチスライド",
              "effect": "センターフィギュアのHPを20%アップする"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "111",
        "119",
        "121",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/35",
      "uid": "MSB-252",
      "name": "モブバリオン",
      "image": "eventfig/35.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "連続攻撃",
      "atk": 130,
      "def": 140,
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
        "effect": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 42,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "SPD + 5 & DEF +5 & HP+10",
        "traitText": "物理会心率 ＋2% & ひるみ耐性+30%",
        "soul": {
          "text": "敵単体に無属性の物理中～大ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "SPD + 5 & DEF +5 & HP+10",
          "trait": "物理会心率 ＋2% & ひるみ耐性+30%",
          "accessorySkillName": "バリオンラッシュ",
          "accessorySkillEffect": "敵単体に無属性の物理中～大ダメージを2回に分けて与え、自分の会心率を2ターンの間10%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 バリオンラッシュ",
              "effect": "正面の敵のATKを15%ダウンさせ、HPを7%ダウンさせる"
            },
            "5": {
              "name": "バリオンラッシュ",
              "effect": "正面の敵のATKを10%ダウンさせ、HPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 1838,
            "ATK": 83,
            "MAG": 83,
            "DEF": 62,
            "MND": 62,
            "SPD": 83,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "雷",
            "通常攻撃区分": null,
            "画像": "spenemy/56.png",
            "条件・補足": null,
            "技一覧": [
              "バリオンサンダー / 属性:雷 / 攻撃区分:魔法 / 対象:敵全体",
              "バリオンナックル / 属性:雷 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:マヒ"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "93",
        "103",
        "120",
        "202",
        "159",
        "175",
        "178",
        "219",
        "mq:eventfig/29",
        "mq:eventfig/48",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/36",
      "uid": "MSB-253",
      "name": "モブコブチー",
      "image": "eventfig/36.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "妨害",
      "atk": 120,
      "def": 155,
      "tags": [
        "09",
        "27",
        "34",
        "42",
        "53",
        "54",
        "55",
        "68",
        "75"
      ],
      "soulSkill": {
        "name": "コブチーキック",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 23,
        "sourceText": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "MND + 5 & DEF +5 & HP+10",
        "traitText": "毒耐性+40%",
        "soul": {
          "text": "敵単体に地属性の物理中～大ダメージを与える"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "MND + 5 & DEF +5 & HP+10",
          "trait": "毒耐性+40%",
          "accessorySkillName": "コブチーキック",
          "accessorySkillEffect": "敵単体に地属性の物理中～大ダメージを与える",
          "mobPieceSkills": {
            "1": {
              "name": "0 コブスマイル",
              "effect": "味方全体のSPDを12%・HPを9%アップする"
            },
            "5": {
              "name": "コブスマイル",
              "effect": "味方全体のSPDを8%・HPを6%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 2335,
            "ATK": 101,
            "MAG": 101,
            "DEF": 76,
            "MND": 76,
            "SPD": 105,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.2,
            "回避率": 0,
            "会心率": 0,
            "属性": "地",
            "通常攻撃区分": null,
            "画像": "spenemy/55.png",
            "条件・補足": null,
            "技一覧": [
              "スナ・ジナラシ / 属性:地 / 攻撃区分:物理 / 対象:敵全体"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "202",
        "159",
        "163",
        "171",
        "173",
        "204",
        "219",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/37",
      "uid": "MSB-254",
      "name": "モブクルトン",
      "image": "eventfig/37.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "風",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 120,
      "def": 160,
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
      "soulSkill": {
        "name": "クイックステップ",
        "timing": "own-main",
        "effect": "このターンATK+20。攻撃後、自分フィールド内の位置を自由に変更できる。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。攻撃後、自分フィールド内の位置を自由に変更できる。",
        "program": 30,
        "sourceText": "このターンATK+20。攻撃後、自分フィールド内の位置を自由に変更できる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "SPD +7 & MND +5 & HP +15",
        "traitText": "戦闘獲得コイン +10% & 回避率 +3%",
        "soul": {
          "text": ""
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +7 & MND +5 & HP +15",
          "trait": "戦闘獲得コイン +10% & 回避率 +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "味方全体のSPDを15% & DEFを10%アップ"
            },
            "5": {
              "name": "",
              "effect": "味方全体のSPDを10% & DEFを5%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 2335,
            "ATK": 101,
            "MAG": 101,
            "DEF": 76,
            "MND": 76,
            "SPD": 105,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": 0,
            "属性": "風",
            "通常攻撃区分": null,
            "画像": "spenemy/54.png",
            "条件・補足": null,
            "技一覧": [
              "サイコソヨカゼ / 属性:風 / 攻撃区分:魔法 / 対象:敵全体"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "96",
        "134",
        "159",
        "mq:eventfig/20",
        "mq:eventfig/44"
      ]
    },
    {
      "id": "mq:eventfig/38",
      "uid": "MSB-255",
      "name": "モブカッチン",
      "image": "eventfig/38.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 150,
      "def": 130,
      "tags": [
        "06",
        "09",
        "25",
        "32",
        "39",
        "43",
        "53",
        "59",
        "77"
      ],
      "soulSkill": {
        "name": "ストライク",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK +10 & DEF +8",
        "traitText": "物理与ダメージ +8% & 会心率 +3%",
        "soul": {
          "text": ""
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +10 & DEF +8",
          "trait": "物理与ダメージ +8% & 会心率 +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "正面の敵のDEFを20% & ATKを10%ダウン"
            },
            "5": {
              "name": "",
              "effect": "正面の敵のDEFを10%ダウン"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 3504,
            "ATK": 139,
            "MAG": 139,
            "DEF": 105,
            "MND": 105,
            "SPD": 150,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.11,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "光",
            "通常攻撃区分": null,
            "画像": "spenemy/59.png",
            "条件・補足": null,
            "技一覧": [
              "サイキック・ハイキック / 属性:雷 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:マヒ"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "120",
        "121",
        "135",
        "139",
        "147",
        "163",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/20",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "mq:eventfig/39",
      "uid": "MSB-256",
      "name": "モブフレザトカゲ",
      "image": "eventfig/39.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 130,
      "tags": [
        "03",
        "09",
        "25",
        "32",
        "47",
        "49",
        "53",
        "56",
        "68"
      ],
      "soulSkill": {
        "name": "クイックステップ",
        "timing": "own-main",
        "effect": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。",
        "program": 35,
        "sourceText": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK +8 & SPD +8",
        "traitText": "火属性与ダメージ +8% & 通常攻撃会心率 +5%",
        "soul": {
          "text": ""
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +8 & SPD +8",
          "trait": "火属性与ダメージ +8% & 通常攻撃会心率 +5%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "正面の敵のHPを12% & DEFを8%ダウン"
            },
            "5": {
              "name": "",
              "effect": "正面の敵のHPを8%ダウン"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 4315,
            "ATK": 161,
            "MAG": 161,
            "DEF": 123,
            "MND": 123,
            "SPD": 177,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0.1,
            "会心率": 0,
            "属性": "火",
            "通常攻撃区分": null,
            "画像": "spenemy/60.png",
            "条件・補足": null,
            "技一覧": [
              "火炎の特技 / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "水流の特技 / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "120",
        "121",
        "128",
        "129",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "173",
        "177",
        "203",
        "206",
        "208",
        "211",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/40",
      "uid": "MSB-257",
      "name": "モブシロサバンナ",
      "image": "eventfig/40.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 130,
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
      "soulSkill": {
        "name": "クイックステップ",
        "timing": "own-main",
        "effect": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "timingLabel": "自分メイン",
        "description": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。",
        "program": 9,
        "sourceText": "このターン、相手フィールドの各フィギュアへ1回ずつ攻撃できる。2体目以降への攻撃時ATK+10。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "SPD +12 & ATK +5",
        "traitText": "回避率 +7% & 全体攻撃回避率 +5%",
        "soul": {
          "text": ""
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +12 & ATK +5",
          "trait": "回避率 +7% & 全体攻撃回避率 +5%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "味方全体のSPDを25%アップ & 敵全体のSPDを10%ダウン"
            },
            "5": {
              "name": "",
              "effect": "味方全体のSPDを15%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 2031,
            "ATK": 90,
            "MAG": 90,
            "DEF": 68,
            "MND": 68,
            "SPD": 92,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0.08,
            "会心率": 0.1,
            "属性": "光",
            "通常攻撃区分": null,
            "画像": "spenemy/53.png",
            "条件・補足": null,
            "技一覧": [
              "閃光の魔法 / 属性:光 / 攻撃区分:魔法 / 対象:敵全体"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "121",
        "202",
        "159",
        "165",
        "176",
        "180",
        "205",
        "215",
        "219",
        "mq:eventfig/03",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/41",
      "uid": "MSB-258",
      "name": "モブローブ",
      "image": "eventfig/41.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "攻撃",
      "atk": 130,
      "def": 150,
      "tags": [
        "05",
        "09",
        "25",
        "36",
        "37",
        "43",
        "53",
        "57",
        "58"
      ],
      "soulSkill": {
        "name": "パワークラッシュ",
        "timing": "skill-response",
        "effect": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "timingLabel": "相手スキル発動時",
        "description": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "program": 14,
        "sourceText": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "MAG +8 & MND +10 & MP +20",
        "traitText": "魔法ダメージ軽減 +5% & 消費MP -10%",
        "soul": {
          "text": ""
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "MAG +8 & MND +10 & MP +20",
          "trait": "魔法ダメージ軽減 +5% & 消費MP -10%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "敵全体のATKを15%ダウン & 味方全体のDEFを10%アップ"
            },
            "5": {
              "name": "",
              "effect": "敵全体のATKを10%ダウン"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 2891,
            "ATK": 120,
            "MAG": 120,
            "DEF": 91,
            "MND": 91,
            "SPD": 128,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0.05,
            "会心率": 0.1,
            "属性": "闇",
            "通常攻撃区分": null,
            "画像": "spenemy/57.png",
            "条件・補足": null,
            "技一覧": [
              "闇の魔法 / 属性:闇 / 攻撃区分:魔法 / 対象:敵全体"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "103",
        "104",
        "107",
        "109",
        "112",
        "113",
        "114",
        "115",
        "130",
        "134",
        "136",
        "142",
        "143",
        "144",
        "157",
        "158",
        "161",
        "165",
        "166",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "204",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/42",
      "uid": "MSB-259",
      "name": "モブマッシュ",
      "image": "eventfig/42.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "魔法",
      "role": "妨害",
      "atk": 140,
      "def": 130,
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
      "soulSkill": {
        "name": "バインド",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 51,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "MAG +10 & MND +7 & MP +15",
        "traitText": "魔法与ダメージ +8% & 混乱耐性 +30%",
        "soul": {
          "text": ""
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "MAG +10 & MND +7 & MP +15",
          "trait": "魔法与ダメージ +8% & 混乱耐性 +30%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "敵全体のSPDを15% & DEFを10%ダウン"
            },
            "5": {
              "name": "",
              "effect": "敵全体のSPDを10%ダウン"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 3130,
            "ATK": 128,
            "MAG": 128,
            "DEF": 97,
            "MND": 97,
            "SPD": 136,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0.05,
            "会心率": 0.1,
            "属性": "地",
            "通常攻撃区分": null,
            "画像": "spenemy/58.png",
            "条件・補足": null,
            "技一覧": [
              "ポイズン・ミュージック / 属性:地 / 攻撃区分:魔法 / 対象:敵全体 / 状態異常:毒"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "99",
        "103",
        "109",
        "112",
        "120",
        "130",
        "135",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "163",
        "171",
        "173",
        "176",
        "177",
        "178",
        "179",
        "180",
        "204",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/43",
      "uid": "MSB-260",
      "name": "モブスラゼリー",
      "image": "eventfig/43.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "水",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 210,
      "def": 230,
      "tags": [
        "03",
        "09",
        "17",
        "25",
        "39",
        "45",
        "53",
        "65",
        "80"
      ],
      "soulSkill": {
        "name": "ソウルブレイク",
        "timing": "own-main",
        "effect": "味方全体のDEF+30。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+30。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "program": 94,
        "sourceText": "味方全体のDEF+30。次の相手ターン、最初に発生する差分ライフダメージを0にする。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "DEF +10 & MND +8 & HP +25",
        "traitText": "水属性ダメージ軽減 +10% & 物理ダメージ軽減 +5%",
        "soul": {
          "text": ""
        },
        "decision": "強化形態・上位個体・高性能個体としてミドルソウル",
        "basis": {
          "statusEffect": "DEF +10 & MND +8 & HP +25",
          "trait": "水属性ダメージ軽減 +10% & 物理ダメージ軽減 +5%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "味方全体のDEFを25%アップ & 敵全体のATKを10%ダウン"
            },
            "5": {
              "name": "",
              "effect": "味方全体のDEFを15%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 4605,
            "ATK": 169,
            "MAG": 169,
            "DEF": 129,
            "MND": 129,
            "SPD": 186,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0.1,
            "会心率": 0.1,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "spenemy/61.png",
            "条件・補足": null,
            "技一覧": [
              "水の魔法 / 属性:水 / 攻撃区分:魔法 / 対象:敵全体"
            ]
          },
          "classReason": "強化形態・上位個体・高性能個体としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-260-normal-0",
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
          "label": "水属性 × 水属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-260-normal-1",
          "target": "mq:eventfig/43",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "水"
            },
            {
              "tag": "80"
            }
          ],
          "label": "水属性 × 水の極意タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "183",
        "213"
      ]
    },
    {
      "id": "mq:eventfig/44",
      "uid": "MSB-261",
      "name": "モブリュウノツカイ",
      "image": "eventfig/44.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "風",
      "attackType": "魔法",
      "role": "攻撃",
      "atk": 220,
      "def": 220,
      "tags": [
        "02",
        "09",
        "25",
        "37",
        "38",
        "41",
        "53",
        "58",
        "74"
      ],
      "soulSkill": {
        "name": "ソウルブレイク",
        "timing": "own-main",
        "effect": "このターン、攻撃するたびATK+30（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターン、攻撃するたびATK+30（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "program": 77,
        "sourceText": "このターン、攻撃するたびATK+30（累積）。撃破した場合は別の相手1体へ追加攻撃できる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "MAG +10 & MND +10 & MP +20",
        "traitText": "魔法与ダメージ +10% & 状態異常耐性 +10%",
        "soul": {
          "text": ""
        },
        "decision": "強化形態・上位個体・高性能個体としてミドルソウル",
        "basis": {
          "statusEffect": "MAG +10 & MND +10 & MP +20",
          "trait": "魔法与ダメージ +10% & 状態異常耐性 +10%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "センターフィギュアの全ステータスを15%アップ"
            },
            "5": {
              "name": "",
              "effect": "センターフィギュアの全ステータスを10%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 8004,
            "ATK": 245,
            "MAG": 245,
            "DEF": 190,
            "MND": 190,
            "SPD": 277,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0.1,
            "会心率": 0.1,
            "属性": "風",
            "通常攻撃区分": null,
            "画像": "spenemy/62.png",
            "条件・補足": null,
            "技一覧": [
              "疾風の魔法 / 属性:風 / 攻撃区分:魔法 / 対象:敵全体",
              "炎の特技 / 属性:火 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "強化形態・上位個体・高性能個体としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-261-normal-0",
          "target": "mq:eventfig/44",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 風属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-261-normal-1",
          "target": "mq:eventfig/44",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "tag": "38"
            }
          ],
          "label": "風属性 × ドラゴンタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "160",
        "164",
        "169",
        "170",
        "216",
        "218",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "mq:eventfig/45",
      "uid": "MSB-262",
      "name": "モブスカルマジック",
      "image": "eventfig/45.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "支援",
      "atk": 230,
      "def": 210,
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
        "name": "ソウルリンク",
        "timing": "skill-response",
        "effect": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "timingLabel": "相手スキル発動時",
        "description": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "program": 14,
        "sourceText": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "",
        "traitText": "状態異常付与率 +15% & 魔法会心率 +5%",
        "soul": {
          "text": ""
        },
        "decision": "強化形態・上位個体・高性能個体としてミドルソウル",
        "basis": {
          "statusEffect": "",
          "trait": "状態異常付与率 +15% & 魔法会心率 +5%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "敵全体のDEFを18% & ATKを10%ダウン"
            },
            "5": {
              "name": "",
              "effect": "敵全体のDEFを12%ダウン"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 9622,
            "ATK": 276,
            "MAG": 276,
            "DEF": 214,
            "MND": 214,
            "SPD": 313,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": 0,
            "属性": "闇",
            "通常攻撃区分": null,
            "画像": "spenemy/63.png",
            "条件・補足": null,
            "技一覧": [
              "闇の魔法 / 属性:闇 / 攻撃区分:魔法 / 対象:敵全体"
            ]
          },
          "classReason": "強化形態・上位個体・高性能個体としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-262-normal-0",
          "target": "mq:eventfig/45",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-262-normal-1",
          "target": "mq:eventfig/45",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "37"
            }
          ],
          "label": "闇属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "162",
        "164",
        "170",
        "216",
        "217",
        "218",
        "mq:eventfig/55",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "mq:eventfig/46",
      "uid": "MSB-263",
      "name": "モブカセット",
      "image": "eventfig/46.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 120,
      "def": 150,
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
        "name": "パワークラッシュ",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "program": 22,
        "sourceText": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "DEF +10 & MND +5 & HP +25",
        "traitText": "物理ダメージ軽減 +8% & デバフ軽減 +20%",
        "soul": {
          "text": ""
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +10 & MND +5 & HP +25",
          "trait": "物理ダメージ軽減 +8% & デバフ軽減 +20%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "味方全体のDEFを20%アップ & 敵全体のATKを10%ダウン"
            },
            "5": {
              "name": "",
              "effect": "味方全体のDEFを15%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 10709,
            "ATK": 296,
            "MAG": 296,
            "DEF": 230,
            "MND": 230,
            "SPD": 336,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "地",
            "通常攻撃区分": null,
            "画像": "spenemy/64.png",
            "条件・補足": null,
            "技一覧": [
              "カセット・レーザー / 属性:地 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:マヒ"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "139",
        "147",
        "163",
        "171",
        "173",
        "204",
        "mq:eventfig/20",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "mq:eventfig/47",
      "uid": "MSB-264",
      "name": "モブカセットⅡ",
      "image": "eventfig/47.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "無",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 220,
      "def": 220,
      "tags": [
        "09",
        "25",
        "30",
        "32",
        "39",
        "43",
        "53",
        "59",
        "82"
      ],
      "soulSkill": {
        "name": "パワークラッシュ",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+50。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+50。差分ライフダメージは0。",
        "program": 63,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+50。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "DEF +12 & ATK +6 & HP +25",
        "traitText": "ダメージ軽減 +5% & 会心ダメージ軽減 +10%",
        "soul": {
          "text": ""
        },
        "decision": "強化形態・上位個体・高性能個体としてミドルソウル",
        "basis": {
          "statusEffect": "DEF +12 & ATK +6 & HP +25",
          "trait": "ダメージ軽減 +5% & 会心ダメージ軽減 +10%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "味方全体のDEFを25% & SPDを10%アップ"
            },
            "5": {
              "name": "",
              "effect": "味方全体のDEFを18%アップ"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "強化形態・上位個体・高性能個体としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-264-normal-0",
          "target": "mq:eventfig/47",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "39"
            },
            {
              "tag": "82"
            }
          ],
          "label": "鉄壁タグ × 機械の力タグ",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-264-normal-1",
          "target": "mq:eventfig/47",
          "fromClass": "seed",
          "materials": [
            {
              "id": "mq:eventfig/46"
            },
            {
              "attribute": "無"
            }
          ],
          "label": "モブカセット × 無属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "217"
      ]
    },
    {
      "id": "mq:eventfig/48",
      "uid": "MSB-265",
      "name": "モブマグネットMⅡ",
      "image": "eventfig/48.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "雷",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 220,
      "def": 220,
      "tags": [
        "09",
        "25",
        "31",
        "39",
        "44",
        "49",
        "51",
        "53",
        "73"
      ],
      "soulSkill": {
        "name": "スライド",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "program": 76,
        "sourceText": "相手1体のDEF-30。そのフィギュアは次のバトルフェイズで攻撃できない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK +8 & DEF +8 & SPD +8",
        "traitText": "マヒ耐性 +40% & 会心率 +5%",
        "soul": {
          "text": ""
        },
        "decision": "強化形態・上位個体・高性能個体としてミドルソウル",
        "basis": {
          "statusEffect": "ATK +8 & DEF +8 & SPD +8",
          "trait": "マヒ耐性 +40% & 会心率 +5%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "センターフィギュアのATK・DEF・SPDを25%アップ"
            },
            "5": {
              "name": "",
              "effect": "センターフィギュアのATK・DEF・SPDを15%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 11160,
            "ATK": 304,
            "MAG": 304,
            "DEF": 236,
            "MND": 236,
            "SPD": 345,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0,
            "会心率": 0.1,
            "属性": "雷",
            "通常攻撃区分": null,
            "画像": "spenemy/66.png",
            "条件・補足": null,
            "技一覧": [
              "マグネットソードM / 属性:雷 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:ひるみ"
            ]
          },
          "classReason": "強化形態・上位個体・高性能個体としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-265-normal-0",
          "target": "mq:eventfig/48",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "雷"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "雷属性 × 雷属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-265-normal-1",
          "target": "mq:eventfig/48",
          "fromClass": "seed",
          "materials": [
            {
              "id": "mq:eventfig/26"
            },
            {
              "attribute": "雷"
            }
          ],
          "label": "モブマグネットM × 雷属性",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "182",
        "213",
        "214",
        "217"
      ]
    },
    {
      "id": "mq:eventfig/49",
      "uid": "MSB-266",
      "name": "モブサモン",
      "image": "eventfig/49.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "魔法",
      "role": "攻撃",
      "atk": 160,
      "def": 130,
      "tags": [
        "03",
        "09",
        "25",
        "37",
        "38",
        "47",
        "53",
        "56",
        "57"
      ],
      "soulSkill": {
        "name": "パワークラッシュ",
        "timing": "own-main",
        "effect": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "program": 19,
        "sourceText": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "MAG +12 & MND +5 & MP +30",
        "traitText": "火属性魔法与ダメージ +12% & 魔法会心率 +5%",
        "soul": {
          "text": ""
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "MAG +12 & MND +5 & MP +30",
          "trait": "火属性魔法与ダメージ +12% & 魔法会心率 +5%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "センターの敵のHPを15%ダウン & 敵全体のDEFを8%ダウン"
            },
            "5": {
              "name": "",
              "effect": "センターの敵のHPを10%ダウン"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "99",
        "100",
        "103",
        "107",
        "109",
        "111",
        "112",
        "113",
        "114",
        "115",
        "130",
        "134",
        "136",
        "137",
        "138",
        "139",
        "142",
        "143",
        "144",
        "145",
        "146",
        "147",
        "148",
        "157",
        "158",
        "202",
        "161",
        "167",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "204",
        "205",
        "206",
        "207",
        "208",
        "212",
        "215",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/50",
      "uid": "MSB-267",
      "name": "モブガマン",
      "image": "eventfig/50.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 135,
      "def": 150,
      "tags": [
        "03",
        "09",
        "25",
        "39",
        "47",
        "53",
        "57",
        "59",
        "77"
      ],
      "soulSkill": {
        "name": "パワークラッシュ",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "program": 39,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK +10 & DEF +10 & HP +30",
        "traitText": "ひるみ耐性 +50% & ダメージ軽減 +5%",
        "soul": {
          "text": ""
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +10 & DEF +10 & HP +30",
          "trait": "ひるみ耐性 +50% & ダメージ軽減 +5%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "正面の敵のATKを15% & DEFを15%ダウン"
            },
            "5": {
              "name": "",
              "effect": "正面の敵のATKを10% & DEFを5%ダウン"
            }
          },
          "v248": {
            "技一覧": []
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "95",
        "100",
        "107",
        "111",
        "113",
        "114",
        "115",
        "134",
        "135",
        "137",
        "138",
        "139",
        "142",
        "143",
        "144",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "163",
        "167",
        "177",
        "204",
        "206",
        "208",
        "212",
        "mq:eventfig/20",
        "mq:eventfig/23",
        "mq:eventfig/47",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:eventfig/51",
      "uid": "MSB-268",
      "name": "モブキャロメル",
      "image": "eventfig/51.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 140,
      "def": 140,
      "tags": [
        "09",
        "17",
        "28",
        "60",
        "65",
        "67",
        "77",
        "78",
        "81"
      ],
      "soulSkill": {
        "name": "キャロットステップ",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。",
        "program": 16,
        "sourceText": "相手1体のDEF-20。このターン、その相手への攻撃はDEF上昇効果を無視する。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "SPD +15",
        "traitText": "通常攻撃回避率+5%",
        "soul": {
          "text": "味方全体のSPDを2ターンの間20%アップし、回避率を5%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "SPD +15",
          "trait": "通常攻撃回避率+5%",
          "accessorySkillName": "キャロットステップ",
          "accessorySkillEffect": "味方全体のSPDを2ターンの間20%アップし、回避率を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 キャロットステップ",
              "effect": "センターフィギュアのSPDを80%アップし、DEFを20%アップする"
            },
            "5": {
              "name": "キャロットステップ",
              "effect": "センターフィギュアのSPDを60%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 35992,
            "ATK": 299,
            "MAG": 299,
            "DEF": 205,
            "MND": 205,
            "SPD": 299,
            "行動回数下限": 3,
            "行動回数上限": 5,
            "ダメージ軽減率": 0,
            "回避率": 0.05,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": null,
            "画像": "spenemy/69.png",
            "条件・補足": "レイド用HP補正適用済み。開始時HPは過去の挑戦状況で変動",
            "技一覧": [
              "キャロットバレット / 属性:火 / 対象:個別処理 / 効果説明:全体。70%で威力0.8の全体追撃"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "95",
        "107",
        "110",
        "111",
        "119",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/52",
      "uid": "MSB-269",
      "name": "モブムゥクラブ",
      "image": "eventfig/52.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 130,
      "def": 150,
      "tags": [
        "05",
        "09",
        "25",
        "30",
        "39",
        "42",
        "53",
        "68",
        "77"
      ],
      "soulSkill": {
        "name": "ムゥムーダッシュ",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "DEF +10 & HP +25",
        "traitText": "物理与ダメージ+4%",
        "soul": {
          "text": "敵単体に地属性と闇属性の物理中ダメージを与え、2ターンの間味方全体のDEFとダメージ軽減を5%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF +10 & HP +25",
          "trait": "物理与ダメージ+4%",
          "accessorySkillName": "ムゥムーダッシュ",
          "accessorySkillEffect": "敵単体に地属性と闇属性の物理中ダメージを与え、2ターンの間味方全体のDEFとダメージ軽減を5%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0 ムゥムーダッシュ",
              "effect": "敵全体のHPを6%ダウンさせ、SPDを8%ダウンさせる"
            },
            "5": {
              "name": "ムゥムーダッシュ",
              "effect": "敵全体のHPを4%ダウンさせる"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 44640,
            "ATK": 343,
            "MAG": 343,
            "DEF": 236,
            "MND": 236,
            "SPD": 345,
            "行動回数下限": 3,
            "行動回数上限": 5,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": null,
            "画像": "spenemy/70.png",
            "条件・補足": "レイド用HP補正適用済み。開始時HPは過去の挑戦状況で変動",
            "技一覧": [
              "ムゥハイジャンプ / 対象:個別処理 / 効果説明:全体・30%毒"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "99",
        "100",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "135",
        "136",
        "139",
        "147",
        "157",
        "161",
        "163",
        "166",
        "207",
        "mq:eventfig/20",
        "mq:eventfig/45",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "mq:eventfig/53",
      "uid": "MSB-270",
      "name": "モブジーン",
      "image": "eventfig/53.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "火",
      "attackType": "魔法",
      "role": "攻撃",
      "atk": 230,
      "def": 210,
      "tags": [
        "03",
        "09",
        "25",
        "37",
        "47",
        "50",
        "56",
        "58",
        "60"
      ],
      "soulSkill": {
        "name": "ストライク",
        "timing": "own-main",
        "effect": "相手1体のDEF-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 64,
        "sourceText": "相手1体のDEF-30。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "",
        "traitText": "火属性魔法与ダメージ +12% & 魔法会心率 +5%",
        "soul": {
          "text": ""
        },
        "decision": "強化形態・上位個体・高性能個体としてミドルソウル",
        "basis": {
          "statusEffect": "",
          "trait": "火属性魔法与ダメージ +12% & 魔法会心率 +5%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "敵全体のDEFを15%ダウン & SPDを10%ダウン"
            },
            "5": {
              "name": "",
              "effect": "敵全体のDEFを10%ダウン & SPDを5%ダウン"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 54208,
            "ATK": 389,
            "MAG": 389,
            "DEF": 268,
            "MND": 268,
            "SPD": 392,
            "行動回数下限": 3,
            "行動回数上限": 5,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": null,
            "画像": "spenemy/72.png",
            "条件・補足": "レイド用HP補正適用済み。開始時HPは過去の挑戦状況で変動",
            "技一覧": [
              "イケナイネガイゴト / 対象:個別処理 / 効果説明:魔法全体・50%やけど"
            ]
          },
          "classReason": "強化形態・上位個体・高性能個体としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-270-normal-0",
          "target": "mq:eventfig/53",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "attribute": "火"
            }
          ],
          "label": "火属性 × 火属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-270-normal-1",
          "target": "mq:eventfig/53",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "火"
            },
            {
              "tag": "37"
            }
          ],
          "label": "火属性 × 魔法使いタグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "200",
        "164",
        "168",
        "169",
        "170",
        "181",
        "209",
        "210",
        "214",
        "216",
        "218",
        "mq:eventfig/59"
      ]
    },
    {
      "id": "mq:eventfig/54",
      "uid": "MSB-271",
      "name": "モブマグナム",
      "image": "eventfig/54.png",
      "rarity": "UR",
      "soulClass": "middle",
      "attribute": "無",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 230,
      "def": 210,
      "tags": [
        "02",
        "09",
        "25",
        "26",
        "30",
        "48",
        "55",
        "59",
        "60"
      ],
      "soulSkill": {
        "name": "クイックステップ",
        "timing": "own-main",
        "effect": "味方1体のATK+30。その味方はこのターン守護効果を無視して攻撃対象を選べる。",
        "timingLabel": "自分メイン",
        "description": "味方1体のATK+30。その味方はこのターン守護効果を無視して攻撃対象を選べる。",
        "program": 95,
        "sourceText": "味方1体のATK+30。その味方はこのターン守護効果を無視して攻撃対象を選べる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK +10 & SPD +12 & HP +15",
        "traitText": "命中率 +20% & 通常攻撃会心率 +6%",
        "soul": {
          "text": ""
        },
        "decision": "強化形態・上位個体・高性能個体としてミドルソウル",
        "basis": {
          "statusEffect": "ATK +10 & SPD +12 & HP +15",
          "trait": "命中率 +20% & 通常攻撃会心率 +6%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "正面の敵のSPDを20%ダウン & DEFを10%ダウン"
            },
            "5": {
              "name": "",
              "effect": "正面の敵のSPDを15%ダウン"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 64704,
            "ATK": 434,
            "MAG": 434,
            "DEF": 300,
            "MND": 300,
            "SPD": 438,
            "行動回数下限": 3,
            "行動回数上限": 5,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "無",
            "通常攻撃区分": null,
            "画像": "spenemy/70.png",
            "条件・補足": "レイド用HP補正適用済み。開始時HPは過去の挑戦状況で変動",
            "技一覧": [
              "マグナム・スターダスト / 対象:個別処理 / 効果説明:魔法全体。40%判定で威力1.3の単体追撃、最大5回"
            ]
          },
          "classReason": "強化形態・上位個体・高性能個体としてミドルソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-271-normal-0",
          "target": "mq:eventfig/54",
          "fromClass": "seed",
          "materials": [
            {
              "tag": "55"
            },
            {
              "tag": "60"
            }
          ],
          "label": "スピードスタータグ × 遠距離攻撃タグ",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-271-normal-1",
          "target": "mq:eventfig/54",
          "fromClass": "seed",
          "materials": [
            {
              "attribute": "無"
            },
            {
              "tag": "55"
            }
          ],
          "label": "無属性 × スピードスタータグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": [
        "164",
        "217"
      ]
    },
    {
      "id": "mq:eventfig/55",
      "uid": "MSB-272",
      "name": "モブアノコ",
      "image": "eventfig/55.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "attribute": "闇",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 360,
      "def": 380,
      "tags": [
        "04",
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
        "77"
      ],
      "soulSkill": {
        "name": "ソウルブレイク",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+60。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+60。差分ライフダメージは0。",
        "program": 74,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+60。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "MOB",
        "statsText": "ATK +10 & DEF +20 & HP +40",
        "traitText": "ダメージ軽減 +8% & 物理与ダメージ +10%",
        "soul": {
          "text": ""
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "ATK +10 & DEF +20 & HP +40",
          "trait": "ダメージ軽減 +8% & 物理与ダメージ +10%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "敵全体のATKを15% & DEFを15%ダウン"
            },
            "5": {
              "name": "",
              "effect": "敵全体のATKを10% & DEFを5%ダウン"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 76120,
            "ATK": 480,
            "MAG": 480,
            "DEF": 333,
            "MND": 333,
            "SPD": 485,
            "行動回数下限": 3,
            "行動回数上限": 5,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": null,
            "画像": "spenemy/71.png",
            "条件・補足": "レイド用HP補正適用済み。開始時HPは過去の挑戦状況で変動",
            "技一覧": [
              "ジェノサイド・ナックル / 対象:個別処理 / 効果説明:単体・100%眠り（対象耐性等の判定前）"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-272-normal-0",
          "target": "mq:eventfig/55",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "attribute": "闇"
            }
          ],
          "label": "闇属性 × 闇属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-272-normal-1",
          "target": "mq:eventfig/55",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "闇"
            },
            {
              "tag": "77"
            }
          ],
          "label": "闇属性 × 大地の力タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/56",
      "uid": "MSB-273",
      "name": "モブハリネット",
      "image": "eventfig/56.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "防御・守護",
      "atk": 130,
      "def": 145,
      "tags": [
        "09",
        "23",
        "40",
        "42",
        "60",
        "67",
        "78"
      ],
      "soulSkill": {
        "name": "ハリーミュージック",
        "timing": "own-main",
        "effect": "このターンATK+20。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。",
        "program": 21,
        "sourceText": "このターンATK+20。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "SPD + 5 & DEF +7",
        "traitText": "物理ダメージ軽減率 ＋2%",
        "soul": {
          "text": "味方全体の会心率を2ターンの間20%アップする"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "SPD + 5 & DEF +7",
          "trait": "物理ダメージ軽減率 ＋2%",
          "accessorySkillName": "ハリーミュージック",
          "accessorySkillEffect": "味方全体の会心率を2ターンの間20%アップする",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "味方全体のDEFを18%アップ"
            },
            "5": {
              "name": "",
              "effect": "味方全体のDEFを12%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 3900,
            "ATK": 150,
            "MAG": 150,
            "DEF": 114,
            "MND": 114,
            "SPD": 163,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.1,
            "回避率": 0.05,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": null,
            "画像": "spenemy/83.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレマソード / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "110",
        "111",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/57",
      "uid": "MSB-274",
      "name": "モブエリマッキン",
      "image": "eventfig/57.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "風",
      "attackType": "魔法",
      "role": "防御・守護",
      "atk": 130,
      "def": 145,
      "tags": [
        "09",
        "23",
        "40",
        "42",
        "60",
        "70",
        "78"
      ],
      "soulSkill": {
        "name": "マッキンポッキン",
        "timing": "own-main",
        "effect": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。",
        "program": 40,
        "sourceText": "相手フィールド全体のDEFを-20する。このターン、このフィギュアは相手フィールド全員を攻撃対象に選べる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "MAG + 5 & MND +7",
        "traitText": "魔法ダメージ軽減率 ＋2%",
        "soul": {
          "text": "このターン、味方全体の通常攻撃が全体攻撃になる"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "MAG + 5 & MND +7",
          "trait": "魔法ダメージ軽減率 ＋2%",
          "accessorySkillName": "マッキンポッキン",
          "accessorySkillEffect": "このターン、味方全体の通常攻撃が全体攻撃になる",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "味方全体のDEFを18%アップ"
            },
            "5": {
              "name": "",
              "effect": "味方全体のDEFを12%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 3900,
            "ATK": 150,
            "MAG": 150,
            "DEF": 114,
            "MND": 114,
            "SPD": 163,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0.1,
            "回避率": 0.05,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": null,
            "画像": "spenemy/84.png",
            "条件・補足": null,
            "技一覧": [
              "マッキン・モッキン / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "96",
        "110",
        "111",
        "134",
        "159",
        "mq:eventfig/20",
        "mq:eventfig/44",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/58",
      "uid": "MSB-275",
      "name": "モブホラプエ",
      "image": "eventfig/58.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 150,
      "def": 130,
      "tags": [
        "06",
        "09",
        "23",
        "32",
        "42",
        "55",
        "60",
        "78",
        "81"
      ],
      "soulSkill": {
        "name": "ホラプエロック",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたびATK+20（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたびATK+20（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "program": 43,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたびATK+20（累積）。攻撃対象変更・守護効果を無視して対象を選べる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "MAG + 5 & MND +7 & SPD +7",
        "traitText": "連撃発生率(通常攻撃で追撃) ＋4%",
        "soul": {
          "text": "このターン、味方全体の会心率+30%"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "MAG + 5 & MND +7 & SPD +7",
          "trait": "連撃発生率(通常攻撃で追撃) ＋4%",
          "accessorySkillName": "ホラプエロック",
          "accessorySkillEffect": "このターン、味方全体の会心率+30%",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "味方全体のDEFを20%アップ"
            },
            "5": {
              "name": "",
              "effect": "味方全体のDEFを15%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 7068,
            "ATK": 227,
            "MAG": 227,
            "DEF": 174,
            "MND": 174,
            "SPD": 254,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0.06,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "spenemy/85.png",
            "条件・補足": null,
            "技一覧": [
              "プエルトリガー / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "95",
        "110",
        "111",
        "119",
        "120",
        "128",
        "129",
        "130",
        "144",
        "146",
        "202",
        "159",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/59",
      "uid": "MSB-276",
      "name": "モブホラクイーン",
      "image": "eventfig/59.png",
      "rarity": "MOB",
      "soulClass": "mob",
      "attribute": "風",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 380,
      "def": 370,
      "tags": [
        "06",
        "09",
        "23",
        "32",
        "36",
        "40",
        "42",
        "58",
        "60",
        "74",
        "78",
        "81"
      ],
      "soulSkill": {
        "name": "クイーンロック",
        "timing": "own-main",
        "effect": "このターン、味方全体のATK+30。さらにMUSICまたは団結力タグを持つ味方はATK+20（合計ATK+50、両タグを持つ場合も追加は1回）。",
        "timingLabel": "自分メイン",
        "description": "このターン、味方全体のATK+30。さらにMUSICまたは団結力タグを持つ味方はATK+20（合計ATK+50、両タグを持つ場合も追加は1回）。",
        "program": 96,
        "sourceText": "味方全体のATK+30。さらにMUSICまたは団結力タグを持つ味方は、このターン攻撃対象を自由に変更できる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "MOB",
        "statsText": "ATK + 7 & MND +7 & SPD +10",
        "traitText": "バフ効果5%アップ",
        "soul": {
          "text": "敵単体に風属性物理大ダメージを与え、2ターンの間ダメージ軽減率を8%下げる"
        },
        "decision": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル",
        "basis": {
          "statusEffect": "ATK + 7 & MND +7 & SPD +10",
          "trait": "バフ効果5%アップ",
          "accessorySkillName": "ホラプエロック",
          "accessorySkillEffect": "敵単体に風属性物理大ダメージを与え、2ターンの間ダメージ軽減率を8%下げる",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "味方全体のSPDを23%アップ"
            },
            "5": {
              "name": "",
              "effect": "味方全体のSPDを17%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 13055,
            "ATK": 336,
            "MAG": 336,
            "DEF": 262,
            "MND": 262,
            "SPD": 382,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.12,
            "回避率": 0.04,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": null,
            "画像": "spenemy/87.png",
            "条件・補足": null,
            "技一覧": [
              "ホラ・ロック・クイーン / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "最終形態・覚醒形態・MOB級ボスとしてMOBソウル"
        }
      },
      "fusionMaterials": [
        {
          "id": "MSB-276-normal-0",
          "target": "mq:eventfig/59",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "attribute": "風"
            }
          ],
          "label": "風属性 × 風属性",
          "basis": "通常ソウルフュージョンA",
          "special": false
        },
        {
          "id": "MSB-276-normal-1",
          "target": "mq:eventfig/59",
          "fromClass": "middle",
          "materials": [
            {
              "attribute": "風"
            },
            {
              "tag": "58"
            }
          ],
          "label": "風属性 × 特殊能力タグ",
          "basis": "通常ソウルフュージョンB",
          "special": false
        }
      ],
      "fusionTargets": []
    },
    {
      "id": "mq:eventfig/60",
      "uid": "MSB-277",
      "name": "モブオンブ",
      "image": "eventfig/60.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "連続攻撃",
      "atk": 140,
      "def": 140,
      "tags": [
        "02",
        "09",
        "23",
        "40",
        "42",
        "59",
        "78"
      ],
      "soulSkill": {
        "name": "オンブ・ザ・オンプ",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 42,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "DEF + 10",
        "traitText": "連撃発生率(通常攻撃で追撃) ＋2%",
        "soul": {
          "text": "このターン、自身(パーティーではなく使用者)の攻撃時、通常攻撃の120%で必ず追撃する"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "DEF + 10",
          "trait": "連撃発生率(通常攻撃で追撃) ＋2%",
          "accessorySkillName": "オンブ・ザ・オンプ",
          "accessorySkillEffect": "このターン、自身(パーティーではなく使用者)の攻撃時、通常攻撃の120%で必ず追撃する",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "味方全体のSPDを18%アップ"
            },
            "5": {
              "name": "",
              "effect": "味方全体のSPDを12%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 11160,
            "ATK": 304,
            "MAG": 304,
            "DEF": 236,
            "MND": 236,
            "SPD": 345,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0.05,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": null,
            "画像": "spenemy/86.png",
            "条件・補足": null,
            "技一覧": [
              "ポンポコ乱撃 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "mq:eventfig/61",
      "uid": "MSB-278",
      "name": "モブミント",
      "image": "eventfig/61.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "魔法",
      "role": "連続攻撃",
      "atk": 150,
      "def": 140,
      "tags": [
        "31",
        "37",
        "46",
        "53",
        "58",
        "60",
        "73"
      ],
      "soulSkill": {
        "name": "ミントマジック",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたびATK+20（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたびATK+20（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "program": 43,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたびATK+20（累積）。攻撃対象変更・守護効果を無視して対象を選べる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "MAG +5 & MND +5",
        "traitText": "魔法追撃率+2%",
        "soul": {
          "text": "このターン、使用者が魔法を発動する時確定で同じ魔法による追撃を行う。MPは消費しない。"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "MAG +5 & MND +5",
          "trait": "魔法追撃率+2%",
          "accessorySkillName": "ミントマジック",
          "accessorySkillEffect": "このターン、使用者が魔法を発動する時確定で同じ魔法による追撃を行う。MPは消費しない。",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミントベール",
              "effect": "味方全体のHPを15%アップし、DEFを5%アップする"
            },
            "5": {
              "name": "ミントベール",
              "effect": "味方全体のHPを10%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 7068,
            "ATK": 227,
            "MAG": 227,
            "DEF": 174,
            "MND": 174,
            "SPD": 254,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.12,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "spenemy/89.png",
            "条件・補足": null,
            "技一覧": [
              "ミント・テンゲン / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "ネプ / 属性:水 / 対象:敵単体 / 効果説明:敵単体に水属性小ダメージ",
              "ネプマ / 属性:水 / 対象:敵単体 / 効果説明:敵単体に水属性中ダメージ",
              "ネプマチューン / 属性:水 / 対象:敵単体 / 効果説明:敵単体に水属性大ダメージ"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "99",
        "103",
        "104",
        "109",
        "110",
        "111",
        "112",
        "119",
        "128",
        "129",
        "130",
        "136",
        "142",
        "143",
        "144",
        "146",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "203",
        "205",
        "206",
        "207",
        "211",
        "215",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/45",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/62",
      "uid": "MSB-279",
      "name": "モブリスミント",
      "image": "eventfig/62.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "魔法",
      "role": "連続攻撃",
      "atk": 145,
      "def": 130,
      "tags": [
        "08",
        "37",
        "46",
        "53",
        "58",
        "59",
        "60",
        "73",
        "82"
      ],
      "soulSkill": {
        "name": "ミントマジック",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたびATK+20（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたびATK+20（累積）。攻撃対象変更・守護効果を無視して対象を選べる。",
        "program": 43,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたびATK+20（累積）。攻撃対象変更・守護効果を無視して対象を選べる。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "MAG +8 & MND +10",
        "traitText": "魔法追撃率+4%",
        "soul": {
          "text": "このターン、自分含む味方が魔法を発動する時確定で魔法による追撃を行う。MPは消費しない。"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "MAG +8 & MND +10",
          "trait": "魔法追撃率+4%",
          "accessorySkillName": "ミントマジック",
          "accessorySkillEffect": "このターン、自分含む味方が魔法を発動する時確定で魔法による追撃を行う。MPは消費しない。",
          "mobPieceSkills": {
            "1": {
              "name": "0 ミントベールMAX",
              "effect": "味方全体のHPを15%アップし、DEFを5%アップする"
            },
            "5": {
              "name": "ミントベールMAX",
              "effect": "味方全体のHPを10%アップする"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 7435,
            "ATK": 233,
            "MAG": 233,
            "DEF": 180,
            "MND": 180,
            "SPD": 263,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.12,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": null,
            "画像": "spenemy/90.png",
            "条件・補足": null,
            "技一覧": [
              "ミント・テンゲン / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "ネプ / 属性:水 / 対象:敵単体 / 効果説明:敵単体に水属性小ダメージ",
              "ネプマ / 属性:水 / 対象:敵単体 / 効果説明:敵単体に水属性中ダメージ",
              "ネプマチューン / 属性:水 / 対象:敵単体 / 効果説明:敵単体に水属性大ダメージ"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "99",
        "103",
        "104",
        "109",
        "110",
        "111",
        "112",
        "119",
        "128",
        "129",
        "130",
        "136",
        "142",
        "143",
        "144",
        "146",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "203",
        "205",
        "206",
        "207",
        "211",
        "215",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/45",
        "mq:eventfig/47",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/63",
      "uid": "MSB-280",
      "name": "モブマカロン",
      "image": "eventfig/63.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "連続攻撃",
      "atk": 140,
      "def": 130,
      "tags": [
        "08",
        "34",
        "47",
        "49",
        "55",
        "65",
        "73"
      ],
      "soulSkill": {
        "name": "マカロンブースト",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 42,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "SSR",
        "statsText": "ATK +7",
        "traitText": "特技使用時、連撃発動率+2%(通常攻撃の110%で追撃)",
        "soul": {
          "text": "このターン、使用者が特技を発動する時確定で同じ特技を連続で放つ※MPは消費しない。"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +7",
          "trait": "特技使用時、連撃発動率+2%(通常攻撃の110%で追撃)",
          "accessorySkillName": "マカロンブースト",
          "accessorySkillEffect": "このターン、使用者が特技を発動する時確定で同じ特技を連続で放つ※MPは消費しない。",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "味方全体のSPDを20%アップ"
            },
            "5": {
              "name": "",
              "effect": "味方全体のSPDを12%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 9622,
            "ATK": 276,
            "MAG": 276,
            "DEF": 214,
            "MND": 214,
            "SPD": 313,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.12,
            "回避率": 0.08,
            "会心率": 0.1,
            "属性": "光",
            "通常攻撃区分": null,
            "画像": "spenemy/94.png",
            "条件・補足": "会心80%無効、50%で特技追撃、3ターンごと10%で最大HP10%回復",
            "技一覧": [
              "マカロン・ノータイム / 属性:光 / 攻撃区分:物理 / 対象:個別処理",
              "ネオソード / 属性:光 / 対象:個別処理 / 効果説明:光属性 / 小ダメージ",
              "ネオマソード / 属性:光 / 対象:個別処理 / 効果説明:光属性 / 中～大ダメージ",
              "マカロン・ティータイム / 対象:個別処理 / 効果説明:3ターンごと10%で最大HPの10%を回復"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "121",
        "128",
        "129",
        "202",
        "159",
        "165",
        "173",
        "176",
        "180",
        "203",
        "205",
        "211",
        "212",
        "215",
        "219",
        "mq:eventfig/03",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:eventfig/64",
      "uid": "MSB-281",
      "name": "モブネコマカロン",
      "image": "eventfig/64.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "連続攻撃",
      "atk": 150,
      "def": 130,
      "tags": [
        "08",
        "34",
        "47",
        "49",
        "55",
        "59",
        "65",
        "67",
        "73"
      ],
      "soulSkill": {
        "name": "マカロンブーストⅡ",
        "timing": "own-main",
        "effect": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "timingLabel": "自分メイン",
        "description": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。",
        "program": 42,
        "sourceText": "このターン最大2回攻撃できる。攻撃するたび、このターン中ATK+20（累積）。同じ相手を続けて攻撃してもよい。ダイレクトアタック不可。"
      },
      "source": {
        "figureFile": "figure_event_quest.txt",
        "rarity": "UR",
        "statsText": "ATK +12",
        "traitText": "特技使用時、連撃発動率+4%(通常攻撃の110%で追撃)",
        "soul": {
          "text": "このターン、自分含む味方が特技を発動する時確定で同じ特技を連続で放つ※MPは消費しない。"
        },
        "decision": "イベント系の基本形・単独個体として直接召喚",
        "basis": {
          "statusEffect": "ATK +12",
          "trait": "特技使用時、連撃発動率+4%(通常攻撃の110%で追撃)",
          "accessorySkillName": "マカロンブーストⅡ",
          "accessorySkillEffect": "このターン、自分含む味方が特技を発動する時確定で同じ特技を連続で放つ※MPは消費しない。",
          "mobPieceSkills": {
            "1": {
              "name": "0",
              "effect": "味方全体のSPDを25%アップ & 敵全体のSPDを10%ダウン"
            },
            "5": {
              "name": "",
              "effect": "味方全体のSPDを15%アップ"
            }
          },
          "v248": {
            "分類": "ボス",
            "HP": 10486,
            "ATK": 292,
            "MAG": 292,
            "DEF": 227,
            "MND": 227,
            "SPD": 332,
            "行動回数下限": 3,
            "行動回数上限": 4,
            "ダメージ軽減率": 0.14,
            "回避率": 0.08,
            "会心率": 0.1,
            "属性": "光",
            "通常攻撃区分": null,
            "画像": "spenemy/95.png",
            "条件・補足": "会心80%無効、50%で特技追撃、3ターンごと10%で最大HP10%回復",
            "技一覧": [
              "マカロン・ノータイム / 属性:光 / 攻撃区分:物理 / 対象:個別処理",
              "ネオソード / 属性:光 / 対象:個別処理 / 効果説明:光属性 / 小ダメージ",
              "ネオマソード / 属性:光 / 対象:個別処理 / 効果説明:光属性 / 中～大ダメージ",
              "マカロン・ティータイム / 対象:個別処理 / 効果説明:3ターンごと10%で最大HPの10%を回復"
            ]
          },
          "classReason": "イベント系の基本形・単独個体として直接召喚"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "121",
        "128",
        "129",
        "202",
        "159",
        "165",
        "173",
        "176",
        "180",
        "203",
        "205",
        "211",
        "212",
        "215",
        "219",
        "mq:eventfig/03",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "spboss001",
      "uid": "MSB-282",
      "name": "モブ怪人のボス 超合金",
      "image": "spbossfig/001.png",
      "rarity": "MOB",
      "soulClass": "seed",
      "attribute": "闇/無",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 200,
      "def": 195,
      "tags": [
        "08",
        "24",
        "25",
        "26",
        "30",
        "32",
        "34",
        "39",
        "51",
        "52",
        "61",
        "62"
      ],
      "soulSkill": {
        "name": "クロスブレイカー鋼",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "MOB",
        "statsText": "ATK +5 & DEF +5 & HP +30",
        "traitText": "特技会心率 +7%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +5 & DEF +5 & HP +30",
          "trait": "特技会心率 +7%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "ボス",
            "HP": 16176,
            "ATK": 384,
            "MAG": 384,
            "DEF": 300,
            "MND": 300,
            "SPD": 438,
            "行動回数下限": 3,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.2,
            "回避率": 0,
            "会心率": null,
            "属性": "闇・無",
            "通常攻撃区分": null,
            "画像": "boss/37.png",
            "条件・補足": null,
            "技一覧": [
              "パーフェクトスマイル / 属性:闇 / 攻撃区分:物理 / 対象:敵全体 / 状態異常:眠り",
              "アクノソシキ / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:ひるみ",
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "120",
        "135",
        "139",
        "147",
        "163",
        "166",
        "175",
        "mq:eventfig/20",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "spboss002",
      "uid": "MSB-283",
      "name": "モブドラゴン 超合金",
      "image": "spbossfig/002.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 140,
      "def": 140,
      "tags": [
        "08",
        "09",
        "25",
        "38",
        "47",
        "50",
        "56"
      ],
      "soulSkill": {
        "name": "ドラゴンブレス鋼",
        "timing": "own-main",
        "effect": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "program": 19,
        "sourceText": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "ATK +3 & DEF +3 & MND +2",
        "traitText": "火属性耐性+7% & 会心率+2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +3 & DEF +3 & MND +2",
          "trait": "火属性耐性+7% & 会心率+2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "ボス",
            "HP": 5368,
            "ATK": 187,
            "MAG": 187,
            "DEF": 144,
            "MND": 144,
            "SPD": 208,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "boss/09.png",
            "条件・補足": null,
            "技一覧": [
              "ドラゴンフレイム / 攻撃区分:魔法 / 対象:敵全体",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "spboss003",
      "uid": "MSB-284",
      "name": "モブドラゴンⅡ超合金",
      "image": "spbossfig/003.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 140,
      "def": 140,
      "tags": [
        "08",
        "09",
        "25",
        "38",
        "47",
        "50",
        "56",
        "61",
        "62"
      ],
      "soulSkill": {
        "name": "ドラゴンレイジ鋼",
        "timing": "own-main",
        "effect": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "program": 19,
        "sourceText": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "UR",
        "statsText": "ATK +3 & DEF +3 & MND +2",
        "traitText": "火属性耐性+7% & 会心率+2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +3 & DEF +3 & MND +2",
          "trait": "火属性耐性+7% & 会心率+2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "ボス",
            "HP": 13712,
            "ATK": 368,
            "MAG": 381,
            "DEF": 267,
            "MND": 272,
            "SPD": 355,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "boss/10.png",
            "条件・補足": null,
            "技一覧": [
              "ドラゴンフレイム / 攻撃区分:魔法 / 対象:敵全体",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "spboss004",
      "uid": "MSB-285",
      "name": "モブガーディアン 超合金",
      "image": "spbossfig/004.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 130,
      "def": 150,
      "tags": [
        "08",
        "09",
        "25",
        "39",
        "43",
        "61",
        "62"
      ],
      "soulSkill": {
        "name": "ガードウォール鋼",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "DEF +5 & MND +1",
        "traitText": "ダメージ軽減+2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "DEF +5 & MND +1",
          "trait": "ダメージ軽減+2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "ボス",
            "HP": 2662,
            "ATK": 126,
            "MAG": 113,
            "DEF": 85,
            "MND": 85,
            "SPD": 119,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "boss/05.png",
            "条件・補足": null,
            "技一覧": [
              "ガーディアンシールド / 攻撃区分:精神 / 対象:個別処理",
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "139",
        "147",
        "163",
        "171",
        "173",
        "204",
        "mq:eventfig/20",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "spboss005",
      "uid": "MSB-286",
      "name": "モブガーディアンⅡ超合金",
      "image": "spbossfig/005.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 130,
      "def": 160,
      "tags": [
        "08",
        "09",
        "25",
        "26",
        "32",
        "39",
        "43",
        "61",
        "62"
      ],
      "soulSkill": {
        "name": "ガードフォート鋼",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "UR",
        "statsText": "DEF +5 & HP +20",
        "traitText": "ダメージ軽減+3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "DEF +5 & HP +20",
          "trait": "ダメージ軽減+3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "技一覧": []
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "120",
        "121",
        "135",
        "139",
        "147",
        "163",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/20",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "spboss006",
      "uid": "MSB-287",
      "name": "ミラモブ 超合金",
      "image": "spbossfig/006.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 140,
      "def": 145,
      "tags": [
        "08",
        "09",
        "25",
        "37",
        "42",
        "50",
        "54"
      ],
      "soulSkill": {
        "name": "ミラポイズン鋼",
        "timing": "own-main",
        "effect": "相手フィールド1体の属性をターン終了まで無属性として扱う。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド1体の属性をターン終了まで無属性として扱う。",
        "program": 15,
        "sourceText": "相手フィールド1体の属性をターン終了まで無属性として扱う。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "MAG+3 & MP +15",
        "traitText": "闇属性耐性+7 & 回避率+3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "MAG+3 & MP +15",
          "trait": "闇属性耐性+7 & 回避率+3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "ボス",
            "HP": 2130,
            "ATK": 94,
            "MAG": 94,
            "DEF": 71,
            "MND": 71,
            "SPD": 96,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "boss/03.png",
            "条件・補足": null,
            "技一覧": [
              "ミラモブポイズン / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒",
              "ミラソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "103",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "166",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "spboss007",
      "uid": "MSB-288",
      "name": "ミラモブⅡ超合金",
      "image": "spbossfig/007.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 130,
      "def": 150,
      "tags": [
        "08",
        "09",
        "25",
        "37",
        "42",
        "50",
        "54",
        "57",
        "61"
      ],
      "soulSkill": {
        "name": "ミラナイトメア鋼",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 23,
        "sourceText": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "UR",
        "statsText": "MAG+3 & MP +15 & MND +3",
        "traitText": "毒耐性+15 & 回避率+2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "MAG+3 & MP +15 & MND +3",
          "trait": "毒耐性+15 & 回避率+2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "ボス",
            "HP": 11619,
            "ATK": 312,
            "MAG": 312,
            "DEF": 243,
            "MND": 243,
            "SPD": 355,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "boss/04.png",
            "条件・補足": null,
            "技一覧": [
              "ミラモブポイズン / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒",
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "103",
        "104",
        "107",
        "109",
        "112",
        "113",
        "114",
        "115",
        "130",
        "134",
        "136",
        "142",
        "143",
        "144",
        "157",
        "158",
        "161",
        "166",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "204",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "spboss008",
      "uid": "MSB-289",
      "name": "モブホーク超合金",
      "image": "spbossfig/008.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "風",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 135,
      "def": 150,
      "tags": [
        "08",
        "09",
        "25",
        "41",
        "50",
        "55",
        "61"
      ],
      "soulSkill": {
        "name": "ホークショット鋼",
        "timing": "own-main",
        "effect": "味方1体のATK+20。その味方はこのターン守護効果を無視して攻撃対象を選べる。",
        "timingLabel": "自分メイン",
        "description": "味方1体のATK+20。その味方はこのターン守護効果を無視して攻撃対象を選べる。",
        "program": 97,
        "sourceText": "味方1体のATK+20。その味方はこのターン守護効果を無視して攻撃対象を選べる。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "ATK +2 & SPD +2 & MND +2",
        "traitText": "風属性耐性+7%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +2 & SPD +2 & MND +2",
          "trait": "風属性耐性+7%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "ボス",
            "HP": 1482,
            "ATK": 68,
            "MAG": 68,
            "DEF": 51,
            "MND": 51,
            "SPD": 65,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": "物理",
            "画像": "boss/01.png",
            "条件・補足": null,
            "技一覧": [
              "ホークダイブ / 属性:風 / 攻撃区分:物理 / 対象:敵全体",
              "疾風斬り / 属性:風 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "96",
        "134",
        "202",
        "159",
        "219",
        "mq:eventfig/20",
        "mq:eventfig/44",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "spboss009",
      "uid": "MSB-290",
      "name": "モブホークⅡ超合金",
      "image": "spbossfig/009.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "風",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 140,
      "tags": [
        "08",
        "09",
        "25",
        "26",
        "32",
        "41",
        "50",
        "61",
        "62"
      ],
      "soulSkill": {
        "name": "ホークテンペスト鋼",
        "timing": "own-main",
        "effect": "味方1体のATK+20。そのフィギュアはこのターン、相手の守護・攻撃対象変更効果を無視して攻撃対象を選べる。",
        "timingLabel": "自分メイン",
        "description": "味方1体のATK+20。そのフィギュアはこのターン、相手の守護・攻撃対象変更効果を無視して攻撃対象を選べる。",
        "program": 98,
        "sourceText": "味方1体のATK+20。そのフィギュアはこのターン、相手の守護・攻撃対象変更効果を無視して攻撃対象を選べる。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "UR",
        "statsText": "ATK +5 & SPD +10 & MND +2",
        "traitText": "風属性耐性+7%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +5 & SPD +10 & MND +2",
          "trait": "風属性耐性+7%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "ボス",
            "HP": 8998,
            "ATK": 265,
            "MAG": 265,
            "DEF": 205,
            "MND": 205,
            "SPD": 299,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0.1,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": "物理",
            "画像": "boss/02.png",
            "条件・補足": null,
            "技一覧": [
              "スクリューホークダイブ / 攻撃区分:物理 / 対象:敵全体",
              "疾風斬り / 属性:風 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:風 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "96",
        "120",
        "134",
        "159",
        "mq:eventfig/20",
        "mq:eventfig/44"
      ]
    },
    {
      "id": "spboss010",
      "uid": "MSB-291",
      "name": "モブネオンバルス超合金",
      "image": "spbossfig/010.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "魔法・支援",
      "atk": 150,
      "def": 140,
      "tags": [
        "08",
        "09",
        "25",
        "32",
        "44",
        "50",
        "58",
        "61",
        "62"
      ],
      "soulSkill": {
        "name": "ネオンバースト鋼",
        "timing": "own-main",
        "effect": "相手1体の通常タグ1つをターン終了まで無効化する。",
        "timingLabel": "自分メイン",
        "description": "相手1体の通常タグ1つをターン終了まで無効化する。",
        "program": 34,
        "sourceText": "相手1体の通常タグ1つをターン終了まで無効化する。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "UR",
        "statsText": "MAG +5 & HP +20",
        "traitText": "光属性耐性 +8% & 会心率 +1%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "MAG +5 & HP +20",
          "trait": "光属性耐性 +8% & 会心率 +1%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "ボス",
            "HP": 3633,
            "ATK": 143,
            "MAG": 143,
            "DEF": 108,
            "MND": 108,
            "SPD": 154,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": "物理",
            "画像": "boss/07.png",
            "条件・補足": null,
            "技一覧": [
              "ネオンボム / 攻撃区分:魔法 / 対象:敵全体",
              "ネオマソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "104",
        "120",
        "121",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "spboss011",
      "uid": "MSB-292",
      "name": "モブネプチューン 超合金",
      "image": "spbossfig/011.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 150,
      "def": 140,
      "tags": [
        "08",
        "09",
        "25",
        "30",
        "32",
        "45",
        "55",
        "61",
        "62"
      ],
      "soulSkill": {
        "name": "ネプチューンアタック鋼",
        "timing": "attack-response",
        "effect": "このフィギュアを対象にした攻撃を1回無効にし、自分フィールド内の位置を変更する。",
        "timingLabel": "相手攻撃宣言時",
        "description": "このフィギュアを対象にした攻撃を1回無効にし、自分フィールド内の位置を変更する。",
        "program": 7,
        "sourceText": "このフィギュアを対象にした攻撃を1回無効にし、自分フィールド内の位置を変更する。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "UR",
        "statsText": "ATK +5 & HP +20",
        "traitText": "水属性耐性 +8% & 会心率 2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +5 & HP +20",
          "trait": "水属性耐性 +8% & 会心率 2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "ボス",
            "HP": 8004,
            "ATK": 245,
            "MAG": 245,
            "DEF": 190,
            "MND": 190,
            "SPD": 277,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "boss/008.png",
            "条件・補足": null,
            "技一覧": [
              "ネプチューン・トライデント / 属性:水 / 攻撃区分:物理 / 対象:敵全体",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "95",
        "110",
        "119",
        "120",
        "128",
        "129",
        "130",
        "144",
        "146",
        "202",
        "159",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "spboss012",
      "uid": "MSB-293",
      "name": "モブエース 超合金",
      "image": "spbossfig/012.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 140,
      "tags": [
        "08",
        "09",
        "25",
        "32",
        "44",
        "51",
        "59",
        "61",
        "62"
      ],
      "soulSkill": {
        "name": "エースブレイド鋼",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。",
        "program": 6,
        "sourceText": "相手1体のDEF-20。そのフィギュアは次のバトルフェイズで攻撃できない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "UR",
        "statsText": "MAG +5 & HP +20",
        "traitText": "光属性与ダメージ +3% & 回避率 +2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "MAG +5 & HP +20",
          "trait": "光属性与ダメージ +3% & 回避率 +2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "ボス",
            "HP": 5056,
            "ATK": 181,
            "MAG": 181,
            "DEF": 138,
            "MND": 138,
            "SPD": 199,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "boss/08.png",
            "条件・補足": null,
            "技一覧": [
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "99",
        "100",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "120",
        "136",
        "157",
        "161",
        "166",
        "175",
        "207",
        "mq:eventfig/45"
      ]
    },
    {
      "id": "spboss013",
      "uid": "MSB-294",
      "name": "モブネオマスター 超合金",
      "image": "spbossfig/013.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 130,
      "def": 150,
      "tags": [
        "08",
        "09",
        "25",
        "37",
        "44",
        "50",
        "58",
        "61",
        "62"
      ],
      "soulSkill": {
        "name": "ネオコントロール鋼",
        "timing": "skill-response",
        "effect": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "timingLabel": "相手スキル発動時",
        "description": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。",
        "program": 14,
        "sourceText": "相手のソウルスキルの対象を、このフィギュアへ変更する。対象変更できない効果の場合はその効果を無効にする。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "UR",
        "statsText": "DEF +5 & HP +20",
        "traitText": "光属性与ダメージ +5% & 会心率 +1%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "DEF +5 & HP +20",
          "trait": "光属性与ダメージ +5% & 会心率 +1%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "技一覧": []
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "103",
        "104",
        "109",
        "112",
        "121",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "spboss014",
      "uid": "MSB-295",
      "name": "モブウミデンデン 超合金",
      "image": "spbossfig/014.png",
      "rarity": "UR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 150,
      "def": 140,
      "tags": [
        "08",
        "09",
        "23",
        "25",
        "43",
        "51",
        "55",
        "61",
        "62"
      ],
      "soulSkill": {
        "name": "ウミサンダー鋼",
        "timing": "attack-response",
        "effect": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "program": 54,
        "sourceText": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "UR",
        "statsText": "ATK+5 & SPD +8 & MND +5",
        "traitText": "雷属性与ダメージ +3% & 雷属性耐性 +8%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK+5 & SPD +8 & MND +5",
          "trait": "雷属性与ダメージ +3% & 雷属性耐性 +8%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "ボス",
            "HP": 10709,
            "ATK": 296,
            "MAG": 296,
            "DEF": 230,
            "MND": 230,
            "SPD": 336,
            "行動回数下限": 2,
            "行動回数上限": 3,
            "ダメージ軽減率": 0.1,
            "回避率": 0.1,
            "会心率": null,
            "属性": "雷",
            "通常攻撃区分": "物理",
            "画像": "boss/16.png",
            "条件・補足": null,
            "技一覧": [
              "マシンガングミ / 属性:雷 / 攻撃区分:物理 / 対象:個別処理",
              "トルマソード / 属性:雷 / 攻撃区分:物理 / 対象:個別処理",
              "ロングスクラッチカット / 属性:雷 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:マヒ"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "93",
        "103",
        "202",
        "159",
        "166",
        "175",
        "178",
        "219",
        "mq:eventfig/29",
        "mq:eventfig/48",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "spboss015",
      "uid": "MSB-296",
      "name": "モブタフネス 超合金",
      "image": "spbossfig/015.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 140,
      "def": 150,
      "tags": [
        "08",
        "09",
        "26",
        "39",
        "46",
        "57",
        "61"
      ],
      "soulSkill": {
        "name": "タフガード鋼",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "HP +15",
        "traitText": "物理ダメージ軽減 +2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "HP +15",
          "trait": "物理ダメージ軽減 +2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "中ボス",
            "HP": 5017,
            "ATK": 189,
            "MAG": 175,
            "DEF": 212,
            "MND": 168,
            "SPD": 186,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/126.png",
            "条件・補足": null,
            "技一覧": [
              "パワーコントロール / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "100",
        "107",
        "113",
        "114",
        "115",
        "120",
        "134",
        "135",
        "139",
        "144",
        "147",
        "163",
        "171",
        "173",
        "204",
        "mq:eventfig/20",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "spboss016",
      "uid": "MSB-297",
      "name": "モブククリ 超合金",
      "image": "spbossfig/016.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "風",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 130,
      "def": 150,
      "tags": [
        "08",
        "09",
        "26",
        "32",
        "46",
        "59",
        "61"
      ],
      "soulSkill": {
        "name": "ククリスピン鋼",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。",
        "program": 23,
        "sourceText": "相手1体のDEF-20。次の相手ターン終了まで、そのフィギュアをソウルフュージョン素材にできない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "SPD +3",
        "traitText": "毒耐性 +8%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "毒耐性 +8%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "中ボス",
            "HP": 3920,
            "ATK": 195,
            "MAG": 175,
            "DEF": 161,
            "MND": 168,
            "SPD": 284,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0.1,
            "会心率": null,
            "属性": "風",
            "通常攻撃区分": "物理",
            "画像": "enemy/125.png",
            "条件・補足": null,
            "技一覧": [
              "モリカリブーメラン / 属性:風 / 攻撃区分:物理 / 対象:敵全体",
              "疾風斬り / 属性:風 / 攻撃区分:物理 / 対象:個別処理",
              "スクラッチソード / 属性:風 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "96",
        "120",
        "134",
        "159",
        "mq:eventfig/20",
        "mq:eventfig/44"
      ]
    },
    {
      "id": "spboss017",
      "uid": "MSB-298",
      "name": "モブヒスイ 超合金",
      "image": "spbossfig/017.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "攻撃",
      "atk": 135,
      "def": 150,
      "tags": [
        "08",
        "09",
        "26",
        "37",
        "46",
        "60",
        "61"
      ],
      "soulSkill": {
        "name": "ヒスイバリア鋼",
        "timing": "own-main",
        "effect": "相手フィールド1体の属性をターン終了まで無属性として扱う。",
        "timingLabel": "自分メイン",
        "description": "相手フィールド1体の属性をターン終了まで無属性として扱う。",
        "program": 15,
        "sourceText": "相手フィールド1体の属性をターン終了まで無属性として扱う。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "MP +10",
        "traitText": "魔法ダメージ軽減 +2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "MP +10",
          "trait": "魔法ダメージ軽減 +2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "中ボス",
            "HP": 4233,
            "ATK": 175,
            "MAG": 216,
            "DEF": 168,
            "MND": 205,
            "SPD": 247,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "魔法",
            "画像": "enemy/127.png",
            "条件・補足": null,
            "技一覧": [
              "マイナスオーラ / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "ミラマゾーン / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理",
              "イントロクロス / 属性:闇 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "103",
        "104",
        "109",
        "110",
        "111",
        "112",
        "113",
        "114",
        "115",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "166",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/45",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "spboss018",
      "uid": "MSB-299",
      "name": "モブリュウゴウ 超合金",
      "image": "spbossfig/018.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 150,
      "def": 140,
      "tags": [
        "08",
        "09",
        "26",
        "38",
        "46",
        "49",
        "61"
      ],
      "soulSkill": {
        "name": "リュウパンチ鋼",
        "timing": "own-main",
        "effect": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。",
        "program": 19,
        "sourceText": "このターン、攻撃するたびATK+20（累積）。撃破した場合は別の相手1体へ追加攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "ATK +5",
        "traitText": "火属性与ダメージ +3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +5",
          "trait": "火属性与ダメージ +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "中ボス",
            "HP": 4311,
            "ATK": 216,
            "MAG": 175,
            "DEF": 168,
            "MND": 168,
            "SPD": 261,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/128.png",
            "条件・補足": null,
            "技一覧": [
              "リュウノボリ / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "121",
        "128",
        "129",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "173",
        "177",
        "203",
        "206",
        "208",
        "211",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "spboss019",
      "uid": "MSB-300",
      "name": "酒場の看板娘 モブイルカエル 超合金",
      "image": "spbossfig/019.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 140,
      "def": 145,
      "tags": [
        "08",
        "13",
        "27",
        "40",
        "55",
        "60",
        "61"
      ],
      "soulSkill": {
        "name": "アクアカンパイ鋼",
        "timing": "own-main",
        "effect": "味方1体のATK+20。その味方はこのターン守護効果を無視して攻撃対象を選べる。",
        "timingLabel": "自分メイン",
        "description": "味方1体のATK+20。その味方はこのターン守護効果を無視して攻撃対象を選べる。",
        "program": 97,
        "sourceText": "味方1体のATK+20。その味方はこのターン守護効果を無視して攻撃対象を選べる。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "SPD +3 & DEF +3 & MND +2",
        "traitText": "水属性耐性+8% & 会心率+2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "SPD +3 & DEF +3 & MND +2",
          "trait": "水属性耐性+8% & 会心率+2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "技一覧": []
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "95",
        "110",
        "111",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "202",
        "159",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "spboss020",
      "uid": "MSB-301",
      "name": "鍛冶屋の職人 モブゴンゾー 超合金",
      "image": "spbossfig/020.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 150,
      "def": 140,
      "tags": [
        "08",
        "35",
        "36",
        "39",
        "40",
        "60",
        "61"
      ],
      "soulSkill": {
        "name": "ハンマーヒット鋼",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "program": 22,
        "sourceText": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "ATK +5 & DEF +3",
        "traitText": "地属性耐性+8% & 会心率+2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +5 & DEF +3",
          "trait": "地属性耐性+8% & 会心率+2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "技一覧": []
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "110",
        "111",
        "120",
        "135",
        "139",
        "147",
        "163",
        "171",
        "173",
        "204",
        "mq:eventfig/20",
        "mq:eventfig/47",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "spboss021",
      "uid": "MSB-302",
      "name": "新入りフィギュア売り モブメープル 超合金",
      "image": "spbossfig/021.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "魔法",
      "role": "魔法・支援",
      "atk": 150,
      "def": 140,
      "tags": [
        "08",
        "13",
        "27",
        "37",
        "40",
        "60",
        "61"
      ],
      "soulSkill": {
        "name": "ルーキーコール鋼",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 29,
        "sourceText": "相手1体のDEF-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "HP +20 & DEF +3 & MAG +2",
        "traitText": "獲得経験値+8% & 会心率+2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "HP +20 & DEF +3 & MAG +2",
          "trait": "獲得経験値+8% & 会心率+2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "技一覧": []
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "103",
        "109",
        "110",
        "111",
        "112",
        "121",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "spboss022",
      "uid": "MSB-303",
      "name": "優しき熱血コーチ モブコーチ 超合金",
      "image": "spbossfig/022.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "雷",
      "attackType": "物理",
      "role": "防御・支援",
      "atk": 140,
      "def": 150,
      "tags": [
        "08",
        "13",
        "15",
        "31",
        "40",
        "60",
        "61"
      ],
      "soulSkill": {
        "name": "もう一本鋼",
        "timing": "own-main",
        "effect": "このターンATK+20。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。",
        "program": 21,
        "sourceText": "このターンATK+20。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "HP +20 & DEF +3 & MND +2",
        "traitText": "雷属性耐性+8% & 会心率+2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "HP +20 & DEF +3 & MND +2",
          "trait": "雷属性耐性+8% & 会心率+2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "技一覧": []
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "103",
        "110",
        "111",
        "175",
        "178",
        "mq:eventfig/29",
        "mq:eventfig/48",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "spboss023",
      "uid": "MSB-304",
      "name": "モブアビスナイト 超合金",
      "image": "spbossfig/023.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 150,
      "def": 130,
      "tags": [
        "08",
        "09",
        "36",
        "40",
        "45",
        "61"
      ],
      "soulSkill": {
        "name": "アビスランス鋼",
        "timing": "own-main",
        "effect": "このターンATK+20。最初の攻撃で撃破した場合、別の相手1体へ追加攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。最初の攻撃で撃破した場合、別の相手1体へ追加攻撃できる。",
        "program": 99,
        "sourceText": "このターンATK+20。最初の攻撃で撃破した場合、別の相手1体へ追加攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "ATK +3 DEF +3",
        "traitText": "水属性与ダメージ +5%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +3 DEF +3",
          "trait": "水属性与ダメージ +5%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "中ボス",
            "HP": 2576,
            "ATK": 131,
            "MAG": 131,
            "DEF": 126,
            "MND": 126,
            "SPD": 174,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/117.png",
            "条件・補足": null,
            "技一覧": [
              "アビススクリュー / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り",
              "ウォータースパイラル / 属性:水 / 攻撃区分:物理 / 対象:敵全体"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "spboss024",
      "uid": "MSB-305",
      "name": "モブネッシー 超合金",
      "image": "spbossfig/024.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "防御・支援",
      "atk": 110,
      "def": 130,
      "tags": [
        "08",
        "09",
        "39",
        "45",
        "51"
      ],
      "soulSkill": {
        "name": "ネッシーダイブ鋼",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "水属性耐性 +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 804,
            "ATK": 97,
            "MAG": 97,
            "DEF": 81,
            "MND": 81,
            "SPD": 132,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/107.png",
            "条件・補足": null,
            "技一覧": [
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "92",
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "135",
        "139",
        "144",
        "146",
        "147",
        "163",
        "166",
        "175",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/20",
        "mq:eventfig/43",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "spboss025",
      "uid": "MSB-306",
      "name": "モブジョーンズ 超合金",
      "image": "spbossfig/025.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 150,
      "def": 140,
      "tags": [
        "08",
        "09",
        "32",
        "45",
        "49",
        "55",
        "61"
      ],
      "soulSkill": {
        "name": "ジョーズハント鋼",
        "timing": "attack-response",
        "effect": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "program": 54,
        "sourceText": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "ATK +5 DEF +3",
        "traitText": "水属性与ダメージ +5%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +5 DEF +3",
          "trait": "水属性与ダメージ +5%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "中ボス",
            "HP": 2730,
            "ATK": 137,
            "MAG": 137,
            "DEF": 131,
            "MND": 131,
            "SPD": 181,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/118.png",
            "条件・補足": null,
            "技一覧": [
              "ウェーブショック / 属性:水 / 攻撃区分:魔法 / 対象:敵全体",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ローファイスプラッシュ / 属性:水 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:眠り",
              "海の戦士 / 属性:水 / 攻撃区分:物理 / 対象:敵全体"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "95",
        "110",
        "119",
        "120",
        "121",
        "128",
        "129",
        "130",
        "144",
        "146",
        "202",
        "159",
        "173",
        "179",
        "203",
        "211",
        "212",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "spboss026",
      "uid": "MSB-307",
      "name": "モブジンベエ 超合金",
      "image": "spbossfig/026.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 120,
      "def": 120,
      "tags": [
        "08",
        "09",
        "45",
        "49",
        "55"
      ],
      "soulSkill": {
        "name": "ジンベエラッシュ鋼",
        "timing": "attack-response",
        "effect": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "program": 54,
        "sourceText": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +3",
          "trait": "水属性耐性 +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 833,
            "ATK": 97,
            "MAG": 97,
            "DEF": 81,
            "MND": 81,
            "SPD": 122,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/108.png",
            "条件・補足": null,
            "技一覧": [
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "95",
        "110",
        "119",
        "121",
        "128",
        "129",
        "130",
        "144",
        "146",
        "202",
        "159",
        "173",
        "179",
        "203",
        "211",
        "212",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "spboss027",
      "uid": "MSB-308",
      "name": "スライム 超合金",
      "image": "spbossfig/027.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "防御・支援",
      "atk": 130,
      "def": 150,
      "tags": [
        "08",
        "09",
        "10",
        "17",
        "41",
        "61"
      ],
      "soulSkill": {
        "name": "スラスライダー鋼",
        "timing": "attack-response",
        "effect": "この攻撃中DEF+30。このフィギュアが撃破されても、その戦闘の差分ライフダメージを0にする。",
        "timingLabel": "相手攻撃宣言時",
        "description": "この攻撃中DEF+30。このフィギュアが撃破されても、その戦闘の差分ライフダメージを0にする。",
        "program": 8,
        "sourceText": "この攻撃中DEF+30。このフィギュアが撃破されても、その戦闘の差分ライフダメージを0にする。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "水属性耐性 +5%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "DEF +5",
          "trait": "水属性耐性 +5%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 113,
            "ATK": 18,
            "MAG": 18,
            "DEF": 15,
            "MND": 15,
            "SPD": 23,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/01.png",
            "条件・補足": null,
            "技一覧": [
              "ネプソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "144",
        "146",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/43"
      ]
    },
    {
      "id": "spboss028",
      "uid": "MSB-309",
      "name": "モブテンデビ 超合金",
      "image": "spbossfig/028.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 110,
      "def": 130,
      "tags": [
        "08",
        "09",
        "39",
        "41",
        "50"
      ],
      "soulSkill": {
        "name": "テンウォーター鋼",
        "timing": "own-main",
        "effect": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "timingLabel": "自分メイン",
        "description": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。",
        "program": 22,
        "sourceText": "味方全体のDEF+20。次の相手ターン、最初に発生する差分ライフダメージを0にする。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "水属性耐性 +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 126,
            "ATK": 20,
            "MAG": 20,
            "DEF": 17,
            "MND": 17,
            "SPD": 26,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/04.png",
            "条件・補足": null,
            "技一覧": [
              "ネプ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "ネプマチューン / 属性:水 / 攻撃区分:魔法 / 対象:個別処理"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "135",
        "139",
        "144",
        "146",
        "147",
        "163",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/20",
        "mq:eventfig/43",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "spboss029",
      "uid": "MSB-310",
      "name": "モブジョーロ 超合金",
      "image": "spbossfig/029.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 110,
      "def": 120,
      "tags": [
        "08",
        "09",
        "39",
        "41",
        "61"
      ],
      "soulSkill": {
        "name": "ジョーロシャワー鋼",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "水属性耐性 +3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +3",
          "trait": "水属性耐性 +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 140,
            "ATK": 22,
            "MAG": 22,
            "DEF": 18,
            "MND": 18,
            "SPD": 29,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/03.png",
            "条件・補足": null,
            "技一覧": [
              "キャンディ / 属性:無 / 攻撃区分:魔法 / 対象:個別処理",
              "ネプソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理",
              "キャンディネオン / 属性:無 / 攻撃区分:魔法 / 対象:個別処理",
              "ネプマソード / 属性:水 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "110",
        "119",
        "128",
        "129",
        "130",
        "135",
        "139",
        "144",
        "146",
        "147",
        "163",
        "179",
        "203",
        "211",
        "219",
        "mq:eventfig/20",
        "mq:eventfig/43",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "spboss030",
      "uid": "MSB-311",
      "name": "モブロック 超合金",
      "image": "spbossfig/030.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "防御・支援",
      "atk": 110,
      "def": 120,
      "tags": [
        "08",
        "09",
        "39",
        "41",
        "61"
      ],
      "soulSkill": {
        "name": "ロックパンチ鋼",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "地属性耐性 +3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "地属性耐性 +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 149,
            "ATK": 20,
            "MAG": 20,
            "DEF": 20,
            "MND": 17,
            "SPD": 21,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/02.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "139",
        "147",
        "163",
        "171",
        "173",
        "204",
        "mq:eventfig/20",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "spboss031",
      "uid": "MSB-312",
      "name": "モブピコダーク 超合金",
      "image": "spbossfig/031.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 110,
      "def": 130,
      "tags": [
        "08",
        "09",
        "37",
        "48",
        "61"
      ],
      "soulSkill": {
        "name": "ピコシャドウ鋼",
        "timing": "own-main",
        "effect": "相手1体のDEF-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のDEF-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 29,
        "sourceText": "相手1体のDEF-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "闇属性耐性 +3% & 回避率1%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "闇属性耐性 +3% & 回避率1%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 1554,
            "ATK": 177,
            "MAG": 177,
            "DEF": 150,
            "MND": 150,
            "SPD": 241,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "enemy/131.png",
            "条件・補足": null,
            "技一覧": [
              "ミラマソード / 属性:闇 / 攻撃区分:物理 / 対象:個別処理",
              "リピートイントロ / 属性:闇 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:毒"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "100",
        "103",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "166",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "spboss032",
      "uid": "MSB-313",
      "name": "モブデビルスライム 超合金",
      "image": "spbossfig/032.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "水",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 110,
      "def": 120,
      "tags": [
        "08",
        "09",
        "17",
        "37",
        "48"
      ],
      "soulSkill": {
        "name": "デビスライド鋼",
        "timing": "own-main",
        "effect": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。",
        "timingLabel": "自分メイン",
        "description": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。 このスキル使用後も、このターンはフュージョン素材にできる。",
        "program": 55,
        "sourceText": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "MND +3",
        "traitText": "闇属性与えダメージ +3% & 回避率1%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "MND +3",
          "trait": "闇属性与えダメージ +3% & 回避率1%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 1582,
            "ATK": 179,
            "MAG": 179,
            "DEF": 152,
            "MND": 152,
            "SPD": 244,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "水",
            "通常攻撃区分": "物理",
            "画像": "enemy/132.png",
            "条件・補足": null,
            "技一覧": [
              "ネプマチューン / 属性:水 / 攻撃区分:魔法 / 対象:個別処理",
              "チルローファイ / 属性:水 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:眠り"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "95",
        "99",
        "103",
        "109",
        "110",
        "112",
        "119",
        "128",
        "129",
        "130",
        "136",
        "142",
        "143",
        "144",
        "146",
        "157",
        "158",
        "161",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "203",
        "205",
        "206",
        "207",
        "211",
        "215",
        "219",
        "mq:eventfig/43",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "spboss033",
      "uid": "MSB-314",
      "name": "モブミニブック 超合金",
      "image": "spbossfig/033.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "魔法",
      "role": "支援",
      "atk": 150,
      "def": 140,
      "tags": [
        "08",
        "09",
        "37",
        "48",
        "53",
        "58",
        "61"
      ],
      "soulSkill": {
        "name": "ブックトラップ鋼",
        "timing": "own-main",
        "effect": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。",
        "timingLabel": "自分メイン",
        "description": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。 このスキル使用後も、このターンはフュージョン素材にできる。",
        "program": 55,
        "sourceText": "このターン、このフィギュアはソウルフュージョン時に任意の属性1つとして扱える。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "MND +5",
        "traitText": "魔法会心率 ＋3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "MND +5",
          "trait": "魔法会心率 ＋3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 1582,
            "ATK": 179,
            "MAG": 197,
            "DEF": 152,
            "MND": 152,
            "SPD": 244,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": "魔法",
            "画像": "enemy/135.png",
            "条件・補足": null,
            "技一覧": [
              "ネオマニプール / 属性:光 / 攻撃区分:魔法 / 対象:個別処理",
              "ノイズスクラッチ / 属性:光 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱",
              "キャンディネオン / 属性:無 / 対象:味方単体 / 効果説明:味方単体を中回復"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "99",
        "103",
        "104",
        "109",
        "112",
        "121",
        "130",
        "136",
        "142",
        "143",
        "157",
        "158",
        "161",
        "165",
        "171",
        "176",
        "177",
        "178",
        "179",
        "180",
        "205",
        "206",
        "207",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/45",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "spboss034",
      "uid": "MSB-315",
      "name": "モブアサシン 超合金",
      "image": "spbossfig/034.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "闇",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 150,
      "def": 140,
      "tags": [
        "08",
        "09",
        "26",
        "48",
        "53",
        "55",
        "61"
      ],
      "soulSkill": {
        "name": "アサシンステップ鋼",
        "timing": "attack-response",
        "effect": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。",
        "program": 54,
        "sourceText": "攻撃対象を別の味方へ変更する。変更後の味方はその攻撃中DEF+20。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "SPD +5",
        "traitText": "魔法会心率 ＋3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "SPD +5",
          "trait": "魔法会心率 ＋3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 1666,
            "ATK": 186,
            "MAG": 186,
            "DEF": 158,
            "MND": 158,
            "SPD": 294,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "闇",
            "通常攻撃区分": "物理",
            "画像": "enemy/140.png",
            "条件・補足": null,
            "技一覧": [
              "ダークウィンドウ / 属性:闇 / 攻撃区分:物理 / 対象:敵全体"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "99",
        "100",
        "104",
        "109",
        "112",
        "113",
        "114",
        "115",
        "136",
        "157",
        "202",
        "159",
        "161",
        "166",
        "207",
        "219",
        "mq:eventfig/45",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:spbossfig/35",
      "uid": "MSB-316",
      "name": "モブヒノデビ 超合金",
      "image": "spbossfig/035.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 110,
      "def": 130,
      "tags": [
        "08",
        "09",
        "47",
        "50",
        "53"
      ],
      "soulSkill": {
        "name": "ヒノステップ鋼",
        "timing": "attack-response",
        "effect": "このフィギュアを対象にした攻撃を1回無効にする。",
        "timingLabel": "相手攻撃宣言時",
        "description": "このフィギュアを対象にした攻撃を1回無効にする。",
        "program": 100,
        "sourceText": "このフィギュアを対象にした攻撃を1回無効にする。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "回避率 +1%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "回避率 +1%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 580,
            "ATK": 82,
            "MAG": 88,
            "DEF": 68,
            "MND": 68,
            "SPD": 111,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "魔法",
            "画像": "enemy/88.png",
            "条件・補足": null,
            "技一覧": [
              "ホノマ / 属性:火 / 攻撃区分:魔法 / 対象:個別処理",
              "ホノマグマ / 属性:火 / 攻撃区分:魔法 / 対象:個別処理",
              "ファストビート / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:spbossfig/36",
      "uid": "MSB-317",
      "name": "モブマグトカゲ 超合金",
      "image": "spbossfig/036.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 120,
      "def": 110,
      "tags": [
        "08",
        "09",
        "38",
        "47",
        "49"
      ],
      "soulSkill": {
        "name": "マグテイル鋼",
        "timing": "own-main",
        "effect": "このターンATK+20。相手のDEF上昇効果を無視し、撃破時の差分ライフダメージ+10。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。相手のDEF上昇効果を無視し、撃破時の差分ライフダメージ+10。",
        "program": 101,
        "sourceText": "このターンATK+20。相手のDEF上昇効果を無視し、撃破時の差分ライフダメージ+10。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "火属性与ダメージ +3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +3",
          "trait": "火属性与ダメージ +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 638,
            "ATK": 88,
            "MAG": 88,
            "DEF": 74,
            "MND": 74,
            "SPD": 134,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/89.png",
            "条件・補足": null,
            "技一覧": [
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビート / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど",
              "マグソード / 属性:火 / 対象:個別処理 / 効果説明:火属性 / 小ダメージ",
              "ホノ / 属性:火 / 対象:敵単体 / 効果説明:敵単体に火属性小ダメージ",
              "ホノマ / 属性:火 / 対象:敵単体 / 効果説明:敵単体に火属性中ダメージ",
              "ホノマグマ / 属性:火 / 対象:敵単体 / 効果説明:敵単体に火属性大ダメージ"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "121",
        "128",
        "129",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "173",
        "177",
        "203",
        "206",
        "208",
        "211",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/44",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:spbossfig/37",
      "uid": "MSB-318",
      "name": "モブマグゴーレム 超合金",
      "image": "spbossfig/037.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 110,
      "def": 130,
      "tags": [
        "08",
        "09",
        "39",
        "47",
        "53"
      ],
      "soulSkill": {
        "name": "ソウルブレイク",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "火属性ダメージ軽減 +3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "火属性ダメージ軽減 +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 1620,
            "ATK": 168,
            "MAG": 168,
            "DEF": 161,
            "MND": 142,
            "SPD": 187,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/94.png",
            "条件・補足": null,
            "技一覧": [
              "マグマパワーパンチ / 攻撃区分:物理 / 対象:個別処理",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "135",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "163",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/20",
        "mq:eventfig/23",
        "mq:eventfig/47",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:spbossfig/38",
      "uid": "MSB-319",
      "name": "モブヨーガンスライム 超合金",
      "image": "spbossfig/038.png",
      "rarity": "SSR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "攻撃",
      "atk": 140,
      "def": 150,
      "tags": [
        "08",
        "09",
        "17",
        "39",
        "47",
        "50",
        "53"
      ],
      "soulSkill": {
        "name": "ヨーガンプレス鋼",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SSR",
        "statsText": "DEF +5",
        "traitText": "物理ダメージ軽減 +3% & 会心率1%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "DEF +5",
          "trait": "物理ダメージ軽減 +3% & 会心率1%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "中ボス",
            "HP": 5616,
            "ATK": 210,
            "MAG": 248,
            "DEF": 203,
            "MND": 224,
            "SPD": 282,
            "行動回数下限": 2,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/93.png",
            "条件・補足": null,
            "技一覧": [
              "マグポヨ～ / 属性:火 / 攻撃区分:魔法 / 対象:敵全体",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビートスラッシュ / 属性:火 / 攻撃区分:物理 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "119",
        "135",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "163",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/20",
        "mq:eventfig/23",
        "mq:eventfig/47",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:spbossfig/39",
      "uid": "MSB-320",
      "name": "モブダンサー 超合金",
      "image": "spbossfig/039.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 110,
      "def": 120,
      "tags": [
        "08",
        "09",
        "43",
        "53",
        "55"
      ],
      "soulSkill": {
        "name": "ダンスビート鋼",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 51,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "混乱耐性 +3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "混乱耐性 +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "中ボス",
            "HP": 938,
            "ATK": 63,
            "MAG": 63,
            "DEF": 59,
            "MND": 59,
            "SPD": 86,
            "行動回数下限": 1,
            "行動回数上限": 2,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/45.png",
            "条件・補足": null,
            "技一覧": [
              "マグソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "159",
        "167",
        "177",
        "206",
        "208",
        "212",
        "219",
        "mq:eventfig/23",
        "mq:eventfig/53",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:spbossfig/40",
      "uid": "MSB-321",
      "name": "モブナイフ 超合金",
      "image": "spbossfig/040.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "妨害",
      "atk": 120,
      "def": 120,
      "tags": [
        "08",
        "09",
        "43",
        "49",
        "53"
      ],
      "soulSkill": {
        "name": "ナイフエッジ鋼",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 51,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "ATK +3",
        "traitText": "混乱耐性 +3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "ATK +3",
          "trait": "混乱耐性 +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 286,
            "ATK": 49,
            "MAG": 44,
            "DEF": 37,
            "MND": 37,
            "SPD": 64,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/42.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ノイズスクラッチ / 属性:地 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "121",
        "128",
        "129",
        "135",
        "163",
        "171",
        "173",
        "203",
        "204",
        "211",
        "212"
      ]
    },
    {
      "id": "mq:spbossfig/41",
      "uid": "MSB-322",
      "name": "モブナーガ 超合金",
      "image": "spbossfig/041.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "魔法",
      "role": "速度・回避",
      "atk": 110,
      "def": 125,
      "tags": [
        "08",
        "09",
        "44",
        "53",
        "60"
      ],
      "soulSkill": {
        "name": "アクセル",
        "timing": "own-main",
        "effect": "このターンATK+20。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。",
        "program": 21,
        "sourceText": "このターンATK+20。攻撃対象変更・守護効果を無視して任意の相手を攻撃できる。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "回避率 +1%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "回避率 +1%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 400,
            "ATK": 59,
            "MAG": 64,
            "DEF": 50,
            "MND": 50,
            "SPD": 80,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": "魔法",
            "画像": "enemy/65.png",
            "条件・補足": null,
            "技一覧": [
              "ネオマ / 属性:光 / 攻撃区分:魔法 / 対象:個別処理",
              "ネオマニプール / 属性:光 / 攻撃区分:魔法 / 対象:個別処理",
              "ノイズスクラッチ / 属性:光 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "110",
        "111",
        "121",
        "165",
        "176",
        "180",
        "205",
        "215",
        "mq:eventfig/03",
        "mq:eventfig/54"
      ]
    },
    {
      "id": "mq:spbossfig/42",
      "uid": "MSB-323",
      "name": "モブネオントカゲ 超合金",
      "image": "spbossfig/042.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "光",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 120,
      "def": 110,
      "tags": [
        "08",
        "09",
        "49",
        "53",
        "61"
      ],
      "soulSkill": {
        "name": "ネオンドリフト鋼",
        "timing": "own-main",
        "effect": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。",
        "timingLabel": "自分メイン",
        "description": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。",
        "program": 35,
        "sourceText": "このターンATK+20。ATKが相手DEFを30以上上回った場合、差分ライフダメージ+20。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "会心率 +1%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "会心率 +1%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 434,
            "ATK": 64,
            "MAG": 64,
            "DEF": 53,
            "MND": 53,
            "SPD": 97,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "光",
            "通常攻撃区分": "物理",
            "画像": "enemy/66.png",
            "条件・補足": null,
            "技一覧": [
              "ネオマソード / 属性:光 / 攻撃区分:物理 / 対象:個別処理",
              "ノイズスクラッチ / 属性:光 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "121",
        "128",
        "129",
        "165",
        "173",
        "176",
        "180",
        "203",
        "205",
        "211",
        "212",
        "215",
        "mq:eventfig/03"
      ]
    },
    {
      "id": "mq:spbossfig/43",
      "uid": "MSB-324",
      "name": "モブミイラ 超合金",
      "image": "spbossfig/043.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "妨害",
      "atk": 110,
      "def": 130,
      "tags": [
        "08",
        "09",
        "42",
        "53",
        "54"
      ],
      "soulSkill": {
        "name": "グルグルラップ鋼",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。",
        "program": 51,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアはソウルスキルを発動できない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "混乱耐性 +5%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "混乱耐性 +5%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 196,
            "ATK": 29,
            "MAG": 29,
            "DEF": 24,
            "MND": 24,
            "SPD": 38,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/21.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ノイズスクラッチ / 属性:地 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱",
              "回復の魔法 / 攻撃区分:物理 / 対象:個別処理"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    },
    {
      "id": "mq:spbossfig/44",
      "uid": "MSB-325",
      "name": "モブアドベンチャー 超合金",
      "image": "spbossfig/044.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "火",
      "attackType": "物理",
      "role": "防御・支援",
      "atk": 110,
      "def": 120,
      "tags": [
        "08",
        "09",
        "42",
        "53",
        "61"
      ],
      "soulSkill": {
        "name": "アドベンダッシュ鋼",
        "timing": "own-main",
        "effect": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "timingLabel": "自分メイン",
        "description": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。",
        "program": 39,
        "sourceText": "相手1体のATK-20。次の相手ターン、そのフィギュアは攻撃かフュージョン素材化のどちらか一方しか行えない。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "DEF +3",
        "traitText": "ひるみ耐性 +3%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "DEF +3",
          "trait": "ひるみ耐性 +3%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 196,
            "ATK": 34,
            "MAG": 31,
            "DEF": 26,
            "MND": 26,
            "SPD": 41,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "火",
            "通常攻撃区分": "物理",
            "画像": "enemy/25.png",
            "条件・補足": null,
            "技一覧": [
              "マグソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "マグマソード / 属性:火 / 攻撃区分:物理 / 対象:個別処理",
              "ファストビート / 属性:火 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:やけど"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "94",
        "107",
        "111",
        "137",
        "138",
        "139",
        "142",
        "143",
        "145",
        "146",
        "147",
        "148",
        "158",
        "202",
        "167",
        "177",
        "206",
        "208",
        "212",
        "mq:eventfig/23",
        "mq:eventfig/53"
      ]
    },
    {
      "id": "mq:spbossfig/45",
      "uid": "MSB-326",
      "name": "モブギミック 超合金",
      "image": "spbossfig/045.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 110,
      "def": 125,
      "tags": [
        "08",
        "09",
        "39",
        "42",
        "53"
      ],
      "soulSkill": {
        "name": "アクセル",
        "timing": "attack-response",
        "effect": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "timingLabel": "相手攻撃宣言時",
        "description": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。",
        "program": 13,
        "sourceText": "攻撃対象をこのフィギュアへ変更し、その攻撃中DEF+40。差分ライフダメージは0。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "回避率 +2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "回避率 +2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 180,
            "ATK": 31,
            "MAG": 31,
            "DEF": 26,
            "MND": 26,
            "SPD": 48,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/24.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ノイズスクラッチ / 属性:地 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "139",
        "147",
        "163",
        "171",
        "173",
        "204",
        "mq:eventfig/20",
        "mq:eventfig/47"
      ]
    },
    {
      "id": "mq:spbossfig/46",
      "uid": "MSB-327",
      "name": "モブネコミイラ 超合金",
      "image": "spbossfig/046.png",
      "rarity": "SR",
      "soulClass": "seed",
      "attribute": "地",
      "attackType": "物理",
      "role": "速度・回避",
      "atk": 110,
      "def": 130,
      "tags": [
        "08",
        "09",
        "42",
        "53",
        "54"
      ],
      "soulSkill": {
        "name": "ミイラニャン鋼",
        "timing": "attack-response",
        "effect": "相手の攻撃対象を自分フィールドの別のフィギュアへ変更する。別のフィギュアがいない場合、その攻撃中DEF+30。",
        "timingLabel": "相手攻撃宣言時",
        "description": "相手の攻撃対象を自分フィールドの別のフィギュアへ変更する。別のフィギュアがいない場合、その攻撃中DEF+30。",
        "program": 69,
        "sourceText": "相手の攻撃対象を自分フィールドの別のフィギュアへ変更する。別のフィギュアがいない場合、その攻撃中DEF+30。"
      },
      "source": {
        "figureFile": "figure_list_chogokin.txt",
        "rarity": "SR",
        "statsText": "SPD +3",
        "traitText": "回避率 +2%",
        "soul": {
          "text": ""
        },
        "decision": "超合金は独立して直接召喚できる駒として扱う",
        "basis": {
          "statusEffect": "SPD +3",
          "trait": "回避率 +2%",
          "accessorySkillName": "",
          "accessorySkillEffect": "",
          "mobPieceSkills": {},
          "v248": {
            "分類": "通常敵",
            "HP": 182,
            "ATK": 29,
            "MAG": 29,
            "DEF": 24,
            "MND": 26,
            "SPD": 38,
            "行動回数下限": 1,
            "行動回数上限": 1,
            "ダメージ軽減率": 0,
            "回避率": 0,
            "会心率": null,
            "属性": "地",
            "通常攻撃区分": "物理",
            "画像": "enemy/27.png",
            "条件・補足": null,
            "技一覧": [
              "ゴレソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ゴレマソード / 属性:地 / 攻撃区分:物理 / 対象:個別処理",
              "ノイズスクラッチ / 属性:地 / 攻撃区分:魔法 / 対象:個別処理 / 状態異常:混乱"
            ]
          },
          "classReason": "超合金は独立して直接召喚できる駒として扱う"
        }
      },
      "fusionMaterials": [],
      "fusionTargets": [
        "93",
        "120",
        "135",
        "163",
        "171",
        "173",
        "204"
      ]
    }
  ],
  "recipes": [
    {
      "id": "MSB-103-normal-0",
      "target": "200",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-103-normal-1",
      "target": "200",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "56"
        }
      ],
      "label": "闇属性 × 火炎タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-108-normal-0",
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
      "label": "雷属性 × 雷属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-108-normal-1",
      "target": "92",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "tag": "51"
        }
      ],
      "label": "雷属性 × 雷撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-109-normal-0",
      "target": "93",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 地属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-109-normal-1",
      "target": "93",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "tag": "55"
        }
      ],
      "label": "地属性 × スピードスタータグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-110-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-110-normal-1",
      "target": "94",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "56"
        }
      ],
      "label": "火属性 × 火炎タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-111-normal-0",
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
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-111-normal-1",
      "target": "95",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "77"
        }
      ],
      "label": "水属性 × 大地の力タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-112-normal-0",
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
      "label": "風属性 × 風属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-112-normal-1",
      "target": "96",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "tag": "79"
        }
      ],
      "label": "風属性 × 閃光タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-115-normal-0",
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
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-115-normal-1",
      "target": "99",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "37"
        }
      ],
      "label": "闇属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-116-normal-0",
      "target": "100",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-116-normal-1",
      "target": "100",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "57"
        }
      ],
      "label": "闇属性 × 不気味なオーラタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-119-normal-0",
      "target": "103",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 雷属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-119-normal-1",
      "target": "103",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "tag": "37"
        }
      ],
      "label": "雷属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-120-normal-0",
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
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-120-normal-1",
      "target": "104",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "58"
        }
      ],
      "label": "闇属性 × 特殊能力タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-123-normal-0",
      "target": "107",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-123-normal-1",
      "target": "107",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "57"
        }
      ],
      "label": "火属性 × 不気味なオーラタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-125-normal-0",
      "target": "109",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-125-normal-1",
      "target": "109",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "37"
        }
      ],
      "label": "闇属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-126-normal-0",
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
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-126-normal-1",
      "target": "110",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "60"
        }
      ],
      "label": "水属性 × 遠距離攻撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-127-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-127-normal-1",
      "target": "111",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "60"
        }
      ],
      "label": "火属性 × 遠距離攻撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-128-normal-0",
      "target": "112",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-128-normal-1",
      "target": "112",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "37"
        }
      ],
      "label": "闇属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-129-normal-0",
      "target": "113",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-129-normal-1",
      "target": "113",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "57"
        }
      ],
      "label": "闇属性 × 不気味なオーラタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-130-normal-0",
      "target": "114",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-130-normal-1",
      "target": "114",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "57"
        }
      ],
      "label": "闇属性 × 不気味なオーラタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-131-normal-0",
      "target": "115",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-131-normal-1",
      "target": "115",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "57"
        }
      ],
      "label": "闇属性 × 不気味なオーラタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-135-normal-0",
      "target": "119",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-135-normal-1",
      "target": "119",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "17"
        }
      ],
      "label": "水属性 × スライムタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-136-normal-0",
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
      "label": "地属性 × 地属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-136-normal-1",
      "target": "120",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "tag": "32"
        }
      ],
      "label": "地属性 × 立ちはだかる強敵タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-137-normal-0",
      "target": "121",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 光属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-137-normal-1",
      "target": "121",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "tag": "49"
        }
      ],
      "label": "光属性 × 斬撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-144-normal-0",
      "target": "128",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-144-normal-1",
      "target": "128",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "49"
        }
      ],
      "label": "水属性 × 斬撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-145-normal-0",
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
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-145-normal-1",
      "target": "129",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "49"
        }
      ],
      "label": "水属性 × 斬撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-146-normal-0",
      "target": "130",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-146-normal-1",
      "target": "130",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "37"
        }
      ],
      "label": "水属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-149-normal-0",
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
      "label": "風属性 × 風属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-149-normal-1",
      "target": "134",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "tag": "57"
        }
      ],
      "label": "風属性 × 不気味なオーラタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-150-normal-0",
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
      "label": "地属性 × 地属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-150-normal-1",
      "target": "135",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "tag": "39"
        }
      ],
      "label": "地属性 × 鉄壁タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-151-normal-0",
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
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-151-normal-1",
      "target": "136",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "37"
        }
      ],
      "label": "闇属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-152-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-152-normal-1",
      "target": "137",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "38"
        }
      ],
      "label": "火属性 × ドラゴンタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-153-normal-0",
      "target": "138",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-153-normal-1",
      "target": "138",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "38"
        }
      ],
      "label": "火属性 × ドラゴンタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-154-normal-0",
      "target": "139",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-154-normal-1",
      "target": "139",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "39"
        }
      ],
      "label": "火属性 × 鉄壁タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-157-normal-0",
      "target": "142",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-157-normal-1",
      "target": "142",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "37"
        }
      ],
      "label": "火属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-158-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-158-normal-1",
      "target": "143",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "37"
        }
      ],
      "label": "火属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-159-normal-0",
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
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-159-normal-1",
      "target": "144",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "57"
        }
      ],
      "label": "水属性 × 不気味なオーラタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-160-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-160-normal-1",
      "target": "145",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "56"
        }
      ],
      "label": "火属性 × 火炎タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-161-normal-0",
      "target": "146",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "水属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-161-normal-1",
      "target": "146",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "56"
        }
      ],
      "label": "水属性 × 火炎タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-162-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-162-normal-1",
      "target": "147",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "39"
        }
      ],
      "label": "火属性 × 鉄壁タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-163-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-163-normal-1",
      "target": "148",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "56"
        }
      ],
      "label": "火属性 × 火炎タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-172-normal-0",
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
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-172-normal-1",
      "target": "157",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "37"
        }
      ],
      "label": "闇属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-173-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-173-normal-1",
      "target": "158",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "37"
        }
      ],
      "label": "火属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-174-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-174-normal-1",
      "target": "202",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "55"
        }
      ],
      "label": "火属性 × スピードスタータグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-175-normal-0",
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
      "label": "風属性 × 風属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-175-normal-1",
      "target": "159",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "tag": "55"
        }
      ],
      "label": "風属性 × スピードスタータグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-176-normal-0",
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
      "label": "風属性 × 風属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-176-normal-1",
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
      "label": "モブホーク × 風属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-177-normal-0",
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
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-177-normal-1",
      "target": "161",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "37"
        }
      ],
      "label": "闇属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-178-normal-0",
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
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-178-normal-1",
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
      "label": "ミラモブ × 闇属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-178-mob",
      "target": "162",
      "fromClass": null,
      "materials": [
        {
          "id": "161"
        },
        {
          "id": "203"
        }
      ],
      "label": "ミラモブ × モブミラナイト",
      "basis": "MOBソウルフュージョン",
      "special": true,
      "bonusATK": 20,
      "bonusDEF": 20
    },
    {
      "id": "MSB-179-normal-0",
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
      "label": "地属性 × 地属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-179-normal-1",
      "target": "163",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "tag": "39"
        }
      ],
      "label": "地属性 × 鉄壁タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-180-normal-0",
      "target": "164",
      "fromClass": "middle",
      "materials": [
        {
          "tag": "39"
        },
        {
          "tag": "25"
        }
      ],
      "label": "鉄壁タグ × ボスタグ",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-180-normal-1",
      "target": "164",
      "fromClass": "middle",
      "materials": [
        {
          "id": "163"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "モブガーディアン × 無属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-180-mob",
      "target": "164",
      "fromClass": null,
      "materials": [
        {
          "id": "163"
        },
        {
          "id": "135"
        }
      ],
      "label": "モブガーディアン × モブタフネス",
      "basis": "MOBソウルフュージョン",
      "special": true,
      "bonusATK": 20,
      "bonusDEF": 20
    },
    {
      "id": "MSB-181-normal-0",
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
      "label": "光属性 × 光属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-181-normal-1",
      "target": "165",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "tag": "58"
        }
      ],
      "label": "光属性 × 特殊能力タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-182-normal-0",
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
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-182-normal-1",
      "target": "166",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "51"
        }
      ],
      "label": "闇属性 × 雷撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-183-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-183-normal-1",
      "target": "167",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "38"
        }
      ],
      "label": "火属性 × ドラゴンタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-184-normal-0",
      "target": "168",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-184-normal-1",
      "target": "168",
      "fromClass": "middle",
      "materials": [
        {
          "id": "167"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "モブドラゴン × 火属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-184-mob",
      "target": "168",
      "fromClass": null,
      "materials": [
        {
          "id": "167"
        },
        {
          "id": "147"
        }
      ],
      "label": "モブドラゴン × モブマグバスター",
      "basis": "MOBソウルフュージョン",
      "special": true,
      "bonusATK": 20,
      "bonusDEF": 20
    },
    {
      "id": "MSB-185-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-185-normal-1",
      "target": "169",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "38"
        }
      ],
      "label": "火属性 × ドラゴンタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-185-mob",
      "target": "169",
      "fromClass": null,
      "materials": [
        {
          "id": "167"
        },
        {
          "id": "146"
        }
      ],
      "label": "モブドラゴン × モブフレザード",
      "basis": "MOBソウルフュージョン",
      "special": true,
      "bonusATK": 20,
      "bonusDEF": 20
    },
    {
      "id": "MSB-186-normal-0",
      "target": "170",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "光属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-186-normal-1",
      "target": "170",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "tag": "37"
        }
      ],
      "label": "光属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-186-mob",
      "target": "170",
      "fromClass": null,
      "materials": [
        {
          "id": "161"
        },
        {
          "id": "104"
        }
      ],
      "label": "ミラモブ × モブミラバスター",
      "basis": "MOBソウルフュージョン",
      "special": true,
      "bonusATK": 20,
      "bonusDEF": 20
    },
    {
      "id": "MSB-187-normal-0",
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
      "label": "地属性 × 地属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-187-normal-1",
      "target": "171",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "tag": "37"
        }
      ],
      "label": "地属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-188-normal-0",
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
      "label": "地属性 × 地属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-188-normal-1",
      "target": "172",
      "fromClass": "middle",
      "materials": [
        {
          "id": "171"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "モブデーバフ × 地属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-189-normal-0",
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
      "label": "地属性 × 地属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-189-normal-1",
      "target": "173",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "tag": "49"
        }
      ],
      "label": "地属性 × 斬撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-190-normal-0",
      "target": "174",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "地属性 × 地属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-190-normal-1",
      "target": "174",
      "fromClass": "middle",
      "materials": [
        {
          "id": "173"
        },
        {
          "attribute": "地"
        }
      ],
      "label": "モブバーサク × 地属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-191-normal-0",
      "target": "175",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 雷属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-191-normal-1",
      "target": "175",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "tag": "51"
        }
      ],
      "label": "雷属性 × 雷撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-192-normal-0",
      "target": "176",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 光属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-192-normal-1",
      "target": "176",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "tag": "37"
        }
      ],
      "label": "光属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-193-normal-0",
      "target": "177",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-193-normal-1",
      "target": "177",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "37"
        }
      ],
      "label": "火属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-194-normal-0",
      "target": "178",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 雷属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-194-normal-1",
      "target": "178",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "tag": "37"
        }
      ],
      "label": "雷属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-195-normal-0",
      "target": "179",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-195-normal-1",
      "target": "179",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "37"
        }
      ],
      "label": "水属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-196-normal-0",
      "target": "180",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 光属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-196-normal-1",
      "target": "180",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "tag": "37"
        }
      ],
      "label": "光属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-197-normal-0",
      "target": "181",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-197-normal-1",
      "target": "181",
      "fromClass": "middle",
      "materials": [
        {
          "id": "177"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "モブヘルリリス × 火属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-197-mob",
      "target": "181",
      "fromClass": null,
      "materials": [
        {
          "id": "177"
        },
        {
          "id": "145"
        }
      ],
      "label": "モブヘルリリス × モブフレイム",
      "basis": "MOBソウルフュージョン",
      "special": true,
      "bonusATK": 20,
      "bonusDEF": 20
    },
    {
      "id": "MSB-198-normal-0",
      "target": "182",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 雷属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-198-normal-1",
      "target": "182",
      "fromClass": "middle",
      "materials": [
        {
          "id": "178"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "モブキリンリリス × 雷属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-198-mob",
      "target": "182",
      "fromClass": null,
      "materials": [
        {
          "id": "178"
        },
        {
          "id": "92"
        }
      ],
      "label": "モブキリンリリス × モブイワキリ",
      "basis": "MOBソウルフュージョン",
      "special": true,
      "bonusATK": 20,
      "bonusDEF": 20
    },
    {
      "id": "MSB-199-normal-0",
      "target": "183",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-199-normal-1",
      "target": "183",
      "fromClass": "middle",
      "materials": [
        {
          "id": "179"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "モブリヴァリリス × 水属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-199-mob",
      "target": "183",
      "fromClass": null,
      "materials": [
        {
          "id": "179"
        },
        {
          "id": "130"
        }
      ],
      "label": "モブリヴァリリス × モブウェイブ",
      "basis": "MOBソウルフュージョン",
      "special": true,
      "bonusATK": 20,
      "bonusDEF": 20
    },
    {
      "id": "MSB-200-normal-0",
      "target": "184",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 光属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-200-normal-1",
      "target": "184",
      "fromClass": "middle",
      "materials": [
        {
          "id": "180"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "モブクフリリス × 光属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-200-mob",
      "target": "184",
      "fromClass": null,
      "materials": [
        {
          "id": "180"
        },
        {
          "id": "165"
        }
      ],
      "label": "モブクフリリス × モブネオンバルス",
      "basis": "MOBソウルフュージョン",
      "special": true,
      "bonusATK": 20,
      "bonusDEF": 20
    },
    {
      "id": "MSB-201-normal-0",
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
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-201-normal-1",
      "target": "203",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "49"
        }
      ],
      "label": "水属性 × 斬撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-202-normal-0",
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
      "label": "地属性 × 地属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-202-normal-1",
      "target": "204",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "地"
        },
        {
          "tag": "57"
        }
      ],
      "label": "地属性 × 不気味なオーラタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-203-normal-0",
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
      "label": "光属性 × 光属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-203-normal-1",
      "target": "205",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "tag": "37"
        }
      ],
      "label": "光属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-204-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-204-normal-1",
      "target": "206",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "37"
        }
      ],
      "label": "火属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-205-normal-0",
      "target": "207",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-205-normal-1",
      "target": "207",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "37"
        }
      ],
      "label": "闇属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-206-normal-0",
      "target": "208",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-206-normal-1",
      "target": "208",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "56"
        }
      ],
      "label": "火属性 × 火炎タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-207-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-207-normal-1",
      "target": "209",
      "fromClass": "middle",
      "materials": [
        {
          "id": "208"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "モブ閻魔 × 火属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-208-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-208-normal-1",
      "target": "210",
      "fromClass": "middle",
      "materials": [
        {
          "id": "208"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "モブ閻魔 × 火属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-209-normal-0",
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
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-209-normal-1",
      "target": "211",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "49"
        }
      ],
      "label": "水属性 × 斬撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-210-normal-0",
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
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-210-normal-1",
      "target": "212",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "49"
        }
      ],
      "label": "火属性 × 斬撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-211-normal-0",
      "target": "213",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-211-normal-1",
      "target": "213",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "49"
        }
      ],
      "label": "水属性 × 斬撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-212-normal-0",
      "target": "214",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-212-normal-1",
      "target": "214",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "49"
        }
      ],
      "label": "火属性 × 斬撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-213-normal-0",
      "target": "215",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 光属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-213-normal-1",
      "target": "215",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "tag": "37"
        }
      ],
      "label": "光属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-214-normal-0",
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
      "label": "光属性 × 光属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-214-normal-1",
      "target": "216",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "tag": "37"
        }
      ],
      "label": "光属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-215-normal-0",
      "target": "217",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "闇属性 × 無属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-215-normal-1",
      "target": "217",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "51"
        }
      ],
      "label": "闇属性 × 雷撃タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-215-mob",
      "target": "217",
      "fromClass": null,
      "materials": [
        {
          "id": "211"
        },
        {
          "id": "212"
        }
      ],
      "label": "モブ怪人幹部青 × モブ怪人幹部赤",
      "basis": "MOBソウルフュージョン",
      "special": true,
      "bonusATK": 20,
      "bonusDEF": 20
    },
    {
      "id": "MSB-216-normal-0",
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
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-216-normal-1",
      "target": "218",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "37"
        }
      ],
      "label": "闇属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-217-normal-0",
      "target": "219",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "attribute": "水"
        }
      ],
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-217-normal-1",
      "target": "219",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "55"
        }
      ],
      "label": "水属性 × スピードスタータグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-220-normal-0",
      "target": "mq:eventfig/03",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "光"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "光属性 × 光属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-220-normal-1",
      "target": "mq:eventfig/03",
      "fromClass": "seed",
      "materials": [
        {
          "id": "mq:eventfig/02"
        },
        {
          "attribute": "光"
        }
      ],
      "label": "モブカネドール × 光属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-237-normal-0",
      "target": "mq:eventfig/20",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 風属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-237-normal-1",
      "target": "mq:eventfig/20",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "tag": "39"
        }
      ],
      "label": "風属性 × 鉄壁タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-240-normal-0",
      "target": "mq:eventfig/23",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-240-normal-1",
      "target": "mq:eventfig/23",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "56"
        }
      ],
      "label": "火属性 × 火炎タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-246-normal-0",
      "target": "mq:eventfig/29",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 雷属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-246-normal-1",
      "target": "mq:eventfig/29",
      "fromClass": "seed",
      "materials": [
        {
          "id": "mq:eventfig/26"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "モブマグネットM × 雷属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-260-normal-0",
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
      "label": "水属性 × 水属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-260-normal-1",
      "target": "mq:eventfig/43",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "水"
        },
        {
          "tag": "80"
        }
      ],
      "label": "水属性 × 水の極意タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-261-normal-0",
      "target": "mq:eventfig/44",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 風属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-261-normal-1",
      "target": "mq:eventfig/44",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "tag": "38"
        }
      ],
      "label": "風属性 × ドラゴンタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-262-normal-0",
      "target": "mq:eventfig/45",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-262-normal-1",
      "target": "mq:eventfig/45",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "37"
        }
      ],
      "label": "闇属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-264-normal-0",
      "target": "mq:eventfig/47",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "39"
        },
        {
          "tag": "82"
        }
      ],
      "label": "鉄壁タグ × 機械の力タグ",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-264-normal-1",
      "target": "mq:eventfig/47",
      "fromClass": "seed",
      "materials": [
        {
          "id": "mq:eventfig/46"
        },
        {
          "attribute": "無"
        }
      ],
      "label": "モブカセット × 無属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-265-normal-0",
      "target": "mq:eventfig/48",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "雷"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "雷属性 × 雷属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-265-normal-1",
      "target": "mq:eventfig/48",
      "fromClass": "seed",
      "materials": [
        {
          "id": "mq:eventfig/26"
        },
        {
          "attribute": "雷"
        }
      ],
      "label": "モブマグネットM × 雷属性",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-270-normal-0",
      "target": "mq:eventfig/53",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "attribute": "火"
        }
      ],
      "label": "火属性 × 火属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-270-normal-1",
      "target": "mq:eventfig/53",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "火"
        },
        {
          "tag": "37"
        }
      ],
      "label": "火属性 × 魔法使いタグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-271-normal-0",
      "target": "mq:eventfig/54",
      "fromClass": "seed",
      "materials": [
        {
          "tag": "55"
        },
        {
          "tag": "60"
        }
      ],
      "label": "スピードスタータグ × 遠距離攻撃タグ",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-271-normal-1",
      "target": "mq:eventfig/54",
      "fromClass": "seed",
      "materials": [
        {
          "attribute": "無"
        },
        {
          "tag": "55"
        }
      ],
      "label": "無属性 × スピードスタータグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-272-normal-0",
      "target": "mq:eventfig/55",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "attribute": "闇"
        }
      ],
      "label": "闇属性 × 闇属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-272-normal-1",
      "target": "mq:eventfig/55",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "闇"
        },
        {
          "tag": "77"
        }
      ],
      "label": "闇属性 × 大地の力タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    },
    {
      "id": "MSB-276-normal-0",
      "target": "mq:eventfig/59",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "attribute": "風"
        }
      ],
      "label": "風属性 × 風属性",
      "basis": "通常ソウルフュージョンA",
      "special": false
    },
    {
      "id": "MSB-276-normal-1",
      "target": "mq:eventfig/59",
      "fromClass": "middle",
      "materials": [
        {
          "attribute": "風"
        },
        {
          "tag": "58"
        }
      ],
      "label": "風属性 × 特殊能力タグ",
      "basis": "通常ソウルフュージョンB",
      "special": false
    }
  ],
  "tags": [
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
    },
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
    }
  ]
};
export default applyOct10Additions(applyOct07Skills(applyOct07Safe(applyOct06Spec(applyBattleCorrections(applyOct05Spec(extendPieceCatalog(base)))))));
