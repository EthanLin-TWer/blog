// react-syntax-highlighter
declare module 'react-syntax-highlighter/light' {
  import * as React from 'react'
  import { SyntaxHighlighterProps } from 'react-syntax-highlighter'
  export default class SyntaxHighlighter extends React.Component<
    SyntaxHighlighterProps
  > {}
  // todo: fixme
  // eslint-disable-next-line no-unused-vars
  export function registerLanguage(name: string, func: any): void
}

// react-syntax-highlighter languages
declare module 'react-syntax-highlighter/languages/hljs/typescript' {
  const language: any
  export default language
}
declare module 'react-syntax-highlighter/languages/hljs/javascript' {
  const language: any
  export default language
}
declare module 'react-syntax-highlighter/languages/hljs/markdown' {
  const language: any
  export default language
}
declare module 'react-syntax-highlighter/languages/hljs/java' {
  const language: any
  export default language
}
declare module 'react-syntax-highlighter/languages/hljs/bash' {
  const language: any
  export default language
}

// todo: fixme
// eslint-disable-next-line no-unused-vars
declare let process: {
  env: {
    NODE_ENV: 'development' | 'production'
    SERVER_URL: string
    CDN_URL: string
    BLOG_DETAIL_API: string
  }
}
