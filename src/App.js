import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import MainPage from './pages/mainpage/mainpage';
import CategoryPage from './pages/categories/categories_page';
import ProductPage from './pages/product/product_page';
import AdminPanel from './pages/adminPage/adminPage';
import LoginPage from './pages/signInSignUp/signIn';
import CartPage from './pages/cart/cart';
import PaymentPage from './pages/checkout/checkout';
import RegisterPage from './pages/signInSignUp/signUp';
import ContactPage from './pages/contacts/contacts';
import Layout from './layout';

const Navigation = () => {
  return (
    <div className="main-column">
      <Routes>
        <Route path="/GeekShop/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="product/productId/:productId" element={<ProductPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="checkout" element={<PaymentPage />} />
          <Route path="admin-panel" element={<AdminPanel />} />
          <Route path="signIn" element={<LoginPage />} />
          <Route path="signUp" element={<RegisterPage />} />           
        </Route>
      </Routes>      
    </div>
  );
};

const Profile = () => {
  return <h1>Страница профиля</h1>;
};

export default Navigation;
