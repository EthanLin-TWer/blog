import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { GithubFlavoredMarkdown } from '../../components/GithubFlavoredMarkdown'

import { actions } from './actions'

const mapStateToProps = (store, ownProps) => ({
  content: store.detail.posts[ownProps.match.params.id],
})

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
    content: PropTypes.string,
    fetchBlogDetail: PropTypes.func,
  }

  async componentDidMount() {
    this.props.fetchBlogDetail(this.props.match.params.id)
  }

  render() {
    return <GithubFlavoredMarkdown data={this.props.content} />
  }
}
