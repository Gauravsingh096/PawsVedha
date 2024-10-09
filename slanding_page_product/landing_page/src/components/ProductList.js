import React, { useState } from 'react';
import './Product.css';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import HeaderImage from './HeaderImage';
import FooterImage from './FooterImage'; 
import ProductSlider from './ProductSlider';

const categories = ['All', 'Dog', 'Cat', 'Rabbit', 'Rodents', 'Fish', 'Bird', 'Accessories', 'Pet Food', 'Aquarium'];
const products = [
    { id: 1, category: 'Dog', name: 'Dog Food', imageSrc: './images/dog.png', about: 'I am a good man', price: 20 },
    { id: 1, category: 'Dog', name: 'Dog Food', imageSrc: 'dog-food.jpg', about: 'I am a good man', price: 20 },
    { id: 1, category: 'Dog', name: 'Dog Food', imageSrc: 'dog-food.jpg', about: 'I am a good man', price: 20 },
    { id: 1, category: 'Dog', name: 'Dog Food', imageSrc: 'dog-food.jpg', about: 'I am a good man', price: 20 },
    { id: 1, category: 'Dog', name: 'Dog Food', imageSrc: 'dog-food.jpg', about: 'I am a good man', price: 20 },
    { id: 1, category: 'Dog', name: 'Dog Food', imageSrc: 'dog-food.jpg', about: 'I am a good man', price: 20 },
    { id: 2, category: 'Cat', name: 'Cat Toys', imageSrc: 'cat-toys.jpg', about: 'Fun toys for cats', price: 15 },
    { id: 2, category: 'Cat', name: 'Cat Toys', imageSrc: 'cat-toys.jpg', about: 'Fun toys for cats', price: 15 },
    { id: 2, category: 'Cat', name: 'Cat Toys', imageSrc: 'cat-toys.jpg', about: 'Fun toys for cats', price: 15 },
    { id: 2, category: 'Cat', name: 'Cat Toys', imageSrc: 'cat-toys.jpg', about: 'Fun toys for cats', price: 15 },
    { id: 3, category: 'Rabbit', name: 'Rabbit Cage', imageSrc: 'rabbit-cage.jpg', about: 'Spacious cage for rabbits', price: 30 },
    { id: 4, category: 'Fish', name: 'Fish Tank', imageSrc: 'fish-tank.jpg', about: 'A beautiful fish tank', price: 50 },
    { id: 4, category: 'Fish', name: 'Fish Tank', imageSrc: 'fish-tank.jpg', about: 'A beautiful fish tank', price: 50 },
    { id: 4, category: 'Fish', name: 'Fish Tank', imageSrc: 'fish-tank.jpg', about: 'A beautiful fish tank', price: 50 },
    { id: 4, category: 'Fish', name: 'Fish Tank', imageSrc: 'fish-tank.jpg', about: 'A beautiful fish tank', price: 50 },
    { id: 5, category: 'Bird', name: 'Bird Feeder', imageSrc: 'bird-feeder.jpg', about: 'Feed your birds easily', price: 10 },
    // Add more products as needed
];

const itemsPerPage = 4; // Number of products to display per page

function ProductList() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(100);
    const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage here

    // Function to filter products based on category and price range
    const filterProducts = (category, maxPrice) => {
        return products.filter(product => {
            const inCategory = category === 'All' || product.category === category;
            const inPriceRange = product.price <= maxPrice;
            return inCategory && inPriceRange;
        });
    };

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page when category changes
    };

    // Handle price range change
    const handlePriceRangeChange = (event) => {
        const maxPrice = parseInt(event.target.value, 10);
        setPriceRange(maxPrice);
        setCurrentPage(1); // Reset to first page when price range changes
    };

    // Calculate total number of pages
    const filteredProducts = filterProducts(selectedCategory, priceRange);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Calculate starting index and ending index of products for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice products based on current page
    const slicedProducts = filteredProducts.slice(startIndex, endIndex);

    return (
        <div className="App">
            <HeaderImage />
            <div className="container">
                <Sidebar
                    categories={categories}
                    setSelectedCategory={handleCategoryChange}
                    priceRange={priceRange}
                    setPriceRange={handlePriceRangeChange}
                />
                <div className="product-section">
                    <div className="product-grid">
                        {slicedProducts.length === 0 ? (
                            <p>No products found in this category</p>
                        ) : (
                            slicedProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    name={product.name}
                                    imageSrc={product.imageSrc}
                                    about={product.about}
                                    price={`$${product.price}`}
                                />
                            ))
                        )}
                    </div>
                    {/* Pagination */}
                    <div className="pagination">
                        {currentPage > 1 && (
                            <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
                        )}
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button key={index} onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                        )}
                    </div>
                    {/* End Pagination */}
                </div>
            </div>
            <FooterImage />
            <ProductSlider products={filteredProducts} />
        </div>
    );
}

export default ProductList;
