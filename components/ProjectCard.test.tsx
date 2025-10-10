import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProjectCard from './ProjectCard'
import { Project } from '@/data/projects'

const mockProject: Project = {
  id: '1',
  slug: 'test-project',
  title: 'Test Project',
  summary: 'A test project summary',
  tech: ['React', 'TypeScript', 'Node.js'],
  image: '/test.jpg',
  links: {
    demo: 'https://demo.example.com',
    repo: 'https://github.com/test/repo',
  },
}

describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />)

    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project summary')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
  })

  it('renders project links', () => {
    render(<ProjectCard project={mockProject} />)

    const demoLink = screen.getByText('Live Demo →')
    const repoLink = screen.getByText('View Code →')

    expect(demoLink).toHaveAttribute('href', 'https://demo.example.com')
    expect(repoLink).toHaveAttribute('href', 'https://github.com/test/repo')
  })
})