export const monthlyTasks = [
  // 🍳 キッチン
  {
    id: 'microwave-sesqui',
    title: '電子レンジの重曹蒸気パック',
    place: { emoji: '🍳', label: 'キッチン', colorKey: 'kitchen' },
    time: { emoji: '⏱️', label: '20分' },
    detail: `⚠️ アルミ製のトレイ・網は事前に取り出しておく！
1. コップに水＋重曹小さじ1を入れて電子レンジで3分チン
2. 扉を閉めたまま15分放置（蒸気が汚れにじわじわ染み込む）
3. コップの重曹水をキッチンペーパーに少し浸し、庫内を拭く（火傷注意！）
4. 最後にきれいな水で固く絞った布で仕上げ拭き`,
  },
  {
    id: 'sink-oxy',
    title: 'シンクのオキシ漬け',
    place: { emoji: '🍳', label: 'キッチン', colorKey: 'kitchen' },
    time: { emoji: '⏱️', label: '2時間' },
    detail: `1. シンクの排水口をビニール袋＋輪ゴムで栓をする
2. 50℃のお湯をシンクいっぱいに溜める
3. オキシクリーン付属スプーン1〜2杯を溶かす
4. ゴミ受けカゴ・三角コーナー・水切りラック・五徳などを投入
5. 2時間放置
6. 栓を外してお湯を流し、スポンジで軽く磨く`,
  },
  // 🪥 洗面
  {
    id: 'drain-mold',
    title: '排水口にカビキラー',
    place: { emoji: '🪥', label: '洗面', colorKey: 'sink' },
    time: { emoji: '⏱️', label: '5分' },
    detail: null,
  },
  {
    id: 'toothbrush',
    title: '歯ブラシ交換',
    place: { emoji: '🪥', label: '洗面', colorKey: 'sink' },
    time: { emoji: '⚡', label: '即時' },
    detail: `古い歯ブラシで捨てる前にひと仕事！
1. サッシの溝をこすり洗い
2. スニーカーの底をこすり洗い
3. 蛇口の根元の細かい汚れをこすり洗い
4. そのまま捨てる`,
  },
  // 🧺 洗濯
  {
    id: 'washer-oxy',
    title: '縦型洗濯機のオキシ漬け',
    place: { emoji: '🧺', label: '洗濯', colorKey: 'laundry' },
    time: { emoji: '⏱️', label: '2〜6時間' },
    detail: `1. 糸くずフィルター（ネット）を外しておく
2. 洗濯槽に一番高い水位まで40〜50℃のお湯を張る
3. オキシクリーン付属スプーン3〜5杯を投入
4. 「槽洗浄」または「洗い」コースで5分ほど回してよく溶かす
5. 電源を切り、2〜6時間放置（汚れがひどいほど長めに）
6. 浮いてきた黒カビのかたまりを網やお玉ですくい取る（重要！）
7. 「槽洗浄コース（全行程）」を一回まわして終了
8. 最後に外したフィルターを元に戻す`,
  },
  // 🚪 玄関
  {
    id: 'shoes-tidy',
    title: '靴をしまう',
    place: { emoji: '🚪', label: '玄関', colorKey: 'entrance' },
    time: { emoji: '⚡', label: '即時' },
    detail: `1. 出しっぱなしの靴をすべて靴箱へ
2. ついでに見直し：サイズアウト・ボロボロで履いていない靴があれば1足だけ捨てる
　→ 靴箱に余裕が生まれてすっきり！`,
  },
  {
    id: 'entrance-tidy',
    title: 'カバン・持ち物をしまう',
    place: { emoji: '🚪', label: '玄関', colorKey: 'entrance' },
    time: { emoji: '⚡', label: '即時' },
    detail: `玄関に置きっぱなしのものを本来の場所へ！
1. バッグ・上着を部屋へ
2. 届いた宅配便の段ボールを処理・部屋へ
3. その他の置きっぱなしを一掃`,
  },
  // 🚿🛁 お風呂
  {
    id: 'bath-oxy',
    title: 'お風呂グッズのオキシ漬け',
    place: { emoji: '🛁', label: 'お風呂', colorKey: 'bath' },
    time: { emoji: '🌙', label: '一晩' },
    detail: `1. バスタブに残り湯（40〜50℃）を張る
2. オキシクリーン付属スプーン2杯を溶かす
3. 風呂椅子・洗面器・シャンプーボトル・おもちゃなどを全部浸ける
4. ふたをして一晩（6〜8時間）放置
5. 翌朝、スポンジで軽くこすって流す`,
  },
  // 🚽 トイレ
  {
    id: 'toilet-tank',
    title: 'トイレタンクのオキシ漬け',
    place: { emoji: '🚽', label: 'トイレ', colorKey: 'toilet' },
    time: { emoji: '⏱️', label: '半日' },
    detail: `1. トイレを1回流す（タンク内の水を一度入れ替える）
2. タンク上部の手洗い器の穴から、オキシクリーンをスプーン1杯（約30〜40g）流し込む
　※あらかじめコップ1杯のぬるま湯（40℃）に溶かしてから入れると効果アップ！
3. そのまま2時間〜半日放置（寝る前・お出かけ前がおすすめ）
4. 時間が経ったらレバーを回して水を2〜3回流すだけ！`,
  },
  {
    id: 'toilet-mold',
    title: 'トイレにカビキラー',
    place: { emoji: '🚽', label: 'トイレ', colorKey: 'toilet' },
    time: { emoji: '⏱️', label: '1時間' },
    detail: null,
  },
]

