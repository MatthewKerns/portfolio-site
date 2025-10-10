import Section from '@/components/Section'
import { skills } from '@/data/skills'
import { timeline } from '@/data/timeline'

export const metadata = {
  title: 'About',
  description: 'Learn more about my background, skills, and experience.',
}

export default function AboutPage() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">About</h1>

        <div className="mt-8 space-y-6 text-text-muted">
          <p className="text-lg leading-relaxed">
            I&apos;m a Senior Software Engineer with a passion for building scalable, maintainable
            systems that solve real-world problems. My expertise spans cloud architecture,
            microservices, and modern web applications.
          </p>
          <p className="text-lg leading-relaxed">
            I believe in writing clean, testable code that follows SOLID principles and design
            patterns. Every line of code should have a purpose, every component should have clear
            boundaries, and every system should be built to evolve.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-text">Skills & Expertise</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="font-medium text-text">{skillGroup.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-sm text-text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-text">Journey</h2>
          <div className="mt-8 space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-8">
                <div className="absolute left-0 top-1 h-2 w-2 rounded-full bg-blue" />
                <div className="absolute left-[3px] top-3 h-full w-[2px] bg-border" />
                <div>
                  <span className="text-sm font-medium text-blue">{item.year}</span>
                  <h3 className="mt-1 font-semibold text-text">{item.title}</h3>
                  <p className="mt-1 text-text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}