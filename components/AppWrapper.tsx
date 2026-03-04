'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './LoadingScreen'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  const handleComplete = useCallback(() => {
    setIsLoading(false)
    // Signal hero to start GSAP entrance animations once content becomes visible
    window.dispatchEvent(new CustomEvent('portfolio-ready'))
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen onComplete={handleComplete} />}</AnimatePresence>
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-out',
        }}
      >
        {children}
      </div>
    </>
  )
}
