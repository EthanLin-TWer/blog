import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import './styles.styl'
import { GithubFlavoredMarkdown } from '../../../components/GithubFlavoredMarkdown'

interface Props {
  path: string
  title?: string
  summary: string
  createdDate?: string
}

export const BlogSummary: FC<Props> = ({
  path,
  title,
  createdDate,
  summary,
}) => (
  <div className="container-list">
    <Link to={path}>
      <section className="post">
        <div className="title-container">
          <div className="title">{title}</div>
          <div className="created-date">{createdDate}</div>
        </div>

        {summary && (
          <div className="summary">
            <GithubFlavoredMarkdown data={summary} />
          </div>
        )}
      </section>
    </Link>
  </div>
)
