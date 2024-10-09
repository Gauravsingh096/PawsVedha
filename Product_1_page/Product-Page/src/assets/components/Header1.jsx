

// import React from 'react';

// const Header1 = () => {
//   return (
//     <header className="header1-container">
//       <h1>Let's Shop</h1>
//       <p>Unleash joy with every purchase</p>
      
//     </header>
//   );
// };

// export default Header1;
// '../images/offer2.png

import React from 'react';
import catImage from '../images/catt.jpg';
import dogImage from '../images/dog.jpg';
import rabbitImage from '../images/rabbit.jpg';
import fishImage from '../images/fish.jpg';
import pawsImage from '../images/paws.jpg';
import birdImage from '../images/bird.jpg';
import pom from '../images/pom.jpg'

const Header1 = () => {
  return (
    <header className="header1-container">
      <h1>Let's Shop</h1>
      <p>Unleash joy with every purchase</p>
      {/* <div className="category-images">
        <img src={pom} alt="Cat" className="cat-image" />
        <img src={dogImage} alt="Dog" className="dog-image" />
        <img src={rabbitImage} alt="Rabbit" className="rabbit-image" />
        <img src={fishImage} alt="Fish" className="fish-image" />
        <img src={pawsImage} alt="Paws" className="paws-image" />
        <img src={birdImage} alt="Bird" className="bird-image" />
      </div> */}
    </header>
  );
};

export default Header1;
