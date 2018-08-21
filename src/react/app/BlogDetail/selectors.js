import { createSelector } from 'reselect'

const getPost = (store, ownProps) => {
  return store.detail.posts[ownProps.match.params.id]
}

export const frontMatters = createSelector([getPost], (post) => {
  const frontMatterString = post
    .substring(post.indexOf('---') + '---'.length, post.lastIndexOf('---'))
    .trim()
  const [key, value] = frontMatterString.split(':').map((part) => part.trim())
  return { [key]: value }
})
