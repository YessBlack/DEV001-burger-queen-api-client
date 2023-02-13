import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductContextProvider } from './components/DataContext'
import { AuthProvider } from './components/useAuth'
import { OnSnapshotProvider } from './components/useOnSnapshot'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <OnSnapshotProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </OnSnapshotProvider>
    </AuthProvider>
  </BrowserRouter>

)
