// @ts-nocheck
import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import 'github-markdown-css'

import { CodeBlockRenderer } from './CodeBlockRenderer'
import './styles.styl'

interface Props {
  data: string
  className?: string
}

export const GithubFlavoredMarkdown: FC<Props> = ({ data, className }) => (
  <ReactMarkdown
    components={{ code: CodeBlockRenderer }}
    rehypePlugins={[rehypeRaw]}
    remarkPlugins={[remarkGfm]}
    className={`markdown-body ${className || ''}`}
  >
    {data}
  </ReactMarkdown>
)