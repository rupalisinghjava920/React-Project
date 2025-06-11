import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./context/CartContext";
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>
);



