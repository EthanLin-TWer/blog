export interface FrontMatter {
  title?: string
  category?: string
  categories?: string
  tags?: string
  description?: string
}

export interface PostContent {
  summary: string  // first line of the post body
  detail: string   // remaining content
}

export interface ParsedPost {
  frontMatter: FrontMatter
  content: PostContent
}

const JEKYLL_SEPARATOR = '---'

const extractFrontMatter = (raw: string): FrontMatter =>
  raw
    .split('\n')
    .filter((line) => line && line.trim() !== JEKYLL_SEPARATOR)
    .map((line) => line.split(':'))
    .map(([key, value]) => ({ [key.trim()]: value.trim() }))
    .reduce((acc, next) => ({ ...acc, ...next }), {})

const splitBody = (raw: string): PostContent => {
  const trimmed = raw.trim()
  const breakAt = trimmed.indexOf('\n')
  if (breakAt === -1) return { summary: trimmed, detail: '' }
  return {
    summary: trimmed.slice(0, breakAt).trim(),
    detail: trimmed.slice(breakAt).trim(),
  }
}

const extractBodyAndFrontMatter = (
  post: string
): { rawFrontMatter: string; body: string } => {
  const matcher = new RegExp(`${JEKYLL_SEPARATOR}(.|\n)*?${JEKYLL_SEPARATOR}`)
  const [frontMatterString] = matcher.exec(post)!
  return {
    rawFrontMatter: frontMatterString,
    body: post.substring(post.indexOf(frontMatterString) + frontMatterString.length),
  }
}

export const parse = (post: string | null = ''): ParsedPost => {
  if (!post) {
    return { frontMatter: {}, content: { summary: '', detail: '' } }
  }

  if (typeof post !== 'string') {
    throw new Error(`post should be a string, instead got: ${typeof post}`)
  }

  const { rawFrontMatter, body } = extractBodyAndFrontMatter(post.trim())
  return {
    frontMatter: extractFrontMatter(rawFrontMatter),
    content: splitBody(body),
  }
}
