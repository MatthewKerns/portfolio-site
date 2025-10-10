export interface Skill {
  category: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Spring Boot', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
  {
    category: 'Architecture',
    items: ['Microservices', 'Event-Driven', 'Serverless', 'REST APIs', 'GraphQL'],
  },
]