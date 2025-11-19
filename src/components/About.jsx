export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-3">About Mohamad Jamalo</h1>
        <p className="text-[#F5F5F5]/70 mb-10 max-w-3xl">Middle Eastern video editor. Global delivery. Fluent communication.</p>

        <section className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Story</h3>
              <p className="text-[#F5F5F5]/80">I craft fast, modern edits built to convert. With a background across product motion, real estate, and commercial spots, I blend design thinking with cinematic rhythm. Clear structure, clean type, bold pacing — and no wasted frames.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Philosophy</h3>
              <p className="text-[#F5F5F5]/80">Editing is design in motion. I focus on clarity, momentum, and impact — every cut should guide the viewer to the next decision.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <ul className="list-disc list-inside text-[#F5F5F5]/80">
                <li>5+ years editing across global markets</li>
                <li>Specializing in UI motion, property films, and vertical ads</li>
                <li>Comfortable with brand systems and product narratives</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Why Work With Me</h3>
              <ul className="list-disc list-inside text-[#F5F5F5]/80">
                <li>Sales-focused creative</li>
                <li>On-time delivery</li>
                <li>Seamless English communication</li>
                <li>Consistent, premium look</li>
                <li>Collaborative and proactive</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
