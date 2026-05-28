import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Talent Mates — Talent, Technology & Culture',
  description:
    'Talent Mates is a next-generation sports and creative agency operating at the intersection of talent, technology, and culture.',
  metadataBase: new URL('https://talent-mates.com'),
  openGraph: {
    title: 'Talent Mates',
    description: 'Talent, technology, and culture — intersected.',
    url: 'https://talent-mates.com',
    siteName: 'Talent Mates',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talent Mates',
    description: 'Talent, technology, and culture — intersected.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#794DC6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
