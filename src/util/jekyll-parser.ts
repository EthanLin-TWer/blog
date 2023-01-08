const formatter = require('front-matter')

export const parse = (post: string | null = '') => {
  if (!post) {
    return {
      frontMatters: {},
      content: '',
    }
  }

  if (typeof post !== 'string') {
    throw new Error(`post should be a string, instead got: ${typeof post}`)
  }

  // front-matter assumes '---' front matter separator on the first line, unnecessary empty lines will cause parse to fail
  // https://github.com/jxson/front-matter
  const { attributes: frontMatters, body: content } = formatter(post.trim())
  return {
    frontMatters,
    content,
  }
}
