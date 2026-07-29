import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import NavScrollEffect from '../NavScrollEffect'
import BookingEmbed from './BookingEmbed'
import StickyMobileCTA from './StickyMobileCTA'
import { SESSION_CONFIG, getSessionPricing } from '@/lib/session-config'
import styles from './session.module.css'

const MATE_AUTH = 'https://app.talent-mates.com/mate-pro-auth.html?role=agent'

export const metadata: Metadata = {
  title: 'Pathway Session — Talent Mates',
  description:
    'Sixty minutes with a football agent and UEFA-licensed coach. Where the player actually stands, three realistic next steps with dates, and the mistakes that cost a season.',
  alternates: { canonical: 'https://talent-mates.com/session' },
  openGraph: {
    title: 'Most families lose a year. Not to talent.',
    description: 'The Pathway Session — 60 minutes, a written pathway note, and fourteen days of MATE.',
    url: 'https://talent-mates.com/session',
    siteName: 'Talent Mates',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Most families lose a year. Not to talent.',
    description: 'The Pathway Session — 60 minutes with a football agent and UEFA-licensed coach.',
  },
}

const GET = [
  {
    n: '01',
    h: 'Sixty minutes',
    d: 'Player and parent, together on the call. Both need to hear the same thing.',
  },
  {
    n: '02',
    h: 'The Pathway Note',
    d: 'Written up and sent within 48 hours. Where he stands, three next steps with dates, what to avoid. Yours to take to any coach.',
  },
  {
    n: '03',
    h: 'Fourteen days of MATE',
    d: "Activated on the call. The questions that come up after we hang up don't wait for the next session.",
  },
  {
    n: '04',
    h: 'A follow-up',
    d: 'Day ten. One message. Did the thing we talked about actually happen.',
  },
] as const

const HOUR = [
  {
    time: '00–10',
    kicker: 'The read',
    h: 'Club, level, age, position',
    d: "Club, level, age, position, registration status, eligibility. Where he actually is — not where the highlight reel says he is.",
  },
  {
    time: '10–25',
    kicker: 'The map',
    h: 'The English pyramid, from here',
    d: 'How the English pyramid works above him. Where the windows are. Where he sits inside it today.',
  },
  {
    time: '25–40',
    kicker: 'Three doors',
    h: 'Three realistic routes',
    d: 'Three realistic routes for the next twelve months. With dates. Not motivation — a calendar.',
  },
  {
    time: '40–55',
    kicker: 'What not to do',
    h: 'The moves that cost a season',
    d: 'The moves that cost families a season. This is usually the part parents write down.',
  },
  {
    time: '55–60',
    kicker: 'What happens next',
    h: 'Where MATE fits, and Monday',
    d: 'Where MATE fits, and what to do on Monday.',
  },
] as const

const BOOK_IF = [
  'The player is 13–21 and playing regularly at academy, semi-pro or strong grassroots level',
  'You are in the UK or Europe, or planning a move here',
  "You want a straight answer about where he stands, even if it isn't the one you hoped for",
] as const

const DONT_BOOK_IF = [
  'You are looking for a trial to be arranged on the call. This is not representation.',
  'You want someone to confirm what you already believe',
  "The player won't be on the call. He has to hear it himself.",
] as const

const FAQ = [
  {
    q: 'Is this representation?',
    a: 'No. This is a development and pathway session. It is not agency representation, contract negotiation, or intermediary work, and nothing is signed on the call.',
  },
  {
    q: 'Will you get him a trial?',
    a: "Not on this call. You'll leave knowing which trials are realistic, when the windows open, and what has to be true before you knock.",
  },
  {
    q: 'Does the player have to be there?',
    a: 'Yes. Under 18, a parent or guardian must be on the call as well.',
  },
  {
    q: "What if we're not in the UK?",
    a: "Fine. Most families aren't yet. That's usually the reason for the call.",
  },
  {
    q: 'What language?',
    a: 'English or Ukrainian.',
  },
  {
    q: 'Can we reschedule?',
    a: 'Free up to 24 hours before.',
  },
  {
    q: 'What happens to our data?',
    a: "Only what's needed to run the session. Booking is in the parent's name. See the privacy notice.",
  },
] as const

