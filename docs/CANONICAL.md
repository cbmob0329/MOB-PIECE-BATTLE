# Canonical migration contract

README_FIRST.mdを最初に読み、参照ZIPをhandoff/に保管した。
ユーザー依頼の今回の範囲はHOMEと拡張基盤。添付プロンプトの全戦闘実装要求とは区別する。

## 有効な定義の優先関係

1. v115: mobPieceV115専用HP/attack/defense/speed/cost。25体、合計80。重複 R=3, SR=3, SSR=2, UR=2, MOB=1。元の所持数制約も今後の戦闘接続で必須。
2. v132: FREE/RANK、FREE easy/hard/inferno、CPUデッキ生成、報酬・ランク F→E→D→C→B→A→S→SS。個別処理は参照版から移植し、一般的なランク計算へ置換しない。
3. v133: individual 5v5 presentation。センター位置2・タグ補正後の個別HP/ATK/DEF/SPD。v110の関連ヘルパーを含め依存解析が必要。
4. v136: v133 resolverへの最終テンポ上書き。集合600ms→START420ms、行動間20〜60ms、終了420ms、ラウンド結果1050ms、次ドロー告知700ms。

参照箇所: handoff/reference/mob_piece_reference.js の元行6492（cap）、6523（stats）、v132セクション、8270以降（v133）、8503〜8513（v136）。行頭L番号は元ゲームの行番号。

v136の行動進行は生存者のnextAt最小を選び、1000/max(18,spd)で更新。weightedTargetV110、pieceHitDamageV110、animatePieceStrikeV110を保持。攻撃・被弾・KO・通常/強攻撃/会心、各個別HPを保持。最大320行動後の残HP割合による決着も現行コードを基準とする。
5体ドロー・バトルごとの交換1回・配置・2勝先取・次の5体ドローを維持。
強攻撃のgenericなskillフラグはフィギュア固有スキルではない。

## 接続境界

現段階は battle engine 未接続。表示を動かすための仮の勝敗処理は置かない。
次段階で game/battle（戦闘状態・resolver）、game/cpu、game/rank、screen battle/resultへ分離する。
デッキ検証のowned引数へ正式な所持数を渡し、draftをそのまま戦闘所有データとして採用しない。
保存データはガチャ追加時にバージョン2へ移行。所有・ダイヤ・ルビー・前回結果を追加し、旧編成・センターを保持。ランク追加時も移行処理を設ける。
265体の全図鑑表示は所持・公開済みを意味しない。pendingはセンター選択/編成から除外。
52タグはpieceTwo/pieceThreeを含め原データ保持。RPG用two/threeへ誤接続しない。
SKILL FIGURE / PIECE BOOST / TOURNAMENT / SPECIAL / BOSS RAIDの本実装はしない。
