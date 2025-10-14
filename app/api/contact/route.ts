import { NextRequest, NextResponse } from 'next/server'
import { ContactFormSchema } from '@/hooks/useContactForm'
import { z } from 'zod'
import { Resend } from 'resend'

// Validate required environment variables at startup
if (!process.env.RESEND_API_KEY) {
  console.error('[Contact API] FATAL: RESEND_API_KEY environment variable is not set')
  console.error('[Contact API] Email functionality will not work until this is configured')
}

const resend = new Resend(process.env.RESEND_API_KEY || '')

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

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('[Contact API] Email send attempted but RESEND_API_KEY is not configured')
      console.error('[Contact API] Submission details:', {
        name: validated.name,
        email: validated.email,
        messageLength: validated.message.length,
        timestamp: new Date().toISOString(),
      })

      // Return error to client - fail loudly
      return NextResponse.json(
        {
          message: 'Service temporarily unavailable. Please try again later or contact directly via email.',
        },
        { status: 503 }
      )
    }

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

      console.log('[Contact API] Email sent successfully:', {
        result: result.data?.id || 'unknown',
        to: '12kernsmatthew@gmail.com',
        from: validated.email,
        timestamp: new Date().toISOString(),
      })
    } catch (emailError: any) {
      // Log the actual error for debugging
      console.error('[Contact API] Resend API Error:', {
        message: emailError?.message,
        statusCode: emailError?.statusCode,
        name: emailError?.name,
        stack: emailError?.stack,
        timestamp: new Date().toISOString(),
      })

      // Return error - fail loudly so we know something is wrong
      return NextResponse.json(
        {
          message: 'Failed to send message. Please try again or contact directly via email.',
        },
        { status: 500 }
      )
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
    console.error('[Contact API] Unexpected error:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    })

    // Always return JSON, never throw uncaught errors
    return NextResponse.json(
      { message: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
