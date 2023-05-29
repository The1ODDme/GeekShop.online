import React, { useState } from "react";
import '../../css/addProduct.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: '',
    type: '',
    weight: '',
    material: '',
    width: '',
    height: '',
    categoryId: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "category") {
      setProduct({
        ...product,
        category: value,
        categoryId: getCategoryID(value)
      });
    } else {
      setProduct({
        ...product,
        [name]: value
      });
    }
  };

  const getCategoryID = (category) => {
    switch (category) {
      case 'Игрушки и игры':
        return 1;
      case 'Одежда и аксессуары':
        return 2;
      case 'Дом и кухня':
        return 3;
      case 'Постеры и принты':
        return 4;
      case 'Канцелярия':
        return 5;
      case 'Новые поступления':
        return 6;
      case 'Распродажа':
        return 7;
      default:
        return '';
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Создание JSON
    const productJson = JSON.stringify(product);
    console.log('Создаваемый JSON:', productJson);

    try {
      const response = await fetch('http://localhost:8080/GeekShop/createProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: productJson
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Product created:', data);

        // Обнуление формы
        setProduct({
          name: '',
          price: '',
          description: '',
          category: '',
          image: '',
          type: '',
          weight: '',
          material: '',
          width: '',
          height: '',
          categoryId: ''
        });
      } else {
        console.log('Error creating product:', response.status);
      }
    } catch (error) {
      console.log('Error:', error);
    }
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
      <select
        name="category"
        value={product.category}
        onChange={handleInputChange}
      >
        <option value="">Выберите категорию</option>
        <option value="Игрушки и игры">Игрушки и игры</option>
        <option value="Одежда и аксессуары">Одежда и аксессуары</option>
        <option value="Дом и кухня">Дом и кухня</option>
        <option value="Постеры и принты">Постеры и принты</option>
        <option value="Канцелярия">Канцелярия</option>
      </select>
      <input
        type="text"
        name="type"
        placeholder="Тип товара"
        value={product.type}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="weight"
        placeholder="Вес товара"
        value={product.weight}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="material"
        placeholder="Материал товара"
        value={product.material}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="width"
        placeholder="Ширина товара"
        value={product.width}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="height"
        placeholder="Высота товара"
        value={product.height}
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
