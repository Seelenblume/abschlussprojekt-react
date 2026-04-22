import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.css'
import './styles/globals.css'
import App from './App.tsx'
import ToastContainer from './components/Toast/ToastContainer.tsx'
import LoginProvider from './context/Login/LoginProvider.tsx'
import { ToastProvider } from './context/Toast/ToastProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <ToastContainer />
      <LoginProvider>
        <App />
      </LoginProvider>
    </ToastProvider>
  </StrictMode>,
)
