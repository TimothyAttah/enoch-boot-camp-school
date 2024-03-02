import React from 'react';
import { user } from '../../components/Authentication';
import styled from 'styled-components';
const H2 = styled.h2`
  /* display: inline-block; */
  text-transform: capitalize;
`;

const Tutorial = () => {
  return (
    <div className='container mt-5'>
      <H2>
        Congratulations, {user?.firstname} {user?.lastname}
      </H2>
      <h4>Welcome to the start of your journey.</h4>
    </div>
  );
};

export default Tutorial;
