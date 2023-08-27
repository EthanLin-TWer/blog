import React, { FC } from 'react'
import sample from 'lodash/sample'
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/light'
import typescript from 'react-syntax-highlighter/languages/hljs/typescript'
import javascript from 'react-syntax-highlighter/languages/hljs/javascript'
import markdown from 'react-syntax-highlighter/languages/hljs/markdown'
import java from 'react-syntax-highlighter/languages/hljs/java'
import bash from 'react-syntax-highlighter/languages/hljs/bash'

import config from '../../project.config.json'

// this doesn't cost a full load of styles so no performance issues
const getRandomStyle = () => {
  const style = sample(config.react_syntax_highlighter_themes)
  return require(`react-syntax-highlighter/styles/${style}`)
}

interface Props {
  value: string
  language: string
}

registerLanguage('typescript', typescript)
registerLanguage('javascript', javascript)
registerLanguage('markdown', markdown)
registerLanguage('java', java)
registerLanguage('bash', bash)

export const CodeBlockRenderer: FC<Props> = ({ language, value }) => (
  <SyntaxHighlighter
    language={language}
    style={getRandomStyle()}
    showLineNumbers
  >
    {value}
  </SyntaxHighlighter>
)
