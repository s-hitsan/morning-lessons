import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { PATHS } from '../../constants';
import { useUserContext } from '../../contexts/userContext';

export const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useUserContext();

  const { pathname } = useLocation();

  if (!isLoggedIn && !(pathname === PATHS.register)) {
    return <Navigate to={PATHS.register} />;
  }

  return children;
};
