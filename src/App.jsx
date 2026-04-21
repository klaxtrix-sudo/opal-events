import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

// Dedicated pages
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

import './index.css'

/** Shared layout used by all pages */
const PageLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

/** Homepage — all sections as teasers */
const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <main>
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <ContactForm />
    </main>
    <Footer />
  </>
)

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/services"  element={<PageLayout><ServicesPage /></PageLayout>} />
        <Route path="/about"     element={<PageLayout><AboutPage /></PageLayout>} />
        <Route path="/portfolio" element={<PageLayout><PortfolioPage /></PageLayout>} />
        <Route path="/contact"   element={<PageLayout><ContactPage /></PageLayout>} />
        <Route path="*"          element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
