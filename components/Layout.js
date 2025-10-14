import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <h1>
          <Link href="/">UDS Documentation Library</Link>
        </h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/INDEX">Index</Link>
          <Link href="/STRUCTURE">Structure</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>UDS Consolidated Content Library</p>
        <p>Hosted on Vercel | Auto-deployed from GitHub</p>
      </footer>
    </div>
  )
}
