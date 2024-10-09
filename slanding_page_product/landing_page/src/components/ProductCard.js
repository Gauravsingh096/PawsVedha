import React from 'react';
import './Product.css'; // Import the CSS file

const ProductCard = ({ name, imageSrc, about,  price }) => {
  return (
    <div className="product-card">
      <img src={imageSrc} alt={name} />
      <hr/>
      <h3>{name}</h3>
      <p className="about">{about}</p>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
