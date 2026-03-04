'use client'

import { useEffect, useRef, useState } from 'react'

const ROLES = ['PM', 'Builder', 'Founder', 'BDM']
const MUX_ID = 'Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleKey, setRoleKey] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
      setRoleKey((k) => k + 1)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    let ctx: { revert: () => void } | null = null
    const startAnimation = async () => {
      const gsap = (await import('gsap')).default
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.fromTo('.name-reveal', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2 }, 0.1)
        tl.fromTo('.blur-in', { opacity: 0, filter: 'blur(10px)', y: 20 }, { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1 }, 0.3)
      }, heroRef)
    }
    window.addEventListener('portfolio-ready', startAnimation, { once: true })
    return () => { window.removeEventListener('portfolio-ready', startAnimation); ctx?.revert() }
  }, [])

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline
          poster={`https://image.mux.com/${MUX_ID}/thumbnail.jpg?time=0`}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover">
          <source src={`https://stream.mux.com/${MUX_ID}/low.mp4`} type="video/mp4" />
        </video>

        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.12)' }} />

        <div className="absolute rounded-full pointer-events-none" style={{
          width: '70vw', height: '70vw', top: '-20%', left: '-15%',
          background: 'radial-gradient(circle, rgba(78,133,191,0.35) 0%, transparent 70%)',
          filter: 'blur(60px)', animation: 'blob-1 18s ease-in-out infinite',
        }} />
        <div className="absolute rounded-full pointer-events-none" style={{
          width: '55vw', height: '55vw', bottom: '-10%', right: '-10%',
          background: 'radial-gradient(circle, rgba(137,170,204,0.30) 0%, transparent 70%)',
          filter: 'blur(80px)', animation: 'blob-2 22s ease-in-out infinite 3s',
        }} />
        <div className="absolute rounded-full pointer-events-none" style={{
          width: '40vw', height: '40vw', top: '30%', left: '42%',
          background: 'radial-gradient(circle, rgba(30,80,140,0.22) 0%, transparent 70%)',
          filter: 'blur(50px)', animation: 'blob-3 14s ease-in-out infinite 7s',
        }} />

        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 65% 70% at 50% 45%, transparent 30%, rgba(0,0,0,0.55) 100%)',
          animation: 'hero-vignette-pulse 8s ease-in-out infinite',
        }} />

        <div className="absolute inset-x-0 bottom-0 h-56 pointer-events-none"
          style={{ background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl w-full">

        <p className="blur-in text-xs uppercase tracking-[0.3em] mb-8"
          style={{ color: 'rgba(245,245,245,0.65)' }}>
          Portfolio
        </p>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight mb-6"
          style={{ color: '#ffffff', textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}>
          Cody
        </h1>

        <p className="blur-in text-lg md:text-xl lg:text-2xl mb-10"
          style={{ color: 'rgba(245,245,245,0.80)', textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}>
          A{' '}
          <span key={roleKey} className="animate-fade-in font-display italic" style={{ color: '#ffffff' }}>
            {ROLES[roleIndex]}
          </span>{' '}
          based in Hanoi.
        </p>

        <p className="blur-in text-sm md:text-base leading-relaxed max-w-md mb-12"
          style={{ color: 'rgba(245,245,245,0.65)', textShadow: '0 1px 8px rgba(0,0,0,0.35)' }}>
          Web3 leader shipping products across DeFi, NFTs, and GameFi. Focused on growth, community, and the nuances that bring systems to life.
        </p>

        <div className="blur-in flex items-center gap-4 flex-wrap justify-center">
          <a href="#experience" className="group relative inline-flex rounded-full">
            <span className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ inset: '-2px', background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)' }} />
            <span className="relative z-10 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 group-hover:scale-105"
              style={{ background: '#ffffff', color: '#0a0a0a' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg)'; e.currentTarget.style.color = '#ffffff' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#0a0a0a' }}>
              See Works
            </span>
          </a>

          <a href="#contact" onClick={scrollToContact} className="group relative inline-flex rounded-full">
            <span className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ inset: '-2px', background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)' }} />
            <span className="relative z-10 rounded-full px-7 py-3.5 text-sm font-medium border transition-all duration-300"
              style={{ background: 'rgba(10,10,10,0.65)', color: '#ffffff', borderColor: 'rgba(245,245,245,0.25)', backdropFilter: 'blur(8px)' }}>
              Reach out...
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'rgba(245,245,245,0.45)' }}>SCROLL</span>
        <div className="relative w-px h-10 overflow-hidden" style={{ background: 'rgba(245,245,245,0.2)' }}>
          <div className="absolute inset-x-0 top-0 h-1/2 animate-scroll-down" style={{ background: 'rgba(245,245,245,0.8)' }} />
        </div>
      </div>
    </section>
  )
}
