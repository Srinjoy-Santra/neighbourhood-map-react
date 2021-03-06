import React, { Component } from 'react';
import logo from './restaurant.svg';
import './App.css';
import MapContainer from './components/MapContainer.js';
import SearchContainer from './components/SearchContainer.js';
import * as FoursquareData from './components/FoursqaureAPIfetch.js';
const pos = {lat:22.550944,lng:88.354012};

class App extends Component {
  state = {
		locations: [],
		locationsToUse: [],
		locationsNotFound: false,
		newCenter:  pos ,
		zoom: 17,
		isOpen: false,
		selectedLocation: {},
		query: ''

	}



  componentDidMount(){
    function handleError(response){
      if(response.ok)
        throw Error(response.statusText);
      return response;
    }

//check whether Google Map has loaded or not
 window.gm_authFailure = function () {
   alert("Sorry, couldn't load Google Maps...");
 }

  //update locations from Foursquare api
  FoursquareData.getAllPlaces().then(handleError)
  .then((locations) => {
    this.setState({
      locations :locations,
      locationsToUse :locations
    })
  }).catch((error) => {
    alert('Error occurred when loading Foursquare data. Unable to display locations')
  })
}


//Handle clicks on locatins
handleLocationClicks = (e, location, id) => {
  if(location !== undefined)
  {
    this.setState({
      newCenter: {lat: location.lat, lng: location.lng},
      zoom: 16,
      isOpen: true,
      selectedLocation: id
    })
  }
}

//updates locations depending on the search
	  updateLocations = (searchResults, query) => {
    if(searchResults) {
      this.setState((state) => ({
          locationsToUse: searchResults,
		  zoom: 14,
		  newCenter: { lat: 51.48, lng: -0.001 },
		  locationsNotFound: false
      }))

	} else  {

		this.setState({
			locationsToUse: this.state.locations,
			locationsNotFound: false
		})


   }

  }

		updateQuery = (query) => {
			this.setState({
			query: query
		})
	}
  updateIsOpen = (status) =>
  {
    this.setState({
      isOpen: status
    })
  }

  render() {
    console.log(this.state.newCenter+this.state.zoom)
    console.log(this.state.locations)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Restaurants in Park Street, Kolkata</h1>


        </header>

        <SearchContainer
   			locations = { this.state.locations }
   			locationsToUse = { this.state.locationsToUse }
   			locationsNotFound = { this.state.locationsNotFound }
   			handleLocationClicks = { this.handleLocationClicks }
   			selectedLocation = { this.state.selectedLocation }
   			onUserSearch= { this.updateLocations }
   		/>
        <MapContainer
        newCenter={this.state.newCenter}
        zoom={this.state.zoom}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDgUWR_b8wrF5e1jOTwQnQ5wrtuwPdZDd0&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `700px` }} />}
        mapElement={<div id="map-container" aria-label="map container" tabIndex="0" role="application" style={{ height: `100%`}} />}
         isMarkerShown={false}
        selectedLocation = { this.state.selectedLocation }
				locations = { this.state.locationsToUse }
				locationsNotFound = { this.state.locationsNotFound }
        isOpen = { this.state.isOpen }
        handleLocationClicks = {this.handleLocationClicks}
        updateIsOpen ={this.updateIsOpen}

         />

      <footer>
      <p>Developed by: Srinjoy Santra</p>
      <p>Contact information: <a href="mailto:srinjoy_s@yahoo.com">
  srinjoy_s@yahoo.com</a>.</p>
  <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
      </footer>
      </div>
    );
  }
}

export default App;
