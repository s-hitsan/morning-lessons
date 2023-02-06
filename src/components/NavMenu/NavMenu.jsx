import './NavMenu.scss';

import { NavLink } from 'react-router-dom';

import { PATHS } from '../../constants';

export const NavMenu = (props) => {
  const handleActiveLink = ({ isActive }) => {
    return isActive ? 'menu__link menu__link_active' : 'menu__link';
  };

  return (
    <div className='nav__menu_wrapper d-flex justify-content-center gap-2'>
      <NavLink className={handleActiveLink} to={PATHS.notes}>
        Notes
      </NavLink>
      <NavLink className={handleActiveLink} to={PATHS.posts}>
        Posts
      </NavLink>
      <NavLink className={handleActiveLink} to={PATHS.myPage}>
        My page
      </NavLink>
    </div>
  );
};
