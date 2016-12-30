# document
という名の制作メモ。

## TODO
isObjectLiteralを追加。
### v3 型・インスタンス以外の関
例えば数値の内容で判定する関数に数値以外を入れた場合はTypeErrorを投げる。

## 共通

## dir構成

### ./
* index.js
 + is.js, not.jsをまとめて返すだけ。
* is.js
 * ./libのモジュールをかき集めて可変長引数化する。
 * そのうちただの判定関数詰め合わせと可変長引数化を分けたい。
* not.js
 * is.jsを元にnot関数を作成する。

### ./lib
libという名の付属モジュール用ディレクトリ。
* ^is-[a-z-]+\.js$
 * 個別の判定関数を返すモジュール。

### ./test
* test.js
 * 本体。
* cases.js
 * テストケース別。
 * babel-registerの都合で分けていたけどそのうちtest.js内にまとめてもいい。
