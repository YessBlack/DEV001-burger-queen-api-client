import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ProductContextProvider } from './components/Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </BrowserRouter>
)
