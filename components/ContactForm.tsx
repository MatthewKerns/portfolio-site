/**
 * Contact form component with validation and error handling.
 * Used on the contact page for user inquiries.
 */

import type { ContactFormData } from '@/hooks/useContactForm'

interface ContactFormProps {
  formState: ContactFormData
  errors: Partial<Record<keyof ContactFormData, string>>
  isSubmitting: boolean
  onSubmit: (e: React.FormEvent) => void
  onChange: (field: keyof ContactFormData, value: string) => void
}

export default function ContactForm({
  formState,
  errors,
  isSubmitting,
  onSubmit,
  onChange,
}: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="mt-12 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isSubmitting}
          className="mt-2 block w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text placeholder-text-dim focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your name"
          value={formState.name}
          onChange={(e) => onChange('name', e.target.value)}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isSubmitting}
          className="mt-2 block w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text placeholder-text-dim focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="you@example.com"
          value={formState.email}
          onChange={(e) => onChange('email', e.target.value)}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          disabled={isSubmitting}
          className="mt-2 block w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text placeholder-text-dim focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your message..."
          value={formState.message}
          onChange={(e) => onChange('message', e.target.value)}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
