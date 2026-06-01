import TagBadge from './TagBadge.jsx'

export default function TaskCard({ task, isChecked, index, onToggle, onOpen }) {
  const hasDetail = Boolean(task.detail)

  function handleCardClick() {
    if (hasDetail) onOpen()
  }

  function handleCheckClick(e) {
    e.stopPropagation()
    onToggle()
  }

  return (
    <div
      className={`task-card ${isChecked ? 'checked' : ''}`}
      data-place={task.place.colorKey}
      style={{ '--delay': `${index * 60}ms` }}
      onClick={handleCardClick}
      role={hasDetail ? 'button' : undefined}
      tabIndex={hasDetail ? 0 : undefined}
      onKeyDown={hasDetail ? (e) => e.key === 'Enter' && handleCardClick() : undefined}
      aria-label={hasDetail ? `${task.title} — 詳細を見る` : undefined}
    >
      <button
        className={`checkbox-btn ${isChecked ? 'checked' : ''}`}
        onClick={handleCheckClick}
        aria-label={isChecked ? 'チェックを外す' : '完了にする'}
        aria-pressed={isChecked}
      >
        <svg className="checkbox-icon" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12" cy="12" r="10"
            className="checkbox-circle"
            strokeWidth="2"
          />
          {isChecked && (
            <path
              className="checkbox-check"
              d="M7 12.5l3.5 3.5 6.5-7"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </button>

      <div className="card-body">
        <span className={`task-title ${isChecked ? 'done' : ''}`}>
          {task.title}
        </span>
        <div className="tag-row">
          <TagBadge
            emoji={task.place.emoji}
            label={task.place.label}
            placeKey={task.place.colorKey}
            variant="place"
          />
          <TagBadge
            emoji={task.time.emoji}
            label={task.time.label}
            variant="time"
          />
        </div>
      </div>

      {hasDetail && (
        <span className="detail-arrow" aria-hidden="true">›</span>
      )}
    </div>
  )
}
