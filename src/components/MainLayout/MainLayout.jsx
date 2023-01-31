import PropTypes from 'prop-types';

import { NavMenu } from '../NavMenu/NavMenu';

export const MainLayout = ({ children }) => {
  return (
    <div>
      <NavMenu />
      <div>{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
