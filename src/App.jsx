import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Hero, Intro, Specialties, FeaturedCTA } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Intro />
      <Specialties />
      <FeaturedCTA />
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/0000000000?text=${encodeURIComponent('Hi Mohamad — I’m interested in UI Animation / Real Estate / Commercial Reels. Timeline: [X]. Budget: [Y].')}`}
        className="fixed bottom-6 right-6 px-4 py-3 rounded-full bg-[#00FF88] text-black font-semibold shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:opacity-90"
        target="_blank"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default App
