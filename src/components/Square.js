import React from 'react';
import cn from 'classnames';

export default ({ color, children, onClick, position }) => (
  <div className={cn('square', color)} onClick={() => onClick(children, position)} >
    {children}
  </div>
);