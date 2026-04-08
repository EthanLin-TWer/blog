const fs = require('fs')
const path = require('path')

const DEFAULT_POSTS_DIR = path.resolve(__dirname, '../../_posts')

const parse = (post = '') => {
  if (!post) {
    return {
      frontMatters: {},
      content: '',
    }
  }

  const trimmedPost = post.trim()
  if (!trimmedPost.startsWith('---')) {
    return {
      frontMatters: {},
      content: trimmedPost,
    }
  }

  const parts = trimmedPost.split('---')
  // parts[0] is empty (before first ---)
  // parts[1] is frontmatter
  // parts[2...] is content which might contain ---

  const frontMattersString = parts[1]
  const content = parts.slice(2).join('---').trim()

  const frontMatters = {}
  if (frontMattersString) {
    frontMattersString.split('\n').forEach((line) => {
      const index = line.indexOf(':')
      if (index !== -1) {
        const key = line.substring(0, index).trim()
        const value = line.substring(index + 1).trim()
        if (key) {
          frontMatters[key] = value
        }
      }
    })
  }

  return {
    frontMatters,
    content,
  }
}

const generatePosts = (postsDir = DEFAULT_POSTS_DIR) => {
  if (!fs.existsSync(postsDir)) {
    return []
  }

  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith('.md'))

  const posts = files.map((file) => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf-8')
    const { frontMatters, content: body } = parse(content)

    // Extract date from filename: YYYY-MM-DD-title.md
    const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/)
    let datePart = ''
    let slug = ''
    if (dateMatch) {
      datePart = dateMatch[1]
      slug = dateMatch[2]
    }

    // summary is the first paragraph
    // Remove markdown bold/italic if simple
    const summary = body
      .trim()
      .split('\n\n')[0]
      .replace(/\*\*/g, '')
      .replace(/\r/g, '')
      .replace(/\n/g, '') // remove internal newlines in paragraph?

    // Handle categories
    let category = ''
    let categoriesPath = ''
    if (frontMatters.categories) {
      const cats = frontMatters.categories.split(' ')
      category = cats.join('')
      categoriesPath = '/' + cats.join('/')
    } else if (frontMatters.category) {
      category = frontMatters.category
      // For single category string, we encode space to %20
      categoriesPath = '/' + category.replace(/ /g, '%20')
    }

    const datePath = datePart.replace(/-/g, '/')

    let id = ''
    if (categoriesPath) {
      id = categoriesPath + '/' + datePath + '/' + slug
    } else {
      id = '/' + datePath + '/' + slug
    }

    // tags
    let tags = ''
    if (frontMatters.tags) {
      tags = frontMatters.tags.split(' ').join(', ')
    }

    return {
      id,
      title: frontMatters.title || '',
      summary,
      category,
      tags,
      url: id + '.html',
      path: `_posts/${file}`,
      date: `${datePart} 00:00:00 +0000`,
      createdDate: datePart.replace(/-/g, '/'),
    }
  })

  // Sort by date desc
  return posts.sort((a, b) => b.date.localeCompare(a.date))
}

module.exports = {
  generatePosts,
  parse,
}
