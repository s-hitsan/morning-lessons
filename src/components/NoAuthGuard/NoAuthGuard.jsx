import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { PATHS } from '../../constants';
import { useUserContext } from '../../contexts/userContext';

export const NoAuthGuard = ({ children }) => {
  const { isLoggedIn } = useUserContext();

  const { pathname } = useLocation();

  if (isLoggedIn && pathname === PATHS.register) {
    toast.success('Ви вже авторизовані!');
    return <Navigate to={PATHS.posts} />;
  }

  return children;
};
