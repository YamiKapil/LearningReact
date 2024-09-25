import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  // strict mode executes the applicaiton twice..
  // remove this in live deployment
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
