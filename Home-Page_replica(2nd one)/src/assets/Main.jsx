// Main.jsx
import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main>
      <section className="header2">
        <div className="left">
          <img src={`${process.env.PUBLIC_URL}/public/images/dog.png`} className="dog" alt="Dog" />
          <img src={`${process.env.PUBLIC_URL}/public/images/birdd.png`} className="parrot" alt="Parrot" />
        </div>
        <div className="text">
          <p>Welcome,</p>
          <p>Pet Parents to PawsVedas</p>
        </div>
        <div className="right">
          <img src={`${process.env.PUBLIC_URL}/public/images/rabbit.png`} className="rabbit" alt="Rabbit" />
          <img src={`${process.env.PUBLIC_URL}/public/images/cat.png`} className="cat" alt="Cat" />
        </div>
      </section>
      <section className="header3">
        <p className='paraa-1'>FEATURED PETS!</p>
      </section>
    </main>
  );
};

export default Main;
