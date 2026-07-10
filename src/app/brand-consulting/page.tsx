import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSlider from './HeroSlider'
import styles from './brand-consulting.module.css'

const MATE_AUTH      = 'https://app.talent-mates.com/mate-auth.html'
const CREATORS_AUTH  = 'https://app.talent-mates.com/creators-auth.html'

// ─── METADATA ───────────────────────────────────────────
export const metadata: Metadata = {
  title: 'NORTH — The brand compass | Talent Mates',
  description:
    'NORTH — the brand compass for founders. A consulting agent that synthesises Ries, Trout, Dunford, Neumeier, Godin, Sinek, Miller, Sharp, Sutherland and Kotler. By Talent Mates. Private beta in London.',
  alternates: { canonical: 'https://talent-mates.com/brand-consulting' },
  openGraph: {
    title: 'NORTH — The brand compass',
    description:
      'Most founders don’t have a brand problem. They have a clarity problem. NORTH is the consulting agent that fixes it.',
    url: 'https://talent-mates.com/brand-consulting',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

// ─── DATA ───────────────────────────────────────────────
const MODES = [
  { n: '01', t: 'Compass\nCheck',     d: 'Drop the artefact. Get a verdict and three precise edits.' },
  { n: '02', t: 'Positioning\nLab',   d: 'Category, ICP, white space. Where the hardest call is made.' },
  { n: '03', t: 'Naming\nForge',      d: 'Three candidates. Five tests. One recommendation.' },
  { n: '04', t: 'Story\nBuild',       d: 'Decks, pages, posts. Arcs that hold in the boardroom and the feed.' },
  { n: '05', t: 'Voice\nCodex',       d: 'Tone, vocabulary, banned words. The manual every writer obeys.' },
] as const

const STRATEGISTS = [
  { name: 'Ries & Trout',     tag: 'Positioning' },
  { name: 'April Dunford',    tag: 'SaaS Strategy' },
  { name: 'Marty Neumeier',   tag: 'Brand Gap' },
  { name: 'Seth Godin',       tag: 'Tribes' },
  { name: 'Simon Sinek',      tag: 'Why' },
  { name: 'Donald Miller',    tag: 'StoryBrand' },
  { name: 'Byron Sharp',      tag: 'Evidence' },
  { name: 'Rory Sutherland',  tag: 'Behavioural' },
  { name: 'Philip Kotler',    tag: 'Foundations' },
] as const

const EARLY_ACCESS_MAILTO =
  'mailto:hello@talent-mates.com?subject=NORTH%20early%20access&body=Hi%20Talent%20Mates%2C%0A%0AI%27d%20like%20early%20access%20to%20NORTH.%0A%0AWhat%20I%27m%20building%3A%0A%0AThe%20brand%20decision%20I%27m%20stuck%20on%3A%0A%0AThanks%2C%0A'

// ─── PAGE ───────────────────────────────────────────────
export default function BrandConsultingPage() {
  return (
    <div className={styles.page}>

      {/* NAV */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.navBrand}>
          <strong>Talent</strong> <span>Mates</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/about" className={styles.navLink}>About</Link>
          <a href={MATE_AUTH} className={styles.navLink} rel="noopener">MATE AI</a>
          <Link href="/brand-consulting" className={`${styles.navLink} ${styles.navLinkActive}`}>NORTH</Link>
          <a href={CREATORS_AUTH} className={styles.navLink} rel="noopener">Magnetism</a>
          <a href="mailto:hello@talent-mates.com" className={styles.navLink}>Contact</a>
        </div>
        <a href="#cta" className={styles.navCta}>Early access</a>
      </nav>

      {/* HERO SLIDER (client) */}
      <HeroSlider />

      {/* MODES */}
      <section className={styles.modes}>
        <div className={styles.modesInner}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.sectionEyebrow}>The work</div>
              <h2 className={styles.sectionH}>
                Five <em>decisive</em> ways<br />to work with NORTH.
              </h2>
            </div>
          </div>

          <div className={styles.modesGrid}>
            {MODES.map((m) => (
              <div key={m.n} className={styles.modeCard}>
                <div className={styles.modeNum}>{m.n}</div>
                <div className={styles.modeBody}>
                  <div className={styles.modeTitle}>
                    {m.t.split('\n').map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                  <div className={styles.modeDesc}>{m.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYNTHESIS MARQUEE */}
      <section className={styles.synthesis}>
        <div className={styles.synthesisHead}>
          <div className={styles.sectionEyebrow}>Synthesis</div>
          <h2 className={styles.sectionH}>The minds you&rsquo;d never afford <em>to hire.</em></h2>
        </div>

        <div className={styles.marqueeWrap}>
          {/* Doubled for seamless infinite scroll */}
          <div className={styles.marquee}>
            {[...STRATEGISTS, ...STRATEGISTS].map((s, i) => (
              <span key={i} style={{ display: 'contents' }}>
                <div className={styles.strategist}>
                  <span className={styles.strategistName}>{s.name}</span>
                  <span className={styles.strategistTag}>{s.tag}</span>
                </div>
                <span className={styles.strategistSep} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} id="cta">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>NORTH is in <em>private beta.</em></h2>
          <p className={styles.ctaBody}>
            A small group of founders, brand leads, and studios are onboarding this quarter.
            Send a short note about what you&rsquo;re building — we reply within two working days.
          </p>
          <a href={EARLY_ACCESS_MAILTO} className={styles.ctaBtn}>
            Request early access
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>© 2026 Talent Mates Limited · London</div>
        <div className={styles.footerLinks}>
          <Link href="/about" className={styles.footerLink}>About</Link>
          <a href={MATE_AUTH} className={styles.footerLink} rel="noopener">MATE AI</a>
          <Link href="/brand-consulting" className={styles.footerLink}>NORTH</Link>
          <a href={CREATORS_AUTH} className={styles.footerLink} rel="noopener">Magnetism</a>
          <a href="mailto:hello@talent-mates.com" className={styles.footerLink}>Contact</a>
        </div>
      </footer>
    </div>
  )
}
