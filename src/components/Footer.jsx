export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-[#0A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-[#F5F5F5]/80">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-[#7B3FFF] to-[#00E5FF]" />
            <span className="font-semibold text-[#F5F5F5]">Mohamad Jamalo</span>
          </div>
          <p className="text-sm">Cinematic, modern, sales-focused editing. UI animation, real estate films, and commercial reels. Available worldwide.</p>
        </div>
        <div>
          <h4 className="text-[#F5F5F5] font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hello@jamalo.studio" className="hover:text-[#00E5FF]">hello@jamalo.studio</a></li>
            <li><a href="https://wa.me/0000000000" className="hover:text-[#00E5FF]">WhatsApp</a></li>
            <li><a href="https://instagram.com/jamalo.studio" className="hover:text-[#00E5FF]">Instagram @jamalo.studio</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#F5F5F5] font-semibold mb-3">Availability</h4>
          <p className="text-sm">Fast turnarounds. English communication. Middle Eastern & global clients. Timezone overlap guaranteed.</p>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-[#F5F5F5]/50">© {new Date().getFullYear()} Mohamad Jamalo. All rights reserved.</div>
    </footer>
  )
}
