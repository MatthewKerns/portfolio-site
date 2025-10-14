export interface Project {
  id: string
  slug: string
  title: string
  summary: string
  description?: string
  tech: string[]
  image: string
  featured?: boolean
  wip?: boolean
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
    description: '[Direct Implementation] This portfolio site demonstrates Clean Architecture principles and component-based design patterns learned from 7+ years at Amazon. Built with TypeScript strict mode for type safety, responsive UI following AWS best practices, and optimized for Lighthouse 90+ scores across all categories. Emphasizes maintainable code structure with clear separation of concerns (data/components/application layers) and accessibility-first design.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'AWS Amplify'],
    image: '/images/portfolio.jpg',
    featured: true,
    wip: true,
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
    description: '[Professional Capability Showcase] Demonstrates production-grade Spring Boot and AWS EC2 expertise applied across multiple backend services at Amazon. This showcase reflects operational excellence practices including health monitoring, Docker containerization, CI/CD pipelines, and oncall-ready architecture with proper logging and metrics instrumentation—capabilities proven through 3+ years of OPEX and production service ownership on Entity Resolver Service, Live Cards pipeline, and cross-team integrations.',
    tech: ['Spring Boot', 'Java', 'Docker', 'AWS EC2', 'GitHub Actions'],
    image: '/images/spring-boot.jpg',
    featured: true,
    wip: true,
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
    description: '[Professional Capability Showcase] Demonstrates serverless architecture and Infrastructure as Code expertise applied to production systems at Amazon. This showcase reflects AWS Lambda, API Gateway, and CDK proficiency gained from building scalable backend services including the Live Cards AWS pipeline and Alexa for Apps server-side architecture. Represents cloud-native best practices including managed services, serverless compute patterns, and automated infrastructure deployment proven in production environments.',
    tech: ['AWS Lambda', 'TypeScript', 'AWS CDK', 'API Gateway'],
    image: '/images/lambda.jpg',
    featured: true,
    wip: true,
    links: {
      repo: 'https://github.com/username/lambda-demo',
    },
  },
  {
    id: '4',
    slug: 'event-driven-demo',
    title: 'Event-Driven Demo',
    summary: 'SNS + SQS + Lambda pipeline implementing observer pattern with comprehensive IaC.',
    description: '[Professional Capability Showcase] Demonstrates event-driven architecture and messaging patterns applied to production systems at Amazon. This showcase reflects expertise in decoupled microservices communication, SNS/SQS messaging, and Infrastructure as Code gained from designing the Entity Resolver Service backend and coordinating cross-team integrations for Alexa for Apps. Represents proven ability to build systems with proper traceability, observability, and error handling at scale.',
    tech: ['AWS SNS', 'AWS SQS', 'Lambda', 'CDK', 'TypeScript'],
    image: '/images/event-driven.jpg',
    wip: true,
    links: {
      repo: 'https://github.com/username/event-driven-demo',
    },
  },
  {
    id: '5',
    slug: 'ai-workflow',
    title: 'AI Workflow',
    summary: 'n8n/LangGraph workflow for intelligent extraction and storage with read-only viewer.',
    description: '[Direct Implementation] AI-powered email attachment processing workflow built as Ascension AI co-founder, automating invoice and receipt extraction for real estate projects. Implements LangChain, LangGraph, and n8n with RAG-enabled agents featuring chat model switching (OpenAI, LlaMA, Qwen) for cost optimization. Includes safety constraints, error handling, PostgreSQL data storage, and read-only viewer interface—delivering measurable business value through intelligent document processing and natural language querying capabilities.',
    tech: ['n8n', 'LangGraph', 'OpenAI API', 'PostgreSQL', 'Next.js'],
    image: '/images/ai-workflow.jpg',
    wip: true,
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
    description: '[Direct Implementation] Internal chatbot and automation platform built as Founder/CEO of InfinityVault e-commerce brand. Combines AI-powered agents using LangGraph and LangChain with Node.js backend to optimize logistics, workflows, and operational decision-making. Delivers measurable business value through reduced manual work and improved operational efficiency. Demonstrates technical leadership in building scalable data pipelines, system integrations, and tools that directly impact business growth and profitability.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/images/infinityvault.jpg',
    wip: true,
    links: {
      repo: 'https://github.com/username/infinityvault-simplified',
    },
  },
]