import React from 'react';
import Places from '../places';

export default ({ children }) => (
  <div>
    {children}
    <Places />
  </div>
);