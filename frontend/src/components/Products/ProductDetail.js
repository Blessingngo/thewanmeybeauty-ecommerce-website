import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <Link to={`/products/${product._id}`}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </Link>
        </div>
    );
};

export default ProductItem;
