import React, { useState } from "react";
import '../../css/signIn.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/GeekShop/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(data => {
        // Обработка ответа от сервера
        console.log(data);
      })
      .catch(error => {
        // Обработка ошибок
        console.error(error);
      });
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Вход в аккаунт</h2>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <button type="submit">Войти</button>
        <p className="register-link">
          Нет аккаунта?     
          <Link to="/GeekShop/signUp"><br/>
            Зарегистрируйтесь!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;