import React, { useState } from "react";
import '../../css/signIn.css';
import { Link } from 'react-router-dom'
const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    login: '',
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
    // Здесь вы можете отправить данные на сервер для аутентификации или обработать их как вам угодно.
    console.log(credentials);
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Вход в аккаунт</h2>
        <input
          type="text"
          name="login"
          placeholder="Логин"
          value={credentials.login}
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
          <Link to="signUp/"><br/>
            Зарегестрируйтесь!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
