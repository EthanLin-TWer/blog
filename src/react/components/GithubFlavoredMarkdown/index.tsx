// @ts-nocheck
import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import { CodeBlockRenderer } from './CodeBlockRenderer'

import 'github-markdown-css'
import './styles.styl'

interface Props {
  data: string
  className?: string
}
export const GithubFlavoredMarkdown: FC<Props> = ({ data, className }) => (
  <ReactMarkdown
    components={{ pre: CodeBlockRenderer }}
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    className={`markdown-body ${className || ''}`}
  >
    {data}
  </ReactMarkdown>
)
