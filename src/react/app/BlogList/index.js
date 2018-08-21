import React from 'react'

import axios from '../../utils/axios'

import { BlogSummary } from './BlogSummary'

export class BlogList extends React.PureComponent {
  state = {
    blogs: [],
  }

  async componentDidMount() {
    const { data } = await axios.get('api/posts.json')
    this.setState({
      blogs: data,
    })
  }

  render() {
    return (
      <div>
        {this.state.blogs.map(({ id, path, title, summary, createdDate }) => (
          <BlogSummary
            key={id}
            path={path.replace('_posts/', 'post/').replace('.md', '')}
            title={title}
            summary={summary}
            createdDate={createdDate}
          />
        ))}
      </div>
    )
  }
}
