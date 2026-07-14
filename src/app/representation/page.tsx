import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import styles from './representation.module.css'

const MATE_AUTH = 'https://app.talent-mates.com/mate-auth.html'

// ─── METADATA ───────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Representation — Talent Mates',
  description:
    'Talent Mates Representation — the edge in football representation. A small number of athletes, fully prepared for every conversation that defines a career. London.',
  alternates: { canonical: 'https://talent-mates.com/representation' },
  openGraph: {
    title: 'Representation — Talent Mates',
    description:
      "We don’t run a roster. We build careers — one athlete at a time. The race engineer model, applied to representation.",
    url: 'https://talent-mates.com/representation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Representation — Talent Mates',
    description:
      "We don’t run a roster. We build careers — one athlete at a time. The race engineer model, applied to representation.",
  },
}

// ─── CONTENT DATA ───────────────────────────────────────
const METHOD = [
  {
    num: '01 / INTELLIGENCE',
    title: 'MATE in every decision.',
    body: 'The intelligence layer runs underneath every contract review, every trial offer, every transfer conversation. MATE doesn’t play. MATE prepares the ones who do.',
  },
  {
    num: '02 / LENS',
    title: 'The football reading is real.',
    body: 'Vitalii Lomov, founder and UEFA-licensed coach, sits inside every athlete file. The technical read of the player and the operational read of the deal are the same read.',
  },
  {
    num: '03 / PRODUCT',
    title: 'The pathway is the product.',
    body: 'We do not sell access. We do not sell signatures. We work on the five-year shape of a career — and price representation around the shape, not the transaction.',
  },
] as const

const CRITERIA = [
  {
    n: 'i.',
    title: 'A real, verifiable level.',
    body: 'The technical foundation is there on tape, in matches, in training. We don’t represent potential we cannot see. The work begins with the football, not with the narrative around it.',
  },
  {
    n: 'ii.',
    title: 'Ambition that matches reality.',
    body: 'The athlete knows where they are now, knows where they want to be, and is honest about the distance between the two. Coachability — for the player, the family, and the agent — is the precondition for everything.',
  },
  {
    n: 'iii.',
    title: 'A family that thinks in years.',
    body: 'The decisions that matter most rarely feel urgent. Families who value the five-year shape over the quick deal find the right partner here. Families who don’t, won’t.',
  },
  {
    n: 'iv.',
    title: 'A pathway that requires preparation.',
    body: 'Contracts in front of the player. Trials being discussed. A move between countries, leagues, or categories. The harder the decision in the next 12 months, the more we add. The easier it is, the better the player is served elsewhere.',
  },
] as const

const PROCESS = [
  {
    n: 'i.',
    title: 'Initial enquiry',
    body: 'A short message from the athlete, family, or current coach. Who the player is, where they are now, and the decision they are walking toward.',
    when: 'Day 0',
  },
  {
    n: 'ii.',
    title: 'Football conversation',
    body: 'A video call with Vitalii. Forty minutes. Football first, paperwork never. The aim is to understand the player as a player.',
    when: 'Day 1–3',
  },
  {
    n: 'iii.',
    title: 'Technical review',
    body: 'Footage, situation, current paperwork, current pathway. Reviewed against the four criteria. MATE supports the read. The human makes the call.',
    when: 'Day 3–10',
  },
  {
    n: 'iv.',
    title: 'The decision',
    body: 'A clear answer, explained in writing. If yes, the next conversation is about the work. If no, the reasoning is honest — and where we can, we point to a better fit.',
    when: 'By Day 14',
  },
] as const

