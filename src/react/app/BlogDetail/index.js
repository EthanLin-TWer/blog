import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { GithubFlavoredMarkdown } from '../../components/GithubFlavoredMarkdown'

import { actions } from './actions'
import { parseJekyllPost } from './selectors'

const mapStateToProps = (store, ownProps) => {
  const { attributes, body } = parseJekyllPost(store, ownProps)
  return {
    frontMatters: attributes,
    content: body,
  }
}

const mapDispatchToProps = {
  fetchBlogDetail: actions.fetchBlogDetail,
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class BlogDetail extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }),
    frontMatters: PropTypes.object,
    content: PropTypes.string,
    fetchBlogDetail: PropTypes.func,
  }

  componentDidMount() {
    this.props.fetchBlogDetail(this.props.match.params.id)
  }

  render() {
    return (
      <If condition={this.props.content}>
        <GithubFlavoredMarkdown data={this.props.content} />
      </If>
    )
  }
}
