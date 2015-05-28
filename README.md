# :poop: :poop:

https://chrome.google.com/webstore/detail/imasml-extension/lbkcmmeofdaijlkdhklbnoghdojpegld

## 機能

User-Agent を変更

Ctrl か Enter かミドルクリックでアニメーションをスキップする

Esc を押すとダイアログを閉じる

それっぽいボタンに自動でフォーカスする (Enter で押せる)

デッキ編成の「上に移動」を高速化

飴イベントの時、変なリンクを上に出す

極道でスペシャルレッスンが出ると注意してくれる

イベントフェス一覧の弱いのを目立たなくする

フェス一覧にアクセスキー

バザーで世界線を移動できる

営業時に変な文字を出す

タイトルバーをすこし親切に

### フェスで

現在のBPが0だったらダイアログを表示してあめいっこ選ぶ

3を押したらBP3になるまで飴を押す

### IMC で

1-5 を押したらそのBPになるまで飴を押す

## ビルド方法

```sh
npm i
npm run build
```

## 更新方法

```sh
NODE_ENV=npm run build
cp build
(cd build && zip ../imasml-extension.zip *)
```

https://chrome.google.com/webstore/developer/dashboard
から
https://chrome.google.com/webstore/developer/edit/lbkcmmeofdaijlkdhklbnoghdojpegld
に行って imasml-extension.zip をアップロードする。
