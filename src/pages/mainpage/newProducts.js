import React, { useEffect, useState } from 'react';
import '../../css/items_section.css';
import ProductCard from '../product/product';
import { Link } from 'react-router-dom';
const NewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Ваш запрос на получение данных из JSON
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/GeekShop/getAllProductCards');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Ошибка получения данных:', error);
      }
    };

    fetchProducts();
  }, []);
  
  return (
    <div className="items-section">
      <h1 className="new-products">Новинки</h1>
      <div className="products-section">
      {products.map((product) => (
      <Link to={`/GeekShop/product/productId=${product.id}`}>
        <ProductCard
          id={product.id}
          imageSrc={product.picture}
          name={product.name}
          price={product.price}
        />
      </Link>
    ))}
      </div>
    </div>
  );
};
export default NewProducts;
