import { useEffect, useState } from 'react'

import { axiosNormal } from '../../utils/axios'
import { parse } from '../../../utils/jekyll-parser'

interface BlogDetail {
  title: string
  summary: string
  content: string
}

type FetchError = 'not-found' | 'network-error' | null

export const useBlogDetail = (postId: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [detail, setDetail] = useState<BlogDetail | null>(null)
  const [fetchError, setFetchError] = useState<FetchError>(null)

  useEffect(() => {
    setIsLoading(true)
    setFetchError(null)
    axiosNormal
      .get(process.env.BLOG_DETAIL_API!.replace('{id}', postId))
      .then(({ data }) => {
        const { frontMatter, content } = parse(data)
        setDetail({
          title: frontMatter.title ?? '',
          summary: content.summary,
          content: content.detail,
        })
      })
      .catch((error) => {
        setFetchError(
          error.response?.status === 404 ? 'not-found' : 'network-error'
        )
      })
      .finally(() => setIsLoading(false))
  }, [postId])

  return { isLoading, detail, fetchError }
}
