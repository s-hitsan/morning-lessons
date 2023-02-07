import styled from '@emotion/styled';
import { Spinner } from 'react-bootstrap';

export const RequestHandler = ({ children, isLoading }) => {
  const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 200px;
  `;

  if (isLoading) {
    return (
      <CenteredDiv>
        <Spinner animation='border' variant='primary' size='lg' />
      </CenteredDiv>
    );
  }

  return children;
};
