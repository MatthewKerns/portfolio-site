import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Portfolio. Built with Next.js & TypeScript.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-blue"
              aria-label="GitHub"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-blue"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:email@example.com"
              className="text-text-muted transition-colors hover:text-blue"
              aria-label="Email"
            >
              Email
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="text-text-muted transition-colors hover:text-blue"
              aria-label="Resume"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}