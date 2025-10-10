# Deployment Guide

## Prerequisites

- GitHub account with repository created
- AWS account (free tier is sufficient)
- Node.js 20+ installed locally
- Git configured on your machine

## Step 1: Initialize Git Repository

```bash
# Initialize git repo
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio setup"

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/portfolio-site.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Set Up AWS Amplify

### Option A: Amplify Console (Easiest)

1. **Go to AWS Amplify Console**
   - Navigate to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "New app" → "Host web app"

2. **Connect GitHub**
   - Choose GitHub as source provider
   - Authorize AWS Amplify
   - Select your repository and branch (main)

3. **Configure Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Review and Deploy**
   - Review settings
   - Click "Save and deploy"
   - Wait for initial deployment (~5-10 minutes)

5. **Access Your Site**
   - Amplify provides a URL like: `https://main.d1234abcd.amplifyapp.com`
   - You can add a custom domain later

### Option B: Amplify CLI

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure AWS credentials
amplify configure

# Initialize Amplify in your project
amplify init
# ? Enter a name for the project: portfolio
# ? Choose your default editor: Visual Studio Code
# ? Choose the type of app: javascript
# ? What javascript framework: react
# ? Source Directory Path: /
# ? Distribution Directory Path: .next
# ? Build Command: npm run build
# ? Start Command: npm run start

# Add hosting
amplify add hosting
# ? Select the plugin module to execute: Hosting with Amplify Console
# ? Choose a type: Continuous deployment

# Publish
amplify publish
```

## Step 3: Configure GitHub Actions

1. **Get AWS Credentials**
   - Go to AWS IAM Console
   - Create new user with programmatic access
   - Attach policies: `AmplifyFullAccess`, `S3FullAccess`
   - Save Access Key ID and Secret Access Key

2. **Add GitHub Secrets**
   - Go to your GitHub repo → Settings → Secrets
   - Add the following secrets:
     - `AWS_ACCESS_KEY_ID`
     - `AWS_SECRET_ACCESS_KEY`
     - `AMPLIFY_APP_ID` (from Amplify Console)
     - `DEPLOY_BUCKET` (create S3 bucket for deployments)

3. **Update Workflow File**
   - Edit `.github/workflows/deploy.yml`
   - Uncomment the AWS deployment section
   - Commit and push changes

## Step 4: Custom Domain (Optional)

1. **Purchase Domain**
   - Use AWS Route 53, GoDaddy, or Namecheap

2. **Configure in Amplify**
   ```bash
   # Via Console
   - Go to Amplify Console → Domain management
   - Add domain
   - Follow DNS configuration instructions

   # Via CLI
   amplify add hosting
   # Configure custom domain when prompted
   ```

3. **SSL Certificate**
   - Amplify automatically provisions SSL certificate
   - Wait for DNS propagation (~15-30 minutes)

## Step 5: Environment Variables

1. **In Amplify Console:**
   - Go to App settings → Environment variables
   - Add variables:
     ```
     NEXT_PUBLIC_GA_ID=your-google-analytics-id
     NODE_ENV=production
     ```

2. **In GitHub Actions:**
   - Add to repository secrets
   - Reference in workflow file using `${{ secrets.VAR_NAME }}`

## Monitoring & Maintenance

### View Logs
```bash
# Amplify Console logs
amplify console

# GitHub Actions logs
# Go to Actions tab in GitHub repo
```

### Update Deployment
```bash
# Make changes locally
git add .
git commit -m "Update site"
git push origin main
# Automatic deployment triggers
```

### Rollback Deployment
```bash
# In Amplify Console
# Go to your app → Select previous deployment → Redeploy

# Via Git
git revert HEAD
git push origin main
```

## Troubleshooting

### Build Failures

1. **Check Node version:**
   ```bash
   # Ensure using Node 20
   node --version
   ```

2. **Clear cache:**
   ```bash
   # Locally
   rm -rf .next node_modules
   npm ci
   npm run build
   ```

3. **Check logs:**
   - Amplify Console → Build logs
   - GitHub Actions → Workflow runs

### Common Issues

| Issue | Solution |
|-------|----------|
| Build timeout | Increase build timeout in Amplify settings |
| Memory error | Increase build compute type to Large |
| 404 on routes | Ensure `fallback: true` in Next.js config |
| Environment variables not working | Rebuild after adding variables |

## Cost Optimization

- **Free Tier Usage:**
  - 1000 build minutes/month
  - 5GB stored
  - 15GB served/month

- **Cost Saving Tips:**
  - Use GitHub Actions for testing (free)
  - Deploy only from main branch
  - Enable build caching
  - Optimize images and assets

## Security Best Practices

1. **Never commit:**
   - `.env` files with secrets
   - AWS credentials
   - API keys

2. **Use IAM roles with minimal permissions**

3. **Enable branch protection rules on GitHub**

4. **Regular dependency updates:**
   ```bash
   npm audit fix
   npm update
   ```

## Next Steps

1. Set up monitoring with AWS CloudWatch
2. Configure error tracking (Sentry)
3. Add analytics (Google Analytics, Plausible)
4. Implement A/B testing with Amplify
5. Set up email notifications for deployments

---

Need help? Check the [AWS Amplify Documentation](https://docs.amplify.aws) or open an issue in the GitHub repository.