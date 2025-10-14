import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Projects',
  description: 'Portfolio of software engineering projects showcasing modern web development.',
}

export default function ProjectsPage() {
  return (
    <Section>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-3xl text-lg text-text-muted">
          A collection of production-quality applications demonstrating expertise in cloud
          architecture, microservices, and modern web development.
        </p>
        <p className="mt-3 max-w-3xl text-base text-text-muted italic">
          These projects showcase real expertise from 7+ years of professional software development.
          Some are direct implementations I&apos;ve built, others demonstrate capabilities I&apos;ve applied
          in production systems at Amazon and my own companies. Happy to discuss technical details,
          architecture decisions, and real-world applications during an interview.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}