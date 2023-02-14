import React from 'react'
import { render, screen } from '@testing-library/react'
import { Login } from '../src/components/Login'
import { AuthProvider } from '../src/components/useAuth'
import { BrowserRouter } from 'react-router-dom'

/**
 * @jest-environment jsdom
 */

describe('Login', () => {
  it('renders content', () => {
    const component = render(<AuthProvider><Login img='prueba'/></AuthProvider>).getByText('Iniciar sesion')
    expect(component).toBeInTheDocument('')
  })
})
