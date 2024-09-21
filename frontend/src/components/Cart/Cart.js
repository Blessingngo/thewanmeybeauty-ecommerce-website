import React, { useState, useEffect } from 'react';
import api from '../../api';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            // Logic to fetch cart items from local storage or API
            const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
            setCartItems(storedCart);
        };
        fetchCartItems();
    }, []);

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>{item.name} - ${item.price}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
