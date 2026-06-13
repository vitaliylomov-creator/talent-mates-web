import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSlider from './HeroSlider'
import PartnerForm from './PartnerForm'
import styles from './sports-endorsements.module.css'

const MATE_AUTH = 'https://app.talent-mates.com/mate-auth.html'

// ─── METADATA ───────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Sports Endorsements — Title partnerships with Talent Mates agents',
  description:
    'Sports Endorsements — title partnerships with the AI agents preparing the next generation of athletes, artists, founders, and creators. By Talent Mates.',
  alternates: { canonical: 'https://talent-mates.com/sports-endorsements' },
  openGraph: {
    title: 'Sports Endorsements — Title partnerships with Talent Mates agents',
    description:
      "Four agents. One race engineer. Title, Category, and Launch partnerships with the AI agents inside the daily decisions of athletes, artists, founders, and creators.",
    url: 'https://talent-mates.com/sports-endorsements',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

// ─── DATA ───────────────────────────────────────────────
const AGENTS = [
  {
    num: '01',
    cat: 'Football intelligence',
    name: 'MATE',
    desc: 'The race engineer for coaches, scouts, agents, and academy directors. Used inside the daily decisions that shape players and squads.',
    tag: 'Performance, kit, equipment, mobility',
  },
  {
    num: '02',
    cat: 'Creative intelligence',
    name: 'MUSE',
    desc: 'The studio companion for artists, musicians, and producers. Present in the writing room, the release plan, the distribution call.',
    tag: 'Audio, distribution, instruments, lifestyle',
  },
  {
    num: '03',
    cat: 'Brand compass',
    name: 'NORTH',
    desc: 'The brand consulting agent for founders. Synthesised from fifty years of positioning thinking. In private beta with London studios.',
    tag: 'Productivity, infrastructure, finance, design',
  },
  {
    num: '04',
    cat: 'Creator infrastructure',
    name: (<>Content<br />Engain</>),
    desc: 'The operating system for creators who treat the channel as a company. Editorial, distribution, and audience compounding in one line.',
    tag: 'Creative software, capture, hardware, platforms',
  },
] as const

const WHY = [
  {
    n: '01',
    h: 'The agent doesn’t get injured, transferred, or cancelled.',
    d: 'Ambassador deals carry single-person risk. An agent compounds in authority every quarter — closer to a media property than a personality contract.',
  },
  {
    n: '02',
    h: 'A decision-maker audience, not a reach audience.',
    d: 'Each agent reaches the people who decide what their players, artists, founders, and audiences use. Not impressions — adjacency to the daily call.',
  },
  {
    n: '03',
    h: 'Cross-vertical leverage no agency can match.',
    d: 'One conversation can move across athletes, artists, founders, and creators in a single year. A cultural moment, not a media buy.',
  },
] as const

// ─── PAGE ───────────────────────────────────────────────
export default function SportsEndorsementsPage() {
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
          <Link href="/brand-consulting" className={styles.navLink}>NORTH</Link>
          <Link href="/sports-endorsements" className={`${styles.navLink} ${styles.navLinkActive}`}>Endorsements</Link>
          <a href="mailto:hello@talent-mates.com" className={styles.navLink}>Contact</a>
        </div>
        <a href="#partner-form" className={styles.navCta}>Partner enquiry</a>
      </nav>

      {/* HERO (client slider) */}
      <HeroSlider />

      {/* INVERSION QUOTE */}
      <section className={styles.inversion}>
        <div className={styles.inversionInner}>
          <div className={styles.inversionEyebrow}>The principle</div>
          <p className={styles.inversionQuote}>
            Talent Mates doesn&rsquo;t sell AI.
            <br />
            <em>Talent Mates sells the edge.</em>
          </p>
          <div className={styles.inversionAttr}>Internal manifesto · used here on the record</div>
        </div>
      </section>

      {/* AGENTS GRID */}
      <section className={styles.agents}>
        <div className={styles.agentsInner}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.sectionEyebrow}>The roster</div>
              <h2 className={styles.sectionH}>
                Four agents.<br />Four <em>category positions.</em>
              </h2>
            </div>
            <p className={styles.sectionLead}>
              A brand partnership is an agreement with the agent — not with its users. The agent does not retire, transfer, or change kit.
            </p>
          </div>

          <div className={styles.agentsGrid}>
            {AGENTS.map((a) => (
              <div key={a.num} className={styles.agentCard}>
                <div className={styles.agentNum}>{a.num}</div>
                <div className={styles.agentBody}>
                  <div className={styles.agentCat}>{a.cat}</div>
                  <div className={styles.agentName}>{a.name}</div>
                  <div className={styles.agentDesc}>{a.desc}</div>
                </div>
                <div className={styles.agentTag}>Brand fit <span>· {a.tag}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className={styles.tiers}>
        <div className={styles.tiersInner}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.sectionEyebrow}>The offer</div>
              <h2 className={styles.sectionH}>
                Three tiers.<br />One <em>partnership per agent.</em>
              </h2>
            </div>
            <p className={styles.sectionLead}>
              Each agent has one Title Partner, up to three Category Partners, and a small number of Launch Partners per season. Category exclusivity protected by contract.
            </p>
          </div>

          <div className={styles.tiersGrid}>
            <div className={`${styles.tier} ${styles.tierTitle}`}>
              <div className={styles.tierNum}>01</div>
              <div className={styles.tierName}>Title <em>Partner</em></div>
              <div className={styles.tierDesc}>
                One brand per agent. Named alongside the agent in product identity, founder communications, and every market-facing moment. Multi-year. Category exclusive.
              </div>
              <ul className={styles.tierList}>
                <li>Permanent presence inside the agent&rsquo;s identity</li>
                <li>Co-named at every launch, founder series, and flagship report</li>
                <li>First refusal on every category opportunity</li>
                <li>Three-year minimum term</li>
              </ul>
            </div>

            <div className={styles.tier}>
              <div className={styles.tierNum}>02</div>
              <div className={styles.tierName}>Category <em>Partner</em></div>
              <div className={styles.tierDesc}>
                Up to three per agent, in non-competing categories. Presence at the moments where the category is relevant — kit, distribution, infrastructure, capture.
              </div>
              <ul className={styles.tierList}>
                <li>Category exclusivity within the agent&rsquo;s audience</li>
                <li>Co-presence at category-relevant agent moments</li>
                <li>Brand integrated into editorial and partnership content</li>
                <li>Annual licence</li>
              </ul>
            </div>

            <div className={styles.tier}>
              <div className={styles.tierNum}>03</div>
              <div className={styles.tierName}>Launch <em>Partner</em></div>
              <div className={styles.tierDesc}>
                A single decisive moment. Wrap a feature launch, a seasonal campaign, a founder series, or a flagship report. The on-ramp to deeper partnership.
              </div>
              <ul className={styles.tierList}>
                <li>One activation, fully wrapped</li>
                <li>Editorial and content built around the moment</li>
                <li>Right of first conversation on category renewal</li>
                <li>Activation-based commitment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className={styles.why}>
        <div className={styles.whyInner}>
          <div className={styles.sectionEyebrow}>Why this model</div>
          <h2 className={styles.sectionH}>
            Three reasons a brand chooses <em>the agent over the ambassador.</em>
          </h2>

          <div className={styles.whyGrid}>
            {WHY.map((w) => (
              <div key={w.n} className={styles.whyItem}>
                <div className={styles.whyNum}>{w.n}</div>
                <div className={styles.whyHead}>{w.h}</div>
                <div className={styles.whyDesc}>{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER FORM (client) */}
      <section className={styles.formSection} id="partner-form">
        <div className={styles.formInner}>
          <div className={styles.formHead}>
            <div className={styles.sectionEyebrow}>Begin the conversation</div>
            <h2 className={styles.formH}>
              If your brand belongs at the next inflection — <em>tell us where.</em>
            </h2>
            <p className={styles.formLead}>
              Send a short note about the agent, category, and tier that fits. We reply from London within two working days. All enquiries are read by the founder.
            </p>
          </div>

          <PartnerForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>© 2026 Talent Mates Limited · London · Company No. 17263751</div>
        <div className={styles.footerLinks}>
          <Link href="/about" className={styles.footerLink}>About</Link>
          <a href={MATE_AUTH} className={styles.footerLink} rel="noopener">MATE AI</a>
          <Link href="/brand-consulting" className={styles.footerLink}>NORTH</Link>
          <Link href="/sports-endorsements" className={styles.footerLink}>Endorsements</Link>
          <a href="mailto:invest@talent-mates.com" className={styles.footerLink}>Partner enquiries</a>
        </div>
      </footer>
    </div>
  )
}
