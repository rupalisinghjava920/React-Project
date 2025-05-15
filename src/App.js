
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Footer from './component/Footer';
import ProductCard from './component/ProductCard';
import ProductListing from './component/ProductListing';
import ProductDetail from './component/ProductDetail';
import { useState } from 'react';

function App() {

  const [cartCount] = useState(0);
  return (
    <div className="app">
      <Router>
        <Header cartCount={cartCount} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productCard" element={<ProductCard />} />
            <Route path="/productListing" element={<ProductListing />} />
            <Route path="/productDetail" element={<ProductDetail />} />
            <Route path='/sign-up' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
