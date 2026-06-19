import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './terms.module.css'

// ─── METADATA ───────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Terms of Service — Talent Mates',
  description:
    'The legal agreement between you and Talent Mates Limited when you use MATE AI.',
  alternates: { canonical: 'https://talent-mates.com/terms' },
  openGraph: {
    title: 'Terms of Service — Talent Mates',
    description:
      'The legal agreement between you and Talent Mates Limited when you use MATE AI.',
    url: 'https://talent-mates.com/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service — Talent Mates',
    description:
      'The legal agreement between you and Talent Mates Limited when you use MATE AI.',
  },
}

// ─── TOC ENTRIES ────────────────────────────────────────
const TOC = [
  ['s1', 'Introduction'],
  ['s2', 'Who we are'],
  ['s3', 'The service'],
  ['s4', 'Eligibility'],
  ['s5', 'Your account'],
  ['s6', 'Subscription & payment'],
  ['s7', 'Cancellation & refunds'],
  ['s8', 'Acceptable use'],
  ['s9', 'AI outputs'],
  ['s10', 'Intellectual property'],
  ['s11', 'Your content'],
  ['s12', 'Privacy'],
  ['s13', 'Third-party services'],
  ['s14', 'Service availability'],
  ['s15', 'Liability'],
  ['s16', 'Indemnity'],
  ['s17', 'Changes'],
  ['s18', 'Termination'],
  ['s19', 'Governing law'],
  ['s20', 'Contact'],
] as const

