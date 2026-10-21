import { Reveal, Portfolio, CTA } from '../components/ui'
const blocks = [
  ['Our story', 'Frame Creation helps businesses express their identity through cinematic visuals, thoughtful storytelling and strategic digital content. [Replace with your real story.]'],
  ['Our creative philosophy', 'Every brand has a story worth framing. We look for the moments that make people stop, feel and remember. [Edit to match your philosophy.]'],
  ['What makes us different', 'We combine production craft with social media strategy, so the content we shoot is built to perform where your audience actually is. [Edit as needed.]'],
  ['Services & process', 'Social media management, cinematic reels, food photography and videography, brand identity and digital marketing, delivered through Concept → Create → Publish → Grow.'],
]
export default function About() {
  return (<>
    <section className="section top"><Reveal><p className="eyebrow">ABOUT US</p><h1 className="huge sm">WE SEE STORIES WHERE OTHERS SEE <span className="grad">CONTENT.</span></h1></Reveal>
      <div className="stack">{blocks.map(([t, b], i) => <Reveal key={t} delay={i * 60}><div className="glass panel" style={{ marginLeft: `${(i % 2) * 6}%` }}><h3>{t}</h3><p>{b}</p></div></Reveal>)}</div></section>
    <section className="section"><Reveal><h2 className="big">Selected Work</h2></Reveal><Portfolio onlyFeatured limit={3} /></section>
    <CTA title="LET'S CREATE SOMETHING DIFFERENT." label="Let's Create Something Different" />
  </>)
}
