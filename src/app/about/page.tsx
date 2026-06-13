import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import styles from './about.module.css'

// ─── METADATA ───────────────────────────────────────────
export const metadata: Metadata = {
  title: 'About — Talent Mates · The Race Engineer for athletes',
  description:
    'Talent Mates is a London AI company. We build the Race Engineer for athletes — and AI agents for artists and creators. Founded 2026 by Vitalii Lomov. Companies House 17263751.',
  alternates: { canonical: 'https://talent-mates.com/about' },
  openGraph: {
    title: 'About — Talent Mates · The Race Engineer for athletes',
    description:
      'Built in London. The Race Engineer for athletes — AI built to prepare the ones who play, perform, and create.',
    url: 'https://talent-mates.com/about',
    type: 'website',
    images: [{ url: 'https://talent-mates.com/founder-vitalii-lomov.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — Talent Mates · The Race Engineer for athletes',
    description:
      'Built in London. The Race Engineer for athletes — AI built to prepare the ones who play, perform, and create.',
    images: ['https://talent-mates.com/founder-vitalii-lomov.jpg'],
  },
}

// ─── JSON-LD (verbatim from about.html @graph) ──────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://talent-mates.com/#organization',
      name: 'Talent Mates',
      legalName: 'Talent Mates Limited',
      alternateName: ['MATE AI', 'Talent Mates AI Lab', 'Talent Mates Limited'],
      url: 'https://talent-mates.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://talent-mates.com/#logo',
        url: 'https://talent-mates.com/logo.png',
        contentUrl: 'https://talent-mates.com/logo.png',
        width: 512,
        height: 512,
        caption: 'Talent Mates',
      },
      image: { '@id': 'https://talent-mates.com/#logo' },
      description:
        'Talent Mates is a London-based AI company. We build the Race Engineer for athletes — and intelligent agents for artists and creators. Built for those who pursue mastery.',
      slogan: 'The Race Engineer for athletes. Built in London.',
      foundingDate: '2026-06-04',
      foundingLocation: { '@type': 'Place', name: 'London, United Kingdom' },
      founder: { '@id': 'https://talent-mates.com/#vitalii-lomov' },
      identifier: [
        { '@type': 'PropertyValue', propertyID: 'Companies House', value: '17263751' },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5th Floor, 167-169 Great Portland Street',
        addressLocality: 'London',
        addressRegion: 'England',
        postalCode: 'W1W 5PF',
        addressCountry: 'GB',
      },
      areaServed: [
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Ukraine' },
        { '@type': 'Place', name: 'Europe' },
      ],
      knowsAbout: [
        'Artificial Intelligence for Athletes',
        'Artificial Intelligence for Artists',
        'Artificial Intelligence for Creators',
        'AI Agents for Talent Development',
        'Athlete Performance Support',
        'Artist Career Development',
        'Creator Content Strategy',
        'Football Talent Development',
        'Player Scouting',
        'Sports Technology',
        'AI Mentoring for Athletes',
      ],
      email: 'hello@talent-mates.com',
      telephone: '+44 7756 906679',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'business',
          email: 'hello@talent-mates.com',
          telephone: '+44 7756 906679',
          areaServed: ['GB', 'UA', 'EU'],
          availableLanguage: ['English', 'Ukrainian'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          telephone: '+44 7756 906679',
          description: 'WhatsApp available on this number',
          areaServed: ['GB', 'UA', 'EU'],
          availableLanguage: ['English', 'Ukrainian'],
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/talent-mates-limited',
        'https://www.youtube.com/@TalentMates-AI',
        'https://x.com/Talent_Mates',
        'https://find-and-update.company-information.service.gov.uk/company/17263751',
      ],
      brand: {
        '@type': 'Brand',
        '@id': 'https://talent-mates.com/#mate-ai-brand',
        name: 'MATE AI',
        alternateName: 'MATE',
        description: 'AI agent for athletes — the flagship product of Talent Mates Limited',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://talent-mates.com/#vitalii-lomov',
      name: 'Vitalii Lomov',
      givenName: 'Vitalii',
      familyName: 'Lomov',
      jobTitle: 'Founder & Director',
      description:
        'Founder and Director of Talent Mates Limited. UEFA-licensed coach and football agent.',
      worksFor: { '@id': 'https://talent-mates.com/#organization' },
      knowsAbout: [
        'Football Talent Development',
        'Player Agency',
        'AI Product Strategy',
        'Sports Business',
        'Youth Football Coaching',
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Coaching License',
          name: 'UEFA Coaching License',
        },
      ],
      image: 'https://talent-mates.com/founder-vitalii-lomov.jpg',
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://talent-mates.com/#localbusiness',
      name: 'Talent Mates Limited',
      image: { '@id': 'https://talent-mates.com/#logo' },
      parentOrganization: { '@id': 'https://talent-mates.com/#organization' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5th Floor, 167-169 Great Portland Street',
        addressLocality: 'London',
        addressRegion: 'England',
        postalCode: 'W1W 5PF',
        addressCountry: 'GB',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '51.5215', longitude: '-0.1430' },
      url: 'https://talent-mates.com',
      email: 'hello@talent-mates.com',
      telephone: '+44 7756 906679',
      priceRange: '£££',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
  ],
}

