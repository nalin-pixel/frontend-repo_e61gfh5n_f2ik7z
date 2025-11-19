import { Routes, Route } from 'react-router-dom'
import App from './App'
import PortfolioPage from './components/Portfolio'
import ServicesPage from './components/Services'
import AboutPage from './components/About'
import TestimonialsPage from './components/Testimonials'
import ContactPage from './components/Contact'

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
