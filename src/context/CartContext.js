import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCartItems] = useState([]);
  

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => setCartItems([]);

  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart  }}>
      {children}
    </CartContext.Provider>
  );
};
