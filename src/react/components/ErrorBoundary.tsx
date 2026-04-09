import React from 'react'

import { RenderError } from './RenderError'

interface Props {
  children: React.ReactNode
}
interface State {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // eslint-disable-next-line
  override componentDidCatch(_error: Error, _info: any): void {
  }

  override render() {
    if (this.state.hasError) {
      return <RenderError />
    }

    return this.props.children
  }
}
