import { lazy, Suspense } from 'react';

import { AuthGuard, NoAuthGuard } from '../components';
import { PATHS } from '../constants';
import { Login, MyPage, Notes, Posts, Registration } from '../pages';

const LazyPost = lazy(() => import('../pages/Post/Post'));

const routeConstructor = (path, element, children = []) => {
  return { path, element, children };
};

export const pagesArray = [
  routeConstructor(
    PATHS.register,
    <NoAuthGuard>
      <Registration />
    </NoAuthGuard>,
    [{ path: 'hi', element: <div>inner page</div> }],
  ),
  routeConstructor(
    PATHS.login,
    <NoAuthGuard>
      <Login />
    </NoAuthGuard>,
  ),
  routeConstructor(
    PATHS.notes,
    <AuthGuard>
      <Notes />
    </AuthGuard>,
  ),
  routeConstructor(
    PATHS.posts,
    <AuthGuard>
      <Posts />
    </AuthGuard>,
  ),
  routeConstructor(
    PATHS.post,
    <Suspense fallback={<div>Loading...</div>}>
      <LazyPost />
    </Suspense>,
  ),
  routeConstructor(
    PATHS.myPage,
    <AuthGuard>
      <MyPage />
    </AuthGuard>,
  ),
  routeConstructor(PATHS.noPage, <div>404</div>),
];
