import React from 'react'
import ReactDOM from 'react-dom/client'
import { AgeProvider } from './Context/AgeContext'
import App from './Components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AgeProvider>
      <App />
    </AgeProvider>
  </React.StrictMode>
)
