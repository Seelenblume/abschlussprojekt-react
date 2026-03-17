import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.css'
import './styles/globals.css'
import App from './App.tsx'
import { ToastProvider } from './context/ToastProvider.tsx'
import ToastContainer from './components/Toast/ToastContainer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <ToastContainer />
      <App />
    </ToastProvider>
  </StrictMode>,
)
