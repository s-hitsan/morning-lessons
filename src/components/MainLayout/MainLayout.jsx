import { ClassNames, css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { useUserContext } from '../../contexts/userContext';
import { NavMenu } from '../NavMenu/NavMenu';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainLayout = ({ children }) => {
  const { logOut } = useUserContext();
  return (
    <div
      style={{
        maxWidth: '1280px',
        minHeight: '100vh',
        margin: '0 auto',
        paddingTop: '50px',
        backgroundColor: '#eef9fd',
      }}
    >
      <NavMenu />
      <StyledDiv>{children}</StyledDiv>
      <Button className='m-4' onClick={logOut}>
        Logout
      </Button>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
