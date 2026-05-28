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

// MATE AI live app — entry from the marketing site.
// Use mate-redirect.html instead if you want the 3-second loading screen.
export const MATE_AI_URL =
  'https://vitaliylomov-creator.github.io/talent-mates-pddr/mate-auth.html'

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'talent',
    label: 'For Talent',
    items: [
      { label: 'Sports Talent',            href: '/sports-talent' },
      { label: 'Entertainment Talent',     href: '/entertainment-talent' },
      { label: 'Talent Mates Creators',    href: '/talent-mates-creators' },
      { label: 'MATE — AI Football Agent', href: MATE_AI_URL, external: true, badge: { text: 'AI', pulse: true } },
      { label: 'Player Diagnostic Report', href: '/pddr' },
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
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/talent-mates', icon: 'linkedin' },
  { label: 'YouTube',   href: 'https://youtube.com/@talentmates',          icon: 'youtube'  },
  { label: 'Instagram', href: 'https://instagram.com/talentmates',         icon: 'instagram' },
]
