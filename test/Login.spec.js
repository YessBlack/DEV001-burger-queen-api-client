/* eslint-disable no-undef */
import React from 'react'
import Login from '../src/components/Login'
import { AuthProvider } from '../src/components/useAuth'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { server } from '../src/mocks/server'
import { useNavigate } from 'react-router'
import * as router from 'react-router'

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

describe('Login', () => {
  let prueba
  beforeEach(() => {
    prueba = render(<Login img='public/images/burger-login.jfif' useNavigate={useNavigate} />, { wrapper: AuthProvider })
  })

  it('renders content', () => {
    expect(prueba.getByText('INICIAR SESION')).toBeInTheDocument()
  })

  it('search user in database', async () => {
    const input = screen.getByPlaceholderText('Usuario')
    const button = screen.getByText('Ingresar')
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('onSubmit', async () => {
    const input = screen.getByPlaceholderText('Usuario')
    input.value = 'mesero@mesero.com'
    const button = screen.getByText('Ingresar')
    userEvent.click(button)
  })
})
