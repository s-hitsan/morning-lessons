import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { useLazyGetUserQuery } from '../services/auth-api';
import { LocalStorageAdapter } from '../services/LocalStorageAdapter';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!LocalStorageAdapter.token);
  const [username, setUsername] = useState(null);
  const [getUser, { data }] = useLazyGetUserQuery();

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername;
  };

  const logOut = () => {
    LocalStorageAdapter.deleteToken();
    setIsLoggedIn(false);
    setUsername(null);
  };

  const getUserHandler = async () => {
    const resp = await getUser();
    if (resp.error) {
      logOut();
    }
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, logIn, logOut, getUserHandler }}>
      {children}
    </UserContext.Provider>
  );
};
