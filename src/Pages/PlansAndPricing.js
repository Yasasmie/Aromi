import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "./plansandpricing.css";

const products = [
  { id: 1, title: "Basic Pattern Course", price: "LKR 1000", image: "/Images/home6.jpeg" },
  { id: 2, title: "Kids Pattern Course", price: "LKR 200", image: "/Images/home6.jpeg" },
  { id: 3, title: "Advanced Pattern Course", price: "LKR 3200", image: "/Images/home6.jpeg" },
  { id: 4, title: "Pattern Books", price: "LKR 700", image: "/Images/home6.jpeg" },
  { id: 5, title: "Sewing Tools", price: "LKR 1000", image: "/Images/home6.jpeg" },
  { id: 6, title: "Pattern Magazine", price: "LKR 500", image: "/Images/home6.jpeg" },
];

export default function PatternMaking() {
  return (
    <div>
      <NavBar />
      <div className="pattern-page">
        <h1>Pattern Making</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p className="price">{product.price}</p>
              <button className="buy-button">Buy</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
