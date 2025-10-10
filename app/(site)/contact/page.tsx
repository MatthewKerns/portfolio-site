'use client'

import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import { useContactForm } from '@/hooks/useContactForm'

/**
 * Contact page component.
 * Displays contact form with validation and alternative contact methods.
 *
 * Implements Clean Code principles:
 * - Single Responsibility: Composition of smaller components
 * - DRY: Logic extracted to custom hook
 * - Error Handling: Comprehensive validation and error states
 */
export default function ContactPage() {
  const { formState, handleChange, handleSubmit, status, isSubmitting, errors } =
    useContactForm()

  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">Get in Touch</h1>
        <p className="mt-4 text-lg text-text-muted">
          Have a project in mind or just want to connect? I&apos;d love to hear from you.
        </p>

        {status.type === 'success' && (
          <div
            className="mt-6 rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-green-500"
            role="alert"
          >
            {status.message}
          </div>
        )}

        {status.type === 'error' && (
          <div
            className="mt-6 rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-red-500"
            role="alert"
          >
            {status.message}
          </div>
        )}

        <ContactForm
          formState={formState}
          errors={errors}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />

        <ContactInfo />
      </div>
    </Section>
  )
}