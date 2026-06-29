import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import ConciergeWidget from '@/components/ConciergeWidget'
import '@/styles/globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Talent Mates — Talent, Technology & Culture',
  description: 'Talent Mates is a next-generation sports and creative agency operating at the intersection of talent, technology, and culture.',
  metadataBase: new URL('https://talent-mates.com'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#794DC6',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>
        {/* CookieYes — GDPR cookie banner. Must fire before any tracking
            scripts to satisfy UK GDPR consent-before-collection. Next.js
            hoists strategy="beforeInteractive" scripts into <head>. */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/dd4227d07a88f88f518d9ff8f73285b0/script.js"
          strategy="beforeInteractive"
        />
        {children}
        <ConciergeWidget />
        <Analytics />
      </body>
    </html>
  )
}
