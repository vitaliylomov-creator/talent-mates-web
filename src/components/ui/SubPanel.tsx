'use client'

import Link from 'next/link'
import { NavSection } from '@/lib/navigation'
import styles from './SubPanel.module.css'

type Props = {
  section: NavSection
  isOpen: boolean
}

export default function SubPanel({ section, isOpen }: Props) {
  return (
    <div
      className={`${styles.panel} ${isOpen ? styles.open : ''}`}
      id={`panel-${section.id}`}
      aria-hidden={!isOpen}
    >
      <div className={styles.label}>{section.label}</div>
      <ul className={styles.list}>
        {section.items.map((item, i) => (
          <li
            key={item.href}
            className={styles.item}
            style={isOpen ? { animationDelay: `${0.10 + i * 0.07}s` } : undefined}
          >
            <Link href={item.href} className={styles.link}>
              <span className={styles.linkText}>{item.label}</span>
              {item.badge && (
                <span className={styles.badge}>
                  {item.badge.pulse && <span className={styles.badgeDot} />}
                  {item.badge.text}
                </span>
              )}
              <span className={styles.arrow} aria-hidden>→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
