'use client'

import { useEffect } from 'react'

type Props = {
  /** The CSS-Modules-hashed class assigned to elements that should reveal on scroll. */
  revealClass: string
  /** The CSS-Modules-hashed class that, when added, transitions the element into view. */
  visibleClass: string
}

/**
 * Adds the `visibleClass` to every element matching `revealClass` once it
 * intersects the viewport. Renders no DOM of its own — pure side-effect.
 *
 * The class strings come from `styles.reveal` / `styles.visible` in the
 * parent server component so the hashed names line up with the CSS module.
 */
export default function ScrollReveal({ revealClass, visibleClass }: Props) {
  useEffect(() => {
    if (!revealClass || !visibleClass) return

    const elements = document.getElementsByClassName(revealClass)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )

    Array.from(elements).forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [revealClass, visibleClass])

  return null
}
