# AWS Amplify Setup Guide

## IAM Permissions Setup

### Add Amplify CLI Permissions to IAM User

To enable CLI access for debugging and deployments, add the policy from `aws-amplify-iam-policy.json`:

**Via AWS Console:**
1. Go to [IAM Users Console](https://console.aws.amazon.com/iam/home#/users)
2. Click on user: `BrandWebsiteAccess`
3. Click **"Add permissions"** → **"Create inline policy"**
4. Click **"JSON"** tab
5. Paste contents from `docs/aws-amplify-iam-policy.json`
6. Click **"Review policy"**
7. Name it: `AmplifyPortfolioAccess`
8. Click **"Create policy"**

**Via AWS CLI:**
```bash
aws iam put-user-policy \
  --user-name BrandWebsiteAccess \
  --policy-name AmplifyPortfolioAccess \
  --policy-document file://docs/aws-amplify-iam-policy.json
```

### Verify Permissions
```bash
# Should now work without AccessDenied errors (may take 2-5 minutes to propagate)
aws amplify get-app --app-id d2acyy7momhrpf --region us-east-1
```

## Environment Variables Setup

### Required Environment Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_***` | API key from [resend.com/api-keys](https://resend.com/api-keys) |
| `NEXT_PUBLIC_GA_ID` | `G-YH0MVCWQMD` | Google Analytics ID (optional) |

### Add Environment Variables in Amplify

**Via AWS Console:**
1. Go to [Amplify Console](https://console.aws.amazon.com/amplify/home?region=us-west-2#/d2acyy7momhrpf)
2. Click **"App settings"** → **"Environment variables"**
3. Click **"Manage variables"**
4. Add each variable:
   - Key: `RESEND_API_KEY`
   - Value: Your Resend API key
5. **Important:** Ensure it applies to your branch (main)
6. Click **"Save"**
7. **Redeploy** for changes to take effect

**Via AWS CLI:**
```bash
# Update environment variables
aws amplify update-app \
  --app-id d2acyy7momhrpf \
  --region us-east-1 \
  --environment-variables RESEND_API_KEY=your_key_here,NEXT_PUBLIC_GA_ID=G-YH0MVCWQMD

# Trigger redeploy
aws amplify start-job \
  --app-id d2acyy7momhrpf \
  --branch-name main \
  --job-type RELEASE \
  --region us-east-1
```

## Viewing Production Logs

### Via AWS Console (Easiest)
1. Go to [Amplify Console](https://console.aws.amazon.com/amplify/home?region=us-west-2#/d2acyy7momhrpf)
2. Click on your app
3. Select deployment
4. **Build logs:** Click "View build logs" - shows build-time errors
5. **Runtime logs:** Go to "Monitoring" tab - shows API route errors

### Via AWS CLI

Once IAM permissions are added:

```bash
# List recent deployments
aws amplify list-jobs \
  --app-id d2acyy7momhrpf \
  --branch-name main \
  --region us-east-1 \
  --max-results 5

# Get specific job details
aws amplify get-job \
  --app-id d2acyy7momhrpf \
  --branch-name main \
  --job-id <job-id> \
  --region us-east-1
```

### Via CloudWatch Logs

```bash
# List log groups
aws logs describe-log-groups \
  --log-group-name-prefix /aws/amplify/d2acyy7momhrpf \
  --region us-east-1

# Tail logs (if log group exists)
aws logs tail /aws/amplify/d2acyy7momhrpf/main \
  --follow \
  --region us-east-1
```

**Note:** Amplify may not create CloudWatch log groups by default. Use the Console method above for most reliable log access.

## Debugging Contact Form Issues

### Check for Missing API Key

Look for these log messages in Amplify Console → Monitoring:

```
[Contact API] FATAL: RESEND_API_KEY environment variable is not set
[Contact API] Email send attempted but RESEND_API_KEY is not configured
```

### Check for Email Send Failures

```
[Contact API] Resend API Error: { ... }
```

### Expected Success Log

```
[Contact API] Email sent successfully: { result: '...', to: '...', from: '...' }
```

## Deployment Checklist

Before deploying:
- [ ] Environment variables are set in Amplify Console
- [ ] `RESEND_API_KEY` is valid and not expired
- [ ] Build succeeds locally: `npm run build`
- [ ] TypeScript checks pass: `npm run typecheck`
- [ ] Tests pass: `npm run test`

After deploying:
- [ ] Check build logs for errors
- [ ] Test contact form on production site
- [ ] Check monitoring logs for runtime errors
- [ ] Verify email delivery

## Troubleshooting

### Contact Form Returns 503 Error

**Cause:** `RESEND_API_KEY` not set or not accessible at runtime

**Fix:**
1. Verify environment variable exists in Amplify Console
2. Ensure it's set for the correct branch
3. Redeploy the application
4. Check runtime logs for confirmation

### Contact Form Returns 500 Error

**Cause:** Resend API error (invalid key, rate limit, etc.)

**Fix:**
1. Check runtime logs for specific error
2. Verify API key is valid in [Resend Dashboard](https://resend.com/api-keys)
3. Check Resend service status
4. Verify email `from` address is using Resend verified sender

### Build Fails

**Cause:** TypeScript errors, missing dependencies, etc.

**Fix:**
1. Check build logs in Amplify Console
2. Run `npm run build` locally to reproduce
3. Fix errors and push changes
4. Amplify will auto-redeploy on push

## App Details

- **App ID:** `d2acyy7momhrpf`
- **Domain:** `d2acyy7momhrpf.amplifyapp.com`
- **Region:** `us-east-1`
- **Branch:** `main`
- **Framework:** Next.js 14.2.0
