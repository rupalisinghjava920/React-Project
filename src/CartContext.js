import axios from 'axios';
import { createContext, useState, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
const [cartCount, setCartCount] = useState(0);

  const fetchCart = useCallback(() => {
    axios.get("http://localhost:8080/allcart")
      .then(response => {
        setCartItems(response.data);  
        setCartCount(response.data.length);
      })
      .catch(console.error);
  }, []);

  const removeFromCart = (userId, productId) => {
  axios
    .delete(`http://localhost:8080/cart/2/${productId}`)
    .then(() => fetchCart())
    .catch(console.error);
};


  const clearCart = () => {
    axios.delete('http://localhost:8080/cart/clear/1')
      .then(() => fetchCart())
      .catch(console.error);
  };

  

  return (
    <CartContext.Provider value={{ cartItems,setCartItems,cartCount, setCartCount, fetchCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

