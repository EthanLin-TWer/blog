import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { GithubFlavoredMarkdown } from '../../components/GithubFlavoredMarkdown'
import { axios } from '../../utils/axios'

import { actions } from './actions'

const mapDispatchToProps = {
  fetchBlogDetail: actions.fetchBlogDetail,
}

@connect(
  null,
  mapDispatchToProps
)
export class BlogDetail extends React.Component {
  state = {
    data: '',
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }),
  }

  async componentDidMount() {
    const { data } = await axios.get(
      `https://raw.githubusercontent.com/linesh-simplicity/blog/master/_posts/${
        this.props.match.params.id
      }.md`
    )
    this.setState({
      data,
    })
  }

  render() {
    return <GithubFlavoredMarkdown data={this.state.data} />
  }
}
