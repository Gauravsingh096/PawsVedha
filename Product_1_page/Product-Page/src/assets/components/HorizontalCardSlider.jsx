import React from 'react';
import NewProductCard from './NewProductCard';
import './HorizontalCardSlider.css'

const HorizontalCardSlider = ({ products }) => {
  return (
    <div className="horizontal-slider">
      <div className="slider-container">
        {products.map((product) => (
          <NewProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalCardSlider;
