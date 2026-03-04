'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WORDS = ['Design', 'Create', 'Inspire']
const DURATION_MS = 2700
const WORD_INTERVAL_MS = 900

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const startRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)
  const doneRef = useRef(false)

  // Counter via rAF
  useEffect(() => {
    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts
      const elapsed = ts - startRef.current
      const progress = Math.min(elapsed / DURATION_MS, 1)
      setCount(Math.floor(progress * 100))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setCount(100)
        if (!doneRef.current) {
          doneRef.current = true
          setTimeout(onComplete, 400)
        }
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [onComplete])

  // Word rotation
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length)
    }, WORD_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const display = String(count).padStart(3, '0')

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'var(--bg)' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Top-left label */}
      <motion.span
        className="absolute top-8 left-8 md:top-12 md:left-12 text-xs md:text-sm uppercase tracking-[0.3em]"
        style={{ color: 'var(--muted)' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Portfolio
      </motion.span>

      {/* Center word */}
      <div className="pointer-events-none select-none">
        <AnimatePresence mode="wait">
          <motion.span
            key={WORDS[wordIndex]}
            className="block text-4xl md:text-6xl lg:text-7xl font-display italic"
            style={{ color: 'rgba(245,245,245,0.8)' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom-right counter */}
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-6xl md:text-8xl lg:text-9xl font-display tabular-nums leading-none select-none"
        style={{ color: 'var(--text)' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {display}
      </motion.div>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: 'rgba(31,31,31,0.5)' }}
      >
        <motion.div
          className="h-full origin-left"
          style={{
            background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: DURATION_MS / 1000, ease: 'linear' }}
        />
      </div>
    </motion.div>
  )
}
