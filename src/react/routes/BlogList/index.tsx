import React, { FC, useEffect, useState } from 'react'

import { axiosServer } from '../../utils/axios'
import { Loading } from '../../components/Loading'

import { BlogSummary } from './BlogSummary'

type Props = Record<string, never>
interface Blog {
  id: string
  path: string
  title: string
  summary: string
  createdDate: string
  category?: string
  tags?: string
  url?: string
  date?: string
}

// @ts-ignore
export const BlogList: FC<Props> = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axiosServer
      .get('/api/posts.json')
      .then(({ data }) => setBlogs(data))
      .catch(() => {})
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <Loading />
  }

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
