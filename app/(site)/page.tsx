import Hero from '@/components/Hero'
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import Link from 'next/link'

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      <Hero />
      <Section>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-text sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-text-muted">
            Recent work showcasing modern architecture and best practices
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-semibold text-blue transition-colors hover:text-blue-light"
          >
            View All Projects
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </Section>
    </>
  )
}