// ─── PAGE ───────────────────────────────────────────────
export default function TermsPage() {
  return (
    <>
      {/* NAV */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.navBrand}>
          <strong>Talent</strong> Mates
        </Link>
        <div className={styles.navLinks}>
          <Link href="/about" className={styles.navLink}>About</Link>
          <a href="https://app.talent-mates.com/mate-auth.html" className={styles.navLink} rel="noopener">MATE AI</a>
          <Link href="/privacy" className={styles.navLink}>Privacy</Link>
          <Link href="/terms" className={styles.navLink}>Terms</Link>
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
          <div className={styles.label}>Legal</div>
          <h1 className={styles.heroTitle}>Terms of Service</h1>
          <p className={styles.heroSub}>
            The legal agreement between you and Talent Mates Limited when you use MATE AI and other services at talent-mates.com.
          </p>
          <div className={styles.heroMeta}>
            <span>Last updated: 10 June 2026</span>
            <span>Version 1.0</span>
            <span>Governed by the laws of England and Wales</span>
          </div>
        </section>

        <div className={styles.divider} />

        <div className={styles.legalLayout}>
          {/* TABLE OF CONTENTS */}
          <aside className={styles.toc}>
            <h2 className={styles.tocTitle}>Contents</h2>
            <ol className={styles.tocList}>
              {TOC.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className={styles.tocLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className={styles.legalContent}>
            {/* SECTION 01 */}
            <section className={styles.section} id="s1">
              <h2>
                <span className={styles.sectionNum}>Section 01</span>
                Introduction
              </h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) form a binding legal agreement between you (&ldquo;you&rdquo;, &ldquo;your&rdquo;) and <strong>Talent Mates Limited</strong> (&ldquo;Talent Mates&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). They govern your use of MATE AI, the talent-mates.com website, and any related services we provide (&ldquo;the Service&rdquo;).
              </p>
              <p>
                By creating an account or using the Service, you confirm that you have read, understood, and agreed to these Terms and to our <Link href="/privacy">Privacy Policy</Link>. If you do not agree, you may not use the Service.
              </p>
              <p>
                We may update these Terms from time to time (see <a href="#s17">Section 17</a>).
              </p>
            </section>

            {/* SECTION 02 */}
            <section className={styles.section} id="s2">
              <h2>
                <span className={styles.sectionNum}>Section 02</span>
                Who we are
              </h2>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Service provider</div>
                <p>
                  <strong>Talent Mates Limited</strong>
                  <br />
                  A private limited company incorporated in England and Wales
                  <br />
                  Company number: 17263751
                  <br />
                  Registered office: 5th Floor, 167&ndash;169 Great Portland Street, London W1W 5PF, United Kingdom
                  <br />
                  Contact: <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a>
                </p>
              </div>
            </section>

            {/* SECTION 03 */}
            <section className={styles.section} id="s3">
              <h2>
                <span className={styles.sectionNum}>Section 03</span>
                The Service
              </h2>
              <p>MATE AI is an AI-powered software product that provides general information and assistance across four areas relevant to professional and semi-professional athletes:</p>
              <ul>
                <li><strong>Legal Advisor</strong> &mdash; general information about football regulations such as FIFA RSTP, FFAR, and FA rules</li>
                <li><strong>Performance Coach</strong> &mdash; general information about football fitness, training, recovery, and nutrition</li>
                <li><strong>Transfer Analyst</strong> &mdash; general market and competition information</li>
                <li><strong>Concierge</strong> &mdash; general practical assistance with travel, weather, and lifestyle context</li>
              </ul>
              <p>
                MATE AI is delivered through a web interface, with backend AI processing handled by trusted third-party providers (see{' '}
                <Link href="/privacy#s5">Privacy Policy, Section 5</Link>).
              </p>
              <div className={styles.warningBlock}>
                <div className={styles.warningLabel}>Important</div>
                <p>
                  MATE AI is an information and productivity tool. It is <strong>not</strong> a substitute for qualified professional advice. See <a href="#s9">Section 9</a> for full details on the limits of AI outputs.
                </p>
              </div>
            </section>

            {/* SECTION 04 */}
            <section className={styles.section} id="s4">
              <h2>
                <span className={styles.sectionNum}>Section 04</span>
                Eligibility
              </h2>
              <h3>Age</h3>
              <ul>
                <li>You must be at least <strong>18 years old</strong> to create an account on your own behalf.</li>
                <li>If you are between <strong>13 and 17</strong>, you may use the Service only with the verifiable consent of a parent or legal guardian, who must be the account holder.</li>
                <li>The Service is <strong>not</strong> available to anyone under 13. We do not knowingly collect data from children under 13.</li>
              </ul>

              <h3>Other requirements</h3>
              <ul>
                <li>You must have legal capacity to enter into a binding contract in the jurisdiction where you live</li>
                <li>You must provide accurate registration information and keep it up to date</li>
                <li>You must not be barred from using the Service under the laws of the United Kingdom or any other applicable jurisdiction</li>
              </ul>
            </section>

            {/* SECTION 05 */}
            <section className={styles.section} id="s5">
              <h2>
                <span className={styles.sectionNum}>Section 05</span>
                Your account
              </h2>
              <p>To use most features of the Service, you must create an account.</p>

              <h3>Security</h3>
              <ul>
                <li>You are responsible for keeping your account credentials confidential</li>
                <li>You must notify us immediately at <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a> if you suspect unauthorised access</li>
                <li>You are responsible for activity that occurs under your account</li>
              </ul>

              <h3>One account per person</h3>
              <p>You may not create multiple accounts to circumvent usage limits or pricing tiers. We may suspend accounts that violate this.</p>

              <h3>Account closure</h3>
              <p>You can close your account at any time from the Service or by emailing us. See <a href="#s7">Section 7</a> for cancellation effects.</p>
            </section>

            {/* SECTION 06 */}
            <section className={styles.section} id="s6">
              <h2>
                <span className={styles.sectionNum}>Section 06</span>
                Subscription and payment
              </h2>

              <h3>Plans</h3>
              <ul>
                <li><strong>Free plan</strong> &mdash; limited monthly usage, no payment required</li>
                <li><strong>Pro plan</strong> &mdash; paid monthly subscription, with full access to MATE AI&rsquo;s sub-agents and features</li>
              </ul>
              <p>The current price of the Pro plan is displayed at the checkout. Prices are inclusive of VAT where applicable.</p>

              <h3>Billing</h3>
              <ul>
                <li>Payment is processed by <strong>Stripe Payments Europe Ltd</strong>. By subscribing, you also agree to Stripe&rsquo;s terms</li>
                <li>The Pro plan is billed monthly, in advance, on the day you subscribe</li>
                <li>Your subscription will automatically renew each month unless cancelled</li>
                <li>You are responsible for keeping a valid payment method on file</li>
              </ul>

              <h3>Failed payments</h3>
              <p>
                If a payment fails, we may attempt to charge again over the following seven days. If payment still cannot be processed, your access will revert to the free plan. Your data is retained per the retention rules in our{' '}
                <Link href="/privacy#s8">Privacy Policy</Link>.
              </p>

              <h3>Price changes</h3>
              <p>We may change subscription prices. We will give you at least <strong>30 days&rsquo; notice</strong> by email before any change to your renewal price takes effect. You may cancel before the change takes effect.</p>
            </section>

            {/* SECTION 07 */}
            <section className={styles.section} id="s7">
              <h2>
                <span className={styles.sectionNum}>Section 07</span>
                Cancellation and refunds
              </h2>

              <h3>Cancelling your subscription</h3>
              <p>You may cancel your Pro subscription at any time from your account settings, or by emailing <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a>. Cancellation takes effect at the end of your current billing period &mdash; you retain Pro access until then.</p>

              <h3>UK consumer cancellation rights (14-day cooling-off)</h3>
              <p>Under the UK Consumer Contracts Regulations 2013, if you are a consumer based in the UK or EU, you have a 14-day right to cancel a distance contract for the supply of digital content.</p>
              <p>However, by starting to use MATE AI immediately after subscribing, you expressly agree that the supply of digital content has begun, and you acknowledge that this means you <strong>lose your 14-day cancellation right</strong> in respect of any month you have already started using.</p>
              <p>If you do not wish to lose the 14-day right, do not use MATE AI for the first 14 days after subscribing, and notify us in writing within that period.</p>

              <h3>Refunds</h3>
              <p>Subscription fees are non-refundable except where required by law, or at our discretion in exceptional circumstances. We do not offer pro-rated refunds for partial months.</p>

              <h3>Effect of cancellation or termination</h3>
              <ul>
                <li>Your Pro access ends at the next billing date (or immediately, in case of termination by us for cause)</li>
                <li>Your data is retained or deleted according to our <Link href="/privacy#s8">Privacy Policy retention rules</Link></li>
                <li>You may export your training logs and conversation history before cancellation by emailing <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a></li>
              </ul>
            </section>

            {/* SECTION 08 */}
            <section className={styles.section} id="s8">
              <h2>
                <span className={styles.sectionNum}>Section 08</span>
                Acceptable use
              </h2>
              <p>When using the Service, you agree NOT to:</p>
              <ul>
                <li>Use the Service for any unlawful purpose, or to violate the rights of others</li>
                <li>Upload content you do not have the right to share, including third-party contracts where you do not have permission</li>
                <li>Upload content containing personal data of others without their knowledge or consent (where required)</li>
                <li>Attempt to extract, reverse-engineer, decompile, or otherwise reproduce the Service or its underlying AI models</li>
                <li>Use automated scripts, bots, or scrapers to access the Service</li>
                <li>Try to bypass usage limits, paywalls, or rate limits</li>
                <li>Impersonate another person or misrepresent your identity, age, or affiliation</li>
                <li>Use the Service to harass, defame, or otherwise harm others</li>
                <li>Probe, scan, or test the vulnerability of the Service without our prior written permission</li>
                <li>Use the Service to develop a competing AI product</li>
                <li>Submit content that is unlawful, infringing, obscene, threatening, or otherwise objectionable</li>
                <li>Resell, sublicense, or otherwise transfer access to the Service to a third party</li>
              </ul>
              <p>We may suspend or terminate accounts that violate these rules without notice, and may report illegal activity to the appropriate authorities.</p>
            </section>

            {/* SECTION 09 */}
            <section className={styles.section} id="s9">
              <h2>
                <span className={styles.sectionNum}>Section 09</span>
                AI outputs &mdash; what MATE AI is, and is not
              </h2>
              <div className={styles.warningBlock}>
                <div className={styles.warningLabel}>Critical — please read carefully</div>
                <p>MATE AI uses large language models to generate responses. These responses may be incomplete, inaccurate, out of date, or inappropriate for your specific situation. You are solely responsible for verifying and deciding how to act on any output.</p>
              </div>

              <h3>The Legal Advisor sub-agent</h3>
              <p>Provides general information about football regulations such as the FIFA RSTP, FFAR, and FA rules. It is <strong>not a regulated source of legal advice</strong>. It is not a solicitor or a registered intermediary. For any specific legal question &mdash; including reviewing a contract, negotiating with a club, or responding to a dispute &mdash; you must consult a qualified solicitor or registered football agent.</p>

              <h3>The Performance Coach sub-agent</h3>
              <p>Provides general information about football fitness, training, recovery, and nutrition. It is <strong>not a regulated source of medical, physiotherapy, or nutrition advice</strong>. Before starting any new training programme, especially if you have an injury or medical condition, you must consult qualified medical professionals.</p>

              <h3>The Transfer Analyst sub-agent</h3>
              <p>Provides general market and competition information. It is <strong>not financial advice, investment advice, or regulated career guidance</strong>. Decisions about transfers, contracts, and career direction should be made in consultation with your registered agent, family, club, and qualified advisors.</p>

              <h3>The Concierge sub-agent</h3>
              <p>Provides practical assistance using real-time data from third-party APIs (weather, transport, fixtures). This data may be incorrect, delayed, or unavailable. Always verify travel and time-critical information independently.</p>

              <h3>Uploaded contracts</h3>
              <p>If you choose to upload a contract or other document, MATE AI may summarise or comment on its content. <strong>This is not a legal review</strong>. It does not identify all material terms, risks, or non-compliance issues. Treat any contract analysis from MATE AI as a starting point only and have the document reviewed by a qualified solicitor.</p>

              <h3>Your responsibility</h3>
              <p>By using MATE AI, you acknowledge and agree that:</p>
              <ul>
                <li>You will independently verify MATE AI&rsquo;s outputs before acting on them in any matter of legal, medical, financial, or career significance</li>
                <li>Talent Mates is not liable for any loss, damage, or consequence arising from your reliance on MATE AI&rsquo;s outputs</li>
                <li>MATE AI does not create any professional, fiduciary, attorney&ndash;client, or doctor&ndash;patient relationship</li>
              </ul>
            </section>

            {/* SECTION 10 */}
            <section className={styles.section} id="s10">
              <h2>
                <span className={styles.sectionNum}>Section 10</span>
                Intellectual property
              </h2>
              <h3>Our IP</h3>
              <p>The Service, its software, design, brand, content (excluding your content), trade marks, and underlying technology are owned by Talent Mates Limited or our licensors. We grant you a limited, non-exclusive, non-transferable, revocable licence to use the Service for personal, non-commercial use during the term of your subscription.</p>

              <h3>Your IP</h3>
              <p>You retain ownership of the content you upload to the Service (e.g. contract PDFs, profile data, training notes). You grant us a worldwide, royalty-free licence to host, store, process, and display your content to the limited extent necessary to provide the Service to you.</p>

              <h3>AI-generated outputs</h3>
              <p>Outputs generated by MATE AI in response to your queries may be used by you for your own personal, non-commercial purposes. We make no warranty that outputs are original, accurate, or that their use will not infringe third-party rights. You are responsible for ensuring your use of any output is lawful in your context.</p>

              <h3>Feedback</h3>
              <p>If you send us feedback or suggestions, you grant us a perpetual, royalty-free licence to use them without restriction.</p>
            </section>

            {/* SECTION 11 */}
            <section className={styles.section} id="s11">
              <h2>
                <span className={styles.sectionNum}>Section 11</span>
                Your content and uploads
              </h2>
              <p>You are responsible for:</p>
              <ul>
                <li>The accuracy and lawfulness of any content you submit to the Service</li>
                <li>Having the right to share any content you upload (including third-party contracts)</li>
                <li>Ensuring that uploads do not contain personal data of third parties beyond what is reasonably necessary, or that you have obtained appropriate consent</li>
              </ul>
              <p>We do not actively monitor user content but reserve the right to remove content that violates these Terms or applicable law, and to suspend accounts that repeatedly upload such content.</p>
              <p>For details on how we store and process your content, see our <Link href="/privacy">Privacy Policy</Link>.</p>
            </section>

            {/* SECTION 12 */}
            <section className={styles.section} id="s12">
              <h2>
                <span className={styles.sectionNum}>Section 12</span>
                Privacy
              </h2>
              <p>Our handling of your personal data is described in our <Link href="/privacy">Privacy Policy</Link>, which forms part of these Terms by reference. Please read it carefully.</p>
            </section>

            {/* SECTION 13 */}
            <section className={styles.section} id="s13">
              <h2>
                <span className={styles.sectionNum}>Section 13</span>
                Third-party services
              </h2>
              <p>The Service relies on third-party providers including Anthropic, OpenAI, Supabase, Stripe, Google, and others. Your use of the Service is subject to the terms of those providers where relevant. We are not responsible for the practices of third parties operating outside our direct control.</p>
              <p>The Service may contain links to third-party websites and services. We do not endorse and are not responsible for those sites or their content.</p>
            </section>

            {/* SECTION 14 */}
            <section className={styles.section} id="s14">
              <h2>
                <span className={styles.sectionNum}>Section 14</span>
                Service availability
              </h2>
              <p>We aim to provide the Service with reasonable availability, but we do not guarantee that it will be uninterrupted, error-free, or available at all times.</p>
              <p>We may from time to time:</p>
              <ul>
                <li>Perform maintenance or updates that affect availability</li>
                <li>Change, add, or remove features</li>
                <li>Suspend the Service to address security or legal issues</li>
              </ul>
              <p>We will give reasonable notice of planned downtime where possible.</p>
            </section>

            {/* SECTION 15 */}
            <section className={styles.section} id="s15">
              <h2>
                <span className={styles.sectionNum}>Section 15</span>
                Limitation of liability
              </h2>

              <h3>Nothing in these Terms excludes</h3>
              <p>Our liability for: (a) death or personal injury caused by our negligence, (b) fraud or fraudulent misrepresentation, (c) any other liability that cannot lawfully be excluded under the laws of England and Wales &mdash; including your statutory consumer rights under the Consumer Rights Act 2015.</p>

              <h3>To the maximum extent permitted by law</h3>
              <ul>
                <li>We are not liable for any indirect, incidental, special, consequential, or punitive loss; loss of profit, revenue, goodwill, business opportunities, anticipated savings, or data &mdash; whether arising in contract, tort (including negligence), or otherwise.</li>
                <li>We are not liable for losses arising from your reliance on MATE AI&rsquo;s outputs (see <a href="#s9">Section 9</a>).</li>
                <li>Our total aggregate liability to you in connection with the Service, in any 12-month period, is limited to the greater of (a) the total subscription fees you paid us in that 12-month period, or (b) £100.</li>
              </ul>
              <p>You acknowledge that these limits reflect a fair allocation of risk given the nature of an AI-assisted information service, and the price at which we offer it.</p>
            </section>

            {/* SECTION 16 */}
            <section className={styles.section} id="s16">
              <h2>
                <span className={styles.sectionNum}>Section 16</span>
                Indemnity
              </h2>
              <p>You agree to indemnify and hold harmless Talent Mates Limited and its directors, employees, and contractors from and against any claims, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of:</p>
              <ul>
                <li>Your breach of these Terms or applicable law</li>
                <li>Content you upload that infringes third-party rights or contains unlawful personal data</li>
                <li>Your misuse of MATE AI&rsquo;s outputs, including using them in place of qualified professional advice</li>
              </ul>
            </section>

            {/* SECTION 17 */}
            <section className={styles.section} id="s17">
              <h2>
                <span className={styles.sectionNum}>Section 17</span>
                Changes to these Terms
              </h2>
              <p>We may update these Terms from time to time. When we make material changes, we will give you at least <strong>14 days&rsquo; notice</strong> by email or in-product notice before the new Terms take effect. Continued use of the Service after the new Terms take effect means you accept them. If you do not accept, you may cancel your subscription.</p>
            </section>

            {/* SECTION 18 */}
            <section className={styles.section} id="s18">
              <h2>
                <span className={styles.sectionNum}>Section 18</span>
                Termination
              </h2>

              <h3>By you</h3>
              <p>You may close your account at any time as described in <a href="#s5">Section 5</a> and <a href="#s7">Section 7</a>.</p>

              <h3>By us</h3>
              <p>We may suspend or terminate your access immediately and without prior notice if:</p>
              <ul>
                <li>You materially breach these Terms (including <a href="#s8">Section 8 — Acceptable Use</a>)</li>
                <li>We reasonably suspect fraud or unlawful use of the Service</li>
                <li>We are required to do so by law or a competent authority</li>
                <li>Continued operation is no longer commercially viable and we discontinue the Service (in which case we will give you reasonable notice)</li>
              </ul>

              <h3>Effect</h3>
              <p>Sections that by their nature should survive termination &mdash; including Sections 9, 10, 15, 16, and 19 &mdash; will continue to apply.</p>
            </section>

            {/* SECTION 19 */}
            <section className={styles.section} id="s19">
              <h2>
                <span className={styles.sectionNum}>Section 19</span>
                Governing law and disputes
              </h2>
              <p>These Terms and any dispute or claim arising out of them are governed by the laws of <strong>England and Wales</strong>.</p>
              <p>If you are a consumer, you may bring proceedings against us in the courts of the country where you live. We may only bring proceedings against you in the courts of the country where you live. You may also benefit from any mandatory protections of consumer law in your country of residence.</p>
              <p>If you are a business, the courts of England and Wales have exclusive jurisdiction.</p>
              <p>We encourage you to contact us at <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a> first if you have a dispute. We will always try to resolve concerns informally before any formal proceedings.</p>
            </section>

            {/* SECTION 20 */}
            <section className={styles.section} id="s20">
              <h2>
                <span className={styles.sectionNum}>Section 20</span>
                Contact
              </h2>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Get in touch</div>
                <p>
                  Email: <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a>
                  <br />
                  Post: 5th Floor, 167&ndash;169 Great Portland Street, London W1W 5PF, United Kingdom
                  <br />
                  WhatsApp: <a href="https://wa.me/447756906679" target="_blank" rel="noopener">+44 7756 906679</a>
                </p>
              </div>
              <p>Talent Mates Limited · Registered in England and Wales · Company number 17263751</p>
            </section>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>© 2026 Talent Mates Limited · Companies House 17263751</div>
        <div className={styles.footerLinks}>
          <Link href="/about" className={styles.footerLink}>About</Link>
          <Link href="/privacy" className={styles.footerLink}>Privacy</Link>
          <Link href="/terms" className={styles.footerLink}>Terms</Link>
          <a href="mailto:hello@talent-mates.com" className={styles.footerLink}>Contact</a>
        </div>
      </footer>
    </>
  )
}
