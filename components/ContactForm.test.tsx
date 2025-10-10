import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'
import type { ContactFormData } from '@/hooks/useContactForm'

describe('ContactForm', () => {
  const mockFormState: ContactFormData = {
    name: '',
    email: '',
    message: '',
  }

  const mockOnChange = vi.fn()
  const mockOnSubmit = vi.fn((e) => e.preventDefault())

  it('renders all form fields', () => {
    render(
      <ContactForm
        formState={mockFormState}
        errors={{}}
        isSubmitting={false}
        onSubmit={mockOnSubmit}
        onChange={mockOnChange}
      />
    )

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('displays error messages', () => {
    const errors = {
      name: 'Name is required',
      email: 'Invalid email',
    }

    render(
      <ContactForm
        formState={mockFormState}
        errors={errors}
        isSubmitting={false}
        onSubmit={mockOnSubmit}
        onChange={mockOnChange}
      />
    )

    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('calls onChange when inputs change', () => {
    render(
      <ContactForm
        formState={mockFormState}
        errors={{}}
        isSubmitting={false}
        onSubmit={mockOnSubmit}
        onChange={mockOnChange}
      />
    )

    const nameInput = screen.getByLabelText('Name')
    fireEvent.change(nameInput, { target: { value: 'John' } })

    expect(mockOnChange).toHaveBeenCalledWith('name', 'John')
  })

  it('disables form when submitting', () => {
    render(
      <ContactForm
        formState={mockFormState}
        errors={{}}
        isSubmitting={true}
        onSubmit={mockOnSubmit}
        onChange={mockOnChange}
      />
    )

    const nameInput = screen.getByLabelText('Name') as HTMLInputElement
    const submitButton = screen.getByRole('button')

    expect(nameInput.disabled).toBe(true)
    expect(submitButton).toBeDisabled()
    expect(submitButton).toHaveTextContent('Sending...')
  })

  it('calls onSubmit when form is submitted', () => {
    render(
      <ContactForm
        formState={mockFormState}
        errors={{}}
        isSubmitting={false}
        onSubmit={mockOnSubmit}
        onChange={mockOnChange}
      />
    )

    const form = screen.getByRole('button').closest('form')
    fireEvent.submit(form!)

    expect(mockOnSubmit).toHaveBeenCalled()
  })

  it('has proper ARIA attributes for errors', () => {
    const errors = { name: 'Name is required' }

    render(
      <ContactForm
        formState={mockFormState}
        errors={errors}
        isSubmitting={false}
        onSubmit={mockOnSubmit}
        onChange={mockOnChange}
      />
    )

    const nameInput = screen.getByLabelText('Name')
    expect(nameInput).toHaveAttribute('aria-invalid', 'true')
    expect(nameInput).toHaveAttribute('aria-describedby', 'name-error')
  })
})
