import Link from 'next/link'
import Section from '@/components/Section'

export default function NotFound() {
  return (
    <Section className="flex min-h-[60vh] items-center">
      <div className="text-center">
        <p className="text-sm font-semibold text-blue">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-text-muted">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-lg bg-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
          >
            Go back home
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-text transition-colors hover:text-blue"
          >
            Contact support <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </Section>
  )
}