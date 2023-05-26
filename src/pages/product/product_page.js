import React, { useEffect, useState } from 'react';
import '../../css/product_page.css';
import Table from './product_properties';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8080/GeekShop/product?productId=${productId}`);
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

  const { picture, name, price, description, material, type, weight, width, height } = product;

  return (
    <div className="product-page">
      <img src={picture} alt={name} />
      <h2>{name}</h2>
      <p className="product-description">{description}</p>
      <p className="price">{price} EUR.</p>
      <button className="buy-button">Купить</button>
      <Table json={JSON.stringify({ material, type, weight, width, height })} />
      
    </div>
  );
};

export default ProductPage;
