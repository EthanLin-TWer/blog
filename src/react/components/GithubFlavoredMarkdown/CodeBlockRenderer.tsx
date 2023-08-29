import React, { FC } from 'react'
import sample from 'lodash/sample'
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/light'
// languages
import typescript from 'react-syntax-highlighter/languages/hljs/typescript'
import javascript from 'react-syntax-highlighter/languages/hljs/javascript'
import markdown from 'react-syntax-highlighter/languages/hljs/markdown'
import java from 'react-syntax-highlighter/languages/hljs/java'
import bash from 'react-syntax-highlighter/languages/hljs/bash'
// styles
import coy from 'react-syntax-highlighter/styles/prism/coy'
import arduino from 'react-syntax-highlighter/styles/hljs/arduino-light'
import forest from 'react-syntax-highlighter/styles/hljs/atelier-forest-light'
import brewer from 'react-syntax-highlighter/styles/hljs/color-brewer'
import foundation from 'react-syntax-highlighter/styles/hljs/foundation'
import gist from 'react-syntax-highlighter/styles/hljs/github-gist'
import github from 'react-syntax-highlighter/styles/hljs/github'
import idea from 'react-syntax-highlighter/styles/hljs/idea'
import magula from 'react-syntax-highlighter/styles/hljs/magula'
import mono from 'react-syntax-highlighter/styles/hljs/mono-blue'
import qtcreator_light from 'react-syntax-highlighter/styles/hljs/qtcreator_light'
import eighties from 'react-syntax-highlighter/styles/hljs/tomorrow-night-eighties'
import vs2015 from 'react-syntax-highlighter/styles/hljs/vs2015'

const getRandomStyle = () =>
  sample([
    coy,
    arduino,
    forest,
    brewer,
    foundation,
    gist,
    github,
    idea,
    magula,
    mono,
    qtcreator_light,
    eighties,
    vs2015,
  ])

interface Props {
  value: string
  language: string
}

registerLanguage('typescript', typescript)
registerLanguage('javascript', javascript)
registerLanguage('markdown', markdown)
registerLanguage('java', java)
registerLanguage('bash', bash)

export const CodeBlockRenderer: FC<Props> = (props: Props) => {
  const { language, value } = props
  if (!value) {
    return null
  }

  return (
    <SyntaxHighlighter
      language={language}
      style={getRandomStyle()}
      showLineNumbers
    >
      {value}
    </SyntaxHighlighter>
  )
}
