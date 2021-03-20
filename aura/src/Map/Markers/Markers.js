import React from "react";
import { Marker } from 'google-maps-react';

import tree from './tree.png';
import rodent from './rodent.png';
import squirrel from './squirrel.png'

export function TreeMarker(datapoint) {
  return (
    <Marker
      key={Math.random().toString()}
      id={datapoint["tree_id"]}
      position={{
        lat: datapoint["latitude"],
        lng: datapoint["longitude"]
      }}
      alt="tree"
      icon={{
        url: tree,
        anchor: new window.google.maps.Point(5, 58),
      }}
      onClick={() => alert(`${datapoint["status"]} ${datapoint["spc_common"]} from ${datapoint["created_at"].substring(0, 4)}`)}
    />
  )
}

export function RodentMarker(datapoint) {
  return (
    <Marker
      key={Math.random().toString()}
      id={datapoint["job_id"]}
      position={{
        lat: datapoint["latitude"],
        lng: datapoint["longitude"]
      }}
      icon={{
        url: rodent,
        anchor: new window.google.maps.Point(5, 58),
      }}
      onClick={() => alert(`Rodent ${datapoint["inspection_type"]} inspection from ${datapoint["inspection_date"].substring(0, 4)} result: ${datapoint["result"]}`)}
     />
  )
}

export function SquirrelMarker(datapoint) {
  return (
    <Marker
      key={Math.random().toString()}
      id={datapoint["tree_id"]}
      position={{
        lat: datapoint["y"],
        lng: datapoint["x"]
      }}
      icon={{
        url: squirrel,
        anchor: new window.google.maps.Point(5, 58),
      }}
      onClick={() => alert(`There was a ${datapoint["combination_of_primary_and"]} squirrel here once in ${datapoint["date"].slice(datapoint["date"].length - 4)}`)}
     />
  )
}

// export function TreeMarkers(props) {
//   // console.log(props.url);
//   // return (
//   //   <Marker
//   //     position={{
//   //       lat: 40.712742,
//   //       lng: -74.013382
//   //     }}
//   //   />
//   // )
//
//   // const markers = axios.get(props.url)
//   //   .then(function(response) {
//   //     return response.data.map( (tree) => {
//   //       return (
//   //         <Marker
//   //           lat={tree["latitude"]}
//   //           lng={tree["longitude"]}
//   //           key={tree["tree_id"]}
//   //         />
//   //       )
//   //     })
//   //   })
//
//   const getData = async (url) => {
//     const response = await axios.get(url);
//     console.log("DATA", response.data);
//     return response.data;
//   }
//   console.log(props.url);
//   const data = getData(props.url);
//   console.log("OUTSIDE DATA", data);
//   const then_data = data.then( (result) => {
//     console.log("INSIDE THEN", result);
//     return (
//       result && result.length ? result.map( (tree) => {
//         return (
//           <Marker
//             lat={tree["latitude"]}
//             lng={tree["longitude"]}
//             key={tree["tree_id"]}
//           />
//         )
//       })
//       : null
//     )
//   })
//   console.log("THEN DATA", then_data);
//   return then_data;
// }

// return this.state.stores.map((store, index) => {
//       return <Marker key={index} id={index} position={{
//        lat: store.latitude,
//        lng: store.longitude
//      }}
//      onClick={() => console.log("You clicked me!")} />
//     })

// export function Markers(props) {
//   const valid_entries = props.datasets.filter((entry) => entry.on)
//   let objs = valid_entries.map((entry) => {
//     return <entry.markers url={entry.url} />
//   });
//   console.log(...objs);
//   return (...objs);
// }