export const weeklyTasks = [
  // 🧺 洗濯
  {
    id: 'w-sheets',
    title: 'シーツ・枕カバーの交換',
    place: { emoji: '🧺', label: '洗濯', colorKey: 'laundry' },
    time: { emoji: '⏱️', label: '10分' },
    detail: `1. シーツ・枕カバー・布団カバーを外す
2. 洗濯ネットに入れて洗濯機へ
3. 新しいシーツ・カバーをセット
　→ 週1回でダニ・汗じみ対策に！`,
  },
  // 🚽 トイレ
  {
    id: 'w-toilet',
    title: 'トイレのブラシがけ＋床拭き',
    place: { emoji: '🚽', label: 'トイレ', colorKey: 'toilet' },
    time: { emoji: '⏱️', label: '5分' },
    detail: `1. 便器内に洗剤をかけてブラシでこする
2. 便座・フタ・レバーを除菌シートで拭く
3. 床と便器の根元を拭く（黄ばみ・におい予防）`,
  },
  // 🪥 洗面
  {
    id: 'w-mirror',
    title: '鏡・蛇口の水垢拭き',
    place: { emoji: '🪥', label: '洗面', colorKey: 'sink' },
    time: { emoji: '⏱️', label: '5分' },
    detail: `1. 鏡をマイクロファイバークロスで乾拭き
2. 蛇口・ハンドルの水垢をクエン酸スプレーで拭く
3. 洗面ボウルをサッと洗う
　→ ピカピカだと気分が上がる！`,
  },
  // 🍳 キッチン
  {
    id: 'w-sink-trap',
    title: 'キッチン排水口のゴミ受け洗い',
    place: { emoji: '🍳', label: 'キッチン', colorKey: 'kitchen' },
    time: { emoji: '⏱️', label: '5分' },
    detail: null,
  },
  {
    id: 'w-fridge-check',
    title: '冷蔵庫の中身チェック・期限切れ処分',
    place: { emoji: '🍳', label: 'キッチン', colorKey: 'kitchen' },
    time: { emoji: '⏱️', label: '10分' },
    detail: `1. 賞味期限切れ・しなびた食材を処分
2. 残り物を手前に出して「使い切りデー」を意識
3. 汚れた棚をサッと拭く
　→ 買い物前にやると無駄買い防止！`,
  },
  // 🛁 お風呂
  {
    id: 'w-bath-floor',
    title: 'お風呂の床・排水口こすり',
    place: { emoji: '🛁', label: 'お風呂', colorKey: 'bath' },
    time: { emoji: '⏱️', label: '10分' },
    detail: `1. 排水口のヘアキャッチャーの髪・ゴミを取る
2. 床・壁の下のほうをブラシでこする（ピンク汚れ予防）
3. 排水口まわりに泡スプレーをかけて流す`,
  },
  // 🚪 玄関・床
  {
    id: 'w-floor',
    title: '床の掃除機・拭き掃除',
    place: { emoji: '🚪', label: '玄関・床', colorKey: 'entrance' },
    time: { emoji: '⏱️', label: '15分' },
    detail: null,
  },
]

// 後方互換: 既存の import { tasks } を壊さないため
export const tasks = monthlyTasks
