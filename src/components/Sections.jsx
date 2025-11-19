import { PrimaryButton, SecondaryButton } from './CTAButtons'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#00E5FF]/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#7B3FFF]/10 blur-3xl" />
      </div>
      <div className="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <p className="text-[#00E5FF] text-sm tracking-[0.2em] uppercase mb-6">Cinematic • Modern • Tech</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight mb-6">Cinematic, High-Impact Editing That Sells</h1>
        <p className="text-[#F5F5F5]/70 text-lg md:text-xl max-w-3xl mx-auto mb-10">I’m Mohamad Jamalo — a Middle Eastern video editor crafting fast, modern visuals for apps, real estate, and brands.</p>
        <div className="flex items-center justify-center gap-4">
          <PrimaryButton href="/contact">Hire Me</PrimaryButton>
          <SecondaryButton href="/portfolio">View Portfolio</SecondaryButton>
        </div>
        <div className="mt-10 text-[#F5F5F5]/50 text-sm">Trusted by founders, agents, and brands worldwide.</div>
      </div>
    </section>
  )
}

export function Intro() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
        <p className="text-[#F5F5F5] text-lg">I build attention. Sharp pacing, clean structure, and bold motion design that turns views into action. Seamless communication. Fast delivery. Global-ready.</p>
      </div>
    </section>
  )
}

export function Specialties() {
  const cards = [
    {
      title: 'UI Animation',
      desc: 'App & website promos with sleek motion, product storytelling, and crisp interface choreography.',
    },
    {
      title: 'Real Estate Cinematic',
      desc: 'Property films that feel premium — stabilized movement, dynamic pacing, and architectural focus.',
    },
    {
      title: 'Commercial Reels',
      desc: 'High-conversion vertical ads for restaurants, stores, and brands. Hook fast. Sell faster.',
    },
  ]
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-10">Specialties</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#00E5FF] transition">
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#00E5FF]/10 to-[#7B3FFF]/10 transition" />
            <h3 className="relative text-[#F5F5F5] font-semibold text-xl mb-2">{c.title}</h3>
            <p className="relative text-[#F5F5F5]/70 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function FeaturedCTA() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-[#7B3FFF]/20 to-[#00E5FF]/20 border border-white/10 rounded-2xl p-10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-4">Ready to Lift Your Brand with Cinematic Editing?</h3>
        <p className="text-[#F5F5F5]/70 mb-6">Clear plan. Fast delivery. Premium results.</p>
        <PrimaryButton href="/contact">Start Your Project</PrimaryButton>
      </div>
    </section>
  )
}
