import { memo } from 'react'

interface TechBadgeProps {
  /** Technology name to display */
  name: string
}

/**
 * Badge component for displaying technology names.
 * Used in project cards to show tech stack.
 *
 * @example
 * <TechBadge name="React" />
 */
function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue/30 bg-blue/10 px-2.5 py-0.5 text-xs font-medium text-blue">
      {name}
    </span>
  )
}

// Memoize to prevent re-renders when parent updates
export default memo(TechBadge)