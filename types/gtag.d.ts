/**
 * Type definitions for Google Analytics gtag function.
 * Provides type safety for analytics tracking.
 */

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set' | 'get',
      targetId: string,
      config?: Record<string, unknown>
    ) => void
  }
}

export {}

/**
 * Google Analytics event parameters
 */
export interface GAEvent {
  action: string
  category: string
  label?: string
  value?: number
}