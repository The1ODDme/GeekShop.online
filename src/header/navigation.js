import React from 'react';
import './navigation.css';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="logo-container">
        <img src="logo.png" alt="" className="logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Поиск" className="search-input" />
        <i className="fas fa-search search-icon"></i>
      </div>
      <div className="profile-container">
        <i className="fas fa-shopping-cart cart-icon"></i>
        <i className="fas fa-user-circle profile-icon"></i>
      </div>
      <div className="separator"></div>
      <div className="nav-items-container">
        <a href="#" className="nav-item">Игрушки&Игры</a>
        <a href="#" className="nav-item">Одежда&Аксессуары</a>
        <a href="#" className="nav-item">Дом&Кухня</a>
        <a href="#" className="nav-item">Новинки</a>
        <a href="#" className="nav-item">Скидки</a>
      </div>
    </div>
  );
};

export default Navigation;