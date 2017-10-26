# IWEEE 2017 WebSite

> IWEEE:International Workshop on Effective Engineering Education 2017 WebSite

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## WebSite Configuration

このサイトはメニューやタイトルの開催年とコピーライトの年，サーバーのサブディレクトリを指定できます．`iweee.config.json`に設定を記述してください．なお，各ページ内のコンテンツの開催年情報などは一切変更しません．

```json
{
  "year": "2017",
  "copyrightYear": "2017",
  "serverPath": "/iweee/2017/"
}
```

この設定の場合，`http://<your-domain>/iweee/2017`でアクセスされることを想定してファイルを生成します．

## Edit page

各ページのコンテンツを編集する場合，`pages`ディレクトリのファイルを編集してください．

何も無いページのテンプレートは以下の形式です．
```html
<template>
  <PageArticle>
    <img slot="ribbon-img" src="hogehoge.png">
    <h4 slot="title">Empty Page</h4>
    <div slot="content">
      <section>
        <h5>SubSection Title<.h5>
        <p>Paragraph</p>
      </section>
    </div>
  </PageArticle>
</template>

<script>
export default {
  head: {
    title: 'Empty Page'
  }
}
</script>
```

`<img slot="ribbon-img" src="hogehoge.png">`を任意の960x400pxの画像に置き換えると，各ページ上部の画像が変更できます．このタグを記述しない場合は自動的に総合教育棟の画像を表示します．`<h4 slot="title">Empty Page</h4>`はページ上部のタイトルです．任意に変更してください．

コンテンツは必ず`<div slot="content">`タグの内側に記述してください．文字の体裁は既存ページを参考に記述してください．

`title: 'Empty Page'`はtitleタグに挿入されるページ名です．必ず指定してください．

## Bus timetable

Directionsページのバス時刻表が改定された場合，`directions.vue`の下部にある`busTable:...`以下を編集してください．

```javascript
busTable: {
  weekDay: {
    toKosen: {
      6: ['25W', '30E', '45W'],
      7: ['05W', '15E', '30W', '51W'],
      8: ['00E', '08W', '20W', '25W', '37W'],
      9: ['05W', '30W', '45E'],
      10: ['25E', '30W'],
      11: ['10W', '20E', '50E'],
      12: ['08W', '25W'],
      13: ['00E', '05W', '25W', '45E'],
      14: ['05W', '25W', '48E'],
      15: ['10W', '35E', '45E'],
      16: ['01W', '25W', '46E'],
      17: ['00W', '27W', '35E', '45E'],
      18: ['00W', '20E', '25W', '52E'],
      19: ['15W', '40E'],
      20: ['15W', '30E'],
      21: ['00W', '50E'],
      22: ['30E']
    },
    toStation: {
      6: ['06B', '42F', '53B'],
      7: ['02F', '25F', '38B', '52F'],
      8: ['17F', '23B', '30F', '42F', '47F'],
      9: ['09F', '29F', '51F'],
      10: ['07F', '49F', '58B'],
      11: ['29F', '41B'],
      12: ['07F', '29F', '47F'],
      13: ['29F', '47F'],
      14: ['07F', '27F', '47F'],
      15: ['07F', '29F', '58B'],
      16: ['07F', '29F', '47F'],
      17: ['04F', '22F', '49F'],
      18: ['00B', '07F', '23F', '47F'],
      19: ['08F', '34F'],
      20: ['01B', '37F', '54B'],
      21: ['22F'],
      22: ['13B']
    }
  }
}
```

各行が時を表し，その後のArrayが分を表します．表示は自動的に反映されます．

## Publish to server

サーバーへ設置するときは`yarn run publish`を実行します．設定に従い静的ファイルが生成されます．生成されたファイルは`dist/`ディレクトリにあります．このファイルをWebサーバーへコピーすれば終了です．

`iweee.config.json`で設定したURLの設定と相違が無いように注意してください．
