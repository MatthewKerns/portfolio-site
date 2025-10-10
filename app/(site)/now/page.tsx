import Section from '@/components/Section'

export const metadata = {
  title: 'Now',
  description: 'What I am focused on at this point in my life.',
}

export default function NowPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">Now</h1>
        <p className="mt-4 text-lg text-text-muted">
          What I&apos;m focused on at this point in my life. Last updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
        </p>

        <div className="prose prose-invert mt-12 max-w-none">
          <h2 className="text-2xl font-semibold text-text">Current Focus</h2>
          <ul className="mt-4 space-y-2 text-text-muted">
            <li>Building scalable microservices architecture at [Company]</li>
            <li>Contributing to open-source projects in the cloud-native ecosystem</li>
            <li>Writing technical blog posts about system design and best practices</li>
            <li>Learning Rust for systems programming</li>
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-text">Side Projects</h2>
          <ul className="mt-4 space-y-2 text-text-muted">
            <li>Developing an AI-powered workflow automation tool</li>
            <li>Building a personal knowledge management system</li>
            <li>Experimenting with edge computing and serverless architectures</li>
          </ul>

          <h2 className="mt-12 text-2xl font-semibold text-text">Reading</h2>
          <ul className="mt-4 space-y-2 text-text-muted">
            <li>"Designing Data-Intensive Applications" by Martin Kleppmann</li>
            <li>"The Pragmatic Programmer" by David Thomas and Andrew Hunt</li>
            <li>"Building Microservices" by Sam Newman</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}