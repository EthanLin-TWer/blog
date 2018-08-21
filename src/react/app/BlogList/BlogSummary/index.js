import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles.styl'

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
        <section className="container">
          <div className="title-area">
            <span className="title">{this.props.title}</span>
            <span className="created-date">
              发布日期：{this.props.createdDate}
            </span>
          </div>

          {this.props.summary && (
            <div className="summary">{this.props.summary}</div>
          )}
        </section>
      </Link>
    )
  }
}
