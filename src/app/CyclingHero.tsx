'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

// Four worlds. Each cycles every ~4s with a 500ms blur+fade. Hover pauses.
// Click navigates to that world's destination (mix of internal Next.js routes
// and external app subdomain pages).
const WORDS = [
  { text: 'football', href: 'https://app.talent-mates.com/mate-pro-auth.html?role=agent', external: true  },
  { text: 'music',    href: 'https://app.talent-mates.com/muse-auth.html',     external: true  },
  { text: 'brand',    href: '/brand-consulting',                                external: false },
  { text: 'culture',  href: 'https://app.talent-mates.com/creators-auth.html', external: true  },
] as const

const CYCLE_MS = 4000 // total visible time per word
const FADE_MS  = 500  // blur+fade duration on each side

export default function CyclingHero() {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)
  const pausedRef = useRef(false)

  useEffect(() => {
    const cycle = () => {
      if (pausedRef.current) return
      setFading(true)
      // Swap word + clear fade after the fade-out animation lands.
      window.setTimeout(() => {
        setIdx((i) => (i + 1) % WORDS.length)
        setFading(false)
      }, FADE_MS)
    }
    const interval = window.setInterval(cycle, CYCLE_MS)
    return () => window.clearInterval(interval)
  }, [])

  const word = WORDS[idx]
  const className = `${styles.cycleWord} ${fading ? styles.cycleWordFading : ''}`

  return (
    <a
      href={word.href}
      rel={word.external ? 'noopener' : undefined}
      className={className}
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
      onFocus={()      => { pausedRef.current = true }}
      onBlur={()       => { pausedRef.current = false }}
    >
      {word.text}
    </a>
  )
}
