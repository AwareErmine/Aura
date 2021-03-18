import React from "react";
import MapContainer from "./MapContainer/MapContainer.js"
import { Markers, TreeMarkers, } from "./Markers/Markers.js"

var datasets = [
  {
    name: "rodents",
    url: "https://data.cityofnewyork.us/resource/p937-wjvj.json",
    on: false,
  },
  {
    name: "trees",
    url: "https://data.cityofnewyork.us/resource/uvpi-gqnh.json",
    on: true,
    markers: TreeMarkers,
  },
  {
    name: "rodents",
    url: "https://data.cityofnewyork.us/resource/vfnx-vebw.json",
    on: false,
  }
]

function Map() {
  return (
    <MapContainer
      center={{
        lat: 40.712742,
        lng: -74.013382
      }}
      zoom={11}
      markers={Markers}
      datasets={datasets}
    />
  )
}

export default Map
