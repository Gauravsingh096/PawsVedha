import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PaymentPage from './assets/PaymentPage.jsx';

import './index.css'
// ReactDOM.render(<PaymentPage />, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
