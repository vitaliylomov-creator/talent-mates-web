import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './privacy.module.css'

// ─── METADATA ───────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Privacy Policy — Talent Mates',
  description:
    'How Talent Mates Limited collects, uses, and protects your personal data when you use MATE AI and our services.',
  alternates: { canonical: 'https://talent-mates.com/privacy' },
  openGraph: {
    title: 'Privacy Policy — Talent Mates',
    description:
      'How Talent Mates collects, uses, and protects your personal data.',
    url: 'https://talent-mates.com/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy — Talent Mates',
    description:
      'How Talent Mates collects, uses, and protects your personal data.',
  },
}

// ─── TOC ENTRIES ────────────────────────────────────────
const TOC = [
  ['s1', 'About this policy'],
  ['s2', 'Data we collect'],
  ['s3', 'How we collect it'],
  ['s4', 'Why we use it'],
  ['s5', 'AI processing'],
  ['s6', 'Who we share it with'],
  ['s7', 'International transfers'],
  ['s8', 'How long we keep it'],
  ['s9', 'Your rights'],
  ['s10', 'Marketing'],
  ['s11', 'Cookies'],
  ['s12', 'Minors'],
  ['s13', 'Security'],
  ['s14', 'Automated decisions'],
  ['s15', 'Changes'],
  ['s16', 'Contact us'],
  ['s17', 'Complaints'],
] as const

