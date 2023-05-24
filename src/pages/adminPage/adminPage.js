import React from 'react';
import AddProduct from './addProduct';
import EditUser from './editUser';

// Предположим, что у вас есть некоторые данные о пользователях
const users = [
  { id: 1, name: 'User1' },
  { id: 2, name: 'User2' },
  // ...
];

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <AddProduct />
      <EditUser users={users} />
    </div>
  );
};

export default AdminPanel;
