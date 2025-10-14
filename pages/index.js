import { getMarkdownByPath } from '../lib/markdown'
import Link from 'next/link'

export default function Home({ content, frontmatter }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />

      <div className="category-grid">
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
    </div>
  )
}

export async function getStaticProps() {
  const { contentHtml, frontmatter } = await getMarkdownByPath('README.md')

  // Serialize frontmatter to handle Date objects
  const serializedFrontmatter = JSON.parse(JSON.stringify(frontmatter))

  return {
    props: {
      content: contentHtml,
      frontmatter: serializedFrontmatter,
    },
  }
}
