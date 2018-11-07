import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import React from 'react';
import { compose } from 'recompose'
import MarkerContainer from './MarkerContainer.js'

//20.358824,85.83326 Patia

const MapContainer = (props =>{

  const markers = props.locations.map(eachLocation =>
    <MarkerContainer
  										selectedLocation = { props.selectedLocation }
  										location = {{ lat: eachLocation.location.lat, lng: eachLocation.location.lng }}
  										key={eachLocation.id}
  										name = {eachLocation.name}
  										isOpen = {props.isOpen}
  										checkId = { eachLocation.id }
  										locationsNotFound = { props.locationsNotFound }
  										address = { eachLocation.location.formattedAddress}
  										onClick={(event) => props.handleLocationClicks(event, eachLocation.location, eachLocation.id)}

  									/>)
  return (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={props.newCenter}
    >
    {markers}

    </GoogleMap>
  )
}
)

export default compose(
	withScriptjs,
	withGoogleMap)(MapContainer);
//  {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
