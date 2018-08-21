import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import axios from '../../utils/axios'

export class BlogDetail extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    }),
  }

  async componentDidMount() {
    await axios.get(
      `https://raw.githubusercontent.com/linesh-simplicity/blog/master/_posts/${
        this.props.match.params.id
      }.md`
    )
  }

  render() {
    return (
      <>
        <h1>native html</h1>
        <ReactMarkdown input="# title" />
      </>
    )
  }
}
