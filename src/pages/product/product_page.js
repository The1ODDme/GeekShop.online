import React, { useEffect, useState } from 'react';
import Table from './product_properties';
import '../../css/product_page.css';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8080/GeekShop/product/productId=${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Ошибка получения данных о продукте:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { imageUrl, name, price, description } = product;

  return (
    <div className="product-page">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p className="product-description">{description}</p>
      <p className="price">{price} EUR.</p>
      <button className="buy-button">Купить</button>
    </div>
  );
};

export default ProductPage;
