import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

const mapStateToProps = (store) => ({
  blogs: store.list.data,
})

const BlogList = ({ blogs = [] }) => (
  <div>
    <p>welcome to my blog</p>
    {blogs.map((blog) => <p key={blog.path}>{blog.name}</p>)}
  </div>
)

BlogList.propTypes = {
  blogs: PropTypes.array,
}

export default connect(mapStateToProps)(BlogList)
