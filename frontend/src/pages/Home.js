
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    axios.get("/api/products/featured")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home">
      <div className="banner">
        <h1>Welcome to Our Store!</h1>
        <Link to="/products">Shop Now</Link>
      </div>
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product">
            <Link to={`/products/${product._id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
