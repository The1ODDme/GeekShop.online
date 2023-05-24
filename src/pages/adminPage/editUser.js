import React, { useState } from "react";
import '../../css/editUser.css';

const EditUser = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [newRole, setNewRole] = useState('');

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleRoleChange = (event) => {
    setNewRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь вы можете отправить данные на сервер или обработать их как вам угодно.
    console.log(`User: ${selectedUser}, New Role: ${newRole}`);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-user-form">
      <h2>Редактирование пользователя</h2>
      <select value={selectedUser} onChange={handleUserChange}>
        <option value="">Выберите пользователя</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="role"
        placeholder="Новая роль пользователя"
        value={newRole}
        onChange={handleRoleChange}
      />
      <button type="submit">Обновить роль</button>
    </form>
  );
};

export default EditUser;
