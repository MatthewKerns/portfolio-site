'use client'

import { useMemo } from 'react'
import { projects, type Project } from '@/data/projects'
import { APP_CONFIG } from '@/lib/constants'

/**
 * Custom hook for accessing and filtering projects.
 * Provides memoized project data and filtering utilities.
 *
 * @returns Project data and utilities
 * @example
 * const { allProjects, featuredProjects, getProjectBySlug } = useProjects()
 */
export function useProjects() {
  const allProjects = useMemo(() => projects, [])

  const featuredProjects = useMemo(
    () =>
      projects
        .filter((project) => project.featured)
        .slice(0, APP_CONFIG.MAX_FEATURED_PROJECTS),
    []
  )

  const getProjectBySlug = useMemo(
    () => (slug: string): Project | undefined => {
      return projects.find((project) => project.slug === slug)
    },
    []
  )

  const getRelatedProjects = useMemo(
    () => (currentProject: Project, limit = 3): Project[] => {
      // Find projects that share technologies
      const related = projects
        .filter((project) => {
          if (project.id === currentProject.id) return false

          const sharedTech = currentProject.tech.filter((tech) =>
            project.tech.includes(tech)
          )
          return sharedTech.length > 0
        })
        .sort((a, b) => {
          // Sort by number of shared technologies
          const aShared = a.tech.filter((tech) => currentProject.tech.includes(tech)).length
          const bShared = b.tech.filter((tech) => currentProject.tech.includes(tech)).length
          return bShared - aShared
        })
        .slice(0, limit)

      return related
    },
    []
  )

  return {
    allProjects,
    featuredProjects,
    getProjectBySlug,
    getRelatedProjects,
  }
}
