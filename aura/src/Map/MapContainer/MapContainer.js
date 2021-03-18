import GoogleMapReact, { GoogleApiWrapper, Marker } from 'google-maps-react';
import React from "react";

const mapStyles = {
  width: '100%',
  height: '750px',
};

function MapContainer(props) {
  return (
    <GoogleMapReact
        google={props.google}
        zoom={props.zoom}
        initialCenter={props.center}
        style={mapStyles}
    >
      <Marker
        position={{
          lat: 40.712742,
          lng: -74.013382
        }}
      />
      {
      // <props.markers
      //   datasets={props.datasets}
      // />
      }
    </ GoogleMapReact>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVVFhkeXJQDnELN0Dp62D2dM8kSP-i8H0'
})(MapContainer)
