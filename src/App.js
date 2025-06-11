import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './admin/Dashboard';
import AddProduct from './admin/AddPrduct';
import ViewProduct from './admin/ViewProduct';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from "./context/CartContext";
import Cart from './components/Cart';
import Order from './admin/Order';
import { useState } from 'react';
import Checkout from './components/Checkout';
import Forgotpassword from './components/Forgotpassword';
import Pending from './admin/Pending';
import Category from './admin/Category';
import Brand from './admin/Brand';

function App() {

   const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <CartProvider>
        {/* <Router> */}
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Routes>
          <Route path='/' element={<Home searchTerm={searchTerm}/>}></Route>
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout/>}/>
           <Route path='/forgoutpassword' element={<Forgotpassword/>}/>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/admin/dashboard' element={<Dashboard />} />
           <Route path='/admin/category' element={<Category />} />
          <Route path='/admin/add-product' element={<AddProduct />} />
          <Route path='/admin/view-product' element={<ViewProduct />} />
          <Route path='/admin/order' element={<Order />} />
          <Route path='/admin/pending' element={<Pending />} />
          <Route path='/admin/brand' element={<Brand />} />
        </Routes>
        {/* </Router> */}
      </CartProvider>
    </div>
  );
}

export default App;
