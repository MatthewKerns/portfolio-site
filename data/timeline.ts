export interface TimelineItem {
  year: string
  title: string
  description: string
  company?: string
}

export const timeline: TimelineItem[] = [
  {
    year: '2024 - Present',
    title: 'Co-Founder & Automation Developer',
    company: 'Ascension AI',
    description: 'Designing AI-powered data pipelines for invoice/receipt processing using LangChain, LangGraph, n8n, and Make.com. Building RAG-enabled agents with chat model switching (OpenAI, LlaMA, Qwen) and applying AWS cloud-native best practices.',
  },
  {
    year: '2024 - Present',
    title: 'AI Training Contributor',
    company: 'DataAnnotation',
    description: 'Dockerizing codebases in various languages (Rust, TypeScript, Python, Go) for coding agent containerized workflows.',
  },
  {
    year: '2022 - Present',
    title: 'Founder & CEO',
    company: 'InfinityVault, Inc.',
    description: 'Founded and scaling an e-commerce brand. Built internal AI-powered tools using Node.js, LangGraph, and LangChain to optimize workflows, logistics, and operational decision-making.',
  },
  {
    year: '2019 - 2022',
    title: 'Software Development Engineer II',
    company: 'Amazon.com',
    description: 'Owned Entity Resolver Service determining app availability across devices. Designed metrics instrumentation pipelines and architected server-side approach for Alexa Skill Builder. Led design reviews focusing on scalability, observability, and operational excellence.',
  },
  {
    year: '2016 - 2019',
    title: 'Software Development Engineer I',
    company: 'Amazon.com',
    description: 'Built AWS backend pipeline for Alexa Voice Tips on FireTV. Designed metrics SQL + ETL pipelines for ads reporting. Delivered Alexa ecosystem integrations and maintained high service reliability through OPEX and oncall duties.',
  },
  {
    year: '2015',
    title: 'Software Development Intern',
    company: 'Amazon.com',
    description: 'Delivered timeline feature for infra-capacity team to automate hardware ordering. Learned foundational skills in version control, architecture, and scalable systems design.',
  },
]