import React, { createContext, useState } from "react";

// Определение типов пользователей
export const UserType = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
};

// Определение разрешений для каждого типа пользователя
export const Permissions = {
  ADMIN: ['viewAdminIcon'],
  MANAGER: ['viewAdminIcon'],
  USER: [],
};

// Создание контекста AuthContext
export const AuthContext = createContext();

// Компонент AuthProvider для предоставления информации о пользователе
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;