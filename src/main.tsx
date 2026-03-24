import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.css'
import './styles/globals.css'
import App from './App.tsx'
import ToastContainer from './components/Toast/ToastContainer.tsx'
import { ToastProvider } from './context/Toast/ToastProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ToastProvider>
      <ToastContainer />
      <App />


    </ToastProvider>
  </StrictMode>,
)
