import React from 'react';
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/Cart/CartPage';
import FoodPage from './pages/Food/FoodPage';
import Homepage from './pages/Home/Homepage'
import LoginPage from './pages/login/LoginPage';

export default function AppRoutes() {
  return <Routes>
  <Route path="/" element={<Homepage/>} />
  <Route path="/search/:searchTerm" element={<Homepage/>} />
  <Route path="/tag/:tag" element={<Homepage/>} />
  <Route path="/food/:id" element={<FoodPage/>} />
  <Route path="/cart" element={<CartPage/>} />
  <Route path="/login" element={<LoginPage/>} />
</Routes>
}