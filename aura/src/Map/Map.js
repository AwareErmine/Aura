import React, { useEffect, useState } from "react";
// import MapContainer from "./MapContainer/MapContainer.js";
import { TreeMarker, RodentMarker, SquirrelMarker } from "./Markers/Markers.js";
import GoogleMapReact, { GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from "axios";

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
  height: 'calc(99% - clamp(14px, 1rem + 2vw, 40px) - 2ch)'
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
        <label>{dataset.name}
          <input type="checkbox"
            onChange={ () => handleCheckboxChange(dataset) }
          />
          <span></span>
        </label>
      )
    })
  }

  return (
    <>
      { MakeCheckBoxes() }
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

// function Map(props) {
//   const [datasets, setDatasets] = useState([]);
//   const [all_points, setAllPoints] = useState([]);
//   const [points, setPoints] = useState([]);
//
//   // const [data, setData] = useState([]);
//
//   // const getData = async (url) => {
//   //   const response = await axios.get(url);
//   //   console.log("DATA", response.data);
//   //   return response.data;
//   // }
//
//   useEffect(() => {
//     const on_datasets = initial_datasets.filter((dataset) => dataset.on);
//     setDatasets(on_datasets);
//   }, [])
//
//   // useEffect(() => {
//   //   const data = datasets.map((dataset) => {
//   //     return {
//   //       name: dataset.name,
//   //       data: getData(dataset.url),
//   //       markers: dataset.markers,
//   //     }
//   //   })
//   //   console.log("nested data", data);
//   //   setData(data)
//   // }, [datasets])
//
//   useEffect(() => {
//     for (var i in datasets) {
//       let entry = datasets[i];
//       entry.markers({
//         url: entry.url
//       })
//         .then( (result) => {
//           console.log("RESULT FROM MARKERS:", result);
//           setPoints(result);
//           console.log("CURRENT POINTS", points);
//         })
//     }
//   }, [datasets])
//
//   useEffect(() => {
//     all_points ? setAllPoints(all_points.concat(points))
//     : setAllPoints(["HEYYYYY"]);
//     console.log("ALL_POINTS", all_points);
//     console.log("POINTS HERE", points);
//   }, [points])
//
//   return (
//     <GoogleMapReact
//         google={props.google}
//         zoom={11}
//         initialCenter={{
//           lat: 40.712742,
//           lng: -74.013382
//         }}
//         containerStyle={containerStyle}
//     >
//       { all_points }
//     </ GoogleMapReact>
//   )
// }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVVFhkeXJQDnELN0Dp62D2dM8kSP-i8H0'
})(Map)
