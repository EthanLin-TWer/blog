import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

const mapStateToProps = (store) => ({
  data: store.list.data,
})

const MainPage = ({ data = 'else' }) => <div>something {data}</div>

MainPage.propTypes = {
  data: PropTypes.string,
}

export default connect(mapStateToProps)(MainPage)
