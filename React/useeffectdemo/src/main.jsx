import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LoginProvider } from './components/logincontext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <LoginProvider>
    <App />
  </LoginProvider>
  // </StrictMode>,
)
