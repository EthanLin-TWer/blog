import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class BlogSummary extends React.PureComponent {
  static propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    createdDate: PropTypes.string,
  }

  render() {
    return (
      <Link to={this.props.url}>
        <h5>{this.props.title} </h5>
        <p>{this.props.summary}</p>
        <span>创建日期：{this.props.createdDate} </span>
      </Link>
    )
  }
}
