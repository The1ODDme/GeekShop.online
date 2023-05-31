import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuthenticated } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/GeekShop/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(data => {
        // Обработка ответа от сервера
        if (data.success) {
          setSuccessMessage('Успешная аутентификация!');
          setCredentials({ email: '', password: '' }); // Обнуление формы

          // Сохранение информации о сеансе в localStorage
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('userRoles', data.userRoles);

          // Установка флага аутентификации
          setAuthenticated(true);

          // Перенаправление на другую страницу
          navigate('/dashboard');
        } else {
          setErrorMessage(data.message);
        }
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
          <Link to="/GeekShop/signUp">
            Зарегистрируйтесь!
          </Link>
        </p>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
