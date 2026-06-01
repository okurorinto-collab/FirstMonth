import { useState, useEffect } from 'react'
import { tasks } from './data/tasks.js'
import Header from './components/Header.jsx'
import TaskCard from './components/TaskCard.jsx'
import DetailSheet from './components/DetailSheet.jsx'

export default function App() {
  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem('fm-checked')
      return saved ? new Set(JSON.parse(saved)) : new Set()
    } catch {
      return new Set()
    }
  })
  const [openTaskId, setOpenTaskId] = useState(null)

  useEffect(() => {
    localStorage.setItem('fm-checked', JSON.stringify([...checked]))
  }, [checked])

  function toggle(id) {
    setChecked(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const openTask = tasks.find(t => t.id === openTaskId) ?? null

  return (
    <div className="app">
      <Header total={tasks.length} doneCount={checked.size} />

      <main className="task-list" aria-inert={openTaskId ? true : undefined}>
        {tasks.map((task, i) => (
          <TaskCard
            key={task.id}
            task={task}
            isChecked={checked.has(task.id)}
            index={i}
            onToggle={() => toggle(task.id)}
            onOpen={() => setOpenTaskId(task.id)}
          />
        ))}
      </main>

      <DetailSheet
        task={openTask}
        onClose={() => setOpenTaskId(null)}
      />
    </div>
  )
}
