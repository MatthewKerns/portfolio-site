import { siteConfig } from './seo'
import { Project } from '@/data/projects'
import React from 'react'

/**
 * Generate Person schema for Matthew Kerns
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile-hq.jpg`,
    jobTitle: 'Software Development Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Amazon',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'California State University, Fullerton',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Irvine',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [
      siteConfig.github,
      siteConfig.linkedin,
    ],
    knowsAbout: [
      'Software Engineering',
      'Cloud Architecture',
      'AWS',
      'React',
      'TypeScript',
      'Node.js',
      'Spring Boot',
      'Java',
      'AI Automation',
      'LangGraph',
      'System Design',
    ],
    description: siteConfig.description,
  }
}

/**
 * Generate WebSite schema
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
    },
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: siteConfig.author,
    },
  }
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

/**
 * Generate CreativeWork schema for a project
 */
export function generateProjectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description || project.summary,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
    },
    creator: {
      '@type': 'Person',
      name: siteConfig.author,
    },
    url: `${siteConfig.url}/projects/${project.slug}`,
    keywords: project.tech.join(', '),
    inLanguage: 'en-US',
  }
}

/**
 * Generate ItemList schema for projects page
 */
export function generateProjectListSchema(projects: Project[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.summary,
        url: `${siteConfig.url}/projects/${project.slug}`,
        author: {
          '@type': 'Person',
          name: siteConfig.author,
        },
      },
    })),
  }
}

/**
 * Component to render JSON-LD script tags
 */
export function StructuredData({ data }: { data: object | object[] }): JSX.Element {
  const schemas = Array.isArray(data) ? data : [data]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
