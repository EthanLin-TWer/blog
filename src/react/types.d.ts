// react-syntax-highlighter
declare module 'react-syntax-highlighter/light' {
  import { SyntaxHighlighterProps } from 'react-syntax-highlighter'
  import * as React from 'react'
  export default class SyntaxHighlighter extends React.Component<
    SyntaxHighlighterProps
  > {}
  // todo: fixme
  // eslint-disable-next-line no-unused-vars
  export function registerLanguage(name: string, func: any): void
}

// react-syntax-highlighter styles
declare module 'react-syntax-highlighter/styles/prism/coy' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
}

declare module 'react-syntax-highlighter/styles/hljs/arduino-light' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
}
declare module 'react-syntax-highlighter/styles/hljs/atelier-forest-light' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
}
declare module 'react-syntax-highlighter/styles/hljs/color-brewer' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
}
declare module 'react-syntax-highlighter/styles/hljs/foundation' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
}
declare module 'react-syntax-highlighter/styles/hljs/github-gist' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
}
declare module 'react-syntax-highlighter/styles/hljs/github' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
}
declare module 'react-syntax-highlighter/styles/hljs/idea' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
}
declare module 'react-syntax-highlighter/styles/hljs/magula' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
}
declare module 'react-syntax-highlighter/styles/hljs/mono-blue' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
}
declare module 'react-syntax-highlighter/styles/hljs/qtcreator_light' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
}
declare module 'react-syntax-highlighter/styles/hljs/tomorrow-night-eighties' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
}
declare module 'react-syntax-highlighter/styles/hljs/vs2015' {
  const style: { [key: string]: import('react').CSSProperties }
  export default style
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
