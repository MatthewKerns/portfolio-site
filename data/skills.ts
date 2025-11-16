export interface Skill {
  category: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'React Native', 'TypeScript', 'Responsive UI', 'MVC Pattern'],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'Node.js', 'Python', 'Java', 'Kotlin', 'SQL', 'NoSQL', 'Clerk'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (Lambda, EC2, S3, CDK)', 'REST APIs', 'CI/CD', 'Git', 'Docker'],
  },
  {
    category: 'AI & Automation',
    items: ['LangGraph', 'LangChain', 'n8n', 'OpenAI API', 'RAG', 'Make.com'],
  },
  {
    category: 'Databases',
    items: ['Convex', 'PostgreSQL (Neon)', 'DynamoDB', 'SQL', 'NoSQL'],
  },
  {
    category: 'Other',
    items: ['Android Development', 'iOS Development', 'BI Dashboards', 'Metrics'],
  },
]