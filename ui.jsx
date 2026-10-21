import { useEffect, useRef, useState } from 'react'
import { Play, ArrowUpRight } from 'lucide-react'
import { projects as allProjects } from '../data/projects'

export const go = (p) => { window.location.hash = p }

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null); const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.15 })
    io.observe(ref.current); return () => io.disconnect()
  }, [])
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${on ? 'in' : ''} ${className}`}>{children}</div>
}

export function Magnetic({ children, className = '', onClick, href }) {
  const ref = useRef(null)
  const move = (e) => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = ref.current.getBoundingClientRect()
    ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`
  }
  const reset = () => (ref.current.style.transform = '')
  const props = { ref, onMouseMove: move, onMouseLeave: reset, className: `btn ${className}` }
  return href ? <a {...props} href={href} onClick={onClick}>{children}</a> : <button {...props} onClick={onClick}>{children}</button>
}

export const isValidUrl = (u) => { try { const x = new URL(u); return ['http:', 'https:'].includes(x.protocol) } catch { return false } }

export function ProjectCard({ p, i = 0, tall }) {
  const ok = p.youtubeUrl && isValidUrl(p.youtubeUrl)
  const inner = (<>
    {p.thumbnail ? <img src={p.thumbnail} alt={`${p.title} cover`} loading="lazy" decoding="async" />
      : <div className="ph" style={{ '--h': (i * 47) % 360 }}><span>FRAME {String(i + 1).padStart(2, '0')}</span></div>}
    <div className="play"><Play size={22} fill="currentColor" /></div>
    <div className="meta glass">
      <small>{p.category}</small><h3>{p.title}</h3><p>{p.client}</p>
      {p.description && <em>{p.description}</em>}
    </div></>)
  return ok
    ? <a className={`card ${tall ? 'tall' : ''}`} href={p.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${p.title} for ${p.client} on YouTube (opens in new tab)`}>{inner}</a>
    : <div className={`card disabled ${tall ? 'tall' : ''}`} title="Add a valid youtubeUrl in src/data/projects.js">{inner}</div>
}

export function Portfolio({ filter = 'All Projects', onlyFeatured, limit }) {
  let list = allProjects.filter((p) => (onlyFeatured ? p.featured : true) && (filter === 'All Projects' || p.category === filter))
  if (limit) list = list.slice(0, limit)
  if (!list.length) return <p className="muted">No projects in this category yet.</p>
  return <div className="grid">{list.map((p, i) => <Reveal key={p.id} delay={i * 60}><ProjectCard p={p} i={i} tall={i % 3 === 0} /></Reveal>)}</div>
}

export const CTA = ({ title, label }) => (
  <section className="section"><Reveal><div className="glass cta">
    <h2 className="big">{title}</h2>
    <Magnetic className="lime" onClick={() => go('/contact')}>{label} <ArrowUpRight size={18} /></Magnetic>
  </div></Reveal></section>
)
