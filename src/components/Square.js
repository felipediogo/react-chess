import React from 'react';
import cn from 'classnames';

export default ({ color, children }) => (
  <div className={cn('square', color)} >
    {children}
  </div>
);