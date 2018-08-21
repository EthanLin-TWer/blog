import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'

import { axios } from '../../utils/axios'

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
    return <ReactMarkdown source={this.state.data} className="markdown-body" />
  }
}
