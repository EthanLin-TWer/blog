import React, { FC } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { randomTheme } from '../../constants/gfm-code-themes'
const theme = randomTheme()
const { default: style } = require(`react-syntax-highlighter/styles/${theme}`)

interface Props {
  value: string
  language: string
}

export const CodeBlockRenderer: FC<Props> = ({ language, value }) => (
  <SyntaxHighlighter language={language} style={style}>
    {value}
  </SyntaxHighlighter>
)
