import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Stats from './pages/Stats'

function App() {
  
  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-100">
      <Header />
      <main className="max-w-2xl mx-auto px-4 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
