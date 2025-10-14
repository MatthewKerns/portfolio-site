import { memo } from 'react'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'

/**
 * Site footer with copyright and social links.
 * Displays at the bottom of every page with contact information.
 *
 * @example
 * <Footer />
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-sm text-text-muted">
            © {currentYear} Portfolio. Built with Next.js & TypeScript.
          </p>
          <nav className="flex items-center space-x-6" aria-label="Social links">
            <Link
              href={CONTACT_INFO.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-blue"
              aria-label="GitHub profile"
            >
              GitHub
            </Link>
            <Link
              href={CONTACT_INFO.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-blue"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </Link>
            <Link
              href={`mailto:${CONTACT_INFO.EMAIL}`}
              className="text-text-muted transition-colors hover:text-blue"
              aria-label="Send email"
            >
              Email
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

// Memoize to prevent re-renders
export default memo(Footer)