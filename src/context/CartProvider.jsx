import React, { useState } from 'react';
import { CartContext } from './CartContext';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
        ? { ...item, quantity: item.quantity + quantity } 
        : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
