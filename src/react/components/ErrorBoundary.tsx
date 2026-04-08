import React from 'react'

interface Props {
  children: React.ReactNode
}
interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // eslint-disable-next-line
  override componentDidCatch(error: Error, info: any): void {
    console.log('-------- error, info --------')
    console.log(error, info)
  }

  override render() {
    if (this.state.hasError) {
      return <div>something goes wrong</div>
    }

    return this.props.children
  }
}