export default function SessionPage() {
  const { remaining, foundingActive, currentPrice } = getSessionPricing()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://talent-mates.com/session#service',
        name: 'Pathway Session',
        serviceType: 'Football pathway consultation',
        provider: {
          '@type': 'Organization',
          name: 'Talent Mates Limited',
          url: 'https://talent-mates.com',
        },
        description:
          'Sixty minutes with a football agent and UEFA-licensed coach. A written pathway note within 48 hours. Fourteen days of MATE.',
        offers: {
          '@type': 'Offer',
          price: currentPrice,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: 'https://talent-mates.com/session',
        },
        areaServed: [
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Country', name: 'Ukraine' },
          { '@type': 'Place', name: 'Europe' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://talent-mates.com/session#faq',
        mainEntity: FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  }

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Reveal fallback: if JS never runs, unhide every .reveal element so
          content is still readable. Only takes effect when scripting is off. */}
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html: `.${styles.reveal}{opacity:1;transform:none;transition:none}`,
          }}
        />
      </noscript>

      {/* NAV */}
      <nav id="sessionNav" className={styles.nav}>
        <Link href="/" className={styles.navBrand}>
          <strong>Talent</strong> <span>Mates</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/about" className={styles.navLink}>About</Link>
          <a href={MATE_AUTH} className={styles.navLink} rel="noopener">MATE AI</a>
          <Link href="/representation" className={styles.navLink}>Representation</Link>
          <Link href="/sports-endorsements" className={styles.navLink}>Sport Endorsement</Link>
          <Link href="/session" className={`${styles.navLink} ${styles.navLinkActive}`}>Pathway Session</Link>
          <a href="mailto:hello@talent-mates.com" className={styles.navLink}>Contact</a>
        </div>
        <a href="#book" className={styles.navCta}>Book the session</a>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroEyebrow}>THE PATHWAY SESSION</div>
          <h1 className={styles.heroTitle}>
            Most families lose a year.
            <br />
            <em>Not to talent.</em>
          </h1>
          <p className={styles.heroLede}>
            They lose it because nobody told them how the window worked. Sixty minutes with a football agent and UEFA-licensed coach — where he actually stands, three realistic next steps with dates, and the mistakes that cost a season.
          </p>

          <div className={styles.heroPrice}>
            <span className={styles.heroPriceValue}>€{currentPrice}</span>
            <span className={styles.heroPriceMeta}>
              {foundingActive ? (
                <>
                  <span className={styles.heroPriceDot} aria-hidden />
                  founding rate · {remaining} of {SESSION_CONFIG.foundingTotal} remaining
                </>
              ) : (
                <>60 minutes · founder-led</>
              )}
            </span>
          </div>
          {foundingActive && (
            <div className={styles.heroPriceSub}>Goes to €{SESSION_CONFIG.standardPrice} after that.</div>
          )}

          <div className={styles.heroCtas}>
            <a href="#book" className={styles.btnPrimary}>
              Book the session
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#the-hour" className={styles.btnGhost}>
              What&rsquo;s in the hour
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className={styles.getSection}>
        <div className={styles.getInner}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <div>
              <div className={styles.sectionEyebrow}>WHAT YOU GET</div>
              <h2 className={styles.sectionH}>
                Four things. <em>All of them yours to keep.</em>
              </h2>
            </div>
          </div>
          <div className={`${styles.getGrid} ${styles.reveal} ${styles.revealDelay1}`}>
            {GET.map((c) => (
              <div key={c.n} className={styles.getCard}>
                <div className={styles.getCardNum}>{c.n}</div>
                <h3 className={styles.getCardH}>{c.h}</h3>
                <p className={styles.getCardD}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE HOUR */}
      <section id="the-hour" className={styles.hourSection}>
        <div className={styles.hourInner}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <div>
              <div className={styles.sectionEyebrow}>THE HOUR</div>
              <h2 className={styles.sectionH}>
                No slides. <em>A calendar.</em>
              </h2>
            </div>
          </div>
          <div className={`${styles.hourList} ${styles.reveal} ${styles.revealDelay1}`}>
            {HOUR.map((row) => (
              <div key={row.time} className={styles.hourStep}>
                <div className={styles.hourStepTime}>{row.time}</div>
                <div className={styles.hourStepEyebrow}>{row.kicker}</div>
                <div className={styles.hourStepBody}>
                  <h3 className={styles.hourStepH}>{row.h}</h3>
                  <p className={styles.hourStepD}>{row.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className={styles.whoSection}>
        <div className={styles.whoInner}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <div>
              <div className={styles.sectionEyebrow}>BEFORE YOU BOOK</div>
              <h2 className={styles.sectionH}>
                This is for some families. <em>Not all of them.</em>
              </h2>
            </div>
          </div>
          <div className={`${styles.whoGrid} ${styles.reveal} ${styles.revealDelay1}`}>
            <div className={styles.whoCol}>
              <h3 className={styles.whoColH}>Book this if:</h3>
              <div className={styles.whoList}>
                {BOOK_IF.map((item, i) => (
                  <div key={i} className={styles.whoItem}>{item}</div>
                ))}
              </div>
            </div>
            <div className={styles.whoCol}>
              <h3 className={styles.whoColH}>
                Don&rsquo;t book this <em>if:</em>
              </h3>
              <div className={styles.whoList}>
                {DONT_BOOK_IF.map((item, i) => (
                  <div key={i} className={`${styles.whoItem} ${styles.whoItemStop}`}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ON THE OTHER SIDE (founder) */}
      <section className={styles.founderSection}>
        <div className={styles.founderInner}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <div>
              <div className={styles.sectionEyebrow}>WHO YOU&rsquo;LL BE TALKING TO</div>
              <h2 className={styles.sectionH}>
                A football agent. <em>And a coach.</em>
              </h2>
            </div>
          </div>
          <p className={`${styles.founderBody} ${styles.reveal} ${styles.revealDelay1}`}>
            Vitalii Lomov. Football agent and UEFA-licensed coach, based in London. Founder of Talent Mates.
          </p>
          <p className={`${styles.founderBody} ${styles.reveal} ${styles.revealDelay2}`}>
            He works with players and families moving through the English system — academies, semi-pro, the routes in and out of both. He built MATE because the same questions kept arriving at eleven at night, and families shouldn&rsquo;t have to wait until morning for an answer.
          </p>
          <div className={`${styles.founderLine} ${styles.reveal} ${styles.revealDelay3}`}>
            Talent wins. <em>Not connections.</em>
          </div>
        </div>
      </section>

      {/* THE PRICE */}
      <section className={styles.priceSection}>
        <div className={styles.priceInner}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <div>
              <div className={styles.sectionEyebrow}>THE PRICE</div>
              <h2 className={styles.sectionH}>
                One hour, or <em>the month.</em>
              </h2>
            </div>
          </div>
          <div className={`${styles.priceGrid} ${styles.reveal} ${styles.revealDelay1}`}>
            {/* Pathway Session */}
            <div className={styles.priceCard}>
              <div className={styles.priceTag}>Pathway Session</div>
              <div className={styles.priceName}>One session</div>
              <div>
                <span className={styles.priceValue}>€{currentPrice}</span>
              </div>
              {foundingActive && (
                <div className={styles.priceMeta}>
                  founding · {remaining} of {SESSION_CONFIG.foundingTotal} left
                </div>
              )}
              <p className={styles.priceDesc}>
                One session. The Note. Fourteen days of MATE.
              </p>
              <a href="#book" className={`${styles.priceCta} ${styles.priceCtaPrimary}`}>
                Book the session
              </a>
            </div>

            {/* MATE AI Career (featured) */}
            <div className={`${styles.priceCard} ${styles.priceCardFeatured}`}>
              <div className={styles.priceBadge}>MOST TAKE THIS</div>
              <div className={styles.priceTag}>MATE AI Career</div>
              <div className={styles.priceName}>Every month</div>
              <div>
                <span className={styles.priceValue}>€{SESSION_CONFIG.careerPrice}</span>
                <span className={styles.priceValueSuffix}>/ month</span>
              </div>
              <div className={styles.priceMeta}>40 seats</div>
              <p className={styles.priceDesc}>
                This session every month. MATE unlimited between them.
              </p>
              <a href={SESSION_CONFIG.careerUrl} rel="noopener" className={`${styles.priceCta} ${styles.priceCtaPrimary}`}>
                Take a seat
              </a>
            </div>

            {/* MATE AI Start */}
            <div className={styles.priceCard}>
              <div className={styles.priceTag}>MATE AI Start</div>
              <div className={styles.priceName}>MATE on its own</div>
              <div>
                <span className={styles.priceValue}>€{SESSION_CONFIG.startPrice}</span>
                <span className={styles.priceValueSuffix}>/ month</span>
              </div>
              <div className={styles.priceMeta}>100 messages · all four sub-agents</div>
              <p className={styles.priceDesc}>
                MATE on its own. 100 messages, all four sub-agents.
              </p>
              <a href={SESSION_CONFIG.startUrl} rel="noopener" className={styles.priceCta}>
                Start with MATE
              </a>
            </div>
          </div>

          <p className={`${styles.priceQuote} ${styles.reveal} ${styles.revealDelay2}`}>
            The month costs less than <em>the hour.</em>
          </p>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className={styles.bookSection}>
        <div className={styles.bookInner}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.sectionEyebrow}>BOOK</div>
              <h2 className={styles.sectionH}>
                Pick a time. <em>That&rsquo;s it.</em>
              </h2>
            </div>
          </div>
          <p className={styles.bookSub}>
            Payment is taken when you book. Reschedule or cancel free up to 24 hours before.
          </p>

          <div className={styles.bookConsent}>
            <input type="checkbox" id="consent-guardian" defaultChecked={false} />
            <label htmlFor="consent-guardian" className={styles.bookConsentLabel}>
              I am the parent or guardian of the player, or the player is over 18.
              {' '}
              <Link href="/privacy">Privacy notice</Link>.
            </label>
          </div>

          <BookingEmbed />
        </div>
      </section>

      {/* QUESTIONS */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className={`${styles.sectionHead} ${styles.reveal}`}>
            <div>
              <div className={styles.sectionEyebrow}>QUESTIONS</div>
              <h2 className={styles.sectionH}>
                The ones that <em>always come.</em>
              </h2>
            </div>
          </div>
          <div className={`${styles.faqList} ${styles.reveal} ${styles.revealDelay1}`}>
            {FAQ.map((item, i) => (
              <div key={i} className={styles.faqItem}>
                <div className={styles.faqQ}>{item.q}</div>
                <div className={styles.faqA}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p className={styles.footerLegal}>
          Pathway Sessions are development and pathway guidance. They are not agency representation, contract negotiation, or legal advice.
        </p>
        <div className={styles.footerRow}>
          <div className={styles.footerBrand}>© 2026 Talent Mates Limited · London · Company No. 17263751</div>
          <div className={styles.footerLinks}>
            <Link href="/about" className={styles.footerLink}>About</Link>
            <a href={MATE_AUTH} className={styles.footerLink} rel="noopener">MATE AI</a>
            <Link href="/representation" className={styles.footerLink}>Representation</Link>
            <Link href="/sports-endorsements" className={styles.footerLink}>Sport Endorsement</Link>
            <Link href="/privacy" className={styles.footerLink}>Privacy</Link>
            <a href="mailto:hello@talent-mates.com" className={styles.footerLink}>Contact</a>
          </div>
        </div>
      </footer>

      <NavScrollEffect navId="sessionNav" scrolledClass={styles.navScrolled} />
      <ScrollReveal revealClass={styles.reveal} visibleClass={styles.visible} />
      <StickyMobileCTA price={currentPrice} />
    </div>
  )
}
