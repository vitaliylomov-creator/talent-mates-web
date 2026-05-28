// ─── NAVIGATION DATA ─────────────────────────────────
// Single source of truth. Edit here to update the entire site.

export type NavItem = {
  label: string
  href: string
  badge?: { text: string; pulse?: boolean }
}

export type NavSection = {
  id: string
  label: string
  items: NavItem[]
}

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'talent',
    label: 'For Talent',
    items: [
      { label: 'Sports Talent',            href: '/sports-talent' },
      { label: 'Entertainment Talent',     href: '/entertainment-talent' },
      { label: 'Talent Mates Creators',    href: '/talent-mates-creators' },
      { label: 'MATE — AI Football Agent', href: '/mate',  badge: { text: 'AI',  pulse: true } },
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

export const BOTTOM_LINKS = [
  { label: 'About',      href: '/about' },
  { label: 'MATE AI',    href: '/mate' },
  { label: 'Contact us', href: 'mailto:hello@talent-mates.com' },
]

export const SOCIAL_LINKS = [
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/talent-mates', icon: 'linkedin' },
  { label: 'YouTube',   href: 'https://youtube.com/@talentmates',          icon: 'youtube'  },
  { label: 'Instagram', href: 'https://instagram.com/talentmates',         icon: 'instagram' },
]
