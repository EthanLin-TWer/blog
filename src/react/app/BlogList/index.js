import React from 'react'

import axios from '../../utils/axios'

class BlogList extends React.PureComponent {
  state = {
    blogs: [],
  }

  componentDidMount() {
    axios.get('api/posts.json').then(({ data }) => {
      /* eslint-disable */
      console.log('-------- data --------')
      console.log(data)
      /* eslint-enable */
      this.setState({
        blogs: data,
      })
    })
  }

  render() {
    return (
      <div>
        <h3>Hello blog list</h3>
        {this.state.blogs.map((blog) => <div key={blog.id}>{blog.title}</div>)}
      </div>
    )
  }
}

export default BlogList
