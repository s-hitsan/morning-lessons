import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../constants';

export const NavMenu = (props) => {
  return (
    <div className='d-flex flex-column justify-content-start align-items-left'>
      <NavLink to={ROUTES.register}>Registration</NavLink>
      <NavLink to={ROUTES.notes}>Notes</NavLink>
      <NavLink to={ROUTES.posts}>Posts</NavLink>
    </div>
  );
};
