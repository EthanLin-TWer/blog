// @ts-nocheck
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { GithubFlavoredMarkdown } from '../../components/GithubFlavoredMarkdown'
import { ErrorBoundary } from '../../components/ErrorBoundary'
import { axiosNormal } from '../../utils/axios'
import { parseJekyllPost } from '../../../utils/selectors'

import './styles.styl'

interface Props {}
interface State {
  title: string
  summary: string
  detail: string
}

export const BlogDetail: FC<Props, State> = () => {
  const [blogDetail, setBlogDetail] = useState<State>({
    title: '',
    summary: '',
    detail: '',
  })
  const [post, setPost] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { postId } = useParams()

  useEffect(() => {
    setIsLoading(true)
    axiosNormal
      .get(process.env.BLOG_DETAIL_API!.replace('{id}', postId))
      .then(({ data }) => setPost(data))
      .catch(() => {})
      .finally(() => setIsLoading(false))
  }, [postId])

  useEffect(() => {
    const { title, summary, content } = parseJekyllPost(post)

    setBlogDetail({ title: title && `# ${title}`, summary, content })
    document.title = title
    document.getElementsByTagName('meta').description.content = summary
  }, [post])

  if (isLoading) {
    return <div>loading ...</div>
  }

  if (!post) {
    return <div>there is no post at this path</div>
  }

  return (
    <ErrorBoundary>
      <div className="container-details">
        {blogDetail.title && (
          <GithubFlavoredMarkdown
            data={blogDetail.title}
            className="article-title"
          />
        )}
        {blogDetail.summary && (
          <GithubFlavoredMarkdown
            data={blogDetail.summary}
            className="article-summary"
          />
        )}
        {blogDetail.content && (
          <GithubFlavoredMarkdown
            data={blogDetail.content}
            className="article-content"
          />
        )}
      </div>
    </ErrorBoundary>
  )
}
