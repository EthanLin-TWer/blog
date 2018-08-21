import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to={blog.url} key={blog.id}>
            <h5>{blog.title} </h5>
            <p>{blog.summary}</p>
            <span>创建日期：{blog.createdDate} </span>
          </Link>
        ))}
      </div>
    )
  }
}

export default BlogList
