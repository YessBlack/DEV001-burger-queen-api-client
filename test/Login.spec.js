/* eslint-disable no-undef */
import React from 'react'
import Login from '../src/components/Login'
import { AuthProvider } from '../src/components/useAuth'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import { useNavigate } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}))

describe('Login', () => {
  it('renders content', () => {
    render(<Login img='public/images/burger-login.jfif' useNavigate={useNavigate} />, { wrapper: AuthProvider, useNavigate: () => ({}) })
    expect(screen.getByText('INICIAR SESION')).toBeInTheDocument()
  })
  it('search user in database', async () => {
    render(<Login path='public/images/burger-login.jfif' useNavigate={useNavigate} />, { wrapper: AuthProvider })
    const input = screen.getByPlaceholderText('Usuario')
    const button = screen.getByText('Ingresar')
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    userEvent.type(input, 'mesero@mesero.com')
    userEvent.click(button)
    await expect(useNavigate).toHaveBeenCalledWith('/waiter')
  })
})