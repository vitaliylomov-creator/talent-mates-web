'use client'

import { useEffect, useState } from 'react'
import styles from './session.module.css'

type Props = {
  price: number
}

export default function StickyMobileCTA({ price }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const threshold = () => window.innerHeight * 0.9
    const onScroll = () => setVisible(window.scrollY > threshold())

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className={`${styles.stickyCta} ${visible ? styles.stickyCtaVisible : ''}`}>
      <div className={styles.stickyCtaInner}>
        <div className={styles.stickyCtaText}>
          <span className={styles.stickyCtaLabel}>Book · €{price}</span>
          <span className={styles.stickyCtaMeta}>60 minutes · Founder-led</span>
        </div>
        <a href="#book" className={styles.stickyCtaBtn}>
          Book
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  )
}
