# CLAUDE.md - AI Assistant Guidelines for Portfolio Project

## Project Context

You are working on a production-quality Next.js portfolio application that showcases software engineering excellence. This document provides guidelines to ensure all code and architectural decisions follow professional software development principles.

## Core Principles Reference

### 📚 Foundational Books Applied

1. **Code Complete 2 (Steve McConnell)**
   - Defensive programming
   - Code construction fundamentals
   - Variable naming and code readability
   - Error handling strategies

2. **Clean Code (Robert C. Martin)**
   - SOLID principles
   - Small functions principle
   - Meaningful names
   - Comment philosophy

3. **Clean Architecture (Robert C. Martin)**
   - Dependency inversion
   - Stable abstractions
   - Component boundaries
   - Use case driven development

4. **Head First Design Patterns (Freeman & Robson)**
   - Observer pattern (React's core)
   - Strategy pattern (for algorithms)
   - Factory pattern (component creation)
   - Decorator pattern (HOCs)

## Project-Specific Guidelines

### 🎯 Architecture Decisions

```typescript
// GOOD: Clear separation of concerns
// data/projects.ts - Data layer
export interface Project { /* ... */ }
export const projects: Project[] = [/* ... */]

// components/ProjectCard.tsx - Presentation layer
export default function ProjectCard({ project }: Props) { /* ... */ }

// app/projects/page.tsx - Application layer
export default function ProjectsPage() { /* ... */ }
```

**Follow these architectural rules:**
- **Dependency Rule**: Dependencies point inward (UI → Application → Domain → Data)
- **Stable Dependencies Principle**: Depend on abstractions, not concretions
- **Common Closure Principle**: Components that change together stay together
- **Single Responsibility**: Each module has one reason to change

### 📝 Code Construction Standards

#### 1. Variable and Function Naming (Code Complete 2, Ch. 11)

```typescript
// BAD: Unclear, abbreviated names
const d = new Date()
const yrs = calcYrs(d)
function proc(u: any) { }

// GOOD: Self-documenting names
const currentDate = new Date()
const yearsOfExperience = calculateYearsOfExperience(currentDate)
function processUserAuthentication(user: User) { }
```

#### 2. Function Design (Clean Code, Ch. 3)

```typescript
// BAD: Function doing multiple things
function handleUserAndSendEmail(user: User) {
  // Validate user
  // Update database
  // Send email
  // Log event
}

// GOOD: Small, focused functions
function validateUser(user: User): ValidationResult { }
function updateUserProfile(user: User): Promise<void> { }
function sendWelcomeEmail(email: string): Promise<void> { }
function logUserEvent(event: UserEvent): void { }
```

**Function Rules:**
- Maximum 20 lines (prefer 5-10)
- Do one thing at one abstraction level
- No side effects unless that's the primary purpose
- Use descriptive names over comments

#### 3. Error Handling (Code Complete 2, Ch. 8)

```typescript
// BAD: Silent failures
try {
  await fetchData()
} catch (e) {
  console.log(e)
}

// GOOD: Explicit error handling with recovery
try {
  const data = await fetchData()
  return { success: true, data }
} catch (error) {
  // Log for debugging
  logger.error('Failed to fetch data', { error, context })

  // Attempt recovery or provide fallback
  const cachedData = await getCachedData()
  if (cachedData) {
    return { success: true, data: cachedData, fromCache: true }
  }

  // Fail gracefully with useful error
  return {
    success: false,
    error: 'Unable to load data. Please try again later.'
  }
}
```

### 🏗️ Component Design Patterns

#### 1. Observer Pattern (React's Foundation)

```typescript
// React inherently uses Observer pattern
// Components observe state/props changes
export default function ProjectCard({ project }: Props) {
  // Component re-renders when project prop changes
  return <article>{project.title}</article>
}
```

#### 2. Composition Over Inheritance

```typescript
// BAD: Inheritance chains
class BaseButton extends Component { }
class PrimaryButton extends BaseButton { }
class LargePrimaryButton extends PrimaryButton { }

// GOOD: Composition with props
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

function Button({ variant = 'primary', size = 'md', ...props }: ButtonProps) {
  const classes = cn(
    'base-button-styles',
    variants[variant],
    sizes[size]
  )
  return <button className={classes} {...props} />
}
```

#### 3. Strategy Pattern for Algorithms

```typescript
// Different rendering strategies based on data
interface RenderStrategy {
  render(data: any): JSX.Element
}

const renderStrategies: Record<string, RenderStrategy> = {
  grid: new GridRenderer(),
  list: new ListRenderer(),
  carousel: new CarouselRenderer(),
}

function ProjectDisplay({ layout, projects }: Props) {
  const strategy = renderStrategies[layout] || renderStrategies.grid
  return strategy.render(projects)
}
```

### 🧪 Testing Philosophy

#### Test Pyramid (Following Clean Architecture)

```
         /\
        /  \  E2E Tests (5%)
       /    \
      /------\ Integration Tests (25%)
     /        \
    /----------\ Unit Tests (70%)
```

#### Testing Guidelines

```typescript
// Unit Test Example - Small, focused, fast
describe('ProjectCard', () => {
  it('displays project title', () => {
    const project = createMockProject({ title: 'Test Project' })
    render(<ProjectCard project={project} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })
})

// Integration Test Example
describe('Projects Page', () => {
  it('loads and displays projects from data layer', async () => {
    render(<ProjectsPage />)
    await waitFor(() => {
      expect(screen.getAllByRole('article')).toHaveLength(6)
    })
  })
})
```

### 🎨 React/Next.js Specific Patterns

#### 1. Custom Hooks for Logic Extraction

```typescript
// BAD: Logic mixed with presentation
function ProjectList() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch logic here
  }, [])

  // Render logic
}

// GOOD: Separate concerns with custom hooks
function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { projects, loading, error }
}

function ProjectList() {
  const { projects, loading, error } = useProjects()

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />
  return <ProjectGrid projects={projects} />
}
```

#### 2. Component Organization

```typescript
// Follow this structure for all components
interface ProjectCardProps {
  project: Project
  variant?: 'default' | 'featured'
  onSelect?: (project: Project) => void
}

/**
 * Displays a project card with title, summary, and tech stack.
 * Used in project grid and featured sections.
 */
export default function ProjectCard({
  project,
  variant = 'default',
  onSelect
}: ProjectCardProps) {
  // 1. Hooks
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  // 2. Computed values
  const techToShow = project.tech.slice(0, 3)
  const remainingTech = project.tech.length - 3

  // 3. Event handlers
  const handleClick = useCallback(() => {
    onSelect?.(project)
    router.push(`/projects/${project.slug}`)
  }, [project, onSelect, router])

  // 4. Render
  return (
    <article
      className={cn('project-card', variants[variant])}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Component JSX */}
    </article>
  )
}
```

### 📏 Code Quality Metrics

Maintain these metrics for code health:

| Metric | Target | Tool |
|--------|--------|------|
| **Test Coverage** | >80% | Vitest coverage |
| **Function Complexity** | <10 cyclomatic | ESLint complexity rule |
| **Function Length** | <20 lines | ESLint max-lines-per-function |
| **File Length** | <200 lines | ESLint max-lines |
| **Bundle Size** | <200KB initial | Next.js Bundle Analyzer |
| **Lighthouse Score** | >90 all categories | Lighthouse CI |
| **Type Coverage** | 100% | TypeScript strict |

### 🔒 Security Best Practices

```typescript
// 1. Input Validation
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
})

// 2. XSS Prevention
// Never use dangerouslySetInnerHTML unless absolutely necessary
// If needed, sanitize first:
import DOMPurify from 'isomorphic-dompurify'
const clean = DOMPurify.sanitize(dirty)

// 3. Environment Variables
// Never commit secrets
const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY, // Public keys only
  secret: process.env.API_SECRET, // Server-side only
}

// 4. Rate Limiting
import { rateLimit } from '@/lib/rate-limit'

export async function POST(request: Request) {
  const identifier = request.ip
  const { success } = await rateLimit.check(identifier)

  if (!success) {
    return new Response('Too Many Requests', { status: 429 })
  }

  // Process request
}
```

### 🚀 Performance Guidelines

#### 1. React Performance

```typescript
// Memoization where appropriate
const ProjectCard = memo(({ project }: Props) => {
  // Only re-render if project changes
  return <article>{project.title}</article>
})

// Use useCallback for event handlers passed as props
const handleClick = useCallback((id: string) => {
  router.push(`/projects/${id}`)
}, [router])

// Use useMemo for expensive computations
const sortedProjects = useMemo(() =>
  projects.sort((a, b) => b.date.localeCompare(a.date)),
  [projects]
)
```

#### 2. Next.js Optimization

```typescript
// Dynamic imports for code splitting
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false, // If not needed server-side
})

// Image optimization
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority // For above-fold images
  placeholder="blur"
  blurDataURL={blurDataUrl}
/>

// Font optimization
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
```

### 📋 Code Review Checklist

Before committing code, verify:

#### Functionality
- [ ] Feature works as specified
- [ ] Edge cases handled
- [ ] Error states managed
- [ ] Loading states present
- [ ] Responsive on all screen sizes

#### Code Quality
- [ ] Functions under 20 lines
- [ ] Clear variable/function names
- [ ] No commented-out code
- [ ] No console.logs in production
- [ ] DRY principle followed

#### Testing
- [ ] Unit tests for utilities
- [ ] Component tests for UI
- [ ] Error scenarios tested
- [ ] Accessibility tested

#### Performance
- [ ] No unnecessary re-renders
- [ ] Images optimized
- [ ] Code split where appropriate
- [ ] Bundle size checked

#### Security
- [ ] Input validated
- [ ] No sensitive data exposed
- [ ] XSS prevention in place
- [ ] CORS configured properly

### 🛠️ Refactoring Guidelines

When refactoring, follow these steps (from Refactoring by Martin Fowler):

1. **Ensure tests exist** - Never refactor without tests
2. **Make small changes** - One refactoring at a time
3. **Run tests frequently** - After each small change
4. **Commit often** - Preserve working states

Common refactorings for this project:

```typescript
// Extract Function
// Before
function ProjectPage() {
  // 50 lines of code including data fetching, processing, and rendering
}

// After
function ProjectPage() {
  const project = useProject()
  const relatedProjects = useRelatedProjects(project)

  return (
    <Layout>
      <ProjectHeader project={project} />
      <ProjectContent project={project} />
      <RelatedProjects projects={relatedProjects} />
    </Layout>
  )
}

// Extract Component
// Before: Everything in one component
// After: Logical component hierarchy
<ProjectCard>
  <ProjectThumbnail />
  <ProjectInfo>
    <ProjectTitle />
    <ProjectSummary />
    <TechStack />
  </ProjectInfo>
  <ProjectActions />
</ProjectCard>
```

### 🎯 Decision Framework

When making architectural decisions, consider:

1. **Simplicity First** - Can this be simpler?
2. **YAGNI** - You Aren't Gonna Need It
3. **Rule of Three** - Extract abstraction after 3rd duplication
4. **Principle of Least Surprise** - Follow conventions
5. **Optimize for Change** - Make future modifications easy

### 📚 Continuous Learning

Stay updated with:

- **Next.js Blog** - Framework updates
- **React Blog** - Best practices evolution
- **Web.dev** - Performance guidelines
- **A11y Project** - Accessibility standards
- **OWASP** - Security best practices

### 🤝 Collaboration Guidelines

When working with this codebase:

1. **Read existing code first** - Understand patterns in use
2. **Follow established conventions** - Consistency over preference
3. **Document why, not what** - Code shows what, comments explain why
4. **Ask for clarification** - When requirements unclear
5. **Suggest improvements** - In a constructive manner

### ⚡ Quick Reference Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run typecheck    # Check TypeScript
npm run lint         # Lint code
npm run format       # Format with Prettier

# Analysis
npm run analyze      # Bundle size analysis
npm run lighthouse   # Performance audit

# Git Workflow
git checkout -b feature/your-feature
git add .
git commit -m "type: description"  # feat|fix|docs|style|refactor|test|chore
git push origin feature/your-feature
```

### 🚨 Red Flags to Avoid

Watch for these code smells:

1. **Long functions** - Split into smaller functions
2. **Deep nesting** - Extract to functions or early returns
3. **Duplicate code** - Extract to utilities or components
4. **Large components** - Split into smaller components
5. **Prop drilling** - Consider context or composition
6. **Any type** - Always provide proper types
7. **Ignored errors** - Handle or explicitly document why ignored
8. **Global state overuse** - Keep state local when possible
9. **Premature optimization** - Profile first, optimize second
10. **Missing tests** - Every feature needs tests

## Summary

This portfolio project demonstrates professional software engineering through:
- **Clean Architecture** - Clear separation of concerns
- **SOLID Principles** - Maintainable, extensible code
- **Design Patterns** - Proven solutions to common problems
- **Best Practices** - Modern web development standards
- **Quality Focus** - Testing, performance, security, accessibility

Always prioritize code readability and maintainability over cleverness. The goal is to create a codebase that any professional developer can understand and extend with confidence.
