import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({ name: '', price: '', category: '', brand: '', rating: '' });

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`/api/products/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/products/${id}`, product);
      alert('Product updated successfully!');
      history.push('/admin/products'); // Redirect to product list
    } catch (error) {
      alert('Error updating product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required />
      <input type="text" name="brand" placeholder="Brand" value={product.brand} onChange={handleChange} required />
      <input type="number" name="rating" placeholder="Rating (1-5)" value={product.rating} onChange={handleChange} required />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;
