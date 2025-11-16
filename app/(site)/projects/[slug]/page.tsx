import { notFound } from 'next/navigation'
import Link from 'next/link'
import Section from '@/components/Section'
import TechBadge from '@/components/TechBadge'
import { projects } from '@/data/projects'
import { siteConfig } from '@/lib/seo'
import { StructuredData, generateBreadcrumbSchema, generateProjectSchema } from '@/lib/structured-data'

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
    openGraph: {
      title: `${project.title} - Matthew Kerns`,
      description: project.summary,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: project.title,
      description: project.summary,
    },
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: project.title, url: `/projects/${project.slug}` },
  ])

  const projectSchema = generateProjectSchema(project)

  return (
    <Section>
      <StructuredData data={[breadcrumbs, projectSchema]} />
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center text-sm text-text-muted transition-colors hover:text-blue"
      >
        ← Back to Projects
      </Link>
      <article className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">{project.title}</h1>

        {project.wip && (
          <div className="mt-4 inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-500">
            <span className="mr-2">🚧</span>
            Work in Progress
          </div>
        )}

        <p className="mt-6 text-xl leading-relaxed text-text-muted">{project.summary}</p>

        {(project.links.demo || project.links.repo) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-bg"
              >
                View Live Demo →
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-blue hover:text-blue focus:outline-none focus:ring-2 focus:ring-border focus:ring-offset-2 focus:ring-offset-bg"
              >
                View on GitHub →
              </a>
            )}
          </div>
        )}

        <div className="mt-12 space-y-12">
          {/* Tech Stack Section */}
          <div>
            <h2 className="text-2xl font-bold text-text">Tech Stack</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>

          {/* Overview Section */}
          {project.description ? (
            <div>
              <h2 className="text-2xl font-bold text-text">Overview</h2>
              <div className="mt-6 space-y-4">
                <p className="text-lg leading-relaxed text-text-muted">{project.description}</p>
              </div>
            </div>
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