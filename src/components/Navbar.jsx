import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'text-[#F5F5F5]/80 hover:text-[#00E5FF] transition-colors'
  const active = 'text-[#00E5FF]'

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0A]/70 border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-[#7B3FFF] to-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.5)]" />
          <span className="text-[#F5F5F5] font-semibold tracking-wide">Mohamad Jamalo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="ml-2 px-4 py-2 rounded-md text-sm font-semibold text-black bg-[#00FF88] hover:opacity-90 transition-colors">Hire Me</Link>
        </nav>

        <button className="md:hidden text-[#F5F5F5]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4 bg-[#0A0A0A]/95">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-md text-sm font-semibold text-black bg-[#00FF88] w-max">Hire Me</Link>
          </div>
        </div>
      )}
    </header>
  )
}
