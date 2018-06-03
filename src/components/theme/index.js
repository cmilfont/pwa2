import React from 'react';
import Places from '../places';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import routes from '../routes';

export default ({ children }) => (
  <div>
    <div className="toolbar">
      <Link to="/experiences"> Experiences </Link>
      <Link to="/places"> Places </Link>
    </div>
    {children}
    <div className="content">
      {renderRoutes(routes)}
    </div>
  </div>
);