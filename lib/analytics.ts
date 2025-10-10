/**
 * Google Analytics tracking utilities.
 * Provides type-safe wrappers for gtag function with error handling.
 */

import type { GAEvent } from '@/types/gtag'

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

/**
 * Track a page view in Google Analytics.
 * Safely handles errors and validates environment.
 *
 * @param url - The URL to track
 * @example
 * pageview(new URL('/about', window.location.origin))
 */
export const pageview = (url: URL): void => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) {
    return
  }

  try {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url.pathname,
    })
  } catch (error) {
    // Log to error tracking service in production
    if (process.env.NODE_ENV === 'development') {
      console.error('Analytics pageview error:', error)
    }
  }
}

/**
 * Track a custom event in Google Analytics.
 * Safely handles errors and validates parameters.
 *
 * @param event - Event parameters (action, category, label, value)
 * @example
 * event({ action: 'click', category: 'CTA', label: 'View Projects' })
 */
export const event = ({ action, category, label, value }: GAEvent): void => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) {
    return
  }

  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  } catch (error) {
    // Log to error tracking service in production
    if (process.env.NODE_ENV === 'development') {
      console.error('Analytics event error:', error)
    }
  }
}