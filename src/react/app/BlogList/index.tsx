import React, { FC, useEffect, useState } from 'react'

import { axios } from '../../utils/axios'

import { BlogSummary } from './BlogSummary'

type Props = Record<string, never>
interface Blog {
  id: string
  path: string
  title: string
  summary: string
  createdDate: string
}

interface State {
  blogs: Blog[]
}

// @ts-ignore
export const BlogList: FC<Props, State> = () => {
  const [{ blogs }, setBlogs] = useState<State>({ blogs: [] })
  useEffect(() => {
    axios.get('api/posts.json').then(({ data }) => {
      setBlogs(data)
    })
  })

  return blogs.map(({ id, path, title, summary, createdDate }) => (
    <BlogSummary
      key={id}
      path={path.replace('_posts/', 'post/').replace('.md', '')}
      title={title}
      summary={summary}
      createdDate={createdDate}
    />
  ))
}
