import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="products">
      <h1>Products</h1>
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

export default Products;
