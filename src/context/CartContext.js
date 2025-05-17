import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
   const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

   // Add to cart
   const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
  };

  //Remove from cart by product ID
   const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  
  };

  return (
    <CartContext.Provider value={{ cartCount, setCartCount, cartItems, addToCart,removeFromCart  }}>
      {children}
    </CartContext.Provider>
  );
}
