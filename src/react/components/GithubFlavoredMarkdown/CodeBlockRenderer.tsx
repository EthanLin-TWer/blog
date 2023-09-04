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

import { MermaidRenderer } from './MermaidRenderer'

const getRandomTheme = () =>
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

interface LeafNode {
  type: 'text'
  value: string
}
interface HastNode {
  type: 'element'
  tagName: string
  children: HastNode[] | LeafNode[]
  position: {
    start: object
    end: object
  }
  properties?: {
    [key: string]: string
  }
}
interface Props {
  node: HastNode
}

registerLanguage('typescript', typescript)
registerLanguage('javascript', javascript)
registerLanguage('markdown', markdown)
registerLanguage('java', java)
registerLanguage('bash', bash)

const theme = getRandomTheme()
const useLanguage = (properties: HastNode['properties']) => {
  const [className = 'language-text'] = properties?.className || []
  const language = className.substring('language-'.length)

  return { language, isMermaid: () => language === 'mermaid' }
}
const useCodeSnippet = (children: LeafNode[]) => children[0].value

export const CodeBlockRenderer: FC<Props> = ({ node }: Props) => {
  const { children, properties } = node.children[0] as HastNode
  const { language, isMermaid } = useLanguage(properties)
  const codeSnippet = useCodeSnippet(children as LeafNode[])

  if (isMermaid()) {
    return <MermaidRenderer>{codeSnippet}</MermaidRenderer>
  }

  return (
    <SyntaxHighlighter language={language} style={theme} showLineNumbers>
      {codeSnippet}
    </SyntaxHighlighter>
  )
}
