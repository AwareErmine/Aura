import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from "react";

function MapContainer(props) {
  return (
    <Map
      google={props.google}
      zoom={8}
      // style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176}}
    />
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVVFhkeXJQDnELN0Dp62D2dM8kSP-i8H0'
})(MapContainer);
