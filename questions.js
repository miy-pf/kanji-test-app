const QUESTIONS = [
  { id: 1, page: "page1", number: 1, question: "詩を楽しむ", answer: "詩", reading: "し", priority: "A" },
  { id: 2, page: "page1", number: 2, question: "言葉のつかい方", answer: "言葉", reading: "ことば", priority: "A" },
  { id: 3, page: "page1", number: 3, question: "毎日の学習", answer: "学習", reading: "がくしゅう", priority: "A" },
  { id: 4, page: "page1", number: 4, question: "デザインに着目する", answer: "着目", reading: "ちゃくもく", priority: "A" },
  { id: 5, page: "page1", number: 5, question: "新しく登場する", answer: "登場", reading: "とうじょう", priority: "A" },
  { id: 6, page: "page1", number: 6, question: "人物のようす", answer: "人物", reading: "じんぶつ", priority: "B" },
  { id: 7, page: "page1", number: 7, question: "気持ちをあらわす", answer: "気持ち", reading: "きもち", priority: "B" },
  { id: 8, page: "page1", number: 8, question: "旅の日記", answer: "旅", reading: "たび", priority: "B" },
  { id: 9, page: "page1", number: 9, question: "黄金にかがやく", answer: "黄金", reading: "おうごん", priority: "B" },
  { id: 10, page: "page1", number: 10, question: "話を始める", target: "始める", answer: "始める", reading: "はじめる", priority: "B" },
  { id: 11, page: "page1", number: 11, question: "白一色の山", target: "白一色", answer: "白一色", reading: "しろいっしょく", priority: "B" },
  { id: 12, page: "page1", number: 12, question: "赤くこう葉した木", target: "こう葉", answer: "紅葉", reading: "こうよう", priority: "B" },
  { id: 13, page: "page1", number: 13, question: "ピアノを習う", target: "習う", answer: "習う", reading: "ならう", priority: "B" },
  { id: 14, page: "page1", number: 14, question: "ドレスを着る", target: "着る", answer: "着る", reading: "きる", priority: "B" },
  { id: 15, page: "page1", number: 15, question: "山に登る", target: "登る", answer: "登る", reading: "のぼる", priority: "B" },
  { id: 16, page: "page1", number: 16, question: "たから物をさがす", target: "たから物", answer: "宝物", reading: "たからもの", priority: "B" },
  { id: 17, page: "page1", number: 17, question: "本を所持する", target: "所持", answer: "所持", reading: "しょじ", priority: "B" },
  { id: 18, page: "page1", number: 18, question: "旅行をする", answer: "旅行", reading: "りょこう", priority: "B" },
  { id: 19, page: "page1", number: 19, question: "年始のあいさつ", answer: "年始", reading: "ねんし", priority: "B" },
  { id: 20, page: "page1", number: 20, question: "家に着く", target: "着く", answer: "着く", reading: "つく", priority: "B" },

  { id: 21, page: "page2", number: 1, question: "前に進む", target: "進む", answer: "進む", reading: "すすむ", priority: "A" },
  { id: 22, page: "page2", number: 2, question: "今日のよてい", target: "今日", answer: "今日", reading: "きょう", priority: "A" },
  { id: 23, page: "page2", number: 3, question: "体が動く", target: "動く", answer: "動く", reading: "うごく", priority: "A" },
  { id: 24, page: "page2", number: 4, question: "深い海", target: "深い", answer: "深い", reading: "ふかい", priority: "A" },
  { id: 25, page: "page2", number: 5, question: "母の様子", answer: "様子", reading: "ようす", priority: "A" },
  { id: 26, page: "page2", number: 6, question: "一人で電車にのる", target: "一人", answer: "一人", reading: "ひとり", priority: "B" },
  { id: 27, page: "page2", number: 7, question: "タイヤに空気を入れる", answer: "空気", reading: "くうき", priority: "B" },
  { id: 28, page: "page2", number: 8, question: "物語を書く", answer: "物語", reading: "ものがたり", priority: "B" },
  { id: 29, page: "page2", number: 9, question: "つぎの場面", target: "場面", answer: "場面", reading: "ばめん", priority: "B" },
  { id: 30, page: "page2", number: 10, question: "二人で出かける", target: "二人", answer: "二人", reading: "ふたり", priority: "B" },
  { id: 31, page: "page2", number: 11, question: "自分の顔", answer: "顔", reading: "かお", priority: "B" },
  { id: 32, page: "page2", number: 12, question: "大きな声を出す", answer: "声", reading: "こえ", priority: "B" },
  { id: 33, page: "page2", number: 13, question: "しつもんに答える", target: "答える", answer: "答える", reading: "こたえる", priority: "B" },
  { id: 34, page: "page2", number: 14, question: "力が弱い", target: "弱い", answer: "弱い", reading: "よわい", priority: "B" },
  { id: 35, page: "page2", number: 15, question: "近くの店に行く", target: "近く", answer: "近く", reading: "ちかく", priority: "B" },
  { id: 36, page: "page2", number: 16, question: "むかしを思い出す", target: "思い出す", answer: "思い出す", reading: "おもいだす", priority: "B" },
  { id: 37, page: "page2", number: 17, question: "校ていを行進する", target: "行進", answer: "行進", reading: "こうしん", priority: "B" },
  { id: 38, page: "page2", number: 18, question: "クラブ活動をする", answer: "活動", reading: "かつどう", priority: "B" },
  { id: 39, page: "page2", number: 19, question: "池の水深をしらべる", target: "水深", answer: "水深", reading: "すいしん", priority: "B" },
  { id: 40, page: "page2", number: 20, question: "との様につかえる", target: "様", answer: "様", reading: "さま", priority: "B" },

  { id: 41, page: "page3", number: 1, question: "図書館の本", answer: "図書館", reading: "としょかん", priority: "A" },
  { id: 42, page: "page3", number: 2, question: "番号をつける", answer: "番号", reading: "ばんごう", priority: "A" },
  { id: 43, page: "page3", number: 3, question: "くわしく調べる", target: "調べる", answer: "調べる", reading: "しらべる", priority: "A" },
  { id: 44, page: "page3", number: 4, question: "キーボードを使う", target: "使う", answer: "使う", reading: "つかう", priority: "A" },
  { id: 45, page: "page3", number: 5, question: "問いと答え", target: "問い", answer: "問い", reading: "とい", priority: "A" },
  { id: 46, page: "page3", number: 6, question: "言葉の意味", answer: "意味", reading: "いみ", priority: "B" },
  { id: 47, page: "page3", number: 7, question: "湖が見える", answer: "湖", reading: "みずうみ", priority: "B" },
  { id: 48, page: "page3", number: 8, question: "漢字を習う", answer: "漢字", reading: "かんじ", priority: "B" },
  { id: 49, page: "page3", number: 9, question: "自由に話す", answer: "自由", reading: "じゆう", priority: "B" },
  { id: 50, page: "page3", number: 10, question: "温かいお茶", target: "温かい", answer: "温かい", reading: "あたたかい", priority: "B" },
  { id: 51, page: "page3", number: 11, question: "話を考える", target: "考える", answer: "考える", reading: "かんがえる", priority: "B" },
  { id: 52, page: "page3", number: 12, question: "新聞を読む", target: "読む", answer: "読む", reading: "よむ", priority: "B" },
  { id: 53, page: "page3", number: 13, question: "古い館", answer: "館", reading: "やかた", priority: "B" },
  { id: 54, page: "page3", number: 14, question: "肉を調理する", answer: "調理", reading: "ちょうり", priority: "B" },
  { id: 55, page: "page3", number: 15, question: "はさみを使用する", answer: "使用", reading: "しよう", priority: "B" },
  { id: 56, page: "page3", number: 16, question: "学問にはげむ", target: "学問", answer: "学問", reading: "がくもん", priority: "B" },
  { id: 57, page: "page3", number: 17, question: "ケーキを味わう", target: "味わう", answer: "味わう", reading: "あじわう", priority: "B" },
  { id: 58, page: "page3", number: 18, question: "青くすんだ湖水", answer: "湖水", reading: "こすい", priority: "B" },
  { id: 59, page: "page3", number: 19, question: "名前の由来", answer: "由来", reading: "ゆらい", priority: "B" },
  { id: 60, page: "page3", number: 20, question: "体温が高い", answer: "体温", reading: "たいおん", priority: "B" },

  { id: 61, page: "page4", number: 1, question: "あま酒をのむ", target: "あま酒", answer: "甘酒", reading: "あまざけ", priority: "A" },
  { id: 62, page: "page4", number: 2, question: "問題に答える", target: "問題", answer: "問題", reading: "もんだい", priority: "A" },
  { id: 63, page: "page4", number: 3, question: "新発売の本", target: "新発売", answer: "新発売", reading: "しんはつばい", priority: "A" },
  { id: 64, page: "page4", number: 4, question: "文章を読む", answer: "文章", reading: "ぶんしょう", priority: "A" },
  { id: 65, page: "page4", number: 5, question: "平気な顔をする", answer: "平気", reading: "へいき", priority: "A" },
  { id: 66, page: "page4", number: 6, question: "みんなで決める", target: "決める", answer: "決める", reading: "きめる", priority: "B" },
  { id: 67, page: "page4", number: 7, question: "今日の出来事", answer: "出来事", reading: "できごと", priority: "B" },
  { id: 68, page: "page4", number: 8, question: "ペンを落とす", target: "落とす", answer: "落とす", reading: "おとす", priority: "B" },
  { id: 69, page: "page4", number: 9, question: "相手につたえる", target: "相手", answer: "相手", reading: "あいて", priority: "B" },
  { id: 70, page: "page4", number: 10, question: "洋服を買う", answer: "洋服", reading: "ようふく", priority: "B" },
  { id: 71, page: "page4", number: 11, question: "人形であそぶ", target: "人形", answer: "人形", reading: "にんぎょう", priority: "B" },
  { id: 72, page: "page4", number: 12, question: "話の中心", answer: "中心", reading: "ちゅうしん", priority: "B" },
  { id: 73, page: "page4", number: 13, question: "お母さんと出かける", target: "母さん", answer: "母さん", reading: "かあさん", priority: "B" },
  { id: 74, page: "page4", number: 14, question: "日本酒をつくる", answer: "日本酒", reading: "にほんしゅ", priority: "B" },
  { id: 75, page: "page4", number: 15, question: "平たい石", target: "平たい", answer: "平たい", reading: "ひらたい", priority: "B" },
  { id: 76, page: "page4", number: 16, question: "かたい決意をする", target: "決意", answer: "決意", reading: "けつい", priority: "B" },
  { id: 77, page: "page4", number: 17, question: "用事をすませる", target: "用事", answer: "用事", reading: "ようじ", priority: "B" },
  { id: 78, page: "page4", number: 18, question: "岩が落下する", answer: "落下", reading: "らっか", priority: "B" },
  { id: 79, page: "page4", number: 19, question: "手相を見る", answer: "手相", reading: "てそう", priority: "B" },
  { id: 80, page: "page4", number: 20, question: "平らな道", target: "平ら", answer: "平ら", reading: "たいら", priority: "B" },

  { id: 81, page: "page5", number: 1, question: "次の月曜日", target: "次", answer: "次", reading: "つぎ", priority: "A" },
  { id: 82, page: "page5", number: 2, question: "広い所にすわる", target: "所", answer: "所", reading: "ところ", priority: "A" },
  { id: 83, page: "page5", number: 3, question: "県道ぞいの店", target: "県道", answer: "県道", reading: "けんどう", priority: "A" },
  { id: 84, page: "page5", number: 4, question: "有名な人", target: "有名", answer: "有名", reading: "ゆうめい", priority: "A" },
  { id: 85, page: "page5", number: 5, question: "氷がとける", target: "氷", answer: "氷", reading: "こおり", priority: "A" },
  { id: 86, page: "page5", number: 6, question: "六十秒を数える", target: "六十秒", answer: "六十秒", reading: "ろくじゅうびょう", priority: "B" },
  { id: 87, page: "page5", number: 7, question: "農家の人", target: "農家", answer: "農家", reading: "のうか", priority: "B" },
  { id: 88, page: "page5", number: 8, question: "仕事をする", target: "仕事", answer: "仕事", reading: "しごと", priority: "B" },
  { id: 89, page: "page5", number: 9, question: "野球のれんしゅう", target: "野球", answer: "野球", reading: "やきゅう", priority: "B" },
  { id: 90, page: "page5", number: 10, question: "ゆうびん局の前", target: "局", answer: "局", reading: "きょく", priority: "B" },
  { id: 91, page: "page5", number: 11, question: "朝食をとる", target: "朝食", answer: "朝食", reading: "ちょうしょく", priority: "B" },
  { id: 92, page: "page5", number: 12, question: "早朝におきる", target: "早朝", answer: "早朝", reading: "そうちょう", priority: "B" },
  { id: 93, page: "page5", number: 13, question: "日光に当てる", target: "日光", answer: "日光", reading: "にっこう", priority: "B" },
  { id: 94, page: "page5", number: 14, question: "一分がすぎる", target: "一分", answer: "一分", reading: "いっぷん", priority: "B" },
  { id: 95, page: "page5", number: 15, question: "次回につづく", target: "次回", answer: "次回", reading: "じかい", priority: "B" },
  { id: 96, page: "page5", number: 16, question: "時間と場所", target: "場所", answer: "場所", reading: "ばしょ", priority: "B" },
  { id: 97, page: "page5", number: 17, question: "お金が有る", target: "有る", answer: "有る", reading: "ある", priority: "B" },
  { id: 98, page: "page5", number: 18, question: "大きな氷山", target: "氷山", answer: "氷山", reading: "ひょうざん", priority: "B" },
  { id: 99, page: "page5", number: 19, question: "王に仕える", target: "仕える", answer: "仕える", reading: "つかえる", priority: "B" },
  { id: 100, page: "page5", number: 20, question: "球をなげる", target: "球", answer: "球", reading: "たま", priority: "B" },

  { id: 101, page: "page6", number: 1, question: "全体の数", target: "全体", answer: "全体", reading: "ぜんたい", priority: "A" },
  { id: 102, page: "page6", number: 2, question: "こま遊びをする", target: "遊び", answer: "遊び", reading: "あそび", priority: "A" },
  { id: 103, page: "page6", number: 3, question: "新しい発見", target: "発見", answer: "発見", reading: "はっけん", priority: "A" },
  { id: 104, page: "page6", number: 4, question: "考えを表す", target: "表す", answer: "表す", reading: "あらわす", priority: "A" },
  { id: 105, page: "page6", number: 5, question: "昔の歌", target: "昔", answer: "昔", reading: "むかし", priority: "A" },
  { id: 106, page: "page6", number: 6, question: "世界中の国", target: "世界中", answer: "世界中", reading: "せかいじゅう", priority: "B" },
  { id: 107, page: "page6", number: 7, question: "動く速さ", target: "速さ", answer: "速さ", reading: "はやさ", priority: "B" },
  { id: 108, page: "page6", number: 8, question: "横の長さ", target: "横", answer: "横", reading: "よこ", priority: "B" },
  { id: 109, page: "page6", number: 9, question: "指でつまむ", target: "指", answer: "指", reading: "ゆび", priority: "B" },
  { id: 110, page: "page6", number: 10, question: "上手な絵", target: "上手", answer: "上手", reading: "じょうず", priority: "B" },
  { id: 111, page: "page6", number: 11, question: "大会を行う", target: "行う", answer: "行う", reading: "おこなう", priority: "B" },
  { id: 112, page: "page6", number: 12, question: "元のすがた", target: "元", answer: "元", reading: "もと", priority: "B" },
  { id: 113, page: "page6", number: 13, question: "全てを話す", target: "全て", answer: "全て", reading: "すべて", priority: "B" },
  { id: 114, page: "page6", number: 14, question: "近くの遊園地", target: "遊園地", answer: "遊園地", reading: "ゆうえんち", priority: "B" },
  { id: 115, page: "page6", number: 15, question: "表とうら", target: "表", answer: "表", reading: "おもて", priority: "B" },
  { id: 116, page: "page6", number: 16, question: "へいわな世の中", target: "世", answer: "世", reading: "よ", priority: "B" },
  { id: 117, page: "page6", number: 17, question: "時速五キロメートル", target: "時速", answer: "時速", reading: "じそく", priority: "B" },
  { id: 118, page: "page6", number: 18, question: "横だん歩道", target: "横", answer: "横", reading: "おう", priority: "B" },
  { id: 119, page: "page6", number: 19, question: "北の方角を指す", target: "指す", answer: "指す", reading: "さす", priority: "B" },
  { id: 120, page: "page6", number: 20, question: "考えを発表する", target: "発表", answer: "発表", reading: "はっぴょう", priority: "B" },

  { id: 121, page: "page7", number: 1, question: "鉄のぼう", target: "鉄", answer: "鉄", reading: "てつ", priority: "A" },
  { id: 122, page: "page7", number: 2, question: "生活が安定する", target: "安定", answer: "安定", reading: "あんてい", priority: "A" },
  { id: 123, page: "page7", number: 3, question: "運動会に出る", target: "運動会", answer: "運動会", reading: "うんどうかい", priority: "A" },
  { id: 124, page: "page7", number: 4, question: "予定を立てる", target: "予定", answer: "予定", reading: "よてい", priority: "A" },
  { id: 125, page: "page7", number: 5, question: "六月一日のこと", target: "一日", answer: "一日", reading: "ついたち", priority: "A" },
  { id: 126, page: "page7", number: 6, question: "八十メートル走", target: "走", answer: "走", reading: "そう", priority: "B" },
  { id: 127, page: "page7", number: 7, question: "学校に通う", target: "通う", answer: "通う", reading: "かよう", priority: "B" },
  { id: 128, page: "page7", number: 8, question: "ゆうびんで送る", target: "送る", answer: "送る", reading: "おくる", priority: "B" },
  { id: 129, page: "page7", number: 9, question: "住所とあて名", target: "住所", answer: "住所", reading: "じゅうしょ", priority: "B" },
  { id: 130, page: "page7", number: 10, question: "ねだんが安い", target: "安い", answer: "安い", reading: "やすい", priority: "B" },
  { id: 131, page: "page7", number: 11, question: "はさみを使う", target: "使う", answer: "使う", reading: "つかう", priority: "B" },
  { id: 132, page: "page7", number: 12, question: "こまを回す", target: "回す", answer: "回す", reading: "まわす", priority: "B" },
  { id: 133, page: "page7", number: 13, question: "ボールで遊ぶ", target: "遊ぶ", answer: "遊ぶ", reading: "あそぶ", priority: "B" },
  { id: 134, page: "page7", number: 14, question: "あたりの様子", target: "様子", answer: "様子", reading: "ようす", priority: "B" },
  { id: 135, page: "page7", number: 15, question: "文章を読む", target: "文章", answer: "文章", reading: "ぶんしょう", priority: "B" },
  { id: 136, page: "page7", number: 16, question: "理由をたずねる", target: "理由", answer: "理由", reading: "りゆう", priority: "B" },
  { id: 137, page: "page7", number: 17, question: "ねらいを定める", target: "定める", answer: "定める", reading: "さだめる", priority: "B" },
  { id: 138, page: "page7", number: 18, question: "つくえを運ぶ", target: "運ぶ", answer: "運ぶ", reading: "はこぶ", priority: "B" },
  { id: 139, page: "page7", number: 19, question: "にもつを発送する", target: "発送", answer: "発送", reading: "はっそう", priority: "B" },
  { id: 140, page: "page7", number: 20, question: "町に住む", target: "住む", answer: "住む", reading: "すむ", priority: "B" }
];

