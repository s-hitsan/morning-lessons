import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { PATHS } from '../../constants';
import { useUserContext } from '../../contexts/userContext';

export const NoAuthGuard = ({ children }) => {
  const { isLoggedIn } = useUserContext();

  if (isLoggedIn) {
    return <Navigate to={PATHS.posts} />;
  }

  return children;
};
