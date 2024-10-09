import React from 'react';
import './FeaturedPets.css';

function FeaturedPets() {
  return (
    <section className="featured-pets">
      <div className="container">
        <h2>Featured Pets!</h2>
        <div className="pet-category">
          <h3>Dogs</h3>
          <img src={`${process.env.PUBLIC_URL}/images/dogg.png`} alt="Dogs" />
          <p>Your Purrfect Buddies! Dogs are the ultimate companions...</p>
          <p className="quote">"A dog is the only thing on earth that loves you more than he loves himself."</p>
          <a href="#" className="shop-now">Shop Now!</a>
        </div>
        <div className="pet-category">
          <h3>Cats</h3>
          <img src={`${process.env.PUBLIC_URL}/images/catt.png`} alt="Cats" />
          <p>Your cute furry friends! Cats excel as pets for many reasons...</p>
          <p className="quote">"Time spent with cats is never wasted."</p>
          <a href="#" className="shop-now">Shop Now!</a>
        </div>
        <div className="pet-category">
          <h3>Birds</h3>
          <div className="bird-images-container">
            <img src={`${process.env.PUBLIC_URL}/images/parrots.png`} alt="Birds" className="bird-image" />
            {/* <img src={`${process.env.PUBLIC_URL}/images/kingfisher.png`} alt="Birds" className="bird-image" /> */}
          </div>
          <p>Feathers weave melodies! Birds make perfect pets for many reasons...</p>
          <p className="quote">"Birds are indicators of the environment. If they are in trouble, we know we’ll soon be in trouble."</p>
          <a href="#" className="shop-now">Shop Now!</a>
        </div>
        <div className="pet-category">
          <h3>Rabbits & Rodents</h3>
          <img src={`${process.env.PUBLIC_URL}/images/image (2).png`} alt="Rabbits and Rodents" />
          <p>Little Munchkins! Rabbits and rodents are perfect pets for their gentle nature...</p>
          <p className="quote">"Some of the smallest things take up the most room in your heart."</p>
          <a href="#" className="shop-now">Shop Now!</a>
        </div>
        <div className="pet-category">
          <h3>Fishes</h3>
          <img src={`${process.env.PUBLIC_URL}/images/image (7).png`} alt="Fishes" />
          <p>Where fins flutter, hearts find peace! Fishes add a unique charm to any home aquarium...</p>
          <p className="quote">"A fish tank is just interactive television for cats."</p>
          <a href="#" className="shop-now">Shop Now!</a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPets;
