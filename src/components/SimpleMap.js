import React from "react";
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="marker"></div>;

export default function SimpleMap({selectedFlat}){
  var mapLat = selectedFlat.lat
  var mapLng = selectedFlat.lng

  const defaultProps = {
    center: {
      lat: mapLat,
      lng: mapLng
    },
    zoom: 12
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact mapLat={mapLat} mapLng={mapLng}
        bootstrapURLKeys={{ key: "AIzaSyAPoWI9l2ZMOqw2OQj6eaEHHjNr2tIL4jo" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={mapLat}
          lng={mapLng}
        />
      </GoogleMapReact>
    </div>
  );
}
