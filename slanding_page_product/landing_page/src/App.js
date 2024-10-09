import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import FeaturedPets from './components/FeaturedPets';
import Footer from './components/Footer';
import './App.css';
import LoginPage from './components/LoginPage'
// import LoginPage from './components/LoginPage';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Fish from './components/fish';
import Rabbit from './components/Rabbit';
import Promotion from './components/Promotion';
import Birds from './components/Birds'; 
import SignupPage from './components/SignUpPage';
import App1 from './components/ProductList';
// import ProductList from './components/ProductList';
import ProductList from './components/ProductList';




function App() {
  return (
    <div className="App">
         {/* <Header /> */}
         {/* <Main/> */}
         {/* <ProductList/> */}
         {/* <ProductList/> */}
        
       {/*<Main />
       <Birds/>
       <Cats/>
       <Dogs/>
       <Promotion/>
       <Rabbit/>
       <Fish/>*/}
       {/* <Footer />    */}
      <LoginPage/>
      {/* <SignupPage/> */}
      
    </div>
  );
}

export default App;
