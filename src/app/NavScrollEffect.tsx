'use client'

import { useEffect } from 'react'

type Props = {
  /** id of the <nav> element to toggle the class on */
  navId: string
  /** CSS-Modules-hashed class added once scrollY passes the threshold */
  scrolledClass: string
  /** scroll threshold in px (default 80) */
  threshold?: number
}

/**
 * Toggles `scrolledClass` on `#navId` once the page scrolls past `threshold`.
 * Renders no DOM — pure side-effect. Lets the homepage's <nav> stay in the
 * Server Component while the scroll-driven background swap stays client-side.
 */
export default function NavScrollEffect({ navId, scrolledClass, threshold = 80 }: Props) {
  useEffect(() => {
    const nav = document.getElementById(navId)
    if (!nav || !scrolledClass) return

    const onScroll = () => {
      nav.classList.toggle(scrolledClass, window.scrollY > threshold)
    }
    onScroll() // set initial state on hydration

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [navId, scrolledClass, threshold])

  return null
}
