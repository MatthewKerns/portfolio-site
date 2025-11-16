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
  category?: 'current' | 'past'
  links: {
    demo?: string
    repo?: string
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
    description: '[Direct Implementation] Full-featured brand website built as Founder/CEO of InfinityVault, specializing in premium trading card game storage and accessories. Implements modern Next.js architecture with TypeScript, server-side rendering, AWS Amplify hosting, and integrated payment processing. Uses Convex for real-time database and Clerk for user authentication with seamless integration. Demonstrates end-to-end product ownership from technical architecture to business operations, including inventory management, order processing, and customer service systems. Built with scalability and performance in mind, serving collectors and TCG enthusiasts.',
    tech: ['Next.js', 'TypeScript', 'React', 'TailwindCSS', 'Convex', 'Clerk', 'AWS Amplify'],
    image: '/images/infinityvault.jpg',
    featured: true,
    wip: true,
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
    slug: 'ai-workflow',
    title: 'Real Estate Chatbot (In Progress)',
    summary: 'AI-powered invoice-receipt matching automation with intelligent analysis using LangGraph and AWS Bedrock.',
    description: '[Direct Implementation] AI-powered automation platform built as Ascension AI co-founder for real estate operations. The invoice and receipt processing workflow is currently working and undergoing user testing. System intelligently matches invoices with one or more receipts based on business rules, performs AI analysis on invoice submissions, and delivers automated email replies containing invoice breakdown, receipts breakdown, and risk assessment indicating whether the submission likely needs review or can be approved. Implements LangGraph with open-source LLaMA via AWS Bedrock for privacy and security of user data. Uses Clerk for user management and Convex for database with seamless integration between the two services. Includes safety constraints, error handling, and read-only viewer interface—delivering measurable business value through intelligent document processing and automated workflow management. Evolved from initial n8n prototype to current production implementation.',
    tech: ['LangGraph', 'AWS Bedrock', 'LLaMA', 'Convex', 'Clerk', 'Next.js', 'TypeScript'],
    image: '/images/ai-workflow.jpg',
    wip: true,
    links: {
      repo: 'https://github.com/MatthewKerns/RealEstateChatbot',
    },
  },
  {
    id: '5',
    slug: 'infinityvault-internal',
    title: 'InfinityVault Internal Tools',
    summary: 'Suite of automation tools under development for e-commerce operations, logistics, and workflow optimization.',
    description: '[Direct Implementation - In Progress] Suite of internal automation tools being developed as Founder/CEO of InfinityVault e-commerce brand. Building multiple AI-powered systems using LangGraph and LangChain with Node.js backend to optimize logistics, inventory management, customer service workflows, and operational decision-making. Tools include: competitor listing scraping and analysis, daily and weekly planning agent for operational tasks, AI operations management board for workflow orchestration, and communication automation system to identify and prioritize required communications with suppliers, graphic designers, and account management team. Delivers measurable business value through reduced manual work and improved operational efficiency. Demonstrates technical leadership in building scalable data pipelines, system integrations, and real-world tools that directly impact business growth and profitability.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'LangGraph', 'LangChain'],
    image: '/images/infinityvault-internal.jpg',
    wip: true,
    links: {},
  },
  {
    id: '6',
    slug: 'spring-boot-server',
    title: 'Spring Boot Server (EC2)',
    summary: 'RESTful API with health monitoring, versioning, and echo endpoints. Dockerized with CI/CD pipeline.',
    description: '[Amazon Work - Code Not Available] Production-grade Spring Boot backend services built during 7+ years at Amazon. Applied operational excellence practices including health monitoring, Docker containerization, CI/CD pipelines, and oncall-ready architecture with proper logging and metrics instrumentation. Proven through 3+ years of OPEX and production service ownership on Entity Resolver Service, Live Cards pipeline, and cross-team integrations. Happy to discuss architecture, design patterns, and lessons learned from building scalable backend systems.',
    tech: ['Spring Boot', 'Java', 'Docker', 'AWS EC2', 'GitHub Actions'],
    image: '/images/spring-boot.jpg',
    category: 'past',
    links: {},
  },
  {
    id: '7',
    slug: 'aws-lambda-serverless',
    title: 'AWS Lambda (Serverless)',
    summary: 'Serverless functions with Infrastructure as Code via AWS CDK for production AWS pipelines.',
    description: '[Amazon Work - Code Not Available] Serverless architecture and Infrastructure as Code expertise applied to production systems at Amazon. Built scalable backend services including the Live Cards AWS pipeline and Alexa for Apps server-side architecture using AWS Lambda, API Gateway, and CDK. Represents cloud-native best practices including managed services, serverless compute patterns, and automated infrastructure deployment proven in production environments. Happy to discuss serverless patterns, IaC strategies, and production architecture decisions.',
    tech: ['AWS Lambda', 'TypeScript', 'AWS CDK', 'API Gateway'],
    image: '/images/lambda.jpg',
    category: 'past',
    links: {},
  },
  {
    id: '8',
    slug: 'event-driven-demo',
    title: 'Event-Driven Architecture',
    summary: 'SNS + SQS + Lambda pipeline implementing decoupled microservices with comprehensive observability.',
    description: '[Amazon Work - Code Not Available] Event-driven architecture and messaging patterns applied to production systems at Amazon. Expertise in decoupled microservices communication, SNS/SQS messaging, and Infrastructure as Code gained from designing the Entity Resolver Service backend and coordinating cross-team integrations for Alexa for Apps. Proven ability to build systems with proper traceability, observability, and error handling at scale. Happy to discuss event-driven patterns, system design, and production reliability practices.',
    tech: ['AWS SNS', 'AWS SQS', 'Lambda', 'CDK', 'TypeScript'],
    image: '/images/event-driven.jpg',
    category: 'past',
    links: {},
  },
]