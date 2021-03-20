import React from "react";
import { Marker } from 'google-maps-react';

// const AnyReactComponent = ({ text }) => <div classname="test">{text}</div>;

export function TreeMarker(props) {
  return (
    <Marker key={props.key} id={props.key} position={{
       lat: props.lat,
       lng: props.lng
     }}
     onClick={() => console.log("Hehe that tickles")}
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
