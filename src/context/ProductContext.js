import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const initialProducts = [
  { id: 1, name: "Apple", description: "A healthy, sweet fruit...", price: 400, category: "Furit", stockquantity: 2, image: "/images/apple.jpg", status: "panding" },
  { id: 2, name: "Choloclate", description: "A sweet, delicious treat...", price: 800, category: "Cholo", stockquantity: 1, image: "/images/chol5.jpg", status: " panding" },
  { id: 3, name: "Frock", description: "A comfortable and stylish dress...", price: 500, category: "Frock", stockquantity: 2, image: "/images/frock.jpg", status: "panding" },
  { id: 4, name: "Red Apple", description: "A healthy, sweet fruit...", price: 400, category: "Furit", stockquantity: 2, image: "/images/fruit.jpg", status: "panding" },
  { id: 5, name: "Long Frock", description: "A comfortable and stylish dress...", price: 300, category: "Frock", stockquantity: 2, image: "/images/frock1.jpg", status: " panding" },
  { id: 6, name: "Men Jens", description: "Durable and trendy pants made,...", price: 7000, category: "Jens", stockquantity: 3, image: "/images/jens1.jpg", status: "panding" },
  { id: 7, name: "Milk", description: "Refreshing and full of vitamins...", price: 600, category: "Milk", stockquantity: 1, image: "/images/milk.jpg", status: "panding" },
  { id: 8, name: "Orange Juice", description: "Refreshing and full of vitamins...", price: 500, category: "Juice", stockquantity: 1, image: "/images/juice.jpg", status: "panding" },
  { id: 9, name: "Mix Juice", description: "Refreshing and full of vitamins...", price: 500, category: "Juice", stockquantity: 1, image: "/images/juice2.jpg", status: "panding" },
  { id: 10, name: "Chain Noodle", description: "Tasty and quick-cooking noodles, ....", price: 800, category: "Fast Food", stockquantity: 4, image: "/images/noodle1.jpg", status: "panding" },
  { id: 11, name: "Lady Jens", description: "Durable and trendy pants made,...", price: 10000, category: "Jens", stockquantity: 2, image: "/images/jens3.jpg", status: "panding" },
  { id: 12, name: "Shoes", description: "Comfortable and stylish shoes ...", price: 1000, category: "Shoes", stockquantity: 1, image: "/images/shoes.jpg", status: "panding" },
];

  const [products, setProducts] = useState(initialProducts);

  const handleStatusChange = (id, newStatus) => {
    const updatedProducts = products.map(product =>
      product.id === id ? { ...product, status: newStatus } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, handleStatusChange }}>
      {children}
    </ProductContext.Provider>
  );
};
