import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import React from 'react';
import { compose } from 'recompose'
import MarkerContainer from './MarkerContainer.js'



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
                      updateIsOpen={props.updateIsOpen}
  									/>)

  return (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={props.newCenter}
      handleError={props.handleError}
    >
    {markers}

    </GoogleMap>
  )
}
)

export default compose(
	withScriptjs,
	withGoogleMap)(MapContainer);
