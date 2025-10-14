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
            Software Development Engineer with 7+ years of experience designing and delivering scalable
            software solutions across e-commerce, cloud systems, and AI-powered automation. Skilled in
            AWS, React, Node.js, and database work in SQL, with strong software development best practices
            foundations in OOP, design patterns, and developing clean, observable software.
          </p>
          <p className="text-lg leading-relaxed">
            Recently focused on AI chat programming using n8n, LangGraph, and LangChain. I commit to
            learning whatever frameworks or systems are required to deliver real business value and
            high-quality software. Every line of code should have a purpose, every component should have
            clear boundaries, and every system should be built to evolve.
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
            {timeline.map((item, index) => (
              <div key={`${item.year}-${index}`} className="relative pl-8">
                <div className="absolute left-0 top-1 h-2 w-2 rounded-full bg-blue" />
                <div className="absolute left-[3px] top-3 h-full w-[2px] bg-border last:bg-transparent" />
                <div>
                  <span className="text-sm font-medium text-blue">{item.year}</span>
                  <h3 className="mt-1 font-semibold text-text">{item.title}</h3>
                  {item.company && (
                    <p className="text-sm text-text-muted">{item.company}</p>
                  )}
                  <p className="mt-2 text-text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}