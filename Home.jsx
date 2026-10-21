import { ChevronDown, Clapperboard, Camera, Megaphone, Palette, Share2 } from 'lucide-react'
import { Reveal, Magnetic, Portfolio, CTA, go } from '../components/ui'

const services = [[Share2, 'Social Media Management'], [Clapperboard, 'Cinematic Reels & Video Production'], [Camera, 'Food Photography & Videography'], [Palette, 'Brand Identity & Creative Campaigns'], [Megaphone, 'Digital Marketing & Content Strategy']]
export default function Home() {
  return (<>
    <section className="hero">
      <p className="eyebrow">INDEPENDENT CREATIVE STUDIO</p>
      <h1 className="huge">WE MAKE<br /><span className="grad">BRANDS</span><br /><span className="ghost">IMPOSSIBLE</span><br />TO IGNORE.</h1>
      <p className="lead">We turn ideas into cinematic content, distinctive brand identities, and digital experiences that make people stop scrolling.</p>
      <div className="row"><Magnetic className="lime" onClick={() => go('/work')}>Explore Our Work</Magnetic><Magnetic className="outline" onClick={() => go('/contact')}>Start a Project</Magnetic></div>
      <div className="glass float-panel"><span>CONTENT CREATION</span><i>/</i><span>BRANDING</span><i>/</i><span>DIGITAL GROWTH</span></div>
      <div className="scroll" aria-hidden="true"><ChevronDown /></div>
    </section>
    <section className="section"><Reveal><h2 className="big">Featured Work</h2></Reveal><Portfolio onlyFeatured limit={6} />
      <Reveal><Magnetic className="outline" onClick={() => go('/work')}>View all projects</Magnetic></Reveal></section>
    <section className="section"><Reveal><h2 className="big">What We Do</h2></Reveal>
      <div className="services">{services.map(([I, t], i) => <Reveal key={t} delay={i * 70}><div className="glass svc"><I size={28} /><h3>{t}</h3></div></Reveal>)}</div></section>
    <section className="section"><Reveal><h2 className="big">Our Approach</h2></Reveal>
      <div className="steps">{['Concept', 'Create', 'Publish', 'Grow'].map((s, i) => <Reveal key={s} delay={i * 90}><div className="glass step"><b>0{i + 1}</b><h3>{s}</h3></div></Reveal>)}</div></section>
    <section className="section"><Reveal><div className="glass about-intro">
      <p className="eyebrow">ABOUT FRAME CREATION</p>
      <h2 className="mid">Your brand. Our frame.</h2>
      <p className="lead">Frame Creation is a creative studio helping restaurants, cafes and lifestyle brands express who they are through cinematic visuals and strategic digital content.</p>
      <Magnetic className="outline" onClick={() => go('/about')}>Meet the studio</Magnetic></div></Reveal></section>
    <CTA title="YOUR BRAND DESERVES MORE THAN ORDINARY." label="Let's Grow Together" />
  </>)
}
