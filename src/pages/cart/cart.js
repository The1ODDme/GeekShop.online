import React from 'react';
import '../../css/cart.css';

const CartPage = ({ cartItems = [] }) => {
  return (
    <div className="cart-page">
      <table className="cart-table">
        <thead>
          <tr>
            <th></th>
            <th>Название товара</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Итого</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <button className="cart-item-remove">Удалить</button>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <input type="number" value={item.quantity} min="1" className="cart-item-quantity" />
              </td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="cart-checkout">Купить</button>
    </div>
  );
};

export default CartPage;
