import React from "react";
import axios from "axios";

import { Marker } from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div classname="test">{text}</div>;

export function TreeMarkers(url) {
  console.log("hiii")
  return (
    <Marker
      position={{
        lat: 40.712742,
        lng: -74.013382
      }}
    />
  )
  // const data = axios.get(url.url)
  //   .then(function(response) {
  //     // console.log(response.data[0]["latitude"])
  //     return response.data.map( (tree) => {
  //       return (
  //         <div
  //           lat={tree["latitude"]}
  //           lng={tree["longitude"]}
  //           key={tree["tree_id"]}
  //         />
  //       )
  //     })
  //   })
  // return data;
  // console.log(data[0]["latitude"]);
}

export function Markers(props) {
  const valid_entries = props.datasets.filter((entry) => entry.on)
  console.log("hello");
  return (
    <Marker
      position={{
        lat: 40.712742,
        lng: -74.013382
      }}
    />
  )
  // return (valid_entries.map((entry) => {
  //   return (
  //     entry.on ? <entry.markers url={entry.url} />
  //     : null
  //   )
  // }))
}
