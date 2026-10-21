import { useState } from 'react'
import { Reveal, Portfolio, CTA } from '../components/ui'
import { categories } from '../data/projects'
export default function Work() {
  const [f, setF] = useState(categories[0])
  return (<>
    <section className="section top"><Reveal><p className="eyebrow">OUR WORK</p><h1 className="huge sm">Stories we've <span className="grad">framed.</span></h1></Reveal>
      <div className="filters" role="tablist">{categories.map((c) => <button key={c} role="tab" aria-selected={f === c} className={`chip glass ${f === c ? 'on' : ''}`} onClick={() => setF(c)}>{c}</button>)}</div>
      <Portfolio filter={f} /></section>
    <CTA title="HAVE A PROJECT IN MIND?" label="Start a Project" />
  </>)
}
