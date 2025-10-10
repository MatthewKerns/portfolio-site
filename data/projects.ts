export interface Project {
  id: string
  slug: string
  title: string
  summary: string
  description?: string
  tech: string[]
  image: string
  featured?: boolean
  links: {
    demo?: string
    repo: string
  }
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'portfolio',
    title: 'Portfolio (Next.js)',
    summary: 'This Site - Modern portfolio showcasing structure, design, accessibility, and SEO best practices.',
    description: 'A production-quality Next.js portfolio with dark theme, optimized performance, and clean architecture.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'AWS Amplify'],
    image: '/images/portfolio.jpg',
    featured: true,
    links: {
      demo: 'https://portfolio.amplifyapp.com',
      repo: 'https://github.com/username/portfolio',
    },
  },
  {
    id: '2',
    slug: 'spring-boot-server',
    title: 'Spring Boot Server (EC2)',
    summary: 'RESTful API with health monitoring, versioning, and echo endpoints. Dockerized with CI/CD pipeline.',
    description: 'Production Spring Boot application deployed on AWS EC2 with comprehensive monitoring.',
    tech: ['Spring Boot', 'Java', 'Docker', 'AWS EC2', 'GitHub Actions'],
    image: '/images/spring-boot.jpg',
    featured: true,
    links: {
      demo: 'https://api.example.com/health',
      repo: 'https://github.com/username/spring-boot-server',
    },
  },
  {
    id: '3',
    slug: 'aws-lambda-serverless',
    title: 'AWS Lambda (Serverless Demo)',
    summary: 'Serverless function returning JSON with Infrastructure as Code via AWS CDK.',
    description: 'Demonstrating serverless architecture with AWS Lambda, API Gateway, and CDK for infrastructure.',
    tech: ['AWS Lambda', 'TypeScript', 'AWS CDK', 'API Gateway'],
    image: '/images/lambda.jpg',
    featured: true,
    links: {
      repo: 'https://github.com/username/lambda-demo',
    },
  },
  {
    id: '4',
    slug: 'event-driven-demo',
    title: 'Event-Driven Demo',
    summary: 'SNS + SQS + Lambda pipeline implementing observer pattern with comprehensive IaC.',
    description: 'Event-driven architecture demonstrating decoupled microservices communication.',
    tech: ['AWS SNS', 'AWS SQS', 'Lambda', 'CDK', 'TypeScript'],
    image: '/images/event-driven.jpg',
    links: {
      repo: 'https://github.com/username/event-driven-demo',
    },
  },
  {
    id: '5',
    slug: 'ai-workflow',
    title: 'AI Workflow',
    summary: 'n8n/LangGraph workflow for intelligent extraction and storage with read-only viewer.',
    description: 'AI-powered workflow automation with safety constraints and cost optimization.',
    tech: ['n8n', 'LangGraph', 'OpenAI API', 'PostgreSQL', 'Next.js'],
    image: '/images/ai-workflow.jpg',
    links: {
      demo: 'https://ai-workflow.example.com',
      repo: 'https://github.com/username/ai-workflow',
    },
  },
  {
    id: '6',
    slug: 'infinityvault',
    title: 'InfinityVault Internal Tool',
    summary: 'Real-world automation tool showcasing constraints, outcomes, and lessons learned.',
    description: 'Enterprise automation solution built with scalability and maintainability in focus.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/images/infinityvault.jpg',
    links: {
      repo: 'https://github.com/username/infinityvault-simplified',
    },
  },
]