// ─── PAGE ───────────────────────────────────────────────
export default function RepresentationPage() {
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
          <Link href="/representation" className={`${styles.navLink} ${styles.navLinkActive}`}>
            Representation
          </Link>
          <Link href="/sports-endorsements" className={styles.navLink}>Sport Endorsement</Link>
          <a href="mailto:hello@talent-mates.com" className={styles.navLink}>Contact</a>
          <a href={MATE_AUTH} className={styles.navCta} rel="noopener">Try MATE AI</a>
        </div>
      </nav>

      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.heroBlade} aria-hidden />
        <div className={`${styles.label} ${styles.anim1}`}>REPRESENTATION · LONDON</div>
        <h1 className={`${styles.heroTitle} ${styles.anim2}`}>
          The edge in <em>representation.</em>
        </h1>
        <p className={`${styles.heroSub} ${styles.anim3}`}>
          We don&rsquo;t run a roster. We build careers — one athlete at a time, quietly prepared for every conversation that defines them.
        </p>
        <div className={`${styles.heroCtas} ${styles.anim4}`}>
          <a href="#apply" className={styles.btnPrimary}>
            Apply for consideration
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2 7h10M8 3l4 4-4 4" stroke="#794DC6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="mailto:hello@talent-mates.com?subject=Representation%20enquiry" className={styles.btnGhost}>
            Talk to Vitalii
          </a>
        </div>
      </header>

      <div className={styles.divider} />

      {/* PHILOSOPHY */}
      <section className={styles.section}>
        <div className={styles.philosophyGrid}>
          <div className={styles.reveal}>
            <div className={styles.label}>HOW WE MOVE</div>
            <h2 className={styles.sectionTitle}>
              Representation is not a service. <em>It is an outcome.</em>
            </h2>
          </div>
          <div className={`${styles.sectionBody} ${styles.reveal} ${styles.revealDelay1}`}>
            <p>
              Most agencies are measured by roster size. We measure differently. A career is not a portfolio to scale — it is one life, one window, one chain of decisions where the agent in the room is part of every conversation that defines what comes next.
            </p>
            <p>
              So we move slowly. We work with a small number of athletes. We commit fully to each. The roster is deliberately quiet, deliberately small, and deliberately chosen — because the alternative is the thing we refuse to be.
            </p>
            <p>The thing we refuse to be is a broker.</p>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* METHOD */}
      <section className={styles.section}>
        <div className={styles.reveal}>
          <div className={styles.label}>THE METHOD</div>
          <h2 className={styles.sectionTitle}>
            The race engineer in <em>every room.</em>
          </h2>
          <p className={`${styles.sectionBody} ${styles.sectionBodyWide}`}>
            Three things sit behind every decision we make for an athlete we represent. None of them are negotiable.
          </p>
        </div>

        <div className={`${styles.methodGrid} ${styles.reveal} ${styles.revealDelay1}`}>
          {METHOD.map((m) => (
            <div key={m.num} className={styles.methodCard}>
              <div className={styles.methodNum}>{m.num}</div>
              <h3 className={styles.methodTitle}>{m.title}</h3>
              <p className={styles.methodBody}>{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* CRITERIA */}
      <section className={styles.section}>
        <div className={styles.philosophyGrid}>
          <div className={styles.reveal}>
            <div className={styles.label}>WHO WE WORK WITH</div>
            <h2 className={styles.sectionTitle}>
              Few athletes. <em>Fully chosen.</em>
            </h2>
          </div>
          <div className={`${styles.sectionBody} ${styles.reveal} ${styles.revealDelay1}`}>
            <p>
              We are not the right agency for every player, and we are honest about it. The athletes who fit Talent Mates share four things — and the absence of any one of them is a signal we will not represent the player well.
            </p>
          </div>
        </div>

        <div className={`${styles.criteriaList} ${styles.reveal} ${styles.revealDelay2}`}>
          {CRITERIA.map((c) => (
            <div key={c.n} className={styles.criteriaItem}>
              <div className={styles.criteriaNum}>{c.n}</div>
              <h3 className={styles.criteriaTitle}>{c.title}</h3>
              <p className={styles.criteriaBody}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* PROCESS */}
      <section className={styles.section}>
        <div className={styles.reveal}>
          <div className={styles.label}>THE PATHWAY</div>
          <h2 className={styles.sectionTitle}>
            Four conversations. <em>One decision.</em>
          </h2>
          <p className={`${styles.sectionBody} ${styles.sectionBodyWide}`}>
            Whether the answer is yes or no, every enquiry receives a clear decision within 14 days. We don&rsquo;t keep families waiting.
          </p>
        </div>

        <div className={`${styles.processList} ${styles.reveal} ${styles.revealDelay1}`}>
          {PROCESS.map((p) => (
            <div key={p.n} className={styles.processStep}>
              <div className={styles.processStepNum}>{p.n}</div>
              <div className={styles.processStepContent}>
                <h3 className={styles.processStepTitle}>{p.title}</h3>
                <p className={styles.processStepBody}>{p.body}</p>
              </div>
              <div className={styles.processStepTime}>{p.when}</div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* FOUNDER NOTE */}
      <section className={styles.section}>
        <div className={styles.reveal}>
          <div className={styles.label}>A NOTE FROM THE FOUNDER</div>
        </div>

        <div className={`${styles.founderNote} ${styles.reveal} ${styles.revealDelay1}`}>
          <p className={styles.founderQuote}>
            &ldquo;When a family puts a son&rsquo;s career in your hands, the room becomes very quiet. Everything I have built — the coaching, the football work, the AI — exists to deserve that quiet.&rdquo;
          </p>
          <p className={styles.founderBody}>
            I started Talent Mates because the football industry talks too much about access and too little about preparation. A player doesn&rsquo;t need an agent who knows everybody. A player needs an agent who has read every clause, watched every minute of tape, and is in the room when the decision lands. That is what we are building here, one athlete at a time, and that is why the roster is small.
          </p>
          <p className={styles.founderBody}>
            If your son or daughter is approaching a moment that will shape the next five years of their career, you are welcome to be in touch — directly, plainly, and without obligation.
          </p>
          <p className={styles.founderSignoff}>
            <strong>VITALII LOMOV</strong> · FOUNDER, TALENT MATES · UEFA-LICENSED COACH · LONDON
          </p>
        </div>
      </section>

      {/* HIDDEN MODULAR SECTIONS (kept in DOM for easy activation later) */}
      <section hidden id="future-roster" className={styles.section}>
        <div className={styles.reveal}>
          <div className={styles.label}>THE ROSTER</div>
          <h2 className={styles.sectionTitle}>Currently represented. <em>Quietly.</em></h2>
          <p className={`${styles.sectionBody} ${styles.sectionBodyWide}`}>
            A small number of athletes, each working toward a defined moment in their career.
          </p>
        </div>
        <div className={`${styles.rosterGrid} ${styles.reveal} ${styles.revealDelay1}`} />
      </section>

      <section hidden id="future-team" className={styles.section}>
        <div className={styles.reveal}>
          <div className={styles.label}>THE TEAM</div>
          <h2 className={styles.sectionTitle}>The people in <em>the room.</em></h2>
        </div>
        <div className={`${styles.teamGrid} ${styles.reveal} ${styles.revealDelay1}`} />
      </section>

      <section hidden id="future-cases" className={styles.section}>
        <div className={styles.reveal}>
          <div className={styles.label}>CAREER STUDIES</div>
          <h2 className={styles.sectionTitle}>The work, <em>twelve months later.</em></h2>
        </div>
      </section>

      <div className={styles.divider} />

      {/* CLOSING CTA */}
      <section className={styles.ctaSection} id="apply">
        <div className={styles.reveal}>
          <div className={`${styles.label} ${styles.labelCenter}`}>GET IN TOUCH</div>
          <h2 className={styles.ctaTitle}>Begin the <em>conversation.</em></h2>
          <p className={styles.ctaBody}>
            If the work above sounds like the partner your son or daughter needs, write to Vitalii directly. Every enquiry is read. Every athlete is reviewed against the four criteria. A clear answer arrives within 14 days.
          </p>
          <div className={styles.ctaChannels}>
            <a
              href="mailto:hello@talent-mates.com?subject=Representation%20enquiry"
              className={styles.btnPrimary}
            >
              hello@talent-mates.com
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="#794DC6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://wa.me/447756906679"
              className={styles.btnGhost}
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/company/talent-mates-limited"
              className={styles.btnGhost}
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className={`${styles.brandLine} ${styles.reveal} ${styles.revealDelay2}`}>
          MATE doesn&rsquo;t play.<br />
          <em>MATE prepares the ones who do.</em>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div>© 2026 Talent Mates Limited</div>
        <div className={styles.footerLinks}>
          <Link href="/about" className={styles.footerLink}>About</Link>
          <a href={MATE_AUTH} className={styles.footerLink} rel="noopener">MATE AI</a>
          <Link href="/privacy" className={styles.footerLink}>Privacy</Link>
          <a href="mailto:hello@talent-mates.com" className={styles.footerLink}>Contact</a>
        </div>
        <div className={styles.footerMeta}>LONDON · COMPANIES HOUSE 17263751</div>
      </footer>

      {/* Reveal-on-scroll wiring */}
      <ScrollReveal revealClass={styles.reveal} visibleClass={styles.visible} />
    </div>
  )
}
