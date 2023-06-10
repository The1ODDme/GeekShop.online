import React, { useState } from "react";
import "../../css/signUp.css";

const RegisterPage = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(user);

    fetch("/GeekShop/userRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Обработка ответа от сервера
        console.log(data);
        // Сброс значений полей формы
        setUser({
          firstname: "",
          lastname: "",
          email: "",
          address: "",
          password: "",
        });
      })
      .catch((error) => {
        // Обработка ошибок
        console.error("Error:", error);
      });
  };

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Регистрация</h2>
        <input
          type="text"
          name="firstname"
          placeholder="Имя"
          value={user.firstname}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Фамилия"
          value={user.lastname}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Адрес"
          value={user.address}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={user.password}
          onChange={handleInputChange}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegisterPage;
