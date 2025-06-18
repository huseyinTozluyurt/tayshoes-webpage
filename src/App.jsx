import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Mainpage from './Mainpage.jsx';
import Login from './Login.jsx';
import Shopping from './Shopping.jsx';
import Register from './Register.jsx';
import ShoppingCard from './ShoppingCard.jsx';
import Button from './Button.jsx';
import Card from './Card.jsx';
import Admin from './Admin';
import AddProduct from './adminFeatures/AddProduct';
import RemoveProduct from './adminFeatures/RemoveProduct';
import UpdateProduct from './adminFeatures/UpdateProduct';
import RemoveUser from './adminFeatures/RemoveUser';
import ViewOrders from './adminFeatures/ViewOrders';
import ViewUsers from './adminFeatures/ViewUsers';
import ManageDatabase from './adminFeatures/ManageDatabase';
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/card" element={<Card />} />
        <Route path="/button" element={<Button />} />
        <Route path="/shoppingCard" element={<ShoppingCard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/admin/removeProduct" element={<RemoveProduct />} />
        <Route path="/admin/updateProduct" element={<UpdateProduct />} />
        <Route path="/admin/removeUser" element={<RemoveUser />} />
        <Route path="/admin/viewOrders" element={<ViewOrders />} />
        <Route path="/admin/viewUsers" element={<ViewUsers />} />
        <Route path="/admin/manageDatabase" element={<ManageDatabase />} />      </Routes>
      <Footer />
    </div>
  );
}

export default App;
