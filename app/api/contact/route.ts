import { NextRequest, NextResponse } from 'next/server'
import { ContactFormSchema } from '@/hooks/useContactForm'
import { z } from 'zod'

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

    // TODO: Send email or save to database
    // For now, just log (in production, integrate with email service)
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', validated)
    }

    // In production, you would do something like:
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `Contact from ${validated.name}`,
    //   text: validated.message,
    //   replyTo: validated.email,
    // })

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
