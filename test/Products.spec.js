/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ProductContextProvider } from '../src/components/DataContext'
import Products from '../src/components/Products'

describe('Products', () => {
  it('renders content', () => {
    render(<Products productName='Hamburguesas' />, { wrapper: ProductContextProvider })
    expect(screen.getByText('Hamburguesas')).toBeInTheDocument()
  })
})
