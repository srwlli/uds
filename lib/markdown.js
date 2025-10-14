import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd())

// Get all markdown files recursively
export function getAllMarkdownFiles(dir = contentDirectory, fileList = []) {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // Skip node_modules, .next, and other build directories
      if (!['node_modules', '.next', 'out', '.git', '.claude', 'coderef'].includes(file)) {
        getAllMarkdownFiles(filePath, fileList)
      }
    } else if (file.endsWith('.md')) {
      // Get path relative to project root
      const relativePath = path.relative(contentDirectory, filePath)
      fileList.push(relativePath.replace(/\\/g, '/')) // Normalize to forward slashes
    }
  })

  return fileList
}

// Get markdown content by file path
export async function getMarkdownByPath(filePath) {
  const fullPath = path.join(contentDirectory, filePath)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Parse frontmatter
  const { data, content } = matter(fileContents)

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    filePath,
    frontmatter: data,
    contentHtml,
  }
}

// Convert markdown file path to URL slug
export function pathToSlug(filePath) {
  // Remove .md extension and convert to array
  return filePath
    .replace(/\.md$/, '')
    .split('/')
    .filter(segment => segment !== '')
}

// Convert URL slug to markdown file path
export function slugToPath(slug) {
  if (!slug || slug.length === 0) {
    return 'README.md'
  }
  return slug.join('/') + '.md'
}
