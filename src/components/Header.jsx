import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="max-w-2xl mx-auto px-4 py-6 flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">Task
                <span className="text-purple-500">Flow</span>
            </h1>
            <nav className="flex items-center gap-2">
                <NavLink to="/">Task</NavLink>
                <NavLink to="/stats">Stats</NavLink>
            </nav>
        </header>
    )
}