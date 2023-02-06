import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { MainLayout } from '../components';
import { ROUTES } from '../constants';
import { useUserContext } from '../contexts/userContext';
import { Notes, Posts, Registration } from '../pages';

export const Navigation = () => {
  const { isLoggedIn } = useUserContext();

  const { pathname } = useLocation();

  if (!isLoggedIn && !(pathname === ROUTES.register)) {
    toast.error('Будь-ласка авторизуйтесь!');
    return <Navigate to={ROUTES.register} />;
  }

  if (isLoggedIn && pathname === ROUTES.register) {
    return <Navigate to={ROUTES.posts} />;
  }

  return (
    <MainLayout>
      <Routes>
        <Route element={<Registration />} path={ROUTES.register} />
        <Route element={<Notes />} path={ROUTES.notes} />
        <Route element={<Posts />} path={ROUTES.posts} />
      </Routes>
    </MainLayout>
  );
};
