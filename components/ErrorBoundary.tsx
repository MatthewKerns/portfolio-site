'use client'

import { Component, ReactNode } from 'react'
import Link from 'next/link'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

/**
 * Error boundary component that catches JavaScript errors anywhere in the child
 * component tree and displays a fallback UI instead of crashing the whole app.
 *
 * @example
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to error tracking service (Sentry, LogRocket, etc.)
    console.error('Error caught by boundary:', error, errorInfo)

    // You can also log the error to an error reporting service here
    // if (typeof window !== 'undefined') {
    //   window.gtag?.('event', 'exception', {
    //     description: error.message,
    //     fatal: true,
    //   })
    // }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex min-h-[400px] items-center justify-center p-8">
          <div className="max-w-md text-center">
            <div className="mb-4 text-6xl">⚠️</div>
            <h2 className="mb-2 text-2xl font-bold text-text">Something went wrong</h2>
            <p className="mb-6 text-text-muted">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => this.setState({ hasError: false, error: undefined })}
                className="rounded-lg bg-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-blue hover:text-blue"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
