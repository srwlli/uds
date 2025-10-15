import { getMarkdownByPath } from '../lib/markdown'
import Link from 'next/link'

export default function Home({ content, frontmatter }) {
  // Split content at "Browse Documentation" heading to separate hero from rest
  const browseSectionIndex = content.indexOf('<h2 id="browse-documentation">Browse Documentation</h2>')
  const heroContent = browseSectionIndex > 0 ? content.substring(0, browseSectionIndex) : content
  const restContent = browseSectionIndex > 0 ? content.substring(browseSectionIndex) : ''

  return (
    <div>
      {/* Hero section */}
      <div dangerouslySetInnerHTML={{ __html: heroContent }} />

      {/* Category cards - PRIMARY NAVIGATION */}
      <div className="category-grid" style={{ marginTop: '2rem', marginBottom: '3rem' }}>
        <div className="category-card">
          <h3>📋 Agent Instructions</h3>
          <p>5 files - AI agent profiles and prompts</p>
          <Link href="/agent-instructions/README">Browse →</Link>
        </div>

        <div className="category-card">
          <h3>📘 Core Standards</h3>
          <p>25 files - Fundamental documentation standards</p>
          <Link href="/core-standards/README">Browse →</Link>
        </div>

        <div className="category-card">
          <h3>🎓 Guides</h3>
          <p>12 files - Training and implementation guides</p>
          <Link href="/guides/README">Browse →</Link>
        </div>

        <div className="category-card">
          <h3>📁 Project Documentation</h3>
          <p>8 files - Summaries, roadmaps, and references</p>
          <Link href="/project-docs/README">Browse →</Link>
        </div>

        <div className="category-card">
          <h3>📄 Templates</h3>
          <p>2 files - Document templates and scaffolds</p>
          <Link href="/templates/README">Browse →</Link>
        </div>

        <div className="category-card">
          <h3>🛠️ Tools</h3>
          <p>1 file - Validation and automation tools</p>
          <Link href="/tools/README">Browse →</Link>
        </div>
      </div>

      {/* Rest of content */}
      <div dangerouslySetInnerHTML={{ __html: restContent }} />
    </div>
  )
}

export async function getStaticProps() {
  const { contentHtml, frontmatter } = await getMarkdownByPath('README.md')

  // Transform markdown links to Next.js links
  const transformedContent = contentHtml.replace(
    /href="([^"]+)"/g,
    (match, link) => {
      // Keep external links as-is
      if (link.startsWith('http://') || link.startsWith('https://') || link.startsWith('#')) {
        return match
      }

      // Transform internal links
      let route = link
      // Remove .md extension if present
      route = route.replace(/\.md$/, '')
      // Remove trailing slash and add /README for directory links
      if (route.endsWith('/')) {
        route = route.slice(0, -1) + '/README'
      }
      // Ensure leading slash
      if (!route.startsWith('/')) {
        route = '/' + route
      }
      return `href="${route}"`
    }
  )

  // Serialize frontmatter to handle Date objects
  const serializedFrontmatter = JSON.parse(JSON.stringify(frontmatter))

  return {
    props: {
      content: transformedContent,
      frontmatter: serializedFrontmatter,
    },
  }
}
