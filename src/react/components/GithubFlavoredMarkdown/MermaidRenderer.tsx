import React, { FC, useEffect, useState } from 'react'
import mermaid from 'mermaid'

interface Props {
  children: string
}

const CONFIGURATION_HEADER = /%%\s*{\s*init:\s*(.*)}\s*%%/

const hash = (content: string): string => {
  let result = 0
  if (content.length === 0) {
    return result.toString()
  }
  for (let i = 0; i < content.length; i += 1) {
    const char = content.charCodeAt(i)
    result = (result << 5) - result + char
    result = result & result // Convert to 32bit integer
  }
  return result.toString()
}

export const MermaidRenderer: FC<Props> = ({ children }: Props) => {
  const [graphId, setGraphId] = useState<string>('')
  useEffect(() => {
    setGraphId(hash(children))
  }, [children])

  useEffect(() => {
    if (graphId) {
      const [, initConfig] = children.match(CONFIGURATION_HEADER) || []

      mermaid.initialize(initConfig ? JSON.parse(initConfig) : {})
      // without triggering this it will be blocked until all images are loaded in DOM, don't know why
      mermaid.run()
    }
  }, [graphId, children])

  return (
    <pre id={graphId} className="mermaid">
      {children}
    </pre>
  )
}
