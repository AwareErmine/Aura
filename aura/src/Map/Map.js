import React, { useEffect, useState } from "react";
// import MapContainer from "./MapContainer/MapContainer.js";
import { TreeMarker, RodentMarker, SquirrelMarker } from "./Markers/Markers.js";
import GoogleMapReact, { GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from "axios";
import "./Map.css"

var initial_datasets = [
  {
    name: "rodents",
    url: "https://data.cityofnewyork.us/resource/p937-wjvj.json",
    on: false,
    marker: RodentMarker,
  },
  {
    name: "trees",
    url: "https://data.cityofnewyork.us/resource/uvpi-gqnh.json",
    on: false,
    marker: TreeMarker,
  },
  {
    name: "squirrels",
    url: "https://data.cityofnewyork.us/resource/vfnx-vebw.json",
    on: false,
    marker: SquirrelMarker,
  }
];

const containerStyle = {
  width: '100%',
  height: 'calc(99% - clamp(14px, 1rem + 2vw, 40px) - 3ch)'
 };

function Map(props) {
  const [datasets, setDatasets] = useState([]);
  const [id, setId] = useState("123");

  const getData = async (url) => {
    const response = await axios.get(url);
    console.log("DATA LENGTH", response.data.length)
    return response.data;
  }

  useEffect(() => {
    for (var i in initial_datasets) {
      let entry = initial_datasets[i];
      let data = getData(entry.url);
      data.then( (result) => {
        entry.data = result;
        setDatasets(initial_datasets);
      })
    }
  }, [])

  useEffect(() => {
    setId(Math.random().toString());
    console.log("SETTING ID");
  }, [datasets])

  function DisplayMarkers() {
    const on_data = datasets.filter( (entry) => entry.on );

    var markers = [];
    for (var i in on_data) {
      let entry = on_data[i];
      markers = markers.concat(
        entry.data ? entry.data.map( (datapoint) => {
          return (
            entry.marker(datapoint)
          )
        })
        : [null]
    )}
    return markers;
  }

  // THE CHECKBOXES
  function handleCheckboxChange(dataset) {
    let index = datasets.indexOf(dataset);
    datasets[index].on = !(dataset.on);
    setDatasets(datasets);
  }

  function MakeCheckBoxes() {
    return datasets.map( (dataset) => {
      return (
        <label className="container">{dataset.name}
          <input type="checkbox"
            onChange={ () => handleCheckboxChange(dataset) }
          />
          <span className="checkmark"></span>
        </label>
      )
    })
  }

  return (
    <>
      <div className="checkboxes">
        { MakeCheckBoxes() }
      </div>
      <GoogleMapReact
          google={props.google}
          zoom={11}
          initialCenter={{
            lat: 40.712742,
            lng: -74.013382
          }}
          containerStyle={containerStyle}
          key={id}
          onClick={() => setId(Math.random().toString())}
      >
        { DisplayMarkers() }
      </ GoogleMapReact>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVVFhkeXJQDnELN0Dp62D2dM8kSP-i8H0'
})(Map)
