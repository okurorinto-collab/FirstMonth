export const tasks = [
  // 🚿🛁 お風呂
  {
    id: 'drain-mold',
    title: '排水口にカビキラー',
    place: { emoji: '🚿', label: 'お風呂', colorKey: 'bath' },
    time: { emoji: '⏱️', label: '5分' },
    detail: null,
  },
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
  // 🪥 洗面
  {
    id: 'toothbrush',
    title: '歯ブラシ交換',
    place: { emoji: '🪥', label: '洗面', colorKey: 'sink' },
    time: { emoji: '⚡', label: '即時' },
    detail: null,
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
  // 🧺 洗濯
  {
    id: 'washer-mold',
    title: '洗濯槽用カビキラーで樽洗浄',
    place: { emoji: '🧺', label: '洗濯', colorKey: 'laundry' },
    time: { emoji: '⏱️', label: '1時間' },
    detail: null,
  },
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
  // 🍳 キッチン
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
]
