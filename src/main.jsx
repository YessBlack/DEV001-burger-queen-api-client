import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductContextProvider } from './components/DataContext'
import { AuthProvider } from './context/auth'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
