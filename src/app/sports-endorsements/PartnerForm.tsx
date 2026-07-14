'use client'

import { useState, type FormEvent } from 'react'
import styles from './sports-endorsements.module.css'

const FORM_ACTION = 'https://formsubmit.co/invest@talent-mates.com'

export default function PartnerForm() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setSending(true)

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSent(true)
        // Scroll the success block into view in the next tick so the DOM has it.
        setTimeout(() => {
          document.getElementById('formSuccess')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 50)
        return
      }
      // FormSubmit returned an error — fall back to a native form submit
      // (this navigates the user to FormSubmit's own thank-you page).
      form.submit()
    } catch {
      // CSP / network failure — same fallback.
      form.submit()
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div id="formSuccess" className={styles.formSuccess}>
        <div className={styles.okEyebrow}>Received in London</div>
        <h3 className={styles.okHead}>Your enquiry is in. <em>The founder will reply.</em></h3>
        <p className={styles.okDesc}>
          Expect a personal note from Vitalii Lomov within two working days. In the meantime,
          your message is being read in London — not by an inbox filter.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} action={FORM_ACTION} method="POST" onSubmit={onSubmit}>
      {/* FormSubmit configuration */}
      <input type="hidden" name="_subject"      value="New Sports Endorsements enquiry — Talent Mates" />
      <input type="hidden" name="_template"     value="table" />
      <input type="hidden" name="_captcha"      value="true" />
      <input
        type="hidden"
        name="_autoresponse"
        value="Thank you for your enquiry. The founder of Talent Mates has received your note personally and will reply from London within two working days. — Talent Mates Limited"
      />
      {/* Honeypot — bots will fill it; humans never see it */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className={styles.honey} />

      <div className={styles.field}>
        <label htmlFor="firstName">First name <span className={styles.req}>*</span></label>
        <input type="text" id="firstName" name="First Name" required autoComplete="given-name" />
      </div>

      <div className={styles.field}>
        <label htmlFor="lastName">Last name <span className={styles.req}>*</span></label>
        <input type="text" id="lastName" name="Last Name" required autoComplete="family-name" />
      </div>

      <div className={styles.field}>
        <label htmlFor="organisation">Organisation <span className={styles.req}>*</span></label>
        <input type="text" id="organisation" name="Organisation" required autoComplete="organization" />
      </div>

      <div className={styles.field}>
        <label htmlFor="role">Role</label>
        <input type="text" id="role" name="Role" autoComplete="organization-title" placeholder="e.g. Head of Partnerships" />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email <span className={styles.req}>*</span></label>
        <input type="email" id="email" name="Email" required autoComplete="email" />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">Country <span className={styles.req}>*</span></label>
        <input type="text" id="country" name="Country" required autoComplete="country-name" placeholder="e.g. United Kingdom" />
      </div>

      <div className={styles.field}>
        <label htmlFor="agent">Agent of interest</label>
        <select id="agent" name="Agent of Interest" defaultValue="Open — recommend">
          <option value="Open — recommend">Open — recommend</option>
          <option value="MATE — football">MATE — football</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="tier">Tier of interest</label>
        <select id="tier" name="Tier of Interest" defaultValue="Exploring — open to recommendation">
          <option value="Exploring — open to recommendation">Exploring — open to recommendation</option>
          <option value="Title Partner">Title Partner</option>
          <option value="Category Partner">Category Partner</option>
          <option value="Launch Partner">Launch Partner</option>
        </select>
      </div>

      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label htmlFor="opportunity">The opportunity, in your words</label>
        <textarea
          id="opportunity"
          name="The Opportunity"
          placeholder="The brand, the category, the moment you have in mind. A paragraph is enough."
        />
      </div>

      <div className={styles.formFoot}>
        <p className={styles.formNote}>
          By submitting, you agree to be contacted by Talent Mates Limited regarding this enquiry. We do not share enquiries with third parties.
        </p>
        <button type="submit" className={styles.formSubmit} disabled={sending}>
          {sending ? 'Sending…' : 'Send enquiry'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  )
}
