import React, { Component } from 'react';
import { Marker, InfoWindow  } from "react-google-maps"

class MarkerContainer extends Component  {
    render() {

        return (

      ((!this.props.locationsNotFound)  &&
	   ( <Marker
		position = { this.props.location }
		name = { this.props.name }
		onClick={ this.props.onClick }
		address = { this.props.address }
		selectedLocation = { this.props.selectedLocation }
		animation = { (this.props.selectedLocation === this.props.checkId)  && ( window.google.maps.Animation.BOUNCE )}

	   >

		{ (this.props.selectedLocation === this.props.checkId ) &&
	  	(<InfoWindow 	   	onCloseClick = {() =>

		{alert('Something has to happen here so infowindow can be reopened')}}

		 >
						<div className='info-window'>
								<span className='info-window-name'> { this.props.name || 'Name not found,google it!'}
								</span><br/>
								{ this.props.address  || 'Find the address on Google' }
						</div>
      				</InfoWindow> ) }
            </Marker> ))
        )
    }

}

export default MarkerContainer
