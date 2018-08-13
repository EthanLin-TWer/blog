import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import Features from '../features'

const mapStateToProps = (store) => ({
  blogs: store[Features.BLOG_LIST].data,
})

const BlogList = ({ blogs = [] }) => (
  <div>
    <p>welcome to my blog</p>
    {blogs.map((blog) => <p key={blog.path}>{blog.title}</p>)}
  </div>
)

BlogList.propTypes = {
  blogs: PropTypes.array,
}

export default connect(mapStateToProps)(BlogList)
