import { siteConfig } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Matthew Kerns. Reach out for software engineering opportunities, collaborations, or technical discussions. Located in Irvine, CA.',
  openGraph: {
    title: 'Contact Matthew Kerns',
    description: 'Software engineer available for opportunities and collaborations',
    url: `${siteConfig.url}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Matthew Kerns',
    description: 'Get in touch for software engineering opportunities',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
