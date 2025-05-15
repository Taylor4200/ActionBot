import React, { createContext, useContext } from 'react';

interface User {
  name: string;
  email: string;
  avatar: string;
}

const dummyUser: User = {
  name: 'Taylor Demo',
  email: 'taylor@example.com',
  avatar: 'https://ui-avatars.com/api/?name=Taylor+Demo',
};

const UserContext = createContext<User>(dummyUser);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <UserContext.Provider value={dummyUser}>{children}</UserContext.Provider>
);

export function useUser() {
  return useContext(UserContext);
} 