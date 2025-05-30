
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './component/Login';
import Register from './component/Register';
import Home from './pages/user/Home';
import Footer from './component/Footer';
import AddProduct from './pages/admin/AddProduct';
import ProductListing from './pages/admin/ProductListing';
import ProductDetail from './pages/admin/ProductDetail';
import EditProduct from './pages/admin/EditProduct';
import DeleteProduct from './pages/admin/DeleteProduct';
import PrivateRoute from './PrivateRoute';
import Cart from './pages/user/Cart';

function App() {
  // Cart count example, could be dynamic from context or API
  const [cartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');


  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const [authority, setAuthority] = useState(() => {
    return localStorage.getItem('authority') || '';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('authority', authority);
  }, [authority]);

  return (
    <div className="app">
      <Router>
        <Header
          cartCount={cartCount}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          authority={authority}
          setAuthority={setAuthority}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="main-content">
          <Routes>
            <Route path='/sign-up' element={<Register />} />
            <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} setAuthority={setAuthority} />} />
            <Route path='/home' element={<PrivateRoute>
              <Home searchTerm={searchTerm} />
            </PrivateRoute>} />
            <Route path='/user/cart' element={<PrivateRoute>
              <Cart />
            </PrivateRoute>} />
            <Route path='/add-product' element={<PrivateRoute>
              <AddProduct />
            </PrivateRoute>} />
            <Route path="/admin/productListing" element={<PrivateRoute>
              <ProductListing />
            </PrivateRoute>} />
            <Route path='/admin/editproduct/:id' element={<EditProduct />} />
            <Route path='/admin/deleteproduct/:id' element={<DeleteProduct />} />
            <Route path="/admin/productDetail/:id" element={<ProductDetail />} />
            <Route path="*" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;


