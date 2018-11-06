import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import React, { Component } from 'react';
import { compose } from 'recompose'

//20.358824,85.83326 Patia

const MapContainer = props =>{
  return (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={props.newCenter}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  )
}

export default compose(
	withScriptjs,
	withGoogleMap)(MapContainer);
