import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from '../src/components/Login'
import { AuthProvider } from '../src/components/useAuth'
import { BrowserRouter } from 'react-router-dom'
import App from '../src/App'

/**
 * @jest-environment jsdom
 */

describe('Login', () => {
  it('renders content', () => {
    const component = render(<App/>)
    expect(getByText('INICIAR SESION!')).toBeInTheDocument()
  })
})
