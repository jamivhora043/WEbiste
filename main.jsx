import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Menu, X } from 'lucide-react'
import './styles.css'
import Home from './pages/Home'; import Work from './pages/Work'; import About from './pages/About'; import Contact from './pages/Contact'
import { site } from './config/site'

const routes = { '/': Home, '/work': Work, '/about': About, '/contact': Contact }
const nav = [['/', 'Home'], ['/work', 'Work'], ['/about', 'About'], ['/contact', 'Contact']]
function App() {
  const get = () => window.location.hash.slice(1) || '/'
  const [path, setPath] = useState(get()); const [open, setOpen] = useState(false)
  useEffect(() => { const h = () => { setPath(get()); setOpen(false); window.scrollTo(0, 0) }; addEventListener('hashchange', h); return () => removeEventListener('hashchange', h) }, [])
  const Page = routes[path] || Home
  return (<>
    <div className="bg" aria-hidden="true"><i /><i /><i /></div><div className="grain" aria-hidden="true" />
    <header className="nav glass">
      <a href="#/" className="brand"><img src="/logo.png" alt="" width="36" height="36" />{site.name}</a>
      <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'open' : ''}>{nav.map(([p, l]) => <a key={p} href={`#${p}`} aria-current={path === p ? 'page' : undefined}>{l}</a>)}</nav>
    </header>
    <main key={path} className="page"><Page /></main>
    <footer className="foot"><p>{site.tagline}</p><small>© {new Date().getFullYear()} {site.name}</small></footer>
  </>)
}
createRoot(document.getElementById('root')).render(<App />)
