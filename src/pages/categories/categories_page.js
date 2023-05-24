import '../../css/categories_page.css';
import React, { Component } from 'react';
import ProductCard from '../product/product';

class CategoryPage extends Component {
  state = {
    currentCategory: 'Игрушки и игры'
  }

  handleCategoryClick = (category) => {
    this.setState({ currentCategory: category });
  }

  render() {
    const categories = [
      'Игрушки и игры',
      'Одежда и аксессуары',
      'Дом и кухня',
      'Постеры и принты',
      'Канцелярия',
      'Новые поступления',
      'Распродажа!'
    ];

    return (
      <div className="category-page">
        <h1>{this.state.currentCategory}</h1>
        <div className="category-page-content">
          <div className="product-list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="category-list">
            <h2>Категории</h2>
            <ul>
              {categories.map((category) =>
                <li
                  key={category}
                  onClick={() => this.handleCategoryClick(category)}
                  className={this.state.currentCategory === category ? 'active' : ''}
                >
                  {category}
                </li>
              )}
            </ul>
          </div>          
        </div>

      </div>
    );
  }
}

export default CategoryPage;