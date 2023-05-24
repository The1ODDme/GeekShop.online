import React, { useState } from 'react';
import '../../css/checkout.css';

const PaymentPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете обработать данные формы
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h1>Оплата заказа</h1>
      <div className="name-fields">
        <input type="text" placeholder="Имя" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input type="text" placeholder="Фамилия" value={lastName} onChange={e => setLastName(e.target.value)} />
      </div>
      <input type="text" placeholder="Название компании (необязательно)" value={companyName} onChange={e => setCompanyName(e.target.value)} />
      <input type="text" placeholder="Страна/Регион" value={country} onChange={e => setCountry(e.target.value)} />
      <input type="text" placeholder="Адрес" value={address} onChange={e => setAddress(e.target.value)} />
      <input type="text" placeholder="Почтовый индекс" value={postalCode} onChange={e => setPostalCode(e.target.value)} />
      <input type="text" placeholder="Город" value={city} onChange={e => setCity(e.target.value)} />
      <input type="text" placeholder="Номер телефона" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      <input type="email" placeholder="Эл. почта" value={email} onChange={e => setEmail(e.target.value)} />
      <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
        <option value="">Выберите метод оплаты</option>
        <option value="visa">Visa</option>
        <option value="mastercard">MasterCard</option>
        <option value="paypal">PayPal</option>
        // Добавьте другие методы оплаты, если нужно
      </select>
      <button type="submit">Подтвердить</button>
    </form>
  );
};

export default PaymentPage;
