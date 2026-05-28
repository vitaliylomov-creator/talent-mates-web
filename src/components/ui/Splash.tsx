'use client'

import { useEffect, useRef } from 'react'
import styles from './Splash.module.css'

type Props = {
  onComplete: () => void
}

export default function Splash({ onComplete }: Props) {
  const markRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Trigger exit animation on the mark
      markRef.current?.classList.add(styles.exit)

      setTimeout(() => {
        // Fade out the whole splash
        wrapRef.current?.classList.add(styles.done)
        setTimeout(onComplete, 500)
      }, 380)
    }, 900)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div ref={wrapRef} className={styles.splash}>
      <div ref={markRef} className={styles.mark}>
        <div className={styles.ring}>
          <div className={styles.ringInner}>
            <div className={styles.ringDot} />
          </div>
        </div>
        <div className={styles.logoText}>
          <strong>Talent</strong> <span>Mates</span>
        </div>
      </div>
    </div>
  )
}
