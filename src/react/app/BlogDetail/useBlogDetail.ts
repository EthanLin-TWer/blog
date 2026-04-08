import { useEffect, useState } from 'react'

import { axiosNormal } from '../../utils/axios'
import { parseJekyllPost } from '../../../utils/selectors'

interface BlogDetail {
  title: string
  summary: string
  content: string
}

export const useBlogDetail = (postId: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [blogDetail, setBlogDetail] = useState<BlogDetail | null>(null)

  useEffect(() => {
    setIsLoading(true)
    axiosNormal
      .get(process.env.BLOG_DETAIL_API!.replace('{id}', postId))
      .then(({ data }) => {
        const { title, summary, content } = parseJekyllPost(data)
        setBlogDetail({ title, summary, content })
      })
      .catch(() => {})
      .finally(() => setIsLoading(false))
  }, [postId])

  return { isLoading, blogDetail }
}
