'use client'

import { useEffect, useState } from 'react'

const NAV_LINKS = ['Home', 'About', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Update active link based on scroll position
  useEffect(() => {
    const sectionIds = ['contact', 'experience', 'about'] // reverse order: last match wins
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id.charAt(0).toUpperCase() + id.slice(1))
          }
        },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    // Reset to Home when near the top
    const onScroll = () => {
      if (window.scrollY < 100) setActive('Home')
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollTo = (id: string) => {
    setActive(id)
    if (id === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <div
        className={`inline-flex items-center rounded-full border border-white/10 px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-black/20' : ''
        }`}
        style={{ background: 'var(--surface)' }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('Home')}
          className="group relative w-9 h-9 rounded-full p-[2px] flex-shrink-0"
          style={{ background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)' }}
          aria-label="Home"
        >
          <div
            className="w-full h-full rounded-full flex items-center justify-center"
            style={{ background: 'var(--bg)' }}
          >
            <span
              className="text-[13px] font-display italic tracking-tighter transition-transform duration-200 group-hover:scale-110"
              style={{ color: 'var(--text)' }}
            >
              CY
            </span>
          </div>
        </button>

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 mx-2 bg-stroke/50" />

        {/* Nav links */}
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
              active === link
                ? 'text-text bg-stroke/50'
                : 'text-muted hover:text-text hover:bg-stroke/50'
            }`}
          >
            {link}
          </button>
        ))}

        {/* Divider */}
        <div className="hidden sm:block w-px h-5 mx-2 bg-stroke/50" />

        {/* Say hi button */}
        <div className="group relative inline-flex rounded-full">
          <span
            className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              inset: '-2px',
              background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
            }}
          />
          <a
            href="mailto:codyethwork@gmail.com"
            className="relative z-10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-muted hover:text-text transition-colors duration-200"
            style={{
              background: 'var(--surface)',
              backdropFilter: 'blur(12px)',
            }}
          >
            Say hi ↗
          </a>
        </div>
      </div>
    </nav>
  )
}
