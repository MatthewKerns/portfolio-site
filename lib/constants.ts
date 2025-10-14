/**
 * Application-wide constants and configuration values.
 * Centralizes magic numbers and strings for maintainability.
 */

export const APP_CONFIG = {
  /** Maximum number of featured projects to display on homepage */
  MAX_FEATURED_PROJECTS: 3,

  /** Maximum number of tech badges to display before showing "+N more" */
  MAX_TECH_BADGES_DISPLAY: 3,

  /** Animation timing constants */
  ANIMATION_DELAYS: {
    /** Delay between staggered child animations */
    STAGGER: 0.1,
    /** Default animation duration */
    DEFAULT: 0.5,
    /** Hover animation lift amount in pixels */
    HOVER_LIFT: -5,
  },

  /** Form validation limits */
  FORM_LIMITS: {
    NAME_MIN: 1,
    NAME_MAX: 100,
    MESSAGE_MIN: 10,
    MESSAGE_MAX: 1000,
  },
} as const

export const CONTACT_INFO = {
  EMAIL: process.env.NEXT_PUBLIC_EMAIL || 'email@example.com',
  GITHUB: process.env.NEXT_PUBLIC_GITHUB || 'https://github.com/username',
  LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN || 'https://linkedin.com/in/username',
} as const

export const ROUTES = {
  HOME: '/',
  PROJECTS: '/projects',
  PHILOSOPHY: '/philosophy',
  ABOUT: '/about',
  NOW: '/now',
  CONTACT: '/contact',
} as const

export const EXTERNAL_LINKS = {
  CLAUDE_CODE: 'https://claude.com/claude-code',
} as const
