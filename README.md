# 新歓ウェブ 2020

筑波大学情報学群情報科学類の 2020 年度新歓ウェブサイトのリポジトリです。

まず、Node.js と npm をマシンにインストールし、npm を使って依存ライブラリをインストールしてください。

```
$ npm install
```

## 開発する

ローカルで開発をするときは、次のコマンドを実行してください。`localhost:8000` で実行されます。

```sh
$ npm run dev
```

## ビルドする

ビルドするときは、次のコマンドを実行してください。`/public` 下に結果のファイルたちが出力されます。

```sh
$ npm run build
```

## コーディング規約

[ESLint](https://github.com/eslint/eslint) を使っています。次のコマンドで ESLint を実行できます。規約に反するコードが存在する場合、エラーが吐かれます。

```sh
$ npm run lint
```

また、ESLint を経由して [Prettier](https://github.com/prettier/prettier) を使っています。Prettier で実行されるようなフォーマットのエラーの場合、次のコマンドで自動修正が可能です。

```sh
$ npm run lint:fix
```
