/* eslint-disable no-undef */
import React from 'react'
import Login from '../src/components/Login'
import { AuthProvider } from '../src/components/useAuth'
import { render, screen, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { server } from '../src/mocks/server'
import { useNavigate } from 'react-router'
import * as router from 'react-router'

import fetch from 'node-fetch'

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: jest.fn(() => {
//     return {
//       push: jest.fn((path) => path)
//     }
//   })
// }))

/*

* Queremos testear la redireccion de la pagina despues de hacer login
  cuando el usuario tenga el rol de mesero

*/
jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    handleSubmit: () => jest.fn(),
    getValues: () => jest.fn()
  })
}))

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

beforeEach(() => {
  render(<Login img='public/images/burger-login.jfif' useNavigate={useNavigate} />, { wrapper: AuthProvider })
  server.listen()
})

describe('Login', () => {
  it('renders content', () => {
    expect(screen.getByText('INICIAR SESION')).toBeInTheDocument()
  })

  it('search user in database', async () => {
    const input = screen.getByPlaceholderText('Usuario')
    const button = screen.getByText('Ingresar')
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('Fetch data from server', async () => {
    const input = screen.getByPlaceholderText('Usuario')
    const button = screen.getByText('Ingresar')
    userEvent.type(input, 'mesero@mesero.com')
    await userEvent.click(button)
    const response = await fetch('http://localhost:3004/login')
    const data = await response.json()
    expect(data.user.roles.waiter).toBe(true)
  })

  it('Login with user', async () => {
    const input = screen.getByPlaceholderText('Usuario')
    const form = screen.getByTestId('form-login')
    userEvent.type(input, 'mesero@mesero.com')
    fireEvent.submit(form)
    console.log(form)

    // expect(navigate('/mesero')).toHaveBeenCalledWith('/mesero')
  })
})
