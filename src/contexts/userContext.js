import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [isLoginLoading, setisLoginLoading] = useState(false);

  console.log('rerender');

  const logIn = async () => {
    setisLoginLoading(true);
    console.log(isLoginLoading);
    setTimeout(() => {
      setIsLoggedIn(true);
      setisLoginLoading(false);
      console.log(isLoginLoading);
      toast.success('You are Welcomme!');
      setUsername('Mango');
    }, 3000);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
