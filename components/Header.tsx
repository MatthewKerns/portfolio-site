'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Now', href: '/now' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold text-blue transition-colors hover:text-blue-light"
        >
          Portfolio
        </Link>
        <ul className="flex items-center space-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'relative text-sm font-medium transition-colors hover:text-text',
                    isActive ? 'text-text' : 'text-text-muted'
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[1.5px] left-0 right-0 h-0.5 bg-blue"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </motion.header>
  )
}