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
  