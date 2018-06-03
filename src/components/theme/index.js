import React from 'react';
import Places from '../places';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import routes from '../routes';
import Map from '../map';

export default () => (
  <div>
    <div className="toolbar">
      <Link to="/experiences"> Experiences </Link>
      <Link to="/places"> Places </Link>
      <Link to="/destinations"> Desetinations </Link>
    </div>
    <Map />
    <div className="content">
      {renderRoutes(routes)}
    </div>
  </div>
);