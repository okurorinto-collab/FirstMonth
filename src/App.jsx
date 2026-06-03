import { useState, useEffect } from 'react'
import { monthlyTasks, weeklyTasks } from './data/tasks.js'
import Header from './components/Header.jsx'
import TaskCard from './components/TaskCard.jsx'

const STORAGE_KEYS = {
  monthly: 'fm-checked-monthly',
  weekly: 'fm-checked-weekly',
}

const TAB_META = {
  monthly: { title: '毎月のお掃除', sub: '月イチルーティン', tasks: monthlyTasks },
  weekly: { title: '毎週のお掃除', sub: '週イチルーティン', tasks: weeklyTasks },
}

function loadChecked(key) {
  try {
    const saved = localStorage.getItem(key)
    return saved ? new Set(JSON.parse(saved)) : new Set()
  } catch {
    return new Set()
  }
}

export default function App() {
  const [tab, setTab] = useState(() => {
    const saved = localStorage.getItem('fm-tab')
    return saved === 'weekly' ? 'weekly' : 'monthly'
  })

  const [checkedMap, setCheckedMap] = useState(() => ({
    monthly: loadChecked(STORAGE_KEYS.monthly),
    weekly: loadChecked(STORAGE_KEYS.weekly),
  }))

  const [expanded, setExpanded] = useState(() => new Set())

  useEffect(() => {
    localStorage.setItem('fm-tab', tab)
  }, [tab])

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS[tab],
      JSON.stringify([...checkedMap[tab]])
    )
  }, [checkedMap, tab])

  function toggle(id) {
    setCheckedMap(prev => {
      const next = new Set(prev[tab])
      next.has(id) ? next.delete(id) : next.add(id)
      return { ...prev, [tab]: next }
    })
  }

  function toggleExpand(id) {
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function switchTab(nextTab) {
    if (nextTab === tab) return
    setExpanded(new Set())
    setTab(nextTab)
  }

  const meta = TAB_META[tab]
  const activeTasks = meta.tasks
  const checked = checkedMap[tab]

  return (
    <div className="app">
      <Header
        title={meta.title}
        sub={meta.sub}
        total={activeTasks.length}
        doneCount={checked.size}
      />

      <nav className="tab-bar" role="tablist" aria-label="リストの切り替え">
        <button
          className={`tab ${tab === 'monthly' ? 'active' : ''}`}
          role="tab"
          aria-selected={tab === 'monthly'}
          onClick={() => switchTab('monthly')}
        >
          🗓 月イチ
        </button>
        <button
          className={`tab ${tab === 'weekly' ? 'active' : ''}`}
          role="tab"
          aria-selected={tab === 'weekly'}
          onClick={() => switchTab('weekly')}
        >
          🔁 週イチ
        </button>
      </nav>

      <main className="task-list">
        {activeTasks.map((task, i) => (
          <TaskCard
            key={task.id}
            task={task}
            isChecked={checked.has(task.id)}
            isExpanded={expanded.has(task.id)}
            index={i}
            onToggle={() => toggle(task.id)}
            onToggleExpand={() => toggleExpand(task.id)}
          />
        ))}
      </main>
    </div>
  )
}
