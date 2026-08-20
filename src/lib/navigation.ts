// ─── NAVIGATION DATA ─────────────────────────────────
// Single source of truth. Edit here to update the entire site.

export type NavItem = {
  label: string
  href: string
  badge?: { text: string; pulse?: boolean }
  /** Renders as <a> instead of next/link — use for cross-origin URLs. */
  external?: boolean
}

export type NavSection = {
  id: string
  label: string
  items: NavItem[]
}

export type BottomLink = {
  label: string
  href: string
  external?: boolean
}

// Live apps — served by GitHub Pages (talent-mates-pddr repo) behind the
// app.talent-mates.com subdomain. Switching back to the github.io host is
// a one-line change here if ever needed.
const APP_HOST = 'https://app.talent-mates.com'

// MATE AI — use mate-redirect.html instead if you want the 3-second loading screen.
export const MATE_AI_URL  = `${APP_HOST}/mate-pro-auth.html?role=agent`

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'mate',
    label: 'MATE',
    items: [
      { label: 'MATE — AI Football Agent', href: MATE_AI_URL, external: true, badge: { text: 'AI', pulse: true } },
    ],
  },
  {
    id: 'representation',
    label: 'Representation',
    items: [
      { label: 'Representation', href: '/representation' },
    ],
  },
  {
    id: 'sport-endorsement',
    label: 'Sport Endorsement',
    items: [
      { label: 'Sport Endorsement', href: '/sports-endorsements' },
    ],
  },
]

export const BOTTOM_LINKS: BottomLink[] = [
  { label: 'About',      href: '/about' },
  { label: 'MATE AI',    href: MATE_AI_URL, external: true },
  { label: 'Contact us', href: 'mailto:hello@talent-mates.com' },
]

export const SOCIAL_LINKS = [
  { label: 'YouTube',  href: 'https://youtube.com/@talent-mates?si=jMiaSJHoqio9oFT-', icon: 'youtube'  },
  { label: 'X',        href: 'https://x.com/Talent_Mates',                      icon: 'x'        },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/talent-mates-limited', icon: 'linkedin' },
]
