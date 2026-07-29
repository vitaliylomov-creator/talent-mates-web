'use client'

import { useEffect, useRef, useState } from 'react'
import { SESSION_CONFIG } from '@/lib/session-config'
import styles from './session.module.css'

// Progressive enhancement:
// 1. Server renders a working booking link (fallback state) — booking works
//    even if JS never runs.
// 2. On hydration, the observer waits until #book approaches the viewport
//    (rootMargin 400px) so we don't ship Cal.com's ~150KB before it's needed.
// 3. When triggered, we dynamic-import @calcom/embed-react. If the module
//    loads within 4 seconds, we mount the embed; otherwise the fallback stays.
type State = 'idle' | 'loading' | 'loaded' | 'failed'

export default function BookingEmbed() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<State>('idle')
  const [CalCmp, setCalCmp] = useState<React.ComponentType<{
    calLink: string
    style?: React.CSSProperties
    config?: Record<string, string>
  }> | null>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el || typeof window === 'undefined' || state !== 'idle') return

    let timeoutId: number | undefined
    let didLoad = false

    const startLoad = () => {
      if (didLoad) return
      didLoad = true
      setState('loading')

      timeoutId = window.setTimeout(() => {
        setState((s) => (s === 'loading' ? 'failed' : s))
      }, 4000)

      import('@calcom/embed-react')
        .then(async (mod) => {
          try {
            const cal = await mod.getCalApi()
            cal('ui', {
              theme: 'dark',
              styles: { branding: { brandColor: '#794DC6' } },
              hideEventTypeDetails: false,
            })
          } catch {
            // If ui setup fails, still try to render the embed.
          }
          if (timeoutId) window.clearTimeout(timeoutId)
          setCalCmp(() => mod.default)
          setState('loaded')
        })
        .catch(() => {
          if (timeoutId) window.clearTimeout(timeoutId)
          setState('failed')
        })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          startLoad()
          observer.disconnect()
        }
      },
      { rootMargin: '400px 0px' },
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [state])

  return (
    <div ref={rootRef} className={styles.bookEmbedContainer}>
      {state === 'loading' && (
        <div className={styles.bookEmbedLoading}>
          <span className={styles.bookEmbedLoadingDot} aria-hidden />
          Loading the calendar
        </div>
      )}

      {state === 'loaded' && CalCmp && (
        <CalCmp
          calLink={SESSION_CONFIG.calLink}
          style={{ width: '100%', height: '620px', overflow: 'scroll' }}
          config={{ theme: 'dark' }}
        />
      )}

      {(state === 'idle' || state === 'failed') && (
        <div className={styles.bookEmbedFallback}>
          <a
            href={SESSION_CONFIG.calDirectUrl}
            target="_blank"
            rel="noopener"
            className={styles.btnPrimary}
          >
            Book the session
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className={styles.bookEmbedFallbackNote}>
            Opens Cal.com in a new tab. Payment is taken when you book. Reschedule or cancel free up to 24 hours before.
          </p>
        </div>
      )}
    </div>
  )
}
