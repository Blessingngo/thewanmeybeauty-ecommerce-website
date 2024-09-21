import React, { useEffect, useState } from 'react';
import api from '../../api';
import ProductItem from './ProductItem';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await api.get('/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
