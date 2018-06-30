import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

const mapStateToProps = (store) => ({
  data: store.list.data,
})

const BlogList = ({ data = 'else' }) => <div>something {data}</div>

BlogList.propTypes = {
  data: PropTypes.string,
}

export default connect(mapStateToProps)(BlogList)
