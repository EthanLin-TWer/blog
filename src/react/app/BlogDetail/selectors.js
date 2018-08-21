import { createSelector } from 'reselect'

const getPost = (store, ownProps) => {
  return store.detail.posts[ownProps.match.params.id]
}

export const frontMatters = createSelector([getPost], (post) => {
  const frontMatterString = post
    .substring(post.indexOf('---') + '---'.length, post.lastIndexOf('---'))
    .trim()

  if (!frontMatterString) {
    return {}
  }

  return frontMatterString
    .split('\n')
    .map((line) => line.trim().split(':'))
    .map(([key, value]) => ({ [key]: value.trim() }))
    .reduce((a, b) => ({ ...a, ...b }), {})
})
