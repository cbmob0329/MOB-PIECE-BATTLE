# MOB PIECE BATTLE HOME v1.1

## すぐ確認する方法
`index.html` をダブルクリックしてください。ローカルファイル（file://）でも表示できます。

## Viteで起動する場合
```bash
npm install
npm run dev
```

## フィギュア画像の差し替え
`public/assets/figures/center.png` を追加してください。
画像がない場合はプレースホルダーが表示されます。

## v1.1 修正
v1はES Modulesを直接読み込む構成だったため、`index.html` をダブルクリックして `file://` で開いた場合、ブラウザのセキュリティ制限によりJavaScriptが読み込めず真っ白になる環境がありました。
v1.1では、分割構造を保持しつつ classic script + namespace 方式へ変更し、ローカル直開き・GitHub Pages・Viteのいずれでも動作する構成に修正しました。
