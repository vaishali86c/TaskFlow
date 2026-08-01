import { useState } from 'react'

export default function TaskForm({ dispatch }) {
  
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const trimmed = text.trim();
        if (trimmed) return
        dispatch({ type: 'added', text: trimmed })
        setText('')
    }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs doing?"
        className="flex-1 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-500"
      />
      <button
        type="submit"
        className="rounded-xl bg-purple-500 hover:bg-purple-500 text-white px-5 py-2.5 text-sm font-medium transition-colors"
      >
        Add
      </button>
    </form>
  )
}
