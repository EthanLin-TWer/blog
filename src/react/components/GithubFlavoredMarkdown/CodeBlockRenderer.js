import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { randomTheme } from '../../constants/gfm-code-themes'
const style = require(`react-syntax-highlighter/styles/${randomTheme()}`)

export class CodeBlockRenderer extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  }

  render() {
    return (
      <SyntaxHighlighter language={this.props.language} style={style}>
        {this.props.value}
      </SyntaxHighlighter>
    )
  }
}
