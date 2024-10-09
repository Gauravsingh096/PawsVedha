import React from 'react';
import './HorizontalCardSlider.css'

const NewProductCard = ({ product }) => {
  return (
    <div className="new-product-card">
      <img src={product.image} alt={product.name} />
      <hr/>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div className="rating">
        {"★".repeat(product.rating)}
        {"☆".repeat(5 - product.rating)}
      </div>
       <img src="src/assets/images/Cart-PNG-HD-180x180.png" alt="Add to Cart" className="cart-icon" />
      {/* <button>Add to Cart</button> */}
    </div>
  );
};

export default NewProductCard;
