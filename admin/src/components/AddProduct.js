import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({ name: '', price: '', category: '', brand: '', rating: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', product);
      alert('Product added successfully!');
      setProduct({ name: '', price: '', category: '', brand: '', rating: '' }); // Reset form
    } catch (error) {
      alert('Error adding product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required />
      <input type="text" name="brand" placeholder="Brand" value={product.brand} onChange={handleChange} required />
      <input type="number" name="rating" placeholder="Rating (1-5)" value={product.rating} onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
