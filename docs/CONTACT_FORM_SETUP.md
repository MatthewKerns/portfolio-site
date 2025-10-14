# Contact Form Setup Guide

This guide explains how to set up the contact form email functionality using Resend.

## Prerequisites

- A Resend account (free tier available)
- Access to AWS Amplify environment variables

## Setup Steps

### 1. Get Resend API Key

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Navigate to [API Keys](https://resend.com/api-keys)
3. Click "Create API Key"
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the API key (starts with `re_`)

### 2. Configure Environment Variables

#### Local Development

Add to `.env.local`:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

#### Production (AWS Amplify)

1. Go to AWS Amplify Console
2. Select your app: `portfolio-site`
3. Navigate to "Environment variables" in the left sidebar
4. Click "Manage variables"
5. Add new variable:
   - **Variable name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
6. Click "Save"
7. Redeploy the application

### 3. Verify Email Configuration

The contact form will send emails to: `12kernsmatthew@gmail.com`

To change the recipient email, update:
- `app/api/contact/route.ts` line 85: `to: '12kernsmatthew@gmail.com'`

### 4. Test the Contact Form

1. Visit `/contact` on your deployed site
2. Fill out the form with test data
3. Submit the form
4. Check your email (12kernsmatthew@gmail.com) for the contact message

## Resend Free Tier Limits

- 100 emails/day
- 3,000 emails/month
- Perfect for portfolio contact forms

## Email Format

Emails include:
- **From**: Portfolio Contact <onboarding@resend.dev>
- **Reply-To**: Visitor's email address
- **Subject**: Portfolio Contact: [Visitor Name]
- **Body**: Formatted message with name, email, and message content

## Troubleshooting

### "500 Internal Server Error"

- Check that `RESEND_API_KEY` environment variable is set in AWS Amplify
- Verify the API key is valid and starts with `re_`
- Check Amplify build logs for specific error messages

### Emails not arriving

- Check spam/junk folder
- Verify Resend account is active and not over quota
- Check Resend dashboard logs: [resend.com/emails](https://resend.com/emails)

### Rate Limiting

The contact form has built-in rate limiting:
- Max 5 submissions per hour per IP address
- Prevents spam and abuse

## Security Features

- Input validation with Zod schema
- Rate limiting per IP address
- Sanitized error messages
- No sensitive data exposed to client
- HTTPS only in production

## Alternative Email Services

If you prefer a different email service, you can replace Resend with:
- SendGrid
- AWS SES
- Mailgun
- Postmark

Update `app/api/contact/route.ts` with the appropriate SDK.
