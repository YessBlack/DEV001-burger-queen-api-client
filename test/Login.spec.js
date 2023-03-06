/* eslint-disable no-undef */
import React from 'react'
import Login from '../src/components/Login'
import { AuthProvider } from '../src/components/useAuth'

import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { server } from '../src/mocks/server'
import { useNavigate } from 'react-router-dom'
import { act } from 'react-dom/test-utils'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(() => {
    return {
      push: jest.fn((path) => path)
    }
  })
}))
beforeEach(() => {
  server.listen()

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

  it('Login with user', async () => {
    const input = screen.getByPlaceholderText('Usuario')
    const button = screen.getByText('Ingresar')
    userEvent.type(input, '')
    act(() => {
      fireEvent.click(button)
    })
    await waitFor(() => {
      expect(prueba.getByText('El email es obligatorio')).toBeInTheDocument()
    })
  })
  it('Form can be submited & input field is modifiable', () => {
    const mockedFn = jest.fn(() => {
      console.log('onSubmit')
    })
    const input = screen.getByPlaceholderText('Usuario')
    input.value = 'mesero@mesero.com'
    const button = screen.getByText('Ingresar')
    fireEvent.submit(button)
    expect(mockedFn).toHaveBeenCalledTimes(1)


  it('onSubmit', async () => {
    const input = screen.getByPlaceholderText('Usuario')
    input.value = 'mesero@mesero.com'
    const button = screen.getByText('Ingresar')
    userEvent.click(button)

  })
})
