import Link from 'next/link'

export default function StubPage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--purple)',
      color: 'var(--white)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 'max(52px, 10vw)',
      fontFamily: 'var(--font-b)',
    }}>
      <p style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', opacity: 0.45, marginBottom: 24 }}>
        Talent Mates
      </p>
      <h1 style={{
        fontFamily: 'var(--font-d)',
        fontSize: 'clamp(40px, 7vw, 96px)',
        fontWeight: 400,
        lineHeight: 1.05,
        marginBottom: 48,
      }}>
        Coming Soon
      </h1>
      <Link href="/" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.55 }}>
        ← Back
      </Link>
    </main>
  )
}
