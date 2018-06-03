import React from 'react'
import L from 'leaflet';
import { Marker } from 'react-leaflet';

export default ({ coords }) => {
  const position = {
    lat: coords[0],
    lng: coords[1],
  };
  const icon = L.icon({
    iconUrl: `${process.env.PUBLIC_URL}/images/brewpin-28-40.png`,
    iconSize: [28, 40],
  });
  return (
    <Marker
      icon={icon}
      position={position}
      alt="Brewery"
    />
  )
}