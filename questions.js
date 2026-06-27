const QUESTIONS = [
  { id: 1, page: "4", number: 1, question: "詩を楽しむ", answer: "詩", reading: "し", priority: "A" },
  { id: 2, page: "4", number: 2, question: "言葉のつかい方", answer: "言葉", reading: "ことば", priority: "A" },
  { id: 3, page: "4", number: 3, question: "毎日の学習", answer: "学習", reading: "がくしゅう", priority: "A" },
  { id: 4, page: "4", number: 4, question: "デザインに着目する", answer: "着目", reading: "ちゃくもく", priority: "A" },
  { id: 5, page: "4", number: 5, question: "新しく登場する", answer: "登場", reading: "とうじょう", priority: "A" },
  { id: 6, page: "4", number: 6, question: "人物のようす", answer: "人物", reading: "じんぶつ", priority: "B" },
  { id: 7, page: "4", number: 7, question: "気持ちをあらわす", answer: "気持ち", reading: "きもち", priority: "B" },
  { id: 8, page: "4", number: 8, question: "旅の日記", answer: "旅", reading: "たび", priority: "B" },
  { id: 9, page: "4", number: 9, question: "黄金にかがやく", answer: "黄金", reading: "おうごん", priority: "B" },
  { id: 10, page: "4", number: 10, question: "話を始める", target: "始める", answer: "始める", reading: "はじめる", priority: "B" },
  { id: 11, page: "4", number: 11, question: "白一色の山", target: "白一色", answer: "白一色", reading: "しろいっしょく", priority: "B" },
  { id: 12, page: "4", number: 12, question: "赤くこう葉した木", target: "こう葉", answer: "紅葉", reading: "こうよう", priority: "B" },
  { id: 13, page: "4", number: 13, question: "ピアノを習う", target: "習う", answer: "習う", reading: "ならう", priority: "B" },
  { id: 14, page: "4", number: 14, question: "ドレスを着る", target: "着る", answer: "着る", reading: "きる", priority: "B" },
  { id: 15, page: "4", number: 15, question: "山に登る", target: "登る", answer: "登る", reading: "のぼる", priority: "B" },
  { id: 16, page: "4", number: 16, question: "たから物をさがす", target: "たから物", answer: "宝物", reading: "たからもの", priority: "B" },
  { id: 17, page: "4", number: 17, question: "本を所持する", target: "所持", answer: "所持", reading: "しょじ", priority: "B" },
  { id: 18, page: "4", number: 18, question: "旅行をする", answer: "旅行", reading: "りょこう", priority: "B" },
  { id: 19, page: "4", number: 19, question: "年始のあいさつ", answer: "年始", reading: "ねんし", priority: "B" },
  { id: 20, page: "4", number: 20, question: "家に着く", target: "着く", answer: "着く", reading: "つく", priority: "B" },
  { id: 21, page: "8", number: 1, question: "前に進む", target: "進む", answer: "進む", reading: "すすむ", priority: "A" },
  { id: 22, page: "8", number: 2, question: "今日のよてい", target: "今日", answer: "今日", reading: "きょう", priority: "A" },
  { id: 23, page: "8", number: 3, question: "体が動く", target: "動く", answer: "動く", reading: "うごく", priority: "A" },
  { id: 24, page: "8", number: 4, question: "深い海", target: "深い", answer: "深い", reading: "ふかい", priority: "A" },
  { id: 25, page: "8", number: 5, question: "母の様子", answer: "様子", reading: "ようす", priority: "A" },
  { id: 26, page: "8", number: 6, question: "一人で電車にのる", target: "一人", answer: "一人", reading: "ひとり", priority: "B" },
  { id: 27, page: "8", number: 7, question: "タイヤに空気を入れる", answer: "空気", reading: "くうき", priority: "B" },
  { id: 28, page: "8", number: 8, question: "物語を書く", answer: "物語", reading: "ものがたり", priority: "B" },
  { id: 29, page: "8", number: 9, question: "つぎの場面", target: "場面", answer: "場面", reading: "ばめん", priority: "B" },
  { id: 30, page: "8", number: 10, question: "二人で出かける", target: "二人", answer: "二人", reading: "ふたり", priority: "B" },
  { id: 31, page: "8", number: 11, question: "自分の顔", answer: "顔", reading: "かお", priority: "B" },
  { id: 32, page: "8", number: 12, question: "大きな声を出す", answer: "声", reading: "こえ", priority: "B" },
  { id: 33, page: "8", number: 13, question: "しつもんに答える", target: "答える", answer: "答える", reading: "こたえる", priority: "B" },
  { id: 34, page: "8", number: 14, question: "力が弱い", target: "弱い", answer: "弱い", reading: "よわい", priority: "B" },
  { id: 35, page: "8", number: 15, question: "近くの店に行く", target: "近く", answer: "近く", reading: "ちかく", priority: "B" },
  { id: 36, page: "8", number: 16, question: "むかしを思い出す", target: "思い出す", answer: "思い出す", reading: "おもいだす", priority: "B" },
  { id: 37, page: "8", number: 17, question: "校ていを行進する", target: "行進", answer: "行進", reading: "こうしん", priority: "B" },
  { id: 38, page: "8", number: 18, question: "クラブ活動をする", answer: "活動", reading: "かつどう", priority: "B" },
  { id: 39, page: "8", number: 19, question: "池の水深をしらべる", target: "水深", answer: "水深", reading: "すいしん", priority: "B" },
  { id: 40, page: "8", number: 20, question: "との様につかえる", target: "様", answer: "様", reading: "さま", priority: "B" },
  { id: 41, page: "13", number: 1, question: "図書館の本", answer: "図書館", reading: "としょかん", priority: "A" },
  { id: 42, page: "13", number: 2, question: "番号をつける", answer: "番号", reading: "ばんごう", priority: "A" },
  { id: 43, page: "13", number: 3, question: "くわしく調べる", target: "調べる", answer: "調べる", reading: "しらべる", priority: "A" },
  { id: 44, page: "13", number: 4, question: "キーボードを使う", target: "使う", answer: "使う", reading: "つかう", priority: "A" },
  { id: 45, page: "13", number: 5, question: "問いと答え", target: "問い", answer: "問い", reading: "とい", priority: "A" },
  { id: 46, page: "13", number: 6, question: "言葉の意味", answer: "意味", reading: "いみ", priority: "B" },
  { id: 47, page: "13", number: 7, question: "湖が見える", answer: "湖", reading: "みずうみ", priority: "B" },
  { id: 48, page: "13", number: 8, question: "漢字を習う", answer: "漢字", reading: "かんじ", priority: "B" },
  { id: 49, page: "13", number: 9, question: "自由に話す", answer: "自由", reading: "じゆう", priority: "B" },
  { id: 50, page: "13", number: 10, question: "温かいお茶", target: "温かい", answer: "温かい", reading: "あたたかい", priority: "B" },
  { id: 51, page: "13", number: 11, question: "話を考える", target: "考える", answer: "考える", reading: "かんがえる", priority: "B" },
  { id: 52, page: "13", number: 12, question: "新聞を読む", target: "読む", answer: "読む", reading: "よむ", priority: "B" },
  { id: 53, page: "13", number: 13, question: "古い館", answer: "館", reading: "やかた", priority: "B" },
  { id: 54, page: "13", number: 14, question: "肉を調理する", answer: "調理", reading: "ちょうり", priority: "B" },
  { id: 55, page: "13", number: 15, question: "はさみを使用する", answer: "使用", reading: "しよう", priority: "B" },
  { id: 56, page: "13", number: 16, question: "学問にはげむ", target: "学問", answer: "学問", reading: "がくもん", priority: "B" },
  { id: 57, page: "13", number: 17, question: "ケーキを味わう", target: "味わう", answer: "味わう", reading: "あじわう", priority: "B" },
  { id: 58, page: "13", number: 18, question: "青くすんだ湖水", answer: "湖水", reading: "こすい", priority: "B" },
  { id: 59, page: "13", number: 19, question: "名前の由来", answer: "由来", reading: "ゆらい", priority: "B" },
  { id: 60, page: "13", number: 20, question: "体温が高い", answer: "体温", reading: "たいおん", priority: "B" },
  { id: 61, page: "18", number: 1, question: "あま酒をのむ", target: "あま酒", answer: "甘酒", reading: "あまざけ", priority: "A" },
  { id: 62, page: "18", number: 2, question: "問題に答える", target: "問題", answer: "問題", reading: "もんだい", priority: "A" },
  { id: 63, page: "18", number: 3, question: "新発売の本", target: "新発売", answer: "新発売", reading: "しんはつばい", priority: "A" },
  { id: 64, page: "18", number: 4, question: "文章を読む", answer: "文章", reading: "ぶんしょう", priority: "A" },
  { id: 65, page: "18", number: 5, question: "平気な顔をする", answer: "平気", reading: "へいき", priority: "A" },
  { id: 66, page: "18", number: 6, question: "みんなで決める", target: "決める", answer: "決める", reading: "きめる", priority: "B" },
  { id: 67, page: "18", number: 7, question: "今日の出来事", answer: "出来事", reading: "できごと", priority: "B" },
  { id: 68, page: "18", number: 8, question: "ペンを落とす", target: "落とす", answer: "落とす", reading: "おとす", priority: "B" },
  { id: 69, page: "18", number: 9, question: "相手につたえる", target: "相手", answer: "相手", reading: "あいて", priority: "B" },
  { id: 70, page: "18", number: 10, question: "洋服を買う", answer: "洋服", reading: "ようふく", priority: "B" },
  { id: 71, page: "18", number: 11, question: "人形であそぶ", target: "人形", answer: "人形", reading: "にんぎょう", priority: "B" },
  { id: 72, page: "18", number: 12, question: "話の中心", answer: "中心", reading: "ちゅうしん", priority: "B" },
  { id: 73, page: "18", number: 13, question: "お母さんと出かける", target: "母さん", answer: "母さん", reading: "かあさん", priority: "B" },
  { id: 74, page: "18", number: 14, question: "日本酒をつくる", answer: "日本酒", reading: "にほんしゅ", priority: "B" },
  { id: 75, page: "18", number: 15, question: "平たい石", target: "平たい", answer: "平たい", reading: "ひらたい", priority: "B" },
  { id: 76, page: "18", number: 16, question: "かたい決意をする", target: "決意", answer: "決意", reading: "けつい", priority: "B" },
  { id: 77, page: "18", number: 17, question: "用事をすませる", target: "用事", answer: "用事", reading: "ようじ", priority: "B" },
  { id: 78, page: "18", number: 18, question: "岩が落下する", answer: "落下", reading: "らっか", priority: "B" },
  { id: 79, page: "18", number: 19, question: "手相を見る", answer: "手相", reading: "てそう", priority: "B" },
  { id: 80, page: "18", number: 20, question: "平らな道", target: "平ら", answer: "平ら", reading: "たいら", priority: "B" },
  { id: 81, page: "23", number: 1, question: "次の月曜日", target: "次", answer: "次", reading: "つぎ", priority: "A" },
  { id: 82, page: "23", number: 2, question: "広い所にすわる", target: "所", answer: "所", reading: "ところ", priority: "A" },
  { id: 83, page: "23", number: 3, question: "県道ぞいの店", target: "県道", answer: "県道", reading: "けんどう", priority: "A" },
  { id: 84, page: "23", number: 4, question: "有名な人", target: "有名", answer: "有名", reading: "ゆうめい", priority: "A" },
  { id: 85, page: "23", number: 5, question: "氷がとける", target: "氷", answer: "氷", reading: "こおり", priority: "A" },
  { id: 86, page: "23", number: 6, question: "六十秒を数える", target: "六十秒", answer: "六十秒", reading: "ろくじゅうびょう", priority: "B" },
  { id: 87, page: "23", number: 7, question: "農家の人", target: "農家", answer: "農家", reading: "のうか", priority: "B" },
  { id: 88, page: "23", number: 8, question: "仕事をする", target: "仕事", answer: "仕事", reading: "しごと", priority: "B" },
  { id: 89, page: "23", number: 9, question: "野球のれんしゅう", target: "野球", answer: "野球", reading: "やきゅう", priority: "B" },
  { id: 90, page: "23", number: 10, question: "ゆうびん局の前", target: "局", answer: "局", reading: "きょく", priority: "B" },
  { id: 91, page: "23", number: 11, question: "朝食をとる", target: "朝食", answer: "朝食", reading: "ちょうしょく", priority: "B" },
  { id: 92, page: "23", number: 12, question: "早朝におきる", target: "早朝", answer: "早朝", reading: "そうちょう", priority: "B" },
  { id: 93, page: "23", number: 13, question: "日光に当てる", target: "日光", answer: "日光", reading: "にっこう", priority: "B" },
  { id: 94, page: "23", number: 14, question: "一分がすぎる", target: "一分", answer: "一分", reading: "いっぷん", priority: "B" },
  { id: 95, page: "23", number: 15, question: "次回につづく", target: "次回", answer: "次回", reading: "じかい", priority: "B" },
  { id: 96, page: "23", number: 16, question: "時間と場所", target: "場所", answer: "場所", reading: "ばしょ", priority: "B" },
  { id: 97, page: "23", number: 17, question: "お金が有る", target: "有る", answer: "有る", reading: "ある", priority: "B" },
  { id: 98, page: "23", number: 18, question: "大きな氷山", target: "氷山", answer: "氷山", reading: "ひょうざん", priority: "B" },
  { id: 99, page: "23", number: 19, question: "王に仕える", target: "仕える", answer: "仕える", reading: "つかえる", priority: "B" },
  { id: 100, page: "23", number: 20, question: "球をなげる", target: "球", answer: "球", reading: "たま", priority: "B" },
  { id: 101, page: "28", number: 1, question: "全体の数", target: "全体", answer: "全体", reading: "ぜんたい", priority: "A" },
  { id: 102, page: "28", number: 2, question: "こま遊びをする", target: "遊び", answer: "遊び", reading: "あそび", priority: "A" },
  { id: 103, page: "28", number: 3, question: "新しい発見", target: "発見", answer: "発見", reading: "はっけん", priority: "A" },
  { id: 104, page: "28", number: 4, question: "考えを表す", target: "表す", answer: "表す", reading: "あらわす", priority: "A" },
  { id: 105, page: "28", number: 5, question: "昔の歌", target: "昔", answer: "昔", reading: "むかし", priority: "A" },
  { id: 106, page: "28", number: 6, question: "世界中の国", target: "世界中", answer: "世界中", reading: "せかいじゅう", priority: "B" },
  { id: 107, page: "28", number: 7, question: "動く速さ", target: "速さ", answer: "速さ", reading: "はやさ", priority: "B" },
  { id: 108, page: "28", number: 8, question: "横の長さ", target: "横", answer: "横", reading: "よこ", priority: "B" },
  { id: 109, page: "28", number: 9, question: "指でつまむ", target: "指", answer: "指", reading: "ゆび", priority: "B" },
  { id: 110, page: "28", number: 10, question: "上手な絵", target: "上手", answer: "上手", reading: "じょうず", priority: "B" },
  { id: 111, page: "28", number: 11, question: "大会を行う", target: "行う", answer: "行う", reading: "おこなう", priority: "B" },
  { id: 112, page: "28", number: 12, question: "元のすがた", target: "元", answer: "元", reading: "もと", priority: "B" },
  { id: 113, page: "28", number: 13, question: "全てを話す", target: "全て", answer: "全て", reading: "すべて", priority: "B" },
  { id: 114, page: "28", number: 14, question: "近くの遊園地", target: "遊園地", answer: "遊園地", reading: "ゆうえんち", priority: "B" },
  { id: 115, page: "28", number: 15, question: "表とうら", target: "表", answer: "表", reading: "おもて", priority: "B" },
  { id: 116, page: "28", number: 16, question: "へいわな世の中", target: "世", answer: "世", reading: "よ", priority: "B" },
  { id: 117, page: "28", number: 17, question: "時速五キロメートル", target: "時速", answer: "時速", reading: "じそく", priority: "B" },
  { id: 118, page: "28", number: 18, question: "横だん歩道", target: "横", answer: "横", reading: "おう", priority: "B" },
  { id: 119, page: "28", number: 19, question: "北の方角を指す", target: "指す", answer: "指す", reading: "さす", priority: "B" },
  { id: 120, page: "28", number: 20, question: "考えを発表する", target: "発表", answer: "発表", reading: "はっぴょう", priority: "B" },
  { id: 121, page: "32", number: 1, question: "鉄のぼう", target: "鉄", answer: "鉄", reading: "てつ", priority: "A" },
  { id: 122, page: "32", number: 2, question: "生活が安定する", target: "安定", answer: "安定", reading: "あんてい", priority: "A" },
  { id: 123, page: "32", number: 3, question: "運動会に出る", target: "運動会", answer: "運動会", reading: "うんどうかい", priority: "A" },
  { id: 124, page: "32", number: 4, question: "予定を立てる", target: "予定", answer: "予定", reading: "よてい", priority: "A" },
  { id: 125, page: "32", number: 5, question: "六月一日のこと", target: "一日", answer: "一日", reading: "ついたち", priority: "A" },
  { id: 126, page: "32", number: 6, question: "八十メートル走", target: "走", answer: "走", reading: "そう", priority: "B" },
  { id: 127, page: "32", number: 7, question: "学校に通う", target: "通う", answer: "通う", reading: "かよう", priority: "B" },
  { id: 128, page: "32", number: 8, question: "ゆうびんで送る", target: "送る", answer: "送る", reading: "おくる", priority: "B" },
  { id: 129, page: "32", number: 9, question: "住所とあて名", target: "住所", answer: "住所", reading: "じゅうしょ", priority: "B" },
  { id: 130, page: "32", number: 10, question: "ねだんが安い", target: "安い", answer: "安い", reading: "やすい", priority: "B" },
  { id: 131, page: "32", number: 11, question: "はさみを使う", target: "使う", answer: "使う", reading: "つかう", priority: "B" },
  { id: 132, page: "32", number: 12, question: "こまを回す", target: "回す", answer: "回す", reading: "まわす", priority: "B" },
  { id: 133, page: "32", number: 13, question: "ボールで遊ぶ", target: "遊ぶ", answer: "遊ぶ", reading: "あそぶ", priority: "B" },
  { id: 134, page: "32", number: 14, question: "あたりの様子", target: "様子", answer: "様子", reading: "ようす", priority: "B" },
  { id: 135, page: "32", number: 15, question: "文章を読む", target: "文章", answer: "文章", reading: "ぶんしょう", priority: "B" },
  { id: 136, page: "32", number: 16, question: "理由をたずねる", target: "理由", answer: "理由", reading: "りゆう", priority: "B" },
  { id: 137, page: "32", number: 17, question: "ねらいを定める", target: "定める", answer: "定める", reading: "さだめる", priority: "B" },
  { id: 138, page: "32", number: 18, question: "つくえを運ぶ", target: "運ぶ", answer: "運ぶ", reading: "はこぶ", priority: "B" },
  { id: 139, page: "32", number: 19, question: "にもつを発送する", target: "発送", answer: "発送", reading: "はっそう", priority: "B" },
  { id: 140, page: "32", number: 20, question: "町に住む", target: "住む", answer: "住む", reading: "すむ", priority: "B" },
  { id: 141, page: "37", number: 1, question: "絵の具をぬる。", answer: "絵の具", reading: "えのぐ", priority: "A" },
  { id: 142, page: "37", number: 2, question: "小石を拾う。", answer: "小石", reading: "こいし", priority: "A" },
  { id: 143, page: "37", number: 3, question: "学校へ向かう。", answer: "向かう", reading: "むかう", priority: "A" },
  { id: 144, page: "37", number: 4, question: "坂を下る。", answer: "坂", reading: "さか", priority: "A" },
  { id: 145, page: "37", number: 5, question: "金具をとめる。", answer: "金具", reading: "かなぐ", priority: "A" },
  { id: 146, page: "37", number: 6, question: "悲鳴が聞こえる。", answer: "悲鳴", reading: "ひめい", priority: "B" },
  { id: 147, page: "37", number: 7, question: "緑色のリボン。", answer: "緑色", reading: "みどりいろ", priority: "B" },
  { id: 148, page: "37", number: 8, question: "魚の開きをほす。", answer: "開き", reading: "ひらき", priority: "B" },
  { id: 149, page: "37", number: 9, question: "海岸を歩く。", answer: "海岸", reading: "かいがん", priority: "B" },
  { id: 150, page: "37", number: 10, question: "路線バスにのる。", answer: "路線", reading: "ろせん", priority: "B" },
  { id: 151, page: "37", number: 11, question: "円いテーブル。", answer: "円い", reading: "まるい", priority: "B" },
  { id: 152, page: "37", number: 12, question: "歩道をわたる。", answer: "歩道", reading: "ほどう", priority: "B" },
  { id: 153, page: "37", number: 13, question: "鳥が羽ばたく。", answer: "羽", reading: "はね", priority: "B" },
  { id: 154, page: "37", number: 14, question: "南の方向。", answer: "方向", reading: "ほうこう", priority: "B" },
  { id: 155, page: "37", number: 15, question: "悲しい気分。", answer: "悲しい", reading: "かなしい", priority: "B" },
  { id: 156, page: "37", number: 16, question: "緑茶をのむ。", answer: "緑茶", reading: "りょくちゃ", priority: "B" },
  { id: 157, page: "37", number: 17, question: "九時に開店する。", answer: "開店", reading: "かいてん", priority: "B" },
  { id: 158, page: "37", number: 18, question: "岸までおよぐ。", answer: "岸", reading: "きし", priority: "B" },
  { id: 159, page: "37", number: 19, question: "旅路につく。", answer: "旅路", reading: "たびじ", priority: "B" },
  { id: 160, page: "37", number: 20, question: "目を開ける。", answer: "開ける", reading: "あける", priority: "B" },
  { id: 161, page: "42", number: 1, question: "心に感じる。", answer: "感じる", reading: "かんじる", priority: "A" },
  { id: 162, page: "42", number: 2, question: "スポーツに対する考え。", answer: "対する", reading: "たいする", priority: "A" },
  { id: 163, page: "42", number: 3, question: "声の調子。", answer: "調子", reading: "ちょうし", priority: "A" },
  { id: 164, page: "42", number: 4, question: "二つに区切る。", answer: "区切る", reading: "くぎる", priority: "A" },
  { id: 165, page: "42", number: 5, question: "太陽がしずむ。", answer: "太陽", reading: "たいよう", priority: "A" },
  { id: 166, page: "42", number: 6, question: "つくえの上を整える。", answer: "整える", reading: "ととのえる", priority: "B" },
  { id: 167, page: "42", number: 7, question: "話の一部。", answer: "一部", reading: "いちぶ", priority: "B" },
  { id: 168, page: "42", number: 8, question: "プールで泳ぐ。", answer: "泳ぐ", reading: "およぐ", priority: "B" },
  { id: 169, page: "42", number: 9, question: "サッカーの練習。", answer: "練習", reading: "れんしゅう", priority: "B" },
  { id: 170, page: "42", number: 10, question: "コーチの助言。", answer: "助言", reading: "じょげん", priority: "B" },
  { id: 171, page: "42", number: 11, question: "ふしぎな出来事。", answer: "出来事", reading: "できごと", priority: "B" },
  { id: 172, page: "42", number: 12, question: "登場人物の気持ち。", answer: "登場人物", reading: "とうじょうじんぶつ", priority: "B" },
  { id: 173, page: "42", number: 13, question: "物語の場面。", answer: "場面", reading: "ばめん", priority: "B" },
  { id: 174, page: "42", number: 14, question: "東の空。", answer: "東", reading: "ひがし", priority: "B" },
  { id: 175, page: "42", number: 15, question: "歌詞を考える。", answer: "歌詞", reading: "かし", priority: "B" },
  { id: 176, page: "42", number: 16, question: "近所の図書館。", answer: "近所", reading: "きんじょ", priority: "B" },
  { id: 177, page: "42", number: 17, question: "たなを整理する。", answer: "整理", reading: "せいり", priority: "B" },
  { id: 178, page: "42", number: 18, question: "水泳の先生。", answer: "水泳", reading: "すいえい", priority: "B" },
  { id: 179, page: "42", number: 19, question: "ねん土を練る。", answer: "練る", reading: "ねる", priority: "B" },
  { id: 180, page: "42", number: 20, question: "人を助ける。", answer: "助ける", reading: "たすける", priority: "B" },
  { id: 181, page: "力試し２", number: 1, question: "氷がとける。", answer: "氷", reading: "こおり", priority: "A" },
  { id: 182, page: "力試し２", number: 2, question: "陽気にふるまう。", answer: "陽気", reading: "ようき", priority: "A" },
  { id: 183, page: "力試し２", number: 3, question: "岸べを歩く。", answer: "岸べ", reading: "きしべ", priority: "A" },
  { id: 184, page: "力試し２", number: 4, question: "ひなん訓練。", answer: "訓練", reading: "くんれん", priority: "A" },
  { id: 185, page: "力試し２", number: 5, question: "母が安心する。", answer: "安心", reading: "あんしん", priority: "A" },
  { id: 186, page: "力試し２", number: 6, question: "全く知らない。", answer: "全く", reading: "まったく", priority: "B" },
  { id: 187, page: "力試し２", number: 7, question: "中世のたて物。", answer: "中世", reading: "ちゅうせい", priority: "B" },
  { id: 188, page: "力試し２", number: 8, question: "線路がつづく。", answer: "線路", reading: "せんろ", priority: "B" },
  { id: 189, page: "力試し２", number: 9, question: "電話をとり次ぐ。", answer: "次ぐ", reading: "つぐ", priority: "B" },
  { id: 190, page: "力試し２", number: 10, question: "助けをよぶ。", answer: "助け", reading: "たすけ", priority: "B" },
  { id: 191, page: "力試し２", number: 11, question: "緑が多い町。", answer: "緑", reading: "みどり", priority: "B" },
  { id: 192, page: "力試し２", number: 12, question: "手紙を送る。", answer: "送る", reading: "おくる", priority: "B" },
  { id: 193, page: "力試し２", number: 13, question: "一定の水温。", answer: "水温", reading: "すいおん", priority: "B" },
  { id: 194, page: "力試し２", number: 14, question: "しめいをうける。", target: "しめい", answer: "指名", reading: "しめい", priority: "B" },
  { id: 195, page: "力試し２", number: 15, question: "前を向く。", answer: "向く", reading: "むく", priority: "B" },
  { id: 196, page: "力試し２", number: 16, question: "そうじの仕方。", answer: "仕方", reading: "しかた", priority: "B" },
  { id: 197, page: "力試し２", number: 17, question: "外で遊ぶ。", answer: "遊ぶ", reading: "あそぶ", priority: "B" },
  { id: 198, page: "力試し２", number: 18, question: "広い農場。", answer: "農場", reading: "のうじょう", priority: "B" },
  { id: 199, page: "力試し２", number: 19, question: "鉄のとびら。", answer: "鉄", reading: "てつ", priority: "B" },
  { id: 200, page: "力試し２", number: 20, question: "図に表す。", answer: "表す", reading: "あらわす", priority: "B" },
  { id: 201, page: "47", number: 1, question: "童話を読む。", answer: "童話", reading: "どうわ", priority: "A" },
  { id: 202, page: "47", number: 2, question: "さんかを申しこむ。", answer: "申しこむ", reading: "もうしこむ", priority: "A" },
  { id: 203, page: "47", number: 3, question: "大人と子ども。", answer: "大人", reading: "おとな", priority: "A" },
  { id: 204, page: "47", number: 4, question: "れいとう食品。", answer: "食品", reading: "しょくひん", priority: "A" },
  { id: 205, page: "47", number: 5, question: "商品をならべる。", answer: "商品", reading: "しょうひん", priority: "A" },
  { id: 206, page: "47", number: 6, question: "お客様が来る。", answer: "客様", reading: "きゃくさま", priority: "B" },
  { id: 207, page: "47", number: 7, question: "入学式の日。", answer: "入学式", reading: "にゅうがくしき", priority: "B" },
  { id: 208, page: "47", number: 8, question: "去年の夏。", answer: "去年", reading: "きょねん", priority: "B" },
  { id: 209, page: "47", number: 9, question: "二倍の数。", answer: "二倍", reading: "にばい", priority: "B" },
  { id: 210, page: "47", number: 10, question: "毛筆で書く。", answer: "毛筆", reading: "もうひつ", priority: "B" },
  { id: 211, page: "47", number: 11, question: "文を引用する。", answer: "引用", reading: "いんよう", priority: "B" },
  { id: 212, page: "47", number: 12, question: "出典をしめす。", answer: "出典", reading: "しゅってん", priority: "B" },
  { id: 213, page: "47", number: 13, question: "総合的な学習。", answer: "総合的", reading: "そうごうてき", priority: "B" },
  { id: 214, page: "47", number: 14, question: "句読点をつける。", answer: "句読点", reading: "くとうてん", priority: "B" },
  { id: 215, page: "47", number: 15, question: "晴天がつづく。", answer: "晴天", reading: "せいてん", priority: "B" },
  { id: 216, page: "47", number: 16, question: "今年は雨が多い。", answer: "今年", reading: "ことし", priority: "B" },
  { id: 217, page: "47", number: 17, question: "店の品物。", answer: "品物", reading: "しなもの", priority: "B" },
  { id: 218, page: "47", number: 18, question: "時間がすぎ去る。", answer: "去る", reading: "さる", priority: "B" },
  { id: 219, page: "47", number: 19, question: "筆で字を書く。", answer: "筆", reading: "ふで", priority: "B" },
  { id: 220, page: "47", number: 20, question: "過去をふりかえる。", answer: "過去", reading: "かこ", priority: "B" },
  { id: 221, page: "51", number: 1, question: "町の銀行。", answer: "銀行", reading: "ぎんこう", priority: "A" },
  { id: 222, page: "51", number: 2, question: "同時に走る。", answer: "同時", reading: "どうじ", priority: "A" },
  { id: 223, page: "51", number: 3, question: "直線を引く。", answer: "直線", reading: "ちょくせん", priority: "A" },
  { id: 224, page: "51", number: 4, question: "雨が二日つづく。", answer: "二日", reading: "ふつか", priority: "A" },
  { id: 225, page: "51", number: 5, question: "白玉を食べる。", answer: "白玉", reading: "しらたま", priority: "A" },
  { id: 226, page: "51", number: 6, question: "植物のなかま。", answer: "植物", reading: "しょくぶつ", priority: "B" },
  { id: 227, page: "51", number: 7, question: "人を集める。", answer: "集める", reading: "あつめる", priority: "B" },
  { id: 228, page: "51", number: 8, question: "化石を調べる。", answer: "化石", reading: "かせき", priority: "B" },
  { id: 229, page: "51", number: 9, question: "虫が死ぬ。", answer: "死ぬ", reading: "しぬ", priority: "B" },
  { id: 230, page: "51", number: 10, question: "都合がよい。", answer: "都合", reading: "つごう", priority: "B" },
  { id: 231, page: "51", number: 11, question: "題名を考える。", answer: "題名", reading: "だいめい", priority: "B" },
  { id: 232, page: "51", number: 12, question: "数字を書く。", answer: "数字", reading: "すうじ", priority: "B" },
  { id: 233, page: "51", number: 13, question: "夏の入道雲。", answer: "入道雲", reading: "にゅうどうぐも", priority: "B" },
  { id: 234, page: "51", number: 14, question: "新たな発見。", answer: "新た", reading: "あらた", priority: "B" },
  { id: 235, page: "51", number: 15, question: "本の目次。", answer: "目次", reading: "もくじ", priority: "B" },
  { id: 236, page: "51", number: 16, question: "地面にすわる。", answer: "地面", reading: "じめん", priority: "B" },
  { id: 237, page: "51", number: 17, question: "木を植える。", answer: "植える", reading: "うえる", priority: "B" },
  { id: 238, page: "51", number: 18, question: "集会を開く。", answer: "集会", reading: "しゅうかい", priority: "B" },
  { id: 239, page: "51", number: 19, question: "きつねが化ける。", answer: "化ける", reading: "ばける", priority: "B" },
  { id: 240, page: "51", number: 20, question: "古い都。", answer: "都", reading: "みやこ", priority: "B" },
  { id: 241, page: "たしかめ１", number: 1, question: "ボールを拾う。", answer: "拾う", reading: "ひろう", priority: "A" },
  { id: 242, page: "たしかめ１", number: 2, question: "かけ算の式。", answer: "式", reading: "しき", priority: "A" },
  { id: 243, page: "たしかめ１", number: 3, question: "銀色のかざり。", answer: "銀色", reading: "ぎんいろ", priority: "A" },
  { id: 244, page: "たしかめ１", number: 4, question: "じゅんび運動。", answer: "運動", reading: "うんどう", priority: "A" },
  { id: 245, page: "たしかめ１", number: 5, question: "世界地図。", answer: "世界地図", reading: "せかいちず", priority: "A" },
  { id: 246, page: "たしかめ１", number: 6, question: "洋食の店。", answer: "洋食", reading: "ようしょく", priority: "B" },
  { id: 247, page: "たしかめ１", number: 7, question: "道具をしまう。", answer: "道具", reading: "どうぐ", priority: "B" },
  { id: 248, page: "たしかめ１", number: 8, question: "童ようを歌う。", answer: "童よう", reading: "どうよう", priority: "B" },
  { id: 249, page: "たしかめ１", number: 9, question: "スピードが速い。", answer: "速い", reading: "はやい", priority: "B" },
  { id: 250, page: "たしかめ１", number: 10, question: "アパートの住人。", answer: "住人", reading: "じゅうにん", priority: "B" },
  { id: 251, page: "たしかめ１", number: 11, question: "県内の学校。", answer: "県内", reading: "けんない", priority: "B" },
  { id: 252, page: "たしかめ１", number: 12, question: "都会でくらす。", answer: "都会", reading: "とかい", priority: "B" },
  { id: 253, page: "たしかめ１", number: 13, question: "形が整う。", answer: "整う", reading: "ととのう", priority: "B" },
  { id: 254, page: "たしかめ１", number: 14, question: "魚が死ぬ。", answer: "死ぬ", reading: "しぬ", priority: "B" },
  { id: 255, page: "たしかめ１", number: 15, question: "三倍の長さ。", answer: "三倍", reading: "さんばい", priority: "B" },
  { id: 256, page: "たしかめ１", number: 16, question: "話の始まり。", answer: "始まり", reading: "はじまり", priority: "B" },
  { id: 257, page: "たしかめ１", number: 17, question: "商売をする。", answer: "商売", reading: "しょうばい", priority: "B" },
  { id: 258, page: "たしかめ１", number: 18, question: "生物の進化。", answer: "進化", reading: "しんか", priority: "B" },
  { id: 259, page: "たしかめ１", number: 19, question: "申しわけない。", answer: "申し", reading: "もうし", priority: "B" },
  { id: 260, page: "たしかめ１", number: 20, question: "川の水面。", answer: "水面", reading: "すいめん", priority: "B" },
  { id: 261, page: "56", number: 1, question: "両手を広げる。", answer: "両手", reading: "りょうて", priority: "A" },
  { id: 262, page: "56", number: 2, question: "赤組が負ける。", answer: "負ける", reading: "まける", priority: "A" },
  { id: 263, page: "56", number: 3, question: "係の仕事。", answer: "係", reading: "かかり", priority: "A" },
  { id: 264, page: "56", number: 4, question: "全員で語り合う。", answer: "語り合う", reading: "かたりあう", priority: "A" },
  { id: 265, page: "56", number: 5, question: "村の祭り。", answer: "祭り", reading: "まつり", priority: "A" },
  { id: 266, page: "56", number: 6, question: "農作業をする。", answer: "農作業", reading: "のうさぎょう", priority: "B" },
  { id: 267, page: "56", number: 7, question: "鉄板でやく。", answer: "鉄板", reading: "てっぱん", priority: "B" },
  { id: 268, page: "56", number: 8, question: "太い電柱。", answer: "電柱", reading: "でんちゅう", priority: "B" },
  { id: 269, page: "56", number: 9, question: "休日の予定。", answer: "予定", reading: "よてい", priority: "B" },
  { id: 270, page: "56", number: 10, question: "油田をほる。", answer: "油田", reading: "ゆでん", priority: "B" },
  { id: 271, page: "56", number: 11, question: "すずが鳴る。", answer: "鳴る", reading: "なる", priority: "B" },
  { id: 272, page: "56", number: 12, question: "太陽がしずむ。", answer: "太陽", reading: "たいよう", priority: "B" },
  { id: 273, page: "56", number: 13, question: "時計が止まる。", answer: "止まる", reading: "とまる", priority: "B" },
  { id: 274, page: "56", number: 14, question: "勝負をする。", answer: "勝負", reading: "しょうぶ", priority: "B" },
  { id: 275, page: "56", number: 15, question: "関係がある。", answer: "関係", reading: "かんけい", priority: "B" },
  { id: 276, page: "56", number: 16, question: "学校の文化祭。", answer: "文化祭", reading: "ぶんかさい", priority: "B" },
  { id: 277, page: "56", number: 17, question: "羽子板で遊ぶ。", answer: "羽子板", reading: "はごいた", priority: "B" },
  { id: 278, page: "56", number: 18, question: "家の柱。", answer: "柱", reading: "はしら", priority: "B" },
  { id: 279, page: "56", number: 19, question: "油絵をかく。", answer: "油絵", reading: "あぶらえ", priority: "B" },
  { id: 280, page: "56", number: 20, question: "きずを負う。", answer: "負う", reading: "おう", priority: "B" },
  { id: 281, page: "60", number: 1, question: "みなとが開港する。", answer: "開港", reading: "かいこう", priority: "A" },
  { id: 282, page: "60", number: 2, question: "目薬をさす。", answer: "目薬", reading: "めぐすり", priority: "A" },
  { id: 283, page: "60", number: 3, question: "草笛をふく。", answer: "草笛", reading: "くさぶえ", priority: "A" },
  { id: 284, page: "60", number: 4, question: "雲海が広がる。", answer: "雲海", reading: "うんかい", priority: "A" },
  { id: 285, page: "60", number: 5, question: "新雪がつもる。", answer: "新雪", reading: "しんせつ", priority: "A" },
  { id: 286, page: "60", number: 6, question: "車に注意する。", answer: "注意", reading: "ちゅうい", priority: "B" },
  { id: 287, page: "60", number: 7, question: "悪者をこらしめる。", answer: "悪者", reading: "わるもの", priority: "B" },
  { id: 288, page: "60", number: 8, question: "センサーで感知する。", answer: "感知", reading: "かんち", priority: "B" },
  { id: 289, page: "60", number: 9, question: "品物を売買する。", answer: "売買", reading: "ばいばい", priority: "B" },
  { id: 290, page: "60", number: 10, question: "港町を歩く。", answer: "港町", reading: "みなとまち", priority: "B" },
  { id: 291, page: "60", number: 11, question: "大事な部分。", answer: "部分", reading: "ぶぶん", priority: "B" },
  { id: 292, page: "60", number: 12, question: "色の組み合わせ。", answer: "組み合わせ", reading: "くみあわせ", priority: "B" },
  { id: 293, page: "60", number: 13, question: "意味を知る。", answer: "意味", reading: "いみ", priority: "B" },
  { id: 294, page: "60", number: 14, question: "花火を見る。", answer: "花火", reading: "はなび", priority: "B" },
  { id: 295, page: "60", number: 15, question: "毛筆で書く。", answer: "毛筆", reading: "もうひつ", priority: "B" },
  { id: 296, page: "60", number: 16, question: "薬草をつむ。", answer: "薬草", reading: "やくそう", priority: "B" },
  { id: 297, page: "60", number: 17, question: "汽笛が鳴る。", answer: "鳴る", reading: "なる", priority: "B" },
  { id: 298, page: "60", number: 18, question: "お茶を注ぐ。", answer: "注ぐ", reading: "そそぐ", priority: "B" },
  { id: 299, page: "60", number: 19, question: "悪事をはたらく。", answer: "悪事", reading: "あくじ", priority: "B" },
  { id: 300, page: "60", number: 20, question: "学者の意見。", answer: "学者", reading: "がくしゃ", priority: "B" },
  { id: 301, page: "64", number: 1, question: "兄と勝負をする。", answer: "勝負", reading: "しょうぶ", priority: "A" },
  { id: 302, page: "64", number: 2, question: "広大な土地。", answer: "広大", reading: "こうだい", priority: "A" },
  { id: 303, page: "64", number: 3, question: "車庫にとめる。", answer: "車庫", reading: "しゃこ", priority: "A" },
  { id: 304, page: "64", number: 4, question: "間近で見る。", answer: "間近", reading: "まぢか", priority: "A" },
  { id: 305, page: "64", number: 5, question: "文字を入力する。", answer: "入力", reading: "にゅうりょく", priority: "A" },
  { id: 306, page: "64", number: 6, question: "電波がとどく。", answer: "電波", reading: "でんぱ", priority: "B" },
  { id: 307, page: "64", number: 7, question: "五時に帰社する。", answer: "帰社", reading: "きしゃ", priority: "B" },
  { id: 308, page: "64", number: 8, question: "放送を聞く。", answer: "放送", reading: "ほうそう", priority: "B" },
  { id: 309, page: "64", number: 9, question: "算数の勉強。", answer: "勉強", reading: "べんきょう", priority: "B" },
  { id: 310, page: "64", number: 10, question: "ゲームに勝つ。", answer: "勝つ", reading: "かつ", priority: "B" },
  { id: 311, page: "64", number: 11, question: "遠足の予定。", answer: "予定", reading: "よてい", priority: "B" },
  { id: 312, page: "64", number: 12, question: "近道をして帰る。", answer: "近道", reading: "ちかみち", priority: "B" },
  { id: 313, page: "64", number: 13, question: "電車で通学する。", answer: "通学", reading: "つうがく", priority: "B" },
  { id: 314, page: "64", number: 14, question: "商店がいを歩く。", answer: "商店がい", reading: "しょうてんがい", priority: "B" },
  { id: 315, page: "64", number: 15, question: "公園の前。", answer: "公園", reading: "こうえん", priority: "B" },
  { id: 316, page: "64", number: 16, question: "海開きの日。", answer: "海開き", reading: "うみびらき", priority: "B" },
  { id: 317, page: "64", number: 17, question: "テレビの画面。", answer: "画面", reading: "がめん", priority: "B" },
  { id: 318, page: "64", number: 18, question: "波が高い。", answer: "波", reading: "なみ", priority: "B" },
  { id: 319, page: "64", number: 19, question: "魚を川に放す。", answer: "放す", reading: "はなす", priority: "B" },
  { id: 320, page: "64", number: 20, question: "ボールを放る。", answer: "放る", reading: "ほうる", priority: "B" },
  { id: 321, page: "力試し３", number: 1, question: "兄は勉強家だ。", answer: "勉強家", reading: "べんきょうか", priority: "A" },
  { id: 322, page: "力試し３", number: 2, question: "船が入港する。", answer: "入港", reading: "にゅうこう", priority: "A" },
  { id: 323, page: "力試し３", number: 3, question: "勝手に決める。", answer: "勝手", reading: "かって", priority: "A" },
  { id: 324, page: "力試し３", number: 4, question: "かん板を立てる。", answer: "かん板", reading: "かんばん", priority: "A" },
  { id: 325, page: "力試し３", number: 5, question: "金庫にしまう。", answer: "金庫", reading: "きんこ", priority: "A" },
  { id: 326, page: "力試し３", number: 6, question: "石油を使う。", answer: "石油", reading: "せきゆ", priority: "B" },
  { id: 327, page: "力試し３", number: 7, question: "波風が立つ。", answer: "波風", reading: "なみかぜ", priority: "B" },
  { id: 328, page: "力試し３", number: 8, question: "図書係になる。", answer: "図書係", reading: "としょがかり", priority: "B" },
  { id: 329, page: "力試し３", number: 9, question: "横笛をふく。", answer: "横笛", reading: "よこぶえ", priority: "B" },
  { id: 330, page: "力試し３", number: 10, question: "会員になる。", answer: "会員", reading: "かいいん", priority: "B" },
  { id: 331, page: "力試し３", number: 11, question: "両親と話す。", answer: "両親", reading: "りょうしん", priority: "B" },
  { id: 332, page: "力試し３", number: 12, question: "店が休業する。", answer: "休業", reading: "きゅうぎょう", priority: "B" },
  { id: 333, page: "力試し３", number: 13, question: "家の門柱。", answer: "門柱", reading: "もんちゅう", priority: "B" },
  { id: 334, page: "力試し３", number: 14, question: "ダムの放水。", answer: "放水", reading: "ほうすい", priority: "B" },
  { id: 335, page: "力試し３", number: 15, question: "白組が負ける。", answer: "負ける", reading: "まける", priority: "B" },
  { id: 336, page: "力試し３", number: 16, question: "きまりが悪い。", answer: "悪い", reading: "わるい", priority: "B" },
  { id: 337, page: "力試し３", number: 17, question: "人気者。", answer: "人気者", reading: "にんきもの", priority: "B" },
  { id: 338, page: "力試し３", number: 18, question: "ひな祭り。", answer: "祭り", reading: "まつり", priority: "B" },
  { id: 339, page: "力試し３", number: 19, question: "本を注文する。", answer: "注文", reading: "ちゅうもん", priority: "B" },
  { id: 340, page: "力試し３", number: 20, question: "薬をのむ。", answer: "薬", reading: "くすり", priority: "B" },
  { id: 341, page: "しあげ１", number: 1, question: "青葉がしげる。", answer: "青葉", reading: "あおば", priority: "A" },
  { id: 342, page: "しあげ１", number: 2, question: "習字の先生。", answer: "習字", reading: "しゅうじ", priority: "A" },
  { id: 343, page: "しあげ１", number: 3, question: "学校に着く。", answer: "着く", reading: "つく", priority: "A" },
  { id: 344, page: "しあげ１", number: 4, question: "長旅に出る。", answer: "長旅", reading: "ながたび", priority: "A" },
  { id: 345, page: "しあげ１", number: 5, question: "電車が動く。", answer: "動く", reading: "うごく", priority: "A" },
  { id: 346, page: "しあげ１", number: 6, question: "深手をおう。", answer: "深手", reading: "ふかで", priority: "B" },
  { id: 347, page: "しあげ１", number: 7, question: "お金を使う。", answer: "使う", reading: "つかう", priority: "B" },
  { id: 348, page: "しあげ１", number: 8, question: "悪いと思う。", answer: "悪い", reading: "わるい", priority: "B" },
  { id: 349, page: "しあげ１", number: 9, question: "あまい物。", answer: "物", reading: "もの", priority: "B" },
  { id: 350, page: "しあげ１", number: 10, question: "にもつを持つ。", answer: "持つ", reading: "もつ", priority: "B" },
  { id: 351, page: "しあげ２", number: 1, question: "楽しい話題。", answer: "話題", reading: "わだい", priority: "A" },
  { id: 352, page: "しあげ２", number: 2, question: "当番を決める。", answer: "決める", reading: "きめる", priority: "A" },
  { id: 353, page: "しあげ２", number: 3, question: "学校の行事。", answer: "行事", reading: "ぎょうじ", priority: "A" },
  { id: 354, page: "しあげ２", number: 4, question: "夏の服そう。", answer: "服そう", reading: "ふくそう", priority: "A" },
  { id: 355, page: "しあげ２", number: 5, question: "家の台所。", answer: "台所", reading: "だいどころ", priority: "A" },
  { id: 356, page: "しあげ２", number: 6, question: "力が有る。", answer: "有る", reading: "ある", priority: "B" },
  { id: 357, page: "しあげ２", number: 7, question: "水泳の時間。", answer: "時間", reading: "じかん", priority: "B" },
  { id: 358, page: "しあげ２", number: 8, question: "地球の生物。", answer: "生物", reading: "せいぶつ", priority: "B" },
  { id: 359, page: "しあげ２", number: 9, question: "大昔の本。", answer: "大昔", reading: "おおむかし", priority: "B" },
  { id: 360, page: "しあげ２", number: 10, question: "兄の横がお。", answer: "横がお", reading: "よこがお", priority: "B" },
  { id: 361, page: "しあげ３", number: 1, question: "国の予算。", answer: "予算", reading: "よさん", priority: "A" },
  { id: 362, page: "しあげ３", number: 2, question: "家まで送る。", answer: "送る", reading: "おくる", priority: "A" },
  { id: 363, page: "しあげ３", number: 3, question: "坂道を下る。", answer: "下る", reading: "くだる", priority: "A" },
  { id: 364, page: "しあげ３", number: 4, question: "悲しい物語。", answer: "悲しい", reading: "かなしい", priority: "A" },
  { id: 365, page: "しあげ３", number: 5, question: "山の向こう。", answer: "向こう", reading: "むこう", priority: "A" },
  { id: 366, page: "しあげ３", number: 6, question: "川岸を歩く。", answer: "川岸", reading: "かわぎし", priority: "B" },
  { id: 367, page: "しあげ３", number: 7, question: "さくらの開花。", answer: "開花", reading: "かいか", priority: "B" },
  { id: 368, page: "しあげ３", number: 8, question: "弟に感心する。", answer: "感心", reading: "かんしん", priority: "B" },
  { id: 369, page: "しあげ３", number: 9, question: "親子の対話。", answer: "対話", reading: "たいわ", priority: "B" },
  { id: 370, page: "しあげ３", number: 10, question: "めだかが泳ぐ。", answer: "泳ぐ", reading: "およぐ", priority: "B" },
  { id: 371, page: "しあげ４", number: 1, question: "手品のショー。", answer: "手品", reading: "てじな", priority: "A" },
  { id: 372, page: "しあげ４", number: 2, question: "客室のそうじ。", answer: "客室", reading: "きゃくしつ", priority: "A" },
  { id: 373, page: "しあげ４", number: 3, question: "筆記用具。", answer: "筆記", reading: "ひっき", priority: "A" },
  { id: 374, page: "しあげ４", number: 4, question: "田植えをする。", answer: "田植え", reading: "たうえ", priority: "A" },
  { id: 375, page: "しあげ４", number: 5, question: "文章を作る。", answer: "文章", reading: "ぶんしょう", priority: "A" },
  { id: 376, page: "しあげ４", number: 6, question: "けがを負う。", answer: "負う", reading: "おう", priority: "B" },
  { id: 377, page: "しあげ４", number: 7, question: "空港へ行く。", answer: "空港", reading: "くうこう", priority: "B" },
  { id: 378, page: "しあげ４", number: 8, question: "悪人をたおす。", answer: "悪人", reading: "あくにん", priority: "B" },
  { id: 379, page: "しあげ４", number: 9, question: "試合に勝つ。", answer: "勝つ", reading: "かつ", priority: "B" },
  { id: 380, page: "しあげ４", number: 10, question: "書庫にしまう。", answer: "書庫", reading: "しょこ", priority: "B" }
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
  ],
  "141": [
    {
      "target": "絵の具",
      "answer": "絵の具",
      "reading": "えのぐ"
    }
  ],
  "142": [
    {
      "target": "小石",
      "answer": "小石",
      "reading": "こいし"
    }
  ],
  "143": [
    {
      "target": "向かう",
      "answer": "向かう",
      "reading": "むかう"
    }
  ],
  "144": [
    {
      "target": "坂",
      "answer": "坂",
      "reading": "さか"
    }
  ],
  "145": [
    {
      "target": "金具",
      "answer": "金具",
      "reading": "かなぐ"
    }
  ],
  "146": [
    {
      "target": "悲鳴",
      "answer": "悲鳴",
      "reading": "ひめい"
    }
  ],
  "147": [
    {
      "target": "緑色",
      "answer": "緑色",
      "reading": "みどりいろ"
    }
  ],
  "148": [
    {
      "target": "開き",
      "answer": "開き",
      "reading": "ひらき"
    }
  ],
  "149": [
    {
      "target": "海岸",
      "answer": "海岸",
      "reading": "かいがん"
    }
  ],
  "150": [
    {
      "target": "路線",
      "answer": "路線",
      "reading": "ろせん"
    }
  ],
  "151": [
    {
      "target": "円い",
      "answer": "円い",
      "reading": "まるい"
    }
  ],
  "152": [
    {
      "target": "歩道",
      "answer": "歩道",
      "reading": "ほどう"
    }
  ],
  "153": [
    {
      "target": "羽",
      "answer": "羽",
      "reading": "はね"
    }
  ],
  "154": [
    {
      "target": "方向",
      "answer": "方向",
      "reading": "ほうこう"
    }
  ],
  "155": [
    {
      "target": "悲しい",
      "answer": "悲しい",
      "reading": "かなしい"
    }
  ],
  "156": [
    {
      "target": "緑茶",
      "answer": "緑茶",
      "reading": "りょくちゃ"
    }
  ],
  "157": [
    {
      "target": "開店",
      "answer": "開店",
      "reading": "かいてん"
    }
  ],
  "158": [
    {
      "target": "岸",
      "answer": "岸",
      "reading": "きし"
    }
  ],
  "159": [
    {
      "target": "旅路",
      "answer": "旅路",
      "reading": "たびじ"
    }
  ],
  "160": [
    {
      "target": "開ける",
      "answer": "開ける",
      "reading": "あける"
    }
  ],
  "161": [
    {
      "target": "感じる",
      "answer": "感じる",
      "reading": "かんじる"
    }
  ],
  "162": [
    {
      "target": "対する",
      "answer": "対する",
      "reading": "たいする"
    }
  ],
  "163": [
    {
      "target": "調子",
      "answer": "調子",
      "reading": "ちょうし"
    }
  ],
  "164": [
    {
      "target": "区切る",
      "answer": "区切る",
      "reading": "くぎる"
    }
  ],
  "165": [
    {
      "target": "太陽",
      "answer": "太陽",
      "reading": "たいよう"
    }
  ],
  "166": [
    {
      "target": "整える",
      "answer": "整える",
      "reading": "ととのえる"
    }
  ],
  "167": [
    {
      "target": "一部",
      "answer": "一部",
      "reading": "いちぶ"
    }
  ],
  "168": [
    {
      "target": "泳ぐ",
      "answer": "泳ぐ",
      "reading": "およぐ"
    }
  ],
  "169": [
    {
      "target": "練習",
      "answer": "練習",
      "reading": "れんしゅう"
    }
  ],
  "170": [
    {
      "target": "助言",
      "answer": "助言",
      "reading": "じょげん"
    }
  ],
  "171": [
    {
      "target": "出来事",
      "answer": "出来事",
      "reading": "できごと"
    }
  ],
  "172": [
    {
      "target": "登場人物",
      "answer": "登場人物",
      "reading": "とうじょうじんぶつ"
    }
  ],
  "173": [
    {
      "target": "場面",
      "answer": "場面",
      "reading": "ばめん"
    }
  ],
  "174": [
    {
      "target": "東",
      "answer": "東",
      "reading": "ひがし"
    }
  ],
  "175": [
    {
      "target": "歌詞",
      "answer": "歌詞",
      "reading": "かし"
    }
  ],
  "176": [
    {
      "target": "近所",
      "answer": "近所",
      "reading": "きんじょ"
    }
  ],
  "177": [
    {
      "target": "整理",
      "answer": "整理",
      "reading": "せいり"
    }
  ],
  "178": [
    {
      "target": "水泳",
      "answer": "水泳",
      "reading": "すいえい"
    }
  ],
  "179": [
    {
      "target": "練る",
      "answer": "練る",
      "reading": "ねる"
    }
  ],
  "180": [
    {
      "target": "助ける",
      "answer": "助ける",
      "reading": "たすける"
    }
  ],
  "181": [
    {
      "target": "氷",
      "answer": "氷",
      "reading": "こおり"
    }
  ],
  "182": [
    {
      "target": "陽気",
      "answer": "陽気",
      "reading": "ようき"
    }
  ],
  "183": [
    {
      "target": "岸べ",
      "answer": "岸べ",
      "reading": "きしべ"
    }
  ],
  "184": [
    {
      "target": "訓練",
      "answer": "訓練",
      "reading": "くんれん"
    }
  ],
  "185": [
    {
      "target": "安心",
      "answer": "安心",
      "reading": "あんしん"
    }
  ],
  "186": [
    {
      "target": "全く",
      "answer": "全く",
      "reading": "まったく"
    }
  ],
  "187": [
    {
      "target": "中世",
      "answer": "中世",
      "reading": "ちゅうせい"
    }
  ],
  "188": [
    {
      "target": "線路",
      "answer": "線路",
      "reading": "せんろ"
    }
  ],
  "189": [
    {
      "target": "次ぐ",
      "answer": "次ぐ",
      "reading": "つぐ"
    }
  ],
  "190": [
    {
      "target": "助け",
      "answer": "助け",
      "reading": "たすけ"
    }
  ],
  "191": [
    {
      "target": "緑",
      "answer": "緑",
      "reading": "みどり"
    }
  ],
  "192": [
    {
      "target": "送る",
      "answer": "送る",
      "reading": "おくる"
    }
  ],
  "193": [
    {
      "target": "水温",
      "answer": "水温",
      "reading": "すいおん"
    }
  ],
  "194": [
    {
      "target": "しめい",
      "answer": "指名",
      "reading": "しめい"
    }
  ],
  "195": [
    {
      "target": "向く",
      "answer": "向く",
      "reading": "むく"
    }
  ],
  "196": [
    {
      "target": "仕方",
      "answer": "仕方",
      "reading": "しかた"
    }
  ],
  "197": [
    {
      "target": "遊ぶ",
      "answer": "遊ぶ",
      "reading": "あそぶ"
    }
  ],
  "198": [
    {
      "target": "農場",
      "answer": "農場",
      "reading": "のうじょう"
    }
  ],
  "199": [
    {
      "target": "鉄",
      "answer": "鉄",
      "reading": "てつ"
    }
  ],
  "200": [
    {
      "target": "表す",
      "answer": "表す",
      "reading": "あらわす"
    }
  ],
  "201": [
    {
      "target": "童話",
      "answer": "童話",
      "reading": "どうわ"
    }
  ],
  "202": [
    {
      "target": "申しこむ",
      "answer": "申しこむ",
      "reading": "もうしこむ"
    }
  ],
  "203": [
    {
      "target": "大人",
      "answer": "大人",
      "reading": "おとな"
    }
  ],
  "204": [
    {
      "target": "食品",
      "answer": "食品",
      "reading": "しょくひん"
    }
  ],
  "205": [
    {
      "target": "商品",
      "answer": "商品",
      "reading": "しょうひん"
    }
  ],
  "206": [
    {
      "target": "客様",
      "answer": "客様",
      "reading": "きゃくさま"
    }
  ],
  "207": [
    {
      "target": "入学式",
      "answer": "入学式",
      "reading": "にゅうがくしき"
    }
  ],
  "208": [
    {
      "target": "去年",
      "answer": "去年",
      "reading": "きょねん"
    }
  ],
  "209": [
    {
      "target": "二倍",
      "answer": "二倍",
      "reading": "にばい"
    }
  ],
  "210": [
    {
      "target": "毛筆",
      "answer": "毛筆",
      "reading": "もうひつ"
    }
  ],
  "211": [
    {
      "target": "引用",
      "answer": "引用",
      "reading": "いんよう"
    }
  ],
  "212": [
    {
      "target": "出典",
      "answer": "出典",
      "reading": "しゅってん"
    }
  ],
  "213": [
    {
      "target": "総合的",
      "answer": "総合的",
      "reading": "そうごうてき"
    }
  ],
  "214": [
    {
      "target": "句読点",
      "answer": "句読点",
      "reading": "くとうてん"
    }
  ],
  "215": [
    {
      "target": "晴天",
      "answer": "晴天",
      "reading": "せいてん"
    }
  ],
  "216": [
    {
      "target": "今年",
      "answer": "今年",
      "reading": "ことし"
    }
  ],
  "217": [
    {
      "target": "品物",
      "answer": "品物",
      "reading": "しなもの"
    }
  ],
  "218": [
    {
      "target": "去る",
      "answer": "去る",
      "reading": "さる"
    }
  ],
  "219": [
    {
      "target": "筆",
      "answer": "筆",
      "reading": "ふで"
    }
  ],
  "220": [
    {
      "target": "過去",
      "answer": "過去",
      "reading": "かこ"
    }
  ],
  "221": [
    {
      "target": "銀行",
      "answer": "銀行",
      "reading": "ぎんこう"
    }
  ],
  "222": [
    {
      "target": "同時",
      "answer": "同時",
      "reading": "どうじ"
    }
  ],
  "223": [
    {
      "target": "直線",
      "answer": "直線",
      "reading": "ちょくせん"
    }
  ],
  "224": [
    {
      "target": "二日",
      "answer": "二日",
      "reading": "ふつか"
    }
  ],
  "225": [
    {
      "target": "白玉",
      "answer": "白玉",
      "reading": "しらたま"
    }
  ],
  "226": [
    {
      "target": "植物",
      "answer": "植物",
      "reading": "しょくぶつ"
    }
  ],
  "227": [
    {
      "target": "集める",
      "answer": "集める",
      "reading": "あつめる"
    }
  ],
  "228": [
    {
      "target": "化石",
      "answer": "化石",
      "reading": "かせき"
    }
  ],
  "229": [
    {
      "target": "死ぬ",
      "answer": "死ぬ",
      "reading": "しぬ"
    }
  ],
  "230": [
    {
      "target": "都合",
      "answer": "都合",
      "reading": "つごう"
    }
  ],
  "231": [
    {
      "target": "題名",
      "answer": "題名",
      "reading": "だいめい"
    }
  ],
  "232": [
    {
      "target": "数字",
      "answer": "数字",
      "reading": "すうじ"
    }
  ],
  "233": [
    {
      "target": "入道雲",
      "answer": "入道雲",
      "reading": "にゅうどうぐも"
    }
  ],
  "234": [
    {
      "target": "新た",
      "answer": "新た",
      "reading": "あらた"
    }
  ],
  "235": [
    {
      "target": "目次",
      "answer": "目次",
      "reading": "もくじ"
    }
  ],
  "236": [
    {
      "target": "地面",
      "answer": "地面",
      "reading": "じめん"
    }
  ],
  "237": [
    {
      "target": "植える",
      "answer": "植える",
      "reading": "うえる"
    }
  ],
  "238": [
    {
      "target": "集会",
      "answer": "集会",
      "reading": "しゅうかい"
    }
  ],
  "239": [
    {
      "target": "化ける",
      "answer": "化ける",
      "reading": "ばける"
    }
  ],
  "240": [
    {
      "target": "都",
      "answer": "都",
      "reading": "みやこ"
    }
  ],
  "241": [
    {
      "target": "拾う",
      "answer": "拾う",
      "reading": "ひろう"
    }
  ],
  "242": [
    {
      "target": "式",
      "answer": "式",
      "reading": "しき"
    }
  ],
  "243": [
    {
      "target": "銀色",
      "answer": "銀色",
      "reading": "ぎんいろ"
    }
  ],
  "244": [
    {
      "target": "運動",
      "answer": "運動",
      "reading": "うんどう"
    }
  ],
  "245": [
    {
      "target": "世界地図",
      "answer": "世界地図",
      "reading": "せかいちず"
    }
  ],
  "246": [
    {
      "target": "洋食",
      "answer": "洋食",
      "reading": "ようしょく"
    }
  ],
  "247": [
    {
      "target": "道具",
      "answer": "道具",
      "reading": "どうぐ"
    }
  ],
  "248": [
    {
      "target": "童よう",
      "answer": "童よう",
      "reading": "どうよう"
    }
  ],
  "249": [
    {
      "target": "速い",
      "answer": "速い",
      "reading": "はやい"
    }
  ],
  "250": [
    {
      "target": "住人",
      "answer": "住人",
      "reading": "じゅうにん"
    }
  ],
  "251": [
    {
      "target": "県内",
      "answer": "県内",
      "reading": "けんない"
    }
  ],
  "252": [
    {
      "target": "都会",
      "answer": "都会",
      "reading": "とかい"
    }
  ],
  "253": [
    {
      "target": "整う",
      "answer": "整う",
      "reading": "ととのう"
    }
  ],
  "254": [
    {
      "target": "死ぬ",
      "answer": "死ぬ",
      "reading": "しぬ"
    }
  ],
  "255": [
    {
      "target": "三倍",
      "answer": "三倍",
      "reading": "さんばい"
    }
  ],
  "256": [
    {
      "target": "始まり",
      "answer": "始まり",
      "reading": "はじまり"
    }
  ],
  "257": [
    {
      "target": "商売",
      "answer": "商売",
      "reading": "しょうばい"
    }
  ],
  "258": [
    {
      "target": "進化",
      "answer": "進化",
      "reading": "しんか"
    }
  ],
  "259": [
    {
      "target": "申し",
      "answer": "申し",
      "reading": "もうし"
    }
  ],
  "260": [
    {
      "target": "水面",
      "answer": "水面",
      "reading": "すいめん"
    }
  ],
  "261": [
    {
      "target": "両手",
      "answer": "両手",
      "reading": "りょうて"
    }
  ],
  "262": [
    {
      "target": "負ける",
      "answer": "負ける",
      "reading": "まける"
    }
  ],
  "263": [
    {
      "target": "係",
      "answer": "係",
      "reading": "かかり"
    }
  ],
  "264": [
    {
      "target": "語り合う",
      "answer": "語り合う",
      "reading": "かたりあう"
    }
  ],
  "265": [
    {
      "target": "祭り",
      "answer": "祭り",
      "reading": "まつり"
    }
  ],
  "266": [
    {
      "target": "農作業",
      "answer": "農作業",
      "reading": "のうさぎょう"
    }
  ],
  "267": [
    {
      "target": "鉄板",
      "answer": "鉄板",
      "reading": "てっぱん"
    }
  ],
  "268": [
    {
      "target": "電柱",
      "answer": "電柱",
      "reading": "でんちゅう"
    }
  ],
  "269": [
    {
      "target": "予定",
      "answer": "予定",
      "reading": "よてい"
    }
  ],
  "270": [
    {
      "target": "油田",
      "answer": "油田",
      "reading": "ゆでん"
    }
  ],
  "271": [
    {
      "target": "鳴る",
      "answer": "鳴る",
      "reading": "なる"
    }
  ],
  "272": [
    {
      "target": "太陽",
      "answer": "太陽",
      "reading": "たいよう"
    }
  ],
  "273": [
    {
      "target": "止まる",
      "answer": "止まる",
      "reading": "とまる"
    }
  ],
  "274": [
    {
      "target": "勝負",
      "answer": "勝負",
      "reading": "しょうぶ"
    }
  ],
  "275": [
    {
      "target": "関係",
      "answer": "関係",
      "reading": "かんけい"
    }
  ],
  "276": [
    {
      "target": "文化祭",
      "answer": "文化祭",
      "reading": "ぶんかさい"
    }
  ],
  "277": [
    {
      "target": "羽子板",
      "answer": "羽子板",
      "reading": "はごいた"
    }
  ],
  "278": [
    {
      "target": "柱",
      "answer": "柱",
      "reading": "はしら"
    }
  ],
  "279": [
    {
      "target": "油絵",
      "answer": "油絵",
      "reading": "あぶらえ"
    }
  ],
  "280": [
    {
      "target": "負う",
      "answer": "負う",
      "reading": "おう"
    }
  ],
  "281": [
    {
      "target": "開港",
      "answer": "開港",
      "reading": "かいこう"
    }
  ],
  "282": [
    {
      "target": "目薬",
      "answer": "目薬",
      "reading": "めぐすり"
    }
  ],
  "283": [
    {
      "target": "草笛",
      "answer": "草笛",
      "reading": "くさぶえ"
    }
  ],
  "284": [
    {
      "target": "雲海",
      "answer": "雲海",
      "reading": "うんかい"
    }
  ],
  "285": [
    {
      "target": "新雪",
      "answer": "新雪",
      "reading": "しんせつ"
    }
  ],
  "286": [
    {
      "target": "注意",
      "answer": "注意",
      "reading": "ちゅうい"
    }
  ],
  "287": [
    {
      "target": "悪者",
      "answer": "悪者",
      "reading": "わるもの"
    }
  ],
  "288": [
    {
      "target": "感知",
      "answer": "感知",
      "reading": "かんち"
    }
  ],
  "289": [
    {
      "target": "売買",
      "answer": "売買",
      "reading": "ばいばい"
    }
  ],
  "290": [
    {
      "target": "港町",
      "answer": "港町",
      "reading": "みなとまち"
    }
  ],
  "291": [
    {
      "target": "部分",
      "answer": "部分",
      "reading": "ぶぶん"
    }
  ],
  "292": [
    {
      "target": "組み合わせ",
      "answer": "組み合わせ",
      "reading": "くみあわせ"
    }
  ],
  "293": [
    {
      "target": "意味",
      "answer": "意味",
      "reading": "いみ"
    }
  ],
  "294": [
    {
      "target": "花火",
      "answer": "花火",
      "reading": "はなび"
    }
  ],
  "295": [
    {
      "target": "毛筆",
      "answer": "毛筆",
      "reading": "もうひつ"
    }
  ],
  "296": [
    {
      "target": "薬草",
      "answer": "薬草",
      "reading": "やくそう"
    }
  ],
  "297": [
    {
      "target": "鳴る",
      "answer": "鳴る",
      "reading": "なる"
    }
  ],
  "298": [
    {
      "target": "注ぐ",
      "answer": "注ぐ",
      "reading": "そそぐ"
    }
  ],
  "299": [
    {
      "target": "悪事",
      "answer": "悪事",
      "reading": "あくじ"
    }
  ],
  "300": [
    {
      "target": "学者",
      "answer": "学者",
      "reading": "がくしゃ"
    }
  ],
  "301": [
    {
      "target": "勝負",
      "answer": "勝負",
      "reading": "しょうぶ"
    }
  ],
  "302": [
    {
      "target": "広大",
      "answer": "広大",
      "reading": "こうだい"
    }
  ],
  "303": [
    {
      "target": "車庫",
      "answer": "車庫",
      "reading": "しゃこ"
    }
  ],
  "304": [
    {
      "target": "間近",
      "answer": "間近",
      "reading": "まぢか"
    }
  ],
  "305": [
    {
      "target": "入力",
      "answer": "入力",
      "reading": "にゅうりょく"
    }
  ],
  "306": [
    {
      "target": "電波",
      "answer": "電波",
      "reading": "でんぱ"
    }
  ],
  "307": [
    {
      "target": "帰社",
      "answer": "帰社",
      "reading": "きしゃ"
    }
  ],
  "308": [
    {
      "target": "放送",
      "answer": "放送",
      "reading": "ほうそう"
    }
  ],
  "309": [
    {
      "target": "勉強",
      "answer": "勉強",
      "reading": "べんきょう"
    }
  ],
  "310": [
    {
      "target": "勝つ",
      "answer": "勝つ",
      "reading": "かつ"
    }
  ],
  "311": [
    {
      "target": "予定",
      "answer": "予定",
      "reading": "よてい"
    }
  ],
  "312": [
    {
      "target": "近道",
      "answer": "近道",
      "reading": "ちかみち"
    }
  ],
  "313": [
    {
      "target": "通学",
      "answer": "通学",
      "reading": "つうがく"
    }
  ],
  "314": [
    {
      "target": "商店がい",
      "answer": "商店がい",
      "reading": "しょうてんがい"
    }
  ],
  "315": [
    {
      "target": "公園",
      "answer": "公園",
      "reading": "こうえん"
    }
  ],
  "316": [
    {
      "target": "海開き",
      "answer": "海開き",
      "reading": "うみびらき"
    }
  ],
  "317": [
    {
      "target": "画面",
      "answer": "画面",
      "reading": "がめん"
    }
  ],
  "318": [
    {
      "target": "波",
      "answer": "波",
      "reading": "なみ"
    }
  ],
  "319": [
    {
      "target": "放す",
      "answer": "放す",
      "reading": "はなす"
    }
  ],
  "320": [
    {
      "target": "放る",
      "answer": "放る",
      "reading": "ほうる"
    }
  ],
  "321": [
    {
      "target": "勉強家",
      "answer": "勉強家",
      "reading": "べんきょうか"
    }
  ],
  "322": [
    {
      "target": "入港",
      "answer": "入港",
      "reading": "にゅうこう"
    }
  ],
  "323": [
    {
      "target": "勝手",
      "answer": "勝手",
      "reading": "かって"
    }
  ],
  "324": [
    {
      "target": "かん板",
      "answer": "かん板",
      "reading": "かんばん"
    }
  ],
  "325": [
    {
      "target": "金庫",
      "answer": "金庫",
      "reading": "きんこ"
    }
  ],
  "326": [
    {
      "target": "石油",
      "answer": "石油",
      "reading": "せきゆ"
    }
  ],
  "327": [
    {
      "target": "波風",
      "answer": "波風",
      "reading": "なみかぜ"
    }
  ],
  "328": [
    {
      "target": "図書係",
      "answer": "図書係",
      "reading": "としょがかり"
    }
  ],
  "329": [
    {
      "target": "横笛",
      "answer": "横笛",
      "reading": "よこぶえ"
    }
  ],
  "330": [
    {
      "target": "会員",
      "answer": "会員",
      "reading": "かいいん"
    }
  ],
  "331": [
    {
      "target": "両親",
      "answer": "両親",
      "reading": "りょうしん"
    }
  ],
  "332": [
    {
      "target": "休業",
      "answer": "休業",
      "reading": "きゅうぎょう"
    }
  ],
  "333": [
    {
      "target": "門柱",
      "answer": "門柱",
      "reading": "もんちゅう"
    }
  ],
  "334": [
    {
      "target": "放水",
      "answer": "放水",
      "reading": "ほうすい"
    }
  ],
  "335": [
    {
      "target": "負ける",
      "answer": "負ける",
      "reading": "まける"
    }
  ],
  "336": [
    {
      "target": "悪い",
      "answer": "悪い",
      "reading": "わるい"
    }
  ],
  "337": [
    {
      "target": "人気者",
      "answer": "人気者",
      "reading": "にんきもの"
    }
  ],
  "338": [
    {
      "target": "祭り",
      "answer": "祭り",
      "reading": "まつり"
    }
  ],
  "339": [
    {
      "target": "注文",
      "answer": "注文",
      "reading": "ちゅうもん"
    }
  ],
  "340": [
    {
      "target": "薬",
      "answer": "薬",
      "reading": "くすり"
    }
  ],
  "341": [
    {
      "target": "青葉",
      "answer": "青葉",
      "reading": "あおば"
    }
  ],
  "342": [
    {
      "target": "習字",
      "answer": "習字",
      "reading": "しゅうじ"
    }
  ],
  "343": [
    {
      "target": "着く",
      "answer": "着く",
      "reading": "つく"
    }
  ],
  "344": [
    {
      "target": "長旅",
      "answer": "長旅",
      "reading": "ながたび"
    }
  ],
  "345": [
    {
      "target": "動く",
      "answer": "動く",
      "reading": "うごく"
    }
  ],
  "346": [
    {
      "target": "深手",
      "answer": "深手",
      "reading": "ふかで"
    }
  ],
  "347": [
    {
      "target": "使う",
      "answer": "使う",
      "reading": "つかう"
    }
  ],
  "348": [
    {
      "target": "悪い",
      "answer": "悪い",
      "reading": "わるい"
    }
  ],
  "349": [
    {
      "target": "物",
      "answer": "物",
      "reading": "もの"
    }
  ],
  "350": [
    {
      "target": "持つ",
      "answer": "持つ",
      "reading": "もつ"
    }
  ],
  "351": [
    {
      "target": "話題",
      "answer": "話題",
      "reading": "わだい"
    }
  ],
  "352": [
    {
      "target": "決める",
      "answer": "決める",
      "reading": "きめる"
    }
  ],
  "353": [
    {
      "target": "行事",
      "answer": "行事",
      "reading": "ぎょうじ"
    }
  ],
  "354": [
    {
      "target": "服そう",
      "answer": "服そう",
      "reading": "ふくそう"
    }
  ],
  "355": [
    {
      "target": "台所",
      "answer": "台所",
      "reading": "だいどころ"
    }
  ],
  "356": [
    {
      "target": "有る",
      "answer": "有る",
      "reading": "ある"
    }
  ],
  "357": [
    {
      "target": "時間",
      "answer": "時間",
      "reading": "じかん"
    }
  ],
  "358": [
    {
      "target": "生物",
      "answer": "生物",
      "reading": "せいぶつ"
    }
  ],
  "359": [
    {
      "target": "大昔",
      "answer": "大昔",
      "reading": "おおむかし"
    }
  ],
  "360": [
    {
      "target": "横がお",
      "answer": "横がお",
      "reading": "よこがお"
    }
  ],
  "361": [
    {
      "target": "予算",
      "answer": "予算",
      "reading": "よさん"
    }
  ],
  "362": [
    {
      "target": "送る",
      "answer": "送る",
      "reading": "おくる"
    }
  ],
  "363": [
    {
      "target": "下る",
      "answer": "下る",
      "reading": "くだる"
    }
  ],
  "364": [
    {
      "target": "悲しい",
      "answer": "悲しい",
      "reading": "かなしい"
    }
  ],
  "365": [
    {
      "target": "向こう",
      "answer": "向こう",
      "reading": "むこう"
    }
  ],
  "366": [
    {
      "target": "川岸",
      "answer": "川岸",
      "reading": "かわぎし"
    }
  ],
  "367": [
    {
      "target": "開花",
      "answer": "開花",
      "reading": "かいか"
    }
  ],
  "368": [
    {
      "target": "感心",
      "answer": "感心",
      "reading": "かんしん"
    }
  ],
  "369": [
    {
      "target": "対話",
      "answer": "対話",
      "reading": "たいわ"
    }
  ],
  "370": [
    {
      "target": "泳ぐ",
      "answer": "泳ぐ",
      "reading": "およぐ"
    }
  ],
  "371": [
    {
      "target": "手品",
      "answer": "手品",
      "reading": "てじな"
    }
  ],
  "372": [
    {
      "target": "客室",
      "answer": "客室",
      "reading": "きゃくしつ"
    }
  ],
  "373": [
    {
      "target": "筆記",
      "answer": "筆記",
      "reading": "ひっき"
    }
  ],
  "374": [
    {
      "target": "田植え",
      "answer": "田植え",
      "reading": "たうえ"
    }
  ],
  "375": [
    {
      "target": "文章",
      "answer": "文章",
      "reading": "ぶんしょう"
    }
  ],
  "376": [
    {
      "target": "負う",
      "answer": "負う",
      "reading": "おう"
    }
  ],
  "377": [
    {
      "target": "空港",
      "answer": "空港",
      "reading": "くうこう"
    }
  ],
  "378": [
    {
      "target": "悪人",
      "answer": "悪人",
      "reading": "あくにん"
    }
  ],
  "379": [
    {
      "target": "勝つ",
      "answer": "勝つ",
      "reading": "かつ"
    }
  ],
  "380": [
    {
      "target": "書庫",
      "answer": "書庫",
      "reading": "しょこ"
    }
  ]
};
