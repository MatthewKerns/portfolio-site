import { memo, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  /** Content to render inside the section */
  children: ReactNode
  /** Additional CSS classes to apply */
  className?: string
  /** Optional ID for anchor links */
  id?: string
}

/**
 * Reusable section wrapper component.
 * Provides consistent spacing and max-width across pages.
 *
 * @example
 * <Section id="projects" className="bg-bg-secondary">
 *   <h2>Projects</h2>
 *   <ProjectGrid />
 * </Section>
 */
function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 sm:py-24', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  )
}

export default memo(Section)