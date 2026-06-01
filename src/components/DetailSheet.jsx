import { useEffect } from 'react'
import TagBadge from './TagBadge.jsx'

export default function DetailSheet({ task, onClose }) {
  const isOpen = task !== null

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const steps = task?.detail?.split('\n').filter(Boolean) ?? []

  return (
    <>
      <div
        className={`backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`detail-sheet ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={task?.title ?? '詳細'}
      >
        <div className="sheet-handle" />

        <div className="sheet-header" data-place={task?.place.colorKey}>
          <span className="sheet-place-emoji">{task?.place.emoji}</span>
          <h2 className="sheet-title">{task?.title}</h2>
          <button
            className="sheet-close"
            onClick={onClose}
            aria-label="閉じる"
          >
            ✕
          </button>
        </div>

        {task && (
          <div className="sheet-tags">
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
        )}

        <div className="sheet-detail">
          {steps.map((line, i) => (
            <p
              key={i}
              className="detail-step"
              data-place={task?.place.colorKey}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}
