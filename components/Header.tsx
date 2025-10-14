'use client'

import { memo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/lib/constants'

/**
 * Navigation menu items configuration.
 */
const navigation = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'Projects', href: ROUTES.PROJECTS },
  { name: 'Philosophy', href: ROUTES.PHILOSOPHY },
  { name: 'About', href: ROUTES.ABOUT },
  { name: 'Now', href: ROUTES.NOW },
  { name: 'Contact', href: ROUTES.CONTACT },
] as const

/**
 * Site header with navigation menu.
 * Includes sticky positioning, animated active state indicator, and accessibility features.
 *
 * Features:
 * - Keyboard navigation support
 * - ARIA labels for screen readers
 * - Visual active state indicator
 * - Smooth animations with Framer Motion
 *
 * @example
 * <Header />
 */
function Header() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          href={ROUTES.HOME}
          className="text-xl font-bold text-blue transition-colors hover:text-blue-light"
          aria-label="Home"
        >
          Portfolio
        </Link>
        <ul className="flex items-center space-x-8" role="list">
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
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[1.5px] left-0 right-0 h-0.5 bg-blue"
                      aria-hidden="true"
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

// Memoize to prevent re-renders when parent updates
export default memo(Header)