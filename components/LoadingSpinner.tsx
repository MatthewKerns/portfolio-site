/**
 * Loading spinner component for async operations.
 * Displays an animated spinner with optional text.
 */

interface LoadingSpinnerProps {
  /** Optional text to display below the spinner */
  text?: string
  /** Size variant of the spinner */
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'h-6 w-6 border-2',
  md: 'h-12 w-12 border-3',
  lg: 'h-16 w-16 border-4',
}

export default function LoadingSpinner({ text, size = 'md' }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-blue border-t-transparent`}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className="mt-4 text-sm text-text-muted">{text}</p>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  )
}
