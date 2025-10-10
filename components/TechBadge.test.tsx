import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TechBadge from './TechBadge'

describe('TechBadge', () => {
  it('renders tech name correctly', () => {
    render(<TechBadge name="React" />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('renders with correct styling', () => {
    const { container } = render(<TechBadge name="TypeScript" />)
    const badge = container.firstChild as HTMLElement

    expect(badge).toHaveClass('inline-flex')
    expect(badge).toHaveClass('rounded-full')
    expect(badge).toHaveClass('text-blue')
  })

  it('handles long technology names', () => {
    const longName = 'A Very Long Technology Name'
    render(<TechBadge name={longName} />)
    expect(screen.getByText(longName)).toBeInTheDocument()
  })
})
