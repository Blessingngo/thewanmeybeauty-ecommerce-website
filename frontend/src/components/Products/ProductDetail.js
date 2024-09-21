import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
