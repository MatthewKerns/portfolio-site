'use client'

import { useState, useCallback } from 'react'
import { z } from 'zod'
import { ContactFormSchema, type ContactFormData } from '@/lib/contact-schema'

// Re-export for backwards compatibility
export type { ContactFormData }

export interface FormStatus {
  type: 'success' | 'error' | 'idle'
  message: string
}

/**
 * Custom hook for managing contact form state and submission.
 * Handles validation, submission, and error states.
 *
 * @returns Form state and handlers
 * @example
 * const { formState, handleChange, handleSubmit, status, isSubmitting } = useContactForm()
 */
export function useContactForm() {
  const [formState, setFormState] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})

  const handleChange = useCallback((field: keyof ContactFormData, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
    // Clear error for this field when user starts typing
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      setErrors({})
      setStatus({ type: 'idle', message: '' })

      try {
        // Validate form data
        const validated = ContactFormSchema.parse(formState)

        // Submit to API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(validated),
        })

        if (!response.ok) {
          // Try to parse JSON error, fallback to text if not JSON
          let errorMessage = 'Failed to send message'
          try {
            const error = await response.json()
            errorMessage = error.message || errorMessage
          } catch {
            // Response wasn't JSON, use status text
            errorMessage = response.statusText || errorMessage
          }
          throw new Error(errorMessage)
        }

        // Success
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        })
        setFormState({ name: '', email: '', message: '' })
      } catch (error) {
        if (error instanceof z.ZodError) {
          // Validation errors
          const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {}
          error.issues.forEach((err: z.ZodIssue) => {
            const field = err.path[0] as keyof ContactFormData
            fieldErrors[field] = err.message
          })
          setErrors(fieldErrors)
          setStatus({
            type: 'error',
            message: 'Please check the form for errors',
          })
        } else if (error instanceof Error) {
          // API or network errors
          setStatus({
            type: 'error',
            message: error.message || 'Failed to send message. Please try again.',
          })
        } else {
          setStatus({
            type: 'error',
            message: 'An unexpected error occurred. Please try again.',
          })
        }
      } finally {
        setIsSubmitting(false)
      }
    },
    [formState]
  )

  const reset = useCallback(() => {
    setFormState({ name: '', email: '', message: '' })
    setStatus({ type: 'idle', message: '' })
    setErrors({})
    setIsSubmitting(false)
  }, [])

  return {
    formState,
    handleChange,
    handleSubmit,
    status,
    isSubmitting,
    errors,
    reset,
  }
}
