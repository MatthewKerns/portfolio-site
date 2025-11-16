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

      {/* Core Philosophy */}
      <section className="space-y-6 rounded-xl border border-border bg-bg-secondary p-8">
        <h2 className="text-3xl font-bold text-text">Core Philosophy</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <h3 className="font-semibold text-text">Foundations First</h3>
              <p className="text-sm text-text-muted">Master fundamental skills before advancing to complex concepts through progressive learning</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold text-text">Practical Over Theoretical</h3>
              <p className="text-sm text-text-muted">Every principle includes real code examples and actionable checklists</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌐</span>
            <div>
              <h3 className="font-semibold text-text">Multi-Language Mastery</h3>
              <p className="text-sm text-text-muted">Examples in Python, TypeScript, and Java with language-agnostic principles</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📈</span>
            <div>
              <h3 className="font-semibold text-text">Progressive Learning</h3>
              <p className="text-sm text-text-muted">Organized from fundamental coding skills to advanced architectural techniques</p>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Repository CTA */}
      <section className="space-y-6 rounded-xl border border-blue/30 bg-blue/10 p-8">
        <h2 className="text-2xl font-semibold text-text">
          📦 Complete Best Practices Guide
        </h2>
        <p className="leading-relaxed text-text-muted">
          All of these principles are documented in my comprehensive Software Development Best Practices Guide—
          a 450,000+ word repository with 80+ in-depth guides across 10 categories, 8 quick reference checklists,
          and examples in Python, TypeScript, and Java. 9 of 10 sections complete with continuous updates.
        </p>
        <div className="grid gap-4 text-sm text-text-muted sm:grid-cols-3">
          <div className="rounded-lg bg-bg p-4">
            <div className="text-2xl font-bold text-blue">80+</div>
            <div>Comprehensive Guides</div>
          </div>
          <div className="rounded-lg bg-bg p-4">
            <div className="text-2xl font-bold text-blue">450k+</div>
            <div>Words of Content</div>
          </div>
          <div className="rounded-lg bg-bg p-4">
            <div className="text-2xl font-bold text-blue">10</div>
            <div>Complete Categories</div>
          </div>
        </div>
        <p className="leading-relaxed text-text-muted">
          Includes example CLAUDE.md and copilot-instructions.md files for AI coding agent integration,
          ensuring every AI-generated line of code follows professional standards.
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

      {/* Best Practices Guide Overview */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-text">Best Practices Guide Overview</h2>
        <p className="text-text-muted">
          My approach to software development is organized into a structured learning path with 80+ comprehensive guides
          across 10 categories covering every aspect of professional software engineering.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Foundations */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <FileCode className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">01. Foundations</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              7 core guides on variable naming, function design, error handling, code formatting, documentation,
              defensive programming, and data structures. Start here for fundamental coding excellence.
            </p>
          </div>

          {/* Design in Code */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <GitBranch className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">02. Design in Code</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Construction-level design decisions: routine structure, complexity management, pseudocode programming,
              and class design principles for maintainable code organization.
            </p>
          </div>

          {/* Clean Architecture */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">03. Clean Architecture</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              SOLID principles, component cohesion and coupling, dependency management, and architectural boundaries
              that guide system structure and enable scalability.
            </p>
          </div>

          {/* Testing */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <TestTube className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">04. Quality Through Testing</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Comprehensive testing strategies including developer testing, unit test principles, TDD workflow,
              test design patterns, and coverage standards for confident refactoring.
            </p>
          </div>

          {/* Refactoring */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">05. Refactoring & Improvement</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Systematic approaches to improving existing code: code smell identification, refactoring patterns,
              safe refactoring workflows, and continuous improvement practices.
            </p>
          </div>

          {/* Collaboration */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">06. Collaborative Construction</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Team practices including effective code reviews, pair programming, collaborative debugging,
              and systematic integration workflows for high-performing teams.
            </p>
          </div>

          {/* Agentic Coding */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">07. Agentic Coding</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              AI-assisted development with Claude Code and GitHub Copilot, including prompt engineering,
              code review integration, and maintaining quality standards with AI tools.
            </p>
          </div>

          {/* Project Management */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">08. Project Management</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Software project lifecycle management, estimation techniques, risk management,
              and agile methodologies for successful project delivery.
            </p>
          </div>

          {/* Production Readiness */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">09. Production Readiness</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Comprehensive production deployment practices including monitoring, security, performance optimization,
              disaster recovery, and operational excellence for production systems.
            </p>
          </div>

          {/* Geist Gap Analysis */}
          <div className="space-y-3 rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-center gap-3">
              <FileCode className="h-6 w-6 text-blue" />
              <h3 className="text-lg font-semibold text-text">10. Geist Gap Analysis Framework</h3>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Three-dimensional problem analysis framework: Ghost (parallel realities), Geyser (dynamic forces),
              and Gist (essential core) for comprehensive understanding of complex problems.
            </p>
          </div>
        </div>
      </section>

      {/* Key Practices */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-text">Implementation Standards</h2>
        <div className="space-y-4 rounded-lg border border-border bg-bg-secondary p-6">
          <p className="text-sm text-text-muted">
            Every project following this philosophy adheres to these non-negotiable standards:
          </p>
          <ul className="space-y-3 text-text-muted">
            <li className="flex gap-3">
              <span className="text-blue">✓</span>
              <span><strong className="text-text">Meaningful Names:</strong> Self-documenting variable and function names following language conventions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue">✓</span>
              <span><strong className="text-text">Small Functions:</strong> Functions under 20 lines doing one thing at one abstraction level</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue">✓</span>
              <span><strong className="text-text">Defensive Programming:</strong> Input validation, proper error boundaries, fail-fast with context</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue">✓</span>
              <span><strong className="text-text">Test Coverage:</strong> 85%+ integration coverage, 90%+ unit coverage with TDD workflow</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue">✓</span>
              <span><strong className="text-text">SOLID Principles:</strong> Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue">✓</span>
              <span><strong className="text-text">Comments Explain Why:</strong> Code shows what, comments explain why—pseudocode-first design</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue">✓</span>
              <span><strong className="text-text">Continuous Refactoring:</strong> Regular code smell identification and systematic improvement</span>
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
