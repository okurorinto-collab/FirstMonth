export default function TagBadge({ emoji, label, placeKey, variant }) {
  return (
    <span
      className={`tag-badge tag-badge--${variant}`}
      data-place={placeKey}
    >
      {emoji} {label}
    </span>
  )
}
