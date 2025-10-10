import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import { useContactForm } from './useContactForm'

// Mock fetch
global.fetch = vi.fn()

describe('useContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('initializes with empty form state', () => {
    const { result } = renderHook(() => useContactForm())

    expect(result.current.formState).toEqual({
      name: '',
      email: '',
      message: '',
    })
    expect(result.current.isSubmitting).toBe(false)
    expect(result.current.status.type).toBe('idle')
  })

  it('updates form state on handleChange', () => {
    const { result } = renderHook(() => useContactForm())

    act(() => {
      result.current.handleChange('name', 'John Doe')
    })

    expect(result.current.formState.name).toBe('John Doe')
  })

  it('clears field error on handleChange', () => {
    const { result } = renderHook(() => useContactForm())

    // First, set an error (this would normally come from validation)
    act(() => {
      result.current.handleChange('name', 'J') // Too short
    })

    // Then update the field
    act(() => {
      result.current.handleChange('name', 'John Doe')
    })

    expect(result.current.errors.name).toBeUndefined()
  })

  it('validates form on submit', async () => {
    const { result } = renderHook(() => useContactForm())

    act(() => {
      result.current.handleSubmit({ preventDefault: vi.fn() } as any)
    })

    await waitFor(() => {
      expect(result.current.errors).toBeDefined()
      expect(result.current.status.type).toBe('error')
    })
  })

  it('submits valid form successfully', async () => {
    ;(global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Success' }),
    })

    const { result } = renderHook(() => useContactForm())

    act(() => {
      result.current.handleChange('name', 'John Doe')
      result.current.handleChange('email', 'john@example.com')
      result.current.handleChange('message', 'This is a test message')
    })

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() } as any)
    })

    await waitFor(() => {
      expect(result.current.status.type).toBe('success')
      expect(result.current.formState).toEqual({
        name: '',
        email: '',
        message: '',
      })
    })
  })

  it('handles API errors gracefully', async () => {
    ;(global.fetch as any).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Server error' }),
    })

    const { result } = renderHook(() => useContactForm())

    act(() => {
      result.current.handleChange('name', 'John Doe')
      result.current.handleChange('email', 'john@example.com')
      result.current.handleChange('message', 'This is a test message')
    })

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: vi.fn() } as any)
    })

    await waitFor(() => {
      expect(result.current.status.type).toBe('error')
      expect(result.current.status.message).toContain('Server error')
    })
  })

  it('resets form on reset()', () => {
    const { result } = renderHook(() => useContactForm())

    act(() => {
      result.current.handleChange('name', 'John Doe')
      result.current.reset()
    })

    expect(result.current.formState).toEqual({
      name: '',
      email: '',
      message: '',
    })
    expect(result.current.status.type).toBe('idle')
  })
})
