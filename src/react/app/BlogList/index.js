import React from 'react'

import axios from '../../utils/axios'

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
        <h3>Hello blog list</h3>
        {this.state.blogs.map((blog) => (
          <div key={blog.id}>
            <h5>{blog.title} </h5>
            <p>{blog.summary}</p>
            <span>创建日期：{blog.createdDate} </span>
          </div>
        ))}
      </div>
    )
  }
}

export default BlogList