# Frame Creation Website
React + Vite + plain CSS (custom glassmorphism) + lucide-react. Hash routing (works on any static host).

## Run locally
Requires Node 18+.
    npm install
    npm run dev      # http://localhost:5173
    npm run build    # outputs /dist

## Add a project / YouTube link
Open `src/data/projects.js` and add ONE object to the array:
    { id:'unique-id', title:'...', client:'...', category:'Cinematic Reels',
      description:'...', thumbnail:'/images/my-thumb.jpg',
      youtubeUrl:'https://www.youtube.com/watch?v=REAL_ID', featured:true }
- Put the thumbnail image in `public/images/` (use ~1200px wide JPG/WebP). Leave `thumbnail:''` for an auto placeholder.
- `category` must match a filter name exactly (list at the bottom of the file).
- `featured:true` shows it on Home/About. Each card opens its own URL in a new tab (rel="noopener noreferrer"). Invalid/missing URLs render a disabled card.
- Future embeds: add an `embedUrl` field and render a modal in `ProjectCard` (src/components/ui.jsx).

## Contact form
Edit `src/config/site.js`. Create a free form at formspree.io, paste its endpoint into `formEndpoint`. Until then the form opens the visitor's email app instead and says so honestly.

## Deploy
Netlify / Vercel / Cloudflare Pages: connect the repo (or drag the `dist` folder to Netlify Drop), build `npm run build`, output `dist`. GitHub Pages also works (`base:'./'` is set).

## Replace these placeholders
- `src/config/site.js`: email, Instagram, YouTube, WhatsApp, formEndpoint
- `src/data/projects.js`: all 5 demo projects (titles, clients, YouTube URLs, thumbnails)
- `src/pages/About.jsx`: story, philosophy and difference text (marked [Replace...])
- `index.html`: meta description / social title; `public/favicon.png` (currently your logo)
- Nothing in the site invents testimonials, stats, founders or years of experience.
