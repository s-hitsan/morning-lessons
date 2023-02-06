import { Navigate, useLocation } from 'react-router-dom';

import { PATHS } from '../../constants';
import { useUserContext } from '../../contexts/userContext';

export const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useUserContext();

  const { pathname } = useLocation();

  if (!isLoggedIn && !(pathname === PATHS.register)) {
    toast.error('Будь-ласка авторизуйтесь!');
    return <Navigate to={PATHS.register} />;
  }

  return children;
};
