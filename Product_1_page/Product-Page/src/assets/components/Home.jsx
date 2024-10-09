import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import sale_pic from '../images/offer2.png'

const products = [
  { id: 1, name: "Dog House", description: "A comfortable house for your dog.", price: 49.99, rating: 4, image: "/src/assets/images/pom.jpg", category: "Dog" },
  { id: 2, name: "Cat Tree", description: "A fun tree for your cat to climb.", price: 69.99, rating: 5, image: "/src/assets/images/pom.jpg", category: "Cat" },
  { id: 3, name: "Bird Cage", description: "A spacious cage for your bird.", price: 39.99, rating: 3, image: "/src/assets/images/pom.jpg", category: "Dog" },
  { id: 4, name: "Rabbit Hutch", description: "A cozy hutch for your rabbit.", price: 59.99, rating: 4, image: "src/assets/images/pom.jpg", category: "Cat" },
  { id: 5, name: "Dog Ball", description: "A durable ball for your dog to play with.", price: 9.99, rating: 4, image: "src/assets/images/pom.jpg", category: "Fish" },
  { id: 6, name: "Cat Toy Mouse", description: "A fun toy mouse for your cat.", price:0.0, rating: 5, image: "src/assets/images/pom.jpg", category: "Fish" },
  { id: 7, name: "Bird Swing", description: "A swing for your bird to enjoy.", price: 12.99, rating: 4, image: "src/assets/images/pom.jpg", category: "Fish" },
  { id: 8, name: "Rabbit Chew Toy", description: "A safe chew toy for your rabbit.", price: 8.99, rating: 4, image: "src/assets/images/pom.jpg", category: "Rabbit" },
  { id: 9, name: "Dog Sweater", description: "A warm sweater for your dog.", price: 0, rating: 4, image: "src/assets/images/pom.jpg", category: "Rabbit" },
  { id: 10, name: "Cat Hoodie", description: "A stylish hoodie for your cat.", price: 14.99, rating: 5, image: "src/assets/images/pom.jpg", category: "Fish" },
  { id: 11, name: "Bird Vest", description: "A cute vest for your bird.", price: 0, rating: 3, image: "src/assets/images/pom.jpg", category: "Dog" },
  { id: 12, name: "Rabbit Coat", description: "A warm coat for your rabbit.", price: 18.99, rating: 4, image: "src/assets/images/pom.jpg", category: "Rabbit" },
  { id: 13, name: "Dog Bowl", description: "A sturdy bowl for your dog.", price: 5.99, rating: 4, image: "src/assets/images/pom.jpg", category: "Fish" },
  { id: 14, name: "Cat Feeder", description: "An automatic feeder for your cat.", price: 29.99, rating: 5, image: "src/assets/images/pom.jpg", category: "Pet-Food" },
  { id: 15, name: "Bird Feeder", description: "A bird feeder for your backyard.", price: 15.99, rating: 3, image: "src/assets/images/pom.jpg", category: "Pet-food" },
  { id: 16, name: "Rabbit Water Bottle", description: "A water bottle for your rabbit.", price: 9.99, rating: 4, image: "src/assets/images/pom.jpg", category: "Aquarium" },
  { id: 17, name: "Dog Leash", description: "A strong leash for your dog.", price: 12.99, rating: 4, image: "src/assets/images/pom.jpg", category: "Bird" },
  { id: 18, name: "Cat Harness", description: "A comfortable harness for your cat.", price: 16.99, rating: 5, image: "src/assets/images/pom.jpg", category: "Bird" },
  { id: 19, name: "Bird Harness", description: "A safe harness for your bird.", price: 10.99, rating: 3, image: "src/assets/images/pom.jpg", category: "Bird" },
  { id: 20, name: "Rabbit Leash", description: "A leash for walking your rabbit.", price: 11.99, rating: 4, image: "src/assets/images/pom.jpg", category: "Aquarium" },
  { id: 21, name: "Dog Brush", description: "A brush for grooming your dog.", price: 6.99, rating: 4, image: "src/assets/images/pom.jpg", category: "Rabbit" },
  { id: 22, name: "Cat Nail Clippers", description: "Nail clippers for your cat.", price: 8.99, rating: 5, image: "src/assets/images/pom.jpg", category: "Pet-Food" },
  { id: 23, name: "Bird Bath", description: "A bath for your bird.", price: 10.99, rating: 3, image: "src/assets/images/pom.jpg", category: "Aquarium" },
  { id: 24, name: "Rabbit Shampoo", description: "Shampoo for cleaning your rabbit.", price: 7.99, rating: 4, image: "src/assets/images/pom.jpg", category: "Bird" }
];

const categories = ["Dog", "Cat", "Rabbit", "Fish", "Bird", "Aquarium","Pet-Food"];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([1, 100]);

  const filteredProducts = products.filter((product) => {
    return (
      (!selectedCategory || product.category === selectedCategory) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });

  return (
    <div className="home">
      <Sidebar categories={categories} onCategorySelect={setSelectedCategory} />
      <div className="content">
        <div className="price-range">
          <h3>Filter by Price</h3>
          <input
            type="range"
            min="1"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          />
          <div className="price-range-values">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <ProductList products={filteredProducts} />

        <div className="container">
          <img src={sale_pic} alt="Special Offer" className="image" />
          <div className="text-container">
            <h1 className="header">Special</h1>
            <h2 className="header1">OFFER SALE</h2>
            <h3 className="sub-header">
              Get up to 25% Discount when you buy more than 2 products
            </h3>
            <button className="button">Get access</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

