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
    title: 'My Portfolio Website (This One)',
    summary: 'Modern portfolio showcasing structure, design, accessibility, and SEO best practices.',
    description: '[Direct Implementation] This portfolio site demonstrates Clean Architecture principles and component-based design patterns learned from 7+ years at Amazon. Built with TypeScript strict mode for type safety, responsive UI following AWS best practices, and optimized for Lighthouse 90+ scores across all categories. Emphasizes maintainable code structure with clear separation of concerns (data/components/application layers) and accessibility-first design.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'AWS Amplify'],
    image: '/images/portfolio.jpg',
    featured: true,
    wip: true,
    links: {
      repo: 'https://github.com/MatthewKerns/portfolio-site',
    },
  },
  {
    id: '2',
    slug: 'infinityvault',
    title: 'InfinityVault Brand Website',
    summary: 'Premium trading card game accessories brand website with full-stack Next.js and AWS infrastructure.',
    description: '[Direct Implementation] Full-featured brand website built as Founder/CEO of InfinityVault, specializing in premium trading card game storage and accessories. Implements modern Next.js architecture with TypeScript, server-side rendering, AWS Amplify hosting, and integrated payment processing. Demonstrates end-to-end product ownership from technical architecture to business operations, including inventory management, order processing, and customer service systems. Built with scalability and performance in mind, serving collectors and TCG enthusiasts.',
    tech: ['Next.js', 'TypeScript', 'React', 'TailwindCSS', 'AWS Amplify'],
    image: '/images/infinityvault.jpg',
    featured: true,
    links: {
      demo: 'https://staging.dkwonfsyz1703.amplifyapp.com/',
      repo: 'https://github.com/MatthewKerns/InfinityVaultWebsite',
    },
  },
  {
    id: '3',
    slug: 'brand-coach',
    title: 'IDEA Brand Coach MVP',
    summary: 'Hired to transition vibe-coded Lovable prototype into production-ready beta with enterprise RAG architecture.',
    description: '[Contract Engagement] Hired by Brandvoice Retail to take their vibe-coded application built in Lovable and prepare it for beta testing with production-grade architecture. Leading the technical transformation from prototype to enterprise-ready conversational AI platform, architecting sophisticated RAG system using OpenAI GPT-5 (256K context) with intelligent multi-stage routing across 5 specialized domains (Diagnostic, Avatar, Canvas, CAPTURE, Core), dual knowledge base strategy (system + user-isolated context), and three-tier persistent memory system. Rebuilding with React 18, TypeScript, Supabase backend with PostgreSQL and Redis caching, semantic vector search, and horizontal scaling architecture. Target specifications: sub-3 second responses, >95% routing accuracy, 1,000+ concurrent users, and <$0.05 cost per conversation. Currently implementing comprehensive MVP plan and architectural documentation for beta launch.',
    tech: ['React', 'TypeScript', 'OpenAI GPT-5', 'RAG', 'PostgreSQL', 'Redis', 'Supabase', 'Vite'],
    image: '/images/brand-coach.jpg',
    featured: true,
    wip: true,
    links: {
      demo: 'https://ideabrandcoach.com/idea/consultant',
      repo: 'https://github.com/BrandvoiceRetail/idea-brand-coach',
    },
  },
  {
    id: '4',
    slug: 'spring-boot-server',
    title: 'Spring Boot Server (EC2)',
    summary: 'RESTful API with health monitoring, versioning, and echo endpoints. Dockerized with CI/CD pipeline.',
    description: '[Professional Capability Showcase] Demonstrates production-grade Spring Boot and AWS EC2 expertise applied across multiple backend services at Amazon. This showcase reflects operational excellence practices including health monitoring, Docker containerization, CI/CD pipelines, and oncall-ready architecture with proper logging and metrics instrumentation—capabilities proven through 3+ years of OPEX and production service ownership on Entity Resolver Service, Live Cards pipeline, and cross-team integrations.',
    tech: ['Spring Boot', 'Java', 'Docker', 'AWS EC2', 'GitHub Actions'],
    image: '/images/spring-boot.jpg',
    wip: true,
    links: {
      demo: 'https://api.example.com/health',
      repo: 'https://github.com/username/spring-boot-server',
    },
  },
  {
    id: '5',
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
    id: '6',
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
    id: '7',
    slug: 'ai-workflow',
    title: 'Real Estate GM Invoice and Receipts Processing AI Automation Workflow',
    summary: 'Automated invoice and receipt processing for real estate projects using n8n/LangGraph with intelligent extraction and storage.',
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
    id: '8',
    slug: 'infinityvault-internal',
    title: 'InfinityVault Internal Tool',
    summary: 'Real-world automation tool showcasing constraints, outcomes, and lessons learned.',
    description: '[Direct Implementation] Internal chatbot and automation platform built as Founder/CEO of InfinityVault e-commerce brand. Combines AI-powered agents using LangGraph and LangChain with Node.js backend to optimize logistics, workflows, and operational decision-making. Delivers measurable business value through reduced manual work and improved operational efficiency. Demonstrates technical leadership in building scalable data pipelines, system integrations, and tools that directly impact business growth and profitability.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    image: '/images/infinityvault-internal.jpg',
    wip: true,
    links: {
      repo: 'https://github.com/username/infinityvault-simplified',
    },
  },
]