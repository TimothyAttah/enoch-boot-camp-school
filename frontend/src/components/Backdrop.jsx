import React from 'react';
import styled from 'styled-components';

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
  transition: opacity 0.15s linear;
  z-index: 1044;
`;

const Backdrop = ({ onClick }) => {
  return <BackdropContainer onClick={onClick}></BackdropContainer>;
};

export default Backdrop;