// ─── PAGE ───────────────────────────────────────────────
export default function PrivacyPage() {
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
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroSub}>
            How Talent Mates Limited collects, uses, and protects your personal data when you use MATE AI and the services at talent-mates.com.
          </p>
          <div className={styles.heroMeta}>
            <span>Last updated: 10 June 2026</span>
            <span>Version 1.0</span>
            <span>UK GDPR · Data Protection Act 2018</span>
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
                About this policy
              </h2>
              <p>
                This Privacy Policy explains how <strong>Talent Mates Limited</strong>{' '}
                (&ldquo;Talent Mates&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, stores, and protects your personal data when you visit talent-mates.com, sign up to MATE AI, or interact with our services.
              </p>
              <p>
                We are the <strong>data controller</strong> for personal data we collect about you. That means we decide what data is collected and how it is used.
              </p>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Data controller</div>
                <p>
                  <strong>Talent Mates Limited</strong>
                  <br />
                  Company number: 17263751
                  <br />
                  Registered office: 5th Floor, 167&ndash;169 Great Portland Street, London W1W 5PF, United Kingdom
                  <br />
                  ICO Registration: <em>[to be inserted after registration]</em>
                  <br />
                  Contact: <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a>
                </p>
              </div>
              <p>
                This policy is governed by the laws of England and Wales and complies with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the <strong>Data Protection Act 2018</strong>.
              </p>
            </section>

            {/* SECTION 02 */}
            <section className={styles.section} id="s2">
              <h2>
                <span className={styles.sectionNum}>Section 02</span>
                Data we collect
              </h2>
              <p>We collect different categories of personal data depending on how you use the service.</p>

              <h3>Account data</h3>
              <ul>
                <li>Email address</li>
                <li>Hashed password (we never store passwords in plain text)</li>
                <li>If you sign in with Google: your Google account ID, name, profile photo, and email address as supplied by Google OAuth</li>
              </ul>

              <h3>Profile data (entered by you)</h3>
              <ul>
                <li>Full name, date of birth, nationality</li>
                <li>Current club, current league, position, dominant foot</li>
                <li>Height, weight, contract expiry date</li>
                <li>Agent name, career history, current country of residence</li>
                <li>Language preferences, biographical notes</li>
              </ul>

              <h3>Use data</h3>
              <ul>
                <li>Conversations between you and MATE AI&rsquo;s sub-agents (Legal Advisor, Performance Coach, Transfer Analyst, Concierge)</li>
                <li>Training session logs you record (date, type, duration, RPE, fatigue, sleep, injury notes, performance metrics)</li>
                <li>Files you upload, such as contract PDFs</li>
                <li>Session timestamps and feature usage</li>
              </ul>

              <h3>Payment data</h3>
              <p>
                Payments are processed by <strong>Stripe Payments Europe Ltd</strong> (Ireland). We do <em>not</em> see or store your full payment card details. We receive from Stripe: the last four digits of your card, card brand, billing address, transaction ID, subscription status, and renewal dates.
              </p>

              <h3>Technical data</h3>
              <ul>
                <li>IP address, browser type, device type, operating system</li>
                <li>Referring URL, pages visited within our service, click events</li>
                <li>Approximate location (derived from IP, country-level)</li>
                <li>Cookies and similar technologies (see <a href="#s11">Section 11</a>)</li>
              </ul>
            </section>

            {/* SECTION 03 */}
            <section className={styles.section} id="s3">
              <h2>
                <span className={styles.sectionNum}>Section 03</span>
                How we collect it
              </h2>
              <h3>Directly from you</h3>
              <p>When you create an account, complete your profile, send messages to MATE AI, log training, upload files, or make a payment.</p>

              <h3>Automatically</h3>
              <p>Through cookies, server logs, and analytics tools when you interact with our services.</p>

              <h3>From third parties</h3>
              <p>If you sign in with Google, Google provides limited profile information (name, email, account ID, photo) through the OAuth protocol. If you pay through Stripe, Stripe returns transaction data to us. We do not buy personal data from data brokers.</p>
            </section>

            {/* SECTION 04 */}
            <section className={styles.section} id="s4">
              <h2>
                <span className={styles.sectionNum}>Section 04</span>
                Why we use your data and our legal basis
              </h2>
              <p>Under UK GDPR, we must have a lawful basis for every type of processing. Below is the summary.</p>

              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Data used</th>
                    <th>Legal basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Provide MATE AI and operate your account</td>
                    <td>Account, profile, use data</td>
                    <td>Performance of a contract</td>
                  </tr>
                  <tr>
                    <td>Process subscription payments</td>
                    <td>Payment data</td>
                    <td>Performance of a contract</td>
                  </tr>
                  <tr>
                    <td>Improve and develop the service</td>
                    <td>Aggregate use data, technical data</td>
                    <td>Legitimate interests</td>
                  </tr>
                  <tr>
                    <td>Send service emails (e.g. password reset, billing)</td>
                    <td>Account data</td>
                    <td>Performance of a contract</td>
                  </tr>
                  <tr>
                    <td>Send marketing emails (only with your consent)</td>
                    <td>Email address</td>
                    <td>Consent (which you may withdraw)</td>
                  </tr>
                  <tr>
                    <td>Comply with legal obligations (tax, accounting)</td>
                    <td>Payment, account data</td>
                    <td>Legal obligation</td>
                  </tr>
                  <tr>
                    <td>Detect and prevent fraud or misuse</td>
                    <td>Technical, use, account data</td>
                    <td>Legitimate interests</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* SECTION 05 */}
            <section className={styles.section} id="s5">
              <h2>
                <span className={styles.sectionNum}>Section 05</span>
                How AI processes your data
              </h2>
              <p>MATE AI is built on large language models provided by third-party AI providers. When you interact with MATE AI, the following data is sent to them in real time:</p>
              <ul>
                <li>Your messages and queries</li>
                <li>Relevant context from your profile (e.g. position, club, language preference)</li>
                <li>Recent conversation history (for continuity)</li>
                <li>Any files you upload during a session</li>
                <li>Relevant training log entries (when interacting with the Performance Coach)</li>
              </ul>

              <h3>AI sub-processors</h3>
              <p>Our current AI sub-processors are:</p>
              <ul>
                <li><strong>Anthropic PBC</strong> (San Francisco, United States) &mdash; provides the Claude language model that powers all four MATE AI sub-agents</li>
                <li><strong>OpenAI Inc.</strong> (San Francisco, United States) &mdash; provides the embedding model used to search our regulatory knowledge base</li>
              </ul>
              <p>
                Under the API terms with both providers, <strong>your data is not used to train their models</strong>. Your data is processed by them solely to generate the response you receive. Both providers operate under strict data processing agreements with us.
              </p>

              <h3>Important AI limitations</h3>
              <p>MATE AI provides general information and analysis. It is not:</p>
              <ul>
                <li>A regulated source of legal advice (the Legal Advisor sub-agent provides general information about football regulations only)</li>
                <li>A regulated source of medical advice (the Performance Coach provides general fitness information only)</li>
                <li>A regulated financial or career advisor</li>
              </ul>
              <p>
                For details on the limits of MATE AI&rsquo;s outputs and how they may be used, see our{' '}
                <Link href="/terms">Terms of Service</Link>.
              </p>
            </section>

            {/* SECTION 06 */}
            <section className={styles.section} id="s6">
              <h2>
                <span className={styles.sectionNum}>Section 06</span>
                Who we share your data with
              </h2>
              <p>We do not sell your personal data. We share it only with the categories of recipients listed below, and only as needed to operate the service.</p>

              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Recipient</th>
                    <th>Purpose</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Anthropic PBC</td><td>AI language model processing</td><td>United States</td></tr>
                  <tr><td>OpenAI Inc.</td><td>Embeddings (knowledge base search)</td><td>United States</td></tr>
                  <tr><td>Supabase Inc.</td><td>Database, authentication, file storage, backend functions</td><td>European Union (Frankfurt region)</td></tr>
                  <tr><td>Stripe Payments Europe Ltd</td><td>Payment processing</td><td>Ireland (with US sub-processors)</td></tr>
                  <tr><td>Google LLC</td><td>OAuth sign-in (only if you choose Google login)</td><td>United States</td></tr>
                  <tr><td>GitHub Inc.</td><td>Static site hosting (web pages, not your personal data)</td><td>United States</td></tr>
                  <tr><td>Auditors, accountants, legal advisors</td><td>Statutory compliance</td><td>United Kingdom</td></tr>
                  <tr><td>Regulatory authorities</td><td>If required by law</td><td>United Kingdom</td></tr>
                </tbody>
              </table>
            </section>

            {/* SECTION 07 */}
            <section className={styles.section} id="s7">
              <h2>
                <span className={styles.sectionNum}>Section 07</span>
                International transfers
              </h2>
              <p>Some of our sub-processors are located outside the United Kingdom, primarily in the United States and the European Union. When personal data is transferred outside the UK, we ensure appropriate safeguards are in place, including:</p>
              <ul>
                <li><strong>Adequacy decisions</strong> issued by the UK government (for EU transfers)</li>
                <li><strong>UK International Data Transfer Agreement (IDTA)</strong> or <strong>EU Standard Contractual Clauses (SCCs) + UK Addendum</strong> (for US transfers)</li>
                <li>Sub-processor commitments to UK GDPR-equivalent standards</li>
              </ul>
              <p>You may request a copy of our transfer safeguards by emailing <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a>.</p>
            </section>

            {/* SECTION 08 */}
            <section className={styles.section} id="s8">
              <h2>
                <span className={styles.sectionNum}>Section 08</span>
                How long we keep your data
              </h2>
              <p>We keep personal data only as long as necessary for the purposes set out in this policy.</p>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Data category</th>
                    <th>Retention period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Account and profile data</td><td>For the lifetime of your account, then deleted within 30 days of account closure</td></tr>
                  <tr><td>Conversation history and training logs</td><td>Deleted within 30 days of account closure (or sooner if you delete individual chats)</td></tr>
                  <tr><td>Uploaded files (contract PDFs etc.)</td><td>Deleted within 7 days of you removing them, or 30 days after account closure</td></tr>
                  <tr><td>Payment and billing records</td><td>7 years (UK statutory retention for financial records)</td></tr>
                  <tr><td>Server logs and analytics</td><td>13 months</td></tr>
                  <tr><td>Marketing consent records</td><td>While you have an active account, plus 24 months</td></tr>
                </tbody>
              </table>
            </section>

            {/* SECTION 09 */}
            <section className={styles.section} id="s9">
              <h2>
                <span className={styles.sectionNum}>Section 09</span>
                Your rights under UK GDPR
              </h2>
              <p>You have the following rights regarding your personal data:</p>

              <h3>Right of access</h3>
              <p>You can request a copy of the personal data we hold about you.</p>

              <h3>Right to rectification</h3>
              <p>You can ask us to correct inaccurate or incomplete data.</p>

              <h3>Right to erasure (&ldquo;right to be forgotten&rdquo;)</h3>
              <p>You can ask us to delete your data. We will do so within 30 days unless we are required to keep it by law (for example, payment records for tax purposes).</p>

              <h3>Right to restrict processing</h3>
              <p>You can ask us to pause processing of your data in certain circumstances.</p>

              <h3>Right to data portability</h3>
              <p>You can request your data in a structured, machine-readable format and transfer it to another service.</p>

              <h3>Right to object</h3>
              <p>You can object to processing based on legitimate interests, including marketing.</p>

              <h3>Right to withdraw consent</h3>
              <p>Where we rely on consent, you can withdraw it at any time without affecting prior lawful processing.</p>

              <h3>How to exercise your rights</h3>
              <p>Email <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a> with the subject line &ldquo;Data rights request&rdquo;. We will respond within one month. There is no fee for most requests.</p>
            </section>

            {/* SECTION 10 */}
            <section className={styles.section} id="s10">
              <h2>
                <span className={styles.sectionNum}>Section 10</span>
                Marketing communications
              </h2>
              <p>We will only send you marketing emails if you have explicitly opted in. You can unsubscribe at any time using the link in any marketing email, or by emailing <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a>.</p>
              <p>We never share your email with third parties for their own marketing.</p>
              <p>Service emails (account, billing, security alerts) are sent on the basis of contract performance and cannot be opted out of while you have an active account.</p>
            </section>

            {/* SECTION 11 */}
            <section className={styles.section} id="s11">
              <h2>
                <span className={styles.sectionNum}>Section 11</span>
                Cookies
              </h2>
              <p>We use cookies and similar technologies to operate the service, remember your preferences, and understand usage.</p>

              <h3>Strictly necessary cookies</h3>
              <p>Required to deliver the service: authentication session, security tokens, load balancing. These cannot be turned off.</p>

              <h3>Functional cookies</h3>
              <p>Remember your preferences (language, agent selection, sidebar state). Set only if you accept them.</p>

              <h3>Analytics cookies</h3>
              <p>Help us understand how the service is used, in aggregate. Set only if you accept them.</p>

              <h3>Marketing cookies</h3>
              <p>We do not currently use marketing or advertising cookies. If we add them in future, we will update this policy and request your consent.</p>

              <p>You can manage cookie preferences via your browser settings or our cookie banner when it appears. Note that blocking strictly necessary cookies may break parts of the service.</p>
            </section>

            {/* SECTION 12 */}
            <section className={styles.section} id="s12">
              <h2>
                <span className={styles.sectionNum}>Section 12</span>
                Minors and young athletes
              </h2>
              <p>MATE AI is designed for use by professional and semi-professional athletes. Many such users are under 18.</p>

              <h3>Age requirements</h3>
              <ul>
                <li><strong>Under 13:</strong> You may not create an account. We do not knowingly collect personal data from anyone under 13. If we discover we have collected data from a child under 13, we will delete it promptly.</li>
                <li><strong>13 to 17:</strong> You may use MATE AI only with the verifiable consent of a parent or legal guardian. The parent or guardian must be the account holder and consent to our processing of the young athlete&rsquo;s data.</li>
                <li><strong>18 and over:</strong> You may create your own account.</li>
              </ul>

              <h3>Extra safeguards for under-18 users</h3>
              <ul>
                <li>We minimise data collection from minors to what is necessary to provide the service</li>
                <li>We do not target marketing at users under 18</li>
                <li>Parents/guardians can request access, correction, or deletion of the minor&rsquo;s data at any time</li>
              </ul>
              <p>If you believe a minor is using the service without proper parental consent, please contact <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a>.</p>
            </section>

            {/* SECTION 13 */}
            <section className={styles.section} id="s13">
              <h2>
                <span className={styles.sectionNum}>Section 13</span>
                Security
              </h2>
              <p>We take security seriously. Our measures include:</p>
              <ul>
                <li>TLS/HTTPS encryption for all data in transit</li>
                <li>At-rest encryption for our database and file storage</li>
                <li>Passwords hashed using industry-standard algorithms (we never see your password)</li>
                <li>Row-level security policies on our database to isolate user data</li>
                <li>Multi-factor authentication available on the underlying platform</li>
                <li>Regular security review of code, dependencies, and access controls</li>
                <li>Restricted access to production systems on a need-to-know basis</li>
              </ul>
              <p>No service can guarantee perfect security. If you become aware of a security incident affecting your account, contact <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a> immediately. We will notify you and the ICO of any breach affecting your rights within the timelines required by law.</p>
            </section>

            {/* SECTION 14 */}
            <section className={styles.section} id="s14">
              <h2>
                <span className={styles.sectionNum}>Section 14</span>
                Automated decision-making
              </h2>
              <p>MATE AI uses AI to generate responses to your questions. However, we do <strong>not</strong> use automated decision-making (including AI) to make decisions that produce legal or similarly significant effects on you within the meaning of Article 22 of the UK GDPR.</p>
              <p>MATE AI&rsquo;s outputs are informational. You remain solely responsible for any decisions you make based on them. We recommend that you verify MATE AI&rsquo;s outputs with qualified human professionals before acting on them in matters of law, health, finance, or career.</p>
            </section>

            {/* SECTION 15 */}
            <section className={styles.section} id="s15">
              <h2>
                <span className={styles.sectionNum}>Section 15</span>
                Changes to this policy
              </h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in the service, our practices, or the law. When we make material changes, we will notify you by email or in-product notice at least 14 days before the changes take effect. The &ldquo;Last updated&rdquo; date at the top of this page shows the most recent revision.</p>
            </section>

            {/* SECTION 16 */}
            <section className={styles.section} id="s16">
              <h2>
                <span className={styles.sectionNum}>Section 16</span>
                How to contact us
              </h2>
              <p>For any privacy-related question or to exercise your rights, please contact us:</p>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Talent Mates Limited</div>
                <p>
                  Email: <a href="mailto:hello@talent-mates.com">hello@talent-mates.com</a>
                  <br />
                  Post: 5th Floor, 167&ndash;169 Great Portland Street, London W1W 5PF, United Kingdom
                  <br />
                  WhatsApp: <a href="https://wa.me/447756906679" target="_blank" rel="noopener">+44 7756 906679</a>
                </p>
              </div>
            </section>

            {/* SECTION 17 */}
            <section className={styles.section} id="s17">
              <h2>
                <span className={styles.sectionNum}>Section 17</span>
                Complaints to the ICO
              </h2>
              <p>If you believe we have not handled your personal data properly, we would like the chance to put things right. Please contact us first.</p>
              <p>You also have the right to lodge a complaint with the UK Information Commissioner&rsquo;s Office (ICO):</p>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Information Commissioner&rsquo;s Office</div>
                <p>
                  Website: <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener">ico.org.uk/make-a-complaint</a>
                  <br />
                  Telephone: 0303 123 1113
                  <br />
                  Address: Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF
                </p>
              </div>
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
