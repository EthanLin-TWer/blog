interface FrontMatter {
  [key: string]: string
}

interface JekyllPost {
  frontMatters: FrontMatter
  content: string
}

const JEKYLL_SEPARATOR = '---\n'
const JEKYLL_SEPARATOR_NEW = '---'
// this assumes there is only one pair of front matter separator in 'content'
const extractFromString = (content: string): FrontMatter =>
  content
    .substring(
      content.indexOf(JEKYLL_SEPARATOR_NEW) + JEKYLL_SEPARATOR_NEW.length,
      content.lastIndexOf(JEKYLL_SEPARATOR_NEW)
    )
    .split('\n')
    .map((each) => each)
    .filter((line) => line && line.trim() !== JEKYLL_SEPARATOR)
    .map((each) => each.split(':'))
    .map(([key, value]) => ({ [key]: value.trim() }))
    .reduce((result, next) => ({ ...result, ...next }), {})

const formatter = (content: string) => {
  const frontMattersMatcher = new RegExp(
    `${JEKYLL_SEPARATOR_NEW}(.|\n)*?${JEKYLL_SEPARATOR_NEW}`
  )

  const [frontMatterString] = frontMattersMatcher.exec(content)!
  return {
    frontMatters: extractFromString(frontMatterString),
    content: content.substring(
      content.indexOf(frontMatterString) + frontMatterString.length
    ),
  }
}

export const parse = (post: string | null = ''): JekyllPost => {
  if (!post) {
    return { frontMatters: {}, content: '' }
  }

  if (typeof post !== 'string') {
    throw new Error(`post should be a string, instead got: ${typeof post}`)
  }

  const { frontMatters, content } = formatter(post.trim())
  return { frontMatters, content }
}