const ALL_KANJI_TARGETS = {
  "1": [
    {
      "target": "詩",
      "answer": "詩",
      "reading": "し"
    },
    {
      "target": "楽しむ",
      "answer": "楽しむ",
      "reading": "たのしむ"
    }
  ],
  "2": [
    {
      "target": "言葉",
      "answer": "言葉",
      "reading": "ことば"
    },
    {
      "target": "方",
      "answer": "方",
      "reading": "かた"
    }
  ],
  "3": [
    {
      "target": "学習",
      "answer": "学習",
      "reading": "がくしゅう"
    },
    {
      "target": "毎日",
      "answer": "毎日",
      "reading": "まいにち"
    }
  ],
  "4": [
    {
      "target": "着目",
      "answer": "着目",
      "reading": "ちゃくもく"
    }
  ],
  "5": [
    {
      "target": "登場",
      "answer": "登場",
      "reading": "とうじょう"
    },
    {
      "target": "新しく",
      "answer": "新しく",
      "reading": "あたらしく"
    }
  ],
  "6": [
    {
      "target": "人物",
      "answer": "人物",
      "reading": "じんぶつ"
    }
  ],
  "7": [
    {
      "target": "気持ち",
      "answer": "気持ち",
      "reading": "きもち"
    }
  ],
  "8": [
    {
      "target": "旅",
      "answer": "旅",
      "reading": "たび"
    },
    {
      "target": "日記",
      "answer": "日記",
      "reading": "にっき"
    }
  ],
  "9": [
    {
      "target": "黄金",
      "answer": "黄金",
      "reading": "おうごん"
    }
  ],
  "10": [
    {
      "target": "始める",
      "answer": "始める",
      "reading": "はじめる"
    },
    {
      "target": "話",
      "answer": "話",
      "reading": "はなし"
    }
  ],
  "11": [
    {
      "target": "白一色",
      "answer": "白一色",
      "reading": "しろいっしょく"
    },
    {
      "target": "山",
      "answer": "山",
      "reading": "やま"
    }
  ],
  "12": [
    {
      "target": "こう葉",
      "answer": "紅葉",
      "reading": "こうよう"
    },
    {
      "target": "赤く",
      "answer": "赤く",
      "reading": "あかく"
    },
    {
      "target": "木",
      "answer": "木",
      "reading": "き"
    }
  ],
  "13": [
    {
      "target": "習う",
      "answer": "習う",
      "reading": "ならう"
    }
  ],
  "14": [
    {
      "target": "着る",
      "answer": "着る",
      "reading": "きる"
    }
  ],
  "15": [
    {
      "target": "登る",
      "answer": "登る",
      "reading": "のぼる"
    },
    {
      "target": "山",
      "answer": "山",
      "reading": "やま"
    }
  ],
  "16": [
    {
      "target": "たから物",
      "answer": "宝物",
      "reading": "たからもの"
    }
  ],
  "17": [
    {
      "target": "所持",
      "answer": "所持",
      "reading": "しょじ"
    },
    {
      "target": "本",
      "answer": "本",
      "reading": "ほん"
    }
  ],
  "18": [
    {
      "target": "旅行",
      "answer": "旅行",
      "reading": "りょこう"
    }
  ],
  "19": [
    {
      "target": "年始",
      "answer": "年始",
      "reading": "ねんし"
    }
  ],
  "20": [
    {
      "target": "着く",
      "answer": "着く",
      "reading": "つく"
    },
    {
      "target": "家",
      "answer": "家",
      "reading": "いえ"
    }
  ],
  "21": [
    {
      "target": "進む",
      "answer": "進む",
      "reading": "すすむ"
    },
    {
      "target": "前",
      "answer": "前",
      "reading": "まえ"
    }
  ],
  "22": [
    {
      "target": "今日",
      "answer": "今日",
      "reading": "きょう"
    }
  ],
  "23": [
    {
      "target": "動く",
      "answer": "動く",
      "reading": "うごく"
    },
    {
      "target": "体",
      "answer": "体",
      "reading": "からだ"
    }
  ],
  "24": [
    {
      "target": "深い",
      "answer": "深い",
      "reading": "ふかい"
    },
    {
      "target": "海",
      "answer": "海",
      "reading": "うみ"
    }
  ],
  "25": [
    {
      "target": "様子",
      "answer": "様子",
      "reading": "ようす"
    },
    {
      "target": "母",
      "answer": "母",
      "reading": "はは"
    }
  ],
  "26": [
    {
      "target": "一人",
      "answer": "一人",
      "reading": "ひとり"
    },
    {
      "target": "電車",
      "answer": "電車",
      "reading": "でんしゃ"
    }
  ],
  "27": [
    {
      "target": "空気",
      "answer": "空気",
      "reading": "くうき"
    },
    {
      "target": "入れる",
      "answer": "入れる",
      "reading": "いれる"
    }
  ],
  "28": [
    {
      "target": "物語",
      "answer": "物語",
      "reading": "ものがたり"
    },
    {
      "target": "書く",
      "answer": "書く",
      "reading": "かく"
    }
  ],
  "29": [
    {
      "target": "場面",
      "answer": "場面",
      "reading": "ばめん"
    }
  ],
  "30": [
    {
      "target": "二人",
      "answer": "二人",
      "reading": "ふたり"
    },
    {
      "target": "出かける",
      "answer": "出かける",
      "reading": "でかける"
    }
  ],
  "31": [
    {
      "target": "顔",
      "answer": "顔",
      "reading": "かお"
    },
    {
      "target": "自分",
      "answer": "自分",
      "reading": "じぶん"
    }
  ],
  "32": [
    {
      "target": "声",
      "answer": "声",
      "reading": "こえ"
    },
    {
      "target": "大きな",
      "answer": "大きな",
      "reading": "おおきな"
    },
    {
      "target": "出す",
      "answer": "出す",
      "reading": "だす"
    }
  ],
  "33": [
    {
      "target": "答える",
      "answer": "答える",
      "reading": "こたえる"
    }
  ],
  "34": [
    {
      "target": "弱い",
      "answer": "弱い",
      "reading": "よわい"
    },
    {
      "target": "力",
      "answer": "力",
      "reading": "ちから"
    }
  ],
  "35": [
    {
      "target": "近く",
      "answer": "近く",
      "reading": "ちかく"
    },
    {
      "target": "店",
      "answer": "店",
      "reading": "みせ"
    },
    {
      "target": "行く",
      "answer": "行く",
      "reading": "いく"
    }
  ],
  "36": [
    {
      "target": "思い出す",
      "answer": "思い出す",
      "reading": "おもいだす"
    }
  ],
  "37": [
    {
      "target": "行進",
      "answer": "行進",
      "reading": "こうしん"
    },
    {
      "target": "校",
      "answer": "校",
      "reading": "こう"
    }
  ],
  "38": [
    {
      "target": "活動",
      "answer": "活動",
      "reading": "かつどう"
    }
  ],
  "39": [
    {
      "target": "水深",
      "answer": "水深",
      "reading": "すいしん"
    },
    {
      "target": "池",
      "answer": "池",
      "reading": "いけ"
    }
  ],
  "40": [
    {
      "target": "様",
      "answer": "様",
      "reading": "さま"
    }
  ],
  "41": [
    {
      "target": "図書館",
      "answer": "図書館",
      "reading": "としょかん"
    },
    {
      "target": "本",
      "answer": "本",
      "reading": "ほん"
    }
  ],
  "42": [
    {
      "target": "番号",
      "answer": "番号",
      "reading": "ばんごう"
    }
  ],
  "43": [
    {
      "target": "調べる",
      "answer": "調べる",
      "reading": "しらべる"
    }
  ],
  "44": [
    {
      "target": "使う",
      "answer": "使う",
      "reading": "つかう"
    }
  ],
  "45": [
    {
      "target": "問い",
      "answer": "問い",
      "reading": "とい"
    },
    {
      "target": "答え",
      "answer": "答え",
      "reading": "こたえ"
    }
  ],
  "46": [
    {
      "target": "意味",
      "answer": "意味",
      "reading": "いみ"
    },
    {
      "target": "言葉",
      "answer": "言葉",
      "reading": "ことば"
    }
  ],
  "47": [
    {
      "target": "湖",
      "answer": "湖",
      "reading": "みずうみ"
    },
    {
      "target": "見える",
      "answer": "見える",
      "reading": "みえる"
    }
  ],
  "48": [
    {
      "target": "漢字",
      "answer": "漢字",
      "reading": "かんじ"
    },
    {
      "target": "習う",
      "answer": "習う",
      "reading": "ならう"
    }
  ],
  "49": [
    {
      "target": "自由",
      "answer": "自由",
      "reading": "じゆう"
    },
    {
      "target": "話す",
      "answer": "話す",
      "reading": "はなす"
    }
  ],
  "50": [
    {
      "target": "温かい",
      "answer": "温かい",
      "reading": "あたたかい"
    },
    {
      "target": "お茶",
      "answer": "お茶",
      "reading": "おちゃ"
    }
  ],
  "51": [
    {
      "target": "考える",
      "answer": "考える",
      "reading": "かんがえる"
    },
    {
      "target": "話",
      "answer": "話",
      "reading": "はなし"
    }
  ],
  "52": [
    {
      "target": "読む",
      "answer": "読む",
      "reading": "よむ"
    },
    {
      "target": "新聞",
      "answer": "新聞",
      "reading": "しんぶん"
    }
  ],
  "53": [
    {
      "target": "館",
      "answer": "館",
      "reading": "やかた"
    },
    {
      "target": "古い",
      "answer": "古い",
      "reading": "ふるい"
    }
  ],
  "54": [
    {
      "target": "調理",
      "answer": "調理",
      "reading": "ちょうり"
    },
    {
      "target": "肉",
      "answer": "肉",
      "reading": "にく"
    }
  ],
  "55": [
    {
      "target": "使用",
      "answer": "使用",
      "reading": "しよう"
    }
  ],
  "56": [
    {
      "target": "学問",
      "answer": "学問",
      "reading": "がくもん"
    }
  ],
  "57": [
    {
      "target": "味わう",
      "answer": "味わう",
      "reading": "あじわう"
    }
  ],
  "58": [
    {
      "target": "湖水",
      "answer": "湖水",
      "reading": "こすい"
    },
    {
      "target": "青く",
      "answer": "青く",
      "reading": "あおく"
    }
  ],
  "59": [
    {
      "target": "由来",
      "answer": "由来",
      "reading": "ゆらい"
    },
    {
      "target": "名前",
      "answer": "名前",
      "reading": "なまえ"
    }
  ],
  "60": [
    {
      "target": "体温",
      "answer": "体温",
      "reading": "たいおん"
    },
    {
      "target": "高い",
      "answer": "高い",
      "reading": "たかい"
    }
  ],
  "61": [
    {
      "target": "あま酒",
      "answer": "甘酒",
      "reading": "あまざけ"
    }
  ],
  "62": [
    {
      "target": "問題",
      "answer": "問題",
      "reading": "もんだい"
    },
    {
      "target": "答える",
      "answer": "答える",
      "reading": "こたえる"
    }
  ],
  "63": [
    {
      "target": "新発売",
      "answer": "新発売",
      "reading": "しんはつばい"
    },
    {
      "target": "本",
      "answer": "本",
      "reading": "ほん"
    }
  ],
  "64": [
    {
      "target": "文章",
      "answer": "文章",
      "reading": "ぶんしょう"
    },
    {
      "target": "読む",
      "answer": "読む",
      "reading": "よむ"
    }
  ],
  "65": [
    {
      "target": "平気",
      "answer": "平気",
      "reading": "へいき"
    },
    {
      "target": "顔",
      "answer": "顔",
      "reading": "かお"
    }
  ],
  "66": [
    {
      "target": "決める",
      "answer": "決める",
      "reading": "きめる"
    }
  ],
  "67": [
    {
      "target": "出来事",
      "answer": "出来事",
      "reading": "できごと"
    },
    {
      "target": "今日",
      "answer": "今日",
      "reading": "きょう"
    }
  ],
  "68": [
    {
      "target": "落とす",
      "answer": "落とす",
      "reading": "おとす"
    }
  ],
  "69": [
    {
      "target": "相手",
      "answer": "相手",
      "reading": "あいて"
    }
  ],
  "70": [
    {
      "target": "洋服",
      "answer": "洋服",
      "reading": "ようふく"
    },
    {
      "target": "買う",
      "answer": "買う",
      "reading": "かう"
    }
  ],
  "71": [
    {
      "target": "人形",
      "answer": "人形",
      "reading": "にんぎょう"
    }
  ],
  "72": [
    {
      "target": "中心",
      "answer": "中心",
      "reading": "ちゅうしん"
    },
    {
      "target": "話",
      "answer": "話",
      "reading": "はなし"
    }
  ],
  "73": [
    {
      "target": "母さん",
      "answer": "母さん",
      "reading": "かあさん"
    },
    {
      "target": "出かける",
      "answer": "出かける",
      "reading": "でかける"
    }
  ],
  "74": [
    {
      "target": "日本酒",
      "answer": "日本酒",
      "reading": "にほんしゅ"
    }
  ],
  "75": [
    {
      "target": "平たい",
      "answer": "平たい",
      "reading": "ひらたい"
    },
    {
      "target": "石",
      "answer": "石",
      "reading": "いし"
    }
  ],
  "76": [
    {
      "target": "決意",
      "answer": "決意",
      "reading": "けつい"
    }
  ],
  "77": [
    {
      "target": "用事",
      "answer": "用事",
      "reading": "ようじ"
    }
  ],
  "78": [
    {
      "target": "落下",
      "answer": "落下",
      "reading": "らっか"
    },
    {
      "target": "岩",
      "answer": "岩",
      "reading": "いわ"
    }
  ],
  "79": [
    {
      "target": "手相",
      "answer": "手相",
      "reading": "てそう"
    },
    {
      "target": "見る",
      "answer": "見る",
      "reading": "みる"
    }
  ],
  "80": [
    {
      "target": "平ら",
      "answer": "平ら",
      "reading": "たいら"
    },
    {
      "target": "道",
      "answer": "道",
      "reading": "みち"
    }
  ],
  "81": [
    {
      "target": "次",
      "answer": "次",
      "reading": "つぎ"
    },
    {
      "target": "月曜日",
      "answer": "月曜日",
      "reading": "げつようび"
    }
  ],
  "82": [
    {
      "target": "所",
      "answer": "所",
      "reading": "ところ"
    },
    {
      "target": "広い",
      "answer": "広い",
      "reading": "ひろい"
    }
  ],
  "83": [
    {
      "target": "県道",
      "answer": "県道",
      "reading": "けんどう"
    },
    {
      "target": "店",
      "answer": "店",
      "reading": "みせ"
    }
  ],
  "84": [
    {
      "target": "有名",
      "answer": "有名",
      "reading": "ゆうめい"
    },
    {
      "target": "人",
      "answer": "人",
      "reading": "ひと"
    }
  ],
  "85": [
    {
      "target": "氷",
      "answer": "氷",
      "reading": "こおり"
    }
  ],
  "86": [
    {
      "target": "六十秒",
      "answer": "六十秒",
      "reading": "ろくじゅうびょう"
    },
    {
      "target": "数える",
      "answer": "数える",
      "reading": "かぞえる"
    }
  ],
  "87": [
    {
      "target": "農家",
      "answer": "農家",
      "reading": "のうか"
    },
    {
      "target": "人",
      "answer": "人",
      "reading": "ひと"
    }
  ],
  "88": [
    {
      "target": "仕事",
      "answer": "仕事",
      "reading": "しごと"
    }
  ],
  "89": [
    {
      "target": "野球",
      "answer": "野球",
      "reading": "やきゅう"
    }
  ],
  "90": [
    {
      "target": "局",
      "answer": "局",
      "reading": "きょく"
    },
    {
      "target": "前",
      "answer": "前",
      "reading": "まえ"
    }
  ],
  "91": [
    {
      "target": "朝食",
      "answer": "朝食",
      "reading": "ちょうしょく"
    }
  ],
  "92": [
    {
      "target": "早朝",
      "answer": "早朝",
      "reading": "そうちょう"
    }
  ],
  "93": [
    {
      "target": "日光",
      "answer": "日光",
      "reading": "にっこう"
    },
    {
      "target": "当てる",
      "answer": "当てる",
      "reading": "あてる"
    }
  ],
  "94": [
    {
      "target": "一分",
      "answer": "一分",
      "reading": "いっぷん"
    }
  ],
  "95": [
    {
      "target": "次回",
      "answer": "次回",
      "reading": "じかい"
    }
  ],
  "96": [
    {
      "target": "場所",
      "answer": "場所",
      "reading": "ばしょ"
    },
    {
      "target": "時間",
      "answer": "時間",
      "reading": "じかん"
    }
  ],
  "97": [
    {
      "target": "有る",
      "answer": "有る",
      "reading": "ある"
    },
    {
      "target": "お金",
      "answer": "お金",
      "reading": "おかね"
    }
  ],
  "98": [
    {
      "target": "氷山",
      "answer": "氷山",
      "reading": "ひょうざん"
    },
    {
      "target": "大きな",
      "answer": "大きな",
      "reading": "おおきな"
    }
  ],
  "99": [
    {
      "target": "仕える",
      "answer": "仕える",
      "reading": "つかえる"
    },
    {
      "target": "王",
      "answer": "王",
      "reading": "おう"
    }
  ],
  "100": [
    {
      "target": "球",
      "answer": "球",
      "reading": "たま"
    }
  ],
  "101": [
    {
      "target": "全体",
      "answer": "全体",
      "reading": "ぜんたい"
    },
    {
      "target": "数",
      "answer": "数",
      "reading": "かず"
    }
  ],
  "102": [
    {
      "target": "遊び",
      "answer": "遊び",
      "reading": "あそび"
    }
  ],
  "103": [
    {
      "target": "発見",
      "answer": "発見",
      "reading": "はっけん"
    },
    {
      "target": "新しい",
      "answer": "新しい",
      "reading": "あたらしい"
    }
  ],
  "104": [
    {
      "target": "表す",
      "answer": "表す",
      "reading": "あらわす"
    },
    {
      "target": "考え",
      "answer": "考え",
      "reading": "かんがえ"
    }
  ],
  "105": [
    {
      "target": "昔",
      "answer": "昔",
      "reading": "むかし"
    },
    {
      "target": "歌",
      "answer": "歌",
      "reading": "うた"
    }
  ],
  "106": [
    {
      "target": "世界中",
      "answer": "世界中",
      "reading": "せかいじゅう"
    },
    {
      "target": "国",
      "answer": "国",
      "reading": "くに"
    }
  ],
  "107": [
    {
      "target": "速さ",
      "answer": "速さ",
      "reading": "はやさ"
    },
    {
      "target": "動く",
      "answer": "動く",
      "reading": "うごく"
    }
  ],
  "108": [
    {
      "target": "横",
      "answer": "横",
      "reading": "よこ"
    },
    {
      "target": "長",
      "answer": "長",
      "reading": "なが"
    }
  ],
  "109": [
    {
      "target": "指",
      "answer": "指",
      "reading": "ゆび"
    }
  ],
  "110": [
    {
      "target": "上手",
      "answer": "上手",
      "reading": "じょうず"
    },
    {
      "target": "絵",
      "answer": "絵",
      "reading": "え"
    }
  ],
  "111": [
    {
      "target": "行う",
      "answer": "行う",
      "reading": "おこなう"
    },
    {
      "target": "大会",
      "answer": "大会",
      "reading": "たいかい"
    }
  ],
  "112": [
    {
      "target": "元",
      "answer": "元",
      "reading": "もと"
    }
  ],
  "113": [
    {
      "target": "全て",
      "answer": "全て",
      "reading": "すべて"
    },
    {
      "target": "話す",
      "answer": "話す",
      "reading": "はなす"
    }
  ],
  "114": [
    {
      "target": "遊園地",
      "answer": "遊園地",
      "reading": "ゆうえんち"
    },
    {
      "target": "近く",
      "answer": "近く",
      "reading": "ちかく"
    }
  ],
  "115": [
    {
      "target": "表",
      "answer": "表",
      "reading": "おもて"
    }
  ],
  "116": [
    {
      "target": "世",
      "answer": "世",
      "reading": "よ"
    },
    {
      "target": "中",
      "answer": "中",
      "reading": "なか"
    }
  ],
  "117": [
    {
      "target": "時速",
      "answer": "時速",
      "reading": "じそく"
    },
    {
      "target": "五",
      "answer": "五",
      "reading": "ご"
    }
  ],
  "118": [
    {
      "target": "横",
      "answer": "横",
      "reading": "おう"
    },
    {
      "target": "歩道",
      "answer": "歩道",
      "reading": "ほどう"
    }
  ],
  "119": [
    {
      "target": "指す",
      "answer": "指す",
      "reading": "さす"
    },
    {
      "target": "北",
      "answer": "北",
      "reading": "きた"
    },
    {
      "target": "方角",
      "answer": "方角",
      "reading": "ほうがく"
    }
  ],
  "120": [
    {
      "target": "発表",
      "answer": "発表",
      "reading": "はっぴょう"
    },
    {
      "target": "考え",
      "answer": "考え",
      "reading": "かんがえ"
    }
  ],
  "121": [
    {
      "target": "鉄",
      "answer": "鉄",
      "reading": "てつ"
    }
  ],
  "122": [
    {
      "target": "安定",
      "answer": "安定",
      "reading": "あんてい"
    },
    {
      "target": "生活",
      "answer": "生活",
      "reading": "せいかつ"
    }
  ],
  "123": [
    {
      "target": "運動会",
      "answer": "運動会",
      "reading": "うんどうかい"
    },
    {
      "target": "出る",
      "answer": "出る",
      "reading": "でる"
    }
  ],
  "124": [
    {
      "target": "予定",
      "answer": "予定",
      "reading": "よてい"
    },
    {
      "target": "立てる",
      "answer": "立てる",
      "reading": "たてる"
    }
  ],
  "125": [
    {
      "target": "一日",
      "answer": "一日",
      "reading": "ついたち"
    },
    {
      "target": "六月",
      "answer": "六月",
      "reading": "ろくがつ"
    }
  ],
  "126": [
    {
      "target": "走",
      "answer": "走",
      "reading": "そう"
    },
    {
      "target": "八十",
      "answer": "八十",
      "reading": "はちじゅう"
    }
  ],
  "127": [
    {
      "target": "通う",
      "answer": "通う",
      "reading": "かよう"
    },
    {
      "target": "学校",
      "answer": "学校",
      "reading": "がっこう"
    }
  ],
  "128": [
    {
      "target": "送る",
      "answer": "送る",
      "reading": "おくる"
    }
  ],
  "129": [
    {
      "target": "住所",
      "answer": "住所",
      "reading": "じゅうしょ"
    },
    {
      "target": "あて名",
      "answer": "あて名",
      "reading": "あてな"
    }
  ],
  "130": [
    {
      "target": "安い",
      "answer": "安い",
      "reading": "やすい"
    }
  ],
  "131": [
    {
      "target": "使う",
      "answer": "使う",
      "reading": "つかう"
    }
  ],
  "132": [
    {
      "target": "回す",
      "answer": "回す",
      "reading": "まわす"
    }
  ],
  "133": [
    {
      "target": "遊ぶ",
      "answer": "遊ぶ",
      "reading": "あそぶ"
    }
  ],
  "134": [
    {
      "target": "様子",
      "answer": "様子",
      "reading": "ようす"
    }
  ],
  "135": [
    {
      "target": "文章",
      "answer": "文章",
      "reading": "ぶんしょう"
    },
    {
      "target": "読む",
      "answer": "読む",
      "reading": "よむ"
    }
  ],
  "136": [
    {
      "target": "理由",
      "answer": "理由",
      "reading": "りゆう"
    }
  ],
  "137": [
    {
      "target": "定める",
      "answer": "定める",
      "reading": "さだめる"
    }
  ],
  "138": [
    {
      "target": "運ぶ",
      "answer": "運ぶ",
      "reading": "はこぶ"
    }
  ],
  "139": [
    {
      "target": "発送",
      "answer": "発送",
      "reading": "はっそう"
    }
  ],
  "140": [
    {
      "target": "住む",
      "answer": "住む",
      "reading": "すむ"
    },
    {
      "target": "町",
      "answer": "町",
      "reading": "まち"
    }
  ]
};
