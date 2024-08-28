// @ts-nocheck
import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'
import rehypeKatex from 'rehype-katex'

import { CodeBlockRenderer } from './CodeBlockRenderer'

import 'github-markdown-css'
import 'katex/dist/katex.min.css'
import './styles.styl'

interface Props {
  data: string
  className?: string
}
export const GithubFlavoredMarkdown: FC<Props> = ({ data, className }) => (
  <ReactMarkdown
    components={{ pre: CodeBlockRenderer }}
    remarkPlugins={[remarkMath, remarkGfm]}
    rehypePlugins={[rehypeRaw, rehypeKatex]}
    className={`markdown-body ${className || ''}`}
  >
    {data}
  </ReactMarkdown>
)
