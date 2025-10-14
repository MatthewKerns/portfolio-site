import { Metadata } from 'next'
import Link from 'next/link'
import { FileCode, GitBranch, TestTube, Shield, Zap, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Development Philosophy | Portfolio',
  description: 'My approach to software engineering: leveraging AI coding agents while maintaining rigorous quality standards and best practices.',
}

export default function PhilosophyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-6 py-16 lg:px-8">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
          Development Philosophy
        </h1>
        <p className="text-xl leading-relaxed text-text-muted">
          How I build software that's maintainable, scalable, and production-ready
        </p>
      </section>

      {/* AI Coding Agents Section */}
      <section className="space-y-6 rounded-xl border border-border bg-bg-secondary p-8">
        <div className="flex items-start gap-4">
          <Zap className="mt-1 h-8 w-8 flex-shrink-0 text-blue" />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-text">AI as a Force Multiplier</h2>
            <p className="leading-relaxed text-text-muted">
              I believe AI coding agents like Claude Code and GitHub Copilot are powerful tools we need to incorporate
              to stay ahead of the curve. They excel at generating 80-90% of the code quickly and generally get things right.
            </p>
            <p className="leading-relaxed text-text-muted">
              However, there's always that 10-20% that acts as a Trojan horse—small bugs here and there, or tiny
              misunderstandings at the beginning that can make all the changes unhelpful and need to be reverted.
            </p>
            <p className="leading-relaxed text-text-muted">
              <strong className="text-text">It's our job as software engineers</strong> to oversee every change, verify
              every line of documentation is accurate, and correct it when it's not. Our role has evolved: we're now
              more reading-heavy than ever, validating AI outputs with the same rigor we'd apply to any code review.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-text">Core Engineering Principles</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* DRY Principle */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <FileCode className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">Don't Repeat Yourself</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Search existing functionality before writing new code. Use inheritance/composition over duplication.
              Extract common patterns to utilities. Delete old implementations when refactoring—no compatibility wrappers.
            </p>
          </div>

          {/* TDD */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <TestTube className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">Test-Driven Development</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Write tests first that capture acceptance criteria. Use real components with real dependencies for
              development tests. Maintain 85%+ integration coverage and 90%+ unit coverage.
            </p>
          </div>

          {/* Clean Architecture */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <GitBranch className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">Clean Architecture</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Clear separation of concerns with dependencies pointing inward. Stable Dependencies Principle:
              depend on abstractions, not concretions. Each module has one reason to change.
            </p>
          </div>

          {/* Defensive Programming */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">Defensive Programming</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Input validation with proper error boundaries. Fail fast with comprehensive error context.
              Resource management with timeouts. Structured logging with debugging information.
            </p>
          </div>

          {/* Comments & Documentation */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">Comments Explain Why</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Comments explain WHY, not WHAT. Write comments-first pseudocode before implementation.
              Include business context for complex decisions. Comprehensive docstrings for all public functions.
            </p>
          </div>

          {/* Code Quality */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">Quality Over Speed</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Type hints everywhere. Self-explanatory variable names. Small functions under 20 lines.
              Single responsibility per function. Optimize for readability and maintainability.
            </p>
          </div>
        </div>
      </section>

      {/* Key Practices */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-text">Key Practices</h2>
        <div className="space-y-4 rounded-lg border border-border bg-bg-secondary p-6">
          <ul className="space-y-3 text-text-muted">
            <li className="flex gap-3">
              <span className="text-blue">•</span>
              <span><strong className="text-text">Pre-Implementation DRY Analysis:</strong> Search for existing similar functionality before writing any new code</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue">•</span>
              <span><strong className="text-text">Comments-First Design:</strong> Write complete business logic as comments before implementing</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue">•</span>
              <span><strong className="text-text">Development TDD:</strong> Real components + real dependencies for new features and integration</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue">•</span>
              <span><strong className="text-text">Unit TDD:</strong> Real component + mocked dependencies for isolated behavior testing</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue">•</span>
              <span><strong className="text-text">Async Compliance:</strong> All I/O operations use proper async patterns (critical for scalability)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue">•</span>
              <span><strong className="text-text">Security First:</strong> Input validation, proper authentication, secrets management, rate limiting</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue">•</span>
              <span><strong className="text-text">Complete Replacement Over Compatibility:</strong> When refactoring, replace old implementations entirely—no backwards compatibility wrappers that accumulate technical debt</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Philosophical Framework */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-text">Three-Dimensional Problem Analysis</h2>
        <p className="leading-relaxed text-text-muted">
          When approaching any problem, I use a framework inspired by philosophical concepts to ensure comprehensive understanding:
        </p>
        <div className="space-y-4">
          <div className="rounded-lg border-l-4 border-blue bg-bg-secondary p-6">
            <h3 className="mb-2 text-lg font-semibold text-text">1. Ghost Analysis (Parallel Reality)</h3>
            <p className="text-sm text-text-muted">
              What am I not seeing? What assumptions am I making? What context gaps exist in my understanding?
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-blue bg-bg-secondary p-6">
            <h3 className="mb-2 text-lg font-semibold text-text">2. Geyser Analysis (Dynamic Forces)</h3>
            <p className="text-sm text-text-muted">
              What forces am I not accounting for? What explosive changes or emergent properties exist under pressure?
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-blue bg-bg-secondary p-6">
            <h3 className="mb-2 text-lg font-semibold text-text">3. Gist Analysis (Essential Core)</h3>
            <p className="text-sm text-text-muted">
              What's the irreducible essence of what we're building? Am I solving the essential problem or getting distracted?
            </p>
          </div>
        </div>
      </section>

      {/* GitHub Repository CTA */}
      <section className="space-y-6 rounded-xl border border-blue/30 bg-blue/10 p-8">
        <h2 className="text-2xl font-semibold text-text">
          See It In Action
        </h2>
        <p className="leading-relaxed text-text-muted">
          I've documented my complete development philosophy including coding guidelines, best practices, and agent
          instructions in a comprehensive repository. This includes example CLAUDE.md and copilot-instructions.md files
          that I use across all my projects.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="https://github.com/MatthewKerns/software-development-best-practices-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue px-6 py-3 font-medium text-bg transition-colors hover:bg-blue-light"
          >
            <GitBranch className="h-5 w-5" />
            View Best Practices Guide
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-bg-secondary px-6 py-3 font-medium text-text transition-colors hover:border-blue/50"
          >
            See Projects
          </Link>
        </div>
      </section>

      {/* Foundational Books */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-text">Foundational References</h2>
        <p className="leading-relaxed text-text-muted">
          My philosophy is grounded in time-tested software engineering principles:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-bg-secondary p-4">
            <p className="font-semibold text-text">Code Complete 2</p>
            <p className="text-sm text-text-muted">Steve McConnell - Defensive programming and code construction fundamentals</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-secondary p-4">
            <p className="font-semibold text-text">Clean Code</p>
            <p className="text-sm text-text-muted">Robert C. Martin - SOLID principles and meaningful names</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-secondary p-4">
            <p className="font-semibold text-text">Clean Architecture</p>
            <p className="text-sm text-text-muted">Robert C. Martin - Dependency inversion and stable abstractions</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-secondary p-4">
            <p className="font-semibold text-text">Head First Design Patterns</p>
            <p className="text-sm text-text-muted">Freeman & Robson - Practical design pattern applications</p>
          </div>
        </div>
      </section>
    </div>
  )
}
