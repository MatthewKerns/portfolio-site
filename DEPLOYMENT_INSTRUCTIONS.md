# 🚀 Deployment Instructions - Portfolio Site

## ✅ What's Been Completed

1. ✅ All project files created and organized
2. ✅ Git repository initialized with initial commit
3. ✅ GitHub Actions CI/CD workflow configured
4. ✅ AWS Amplify configuration files ready
5. ✅ Documentation and deployment guides created

## 📋 Next Steps

Follow these steps to deploy your portfolio:

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `portfolio-site`
3. **DO NOT** initialize with README (we already have one)
4. Keep it public for free GitHub Actions minutes

### Step 2: Push to GitHub

Run these commands in your terminal:

```bash
# Add your GitHub repository as remote (replace with your username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git

# Push to GitHub
git push -u origin main
```

### Step 3: Set Up AWS Amplify (Easiest Method)

1. **Go to AWS Amplify Console:**
   - Visit [AWS Amplify](https://console.aws.amazon.com/amplify)
   - Click "New app" → "Host web app"

2. **Connect GitHub:**
   - Choose GitHub
   - Authorize AWS Amplify
   - Select `portfolio-site` repository
   - Select `main` branch

3. **Build Settings (Auto-detected):**
   - Amplify will detect Next.js and use our `amplify.yml`
   - No changes needed!

4. **Deploy:**
   - Click "Save and deploy"
   - Wait ~5-10 minutes for first deployment
   - Get your URL: `https://main.dxxxxx.amplifyapp.com`

### Step 4: Verify CI/CD

1. **GitHub Actions will run automatically on push**
   - Check Actions tab in GitHub
   - Tests, linting, and type checking run on every push
   - Green checkmark = all tests pass!

2. **Amplify auto-deploys on push to main**
   - Any push to main triggers deployment
   - View build logs in Amplify Console

### Step 5: Customize Your Portfolio

Before going live, update these files with your information:

1. **Personal Info (`/lib/seo.ts`):**
   ```typescript
   export const siteConfig = {
     name: 'Your Name Portfolio',
     author: 'Your Name',
     // ... update other fields
   }
   ```

2. **Projects (`/data/projects.ts`):**
   - Replace sample projects with your actual projects
   - Update GitHub/demo links

3. **Skills (`/data/skills.ts`):**
   - Update with your technical skills

4. **Experience (`/data/timeline.ts`):**
   - Add your career timeline

5. **Contact (`/app/(site)/contact/page.tsx`):**
   - Update email and social links

6. **Footer (`/components/Footer.tsx`):**
   - Update GitHub, LinkedIn, email links

### Step 6: Custom Domain (Optional)

If you have a domain:

1. In Amplify Console → Domain management
2. Add your domain
3. Follow DNS configuration steps
4. SSL certificate auto-configured

## 🎯 Quick Commands

```bash
# Install dependencies
npm install

# Run locally
npm run dev
# Visit http://localhost:3000

# Run tests
npm run test

# Type check
npm run typecheck

# Format code
npm run format

# Build production
npm run build
```

## 📊 Monitoring Your Site

- **GitHub Actions:** Check build status in Actions tab
- **Amplify Console:** View deployment status and logs
- **Live Site:** Your site auto-updates on every push to main

## 🆘 Troubleshooting

### If GitHub Actions fails:
- Check Actions tab for error logs
- Ensure all tests pass locally: `npm run test`
- Verify build works: `npm run build`

### If Amplify deployment fails:
- Check Amplify Console build logs
- Ensure Node version is 20 (specified in `.nvmrc`)
- Verify `amplify.yml` is correct

### Common Issues:
- **Module not found:** Run `npm install`
- **Type errors:** Run `npm run typecheck` and fix issues
- **Build fails:** Check for missing environment variables

## 🎉 Success Checklist

- [ ] GitHub repository created and code pushed
- [ ] GitHub Actions running (green checkmarks)
- [ ] Amplify app created and connected
- [ ] First deployment successful
- [ ] Site accessible at Amplify URL
- [ ] Personal information updated
- [ ] Projects and skills customized

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [AWS Amplify Docs](https://docs.amplify.aws)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Project README](./README.md)
- [Detailed Deployment Guide](./docs/deployment-guide.md)

---

🚀 **You're ready to deploy!** Follow these steps and your portfolio will be live in ~15 minutes.

Need help? The deployment guide in `/docs/deployment-guide.md` has more detailed instructions.