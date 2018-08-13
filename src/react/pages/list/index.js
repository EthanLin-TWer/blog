import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

const mapStateToProps = (store) => {
  // eslint-disable-next-line
  console.log(store)
  return {
    blogs: [],
  }
}

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
