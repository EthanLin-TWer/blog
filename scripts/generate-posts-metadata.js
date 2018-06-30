#!/usr/bin/env node

const fs = require('fs')

const isMarkdownFile = (file) => file.endsWith('.md')

const reduceToObject = (array) => array.reduce((a, b) => ({ ...a, ...b }), {})

const parse = (post) => {
  const JEKYLL_FRONT_MATTER = '---'
  // eslint-disable-next-line
  const [emptyLine, frontMatter, content] = post.split(JEKYLL_FRONT_MATTER)

  const metas = reduceToObject(
    frontMatter
      .split('\n')
      .filter((item) => !!item)
      .map((pair) => {
        const [key, value] = pair.split(':')
        return {
          [key]: value,
        }
      })
  )

  return [metas, content]
}

const posts = fs
  .readdirSync('./_posts')
  .filter(isMarkdownFile)
  .map((postPath) => {
    const fileContent = fs.readFileSync('./_posts/' + postPath, 'utf-8')
    const [metas, content] = parse(fileContent)

    return {
      id: postPath.substring(0, postPath.lastIndexOf('.')),
      name: postPath,
      title: metas.title.trim(),
      content: content,
    }
  })

module.exports = posts
