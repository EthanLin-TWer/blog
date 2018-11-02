import { createSelector } from 'reselect'

import { parse } from '../../../util/jekyll-parser'

const getPost = (store, ownProps) => {
  return store.detail.posts[ownProps.match.params.id]
}

export const parseJekyllPost = createSelector([getPost], (post = '') => {
  return parse(post)
})

export const getTitleAsMarkdown = ({ title }) => {
  return title ? `# ${title.trim()}` : ''
}

export const parseContent = (content) => {
  const trimmedContent = content.trim()
  const summaryIndex = trimmedContent.indexOf('\n')
  return {
    summary: trimmedContent.slice(0, summaryIndex).trim(),
    detail: trimmedContent.slice(summaryIndex).trim(),
  }
}
