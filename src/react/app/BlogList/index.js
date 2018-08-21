import React from 'react'

import axios from '../../utils/axios'

import { BlogSummary } from './BlogSummary'

class BlogList extends React.PureComponent {
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
        {this.state.blogs.map(({ url, id, title, summary, createdDate }) => (
          <BlogSummary
            key={id}
            url={url}
            title={title}
            summary={summary}
            createdDate={createdDate}
          />
        ))}
      </div>
    )
  }
}

export default BlogList
