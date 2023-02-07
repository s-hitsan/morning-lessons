import { useLocation, useParams, useRoutes } from 'react-router-dom';

import { pagesArray } from './routes';

export const Navigation = () => {
  const location = useLocation();

  console.log(pagesArray);

  const routes = useRoutes(pagesArray);

  return routes;
};
