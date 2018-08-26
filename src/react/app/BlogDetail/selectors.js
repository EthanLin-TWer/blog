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

export const getTitleAsMarkdown = ({ title }) => {
  return title ? `# ${title.trim()}` : ''
}

export const getSummaryAsMarkdown = ({ summary }) => {
  if (!summary) {
    return ''
  }

  const trimmedSummary = summary.trim()
  const maxLength = 150
  if (trimmedSummary.length > maxLength) {
    return `> ${trimmedSummary.substring(0, maxLength)}...`
  }

  if (trimmedSummary.includes('\n\n')) {
    const [firstParagraph, secondParagraph] = trimmedSummary.split('\n\n')
    return `
> ${firstParagraph}
>
> ${secondParagraph}
`
  }

  return `> ${trimmedSummary}`
}
