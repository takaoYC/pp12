// 訪談資料（由 interviews.json 產生；w = 關聯作品 id）
const INTERVIEWS = [
 {
  "t": "姚愛寗想像入戲「朵莉之家」　邱以太為角色健身",
  "d": "2026-07-24",
  "s": "中央社",
  "u": "https://www.cna.com.tw/news/amov/202607240242.aspx",
  "v": false
 },
 {
  "t": "姚愛寗：「我不善於面對失去和分離，透過攝影，我可以把重要的人事物永遠存放在某個地方。」",
  "d": "2026-07-17",
  "s": "VOGUE Taiwan",
  "u": "https://www.vogue.com.tw/article/%E5%A7%9A%E6%84%9B%E5%AF%97-%E6%94%9D%E5%BD%B1-photovogue",
  "v": false
 },
 {
  "t": "攝影故事＼攝影是我與世界連結的方式",
  "d": "2026-05-12",
  "s": "一影像",
  "u": "https://youtu.be/216RGaJf8MY?si=m7jCT6U5P5vaOJl3",
  "v": true
 },
 {
  "t": "2026/4/17 Livestream Replay",
  "d": "2026-04-17",
  "s": "RS IP Lab",
  "u": "https://www.youtube.com/watch?v=rynWUDsgnDE&t=672s",
  "v": true,
  "w": "4ccad584"
 },
 {
  "t": "❒ 現象図鑑 ①② 容貌焦慮 by 姚愛寗",
  "d": "2026-03-09",
  "s": "diag",
  "u": "https://diag.photos/curation/907ef3de-a7db-4740-b2bc-e07b38a477d0",
  "v": false
 },
 {
  "t": "2026 SKM PHOTO｜專訪攝影師鄭弘敬、姚愛寗：一灘水、一哩路，重寫影像與生命的邊界",
  "d": "2026-03-05",
  "s": "Shopping Design",
  "u": "https://www.shoppingdesign.com.tw/post/view/13237",
  "v": false
 },
 {
  "t": "因毛孩離世回想起家人辭世悲痛　姚愛寗用《餘像》自我修復",
  "d": "2025-12-08",
  "s": "鏡週刊",
  "u": "https://www.mirrormedia.mg/story/20251208ent002",
  "v": false
 },
 {
  "t": "姚愛寗演而優則「攝」 舉辦第3次個展",
  "d": "2025-12-07",
  "s": "青年日報",
  "u": "https://www.ydn.com.tw/tw/News/ugC_News_Detail.aspx?ID=622935",
  "v": false
 },
 {
  "t": "超級I人姚愛寗，在試鏡現場超想回家？！",
  "d": "2025-11-27",
  "s": "SweetGA",
  "u": "https://youtu.be/p_uggA0JWXA?si=5xRAQnYKZjtvdDIo",
  "v": true
 },
 {
  "t": "【與你一起，and ST】品牌好友 #曹佑寧 #姚愛寗｜2025年秋冬形象影片幕後花絮",
  "d": "2025-11-10",
  "s": "and ST TAIWAN",
  "u": "https://youtu.be/0AnkrDozLuE?si=RUfx2Yl7eJyvCHSh",
  "v": true
 },
 {
  "t": "演員姚愛寗談《那些無法測量的事物》，感受生活中的微小變化",
  "d": "2025-10-31",
  "s": "迷誠品Podcast",
  "u": "https://meet.eslite.com/tw/tc/videos/202510280001",
  "v": false
 },
 {
  "t": "以前曾在書店過夜？姚愛寗的充電時光，全都在她的珍藏書單裡｜迷誠品YouTube",
  "d": "2025-10-17",
  "s": "迷誠品｜meet eslite",
  "u": "https://meet.eslite.com/tw/tc/videos/202510170001",
  "v": false
 },
 {
  "t": "姚愛寗的書店探險記！來到夜晚的松菸，想起以前曾在書店過夜？｜誰在誠品",
  "d": "2025-10-15",
  "s": "迷誠品 MEET.eslite",
  "u": "https://youtu.be/jKtm4Xb-ksI?si=a56tkB7FlUNKDOGc",
  "v": true
 },
 {
  "t": "和姚愛寗用心來感受《那些無法測量的事物》",
  "d": "2025-10-14",
  "s": "迷誠品 MEET.eslite",
  "u": "https://youtu.be/B0np1CjpHbk?si=V0ZHltfrnLg50rtO",
  "v": true
 },
 {
  "t": "從害羞女孩到自在演員，姚愛寗的人生勇氣練習",
  "d": "2025-10-13",
  "s": "潮人物",
  "u": "https://chewpeople.com.tw/star-ai-ning-yao/",
  "v": false
 },
 {
  "t": "你聽過嗎？宿醉後再喝一杯酒可以以酒解酒!｜王庭勻 美麗本人 李玉璽 姚愛寗 陳如山 王可元 哈林庾澄慶",
  "d": "2025-10-11",
  "s": "哈!真相大白了和公視 網路直播頻道",
  "u": "https://youtu.be/nY2ZRYhT56w?si=Yjp0nsfVIN6DmDE7",
  "v": true
 },
 {
  "t": "姚愛寗帶隊前進挪威 EP4.拜訪《冰雪奇緣2》靈感原型薩米人！從小就養上百頭馴鹿？",
  "d": "2025-08-02",
  "s": "小公視",
  "u": "https://youtu.be/uHj4aYGploc?si=eoN243rrgxnzx81j",
  "v": true
 },
 {
  "t": "姚愛寗帶隊前進挪威 EP3.最美的島嶼竟被便便佔領？！玻璃生態屋挑戰自給自足，極圈內的永續生活",
  "d": "2025-07-26",
  "s": "小公視",
  "u": "https://youtu.be/Lp6eXXozSoA?si=q6I0E9beCOaEvc6H",
  "v": true
 },
 {
  "t": "姚愛寗專訪｜愛用環保杯的宇宙小姐，一場挪威探險看見極光之外的觸動",
  "d": "2025-07-21",
  "s": "劇夠",
  "u": "https://dramago.ptsplus.tv/articles/22464/",
  "v": false
 },
 {
  "t": "姚愛寗帶隊前進挪威 EP2.從小學習與大自然共存！挪威小孩個個都是露營達人，隨身配備一把刀？！",
  "d": "2025-07-19",
  "s": "小公視",
  "u": "https://youtu.be/lbauxaAoEE8?si=eS-6oVwbRtIAVcJn",
  "v": true
 },
 {
  "t": "環保仙女姚愛寗前往挪威！林哲熹、温貞菱也想去Håøya島，原因竟是？",
  "d": "2025-07-18",
  "s": "小公視",
  "u": "https://youtu.be/JMYUOYj5F-A?si=XXduTZ-JSLPQCLRK",
  "v": true
 },
 {
  "t": "《人物專訪》姚愛寗生娃有條件 探詢友善成長環境",
  "d": "2025-07-17",
  "s": "自由娛樂",
  "u": "https://ent.ltn.com.tw/news/paper/1716339",
  "v": false
 },
 {
  "t": "姚愛寗帶隊前進挪威 EP1.市中心無車？！在奧斯陸挑戰最環保生活！",
  "d": "2025-07-12",
  "s": "小公視",
  "u": "https://youtu.be/UxeTAXbYwlo?si=PZkPti-T1dzp6QW5",
  "v": true
 },
 {
  "t": "【閱：文學】姚愛寗：可以如此，也絕對不只如此",
  "d": "2025-06-26",
  "s": "聯合文學",
  "u": "https://www.unitas.me/archives/55791",
  "v": false
 },
 {
  "t": "#和主持人一起看 温貞菱在帛琉發現水母湖真相？！林哲熹、姚愛寗也想跟鯊魚共游",
  "d": "2025-06-19",
  "s": "小公視",
  "u": "https://www.youtube.com/watch?v=clbxNoMkcPU",
  "v": true
 },
 {
  "t": "「台版小松菜奈」姚愛寗俏當日系少女　台味街景拍出文青美照",
  "d": "2025-06-10",
  "s": "壹蘋",
  "u": "https://feature.nextapple.com/fashion/article/C391F2F34D980FFF6CF41123C1B537FD",
  "v": false
 },
 {
  "t": "Dressed for the Journey",
  "d": "2025-06-06",
  "s": "BEAMS",
  "u": "https://www.beams.tw/news/250606/",
  "v": false
 },
 {
  "t": "林哲熹、温貞菱、姚愛寗搶先看北極篇精華｜全新一季《下課花路米》全球暖化系列",
  "d": "2025-05-08",
  "s": "小公視",
  "u": "https://www.youtube.com/watch?v=7rbxePHRa5o",
  "v": true
 },
 {
  "t": "在北極上廁所時出現......｜林哲熹、温貞菱、姚愛寗快問快答｜全新一季《下課花路米》全球暖化系列",
  "d": "2025-04-30",
  "s": "小公視",
  "u": "https://youtu.be/VqfeeRKS9xY?si=-IHbq3bDIN5GfoNp",
  "v": true
 },
 {
  "t": "公視《下課花路米》記者會林哲熹、温貞菱、姚愛寗",
  "d": "2025-04-28",
  "s": "全民新聞網",
  "u": "https://www.youtube.com/watch?v=qb4LMVn7vvw",
  "v": true
 },
 {
  "t": "林哲熹、温貞菱、姚愛寗說到世界末日預言三人逃生計畫全說了",
  "d": "2025-04-27",
  "s": "全民新聞網",
  "u": "https://www.youtube.com/watch?v=OekyuIx9Mks",
  "v": true
 },
 {
  "t": "《童話故事下集》｜和主演一起看精彩片段｜Netflix",
  "d": "2025-02-25",
  "s": "Netflix Taiwan",
  "u": "https://youtu.be/Aj07PGCFhcc?si=NslzqzpVKv_yGq57",
  "v": true,
  "w": "d1605e45"
 },
 {
  "t": "柯佳嬿 坤達相愛13年 認同婚姻是愛情的墳墓?　Netflix《童話故事下集》",
  "d": "2025-02-11",
  "s": "WhatA VOGUE",
  "u": "https://www.youtube.com/watch?v=MFm90efiC3A",
  "v": true,
  "w": "d1605e45"
 },
 {
  "t": "攝影是「加密」的心情日記！專訪演員林予晞、姚愛寗愛上攝影的影像創作日常",
  "d": "2024-09-25",
  "s": "Shopping Design",
  "u": "https://www.shoppingdesign.com.tw/post/view/10849",
  "v": false
 },
 {
  "t": "海苔熊X姚愛寗《對愛，⼀直以來你都想錯了》「你是缺乏安全感的人嗎？」",
  "d": "2024-03-13",
  "s": "海苔熊",
  "u": "https://www.youtube.com/watch?v=lFicThp4ae4&t=214s",
  "v": true
 },
 {
  "t": "從演員變成身心靈探索者，最後還做了podcast 節目",
  "d": "2023-12-13",
  "s": "莊鵑瑛-小球",
  "u": "https://youtu.be/JSURvtcFZ1Q?si=EDLUPgflaYGvYXZd",
  "v": true
 },
 {
  "t": "【尋星計畫】用鏡頭看世界，用感官體驗自己 ft. Pipi姚愛寗",
  "d": "2023-11-29",
  "s": "莊鵑瑛-小球",
  "u": "https://youtu.be/CbrLgWRe6-g?si=ahGJthvmTNwFrlPJ",
  "v": true
 },
 {
  "t": "姚愛寗｜超寫實訪問",
  "d": "2023-10-06",
  "s": "Taiker Magazine",
  "u": "https://youtu.be/XZjQmbW7x5U?si=UoM4c2drjzy5s8Jh",
  "v": true
 },
 {
  "t": "活出愛的記憶 老寵物與我／演員姚愛寗╳小兔：牠讓我知道真正的自己在哪裡",
  "d": "2023-10-01",
  "s": "UDN 500輯",
  "u": "https://500times.udn.com/wtimes/story/124863/7476877",
  "v": false
 },
 {
  "t": "【伴】黃偉晉新歌請到空靈女神姚愛寗！兩人都是水晶控聊起來好開心~",
  "d": "2023-09-26",
  "s": "八大電視娛樂百分百",
  "u": "https://youtu.be/LSBO-8s3rek?si=FXaRLdVfiaZWt4q9",
  "v": true
 },
 {
  "t": "橫掃台日影壇美少女！姚愛寗多重宇宙大公開：「妳我都是獨一無二的存在，撕掉包裝仍然值得擁有喝采。」",
  "d": "2023-05-09",
  "s": "Bella Taiwan",
  "u": "https://youtu.be/uahpyHpbfVM?si=zshL_6s23A8xeWlA",
  "v": true
 },
 {
  "t": "台北難得好天氣！劉秝緁與PP姚愛寗舉辦野餐慶祝派對，用「MIMIAN瞇瞇眼生乳波士頓派」創造幸福記憶",
  "d": "2023-03-29",
  "s": "HereNow",
  "u": "https://www.herenow.city/taipei/article/mimian-at-taipei/",
  "v": false
 },
 {
  "t": "女人30｜Lulu 黃路梓茵、郭書瑤、孟耿如、宋芸樺、姚愛寗、文姿云，自己的房間",
  "d": "2023-03-22",
  "s": "Marie Claire Taiwan美麗佳人",
  "u": "https://youtu.be/jvpALFMrlr4?si=smmE2Zn_NmVkgne1",
  "v": true
 },
 {
  "t": "【影像版】OH夜DJ代班 - TRASH (魁剛+頤原) x 林哲熹 x 姚愛寗",
  "d": "2023-03-17",
  "s": "hitfm",
  "u": "https://www.youtube.com/watch?v=Qq7ALzeiirQ",
  "v": true
 },
 {
  "t": "On The Road, We Have Secrets and Cigarettes.",
  "d": "2023-01-16",
  "s": "Obscura",
  "u": "https://www.obscura-magazine.com/all/stories/misc/pipi-yao/",
  "v": false
 },
 {
  "t": "擁抱所有負面情緒 接納自己真正的模樣",
  "d": "2022-12-02",
  "s": "小日子",
  "u": "https://onelittleday.com.tw/120122/",
  "v": false
 },
 {
  "t": "定格生命美好時刻｜姚愛寗",
  "d": "2022-11-16",
  "s": "Prestige",
  "u": "https://www.prestigeonline.com/tw/uncategorized/%E5%AE%9A%E6%A0%BC%E7%94%9F%E5%91%BD%E7%BE%8E%E5%A5%BD%E6%99%82%E5%88%BB%EF%BD%9C%E5%A7%9A%E6%84%9B%E5%AF%97/",
  "v": false
 },
 {
  "t": "【靈魂交換】日常凝結成創作─姚愛寗 VS. Sydney Sie",
  "d": "2022-10-17",
  "s": "聯合文學",
  "u": "https://www.unitas.me/archives/36465",
  "v": false
 },
 {
  "t": "連結內在智慧，Pi Pi 都是如何與高靈團隊對話？ft. 姚愛寗 Pi Pi",
  "d": "2022-08-31",
  "s": "一則茶室",
  "u": "https://youtu.be/BLGLD_NhpNM?si=O3Q6FKyQxhDp-mRU",
  "v": true
 },
 {
  "t": "宇宙小姐來了！靈性叛逆期到底是什麼？ft. 姚愛寗 Pi Pi",
  "d": "2022-08-24",
  "s": "一則茶室",
  "u": "https://youtu.be/Y30293JYSsA?si=6ddFYR83-JSxMCZK",
  "v": true
 },
 {
  "t": "宇宙小姐來了！靈性叛逆期到底是什麼？ft. 姚愛寗 Pi Pi（文字稿）",
  "d": "2022-08-16",
  "s": "一則茶室",
  "u": "https://joycehsh.co/pi-pi/",
  "v": false
 },
 {
  "t": "姚愛寗拍《初擁》留陰影　林予晞多了個女兒",
  "d": "2022-07-23",
  "s": "WhatA VOGUE",
  "u": "https://youtu.be/QC1c0k2dZHU?si=hyJSnyMkO6ZulWVx",
  "v": true
 },
 {
  "t": "姚愛寗首本攝影集《みつめ》新書發表 林予晞站台說來參加女兒的攝影展",
  "d": "2022-07-23",
  "s": "全民新聞網",
  "u": "https://youtu.be/CrAkdfokMaU?si=Z_89EWXUz9uokHZi",
  "v": true
 },
 {
  "t": "姚愛寗開「第三隻眼」出書辦展新作曝近十年心聲",
  "d": "2022-07-23",
  "s": "華研國際",
  "u": "https://www.him.com.tw/newscon.php?nid=917",
  "v": false
 },
 {
  "t": "姚愛寗出書辦攝影展！林予晞送親拍私照感動喊「吾家有女初長成」",
  "d": "2022-07-23",
  "s": "明潮",
  "u": "https://mintnews.tw/Entertainment/Show/content-31352.html",
  "v": false
 },
 {
  "t": "姚愛寗花3個月走出《初擁》墜谷陰影 謝謝林予晞「成為她的浮木」",
  "d": "2022-07-23",
  "s": "Yahoo!新聞",
  "u": "https://tw.news.yahoo.com/%E5%A7%9A%E6%84%9B%E5%AF%97%E8%8A%B1-3-%E5%80%8B%E6%9C%88%E8%B5%B0%E5%87%BA%E3%80%8A%E5%88%9D%E6%93%81%E3%80%8B%E5%A2%9C%E8%B0%B7%E9%99%B0%E5%BD%B1-%E8%AC%9D%E8%AC%9D%E6%9E%97%E4%BA%88%E6%99%9E%E3%80%8C%E6%88%90%E7%82%BA%E5%A5%B9%E7%9A%84%E6%B5%AE%E6%9C%A8%E3%80%8D-085749932.html",
  "v": false
 },
 {
  "t": "#姚愛寗邀請林予晞一口就答應 #林予晞和姚愛寗盼有機會合作演出",
  "d": "2022-07-23",
  "s": "全民新聞網",
  "u": "https://www.youtube.com/watch?v=JSdCDDUKP0g",
  "v": true
 },
 {
  "t": "登場即事故！姚愛寗對料理「出手」嚇傻莊凱勛",
  "d": "2021-12-22",
  "s": "東森超視",
  "u": "https://youtu.be/4QJP8OWgqSc?si=ojziYrQVoFwr9AA7",
  "v": true
 },
 {
  "t": "導演何蔚庭選角超龜毛　《青春弒戀》演員暗拚演技",
  "d": "2021-11-20",
  "s": "鏡週刊",
  "u": "https://www.mirrormedia.mg/story/20211111insight010",
  "v": false,
  "w": "5e8f9a47"
 },
 {
  "t": "【青春弒戀】姚愛寗：微笑女孩Cos「貓系女僕」｜LiTV 線上看",
  "d": "2021-11-07",
  "s": "LiTV立視線上影視",
  "u": "https://youtu.be/FDAMPntKrf4?si=5E4Ar3YILi3pHFgw",
  "v": true,
  "w": "5e8f9a47"
 },
 {
  "t": "專訪｜姚愛寗不敢接戀愛直球　錯過心上人哭給全班看",
  "d": "2021-11-02",
  "s": "蘋果新聞網",
  "u": "https://youtu.be/9G1KLseho2Y?si=zzbIGb7u98iV5Us8",
  "v": true
 },
 {
  "t": "【研編在線等】不要再叫我文青！PIPI 姚愛寗的宇宙世界",
  "d": "2021-09-30",
  "s": "華研國際",
  "u": "https://youtu.be/grk2rtUUkoA?si=uLbkjDX4qO3QvA-S",
  "v": true
 },
 {
  "t": "「好事，其實如影隨形！」姚愛寗相信招喚幸運的隨身小物和轉念，讓所有日常小事都變成「好事」！",
  "d": "2021-09-30",
  "s": "VOGUE Taiwan",
  "u": "https://youtu.be/yOBabvRCb5s?si=nij7a1yXecoQmQIz",
  "v": true
 },
 {
  "t": "「每一次妥協，都在離真正的自己越來越遠。」專訪演員姚愛寗，在她的故事裡選擇成為更好的自己",
  "d": "2021-05-12",
  "s": "Pinkoi",
  "u": "https://blog.pinkoi.com/tw/interviews/3uy4bn69/",
  "v": false
 },
 {
  "t": "【專訪】給自己一場青春內在進修課，姚愛寗：「希望大家都能誠實做自己。」",
  "d": "2021-05-07",
  "s": "GirlStyle",
  "u": "https://girlstyle.com/tw/article/234152/%E5%B0%88%E8%A8%AA-%E7%B5%A6%E8%87%AA%E5%B7%B1%E4%B8%80%E5%A0%B4%E9%9D%92%E6%98%A5%E5%85%A7%E5%9C%A8%E9%80%B2%E4%BF%AE%E8%AA%B2-%E5%A7%9A%E6%84%9B%E5%AF%97-%E5%B8%8C%E6%9C%9B%E5%A4%A7%E5%AE%B6%E9%83%BD%E8%83%BD%E8%AA%A0%E5%AF%A6%E5%81%9A%E8%87%AA%E5%B7%B1",
  "v": false
 },
 {
  "t": "你是缺乏安全感的人嗎？feat姚愛寗(精華篇)",
  "d": "2021-05-06",
  "s": "suncolor三采文化",
  "u": "https://youtu.be/b4MlrCNqRts?si=w2n6nAHwXqGOhGM3",
  "v": true
 },
 {
  "t": "暫時停止青春 挑戰禁忌大談姊弟戀！ft.立東、彥澤 | 羅宏正、姚愛寗",
  "d": "2021-04-15",
  "s": "蝦皮購物",
  "u": "https://youtu.be/RW7y68RHVOA?si=UZqi0eaTpeQDtyUH",
  "v": true
 },
 {
  "t": "首演感動上千人｜黃嘉千、于子育、姚愛寗、吳定謙、羅宏正領銜主演《暫時停止青春》",
  "d": "2021-04-01",
  "s": "故事工廠",
  "u": "https://youtu.be/JoH-NbG50hk?si=8NwSf7VHVslejxXI",
  "v": true
 },
 {
  "t": "在宇宙的愛裡 發現渺小生命遼闊的靈魂",
  "d": "2021-02-25",
  "s": "小日子",
  "u": "https://onelittleday.com.tw/107001-2/",
  "v": false
 },
 {
  "t": "于子育跟20年前的自己相見歡？｜《暫時停止青春》",
  "d": "2021-02-25",
  "s": "故事工廠",
  "u": "https://youtu.be/XdW0a07vtBI?si=bsy3g2wf1f3Obqgp",
  "v": true
 },
 {
  "t": "打開姚愛寗的「美感概念盒」：由內而外，從心靈到皮膚的昇華之旅",
  "d": "2020-11-30",
  "s": "Pinkoi",
  "u": "https://youtu.be/Y9YNMsn9-K0?si=65AQ-xtSpKmN2emv",
  "v": true
 },
 {
  "t": "天巡者│著魔生日趴花絮！顏值爆棚！程予希挑戰潑辣黑暗公主 邵雨薇另一半一天換一個？！ 獨家專訪程予希、姚愛寗！",
  "d": "2020-11-24",
  "s": "Vidol.tv",
  "u": "https://youtu.be/UxTTJNrdG9I?si=ZkSUlOsOi-sTOHHs",
  "v": true,
  "w": "5467502a"
 },
 {
  "t": "【天巡者】EP05 花絮 程予希片場現驚人技能大嗆張洛偍 姚愛寗分享鬼怪故事自己嚇自己",
  "d": "2020-11-23",
  "s": "NewShowBiz完全娛樂",
  "u": "https://youtu.be/TQgq7pN5PvM?si=bKtxU8bKpeKrZ6HD",
  "v": true,
  "w": "5467502a"
 },
 {
  "t": "姚愛寗演紅衣厲鬼太傳神　照鏡子差點被自己嚇死",
  "d": "2020-11-20",
  "s": "鏡週刊",
  "u": "https://www.mirrormedia.mg/story/20201120ent031",
  "v": false,
  "w": "5467502a"
 },
 {
  "t": "張軒睿 和 Pipi 姚愛寗化身Polo Ralph Lauren一日店長，分享最新秋冬趨勢！",
  "w": "8c703f6a",
  "d": "2020-11-09",
  "s": "VOGUE Taiwan",
  "u": "https://youtu.be/mz0JUqY_J4A?si=7KsjNSk7_OeE9BgD",
  "v": true
 },
 {
  "t": "學寵物溝通激發潛能　連俞涵、姚愛寗竟能隔空透視",
  "d": "2020-10-31",
  "s": "鏡週刊",
  "u": "https://www.mirrormedia.mg/story/20201026insight007",
  "v": false,
  "w": "9cd89bac"
 },
 {
  "t": "《青春弒戀》開鏡　陳庭妮 丁寧 林柏宏 林哲熹 李沐 姚愛寗主演",
  "d": "2020-10-28",
  "s": "WhatA VOGUE",
  "u": "https://www.youtube.com/watch?v=yC1EDMRPNR8",
  "v": true,
  "w": "5e8f9a47"
 },
 {
  "t": "【蝦皮娛樂線】毛孩10分可愛！黑喵演員大會考 ft. 張立東、盧彥澤|施名帥、姚愛寗、周予天",
  "d": "2020-10-01",
  "s": "蝦皮購物",
  "u": "https://youtu.be/QFNkMemTgtU?si=FqVOw7JpMXaaV6Z_",
  "v": true,
  "w": "9cd89bac"
 },
 {
  "t": "《戀愛好好說》返台拜月老祈福　男星不信邪剪紅線下場超慘",
  "d": "2020-10-01",
  "s": "鏡週刊",
  "u": "https://www.mirrormedia.mg/story/20201001ent009",
  "v": false,
  "w": "baba4e23"
 },
 {
  "t": "跟著毛孩帥一波",
  "d": "2020-09-22",
  "s": "透透抽 x 公益好好玩",
  "u": "https://www.facebook.com/share/v/1C1RJCz9J3",
  "v": true
 },
 {
  "t": "揭開「寵物溝通師」神秘面紗🧠植物也能聊？是通靈還是動物心理學？",
  "d": "2020-09-19",
  "s": "好選喆+ 電癮好選喆",
  "u": "https://youtu.be/5krudGHOK8g?si=w398spSl5NIkVwDP",
  "v": true,
  "w": "9cd89bac"
 },
 {
  "t": "毛毛當家《黑喵知情》萌寵大\"抱\"走😹畫面都塞不下了...",
  "d": "2020-09-18",
  "s": "好選喆+ 電癮好選喆",
  "u": "https://www.youtube.com/watch?v=gojR3uvxETE",
  "v": true,
  "w": "9cd89bac"
 },
 {
  "t": "男星借鏡71年老片橋段示愛　下場是墓園裡被打到像豬頭",
  "d": "2020-09-18",
  "s": "鏡週刊",
  "u": "https://www.mirrormedia.mg/story/20200918ent020",
  "v": false,
  "w": "baba4e23"
 },
 {
  "t": "\"精靈系女神\"姚愛寗以電影《共犯》讓影迷留下深刻印象！因拍《黑喵知情》接觸寵物溝通成\"寵物溝通師\" 喊個性內向因演戲\"變勇敢\"",
  "d": "2020-09-08",
  "s": "吃貨請跟上 x 54Free食代",
  "u": "https://youtu.be/BCOgi33zI0s?si=HiUha67FlTexOIMr",
  "v": true,
  "w": "9cd89bac"
 },
 {
  "t": "《黑喵知情》姚愛寗與蔡燦得爆爭吵 「撿屍」施名帥發現驚人真相",
  "d": "2020-08-29",
  "s": "民視新聞網",
  "u": "https://today.line.me/tw/v3/article/rQOBxk",
  "v": false,
  "w": "9cd89bac"
 },
 {
  "t": "08/28 中信 vs 富邦 賽前，演員施名帥及姚愛寗為這場比賽開出好球",
  "d": "2020-08-28",
  "s": "CPBL 中華職棒",
  "u": "https://youtu.be/SKEI5ls5Lyg?si=c35Wh8VBk7WpeShu",
  "v": true
 },
 {
  "t": "【黑喵知情】嗆施名帥個個超溜 簡嫚書心繫超帥獸醫師?! ｜小編啾愛問",
  "d": "2020-08-16",
  "s": "台灣達人秀",
  "u": "https://youtu.be/TrZGRblI-3c?si=q-H-1kcXdX-_8H1G",
  "v": true,
  "w": "9cd89bac"
 },
 {
  "t": "《黑喵知情》首映　毛小孩其實很懂你",
  "d": "2020-07-28",
  "s": "WhatA VOGUE",
  "u": "https://www.youtube.com/watch?v=cthWs7C7bL0",
  "v": true,
  "w": "9cd89bac"
 },
 {
  "t": "李友廷獻生涯舞蹈處女秀　被女主角姚愛寗電到小鹿亂撞",
  "d": "2020-07-01",
  "s": "聲林之王 Jungle Voice",
  "u": "https://youtu.be/Dwbxw9ukQK4?si=pnsILSGArRtKIIFo",
  "v": true
 },
 {
  "t": "就要開口笑：面對質疑絕不卻步，演員姚愛寗用戲劇認識世界的模樣",
  "d": "2020-06-04",
  "s": "Everyday Object",
  "u": "https://www.everydayobject.us/converse-jp-with-pipiyao/",
  "v": false
 },
 {
  "t": "姚愛寗Pipi Yao【浪浪別哭 一日體驗】",
  "d": "2020-05-14",
  "s": "華研國際",
  "u": "https://youtu.be/MjPsC21djEs?si=XKVkNy8qsTuICrRE",
  "v": true
 },
 {
  "t": "PIPI YAO 姚愛寗：「演戲讓我變得勇敢，讓我更認識這個世界。」",
  "d": "2020-03-13",
  "s": "Shopping Design",
  "u": "https://www.shoppingdesign.com.tw/post/view/5221?",
  "v": false
 },
 {
  "t": "Shopping Design 2020 ISSUE01 封面人物 姚愛寗 ─ 「Cafe：嗜啡者」",
  "d": "2020-02-24",
  "s": "Shopping Design",
  "u": "https://youtu.be/HjktaMF9ECw?si=n87qAGY0L6GvACmj",
  "v": true
 },
 {
  "t": "曾不願與世界對話的我，從表演中獲得一把打開心門的鑰匙 ── 專訪演員姚愛寗",
  "d": "2019-12-21",
  "s": "Fliper",
  "u": "https://flipermag.com/2019/12/21/pipi-yao-interview/",
  "v": false
 },
 {
  "t": "專訪／姚愛寗赴日發展靠自己爭取　躺雪地拍片「腳結冰」：快死了",
  "d": "2019-12-21",
  "s": "ETtoday新聞雲",
  "u": "https://star.ettoday.net/news/1607467",
  "v": false,
  "w": "f2836f55"
 },
 {
  "t": "專訪／《存在》刪減隱藏版侵犯戲　姚愛寗被童星打開心防：她救了我",
  "d": "2019-12-14",
  "s": "ETtoday新聞雲",
  "u": "https://star.ettoday.net/news/1601993",
  "v": false,
  "w": "643f3885"
 },
 {
  "t": "#姚愛寗喜歡小孩?笑說我年輕還沒想當媽媽?",
  "d": "2019-12-12",
  "s": "全民新聞網",
  "u": "https://www.youtube.com/watch?v=L5f_68RbpJA",
  "v": true,
  "w": "643f3885"
 },
 {
  "t": "姚愛寗一場戲逼哭導演　靠數錢搶贏智能障礙媽角色",
  "d": "2019-12-11",
  "s": "鏡週刊",
  "u": "https://www.mirrormedia.mg/story/20191211ent023",
  "v": false,
  "w": "643f3885"
 },
 {
  "t": "（人物專訪）姚愛寗靈魂被抽空 走不出苦情《每一天》",
  "d": "2019-12-10",
  "s": "自由娛樂",
  "u": "https://ent.ltn.com.tw/news/paper/1337762",
  "v": false,
  "w": "643f3885"
 },
 {
  "t": "姚愛寗／甩開追求完美的執念，才能走得更遠",
  "d": "2019-12-07",
  "s": "姊妹淘",
  "u": "https://youtu.be/8_I7-Vhlg5I?si=gZxxixD4GjlAhY1Q",
  "v": true
 },
 {
  "t": "【專訪】姚愛寗／甩開追求完美的執念，才能走得更遠",
  "d": "2019-12-07",
  "s": "姊妹淘",
  "u": "https://www.nownews.com/news/5630593?srsltid=AfmBOooB2CVLAG8bPk1P9SFBwvJfTjZ5DHqjNDOSB-o3LC6aoogvfbwg",
  "v": false
 },
 {
  "t": "專訪演員姚愛寗｜表演無需強求，只要盡力",
  "d": "2019-12-06",
  "s": "拍手",
  "u": "https://www.clappins.com/blog/clappinxpipiyao",
  "v": false
 },
 {
  "t": "怕胖團《後照鏡》MV幕後花絮",
  "d": "2019-11-27",
  "s": "怕胖團",
  "u": "https://www.youtube.com/watch?v=z0Fem5tNLOw",
  "v": true
 },
 {
  "t": "手帳裡的情緒，成為演戲時的養分",
  "d": "2019-10-02",
  "s": "迷誠品｜meet eslite",
  "u": "https://meet.eslite.com/tw/tc/article/201909250002",
  "v": false
 },
 {
  "t": "獨特的美讓日本人都圈粉！姚愛寗：「在日本每天都在工作，常躲在棉被偷哭」",
  "d": "2019-07-12",
  "s": "Bella Taiwan",
  "u": "https://youtu.be/2CCgNYAmpe8?si=baj2bgFMxMg6JXEJ",
  "v": true,
  "w": "f2836f55"
 },
 {
  "t": "「びしょ濡れ探偵　水野羽衣」Paravi 配信記念SP！　大原櫻子、ヤオアイニンに会いに行く。in台湾",
  "d": "2019-07-04",
  "s": "Paravi",
  "u": "https://youtu.be/zrsVHkL3xL8?si=ozuWqTJShs80X6MD",
  "v": true,
  "w": "f2836f55"
 },
 {
  "t": "姚愛寗太安靜 密謀改名扭轉個性",
  "d": "2019-07-01",
  "s": "自由娛樂",
  "u": "https://ent.ltn.com.tw/news/paper/1299777",
  "v": false
 },
 {
  "t": "愛情戲秒變武打片！李宗霖告白姚愛寗　卻撞歪她鼻子",
  "d": "2019-06-26",
  "s": "明潮",
  "u": "https://mintnews.tw/Entertainment/Drama/content-18087.html",
  "v": false,
  "w": "3ef2da29"
 },
 {
  "t": "【十周年首播】2019 覺醒音樂祭：《威卡十年》CF",
  "d": "2019-06-15",
  "s": "Wake Up Arts覺醒藝術",
  "u": "https://www.youtube.com/watch?v=NlPePpTrENI",
  "v": true
 },
 {
  "t": "《人物專訪》姚愛寗接演日劇 壓力大長人生第1根白髮",
  "d": "2019-05-20",
  "s": "自由時報",
  "u": "https://ent.ltn.com.tw/news/paper/1289729",
  "v": false,
  "w": "f2836f55"
 },
 {
  "t": "《人物專訪》姚愛寗得前輩疼愛 苗可麗不收工陪對戲",
  "d": "2019-05-20",
  "s": "自由娛樂",
  "u": "https://ent.ltn.com.tw/news/paper/1289730",
  "v": false
 },
 {
  "t": "（專訪）姚愛寗聞樹木希林過世 厭世臉全藏不住",
  "d": "2019-05-20",
  "s": "自由娛樂",
  "u": "https://ent.ltn.com.tw/news/breakingnews/2795608?fbclid=IwdGRleAS7E3ZwZG9mAWV4dG4DYWVtAjExAHNydGMGYXBwX2lkCjY2Mjg1NjgzNzkAAR5dUdkxND3WAtXZ3X77JHXA_8MOeDnUBfVqgqXCTIIzvvFs_krnk3KG9HvrSg_aem_ob6FO6xMWKLHxji68DNxZw",
  "v": false
 },
 {
  "t": "張棟樑、連俞涵、姚愛寗來唱卡拉OK機啦！ 當你孤單就想聽情歌！",
  "d": "2019-04-18",
  "s": "娛樂星聞",
  "u": "https://youtu.be/36JsrPDhZ3g?si=S3-DVMbMuU1mPyL0",
  "v": true
 },
 {
  "t": "【女生日常快問快答】-靈動性氧氣女神 姚愛寗Pipi",
  "d": "2019-04-01",
  "s": "GirlStyle 台灣女生日常",
  "u": "https://youtu.be/sIEaS7oi0jc?si=BtdkuQ8eb3VjIe6-",
  "v": true
 },
 {
  "t": "25歲李宗霖母胎單身！　豪爽認了自己是「處男」",
  "d": "2019-03-30",
  "s": "ETtoday新聞雲",
  "u": "https://star.ettoday.net/news/1411675?fbclid=IwdGRleASr64pleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAo2NjI4NTY4Mzc5AAEeHEqbDlJ_CIqyXXGfecTLq3dPHJlgpRlIjBzwSP-FqZVNRQI4T3Z4P_I1FFQ_aem_zErMoEuVI6YiYs1-VzcwZQ",
  "v": false,
  "w": "3ef2da29"
 },
 {
  "t": "【安安大明星】張棟樑帶你看見美麗台灣 一千個晚安本週五感人登場",
  "d": "2019-03-26",
  "s": "娛樂星聞",
  "u": "https://www.youtube.com/watch?v=OHIPY-Pyq3s",
  "v": true,
  "w": "3ef2da29"
 },
 {
  "t": "飛碟聯播網《夜光家族》光禹 2019.03.26 張棟樑 連俞涵 姚愛寗",
  "d": "2019-03-26",
  "s": "飛碟聯播網",
  "u": "https://www.youtube.com/watch?v=BiZiLMyRPSs",
  "v": true,
  "w": "3ef2da29"
 },
 {
  "t": "【比悲傷更悲傷的故事】幕後特輯 #6 石知田姚愛寗篇",
  "d": "2018-12-11",
  "s": "ifilm傳影互動",
  "u": "https://youtu.be/HAyoSyC8FFY?si=jrBs3qt-FdqIW81Y",
  "v": true,
  "w": "2dafe4c4"
 },
 {
  "t": "姚愛寗 Pipi Yao 厭世系女孩的斷捨離哲學 | MING'S GIRL",
  "d": "2018-08-18",
  "s": "MING'S",
  "u": "https://youtu.be/knbIOuSuoFo?si=_KhOEEyc3Bmc6idB",
  "v": true
 },
 {
  "t": "2018 覺醒音樂祭： 最終集 CF(下)",
  "d": "2018-06-20",
  "s": "Wake Up Arts覺醒藝術",
  "u": "https://www.youtube.com/watch?v=2fgxz8xK10s",
  "v": true
 },
 {
  "t": "2018 覺醒音樂祭：首支CF (中)",
  "d": "2018-06-18",
  "s": "Wake Up Arts覺醒藝術",
  "u": "https://www.youtube.com/watch?v=9bAhGW44SBc",
  "v": true
 },
 {
  "t": "2018 覺醒音樂祭：首支CF (上)",
  "d": "2018-06-16",
  "s": "Wake Up Arts覺醒藝術",
  "u": "https://www.youtube.com/watch?v=jhKqORLFvOE",
  "v": true
 },
 {
  "t": "事隔多年再拍偶像劇　張棟樑撇救火只管角色適合",
  "d": "2018-06-01",
  "s": "鏡週刊",
  "u": "https://www.mirrormedia.mg/story/20180601ent025",
  "v": false,
  "w": "3ef2da29"
 },
 {
  "t": "63緯來電影台全新自製電影《海吉拉》瞭電影-姚愛寗",
  "d": "2018-05-14",
  "s": "緯來電影台",
  "u": "https://www.youtube.com/watch?v=2ROxLlaZLco",
  "v": true,
  "w": "e9d82ff5"
 },
 {
  "t": "我是姚愛寗：「小時候嗎？夢想當過偵探、吸血鬼、魔女」",
  "d": "2017-12-19",
  "s": "VOGUE Taiwan",
  "u": "https://www.vogue.com.tw/vogueme/content-37698",
  "v": false
 },
 {
  "t": "相遇的奇蹟（出会いの奇跡）／ヤオ・アイニン（ピピ）",
  "d": "2017-12-07",
  "s": "She is",
  "u": "https://sheishere.jp/voice/201712-yaoaining/",
  "v": false
 },
 {
  "t": "Taipei Walker 12月號 封面人物 姚愛寗",
  "d": "2017-12-06",
  "s": "Taipei Walker",
  "u": "https://youtu.be/Ieo20Tv57sI?si=VM8pVJLJ7NJGYEdl",
  "v": true
 },
 {
  "t": "【娛樂百分百】2017.12.02《二年八班開學了》愷樂、威廉│WISH、偉晉、嘻小瓜、派翠克、劉以豪",
  "d": "2017-12-04",
  "s": "八大電視娛樂百分百",
  "u": "https://www.youtube.com/watch?v=_1rdfVvgrok&t=2454s",
  "v": true,
  "w": "ecb9dda0"
 },
 {
  "t": "如果當初... 月球幫帶你回味從前 星鮮話 20171130 (完整版)",
  "d": "2017-11-30",
  "s": "TVBS經典頻道",
  "u": "https://youtu.be/KnHx5Cj__os?si=sOJkFpMALWZ0ctvv",
  "v": true,
  "w": "ecb9dda0"
 },
 {
  "t": "劉以豪 李銓 嚴正嵐 石知田 姚愛寗音樂會彩排",
  "d": "2017-11-24",
  "s": "eTV行動傳媒",
  "u": "https://youtu.be/cBq5VlGucHU?si=DAn8qUo4tbkEqYas",
  "v": true
 },
 {
  "t": "台湾・日本で活躍する話題の女優&モデル、ヤオ・アイニン（ピピ）にナイキ・コルテッツについてインタビュー！",
  "d": "2017-08-24",
  "s": "DOOR",
  "u": "https://door.abc-mart.net/10347",
  "v": false
 },
 {
  "t": "姚愛寗（ヤオ・アイニン）×フォトグラファー・濱田英明　台湾・台北の素顔を見つける迪化街さんぽ その2",
  "d": "2017-08-18",
  "s": "cinra",
  "u": "https://www.cinra.net/article/hn-pipiyao_hideakihamada2",
  "v": false
 },
 {
  "t": "姚愛寗（ヤオ・アイニン）×フォトグラファー・濱田英明　台湾・台北の素顔を見つける迪化街さんぽ その1",
  "d": "2017-08-12",
  "s": "HereNow",
  "u": "https://www.herenow.city/taipei/article-ja/pipiyao_hideakihamada_ja/",
  "v": false
 },
 {
  "t": "（專訪）姚愛寗攻日挑大梁戀愛 一輩子不想結婚",
  "d": "2017-08-01",
  "s": "自由娛樂",
  "u": "https://ent.ltn.com.tw/news/paper/1123306",
  "v": false
 },
 {
  "t": "陶瓷娃娃活起來追我⋯姚愛寗「起床睡在別的地方」",
  "d": "2017-07-19",
  "s": "ETtoday新聞雲",
  "u": "https://star.ettoday.net/news/970031",
  "v": false
 },
 {
  "t": "日本拚觀光 首度找台灣7年級女星代言",
  "d": "2017-06-01",
  "s": "民視新聞網",
  "u": "https://youtu.be/Ft5iq6vJT18?si=m5LhQq32SOSXcv1p",
  "v": true
 },
 {
  "t": "【POP UP BEAUTY】第23回ゲスト\"ヤオ・アイニン\" 女性のキレイのためのビューティー情報をお届けする 新コーナー！",
  "d": "2017-04-29",
  "s": "Fashion Tsushin",
  "u": "https://youtu.be/dMJ3oNE-GEU?si=JeqACUK4t5i7VXXf",
  "v": true
 },
 {
  "t": "「戀愛奇譚集」姚愛寗與柳俊太郎專訪！",
  "d": "2017-04-25",
  "s": "妞新聞",
  "u": "https://www.niusnews.com/=P0k22t32",
  "v": false,
  "w": "7af767b5"
 },
 {
  "t": "鄰鎮•高圓寺／となり街、高円寺（Koenji, the next town over）",
  "d": "2017-04-14",
  "s": "杉並区公式チャンネル",
  "u": "https://youtu.be/Xswbd-IOihs?si=3co6b9Bd3Fg1AmN7",
  "v": true
 },
 {
  "t": "姚愛寗與好朋友們的異想世界（本篇建議手機閱覽）",
  "d": "2017-02-14",
  "s": "秋刀魚",
  "u": "https://qdymag.com/people-story/2",
  "v": false
 },
 {
  "t": "愛称はピピ！　台湾出身ヤオ・アイニンがはまっているのはカレーの食べ比べ",
  "d": "2017-01-07",
  "s": "anan",
  "u": "https://ananweb.jp/categories/entertainment/24153",
  "v": false
 },
 {
  "t": "【対談】川島小鳥（写真家）×ヤオ・アイニン（女優）- 川島小鳥が撮影する少女たちが放つ、不思議な魅力とは何なのか。",
  "d": "2016-12-28",
  "s": "Ginza",
  "u": "https://ginzamag.com/categories/interview/14467",
  "v": false
 },
 {
  "t": "【BETWEEN US】幕後Q&A 姚愛寗篇",
  "d": "2016-05-18",
  "s": "Meal6 Unboxing",
  "u": "https://youtu.be/TkHGk_JSlpQ?si=Krtx1n6GomY6k_AR",
  "v": true
 },
 {
  "t": "台湾美少女ヤオ・アイニン、台湾でAKB48メンバー募集も「25歳だからダメ」映画「共犯」初日舞台あいさつ2",
  "d": "2015-08-07",
  "s": "MANTAN TV",
  "u": "https://youtu.be/XjEYVLm9w2Q?si=m7TykNDhhTVzOHKQ",
  "v": true,
  "w": "6709d94d"
 },
 {
  "t": "台湾美少女、ヤオ・アイニンが登場！映画「共犯」初日舞台あいさつ1",
  "d": "2015-07-27",
  "s": "MANTAN TV",
  "u": "https://youtu.be/ThWZNtckPCw?si=qSPJJwb_CF0NmmMQ",
  "v": true,
  "w": "6709d94d"
 },
 {
  "t": "ヤオ・アイニン、映画デビュー作で喫煙シーン披露「とても緊張しました」",
  "d": "2015-07-25",
  "s": "映画.com",
  "u": "https://eiga.com/news/20150725/8/",
  "v": false,
  "w": "6709d94d"
 },
 {
  "t": "台湾の新星ヤオ・アイニン、日本進出に意欲！「いつも日本が大好きです」",
  "d": "2015-07-24",
  "s": "映画.com",
  "u": "https://eiga.com/news/20150724/13/",
  "v": false,
  "w": "6709d94d"
 },
 {
  "t": "妞專訪：最親密的對手 姚愛寗與溫貞菱帶你看《共犯》",
  "d": "2014-09-25",
  "s": "妞新聞",
  "u": "https://www.niusnews.com/=P01kka32",
  "v": false,
  "w": "6709d94d"
 },
 {
  "t": "《共犯》女主角姚愛寗憶拍攝過程 《逆光飛翔》導演張榮吉二度入圍台北電影節國際青年導演競賽 新作《共犯》啟用多位新人演員",
  "d": "2014-05-08",
  "s": "BeautiMode創意生活風格網",
  "u": "https://www.youtube.com/watch?v=brrv1tkJT6k",
  "v": true,
  "w": "6709d94d"
 }
];
