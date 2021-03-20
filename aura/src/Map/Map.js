import React, { useEffect, useState } from "react";
// import MapContainer from "./MapContainer/MapContainer.js";
import { TreeMarker, } from "./Markers/Markers.js";
import GoogleMapReact, { GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from "axios";

var initial_datasets = [
  {
    name: "rodents",
    url: "https://data.cityofnewyork.us/resource/p937-wjvj.json",
    on: false,
  },
  {
    name: "trees",
    url: "https://data.cityofnewyork.us/resource/uvpi-gqnh.json",
    on: true,
    marker: TreeMarker,
  },
  {
    name: "squirrels",
    url: "https://data.cityofnewyork.us/resource/vfnx-vebw.json",
    on: false,
  }
];

const containerStyle = {
  width: '100%',
  height: 'calc(99% - clamp(14px, 1rem + 2vw, 40px) - 2ch)'
 };

function Map(props) {
  const [datasets, setDatasets] = useState([]);

  const getData = async (url) => {
    const response = await axios.get(url);
    return response.data;
  }

  useEffect(() => {
    for (var i in initial_datasets) {
      let entry = initial_datasets[i];
      let data = getData(entry.url);
      data.then( (result) => {
        entry.data = result;
        console.log("STILL IN THEN", JSON.stringify(entry.data));
      })
      console.log("OUT OF THEN", JSON.stringify(entry.data))
    }
    console.log("DATA AFTER ADDING DATA", initial_datasets[0].data);
    console.log("INITIAL DATASETS", JSON.stringify(initial_datasets));
    console.log("WHAT CHROME SEES AS THE OBJ", initial_datasets)
    setDatasets(initial_datasets);
  }, [])

  function DisplayMarkers() {
    const on_data = datasets.filter( (entry) => entry.on );
    console.log("ON", on_data);

    var markers = [];
    for (var i in on_data) {
      let entry = on_data[i];
      console.log("THE ENTRY", JSON.stringify(entry));
      console.log("ENTRY DATA", entry.data);
      console.log("AFTER RENDER", entry)
      console.log("THERE IS DATA", entry.hasOwnProperty("data"));
      markers = markers.concat(
        entry.data ? entry.data.map( (datapoint) => {
          return (
            entry.marker({
              lat: datapoint["latitude"],
              lng: datapoint["longitude"],
              key: datapoint["tree_id"]
            })
          )
        })
        : [<Marker key="asdfasdf" id="asdfasdf" position={{
           lat: 40.712742,
           lng: -74.013382
         }} />]
    )}
    console.log("RENDERING", markers);
    return markers;
  }

  return (
    <GoogleMapReact
        google={props.google}
        zoom={11}
        initialCenter={{
          lat: 40.712742,
          lng: -74.013382
        }}
        containerStyle={containerStyle}
    >
      { DisplayMarkers() }
    </ GoogleMapReact>
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
