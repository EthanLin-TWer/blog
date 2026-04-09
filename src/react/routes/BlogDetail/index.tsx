// @ts-nocheck
import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { GithubFlavoredMarkdown } from '../../components/GithubFlavoredMarkdown'
import { ErrorBoundary } from '../../components/ErrorBoundary'
import { Loading } from '../../components/Loading'
import { NoContent } from '../../components/NoContent'

import { useBlogDetail } from './useBlogDetail'

import './styles.styl'

export const BlogDetail: FC = () => {
  const { postId } = useParams()
  const { isLoading, detail } = useBlogDetail(postId)

  useEffect(() => {
    if (detail) {
      const { title, summary } = detail
      document.title = title
      document.getElementsByTagName('meta').description.content = summary
    }
  }, [detail])

  if (isLoading) {
    return <Loading />
  }

  if (!detail) {
    return <NoContent message="This post could not be found." />
  }

  return (
    <ErrorBoundary>
      <div className="container-details">
        {detail.title && (
          <GithubFlavoredMarkdown
            data={`# ${detail.title}`}
            className="article-title"
          />
        )}
        {detail.summary && (
          <GithubFlavoredMarkdown
            data={detail.summary}
            className="article-summary"
          />
        )}
        {detail.content && (
          <GithubFlavoredMarkdown
            data={detail.content}
            className="article-content"
          />
        )}
      </div>
    </ErrorBoundary>
  )
}
