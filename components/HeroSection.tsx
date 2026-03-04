'use client'

import { useEffect, useRef, useState } from 'react'

const ROLES = ['PM', 'Builder', 'Founder', 'BDM']
const MUX_ID = 'Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleKey, setRoleKey] = useState(0)

  // Role cycling
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
      setRoleKey((k) => k + 1)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  // GSAP entrance animations — start only after loading screen finishes
  useEffect(() => {
    let ctx: { revert: () => void } | null = null

    const startAnimation = async () => {
      const gsap = (await import('gsap')).default
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo(
          '.name-reveal',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2 },
          0.1
        )

        tl.fromTo(
          '.blur-in',
          { opacity: 0, filter: 'blur(10px)', y: 20 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 1,
            stagger: 0.1,
          },
          0.3
        )
      }, heroRef)
    }

    // Listen for AppWrapper's signal that content is now visible
    window.addEventListener('portfolio-ready', startAnimation, { once: true })

    return () => {
      window.removeEventListener('portfolio-ready', startAnimation)
      ctx?.revert()
    }
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={`https://image.mux.com/${MUX_ID}/thumbnail.jpg?time=0`}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source
            src={`https://stream.mux.com/${MUX_ID}/low.mp4`}
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.20)' }} />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl w-full">
        {/* Eyebrow */}
        <p
          className="blur-in text-xs uppercase tracking-[0.3em] mb-8"
          style={{ color: 'var(--muted)' }}
        >
          WEB3 PORTFOLIO &apos;26
        </p>

        {/* Name */}
        <h1
          className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight mb-6"
          style={{ color: 'var(--text)' }}
        >
          Cody
        </h1>

        {/* Role sentence */}
        <p
          className="blur-in text-lg md:text-xl lg:text-2xl mb-10"
          style={{ color: 'var(--muted)' }}
        >
          A{' '}
          <span
            key={roleKey}
            className="animate-fade-in font-display italic"
            style={{ color: 'var(--text)' }}
          >
            {ROLES[roleIndex]}
          </span>{' '}
          based in Hanoi.
        </p>

        {/* Bio */}
        <p
          className="blur-in text-sm md:text-base leading-relaxed max-w-md mb-12"
          style={{ color: 'var(--muted)' }}
        >
          Web3 leader shipping products across DeFi, NFTs, and GameFi. Focused on growth, community, and the nuances that bring systems to life.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in flex items-center gap-4 flex-wrap justify-center">
          {/* See Works */}
          <a href="#experience" className="group relative inline-flex rounded-full">
            <span
              className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                inset: '-2px',
                background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
              }}
            />
            <span
              className="relative z-10 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 group-hover:scale-105"
              style={{
                background: 'var(--text)',
                color: 'var(--bg)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = 'var(--bg)'
                el.style.color = 'var(--text)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = 'var(--text)'
                el.style.color = 'var(--bg)'
              }}
            >
              See Works
            </span>
          </a>

          {/* Reach out */}
          <a
            href="mailto:codyethwork@gmail.com"
            className="group relative inline-flex rounded-full"
          >
            <span
              className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                inset: '-2px',
                background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
              }}
            />
            <span
              className="relative z-10 rounded-full px-7 py-3.5 text-sm font-medium border-2 transition-all duration-300"
              style={{
                background: 'var(--bg)',
                color: 'var(--text)',
                borderColor: 'var(--stroke)',
              }}
            >
              Reach out...
            </span>
          </a>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span
          className="text-xs uppercase tracking-[0.2em]"
          style={{ color: 'var(--muted)' }}
        >
          SCROLL
        </span>
        <div
          className="relative w-px h-10 overflow-hidden"
          style={{ background: 'var(--stroke)' }}
        >
          <div
            className="absolute inset-x-0 top-0 h-1/2 animate-scroll-down"
            style={{ background: 'var(--text)' }}
          />
        </div>
      </div>
    </section>
  )
}
