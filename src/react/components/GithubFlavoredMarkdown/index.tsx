// @ts-nocheck
import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import rehypeMermaid from '../../../util/mermaid/rehype-mermaid-plugin'

import { MermaidRenderer } from './MermaidRenderer'
import { CodeBlockRenderer } from './CodeBlockRenderer'

import 'github-markdown-css'
import './styles.styl'

interface Props {
  data: string
  className?: string
}
export const GithubFlavoredMarkdown: FC<Props> = ({ data, className }) => (
  <ReactMarkdown
    components={{ mermaid: MermaidRenderer, code: CodeBlockRenderer }}
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeMermaid, rehypeRaw]}
    className={`markdown-body ${className || ''}`}
  >
    {data}
  </ReactMarkdown>
)
