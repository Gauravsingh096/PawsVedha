import React from 'react'
import PaymentPage from './assets/PaymentPage';
import Header from './assets/Header';
import Footer from './assets/Footer';
import VerifyPayment from './assets/VerifyPayment';

function App() {
  return (
    <div>
        <Header/>
        <React.StrictMode>
          <PaymentPage />
        </React.StrictMode> 
      {/* <VerifyPayment/> */}
      



    </div>
  );
}

export default App