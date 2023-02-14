/* eslint-disable no-undef */
import React from 'react'
import Login from '../src/components/Login'
import { AuthProvider } from '../src/components/useAuth'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { useNavigate } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}))

describe('Login', () => {
  it('renders content', () => {
    render(<Login img='burger-login' useNavigate={useNavigate} />, { wrapper: AuthProvider, useNavigate: () => ({}) })
    expect(screen.getByText('INICIAR SESION')).toBeInTheDocument()
  })
})
