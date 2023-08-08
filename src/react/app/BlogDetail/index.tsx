// @ts-nocheck
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { GithubFlavoredMarkdown } from '../../components/GithubFlavoredMarkdown'

import { actions } from './actions'
import { parseJekyllPost } from './selectors'
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
  const dispatch = useDispatch()
  const { postId } = useParams()
  const post = useSelector((store) => store.detail.posts[postId]) || ''

  useEffect(() => {
    dispatch(actions.fetchBlogDetail(postId))
  }, [postId])

  useEffect(() => {
    const { title, summary, content } = parseJekyllPost(post)

    setBlogDetail({ title: title && `# ${title}`, summary, content })
    document.title = title
  }, [post])

  return (
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
  )
}
