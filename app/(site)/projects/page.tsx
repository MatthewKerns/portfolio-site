import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { siteConfig } from '@/lib/seo'
import type { Metadata } from 'next'
import { StructuredData, generateBreadcrumbSchema, generateProjectListSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Portfolio of AWS cloud systems, AI automation, and full-stack applications. Production-quality projects using React, Node.js, Spring Boot, LangGraph, and serverless architecture.',
  openGraph: {
    title: 'Software Engineering Projects - Matthew Kerns',
    description: 'Explore cloud architecture, microservices, and AI automation projects built with modern tech stacks.',
    url: `${siteConfig.url}/projects`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Engineering Projects',
    description: 'AWS cloud systems, AI automation, and production applications',
  },
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsPage() {
  // TODO: Set to true when ready to show Amazon past work
  const SHOW_PAST_WORK = false

  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
  ])

  const projectListSchema = generateProjectListSchema(projects)

  const currentProjects = projects.filter(p => p.category !== 'past')
  const pastProjects = projects.filter(p => p.category === 'past')

  return (
    <Section>
      <StructuredData data={[breadcrumbs, projectListSchema]} />
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-3xl text-lg text-text-muted">
          A collection of production-quality applications demonstrating expertise in cloud
          architecture, microservices, and modern web development.
        </p>
      </div>

      {/* Current Projects Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-text mb-2">Current Projects</h2>
        <p className="text-text-muted mb-8">
          Recent work including full-stack applications, AI automation, and e-commerce platforms.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Past Projects Section */}
      {SHOW_PAST_WORK && pastProjects.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-text mb-2">Past Work at Amazon</h2>
          <p className="text-text-muted mb-8">
            Production systems built during 7+ years at Amazon. Code not available, but happy to
            discuss architecture, design patterns, and lessons learned.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pastProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}