export default function Header({ title = '毎月のお掃除', sub = '月イチルーティン', total, doneCount }) {
  const percent = total > 0 ? (doneCount / total) * 100 : 0
  const allDone = doneCount === total && total > 0

  return (
    <header className="app-header">
      <div className="header-deco">
        <span className="header-deco-emoji">🌸</span>
        <span className="header-deco-emoji">🧹</span>
        <span className="header-deco-emoji">✨</span>
      </div>
      <h1 className="header-title">{title}</h1>
      <p className="header-sub">{sub}</p>

      <div className="progress-area">
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="progress-label">
          {allDone
            ? '🎉 全部完了！すごい！'
            : `${doneCount} / ${total} 完了`}
        </p>
      </div>
    </header>
  )
}
