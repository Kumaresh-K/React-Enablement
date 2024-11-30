import { Component, ErrorInfo } from 'react'
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from '../../pages/HomePage/HomePageProps'

/**
 * Represents a error boundary component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.ErrorBoundaryProps - Structure of the props
 * @param {string} props.ErrorBoundaryState - Structure of the state
 * @returns {React.ReactElement} A error boundary element.
 */

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, info) // Log error details if needed
    this.setState({
      hasError: true,
    })
  }

  render() {
    if (this.state.hasError) {
      return <h3>Error Occured!</h3>
    }
    return this.props.children
  }
}

export default ErrorBoundary
