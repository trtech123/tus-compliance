import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Compliance Portal</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Link
          href="/privacy"
          style={{
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#0070f3',
            fontSize: '1.2rem'
          }}
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms"
          style={{
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#0070f3',
            fontSize: '1.2rem'
          }}
        >
          Terms of Service
        </Link>

        <Link
          href="/data-deletion"
          style={{
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#0070f3',
            fontSize: '1.2rem'
          }}
        >
          Data Deletion Request
        </Link>
      </div>
    </main>
  )
}
