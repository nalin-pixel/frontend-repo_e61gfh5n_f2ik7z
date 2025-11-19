import { useEffect, useState } from 'react'

export default function TestimonialsPage() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/testimonials`)
      const data = await res.json()
      setItems(data)
    }
    load()
  }, [])

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-3">What Clients Say</h1>
        <p className="text-[#F5F5F5]/70 mb-10">Real feedback. Real results. Placeholders for now — your reviews go here.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <blockquote key={t.id || i} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-[#F5F5F5]/90">“{t.quote}”</p>
              {(t.client_name || t.role || t.region) && (
                <footer className="mt-3 text-xs text-[#F5F5F5]/60">{[t.client_name, t.role, t.region].filter(Boolean).join(' • ')}</footer>
              )}
            </blockquote>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/contact" className="inline-flex px-5 py-3 rounded-md text-black bg-[#00FF88] font-semibold">Hire Me</a>
        </div>
      </div>
    </main>
  )
}
