import React, { useState, useEffect } from "react";
import '../../css/editUser.css';

const EditUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [newRole, setNewRole] = useState('');

  useEffect(() => {
    fetch("/GeekShop/listUsers")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleRoleChange = (event) => {
    setNewRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Отправка данных на сервер для добавления роли
    const data = { userId: selectedUser, role: newRole };
    fetch("/addRole", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log("Роль успешно добавлена");
        } else {
          console.log("Ошибка при добавлении роли");
        }
      })
      .catch(error => console.log(error));
  };

  const handleDeleteRole = () => {
    // Отправка данных на сервер для удаления роли
    const data = { userId: selectedUser, role: newRole };
    fetch("/removeRole", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log("Роль успешно удалена");
        } else {
          console.log("Ошибка при удалении роли");
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} className="edit-user-form">
      <h2>Редактирование пользователя</h2>
      <select value={selectedUser} onChange={handleUserChange}>
        <option value="">Выберите пользователя</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.email} (Роли: {user.roles.join(", ")})
          </option>
        ))}
      </select>

      <div className="role-input">
        <select className="input" value={newRole} onChange={handleRoleChange}>
          <option value="USER">USER</option>
          <option value="MANAGER">MANAGER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
        <br/>
        <button type="submit" className="add-button">Добавить роль</button>
      </div>
      <button type="button" className="delete-button" onClick={handleDeleteRole}>Удалить роль</button>
    </form>
  );
};

export default EditUser;
