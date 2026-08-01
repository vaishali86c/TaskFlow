import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const linkClasses = ({ isActive }) =>
    `px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${isActive
        ? 'bg-brand-600 text-white'
        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
    }`

export default function Header() {
    return (
        <header className="max-w-3xl mx-auto px-4 py-6 flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">Task
                <span className="text-purple-500">Flow</span>
            </h1>
            <nav className="flex items-center gap-2">
                <NavLink to="/" className={linkClasses}>
                    Tasks
                </NavLink>
                <NavLink to="/stats" className={linkClasses}>
                    Stats
                </NavLink>
                <ThemeToggle />
            </nav>
        </header>
    )
}