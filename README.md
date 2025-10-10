# Portfolio

A modern, production-quality portfolio built with Next.js, TypeScript, and TailwindCSS. Showcases software engineering projects with a focus on clean architecture, performance, and maintainability.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-site.git
cd portfolio-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Testing**: Vitest + React Testing Library
- **CI/CD**: GitHub Actions
- **Hosting**: AWS Amplify

## 📁 Project Structure

```
/app              # Next.js App Router pages
/components       # Reusable React components
/data            # TypeScript data models
/lib             # Utilities and helpers
/public          # Static assets
/styles          # Global styles
/test            # Test configuration
/.github         # GitHub Actions workflows
```

## 🔧 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npm run format    # Format code with Prettier
npm run test      # Run tests
npm run typecheck # Type check with TypeScript
```

## 🚢 Deployment

### Option 1: AWS Amplify Console (Recommended)

1. **Connect GitHub Repository to Amplify:**
   ```bash
   # Install Amplify CLI
   npm install -g @aws-amplify/cli

   # Initialize Amplify
   amplify init

   # Add hosting
   amplify add hosting
   # Choose: Hosting with Amplify Console
   # Choose: Continuous deployment (Git-based)
   ```

2. **Configure build settings in Amplify Console:**
   - Build command: `npm run build`
   - Output directory: `.next`

3. **Push to deploy:**
   ```bash
   git push origin main
   # Amplify automatically builds and deploys
   ```

### Option 2: Manual Deployment with GitHub Actions

1. **Set up AWS credentials as GitHub secrets:**
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AMPLIFY_APP_ID`
   - `DEPLOY_BUCKET`

2. **Uncomment deployment steps in `.github/workflows/deploy.yml`**

3. **Push to main branch to trigger deployment**

## 🎨 Customization

### Update Personal Information

1. **Edit `/lib/seo.ts`:**
   - Update site name, description, and author
   - Modify keywords for SEO

2. **Edit `/data/projects.ts`:**
   - Add your own projects
   - Update project details and links

3. **Edit `/data/skills.ts`:**
   - Update with your technical skills

4. **Edit `/data/timeline.ts`:**
   - Add your professional experience

### Styling

- **Colors**: Modify color scheme in `/tailwind.config.ts`
- **Fonts**: Update font settings in `/app/layout.tsx`
- **Global styles**: Edit `/styles/globals.css`

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage

# Run type checking
npm run typecheck
```

## 📈 Performance

The portfolio is optimized for performance:

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Accessibility**: WCAG 2.1 compliant

## 📝 Adding Content

### Add a New Project

1. Edit `/data/projects.ts`:
```typescript
{
  id: '7',
  slug: 'new-project',
  title: 'New Project',
  summary: 'Brief description',
  tech: ['React', 'Node.js'],
  image: '/images/new-project.jpg',
  featured: false,
  links: {
    demo: 'https://demo.com',
    repo: 'https://github.com/user/project',
  },
}
```

2. Add project image to `/public/images/`

### Update About Page

Edit `/app/(site)/about/page.tsx` to update personal information and bio.

### Update Contact Information

Edit `/app/(site)/contact/page.tsx` to update contact details and social links.

## 🔐 Environment Variables

Create a `.env.local` file for local development:

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your-ga-tracking-id

# AWS Amplify (for deployment)
AMPLIFY_APP_ID=your-amplify-app-id
AWS_REGION=us-east-1
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for deployment inspiration
- AWS Amplify for hosting solution
- Open source community for tools and libraries

---

Built with ❤️ using Next.js and TypeScript