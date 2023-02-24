/* eslint-disable no-undef */
import React from 'react'
import Login from '../src/components/Login'
import { AuthProvider } from '../src/components/useAuth'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { server } from '../src/mocks/server'

import { useNavigate } from 'react-router-dom'

import fetch from 'node-fetch'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

beforeAll(() => {
  server.listen()
})
describe('Login', () => {
  it('renders content', () => {

    render(<Login img='public/images/burger-login.jfif' useNavigate={useNavigate} />, { wrapper: AuthProvider, useNavigate: () => ({}) })
    expect(screen.getByText('INICIAR SESION')).toBeInTheDocument()

  it('search user in database', async () => {
    render(<Login path='public/images/burger-login.jfif' useNavigate={useNavigate} />, { wrapper: AuthProvider })
    const button = screen.getByText('Ingresar')
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    userEvent.type(input, 'mesero@mesero.com')
    userEvent.click(button)

    await expect(useNavigate).toHaveBeenCalledWith('/waiter')
  })
})

    useNavigate.mockImplementationOnce(async() => jest.fn('/mesero'))
    const response = await fetch('http://localhost:3004/login')
    const data = await response.json()
    if (data.user.roles.waiter)
})