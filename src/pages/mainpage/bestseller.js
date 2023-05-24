import React from 'react';
import ProductCard from '../product/product';


const BestSellers = () => {
  return (
    <div class="items-section">
        <h1 class="new-products">Бестселлеры</h1>
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  );
};

export default BestSellers;