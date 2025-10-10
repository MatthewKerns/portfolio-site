/**
 * Contact information display component.
 * Shows alternative contact methods (email, social links).
 */

import { CONTACT_INFO } from '@/lib/constants'

export default function ContactInfo() {
  return (
    <div className="mt-12 border-t border-border pt-12">
      <h2 className="text-lg font-semibold text-text">Other Ways to Connect</h2>
      <div className="mt-4 space-y-2 text-text-muted">
        <p>
          Email:{' '}
          <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-blue hover:text-blue-light">
            {CONTACT_INFO.EMAIL}
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href={CONTACT_INFO.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue hover:text-blue-light"
          >
            {CONTACT_INFO.LINKEDIN.replace('https://', '')}
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a
            href={CONTACT_INFO.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue hover:text-blue-light"
          >
            {CONTACT_INFO.GITHUB.replace('https://', '')}
          </a>
        </p>
      </div>
    </div>
  )
}
