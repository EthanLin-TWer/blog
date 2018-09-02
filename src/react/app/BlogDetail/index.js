import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { GithubFlavoredMarkdown } from '../../components/GithubFlavoredMarkdown'

import { actions } from './actions'
import {
  getSummaryAsMarkdown,
  getTitleAsMarkdown,
  parseJekyllPost,
} from './selectors'

const mapStateToProps = (store, ownProps) => {
  const { frontMatters, content } = parseJekyllPost(store, ownProps)
  return {
    title: getTitleAsMarkdown(frontMatters),
    summary: getSummaryAsMarkdown(content),
    content,
  }
}

const mapDispatchToProps = {
  fetchBlogDetail: actions.fetchBlogDetail,
}

export class BlogDetailOnlyForTesting extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }),
    title: PropTypes.string,
    summary: PropTypes.string,
    content: PropTypes.string,
    fetchBlogDetail: PropTypes.func,
  }

  componentDidMount() {
    this.props.fetchBlogDetail(this.props.match.params.id)
  }

  render() {
    return (
      <div className="container">
        <If condition={this.props.title}>
          <GithubFlavoredMarkdown data={this.props.title} />
        </If>
        <If condition={this.props.summary}>
          <GithubFlavoredMarkdown data={this.props.summary} />
        </If>
        <If condition={this.props.content}>
          <GithubFlavoredMarkdown data={this.props.content} />
        </If>
      </div>
    )
  }
}

export const BlogDetail = connect(mapStateToProps, mapDispatchToProps)(
  BlogDetailOnlyForTesting
)
