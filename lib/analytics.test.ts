import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

describe('analytics', () => {
  const originalEnv = process.env.NEXT_PUBLIC_GA_ID
  let gtagMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    // Set GA tracking ID for tests
    process.env.NEXT_PUBLIC_GA_ID = 'GA_TEST_ID'

    // Create mock gtag function
    gtagMock = vi.fn()

    // Properly stub global window with gtag
    vi.stubGlobal('window', {
      gtag: gtagMock,
    })
  })

  afterEach(() => {
    process.env.NEXT_PUBLIC_GA_ID = originalEnv
    vi.unstubAllGlobals()
  })

  describe('pageview', () => {
    it('calls gtag with correct parameters', async () => {
      // Dynamically import after window is stubbed
      const { pageview } = await import('./analytics')

      const url = new URL('https://example.com/about')
      pageview(url)

      expect(gtagMock).toHaveBeenCalledWith(
        'config',
        'GA_TEST_ID',
        { page_path: '/about' }
      )
    })

    it('handles errors gracefully', async () => {
      gtagMock.mockImplementation(() => {
        throw new Error('Analytics error')
      })

      const { pageview } = await import('./analytics')

      // Should not throw
      expect(() => {
        pageview(new URL('https://example.com/test'))
      }).not.toThrow()
    })

    it('does nothing when GA_TRACKING_ID is not set', async () => {
      delete process.env.NEXT_PUBLIC_GA_ID

      // Reset module cache to pick up new env variable
      vi.resetModules()

      const { pageview } = await import('./analytics')

      pageview(new URL('https://example.com/test'))

      expect(gtagMock).not.toHaveBeenCalled()
    })

    it('does nothing in server environment', async () => {
      vi.unstubAllGlobals()

      const { pageview } = await import('./analytics')

      // Should not throw
      expect(() => {
        pageview(new URL('https://example.com/test'))
      }).not.toThrow()
    })
  })

  describe('event', () => {
    it('calls gtag with event parameters', async () => {
      vi.resetModules()
      vi.stubGlobal('window', {
        gtag: gtagMock,
      })

      const { event } = await import('./analytics')

      event({
        action: 'click',
        category: 'CTA',
        label: 'View Projects',
        value: 1,
      })

      expect(gtagMock).toHaveBeenCalledWith(
        'event',
        'click',
        {
          event_category: 'CTA',
          event_label: 'View Projects',
          value: 1,
        }
      )
    })

    it('works without optional parameters', async () => {
      vi.resetModules()
      vi.stubGlobal('window', {
        gtag: gtagMock,
      })

      const { event } = await import('./analytics')

      event({
        action: 'submit',
        category: 'Form',
      })

      expect(gtagMock).toHaveBeenCalledWith(
        'event',
        'submit',
        {
          event_category: 'Form',
          event_label: undefined,
          value: undefined,
        }
      )
    })

    it('handles errors gracefully', async () => {
      gtagMock.mockImplementation(() => {
        throw new Error('Analytics error')
      })

      const { event } = await import('./analytics')

      expect(() => {
        event({ action: 'test', category: 'test' })
      }).not.toThrow()
    })

    it('does nothing in server environment', async () => {
      vi.unstubAllGlobals()

      const { event } = await import('./analytics')

      expect(() => {
        event({ action: 'test', category: 'test' })
      }).not.toThrow()
    })
  })
})
