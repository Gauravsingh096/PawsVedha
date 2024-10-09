import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <hr/>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div className="rating">
        {"★".repeat(product.rating)}
        {"☆".repeat(5 - product.rating)}
      </div>
      {/* Uncomment below to add an "Add to Cart" button */}
      {/* <button>Add to Cart</button> */}
      <img src="src/assets/images/Cart-PNG-HD-180x180.png" alt="Add to Cart" className="cart-icon" />
    </div>
  );
};

export default ProductCard;
