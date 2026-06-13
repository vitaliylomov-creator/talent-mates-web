'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './sports-endorsements.module.css'

type Slide = {
  num: string
  kicker: string
  title: ReactNode
  sub: string
  bg: 'slide1' | 'slide2' | 'slide3' | 'slide4' | 'slide5'
}

const SLIDES: Slide[] = [
  {
    num: '01 — The shift',
    kicker: 'Sports Endorsements · by Talent Mates',
    title: (
      <>
        The next generation of athletes isn&rsquo;t choosing brands.
        <br />
        <em>Their advisors are.</em>
      </>
    ),
    sub: 'A new layer of trust now sits between every athlete, artist, and creator and the brands they wear. This is how a category partnership begins.',
    bg: 'slide1',
  },
  {
    num: '02 — The inversion',
    kicker: 'The race engineer principle',
    title: (
      <>
        In Formula 1, brands don&rsquo;t sponsor the driver.
        <br />
        <em>They sponsor the team.</em>
      </>
    ),
    sub: 'Talent Mates applies that principle across football, music, founders, and creators. The agent is the team.',
    bg: 'slide2',
  },
  {
    num: '03 — The agents',
    kicker: 'Four teams. One roster.',
    title: (
      <>
        MATE · MUSE · NORTH <em>· Content Engain.</em>
      </>
    ),
    sub: 'Athletes. Musicians. Founders. Creators. Four AI agents already inside the daily decisions of the people brands want to reach.',
    bg: 'slide3',
  },
  {
    num: '04 — The offer',
    kicker: 'Three tiers per agent',
    title: (
      <>
        Title. Category. <em>Launch.</em>
      </>
    ),
    sub: 'Title Partner — one brand per agent. Category Partner — three non-competing brands. Launch Partner — a single decisive moment.',
    bg: 'slide4',
  },
  {
    num: '05 — The invitation',
    kicker: 'By invitation · London',
    title: (
      <>
        Inaugural partnerships <em>open for 2026.</em>
      </>
    ),
    sub: 'A small group of category-leading brands will define the first season of this model. Conversations are open for the remainder of this window.',
    bg: 'slide5',
  },
]

const DURATION = 6500
const N = SLIDES.length

export default function HeroSlider() {
  const [idx, setIdx] = useState(0)
  const [progress, setProgress] = useState(0)
  const pausedRef = useRef(false)
  const touchStartRef = useRef(0)

  useEffect(() => {
    let raf = 0
    let elapsed = 0
    let lastTs = 0

    const tick = (ts: number) => {
      if (lastTs === 0) lastTs = ts
      const delta = ts - lastTs
      lastTs = ts
      if (!pausedRef.current) elapsed += delta

      const pct = Math.min(100, (elapsed / DURATION) * 100)
      setProgress(pct)

      if (elapsed >= DURATION) {
        setIdx((i) => (i + 1) % N)
        return
      }
      raf = requestAnimationFrame(tick)
    }

    setProgress(0)
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [idx])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % N)
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + N) % N)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const go = (n: number) => setIdx(((n % N) + N) % N)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].screenX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].screenX - touchStartRef.current
    if (Math.abs(dx) > 50) go(idx + (dx < 0 ? 1 : -1))
  }

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.slides}>
        {SLIDES.map((s, i) => (
          <article
            key={i}
            className={`${styles.slide} ${styles[s.bg]} ${i === idx ? styles.slideActive : ''}`}
          >
            <div className={styles.slideInner}>
              <div className={styles.slideNum}>{s.num}</div>
              <div className={styles.slideKicker}>{s.kicker}</div>
              <h1 className={styles.slideTitle}>{s.title}</h1>
              <p className={styles.slideSub}>{s.sub}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.scrollHint}>Scroll</div>

      <div className={styles.controls}>
        <div className={styles.counter}>
          <span className={styles.counterCurrent}>{String(idx + 1).padStart(2, '0')}</span>
          <span className={styles.counterSep}>/</span>
          <span>{String(N).padStart(2, '0')}</span>
        </div>

        <div className={styles.dots}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => go(i)}
            />
          ))}
        </div>

        <div className={styles.arrows}>
          <button type="button" className={styles.arrow} aria-label="Previous slide" onClick={() => go(idx - 1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button type="button" className={styles.arrow} aria-label="Next slide" onClick={() => go(idx + 1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
