import { notFound } from 'next/navigation'
import Link from 'next/link'
import Section from '@/components/Section'
import TechBadge from '@/components/TechBadge'
import { projects } from '@/data/projects'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.description || project.summary,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <Section>
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center text-sm text-text-muted transition-colors hover:text-blue"
      >
        ← Back to Projects
      </Link>
      <article className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-text-muted">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
            >
              View Live Demo →
            </a>
          )}
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-blue hover:text-blue"
          >
            View on GitHub →
          </a>
        </div>

        <div className="prose prose-invert mt-12 max-w-none">
          {project.description ? (
            <>
              <h2 className="text-2xl font-semibold text-text">Overview</h2>
              <p className="text-text-muted">{project.description}</p>
            </>
          ) : (
            <div className="rounded-lg border border-border bg-bg-secondary p-8 text-center">
              <p className="text-lg text-text-muted">
                Detailed case study coming soon. Check back for in-depth technical details,
                architecture decisions, and lessons learned.
              </p>
            </div>
          )}
        </div>
      </article>
    </Section>
  )
}