'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/data/projects'
import TechBadge from './TechBadge'

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-bg-secondary transition-colors hover:border-blue/50"
    >
      <Link href={`/projects/${project.slug}`} className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-text transition-colors group-hover:text-blue">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm text-text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs text-text-dim">+{project.tech.length - 3} more</span>
          )}
        </div>
      </Link>
      <div className="border-t border-border px-6 py-3">
        <div className="flex items-center gap-4 text-xs">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-text-muted transition-colors hover:text-blue"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo →
            </a>
          )}
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-text-muted transition-colors hover:text-blue"
            onClick={(e) => e.stopPropagation()}
          >
            View Code →
          </a>
        </div>
      </div>
    </motion.article>
  )
}