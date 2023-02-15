/* eslint-disable no-undef */
import React from 'react'
import { Header } from '../src/components/Header'
import { AuthProvider } from '../src/components/useAuth'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'


describe('Header', () => {
  it('renders content', () => {
    render(<Header />, { wrapper: AuthProvider })
    expect(screen.getByText('BURGER QUEEN')).toBeInTheDocument()
  })
})
