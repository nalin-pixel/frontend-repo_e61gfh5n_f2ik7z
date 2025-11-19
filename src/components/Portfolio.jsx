import { useEffect, useState } from 'react'

const tabs = ['All', 'UI Animation', 'Real Estate', 'Commercial Reels']

export default function PortfolioPage() {
  const [active, setActive] = useState('All')
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const url = active === 'All' ? `${base}/projects` : `${base}/projects?niche=${encodeURIComponent(active)}`
      const res = await fetch(url)
      const data = await res.json()
      setItems(data)
    }
    load()
  }, [active])

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-3">Portfolio</h1>
        <p className="text-[#F5F5F5]/70 mb-8">Clean, modern, and sales-ready. Filter by niche.</p>

        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map((t) => (
            <button key={t} onClick={() => setActive(t)} className={`px-4 py-2 rounded-full text-sm border ${active===t?'border-[#00E5FF] text-[#00E5FF]':'border-white/10 text-[#F5F5F5]/80 hover:border-[#00E5FF]/50'}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.id || it.title} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img src={it.thumbnail_url} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-xs text-[#00E5FF] mb-1">{it.niche}</div>
                <h3 className="font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-[#F5F5F5]/70 mb-3">{it.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {it.tools?.map((tool) => (
                    <span key={tool} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">{tool}</span>
                  ))}
                </div>
                {it.video_url && (
                  <a href={it.video_url} target="_blank" className="text-sm text-[#00E5FF] hover:underline">Watch video</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
