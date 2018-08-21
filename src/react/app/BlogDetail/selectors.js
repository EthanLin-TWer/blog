import { createSelector } from 'reselect'
import formatter from 'front-matter'

const getPost = (store, ownProps) => {
  return store.detail.posts[ownProps.match.params.id]
}

export const parseJekyllPost = createSelector([getPost], (post) => {
  if (!post) {
    return {
      attributes: {},
      body: '',
    }
  }

  // front-matter assumes '---' front matter separator on the first line, unnecessary empty lines will cause parse to fail
  // https://github.com/jxson/front-matter
  return formatter(post.trim())
})
