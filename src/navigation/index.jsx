import { useRoutes } from 'react-router-dom';

import { pagesArray } from './routes';

export const Navigation = () => {
  const routes = useRoutes(pagesArray);

  return routes;
};
