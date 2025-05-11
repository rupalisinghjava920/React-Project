import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import {  BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Footer from './component/Footer';
import ProductCard from './component/ProductCard';
import ProductListing from './component/ProductListing';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';

function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
      <div className="page-background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path='/sign-up' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Footer/>
      </div>
      </Router>
    </div>
  );
}

export default App;
