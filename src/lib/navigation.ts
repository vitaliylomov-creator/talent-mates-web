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
export const CREATORS_URL = `${APP_HOST}/creators-auth.html`
export const PDDR_URL     = `${APP_HOST}/player_report_sign.html`
// MUSE AI — pre-launch presentation page (auth wires in Sprint 1).
export const MUSE_AI_URL  = `${APP_HOST}/muse-auth.html`

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'talent',
    label: 'For Talent',
    items: [
      // Order: flagship products first (MATE, Muse, Magnetism), then PDDR
      // diagnostic, then Sports Talent (→ /representation) as the last entry.
      { label: 'MATE — AI Football Agent',       href: MATE_AI_URL,  external: true, badge: { text: 'AI', pulse: true } },
      { label: 'Muse AI — Personal AI Producer', href: MUSE_AI_URL,  external: true, badge: { text: 'AI', pulse: true } },
      { label: 'Magnetism',                      href: CREATORS_URL, external: true },
      { label: 'Player Diagnostic Report',       href: PDDR_URL,     external: true },
      { label: 'Sports Talent',                  href: '/representation' },
    ],
  },
  {
    id: 'brand',
    label: 'For Brand',
    items: [
      { label: 'Brand Consulting',  href: '/brand-consulting' },
      { label: 'Brand Management',  href: '/brand-management' },
      { label: 'Brand Studio',      href: '/brand-studio' },
    ],
  },
  {
    id: 'style',
    label: 'For Style',
    items: [
      { label: 'Sports Endorsements',     href: '/sports-endorsements' },
      { label: 'Media & Entertainment',   href: '/media-entertainment' },
      { label: 'Life Style',              href: '/lifestyle' },
    ],
  },
  {
    id: 'enterprise',
    label: 'For Enterprise',
    items: [
      { label: 'Talent Mates AI Lab',   href: '/ai-lab',        badge: { text: 'New', pulse: true } },
      { label: 'Football Club Solutions', href: '/club-solutions' },
      { label: 'Academy Tools',          href: '/academy-tools' },
      { label: 'Partnerships',           href: '/partnerships' },
    ],
  },
]

export const BOTTOM_LINKS: BottomLink[] = [
  { label: 'About',      href: '/about' },
  { label: 'MATE AI',    href: MATE_AI_URL, external: true },
  { label: 'Contact us', href: 'mailto:hello@talent-mates.com' },
]

export const SOCIAL_LINKS = [
  { label: 'YouTube',  href: 'https://www.youtube.com/@TalentMates-AI',         icon: 'youtube'  },
  { label: 'X',        href: 'https://x.com/Talent_Mates',                      icon: 'x'        },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/talent-mates-limited', icon: 'linkedin' },
]
