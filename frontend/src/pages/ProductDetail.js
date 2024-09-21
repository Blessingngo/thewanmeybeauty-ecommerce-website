import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const addToCart = () => {
    // Handle adding to cart logic
  };

  return (
    product ? (
      <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default ProductDetail;
