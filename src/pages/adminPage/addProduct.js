import React, { useState } from "react";
import '../../css/addProduct.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: '',
  });

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь вы можете отправить данные продукта на сервер или обработать их как вам угодно.
    console.log(product);
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h2>Добавление товара</h2>
      <input
        type="text"
        name="name"
        placeholder="Имя товара"
        value={product.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Цена товара"
        value={product.price}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Описание товара"
        value={product.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Категория товара"
        value={product.category}
        onChange={handleInputChange}
      />
      <div className="image-input">
        <input 
          type="text"
          name="image"
          placeholder="URL изображения"
          value={product.image}
          onChange={handleInputChange}
        />
        <br/>
        <p className="image-message">
          Загрузите изображение <a href="https://imgbb.com/">здесь</a> для получения ссылки.
        </p>
      </div>
      <button type="submit">Добавить товар</button>
    </form>
  );
};

export default AddProduct;
