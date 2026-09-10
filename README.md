# MOB PIECE BATTLE

独立ゲームの第1段階：スマホHOMEと拡張用のゲーム基盤。

## 起動

Node.js 22.12以降で `pnpm install` → `pnpm dev`（または npm install → npm run dev）。
依存なしの確認用起動は `node scripts/serve.mjs` → http://127.0.0.1:5173 。
ES Modulesを使用するため、index.htmlのダブルクリックではなくHTTPサーバーで開いてください。
`pnpm build` で dist に生成。`pnpm preview` で本番ビルドを確認できます。

## 今回の実装

- スマホ向け展示ルームHOME、実フィギュア画像、BATTLE導線、safe-area対応。
- v170の265体・52タグを無改変で取り込み。sourceIdとdexNo/displayNoを分離。
- 図鑑検索・レア度フィルター・センターフィギュア変更。
- 25体／COST80／重複制限を守る編成プラン。ブラウザ内保存。
- モード選択、設定、動きを抑える設定、欠損画像フォールバック。

戦闘エンジンと報酬・所有・入手機能は未実装です。FREE/RANKも準備中表示です。
編成プランは所有権を付与しません。戦闘用デッキへ接続する際は所有数を validator に渡してください。
原仕様を簡易戦闘に置き換えていません。今回の依頼に合わせ、添付ASTRA_PROMPTの全戦闘移植は次段階に留めています。

## 構造

- src/app.js：画面遷移・操作（hashによるブラウザ戻る対応）
- src/screens/showroom.js：HOME
- src/screens/library.js：図鑑・編成・モード・設定
- src/data/catalog.js：マスター参照・モード定義・素材URL
- src/game/deck.js：v115のデッキ検証とルール定数
- src/game/profile.js：バージョン付き保存データ
- src/styles/game.css：ゲーム用レイアウト
- handoff/：ZIPの参照資料を原文保存。直接実行しない。
- docs/CANONICAL.md：戦闘移植の優先関係・境界

既存雛形の未使用ファイルは保持していますが、新エントリからは読み込みません。
素材は元の fig/・figboss/ 等の相対パスを保持します。Viteのビルドでも同じディレクトリへコピーします。

## 検証

`node scripts/rules-check.mjs`：データ件数・表示番号・元ステータス一致・重複上限・25体・COST80・所有境界。
`node scripts/browser-check.mjs`：起動済みサーバーへPlaywright＋Edgeでアクセス。320/375/390/430×844、保存、編成、モード導線、ブラウザ例外を検証。Playwrightが必要です。
検証画像は docs/home-390.png など。戦闘実プレイの検証は未実施（未移植）。
