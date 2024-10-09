import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Header1 from './assets/components/Header1';
import Home from './assets/components/Home';
import Footer from './assets/components/Footer';
import products from './assets/components/products';
import HorizontalCardSlider from './assets/components/HorizontalCardSlider';
import Header from './assets/components/Header';

function App() {
  return (
    <>

    <div>
      
     <Header/>
     <Header1/>
      <Home/>
      <HorizontalCardSlider products={products} />
    
      <Footer/>
</div>
  
    </>
  );
}

export default App;
