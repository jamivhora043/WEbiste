import { useState } from 'react'
import { Instagram, Youtube, MessageCircle, Mail } from 'lucide-react'
import { Reveal, Magnetic } from '../components/ui'
import { site } from '../config/site'
const services = ['Social Media Management', 'Cinematic Reels & Video', 'Food Photography & Videography', 'Brand Identity & Campaigns', 'Digital Marketing & Strategy', 'Not sure yet']
export default function Contact() {
  const [state, setState] = useState({ s: 'idle', msg: '' })
  async function submit(e) {
    e.preventDefault(); const form = e.target; const data = Object.fromEntries(new FormData(form))
    if (!site.formEndpoint) {
      const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('New enquiry from ' + (data.brand || data.name))}&body=${encodeURIComponent(body)}`
      return setState({ s: 'info', msg: 'Form service is not connected yet, so your email app was opened with your message. (Site owner: set formEndpoint in src/config/site.js.)' })
    }
    setState({ s: 'sending', msg: '' })
    try {
      const r = await fetch(site.formEndpoint, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (!r.ok) throw new Error()
      form.reset(); setState({ s: 'ok', msg: "Thanks! We've received your message and will be in touch." })
    } catch { setState({ s: 'err', msg: 'Something went wrong. Please try again or email us directly.' }) }
  }
  const links = [[Instagram, 'Instagram', site.instagram], [Youtube, 'YouTube', site.youtube], [MessageCircle, 'WhatsApp', site.whatsapp], [Mail, 'Email', `mailto:${site.email}`]]
  return (
    <section className="section top"><Reveal><p className="eyebrow">CONTACT US</p><h1 className="huge sm">HAVE A BRAND IN MIND? <span className="grad">LET'S TALK.</span></h1></Reveal>
      <div className="contact">
        <Reveal><form className="glass form" onSubmit={submit}>
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Brand / Business Name<input name="brand" autoComplete="organization" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Phone / WhatsApp<input name="phone" type="tel" autoComplete="tel" /></label>
          <label>Service Required<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map((s) => <option key={s}>{s}</option>)}</select></label>
          <label>Estimated Budget (optional)<input name="budget" /></label>
          <label className="full">Project Details<textarea name="details" rows="5" required /></label>
          <Magnetic className="lime full">{state.s === 'sending' ? 'Sending…' : 'Start a Conversation'}</Magnetic>
          {state.msg && <p role="status" className={`status ${state.s}`}>{state.msg}</p>}
        </form></Reveal>
        <Reveal delay={100}><div className="glass links"><h3>Or reach us directly</h3>
          {links.map(([I, l, h]) => <a key={l} href={h} target={h.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"><I size={20} /> {l}</a>)}</div></Reveal>
      </div></section>)
}
