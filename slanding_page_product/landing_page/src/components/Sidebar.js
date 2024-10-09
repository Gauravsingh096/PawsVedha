import React, { useState } from 'react';

const Sidebar = ({ categories, setSelectedCategory, priceRange, setPriceRange }) => {
  const [selected, setSelected] = useState('All');

  const handleClick = (category) => {
    setSelected(category);
    setSelectedCategory(category);
  };
  

//   price range
//   const handlePriceChange = (event) => {
//     const value = event.target.value;
//     setPriceRange(value); // Propagate price range change to parent component
//   };


  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className={selected === category ? 'active' : ''} onClick={() => handleClick(category)}>
            {category}
          </li>
        ))}
      </ul>
      <div className="price-range">
        <h3>Price Range</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange}
          onChange={setPriceRange}
          step="1"
        />
        <p>Up to ${priceRange}</p>
      </div>
    </div>
  );
};



export default Sidebar;
