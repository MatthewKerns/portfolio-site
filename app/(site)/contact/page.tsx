'use client'

import { useState } from 'react'
import Section from '@/components/Section'

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formState)
  }

  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">Get in Touch</h1>
        <p className="mt-4 text-lg text-text-muted">
          Have a project in mind or just want to connect? I'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 block w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text placeholder-text-dim focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bg"
              placeholder="Your name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            />
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
              className="mt-2 block w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text placeholder-text-dim focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bg"
              placeholder="you@example.com"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
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
              className="mt-2 block w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text placeholder-text-dim focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bg"
              placeholder="Your message..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bg"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 border-t border-border pt-12">
          <h2 className="text-lg font-semibold text-text">Other Ways to Connect</h2>
          <div className="mt-4 space-y-2 text-text-muted">
            <p>
              Email:{' '}
              <a href="mailto:email@example.com" className="text-blue hover:text-blue-light">
                email@example.com
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:text-blue-light"
              >
                linkedin.com/in/username
              </a>
            </p>
            <p>
              GitHub:{' '}
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:text-blue-light"
              >
                github.com/username
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}