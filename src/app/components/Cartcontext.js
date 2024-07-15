"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    useEffect(() => {
    
        if (typeof window !== 'undefined') {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const exists = prevCart.find(item => item.asin === product.asin);
            if (exists) {
                return prevCart; 
            }
            return [...prevCart, product]; 
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.asin !== productId));
    };

    
    const itemCount = cart.length;

    return (
        <CartContext.Provider value={{ cart, itemCount, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
