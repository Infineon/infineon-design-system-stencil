import React from 'react'
import ReactDOM from 'react-dom/client'
import { defineCustomElements } from '@infineon/infineon-design-system-react';
import App from './App.tsx'
import './index.css'

defineCustomElements(window)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
