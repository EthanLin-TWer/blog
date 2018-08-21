import React from 'react'
import ReactMarkdown from 'react-markdown'

export class BlogDetail extends React.Component {
  static propTypes = {}

  render() {
    return (
      <>
        <h1>native html</h1>
        <ReactMarkdown input="# title" />
      </>
    )
  }
}
