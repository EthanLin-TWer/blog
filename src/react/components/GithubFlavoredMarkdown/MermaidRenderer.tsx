import React, { FC, useEffect, useState } from 'react'
import mermaid from 'mermaid'

interface Props {
  children: string
}

// @ts-ignore
const CONFIGURATION_HEADER = /%%\s*{\s*init:\s*(.*)}\s*%%/

function hash(content: string): string {
  // less serious but effective version, same hash will be generated for same content (indicates same length)
  return (content.length * 4096 ** 3).toFixed().toString()
}

export const MermaidRenderer: FC<Props> = ({ children }) => {
  const [graphId, setGraphId] = useState<string>('')
  useEffect(() => {
    setGraphId(hash(children))
  }, [children])

  useEffect(() => {
    if (graphId) {
      const [, initConfig] = children.match(CONFIGURATION_HEADER) || []

      mermaid.initialize(initConfig ? JSON.parse(initConfig) : {})
      // without triggering this it will be blocked until all images are loaded in DOM, don't know why
      mermaid.run().then(() => {})
    }
  }, [graphId, children])

  return (
    <pre id={graphId} className="mermaid">
      {children}
    </pre>
  )
}
