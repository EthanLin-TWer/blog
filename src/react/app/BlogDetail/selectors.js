import { createSelector } from 'reselect'

const getPost = (store, ownProps) => {
  return store.detail.posts[ownProps.match.params.id]
}

export const frontMatters = createSelector([getPost], () => {
  return {}
})
