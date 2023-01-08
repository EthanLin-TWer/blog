// @ts-nocheck
import { parse } from '../../../util/jekyll-parser'

export const parseJekyllPost = (post) => parse(post)
export const getTitleAsMarkdown = ({ title }: { title?: string }) =>
  title ? `# ${title.trim()}` : ''

export const parseContent = (content: string) => {
  const trimmedContent = content.trim()
  const summaryIndex = trimmedContent.indexOf('\n')
  return {
    summary: trimmedContent.slice(0, summaryIndex).trim(),
    detail: trimmedContent.slice(summaryIndex).trim(),
  }
}
