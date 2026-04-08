// @ts-nocheck
import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { GithubFlavoredMarkdown } from '../../components/GithubFlavoredMarkdown'
import { ErrorBoundary } from '../../components/ErrorBoundary'

import { useBlogDetail } from './useBlogDetail'

import './styles.styl'

export const BlogDetail: FC = () => {
  const { postId } = useParams()
  const { isLoading, blogDetail } = useBlogDetail(postId)

  useEffect(() => {
    if (!blogDetail) return
    const { title, summary } = blogDetail
    document.title = title
    document.getElementsByTagName('meta').description.content = summary
  }, [blogDetail])

  if (isLoading) {
    return <div>loading ...</div>
  }

  if (!blogDetail) {
    return <div>there is no post at this path</div>
  }

  return (
    <ErrorBoundary>
      <div className="container-details">
        {blogDetail.title && (
          <GithubFlavoredMarkdown
            data={`# ${blogDetail.title}`}
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
