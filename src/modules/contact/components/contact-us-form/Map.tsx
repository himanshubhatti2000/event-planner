'use client';
import React from 'react';
import { Map, Marker,ZoomControl  } from 'pigeon-maps';

const MapComponent = () => {
  return (
    <Map height={400} defaultCenter={[40.7128, -74.006]} defaultZoom={13 }  mouseEvents={false}>
      <Marker width={50} anchor={[40.7128, -74.006]}  />
      <ZoomControl />
    </Map>
  );
};

export default MapComponent;
