/* eslint-disable no-undef */
import React from 'react'

import Products from '../src/components/Products'
import { ProductContextProvider } from '../src/components/DataContext'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Products', () => {
  it('renders content', () => {
    render(<Products productName='Hamburgesa' />, { wrapper: ProductContextProvider })
    expect(screen.getByText('Hamburgesa')).toBeInTheDocument()

  })
})
