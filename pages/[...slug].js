import { getAllMarkdownFiles, getMarkdownByPath, slugToPath, pathToSlug } from '../lib/markdown'

export default function MarkdownPage({ content, frontmatter, filePath }) {
  return (
    <article>
      {frontmatter?.title && <h1>{frontmatter.title}</h1>}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export async function getStaticPaths() {
  const allMarkdownFiles = getAllMarkdownFiles()

  // Generate paths for all markdown files
  const paths = allMarkdownFiles
    .filter(file => file !== 'README.md') // Skip README.md (handled by index.js)
    .map(file => ({
      params: {
        slug: pathToSlug(file),
      },
    }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const filePath = slugToPath(slug)

  try {
    const { contentHtml, frontmatter } = await getMarkdownByPath(filePath)

    // Transform markdown links to Next.js links
    const transformedContent = contentHtml.replace(
      /href="([^"]+\.md)"/g,
      (match, link) => {
        // Handle relative links
        if (link.startsWith('http://') || link.startsWith('https://')) {
          return match // Keep external links as-is
        }

        // Remove .md extension and create route
        const route = '/' + link.replace(/\.md$/, '').replace(/\\/g, '/')
        return `href="${route}"`
      }
    )

    // Serialize frontmatter to handle Date objects
    const serializedFrontmatter = JSON.parse(JSON.stringify(frontmatter))

    return {
      props: {
        content: transformedContent,
        frontmatter: serializedFrontmatter,
        filePath,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
