import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import local images
import headphonesImg from "../assets/images/jbl.webp";
import smartwatchImg from "../assets/images/watch1.jpg";
import speakerImg from "../assets/images/speaker.jpg";
import earbudsImg from "../assets/images/buds.webp";
import tabletImg from "../assets/images/lenovo.jpg";
import backpackImg from "../assets/images/laptop.webp";

const Products = () => {
  const [products] = useState([
    {
      id: 1,
      name: "JBL Wireless Headphones",
      price: "KES 5,000",
      description: "Premium sound quality with noise cancellation",
      image: headphonesImg,
      rating: 4.5,
      cost: '5000'
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "KES 3,000",
      description: "Track your fitness and stay connected",
      image: smartwatchImg,
      rating: 4.2,
      cost: '3000'
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: "KES 2,500",
      description: "Miatone Speaker with a 20 hr battery life",
      image: speakerImg,
      rating: 4.7,
      cost: '2500'
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      price: "KES 1,400",
      description: "Leaf Buds-True wireless earbuds with charging case",
      image: earbudsImg,
      rating: 4.3,
      cost: '1400'
    },
    {
      id: 5,
      name: "Tablet",
      price: "KES 13,400",
      description: "Lenovo Tab-10-inch display with high resolution",
      image: tabletImg,
      rating: 4.1,
      cost: '13400'
    },
    {
      id: 6,
      name: "WD-Laptop Backpack",
      price: "KES 47,000",
      description: "Durable and stylish backpack for professionals",
      image: backpackImg,
      rating: 4.4,
      cost: '47000'
    },
  ]);

  const navigate = useNavigate();

  return (
    <div className="products-page">
      <header className="page-header">
        <h1>Our Products</h1>
        <p>Discover our premium selection of tech gadgets</p>
      </header>

      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <span className="product-rating">{product.rating} ★</span>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <button
                  className="btn btn-success mt-2 w-100"
                  onClick={() => navigate("/payment", { state: { product } })}
                >
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="page-footer bg-success text-info">
        <p>&copy; 2025 Tech Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Products;
