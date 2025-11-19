import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    payload.consent = !!payload.consent

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thanks — I’ll reply within 24 hours.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again or use WhatsApp/email.')
    }
  }

  const whatsappHref = `https://wa.me/0000000000?text=${encodeURIComponent('Hi Mohamad — I’m interested in UI Animation / Real Estate / Commercial Reels. Timeline: [X]. Budget: [Y].')}`

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-3">Let’s Build Your Next Video</h1>
        <p className="text-[#F5F5F5]/70 mb-10">Quick brief → clear plan → fast delivery.</p>

        <div className="grid md:grid-cols-5 gap-10">
          <form onSubmit={onSubmit} className="md:col-span-3 bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input name="name" required className="w-full bg-transparent border border-white/10 rounded px-3 py-2 outline-none focus:border-[#00E5FF]" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input name="email" type="email" required className="w-full bg-transparent border border-white/10 rounded px-3 py-2 outline-none focus:border-[#00E5FF]" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Company/Brand</label>
                <input name="company" className="w-full bg-transparent border border-white/10 rounded px-3 py-2 outline-none focus:border-[#00E5FF]" />
              </div>
              <div>
                <label className="block text-sm mb-1">Project Type</label>
                <select name="project_type" className="w-full bg-transparent border border-white/10 rounded px-3 py-2 outline-none focus:border-[#00E5FF]">
                  <option>UI Animation</option>
                  <option>Real Estate</option>
                  <option>Commercial Reels</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Budget Range</label>
                <input name="budget" className="w-full bg-transparent border border-white/10 rounded px-3 py-2 outline-none focus:border-[#00E5FF]" />
              </div>
              <div>
                <label className="block text-sm mb-1">Deadline</label>
                <input name="deadline" className="w-full bg-transparent border border-white/10 rounded px-3 py-2 outline-none focus:border-[#00E5FF]" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Project Details</label>
              <textarea name="details" rows="5" className="w-full bg-transparent border border-white/10 rounded px-3 py-2 outline-none focus:border-[#00E5FF]" />
            </div>
            <label className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" name="consent" defaultChecked className="accent-[#00FF88]" />
              I agree to be contacted regarding my project.
            </label>
            <div className="flex items-center gap-3 pt-2">
              <button className="px-4 py-2 rounded-md text-black bg-[#00FF88] font-semibold">Send Inquiry</button>
              <a href={whatsappHref} target="_blank" className="px-4 py-2 rounded-md border border-white/10 text-[#F5F5F5] hover:border-[#00E5FF]">WhatsApp</a>
            </div>
            {status && <div className="text-sm text-[#00FF88]">{status}</div>}
          </form>

          <aside className="md:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Direct Contact</h3>
              <ul className="space-y-2 text-sm text-[#F5F5F5]/80">
                <li>Email: <a href="mailto:hello@jamalo.studio" className="text-[#00E5FF]">hello@jamalo.studio</a></li>
                <li>WhatsApp: <a href={whatsappHref} target="_blank" className="text-[#00E5FF]">Start chat</a></li>
                <li>Instagram: <a href="https://instagram.com/jamalo.studio" target="_blank" className="text-[#00E5FF]">@jamalo.studio</a></li>
              </ul>
              <div className="mt-4 text-xs text-[#F5F5F5]/60">Available worldwide. Timezone overlap guaranteed.</div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
