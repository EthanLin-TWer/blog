import { createSelector } from 'reselect'
import formatter from 'front-matter'

const getPost = (store, ownProps) => {
  return store.detail.posts[ownProps.match.params.id]
}

export const parseJekyllPost = createSelector([getPost], (post = '') => {
  // front-matter assumes '---' front matter separator on the first line, unnecessary empty lines will cause parse to fail
  // https://github.com/jxson/front-matter
  const { attributes: frontMatters, body: content } = formatter(post.trim())
  return {
    frontMatters,
    content,
  }
})

export const getTitleAsMarkdown = (frontMatters) => {
  return frontMatters.title ? `# ${frontMatters.title.trim()}` : ''
}
