interface FrontMatter {
  [key: string]: string;
}

interface JekyllPost {
  frontMatters: FrontMatter;
  content: string;
}

const JEKYLL_SEPARATOR = '---\n'
const formatter = (content: string) => {
  const frontMatters = content.substring(
    content.indexOf(JEKYLL_SEPARATOR) + JEKYLL_SEPARATOR.length,
    content.lastIndexOf(JEKYLL_SEPARATOR)
  )
    .split('\n')
    .filter(emptyLinesGetOut => emptyLinesGetOut)
    .map(each => each.split(':'))
    .map(([key, value]) => ({ [key]: value.trim() }))
    .reduce((result, next) => ({ ...result, ... next }), {})
  const finalContent = content.substring(content.lastIndexOf(JEKYLL_SEPARATOR) + JEKYLL_SEPARATOR.length).trim()

  return { frontMatters, content: finalContent }
}

export const parse = (post: string | null = ''): JekyllPost => {
  if (!post) {
    return { frontMatters: {}, content: '' }
  }

  if (typeof post !== 'string') {
    throw new Error(`post should be a string, instead got: ${typeof post}`)
  }

  const { frontMatters, content } = formatter(post)
  return { frontMatters, content }
}
