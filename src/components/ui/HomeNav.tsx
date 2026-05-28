'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { NAV_SECTIONS, BOTTOM_LINKS } from '@/lib/navigation'
import SubPanel from './SubPanel'
import styles from './HomeNav.module.css'

const CHEVRON = (
  <svg className={styles.chevron} viewBox="0 0 20 20" fill="none" aria-hidden>
    <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="1.3"
          strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function HomeNav() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const navRef    = useRef<HTMLUListElement>(null)
  const panelsRef = useRef<HTMLDivElement>(null)

  // Toggle panel
  const toggle = useCallback((id: string) => {
    setActiveId(prev => (prev === id ? null : id))
  }, [])

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        !navRef.current?.contains(target) &&
        !panelsRef.current?.contains(target)
      ) {
        setActiveId(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveId(null)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Mobile: set panel top = bottom of last nav item
  useEffect(() => {
    const align = () => {
      if (window.innerWidth > 960) return
      if (!navRef.current) return
      const items = navRef.current.querySelectorAll('li')
      const last  = items[items.length - 1]
      if (!last) return
      const bottom = last.getBoundingClientRect().bottom + 16
      document.querySelectorAll<HTMLElement>('[data-sub-panel]').forEach(p => {
        p.style.top = `${bottom}px`
      })
    }

    // Run after splash finishes (~1.4s) and on resize
    const t1 = setTimeout(align, 1400)
    const t2 = setTimeout(align, 2200) // safety second pass
    window.addEventListener('resize', align)
    return () => {
      clearTimeout(t1); clearTimeout(t2)
      window.removeEventListener('resize', align)
    }
  }, [])

  // Re-align when panel opens on mobile
  useEffect(() => {
    if (activeId && window.innerWidth <= 960 && navRef.current) {
      const items  = navRef.current.querySelectorAll('li')
      const last   = items[items.length - 1]
      if (last) {
        const bottom = last.getBoundingClientRect().bottom + 16
        document.querySelectorAll<HTMLElement>('[data-sub-panel]').forEach(p => {
          p.style.top = `${bottom}px`
        })
      }
    }
  }, [activeId])

  return (
    <nav className={styles.wrap}>
      <div className={styles.row}>

        {/* PRIMARY MENU */}
        <ul
          ref={navRef}
          className={`${styles.primary} ${activeId ? styles.hasActive : ''}`}
        >
          {NAV_SECTIONS.map((section, i) => (
            <li
              key={section.id}
              className={styles.item}
              style={{ animationDelay: `${0.06 + i * 0.10}s` }}
            >
              <button
                className={`${styles.trigger} ${activeId === section.id ? styles.triggerActive : ''}`}
                onClick={() => toggle(section.id)}
                aria-expanded={activeId === section.id}
                aria-controls={`panel-${section.id}`}
              >
                {section.label}
                {CHEVRON}
              </button>
            </li>
          ))}
        </ul>

        {/* SUB PANELS — absolute, anchored right of nav text */}
        <div ref={panelsRef}>
          {NAV_SECTIONS.map(section => (
            <div key={section.id} data-sub-panel>
              <SubPanel
                section={section}
                isOpen={activeId === section.id}
              />
            </div>
          ))}
        </div>

      </div>

      {/* BOTTOM UTILITY LINKS */}
      <nav
        className={styles.bottomNav}
        aria-label="Site links"
      >
        {BOTTOM_LINKS.map(link => (
          <Link key={link.href} href={link.href} className={styles.bottomLink}>
            {link.label}
          </Link>
        ))}
      </nav>
    </nav>
  )
}
