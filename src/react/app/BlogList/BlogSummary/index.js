import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles.styl'

export class BlogSummary extends React.PureComponent {
  static propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    createdDate: PropTypes.string,
  }

  render() {
    return (
      <div className="container">
        <Link to={this.props.path}>
          <section className="post">
            <div className="left">
              <div className="title">{this.props.title}</div>
              <div className="created-date">{this.props.createdDate}</div>
            </div>

            <If condition={this.props.summary}>
              <div className="summary">{this.props.summary}</div>
            </If>
          </section>
        </Link>
      </div>
    )
  }
}
