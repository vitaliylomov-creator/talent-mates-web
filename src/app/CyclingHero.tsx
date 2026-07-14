import styles from './page.module.css'

// Single-world hero link. Slot sits inside the H1 — "The race engineer for [X]."
const MATE_URL = 'https://app.talent-mates.com/mate-pro-auth.html?role=agent'

export default function CyclingHero() {
  return (
    <a href={MATE_URL} rel="noopener" className={styles.cycleWord}>
      football
    </a>
  )
}
