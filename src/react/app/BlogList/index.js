import React from 'react'

import axios from '../../utils/axios'

class BlogList extends React.PureComponent {
  state = {
    blogs: [],
  }

  componentDidMount() {
    axios.get('api/posts.json').then(({ data }) => {
      this.setState({
        blogs: data,
      })
    })
  }

  render() {
    return (
      <div>
        <h3>Hello blog list</h3>
        {this.state.blogs.map((blog) => (
          <div key={blog.id}>
            <p>{blog.title}</p>
            <p>{blog.brief}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default BlogList
