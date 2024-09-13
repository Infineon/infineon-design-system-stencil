import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { defineCustomElements } from '@infineon/infineon-design-system-react';
import App from './App.jsx'
import './index.css'

defineCustomElements();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
