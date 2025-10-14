/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Environment variables for AWS Amplify serverless functions
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
}

export default nextConfig