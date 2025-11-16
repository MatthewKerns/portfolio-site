'use client'

import { memo, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/data/projects'
import TechBadge from './TechBadge'
import { APP_CONFIG } from '@/lib/constants'

interface ProjectCardProps {
  project: Project
  index?: number
  variant?: 'default' | 'featured'
  onSelect?: (project: Project) => void
}

/**
 * Displays a project card with title, summary, and tech stack.
 * Used in project grid and featured sections.
 *
 * Implements CLAUDE.md component structure:
 * - Computed values first
 * - Event handlers second
 * - Render last
 *
 * @example
 * <ProjectCard
 *   project={project}
 *   variant="featured"
 *   onSelect={handleProjectSelect}
 * />
 */
function ProjectCard({
  project,
  index = 0,
  variant = 'default',
  onSelect
}: ProjectCardProps) {
  // 1. Computed values
  const techToShow = useMemo(
    () => project.tech.slice(0, APP_CONFIG.MAX_TECH_BADGES_DISPLAY),
    [project.tech]
  )

  const remainingCount = useMemo(
    () => Math.max(0, project.tech.length - APP_CONFIG.MAX_TECH_BADGES_DISPLAY),
    [project.tech.length]
  )

  // 2. Event handlers
  const handleCardClick = useCallback(() => {
    onSelect?.(project)
  }, [project, onSelect])

  const handleLinkClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
    },
    []
  )

  // 4. Render
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: APP_CONFIG.ANIMATION_DELAYS.DEFAULT, delay: index * APP_CONFIG.ANIMATION_DELAYS.STAGGER }}
      whileHover={{ y: APP_CONFIG.ANIMATION_DELAYS.HOVER_LIFT }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-bg-secondary transition-colors hover:border-blue/50"
      onClick={handleCardClick}
    >
      {project.wip && (
        <div className="absolute right-3 top-3 z-10 rounded-md bg-blue/20 px-2 py-1 text-xs font-medium text-blue backdrop-blur-sm">
          Work in Progress
        </div>
      )}
      <Link href={`/projects/${project.slug}`} className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-text transition-colors group-hover:text-blue">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm text-text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {techToShow.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {remainingCount > 0 && (
            <span className="text-xs text-text-dim">+{remainingCount} more</span>
          )}
        </div>
      </Link>
      {(project.links.demo || project.links.repo) && (
        <div className="border-t border-border px-6 py-3">
          <div className="flex items-center gap-4 text-xs">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-text-muted transition-colors hover:text-blue"
                onClick={handleLinkClick}
              >
                Live Demo →
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-text-muted transition-colors hover:text-blue"
                onClick={handleLinkClick}
              >
                View Code →
              </a>
            )}
          </div>
        </div>
      )}
    </motion.article>
  )
}

// Memoize component to prevent unnecessary re-renders
export default memo(ProjectCard, (prev, next) =>
  prev.project.id === next.project.id &&
  prev.index === next.index &&
  prev.variant === next.variant
)