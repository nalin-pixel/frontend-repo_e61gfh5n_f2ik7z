export default function ServicesPage() {
  const services = [
    {
      title: 'UI Animation (App & Website Promos)',
      deliverables: ['15–60s promo video', 'Custom motion graphics', 'Brand-aligned UI sequences', 'Sound design', 'Subtitles'],
      process: ['Brief', 'Script/Outline', 'Styleframes', 'Motion', 'Edit', 'Revisions', 'Delivery'],
      timeline: '3–10 days',
    },
    {
      title: 'Real Estate Cinematic',
      deliverables: ['45–120s property film', 'Title cards', 'Color grade', 'Agent logo/branding', 'Social cutdowns'],
      process: ['Asset review', 'Edit plan', 'Rough cut', 'Color/style', 'Final master + social versions'],
      timeline: '2–7 days',
    },
    {
      title: 'Commercial Reels',
      deliverables: ['10–30s vertical reels', 'Hooks & offer overlays', 'Kinetic type', 'Sound design', 'Multi-aspect ratios'],
      process: ['Brief', 'Hook strategy', 'Edit', 'A/B variants', 'Delivery'],
      timeline: '2–5 days',
    },
  ]

  const packages = [
    {
      tier: 'Starter',
      bestFor: 'First-time projects, single asset',
      includes: ['1 video (up to 30–60s)', 'Basic motion', 'Licensed music', '1 revision round', 'Social export'],
      turnaround: '3–5 days',
    },
    {
      tier: 'Pro',
      bestFor: 'Brands needing multiple cutdowns',
      includes: ['1 main video + 2–3 cutdowns', 'Advanced motion', 'Subtitles', 'Color grade', '2 revision rounds', 'Priority communication'],
      turnaround: '5–10 days',
    },
    {
      tier: 'Premium',
      bestFor: 'Launch campaigns and premium properties',
      includes: ['Creative direction', 'Script support', 'Motion system', '3–5 deliverables', 'Multi-platform exports', '3 revisions', 'Project management'],
      turnaround: '7–14 days',
    },
  ]

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-3">Services</h1>
        <p className="text-[#F5F5F5]/70 mb-10">Sales-focused editing with modern motion and clean structure.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((s) => (
            <section key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-4">{s.title}</h3>
              <div className="text-sm mb-3">
                <h4 className="text-[#00E5FF] font-medium mb-1">Deliverables</h4>
                <ul className="list-disc list-inside text-[#F5F5F5]/80">
                  {s.deliverables.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
              <div className="text-sm mb-3">
                <h4 className="text-[#00E5FF] font-medium mb-1">Process</h4>
                <p className="text-[#F5F5F5]/80">{s.process.join(' → ')}</p>
              </div>
              <div className="text-sm">
                <h4 className="text-[#00E5FF] font-medium mb-1">Timeline</h4>
                <p className="text-[#F5F5F5]/80">{s.timeline}</p>
              </div>
            </section>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6">Packages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <section key={p.tier} className="relative bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-br from-[#7B3FFF]/10 to-[#00E5FF]/10 opacity-0 hover:opacity-100 transition" />
              <h3 className="relative font-semibold text-xl mb-1">{p.tier}</h3>
              <p className="relative text-sm text-[#F5F5F5]/70 mb-3">{p.bestFor}</p>
              <ul className="relative list-disc list-inside text-sm text-[#F5F5F5]/80 mb-4">
                {p.includes.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <div className="relative text-sm text-[#F5F5F5]/80 mb-4">Turnaround: {p.turnaround}</div>
              <a href="/contact" className="relative inline-flex px-4 py-2 rounded-md text-black bg-[#00FF88] font-semibold">Book {p.tier}</a>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
