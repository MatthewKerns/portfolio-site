import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useProjects } from './useProjects'
import { APP_CONFIG } from '@/lib/constants'

describe('useProjects', () => {
  it('returns all projects', () => {
    const { result } = renderHook(() => useProjects())

    expect(result.current.allProjects).toBeDefined()
    expect(Array.isArray(result.current.allProjects)).toBe(true)
  })

  it('returns featured projects with correct limit', () => {
    const { result } = renderHook(() => useProjects())

    expect(result.current.featuredProjects.length).toBeLessThanOrEqual(
      APP_CONFIG.MAX_FEATURED_PROJECTS
    )

    result.current.featuredProjects.forEach((project) => {
      expect(project.featured).toBe(true)
    })
  })

  it('finds project by slug', () => {
    const { result } = renderHook(() => useProjects())

    const firstProject = result.current.allProjects[0]
    const found = result.current.getProjectBySlug(firstProject.slug)

    expect(found).toEqual(firstProject)
  })

  it('returns undefined for non-existent slug', () => {
    const { result } = renderHook(() => useProjects())

    const found = result.current.getProjectBySlug('non-existent-slug')

    expect(found).toBeUndefined()
  })

  it('finds related projects based on shared technologies', () => {
    const { result } = renderHook(() => useProjects())

    const project = result.current.allProjects[0]
    const related = result.current.getRelatedProjects(project, 3)

    expect(related.length).toBeLessThanOrEqual(3)

    // Should not include the project itself
    expect(related.find((p) => p.id === project.id)).toBeUndefined()
  })

  it('memoizes results', () => {
    const { result, rerender } = renderHook(() => useProjects())

    const firstAllProjects = result.current.allProjects
    const firstFeaturedProjects = result.current.featuredProjects

    rerender()

    // Same reference = memoized
    expect(result.current.allProjects).toBe(firstAllProjects)
    expect(result.current.featuredProjects).toBe(firstFeaturedProjects)
  })
})
