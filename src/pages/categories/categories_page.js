import React, { Component } from 'react';
import '../../css/categories_page.css';
import ProductCard from '../product/product';
import { Link } from 'react-router-dom';

class CategoryPage extends Component {
  state = {
    currentCategory: 'Игрушки и игры',
    products: []
  }

  componentDidMount() {
    this.fetchProductCards();
  }

  fetchProductCards() {
    fetch('/GeekShop/getAllProductCards')
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data });
      })
      .catch(error => {
        console.log('Error fetching product cards:', error);
      });
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

    const filteredProducts = this.state.products.filter(product => product.category.name === this.state.currentCategory);

    return (
      <div className="category-page">
        <h1>{this.state.currentCategory}</h1>
        <div className="category-page-content">
          <div className="product-list">
            {filteredProducts.map(product =>
            <Link to={`/GeekShop/product/${product.id}`}>
              <ProductCard
                id={product.id}
                imageSrc={product.picture}
                name={product.name}
                price={product.price}
              />
            </Link>
            )}
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
