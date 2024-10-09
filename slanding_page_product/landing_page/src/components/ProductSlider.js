import React, { useState } from 'react';
import './BottomCardProduct.css';

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  const sliderWrapperStyle = {
    transform: `translateX(-${currentIndex * (100 / products.length)}%)`
  };

  return (
    <div className="product-slider-container">
      <h2>Featured Products</h2>
      <div className="product-slider">
        <div className="slider-wrapper" style={sliderWrapperStyle}>
          {products.map((product, index) => (
            <div key={index} className="slide">
              <img src={product.imageSrc} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="about">{product.about}</p>
              <p>{`$${product.price}`}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
        <button className="slider-btn prev" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="slider-btn next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
