import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'

import { CodeBlockRenderer } from './CodeBlockRenderer'
import './styles.styl'

export class GithubFlavoredMarkdown extends React.Component {
  static propTypes = {
    data: PropTypes.string.isRequired,
  }

  render() {
    return (
      <ReactMarkdown
        source={this.props.data}
        renderers={{ code: CodeBlockRenderer }}
        className="markdown-body"
      />
    )
  }
}
