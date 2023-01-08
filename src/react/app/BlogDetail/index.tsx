// @ts-nocheck
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { GithubFlavoredMarkdown } from '../../components/GithubFlavoredMarkdown'

import { actions } from './actions'
import { getTitleAsMarkdown, parseContent, parseJekyllPost } from './selectors'

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
    const { frontMatters, content } = parseJekyllPost(post)
    const title = getTitleAsMarkdown(frontMatters)
    const { summary, detail } = parseContent(content)

    setBlogDetail({ title, summary, content: detail })
    document.title = title
  }, [post])

  return (
    <div className="container">
      {blogDetail.title && <GithubFlavoredMarkdown data={blogDetail.title} />}
      {blogDetail.summary && (
        <GithubFlavoredMarkdown data={blogDetail.summary} />
      )}
      {blogDetail.content && (
        <GithubFlavoredMarkdown data={blogDetail.content} />
      )}
    </div>
  )
}
