// @ts-nocheck
import { parse } from '../../../util/jekyll-parser'

interface Post {
  title: string
  summary: string
  content: string
}

function parseContent(content: string) {
  const trimmedContent = content.trim()
  const summaryIndex = trimmedContent.indexOf('\n')
  return {
    summary: trimmedContent.slice(0, summaryIndex).trim(),
    detail: trimmedContent.slice(summaryIndex).trim(),
  }
}

export const parseJekyllPost = (post): Post => {
  const { frontMatters, content } = parse(post)
  const title = frontMatters.title?.trim() || ''
  const { summary, detail } = parseContent(content)

  return { title, summary, content: detail }
}
