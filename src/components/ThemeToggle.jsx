import { useTheme } from '../context/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="ml-1 w-9 h-9 flex items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}