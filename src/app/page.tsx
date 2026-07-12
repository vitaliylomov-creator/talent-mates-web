import type { Metadata } from 'next'
import Link from 'next/link'
import CyclingHero from './CyclingHero'
import NavScrollEffect from './NavScrollEffect'
import styles from './page.module.css'

// ─── DESTINATIONS ───────────────────────────────────────
// All live entities — same convention as the rest of the site:
// internal Next.js routes for pages we host on talent-mates.com,
// external <a rel="noopener"> for apps on app.talent-mates.com.
const MATE_AUTH      = 'https://app.talent-mates.com/mate-pro-auth.html?role=agent'
const MUSE_AUTH      = 'https://app.talent-mates.com/muse-auth.html'
const CREATORS_AUTH  = 'https://app.talent-mates.com/magnetism.html'
const FIBONACCI_AUTH = 'https://app.talent-mates.com/fibonacci.html'

// ─── METADATA ───────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Talent Mates — The race engineer for talent',
  description:
    'Talent Mates — the race engineer for talent. London · 2026. Four agents, one operating principle. Built not to play — but to prepare the ones who do.',
  alternates: { canonical: 'https://talent-mates.com' },
  openGraph: {
    title: 'Talent Mates — The race engineer for talent',
    description: 'Four agents. One operating principle. London · 2026.',
    url: 'https://talent-mates.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talent Mates — The race engineer for talent',
    description: 'Four agents. One operating principle. London · 2026.',
  },
}

// ─── DIRECTORY (the seven doors) ────────────────────────
type Tile = {
  name: string
  cat: string
  href: string
  external: boolean
}

const TILES: Tile[] = [
  { name: 'MATE',                cat: 'Football',          href: MATE_AUTH,            external: true  },
  { name: 'MUSE',                cat: 'Music & artists',   href: MUSE_AUTH,            external: true  },
  { name: 'NORTH',               cat: 'Brand compass',     href: '/brand-consulting',  external: false },
  { name: 'Magnetism',           cat: 'The diary that answers', href: CREATORS_AUTH,   external: true  },
  { name: 'Representation',      cat: 'The edge in',       href: '/representation',    external: false },
  { name: 'Fibonacci',           cat: 'Diagnostic by MATE', href: FIBONACCI_AUTH,       external: true  },
  { name: 'Sport Endorsements',  cat: 'Title partnerships', href: '/sports-endorsements', external: false },
]

// ─── PAGE ───────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className={styles.page}>

      {/* NAV */}
      <nav id="homeNav" className={styles.nav}>
        <Link href="/" className={styles.navBrand}>
          <strong>Talent</strong> <span>Mates</span>
        </Link>
        <div className={styles.navRight}>
          <Link href="/about" className={styles.navLink}>About</Link>
          <a href="mailto:hello@talent-mates.com" className={styles.navLink}>Contact</a>
          <div className={styles.navMeta}>
            <span className={styles.navDot} aria-hidden />
            London · 2026
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroStage}>
          <div className={styles.heroEyebrow}>Talent Mates · The race engineer for talent</div>

          <h1 className={styles.heroTitle}>
            The race engineer
            <span className={styles.heroTitleLine2}>
              for <CyclingHero />.
            </span>
          </h1>

          <p className={styles.heroSub}>
            Four agents. <em>One operating principle.</em> Built not to play — but to prepare the ones who do.
          </p>
        </div>

        {/* DIRECTORY — seven doors */}
        <div className={styles.directory}>
          <div className={styles.directoryLabel}>The roster · seven doors</div>
          <div className={styles.directoryGrid}>
            {TILES.map((t) =>
              t.external ? (
                <a key={t.name} href={t.href} className={styles.tile} rel="noopener">
                  <div className={styles.tileName}>{t.name}</div>
                  <div className={styles.tileCat}>{t.cat}</div>
                  <div className={styles.tileArrow} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ) : (
                <Link key={t.name} href={t.href} className={styles.tile}>
                  <div className={styles.tileName}>{t.name}</div>
                  <div className={styles.tileCat}>{t.cat}</div>
                  <div className={styles.tileArrow} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerRow}>
          <div className={styles.footerLinks}>
            <Link href="/about" className={styles.footerLink}>About</Link>
            <a href={MATE_AUTH} className={styles.footerLink} rel="noopener">MATE AI</a>
            <Link href="/representation" className={styles.footerLink}>Representation</Link>
            <Link href="/sports-endorsements" className={styles.footerLink}>Endorsements</Link>
            <a href="mailto:hello@talent-mates.com" className={styles.footerLink}>Contact</a>
          </div>
          <div className={styles.footerSocials}>
            <a
              href="https://www.youtube.com/@TalentMates-AI"
              className={styles.footerSocial}
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://x.com/Talent_Mates"
              className={styles.footerSocial}
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/talent-mates-limited"
              className={styles.footerSocial}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.footerMeta}>
          <div className={styles.footerBrand}>© 2026 Talent Mates Limited · London · Company No. 17263751</div>
          <div className={styles.footerContact}>hello@talent-mates.com · invest@talent-mates.com</div>
        </div>
      </footer>

      {/* Toggle .navScrolled on #homeNav once we pass 80px */}
      <NavScrollEffect navId="homeNav" scrolledClass={styles.navScrolled} />
    </div>
  )
}
