import { AuthGuard, NoAuthGuard } from '../components';
import { PATHS } from '../constants';
import { MyPage, Notes, Post, Posts, Registration } from '../pages';

const routeConstructor = (path, element, children = []) => {
  return { path, element, children };
};

export const pagesArray = [
  routeConstructor(PATHS.register, <Registration />, [
    { path: 'hi', element: <div>inner page</div> },
  ]),
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
    <AuthGuard>
      <Post />
    </AuthGuard>,
  ),
  routeConstructor(
    PATHS.myPage,
    <AuthGuard>
      <MyPage />
    </AuthGuard>,
  ),
  routeConstructor(PATHS.noPage, <div>404</div>),
];
