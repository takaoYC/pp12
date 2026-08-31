// 星光留言板設定（部署後端後，把網址貼進 api 就會生效）
const WALL = {
  // Google Apps Script 部署後的網址，結尾是 /exec
  // 留空 = 本機預覽模式：留言只存在自己的瀏覽器，方便先看版面
  api: "https://script.google.com/macros/s/AKfycbzHt6RlzALKnlkcxCuqNXlQJsBRPqrDFKKEHYd5afR7uwC1mhpwPbBEtXz9bg-DmgIb1w/exec",

  show:     10,   // 前端最多顯示幾則（由新到舊）
  maxLen:  100,   // 祝福字數上限
  maxName:  12,   // 署名字數上限
  cooldown: 30    // 同一台裝置兩次送出的最短間隔（秒）
};
