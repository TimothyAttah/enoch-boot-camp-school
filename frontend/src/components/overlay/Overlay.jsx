import React from 'react';
import * as Styles from './OverlayStyles';

export const Overlay = ({ children, close }) => {
  const variants = {
    open: { backgroundColor: 'rgba(0,0,0,0.6)' },
    closed: { backgroundColor: 'rgba(0,0,0,0)' },
  };
  return (
    <Styles.OverlayContainer
      onClick={close}
      variants={variants}
      initial={'closed'}
      exit={'closed'}
      animate={'open'}
      key={'overlay'}
    >
      {children}
    </Styles.OverlayContainer>
  );
};
