import { z } from 'zod'
import { APP_CONFIG } from '@/lib/constants'

/**
 * Contact form validation schema.
 * Shared between client-side form validation and server-side API validation.
 */
export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(APP_CONFIG.FORM_LIMITS.NAME_MIN, 'Name is required')
    .max(APP_CONFIG.FORM_LIMITS.NAME_MAX, 'Name is too long')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email')
    .toLowerCase()
    .trim(),
  message: z
    .string()
    .min(APP_CONFIG.FORM_LIMITS.MESSAGE_MIN, 'Message must be at least 10 characters')
    .max(APP_CONFIG.FORM_LIMITS.MESSAGE_MAX, 'Message is too long')
    .trim(),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>