// ─── PRODUCT CARDS ──────────────────────────────────────
const PRODUCTS = [
  {
    tag: 'For the athlete',
    name: 'MATE AI',
    desc: 'The Race Engineer for athletes. Legal, coaching, transfer, and lifestyle context — one voice in the ear, always there.',
    href: 'https://app.talent-mates.com/mate-auth.html',
    cta: 'Try MATE AI →',
    external: true,
  },
  {
    tag: 'For the artist',
    name: 'Muse AI',
    desc: 'The producer for performing artists. Career, brand, and creative direction — close enough to matter.',
    href: 'https://app.talent-mates.com/muse-auth.html',
    cta: 'In development →',
    external: true,
  },
  {
    tag: 'For the creator',
    name: 'Talent Mates Creators',
    desc: 'The strategist for content creators. Competitor intelligence and content generation, quietly working in the background.',
    href: 'https://app.talent-mates.com/creators-auth.html',
    cta: 'Beta →',
    external: true,
  },
  {
    tag: 'For the academy',
    name: 'Player Diagnostic Report',
    desc: 'The development map for coaches and academy directors — a structured diagnostic built on a Fibonacci progression framework.',
    href: 'https://app.talent-mates.com/player_report_sign.html',
    cta: 'Learn more →',
    external: true,
  },
] as const

