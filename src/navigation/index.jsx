import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';

import { useUserContext } from '../contexts/userContext';
import { useGetUserQuery, useLazyGetUserQuery } from '../services/auth-api';
import { LocalStorageAdapter } from '../services/LocalStorageAdapter';
import { pagesArray } from './routes';

export const Navigation = () => {
  const { isLoggedIn, getUserHandler } = useUserContext();

  useEffect(() => {
    if (LocalStorageAdapter.token) {
      getUserHandler();
    }
  }, [isLoggedIn]);

  const routes = useRoutes(pagesArray);

  return routes;
};
