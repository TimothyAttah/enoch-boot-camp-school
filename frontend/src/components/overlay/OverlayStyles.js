import styled from 'styled-components';
import { motion } from 'framer-motion';

export const OverlayContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  display: flex;

  @media only screen {
    overflow-y: scroll;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 0px;
  }

  @media only screen and (min-width: 1281px) {
    justify-content: center;
    align-items: center;
  }
`;
