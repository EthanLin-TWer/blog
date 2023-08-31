import React, { FC, useEffect } from 'react'
import mermaid from 'mermaid'

interface Props {
  id: string
  className: string
  children: string[]
}

// @ts-ignore
const CONFIGURATION_HEADER = /%%\s*{\s*init:\s*(.*)}\s*%%/
export const MermaidRenderer: FC<Props> = ({
  className,
  children: [contentInMermaid],
  id: graphId,
}) => {
  useEffect(() => {
    const [, initConfig] = contentInMermaid.match(CONFIGURATION_HEADER) || []

    mermaid.initialize(initConfig ? JSON.parse(initConfig) : {})
    // without triggering this it will be blocked until all images are loaded in DOM, don't know why
    mermaid.run().then(() => {})
  }, [contentInMermaid])

  return (
    <pre id={graphId} className={className}>
      {contentInMermaid}
    </pre>
  )
}
