import TaskForm from "../components/TaskForm";

// const FILTERS = {
//     all: () => true,
//     active: (t) => !t.done,
//     completed: (t) => t.done,
// }


export default function Home({ dispatch }) {

    // const [filter, setFilter] = useState('all');
    
    // // useMemo re-runs the filter only when `tasks` or `filter` actually change,
    // // instead of on every render (e.g. when the theme toggles). For a list
    // // this small it's not strictly necessary, but it's the idiomatic spot to
    // // reach for it once lists get large or the filter logic gets expensive.

    // const visibleTasks = useMemo(
    //     () => tasks.filter(FILTERS[filter]),
    //     [tasks, filter]
    // )
    return (
        <>
            <TaskForm dispatch={dispatch} />

            <div className="flex item-center justify-content mb-4 text-sm">
                <div className="flex gap-1">
                    <button></button>
                </div>
            </div>
        </>
    )
}