// ─── PAGE ───────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NAV */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.navBrand}>
          <strong>Talent</strong> Mates
        </Link>
        <div className={styles.navLinks}>
          <Link href="/about" className={styles.navLink}>About</Link>
          <a href="https://app.talent-mates.com/mate-auth.html" className={styles.navLink} rel="noopener">MATE AI</a>
          <a href="https://app.talent-mates.com/muse-auth.html" className={styles.navLink} rel="noopener">Muse AI</a>
          <a href="https://app.talent-mates.com/creators-auth.html" className={styles.navLink} rel="noopener">Creators</a>
          <a
            href="https://app.talent-mates.com/mate-auth.html"
            className={styles.navCta}
            rel="noopener"
          >
            Try MATE AI
          </a>
        </div>
      </nav>

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={`${styles.heroBadge} ${styles.anim1}`}>
            <span className={styles.heroBadgeDot} aria-hidden />
            Built in London · Estd. 2026
          </div>
          <h1 className={`${styles.heroHeadline} ${styles.anim2}`}>
            The <em>Race Engineer</em> for athletes.
          </h1>
          <p className={`${styles.heroSub} ${styles.anim3}`}>
            Built to prepare the ones who play, perform, and create.
          </p>
        </section>

        <div className={styles.divider} />

        {/* BRIDGE / BRAND LINE */}
        <section className={styles.bridge}>
          <div className={`${styles.bridgeMark} ${styles.reveal}`}>— —</div>
          <p className={`${styles.bridgeQuote} ${styles.reveal} ${styles.revealDelay1}`}>
            MATE doesn&rsquo;t play.
            <br />
            MATE prepares the ones who do.
          </p>
        </section>

        <div className={styles.divider} />

        {/* MISSION */}
        <section className={styles.mission}>
          <div className={styles.missionGrid}>
            <h2 className={`${styles.missionTitle} ${styles.reveal}`}>
              <em>What</em> we are.
            </h2>
            <div className={`${styles.missionBody} ${styles.reveal} ${styles.revealDelay1}`}>
              <p>
                Throughout history, those who pursue mastery have done it in company. A trainer behind the fighter. A producer behind the singer. <em>A race engineer in the ear of the driver.</em> A quiet expert close enough to matter, distant enough not to interfere.
              </p>
              <p>
                Talent Mates is a London company building that presence in AI — small, careful agents for <em>athletes, artists, and creators,</em> and for the people who stand beside them.
              </p>
              <p>The form changes with the discipline. The principle does not.</p>
            </div>
          </div>
        </section>

        <div className={styles.divider} />

        {/* PRINCIPLES */}
        <section className={styles.principles}>
          <div className={`${styles.label} ${styles.reveal}`}>Principles</div>
          <h2 className={`${styles.missionTitle} ${styles.reveal}`}>
            How <em>we work.</em>
          </h2>
          <div className={`${styles.principlesList} ${styles.reveal} ${styles.revealDelay1}`}>
            <div className={styles.principle}>
              <div className={styles.principleNum}>01</div>
              <p className={styles.principleText}><em>Premium</em> by default.</p>
            </div>
            <div className={styles.principle}>
              <div className={styles.principleNum}>02</div>
              <p className={styles.principleText}>Made for those who pursue <em>mastery.</em></p>
            </div>
            <div className={styles.principle}>
              <div className={styles.principleNum}>03</div>
              <p className={styles.principleText}><em>Useful</em> before it&rsquo;s clever.</p>
            </div>
            <div className={styles.principle}>
              <div className={styles.principleNum}>04</div>
              <p className={styles.principleText}>Always there. <em>Never</em> in the way.</p>
            </div>
          </div>
        </section>

        <div className={styles.divider} />

        {/* PRODUCTS */}
        <section className={styles.products}>
          <div className={`${styles.label} ${styles.reveal}`}>The agents</div>
          <h2 className={`${styles.missionTitle} ${styles.reveal}`}>
            Four agents. <em>One philosophy.</em>
          </h2>
          <div className={`${styles.productsGrid} ${styles.reveal} ${styles.revealDelay1}`}>
            {PRODUCTS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className={styles.product}
                rel={p.external ? 'noopener' : undefined}
              >
                <div className={styles.productTag}>{p.tag}</div>
                <h3 className={styles.productName}>{p.name}</h3>
                <p className={styles.productDesc}>{p.desc}</p>
                <span className={styles.productLink}>{p.cta}</span>
              </a>
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        {/* BEHIND TALENT MATES */}
        <section className={styles.behind}>
          <div className={styles.behindGrid}>
            <div className={`${styles.behindPortrait} ${styles.reveal}`}>
              <Image
                src="/founder-vitalii-lomov.jpg"
                alt="Vitalii Lomov, founder of Talent Mates"
                width={1095}
                height={1200}
                priority={false}
                className={styles.portraitImg}
              />
            </div>
            <div className={`${styles.behindContent} ${styles.reveal} ${styles.revealDelay1}`}>
              <div className={`${styles.label} ${styles.behindLabel}`}>Behind Talent Mates</div>
              <h3>Vitalii Lomov</h3>
              <div className={styles.behindRole}>Founder &amp; Director</div>
              <p>Talent Mates was founded in 2026 by Vitalii Lomov — a UEFA-licensed coach and football agent.</p>
              <p>The company began in football and is now building AI agents across talent — for athletes, artists, and creators alike. Based in London, operating across the United Kingdom, continental Europe, and Ukraine.</p>

              <div className={styles.behindCompany}>
                <div>
                  <div className={styles.companyLabel}>Company</div>
                  <div className={styles.companyValue}>Talent Mates Limited</div>
                </div>
                <div>
                  <div className={styles.companyLabel}>Companies House</div>
                  <div className={styles.companyValue}>
                    <a
                      href="https://find-and-update.company-information.service.gov.uk/company/17263751"
                      target="_blank"
                      rel="noopener"
                    >
                      No. 17263751
                    </a>
                  </div>
                </div>
                <div>
                  <div className={styles.companyLabel}>Registered office</div>
                  <div className={styles.companyValue}>
                    5th Floor<br />167–169 Great Portland Street<br />London W1W 5PF
                  </div>
                </div>
                <div>
                  <div className={styles.companyLabel}>Founded</div>
                  <div className={styles.companyValue}>
                    4 June 2026<br />London, United Kingdom
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.divider} />

        {/* CONTACT */}
        <section className={styles.contact}>
          <div className={`${styles.label} ${styles.contactLabel} ${styles.reveal}`}>
            Get in touch
          </div>
          <h2 className={`${styles.contactTitle} ${styles.reveal}`}>
            Working with those who pursue <em>mastery.</em>
          </h2>
          <p className={`${styles.contactSub} ${styles.reveal} ${styles.revealDelay1}`}>
            For athletes, artists, creators, and the people who stand beside them — write or message us directly.
          </p>
          <div className={`${styles.contactButtons} ${styles.reveal} ${styles.revealDelay2}`}>
            <a href="mailto:hello@talent-mates.com" className={styles.btnPrimary}>
              <svg
                className={styles.btnIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              hello@talent-mates.com
            </a>
            <a
              href="https://wa.me/447756906679"
              target="_blank"
              rel="noopener"
              className={styles.btnGhost}
            >
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.6 6.32A8 8 0 0 0 4.5 16l-1.1 4 4.1-1.07a8 8 0 0 0 12.1-7A7.94 7.94 0 0 0 17.6 6.32Zm-5.6 12.3a6.66 6.66 0 0 1-3.4-.93l-.24-.14-2.43.64.65-2.37-.16-.25a6.65 6.65 0 1 1 5.58 3.05Zm3.65-5a8.27 8.27 0 0 1-1-.5c-.13-.06-.22-.1-.31.1s-.36.5-.44.6-.16.1-.3 0a5.42 5.42 0 0 1-1.6-1 6 6 0 0 1-1.1-1.38c-.12-.2 0-.3.09-.4s.2-.23.3-.35a1.34 1.34 0 0 0 .2-.33.37.37 0 0 0 0-.36c0-.1-.31-.74-.42-1s-.22-.21-.31-.21h-.27a.5.5 0 0 0-.38.18 1.6 1.6 0 0 0-.5 1.2 2.78 2.78 0 0 0 .59 1.5 6.43 6.43 0 0 0 2.46 2.18 8 8 0 0 0 .82.3 2 2 0 0 0 .91.06 1.5 1.5 0 0 0 1-.7 1.22 1.22 0 0 0 .08-.7c0-.06-.13-.1-.27-.17Z" />
              </svg>
              Message on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>© 2026 Talent Mates Limited · Companies House 17263751</div>
        <div className={styles.footerLinks}>
          <Link href="/about" className={styles.footerLink}>About</Link>
          <a
            href="https://app.talent-mates.com/mate-auth.html"
            className={styles.footerLink}
            rel="noopener"
          >
            MATE AI
          </a>
          <Link href="/privacy" className={styles.footerLink}>Privacy</Link>
          <a href="mailto:hello@talent-mates.com" className={styles.footerLink}>Contact</a>
        </div>
      </footer>

      {/* Reveal-on-scroll wiring — single small client component */}
      <ScrollReveal revealClass={styles.reveal} visibleClass={styles.visible} />
    </>
  )
}
