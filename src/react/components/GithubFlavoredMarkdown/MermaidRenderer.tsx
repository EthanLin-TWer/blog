import React, { FC, useEffect } from 'react'
import mermaid from 'mermaid'

interface Props {
  id: string
  className: string
  children: string[]
}

// @ts-ignore
export const MermaidRenderer: FC<Props> = ({
  className,
  children: [contentInMermaid],
  id: graphId,
}) => {
  useEffect(() => {
    const [, initConfig] =
      contentInMermaid.match(/%%\s*{\s*init:\s*(.*)}\s*%%/) || []
    mermaid.initialize(initConfig ? JSON.parse(initConfig) : {})
  }, [contentInMermaid])

  return (
    <pre id={graphId} className={className}>
      {contentInMermaid}
    </pre>
  )
}
