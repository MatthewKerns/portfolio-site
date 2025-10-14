import { NextRequest, NextResponse } from 'next/server'
import { ContactFormSchema } from '@/hooks/useContactForm'
import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Rate limiting store (in-memory for simplicity).
 * In production, use Redis or similar persistent store.
 */
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

const RATE_LIMIT = {
  MAX_REQUESTS: 5,
  WINDOW_MS: 60 * 60 * 1000, // 1 hour
}

/**
 * Simple rate limiting implementation.
 * Tracks requests by IP address.
 *
 * @param identifier - Unique identifier (IP address)
 * @returns Whether request is allowed
 */
function checkRateLimit(identifier: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitStore.get(identifier)

  if (!record || now > record.resetAt) {
    // First request or window expired
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT.WINDOW_MS,
    })
    return { allowed: true, remaining: RATE_LIMIT.MAX_REQUESTS - 1 }
  }

  if (record.count >= RATE_LIMIT.MAX_REQUESTS) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: RATE_LIMIT.MAX_REQUESTS - record.count }
}

/**
 * POST /api/contact
 * Handles contact form submissions with validation and rate limiting.
 *
 * Security measures:
 * - Input validation with Zod
 * - Rate limiting (5 requests per hour per IP)
 * - Sanitized error messages
 */
export async function POST(request: NextRequest) {
  try {
    // Get client identifier (IP address)
    const identifier = request.headers.get('x-forwarded-for') || request.ip || 'unknown'

    // Check rate limit
    const { allowed, remaining } = checkRateLimit(identifier)

    if (!allowed) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': String(RATE_LIMIT.MAX_REQUESTS),
            'X-RateLimit-Remaining': '0',
          },
        }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validated = ContactFormSchema.parse(body)

    // Send email using Resend
    try {
      const result = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>', // Resend verified sender
        to: '12kernsmatthew@gmail.com',
        replyTo: validated.email,
        subject: `Portfolio Contact: ${validated.name}`,
        text: `
Name: ${validated.name}
Email: ${validated.email}

Message:
${validated.message}
        `.trim(),
        html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${validated.name}</p>
<p><strong>Email:</strong> ${validated.email}</p>
<h3>Message:</h3>
<p>${validated.message.replace(/\n/g, '<br>')}</p>
        `.trim(),
      })

      console.log('Email sent successfully:', result)
    } catch (emailError) {
      console.error('Failed to send email:', emailError)
      // Still return success to user to prevent information disclosure
      // In production, you might want to save to database as backup
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': String(RATE_LIMIT.MAX_REQUESTS),
          'X-RateLimit-Remaining': String(remaining),
        },
      }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: 'Invalid input',
          errors: error.issues,
        },
        { status: 400 }
      )
    }

    // Log error but don't expose details to client
    console.error('Contact form error:', error)

    return NextResponse.json(
      { message: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
