import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { cart: [] });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
